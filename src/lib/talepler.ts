/**
 * Görüşme taleplerinin kalıcı kaydı (Node'un yerleşik SQLite'ı, ek bağımlılık yok).
 *
 * - Kayıt diske yazılmadan form başarı göstermez.
 * - Aynı form anahtarı ya da kısa sürede aynı iletişim bilgisi yeni kayıt açmaz.
 * - Genel kimlik (ör. T-7K2M9QXA4B) kişisel bilgi içermez; ölçümde olay kimliği olarak kullanılır.
 * - Bildirim gönderilemese de kayıt durur, bildirim yeniden denenir.
 *
 * Veri klasörü: VERI_KLASORU ortam değişkeni. Tanımlı değilse üretimde ~/satislariartir-veri, geliştirmede ./veri.
 * Yedeklenmeli, depoya girmemeli.
 */
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { createHash, randomInt } from 'node:crypto';
import path from 'node:path';
import os from 'node:os';
import type { TalepGirdisi } from './dogrulama';
import { telefonDuzenle } from './dogrulama';
import { epostaTanimli, talepEpostasiGonder } from './eposta-bildirimi';

export const DURUMLAR = ['yeni', 'ulasildi', 'uygun', 'gorusme', 'teklif', 'kazanildi', 'kapandi'] as const;
export type Durum = (typeof DURUMLAR)[number];
export const DURUM_ETIKETLERI: Record<Durum, string> = {
  yeni: 'Yeni',
  ulasildi: 'Ulaşıldı',
  uygun: 'Uygun',
  gorusme: 'Görüşme',
  teklif: 'Teklif',
  kazanildi: 'Kazanıldı',
  kapandi: 'Kapandı',
};

/** gercek: rapora girer. test: ekibin deneme kaydı. supheli: otomatik doldurma belirtisi. */
export type Tur = 'gercek' | 'test' | 'supheli';

export interface Talep {
  id: number;
  kimlik: string;
  olusturma: string;
  ad: string;
  isletme: string;
  yontem: 'telefon' | 'eposta';
  telefon: string;
  eposta: string;
  kanal: string;
  kampanya_durumu: string;
  mesaj: string;
  adres: string;
  sayfa: string;
  kaynak: string;
  tur: Tur;
  durum: Durum;
  durum_guncelleme: string | null;
  durum_notu: string;
  bildirim: 'bekliyor' | 'gonderildi' | 'tanimsiz' | 'basarisiz';
  bildirim_deneme: number;
  eposta_bildirim: 'tanimsiz' | 'bekliyor' | 'gonderiliyor' | 'gonderildi' | 'basarisiz';
  eposta_deneme: number;
  eposta_son_deneme: string | null;
  eposta_hata: string;
}

// Üretimde varsayılan klasör ev dizinindedir: barındırma her dağıtımda uygulama klasörünü yenilediği için (ör. Hostinger)
// kayıtlar uygulamanın içinde tutulursa her push'ta silinir. Geliştirmede proje içindeki ./veri kullanılır.
const KLASOR = process.env.VERI_KLASORU || (import.meta.env.PROD ? path.join(os.homedir(), 'satislariartir-veri') : path.resolve('veri'));
const TEKRAR_PENCERESI_DK = 10;

const kure = globalThis as unknown as { __saVeritabani?: DatabaseSync };

function baglan(): DatabaseSync {
  if (kure.__saVeritabani) return kure.__saVeritabani;
  mkdirSync(KLASOR, { recursive: true });
  const db = new DatabaseSync(path.join(KLASOR, 'talepler.sqlite'));
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA busy_timeout = 4000;
    CREATE TABLE IF NOT EXISTS talepler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kimlik TEXT NOT NULL UNIQUE,
      istemci_anahtari TEXT UNIQUE,
      ozet_izi TEXT NOT NULL,
      olusturma TEXT NOT NULL,
      ad TEXT NOT NULL,
      isletme TEXT NOT NULL,
      yontem TEXT NOT NULL,
      telefon TEXT NOT NULL DEFAULT '',
      eposta TEXT NOT NULL DEFAULT '',
      kanal TEXT NOT NULL,
      kampanya_durumu TEXT NOT NULL DEFAULT '',
      mesaj TEXT NOT NULL DEFAULT '',
      adres TEXT NOT NULL DEFAULT '',
      sayfa TEXT NOT NULL DEFAULT '',
      kaynak TEXT NOT NULL DEFAULT '{}',
      tur TEXT NOT NULL DEFAULT 'gercek',
      durum TEXT NOT NULL DEFAULT 'yeni',
      durum_guncelleme TEXT,
      durum_notu TEXT NOT NULL DEFAULT '',
      bildirim TEXT NOT NULL DEFAULT 'bekliyor',
      bildirim_deneme INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX IF NOT EXISTS talepler_ozet ON talepler (ozet_izi, olusturma);
    CREATE TABLE IF NOT EXISTS durum_gecmisi (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      talep_id INTEGER NOT NULL REFERENCES talepler(id),
      durum TEXT NOT NULL,
      zaman TEXT NOT NULL,
      aciklama TEXT NOT NULL DEFAULT ''
    );
  `);
  sutunlariTamamla(db);
  kure.__saVeritabani = db;
  return db;
}

/** Var olan veritabanına e-posta bildirimi sütunlarını ekler. Eski kayıtlar için geriye dönük e-posta gönderilmez. */
function sutunlariTamamla(db: DatabaseSync) {
  const mevcut = new Set((db.prepare('PRAGMA table_info(talepler)').all() as unknown as { name: string }[]).map((s) => s.name));
  const eklenecek: [string, string][] = [
    ['eposta_bildirim', `TEXT NOT NULL DEFAULT 'tanimsiz'`],
    ['eposta_deneme', 'INTEGER NOT NULL DEFAULT 0'],
    ['eposta_son_deneme', 'TEXT'],
    ['eposta_hata', `TEXT NOT NULL DEFAULT ''`],
  ];
  for (const [ad, tanim] of eklenecek) {
    if (mevcut.has(ad)) continue;
    try {
      db.exec(`ALTER TABLE talepler ADD COLUMN ${ad} ${tanim}`);
    } catch (hata) {
      // Aynı anda açılan başka bir süreç sütunu eklemiş olabilir.
      if (!(hata instanceof Error && hata.message.includes('duplicate column'))) throw hata;
    }
  }
}

const ALFABE = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const kimlikUret = () => `T-${Array.from({ length: 10 }, () => ALFABE[randomInt(ALFABE.length)]).join('')}`;

const ozetIzi = (g: TalepGirdisi) =>
  createHash('sha256')
    .update(
      `${g.isletme.toLocaleLowerCase('tr-TR')}|${g.yontem === 'telefon' ? (telefonDuzenle(g.telefon) ?? g.telefon) : g.eposta}`,
    )
    .digest('hex');

export interface KayitSonucu {
  kimlik: string;
  /** false ise bu istek var olan bir kaydın tekrarıdır; yeni talep ve yeni dönüşüm doğmaz. */
  yeni: boolean;
  tur: Tur;
}

export function talepKaydet(
  g: TalepGirdisi,
  ek: { istemciAnahtari: string; sayfa: string; kaynak: string; tur: Tur },
): KayitSonucu {
  const db = baglan();
  const iz = ozetIzi(g);
  const anahtar = /^[\w-]{8,64}$/.test(ek.istemciAnahtari) ? ek.istemciAnahtari : null;

  db.exec('BEGIN IMMEDIATE');
  try {
    if (anahtar) {
      const var1 = db.prepare('SELECT kimlik, tur FROM talepler WHERE istemci_anahtari = ?').get(anahtar) as
        | { kimlik: string; tur: Tur }
        | undefined;
      if (var1) {
        db.exec('COMMIT');
        return { kimlik: var1.kimlik, yeni: false, tur: var1.tur };
      }
    }
    const esik = new Date(Date.now() - TEKRAR_PENCERESI_DK * 60_000).toISOString();
    const var2 = db
      .prepare('SELECT kimlik, tur FROM talepler WHERE ozet_izi = ? AND olusturma > ? ORDER BY id DESC LIMIT 1')
      .get(iz, esik) as { kimlik: string; tur: Tur } | undefined;
    if (var2) {
      db.exec('COMMIT');
      return { kimlik: var2.kimlik, yeni: false, tur: var2.tur };
    }

    const kimlik = kimlikUret();
    const simdi = new Date().toISOString();
    const sonuc = db
      .prepare(
        `INSERT INTO talepler (kimlik, istemci_anahtari, ozet_izi, olusturma, ad, isletme, yontem, telefon, eposta,
           kanal, kampanya_durumu, mesaj, adres, sayfa, kaynak, tur, bildirim, eposta_bildirim)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        kimlik,
        anahtar,
        iz,
        simdi,
        g.ad,
        g.isletme,
        g.yontem,
        g.yontem === 'telefon' ? (telefonDuzenle(g.telefon) ?? g.telefon) : '',
        g.eposta,
        g.kanal,
        g.kampanya_durumu,
        g.mesaj,
        g.adres,
        ek.sayfa.slice(0, 200),
        ek.kaynak.slice(0, 2000),
        ek.tur,
        process.env.BILDIRIM_WEBHOOK_URL ? 'bekliyor' : 'tanimsiz',
        epostaTanimli() ? 'bekliyor' : 'tanimsiz',
      );
    db.prepare('INSERT INTO durum_gecmisi (talep_id, durum, zaman, aciklama) VALUES (?, ?, ?, ?)').run(
      Number(sonuc.lastInsertRowid),
      'yeni',
      simdi,
      'Form kaydı',
    );
    db.exec('COMMIT');
    return { kimlik, yeni: true, tur: ek.tur };
  } catch (hata) {
    db.exec('ROLLBACK');
    throw hata;
  }
}

export function talepBul(kimlik: string): Talep | undefined {
  if (!/^T-[0-9A-Z]{10}$/.test(kimlik)) return undefined;
  return baglan().prepare('SELECT * FROM talepler WHERE kimlik = ?').get(kimlik) as Talep | undefined;
}

export function talepleriListele(suzgec: { tur?: Tur | 'hepsi'; durum?: Durum | 'hepsi' } = {}): Talep[] {
  const kosul: string[] = [];
  const deger: string[] = [];
  if (suzgec.tur && suzgec.tur !== 'hepsi') {
    kosul.push('tur = ?');
    deger.push(suzgec.tur);
  }
  if (suzgec.durum && suzgec.durum !== 'hepsi') {
    kosul.push('durum = ?');
    deger.push(suzgec.durum);
  }
  const nerede = kosul.length ? `WHERE ${kosul.join(' AND ')}` : '';
  return baglan()
    .prepare(`SELECT * FROM talepler ${nerede} ORDER BY id DESC LIMIT 500`)
    .all(...deger) as unknown as Talep[];
}

export function durumGuncelle(id: number, durum: Durum, aciklama: string, tur?: Tur) {
  if (!DURUMLAR.includes(durum)) throw new Error('Geçersiz durum');
  const db = baglan();
  const simdi = new Date().toISOString();
  const not = aciklama.trim().slice(0, 500);
  db.exec('BEGIN IMMEDIATE');
  try {
    const onceki = db.prepare('SELECT durum FROM talepler WHERE id = ?').get(id) as { durum: Durum } | undefined;
    if (!onceki) throw new Error('Talep bulunamadı');
    db.prepare('UPDATE talepler SET durum = ?, durum_guncelleme = ?, durum_notu = ? WHERE id = ?').run(durum, simdi, not, id);
    if (tur) db.prepare('UPDATE talepler SET tur = ? WHERE id = ?').run(tur, id);
    if (onceki.durum !== durum || not)
      db.prepare('INSERT INTO durum_gecmisi (talep_id, durum, zaman, aciklama) VALUES (?, ?, ?, ?)').run(id, durum, simdi, not);
    db.exec('COMMIT');
  } catch (hata) {
    db.exec('ROLLBACK');
    throw hata;
  }
}

export function ozetSayilar() {
  const satirlar = baglan()
    .prepare(`SELECT durum, COUNT(*) AS adet FROM talepler WHERE tur = 'gercek' GROUP BY durum`)
    .all() as unknown as { durum: Durum; adet: number }[];
  return Object.fromEntries(DURUMLAR.map((d) => [d, satirlar.find((s) => s.durum === d)?.adet ?? 0])) as Record<Durum, number>;
}

/* ---- Bildirim -------------------------------------------------------------------- */

const AZAMI_DENEME = 12;
const TAKILMA_SURESI_DK = 5;

async function bildirimGonder(t: Talep): Promise<boolean> {
  const url = process.env.BILDIRIM_WEBHOOK_URL;
  if (!url) return false;
  try {
    const yanit = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        olay: 'yeni_talep',
        kimlik: t.kimlik,
        olusturma: t.olusturma,
        ad: t.ad,
        isletme: t.isletme,
        yontem: t.yontem,
        iletisim: t.yontem === 'telefon' ? t.telefon : t.eposta,
        kanal: t.kanal,
        kampanya_durumu: t.kampanya_durumu,
        mesaj: t.mesaj,
        adres: t.adres,
        sayfa: t.sayfa,
        tur: t.tur,
      }),
    });
    return yanit.ok;
  } catch {
    return false;
  }
}

async function webhooklariIsle() {
  if (!process.env.BILDIRIM_WEBHOOK_URL) return;
  const db = baglan();
  const bekleyen = db
    .prepare(`SELECT * FROM talepler WHERE bildirim = 'bekliyor' AND bildirim_deneme < ? ORDER BY id LIMIT 20`)
    .all(AZAMI_DENEME) as unknown as Talep[];
  for (const t of bekleyen) {
    const tamam = await bildirimGonder(t);
    const deneme = t.bildirim_deneme + 1;
    db.prepare('UPDATE talepler SET bildirim = ?, bildirim_deneme = ? WHERE id = ?').run(
      tamam ? 'gonderildi' : deneme >= AZAMI_DENEME ? 'basarisiz' : 'bekliyor',
      deneme,
      t.id,
    );
  }
}

async function epostalariIsle() {
  if (!epostaTanimli()) return;
  const db = baglan();

  // Gönderim sırasında süreç kapandıysa kayıt "gonderiliyor"da kalmış olabilir: yeniden sıraya alınır.
  const esik = new Date(Date.now() - TAKILMA_SURESI_DK * 60_000).toISOString();
  db.prepare(
    `UPDATE talepler SET eposta_bildirim = CASE WHEN eposta_deneme >= ? THEN 'basarisiz' ELSE 'bekliyor' END
     WHERE eposta_bildirim = 'gonderiliyor' AND eposta_son_deneme < ?`,
  ).run(AZAMI_DENEME, esik);

  const bekleyen = db
    .prepare(`SELECT * FROM talepler WHERE eposta_bildirim = 'bekliyor' AND eposta_deneme < ? ORDER BY id LIMIT 20`)
    .all(AZAMI_DENEME) as unknown as Talep[];

  for (const t of bekleyen) {
    // Kayıt önce üzerine alınır: aynı anda çalışan başka bir tur aynı e-postayı ikinci kez göndermez.
    const alindi = db
      .prepare(
        `UPDATE talepler SET eposta_bildirim = 'gonderiliyor', eposta_deneme = eposta_deneme + 1, eposta_son_deneme = ?
         WHERE id = ? AND eposta_bildirim = 'bekliyor'`,
      )
      .run(new Date().toISOString(), t.id);
    if (alindi.changes !== 1) continue;

    const sonuc = await talepEpostasiGonder(t);
    const deneme = t.eposta_deneme + 1;
    db.prepare('UPDATE talepler SET eposta_bildirim = ?, eposta_hata = ? WHERE id = ?').run(
      sonuc.tamam ? 'gonderildi' : deneme >= AZAMI_DENEME ? 'basarisiz' : 'bekliyor',
      sonuc.tamam ? '' : sonuc.kod,
      t.id,
    );
    // Şifre ya da bağlantı sorunu bütün kayıtları etkiler; aynı hatayla sunucuyu yormamak için tur burada biter.
    if (!sonuc.tamam && sonuc.altyapi) break;
  }
}

/** Bekleyen bildirimleri dener. Kayıt, bildirimin sonucundan bağımsız olarak korunur. */
export async function bildirimleriIsle() {
  const sonuclar = await Promise.allSettled([webhooklariIsle(), epostalariIsle()]);
  for (const s of sonuclar) {
    if (s.status === 'rejected') console.error('[talep] bildirim hatası', s.reason instanceof Error ? s.reason.message : s.reason);
  }
}

const zamanlayici = globalThis as unknown as { __saBildirimZamanlayici?: NodeJS.Timeout };
if (!zamanlayici.__saBildirimZamanlayici && (process.env.BILDIRIM_WEBHOOK_URL || epostaTanimli())) {
  zamanlayici.__saBildirimZamanlayici = setInterval(() => void bildirimleriIsle().catch(() => {}), 5 * 60_000);
  zamanlayici.__saBildirimZamanlayici.unref?.();
}

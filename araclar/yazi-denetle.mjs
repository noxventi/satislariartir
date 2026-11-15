// Blog yazısı denetimi: ön bilgi şemaya uyuyor mu, kapak dosyası var mı, yazım kuralları tutuyor mu, yazı yeterince görselli mi?
// Kullanım: node araclar/yazi-denetle.mjs <dosya-adı> [<dosya-adı> ...]   (uzantısız; boş bırakılırsa bütün yazılar)
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';

const KLASOR = 'src/content/rehberler';
const adlar = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync(KLASOR).filter((d) => d.endsWith('.mdx')).map((d) => d.replace(/\.mdx$/, ''));
const hepsi = new Set(readdirSync(KLASOR).map((d) => d.replace(/\.mdx$/, '')));
const HIZMET = ['google-ads', 'meta', 'seo', 'geo', 'web', 'genel'];
const PARCALAR = ['SonucSayfasi', 'Akis', 'AraGorsel', 'Sahne', 'Terimler', 'Karsilastirma', 'AdimListesi', 'AramaKutulari', 'Not', 'Ornek', 'KontrolListesi', 'CalismaTablosu'];
let toplamSorun = 0;

for (const ad of adlar) {
  const yol = `${KLASOR}/${ad}.mdx`;
  const sorunlar = [];
  const uyarilar = [];
  if (!existsSync(yol)) {
    console.log(`\n${ad}: DOSYA YOK (${yol})`);
    toplamSorun++;
    continue;
  }
  const ham = readFileSync(yol, 'utf8');
  const m = ham.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) {
    console.log(`\n${ad}: ön bilgi bloğu bulunamadı`);
    toplamSorun++;
    continue;
  }
  let d;
  try {
    d = parse(m[1]);
  } catch (e) {
    console.log(`\n${ad}: ÖN BİLGİ OKUNAMADI: ${e.message.split('\n')[0]} (iki nokta içeren değerleri çift tırnağa alın)`);
    toplamSorun++;
    continue;
  }
  const govde = m[2];
  const gerekli = ['no', 'soru', 'baslik', 'aciklama', 'kisaCevap', 'elinizeGecen', 'hizmetler', 'hizmetBaglantisi', 'yayinTarihi', 'sonKontrol', 'durum', 'okumaDk'];
  for (const a of gerekli) if (d[a] === undefined || d[a] === null || d[a] === '') sorunlar.push(`eksik alan: ${a}`);
  if (typeof d.aciklama === 'string' && d.aciklama.trim().length > 170) sorunlar.push(`aciklama ${d.aciklama.trim().length} karakter (en çok 170)`);
  if (typeof d.aciklama === 'string' && d.aciklama.trim().length < 110) uyarilar.push(`aciklama kısa (${d.aciklama.trim().length} karakter)`);
  if (typeof d.baslik === 'string' && d.baslik.length > 46) uyarilar.push(`baslik ${d.baslik.length} karakter; " | Satışları Artır" ile 60'ı aşıyor`);
  if (!Array.isArray(d.hizmetler) || !d.hizmetler.length || d.hizmetler.some((h) => !HIZMET.includes(h))) sorunlar.push('hizmetler geçersiz');
  if (!d.hizmetBaglantisi?.etiket || !d.hizmetBaglantisi?.url) sorunlar.push('hizmetBaglantisi eksik');
  if (!['taslak', 'inceleme', 'yayinda'].includes(d.durum)) sorunlar.push('durum geçersiz');
  if (!Number.isInteger(d.okumaDk) || d.okumaDk < 1) sorunlar.push('okumaDk tam sayı olmalı');
  if (!d.kapak) sorunlar.push('kapak yok');
  else if (!existsSync(`src/assets/blog/${d.kapak}.jpg`)) sorunlar.push(`kapak dosyası yok: src/assets/blog/${d.kapak}.jpg`);
  if (d.kapak && !d.kapakAlt) sorunlar.push('kapakAlt yok');
  if (!Array.isArray(d.aramalar) || d.aramalar.length < 2 || d.aramalar.length > 4) sorunlar.push('aramalar: 2 ile 4 ifade olmalı');
  if (d.sonraki && !hepsi.has(d.sonraki)) uyarilar.push(`sonraki yazı henüz yok: ${d.sonraki}`);
  const kaynaklar = Array.isArray(d.kaynaklar) ? d.kaynaklar : [];
  if (kaynaklar.length < 2) sorunlar.push(`kaynak sayısı ${kaynaklar.length} (en az 2 resmî kaynak)`);
  for (const k of kaynaklar) {
    if (!k.ad || !/^https:\/\//.test(k.url || '') || !['resmi', 'topluluk', 'ornek'].includes(k.tur)) sorunlar.push(`kaynak hatalı: ${JSON.stringify(k).slice(0, 90)}`);
  }

  // Yazım kuralları: görünür metin ve ön bilgi.
  const metin = `${m[1]}\n${govde}`.replace(/^import .*$/gm, '');
  if (/[—–]/.test(metin)) sorunlar.push('uzun tire (— ya da –) var');
  const duzKesme = metin.replace(/https?:\/\/\S+/g, '').match(/[A-Za-zÇĞİÖŞÜçğıöşü]'[A-Za-zÇĞİÖŞÜçğıöşü]/g);
  if (duzKesme) sorunlar.push(`düz kesme işareti (') var: ${[...new Set(duzKesme)].slice(0, 4).join(' ')} (’ kullanın)`);
  if (/Obrandy/i.test(metin)) sorunlar.push('Obrandy adı geçiyor');
  // Tek istisna: fiyatlar yazısı kaynaklı piyasa aralıkları verir (marka sahibinin kararı, 15 Kasım 2026). Kendi fiyatımız hiçbir yerde yazılmaz.
  const FIYAT_ISTISNASI = new Set(['web-sitesi-fiyatlari']);
  if (!FIYAT_ISTISNASI.has(ad) && /\b\d[\d.]*\s?(TL|₺|lira)\b/i.test(metin)) sorunlar.push('TL tutarı var (fiyat ve bütçe rakamı yasak)');
  if (/ücretsiz analiz|garanti ediyoruz|garantili|1\. sıra garantisi/i.test(metin)) sorunlar.push('yasak vaat ifadesi var');
  if (/^# /m.test(govde)) sorunlar.push('gövdede H1 (#) var; H1 ön bilgideki sorudur');

  // Yapı: ara başlıklar, uzunluk, görsel parçalar.
  const h2 = (govde.match(/^## /gm) || []).length;
  if (h2 < 4 || h2 > 7) sorunlar.push(`H2 sayısı ${h2} (4 ile 7 arası olmalı)`);
  const duz = govde
    .replace(/^import .*$/gm, '')
    .replace(/\{[\s\S]*?\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`\[\]()]/g, ' ');
  const kelime = duz.split(/\s+/).filter((k) => /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(k)).length;
  if (kelime < 650) sorunlar.push(`gövde ${kelime} kelime (çok kısa)`);
  const kullanilan = PARCALAR.filter((p) => new RegExp(`<${p}[\\s>]`).test(govde));
  const adet = PARCALAR.reduce((t, p) => t + (govde.match(new RegExp(`<${p}[\\s>]`, 'g')) || []).length, 0);
  if (adet < 4) sorunlar.push(`görsel parça sayısı ${adet} (en az 4)`);
  if (kullanilan.length < 3) sorunlar.push(`görsel parça türü ${kullanilan.length} (en az 3 farklı tür)`);
  for (const p of kullanilan) if (!new RegExp(`^import ${p} from `, 'm').test(govde)) sorunlar.push(`${p} kullanılıyor ama içe aktarılmamış`);
  // Arka arkaya gelen düz paragraflar: görsel ya da liste olmadan en çok dört paragraf.
  let seri = 0, enUzun = 0;
  for (const blok of govde.replace(/^import .*$/gm, '').split(/\r?\n\s*\r?\n/)) {
    const b = blok.trim();
    if (!b) continue;
    if (/^[A-Za-zÇĞİÖŞÜçğıöşü“”"’*\[]/.test(b) && !b.startsWith('- ') && !b.startsWith('<')) { seri++; enUzun = Math.max(enUzun, seri); } else if (!/^#{2,3} /.test(b)) seri = 0;
  }
  if (enUzun > 4) uyarilar.push(`art arda ${enUzun} düz paragraf var (araya liste ya da görsel parça koyun)`);
  const icBag = (govde.match(/\]\(\/(blog|hizmetler|sektorler|calismalarimiz|hakkimizda|iletisim)\//g) || []).length;
  if (icBag < 3) sorunlar.push(`iç bağlantı sayısı ${icBag} (en az 3)`);

  toplamSorun += sorunlar.length;
  console.log(`\n${ad}: ${kelime} kelime, ${h2} H2, ${adet} görsel parça (${kullanilan.join(', ')}), ${kaynaklar.length} kaynak, ${icBag} iç bağlantı`);
  for (const s of sorunlar) console.log(`  SORUN  ${s}`);
  for (const u of uyarilar) console.log(`  uyarı  ${u}`);
  if (!sorunlar.length && !uyarilar.length) console.log('  temiz');
}
console.log(toplamSorun ? `\n${toplamSorun} sorun var.` : '\nSorun bulunmadı.');
process.exitCode = toplamSorun ? 1 : 0;

/**
 * Başvuru kalitesi çalışma tablosunun ortak mantığı.
 * Hem sunucuda (betik yokken okunan ilk özet) hem tarayıcıda (canlı özet) aynı işlevler çalışır.
 * Hiçbir veri sunucuya ya da ölçüm katmanına gönderilmez.
 */

export const ASAMALAR = [
  { kimlik: 'ulasildi', ad: 'Ulaşıldı', kisa: 'Ulaşıldı', tanim: 'Yanıtınıza karşılık verdi ya da telefonu açtı.' },
  { kimlik: 'uygun', ad: 'Hizmete uygun', kisa: 'Uygun', tanim: 'Hizmet bölgenizde ve yaptığınız bir işi istiyor.' },
  { kimlik: 'gorusme', ad: 'Görüşme', kisa: 'Görüşme', tanim: 'Keşif, toplantı ya da ayrıntılı bir telefon görüşmesi yapıldı.' },
  { kimlik: 'teklif', ad: 'Teklif', kisa: 'Teklif', tanim: 'Yazılı ya da sözlü teklif verildi.' },
] as const;

export interface Satir {
  id: string;
  /** Kişi adı içermeyen durum cümlesi. */
  not: string;
  /** Başvurunun ulaştığı son aşama: 0 (hiçbiri) ile 4 (teklif) arası. */
  seviye: number;
  /** Sitenin hazır getirdiği temsili satır mı? */
  ornek?: boolean;
}

export const AZAMI_SATIR = 40;
export const AZAMI_NOT = 90;

/** Temsili satırlar: havuz yenileme yapan bir işletmenin Instagram reklamından gelen sekiz mesaj. */
export const ORNEK_SATIRLAR: Satir[] = [
  { id: 'o1', not: 'Keşif istedi, aynı gün arandı, keşif yapıldı, teklif gönderildi.', seviye: 4, ornek: true },
  { id: 'o2', not: 'Hizmet verilmeyen bir şehirden yazdı, fiyat sordu.', seviye: 1, ornek: true },
  { id: 'o3', not: '“Bilgi alabilir miyim?” yazdı, yanıt verildi, dönüş yapmadı.', seviye: 0, ornek: true },
  { id: 'o4', not: 'Seramik yenileme sordu, ölçü ve fotoğraf gönderdi, keşif günü bekliyor.', seviye: 2, ornek: true },
  { id: 'o5', not: 'Keşif istedi, iki kez arandı, açmadı.', seviye: 0, ornek: true },
  { id: 'o6', not: 'İş başvurusu yapmak için yazdı.', seviye: 1, ornek: true },
  { id: 'o7', not: 'Havuzunu yenilemek istiyor, telefonda görüşüldü, kararını sezon öncesine bıraktı.', seviye: 3, ornek: true },
  { id: 'o8', not: 'Gece yazdı, ertesi gün öğlen yanıtlandı, cevap gelmedi.', seviye: 0, ornek: true },
];

/** [toplam, ulaşıldı, uygun, görüşme, teklif] */
export function say(satirlar: Pick<Satir, 'seviye'>[]): number[] {
  return [satirlar.length, ...ASAMALAR.map((_, i) => satirlar.filter((s) => s.seviye >= i + 1).length)];
}

/* ---- Türkçe sayı ekleri: 6'sına, 4'ü, 2'siyle ------------------------------ */

type EkTuru = 'e' | 'yalin' | 'ile';
// Sayının son okunan sözcüğüne göre: [yönelme, yalın iyelik, birliktelik]
const EKLER: Record<string, [string, string, string]> = {
  sıfır: ['ına', 'ı', 'ıyla'],
  bir: ['ine', 'i', 'iyle'],
  iki: ['sine', 'si', 'siyle'],
  üç: ['üne', 'ü', 'üyle'],
  dört: ['üne', 'ü', 'üyle'],
  beş: ['ine', 'i', 'iyle'],
  altı: ['sına', 'sı', 'sıyla'],
  yedi: ['sine', 'si', 'siyle'],
  sekiz: ['ine', 'i', 'iyle'],
  dokuz: ['una', 'u', 'uyla'],
  on: ['una', 'u', 'uyla'],
  yirmi: ['sine', 'si', 'siyle'],
  otuz: ['una', 'u', 'uyla'],
  kırk: ['ına', 'ı', 'ıyla'],
  elli: ['sine', 'si', 'siyle'],
  altmış: ['ına', 'ı', 'ıyla'],
  yetmiş: ['ine', 'i', 'iyle'],
  seksen: ['ine', 'i', 'iyle'],
  doksan: ['ına', 'ı', 'ıyla'],
  yüz: ['üne', 'ü', 'üyle'],
};
const BIRLER = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
const ONLAR = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];

function sonSozcuk(n: number): string {
  if (n === 0) return 'sıfır';
  if (n % 100 === 0) return 'yüz';
  if (n % 10 === 0) return ONLAR[(n % 100) / 10];
  return BIRLER[n % 10];
}

export function ekli(n: number, tur: EkTuru): string {
  const ek = EKLER[sonSozcuk(n)][tur === 'e' ? 0 : tur === 'yalin' ? 1 : 2];
  return `${n}’${ek}`;
}

/** "8 başvurudan 5’ine ulaşıldı, 3’ü hizmete uygun, 2’siyle görüşüldü, 1’ine teklif verildi." */
export function cumle(sayim: number[]): string {
  const [toplam, ulasildi, uygun, gorusme, teklif] = sayim;
  if (toplam === 0) return 'Tabloda başvuru yok. İlk satırınızı ekleyin ya da örnek satırlara dönün.';
  const parcalar = [
    ulasildi === 0 ? 'hiçbirine ulaşılamadı' : `${ekli(ulasildi, 'e')} ulaşıldı`,
    uygun === 0 ? 'hiçbiri hizmete uygun görünmüyor' : `${ekli(uygun, 'yalin')} hizmete uygun`,
    gorusme === 0 ? 'hiçbiriyle görüşülmedi' : `${ekli(gorusme, 'ile')} görüşüldü`,
    teklif === 0 ? 'hiçbirine teklif verilmedi' : `${ekli(teklif, 'e')} teklif verildi`,
  ];
  return `${toplam} başvurudan ${parcalar.join(', ')}.`;
}

export interface Yorum {
  /** En büyük kaybın yaşandığı aşama: 1 (ulaşıldı) ile 4 (teklif) arası, kayıp yoksa 0. */
  asama: number;
  baslik: string;
  metin: string;
}

/** En büyük kaybın hangi aşamada olduğunu ve orada neye bakılacağını söyler. Eşitlikte ilk aşama seçilir. */
export function yorum(sayim: number[]): Yorum {
  const [toplam] = sayim;
  if (toplam === 0) return { asama: 0, baslik: '', metin: '' };
  let asama = 0;
  let enBuyuk = 0;
  for (let i = 1; i <= 4; i++) {
    const kayip = sayim[i - 1] - sayim[i];
    if (kayip > enBuyuk) {
      enBuyuk = kayip;
      asama = i;
    }
  }
  const n = enBuyuk;
  switch (asama) {
    case 1:
      return {
        asama,
        baslik: 'En büyük kayıp ilk adımda.',
        metin: `${n} başvuruya ulaşılamadı. Mesajların ne kadar sürede yanıtlandığına ve mesai dışında yazanlara kimin döndüğüne bakın.`,
      };
    case 2:
      return {
        asama,
        baslik: 'En büyük kayıp uygunlukta.',
        metin: `Ulaşılan ${n} başvuru hizmete uygun değildi. Reklamın metni ve görseli hizmet bölgenizi ve yaptığınız işi açıkça söylüyor mu?`,
      };
    case 3:
      return {
        asama,
        baslik: 'En büyük kayıp görüşmeden önce.',
        metin: `Uygun ${n} başvuru görüşmeye geçmedi. İlk yanıtınız bir sonraki adımı söylüyor mu, yanıtsız kalanlar ikinci kez arandı mı?`,
      };
    case 4:
      return {
        asama,
        baslik: 'En büyük kayıp görüşmeden sonra.',
        metin: `Görüşülen ${n} başvuruya teklif verilmedi. Burası reklamdan çok satış sürecinin konusu. Görüşme notlarını açın.`,
      };
    default:
      return {
        asama: 0,
        baslik: 'Bu tabloda kayıp görünmüyor.',
        metin: 'Bütün başvurular teklife kadar gitmiş. Daha uzun bir dönemin başvurularını ekleyerek yeniden bakın.',
      };
  }
}

/** Notta telefon numarası ya da e-posta adresi gibi görünen bir parça var mı? */
export function kisiselBilgiVar(not: string): boolean {
  if (/[^\s@]+@[^\s@]+\.[^\s@]{2,}/.test(not)) return true;
  const rakamlar = not.replace(/[^\d]/g, '');
  return rakamlar.length >= 9 && /(\d[\s().-]?){9,}/.test(not);
}

export function csvUret(satirlar: Satir[]): string {
  const kacis = (s: string) => `"${s.replace(/"/g, '""')}"`;
  const baslik = ['Başvuru', ...ASAMALAR.map((a) => a.ad)].map(kacis).join(';');
  const govde = satirlar.map((s) => [kacis(s.not), ...ASAMALAR.map((_, i) => (s.seviye >= i + 1 ? 'Evet' : 'Hayır'))].join(';'));
  // BOM: Excel Türkçe karakterleri doğru açsın. Ayraç noktalı virgül: Türkçe bölge ayarıyla uyumlu.
  return `﻿${[baslik, ...govde].join('\r\n')}\r\n`;
}

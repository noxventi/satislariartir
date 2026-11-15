/**
 * Görüşme talebi doğrulaması. Tarayıcı ve sunucu aynı kuralları, aynı Türkçe
 * hata metinlerini kullanır. Sunucu doğrulaması her zaman çalışır.
 */

export const KANAL_DEGERLERI = ['google-ads', 'meta', 'seo', 'geo', 'web', 'belirsiz'] as const;

export interface TalepGirdisi {
  ad: string;
  isletme: string;
  yontem: 'telefon' | 'eposta';
  telefon: string;
  eposta: string;
  kanal: (typeof KANAL_DEGERLERI)[number];
  kampanya_durumu: 'new' | 'existing' | '';
  mesaj: string;
  adres: string;
}

export type AlanAdi = 'ad' | 'isletme' | 'telefon' | 'eposta';
export type HataTuru = 'bos' | 'bicim';
export type Hatalar = Partial<Record<AlanAdi, { tur: HataTuru; mesaj: string }>>;

const kirp = (v: unknown, azami: number) =>
  String(v ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, azami);

export function temizle(ham: Record<string, unknown>): TalepGirdisi {
  const yontem = ham.yontem === 'eposta' ? 'eposta' : 'telefon';
  const kanal = KANAL_DEGERLERI.includes(ham.kanal as never) ? (ham.kanal as TalepGirdisi['kanal']) : 'belirsiz';
  const durum = ham.kampanya_durumu === 'new' || ham.kampanya_durumu === 'existing' ? ham.kampanya_durumu : '';
  return {
    ad: kirp(ham.ad, 80),
    isletme: kirp(ham.isletme, 120),
    yontem,
    // Yalnız seçilen yöntemin bilgisi saklanır.
    telefon: yontem === 'telefon' ? kirp(ham.telefon, 24) : '',
    eposta: yontem === 'eposta' ? kirp(ham.eposta, 160).toLowerCase() : '',
    kanal,
    kampanya_durumu: durum,
    mesaj: kirp(ham.mesaj, 1200),
    adres: kirp(ham.adres, 200),
  };
}

/** Türkiye numarasını 905xxxxxxxxx biçimine indirger. Yurt dışı numaralar olduğu gibi kabul edilir. */
export function telefonDuzenle(deger: string): string | null {
  const rakam = deger.replace(/[^\d+]/g, '');
  const yalin = rakam.replace(/^\+/, '').replace(/^00/, '');
  if (/^90\d{10}$/.test(yalin)) return yalin;
  if (/^0\d{10}$/.test(yalin)) return `9${yalin}`;
  if (/^[2-5]\d{9}$/.test(yalin)) return `90${yalin}`;
  if (rakam.startsWith('+') && /^\d{8,15}$/.test(yalin)) return yalin;
  return null;
}

const EPOSTA = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function dogrula(t: TalepGirdisi): Hatalar {
  const h: Hatalar = {};
  if (t.ad.length < 2) h.ad = { tur: 'bos', mesaj: 'Size nasıl hitap edeceğimizi yazın.' };
  if (t.isletme.length < 2) h.isletme = { tur: 'bos', mesaj: 'İşletmenizin adını yazın.' };
  if (t.yontem === 'telefon') {
    if (!t.telefon) h.telefon = { tur: 'bos', mesaj: 'Sizi arayabileceğimiz bir telefon numarası yazın.' };
    else if (!telefonDuzenle(t.telefon))
      h.telefon = { tur: 'bicim', mesaj: 'Numarayı alan koduyla birlikte yazın. Örnek: 0532 123 45 67' };
  } else {
    if (!t.eposta) h.eposta = { tur: 'bos', mesaj: 'Size dönebileceğimiz bir e-posta adresi yazın.' };
    else if (!EPOSTA.test(t.eposta))
      h.eposta = { tur: 'bicim', mesaj: 'E-posta adresini kontrol edin. Örnek: ad@isletme.com' };
  }
  return h;
}

export const ALAN_SIRASI: AlanAdi[] = ['ad', 'isletme', 'telefon', 'eposta'];

/**
 * Telefon ve WhatsApp bağlantıları tek yerden üretilir.
 *
 * WhatsApp bağlantısı sohbeti hazır bir ilk cümleyle açar: ziyaretçi ne yazacağını düşünmez, biz de hangi konuda
 * yazdığını ilk mesajdan anlarız. Hazır cümlede kişisel veri yoktur; ziyaretçi göndermeden önce değiştirebilir.
 * Numara tanımlı değilse bağlantılar boş döner ve ilgili düğmeler çizilmez.
 */
import { SITE, type KanalDegeri } from '../site.config';

const { telefon, whatsapp } = SITE.iletisim;

export const TELEFON_BAGLANTISI = telefon ? `tel:${telefon.replace(/\s/g, '')}` : '';

/** Yurt içi okunuş: "0530 574 77 35". */
export const TELEFON_YAZISI = telefon.replace(/^\+90\s?/, '0');

const KANAL_KONUSU: Record<KanalDegeri, string> = {
  'google-ads': 'Google Ads reklamları',
  meta: 'Instagram ve Facebook reklamları',
  seo: 'SEO',
  geo: 'yapay zekâ aramalarında görünürlük',
  web: 'web sitesi',
  belirsiz: '',
};

/**
 * WhatsApp sohbet bağlantısı.
 * @param konu Sayfanın hizmet kanalı ya da serbest bir konu ("sağlık turizmi", "bir blog yazınız").
 */
export function whatsappBaglantisi(konu?: KanalDegeri | (string & {})): string {
  const ad = konu && konu in KANAL_KONUSU ? KANAL_KONUSU[konu as KanalDegeri] : (konu ?? '');
  return whatsappMesaji(ad ? `Merhaba, ${ad} hakkında görüşmek istiyorum.` : 'Merhaba, işletmem için görüşmek istiyorum.');
}

/** WhatsApp sohbetini verilen hazır cümleyle açar. Cümleye kişisel veri yazılmaz. */
export function whatsappMesaji(metin: string): string {
  return whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(metin)}` : '';
}

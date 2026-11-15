import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

import buyutec from '../assets/cizimler/buyutec.png';
import defter from '../assets/cizimler/defter.png';
import harita from '../assets/cizimler/harita.png';
import hedef from '../assets/cizimler/hedef.png';
import kilit from '../assets/cizimler/kilit.png';
import kreatif from '../assets/cizimler/kreatif.png';
import mesaj from '../assets/cizimler/mesaj.png';
import robot from '../assets/cizimler/robot.png';
import taslak from '../assets/cizimler/taslak.png';
import telefon from '../assets/cizimler/telefon.png';
import terazi from '../assets/cizimler/terazi.png';
import yapboz from '../assets/cizimler/yapboz.png';
import zarf from '../assets/cizimler/zarf.png';

export type Rehber = CollectionEntry<'rehberler'>;

/** Üretimde taslaklar derlenmez. Geliştirmede hepsi görünür. */
export async function rehberleriGetir(): Promise<Rehber[]> {
  const hepsi = await getCollection('rehberler', ({ data }) => (import.meta.env.PROD ? data.durum !== 'taslak' : true));
  return hepsi.sort((a, b) => a.data.no - b.data.no);
}

export const rehberUrl = (r: Rehber | string) => `/blog/${typeof r === 'string' ? r : r.id}/`;

export const indekslenir = (r: Rehber) => r.data.durum === 'yayinda';

export const tarihYaz = (t: Date) =>
  new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(t);

/** Konu adı: süzgeç düğmesinde, kartta ve yazı künyesinde görünür. Okurun kullandığı adla yazılır. */
export const HIZMET_ETIKETI: Record<string, string> = {
  'google-ads': 'Google Ads',
  meta: 'Instagram ve Facebook',
  seo: 'SEO',
  geo: 'Yapay zekâ görünürlüğü',
  web: 'Web sitesi',
  genel: 'Dijital pazarlama',
};

/**
 * Kapak sahneleri (src/assets/blog/*.jpg). Yazının ön bilgisindeki 'kapak' alanı dosya adını verir.
 * Kapak, dizin kartında, yazının üst alanında ve 'sıradaki adım' kartlarında aynı görseldir.
 */
const KAPAKLAR = import.meta.glob<{ default: ImageMetadata }>('../assets/blog/*.jpg', { eager: true });

export const rehberKapagi = (r: Rehber) => {
  const kayit = r.data.kapak ? KAPAKLAR[`../assets/blog/${r.data.kapak}.jpg`] : undefined;
  if (r.data.kapak && !kayit) throw new Error(`Blog kapağı bulunamadı: src/assets/blog/${r.data.kapak}.jpg (${r.id})`);
  return kayit ? { gorsel: kayit.default, alt: r.data.kapakAlt ?? '' } : undefined;
};

/**
 * Her rehberin kâğıt işi nesnesi. Dizin kartında, rehberin üst alanında ve "sıradaki adım" kartlarında
 * aynı görsel durur: okur rehberi görselinden tanır. Yeni rehber eklenince buraya bir satır yazılır;
 * yazılmazsa defter görseli kullanılır.
 */
const REHBER_CIZIMI: Record<string, { cizim: ImageMetadata; alt: string }> = {
  'google-ads-tiklama-var-telefon-yok': {
    cizim: telefon,
    alt: 'Ahizesi kalkmış kâğıttan bir telefon; yanında üst üste duran talep fişleri',
  },
  'instagram-reklam-mesajlari-satisa-donusmuyor': {
    cizim: mesaj,
    alt: 'Ekranından mesaj balonları taşan kâğıttan bir telefon; yanında not defteri ve kırmızı kalem',
  },
  'meta-reklam-vermek-icin-gerekenler': {
    cizim: kilit,
    alt: 'Kâğıttan bir asma kilit ve kırmızı etiketli anahtarı',
  },
  'google-reklamim-neden-gosterilmiyor': {
    cizim: buyutec,
    alt: 'Yan yana duran kâğıt dükkânlar ve bir büyüteç; büyütecin altındaki dükkânın üstü örtülü',
  },
  'google-ads-mi-instagram-reklami-mi': {
    cizim: terazi,
    alt: 'Bir kefesinde büyüteç, diğerinde fotoğraf duran kâğıttan bir terazi',
  },
  'meta-reklam-formu-mu-whatsapp-mi': {
    cizim: zarf,
    alt: 'Kapağı açık kâğıttan bir posta kutusu; içinde ve önünde kırmızı mühürlü zarflar',
  },
};
const VARSAYILAN_CIZIM = { cizim: defter, alt: 'Lamba altında açık duran kâğıttan bir defter ve kırmızı kalem' };

export const rehberCizimi = (r: Rehber | string) => REHBER_CIZIMI[typeof r === 'string' ? r : r.id] ?? VARSAYILAN_CIZIM;

/** Hizmet kartlarında (dizin ve "sıradaki adım") kullanılan nesneler; rehber görselleriyle çakışmaz. */
export const HIZMET_CIZIMI: Record<string, ImageMetadata> = {
  'google-ads': hedef,
  meta: kreatif,
  seo: harita,
  geo: robot,
  web: taslak,
  genel: yapboz,
};

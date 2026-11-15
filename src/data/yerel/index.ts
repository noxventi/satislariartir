/**
 * Şehir ve ilçe sayfalarının kaydı. src/data/yerel/sayfalar/ klasörüne eklenen her <kimlik>.ts dosyası kendiliğinden
 * listeye girer. Veri modeli: ./tip.ts . Sıra: şehir (aşağıdaki SEHIRLER sırası), önce şehir sayfaları (web, reklam,
 * seo), sonra ilçe sayfaları (ada göre).
 */
import type { ImageMetadata } from 'astro';
import type { SehirKimligi, YerelHizmet, YerelSayfa } from './tip';

export interface Sehir {
  kimlik: SehirKimligi;
  ad: string;
  /** "Ankara’da" */
  de: string;
  /** "Ankara’daki" */
  deki: string;
  /** Şehir sahnesinin tarifi (src/assets/sehirler/<kimlik>.jpg). */
  gorselAlt: string;
}

export const SEHIRLER: Sehir[] = [
  {
    kimlik: 'ankara',
    ad: 'Ankara',
    de: 'Ankara’da',
    deki: 'Ankara’daki',
    gorselAlt:
      'Kâğıttan bir Ankara: arkada yuvarlak tepeli gözlem kulesi ve tepede surlarıyla eski kale, önde çizgili tenteli bir dükkân. Kırmızı kalem çizgisi beş kişiyi sokaktan dükkânın kapısına götürüyor.',
  },
  {
    kimlik: 'istanbul',
    ad: 'İstanbul',
    de: 'İstanbul’da',
    deki: 'İstanbul’daki',
    gorselAlt:
      'Kâğıttan bir İstanbul: konik çatılı taş kule, boğazı geçen asma köprü ve suda bir vapur; önde çizgili tenteli bir dükkân. Kırmızı kalem çizgisi sahil boyunca yürüyen beş kişiyi dükkânın kapısına götürüyor.',
  },
  {
    kimlik: 'izmir',
    ad: 'İzmir',
    de: 'İzmir’de',
    deki: 'İzmir’deki',
    gorselAlt:
      'Kâğıttan bir İzmir: meydanda süslü saat kulesi, sahil boyunca palmiyeler ve körfezde bir vapur; önde çizgili tenteli bir dükkân. Kırmızı kalem çizgisi kordonda yürüyen beş kişiyi dükkânın kapısına götürüyor.',
  },
  {
    kimlik: 'bursa',
    ad: 'Bursa',
    de: 'Bursa’da',
    deki: 'Bursa’daki',
    gorselAlt:
      'Kâğıttan bir Bursa: arkada zirvesi karlı dağ ve teleferik kabinleri, önünde cumbalı eski evler ve taş saat kulesi; önde çizgili tenteli bir dükkân. Kırmızı kalem çizgisi beş kişiyi dükkânın kapısına götürüyor.',
  },
  {
    kimlik: 'eskisehir',
    ad: 'Eskişehir',
    de: 'Eskişehir’de',
    deki: 'Eskişehir’deki',
    gorselAlt:
      'Kâğıttan bir Eskişehir: şehrin ortasından geçen çay, kemerli yaya köprüleri, suda bir gondol ve kıyıda tramvay; karşı kıyıda cumbalı eski evler. Kırmızı kalem çizgisi köprüden geçen beş kişiyi çizgili tenteli dükkânın kapısına götürüyor.',
  },
  {
    kimlik: 'antalya',
    ad: 'Antalya',
    de: 'Antalya’da',
    deki: 'Antalya’daki',
    gorselAlt:
      'Kâğıttan bir Antalya: üç kemerli antik kapı, palmiyeler, cumbalı eski evler, falezler ve denizde bir yelkenli; önde çizgili tenteli bir dükkân. Kırmızı kalem çizgisi, biri valiz çeken beş kişiyi dükkânın kapısına götürüyor.',
  },
];

export const sehirBul = (kimlik: SehirKimligi) => SEHIRLER.find((s) => s.kimlik === kimlik)!;

const HIZMET_SIRASI: YerelHizmet[] = ['web', 'reklam', 'seo'];

const dosyalar = import.meta.glob<{ sayfa: YerelSayfa }>('./sayfalar/*.ts', { eager: true });

export const YEREL_SAYFALAR: YerelSayfa[] = Object.values(dosyalar)
  .map((d) => d.sayfa)
  .filter(Boolean)
  .sort((a, b) => {
    const sehir = SEHIRLER.findIndex((s) => s.kimlik === a.sehir) - SEHIRLER.findIndex((s) => s.kimlik === b.sehir);
    if (sehir) return sehir;
    if (Boolean(a.ilce) !== Boolean(b.ilce)) return a.ilce ? 1 : -1;
    if (a.ilce && b.ilce && a.ilce !== b.ilce) return a.ilce.localeCompare(b.ilce, 'tr');
    return HIZMET_SIRASI.indexOf(a.hizmet) - HIZMET_SIRASI.indexOf(b.hizmet);
  });

export const yerelUrl = (s: YerelSayfa | string) => `/${typeof s === 'string' ? s : s.kimlik}/`;

/** Bir şehrin sayfaları: önce şehir sayfaları, sonra ilçeler. */
export const sehirSayfalari = (kimlik: SehirKimligi) => YEREL_SAYFALAR.filter((s) => s.sehir === kimlik);

/** Şehir sahneleri: src/assets/sehirler/<kimlik>.jpg */
const sahneler = import.meta.glob<{ default: ImageMetadata }>('../../assets/sehirler/*.jpg', { eager: true });

export const sehirGorseli = (kimlik: SehirKimligi): ImageMetadata => {
  const kayit = sahneler[`../../assets/sehirler/${kimlik}.jpg`];
  if (!kayit) throw new Error(`Şehir görseli bulunamadı: src/assets/sehirler/${kimlik}.jpg`);
  return kayit.default;
};

export const HIZMET_ADI: Record<YerelHizmet, string> = {
  web: 'Web tasarım',
  reklam: 'Reklam yönetimi',
  seo: 'SEO',
};

export type { YerelSayfa, YerelHizmet, SehirKimligi } from './tip';

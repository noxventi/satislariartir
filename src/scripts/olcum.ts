/**
 * Ölçüm sözleşmesi (PRD bölüm 9).
 *
 * - Olaylar yalnız dataLayer'a yazılır. Üçüncü taraf betikleri ziyaretçi izin verene kadar yüklenmez.
 * - Hiçbir olay alan değeri, isim, telefon, e-posta ya da serbest metin taşımaz: yalnız aşağıdaki
 *   izinli anahtarlar geçer, diğerleri sessizce atılır.
 * - generate_lead yalnız sunucu kaydı doğruladıktan sonra, başvuru kimliği başına bir kez gönderilir.
 */

export type OlayAdi =
  | 'service_view'
  | 'case_view'
  | 'cta_click'
  | 'form_start'
  | 'form_error'
  | 'generate_lead'
  | 'whatsapp_click'
  | 'phone_click';

const IZINLI = new Set([
  'page_type',
  'service',
  'case',
  'placement',
  'channel',
  'campaign_status',
  'form_location',
  'field',
  'error_type',
  'event_id',
]);

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...a: unknown[]) => void;
    fbq?: (...a: unknown[]) => void;
    __saEtiketler?: { gtm?: boolean; meta?: boolean };
  }
}

export function olay(ad: OlayAdi, veri: Record<string, string | number | boolean | undefined | null> = {}) {
  const temiz: Record<string, string> = {};
  for (const [k, v] of Object.entries(veri)) {
    if (!IZINLI.has(k) || v === undefined || v === null || v === '') continue;
    temiz[k] = String(v).slice(0, 80);
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: ad, ...temiz });
}

/* ---- Çerez ve ölçüm tercihi ------------------------------------------------ */

const TERCIH_ANAHTARI = 'sa_tercih';

export interface Tercih {
  olcum: boolean;
  pazarlama: boolean;
  tarih: string;
  surum: 1;
}

export function tercihOku(): Tercih | null {
  try {
    const ham = localStorage.getItem(TERCIH_ANAHTARI);
    if (!ham) return null;
    const t = JSON.parse(ham) as Tercih;
    return t && t.surum === 1 ? t : null;
  } catch {
    return null;
  }
}

export function tercihYaz(secim: { olcum: boolean; pazarlama: boolean }) {
  const t: Tercih = { ...secim, tarih: new Date().toISOString(), surum: 1 };
  try {
    localStorage.setItem(TERCIH_ANAHTARI, JSON.stringify(t));
    if (!secim.olcum) {
      // İzin geri alındıysa kalıcı kaynak kaydı da silinir.
      localStorage.removeItem('sa_ilk_temas');
      localStorage.removeItem('sa_son_temas');
    }
  } catch {
    /* depolama kapalıysa tercih bu sayfa için geçerli kalır */
  }
  tercihUygula(t);
  document.dispatchEvent(new CustomEvent('sa:tercih', { detail: t }));
  return t;
}

function gtag(...a: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // gtag komutları dataLayer'a arguments nesnesi olarak yazılır.
  (window.dataLayer as unknown[]).push(a);
}

export function tercihUygula(t: Tercih | null) {
  const izin = (v: boolean) => (v ? 'granted' : 'denied');
  gtag('consent', t ? 'update' : 'default', {
    analytics_storage: izin(Boolean(t?.olcum)),
    ad_storage: izin(Boolean(t?.pazarlama)),
    ad_user_data: izin(Boolean(t?.pazarlama)),
    ad_personalization: izin(Boolean(t?.pazarlama)),
  });
  if (t) etiketleriYukle(t);
}

/** Etiketler yalnız kimlik tanımlıysa ve ilgili izin verildiyse yüklenir. */
function etiketleriYukle(t: Tercih) {
  const kok = document.documentElement;
  const gtmKimligi = kok.dataset.gtm;
  const metaKimligi = kok.dataset.metaPiksel;
  window.__saEtiketler = window.__saEtiketler || {};

  if (gtmKimligi && t.olcum && !window.__saEtiketler.gtm) {
    window.__saEtiketler.gtm = true;
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmKimligi)}`;
    document.head.appendChild(s);
  }

  if (metaKimligi && t.pazarlama && !window.__saEtiketler.meta) {
    window.__saEtiketler.meta = true;
    /* Meta Piksel temel kodu */
    const n: any = (window.fbq = function (...a: unknown[]) {
      n.callMethod ? n.callMethod(...a) : n.queue.push(a);
    });
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
    window.fbq!('init', metaKimligi);
    window.fbq!('track', 'PageView');
  }
}

export const etiketTanimli = () =>
  Boolean(document.documentElement.dataset.gtm || document.documentElement.dataset.metaPiksel);

/* ---- Kaynak (UTM ve reklam tıklama kimlikleri) ----------------------------- */

const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const TIKLAMA = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] as const;

export interface Temas {
  [anahtar: string]: string;
}

function urldenTemas(tiklamaKimlikleriyle: boolean): Temas | null {
  const p = new URLSearchParams(location.search);
  const t: Temas = {};
  for (const k of UTM) {
    const v = p.get(k);
    if (v) t[k] = v.slice(0, 120);
  }
  if (tiklamaKimlikleriyle) {
    for (const k of TIKLAMA) {
      const v = p.get(k);
      if (v) t[k] = v.slice(0, 200);
    }
  }
  if (!Object.keys(t).length) {
    // Parametre yoksa bile yönlendiren alan adı (yalnız host) kaynak bilgisidir.
    try {
      if (document.referrer) {
        const h = new URL(document.referrer).hostname;
        if (h && h !== location.hostname) t.referrer = h;
      }
    } catch {
      /* geçersiz referrer */
    }
  }
  if (!Object.keys(t).length) return null;
  t.sayfa = location.pathname;
  t.zaman = new Date().toISOString();
  return t;
}

/**
 * Oturum içi kaynak her zaman tutulur (kimlik içermez, sekme kapanınca silinir).
 * İlk giriş ve son tanınan temasın kalıcı kaydı ile reklam tıklama kimlikleri
 * yalnız ölçüm izni verildiyse saklanır.
 */
export function kaynagiKaydet() {
  const izin = Boolean(tercihOku()?.olcum);
  try {
    if (!sessionStorage.getItem('sa_giris')) sessionStorage.setItem('sa_giris', location.pathname);
    const t = urldenTemas(izin);
    if (t) {
      if (!sessionStorage.getItem('sa_oturum_ilk')) sessionStorage.setItem('sa_oturum_ilk', JSON.stringify(t));
      sessionStorage.setItem('sa_oturum_son', JSON.stringify(t));
      if (izin) {
        if (!localStorage.getItem('sa_ilk_temas')) localStorage.setItem('sa_ilk_temas', JSON.stringify(t));
        localStorage.setItem('sa_son_temas', JSON.stringify(t));
      }
    }
  } catch {
    /* depolama kapalı: form yine gönderilebilir */
  }
}

export function kaynagiOku() {
  const oku = (depo: Storage, k: string) => {
    try {
      const v = depo.getItem(k);
      return v ? JSON.parse(v) : null;
    } catch {
      return null;
    }
  };
  let giris = '';
  try {
    giris = sessionStorage.getItem('sa_giris') || '';
  } catch {
    /* yok */
  }
  return {
    ilk: oku(localStorage, 'sa_ilk_temas') || oku(sessionStorage, 'sa_oturum_ilk'),
    son: oku(localStorage, 'sa_son_temas') || oku(sessionStorage, 'sa_oturum_son'),
    giris_sayfasi: giris,
    form_sayfasi: location.pathname,
  };
}

/**
 * Satışları Artır | site ayarları
 *
 * Boş bırakılan işletme bilgisi ön yüzde gizlenir. Hiçbir alan tahminle
 * doldurulmaz: marka sahibinin doğruladığı bilgi geldiğinde buraya yazılır.
 * Eksik alanların listesi TESLIM.md dosyasındadır.
 */

export const SITE = {
  ad: 'Satışları Artır',
  alanAdi: 'satislariartir.com',
  url: 'https://satislariartir.com',
  dil: 'tr-TR',
  aciklama:
    'Müşteri bulmanız ve satışlarınızı artırmanız için çalışan dijital pazarlama ajansı: Google ve Instagram reklamları, SEO, yapay zekâ görünürlüğü ve web tasarım.',

  /** Doğrulanmış kurumsal iletişim bilgileri. Boş alan gösterilmez. */
  iletisim: {
    // Marka sahibinin verdiği bilgiler (15 Kasım 2026).
    eposta: 'info@satislariartir.com',
    telefon: '+90 530 574 77 35',
    whatsapp: '905305747735', // yalnız rakam, ülke koduyla
    adres: '',
    calismaSaatleri: '',
  },

  /** Kurumun resmî sosyal medya hesapları (18 Kasım 2026). Alt bilgi, iletişim sayfası ve kurum şemasındaki sameAs buradan okur. */
  sosyal: {
    instagram: 'https://www.instagram.com/satislariartir/',
    instagramKullanici: 'satislariartir',
  },

  /** KVKK kapsamında veri sorumlusu. Dolana kadar yasal sayfalar taslak sayılır. */
  veriSorumlusu: {
    /** Ticaret unvanı (şirket) ya da şahıs işletmesinde ad soyad ve işletme adı. Doldurulunca yasal sayfalar yayına girer. */
    // Marka sahibinin verdiği bilgiler (16 Kasım 2026).
    unvan: 'Adra Yazılım Ltd. Şti.',
    /** Tebligat adresi (ticaret sicilindeki adres). */
    adres: 'Aziziye Mahallesi, Portakal Çiçeği Sokak, Ansera AVM No: 17/91, Çankaya/Ankara',
    /** Aynı adresin yapılandırılmış veri (PostalAddress) için parçaları. Posta kodu verilmedi; tahminle yazılmaz. */
    adresParcalari: {
      sokak: 'Aziziye Mahallesi, Portakal Çiçeği Sokak, Ansera AVM No: 17/91',
      ilce: 'Çankaya',
      il: 'Ankara',
      ulke: 'TR',
    },
    /** KVKK başvurularının alınacağı e-posta adresi. */
    eposta: '',
    /** Varsa kayıtlı elektronik posta (KEP) adresi. */
    kep: '',
    mersis: '',
    vergiDairesi: '',
    vergiNo: '',
  },

  /** Ölçüm etiketleri. Boşken hiçbir üçüncü taraf betiği yüklenmez. */
  olcum: {
    gtmKimligi: import.meta.env.PUBLIC_GTM_ID ?? '',
    metaPikselKimligi: import.meta.env.PUBLIC_META_PIXEL_ID ?? '',
  },
} as const;

export type HizmetKimligi = 'google-ads' | 'meta' | 'seo' | 'geo' | 'web';

export interface Hizmet {
  kimlik: HizmetKimligi;
  ad: string;
  menuAdi: string;
  /** Üst menü panelinde adın altındaki tek satır: hizmetin kime, ne için olduğu. */
  menuOzeti: string;
  url: string;
  /** Hizmet sayfasındaki tek görüşme çağrısı. Sayfa boyunca aynı kalır. */
  cagri: string;
  /** Ziyaretçinin durumu, kendi cümlesiyle. */
  durum: string;
  /** Çalışma sonunda elde ne olur. Sonuç vaadi içermez. */
  teslim: string;
  ozet: string;
}

export const HIZMETLER: Hizmet[] = [
  {
    kimlik: 'google-ads',
    ad: 'Google Ads yönetimi',
    menuAdi: 'Google Ads yönetimi',
    menuOzeti: 'Hizmetinizi Google’da arayan müşteriye reklam',
    url: '/hizmetler/google-ads-yonetimi/',
    cagri: 'Google Ads hesabımı görüşelim',
    durum: 'Müşterim hizmetimi adıyla arıyor. Reklam veriyorum ya da ilk kez vermek istiyorum.',
    teslim: 'Arama terimlerine göre kurulmuş hesap, test edilmiş dönüşüm takibi ve düzenli optimizasyon.',
    ozet: 'Google reklamlarınızı müşterinizin gerçekten yazdığı aramalara göre kuruyor, bütçeyi satış getiren aramalara yönlendiriyoruz.',
  },
  {
    kimlik: 'meta',
    ad: 'Instagram ve Facebook reklam yönetimi',
    menuAdi: 'Instagram ve Facebook reklamları',
    menuOzeti: 'İşinizi görünce isteyen müşteriye reklam',
    url: '/hizmetler/meta-reklam-yonetimi/',
    cagri: 'Meta reklamlarımı görüşelim',
    durum: 'İşimi göstererek anlatıyorum. Instagram’dan mesaj ya da form almak istiyorum.',
    teslim: 'Hedefe göre kurulmuş kampanyalar, denenmiş görsel ve metinler, mesajdan satışa giden adımların düzeni.',
    ozet: 'Instagram ve Facebook reklamlarını satış hedefinize göre kuruyor, görsel ve metinleri deneyerek geliştiriyoruz.',
  },
  {
    kimlik: 'seo',
    ad: 'SEO danışmanlığı',
    menuAdi: 'SEO danışmanlığı',
    menuOzeti: 'Arama sonuçlarında reklamsız görünmek',
    url: '/hizmetler/seo-danismanligi/',
    cagri: 'Organik trafiğimi görüşelim',
    durum: 'Sitem var ama hizmetimi arayanlar beni bulamıyor.',
    teslim: 'Öncelik sırasına konmuş teknik bulgular, sayfa ve içerik kararları, her düzeltmenin kabul testi.',
    ozet: 'Sitenizin teknik eksiklerini gideriyor, sayfalarınızı müşterinizin Google’a yazdığı aramalara göre düzenliyoruz.',
  },
  {
    kimlik: 'geo',
    ad: 'GEO ve AEO danışmanlığı',
    menuAdi: 'GEO ve AEO danışmanlığı',
    menuOzeti: 'Yapay zekâ yanıtlarında doğru anılmak',
    url: '/hizmetler/yapay-zeka-gorunurlugu/',
    cagri: 'Markamın görünürlüğünü görüşelim',
    durum: 'Müşterilerim ChatGPT ve benzeri araçlara tedarikçi soruyor. Ne yanıt aldıklarını bilmiyorum.',
    teslim: 'Müşterilerinizin sorduğu sorular, yanıtlardaki durumunuz ve düzeltilen sayfalar.',
    ozet: 'ChatGPT ve Google’ın yapay zekâ yanıtlarında markanızın doğru bilgiyle anılması için kaynak sayfaları düzeltiyoruz.',
  },
  {
    kimlik: 'web',
    ad: 'Kurumsal web tasarım',
    menuAdi: 'Kurumsal web tasarım',
    menuOzeti: 'Ziyaretçiyi talebe götüren site',
    url: '/hizmetler/web-tasarim/',
    cagri: 'Web projemi görüşelim',
    durum: 'Web sitem yok ya da var ama ziyaretçi talep bırakmıyor.',
    teslim: 'Hizmet ayrımına göre kurulmuş sayfalar, mobilde test edilmiş form ve yönetim erişimi.',
    ozet: 'Ziyaretçinin doğru işi görüp talep bırakabileceği hizmet sayfaları ve reklam açılış sayfaları hazırlıyoruz.',
  },
];

export const hizmetBul = (kimlik: HizmetKimligi) => HIZMETLER.find((h) => h.kimlik === kimlik)!;

/** Formdaki "Hangi konuda görüşmek istiyorsunuz?" seçenekleri. */
export const KANALLAR = [
  { deger: 'google-ads', etiket: 'Google Ads' },
  { deger: 'meta', etiket: 'Instagram ve Facebook (Meta)' },
  { deger: 'seo', etiket: 'SEO' },
  { deger: 'geo', etiket: 'Yapay zekâ görünürlüğü' },
  { deger: 'web', etiket: 'Web sitesi' },
  { deger: 'belirsiz', etiket: 'Henüz emin değilim' },
] as const;

export type KanalDegeri = (typeof KANALLAR)[number]['deger'];

export const ANA_MENU = [
  { etiket: 'Çalışmalarımız', url: '/calismalarimiz/' },
  { etiket: 'Blog', url: '/blog/' },
  { etiket: 'Hakkımızda', url: '/hakkimizda/' },
] as const;

/** Sitenin her yerinde tek görüşme çağrısı etiketi (menü, alt bilgi, mobil çubuk). */
export const GENEL_CAGRI = { etiket: 'Görüşme isteyin', url: '/iletisim/' } as const;

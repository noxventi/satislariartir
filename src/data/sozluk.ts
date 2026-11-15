/**
 * Dijital pazarlama sözlüğü (/sozluk/).
 *
 * Her terim bağlamından koparılıp tek başına alıntılanabilecek bir tanım taşır: tanım "Terim, …" diye başlayan bağımsız
 * bir cümleyle açılır ve 40 ile 60 kelime arasındadır. Yapay zekâ yanıtları ve Google’ın özetleri bu cümleyi olduğu
 * gibi alabilir; o yüzden tanım "yukarıda", "bu sayfada" gibi bağlama dayanan sözler içermez.
 *
 * - ilgili: sitedeki ilgili yazı ya da hizmet sayfası. Yalnız var olan adresler yazılır.
 * - kaynak: tanımı destekleyen resmî Google ya da Meta belgesi. Yalnız açılıp içeriği tanımla karşılaştırılan
 *   belgeler yazılır (son kontrol: SOZLUK_SON_KONTROL). Doğrulanamayan belge yazılmaz; alan boş kalır.
 * - Fiyat, ücret ya da sonuç sözü yazılmaz. Örneklerdeki sayılar hesaplama örneğidir, para birimi taşımaz.
 * - Platform adları Türkçe arayüzdeki adlarıyla yazılır; arayüz adı değişirse açılım alanında eski ya da İngilizce ad durur.
 */

export type SozlukKategorisi = 'Reklam' | 'Ölçüm' | 'SEO' | 'GEO ve AEO' | 'Web';

export interface SozlukTerimi {
  /** Sayfadaki çapa (id). Küçük harf, Türkçe karakter ve boşluk yok. */
  kimlik: string;
  terim: string;
  /** Terimin yaygın kısaltması (ör. GA4). Terim zaten kısaltmaysa boş kalır. */
  kisaltma?: string;
  /** Kısaltmanın ya da terimin açılımı, İngilizce ya da eski adı. */
  acilim?: string;
  kategori: SozlukKategorisi;
  tanim: string;
  ornek?: string;
  ilgili: { etiket: string; url: string };
  kaynak?: { ad: string; url: string };
}

export interface SozlukKategoriBilgisi {
  ad: SozlukKategorisi;
  /** Bölümün çapası. */
  kimlik: string;
  baslik: string;
  /** Kategori kartındaki kısa açıklama. */
  ozet: string;
  /** Bölüm başlığının altındaki giriş cümlesi. */
  giris: string;
}

/** Kaynak bağlantılarının son kontrol tarihi. */
export const SOZLUK_SON_KONTROL = new Date('2026-11-16');

export const SOZLUK_KATEGORILERI: SozlukKategoriBilgisi[] = [
  {
    ad: 'Reklam',
    kimlik: 'reklam',
    baslik: 'Reklam terimleri',
    ozet: 'Google Ads ve Meta reklam hesabında karşınıza çıkan kavramlar.',
    giris: 'Google Ads ve Meta Reklam Yöneticisi’nde kampanya kurarken ve raporu okurken karşılaşacağınız kavramlar.',
  },
  {
    ad: 'Ölçüm',
    kimlik: 'olcum',
    baslik: 'Ölçüm terimleri',
    ozet: 'Reklamın ve sitenin ne getirdiğini sayan metrikler ve araçlar.',
    giris: 'Reklamın ve sitenin ne getirdiğini gösteren metrikler ile bu sayıları toplayan Google ve Meta araçları.',
  },
  {
    ad: 'SEO',
    kimlik: 'seo-terimleri',
    baslik: 'SEO terimleri',
    ozet: 'Google’ın sitenizi bulması, anlaması ve sıralaması.',
    giris: 'Google’ın sayfalarınızı nasıl bulduğunu, dizine eklediğini ve sıraladığını anlatan kavramlar.',
  },
  {
    ad: 'GEO ve AEO',
    kimlik: 'geo-ve-aeo',
    baslik: 'GEO ve AEO terimleri',
    ozet: 'Yapay zekâ yanıtlarında anılmak ve kaynak gösterilmek.',
    giris: 'ChatGPT, Gemini, Perplexity ve Google’ın yapay zekâ özelliklerindeki yanıtlarda görünmekle ilgili kavramlar.',
  },
  {
    ad: 'Web',
    kimlik: 'web',
    baslik: 'Web sitesi terimleri',
    ozet: 'Adres, sunucu, güvenlik ve telefondaki görünüm.',
    giris: 'Bir sitenin yayına çıkması ve ziyaretçiyi doğru karşılaması için bilinmesi gereken temel kavramlar.',
  },
];

const GOOGLE_ADS = 'Google Ads Yardım';
const ARAMA_MERKEZI = 'Google Arama Merkezi';

export const SOZLUK: SozlukTerimi[] = [
  // ---- Reklam ------------------------------------------------------------------------------------------------------
  {
    kimlik: 'google-ads',
    terim: 'Google Ads',
    kategori: 'Reklam',
    tanim:
      'Google Ads, Google’ın reklam programıdır. Reklamveren, Google aramalarında, YouTube’da, Haritalar’da ve Google’ın iş ortağı sitelerinde gösterilecek reklamları buradan kurar, bütçesini kendisi belirler ve sonuçları aynı hesapta ölçer. Arama Ağı reklamlarında ödeme çoğunlukla reklama tıklandığında doğar; hangi reklamın nerede görüneceğine her aramada yapılan açık artırma karar verir.',
    ornek: 'Kombi servisi, “kadıköy kombi servisi” yazan kişiye arama sonuçlarının üstünde “Sponsorlu” etiketiyle görünür.',
    ilgili: { etiket: 'Google Ads nedir, nasıl çalışır?', url: '/blog/google-ads-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Google Ads: Tanım`, url: 'https://support.google.com/google-ads/answer/6319?hl=tr' },
  },
  {
    kimlik: 'anahtar-kelime',
    terim: 'Anahtar kelime',
    acilim: 'Keyword',
    kategori: 'Reklam',
    tanim:
      'Anahtar kelime, Google Ads’te reklamın hangi aramalarda gösterilebileceğini belirlemek için hesaba eklenen kelime ya da kelime grubudur. Reklamın bir aramada çıkıp çıkmayacağını anahtar kelimenin o aramaya benzerliği ve seçilen eşleme türü belirler. SEO’da aynı ifade, bir sayfanın cevap vermek üzere yazıldığı arama anlamında kullanılır.',
    ornek: 'Hesaba “gardırop yaptırma” yazılır; reklam buna benzeyen aramalarda gösterilebilir.',
    ilgili: { etiket: 'Anahtar kelime nedir, nasıl bulunur?', url: '/blog/anahtar-kelime-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Anahtar kelimeler`, url: 'https://support.google.com/google-ads/answer/6323?hl=tr' },
  },
  {
    kimlik: 'esleme-turleri',
    terim: 'Eşleme türleri',
    acilim: 'Keyword match types',
    kategori: 'Reklam',
    tanim:
      'Eşleme türleri, Google Ads’te bir anahtar kelimenin hangi aramalarla eşleşebileceğini belirleyen ayardır. Geniş eşleme anlamca ilgili en geniş arama kümesini kapsar, sıralı eşleme anahtar kelimenin anlamını içeren aramalarla sınırlıdır, tam eşleme ise aynı anlam ve amaçtaki aramalara odaklanır. Türü belirtilmeden eklenen anahtar kelime geniş eşleme sayılır.',
    ornek: '“Kombi tamiri” sıralı eşlemeyle eklenirse reklam “acil kombi tamiri ankara” aramasında gösterilebilir.',
    ilgili: { etiket: 'Google Ads nedir, nasıl çalışır?', url: '/blog/google-ads-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Anahtar kelime eşleme seçenekleri hakkında`, url: 'https://support.google.com/google-ads/answer/7478529?hl=tr' },
  },
  {
    kimlik: 'negatif-anahtar-kelime',
    terim: 'Negatif anahtar kelime',
    kategori: 'Reklam',
    tanim:
      'Negatif anahtar kelime, reklamın gösterilmesi istenmeyen aramaları kampanyadan ya da reklam grubundan hariç tutmak için eklenen kelimedir. İş arayanların ya da başka bir hizmeti soranların tıklamalarını önler ve bütçeyi işinizle ilgili aramalara bırakır. Eklenecek kelimeler çoğunlukla arama terimleri raporu düzenli okunarak bulunur.',
    ornek: '“İş ilanı” negatif anahtar kelime olarak eklenirse “kombi servisi iş ilanı” aramasında reklam çıkmaz.',
    ilgili: { etiket: 'Google’a reklam nasıl verilir?', url: '/blog/google-reklam-nasil-verilir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Negatif anahtar kelimeler hakkında`, url: 'https://support.google.com/google-ads/answer/2453972?hl=tr' },
  },
  {
    kimlik: 'arama-terimi',
    terim: 'Arama terimi',
    acilim: 'Search term',
    kategori: 'Reklam',
    tanim:
      'Arama terimi, bir kişinin Google’da ya da Arama Ağı sitelerinde arama yaparken gerçekten yazdığı kelime ya da kelime grubudur. Anahtar kelime reklamverenin hesaba eklediği ifadedir; reklamı tetikleyen ise arama terimidir. Google Ads’teki arama terimleri raporu, reklamın hangi gerçek aramalarda gösterildiğini ve bu aramaların ne sonuç getirdiğini listeler.',
    ornek: 'Anahtar kelime “kombi servisi” iken arama terimi “kadıköy acil kombi servisi” olabilir.',
    ilgili: { etiket: 'Google Ads’te tıklama var, telefon yok', url: '/blog/google-ads-tiklama-var-telefon-yok/' },
    kaynak: { ad: `${GOOGLE_ADS}, Arama terimleri raporu hakkında`, url: 'https://support.google.com/google-ads/answer/2472708?hl=tr' },
  },
  {
    kimlik: 'kalite-puani',
    terim: 'Kalite Puanı',
    acilim: 'Quality Score',
    kategori: 'Reklam',
    tanim:
      'Kalite Puanı, Google Ads’te reklamın, anahtar kelimenin ve açılış sayfasının aynı aramadaki diğer reklamverenlere göre ne kadar alakalı olduğunu gösteren, 1 ile 10 arasında bir teşhis puanıdır. Beklenen tıklama oranı, reklam alaka düzeyi ve açılış sayfası deneyiminden hesaplanır. Google’a göre açık artırmaya doğrudan girmez; neyin iyileştirileceğini bulmak için okunur.',
    ornek: 'Açılış sayfası deneyimi “Ortalamanın altında” görünüyorsa önce sayfanın telefonda nasıl açıldığına bakılır.',
    ilgili: { etiket: 'Google Ads nedir, nasıl çalışır?', url: '/blog/google-ads-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Arama Ağı kampanyaları için kalite puanı hakkında`, url: 'https://support.google.com/google-ads/answer/6167118?hl=tr' },
  },
  {
    kimlik: 'teklif-stratejisi',
    terim: 'Teklif stratejisi',
    acilim: 'Bid strategy',
    kategori: 'Reklam',
    tanim:
      'Teklif stratejisi, Google Ads’in açık artırmalarda reklam için nasıl teklif vereceğini belirleyen ayardır. Strateji kampanyanın hedefine göre seçilir: tıklama, gösterim, dönüşüm ya da dönüşüm değeri. Hedef EBM ve Hedef ROAS gibi Akıllı Teklif stratejileri her açık artırmada teklifi Google’ın yapay zekâsıyla ayarlar ve doğru çalışmak için dönüşüm takibine ihtiyaç duyar.',
    ornek: 'Sitesinden form toplayan bir işletme, dönüşüm takibini kurduktan sonra dönüşüm odaklı bir strateji seçebilir.',
    ilgili: { etiket: 'Google’a reklam nasıl verilir?', url: '/blog/google-reklam-nasil-verilir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Hedeflerinize göre teklif stratejisi belirleme`, url: 'https://support.google.com/google-ads/answer/2472725?hl=tr' },
  },
  {
    kimlik: 'performance-max',
    terim: 'Performance Max',
    kisaltma: 'PMax',
    acilim: 'Türkçe arayüzde Maksimum Performans',
    kategori: 'Reklam',
    tanim:
      'Performance Max, Google Ads’in tek bir kampanyayla YouTube, Görüntülü Reklam Ağı, Arama Ağı, Gmail ve Haritalar dahil bütün Google Ads envanterinde yayın yapan, hedef temelli kampanya türüdür. Türkçe arayüzde Maksimum Performans adıyla geçer. Reklamveren hedefi, bütçeyi ve reklam öğelerini verir; reklamın nerede ve kime gösterileceğine büyük ölçüde Google’ın sistemi karar verir.',
    ornek: 'Bir mobilya mağazası aynı kampanyayla hem arama sonuçlarında hem YouTube’da hem de Haritalar’da görünebilir.',
    ilgili: { etiket: 'Google Ads nedir, nasıl çalışır?', url: '/blog/google-ads-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Maksimum Performans kampanyaları hakkında`, url: 'https://support.google.com/google-ads/answer/10724817?hl=tr' },
  },
  {
    kimlik: 'yeniden-pazarlama',
    terim: 'Yeniden pazarlama',
    acilim: 'Remarketing, retargeting',
    kategori: 'Reklam',
    tanim:
      'Yeniden pazarlama, sitenizi ziyaret etmiş, uygulamanızı kullanmış ya da işletmenizle daha önce etkileşim kurmuş kişilere yeniden reklam gösterme yöntemidir. Google Ads bu listeleri artık “verileriniz” segmentleri adıyla yönetir; Meta’da aynı iş özel hedef kitlelerle yapılır. Listeye giren ziyaretçi verisi, sitenin çerez bildirimi ve ziyaretçinin tercihleriyle uyumlu toplanmalıdır.',
    ornek: 'Teklif sayfasına girip formu doldurmadan çıkan kişi, sonraki günlerde aynı hizmetin reklamını görür.',
    ilgili: { etiket: 'Instagram ve Facebook reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
    kaynak: { ad: `${GOOGLE_ADS}, Veri segmentleriniz hakkında`, url: 'https://support.google.com/google-ads/answer/2453998?hl=tr' },
  },
  {
    kimlik: 'meta-reklam-yoneticisi',
    terim: 'Meta Reklam Yöneticisi',
    acilim: 'Meta Ads Manager',
    kategori: 'Reklam',
    tanim:
      'Meta Reklam Yöneticisi, Facebook, Instagram, Messenger ve Audience Network’te yayınlanacak reklamların oluşturulduğu, yönetildiği ve sonuçlarının izlendiği Meta aracıdır. Hesap kampanya, reklam seti ve reklam katmanlarıyla kurulur. Bütçe, hedef kitle, yerleşimler ve yayın tarihleri bu ekrandan ayarlanır; raporlar da aynı yerde okunur.',
    ornek: 'Bir kuaför, randevu mesajı toplayan kampanyasının bütçesini ve kime gösterileceğini Reklam Yöneticisi’nden ayarlar.',
    ilgili: { etiket: 'Meta Reklam Yöneticisi nasıl kullanılır?', url: '/blog/meta-reklam-yoneticisi-nasil-kullanilir/' },
    kaynak: { ad: 'Meta for Business, Meta Reklam Yöneticisi', url: 'https://www.facebook.com/business/tools/ads-manager' },
  },
  {
    kimlik: 'kampanya-amaci',
    terim: 'Kampanya amacı',
    acilim: 'Campaign objective',
    kategori: 'Reklam',
    tanim:
      'Kampanya amacı, Meta Reklam Yöneticisi’nde reklamdan hangi sonucu beklediğinizi yayın sistemine bildiren seçimdir. Altı amaç vardır: Bilinirlik, Trafik, Etkileşim, Potansiyel Müşteriler, Uygulama tanıtımı ve Satışlar. Seçilen amaç, reklamın kimlere gösterileceğini ve hangi sonuç için optimize edileceğini belirlediği için kampanya kurulurken verilen ilk karardır.',
    ornek: 'Keşif randevusu toplamak isteyen bir mutfak firması Potansiyel Müşteriler amacını seçer.',
    ilgili: { etiket: 'Meta Reklam Yöneticisi nasıl kullanılır?', url: '/blog/meta-reklam-yoneticisi-nasil-kullanilir/' },
    kaynak: { ad: 'Meta for Business, Facebook reklam kampanyası amaçları ve hedefleri', url: 'https://www.facebook.com/business/ads/ad-objectives' },
  },
  {
    kimlik: 'reklam-seti',
    terim: 'Reklam seti',
    acilim: 'Ad set',
    kategori: 'Reklam',
    tanim:
      'Reklam seti, Meta reklamlarında kampanya ile reklam arasındaki katmandır. Hedef kitle, yerleşimler, yayın tarihleri ve optimizasyon hedefi bu düzeyde seçilir; bütçe kampanya düzeyinde verilmediyse o da burada belirlenir. Setin içindeki bütün reklamlar bu ayarları paylaşır, bu yüzden aynı kitleye farklı görsel ya da metinler aynı sette denenir.',
    ornek: 'Ankara’da 25 ile 45 yaş arasındaki kişilere gösterilecek iki farklı görselli reklam aynı reklam setinde durur.',
    ilgili: { etiket: 'Meta Reklam Yöneticisi nasıl kullanılır?', url: '/blog/meta-reklam-yoneticisi-nasil-kullanilir/' },
    kaynak: { ad: 'Meta for Developers, Ad Campaign Structure', url: 'https://developers.facebook.com/docs/marketing-api/campaign-structure' },
  },
  {
    kimlik: 'advantage-plus',
    terim: 'Advantage+',
    acilim: 'Meta Advantage+',
    kategori: 'Reklam',
    tanim:
      'Advantage+, Meta’nın kampanya performansını yapay zekâ ve otomasyonla iyileştirmeye yönelik ürün setinin adıdır. İki tür çözüm içerir: hedef kitleyi, reklam alanlarını ve bütçeyi birlikte yöneten uçtan uca kampanyalar ile kampanyanın belirli bir adımına uygulanan tek adımlık çözümler. Satış, uygulama ve potansiyel müşteri kampanyaları uçtan uca türe girer.',
    ornek: 'Advantage+ satış kampanyasında Meta, reklamın hangi kişilere ve hangi alanlarda gösterileceğini sonuca göre kendisi dağıtır.',
    ilgili: { etiket: 'Instagram ve Facebook reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
    kaynak: { ad: 'Meta for Business, Meta Advantage+', url: 'https://www.facebook.com/business/ads/meta-advantage' },
  },
  {
    kimlik: 'ogrenme-asamasi',
    terim: 'Öğrenme aşaması',
    acilim: 'Learning phase',
    kategori: 'Reklam',
    tanim:
      'Öğrenme aşaması, Meta’da yeni yayına giren ya da önemli ölçüde düzenlenen bir reklam setinin, kimlere gösterildiğinde daha iyi sonuç aldığını yayın sisteminin öğrendiği dönemdir. Bu sırada sonuçlar ve maliyet inip çıkabilir. Meta’ya göre reklam seti, son önemli düzenlemeden sonraki bir hafta içinde yaklaşık 50 sonuca ulaştığında genellikle bu aşamadan çıkar.',
    ornek: 'Bütçesi ve hedef kitlesi sık sık değiştirilen bir reklam seti öğrenme aşamasına yeniden girer.',
    ilgili: { etiket: 'Instagram’da reklam nasıl verilir?', url: '/blog/instagram-reklam-nasil-verilir/' },
  },
  {
    kimlik: 'potansiyel-musteri-formu',
    terim: 'Potansiyel müşteri formu',
    acilim: 'Lead form; Meta’da hızlı form',
    kategori: 'Reklam',
    tanim:
      'Potansiyel müşteri formu, reklamla ilgilenen kişinin iletişim bilgisini siteye gitmeden, reklamın içinden açılan bir formla göndermesini sağlayan reklam biçimidir. Meta bu forma hızlı form der; Google Ads’te potansiyel müşteri formu öğesi olarak eklenir. Kısa form daha çok kişi tarafından doldurulur, eklenen her eleme sorusu ise gelen kayıtları daha nitelikli kılar.',
    ornek: 'Mutfak firması formda yalnız ad, telefon ve evin bulunduğu ilçeyi sorar.',
    ilgili: { etiket: 'Instagram reklamında form mu, WhatsApp mı?', url: '/blog/meta-reklam-formu-mu-whatsapp-mi/' },
    kaynak: { ad: `${GOOGLE_ADS}, Potansiyel müşteri formu öğeleri hakkında`, url: 'https://support.google.com/google-ads/answer/9423234?hl=tr' },
  },

  // ---- Ölçüm -------------------------------------------------------------------------------------------------------
  {
    kimlik: 'ctr',
    terim: 'CTR',
    acilim: 'Tıklama oranı (Click-through rate); Google Ads’te TO',
    kategori: 'Ölçüm',
    tanim:
      'CTR (tıklama oranı), reklamı görenlerin ne kadarının ona tıkladığını gösteren orandır. Tıklama sayısı gösterim sayısına bölünerek hesaplanır ve yüzdeyle yazılır; Google Ads’in Türkçe arayüzünde TO kısaltmasıyla geçer. Yüksek CTR reklamın aramayla ilgili bulunduğunu gösterir, ama reklamın satış getirip getirmediğini tek başına söylemez.',
    ornek: '1.000 gösterim ve 40 tıklama alan reklamın CTR’si %4’tür.',
    ilgili: { etiket: 'ROAS, CTR ve TBM nedir?', url: '/blog/roas-ctr-tbm-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Tıklama oranı (TO): Tanım`, url: 'https://support.google.com/google-ads/answer/2615875?hl=tr' },
  },
  {
    kimlik: 'tbm',
    terim: 'TBM',
    acilim: 'Tıklama başına maliyet (Cost per click, CPC)',
    kategori: 'Ölçüm',
    tanim:
      'TBM (tıklama başına maliyet), bir reklam tıklaması için ödenen ortalama tutardır. Toplam tıklama maliyetinin tıklama sayısına bölünmesiyle bulunur ve İngilizce kısaltmasıyla CPC diye de anılır. Bir tıklama için ödenen gerçek tutar, verilen en yüksek tekliften düşük olabilir; açık artırmadaki rekabete ve reklamın kalitesine göre değişir.',
    ilgili: { etiket: 'Google reklam ücretleri nasıl belirlenir?', url: '/blog/google-reklam-ucretleri/' },
    kaynak: { ad: `${GOOGLE_ADS}, Ortalama tıklama başına maliyet (Ort. TBM): Tanım`, url: 'https://support.google.com/google-ads/answer/14074?hl=tr' },
  },
  {
    kimlik: 'donusum',
    terim: 'Dönüşüm',
    acilim: 'Conversion',
    kategori: 'Ölçüm',
    tanim:
      'Dönüşüm, reklamı gören ya da reklama tıklayan kişinin işletme için değerli sayılan bir işlemi tamamlamasıdır: satın alma, form gönderme, telefonla arama ya da WhatsApp mesajı gibi. Neyin dönüşüm sayılacağına reklamveren karar verir. Google, reklamdan gelmeyen değerli işlemleri de kapsayan üst kavrama önemli etkinlik der.',
    ornek: 'Reklama tıklayıp numaraya dokunan ve arayan kişi bir dönüşüm olarak sayılır.',
    ilgili: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
    kaynak: { ad: `${GOOGLE_ADS}, Önemli etkinlik, dönüşüm ve satın alma tanımı`, url: 'https://support.google.com/google-ads/answer/6365?hl=tr' },
  },
  {
    kimlik: 'donusum-orani',
    terim: 'Dönüşüm oranı',
    acilim: 'Conversion rate',
    kategori: 'Ölçüm',
    tanim:
      'Dönüşüm oranı, reklamla etkileşime geçenlerin ne kadarının dönüşüm gerçekleştirdiğini gösteren yüzdedir. Dönüşüm sayısı, aynı dönemdeki tıklama ya da etkileşim sayısına bölünerek hesaplanır. Düşük oran çoğu zaman ilgisiz aramalardan gelen tıklamalara ya da telefonda zor kullanılan bir açılış sayfasına işaret eder; hangisi olduğunu arama terimleri ve sayfanın kendisi gösterir.',
    ornek: '40 tıklamadan 4 talep geldiyse dönüşüm oranı %10’dur.',
    ilgili: { etiket: 'ROAS, CTR ve TBM nedir?', url: '/blog/roas-ctr-tbm-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Dönüşüm oranı: Tanım`, url: 'https://support.google.com/google-ads/answer/2684489?hl=tr' },
  },
  {
    kimlik: 'roas',
    terim: 'ROAS',
    acilim: 'Reklam harcamasının getirisi (Return on ad spend)',
    kategori: 'Ölçüm',
    tanim:
      'ROAS (reklam harcamasının getirisi), reklama harcanan her birimin kaç birim dönüşüm değeri getirdiğini gösteren orandır. Dönüşüm değeri reklam harcamasına bölünerek hesaplanır; sonuç oran ya da yüzde olarak yazılır. Doğru okunabilmesi için satış değerinin reklam hesabına aktarılması gerekir. ROAS kârı göstermez; ürün ve hizmet maliyeti ayrıca hesaba katılır.',
    ornek: 'Reklama 200 birim harcanıp 1.000 birimlik satış geldiyse ROAS 5, yani %500’dür.',
    ilgili: { etiket: 'ROAS, CTR ve TBM nedir?', url: '/blog/roas-ctr-tbm-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Hedef ROAS teklifi hakkında`, url: 'https://support.google.com/google-ads/answer/6268637?hl=tr' },
  },
  {
    kimlik: 'donusum-takibi',
    terim: 'Dönüşüm takibi',
    acilim: 'Conversion tracking; Google Ads’te dönüşüm ölçümü',
    kategori: 'Ölçüm',
    tanim:
      'Dönüşüm takibi, reklamdan gelen kişinin sitede ya da telefonda yaptığı değerli işlemleri reklam hesabına sayan kurulumdur. Google Ads’te etiketle, Google Analytics bağlantısıyla ya da arama ölçümüyle; Meta’da piksel ve Dönüşümler API’siyle kurulur. Takip kurulmadan reklam sistemi hangi tıklamanın iş getirdiğini bilemez ve dönüşüm odaklı teklif stratejileri öğrenecek veri bulamaz.',
    ornek: 'Form gönderildikten sonra açılan teşekkür sayfası, dönüşümün sayıldığı yer olarak işaretlenir.',
    ilgili: { etiket: 'Google Ads’te tıklama var, telefon yok', url: '/blog/google-ads-tiklama-var-telefon-yok/' },
    kaynak: { ad: `${GOOGLE_ADS}, Dönüşüm ölçümü hakkında`, url: 'https://support.google.com/google-ads/answer/1722022?hl=tr' },
  },
  {
    kimlik: 'meta-pikseli',
    terim: 'Meta Pikseli',
    acilim: 'Meta Pixel',
    kategori: 'Ölçüm',
    tanim:
      'Meta Pikseli, internet sitesine eklenen ve ziyaretçilerin sitede yaptığı işlemleri Meta reklamlarıyla ilişkilendiren JavaScript kod parçasıdır. Sayfa görüntüleme, sepete ekleme, form gönderme ya da satın alma gibi olayları kaydeder. Meta bu veriyi reklamın sonuçlarını ölçmek, reklamı doğru kişilere göstermek ve yeniden pazarlama kitleleri kurmak için kullanır.',
    ornek: 'Reklamdan gelen kişinin teklif formunu gönderdiği, piksel sayesinde Reklam Yöneticisi’nde görünür.',
    ilgili: { etiket: 'Meta Business Suite nedir?', url: '/blog/meta-business-suite-nedir/' },
    kaynak: { ad: 'Meta for Business, Meta Pikseli', url: 'https://www.facebook.com/business/tools/meta-pixel' },
  },
  {
    kimlik: 'donusumler-api',
    terim: 'Dönüşümler API’si',
    kisaltma: 'CAPI',
    acilim: 'Conversions API',
    kategori: 'Ölçüm',
    tanim:
      'Dönüşümler API’si, sitenin sunucusu, müşteri kayıt sistemi (CRM) ya da başka bir veri kaynağı ile Meta arasında doğrudan kurulan sunucu bağlantısıdır. Tarayıcıya bağlı olmadığı için mağaza, uygulama ve çevrimdışı satış verisini de Meta’ya iletebilir. Meta, ölçümü ve kampanya optimizasyonunu güçlendirmek için Dönüşümler API’sinin Meta Pikseli ile birlikte kullanılmasını önerir.',
    ornek: 'Telefonla kapanan satış, müşteri kayıt sisteminden Dönüşümler API’si üzerinden Meta’ya bildirilir.',
    ilgili: { etiket: 'Meta Reklam Yöneticisi nasıl kullanılır?', url: '/blog/meta-reklam-yoneticisi-nasil-kullanilir/' },
    kaynak: { ad: 'Meta for Business, Dönüşümler API’si', url: 'https://www.facebook.com/business/tools/conversions-api' },
  },
  {
    kimlik: 'ga4',
    terim: 'Google Analytics 4',
    kisaltma: 'GA4',
    kategori: 'Ölçüm',
    tanim:
      'Google Analytics 4 (GA4), web sitesi ve uygulama ziyaretlerini ölçen Google aracıdır. Veriyi oturum yerine etkinlik temelinde toplar: sayfa görüntüleme, tıklama ya da form gönderimi birer etkinliktir. İşletme için değerli etkinlikler önemli etkinlik olarak işaretlenir ve Google Ads’e aktarılabilir. Önceki sürüm Universal Analytics, 1 Temmuz 2023’te veri işlemeyi bıraktı.',
    ornek: 'Formu gönderen ziyaretçi GA4’te “generate_lead” adlı bir etkinlik olarak kaydedilebilir.',
    ilgili: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
    kaynak: { ad: 'Analytics Yardım, Yeni nesil Analytics ile tanışın: Google Analytics', url: 'https://support.google.com/analytics/answer/10089681?hl=tr' },
  },
  {
    kimlik: 'google-etiket-yoneticisi',
    terim: 'Google Etiket Yöneticisi',
    kisaltma: 'GTM',
    acilim: 'Google Tag Manager',
    kategori: 'Ölçüm',
    tanim:
      'Google Etiket Yöneticisi (Google Tag Manager), sitedeki ölçüm ve reklam kodlarını tek bir panelden eklemeyi ve güncellemeyi sağlayan etiket yönetim sistemidir. Siteye bir kez küçük bir kod parçası eklenir; Google Analytics, Google Ads ve Meta Pikseli gibi etiketler sonrasında kod yazmadan kurulur, önizlemede sınanır ve yayınlanır.',
    ornek: 'Telefon numarasına dokunma, Etiket Yöneticisi’nde bir tetikleyiciyle Google Ads dönüşümü olarak sayılır.',
    ilgili: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
    kaynak: { ad: 'Etiket Yöneticisi Yardım, Etiket Yöneticisi’ne genel bakış', url: 'https://support.google.com/tagmanager/answer/6102821?hl=tr' },
  },
  {
    kimlik: 'utm',
    terim: 'UTM parametresi',
    acilim: 'UTM etiketi',
    kategori: 'Ölçüm',
    tanim:
      'UTM parametresi, bir bağlantının sonuna eklenen ve o bağlantıdan gelen ziyaretin kaynağını, ortamını ve kampanyasını Google Analytics’e bildiren etikettir. En çok kullanılanlar utm_source, utm_medium ve utm_campaign’dir. Instagram biyografisi ya da broşürdeki QR kod gibi kendiliğinden etiketlenmeyen bağlantılardan gelen ziyaretleri raporda ayrı görmek için kullanılır.',
    ornek: 'Broşürdeki QR kod, sonunda “utm_source=brosur&utm_medium=qr” yazan bir adrese gider.',
    ilgili: { etiket: 'ROAS, CTR ve TBM nedir?', url: '/blog/roas-ctr-tbm-nedir/' },
    kaynak: { ad: 'Analytics Yardım, URL oluşturucular: Özel URL’lerle kampanya verileri toplama', url: 'https://support.google.com/analytics/answer/10917952?hl=tr' },
  },
  {
    kimlik: 'search-console',
    terim: 'Google Search Console',
    kategori: 'Ölçüm',
    tanim:
      'Google Search Console, sitenin Google Arama’daki durumunu izlemek ve sorunlarını gidermek için Google’ın sunduğu ücretsiz hizmettir. Sitenin hangi aramalarda kaç kez gösterildiğini ve tıklandığını, hangi sayfaların dizinde olduğunu ve taramada yaşanan sorunları gösterir. Google’da görünmek için kayıt şart değildir, ama sitenin Google tarafından nasıl görüldüğünü anlamayı sağlar.',
    ornek: 'Yeni hizmet sayfasının adresi URL Denetleme aracına yapıştırılarak dizinde olup olmadığı görülür.',
    ilgili: { etiket: 'SEO analizi nasıl yapılır?', url: '/blog/seo-analizi-nasil-yapilir/' },
    kaynak: { ad: 'Search Console Yardımı, Search Console hakkında', url: 'https://support.google.com/webmasters/answer/9128668?hl=tr' },
  },

  // ---- SEO ---------------------------------------------------------------------------------------------------------
  {
    kimlik: 'seo',
    terim: 'SEO',
    acilim: 'Arama motoru optimizasyonu (Search engine optimization)',
    kategori: 'SEO',
    tanim:
      'SEO (arama motoru optimizasyonu), bir sitenin arama motorlarının reklam olmayan sonuçlarında, aranan konuya cevap olarak bulunması için yapılan çalışmadır. Sayfaların taranabilir ve dizine eklenebilir olmasını, içeriğin arayan kişinin sorusunu karşılamasını ve başka sitelerden bağlantı almayı kapsar. Sonuçlar reklama göre daha geç gelir; Google hiçbir siteye sıralama garantisi vermez.',
    ornek: '“Koltuk yıkama kadıköy” arayan kişinin, reklam olmayan sonuçlarda sizin hizmet sayfanızı bulması.',
    ilgili: { etiket: 'SEO nedir, nasıl yapılır?', url: '/blog/seo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, SEO Başlangıç Kılavuzu`, url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr' },
  },
  {
    kimlik: 'tarama',
    terim: 'Tarama',
    acilim: 'Crawling',
    kategori: 'SEO',
    tanim:
      'Tarama, arama motorunun tarayıcı adı verilen otomatik programlarla internetteki sayfaları bulup metinlerini, görsellerini ve videolarını indirmesidir. Google yeni sayfaları çoğunlukla bilinen sayfalardaki bağlantılardan ve site haritalarından keşfeder. Taranamayan sayfa dizine eklenemez; robots.txt dosyasındaki bir engel ya da sunucu hataları taramayı durdurabilir.',
    ornek: 'Hiçbir sayfadan bağlantı almayan yeni bir hizmet sayfası, site haritasına da eklenmezse geç bulunur.',
    ilgili: { etiket: 'SEO analizi nasıl yapılır?', url: '/blog/seo-analizi-nasil-yapilir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Google Arama’nın işleyiş şekliyle ilgili ayrıntılı kılavuz`, url: 'https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr' },
  },
  {
    kimlik: 'dizine-ekleme',
    terim: 'Dizine ekleme',
    acilim: 'Indexing',
    kategori: 'SEO',
    tanim:
      'Dizine ekleme, Google’ın taradığı bir sayfanın metnini, görsellerini ve videolarını inceleyip bilgileri Google dizini adı verilen büyük veritabanına kaydetmesidir. Yalnız dizindeki sayfalar arama sonuçlarında ve Google’ın yapay zekâ özelliklerinde gösterilebilir. Google taranan her sayfayı dizine almaz; sayfanın başka bir sayfanın kopyası olması ya da noindex etiketi taşıması bunun nedeni olabilir.',
    ornek: 'Search Console’daki Sayfa dizine ekleme raporu, dizinde olmayan sayfaları nedenleriyle listeler.',
    ilgili: { etiket: 'SEO nedir, nasıl yapılır?', url: '/blog/seo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Google Arama’nın işleyiş şekliyle ilgili ayrıntılı kılavuz`, url: 'https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr' },
  },
  {
    kimlik: 'kuralli-url',
    terim: 'Kurallı URL',
    acilim: 'Canonical URL; Google’ın Türkçe belgelerinde standart URL',
    kategori: 'SEO',
    tanim:
      'Kurallı URL, aynı ya da çok benzer içeriğe birden fazla adresten ulaşılabildiğinde arama motorunun asıl kabul ettiği adrestir. Site sahibi tercihini yönlendirmeyle, site haritasıyla ya da sayfaya eklenen rel="canonical" etiketiyle bildirir; bu etikete kurallı etiket denir. Google bu sinyalleri dikkate alır, ama sonuçlarda hangi adresi göstereceğine kendisi karar verir.',
    ornek: 'Aynı sayfa “/hizmetler/” ve “/hizmetler/?kaynak=instagram” adresleriyle açılıyorsa kurallı URL “/hizmetler/” olur.',
    ilgili: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, rel="canonical" ve diğer yöntemlerle standart URL belirtme`, url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr' },
  },
  {
    kimlik: 'site-haritasi',
    terim: 'Site haritası',
    acilim: 'Sitemap',
    kategori: 'SEO',
    tanim:
      'Site haritası, sitedeki önemli sayfaları ve dosyaları arama motorlarına bildiren, çoğunlukla XML biçimindeki dosyadır. Sayfanın son güncellenme tarihi ya da başka dillerdeki sürümleri gibi bilgileri de taşıyabilir. Google’ın siteyi daha verimli taramasına yardım eder; yine de haritadaki her adresin taranacağı ya da dizine ekleneceği garanti değildir.',
    ornek: 'Yeni açılan bir sitenin site haritası, Search Console’daki Site haritaları raporundan Google’a gönderilir.',
    ilgili: { etiket: 'SEO nedir, nasıl yapılır?', url: '/blog/seo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Site haritası nedir?`, url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr' },
  },
  {
    kimlik: 'robots-txt',
    terim: 'robots.txt',
    kategori: 'SEO',
    tanim:
      'robots.txt, sitenin kök dizininde duran ve arama motoru tarayıcılarına sitedeki hangi adreslere erişebileceklerini bildiren metin dosyasıdır. Asıl işi, tarayıcı isteklerinin sunucuyu gereksiz yere yormasını önlemektir. Bir sayfayı Google sonuçlarının dışında tutmak için bu dosya yeterli olmaz; Google bunun için noindex etiketini ya da şifre korumasını önerir.',
    ornek: 'Yönetim panelinin adresi robots.txt’de engellenerek tarayıcıların oraya istek göndermesi önlenir.',
    ilgili: { etiket: 'SEO analizi nasıl yapılır?', url: '/blog/seo-analizi-nasil-yapilir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Robots.txt dosyasına giriş`, url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr' },
  },
  {
    kimlik: 'backlink',
    terim: 'Backlink',
    acilim: 'Geri bağlantı',
    kategori: 'SEO',
    tanim:
      'Backlink (geri bağlantı), başka bir sitedeki sayfadan sizin sitenizdeki bir sayfaya verilen bağlantıdır. Google bağlantıları hem yeni sayfaları bulmak hem de sayfaların konuyla ne kadar ilgili olduğunu anlamak için kullanır. Satın alınan ya da sıralamayı etkilemek için düzenlenen bağlantılar Google’ın spam politikalarına aykırıdır; değerli olan, gerçek bir nedenle verilen bağlantıdır.',
    ornek: 'Esnaf odasının üye rehberinde sitenize verilen bağlantı bir backlink’tir.',
    ilgili: { etiket: 'Backlink nedir, nasıl alınır?', url: '/blog/backlink-nedir/' },
    kaynak: { ad: 'Search Console Yardımı, Bağlantı raporu', url: 'https://support.google.com/webmasters/answer/9049606?hl=tr' },
  },
  {
    kimlik: 'anahtar-kelime-arastirmasi',
    terim: 'Anahtar kelime araştırması',
    acilim: 'Keyword research',
    kategori: 'SEO',
    tanim:
      'Anahtar kelime araştırması, müşterinin bir ürünü ya da hizmeti ararken Google’a hangi ifadeleri yazdığını ve bu ifadelerin ayda yaklaşık kaç kez arandığını bulma çalışmasıdır. Her ifadede arayanın niyeti de not edilir: bilgi mi istiyor, satın almaya mı hazır? Google Anahtar Kelime Planlayıcı ve Search Console başlıca veri kaynaklarıdır; çıkan liste reklam kampanyasına ve yazılacak sayfalara yön verir.',
    ornek: '“Gardırop çeşitleri” bilgi arayanın, “gardırop yaptırma izmir” usta arayanın aramasıdır.',
    ilgili: { etiket: 'Anahtar kelime nedir, nasıl bulunur?', url: '/blog/anahtar-kelime-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Anahtar Kelime Planlayıcı’yı kullanma`, url: 'https://support.google.com/google-ads/answer/7337243?hl=tr' },
  },
  {
    kimlik: 'yapilandirilmis-veri',
    terim: 'Yapılandırılmış veri',
    acilim: 'Structured data, schema işaretlemesi',
    kategori: 'SEO',
    tanim:
      'Yapılandırılmış veri, bir sayfanın içeriğini arama motorlarına standart bir biçimle tarif eden koddur; çoğunlukla schema.org sözlüğüyle ve JSON-LD biçiminde yazılır. İşletmenin adı, adresi ve çalışma saatleri ya da bir tarifin pişirme süresi gibi bilgileri açıkça belirtir. Google bu veriyi zengin sonuçlarda kullanabilir, ancak zengin sonuç gösterileceğini garanti etmez.',
    ornek: 'Bu sözlükteki her terim, schema.org’un DefinedTerm türüyle işaretlenmiştir.',
    ilgili: { etiket: 'GEO nedir, SEO’dan farkı ne?', url: '/blog/geo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş`, url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr' },
  },
  {
    kimlik: 'core-web-vitals',
    terim: 'Core Web Vitals',
    kategori: 'SEO',
    tanim:
      'Core Web Vitals, bir sayfanın gerçek kullanıcılardaki yüklenme hızını, dokunuşlara tepki süresini ve görsel kararlılığını ölçen Google metrikleridir: LCP, INP ve CLS. Google’a göre iyi bir deneyim için LCP en fazla 2,5 saniye, INP 200 milisaniyenin altında, CLS ise 0,1’in altında olmalıdır. Değerler Search Console ve PageSpeed Insights’ta görülür.',
    ornek: 'Sayfa açılırken geç yüklenen bir bant yüzünden aşağı kayan metin, CLS değerini yükseltir.',
    ilgili: { etiket: 'SEO analizi nasıl yapılır?', url: '/blog/seo-analizi-nasil-yapilir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Core Web Vitals ve Google arama sonuçlarını anlama`, url: 'https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr' },
  },
  {
    kimlik: 'lcp',
    terim: 'LCP',
    acilim: 'Largest Contentful Paint',
    kategori: 'SEO',
    tanim:
      'LCP (Largest Contentful Paint), sayfa açılırken ekranda görünen en büyük görselin, metin bloğunun ya da videonun ne kadar sürede yüklendiğini ölçen Core Web Vitals metriğidir. Ziyaretçinin sayfanın ana içeriğini ne zaman gördüğünü yansıtır. Google iyi bir LCP için 2,5 saniye ya da daha kısa bir süreyi hedef gösterir.',
    ornek: 'Telefonda geç inen büyük bir kapak fotoğrafı, LCP süresini uzatır.',
    ilgili: { etiket: 'SEO analizi nasıl yapılır?', url: '/blog/seo-analizi-nasil-yapilir/' },
    kaynak: { ad: 'web.dev (Google), Largest Contentful Paint (LCP)', url: 'https://web.dev/articles/lcp?hl=tr' },
  },
  {
    kimlik: 'yerel-seo',
    terim: 'Yerel SEO',
    acilim: 'Local SEO',
    kategori: 'SEO',
    tanim:
      'Yerel SEO, bir işletmenin Google Haritalar’da ve şehir ya da ilçe adıyla yapılan aramalarda bulunması için yapılan çalışmadır. Google İşletme Profili’nin eksiksiz tutulmasını ve adres ile telefonun her yerde aynı yazılmasını kapsar. Google yerel sonuçları başlıca alaka düzeyine, mesafeye ve işletmenin ne kadar tanındığına göre sıralar.',
    ornek: '“Yakınımdaki çilingir” aramasında haritada çıkan işletmeler yerel SEO’nun alanına girer.',
    ilgili: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
    kaynak: { ad: 'Google İşletme Profili Yardım, Google’daki yerel sıralamanızı yükseltmeyle ilgili ipuçları', url: 'https://support.google.com/business/answer/7091?hl=tr' },
  },
  {
    kimlik: 'google-isletme-profili',
    terim: 'Google İşletme Profili',
    acilim: 'Google Business Profile; eski adıyla Google Benim İşletmem',
    kategori: 'SEO',
    tanim:
      'Google İşletme Profili, bir işletmenin Google Arama ve Google Haritalar’da görünen kaydını oluşturup yönetmeye yarayan Google aracıdır. Adres, çalışma saatleri, telefon, web sitesi, fotoğraflar ve hizmetler buradan güncellenir; müşteri yorumları da buradan yanıtlanır. Eski adı Google Benim İşletmem’dir. Profil, işletmenin sahibi olduğunuz doğrulandıktan sonra yönetilir.',
    ornek: 'Pastanenin yeni çalışma saatleri profilde güncellenince Haritalar’da da değişir.',
    ilgili: { etiket: 'Google Haritalara işletme ekleme rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
    kaynak: { ad: `${GOOGLE_ADS}, İşletme Profili: Tanım`, url: 'https://support.google.com/google-ads/answer/2382892?hl=tr' },
  },
  {
    kimlik: 'e-e-a-t',
    terim: 'E-E-A-T',
    acilim: 'Experience, Expertise, Authoritativeness, Trustworthiness; Türkçe belgelerde D-U-Y-G',
    kategori: 'SEO',
    tanim:
      'E-E-A-T, Google’ın içeriği değerlendirirken baktığı deneyim, uzmanlık, yetkinlik ve güvenilirlik niteliklerinin İngilizce kısaltmasıdır; Google’ın Türkçe belgelerinde D-U-Y-G diye geçer. Bu nitelikler arasında en önemlisi güvenilirliktir. E-E-A-T tek başına bir sıralama faktörü sayılmaz; Google’ın sistemleri bu nitelikleri gösteren içeriği öne çıkarmaya çalışır.',
    ornek: 'Hizmeti kendisi veren ustanın, yaptığı işin fotoğraflarıyla anlattığı sayfa deneyimi gösterir.',
    ilgili: { etiket: 'SEO nedir, nasıl yapılır?', url: '/blog/seo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Kullanıcı odaklı, faydalı ve güvenilir içerikler oluşturma`, url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr' },
  },

  // ---- GEO ve AEO --------------------------------------------------------------------------------------------------
  {
    kimlik: 'geo',
    terim: 'GEO',
    acilim: 'Üretken arama motoru optimizasyonu (Generative engine optimization)',
    kategori: 'GEO ve AEO',
    tanim:
      'GEO (üretken arama motoru optimizasyonu), ChatGPT, Gemini, Perplexity ve Google’ın AI Modu gibi yapay zekâ araçlarının yanıtlarında işletmenin doğru bilgiyle anılması ve kaynak gösterilmesi için yapılan çalışmadır. Google’a göre bu çalışma SEO’nun kapsamındadır; taranabilir sayfalar ve soruya açık cevap veren özgün içerik burada da temeldir.',
    ornek: '“İzmir’de ölçüye göre masa yapan atölyeler” sorusunun yanıtında işletmenizin adının ve sayfanızın geçmesi.',
    ilgili: { etiket: 'GEO nedir, SEO’dan farkı ne?', url: '/blog/geo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Google Arama’daki üretken yapay zekâ özellikleri için optimizasyon rehberi`, url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=tr' },
  },
  {
    kimlik: 'aeo',
    terim: 'AEO',
    acilim: 'Yanıt motoru optimizasyonu (Answer engine optimization)',
    kategori: 'GEO ve AEO',
    tanim:
      'AEO (yanıt motoru optimizasyonu), bir soruya doğrudan verilen yanıtta sayfanızın ya da işletmenizin yer alması için yapılan çalışmadır. Soruyu başlıkta, cevabı ilk cümlede açıkça veren ve bağlamından koparıldığında da anlaşılan paragraflar yazmaya dayanır. Google, AEO ve GEO’yu SEO’nun bir parçası olarak görür ve bu yanıtlarda yer almak için ek teknik koşul aramaz.',
    ornek: '“Masif masa nasıl temizlenir?” sorusuna sayfanızın ilk cümlesinin doğrudan cevap vermesi.',
    ilgili: { etiket: 'GEO ve AEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Google Arama’daki üretken yapay zekâ özellikleri için optimizasyon rehberi`, url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=tr' },
  },
  {
    kimlik: 'yapay-zeka-ozeti',
    terim: 'Yapay zekâ özeti',
    acilim: 'AI Overviews; Google’ın Türkçe arayüzünde AI Bakışı',
    kategori: 'GEO ve AEO',
    tanim:
      'Yapay zekâ özeti, Google’ın bazı aramalarda sonuçların üstünde gösterdiği, üretken yapay zekâyla hazırlanmış ve ayrıntı için kaynak bağlantıları içeren kısa yanıttır. İngilizce adı AI Overviews, Türkçe arayüzdeki adı AI Bakışı’dır. Google bu özeti, sistemlerinin yapay zekâyı faydalı bulduğu aramalarda gösterir; kaynak olarak yalnız dizindeki sayfalar kullanılabilir.',
    ornek: '“Kombi neden su kaçırır?” aramasında sonuçların üstünde çıkan ve yanında kaynak siteleri gösteren özet.',
    ilgili: { etiket: 'Google AI Modu nedir?', url: '/blog/google-ai-modu-nedir/' },
    kaynak: { ad: 'Google Arama Yardım, Google Arama’daki AI Bakışı özelliği', url: 'https://support.google.com/websearch/answer/14901683?hl=tr' },
  },
  {
    kimlik: 'ai-modu',
    terim: 'Google AI Modu',
    acilim: 'AI Mode',
    kategori: 'GEO ve AEO',
    tanim:
      'Google AI Modu, soruyu yapay zekâyla yanıtlayan, takip sorularıyla sohbet gibi sürdürülebilen ve yanıtın yanında kaynak sitelere bağlantı veren Google arama modudur. Soru alt konulara bölünür ve her biri aynı anda aranır. AI Bakışı’ndan farkı, daha uzun ve ayrıntılı bir yanıt üretmesi ve konuşmanın ek sorularla devam edebilmesidir.',
    ornek: 'Kişi önce “Bodrum’da kahvaltı nerede yapılır?” diye sorar, ardından “deniz manzaralı olanlar hangileri?” diye devam eder.',
    ilgili: { etiket: 'Google AI Modu nedir?', url: '/blog/google-ai-modu-nedir/' },
    kaynak: { ad: 'Google Arama Yardım, Google Arama’da AI Modu ile yapay zekâ destekli yanıtlar alma', url: 'https://support.google.com/websearch/answer/16011537?hl=tr' },
  },
  {
    kimlik: 'sorgu-yayilimi',
    terim: 'Sorgu yayılımı',
    acilim: 'Query fan-out; Google belgelerinde sorgu yayma',
    kategori: 'GEO ve AEO',
    tanim:
      'Sorgu yayılımı, yapay zekâ destekli aramanın bir soruyu alt konulara bölüp her biri için ayrı aramalar yapması ve bulduklarını tek bir yanıtta birleştirmesidir. Google, AI Bakışı ve AI Modu’nun bu tekniği kullanabildiğini belirtir. Bu yüzden bir sayfa, ana sorunun alt sorularından birine verdiği cevapla da yanıtta kaynak gösterilebilir.',
    ornek: '“Sakin koy ve kalacak yer” sorusu koy, ulaşım ve konaklama aramalarına ayrılır.',
    ilgili: { etiket: 'Google AI Modu nedir?', url: '/blog/google-ai-modu-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Yapay zekâ özellikleri ve web siteniz`, url: 'https://developers.google.com/search/docs/appearance/ai-features?hl=tr' },
  },
  {
    kimlik: 'kaynak-gosterme',
    terim: 'Kaynak gösterme',
    acilim: 'Citation, alıntı',
    kategori: 'GEO ve AEO',
    tanim:
      'Kaynak gösterme, yapay zekâ aracının yanıtı hazırlarken yararlandığı web sayfasına yanıtın içinde ya da yanında bağlantı vermesidir. AI Bakışı, AI Modu, Gemini, ChatGPT ve Perplexity kaynak bağlantısı gösterebilir. Google’ın yapay zekâ özelliklerinde kaynak olarak gösterilebilmek için sayfanın dizinde olması ve arama sonuçlarında snippet ile gösterilmeye uygun olması gerekir.',
    ornek: 'Yanıtın yanındaki bağlantılardan biri sizin hizmet sayfanızdır.',
    ilgili: { etiket: 'GEO nedir, SEO’dan farkı ne?', url: '/blog/geo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Yapay zekâ özellikleri ve web siteniz`, url: 'https://developers.google.com/search/docs/appearance/ai-features?hl=tr' },
  },
  {
    kimlik: 'llms-txt',
    terim: 'llms.txt',
    kategori: 'GEO ve AEO',
    tanim:
      'llms.txt, sitenin kök dizinine konan ve büyük dil modellerine sitenin önemli sayfalarını Markdown biçiminde özetlemek için önerilmiş bir metin dosyasıdır. 2024’te ortaya atılan bir öneridir; yapay zekâ araçlarının hepsi bu dosyayı okumaz. Google, Google Arama’nın bu dosyayı kullanmadığını, dosyanın görünürlüğe ne katkı ne zarar getirdiğini belirtir.',
    ilgili: { etiket: 'GEO nedir, SEO’dan farkı ne?', url: '/blog/geo-nedir/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Google Arama’daki üretken yapay zekâ özellikleri için optimizasyon rehberi`, url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=tr' },
  },
  {
    kimlik: 'varlik',
    terim: 'Varlık',
    acilim: 'Entity',
    kategori: 'GEO ve AEO',
    tanim:
      'Varlık, arama motorlarının ve dil modellerinin tek ve belirli bir şey olarak tanıdığı kişi, yer, kuruluş, ürün ya da kavramdır. Google varlıkları ve aralarındaki ilişkileri Bilgi Grafiği’nde tutar. Bir işletmenin varlık olarak doğru tanınması için adı, adresi ve yaptığı iş sitede, İşletme Profili’nde ve başka sitelerde aynı biçimde yazılmalıdır.',
    ornek: 'Sitesinde, İşletme Profili’nde ve sektör rehberinde aynı adla ve aynı adresle geçen bir mobilya atölyesi.',
    ilgili: { etiket: 'GEO ve AEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
  },

  // ---- Web ---------------------------------------------------------------------------------------------------------
  {
    kimlik: 'alan-adi',
    terim: 'Alan adı',
    acilim: 'Domain',
    kategori: 'Web',
    tanim:
      'Alan adı, bir sitenin internetteki adresidir; ziyaretçi tarayıcıya bu adı yazarak siteye ulaşır. Ad ve “.com” ya da “.com.tr” gibi bir uzantıdan oluşur. Bir kayıt firması üzerinden belirli bir süre için kaydedilir ve süresi dolmadan yenilenmezse kaybedilebilir. İşletmenin kendi hesabına ve kendi e-postasıyla kayıtlı olması sonraki erişim sorunlarını önler.',
    ornek: '“ornek.com.tr” adresinde “ornek” ad, “.com.tr” uzantıdır.',
    ilgili: { etiket: 'Domain ve hosting nedir?', url: '/blog/domain-ve-hosting-nedir/' },
  },
  {
    kimlik: 'barindirma',
    terim: 'Barındırma',
    acilim: 'Hosting',
    kategori: 'Web',
    tanim:
      'Barındırma, sitenin dosyalarını ve veritabanını internete bağlı bir sunucuda saklayan ve alan adını yazan ziyaretçiye siteyi gönderen hizmettir. Alan adından ayrı bir hizmettir ve başka bir firmadan alınabilir; ikisi DNS kayıtlarıyla birbirine bağlanır. Sunucunun hızı ve kesintisiz çalışması, sitenin ne kadar çabuk açıldığını doğrudan etkiler.',
    ornek: 'Alan adı kapıdaki numaraysa barındırma dükkânın kendisidir.',
    ilgili: { etiket: 'Domain ve hosting nedir?', url: '/blog/domain-ve-hosting-nedir/' },
  },
  {
    kimlik: 'ssl-sertifikasi',
    terim: 'SSL sertifikası',
    acilim: 'SSL/TLS sertifikası',
    kategori: 'Web',
    tanim:
      'SSL sertifikası, site ile ziyaretçinin tarayıcısı arasındaki bağlantıyı şifreleyen ve sitenin kimliğini doğrulayan dijital sertifikadır. Sertifikalı sitenin adresi “https” ile başlar ve forma yazılan bilgiler yolda okunamaz. Güvenli bağlantı kullanmayan sitede Chrome “Güvenli değil” uyarısı gösterir. Bugün kullanılan protokolün adı TLS olsa da SSL adı yaygın kalmıştır.',
    ornek: 'Teklif formu “http” ile açılan bir sayfada duruyorsa ziyaretçi adres çubuğunda uyarı görür.',
    ilgili: { etiket: 'Domain ve hosting nedir?', url: '/blog/domain-ve-hosting-nedir/' },
    kaynak: { ad: 'Google Chrome Yardım, Site bağlantılarının güvenli olup olmadığını kontrol etme', url: 'https://support.google.com/chrome/answer/95617?hl=tr' },
  },
  {
    kimlik: 'mobil-uyum',
    terim: 'Mobil uyum',
    acilim: 'Mobile-friendly',
    kategori: 'Web',
    tanim:
      'Mobil uyum, bir sitenin telefonda yakınlaştırma gerektirmeden okunabilmesi ve düğmelerine parmakla rahatça dokunulabilmesidir. Google, dizine ekleme ve sıralama için sayfaların mobil sürümünü esas alır; buna mobil öncelikli dizine ekleme denir. Önerilen yöntem, aynı sayfanın ekran boyutuna göre kendini yeniden düzenlediği duyarlı tasarımdır.',
    ornek: 'Masaüstünde üç sütun duran hizmetler telefonda alt alta gelir.',
    ilgili: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Mobil site ve mobil öncelikli dizine ekleme en iyi uygulamaları`, url: 'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr' },
  },
  {
    kimlik: 'acilis-sayfasi',
    terim: 'Açılış sayfası',
    acilim: 'Landing page',
    kategori: 'Web',
    tanim:
      'Açılış sayfası, reklama ya da bir bağlantıya tıklayan kişinin ulaştığı sayfadır. İyi bir açılış sayfası reklamdaki sözü sürdürür ve ziyaretçiden tek bir işlem ister, örneğin aramasını ya da formu doldurmasını. Google Ads’te açılış sayfası deneyimi, Kalite Puanı’nı oluşturan bileşenlerden biridir ve sayfanın ne kadar alakalı ve kullanışlı olduğuna bakar.',
    ornek: '“Acil kombi servisi” reklamına tıklayan kişi, arama düğmesi en üstte duran servis sayfasına iner.',
    ilgili: { etiket: 'Landing page (açılış sayfası) nedir?', url: '/blog/landing-page-nedir/' },
    kaynak: { ad: `${GOOGLE_ADS}, Açılış sayfası`, url: 'https://support.google.com/google-ads/answer/14086?hl=tr' },
  },
  {
    kimlik: 'yonlendirme-301',
    terim: '301 yönlendirme',
    acilim: 'Kalıcı yönlendirme (301 Moved Permanently)',
    kategori: 'Web',
    tanim:
      '301 yönlendirme, eski bir adrese gelen ziyaretçiyi ve arama motorunu kalıcı olarak yeni adrese gönderen sunucu ayarıdır. Google kalıcı yönlendirmeyi, arama sonuçlarında yeni adresin gösterilmesi gerektiği yönünde güçlü bir sinyal sayar. Site yenilenirken ya da adresler değişirken kurulmazsa eski bağlantılar hata sayfasına düşer ve eski adresin arama görünürlüğü kaybolabilir.',
    ornek: 'Eski “/hizmetlerimiz” adresi, site yenilendikten sonra yeni hizmet sayfasını açar.',
    ilgili: { etiket: 'Web sitesi fiyatları neye göre değişir?', url: '/blog/web-sitesi-fiyatlari/' },
    kaynak: { ad: `${ARAMA_MERKEZI}, Yönlendirmeler ve Google Arama`, url: 'https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr' },
  },
];

/** Kategoriye göre terimler (veri dosyasındaki sırayla). */
export const kategoriTerimleri = (kategori: SozlukKategorisi) => SOZLUK.filter((t) => t.kategori === kategori);

/** Türkçe alfabeye göre sıralı dizin: harf başlığı ve o harfle başlayan terimler. Rakamla başlayanlar "0-9" altında. */
export const harfDizini = () => {
  const sirali = [...SOZLUK].sort((a, b) => a.terim.localeCompare(b.terim, 'tr', { sensitivity: 'base' }));
  const gruplar = new Map<string, SozlukTerimi[]>();
  for (const t of sirali) {
    const ilk = t.terim.charAt(0).toLocaleUpperCase('tr-TR');
    const harf = /\d/.test(ilk) ? '0-9' : ilk;
    gruplar.set(harf, [...(gruplar.get(harf) ?? []), t]);
  }
  return [...gruplar.entries()].map(([harf, terimler]) => ({ harf, terimler }));
};

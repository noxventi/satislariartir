/**
 * Pendik web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "pendik web tasarım" (320). Yan niyet: "pendik reklam ajansı" (90), "pendik web tasarım ajansı" (20),
 * "pendik seo" (10). Pano, İstanbul geneli ve komşu ilçe ifadeleriyle tamamlandı: "istanbul web tasarım" (1.000),
 * "web tasarım istanbul" (320), "kartal web tasarım" (210), "tuzla web tasarım" (170).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Pendik’te ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir. "Pendik reklam ajansı" arayanlar için ne
 * yaptığımız (Google Ads, Instagram ve Facebook reklamı) ve ne yapmadığımız (tabela, baskı, açık hava) açıkça yazılır.
 * Yerel bilgiler herkesçe bilinen olgulardır: Kurtköy’deki Sabiha Gökçen Havalimanı ve çevresindeki araç kiralama
 * firmaları ile oteller, Şeyhli ve Kurtköy’deki sanayi ve depolar, Pendik limanındaki Ro-Ro seferleri, sahildeki çarşı
 * ve marina, Kurtköy’ün yeni konut siteleri. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'pendik-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Pendik',
  yerDe: 'Pendik’te',
  hizmet: 'web',
  baslik: 'Pendik web tasarım',
  metaBaslik: 'Pendik Web Tasarım: İstanbul Anadolu Yakası',
  metaAciklama:
    'Pendik’teki işletmeler için web tasarım: havalimanı çevresindeki firmadan Kurtköy’deki işletmeye, mobil bağlantıda hızlı açılan hizmet sayfaları. İşi uzaktan yürütüyoruz.',
  ozet: 'Havalimanı çevresindeki araç kiralama firmasından Şeyhli’deki nakliyeciye, Pendik’te telefonda hızlı açılan ve doğru kişiye konuşan web siteleri.',
  tanim: [
    'Pendik’teki işletmeler için web tasarım, havalimanına inen yolcunun, yük taşıtacak firmanın ya da Kurtköy’e yeni taşınan ailenin aradığı hizmeti telefonunda ilk ekranda bulduğu ve tek dokunuşla işletmeye ulaştığı web sitesinin hazırlanıp yayına alınması işidir.',
    'Pendik’te müşterinin bir bölümü ilçeye uçakla geliyor. Sabiha Gökçen Havalimanı’nın çevresindeki araç kiralama firmaları ve oteller yolcuya, Şeyhli ile Kurtköy’deki depolar ve üreticiler başka firmalara, çarşıdaki esnaf ve marinanın çevresindeki işletmeler ilçede oturana satıyor. Siteyi bu üç müşteriden hangisine konuştuğunuza göre kuruyor, işi baştan sona uzaktan, telefon ve görüntülü görüşmeyle yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Pendik’te web sitesi için hangi aramalar yapılıyor?',
    giris: 'Ölçtüğümüz Anadolu Yakası ilçeleri içinde “web tasarım” ile birlikte en çok yazılan ilçe adı Pendik.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'pendik web tasarım', hacim: 320 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'kartal web tasarım', hacim: 210 },
      { ifade: 'tuzla web tasarım', hacim: 170 },
      { ifade: 'pendik reklam ajansı', hacim: 90 },
      { ifade: 'pendik web tasarım ajansı', hacim: 20 },
      { ifade: 'pendik seo', hacim: 10 },
    ],
    yorum: [
      '“Pendik web tasarım” ayda yaklaşık 320 kez aranıyor; komşu Kartal için 210, Tuzla için 170 ölçüldü. “Pendik reklam ajansı” da ayda 90 kadar yazılıyor. Bu ifadeyi yazanların hepsi dijital reklam aramıyor, aralarında tabelacı ve matbaa arayan da var. Biz Google Ads ile Instagram ve Facebook reklamlarını yönetiyoruz; tabela, baskı ve açık hava reklamı işimiz değil.',
      'Ölçüm ülke genelini kapsıyor; aramanın Pendik’ten mi başka bir yerden mi yapıldığını bilmiyoruz. Sitenizin sayfalarını ise müşterinizin kendi aramaları belirliyor: “sabiha gökçen araç kiralama”, “kurtköy anaokulu”, “pendik parsiyel taşımacılık” gibi. Bu ifadelerin hacmine proje başında sizin işiniz için ayrıca bakıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Pendik’te üç işletme, üç ayrı site sorunu',
    giris: 'Havalimanının çevresinde, depo ve sanayi bölgesinde ve yeni konut mahallelerinde siteden beklenen iş birbirine benzemiyor.',
    kartlar: [
      {
        soru: 'Yolcu bizi havalimanında telefonundan bulabiliyor mu?',
        ornek:
          'Kurtköy’de araç kiralayan bir firmanın sitesi mobil bağlantıda geç açılıyor; araç sınıfları ve teslim yeri ilk ekranda görünmüyor. Bagajını beklerken arama yapan yolcu, sayfa açılana kadar bir sonraki firmayı arıyor.',
        care: 'İlk ekrana araç sınıflarını, teslim yerini ve arama düğmesini koyuyor, sayfayı gerçek telefonda deniyoruz.',
        cizim: 'kronometre',
        bag: { etiket: 'Otomotiv sektörü', url: '/sektorler/otomotiv/' },
      },
      {
        soru: 'Nakliyeciyiz, sitemizden neden yük talebi gelmiyor?',
        ornek:
          'Şeyhli’de deposu olan bir nakliye firmasının sitesinde yalnız “yurt içi ve yurt dışı taşımacılık” yazıyor. Yükünü Pendik limanından Ro-Ro ile Avrupa’ya gönderecek ihracatçı ise hangi hatta, hangi araçla çalışıldığını görmeden teklif istemiyor.',
        care: 'Her taşıma türüne ve hatta ayrı sayfa açıyor, teklif formunda yükün cinsini, çıkış ve varış yerini soruyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Kurtköy’deyiz, sitede Pendik mi yazmalı?',
        ornek:
          'Kurtköy’deki yeni sitelerin arasında açılan bir anaokulunun web sitesi yok; haritadaki kaydında adres olarak yalnız “Pendik” geçiyor. Mahalleye yeni taşınan veli “kurtköy anaokulu” yazıyor, okulu sahildeki Pendik merkezinde sanıp sonucu açmıyor.',
        care: 'Küçük bir site kuruyor, semt ve ilçe adını başlıkta, adres satırında ve Google İşletme Profili’nde birlikte yazıyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
    ],
  },

  isler: {
    baslik: 'Pendik’teki işletmeniz için neler yapıyoruz?',
    giris: 'Yolcuya, yük sahibine ya da mahalle sakinine konuşan bir sitede aşağıdaki dört iş birlikte yapılır.',
    liste: [
      { ad: 'Hizmet, hat ve araç sayfaları', aciklama: 'Araç kiralamada araç sınıflarına, nakliyede hatlara, otelde oda tiplerine ayrı sayfa açıyoruz; her sayfa tek bir talebe götürür.' },
      { ad: 'Mobil bağlantıda hızlı açılış', aciklama: 'Havalimanında ya da yolda sitenizi açan kişi mobil bağlantıdadır. Görselleri ekrana göre küçültüyor, sayfayı ağırlaştıran eklentileri kullanmıyoruz.' },
      { ad: 'İngilizce sayfalar', aciklama: 'Yabancı yolcuya ya da yurt dışındaki yük sahibine hizmet veriyorsanız aynı sayfaların İngilizcesini kuruyor, metni yayından önce size onaylatıyoruz.' },
      { ad: 'Semt adı ve harita kaydı', aciklama: 'Kurtköy, Kaynarca ya da Güzelyalı’daysanız semt adını Pendik ile birlikte yazıyor, Google İşletme Profili’ndeki adresi ve telefonu siteyle aynı hâle getiriyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Pendik’te web tasarım hakkında sık sorulan sorular',
    giris: 'Web sitesi, reklam ve semt adı üzerine Pendik’teki bir işletmenin aklına gelen sorular.',
    sorular: [
      {
        soru: 'Pendik’te reklam ajansı arıyorum, reklam da yönetiyor musunuz?',
        cevap:
          'Evet, Google Ads ile Instagram ve Facebook reklamlarını yönetiyoruz; tabela, baskı, araç giydirme ve açık hava reklamı yapmıyoruz. Reklama başlamadan önce reklamın ineceği sayfayı inceliyoruz. Havalimanı transferi arayan kişi ana sayfaya inip aradığını bulamazsa o tıklamanın ücreti boşa gider.',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Havalimanı çevresindeki bir işletmenin sitesi İngilizce de olmalı mı?',
        cevap:
          'Yabancı yolcuya hizmet veriyorsanız evet. Araç kiralama, otel ve transfer arayan yabancı yolcu aramasını çoğu zaman İngilizce yapar; teslim yerini ve iptal koşulunu da kendi dilinde okumak ister. Yalnız ilçede oturanlara hizmet veren bir işletmede ikinci dil gerekmez.',
      },
      {
        soru: 'Kurtköy’deki işletme sitesinde Kurtköy mü, Pendik mi yazmalı?',
        cevap:
          'İkisini birlikte yazmalı: “Kurtköy, Pendik”. Kurtköy ile sahildeki Pendik merkezi birbirinden uzak olduğu için müşteri aramasına çoğu zaman semtin adını yazıyor; ilçe adı ise adresin resmî parçası. Aynı yazımı sayfa başlığında, iletişim sayfasında ve Google İşletme Profili’nde kullanıyoruz.',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Yüz yüze görüşmeden Pendik’teki işletmeme site yapılır mı?',
        cevap:
          'Evet, yapılır; projeleri uzaktan yürütüyoruz. Toplantılar telefonla ya da görüntülü olur, hazırlanan sayfaları size bağlantıyla gönderiyoruz. Siteyi yayından önce kendi telefonunuzda, mümkünse mobil bağlantıyla açıp denemenizi istiyoruz.',
      },
      {
        soru: 'Pendik’te web sitesi yaptırınca SEO da yapılmış olur mu?',
        cevap:
          'Kısmen: siteyi aramaya uygun kuruyoruz, ama düzenli SEO çalışması ayrı bir iştir. Kurulumda her sayfanın başlığını ve adresini müşterinizin aramasına göre yazıyor, site haritasını hazırlıyoruz. Yayından sonra yeni sayfa açmak, içerik eklemek ve harita kaydını güncel tutmak SEO danışmanlığının konusudur.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
    ],
  },
};

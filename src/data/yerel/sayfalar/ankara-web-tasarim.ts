/**
 * Ankara web tasarım. ÖRNEK SAYFA: diğer şehir ve ilçe sayfaları uzunluk, ton ve ayrıntı düzeyi için bunu izler.
 * Ana niyet: "ankara web tasarım" (2.900), "web tasarım ankara" (320), "ankara web tasarım firmaları" (260),
 * "ankara web tasarım ajansı" (170). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Aynı hacmi gösteren "ankara web tasarımı" yakın yazım sayıldığı için listeye ayrıca alınmadı.
 * Ankara'da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü açıkça söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: OSTİM ve İvedik sanayi bölgeleri, Siteler mobilya üretim bölgesi,
 * Çankaya'daki büro ve muayenehane yoğunluğu, Kızılay'daki kurslar, Çayyolu'nun konut dokusu. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'ankara-web-tasarim',
  sehir: 'ankara',
  yerDe: 'Ankara’da',
  hizmet: 'web',
  baslik: 'Ankara web tasarım',
  metaBaslik: 'Ankara Web Tasarım: Kurumsal Web Sitesi',
  metaAciklama:
    'Ankara’daki işletmeler için kurumsal web tasarım: hizmet sayfaları, telefonda hızlı açılan tasarım ve SEO’ya uygun yapı. Çalışmayı uzaktan, sizinle görüşerek yürütüyoruz.',
  ozet: 'OSTİM’deki üreticiden Çankaya’daki büroya, Ankara’da müşterinin aradığı hizmeti ilk ekranda bulduğu kurumsal web siteleri.',
  tanim: [
    'Ankara’daki işletmeler için web tasarım, müşterinin aradığı hizmeti ilk ekranda görüp telefon, form ya da WhatsApp ile size ulaşabildiği bir web sitesinin planlanması, tasarlanması ve yayına alınması işidir.',
    'Ankara’da müşteri tek tip değil. OSTİM ve İvedik’teki üretici teknik bilgi arayan satın almacıya, Çankaya’daki hukuk bürosu ve muayenehane güven arayan kişiye, Çayyolu’ndaki kurs merkezi veliye site hazırlar. Biz önce işinizi ve müşterinizin Google’a ne yazdığını inceliyor, sayfaları buna göre kuruyoruz.',
    'Çalışmayı uzaktan yürütüyoruz: görüşmeleri telefonla ya da görüntülü yapıyor, taslakları ve metinleri sizinle adım adım paylaşıyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Ankara’da web tasarım için ne aranıyor?',
    giris: 'Web sitesi yaptırmak isteyen işletme sahibi çoğu zaman aramasına şehrin, bazen de semtin adını ekliyor.',
    liste: [
      { ifade: 'ankara web tasarım', hacim: 2900 },
      { ifade: 'web tasarım ankara', hacim: 320 },
      { ifade: 'ankara web tasarım firmaları', hacim: 260 },
      { ifade: 'ankara web tasarım ajansı', hacim: 170 },
      { ifade: 'ankara web tasarım seo', hacim: 140 },
      { ifade: 'ostim web tasarım', hacim: 110 },
      { ifade: 'çankaya web tasarım', hacim: 90 },
      { ifade: 'ankara web sitesi tasarımı', hacim: 70 },
      { ifade: 'ankara web sitesi yapan firmalar', hacim: 70 },
    ],
    yorum: [
      'En çok yazılan ifade “ankara web tasarım”: ayda yaklaşık 2.900 arama. Yanına “firmaları” ya da “ajansı” ekleyenler seçenekleri karşılaştırıyor. “Ostim web tasarım” ve “çankaya web tasarım” yazanlar ise kendi bölgesindeki işletmeleri tanıyan birini arıyor.',
      'Bu sayılar ifadenin Türkiye genelindeki aramalarını gösterir; aramayı yapanın nerede olduğunu ayrıca ölçmedik. Bizim için asıl veri sizin müşterinizin aramasıdır. Her projenin başında hizmetleriniz için Ankara’da ve ilçelerinde ne yazıldığını ayrıca araştırıyor, sayfa planını o listeye göre kuruyoruz.',
    ],
  },

  yerel: {
    baslik: 'Ankara’da web sitesi kurarken en sık karşılaştığımız durumlar',
    giris: 'Şehrin iş dokusu semtten semte değişiyor. Altı durum ve her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Üretim yapıyoruz, sitemiz neden teklif getirmiyor?',
        ornek:
          'OSTİM’de sac işleyen bir atölyenin sitesinde yalnız “Hakkımızda” yazısı ve bir telefon numarası var. Parça arayan satın almacı makine parkını ve işlenen malzemeyi göremeyince başka firmaya geçiyor.',
        care: 'Her üretim kalemine ayrı sayfa açıyor, teknik bilgiyi ve teklif formunu aynı ekrana koyuyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Kurumlara iş yapıyoruz, site bize ne kazandırır?',
        ornek:
          'Kamu kurumlarına ve büyük firmalara tedarik yapan bir mühendislik firmasını, toplantıdan önce satın alma ekibi Google’da arıyor. Karşılarına tamamlanan işleri ve yetkinlikleri göstermeyen, yıllar önce yapılmış bir site çıkıyor.',
        care: 'Yetkinlikleri ve tamamlanan işleri, firmayı adıyla arayan kişinin ilk bakışta bulacağı biçimde düzenliyoruz.',
        cizim: 'liste',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Muayenehane ya da büro sitesi nasıl olmalı?',
        ornek:
          'Çankaya’da bir diş hekimi ile bir avukat aynı şablon siteyi kullanıyor. İkisinin de meslek kuralları sitede ne yazılabileceğini sınırlıyor, ama iki sitede de bu ayrım gözetilmemiş.',
        care: 'İçeriği meslek kurallarının izin verdiği bilgiyle sınırlı tutuyor, metinleri yayından önce size onaylatıyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Doktorlar ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Sitemiz telefonda neden kullanılamıyor?',
        ornek:
          'Kızılay’da bir dil kursunun sitesi masaüstünde düzgün görünüyor, telefonda ise kayıt formu ekrana sığmıyor. Kursu yolda, telefondan araştıran öğrenci formu dolduramadan çıkıyor.',
        care: 'Sayfaları önce telefon ekranı için tasarlıyor, formu ve arama düğmesini gerçek telefonda deniyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'Yalnız kendi semtimize hizmet veriyoruz, site gerekir mi?',
        ornek:
          'Çayyolu’nda bir veteriner kliniği müşterisinin neredeyse tamamını çevredeki sitelerden alıyor. “Çayyolu veteriner” yazan kişi kliniği haritada görüyor ama çalışma saatini ve hangi hizmetlerin verildiğini bulamıyor.',
        care: 'Küçük ama eksiksiz bir site kuruyor, Google İşletme Profili’ndeki bilgiyi siteyle aynı hâle getiriyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Reklamdan gelen kişi siteden neden hemen çıkıyor?',
        ornek:
          'Siteler’de mobilya üreten bir firma Google reklamından gelen herkesi ana sayfaya indiriyor. “Yatak odası takımı” arayan kişi ana sayfada mutfak dolabı görüp geri dönüyor.',
        care: 'Reklamdaki sözle aynı başlığı taşıyan, tek bir talebe götüren açılış sayfaları hazırlıyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Landing page nedir?', url: '/blog/landing-page-nedir/' },
      },
    ],
  },

  isler: {
    baslik: 'Ankara’daki işletmeniz için neler yapıyoruz?',
    giris: 'Web tasarım tek bir tasarım dosyası değildir. Sitenin talep getirmesi aşağıdaki altı işin birlikte yapılmasına bağlıdır.',
    liste: [
      { ad: 'Hizmet sayfaları', aciklama: 'Müşterinizin ayrı ayrı aradığı her iş için bir sayfa açıyoruz. Sayfa, o işi arayan kişinin görmek istediği fotoğrafı ve bilgiyi taşır.' },
      { ad: 'Telefonda hızlı açılan tasarım', aciklama: 'Sayfaları önce dar ekran için tasarlıyor, görselleri ekrana uygun boyutta sunuyoruz.' },
      { ad: 'Form, telefon ve WhatsApp', aciklama: 'Talep yollarını dar ekranda deniyor, başvurunun size ulaştığını bir deneme kaydıyla görüyoruz.' },
      { ad: 'SEO’ya uygun yapı', aciklama: 'Her sayfanın başlığını ve adresini müşterinizin aramasına göre yazıyoruz. Semt ve ilçe adlarını yalnız gerçekten hizmet verdiğiniz yerler için kullanıyoruz.' },
      { ad: 'Google İşletme Profili uyumu', aciklama: 'Sitedeki ad, adres ve telefonu haritadaki profilinizle aynı hâle getiriyoruz.' },
      { ad: 'Yönetim paneli ve teslim', aciklama: 'Metin ve görselleri kendi ekibinizin güncelleyebileceği bir panel kuruyor, yayın günü erişimi size devrediyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  fiyat: {
    giris:
      'Ankara’da aynı site için birbirini tutmayan teklifler almak olağan. Fark çoğu zaman teklifin içine neyin yazıldığından çıkıyor; aşağıdaki sekiz kalem iki teklifi yan yana koymanızı sağlar.',
  },

  secim: {
    giris:
      '“Ankara web tasarım firmaları” diye arayan kişinin karşısına ajanslar, dizin siteleri ve hazır şablon satıcıları bir arada çıkıyor. Aralarından seçerken firmanın vitrinindeki görsellere değil, aşağıdaki yedi soruya verdiği cevaba bakın.',
  },

  sss: {
    baslik: 'Ankara’da web tasarım hakkında sık sorulan sorular',
    giris: 'Ajans seçimi, süreç ve sitenin sahipliği hakkında Ankara’daki işletmelerden duyduğumuz sorular.',
    sorular: [
      {
        soru: 'Ankara’da web tasarım ajansı nasıl seçilir?',
        cevap:
          'Ajansı, daha önce yaptığı sitelerin bugün yayında olup olmadığına ve ilk görüşmede size işinizle ilgili ne sorduğuna bakarak seçin. Yayındaki siteleri telefonunuzdan açın, formu deneyin, yazıların okunup okunmadığına bakın. Müşterinizi ve hizmetlerinizi sormadan tasarım öneren ajans siteyi şablona göre kuracaktır.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Yüz yüze görüşmeden web sitesi yaptırılır mı?',
        cevap:
          'Evet, web sitesi yüz yüze görüşmeden de yaptırılabilir; biz çalışmalarımızı bu şekilde, uzaktan yürütüyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, taslakları ve yayın öncesi siteyi bağlantı üzerinden sizinle birlikte inceliyoruz.',
      },
      {
        soru: 'Web sitesi yapımı ne kadar sürer?',
        cevap:
          'Süre, sayfa sayısına ve içeriğin ne kadarının hazır olduğuna göre değişir; bu yüzden görüşmeden önce tarih vermiyoruz. İlk görüşmede sayfa listesini ve sizden beklenen metin ile fotoğrafları çıkarıyor, takvimi bu listeye göre birlikte belirliyoruz.',
      },
      {
        soru: 'Ankara’da web tasarım fiyatları neye göre değişir?',
        cevap:
          'Fiyat; sayfa sayısına, içeriği kimin hazırlayacağına ve yönetim paneli ya da ikinci dil gibi ek işlere göre değişir. Sitemizde fiyat listesi yayımlamıyoruz, çünkü iki işletmenin ihtiyacı aynı değil. Görüşmeden sonra yapılacak işleri kalem kalem yazıyor, teklifi bu listeye göre veriyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Mevcut sitemi yeniletmek mi, sıfırdan yaptırmak mı daha doğru?',
        cevap:
          'Siteniz telefonda düzgün açılıyorsa ve içeriği kendiniz güncelleyebiliyorsanız çoğu zaman yenilemek yeterlidir. Önce bugünkü siteyi inceliyoruz: hangi sayfa ziyaret alıyor, form çalışıyor mu, Google sayfaları dizine eklemiş mi. Altyapı eskiyse ya da site telefonda kullanılamıyorsa sıfırdan kurmayı öneriyoruz.',
      },
      {
        soru: 'Site, alan adı ve içerik kimin olur?',
        cevap:
          'Alan adı, barındırma hesabı ve sitenin tamamı sizin adınıza açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Ziyaret sayısı, sıralama ya da talep adedi için söz vermiyoruz. Söz verdiğimiz şey işinizi ve müşterinizin aramalarını ayrıntılı incelemek, sayfaları bu bilgiyle kurmak ve yayından sonra düzenli olarak iyileştirmektir.',
      },
    ],
  },
};

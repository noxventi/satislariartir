/**
 * İstanbul web tasarım (şehir sayfası).
 * Ana niyet: "istanbul web tasarım" (1.000), "web tasarım istanbul" (320), "istanbul web tasarım ajansı" (210),
 * "istanbul web tasarım firmaları" (90). Panoya ilçe adlı ifadeler de alındı (beylikdüzü 720, pendik 320, kadıköy 260,
 * tuzla 170, esenyurt 110, şişli 70): İstanbul’da aramanın ilçe adlarına dağıldığını gösterirler.
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. "beylikdüzü web tasarım" (720) ölçüm dosyasında
 * doğrulanmamış şaşırtıcı değer olarak işaretlidir; yorumda öyle anılır. Yorumdaki "ankara web tasarım" (2.900)
 * karşılaştırması aynı ölçümden alınmıştır. Aynı hacmi gösteren diğer ilçe ifadeleri (ataşehir, avcılar, ümraniye 260;
 * kartal 210) pano on satırı geçmesin diye alınmadı.
 * İstanbul’da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü açıkça söylenir. İlçe sayfaları (Beylikdüzü, Avcılar,
 * Kadıköy, Ataşehir, Ümraniye, Pendik, Kartal) ayrı dosyalardadır; bu sayfa onların sahnelerini kullanmaz.
 * Yerel bilgiler herkesçe bilinen olgulardır: İkitelli ve Dudullu organize sanayi bölgeleri, Laleli’nin toptan giyim
 * mağazaları, Levent’in plazaları, Sultanahmet’in otelleri, şehrin iki yakaya bölünmüş olması. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'istanbul-web-tasarim',
  sehir: 'istanbul',
  yerDe: 'İstanbul’da',
  hizmet: 'web',
  baslik: 'İstanbul web tasarım',
  metaBaslik: 'İstanbul Web Tasarım: Kurumsal Web Sitesi',
  metaAciklama:
    'İstanbul’daki işletmeler için web tasarım: ilçenize ve hizmet bölgenize göre kurulan sayfalar, şube düzeni, ikinci dil. Projeyi uzaktan, görüntülü görüşerek yürütüyoruz.',
  ozet: 'İki yakaya ve onlarca ilçeye dağılmış İstanbul müşterisi için hizmet bölgesi ile şubesi ilk ekranda belli olan web siteleri.',
  tanim: [
    'İstanbul’daki işletmeler için web tasarım, iki yakaya ve onlarca ilçeye dağılmış müşterinin hangi işi hangi bölgede yaptığınızı ilk ekranda anlayıp size ulaşabildiği bir web sitesini planlama, tasarlama ve yayına alma işidir.',
    'İstanbul’da aynı işi yapan firma çok; müşteri ise çoğu zaman kendi ilçesinde, en fazla kendi yakasında birini arıyor. İkitelli ve Dudullu’daki üreticinin sitesini satın almacı, Laleli’deki toptancınınkini yurt dışından gelen alıcı, Levent’teki danışmanlık firmasınınkini kurumsal müşteri açıyor. Biz önce müşterinizin kim olduğunu ve Google’a hangi ilçe adıyla ne yazdığını inceliyor, sayfaları bu bulguya göre kuruyoruz.',
    'İşi uzaktan yürütüyoruz. Toplantıları telefonla ya da görüntülü yapıyor; sayfa planını, taslakları ve metinleri her aşamada size gönderip onayınızla ilerliyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'İstanbul’da web tasarım arayan ne yazıyor?',
    giris: 'Web sitesi yaptırmak isteyenlerin bir bölümü şehrin adını, bir bölümü doğrudan kendi ilçesinin adını yazıyor.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'beylikdüzü web tasarım', hacim: 720 },
      { ifade: 'pendik web tasarım', hacim: 320 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'kadıköy web tasarım', hacim: 260 },
      { ifade: 'istanbul web tasarım ajansı', hacim: 210 },
      { ifade: 'tuzla web tasarım', hacim: 170 },
      { ifade: 'esenyurt web tasarım', hacim: 110 },
      { ifade: 'istanbul web tasarım firmaları', hacim: 90 },
      { ifade: 'şişli web tasarım', hacim: 70 },
    ],
    yorum: [
      'Şehir adıyla en çok yazılan ifade “istanbul web tasarım”: ayda yaklaşık 1.000 arama. Aynı ölçümde “ankara web tasarım” 2.900 arama gösteriyor. Çok daha kalabalık bir şehirde şehir adlı aramanın geride kalmasını, aramanın ilçe adlarına dağılmasıyla açıklıyoruz: Beylikdüzü, Pendik, Kadıköy, Tuzla ve Esenyurt listede ayrı ayrı yer alıyor. “Beylikdüzü web tasarım” için görünen 720, ölçüm aracının verdiği yaklaşık değerdir; başka bir kaynakla doğrulamadık.',
      'Sayılar ifadelerin Türkiye genelindeki aylık aramalarıdır; arayan kişinin hangi ilde ya da ilçede olduğu bu ölçümde yok. Bizim çıkardığımız karar, İstanbul’da bir sitenin yalnız “İstanbul” sözüne yaslanmaması gerektiğidir. Projenin başında hizmetleriniz için kendi ilçenizde ve hizmet verdiğiniz komşu ilçelerde ne yazıldığını araştırıyor, hangi ilçe adının hangi sayfada geçeceğini bu listeye göre belirliyoruz.',
    ],
  },

  yerel: {
    baslik: 'İstanbul’da işletme sitelerinde sık gördüğümüz altı durum',
    giris: 'Toptancının sitesi ile plazadaki danışmanlık firmasının sitesi aynı soruya cevap vermez. Örnek işletmeler temsilidir; her kartta ilk baktığımız yer yazıyor.',
    kartlar: [
      {
        soru: 'Kataloğumuz sitede, satın almacı neden teklif istemiyor?',
        ornek:
          'İkitelli OSB’de mobilya aksesuarı üreten bir firma bütün ürünlerini siteye tek bir PDF katalog olarak koymuş. Menteşe ya da ray arayan satın almacı Google’da bu ürünlerin sayfasını bulamıyor, telefonda açtığı katalogda ölçüleri okuyamıyor.',
        care: 'Ürün gruplarını ayrı sayfalara bölüyor, ölçü ve malzeme bilgisini metin olarak yazıp teklif formunu aynı sayfaya koyuyoruz.',
        cizim: 'kitaplik',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Yurt dışından gelen alıcı sitemizde neyi bulamıyor?',
        ornek:
          'Laleli’de toptan kadın giyim satan bir mağazanın alıcılarının bir bölümü yurt dışından geliyor. Site yalnız Türkçe olduğu için alıcı seri ve beden bilgisini, en az sipariş koşulunu ve mağazanın yerini kendi dilinde okuyamıyor.',
        care: 'İkinci dil için ayrı sayfalar kuruyor, toptan satış koşullarını ve iletişim yolunu ilk ekrana yazıyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Rakiplerle aynı şablonu kullanıyoruz, bu sorun mu?',
        ornek:
          'Levent’te bir plazada kurumsal firmalara eğitim veren bir danışmanlık şirketi, rakiplerinin de kullandığı hazır temayla site kurmuş. Üç siteyi yan yana açan insan kaynakları yöneticisi, hangisinin hangi eğitimi verdiğini ilk ekrandan ayıramıyor.',
        care: 'İlk ekrana verdiğiniz hizmeti adıyla yazıyor, çalıştığınız sektörleri ve tamamladığınız işleri ayrı sayfalarda gösteriyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Yayındaki sitelerimiz', url: '/calismalarimiz/' },
      },
      {
        soru: 'İki yakada birer şube açtık, tek sayfa yeter mi?',
        ornek:
          'Bakırköy’de ve Üsküdar’da şubesi olan bir sürücü kursu, iki adresi tek bir iletişim sayfasında alt alta yazmış. “Üsküdar sürücü kursu” yazan aday hangi numarayı arayacağını ve ders saatlerini o sayfada bulamıyor.',
        care: 'Her şubeye adresi, telefonu, ders saatleri ve yol tarifiyle kendi sayfasını açıyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'Gidemediğimiz ilçelerden neden bu kadar telefon geliyor?',
        ornek:
          'Güngören’de bir halı yıkama firması yalnız Avrupa yakasındaki ilçelere servis çıkarıyor, ama sitesinde hizmet bölgesi yazmıyor. Maltepe’den, Tuzla’dan arayanlara her seferinde gelemeyeceğini anlatmak zorunda kalıyor.',
        care: 'Hizmet verdiğiniz ilçeleri ilk ekrana ve her hizmet sayfasına yazıyor, Google İşletme Profili’ndeki hizmet bölgesini aynı listeyle eşitliyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Rezervasyon aracı sitelerden geliyor, kendi sitemiz ne işe yarar?',
        ornek:
          'Sultanahmet’te bir butik otelin misafirlerinin çoğu yurt dışından geliyor ve rezervasyondan önce oteli adıyla Google’da da arıyor. Karşılarına çıkan site telefonda geç açılıyor, oda fotoğrafları küçük kalıyor ve rezervasyon için yalnız bir e-posta adresi veriyor.',
        care: 'Odaları, konumu ve rezervasyon yolunu yabancı misafirin telefonda rahatça göreceği biçimde, ikinci dille birlikte kuruyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
    ],
  },

  isler: {
    baslik: 'İstanbul’da bir web sitesinde hangi işleri yapıyoruz?',
    giris: 'İşin kalemleri her şehirde aynı. Aşağıda, İstanbul’da en çok ağırlık verdiğimiz hâliyle yazdık.',
    liste: [
      { ad: 'Hizmet sayfaları', aciklama: 'Müşterinizin ayrı ayrı aradığı her işe kendi sayfasını açıyoruz. Aynı işi yapan çok sayıda firma arasında sayfa, o işi sizin nasıl yaptığınızı ilk ekranda göstermek zorunda.' },
      { ad: 'İlçe ve hizmet bölgesi', aciklama: 'Hangi ilçelere ve hangi yakaya hizmet verdiğinizi sitenin görünen yerlerine yazıyoruz. İlçe adını yalnız gerçekten gittiğiniz ya da müşteri kabul ettiğiniz yerler için kullanıyoruz.' },
      { ad: 'Şube sayfaları', aciklama: 'Birden çok şubeniz varsa her birine adresi, telefonu ve çalışma saatiyle ayrı sayfa açıyor, sayfayı o şubenin Google İşletme Profili’ne bağlıyoruz.' },
      { ad: 'Dar ekran öncelikli tasarım', aciklama: 'Sayfaları önce telefon için çiziyoruz. Metroda ya da vapurda tek elle bakan kişi arama düğmesine ve forma zorlanmadan ulaşabilmeli.' },
      { ad: 'İkinci dil sayfaları', aciklama: 'Yabancı alıcıya ya da misafire satış yapıyorsanız ikinci dili otomatik çeviri eklentisine bırakmıyor, her dil için ayrı adres ve ayrı başlık kuruyoruz.' },
      { ad: 'Form, WhatsApp ve teslim', aciklama: 'Talep yollarını gerçek telefonda deniyor, deneme başvurusunun size ulaştığını görüyoruz. Yayın günü yönetim paneli ve bütün erişimler size geçiyor.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  fiyat: {
    giris:
      'İstanbul’da aynı iş için gelen teklifler arasında büyük farklar görmek şaşırtıcı değil. Teklifleri tutarlarına göre değil, aşağıdaki kalemlerden hangilerini içerdiğine göre karşılaştırın.',
  },

  secim: {
    giris:
      'İstanbul’da teklif istediğiniz her firma size kendi örneklerini gösterecek. Firmalar arasındaki asıl fark çoğu zaman tasarımda değil, sitenin kimin adına açıldığında ve yayından sonra kimin elinde kalacağında ortaya çıkıyor.',
  },

  sss: {
    baslik: 'İstanbul’da web tasarım: sık sorulan sorular',
    giris: 'İstanbul’da site yaptırmadan önce en çok sorulan konular: ajans seçimi, ilçe adı, dil, fiyat ve sahiplik.',
    sorular: [
      {
        soru: 'İstanbul’da web tasarım ajansı nasıl seçilir?',
        cevap:
          'Ajansı, yayındaki işlerine ve ilk görüşmede size sorduğu sorulara bakarak seçin. Yaptığı sitelerden ikisini telefonunuzda açın ve bir form doldurmayı deneyin. İstanbul’da seçenek çok olduğu için teklifler birbirine benzer; ayırt eden, işe müşterinizi, hizmet verdiğiniz ilçeleri ve bugünkü sitenizi sorarak başlayan ajanstır.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'İstanbul’da yüz yüze görüşmeden web sitesi yaptırılır mı?',
        cevap:
          'Evet; biz bütün projeleri uzaktan yürütüyoruz. İlk görüşmeyi telefonla ya da görüntülü yapıyor, sayfa planını ve taslakları ekran paylaşarak birlikte okuyoruz. Toplantı için şehrin bir ucundan öbürüne gitmeniz gerekmiyor.',
      },
      {
        soru: 'Tek ilçeye hizmet veriyorum; sitede “İstanbul” mu, ilçe adı mı yazmalı?',
        cevap:
          'Önce hizmet verdiğiniz ilçenin adı yazmalı; “İstanbul” onun yanında durabilir. Başakşehir’deki bir işletmeyi arayan kişi çoğu zaman aramasına ilçenin adını ekler ve ilçeyi açıkça yazan sayfa o aramayla daha iyi eşleşir. Aynı ilçe adını sayfa başlıklarında ve Google İşletme Profili’nde de kullanıyoruz.',
      },
      {
        soru: 'İstanbul’da toptancı ya da otel sitesi kaç dilde olmalı?',
        cevap:
          'Site, alıcılarınızın ya da misafirlerinizin gerçekten kullandığı dillerde olmalı; sayıyı onların geldiği ülkeler belirler. Her dili ayrı adreste, o dilde yazılmış başlıklarla kuruyoruz. Tarayıcıda anlık çeviri yapan eklentiler ayrı sayfa üretmediği için o dilde yapılan aramada görünmez. Çeviriyi kimin yapacağını işe başlamadan netleştiriyoruz.',
      },
      {
        soru: 'İstanbul’da web sitesi fiyatı neye göre değişir?',
        cevap:
          'Fiyatı sayfa sayısı, şube ve dil sayısı ile metin ve fotoğrafı kimin hazırlayacağı belirler. Tek şubeli bir işletmenin birkaç sayfalık sitesi ile çok şubeli, iki dilli bir sitenin işi aynı olmadığı için fiyat listesi yayımlamıyoruz. İlk görüşmenin ardından iş listesini yazılı olarak gönderiyor, teklifi bu listenin üzerinden veriyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Alan adı, site ve erişimler kimde kalır?',
        cevap:
          'Hepsi sizde kalır: alan adı ve barındırma hesabı işletmenizin adına açılır, biz yönetici olarak eklenir ve işi öyle yürütürüz. Bugünkü siteniz başka bir firmanın hesabında duruyorsa alan adının kimin üzerine kayıtlı olduğuna ilk görüşmede birlikte bakıyoruz. Erişimimizi istediğiniz gün kapatabilirsiniz.',
      },
      {
        soru: 'Web sitesi için sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır; belirli bir ziyaret, sıra ya da başvuru sayısı için söz vermiyoruz, çünkü bunların hiçbiri yalnız siteye bağlı değil. Üstlendiğimiz iş belli: işletmenizi ve müşterinizin aramalarını ayrıntılı incelemek, her sayfa kararını gerekçesiyle anlatmak ve yayından sonra siteyi düzenli olarak iyileştirmek.',
      },
    ],
  },
};

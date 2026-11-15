/**
 * Restoran ve kafe sektörü.
 * Ana niyet: "restoranlar için dijital pazarlama", "restoran reklamı", "restoran web sitesi", "kafe reklamı".
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026).
 * Referans: Burger Engineer.
 * Dil: yemek sipariş uygulamaları kötülenmez, komisyon rakamı yazılmaz; yorum karşılığı indirim ya da ikram önerilmez.
 * Rezervasyon ve sipariş sistemi bizim hizmetimiz değildir: sağlayıcı yürütür, biz sayfaya ve reklama bağlarız.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 3,
  kimlik: 'restoran-ve-kafe',
  ad: 'Restoran ve kafe',
  kimler: 'Restoranlar, kafeler, burgerciler ve hızlı servis mekânları, kahvaltı mekânları',
  ozet: 'Yakınında yemek yeri arayan kişinin haritada, Instagram’da ve menü sayfasında gördüğünü rezervasyona, yol tarifine ya da siparişe çeviren düzen.',
  baslik: 'Restoran ve kafeler için dijital pazarlama',
  metaBaslik: 'Restoran ve Kafeler için Dijital Pazarlama',
  metaAciklama:
    'Restoran, kafe ve burgerciler için Google İşletme Profili, Instagram reklamları, Google Ads ve telefonda okunan menü sayfası: yakındaki müşteriyi masaya getiren kurulum.',
  tanim: [
    'Restoran ve kafeler için dijital pazarlama, yakınında yemek ya da kahve yeri arayan kişinin haritada, Instagram’da ve Google’da karşısına çıkma ve onu masaya, rezervasyona ya da siparişe getirme işidir.',
    'Bu sektörde karar dakikalar içinde verilir ve yereldir. Müşteri haritada gördüğü mekânın fotoğraflarına, menüsüne, puanına ve yorumlarına bakar; beğenirse yol tarifi alır, arar, rezervasyon yapar ya da sipariş verir. Harita profilini, reklamı ve menü sayfasını bu birkaç dakikaya göre kuruyoruz.',
    'Restoranlar, kafeler, burgerciler ve hızlı servis mekânları ile kahvaltı mekânlarıyla çalışıyoruz.',
  ],
  gorselAlt:
    'Mavi beyaz çizgili tenteli kâğıttan bir restoran; önündeki masalardan birinde hamburger ve kahve, çatısının arkasında büyük kırmızı bir harita iğnesi. Müşteriler kırmızı kalem çizgisini izleyerek kapıya yürüyor, garson kapıda bekliyor',
  cagri: 'Mekânım için görüşelim',
  kanal: 'belirsiz',

  aramalar: {
    baslik: 'Restoran ve kafe arayanlar Google’a ne yazıyor?',
    giris: 'Acıkan kişi çoğu zaman mekânın adını bilmez; canının çektiğini ve nerede olduğunu yazar.',
    liste: [
      { ifade: 'restoran', hacim: 135000 },
      { ifade: 'hamburger', hacim: 135000 },
      { ifade: 'kahvaltı mekanları', hacim: 49500 },
      { ifade: 'kahvaltı yerleri', hacim: 9900 },
      { ifade: 'yemek siparişi', hacim: 9900 },
      { ifade: 'yakınımdaki restoranlar', hacim: 5400 },
      { ifade: 'qr menü', hacim: 5400 },
      { ifade: 'yakınımdaki kafeler', hacim: 2900 },
      { ifade: 'burgerci', hacim: 1000 },
      { ifade: 'en iyi burger', hacim: 390 },
    ],
    yorum: [
      'Bu aramaların çoğu yereldir. “Restoran”, “hamburger” ya da “kahvaltı mekanları” yazan kişiye Google çoğu zaman önce haritayı ve yakındaki mekânları gösterir; kişi fotoğraflara, puana ve yorumlara bakıp birkaç dakikada karar verir. “Yemek siparişi” yazan evde yemek istiyordur. Listedeki “qr menü” araması da menünün artık masada bile telefondan okunduğunu gösterir.',
      'Bundan çıkardığımız sıra şöyle: önce harita profili, çünkü arama orada sonuçlanır. Ardından menünün telefonda açılıp okunması ve rezervasyon, yol tarifi, telefon, sipariş adımlarının çalışması gelir. Reklamı bunlar yerine oturduktan sonra, mekânın çevresindeki kişilere açıyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'Restoran ve kafe sahiplerinden en sık duyduğumuz sorular',
    giris: 'Sorular mekânın türüne göre az değişiyor: harita, yorum, menü, Instagram. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Restoranım Google Haritalar’da neden çıkmıyor?',
        ornek:
          'Bir kahvaltı mekânının sahibi telefonuna “kahvaltı mekanları” yazıyor ve haritada yalnız rakiplerini görüyor. Kendi profilinde kategori yanlış seçilmiş, çalışma saati girilmemiş.',
        care: 'Profilin kategorisini, saatlerini, menü bağlantısını ve fotoğraflarını tamamlıyor, eksik bilgiyi tek tek düzeltiyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'İşletme profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Restoranımın Google yorumlarını nasıl artırırım?',
        ornek:
          'Bir kafenin müdavimleri memnun ama profilde bir avuç yorum var, sonuncusu aylar önce yazılmış. Yeni gelen kişi yan sokaktaki mekânın güncel yorumlarını okuyup oraya gidiyor.',
        care: 'Yorum bağlantısını masada ve hesapla birlikte müşteriye ulaştıran düzeni kuruyor, her yoruma verilecek yanıtı sizinle hazırlıyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Google yorumları nasıl artırılır?', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'Instagram’da takipçim çok, mekân neden boş?',
        ornek:
          'Bir burgercinin videoları çok izleniyor ama salon hafta içi boş kalıyor. İzleyenlerin çoğu başka şehirde; mekâna yürüme mesafesinde olanlar videoyu görmemiş.',
        care: 'Reklamı mekânın çevresinde yaşayan ve çalışan kişilere gösteriyor, videoyu yol tarifi ya da rezervasyon adımına bağlıyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Menüm sitede PDF, müşteri neden bakmadan çıkıyor?',
        ornek:
          'Bir restoranın menüsü sitede PDF olarak duruyor. Telefonda geç açılıyor, yazılar okunmuyor; müşteri yemeği ve fiyatı göremeden vazgeçiyor.',
        care: 'Menüyü telefonda okunan bir sayfaya çeviriyor, masadaki QR kodu da aynı sayfaya bağlıyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Sipariş uygulamaları dışında nasıl sipariş alırım?',
        ornek:
          'Bir pideci siparişlerinin neredeyse tamamını sipariş uygulamalarından alıyor. Adını Google’a yazan müşteri ise menüyü ve telefon numarasını bulamıyor.',
        care: 'Uygulamaları kapatmadan, adınızı arayan müşterinin menüye ve telefonla ya da WhatsApp’la siparişe ulaştığı sayfayı kuruyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Hangi kanal ne işe yarar?', url: '#kanallar' },
      },
      {
        soru: 'Yeni açılan restoran reklamı nasıl yapılır?',
        ornek:
          'Yeni açılan bir kafe açılış haftasında bütün şehre reklam veriyor. Reklamı görenlerin çoğu mekâna gelemeyecek kadar uzakta; harita profili de henüz açılmamış.',
        care: 'Önce harita profilini tamamlıyor, ilk reklamı mekânın çevresindeki kişilere tek bir öğün üzerinden açıyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'İlk adımı planlayalım', url: '#baslangic' },
      },
    ],
  },

  kanallar: {
    baslik: 'Restoran ve kafeler için hangi kanal ne işe yarar?',
    giris:
      'Dördü aynı anda gerekmez. Çoğu mekânda ilk iş harita profili ve menü sayfasıdır; reklamın ne zaman ve hangi kanalda açılacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'harita',
        baslik: 'Google İşletme Profili: yakınında arayan müşteri',
        metin: 'Yakınında yemek yeri arayan kişi haritada fotoğraflara, puana, yorumlara ve menüye bakar. Kararını verdiğinde yol tarifini ve telefonu da aynı ekrandan alır.',
        maddeler: ['Kategori, saat, menü ve güncel fotoğraflar', 'Yorum isteme ve yanıtlama düzeni', 'Rezervasyon ve sipariş bağlantıları'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: tabağı ve mekânı göstermek',
        metin: 'Müşterinin bir kısmı aramaz; tabağı ve mekânı Instagram’da görüp gelir. Reklam bu görüntüyü mekânın çevresinde yaşayan ve çalışan kişilere ulaştırır.',
        maddeler: ['Mekânın çevresine göre bölge hedefleme', 'Tabak ve mekân görselleriyle kreatif testi', 'Yol tarifi, rezervasyon ya da mesaj hedefi'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'google-ads',
        baslik: 'Google Ads: yerel arama, yeni açılış, özel gün',
        metin: 'Arama reklamı her mekâna her gün gerekmez. Yeni açıldığınızda, özel günlerde ve toplu yemek aramalarında, yakında arayan kişiye görünmenizi sağlar.',
        maddeler: ['Mekânın çevresiyle sınırlı gösterim', 'Reklamda adres, saat ve arama düğmesi', 'Özel günlerde açılıp kapanan kampanyalar'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi ve SEO: menü, rezervasyon, yol tarifi',
        metin: 'Mekânın adını arayan kişi menüyü, saatleri ve adresi görmek ister. Menü sayfa olarak yazıldığında Google ve yapay zekâ araçları da yemek adlarını okuyabilir.',
        maddeler: ['Telefonda okunan menü sayfası ve QR kod', 'Rezervasyon, telefon ve yol tarifi düğmeleri', 'Mekân adı ve semt aramaları için SEO'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'Restoran ve kafelerle nasıl çalışıyoruz?',
    giris: 'İşe mekânınızın bugün haritada, Instagram’da ve Google’da nasıl bulunduğunu inceleyerek başlıyor, eksikleri kuruyor, ardından reklamı düzenli optimizasyonla yürütüyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Profil, yorumlar, menü ve çevre', aciklama: 'Harita profilinizi, yorumlarınızı, menünüzün telefonda nasıl açıldığını ve çevrenizdeki mekânların nasıl göründüğünü inceliyoruz.' },
      { ad: 'Strateji', ozet: 'Öğün, bölge ve başvuru yolu', aciklama: 'Hangi öğünün ve hangi çevrenin hedefleneceğini, müşterinin rezervasyona mı, yol tarifine mi, siparişe mi yönleneceğini planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Profil, menü sayfası ve reklam', aciklama: 'Profili tamamlıyor, menü sayfasını ve düğmeleri kuruyor; reklamları açmadan önce hepsini telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Gün ve öğüne göre düzenli takip', aciklama: 'Hangi reklamın yol tarifi, arama ve rezervasyon getirdiğine düzenli bakıyor; getirmeyeni kapatıp bütçeyi salonun boş kaldığı gün ve saatlere kaydırıyoruz.' },
      { ad: 'Hedef', ozet: 'Rezervasyon, sipariş ve dolu masa', aciklama: 'Başarıyı beğeniyle ya da izlenmeyle ölçmüyoruz; rezervasyona, siparişe ve mekâna gelen müşteriye bakıyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'Yeme içme alanında çalıştığımız marka',
    giris: 'Yayında olan, bugün telefonunuzdan açıp inceleyebileceğiniz bir site.',
    liste: [
      {
        kimlik: 'burger-engineer',
        not: 'Site, yakındaki birinin menüye bakıp siparişe nasıl geçeceği sorusu etrafında kuruldu. Projede web tasarım, SEO ve GEO ile reklam yönetimi yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'Hiç reklam vermediniz mi, verip masayı dolduramadınız mı?',
    giris: 'Müşterisi kapının önünden geçenlerden oluşan mekânla, reklam verdiği hâlde salonu dolmayan mekânın ilk işi aynı olmaz.',
    sol: {
      ust: 'Hiç reklam vermediyseniz ya da deneyip bıraktıysanız',
      baslik: 'Önce bulunmayı, sonra reklamı kuruyoruz',
      metin: 'Harita profili eksik ve menüsü telefonda açılmayan bir mekânda reklamı gören kişi sonraki adımda takılır. İlk adımda bu ikisini tamamlıyor, reklamı ardından açıyoruz.',
      maddeler: [
        { ad: 'Haritada nasıl görünüyorsunuz?', aciklama: 'Kategori, çalışma saatleri, fotoğraflar, menü bağlantısı ve yorumlara verilen yanıtlar. Eksikleri reklamdan önce tamamlıyoruz.' },
        { ad: 'Menü telefonda okunuyor mu?', aciklama: 'PDF yerine sayfa olarak yazılmış, yemeği ve fiyatı ilk bakışta gösteren bir menü. Masadaki QR kod da aynı sayfayı açar.' },
        { ad: 'İlk reklam hangi öğün için?', aciklama: 'Hafta içi öğle, hafta sonu kahvaltı ya da akşam rezervasyonu. İlk kampanya tek bir öğünle ve mekânın çevresiyle sınırlı kurulur.' },
      ],
      cagri: 'İlk adımı planlayalım',
      bag: { etiket: 'İşletme profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      cizim: 'alet',
    },
    sag: {
      ust: 'Reklam veriyor ama masayı dolduramıyorsanız',
      baslik: 'Önce reklamın kime gösterildiğine bakıyoruz',
      metin: 'Salon dolmuyorsa bütçe mekâna gelemeyecek kişilere gidiyor ya da reklamı gören kişi menüyü ve adresi bulamıyor olabilir. Yeni kampanya açmadan önce hangisi olduğunu buluyoruz.',
      maddeler: [
        { ad: 'Bölge', aciklama: 'Reklamın gösterildiği alanı, müşterilerinizin geldiği ve paket servisin ulaştığı çevreyle karşılaştırıyoruz.' },
        { ad: 'Reklamın açtığı yer', aciklama: 'Tıklayan kişi menüyü mü, profili mi, boş bir ana sayfayı mı görüyor? Telefonda birlikte deniyoruz.' },
        { ad: 'Gün ve saat', aciklama: 'Bütçenin harcandığı saatleri, salonun boş kaldığı gün ve öğünlerle yan yana koyuyoruz.' },
        { ad: 'Yorumlar ve puan', aciklama: 'Reklamdan gelen kişi karar vermeden önce yorumları okur. Yanıtsız kalan şikâyetleri ve eski fotoğrafları birlikte ele alıyoruz.' },
      ],
      cagri: 'Reklamlarıma birlikte bakalım',
    },
  },

  ornek: {
    baslik: '“Hamburger” yazan herkes burger yemeye gelmez',
    metin: [
      'Listenin başındaki “hamburger” aramasının içinde tarif arayan da vardır, iş arayan da, yakınında burgerci arayan da. Reklam bütçesi küçük bir çevrede harcandığı için her aramaya ayrı bir karar yazılır.',
      'Tablo bir burgerci için hazırlanmış temsili bir örnektir; kendi hesabınızda aynısını gerçek arama terimlerinizle çıkarıyoruz.',
    ],
    tabloBasligi: 'Burgerci için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'yakınımdaki burgerci', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Yakında ve gelmeye hazır. Reklam adresi, saatleri ve yol tarifi düğmesini gösterir.' },
      { ilk: 'burger siparişi', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Eve sipariş istiyor. Reklam yalnız paket servis bölgesinde gösterilir ve sipariş adımını açar.' },
      { ilk: 'en iyi burger', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Karşılaştırıyor. Menünün ve yorumların göründüğü sayfaya iner; yol tarifine ya da aramaya dönüp dönmediğine göre karar verilir.' },
      { ilk: 'hamburger tarifi', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Evde yapacak. Negatif anahtar kelime olur.' },
      { ilk: 'burgerci iş ilanları', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'İş arıyor. Reklam bu aramada gösterilmez.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Restoran ve kafeler için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Harita, yorumlar, menü ve reklam hakkında restoran ve kafe sahiplerinden en çok duyduklarımız.',
    sorular: [
      {
        soru: 'Restoran ve kafeler için dijital pazarlama nedir?',
        cevap:
          'Restoran ve kafeler için dijital pazarlama; yakınında yemek ya da kahve yeri arayan kişilere Google Haritalar’da, Instagram’da, Google aramalarında ve web sitesinde ulaşıp onları masaya, rezervasyona ya da siparişe getiren çalışmaların bütünüdür. Google İşletme Profili, Instagram ve Facebook reklamları, Google Ads, SEO ve web sitesini kapsar.',
      },
      {
        soru: 'Restoran Google Haritalar’da nasıl görünür?',
        cevap:
          'Google İşletme Profili açılıp doğrulanarak ve eksiksiz doldurularak. Doğru kategori, güncel çalışma saatleri, menü bağlantısı, yeni fotoğraflar ve yanıtlanan yorumlar profilin temelidir. Haritadaki sırayı Google belirler ve arayan kişinin konumu sonucu değiştirir; bu yüzden sıra için söz verilemez.',
        bag: { etiket: 'Google İşletme Profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Restoran için Google yorumları nasıl artırılır?',
        cevap:
          'Mekâna gelen müşteriden, karşılığında bir şey önermeden yorum isteyerek. Hesapla birlikte verilen bir kart ya da masadaki QR kod yorum bağlantısını müşteriye kolayca ulaştırır. Yorum karşılığında indirim ya da ikram sunmak Google’ın kurallarına aykırıdır; bunu önermiyoruz. Olumsuz yoruma verilen sakin ve somut yanıtı da yeni gelen kişi okur.',
        bag: { etiket: 'Google yorumları nasıl artırılır?', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'Restoran reklamı Instagram’a mı, Google’a mı verilmeli?',
        cevap:
          'Çoğu mekânda görsel reklamla, yani Instagram’la başlanır; çünkü yemek ve mekân görülerek seçilir. Google Ads yeni açılışta, özel günlerde ve “yakınımdaki restoranlar” gibi yerel aramalarda devreye girer. İki kanalda da reklam mekânın çevresiyle sınırlı gösterilir; hangisiyle başlanacağını mekânınızın türüne göre birlikte seçiyoruz.',
        bag: { etiket: 'Google Ads mi, Instagram reklamı mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Restoran web sitesi nasıl olmalı?',
        cevap:
          'Bir restoran sitesi telefonda hızlı açılmalı ve dört şeyi ilk ekranda göstermelidir: menü, çalışma saatleri, adres ve rezervasyon ya da sipariş adımı. Menü PDF yerine sayfa olarak yazılmalıdır; böylece telefonda okunur ve Google yemek adlarını görebilir. Rezervasyon ve sipariş sistemini sağlayıcınız yürütür, biz o adımı sayfaya ve reklama bağlarız.',
      },
      {
        soru: 'QR menü nedir, restoran için nasıl hazırlanır?',
        cevap:
          'QR menü, masadaki kare kodun telefonda açtığı menü sayfasıdır. Kod bir PDF yerine sitenizdeki menü sayfasına bağlandığında ürün ve fiyat değişikliği tek yerden yapılır, aynı sayfa Google’da da aranabilir olur. Biz menü sayfasını kuruyor ve kodu bu sayfaya bağlıyoruz; kodun basılması ve masalara yerleştirilmesi sizde kalır.',
      },
      {
        soru: 'Yemek sipariş uygulamaları varken web sitesi gerekir mi?',
        cevap:
          'Gerekir, çünkü mekânınızın adını Google’a yazan kişi sizi arıyordur ve menünüzü, telefonunuzu görmek ister. Sipariş uygulamaları yeni müşteriye ulaşmanın bir yoludur ve çoğu mekân için çalışmaya devam eder. Kendi siteniz ve harita profiliniz ise menüyü, telefonu ve rezervasyon adımını sizin elinizde tutar.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi işletmenizin adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; Google İşletme Profili, reklam hesabı, alan adı, site ve geçmiş veriler işletmenize aittir. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Rezervasyon sayısı, sipariş sayısı ya da haritadaki sıra için söz vermiyoruz. Söz verdiğimiz şey mekânınızı ve hesabınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['google-isletme-profili-nasil-acilir', 'google-yorumlari-nasil-artirilir'],
    sektorler: ['otel-ve-konaklama', 'butik-markalar'],
  },
};

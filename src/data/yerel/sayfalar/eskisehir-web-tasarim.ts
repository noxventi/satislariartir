/**
 * Eskişehir web tasarım (şehir sayfası).
 * Ana niyet: “eskişehir web tasarım” (720), “eskişehir web tasarım firmaları” (90). Hacimler: OpenSEO, Türkiye, aylık yaklaşık,
 * 15 Kasım 2026. “eskişehir web tasarımı” (880) yakın yazım sayıldı ve listeye alınmadı: H1 ile aynı yazım olan 720’lik satır
 * seçildi, iki değer toplanmadı. Web tasarım adıyla ölçülen ifade az olduğu için liste şehrin komşu aramalarıyla tamamlandı:
 * “eskişehir seo” (70), “eskişehir dijital ajans” (20), “eskişehir seo ajansı” (20), “web tasarım eskişehir” (10).
 * Tepebaşı ve Odunpazarı adıyla ölçülen arama yok; ilçe sayfası açılmadı.
 * Eskişehir’de ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Referanslar bu sayfada elle verildi: Estika ve EsVia Suit Apart’ın kendi sitelerinde Eskişehir’de oldukları yazıyor
 * (denetim: 15 Kasım 2026); üçüncü proje başka şehirdendir ve öyle sunulur. Notların kaynağı projeler.ts içindeki kapsam ve karar.
 * Yerel bilgiler herkesçe bilinen olgulardır: üniversiteler ve öğrenci nüfusu, Odunpazarı evleri ve lületaşı işçiliği, Porsuk
 * kıyısı ve Adalar, hızlı tren, Eskişehir Organize Sanayi Bölgesi’nde havacılık ve raylı sistem üretimi. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'eskisehir-web-tasarim',
  sehir: 'eskisehir',
  yerDe: 'Eskişehir’de',
  hizmet: 'web',
  baslik: 'Eskişehir web tasarım',
  metaBaslik: 'Eskişehir Web Tasarım: Kurumsal Web Sitesi',
  metaAciklama:
    'Eskişehir’deki işletmeler için kurumsal web tasarım: öğrenciye, ziyaretçiye ve satın almacıya göre kurulan sayfalar, telefonda kolay kullanım. İşi uzaktan yürütüyoruz.',
  ozet: 'Kampüs çevresindeki aparttan organize sanayideki üreticiye, Eskişehir’de öğrencinin, ziyaretçinin ve satın almacının aradığını bulduğu kurumsal web siteleri.',
  tanim: [
    'Eskişehir’deki işletmeler için web tasarım, öğrencinin, şehre gezmeye gelen ziyaretçinin ya da sanayideki satın almacının aradığı bilgiyi telefonunda bulup işletmeye form, arama ya da WhatsApp ile ulaşabildiği bir sitenin tasarlanıp yayına alınması işidir.',
    'Eskişehir’de müşterinin kim olduğu takvime ve semte göre değişiyor. Üniversite kampüslerinin çevresindeki apart, kafe ve kurs her eylülde şehre yeni gelen öğrenciye ve velisine; Odunpazarı’ndaki lületaşı atölyesi ve konak oteli hızlı trenle hafta sonu gelen ziyaretçiye; organize sanayideki üretici ise teknik yeterlilik soran satın almacıya kendini anlatır. Biz siteyi kurmadan önce bu okurlardan hangisine yazdığınızı ve onun aramada ne sorduğunu inceliyoruz.',
    'Çalışmamız uzaktan ilerliyor. Görüşmeleri telefonla ya da görüntülü yapıyor, sayfa planını ve taslakları paylaştığımız bağlantı üzerinden birlikte okuyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Eskişehir’de web tasarım için hangi aramalar ölçülüyor?',
    giris: 'Eskişehir adıyla yapılan ve ölçülebilen arama sayısı büyük şehirlere göre az; listenin tamamı aşağıda.',
    liste: [
      { ifade: 'eskişehir web tasarım', hacim: 720 },
      { ifade: 'eskişehir web tasarım firmaları', hacim: 90 },
      { ifade: 'eskişehir seo', hacim: 70 },
      { ifade: 'eskişehir dijital ajans', hacim: 20 },
      { ifade: 'eskişehir seo ajansı', hacim: 20 },
      { ifade: 'web tasarım eskişehir', hacim: 10 },
    ],
    yorum: [
      '“Eskişehir web tasarım” ayda yaklaşık 720 kez yazılıyor ve listedeki öteki ifadelerin hepsinden belirgin biçimde fazla. Sonuna “firmaları” ekleyenler seçenekleri yan yana görmek istiyor. Listeye SEO ve dijital ajans aramalarını da aldık: site yaptırmak isteyen işletme sahibi aynı işi bu adlarla da arayabiliyor; bu satırların hacmi küçük.',
      'Sayılar ifadelerin Türkiye’nin tamamında yazılma sıklığıdır; kaçının Eskişehir’den geldiğini ayrıca ölçmedik. Tepebaşı ve Odunpazarı adıyla yapılan web tasarım aramaları için ölçüm aracı değer döndürmedi; arayan kişi ilçenin adını değil, şehrin adını yazıyor. Sizin siteniz için bakacağımız liste başka: “Eskişehir öğrenci apart”, “Odunpazarı lületaşı” ya da “Eskişehir talaşlı imalat” gibi müşterinizin yazdığı aramaları proje başında çıkarıyor, sayfaları onlara göre adlandırıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Eskişehir’de web sitesi kurarken sık rastladığımız altı durum',
    giris: 'Öğrenci, günübirlik ziyaretçi ve sanayi alıcısı aynı şehirde üç ayrı okur. Altı durumda sitenin neye cevap vermesi gerektiği:',
    kartlar: [
      {
        soru: 'Apart sitemize öğrenci mi bakıyor, velisi mi?',
        ornek:
          'Kampüse yürüme mesafesindeki bir öğrenci apartının sitesinde oda fotoğrafları var; binaya girişin nasıl denetlendiği ve ödemenin nasıl yapıldığı yazmıyor. Başka şehirden bakan veli bu soruların cevabını bulamayınca telefon açmadan sıradaki aparta geçiyor.',
        care: 'Öğrencinin ve velinin sorularını ayrı başlıklarda cevaplıyor, oda sayfalarına görüşme ve ön kayıt formunu ekliyoruz.',
        cizim: 'kilit',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Atölyemizi gezen ziyaretçi sonradan bizi nasıl bulsun?',
        ornek:
          'Odunpazarı’nda lületaşından pipo ve takı yapan bir atölyeye hafta sonu gezmeye gelenler uğruyor; birçoğu “sonra bakarım” diyerek çıkıyor. Evine dönen ziyaretçi atölyenin adını hatırlasa bile ürünleri görebileceği bir sayfa bulamıyor.',
        care: 'Ürünleri işçiliğiyle birlikte anlatan sayfalar kuruyor, sipariş ve soru için WhatsApp ile formu aynı sayfaya koyuyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Butik markalar', url: '/sektorler/butik-markalar/' },
      },
      {
        soru: 'Büyük firmaya tedarikçi olmak için site ne göstermeli?',
        ornek:
          'Eskişehir Organize Sanayi Bölgesi’nde havacılık ve raylı sistem firmalarına talaşlı imalat yapan bir atölyenin sitesi tek sayfa. Tedarikçi değerlendiren mühendis tezgâh listesini, ölçüm cihazlarını ve kalite belgelerini arıyor, hiçbirini bulamıyor.',
        care: 'Yeterlilik sayfasını tezgâh listesi, ölçüm cihazları ve belgelerle kuruyor, numune ve teklif isteğini tek forma bağlıyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Kafemizin sitesi olmasa da olur mu?',
        ornek:
          'Porsuk kıyısında, Adalar’daki bir kafe menüsünü yalnız Instagram’da hikâye olarak paylaşıyor. Trenden inip nereye oturacağına bakan ziyaretçi Google’da kafenin adını yazınca menüyü, çalışma saatini ve rezervasyon yolunu göremiyor.',
        care: 'Menüyü, saatleri ve rezervasyon düğmesini taşıyan tek sayfalık hızlı bir site kuruyor, harita kaydına bağlıyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Her dönem değişen bilgiyi sitede nasıl güncel tutarız?',
        ornek:
          'Tepebaşı’nda üniversite sınavına hazırlayan bir kursun sitesinde geçen yılın grup saatleri ve eski dönem tarihleri duruyor. Yeni dönemde kayıt yaptırmak isteyen öğrenci hangi grubun ne zaman başladığını öğrenmek için telefon açmak zorunda kalıyor.',
        care: 'Program ve dönem bilgisini kursun kendi güncelleyebileceği bir panele bağlıyor, her programa ön kayıt formu ekliyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'Hafta sonu için oda arayan bizi neden göremiyor?',
        ornek:
          'Odunpazarı’nda eski bir konağı otele çeviren işletme rezervasyonun tamamını aracı sitelerden alıyor. Ankara’dan hızlı trenle bir geceliğine gelmeyi düşünen çift otelin adını aradığında karşısına yalnız aracı sitelerin sayfaları çıkıyor.',
        care: 'Odaları, konağın konumunu, gara ve müzelere uzaklığı anlatan, doğrudan rezervasyon isteği alan bir site kuruyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  isler: {
    baslik: 'Eskişehir’deki işletmeniz için hangi işleri üstleniyoruz?',
    giris: 'Tasarım, sitenin başvuru getirmesi için gereken işlerden yalnız biri. Eskişehir’deki bir işletmede altısını birlikte ele alıyoruz.',
    liste: [
      { ad: 'Okura göre sayfa planı', aciklama: 'Siteye kimin geldiğini ayırıyoruz: öğrenci, veli, günübirlik ziyaretçi ya da satın almacı. Her birinin sorusuna cevap veren sayfa ayrı kurulur.' },
      { ad: 'Dar ekranda tasarım', aciklama: 'Tasarıma telefon ekranından başlıyoruz; menü, oda ya da ürün fotoğrafları mobil bağlantıda da çabuk açılacak boyutta hazırlanır.' },
      { ad: 'Ön kayıt ve teklif yolları', aciklama: 'İşinize uyan başvuru yolunu seçiyor; formu, arama ve WhatsApp düğmelerini yayından önce gerçek bir telefonda deniyoruz.' },
      { ad: 'Arama için sayfa adları', aciklama: 'Başlıkları ve adresleri müşterinizin yazdığı sözlerle kuruyoruz. Eskişehir, Odunpazarı ya da Tepebaşı adı, işletmenin gerçekten bulunduğu yeri söylemek için kullanılır.' },
      { ad: 'Harita kaydıyla eşleme', aciklama: 'Google İşletme Profili’ndeki ad, adres, telefon ve çalışma saatini siteyle bire bir aynı yapıyor, profile site bağlantısını ekliyoruz.' },
      { ad: 'Panel ve erişimlerin devri', aciklama: 'Dönem tarihini, menüyü ya da yeni ürünü kendiniz değiştirebileceğiniz bir panel kuruyoruz. Yayınla birlikte alan adı ve site erişimleri sizin adınıza teslim edilir.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  referanslar: {
    baslik: 'Eskişehir’den çalıştığımız markalar',
    giris: 'İlk iki marka Eskişehir’den: biri lületaşı işliyor, öbürü öğrenci apartı işletiyor. Üçüncüsü başka bir şehirden bir havuz firması. Üçünün de sitesi yayında.',
    liste: [
      {
        kimlik: 'estika',
        not: 'Lületaşı işleyen firmanın sitesinde sayfa düzeni, üretim alanlarını inceleyen ziyaretçinin talebini nereye bırakacağı sorusuna göre kuruldu.',
      },
      {
        kimlik: 'esvia',
        not: 'Öğrenci apartının sitesi, öğrencinin ve ailesinin konaklama talebini nasıl ileteceği sorusu etrafında tasarlandı.',
      },
      {
        kimlik: 'tarum-havuz',
        not: 'Eskişehir dışından bir örnek: havuz yaptırmak isteyen ile havuzunu yeniletmek isteyen ziyaretçi sitede ayrı sayfalara yönleniyor.',
      },
    ],
  },

  secim: {
    giris:
      'Eskişehir’de site yaptırırken şehirdeki firmalarla da, uzaktan çalışan ajanslarla da görüşebilirsiniz. Hangisini seçerseniz seçin, aşağıdaki soruların cevabı aynı açıklıkta verilmeli.',
  },

  sss: {
    baslik: 'Eskişehir’de web tasarım hakkında merak edilenler',
    giris: 'Firma seçimi, uzaktan çalışma, hazır şablonlar ve sahiplik üzerine sık gelen sorular.',
    sorular: [
      {
        soru: 'Eskişehir’de web tasarım firması seçerken neye bakılır?',
        cevap:
          'En çok, firmanın yaptığı sitelerin bugün nasıl çalıştığına ve sizi ne kadar dinlediğine bakılır. Örnek olarak gösterilen siteleri telefonda açın; menüde gezinin, formu gönderin, sayfanın ne kadar çabuk geldiğini izleyin. Öğrenciye mi, ziyaretçiye mi, satın almacıya mı sattığınızı sormadan fiyat veren firma, işinizi tanımadan teklif hazırlıyordur.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Yüz yüze görüşmeden Eskişehir’deki işletmemize site yapılır mı?',
        cevap:
          'Evet, yapılır; çalışmalarımızın tamamını uzaktan yürütüyoruz. Görüşmeler telefonla ya da görüntülü olur, taslakları size gönderdiğimiz bağlantıdan kendi telefonunuzda açıp denersiniz. İşletmenin, ürünlerin ve mekânın fotoğraflarını siz sağlarsınız.',
      },
      {
        soru: 'Öğrenci apartı ya da yurt sitesinde neler olmalı?',
        cevap:
          'Öğrenci apartı sitesinde oda tipleri, binaya giriş ve güvenlik düzeni, kampüse ulaşım, ödeme koşulları ve görüşme yolu açıkça yer almalı. Siteyi çoğu zaman iki kişi okur: odayı beğenecek öğrenci ve kararı onaylayacak veli. İkisinin sorularını ayrı başlıklarda cevaplıyor, ön kayıt formunu her oda sayfasına koyuyoruz.',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Hazır site paketleri bize yeter mi?',
        cevap:
          'Tek hizmeti olan ve birkaç sayfayla anlatılabilen bir işletme için hazır şablon çoğu zaman yeterlidir. Oda tipleri olan bir apart, ürün çeşidi çok bir atölye ya da teknik yeterliliğini göstermesi gereken bir üretici ise şablonun sayfa düzenine sığmaz. Kararı ilk görüşmede, anlatılacak şeylerin listesine bakarak birlikte veriyoruz.',
      },
      {
        soru: 'Web sitesi fiyatı neye göre belirlenir?',
        cevap:
          'Fiyatı sayfa sayısı, metin ve fotoğrafların kimde olduğu, rezervasyon ya da ön kayıt formu gibi ek işler belirler. İhtiyaçlar işletmeden işletmeye değiştiği için sitemizde fiyat tablosu yok. İlk görüşmeden sonra yapılacak işlerin dökümünü çıkarıyor, teklifi o döküme göre yazıyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Alan adı ve site kimin üzerine kayıtlı olur?',
        cevap:
          'Alan adı, barındırma ve sitenin kendisi işletmenizin üzerine kayıtlı olur. Biz yalnız yönetici yetkisiyle çalışırız; bu yetkiyi istediğiniz gün geri alabilirsiniz. Daha önce başka birinin adına alınmış bir alan adınız varsa devrini nasıl isteyeceğinizi ilk görüşmede konuşuyoruz.',
      },
      {
        soru: 'Yeni siteyle birlikte başvuru sayısı için söz veriyor musunuz?',
        cevap:
          'Hayır, vermiyoruz; başvuru sayısı, ziyaret ya da arama sırası tek başımıza belirleyebileceğimiz şeyler değil. Taahhüdümüz işletmenizi ve okurunuzu ayrıntılı incelemek, sayfaları bu incelemeye dayanarak kurmak ve yayından sonra başvuru getirmeyen sayfayı düzenli olarak ele almaktır.',
      },
    ],
  },
};

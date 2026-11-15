/**
 * Karşıyaka web tasarım (İzmir, ilçe sayfası).
 * Ana niyet: "karşıyaka web tasarım" (140). Şehir ifadeleriyle tamamlandı: "izmir web tasarım" (1.900),
 * "web tasarım izmir" (390), "izmir web tasarım ajansı" (170); karşı yakadaki "alsancak web tasarım" (30).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Karşıyaka'da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Karşıyaka Çarşı, Bostanlı sahili, Mavişehir'deki yeni konutlar,
 * Girne Bulvarı, vapur ve tramvay. Örnek işletmeler temsilidir. Sağlık örneği yalnız site içindir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'karsiyaka-web-tasarim',
  sehir: 'izmir',
  ilce: 'Karşıyaka',
  yerDe: 'Karşıyaka’da',
  hizmet: 'web',
  baslik: 'Karşıyaka web tasarım',
  metaBaslik: 'Karşıyaka Web Tasarım: İzmir’de Web Sitesi',
  metaAciklama:
    'Karşıyaka’daki işletmeler için web tasarım: çarşı, Bostanlı ve Mavişehir müşterisine göre sayfalar, telefonda denenmiş talep yolları. Uzaktan çalışıyoruz.',
  ozet: 'Karşıyaka çarşısındaki mağazadan Bostanlı’daki kafeye, ilçe müşterisinin telefonda bulup aradığı web siteleri.',
  tanim: [
    'Karşıyaka’daki işletmeler için web tasarım, çarşıdan, sahilden ya da çevre mahallelerden gelen müşterinin aradığı hizmeti telefon ekranında bulup işletmeye tek dokunuşla ulaştığı bir sitenin planlanıp kurulması işidir.',
    'Karşıyaka’da müşteri çoğu işini ilçeden çıkmadan görür: alışveriş çarşıda, kahve Bostanlı sahilinde, muayene Girne Bulvarı çevresindeki bir muayenehanede. Sitenizi bu müşterinin ilçe ve semt adıyla yaptığı aramalara göre kuruyor, Google İşletme Profili’ndeki bilgiyle eşliyoruz. Çalışma uzaktan yürür; görüşmeleri telefonla ya da görüntülü yapıyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Karşıyaka’da web tasarım için ne aranıyor?',
    giris: 'İlçe adıyla yapılan arama küçük ama net: yazan kişi Karşıyaka’daki işletmesine site istiyor.',
    liste: [
      { ifade: 'izmir web tasarım', hacim: 1900 },
      { ifade: 'web tasarım izmir', hacim: 390 },
      { ifade: 'izmir web tasarım ajansı', hacim: 170 },
      { ifade: 'karşıyaka web tasarım', hacim: 140 },
      { ifade: 'alsancak web tasarım', hacim: 30 },
    ],
    yorum: [
      '“Karşıyaka web tasarım” ayda yaklaşık 140 kez yazılıyor. Ölçtüğümüz İzmir ilçeleri içinde Buca ile birlikte en çok aranan ilçe ifadesi bu; körfezin karşı kıyısındaki Alsancak için aynı arama çok daha az yapılıyor.',
      'Sayılar Türkiye genelinin aylık yaklaşık değeridir ve arayanın nerede olduğunu göstermez. Sitenizi planlarken asıl baktığımız, müşterinizin sizin hizmetinizi “karşıyaka” ya da “bostanlı” ekleyerek arayıp aramadığıdır.',
    ],
  },

  yerel: {
    baslik: 'Karşıyaka’da site kuran işletmenin üç tipik durumu',
    giris: 'Çarşı, sahil ve yeni konut bölgeleri: ilçenin üç ayrı yüzünden üç örnek. İşletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Çarşıdaki mağazamıza site ne kazandırır?',
        ornek:
          'Karşıyaka Çarşı’da ayakkabı ve çanta satan bir mağaza, vitrini gören müşteriyle çalışıyor. Vitrinde gördüğü modeli akşam evde telefonda arayan kişi mağazanın adını, saatlerini ve yeni sezon ürünlerini bulamıyor.',
        care: 'Ürün gruplarını, çalışma saatini ve WhatsApp’tan sorma düğmesini gösteren sade bir site kuruyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'WhatsApp Business nedir?', url: '/blog/whatsapp-business-nedir/' },
      },
      {
        soru: 'Sahildeki kafemizi arayan neden bulamıyor?',
        ornek:
          'Bostanlı sahilinde bir kafenin site başlığında yalnız işletmenin adı yazıyor; ilçe, semt ve sunulan şey hiç geçmiyor. “Bostanlı kahvaltı” yazan kişiye Google’ın bu sayfayı göstermesi için bir neden kalmıyor.',
        care: 'Sayfa başlığına ve ilk cümleye semti ve sunduğunuz şeyi yazıyor, menüyü telefonda okunur hâle getiriyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Yeni açıldık, siteye nereden başlamalıyız?',
        ornek:
          'Mavişehir’de yeni açılan bir pilates stüdyosunun yalnız Instagram hesabı var. “Mavişehir pilates” yazan kişi stüdyoyu haritada görüyor ama ders saatlerini ve deneme dersini soracağı bir sayfa bulamıyor.',
        care: 'Ders programı, eğitmenler ve deneme dersi formundan oluşan küçük bir site kuruyor, harita profiline bağlıyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'Site kurulum rehberi', url: '/blog/web-sitesi-nasil-kurulur/' },
      },
    ],
  },

  isler: {
    baslik: 'Karşıyaka’daki işletmenizin sitesi için yaptığımız işler',
    giris: 'İlçeye hizmet veren bir işletmenin sitesi birkaç sayfadan oluşabilir. O birkaç sayfada şu dört işi yapıyoruz:',
    liste: [
      {
        ad: 'İşinize göre sayfa planı',
        aciklama: 'Çarşıdaki mağazada ürün grupları, muayenehanede hekimin onayladığı bilgi sayfaları, kafede menü: hangi sayfanın gerektiğini müşterinizin aramasına bakarak belirliyoruz.',
      },
      {
        ad: 'İlçe ve semt adı kullanımı',
        aciklama: 'Karşıyaka, Bostanlı ya da Mavişehir adını sayfa başlığına yalnız işletmenizin bulunduğu ve hizmet verdiği yer için yazıyoruz. Aynı adı Google İşletme Profili’ndeki adresle uyumlu tutuyoruz.',
      },
      {
        ad: 'Telefonda denenmiş talep yolları',
        aciklama: 'Arama, WhatsApp ve form düğmelerini vapurda ya da tramvayda tek elle kullanılacak biçimde yerleştiriyor, yayından önce gerçek telefonda deniyoruz.',
      },
      {
        ad: 'Panel ve teslim',
        aciklama: 'Yeni ürünü, menüyü ya da ders programını kendiniz değiştirebileceğiniz bir panel kuruyor, yayın günü bütün erişimleri size bırakıyoruz.',
      },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Karşıyaka’da web tasarım hakkında sorulanlar',
    giris: 'İlçe adının kullanımı, uzaktan çalışma ve sahiplik üzerine Karşıyaka’daki işletmelerden gelen sorular.',
    sorular: [
      {
        soru: 'Karşıyaka’da web sitesi için ajansın ilçede olması gerekir mi?',
        cevap:
          'Hayır, gerekmez; bir sitenin planı, tasarımı ve yayını uzaktan yürütülebilir ve biz böyle çalışıyoruz. Görüşmeleri telefonla ya da görüntülü yapıyoruz. Gerekli olan, ajansın işletmenizi ve Karşıyaka’daki müşterinizin nasıl aradığını ayrıntılı sormasıdır.',
      },
      {
        soru: 'Site başlığına Karşıyaka mı, İzmir mi yazılmalı?',
        cevap:
          'Müşteriniz ilçeden geliyorsa başlığa Karşıyaka, bütün şehirden geliyorsa İzmir yazılır; ikisini birden doldurmak gerekmez. Çarşıdaki bir terzi için doğru söz “Karşıyaka terzi”dir, İzmir’in her yerine kurulum yapan bir firma için ise şehir adı. Hangi adın kullanılacağına işletmenizin gerçek hizmet bölgesine bakarak karar veriyoruz.',
      },
      {
        soru: 'Yalnız Instagram hesabımız var, site şart mı?',
        cevap:
          'Şart değil, ama Google’da hizmeti arayan kişi Instagram hesabınızı çoğu zaman görmez. Site; hizmetlerinizi, çalışma saatinizi ve iletişim yollarınızı arama sonuçlarına taşır. Birkaç sayfalık bir siteyle başlayıp ihtiyaca göre büyütmek mümkündür.',
      },
      {
        soru: 'Karşıyaka’da web tasarım fiyatı neye göre değişir?',
        cevap:
          'Fiyat, sayfa sayısına ve metin ile fotoğrafların ne kadarının hazır olduğuna göre değişir. İlçeye hizmet veren bir işletmenin sitesi çoğu zaman az sayfalıdır, ama rakam söylemek için işi görmemiz gerekir. Görüşmeden sonra yapılacakları tek tek yazıp teklifi buna göre veriyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Site ve alan adı kimin adına olur?',
        cevap:
          'İkisi de sizin adınıza kayıtlı olur; biz yalnız sizin açtığınız yönetici erişimini kullanırız. İş bittiğinde ya da çalışmayı sonlandırdığınızda erişimi kapatmanız yeterlidir.',
      },
    ],
  },
};

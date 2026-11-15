/**
 * Kartal web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "kartal web tasarım" (210). Pano, İstanbul geneli ve komşu ilçe ifadeleriyle tamamlandı:
 * "istanbul web tasarım" (1.000), "pendik web tasarım" (320), "istanbul web tasarım ajansı" (210),
 * "istanbul web tasarım firmaları" (90), "maltepe web tasarım" (70), "anadolu yakası web tasarım" (10).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Kartal’da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Hukuk bürosu ve muayenehane için yalnız web sitesi ve SEO anlatılır; reklam kampanyası önerilmez (meslek kuralları).
 * Yerel bilgiler herkesçe bilinen olgulardır: İstanbul Anadolu Adliyesi (halk arasında Kartal Adliyesi) ve çevresindeki
 * hukuk büroları, E-5 boyunca eski fabrika arazilerindeki konut ve ofis projeleri, kentsel dönüşüm, Cevizli’deki hastane,
 * Dragos ve Kartal sahili, Yakacık ve Soğanlık semtleri. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'kartal-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Kartal',
  yerDe: 'Kartal’da',
  hizmet: 'web',
  baslik: 'Kartal web tasarım',
  metaBaslik: 'Kartal Web Tasarım, İstanbul: Kurumsal Site',
  metaAciklama:
    'Kartal’daki hukuk bürosu, müteahhit ve sahil işletmeleri için web tasarım: meslek kuralına uygun metin, telefonda kullanılan sayfalar. İşi uzaktan, görüşerek yürütüyoruz.',
  ozet: 'Adliye çevresindeki hukuk bürosundan kentsel dönüşüm yapan müteahhide, Kartal’da kuralına uygun ve telefonda kullanılan web siteleri.',
  tanim: [
    'Kartal’daki işletmeler için web tasarım, adliye çevresindeki büronun, kentsel dönüşüm yapan müteahhidin ya da sahildeki işletmenin kendisini arayan kişiye ne iş yaptığını açıkça anlattığı ve başvurunun kolayca bırakıldığı web sitesinin tasarlanıp yayına alınması işidir.',
    'Kartal’da üç iş çevresi yan yana duruyor. Anadolu Adliyesi’nin çevresinde hukuk büroları toplanıyor. E-5 boyunca eski fabrika arazilerinde konut ve ofis projeleri yükseliyor, eski mahallelerde kentsel dönüşüm sürüyor. Sahilde, çarşıda ve Cevizli’deki hastanenin çevresinde de kapısına müşteri gelen işletmeler var. Hukuk bürosu ve muayenehane için yalnız web sitesi ve SEO çalışıyor, reklam önermiyoruz; görüşmeleri telefonla ya da görüntülü yapıyor, işi uzaktan yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Kartal’da web tasarım için ne aranıyor?',
    giris: 'İlçenin adı aynı zamanda yaygın bir firma adı; bu yüzden Kartal’da arama sayılarını okurken temkinli olmak gerekiyor.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'pendik web tasarım', hacim: 320 },
      { ifade: 'kartal web tasarım', hacim: 210 },
      { ifade: 'istanbul web tasarım ajansı', hacim: 210 },
      { ifade: 'istanbul web tasarım firmaları', hacim: 90 },
      { ifade: 'maltepe web tasarım', hacim: 70 },
      { ifade: 'anadolu yakası web tasarım', hacim: 10 },
    ],
    yorum: [
      '“Kartal web tasarım” ayda yaklaşık 210 kez yazılıyor. İki komşusundan Pendik 320 ile daha çok, Maltepe 70 ile daha az aranıyor. Bu aramaların bir bölümü ilçeyi değil, adında “Kartal” geçen bir firmayı arıyor olabilir; ikisini ayıracak bir ölçümümüz yok.',
      'Değerler ülke genelinin aylık yaklaşık sayılarıdır, aramanın nereden yapıldığını göstermez. Kartal’da site planlarken mesleğin kendi aramalarını esas alıyoruz: “kartal boşanma avukatı”, “kartal kentsel dönüşüm”, “dragos balık restoranı” gibi. Bu ifadelerin sizin işiniz için ne kadar yazıldığını proje başında ayrıca ölçüyoruz.',
    ],
  },

  yerel: {
    baslik: 'Kartal’da üç meslek, sitede üç ayrı ihtiyaç',
    giris: 'Adliye çevresindeki büro, dönüşüm yapan müteahhit ve sahildeki restoran için ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Adliyenin yanındayız, büro sitesine ne yazabiliriz?',
        ornek:
          'Anadolu Adliyesi’nin yakınındaki bir hukuk bürosunun sitesinde “alanında en başarılı avukatlar” yazıyor. Avukatlık meslek kuralları bu tür övgüye ve reklama izin vermiyor; büro farkında olmadan disiplin riski taşıyor.',
        care: 'Siteyi çalışma alanları, avukat özgeçmişleri ve iletişim bilgisiyle sınırlı kuruyor, reklam kampanyası önermiyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Hukuk büroları', url: '/sektorler/hukuk-burolari/' },
      },
      {
        soru: 'Kentsel dönüşüm yapıyoruz, daire sahibi sitede ne arar?',
        ornek:
          'Yakacık’ta eski bir apartmanı yenilemek için kat malikleriyle görüşen bir müteahhidin kendi sitesi yok; adı yalnız ilan sitelerindeki satılık dairelerde geçiyor. Dairesini teslim edecek kişi ise bitmiş binaları ve işin hangi adımlarla ilerleyeceğini görmek istiyor.',
        care: 'Tamamlanan binaları fotoğraflarıyla gösteren ve kat maliklerine süreci anlatan ayrı sayfalar kuruyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'İnşaat ve yapı', url: '/sektorler/insaat-ve-yapi/' },
      },
      {
        soru: 'Menümüz sitede duruyor, neden rezervasyon gelmiyor?',
        ornek:
          'Dragos sahilindeki bir restoranın menüsü siteye fotoğraf olarak yüklenmiş; telefonda yazılar okunmuyor. Rezervasyon numarası da görselin içinde kaldığı için dokununca arama başlamıyor, yer bakan kişi başka restorana geçiyor.',
        care: 'Menüyü telefonda okunan bir sayfaya çeviriyor, numarayı dokununca arayan bir düğme olarak yerleştiriyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
    ],
  },

  isler: {
    baslik: 'Kartal’daki işletmeniz için neler yapıyoruz?',
    giris: 'İş kalemleri aynı, ağırlıkları mesleğe göre değişiyor: hukuk bürosunda metin, müteahhitte proje sayfaları, restoranda telefon ekranı öne geçiyor.',
    liste: [
      { ad: 'Meslek kuralına uygun metin', aciklama: 'Avukat ve hekim sitelerinde övgü, karşılaştırma ve sonuç vaadi içeren cümle yazmıyoruz; her metin yayından önce sizin onayınızdan geçiyor.' },
      { ad: 'Proje ve hizmet sayfaları', aciklama: 'Müteahhitte her binaya, hukuk bürosunda her çalışma alanına, restoranda menüye ayrı sayfa açıyoruz.' },
      { ad: 'Dokununca arayan numara', aciklama: 'Adliyeye ya da sahile gelmiş kişi sizi telefonundan arar. Numaranın aramayı, adresin yol tarifini açtığını gerçek telefonda deniyoruz.' },
      { ad: 'İlçe ve semt adının yazımı', aciklama: 'Kartal adını hizmetle birlikte başlığa yazıyor; Yakacık, Soğanlık ya da Dragos’taysanız semt adını siteye ve Google İşletme Profili’ne aynı biçimde ekliyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Kartal’da web tasarım hakkında sık sorulan sorular',
    giris: 'Hukuk bürolarının, hekimlerin ve müteahhitlerin Kartal’da site yaptırırken sorduğu sorular.',
    sorular: [
      {
        soru: 'Kartal’da avukat web sitesi nasıl olmalı?',
        cevap:
          'Avukat web sitesi; büronun çalışma alanlarını, avukatların özgeçmişini ve iletişim bilgisini veren, övgü ve vaat içermeyen bir site olmalıdır. Meslek kuralları avukatın reklam yapmasını yasakladığı için hukuk bürolarına reklam kampanyası önermiyoruz; yalnız web sitesi ve SEO çalışıyoruz. Adliye halk arasında “Kartal Adliyesi” diye de anıldığı için iletişim sayfasında resmî adın yanında bu adı da yazıyoruz.',
      },
      {
        soru: 'Hastane çevresindeki muayenehane için reklam veriyor musunuz?',
        cevap:
          'Hayır, muayenehane ve klinikler için reklam kampanyası yürütmüyoruz; yalnız web sitesi ve SEO çalışıyoruz. Sağlıkta tanıtımın sınırını mevzuat ve meslek kuralları çiziyor. Cevizli’deki hastanenin çevresinde muayenehanesi olan bir hekimin sitesinde uzmanlık alanı, muayene saatleri ve ulaşım bilgisi yer alır; tedavi sonucu vaat eden ifade yer almaz.',
        bag: { etiket: 'Sağlık ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Kentsel dönüşüm yapan müteahhit her proje için ayrı site mi açmalı?',
        cevap:
          'Çoğu müteahhit için hayır; firmanın tek sitesi ve o sitede her bina için ayrı bir sayfa yeterlidir. Kat malikleri de daire alıcısı da önce firmanın adını arıyor ve bitmiş işleri tek yerde görmek istiyor. Ayrı alan adı, kendi adıyla tanıtılan büyük projelerde anlam kazanır.',
      },
      {
        soru: 'Büromuza gelmeden siteyi nasıl hazırlıyorsunuz?',
        cevap:
          'Siteyi uzaktan, sizden aldığımız bilgi ve belgelerle hazırlıyoruz. Görüntülü görüşmede çalışma alanlarınızı ya da projelerinizi dinliyor, metin taslağını yazılı olarak gönderiyoruz. Avukat ve hekim sitelerinde her sayfa, yayına girmeden önce sizin yazılı onayınızı bekliyor.',
      },
      {
        soru: 'Kartal’da web sitesi fiyatı neye göre değişir?',
        cevap:
          'Fiyatı sayfa sayısı ve içeriğin kimde olduğu belirler: birkaç çalışma alanı olan bir hukuk bürosu sitesi ile her binasını ayrı sayfada gösteren bir müteahhit sitesi aynı iş değildir. Bu yüzden sitemizde fiyat yazmıyor, görüşmede sayfa listesini birlikte çıkarıp teklifi o listedeki kalemlere göre hazırlıyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
    ],
  },
};

/**
 * Çankaya web tasarım (ilçe sayfası, Ankara, web).
 * Ana niyet: "çankaya web tasarım" (90). İlçenin ölçülmüş başka ifadesi yalnız "kızılay web tasarım" (10) olduğu için
 * liste Ankara’nın web tasarım ifadeleriyle tamamlandı: "ankara web tasarım" (2.900), "web tasarım ankara" (320),
 * "ankara web tasarım ajansı" (170), "ankara web sitesi tasarımı" (70). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * "çankaya web tasarım ajansı", "çankaya reklam ajansı", "çankaya dijital ajans" ve "çankaya seo" için araç veri döndürmedi.
 * Arama sonucu notu (aynı ölçüm): "çankaya web tasarım" sonuçlarında harita kutusu ve ilçe adını alan adına koymuş
 * küçük siteler var. Sayfalar açılıp doğrulanmadı; yorumda yalnız görülen şey söylenir.
 * Sağlık ve hukukta yalnız web sitesi ve SEO anlatılır; reklam önerilmez. Çankaya’da ofis olduğu yazılmaz.
 * Yerel bilgiler herkesçe bilinen olgulardır: Kızılay ve Kavaklıdere’deki bürolar ile muayenehaneler, Söğütözü ve
 * Çukurambar’daki plazalar, Tunalı Hilmi ile Bahçelievler’deki kafe ve restoranlar, Gaziosmanpaşa ve Oran çevresindeki
 * elçilikler. Örnek işletmeler ve arama sözleri temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'cankaya-web-tasarim',
  sehir: 'ankara',
  ilce: 'Çankaya',
  yerDe: 'Çankaya’da',
  hizmet: 'web',
  baslik: 'Çankaya web tasarım',
  metaBaslik: 'Çankaya Web Tasarım, Ankara: Kurumsal Site',
  metaAciklama:
    'Çankaya’daki bürolar, muayenehaneler, kafe ve restoranlar için web tasarım: çalışma alanı sayfaları, telefonda randevu ve yol tarifi. İşi uzaktan, görüşerek yürütüyoruz.',
  ozet: 'Çankaya’da büro, muayenehane ve kafe siteleri: işletmenin adını arayan kişi hizmeti, adresi ve randevu yolunu ilk ekranda bulur.',
  tanim: [
    'Çankaya’daki işletmeler için web tasarım, büronun, muayenehanenin ya da kafenin adını Google’a yazan kişinin yapılan işi, adresi ve randevu yolunu ilk ekranda bulduğu bir web sitesinin kurulması işidir.',
    'Çankaya’da iş semte göre değişir: Kızılay ve Kavaklıdere’de hukuk büroları ile muayenehaneler, Söğütözü ve Çukurambar’daki plazalarda danışmanlık ve mühendislik firmaları, Tunalı Hilmi ile Bahçelievler’de kafe ve restoranlar, Gaziosmanpaşa ve Oran çevresinde elçilikler var. Müşteri buraya çoğu zaman bir isimle gelir: tavsiye edilen hekimi, avukatı ya da mekânı Google’da arar. Siteyi bu aramaya göre kuruyor, bütün süreci telefonla ve görüntülü görüşerek uzaktan yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: '“Çankaya web tasarım” araması ne söylüyor?',
    giris: 'İlçe adıyla yapılan aramalar şehir adlı aramaların yanında küçük kalıyor; ikisini birlikte okumak gerekiyor.',
    liste: [
      { ifade: 'ankara web tasarım', hacim: 2900 },
      { ifade: 'web tasarım ankara', hacim: 320 },
      { ifade: 'ankara web tasarım ajansı', hacim: 170 },
      { ifade: 'çankaya web tasarım', hacim: 90 },
      { ifade: 'ankara web sitesi tasarımı', hacim: 70 },
      { ifade: 'kızılay web tasarım', hacim: 10 },
    ],
    yorum: [
      '“Çankaya web tasarım” ayda yaklaşık 90 kez yazılıyor; ölçtüğümüz Ankara ilçe ve semtleri içinde OSTİM’den sonra ikinci sırada. “Kızılay web tasarım” ayda 10 aramada kalıyor. “Çankaya web tasarım” sonuçlarına baktığımızda bir harita kutusu ve ilçe adını alan adına koymuş küçük siteler gördük.',
      'Hacimler Türkiye genelinde ölçülüyor; aramayı yapanın Çankaya’da olup olmadığını bu veri söylemiyor. Projenin başında müşterinizin hizmetinizi Çankaya adıyla mı, Kızılay ya da Çukurambar gibi semt adıyla mı, yoksa doğrudan adınızla mı aradığını ölçüyor; sayfa başlıklarını buna göre yazıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Çankaya’da muayenehane, kafe ve büro: üç site, üç ayrı iş',
    giris: 'Muayenehane, kafe ve yabancı müşterisi olan büro: üçünde de sitenin göreceği iş başka.',
    kartlar: [
      {
        soru: 'Randevu platformunda profilim var, site gerekir mi?',
        ornek:
          'Kavaklıdere’de muayenehanesi olan bir çocuk doktoru yalnız bir randevu platformundaki profiline güveniyor. Adını Google’a yazan veli, muayenehanenin hangi sokakta olduğunu ve hangi yaş grubuna bakıldığını tek bir yerde bulamıyor.',
        care: 'Hekimin kendi adına, tanıtım kurallarına uyan sade bir site kuruyoruz; sağlıkta reklam kampanyası önermiyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Sağlık ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Menümüz Instagram’da duruyor, site ne işe yarar?',
        ornek:
          'Bahçelievler’de, 7. Cadde’de bir kafenin menüsü yalnız Instagram’daki fotoğraflarda duruyor. Haritada “bahçelievler kahvaltı” arayan kişi profile dokunuyor, menüyü ve rezervasyon yolunu bulamayınca yandaki mekâna bakıyor.',
        care: 'Menüyü telefonda okunan bir sayfa olarak kuruyor, sayfayı Google İşletme Profili’ne bağlıyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Yabancı müşteri için İngilizce sayfa şart mı?',
        ornek:
          'Gaziosmanpaşa’da, elçiliklere yakın bir yeminli tercüme bürosunun sitesi yalnız Türkçe. Oturma izni için belge çevirtmek isteyen yabancı, hangi belgelerin çevrildiğini anlayamıyor ve telefonla sormak zorunda kalıyor.',
        care: 'En çok sorulan hizmetlerin İngilizce sürümünü kendi adresinde kuruyor, dil seçimini ilk ekrana koyuyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  isler: {
    baslik: 'Çankaya’da bir sitede dört işi birlikte yapıyoruz',
    giris: 'Çankaya’daki sitelerin çoğu birkaç sayfadan oluşur; işi bu dört kalem belirler.',
    liste: [
      { ad: 'Çalışma alanı ve hizmet sayfaları', aciklama: 'Büronun baktığı her işi, muayenehanenin verdiği her hizmeti ayrı bir sayfada anlatıyoruz. Arayan kişi uzun bir listenin içinde kaybolmuyor, kendi sorusunun sayfasına iniyor.' },
      { ad: 'Randevu, telefon ve yol tarifi', aciklama: 'Kat, kapı numarası, otopark ve en yakın metro durağı gibi bilgileri iletişim sayfasına yazıyoruz. Arama ve randevu düğmelerini telefonda deniyoruz.' },
      { ad: 'İlçe ve semt adının kullanımı', aciklama: 'Çankaya adını ve semtinizi sayfa başlığında, adres satırında ve Google İşletme Profili’nde gerçek adresinizdeki biçimiyle kullanıyoruz. Profilde işletme adının yanına ilçe adı eklemiyoruz.' },
      { ad: 'Meslek kurallarına uygun metin', aciklama: 'Hekim ve avukat sitelerinde üstünlük iddiası, hasta ya da müvekkil yorumu ve sonuç sözü kullanmıyoruz. Metnin son hâlini yayından önce siz onaylıyorsunuz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Çankaya’da web sitesi yaptırırken sorulan sorular',
    giris: 'İlçe adının kullanımı, meslek kuralları ve çalışma biçimimiz hakkında.',
    sorular: [
      {
        soru: 'Sitede Çankaya mı, Kızılay ya da Çukurambar gibi semt adı mı yazmalı?',
        cevap:
          'İkisini birlikte, gerçek adresinizdeki biçimiyle yazın: “Çukurambar, Çankaya/Ankara” gibi. Müşteri sizi çoğu zaman semt adıyla tarif eder, Google ise adresi ilçeyle eşleştirir. Semt adını ana sayfa başlığında ve iletişim sayfasında birer kez kullanmak yeter; her paragrafa eklemek metni okunmaz yapar.',
      },
      {
        soru: 'Çankaya’da hekim ve avukat siteleri için reklam da yapıyor musunuz?',
        cevap:
          'Hayır; hekimler ve avukatlar için yalnız web sitesi ve SEO çalışması yapıyoruz. İki mesleğin de tanıtım kuralları reklamı sınırlıyor. Sitede hangi bilginin yer alabileceğini görüşmede sizinle birlikte, mesleğinizin kurallarına bakarak belirliyoruz.',
        bag: { etiket: 'Hukuk büroları', url: '/sektorler/hukuk-burolari/' },
      },
      {
        soru: 'Çankaya’daki bir işletmenin sitesi yüz yüze görüşmeden yapılır mı?',
        cevap:
          'Evet, yapılır; biz bütün projeleri uzaktan yürütüyoruz. İlk görüşmeyi telefonla ya da görüntülü yapıyor, taslağı bir bağlantıyla gönderiyor, düzeltmeleri aynı ekrana bakarak konuşuyoruz. Büronuzun ya da mekânınızın fotoğraflarını sizden alıyoruz; fotoğraf çekimi yapmıyoruz.',
      },
      {
        soru: 'Kafe ya da restoran için Instagram yetmez mi?',
        cevap:
          'Mekânı tanıtmaya yeter, Google’da arayan kişiye cevap vermeye yetmez. “Tunalı kahvaltı” ya da “çukurambar akşam yemeği” yazan kişi haritaya ve siteye bakar; menünün, çalışma saatlerinin ve rezervasyon yolunun durduğu küçük bir site bu aramaya cevap verir. Instagram hesabınızı yönetmiyoruz; siteyi kuruyor ve işletme profilini düzenliyoruz.',
      },
      {
        soru: 'Alan adı ve site yayından sonra kimde kalır?',
        cevap:
          'Alan adı ve barındırma hesabı sizin adınıza kaydedilir, sitenin yönetim erişimi yayın günü size geçer. Bizde yalnız sizin tanımladığınız bir kullanıcı kalır; onu istediğiniz zaman silebilirsiniz.',
      },
    ],
  },
};

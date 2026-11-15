/**
 * İnşaat ve yapı sektörü. Diğer sektör dosyalarının ÖRNEĞİDİR.
 * Ana niyet: "inşaat firmaları için dijital pazarlama", "inşaat firması reklam", "inşaat firması web sitesi", "müteahhit web sitesi".
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026).
 * Referanslar: ÇelikVillam (Rotech Mühendislik) ve Tarum Havuz.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 1,
  kimlik: 'insaat-ve-yapi',
  ad: 'İnşaat ve yapı',
  kimler: 'Müteahhitler, çelik ve prefabrik yapı üreticileri, havuz firmaları',
  ozet: 'Model araştıran ziyaretçiyi, arsası hazır olup teklif isteyen müşteriden ayıran reklam ve site düzeni.',
  baslik: 'İnşaat ve yapı firmaları için dijital pazarlama',
  metaBaslik: 'İnşaat Firmaları için Dijital Pazarlama',
  metaAciklama:
    'İnşaat, çelik yapı, prefabrik ve havuz firmaları için Google Ads, Instagram reklamları, SEO ve web sitesi: keşif ve teklif isteyen müşteriye ulaşan kurulum.',
  tanim: [
    'İnşaat ve yapı firmaları için dijital pazarlama, ev, villa, havuz ya da tadilat yaptırmak isteyen kişinin araştırma yaptığı anda karşısına çıkma ve onu keşif ya da teklif görüşmesine getirme işidir.',
    'Bu sektörde karar haftalar, bazen aylar sürer. Müşteri önce model ve yöntem araştırır, sonra firmaları karşılaştırır, en son teklif ister. Reklamı, siteyi ve içeriği bu üç aşamaya göre ayrı ayrı kuruyoruz.',
    'Müteahhitler, çelik ve prefabrik yapı üreticileri ve havuz firmalarıyla çalışıyoruz. Mimarlık ofisleri ile iç mimarlık ve dekorasyon firmaları için ayrı sayfalarımız var.',
  ],
  gorselAlt:
    'Kâğıttan bir şantiye: çelik iskeleti yükselen villa, kiriş taşıyan vinç ve kapısı açık şantiye ofisi; kırmızı kalem çizgisini izleyen müşteriler ofise yürüyor',
  cagri: 'Firmam için görüşelim',
  kanal: 'belirsiz',

  aramalar: {
    baslik: 'İnşaat ve yapı sektöründe müşteriler Google’da ne arıyor?',
    giris: 'Ev ya da havuz yaptırmak isteyen kişi firmayı adıyla değil, yaptırmak istediği işle arar.',
    liste: [
      { ifade: 'prefabrik ev', hacim: 90500 },
      { ifade: 'tiny house', hacim: 49500 },
      { ifade: 'müteahhit', hacim: 33100 },
      { ifade: 'çelik ev', hacim: 22200 },
      { ifade: 'inşaat firmaları', hacim: 4400 },
      { ifade: 'havuz yapımı', hacim: 3600 },
      { ifade: 'tadilat', hacim: 2900 },
      { ifade: 'çelik villa', hacim: 2400 },
    ],
    yorum: [
      'Bu aramaların çoğu araştırma aramasıdır: kişi henüz model, yöntem ve maliyet hakkında fikir ediniyor. Aynı kişi birkaç hafta sonra “arsama çelik villa yaptırmak istiyorum” ya da “havuz yapım firmaları” yazar.',
      'İkisine aynı reklamı gösterip aynı sayfaya indirirseniz bütçenin büyük kısmı fikir edinenlere gider. Önce hangi aramanın araştırma, hangisinin talep olduğunu ayırıyor; reklamı ve sayfayı buna göre kuruyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'İnşaat firmalarından en sık duyduğumuz sorular',
    giris: 'Reklam veren de, hiç vermemiş olan da aynı altı noktada takılıyor. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'İnşaat firması reklamı nereye verilmeli?',
        ornek:
          'Çelik villa yapan bir firma Google’a ve Instagram’a aynı reklamı veriyor. Google’da arayan teklif istiyor, Instagram’da gören ise çoğu zaman yalnız modellere bakıyor.',
        care: 'Arayan müşteri için arama reklamı, tanıtım için görsel reklam kuruyor; ikisinin hedefini ve sayfasını ayırıyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Google Ads mi, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Reklamdan arayanlar neden yalnız fiyat sorup kapatıyor?',
        ornek:
          'Bir havuz firmasını arayanların çoğu “metrekaresi ne kadar” diye sorup kapatıyor. Reklam metni ve sayfa, bahçesi hazır olanla yalnız merak edeni ayırmıyor.',
        care: 'Arama terimlerini okuyup merak aramalarını ayırıyor, formda arsa ve zamanlama bilgisini soruyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Tıklama var, telefon yok', url: '/blog/google-ads-tiklama-var-telefon-yok/' },
      },
      {
        soru: 'Sitemde proje fotoğrafları var, neden teklif isteyen yok?',
        ornek:
          'Bir müteahhidin sitesinde yüzlerce şantiye fotoğrafı var. Ziyaretçi hangi işi yaptırabileceğini, sürecin nasıl işlediğini ve kime yazacağını bulamıyor.',
        care: 'Her iş türüne ayrı sayfa açıyor, her sayfaya o işe özel teklif adımını koyuyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Google’da “çelik ev” yazınca neden rakiplerim çıkıyor?',
        ornek:
          'Rakip firmanın “çelik ev nasıl yapılır” ve “çelik ev mi, betonarme mi” başlıklı sayfaları var. Araştırma yapan kişi önce onları okuyor, teklif isterken de onları hatırlıyor.',
        care: 'Müşterinizin araştırma aşamasında sorduğu soruları çıkarıp bunları yanıtlayan sayfaları planlıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Instagram’dan gelen mesajlar neden işe dönmüyor?',
        ornek:
          'Villa videosu binlerce kez izleniyor, onlarca “fiyat?” mesajı geliyor. Kimse arsanın hazır olup olmadığını sormadığı için görüşmeler ilk mesajda bitiyor.',
        care: 'İlk yanıtı ve sorulacak iki soruyu hazırlıyor, ciddi talebi keşif görüşmesine taşıyan düzeni kuruyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar neden satışa dönmüyor?', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'İlk kez reklam vereceğim, nereden başlamalıyım?',
        ornek:
          'Yıllardır tavsiyeyle iş alan bir tadilat firması ilk kez reklam vermek istiyor. Hangi işini öne çıkaracağını ve kimi hedefleyeceğini bilmiyor.',
        care: 'En çok kazandıran iş türünüzü ve hizmet bölgenizi belirleyip ilk kampanyayı yalnız onun üzerine kuruyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'İlk kampanyayı planlayalım', url: '#baslangic' },
      },
    ],
  },

  kanallar: {
    baslik: 'İnşaat firmaları için hangi kanal ne işe yarar?',
    giris:
      'Dört kanalın her biri müşterinin karar sürecinde farklı bir aşamaya denk gelir. Hepsini birden açmak gerekmez; hangisiyle başlanacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'google-ads',
        baslik: 'Google Ads: teklif isteyen aramalar',
        metin: 'Arsası ya da projesi hazır olan kişi Google’a işin adını yazar. Arama reklamı bu kişiye tam o anda görünür.',
        maddeler: ['Araştırma ve talep aramaları ayrı kampanyalarda', 'İş arayan ve malzeme soran aramalar negatif listede', 'Hizmet verdiğiniz il ve ilçelere göre hedefleme'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: biten işi göstermek',
        metin: 'Yapı işi gözle satılır. Teslim ettiğiniz villa, havuz ya da iç mekân, henüz aramaya başlamamış kişide fikir uyandırır.',
        maddeler: ['Şantiyeden teslimata kısa videolar', 'Mesaj ve form için ayrı kampanyalar', 'İlk mesaja hazır yanıt ve eleme soruları'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'seo',
        baslik: 'SEO ve yapay zekâ görünürlüğü: araştırma aşaması',
        metin: 'Müşteri karar vermeden önce yöntem, süre ve malzeme hakkında soru sorar. Cevap sizin sayfanızdaysa teklif aşamasında hatırlanan firma olursunuz.',
        maddeler: ['Her iş türü ve bölge için ayrı sayfa', 'Sık sorulan teknik soruların cevapları', 'Yapay zekâ yanıtları için net işletme bilgisi'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi: modelden teklife giden yol',
        metin: 'Model araştıran ziyaretçi ile teklif isteyen ziyaretçi aynı sayfada aynı şeyi aramaz. Site ikisine ayrı yol gösterir.',
        maddeler: ['Proje ve model sayfaları', 'Arsa, konum ve zamanlamayı soran teklif formu', 'Telefonda hızlı açılan görseller'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'İnşaat ve yapı firmalarıyla nasıl çalışıyoruz?',
    giris: 'Önce işinizi ve müşterinizin karar sürecini inceliyor, sonra kuruyor, ardından düzenli optimizasyonla hedefinize yaklaştırıyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'İş türleri, bölge ve aramalar', aciklama: 'Hangi işten kazandığınızı, hangi bölgelere gittiğinizi ve müşterinin sizi hangi sözlerle aradığını çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'Aşamaya göre kanal planı', aciklama: 'Araştırma, karşılaştırma ve teklif aşamaları için hangi kanalın ve hangi sayfanın kullanılacağını planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Kampanya, sayfa ve form', aciklama: 'Kampanyaları, iş türü sayfalarını ve teklif formunu kuruyor; yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Düzenli takip ve iyileştirme', aciklama: 'Gelen talepleri sizinle birlikte değerlendiriyor, iş getirmeyen aramaları kapatıp getirenleri güçlendiriyoruz.' },
      { ad: 'Hedef', ozet: 'Keşif ve sözleşme', aciklama: 'Başarıyı tıklamayla değil, keşfe ve sözleşmeye dönen taleplerle değerlendiriyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'İnşaat ve yapı sektöründe çalıştığımız markalar',
    giris: 'İkisi de yayında olan, bugün açıp inceleyebileceğiniz siteler.',
    liste: [
      {
        kimlik: 'celikvillam',
        not: 'Çelik villa yaptırmak isteyenler model, uygulama ve teklif bilgisine farklı sorularla geliyor. Site bu sorular etrafında kuruldu; reklamlar kendi arsası için teklif isteyen ziyaretçiye göre düzenleniyor.',
      },
      {
        kimlik: 'tarum-havuz',
        not: 'Havuz yaptırmak isteyen ile mevcut havuzunu yenilemek isteyen ziyaretçi sitede ayrı sayfalara yönleniyor. Projede web tasarım, SEO ve sosyal medya yönetimi yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'İlk kez mi başlıyorsunuz, reklam verip sonuç mu alamıyorsunuz?',
    giris: 'İki durumda başlangıç noktası farklıdır. Hangisindeyseniz oradan başlıyoruz.',
    sol: {
      ust: 'Bugüne kadar tavsiyeyle iş aldıysanız',
      baslik: 'İlk kampanyayı tek bir iş türüyle kuruyoruz',
      metin: 'Her işinizi birden tanıtmak bütçeyi dağıtır. İlk adımda en çok kazandıran işi seçip yalnız onun için reklam, sayfa ve form hazırlıyoruz.',
      maddeler: [
        { ad: 'Hangi iş, hangi bölge?', aciklama: 'Villa, havuz, tadilat ya da proje çizimi. Gidebildiğiniz il ve ilçeler. İlk kampanyanın sınırı bu seçimle çizilir.' },
        { ad: 'Müşteri neyi görünce güvenir?', aciklama: 'Teslim edilmiş işler, sürecin anlatımı ve kiminle görüşeceği. Sayfanın ilk ekranı buna göre kurulur.' },
        { ad: 'Talebe kim, nasıl dönecek?', aciklama: 'Formu kim görecek, ilk aramada hangi sorular sorulacak? Yanıt düzeni yayından önce hazırlanır.' },
      ],
      cagri: 'İlk kampanyamı planlayalım',
      bag: { etiket: 'Google Ads mi, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      cizim: 'yol-ayrimi',
    },
    sag: {
      ust: 'Reklam veriyor ama iş alamıyorsanız',
      baslik: 'Önce bütçenin nereye gittiğini inceliyoruz',
      metin: 'Yeni kampanya açmadan önce hesabın bugün hangi aramalara para harcadığını ve gelen taleplerin neden işe dönmediğini görmemiz gerekir.',
      maddeler: [
        { ad: 'Arama terimleri', aciklama: 'Malzeme fiyatı, iş ilanı ya da ödev araştırması gibi iş getirmeyen aramaları ayıklıyoruz.' },
        { ad: 'Açılış sayfası', aciklama: 'Reklamdaki söz ile sayfanın ilk ekranı aynı işi mi anlatıyor? Telefonda birlikte deniyoruz.' },
        { ad: 'Talep kalitesi', aciklama: 'Gelen formları ve aramaları sizinle sınıflıyor, hangi reklamın ciddi talep getirdiğine bakıyoruz.' },
        { ad: 'Bölge ve zamanlama', aciklama: 'Reklamın gösterildiği yerleri, iş aldığınız bölgelerle karşılaştırıyoruz.' },
      ],
      cagri: 'Hesabıma birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Bir arama talep mi, yoksa araştırma mı?',
    metin: [
      'İnşaat ve yapı sektöründe aynı kelimenin içinden model araştıran da çıkar, iş arayan da, teklif isteyen de. Bütçeyi doğru yere toplamak için her aramaya ayrı bir karar yazılır.',
      'Tablo bir havuz firması için hazırlanmış temsili bir örnektir. Sizin hesabınızda aynı tabloyu kendi arama terimlerinizle kuruyoruz.',
    ],
    tabloBasligi: 'Havuz firması için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'villa havuzu yaptırmak istiyorum', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Yaptırmaya hazır. Bütçe bu aramaya toplanır, reklam keşif talebi sayfasını açar.' },
      { ilk: 'havuz yapım firmaları', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Firmaları karşılaştırıyor. Reklam, teslim edilen işleri gösteren sayfayı açar.' },
      { ilk: 'havuz modelleri', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Fikir ediniyor. Model sayfasına iner; talebe dönüp dönmediğine göre karar verilir.' },
      { ilk: 'havuz kimyasalları fiyat', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Havuzu var, malzeme arıyor. Yapım kampanyasında reklam gösterilmez.' },
      { ilk: 'havuz ustası iş ilanları', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'İş arıyor. Negatif anahtar kelime olur.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'İnşaat firmaları için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Reklam, web sitesi ve talep kalitesi hakkında inşaat ve yapı firmalarından en çok duyduklarımız.',
    sorular: [
      {
        soru: 'İnşaat firmaları için dijital pazarlama nedir?',
        cevap:
          'İnşaat firmaları için dijital pazarlama; ev, villa, havuz ya da tadilat yaptırmak isteyen kişilere Google aramalarında, Instagram’da ve web sitesinde ulaşıp onları keşif ya da teklif görüşmesine getiren çalışmaların bütünüdür. Google Ads, Instagram ve Facebook reklamları, SEO ve web sitesini kapsar.',
      },
      {
        soru: 'İnşaat firması reklamı Google’a mı, Instagram’a mı verilmeli?',
        cevap:
          'İkisi farklı işe yarar. Projesi ya da arsası hazır olan kişi Google’da arar; bu yüzden teklif talebi için çoğu zaman arama reklamıyla başlanır. Instagram, biten işleri göstererek henüz aramaya başlamamış kişilere ulaşmak için kullanılır. Hangisiyle başlayacağınızı işinizin türüne ve bölgenize bakarak birlikte seçiyoruz.',
        bag: { etiket: 'Google Ads mi, Instagram reklamı mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Müteahhitler için web sitesi nasıl olmalı?',
        cevap:
          'Bir müteahhit sitesi yapılan iş türlerini ayrı sayfalarda anlatmalı, teslim edilmiş projeleri göstermeli ve her sayfada o işe özel bir teklif adımı sunmalıdır. Ziyaretçi üç şeyi hızla bulabilmelidir: hangi işi yapıyorsunuz, nerede yapıyorsunuz ve size nasıl ulaşır.',
      },
      {
        soru: 'Reklamdan gelen talepler neden işe dönmüyor?',
        cevap:
          'Çoğu zaman reklam, araştırma yapan kişiyle teklif isteyen kişiyi ayırmadığı için. Arama terimleri incelendiğinde bütçenin bir kısmının model ve fiyat merakına gittiği görülür. Aramaları ayırmak, formda arsa ve zamanlama bilgisini sormak ve ilk görüşmenin sorularını belirlemek talebin niteliğini değiştirir.',
      },
      {
        soru: 'Çelik ev, prefabrik ya da tiny house satan firmalar nelere dikkat etmeli?',
        cevap:
          'Bu ürünlerde arama hacmi yüksektir ama aramaların büyük kısmı fikir edinme amaçlıdır. Model araştıran ziyaretçiye model sayfası, arsası hazır olana teklif sayfası gösterilmelidir. İkisi ayrılmadığında gelen başvuruların çoğu yalnız bilgi isteyen kişilerden oluşur.',
      },
      {
        soru: 'Havuz gibi mevsimlik işlerde reklam ne zaman verilmeli?',
        cevap:
          'Müşteri, işi yaptıracağı tarihten önce araştırmaya başlar. Bu yüzden görünürlüğün sezon açılmadan kurulması gerekir. Sezon dışında araştırma aramaları için içerik ve SEO, sezona yaklaşırken teklif aramaları için reklam ağırlık kazanır.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi işletmenizin adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; reklam hesabı, alan adı, site ve geçmiş veriler işletmenize aittir. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Talep sayısı, sıralama ya da sözleşme için söz vermiyoruz. Söz verdiğimiz şey işinizi ve hesabınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['google-ads-mi-instagram-reklami-mi', 'google-ads-tiklama-var-telefon-yok'],
    sektorler: ['uretim-ve-ihracat', 'otel-ve-konaklama'],
  },
};

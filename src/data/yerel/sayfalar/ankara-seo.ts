/**
 * Ankara SEO (şehir sayfası, SEO).
 * Ana niyet: "ankara seo" (1.300), "ankara seo ajansı" (1.000), "ankara seo uzmanı" (480), "ankara seo hizmeti" (210),
 * "ankara web tasarım seo" (140). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Listeyi altı ifadeye tamamlamak için iki genel ajans araması da alındı: "ankara dijital ajans" (50) ve
 * "ankara dijital pazarlama ajansı" (50). Bunların doğrudan SEO araması olmadığı yorumda açıkça söylenir.
 * İlçe adlı SEO aramaları ("çankaya seo", "keçiören seo" vb.) için araç veri döndürmedi; listeye girmediler.
 * Ağırlık yerel SEO: Google İşletme Profili, harita kutusu, hizmet ve ilçe adını birlikte taşıyan aramalar, yorum isteme
 * düzeni (yorum toplama vaadi yok), yapay zekâ yanıtlarında işletme bilgisi. Sıra, süre ve sonuç sözü yok.
 * Ankara’da ofis olduğu yazılmaz; iş uzaktan yürütülür.
 * Yerel bilgiler herkesçe bilinen olgulardır: şehrin geniş alana yayılmış ilçeleri, Sincan’daki organize sanayi bölgesi,
 * Bilkent’teki teknokent, adliyenin Sıhhiye’de olması. Kart örneklerindeki işletmeler ve arama sözleri temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'ankara-seo',
  sehir: 'ankara',
  yerDe: 'Ankara’da',
  hizmet: 'seo',
  baslik: 'Ankara SEO',
  metaBaslik: 'Ankara SEO Ajansı ve SEO Danışmanlığı',
  metaAciklama:
    'Ankara’daki işletmeler için SEO: Google İşletme Profili, harita sonuçları, ilçe aramalarına cevap veren sayfalar ve teknik inceleme. Çalışmayı uzaktan yürütüyoruz.',
  ozet: 'Ankara’da “keçiören oto servis” gibi ilçe adlı aramalarda ve harita sonuçlarında görünmek için site, sayfa ve işletme profili çalışması.',
  tanim: [
    'Ankara’daki işletmeler için SEO, hizmetini ilçe ya da semt adıyla arayan kişinin karşısına Google’ın organik sonuçlarında ve harita kutusunda işletmenin çıkması için sitenin, sayfaların ve Google İşletme Profili’nin düzenlenmesi işidir.',
    'Ankara geniş bir alana yayıldığı için müşteri aramasına çoğu zaman ilçesini ekliyor: “keçiören oto servis”, “batıkent beyaz eşya servisi”. Sincan ve İvedik’teki üreticiyi arayan satın almacı ise şehir yerine ürünün teknik adını yazıyor. Daha önce SEO yaptırıp sonuç alamadıysanız yapılanları, hiç başlamadıysanız sitenizin bugünkü durumunu inceliyor; hangi aramaya hangi sayfanın cevap vereceğini buna göre belirliyoruz.',
    'Çalışma uzaktan yürüyor: sitenize ve Search Console hesabınıza erişim tanımlıyorsunuz, bulguları ve yapılan değişiklikleri görüntülü görüşmede aynı ekrana bakarak birlikte okuyoruz.',
  ],
  cagri: 'SEO için görüşelim',

  aramalar: {
    baslik: 'Ankara’da SEO için ne aranıyor?',
    giris: 'SEO desteği arayan işletme üç ayrı şey yazıyor: ajans, uzman ya da doğrudan hizmetin adı.',
    liste: [
      { ifade: 'ankara seo', hacim: 1300 },
      { ifade: 'ankara seo ajansı', hacim: 1000 },
      { ifade: 'ankara seo uzmanı', hacim: 480 },
      { ifade: 'ankara seo hizmeti', hacim: 210 },
      { ifade: 'ankara web tasarım seo', hacim: 140 },
      { ifade: 'ankara dijital ajans', hacim: 50 },
      { ifade: 'ankara dijital pazarlama ajansı', hacim: 50 },
    ],
    yorum: [
      '“Ankara seo” ayda yaklaşık 1.300, “ankara seo ajansı” yaklaşık 1.000 kez yazılıyor. “Ankara seo uzmanı” diyenler işi bizzat yapacak tek bir kişi arıyor; “ankara web tasarım seo” yazanlar siteyi ve SEO’yu aynı yerden almak istiyor. Son iki ifade doğrudan SEO araması sayılmaz; ajans arayan işletmenin SEO’yu da bu sözlerle aradığını varsayarak listeye ekledik.',
      'Hacimler ülke genelindeki aramaların toplamı; aramayı yapanın Ankara’da olup olmadığını bu ölçüm göstermiyor. Sizin için daha çok işe yarayan liste, kendi müşterinizin yazdıklarıdır. Çalışmanın başında hizmetleriniz için Ankara ve ilçe adlarıyla yapılan aramaları ölçüyor, hangi ilçeye sayfa açmaya değeceğine bu ölçümle karar veriyoruz.',
    ],
  },

  yerel: {
    baslik: 'Ankara’da SEO’da en sık gördüğümüz altı durum',
    giris: 'Aramada görünmemenin tek bir nedeni yok; Ankara’da en sık şu altısına rastlıyoruz. Örnekteki işletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Haritada neden rakibim çıkıyor, ben çıkmıyorum?',
        ornek:
          'Keçiören’de bir oto servisi “keçiören oto servis” aramasında harita kutusunda yer almıyor. Profilde kategori “otomobil satıcısı” seçilmiş, verilen hizmetler girilmemiş, çalışma saatleri boş.',
        care: 'Profilin kategorisini, hizmet listesini ve saatlerini düzeltiyor, aynı bilgiyi sitenin iletişim sayfasına da yazıyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Profil nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Her ilçeye ayrı sayfa açmak işe yarar mı?',
        ornek:
          'Batıkent’te bir beyaz eşya servisi, Ankara’nın bütün ilçeleri için aynı metni kopyalayıp yalnız ilçe adını değiştirmiş. Google bu sayfaların çoğunu dizine almıyor, alınanlar da aramada görünmüyor.',
        care: 'Yalnız servis verdiğiniz ilçelere, o ilçeye özgü bilgi taşıyan sayfalar açıyor, kopya sayfaları kaldırıyoruz.',
        cizim: 'yapboz',
        bag: { etiket: 'SEO nedir?', url: '/blog/seo-nedir/' },
      },
      {
        soru: 'Google yorumlarımız az, sıralamayı etkiler mi?',
        ornek:
          'Eryaman’da bir spor salonunun üyeleri memnun, ama profilde yıllar önce yazılmış birkaç yorum duruyor. Aynı caddedeki rakibin profili düzenli yorum alıyor ve harita sonuçlarında daha üstte görünüyor.',
        care: 'Memnun müşteriden yorum istemenin düzenini sizinle kuruyor, yorumlara nasıl yanıt verileceğini belirliyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Yorum nasıl artırılır?', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'Ürettiğimiz makine Google’da neden bulunmuyor?',
        ornek:
          'Sincan’daki organize sanayi bölgesinde pres üreten bir firma ürünlerini sitede yalnız model kodlarıyla sıralıyor. Satın almacı “hidrolik pres imalatı” yazıyor; sitede bu söz hiçbir sayfa başlığında geçmiyor.',
        care: 'Ürün sayfalarının başlığını alıcının yazdığı adla kuruyor, model kodunu ve teknik değerleri altına yerleştiriyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Anahtar kelime nedir?', url: '/blog/anahtar-kelime-nedir/' },
      },
      {
        soru: 'ChatGPT firmamızı neden yanlış tanıtıyor?',
        ornek:
          'Bilkent’teki teknokentte çalışan bir yazılım firması, yapay zekâya adı sorulduğunda çoktan bıraktığı bir ürünle anlatılıyor. Sitede firmanın bugün ne yaptığını açıkça söyleyen bir sayfa yok, rehber sitelerindeki bilgi de eski.',
        care: 'Firmanın ne yaptığını açık cümlelerle anlatan sayfaları kuruyor, başka sitelerdeki eski bilgileri listeleyip nereden düzeltileceğini gösteriyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO ve AEO', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        soru: 'Reklam veremeyen hukuk bürosu aramada nasıl bulunur?',
        ornek:
          'Sıhhiye’de, adliyeye yakın bir hukuk bürosunun sitesinde bütün çalışma alanları tek bir listede duruyor. Memuriyetle ilgili bir dava için avukat arayan kişi, kendi sorusunu yanıtlayan bir sayfaya ulaşamıyor.',
        care: 'Her çalışma alanına meslek kurallarına uygun, bilgi veren bir sayfa açıyoruz; bu meslekte reklam önermiyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Hukuk büroları', url: '/sektorler/hukuk-burolari/' },
      },
    ],
  },

  isler: {
    baslik: 'Ankara’da bir SEO çalışmasında neler yapıyoruz?',
    giris: 'Sıra işletmeye göre değişir; ama bir SEO çalışmasında aşağıdaki altı kalemin hepsine bakılır.',
    liste: [
      { ad: 'Teknik inceleme', aciklama: 'Sayfalarınızı Google’ın tarayıp dizine alabildiğini Search Console üzerinden kontrol ediyor, engel olan ayarı ve bozuk yönlendirmeyi düzeltiyoruz.' },
      { ad: 'Ankara ve ilçe aramaları', aciklama: 'Hizmetleriniz için “ankara” ile ve ilçe adlarıyla yapılan aramaları ölçüyoruz. Hangi aramaya hangi sayfanın cevap vereceğini bu listeden çıkarıyoruz.' },
      { ad: 'Hizmet ve ilçe sayfaları', aciklama: 'Her hizmete ayrı sayfa kuruyoruz. İlçe sayfasını yalnız orada gerçekten müşteriniz varsa ve sayfaya o ilçeye özgü bilgi koyabiliyorsak açıyoruz.' },
      { ad: 'Google İşletme Profili ve harita', aciklama: 'Kategoriyi, hizmet listesini, saatleri ve fotoğrafları tamamlıyoruz. İşletme adına ilçe ya da hizmet adı eklemiyoruz; Google bunu kural ihlali sayıyor.' },
      { ad: 'Ad, adres, telefon ve yorumlar', aciklama: 'Taşındıysanız ya da numara değiştirdiyseniz profilde, sitede ve rehber sitelerinde kalan eski bilgiyi buluyoruz. Yorum isteme düzenini sizinle kuruyoruz; yorum yazdırmıyor, satın almıyoruz.' },
      { ad: 'Yapay zekâ yanıtları', aciklama: 'ChatGPT ve Google’ın yapay zekâ özetleri işletmenizi anlatırken hangi kaynağı okuyor, verdiği bilgi doğru mu, buna bakıyoruz. Sayfaları sorulara açık cevap verecek biçimde düzenliyoruz.' },
    ],
    bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
  },

  sss: {
    baslik: 'Ankara’da SEO desteği alırken sık sorulan sorular',
    giris: 'SEO desteği arayan Ankara’daki işletmelerin ilk görüşmede sorduğu sorular.',
    sorular: [
      {
        soru: 'Ankara’da SEO ajansı nasıl seçilir?',
        cevap:
          'Ajansı, ilk görüşmede sıra sözü verip vermediğine ve sitenizde neye bakacağını anlatıp anlatamadığına göre seçin. Belirli bir sıra ya da tarih sözü veren ajans, elinde olmayan bir şeyi vaat ediyordur; sıralamayı Google belirler. Daha önce çalıştığı sitelerin adresini isteyin ve o işletmelerin hizmetini ilçe adıyla Google’da kendiniz arayın.',
        bag: { etiket: 'Ajans seçme rehberi', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'SEO uzmanıyla mı, SEO ajansıyla mı çalışmalıyım?',
        cevap:
          'Sitenizde değişikliği yapacak bir geliştiriciniz varsa tek bir uzmanın danışmanlığı yeterli olabilir; yoksa incelemeyi, düzeltmeyi ve sayfaları birlikte üstlenen bir ekip gerekir. Biz iki biçimde de çalışıyoruz: ya yalnız yönlendiriyor ve denetliyoruz ya da uygulamayı da üstleniyoruz. Hangisinin uygun olduğu, sitenize kimin erişebildiğine göre ilk görüşmede belli olur.',
      },
      {
        soru: 'Yüz yüze görüşmeden SEO çalışması yürütülür mü?',
        cevap:
          'Evet; SEO’da yapılan işin tamamı site, Search Console ve Google İşletme Profili üzerinde, yani çevrim içi yürür. Biz de uzaktan çalışıyoruz: görüşmeleri telefonla ya da görüntülü yapıyor, bulguları ekran üzerinden sizinle birlikte okuyoruz.',
      },
      {
        soru: 'Ankara’da yerel SEO’ya nereden başlanır?',
        cevap:
          'Google İşletme Profili’nden başlanır: kategori, hizmet listesi, çalışma saatleri ve adres eksiksiz ve doğru olmalıdır. Ardından profildeki ad, adres ve telefon sitedekiyle aynı hâle getirilir ve en çok talep aldığınız hizmet için ilçe adını taşıyan bir sayfa kurulur. Birden çok ilçeye servis veriyorsanız hangisine sayfa açılacağına arama ölçümüyle karar veriyoruz.',
      },
      {
        soru: 'Ankara’da SEO’nun sonuç vermesi ne kadar sürer?',
        cevap:
          'Tarih vermiyoruz, çünkü süre sitenizin bugünkü durumuna ve aynı aramada karşınıza çıkan rakiplere bağlı. Teknik düzeltmelerin etkisi önce görülür; yeni sayfaların aramalarda yer bulması daha uzun sürer. “Ankara” geçen genel aramalarda rakip genellikle çok, ilçe ve hizmet adını birlikte taşıyan aramalarda daha azdır; çoğu işletmede işe ikincisinden başlıyoruz.',
      },
      {
        soru: 'Site, Search Console ve işletme profili kimin adına olur?',
        cevap:
          'Üçü de işletmenizin adına kayıtlı olur ve sizde kalır. Bize kullanıcı ya da yönetici olarak erişim tanımlarsınız; çalışma bittiğinde ya da dilediğiniz zaman bu erişimi kaldırırsınız. Profiliniz eski bir çalışanın ya da ajansın hesabında kaldıysa sahipliği geri almak için gereken başvuruyu birlikte yapıyoruz.',
      },
      {
        soru: 'Ankara’da SEO fiyatları neye göre değişir?',
        cevap:
          'Fiyatı sitenin sayfa sayısı, yeni kurulacak sayfaların adedi, teknik düzeltmeyi kimin yapacağı ve kaç ilçenin hedeflendiği belirler. Tek şubeli bir mahalle işletmesi ile ürün kataloğu geniş bir üreticinin iş yükü aynı olmadığı için liste fiyatı yayımlamıyoruz. İncelemeden sonra yapılacak işleri yazılı veriyor, teklifi o listeye bağlıyoruz.',
      },
      {
        soru: 'Sıralama garantisi veriyor musunuz?',
        cevap:
          'Hayır. Hangi sayfanın kaçıncı sırada çıkacağına Google karar verir; bu yüzden sıra, ziyaret ya da talep sayısı için söz vermiyoruz. Üstlendiğimiz şey sitenizi ve aramaları ayrıntılı incelemek, yaptığımız her değişikliği nedeniyle göstermek ve çalışmayı düzenli olarak sürdürmektir.',
      },
    ],
  },
};

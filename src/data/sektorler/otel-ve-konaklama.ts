/**
 * Otel ve konaklama sektörü.
 * Ana niyet: "oteller için dijital pazarlama", "otel reklam", "otel web sitesi".
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026). Tırnak içindeki daha belirli aramalar temsili örnektir, hacim yazılmaz.
 * Referans: EsVia Suit Apart (web tasarım, SEO ve GEO).
 * Vaat edilmeyen iş: rezervasyon motoru kurulumu (var olan sisteme sayfadan bağlanır). Rezervasyon siteleri kötülenmez,
 * komisyon rakamı yazılmaz. Fotoğraf ve video çekimi tesise aittir.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 5,
  kimlik: 'otel-ve-konaklama',
  ad: 'Otel ve konaklama',
  kimler: 'Butik oteller, apart ve suit işletmeleri, pansiyonlar, bungalov ve villa işletmeleri',
  ozet: 'Bölgesi, türü ve ihtiyacı belli aramalarda görünüp misafirin sorusunu ve rezervasyon talebini doğrudan size ulaştıran site ve reklam düzeni.',
  baslik: 'Oteller ve konaklama işletmeleri için dijital pazarlama',
  metaBaslik: 'Oteller için Dijital Pazarlama ve Reklam',
  metaAciklama:
    'Butik otel, apart, pansiyon ve bungalovlar için Google Ads, Instagram reklamları, Google İşletme Profili ve web sitesi: doğrudan rezervasyon talebi getiren kurulum.',
  tanim: [
    'Oteller ve konaklama işletmeleri için dijital pazarlama, kalacak yer arayan misafirin bölgeyi ve tesis türünü araştırdığı anda karşısına çıkma ve onu doğrudan rezervasyon talebine getirme işidir.',
    'Misafir önce bölgeyi ve konaklama türünü arar, sonra birkaç tesisi fotoğrafına, konumuna, oda tipine ve müsaitliğine bakarak karşılaştırır. Büyük aramalarda ilk sıraları rezervasyon siteleri alır; biz tesisinizi bölgesi ve ihtiyacı belli aramalarda gösterip talebi WhatsApp’a, telefona ya da rezervasyon formunuza taşıyoruz.',
    'Butik oteller, apart ve suit işletmeleri, pansiyonlar, bungalov ve villa işletmeleriyle çalışıyoruz.',
  ],
  gorselAlt:
    'Kâğıttan üç katlı bir butik otel: pencereleri ışıklı, iki yanında palmiyeler, girişinde çizgili bir saçak; önde kırmızı etiketli büyük bir oda anahtarı, valizlerini çeken yolcular kırmızı kalem çizgisini izleyerek girişe yürüyor',
  cagri: 'Tesisim için görüşelim',
  kanal: 'belirsiz',

  aramalar: {
    baslik: 'Otel ve konaklamada misafirler Google’da ne arıyor?',
    giris: 'Misafir tesisin adını öğrenmeden önce gideceği yeri ve kalacağı yerin türünü yazar.',
    liste: [
      { ifade: 'bodrum otelleri', hacim: 135000 },
      { ifade: 'bungalov', hacim: 110000 },
      { ifade: 'pansiyon', hacim: 60500 },
      { ifade: 'apart otel', hacim: 22200 },
      { ifade: 'kiralık villa', hacim: 18100 },
      { ifade: 'balayı otelleri', hacim: 18100 },
      { ifade: 'butik otel', hacim: 12100 },
      { ifade: 'bodrum apart', hacim: 1900 },
      { ifade: 'otel reklam', hacim: 210 },
      { ifade: 'otel web sitesi', hacim: 70 },
    ],
    yorum: [
      'Listenin üstündeki aramalar çok büyüktür ve ilk sıralarını rezervasyon siteleri alır. Küçük bir tesisin şansı, misafirin bölgeyi, türü ve ihtiyacını birlikte yazdığı daha belirli aramalardadır: “bodrum denize sıfır apart” ya da “öğrenci için suit apart” gibi. Bu ikisi ölçmediğimiz, temsili örneklerdir.',
      'Bu yüzden bütçeyi “bungalov” ya da “pansiyon” gibi tek kelimelere harcamıyoruz. Tesisinizin bölgesine, türüne ve misafirinizin ihtiyacına uyan aramaları çıkarıyor, her birine o ihtiyacı yanıtlayan sayfayı ve reklamı hazırlıyoruz. Listenin sonundaki “otel reklam” ve “otel web sitesi” ise işletme sahibinin kendi aramasıdır.',
    ],
  },

  sorunlar: {
    baslik: 'Otel ve konaklama işletmelerinden en sık duyduğumuz sorular',
    giris: 'Odalarını rezervasyon siteleriyle dolduran tesis de, yıllardır reklam veren tesis de aynı altı noktada takılıyor. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Otelim neden hep rezervasyon sitelerinden doluyor?',
        ornek:
          'Bir butik otelin adını Google’a yazan misafir, otelin kendi sitesinde oda tiplerini ve müsaitliği göremiyor. Rezervasyonunu, aynı aramada üstte çıkan rezervasyon sitesinden yapıyor.',
        care: 'Adınızla yapılan aramada çıkan siteyi, harita kaydını ve reklamı düzenliyor; oda sayfasını kullandığınız rezervasyon adımına bağlıyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Google’da “bodrum otelleri” yazınca neden çıkmıyorum?',
        ornek:
          'Birkaç odalı bir pansiyon “bodrum otelleri” aramasında görünmek istiyor; o sayfayı rezervasyon siteleri ve büyük oteller dolduruyor. Pansiyonun bulunduğu koyu ve “kahvaltı dahil” sözünü birlikte yazan misafir içinse sitesinde tek bir sayfa yok.',
        care: 'Bölgeyi, türü ve ihtiyacı birlikte içeren aramaları çıkarıp her birine tesisinizde karşılığı olan bir sayfa hazırlıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Instagram’dan fiyat soranlar neden rezervasyon yapmıyor?',
        ornek:
          'Bir bungalov işletmesinin jakuzili oda videosu çok izleniyor, art arda “fiyat?” mesajı geliyor. Yanıtta yalnız gecelik fiyat yazıldığı için tarih, kişi sayısı ve müsaitlik konuşulmadan görüşme bitiyor.',
        care: 'İlk yanıtta tarihi ve kişi sayısını soran, uygun odayı öneren mesaj düzenini hazırlıyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar neden satışa dönmüyor?', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Otel reklamı sezondan ne kadar önce verilmeli?',
        ornek:
          'Bir apart otel reklamı sezonun açıldığı hafta başlatıyor. Yaz tatilini aylar önce planlayan aileler o tarihte yerini çoktan ayırtmış oluyor.',
        care: 'Erken rezervasyon dönemini, sezonu ve boş kalan tarihleri ayrı ayrı planlayıp bütçeyi bu takvime göre dağıtıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Google Haritalar’da tesisim neden öne çıkmıyor?',
        ornek:
          'Bir pansiyonun harita kaydında eski telefon numarası ve yıllar önce çekilmiş fotoğraflar duruyor. Bölgedeki tesisleri haritada yan yana gören misafir, odasını güncel fotoğrafla gösteren tesise tıklıyor.',
        care: 'Google İşletme Profilinizi elinizdeki güncel fotoğraflarla, oda ve iletişim bilgisiyle düzenleyip sitenizle tutarlı hâle getiriyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'İşletme profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Öğrenci apartı ve uzun dönem için misafir nasıl bulunur?',
        ornek:
          'Üniversiteye yakın bir apart işletmesinde odayı öğrenci arıyor, kararı ailesiyle birlikte veriyor. Öğrenci fotoğraflara ve okula uzaklığa, ailesi güvenliğe ve sözleşme koşullarına bakıyor.',
        care: 'Sayfayı iki okura göre kuruyor, öğrencinin ve ailesinin sorularını ayrı başlıklarda yanıtlıyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'İlk adımı planlayalım', url: '#baslangic' },
      },
    ],
  },

  kanallar: {
    baslik: 'Oteller ve konaklama işletmeleri için hangi kanal ne işe yarar?',
    giris:
      'Misafir tesisi arayarak da bulur, görerek de, haritada gezerek de. Hangi kanalla başlanacağını tesisinizin türüne, sezonuna ve rezervasyonların bugün nereden geldiğine bakarak birlikte seçiyoruz.',
    liste: [
      {
        tur: 'google-ads',
        baslik: 'Google Ads: bölgesini seçmiş misafirin araması',
        metin: 'Nereye gideceğine karar vermiş misafir Google’a bölgeyi ve tesis türünü yazar. Arama reklamı, bu aramada tesisinizin kendi sayfasıyla görünmenin yoludur.',
        maddeler: ['Bölge, tür ve ihtiyaç içeren aramalar', 'Tesisinizin adıyla yapılan aramalar', 'Sezona göre açılıp kısılan bütçe'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: tesisi göstermek',
        metin: 'Konaklama gözle seçilir. Oda, manzara ve kahvaltı görüntüsü, tatilini henüz planlamamış kişide o tesiste kalma isteği uyandırır.',
        maddeler: ['Elinizdeki oda ve tesis çekimleriyle reklam', 'WhatsApp ve mesaj kampanyaları', 'Tarihi ve kişi sayısını soran ilk yanıt'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'harita',
        baslik: 'Google İşletme Profili: haritada karşılaştırma',
        metin: 'Bölgeyi seçen misafir tesisleri haritada yan yana görür; fotoğrafa, yorumlara ve konuma bakar. SEO ve yapay zekâ görünürlüğü de aynı bilginin sitenizde ve profilinizde tutarlı durmasına dayanır.',
        maddeler: ['Güncel fotoğraf, oda ve olanak bilgisi', 'Adres, telefon ve site bilgisinin tutarlılığı', 'Bölge ve ihtiyaç sayfalarıyla SEO'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi: oda sayfasından rezervasyon talebine',
        metin: 'Misafir sitede fotoğrafa, konuma, oda tipine ve müsaitliğe bakar. Site bunları gösterir ve talebi WhatsApp’a, telefona ya da kullandığınız rezervasyon sistemine bağlar.',
        maddeler: ['Her oda tipi için ayrı sayfa', 'WhatsApp, telefon ve talep formu', 'Var olan rezervasyon sistemine bağlantı'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'Otel ve konaklama işletmeleriyle nasıl çalışıyoruz?',
    giris: 'Önce tesisinizi, misafirinizi ve rezervasyonların bugün nereden geldiğini inceliyor; kurulumu ve düzenli optimizasyonu bu bulgulara göre yapıyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Tesis, misafir ve sezon', aciklama: 'Kimin, hangi tarihlerde, hangi yoldan rezervasyon yaptığını ve tesisinizin bugün hangi aramalarda göründüğünü çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'Dönemlere göre kanal planı', aciklama: 'Erken rezervasyon, sezon ve boş tarihler için hangi kanalın, hangi sayfanın ve hangi talep yolunun kullanılacağını planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Oda sayfası, profil, kampanya', aciklama: 'Oda sayfalarını, Google İşletme Profilini ve kampanyaları kuruyor; WhatsApp ve form adımını yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Doluluğa göre düzenli ayar', aciklama: 'Gelen talepleri sizinle birlikte değerlendiriyor; dolan tarihlerde reklamı kısıp boş tarihlere ve rezervasyona dönen aramalara ağırlık veriyoruz.' },
      { ad: 'Hedef', ozet: 'Doğrudan rezervasyon', aciklama: 'Çalışmayı mesaj sayısıyla ölçmüyoruz; baktığımız şey size doğrudan ulaşıp rezervasyona dönen taleplerdir.' },
    ],
  },

  referanslar: {
    baslik: 'Konaklama sektöründe çalıştığımız marka',
    giris: 'Yayında olan, bugün açıp inceleyebileceğiniz bir site.',
    liste: [
      {
        kimlik: 'esvia',
        not: 'Uzun dönem konaklamada talebi çoğu zaman öğrenci ve ailesi birlikte iletir. EsVia Suit Apart’ın sitesi, bu iki okurun konaklama talebini nasıl ileteceği sorusu etrafında kuruldu; projede web tasarım ile SEO ve GEO yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'Reklama yeni mi başlıyorsunuz, rezervasyon mu gelmiyor?',
    giris: 'Birinde işe tek bir dönem ve tek bir misafir türüyle, diğerinde bugün gelen taleplerin incelenmesiyle başlıyoruz.',
    sol: {
      ust: 'Odalarınız rezervasyon siteleriyle doluyorsa',
      baslik: 'İlk kampanyayı tek bir dönem için kuruyoruz',
      metin: 'Bütün odaları bütün yıl için tanıtmak bütçeyi dağıtır. İlk adımda doldurmak istediğiniz dönemi ve o dönemin misafirini seçip yalnız onun için reklam, sayfa ve talep yolu hazırlıyoruz.',
      maddeler: [
        { ad: 'Hangi dönem, hangi misafir?', aciklama: 'Sezon başı, hafta içi ya da kış ayları. Çift, aile ya da uzun dönem kalacak öğrenci. Reklamın sözü ve görseli bu seçime göre hazırlanır.' },
        { ad: 'Misafir neyi görünce karar verir?', aciklama: 'Odanın güncel fotoğrafı, konum, oda tipi ve müsait tarihler. Sayfanın ilk ekranı bunlarla kurulur.' },
        { ad: 'Talep hangi yoldan gelecek?', aciklama: 'WhatsApp, telefon ya da rezervasyon formu. Mesaja kimin, hangi bilgilerle döneceği yayından önce belirlenir.' },
      ],
      cagri: 'İlk kampanyamı planlayalım',
      bag: { etiket: 'Instagram reklamı nasıl verilir?', url: '/blog/instagram-reklam-nasil-verilir/' },
      cizim: 'kilit',
    },
    sag: {
      ust: 'Reklam veriyor ama rezervasyon alamıyorsanız',
      baslik: 'Önce talebin nerede koptuğunu inceliyoruz',
      metin: 'Yeni kampanya açmadan önce bütçenin hangi aramalara ve kimlere gittiğini, gelen mesajların neden rezervasyona dönmediğini görmemiz gerekir.',
      maddeler: [
        { ad: 'Arama terimleri', aciklama: 'İş ilanı, başka bir bölge ya da tesisinizde olmayan bir olanağı arayanları ayıklıyoruz.' },
        { ad: 'Açılış sayfası', aciklama: 'Reklamdaki oda ile açılan sayfadaki oda aynı mı, müsaitlik sorusu ilk ekranda mı? Telefonda birlikte deniyoruz.' },
        { ad: 'Mesaj ve telefon', aciklama: 'Gelen mesajlara hangi bilgiyle dönüldüğüne ve görüşmenin nerede bittiğine sizinle birlikte bakıyoruz.' },
        { ad: 'Sezon ve tarih', aciklama: 'Reklamın yayında olduğu tarihleri, odaların boş kaldığı tarihlerle karşılaştırıyoruz.' },
      ],
      cagri: 'Hesabıma birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Hangi arama rezervasyona daha yakın?',
    metin: [
      'Konaklamada aynı bölge adının içinden tatilini planlayan da çıkar, iş arayan da, tesisinizde olmayan bir konsepti arayan da. Küçük bir tesisin bütçesi her aramaya yetmez; bu yüzden her terime ayrı bir karar yazılır.',
      'Tablo Bodrum’da bir apart otel için hazırlanmış temsili bir örnektir. Sizin hesabınızda aynı tabloyu kendi bölgeniz ve kendi arama terimlerinizle kuruyoruz.',
    ],
    tabloBasligi: 'Apart otel için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'bodrum denize sıfır apart', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Bölgeyi, türü ve ihtiyacı birlikte yazmış. Bütçe bu aramaya toplanır, reklam konumu ve daireleri gösteren sayfayı açar.' },
      { ilk: 'bodrum aylık kiralık apart', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Uzun dönem kalacak. Sezon dışındaki boş tarihler için ayrı kampanyada, aylık konaklama sayfasına iner.' },
      { ilk: 'bodrum otelleri', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Henüz tür seçmemiş; ilk sıralar rezervasyon sitelerinde. Küçük bir payla denenir, talebe dönmüyorsa kapatılır.' },
      { ilk: 'bodrum her şey dahil otel', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Tesiste olmayan bir konsept arıyor. Apart kampanyasında reklam gösterilmez.' },
      { ilk: 'bodrum otel iş ilanları', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Sezonluk iş arıyor. Negatif listeye eklenir.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Oteller için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Reklam, web sitesi ve rezervasyon siteleri hakkında otel ve konaklama işletmelerinden en çok duyduklarımız.',
    sorular: [
      {
        soru: 'Oteller için dijital pazarlama nedir?',
        cevap:
          'Oteller ve konaklama işletmeleri için dijital pazarlama; kalacak yer arayan misafire Google aramalarında, haritada, Instagram’da ve web sitesinde ulaşıp onu doğrudan rezervasyon talebine getiren çalışmaların bütünüdür. Google Ads, Instagram ve Facebook reklamları, Google İşletme Profili, SEO ve web sitesini kapsar.',
      },
      {
        soru: 'Otel reklamı Google’a mı, Instagram’a mı verilmeli?',
        cevap:
          'İkisi farklı misafire ulaşır. Bölgesini ve tarihini seçmiş kişi Google’da arar; rezervasyon talebi için çoğu zaman arama reklamıyla başlanır. Instagram, tatilini henüz planlamamış kişiye tesisi göstermek için kullanılır ve talep çoğunlukla mesajla gelir. Hangisiyle başlayacağınızı tesisinizin türüne ve doldurmak istediğiniz döneme bakarak birlikte seçiyoruz.',
        bag: { etiket: 'Google Ads mi, Instagram reklamı mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Otel web sitesi nasıl olmalı?',
        cevap:
          'Bir otel sitesi her oda tipini kendi sayfasında güncel fotoğraflarla göstermeli, konumu ve olanakları açıkça yazmalı ve her sayfada rezervasyon talebine giden tek bir yol sunmalıdır. Misafirin ilk sorusu müsaitliktir; site bu soruyu WhatsApp’a, telefona ya da kullandığınız rezervasyon sistemine bağlar. Fotoğraf ağırlıklı sayfaların telefonda hızlı açıldığı yayından önce denenir.',
      },
      {
        soru: 'Rezervasyon siteleri varken kendi siteme gerek var mı?',
        cevap:
          'Evet, ikisi birbirinin yerine geçmez. Rezervasyon siteleri tesisinizi hiç tanımayan misafire ulaştırır; kendi siteniz ise adınızı duyan, Instagram’da gören ya da haritada bulan misafirin size doğrudan ulaştığı yerdir. Hedef, rezervasyon sitelerini bırakmadan doğrudan gelen talebe de yer açmak ve tek bir kaynağa bağlı kalmamaktır.',
      },
      {
        soru: 'Rezervasyon sistemi de kuruyor musunuz?',
        cevap:
          'Hayır, rezervasyon motoru ya da kanal yöneticisi kurmuyoruz. Kullandığınız bir sistem varsa oda sayfalarını ve reklamı o sistemin rezervasyon adımına bağlıyoruz. Sisteminiz yoksa talep WhatsApp, telefon ya da form üzerinden size ulaşır.',
      },
      {
        soru: 'Küçük bir pansiyon ya da bungalov işletmesi büyük otellerle nasıl yarışır?',
        cevap:
          'Büyük otellerin ve rezervasyon sitelerinin doldurmadığı, daha belirli aramalarda görünerek yarışır. “Bungalov” ya da “pansiyon” gibi tek kelimelik aramalarda ilk sıraları rezervasyon siteleri alır. Misafirin bölgeyi, türü ve ihtiyacını birlikte yazdığı aramalarda ise tesisin kendi sayfasının, harita kaydının ve reklamının görünme şansı daha yüksektir.',
      },
      {
        soru: 'Apart ve uzun dönem konaklamada pazarlama nasıl değişir?',
        cevap:
          'Uzun dönem konaklamada kararı çoğu zaman kalacak kişi tek başına vermez; öğrencide ailesi de sürece girer. Bu yüzden sayfada gecelik fiyatın yerini aylık koşullar, sözleşme, güvenlik ve okula ya da iş yerine uzaklık alır. Aramalar da değişir: misafir bölgenin yanına “aylık”, “öğrenci” ya da “eşyalı” gibi sözler ekler.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi işletmenizin adına açılır ve sizde kalır. Reklam hesabı, Google İşletme Profili, alan adı ve site tesisinize aittir; bize yönetici erişimi verirsiniz. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Doluluk, rezervasyon sayısı ya da sıralama için söz vermiyoruz. Söz verdiğimiz şey tesisinizi ve hesabınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['google-isletme-profili-nasil-acilir', 'instagram-reklam-nasil-verilir'],
    sektorler: ['restoran-ve-kafe', 'insaat-ve-yapi'],
  },
};

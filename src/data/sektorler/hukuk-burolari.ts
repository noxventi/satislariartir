/**
 * Hukuk büroları. HASSAS SEKTÖR: avukatlıkta reklam yasağı vardır.
 * Ana niyet: "avukat web sitesi", "avukatlar için web sitesi", "hukuk bürosu web sitesi".
 * Başlıkta "SEO" yok: Reklam Yasağı Yönetmeliği sıralamaya dönük yöntemleri sınırladığı için sayfa SEO'yu vaat olarak sunmaz.
 * Bu sayfada reklam kampanyası önerilmez; kanallar yalnız web, seo, geo ve harita kartlarıdır.
 * Arama ifadeleri: Türkiye için hacim ölçülemedi (15 Kasım 2026); hepsi hacimsiz yazıldı.
 * Referans: Av. Suha Akyıldız (web tasarım, SEO ve GEO). Reklam referansı olarak anılmaz.
 *
 * Meslek kuralı cümlelerinin kaynağı (15 Kasım 2026'da Türkiye Barolar Birliği sitesindeki metinlerden okundu):
 * - 1136 sayılı Avukatlık Kanunu madde 55: https://d.barobirlik.org.tr/mevzuat/avukata_ozel/avukatlik_kanunu/1136sayiliAvukatlikKanunu.pdf
 * - Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği madde 7 (c), (d), (e) bentleri, madde 11 ve 12
 *   (9/8/2024 ve 2/5/2026 değişiklikleri işlenmiş metin): http://d.barobirlik.org.tr/mevzuat/avukata_ozel/yonetmelikler/2011/reklam_yas_yon.pdf
 * Bu cümleler yayından önce bir hukukçuya okutulmalıdır; mevzuat değişirse güncellenir.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 6,
  kimlik: 'hukuk-burolari',
  ad: 'Hukuk büroları',
  kimler: 'Avukatlar, hukuk büroları, arabuluculuk ofisleri',
  ozet: 'Reklam yasağının çizdiği sınır içinde, büronun kimliğini ve çalışma alanlarını arayan kişiye doğru bilgiyle gösteren web sitesi ve arama görünürlüğü.',
  baslik: 'Avukatlar ve hukuk büroları için web sitesi',
  metaBaslik: 'Avukat ve Hukuk Bürosu Web Sitesi',
  metaAciklama:
    'Avukatlar ve hukuk büroları için web sitesi: reklam yasağının sınırı içinde, büro bilgisini ve çalışma alanlarını doğru sunan site. Reklam kampanyası kurmuyoruz.',
  tanim: [
    'Avukatlar ve hukuk büroları için web sitesi çalışması, büronun kimlik bilgilerini ve çalışma alanlarını meslek kurallarının izin verdiği içerikle yayımlama ve bu bilginin arama motorlarında doğru, güncel hâliyle bulunabilmesini sağlama işidir.',
    'Hukuki bir sorun yaşayan kişi çoğu zaman aynı gün arar: önce sorusunun cevabını okur, sonra avukatın adına, çalışma alanına ve bürosunun yerine bakar. Avukatlıkta reklam yasak olduğu için bu alanda reklam kampanyası kurmuyoruz; sitenin açık yazılması ve büro bilgisinin her yerde aynı olması üzerinde çalışıyoruz.',
    'Tek başına çalışan avukatlar, hukuk büroları, avukatlık ortaklıkları ve arabuluculuk ofisleriyle çalışıyoruz.',
  ],
  gorselAlt:
    'Dört sütunlu, basamaklı kâğıttan bir hukuk bürosu; basamakların yanında dengede duran bir terazi ve kırmızı ayraçlı kalın kitaplar; elinde dosya taşıyan biri kırmızı kalem çizgisini izleyerek kapıya yürüyor',
  cagri: 'Bürom için görüşelim',
  kanal: 'web',

  aramalar: {
    baslik: 'Avukat arayan kişi Google’a ne yazıyor?',
    giris: 'Avukat arayan kişi aramaya çoğu zaman yaşadığı sorunun hukuktaki adını, yanına da bulunduğu şehri yazar.',
    liste: [
      { ifade: 'boşanma avukatı' },
      { ifade: 'iş hukuku avukatı' },
      { ifade: 'miras avukatı' },
      { ifade: 'ceza avukatı' },
      { ifade: 'icra avukatı' },
      { ifade: 'avukata soru sor' },
      { ifade: 'avukat web sitesi' },
    ],
    yorum: [
      'Bu ifadelerin arama hacmini ölçemedik; liste, insanların avukatı nasıl aradığını gösteren örneklerden oluşuyor. Çoğu çalışma alanıyla yapılan aramadır ve yanına bir il ya da ilçe adı yazılır. “Avukata soru sor” başka bir davranışı gösterir: kişi önce sorusunun cevabını arar ve okurken bir büronun sayfasına ulaşır.',
      'Bundan çıkardığımız karar şu: büronun çalıştığı her alan sitede kendi sayfasında, uzmanlık iddiası taşımadan anlatılır ve büronun adresi her sayfada aynı biçimde yazılır. Bu ifadeleri üst sırada çıkmak için başlıklara ve sayfa adreslerine dizmiyoruz; Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği bu yöntemi yasaklıyor. Yazı yayımlanacaksa konusuna ve sınırına avukat karar verir.',
    ],
  },

  sorunlar: {
    baslik: 'Avukatların web sitesi ve SEO hakkında sorduğu sorular',
    giris: 'Altı sorunun hepsi iki konuya çıkıyor: meslek kurallarının neye izin verdiği ve büro hakkında yazan bilginin doğruluğu.',
    kartlar: [
      {
        soru: 'Avukat web sitesinde neler yer alabilir?',
        ornek:
          'Bürosunu yeni açan bir avukat, sitesine kazandığı davaları ve müvekkil listesini koymak istiyor. Reklam Yasağı Yönetmeliği sitede yer alabilecek bilgileri sayıyor, müvekkillere ilişkin bilgi paylaşılmasını yasaklıyor.',
        care: 'Sayfa planını yönetmelikte sayılan bilgilerle sınırlı kuruyor, her sayfayı yayından önce avukatın onayına sunuyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Avukatlar Google’a reklam verebilir mi?',
        ornek:
          'Bürosunu taşıyan bir avukat, yeni semtinde tanınmak için Google ve Instagram reklamı vermeyi düşünüyor. Avukatlık Kanunu’nun 55. maddesi ile Reklam Yasağı Yönetmeliği buna izin vermiyor; ihlal, baronun disiplin soruşturmasına konu oluyor.',
        care: 'Avukatlar ve hukuk büroları için reklam kampanyası kurmuyor, sponsorlu içerik hazırlamıyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'Kuralları kısaca okuyun', url: '#kanallar' },
      },
      {
        soru: 'Adımı Google’a yazınca neden eski büro adresim çıkıyor?',
        ornek:
          'Geçen yıl taşınan bir hukuk bürosunun haritadaki kaydı hâlâ eski binayı gösteriyor. İlk görüşmeye gelen kişi yanlış adrese gidiyor, telefon da eski numaraya düşüyor.',
        care: 'Sitedeki ve Google İşletme Profili’ndeki adresi, telefonu ve çalışma saatini karşılaştırıyor, eski kalan bilgiyi güncelliyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Sitem var ama adımla aratınca neden çıkmıyor?',
        ornek:
          'Bir avukatın sitesi yıllar önce kurulmuş ve sayfalar bir tema ayarıyla arama motoruna kapalı kalmış. Adını yazan kişi siteyi göremiyor, karşısına eski bir rehber kaydı çıkıyor.',
        care: 'Sayfaların dizin durumuna ve başlıkların büronun adını doğru söyleyip söylemediğine bakıyor, engeli kaldırıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Yapay zekâ büromu yanlış bilgiyle anıyor, ne yapmalıyım?',
        ornek:
          'Bir avukatın adı ChatGPT’ye sorulduğunda yıllar önce bıraktığı bir çalışma alanı ve eski büro adresi sayılıyor. Yanlış bilgi çoğu zaman güncellenmemiş bir sayfada hâlâ yazıyordur.',
        care: 'Yanıtın dayandığı sayfaları buluyor, büronun güncel bilgisini kendi sitesinde açık cümlelerle yazıyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        soru: 'Avukat sitesinde hukuki yazı yayımlanır mı?',
        ornek:
          'Bir avukat, kendisine sık sorulan soruları yanıtlayan yazılar yayımlamak istiyor ama sınırın nerede olduğundan emin değil. Yönetmelik, iş elde etme amacıyla genel ve soyut bilgi paylaşılarak yayın yapılmasını yasaklıyor.',
        care: 'Yazının konusunu ve yayın kararını avukata bırakıyor; yayımlanan sayfanın düzgün açılmasına ve okunabilmesine bakıyoruz.',
        cizim: 'defter',
        bag: { etiket: 'Yazıyı kim yazar?', url: '#sss' },
      },
    ],
  },

  kuralNotu: {
    baslik: 'Avukatlıkta reklam yasağı ve bizim sınırımız',
    metin: [
      'Avukatlık Kanunu’nun 55. maddesi, avukatların iş elde etmek için reklam sayılabilecek her türlü girişimini yasaklar; esasları Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği belirler. Yönetmelik, çevrimiçi mecralarda reklam verilmesini ve iş elde etmek amacıyla arama motorlarında üst sıralarda yer almaya yönelik anahtar sözcük, sayfa adresi gibi yöntemlerin kullanılmasını da yasaklar.',
      'Bu yüzden avukatlar ve hukuk büroları için reklam kampanyası kurmuyor, sıralama hedefi koymuyoruz; yalnız bilgilendirici bir site ve büro bilgisinin aramalarda doğru görünmesi üzerinde çalışıyoruz. Hukuki görüş vermiyoruz: her sayfanın meslek kurallarına uygunluğunu yayından önce son olarak avukat onaylar.',
    ],
  },

  kanallar: {
    baslik: 'Bir hukuk bürosu için hangi çalışma ne işe yarar?',
    giris:
      'Dört çalışmanın hiçbiri reklam içermez; hepsi büro hakkında yazan bilginin doğru olması ve bulunabilmesiyle ilgilidir. Hangisinden başlanacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'web',
        baslik: 'Web sitesi: büronun kimliği ve çalışma alanları',
        metin: 'Yönetmelik sitede yer alabilecek bilgileri sayar: ad ve soyad, baro sicil numarası, büro adresi ve iletişim bilgileri bunların başındadır. Siteyi bu bilgilerle ve telefonda rahat okunacak biçimde kuruyoruz.',
        maddeler: ['Her çalışma alanına sade bir sayfa', 'Baro ve sicil bilgisi, adres, iletişim', 'Müvekkil adı ve referans listesi yok'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        tur: 'seo',
        baslik: 'Teknik düzen: sitenin okunabilmesi ve doğru görünmesi',
        metin: 'Avukat sitesinde SEO’yu bir sıralama yarışı olarak yürütmüyoruz. Yaptığımız iş, arama motorunun sayfaları okuyabilmesi ve büronun adı arandığında doğru bilginin çıkmasıdır.',
        maddeler: ['Dizine eklenme ve teknik kontrol', 'İçeriği söyleyen düz başlıklar', 'Sıra almaya dönük kelime ve adres yok'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'geo',
        baslik: 'Yapay zekâ yanıtları: büronun doğru anılması',
        metin: 'Hukuki sorusunu ChatGPT’ye ya da Gemini’ye soran kişi yanıtta büro adlarıyla da karşılaşabiliyor. Büronuzun adı geçiyorsa yazan bilginin doğru olup olmadığına bakıyoruz.',
        maddeler: ['Büronun adıyla sorulan sorular', 'Yanıtın dayandığı sayfalar', 'Eski bilginin kaynağında düzeltilmesi'],
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        tur: 'harita',
        baslik: 'Google İşletme Profili: adres ve saat bilgisi',
        metin: 'İlk görüşmeye gelecek kişi büronun yerini çoğu zaman haritadan bulur. Profilde büronun adı tabeladaki gibi, adresi ve çalışma saati güncel yazmalıdır.',
        maddeler: ['Büro adı, adres ve telefonun doğruluğu', 'Çalışma saatleri ve tatil günleri', 'Yorum isteme ve tanıtım paylaşımı yok'],
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  yontem: {
    baslik: 'Avukatlar ve hukuk bürolarıyla nasıl çalışıyoruz?',
    giris: 'Önce büro hakkında bugün nerede ne yazdığını okuyor, sonra siteyi yönetmeliğin sınırı içinde kuruyor ya da düzeltiyor, ardından bilgiyi düzenli olarak kontrol ediyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Büro hakkında nerede ne yazıyor?', aciklama: 'Sitenizi, haritadaki kaydınızı ve adınız arandığında çıkan sayfaları okuyor; eski adresi, yanlış çalışma alanını ve eksik bilgiyi listeliyoruz.' },
      { ad: 'Strateji', ozet: 'Kuralların çizdiği sayfa planı', aciklama: 'Hangi çalışma alanına sayfa açılacağını ve sitede hangi bilgilerin yer alacağını, yönetmeliği önümüze koyarak sizinle birlikte belirliyoruz.' },
      { ad: 'Kurulum', ozet: 'Site, sayfalar ve profil', aciklama: 'Sayfaları kuruyor ya da düzeltiyor, işletme profilini güncelliyoruz. Hiçbir sayfa sizin onayınız olmadan yayına girmiyor.' },
      { ad: 'Optimizasyon', ozet: 'Düzenli kontrol ve güncelleme', aciklama: 'Adres, ekip ya da çalışma alanı değiştiğinde bilgiyi her yerde yeniliyor; teknik sorunları ve yapay zekâ yanıtlarını belirli aralıklarla yeniden kontrol ediyoruz.' },
      { ad: 'Hedef', ozet: 'Doğru bilgiyle bulunan büro', aciklama: 'Hedefimiz, büronuzu arayan kişinin kim olduğunuzu, hangi alanlarda çalıştığınızı ve size nasıl ulaşacağını doğru bilgiyle görmesidir.' },
    ],
  },

  referanslar: {
    baslik: 'Hukuk alanında çalıştığımız büro',
    giris: 'Yayında olan, bugün açıp inceleyebileceğiniz bir avukat sitesi.',
    liste: [
      {
        kimlik: 'suha-akyildiz',
        not: 'Site bu soru etrafında kuruldu. Projede web tasarım, SEO ve GEO yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'Siteniz mi yok, yoksa var ama bulunmuyor mu?',
    giris: 'Birinde iş sayfa planıyla, ötekinde bugün yayında olanın incelenmesiyle başlar.',
    sol: {
      ust: 'Siteniz yoksa ya da yıllardır güncellenmediyse',
      baslik: 'Siteyi kuralların izin verdiği bilgilerle kuruyoruz',
      metin: 'Avukat sitesi az sayfayla da işini görür. İlk adımda sitede neyin yer alacağını yönetmeliğe bakarak sizinle birlikte yazıyor, sonra sayfaları kuruyoruz.',
      maddeler: [
        { ad: 'Sitede hangi bilgiler olacak?', aciklama: 'Ad ve soyad, baro ve sicil bilgisi, büro adresi, iletişim yolları. Listeyi siz onaylarsınız.' },
        { ad: 'Hangi çalışma alanları yazılacak?', aciklama: 'Fiilen baktığınız alanlar, uzmanlık iddiası taşımayan bir dille ve her biri kendi sayfasında.' },
        { ad: 'Arayan kişi size nasıl ulaşacak?', aciklama: 'Telefon, e-posta ve büronun haritadaki yeri her sayfada aynı yerde durur; yayından önce telefonda deniyoruz.' },
      ],
      cagri: 'Büro sitemi planlayalım',
      bag: { etiket: 'Web sitesi nasıl kurulur?', url: '/blog/web-sitesi-nasil-kurulur/' },
      cizim: 'taslak',
    },
    sag: {
      ust: 'Siteniz var ama arandığında bulunmuyorsa',
      baslik: 'Önce bugün ne göründüğünü inceliyoruz',
      metin: 'Yeni sayfa açmadan önce adınız ve büronuz arandığında neyin çıktığını, sitenizin arama motoruna açık olup olmadığını görmemiz gerekir.',
      maddeler: [
        { ad: 'Dizin durumu', aciklama: 'Sayfalarınız Google’ın dizininde mi, yoksa bir ayar yüzünden kapalı mı? Search Console’dan bakıyoruz.' },
        { ad: 'Kimlik bilgisi', aciklama: 'Ad, unvan, baro ve adres bilgisi sitede, haritada ve adınızın geçtiği diğer sayfalarda aynı mı?' },
        { ad: 'Çalışma alanı sayfaları', aciklama: 'Her alan kendi sayfasında açıkça anlatılıyor mu, yoksa hepsi tek bir listede mi duruyor?' },
        { ad: 'Kurallara aykırı kalıntılar', aciklama: 'Eski siteden kalan müvekkil listesi, övgü cümlesi ya da kelime yığını varsa size gösteriyor, kaldırılmasını öneriyoruz.' },
      ],
      cagri: 'Büromun sitesine bakalım',
    },
  },

  ornek: {
    baslik: 'Bir avukat sitesinde hangi sayfa açılır, hangisi açılmaz?',
    metin: [
      'Avukat sitesinde sayfa listesi kısa tutulur. Her sayfa için önce meslek kurallarının buna izin verip vermediğine, sonra arayan kişinin o sayfada ne bulacağına bakılır.',
      'Tablo, tek başına çalışan bir avukatın sitesi için hazırlanmış temsili bir örnektir. Sizin sitenizde aynı tabloyu kendi sayfalarınızla kuruyor, son kararı size bırakıyoruz.',
    ],
    tabloBasligi: 'Bir avukat sitesi için sayfa kararları',
    sutunlar: ['Sayfa', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'Çalışma alanı: aile hukuku', karar: 'Aç', tur: 'evet', gerekce: 'Büronun baktığı alan düz bir dille anlatılır. Uzmanlık iddiası ve üstünlük sözü yazılmaz.' },
      { ilk: 'Avukat ve büro bilgisi', karar: 'Aç', tur: 'evet', gerekce: 'Ad ve soyad, baro ve sicil bilgisi, büro adresi ve iletişim yolları tek sayfada, güncel hâliyle durur.' },
      { ilk: 'Hukuki bilgilendirme yazıları', karar: 'Avukat karar verir', tur: '', gerekce: 'Yönetmelik, iş elde etme amacıyla genel bilgi paylaşımına sınır koyar. Konuyu ve yayını avukat değerlendirir.' },
      { ilk: 'Müvekkiller ve referanslar', karar: 'Açma', tur: 'hayir', gerekce: 'Yönetmelik, sitede müvekkillere ilişkin bilgi paylaşılmasını yasaklar.' },
      { ilk: 'Kazanılan davalar', karar: 'Açma', tur: 'hayir', gerekce: 'Davaların reklam olabilecek biçimde öne çıkarılması yasak kapsamındadır. Sonuç sözü de verilmez.' },
    ],
    not: 'Sayfalar gerçek bir siteden alınmadı; kararın nasıl verildiğini gösterir. Hukuki görüş değildir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Avukatlar için web sitesi ve SEO hakkında sık sorulan sorular',
    giris: 'Meslek kuralları, site içeriği ve arama görünürlüğü hakkında avukatlardan duyduğumuz sorular.',
    sorular: [
      {
        soru: 'Avukatlar için web sitesi ve SEO nedir?',
        cevap:
          'Avukatlar için web sitesi ve SEO, büronun kimlik bilgilerini ve çalışma alanlarını meslek kurallarının izin verdiği içerikle yayımlama ve bu bilginin arama motorlarında doğru hâliyle bulunabilmesini sağlama işidir. Site tasarımını, teknik kontrolleri, Google İşletme Profili’ndeki bilginin güncelliğini ve yapay zekâ yanıtlarında büronun nasıl anıldığının incelenmesini kapsar. Reklam kampanyası bu işin parçası değildir.',
      },
      {
        soru: 'Avukatlar reklam verebilir mi?',
        cevap:
          'Avukatlık Kanunu’nun 55. maddesi, avukatların iş elde etmek için reklam sayılabilecek her türlü girişimini yasaklar; Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği çevrimiçi mecralarda reklam verilmesini de bu yasağın içinde sayar. Neyin reklam sayıldığı konusunda ayrıntı için kayıtlı olduğunuz baroya ve yönetmeliğin güncel metnine bakmanızı öneririz. Biz bu alanda reklam kampanyası kurmuyoruz.',
        bag: { etiket: 'Kaynak: Türkiye Barolar Birliği, yönetmelikler', url: 'https://www.barobirlik.org.tr/Yonetmelikler' },
      },
      {
        soru: 'Avukat web sitesi nasıl olmalı?',
        cevap:
          'Bir avukat sitesi büronun kimliğini, çalışma alanlarını ve iletişim yollarını açık ve güncel biçimde vermelidir. Reklam Yasağı Yönetmeliği sitede yer alabilecek bilgileri sayar, müvekkillere ilişkin bilgi paylaşılmasına izin vermez. Bu yüzden sayfa listesi kısa tutulur ve her sayfa yayından önce avukatın onayından geçer.',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Avukat sitesinde SEO yapılabilir mi?',
        cevap:
          'Avukat sitelerinde sıralama hedefiyle SEO çalışması yürütmüyoruz. Reklam Yasağı Yönetmeliği, iş elde etmek amacıyla ve meslektaşlarla rekabete yol açacak biçimde arama motorlarında üst sıralarda yer almaya yönelik anahtar sözcük, sayfa adresi ve benzeri yöntemlerin kullanılmasını yasaklar. Yaptığımız iş, sitenin arama motorunca okunabilmesi, başlıkların sayfanın içeriğini doğru söylemesi ve büro bilgisinin her yerde aynı olmasıdır. Hangi düzenlemenin kurala uyduğuna son olarak avukat karar verir.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Avukat sitesinde blog yazısı yayımlanır mı?',
        cevap:
          'Bu kararı avukat verir; biz yazı yayımlamayı bir görünürlük yöntemi olarak önermiyoruz. Reklam Yasağı Yönetmeliği, iş elde etme amacıyla herkesin ulaşabileceği genel ve soyut bilgilerin paylaşılarak yayın yapılmasını yasaklar. Avukatın yayımlamaya karar verdiği bir yazı varsa metni avukat yazar ya da onaylar; biz sayfanın düzgün açılmasına ve okunabilmesine bakarız.',
      },
      {
        soru: 'Yapay zekâ araçları büromu nasıl anıyor, görebilir miyim?',
        cevap:
          'Evet. Büronuzun adını ChatGPT, Gemini ve Google’ın yapay zekâ özetlerinde sorup yanıtları birlikte okuyoruz. Yanıtta bıraktığınız bir çalışma alanı ya da eski bir adres yazıyorsa bilginin durduğu sayfayı bulup orada düzeltiyoruz. Bir aracın büronuzu anacağına ya da önereceğine dair söz vermiyoruz.',
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        soru: 'Site ve alan adı kimin adına olur?',
        cevap:
          'Alan adı, site ve Google İşletme Profili büronuzun adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; erişimi dilediğiniz zaman kaldırabilirsiniz. Alan adının seçimi de avukata aittir: yönetmelik, ün kazanmaya ya da reklam yoluyla iş elde etmeye yönelik alan adlarının kullanılmasını yasaklar.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Sıralama, ziyaretçi ya da başvuru sayısı için söz vermiyoruz; avukat sitelerinde sıralama hedefi de koymuyoruz. Söz verdiğimiz şey sitenizi ve büronuz hakkında yazan bilgiyi ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve bu bilgiyi düzenli olarak kontrol edip güncellemektir.',
      },
    ],
  },

  ilgili: {
    blog: ['seo-nedir', 'geo-nedir'],
    sektorler: ['saglik-ve-klinikler', 'egitim-kurumlari'],
  },
};

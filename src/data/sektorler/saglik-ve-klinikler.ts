/**
 * Sağlık ve klinikler. HASSAS SEKTÖR: hekimlerin ve sağlık kuruluşlarının tanıtımı kurallara bağlıdır.
 * Ana niyet: "doktorlar için web sitesi", "doktor web sitesi", "doktor seo", "klinik web sitesi".
 * Bu sayfada reklam kampanyası önerilmez; kanallar yalnız web, seo, geo ve harita kartlarıdır.
 * Tedavi önerisi, sağlık iddiası, hasta yorumu ya da öncesi ve sonrası görseli önerisi yazılmaz.
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026). Hacmi ölçülmeyen ifadeler hacimsiz yazıldı.
 * Referanslar: Doç. Dr. Pınar Taşdemir (web tasarım, SEO ve GEO), Dr. Emre Apaydın ve Uzm. Dr. Belda Yurtseven Tüner
 * (yalnız SEO ve GEO). Reklam referansı olarak anılmazlar.
 *
 * Meslek kuralı cümlelerinin kaynağı (15 Kasım 2026):
 * - Türk Tabipleri Birliği, "Hekimler ile Sağlık Kurum ve Kuruluşlarının Halka Açık Tanıtım ve Bilgilendirme Faaliyetlerine
 *   İlişkin Kılavuz" (11.07.2025): https://www.ttb.org.tr/mevzuat_goster.php?Guid=b49dd386-5e58-11f0-8892-211508e979a1
 *   Kılavuzdan alınan ayrıntılar metinde "Türk Tabipleri Birliği'nin kılavuzu" diye atıflıdır.
 * - Sağlık Bakanlığı'nın Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmeliği ve Tıbbi Deontoloji
 *   Nizamnamesi yalnız ADIYLA anılır: mevzuat.gov.tr ve resmigazete.gov.tr bu çalışma sırasında açılamadığı için resmî metinden
 *   madde ya da ayrıntı aktarılmadı. Yayından önce resmî metinle karşılaştırılmalı ve hekim müşterilere okutulmalıdır.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 7,
  kimlik: 'saglik-ve-klinikler',
  ad: 'Sağlık ve klinikler',
  kimler: 'Hekimler, muayenehaneler, klinikler, diş hekimleri',
  ozet: 'Tanıtım kurallarının sınırı içinde, hekimin uzmanlığını, çalıştığı yeri ve randevu yolunu arayan hastaya güncel bilgiyle gösteren site düzeni.',
  baslik: 'Doktorlar ve klinikler için web sitesi ve SEO',
  metaBaslik: 'Doktorlar için Web Sitesi ve SEO',
  metaAciklama:
    'Doktorlar ve klinikler için web sitesi ve SEO: uzmanlık, adres ve randevu bilgisini doğru sunan, tanıtım kurallarına uygun site. Reklam kampanyası kurmuyoruz.',
  tanim: [
    'Doktorlar ve klinikler için web sitesi ve SEO, hekimin uzmanlık alanını, hasta kabul ettiği yeri ve randevu yolunu tanıtım kurallarına uygun bir sitede yayımlama ve bu bilginin aramalarda doğru, güncel hâliyle bulunabilmesini sağlama işidir.',
    'Hasta çoğu zaman önce belirtisini ya da duyduğu işlemin adını arar, sonra uzmanlık alanını ve şehrini yazar, en son hekimin adına bakar. Sağlıkta tanıtım kurallara bağlı olduğu için bu alanda reklam kampanyası kurmuyoruz; hastanın bu üç aramada doğru bilgiye ulaşması üzerinde çalışıyoruz.',
    'Muayenehanesi olan hekimler, diş hekimleri, klinikler ve birden çok hekimin çalıştığı merkezlerle çalışıyoruz.',
  ],
  gorselAlt:
    'Büyük pencereleri ışıklı, kapısının üstünde mavi bir kalp olan kâğıttan modern bir klinik; önde kâğıttan bir stetoskop ve boş satırlı bir not panosu; çocuğunun elinden tutan bir ebeveyn ve bastonlu yaşlı biri kırmızı kalem çizgisini izleyerek kapıya yürüyor',
  cagri: 'Kliniğim için görüşelim',
  kanal: 'seo',

  aramalar: {
    baslik: 'Hastalar Google’da doktoru nasıl arıyor?',
    giris: 'Hasta aramaya çoğu zaman uzmanlık alanının ya da duyduğu işlemin adıyla başlar; hekimin adını en son yazar.',
    liste: [
      { ifade: 'diş hekimi', hacim: 60500 },
      { ifade: 'diyetisyen', hacim: 33100 },
      { ifade: 'sağlık turizmi', hacim: 1900 },
      { ifade: 'en iyi kadın doğum doktoru', hacim: 1000 },
      { ifade: 'doktor seo', hacim: 70 },
      { ifade: 'kadın doğum uzmanı' },
      { ifade: 'dermatolog' },
      { ifade: 'çocuk doktoru' },
    ],
    yorum: [
      'En çok aranan ifadeler uzmanlık adlarıdır: “diş hekimi” ayda yaklaşık 60.500, “diyetisyen” 33.100 kez yazılıyor ve bu aramaların yanına çoğu zaman bir il ya da ilçe adı ekleniyor. “En iyi kadın doğum doktoru” gibi aramalar hastanın ne istediğini gösterir, ama hekimin sitesi bu soruya üstünlük iddiasıyla cevap veremez; meslek kuralları hekimi öven ve öne çıkaran ifadeye izin vermez.',
      'Sayfaları bu yüzden hekimin tescilli uzmanlığına, hasta kabul ettiği yere ve randevu yoluna göre kuruyoruz; “en iyi” gibi ifadeleri başlığa ya da metne taşımıyoruz. “Sağlık turizmi” kendi mevzuatı olan ayrı bir konudur; burada anlattığımız çalışma yurt içindeki hastanın aramasıyla ilgilidir. “Doktor SEO” ise hekimin kendi aramasıdır.',
    ],
  },

  sorunlar: {
    baslik: 'Hekimlerin web sitesi ve SEO hakkında sorduğu sorular',
    giris: 'Sorular üç yerde toplanıyor: hekimin adı arandığında çıkan bilgi, sitede neyin yer alabileceği ve hastanın randevuya nasıl ulaştığı.',
    kartlar: [
      {
        soru: 'Adımı Google’a yazan hasta neden eski hastaneyi görüyor?',
        ornek:
          'Bir kadın doğum uzmanı geçen yıl özel hastaneden ayrılıp muayenehane açtı. Adını arayan hasta hâlâ eski hastanenin hekim sayfasını ve oradaki randevu numarasını buluyor.',
        care: 'Adınızla çıkan sayfaları tek tek okuyor, güncel çalışma yerini ve randevu yolunu sitenizde ve işletme profilinizde açıkça yazıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Doktor web sitesinde hangi bilgiler yer alabilir?',
        ornek:
          'Bir ortopedi uzmanı sitesine hasta teşekkür mesajlarını ve indirim duyurusunu koymak istiyor. Türk Tabipleri Birliği’nin tanıtım kılavuzu hasta değerlendirmelerine ve ücret, indirim bilgisine yer verilmesine izin vermiyor.',
        care: 'Sayfa planını tanıtım kurallarını önümüze koyarak çıkarıyor, her metni yayından önce hekimin onayına sunuyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Kuralları kısaca okuyun', url: '#kanallar' },
      },
      {
        soru: 'Sitemdeki tıbbi yazıları kim yazmalı?',
        ornek:
          'Bir klinikte yazıları yıllardır dışarıdan bir metin yazarı hazırlıyor; hangi hekimin okuduğu, en son ne zaman güncellendiği belli değil. Hasta ise bilgiyi kimin verdiğini görmek istiyor.',
        care: 'Hastaların sorduğu soruları çıkarıyor, metni yazan ya da onaylayan hekimin adını ve güncelleme tarihini sayfaya koyuyoruz.',
        cizim: 'defter',
        bag: { etiket: 'İçeriği kim yazar?', url: '#sss' },
      },
      {
        soru: 'Randevu almak isteyen hasta neden sitemden çıkıyor?',
        ornek:
          'Bir çocuk doktorunun sitesinde telefon numarası yalnız iletişim sayfasında, çevrim içi randevu bağlantısı ise menünün en altında duruyor. Telefondan bakan ebeveyn numarayı bulamadan geri dönüyor.',
        care: 'Telefon ve çevrim içi randevu bağlantısını her sayfanın aynı yerine koyuyor, yayından önce telefonda deniyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Yapay zekâ uzmanlık alanımı neden yanlış söylüyor?',
        ornek:
          'Bir hekimin adı Gemini’ye sorulduğunda yan dal uzmanlığı hiç anılmıyor, çalıştığı şehir de yanlış yazılıyor. Kaynak çoğu zaman güncellenmemiş bir kurum sayfası ya da eski bir rehber kaydıdır.',
        care: 'Yanıtın dayandığı sayfaları buluyor, uzmanlık ve çalışma yeri bilginizi sitenizde açık cümlelerle yazıyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        soru: 'Haritada muayenehanemin saati ve adresi neden yanlış?',
        ornek:
          'Bir diş hekiminin haritadaki kaydı cumartesi günü açık gösteriyor, oysa muayenehane o gün kapalı. Kapıya kadar gelen hasta geri dönüyor.',
        care: 'İşletme profilindeki adı, adresi, saatleri ve uzmanlık bilgisini sitedeki bilgiyle karşılaştırıp aynı hâle getiriyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  kuralNotu: {
    baslik: 'Sağlıkta tanıtım kuralları ve bizim sınırımız',
    metin: [
      'Hekimlerin ve sağlık kuruluşlarının tanıtımı kurallara bağlıdır: Sağlık Bakanlığı’nın Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmeliği, Tıbbi Deontoloji Nizamnamesi ve meslek kuruluşlarının kılavuzları bu alanı düzenler. Türk Tabipleri Birliği’nin kılavuzu hasta değerlendirmelerine, ücret ve indirim bilgisine, hekimi öven ifadelere yer verilmesine izin vermez.',
      'Bu yüzden hekimler ve klinikler için reklam kampanyası kurmuyoruz; yalnız bilgilendirici bir site ve hekim bilgisinin aramalarda doğru görünmesi üzerinde çalışıyoruz. Tıbbi içeriği biz yazmıyoruz: her metnin tanıtım kurallarına ve meslek etiğine uygunluğunu yayından önce son olarak hekim onaylar.',
    ],
  },

  kanallar: {
    baslik: 'Bir hekim ya da klinik için hangi çalışma ne işe yarar?',
    giris:
      'Dört çalışma da hastanın hekim hakkında doğru bilgiye ulaşmasıyla ilgilidir ve hiçbiri reklam içermez. Hangisinden başlanacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'web',
        baslik: 'Web sitesi: uzmanlık, yer ve randevu yolu',
        metin: 'Hasta sitede üç bilgiyi arar: hekimin uzmanlığı, hasta kabul ettiği yer ve randevu yolu. Sayfaları bu üç bilgi ilk ekranda görünecek biçimde kuruyoruz.',
        maddeler: ['Her sayfada randevu bağlantısı', 'Tescilli uzmanlık ve akademik unvan', 'Hasta yorumu ve ücret bilgisi yok'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        tur: 'seo',
        baslik: 'SEO: uzmanlık alanıyla bulunabilmek',
        metin: 'Hasta uzmanlık adını ve şehrini yazdığında, hekimin o alanı anlatan sayfası arama motorunca okunabiliyor olmalıdır. Başlıklarda yalnız hekimin uzmanlık alanıyla ilgili ifadeleri kullanıyoruz.',
        maddeler: ['Dizine eklenme ve teknik kontrol', 'Uzmanlık sayfalarının düzeni', 'Üstünlük bildiren ifade yok'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'geo',
        baslik: 'Yapay zekâ: uzmanlık bilgisinin doğruluğu',
        metin: 'Sağlık sorusunu ChatGPT’ye ya da Gemini’ye soran kişi yanıtta hekim adlarıyla da karşılaşabiliyor. Adınız geçiyorsa uzmanlığınızın ve çalıştığınız yerin doğru anılıp anılmadığına bakıyoruz.',
        maddeler: ['Hekimin adıyla sorulan sorular', 'Yanıtın dayandığı sayfalar', 'Yanlış bilginin kaynağında düzeltilmesi'],
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        tur: 'harita',
        baslik: 'Google İşletme Profili: adres, saat ve uzmanlık',
        metin: 'Muayenehaneye ilk kez gelecek hasta yeri ve saati çoğu zaman haritadan öğrenir. Profildeki ad, adres, çalışma saati ve uzmanlık bilgisi sitedekiyle aynı olmalıdır.',
        maddeler: ['Ad, adres ve telefonun doğruluğu', 'Çalışma saatleri ve tatil günleri', 'Yorum toplama çalışması yok'],
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  yontem: {
    baslik: 'Hekimler ve kliniklerle nasıl çalışıyoruz?',
    giris: 'İşe hastanın sizi bugün nasıl bulduğunu inceleyerek başlıyor, sayfaları buna göre kuruyor, çalışma yeriniz ya da saatiniz değiştikçe bilgiyi güncelliyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Hasta sizi nasıl buluyor?', aciklama: 'Adınızla, uzmanlık alanınızla ve şehrinizle yapılan aramalarda neyin çıktığını, sitenizin telefonda nasıl açıldığını ve randevu yolunun kaç adımda bulunduğunu inceliyoruz.' },
      { ad: 'Strateji', ozet: 'Sayfa ve onay planı', aciklama: 'Hangi uzmanlık ve bilgilendirme sayfasının açılacağını, hangi metni kimin yazıp kimin onaylayacağını tanıtım kurallarına bakarak planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Sayfalar, randevu yolu, profil', aciklama: 'Sayfaları kuruyor, telefon ve randevu bağlantısını her sayfaya yerleştiriyor, işletme profilini güncelliyoruz. Tıbbi metinler hekim onayıyla yayına giriyor.' },
      { ad: 'Optimizasyon', ozet: 'Düzenli kontrol ve güncelleme', aciklama: 'Arama verisini ve yapay zekâ yanıtlarını belirli aralıklarla yeniden okuyor; bulunmayan sayfayı ve eskiyen bilgiyi sıraya alıp düzeltiyoruz.' },
      { ad: 'Hedef', ozet: 'Doğru bilgiye ulaşan hasta', aciklama: 'Hedefimiz, sizi arayan hastanın uzmanlığınızı, yerinizi ve randevu yolunuzu doğru bilgiyle bulmasıdır. Hasta sayısı için söz vermiyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'Sağlık alanında çalıştığımız hekimler',
    giris: 'Üçü de yayında olan, bugün açıp inceleyebileceğiniz hekim siteleri.',
    liste: [
      {
        kimlik: 'pinar-tasdemir',
        not: 'Site, hekimin çalışma alanlarının arama sonuçlarında ve yapay zekâ yanıtlarında nasıl yer alacağı sorusu etrafında kuruldu. Projede web tasarım, SEO ve GEO yer aldı.',
      },
      {
        kimlik: 'emre-apaydin',
        not: 'Çalışma, hekimin uzmanlık bilgisinin arama sonuçlarında nasıl yer aldığı sorusu üzerine yürütüldü. Projede yalnız SEO ve GEO yer aldı.',
      },
      {
        kimlik: 'belda-yurtseven-tuner',
        not: 'Çalışmada, hastanın aradığı uzmanlık alanını hekimin sitesinde nasıl bulduğuna bakıldı. Projede yalnız SEO ve GEO yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'Siteniz mi yok, yoksa var ama hasta sizi bulamıyor mu?',
    giris: 'Birinde iş sayfa planıyla, ötekinde adınız arandığında bugün çıkan sonuçlarla başlar.',
    sol: {
      ust: 'Siteniz yoksa ya da yıllardır güncellenmediyse',
      baslik: 'Siteyi uzmanlık, yer ve randevu yolu üzerine kuruyoruz',
      metin: 'Hekim sitesinin çok sayfalı olması gerekmez. İlk adımda hastanın en çok aradığı bilgileri belirliyor, sayfaları tanıtım kurallarına bakarak sizinle birlikte planlıyoruz.',
      maddeler: [
        { ad: 'Hangi uzmanlık, hangi yer?', aciklama: 'Diplomanızda yazan uzmanlık, hasta kabul ettiğiniz adres ve günler. Sitenin ilk ekranı bu bilgiyle açılır.' },
        { ad: 'Randevu hangi yoldan alınacak?', aciklama: 'Telefon mu, kullandığınız çevrim içi randevu sistemi mi? Bağlantı her sayfada aynı yerde durur.' },
        { ad: 'Metni kim yazacak, kim onaylayacak?', aciklama: 'Tıbbi bilgi içeren her sayfayı hekim yazar ya da onaylar; sayfada güncelleme tarihi yer alır.' },
      ],
      cagri: 'Sitemi birlikte planlayalım',
      bag: { etiket: 'Web sitesi nasıl kurulur?', url: '/blog/web-sitesi-nasil-kurulur/' },
      cizim: 'taslak',
    },
    sag: {
      ust: 'Siteniz var ama arandığında bulunmuyorsa',
      baslik: 'Önce adınız arandığında ne çıktığına bakıyoruz',
      metin: 'Yeni sayfa açmadan önce hastanın bugün neyle karşılaştığını görmemiz gerekir: adınız, uzmanlık alanınız ve şehriniz yazıldığında çıkan sayfalar ve o sayfalardaki bilgi.',
      maddeler: [
        { ad: 'Dizin durumu', aciklama: 'Sayfalarınız Google’ın dizininde mi, yoksa bir tema ayarı yüzünden kapalı mı? Search Console’dan bakıyoruz.' },
        { ad: 'Hekim bilgisi', aciklama: 'Uzmanlık, unvan ve çalışma yeri sitede, haritada ve eski kurum sayfalarında aynı mı yazıyor?' },
        { ad: 'Randevu yolu', aciklama: 'Telefonda açılan sayfada numaraya ve randevu bağlantısına kaç dokunuşta ulaşılıyor? Birlikte deniyoruz.' },
        { ad: 'İçeriğin kaynağı', aciklama: 'Tıbbi yazılarda yazan ya da onaylayan hekimin adı ve güncelleme tarihi görünüyor mu?' },
      ],
      cagri: 'Siteme birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Hastanın sorusu sitede nerede cevaplanır?',
    metin: [
      'Hasta siteye bir soruyla gelir ve cevabı ilk açtığı sayfada arar. Her soru için cevabın hangi sayfada duracağına ve o metni kimin onaylayacağına baştan karar verilir.',
      'Tablo, bir göz hastalıkları uzmanının muayenehane sitesi için hazırlanmış temsili bir örnektir. Sizin sitenizde aynı tabloyu hastalarınızın size gerçekten sorduğu sorularla kuruyoruz.',
    ],
    tabloBasligi: 'Bir göz hekimi sitesi için soru ve sayfa kararları',
    sutunlar: ['Hastanın sorusu', 'Cevabın yeri', 'Gerekçe'],
    satirlar: [
      { ilk: 'bugün randevu alabilir miyim', sorgu: true, karar: 'Her sayfanın üstü', tur: 'evet', gerekce: 'Telefon ve randevu bağlantısı her sayfada aynı yerde durur; hasta aramak için sayfa değiştirmez.' },
      { ilk: 'muayenehane cumartesi açık mı', sorgu: true, karar: 'İletişim ve profil', tur: 'evet', gerekce: 'Çalışma saati sitede ve Google İşletme Profili’nde aynı yazılır; değişince ikisi birlikte güncellenir.' },
      { ilk: 'göz tansiyonu nasıl ölçülür', sorgu: true, karar: 'Bilgilendirme sayfası', tur: 'evet', gerekce: 'Metni hekim yazar ya da onaylar. Sayfada hekimin adı ve güncelleme tarihi görünür.' },
      { ilk: 'göz ameliyatı fiyatları', sorgu: true, karar: 'Sitede yer almaz', tur: 'hayir', gerekce: 'Türk Tabipleri Birliği’nin kılavuzu ücret ve indirim bilgisine izin vermez. Soru telefonda ya da muayenede yanıtlanır.' },
      { ilk: 'en iyi göz doktoru', sorgu: true, karar: 'Sitede yer almaz', tur: 'hayir', gerekce: 'Hekimin sitesi üstünlük iddiası taşıyamaz. Site uzmanlığı, yeri ve randevu yolunu söyler.' },
    ],
    not: 'Sorular gerçek bir siteden alınmadı; kararın nasıl verildiğini gösterir. Tıbbi bilgi içermez.',
    cizim: 'soru',
  },

  sss: {
    baslik: 'Doktorlar için web sitesi ve SEO hakkında sık sorulan sorular',
    giris: 'Tanıtım kuralları, site içeriği, randevu yolu ve arama görünürlüğü hakkında hekimlerden duyduğumuz sorular.',
    sorular: [
      {
        soru: 'Doktorlar için web sitesi ve SEO nedir?',
        cevap:
          'Doktorlar için web sitesi ve SEO, hekimin uzmanlık alanını, hasta kabul ettiği yeri ve randevu yolunu tanıtım kurallarına uygun bir sitede yayımlama ve bu bilginin aramalarda doğru hâliyle bulunabilmesini sağlama işidir. Site tasarımını, teknik kontrolleri, Google İşletme Profili’ndeki bilginin güncelliğini ve yapay zekâ yanıtlarında hekimin nasıl anıldığının incelenmesini kapsar. Reklam kampanyası bu işin parçası değildir.',
      },
      {
        soru: 'Doktorlar reklam verebilir mi?',
        cevap:
          'Sağlık hizmetlerinde tanıtım kurallara bağlıdır ve meslek kuralları reklam niteliğindeki paylaşımlara izin vermez. Neyin bilgilendirme, neyin reklam sayıldığı Sağlık Bakanlığı’nın ilgili yönetmeliğinde ve meslek kuruluşlarının kılavuzlarında yazar; ayrıntı için bağlı olduğunuz tabip odasına ya da dişhekimleri odasına ve güncel mevzuata bakmanızı öneririz. Biz bu alanda reklam kampanyası kurmuyoruz.',
        bag: { etiket: 'Kaynak: Türk Tabipleri Birliği tanıtım kılavuzu', url: 'https://www.ttb.org.tr/mevzuat_goster.php?Guid=b49dd386-5e58-11f0-8892-211508e979a1' },
      },
      {
        soru: 'Doktor web sitesi nasıl olmalı?',
        cevap:
          'Bir hekim sitesi uzmanlık alanını, hasta kabul edilen yeri ve randevu yolunu ilk ekranda söylemelidir. Tıbbi bilgi içeren sayfaları hekim yazmalı ya da onaylamalı, sayfada güncelleme tarihi görünmelidir. Türk Tabipleri Birliği’nin kılavuzu, bilgilendirme sayfalarında içeriğin yalnız bilgilendirme amaçlı olduğunu ve tanı ile tedavi için hekime başvurulması gerektiğini söyleyen bir uyarının yer almasını da ister.',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Doktor SEO çalışması neleri kapsar?',
        cevap:
          'Doktor SEO çalışması, hekimin sitesinin arama motorunca okunabilmesini, uzmanlık sayfalarının düzenini ve hekim bilgisinin site ile işletme profilinde aynı olmasını kapsar. Başlıklarda ve metinlerde yalnız hekimin uzmanlık alanıyla ilgili ifadeler kullanılır; Türk Tabipleri Birliği’nin kılavuzu arama motorları için bunun dışında anahtar kelimeye yer verilmemesini ister. Sıralama için söz vermiyoruz.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Sitede hasta yorumu ya da öncesi ve sonrası fotoğrafı yayımlanır mı?',
        cevap:
          'Biz önermiyoruz ve bu içerikleri hazırlamıyoruz. Türk Tabipleri Birliği’nin kılavuzu hasta değerlendirmelerine ve teşekkür ilanlarına yer verilmesine izin vermez; hasta görsellerinin kullanımı ise ayrı kurallara bağlıdır. Sitede güveni, hekimin uzmanlık bilgisinin ve iletişim yollarının açık yazılması kurar.',
      },
      {
        soru: 'Tıbbi içeriği kim yazar?',
        cevap:
          'Tıbbi içeriği hekim yazar ya da onaylar; biz tedavi önerisi ya da sağlık bilgisi yazmıyoruz. Bizim işimiz hastaların hangi soruları sorduğunu çıkarmak, sayfanın düzenini kurmak ve metnin arama motorunca okunabilmesini sağlamaktır. Hekimin onaylamadığı hiçbir sayfa yayına girmez.',
      },
      {
        soru: 'Site ve alan adı kimin adına olur?',
        cevap:
          'Alan adı, site ve Google İşletme Profili hekimin ya da kliniğin adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; Search Console verisi de içinde olmak üzere geçmiş kayıtlar size aittir. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Sıralama, ziyaretçi ya da randevu sayısı için söz vermiyoruz. Söz verdiğimiz şey sitenizi ve hakkınızda yazan bilgiyi ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['seo-nedir', 'google-isletme-profili-nasil-acilir'],
    sektorler: ['hukuk-burolari', 'egitim-kurumlari'],
  },
};

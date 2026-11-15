/**
 * Otomotiv sektörü.
 * Ana niyet: "otomotiv firmaları için dijital pazarlama", "oto galeri reklam", "oto galeri web sitesi", "oto servis reklam",
 * "rent a car reklam", "rent a car web sitesi", "oto ekspertiz reklam".
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026, OpenSEO).
 * Referans yok: referanslar alanı yazılmadı.
 * Kapsam: ilan sitesi mağaza yönetimi, rezervasyon ve stok yazılımı, sepet ve ödeme altyapısı vaat edilmez; işletme ya da
 * sağlayıcısı yürütür, biz sayfaya ve reklama bağlarız. Araç markası ve ilan sitesi adı yazılmaz; yetkili servis, bayi ve
 * ikinci el araç ticareti mevzuatına girilmez.
 * Mevsim bilgisi (SSS): "kış lastiği" ve "oto klima gazı dolumu" aramalarının aylık dağılımına dayanır (aynı ölçüm).
 * Çalışma örneği arama terimi tablosu değil, iş koluna göre ilk adım tablosudur: sektör tek bir iş olmadığı için.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 12,
  kimlik: 'otomotiv',
  ad: 'Otomotiv',
  kimler: 'Oto galeriler, özel servisler, oto ekspertiz ve araç kiralama firmaları, yedek parçacılar',
  ozet: 'Galeride ilan sitesi, serviste harita, kiralamada fiyat araması: talebin geldiği yola göre kurulan site, harita profili ve reklam düzeni.',
  baslik: 'Otomotiv firmaları için dijital pazarlama',
  metaBaslik: 'Otomotiv Firmaları için Dijital Pazarlama',
  metaAciklama:
    'Oto galeri, özel servis, oto ekspertiz ve rent a car için Google Ads, harita profili, Instagram reklamları ve web sitesi: arayan müşteriyi telefona getiren kurulum.',
  tanim: [
    'Otomotiv firmaları için dijital pazarlama, araç almak, kiralamak, bakımını ya da onarımını yaptırmak isteyen kişinin arama yaptığı anda karşısına çıkma ve onu telefona, randevuya ya da rezervasyona getirme işidir.',
    'Otomotivde talep her işte başka bir yoldan gelir. Araç alacak kişi modeli ilan sitelerinde arar, galeriyi orada tanır ve günlerce karşılaştırır; arıza yaşayan sürücü haritada en yakın ustaya bakıp dakikalar içinde arar; araç kiralayacak kişi şehri ve tarihi yazıp fiyatları karşılaştırır. Reklamı, harita profilini ve siteyi, işinizde talebin geldiği yola göre kuruyoruz.',
    'Oto galeriler, özel servisler ve lastikçiler, oto ekspertiz noktaları, araç kiralama firmaları, yedek parçacılar ile oto yıkama ve araç bakım işletmeleriyle çalışıyoruz.',
  ],
  gorselAlt:
    'Çizgili tenteli kâğıt bir oto galeri ve servis: vitrinde bir otomobil, yandaki bölmede liftte bir araç, lastikler ve takım arabası. Kırmızı kalem çizgisi, biri elinde anahtar tutan dört kişiyi galerinin kapısına götürüyor.',
  cagri: 'İşletmem için görüşelim',
  kanal: 'google-ads',

  aramalar: {
    baslik: 'Otomotivde müşteriler Google’da ne arıyor?',
    giris: 'Araç sahibi çoğu zaman işletmenin adını bilmez; o an ihtiyacı olan işi ve bulunduğu yeri yazar.',
    liste: [
      { ifade: 'araç kiralama', hacim: 823000 },
      { ifade: 'oto yıkama', hacim: 246000 },
      { ifade: 'lastikçi', hacim: 201000 },
      { ifade: 'en yakın lastikçi', hacim: 90500 },
      { ifade: 'oto elektrikçi', hacim: 74000 },
      { ifade: 'ikinci el araba', hacim: 60500 },
      { ifade: 'oto yedek parça', hacim: 27100 },
      { ifade: 'oto ekspertiz', hacim: 22200 },
      { ifade: 'oto galeri', hacim: 9900 },
      { ifade: 'oto servis', hacim: 6600 },
    ],
    yorum: [
      'Listede üç ayrı davranış görünüyor. “Araç kiralama” sektörün en büyük aramasıdır; yazan kişi fiyat karşılaştırır ve ilk sıralarda büyük kiralama markaları ile karşılaştırma siteleri çıkar. Bakım ve onarımda sürücü işi adıyla arar: “lastikçi” ve “oto elektrikçi” aramaları “oto servis” aramasının kat kat üstündedir ve sık sık “en yakın” sözüyle birlikte yazılır. “İkinci el araba” yazan kişi ise araç arıyordur; bu aramanın sonuçlarını ilan siteleri doldurur, “oto galeri” araması yanında küçük kalır.',
      'Bundan çıkardığımız karar işe göre değişiyor. Serviste, lastikçide ve ekspertizde önce harita profilini ve her iş için ayrı sayfayı kuruyor, reklamı müşterinin gelebileceği ilçelerle sınırlıyoruz. Kiralamada bütçeyi şehir, havalimanı ve süre yazan aramalara topluyoruz. Galeride ilan sitesiyle yarışmıyoruz; ilanı görüp galerinin adını Google’a yazan alıcının karşısına çıkan siteyi ve profili düzenliyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'Otomotiv işletmelerinin takıldığı altı soru',
    giris: 'Galeri, servis, ekspertiz ve kiralama ayrı işlerdir; takılınan yer de işe göre değişir. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'İlan sitesi varken oto galeriye web sitesi gerekir mi?',
        ornek:
          'Bir galerinin ilanını beğenen alıcı, aramadan önce galerinin adını Google’a yazıyor. Karşısına yıllar önce açılmış bir harita kaydı ve yanıtsız kalmış bir şikâyet çıkıyor.',
        care: 'Galerinin adını arayan alıcının göreceği siteyi, stok vitrinini ve harita profilini kuruyoruz; ilan mağazanız sizde kalıyor.',
        cizim: 'dukkan',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Oto servisim Google Haritalar’da neden çıkmıyor?',
        ornek:
          'Bir özel servisin sahibi telefonuna “en yakın lastikçi” yazıyor; haritada iki sokak ötedeki dükkân çıkıyor, kendisi çıkmıyor. Profilinde tek bir kategori seçili, lastik ve rot balans işi hiçbir yerde yazmıyor.',
        care: 'Profilin kategorilerini, hizmet listesini, saatlerini ve fotoğraflarını tamamlıyor; her iş için sitede ayrı sayfa açıyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Rent a car reklamı veriyorum, neden rezervasyon gelmiyor?',
        ornek:
          'Bir araç kiralama firması “araç kiralama” kelimesine bütün ülkede reklam veriyor. Tıklayanların çoğu başka şehirde araç arıyor; açılan ana sayfada teslim yeri ve kiralama koşulları görünmüyor.',
        care: 'Bütçeyi şehir, havalimanı ve kiralama süresi yazan aramalara topluyor; reklamı teslim yerini ve koşulları gösteren sayfaya indiriyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Oto ekspertiz firması nasıl müşteri bulur?',
        ornek:
          'Alıcı ile satıcı anlaşıyor ve aynı gün, aracın bulunduğu ilçede ekspertiz arıyor. Bir ekspertiz noktasının profilinde hafta sonu saatleri ve paket içerikleri yazmadığı için telefon, bunları gösteren rakibe gidiyor.',
        care: 'Profili ve reklamı ilçe ve “en yakın” aramalarına göre kuruyor; paket içeriğini ve randevu adımını tek sayfada topluyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'Hangi kanal ne işe yarar?', url: '#kanallar' },
      },
      {
        soru: 'Oto servis reklamından arayanlar neden işe dönmüyor?',
        ornek:
          'Yalnız belirli bir markaya bakan bir özel servis “oto servis” kelimesine reklam veriyor. Arayanların çoğu başka marka araç için ya da şehrin öbür ucundan soruyor; usta her telefonda işi bırakıyor.',
        care: 'Reklamı baktığınız araçlara, yaptığınız işlere ve müşterinin gelebileceği ilçelere göre daraltıyor, ilgisiz aramaları kapatıyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Tıklama var, telefon yok', url: '/blog/google-ads-tiklama-var-telefon-yok/' },
      },
      {
        soru: 'Galerinin Instagram mesajları neden satışa dönmüyor?',
        ornek:
          'Bir galerinin araç videosu çok izleniyor, art arda “fiyat?” ve “takas olur mu?” mesajı geliyor. Yanıtta yalnız fiyat yazıldığı için görüşme orada bitiyor, kimse aracı görmeye gelmiyor.',
        care: 'İlk yanıtı ve aracı görmeye çağıran adımı hazırlıyor; reklamı galeriye gelebilecek uzaklıktaki kişilere gösteriyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar neden satışa dönmüyor?', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
    ],
  },

  kanallar: {
    baslik: 'Otomotiv firmaları için hangi kanal ne işe yarar?',
    giris:
      'Kanalların ağırlığı işe göre değişir: serviste ve ekspertizde harita, kiralamada arama reklamı, galeride site ve Instagram öne geçer. Hangisiyle başlanacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'google-ads',
        baslik: 'Google Ads: işi ve yeri yazan müşteri',
        metin: 'Aküsü biten, lastiği patlayan ya da hafta sonu için araç kiralayacak kişi Google’a işi ve bulunduğu yeri yazar. Arama reklamı bu kişiye o anda, telefon numaranızla birlikte görünür.',
        maddeler: ['Her iş ve ilçe için ayrı reklam grubu', 'Hizmet bölgesi ve açık saatlerle sınırlı gösterim', 'İş ilanı ve bilgi aramaları negatif listede'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'harita',
        baslik: 'Google İşletme Profili: “en yakın” aramaları',
        metin: 'Lastikçi, akücü, oto yıkama ya da ekspertiz arayan sürücü haritada uzaklığa, açık olup olmadığına, puana ve fotoğraflara bakıp arar. Galeri alıcısı da galerinin yorumlarını burada okur.',
        maddeler: ['Doğru kategoriler ve hizmet listesi', 'Güncel saatler, dükkân ve iş fotoğrafları', 'Yorum isteme ve yanıtlama düzeni'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: stoktaki araç, biten iş',
        metin: 'Galeride yeni gelen aracın videosu, bakım işletmesinde seramik kaplamanın ya da pasta cilanın öncesi ve sonrası Instagram’da izlenir. Reklam bu görüntüyü işletmeye gelebilecek uzaklıktaki kişilere ulaştırır.',
        maddeler: ['Elinizdeki araç ve iş videolarıyla reklam', 'İşletmenin çevresine göre bölge hedefleme', 'İlk mesaja hazır yanıt ve eleme soruları'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi ve SEO: stok, iş ve bölge sayfaları',
        metin: 'Galerinin adını arayan alıcı stoktaki araçları ve galerinin kim olduğunu, servis arayan sürücü yapılan işleri ve adresi görmek ister. Her iş ve ilçe ayrı sayfada yazıldığında Google ve yapay zekâ araçları da işletmenin ne yaptığını okuyabilir.',
        maddeler: ['Galeri için stok vitrini ve araç sayfaları', 'Servis ve kiralama için iş ve bölge sayfaları', 'Telefon, WhatsApp ve randevu düğmeleri'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'Otomotiv firmalarıyla nasıl çalışıyoruz?',
    giris: 'Önce işinizde talebin bugün hangi yoldan geldiğini inceliyor, eksik olanı kuruyor, ardından düzenli optimizasyonla bütçeyi telefona ve randevuya dönen aramalara topluyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'İş kalemleri, bölge ve talep yolu', aciklama: 'Hangi işten kazandığınızı, hangi ilçelere hizmet verdiğinizi ve müşterinin bugün sizi ilan sitesinden mi, haritadan mı, tavsiyeyle mi bulduğunu çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'İşe göre kanal ve sayfa planı', aciklama: 'Acil aramalar, planlı bakım, araç alımı ya da kiralama için hangi kanalın, hangi sayfanın ve hangi başvuru yolunun kullanılacağını planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Profil, sayfalar ve kampanya', aciklama: 'Harita profilini, iş ve bölge sayfalarını, kampanyaları kuruyor; telefon ve WhatsApp düğmelerini yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Arama terimi ve mevsime göre ayar', aciklama: 'Arama terimlerini düzenli okuyor, işe dönmeyenleri kapatıyor; lastik ve klima dönemlerinde bütçeyi o işe kaydırıyoruz.' },
      { ad: 'Hedef', ozet: 'Randevu, rezervasyon ve satış', aciklama: 'Çalışmayı servise giren araçla, kesinleşen rezervasyonla ve galeriye gelip aracı gören alıcıyla değerlendiriyoruz.' },
    ],
  },

  durumlar: {
    baslik: 'Reklama yeni mi başlıyorsunuz, verdiğiniz reklam iş mi getirmiyor?',
    giris: 'Müşterisi sanayideki tabelayı görüp gelen işletmeyle, her ay reklam verdiği hâlde telefonu çalmayan işletmenin ilk işi aynı olmaz.',
    sol: {
      ust: 'Bugüne kadar tavsiyeyle ve ilan sitesiyle iş aldıysanız',
      baslik: 'Önce bulunmayı, sonra tek bir iş için reklamı kuruyoruz',
      metin: 'Harita profili eksik, sitesi olmayan bir işletmede reklamı gören kişi sonraki adımda takılır. İlk adımda profili ve en çok kazandıran işin sayfasını tamamlıyor, reklamı ardından yalnız o iş için açıyoruz.',
      maddeler: [
        { ad: 'Hangi iş, hangi ilçeler?', aciklama: 'Lastik, periyodik bakım, ekspertiz, günlük kiralama ya da stoktaki araçlar. Müşterinin size gelebileceği ilçeler. İlk kampanyanın sınırı bu seçimle çizilir.' },
        { ad: 'Müşteri neyi görünce arar?', aciklama: 'Açık olduğunuz saatler, dükkânın ve yapılan işin fotoğrafları, yorumlar, baktığınız araçlar. Profil ve sayfanın ilk ekranı bunlarla kurulur.' },
        { ad: 'Telefona kim bakacak?', aciklama: 'Usta aracın altındayken çalan telefon çoğu zaman açılmaz. Aramaya ve WhatsApp mesajına kimin, hangi sorularla döneceği yayından önce belirlenir.' },
      ],
      cagri: 'İlk adımı planlayalım',
      bag: { etiket: 'Google yorumları nasıl artırılır?', url: '/blog/google-yorumlari-nasil-artirilir/' },
      cizim: 'alet',
    },
    sag: {
      ust: 'Reklam veriyor ama iş alamıyorsanız',
      baslik: 'Önce bütçenin hangi aramalara gittiğine bakıyoruz',
      metin: 'Yeni kampanya açmadan önce hesabın bugün hangi aramalarda, hangi ilçelerde ve hangi saatlerde para harcadığını görmemiz gerekir.',
      maddeler: [
        { ad: 'Arama terimleri', aciklama: 'Bakmadığınız araçları, yapmadığınız işleri, iş ilanlarını ve “nasıl yapılır” aramalarını ayıklıyoruz.' },
        { ad: 'Bölge ve saat', aciklama: 'Reklamın gösterildiği ilçeleri müşterinin gelebildiği uzaklıkla, yayın saatlerini telefonu açabildiğiniz saatlerle karşılaştırıyoruz.' },
        { ad: 'Açılış sayfası', aciklama: 'Lastik arayan kişi lastik sayfasını mı, genel ana sayfayı mı görüyor? Numaraya tek dokunuşla ulaşılıp ulaşılmadığını telefonda birlikte deniyoruz.' },
        { ad: 'Aramalar ve mesajlar', aciklama: 'Gelen telefonları ve mesajları sizinle sınıflıyor; hangi reklamın randevuya, hangisinin yalnız fiyat sorusuna döndüğüne bakıyoruz.' },
      ],
      cagri: 'Hesabıma birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Aynı sektör, beş ayrı talep yolu',
    metin: [
      'Otomotivde “reklam verelim” kararı tek başına yol göstermez; galerinin, servisin, ekspertizin, kiralama firmasının ve yedek parçacının müşterisi başka yerden gelir. İlk kurulan şey de buna göre değişir.',
      'Tablo genel bir başlangıç sırasını gösteren temsili bir örnektir. İşletmenizde sırayı, incelemede gördüklerimize göre birlikte kesinleştiriyoruz.',
    ],
    tabloBasligi: 'İşe göre ilk adım',
    sutunlar: ['İş', 'İlk adım', 'Gerekçe'],
    satirlar: [
      { ilk: 'Oto galeri', karar: 'Site ve profil', tur: '', gerekce: 'Alıcı aracı ilan sitesinde bulur, aramadan önce galerinin adını Google’a yazar. Stok vitrini olan bir site ve yanıtlanmış yorumlar bu kontrolü karşılar.' },
      { ilk: 'Özel servis ve lastikçi', karar: 'Harita profili', tur: '', gerekce: 'Sürücü işi ve “en yakın” sözünü yazar, haritadan arar. Kategori, hizmet listesi ve saatler tamamlanır; reklam ardından yakın ilçelere açılır.' },
      { ilk: 'Oto ekspertiz', karar: 'Harita ve arama reklamı', tur: '', gerekce: 'Talep alım günü doğar ve aracın bulunduğu ilçede aranır. Profil ve reklam ilçe adıyla kurulur, paket içeriği tek sayfada durur.' },
      { ilk: 'Araç kiralama', karar: 'Arama reklamı', tur: '', gerekce: 'Müşteri fiyat karşılaştırır. Bütçe şehir, havalimanı ve süre yazan aramalara toplanır; sayfa teslim yerini ve koşulları gösterir.' },
      { ilk: 'Yedek parça', karar: 'Parça ve model sayfaları', tur: '', gerekce: 'Alıcı parça kodunu ya da araç modelini yazar. Sayfalar bu adlarla açılır; parçanın araca uyup uymadığı sorusu WhatsApp’a bağlanır.' },
    ],
    not: 'Sıra geneldir. İki işi birlikte yapan işletmede, örneğin hem galerisi hem servisi olan bir firmada, her iş için ayrı düzen kurulur.',
    cizim: 'yol-ayrimi',
  },

  sss: {
    baslik: 'Otomotiv firmaları için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Reklam, harita, web sitesi ve ilan siteleri hakkında galeri, servis, ekspertiz ve kiralama işletmelerinin sorduğu sorular.',
    sorular: [
      {
        soru: 'Otomotiv firmaları için dijital pazarlama nedir?',
        cevap:
          'Otomotiv firmaları için dijital pazarlama; araç almak, kiralamak, bakım ya da onarım yaptırmak isteyen kişilere Google aramalarında, haritada, Instagram’da ve web sitesinde ulaşıp onları telefona, randevuya ya da rezervasyona getiren çalışmaların bütünüdür. Google Ads, Google İşletme Profili, Instagram ve Facebook reklamları, SEO ve web sitesini kapsar. Hangi kanalın öne geçeceği işe göre değişir: serviste harita, kiralamada arama reklamı, galeride site ve Instagram.',
      },
      {
        soru: 'Oto galeri reklamı nereye verilmeli?',
        cevap:
          'Oto galeride araç çoğunlukla ilan sitelerinde arandığı için reklam ilanın yerine geçmez, yanına eklenir. Instagram reklamı stoktaki aracı galeriye gelebilecek uzaklıktaki kişilere gösterir. Google reklamı galerinin adını arayanlara, galeri araç da alıyorsa “aracımı satmak istiyorum” gibi aramalara gösterilir. İlan sitesindeki mağazanızı ve ilanların öne çıkarılmasını siz yönetirsiniz; biz sitenizi, harita profilinizi ve reklamlarınızı kurarız.',
        bag: { etiket: 'Google Ads mi, Instagram reklamı mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Oto galeri web sitesi nasıl olmalı?',
        cevap:
          'Bir oto galeri sitesi stoktaki araçları güncel fotoğraf, kilometre ve ekspertiz bilgisiyle göstermeli; galerinin adresini, çalışma saatlerini ve kiminle görüşüleceğini açıkça yazmalıdır. Alıcı çoğu zaman ilanı gördükten sonra galeriyi araştırır ve sitede güven arar. Her araç sayfasında telefon ve WhatsApp düğmesi bulunur. Stok ve ilan yazılımı kurmuyoruz; araçların sitede nasıl güncelleneceğini kurulumda sizinle belirliyoruz.',
      },
      {
        soru: 'Oto servis reklamı nasıl verilir?',
        cevap:
          'Oto servis reklamı, yapılan işe ve müşterinin gelebileceği ilçelere göre verilir. Sürücü çoğu zaman işi adıyla arar: lastikçi, akücü, oto elektrikçi, rot balans. Bu yüzden her iş için ayrı reklam grubu ve ayrı sayfa açılır, reklam telefonu açabildiğiniz saatlerde gösterilir. Aynı aramada harita da çıktığı için reklamdan önce Google İşletme Profili tamamlanır.',
        bag: { etiket: 'Google reklam nasıl verilir?', url: '/blog/google-reklam-nasil-verilir/' },
      },
      {
        soru: 'Rent a car reklamı ve web sitesi nasıl olmalı?',
        cevap:
          'Rent a car reklamında bütçe “araç kiralama” gibi genel kelimelere dağıtılmaz; şehir, havalimanı ve kiralama süresi yazan aramalara toplanır. Genel aramalarda ilk sıraları büyük kiralama markaları ve karşılaştırma siteleri alır. Site her teslim noktası için ayrı sayfa açmalı; depozito, kilometre sınırı ve ehliyet şartı gibi koşulları rezervasyondan önce göstermelidir. Rezervasyon yazılımını sağlayıcınız yürütür; biz sayfayı ve reklamı o adıma bağlarız.',
      },
      {
        soru: 'Oto yedek parça satan işletme internette nasıl bulunur?',
        cevap:
          'Yedek parça, parça koduyla ya da araç modeli ve parça adıyla aranır; bu yüzden her parça grubu ve model için ayrı sayfa hazırlanır. Alıcının ilk sorusu parçanın aracına uyup uymadığıdır; şase numarasıyla sorulan bu soru WhatsApp’a ya da telefona bağlanır. Sepet ve ödeme altyapısını ve pazaryeri mağazanızı siz ya da sağlayıcınız yürütür; biz parça ve model sayfalarını, harita profilinizi ve reklamlarınızı kurarız.',
      },
      {
        soru: 'Lastik ve klima gibi mevsimlik işlerde reklam ne zaman verilmeli?',
        cevap:
          'Arama yükselmeden önce hazır olacak şekilde verilmelidir. Ölçtüğümüz aramalarda “kış lastiği” ekim ve kasım aylarında, “oto klima gazı dolumu” haziran ve temmuzda yükseliyor. Reklam, sayfa ve harita profilindeki hizmet bilgisi bu aylardan önce tamamlanır; dönem geçince bütçe yıl boyu aranan işlere kaydırılır.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi işletmenizin adına açılır ve sizde kalır. Reklam hesabı, Google İşletme Profili, alan adı ve site işletmenize aittir; bize yönetici erişimi verirsiniz ve bu erişimi dilediğiniz zaman kaldırabilirsiniz. İlan sitesindeki mağazanız ile rezervasyon ya da stok yazılımınız da sizde kalır; onları biz yönetmeyiz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Telefon sayısı, randevu, rezervasyon, satış ya da haritadaki sıra için söz vermiyoruz. Söz verdiğimiz şey işletmenizi ve hesabınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['google-isletme-profili-nasil-acilir', 'google-ads-tiklama-var-telefon-yok'],
    sektorler: ['insaat-ve-yapi', 'uretim-ve-ihracat'],
  },
};

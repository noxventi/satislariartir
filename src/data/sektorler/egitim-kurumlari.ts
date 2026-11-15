/**
 * Eğitim kurumları sektörü.
 * Ana niyet: "eğitim kurumları için dijital pazarlama", "özel okul reklamı", "okul web sitesi", "anaokulu reklamı".
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026).
 * Referanslar: Hun Education (yalnız reklam yönetimi; site ekibin tasarımı değildir), Yurt Dışı Eğitim Rehberim, EduRegist,
 * İlk Günebakan (reklam referansı olarak anılmaz).
 * Dil: çocuklara yönelik reklam ve kişisel veri konusunda temkinli; öğrenci başarısı ya da sınav vaadi yazılmaz.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 2,
  kimlik: 'egitim-kurumlari',
  ad: 'Eğitim kurumları',
  kimler: 'Özel okullar ve anaokulları, kurslar ve dil okulları, yurt dışı eğitim danışmanlıkları, özel eğitim merkezleri',
  ozet: 'Kayıt döneminden aylar önce araştırmaya başlayan veliyi ve adayı, okul gezisine ya da tanışma görüşmesine getiren reklam, harita ve site düzeni.',
  baslik: 'Eğitim kurumları için dijital pazarlama',
  metaBaslik: 'Eğitim Kurumları için Dijital Pazarlama',
  metaAciklama:
    'Özel okul, anaokulu, kurs ve yurt dışı eğitim danışmanlıkları için Google Ads, Instagram reklamları, harita profili, SEO ve web sitesi: veliyi görüşmeye getiren kurulum.',
  tanim: [
    'Eğitim kurumları için dijital pazarlama, okul, kurs ya da yurt dışı programı arayan veli ve öğrencinin karşısına araştırma yaptığı sırada çıkma ve onu tanışma görüşmesine, okul gezisine ya da ön kayda getirme işidir.',
    'Bu sektörde kararı çoğu zaman veli verir ya da öğrenciyle birlikte verir, araştırma da kayıt döneminden aylar önce başlar. Veli okulu görmek ve biriyle konuşmak ister; yurt dışı eğitimde aday ülkeyi ve programı uzun süre araştırır. Reklamı, harita profilini ve siteyi bu takvime ve ilk görüşmeye göre kuruyoruz.',
    'Özel okullar ve anaokulları, kurslar ve dil okulları, yurt dışı eğitim danışmanlıkları ve özel eğitim merkezleriyle çalışıyoruz.',
  ],
  gorselAlt:
    'Kâğıttan çan kuleli bir okul; önünde dev bir açık kitap, küre ve mezuniyet kepleri. Sırt çantalı öğrenciler ve çocuğunun elinden tutan bir veli, kırmızı kalem çizgisini izleyerek okulun kapısına yürüyor',
  cagri: 'Kurumum için görüşelim',
  kanal: 'belirsiz',

  aramalar: {
    baslik: 'Eğitimde veliler ve öğrenciler Google’da ne arıyor?',
    giris: 'Veli ve öğrenci çoğu zaman kurumun adını bilmez; Google’a aradığı kurumun türünü yazar.',
    liste: [
      { ifade: 'anaokulu', hacim: 49500 },
      { ifade: 'ingilizce kursu', hacim: 40500 },
      { ifade: 'kreş', hacim: 33100 },
      { ifade: 'özel okul', hacim: 18100 },
      { ifade: 'özel okul fiyatları', hacim: 4400 },
      { ifade: 'dil okulu', hacim: 3600 },
      { ifade: 'yurtdışı eğitim', hacim: 1600 },
      { ifade: 'yurtdışı eğitim danışmanlığı', hacim: 1600 },
      { ifade: 'macaristan üniversiteleri', hacim: 720 },
      { ifade: 'yurtdışında yüksek lisans', hacim: 320 },
    ],
    yorum: [
      'Listenin başındaki “anaokulu”, “kreş” ve “ingilizce kursu” yakındaki kurumu bulmak için yazılır; Google bu aramalarda çoğu zaman önce haritayı gösterir. “Özel okul fiyatları” velinin okulu aramadan önce ücreti öğrenmek istediğini söyler. Yurt dışı eğitim aramaları daha az yapılır ama arkasında aylar süren bir karar vardır: “macaristan üniversiteleri” yazan aday ülkesini seçmiş, okul ve program arıyordur.',
      'Bu yüzden iki ayrı düzen kuruyoruz. Yakınında kurum arayan veli için harita profilini, yorumları ve okul gezisi adımını; aylarca araştıran aday için ülke ve program sayfalarını, soru sorabileceği WhatsApp ya da form yolunu hazırlıyoruz. Ücret sorusunu da yanıtsız bırakmamayı öneriyoruz: rakam yazılmasa bile ücretin neye göre değiştiği ve bilginin nasıl alınacağı sayfada yer alabilir.',
    ],
  },

  sorunlar: {
    baslik: 'Okul ve kurs yöneticilerinden en sık duyduğumuz sorular',
    giris: 'İlk kez reklam verecek kurum da, yıllardır veren de benzer sorularla geliyor. Altı soruyu ve her birinde ilk baktığımız yeri yazdık.',
    kartlar: [
      {
        soru: 'Özel okul reklamı ne zaman verilmeli?',
        ornek:
          'Bir özel okul reklamı kayıtların açıldığı hafta başlatıyor. Veliler ise okulları aylar önce araştırmış, gezmiş ve çoğu kararını vermiş oluyor.',
        care: 'Reklam ve içerik takvimini velinin araştırmaya başladığı aylardan başlatıp kayıt dönemine doğru yoğunlaştırıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Formu dolduran veliler neden okula gelmiyor?',
        ornek:
          'Bir kolejin reklam formuna onlarca veli adını bırakıyor. Okul günler sonra aradığında çoğu formu hatırlamıyor, bir kısmı başka bir okulu gezmiş oluyor.',
        care: 'Formda sınıf düzeyini ve uygun görüşme gününü soruyor, başvuruyu okul gezisi randevusuna bağlayan düzeni kuruyoruz.',
        cizim: 'zarf',
        bag: { etiket: 'Form mu, WhatsApp mı?', url: '/blog/meta-reklam-formu-mu-whatsapp-mi/' },
      },
      {
        soru: 'Anaokulum Google Haritalar’da neden çıkmıyor?',
        ornek:
          'Bir veli telefonuna “anaokulu” yazıyor ve haritada evine yakın kurumları görüyor. İki sokak ötedeki anaokulunun profili doğrulanmamış, kategorisi de yanlış seçilmiş; listede yok.',
        care: 'Profilin doğrulanmasında size eşlik ediyor; kategori, saat ve fotoğrafları tamamlayıp yorumlara yanıt düzenini kuruyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'İşletme profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Yurt dışı eğitim soranlar neden kayıt olmuyor?',
        ornek:
          'Bir danışmanlık ofisine her gün “yurt dışında yüksek lisans şartları neler” diye mesaj geliyor. Yanıt her seferinde elle yazılıyor; aday aylarca düşünürken ofisin adını unutuyor.',
        care: 'Sık gelen soruları ülke ve program sayfalarında yanıtlıyor, ilk mesajda sorulacak soruları ve adayın sonraki adımını belirliyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar neden satışa dönmüyor?', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Kurs reklamı Google’a mı, Instagram’a mı verilmeli?',
        ornek:
          'Bir dil kursu iki kanala aynı görseli veriyor. Google’da “ingilizce kursu” yazan kişi kur ve saat bilgisi arıyor, Instagram’da gören ise henüz kursa yazılmayı düşünmüyor.',
        care: 'Arayan kişiye kur, saat ve şube bilgisini veren arama reklamını, tanıtım için sınıfı gösteren görsel reklamı ayrı kuruyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Google Ads mi, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Okul sitemiz var, neden görüşme isteyen yok?',
        ornek:
          'Bir anaokulunun sitesi kurucunun mesajıyla açılıyor; günlük program, sınıf mevcudu ve servis bilgisi yok. Veli aradığını bulamayınca görüşme istemeden çıkıyor.',
        care: 'Velinin sorduğu soruları sayfalara yerleştiriyor, her sayfaya tanışma görüşmesi ya da okul gezisi adımını koyuyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  kanallar: {
    baslik: 'Eğitim kurumları için hangi kanal ne işe yarar?',
    giris:
      'Yakınında anaokulu arayan veli ile yurt dışında program araştıran aday aynı yoldan gelmez. Dördünü birden açmak gerekmez; hangisiyle başlanacağını kurumunuzun türüne ve kayıt takviminize bakarak birlikte seçiyoruz.',
    liste: [
      {
        tur: 'google-ads',
        baslik: 'Google Ads: kurum arayan veli ve aday',
        metin: 'Kayıt dönemi yaklaşırken veli aradığı kurumun türünü ve semtini Google’a yazar. Arama reklamı ona tam bu sırada görünür.',
        maddeler: ['Kayıt takvimine göre açılıp kısılan kampanyalar', 'Öğretmen ilanı ve ücretsiz kurs aramaları negatif listede', 'Şube ve servis bölgesine göre hedefleme'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: okulu gezmeden göstermek',
        metin: 'Veli görüşmeye gelmeden önce sınıfı, bahçeyi ve öğretmenleri görmek ister. Görsel reklam, henüz aramaya başlamamış veliye kurumunuzu tanıtır.',
        maddeler: ['Sınıfı, bahçeyi ve etkinlikleri gösteren görseller', 'Tanışma günü ve okul gezisi için form', 'Öğrenci görseli yalnız veli izniyle'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'harita',
        baslik: 'Google Haritalar: yakınında kurum arayan veli',
        metin: 'Anaokulu, kreş ve kurs aramalarında veli önce haritaya, fotoğraflara ve yorumlara bakar. Okula nasıl gidileceği ve hangi numaranın aranacağı da bu profilde yazar.',
        maddeler: ['Kategori, adres, saat ve fotoğrafların tamamlanması', 'Veli yorumlarına yanıt düzeni', 'Her şube için ayrı profil ve sayfa'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi ve SEO: velinin sorularına cevap',
        metin: 'Veli ve aday karar vermeden önce program, ücret, servis ve kabul koşullarını okur. Cevaplar sitenizde açıkça yazıyorsa Google aramalarında ve yapay zekâ yanıtlarında bulunabilirsiniz.',
        maddeler: ['Kademe, program ve ülke sayfaları', 'Görüşme ve okul gezisi talep formu', 'Yapay zekâ yanıtları için net kurum bilgisi'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'Eğitim kurumlarıyla nasıl çalışıyoruz?',
    giris: 'İşe kayıt takviminizi ve velinin karar sürecini inceleyerek başlıyor, bulduklarımıza göre kuruyor, kayıt dönemi boyunca düzenli optimizasyon yapıyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Kayıt takvimi, bölge ve aramalar', aciklama: 'Kayıtların hangi aylarda geldiğini, öğrencilerinizin hangi semtlerden geldiğini ve velinin sizi hangi sözlerle aradığını çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'Döneme göre kanal planı', aciklama: 'Araştırma aylarında hangi içeriğin, kayıt döneminde hangi reklamın yayında olacağını ve başvurunun hangi adıma ineceğini planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Kampanya, profil, sayfa ve form', aciklama: 'Kampanyaları, harita profilini, program sayfalarını ve görüşme formunu kuruyor; yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Başvuruya göre düzenli iyileştirme', aciklama: 'Gelen başvuruları kayıt ekibinizle birlikte değerlendiriyor, görüşmeye dönmeyen aramaları ve kitleleri kapatıp bütçeyi dönenlere ayırıyoruz.' },
      { ad: 'Hedef', ozet: 'Görüşme ve kayıt', aciklama: 'Başarıyı form sayısıyla ölçmüyoruz; okul gezisine, tanışma görüşmesine ve kayda dönen başvurulara bakıyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'Eğitim alanında çalıştığımız markalar',
    giris: 'Yurt dışı eğitim danışmanlığından özel eğitim merkezine, eğitim alanında yürüttüğümüz dört iş.',
    liste: [
      {
        kimlik: 'hun-education',
        not: 'Projede yalnız reklam yönetimi yer aldı; web sitesi ekibimizin tasarımı değildir. Kampanyalar, Macaristan’da program arayan adayın reklamdan başvuru adımına nasıl ulaşacağı sorusuna göre düzenlendi.',
      },
      {
        kimlik: 'yurt-disi-egitim-rehberim',
        not: 'Site, ülke ve program araştıran okurun içerikten danışmanlığa nasıl geçeceği sorusu etrafında kuruldu. Projede web tasarım ve SEO yer aldı.',
      },
      {
        kimlik: 'eduregist',
        not: 'EduRegist, eğitim danışmanlıkları için hazırlanmış bir CRM ürünüdür. Tanıtım sitesi, ürünün danışmanlık ofislerine nasıl anlatılacağı sorusuna göre kuruldu; projede web tasarım ve CRM yapısı yer aldı.',
      },
      {
        kimlik: 'ilk-gunebakan',
        not: 'Site, özel eğitim arayan ailenin kurumun hizmetlerini nasıl bulacağı sorusu etrafında kuruldu. Projede web tasarım ile SEO ve GEO çalışması yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'İlk kez mi reklam vereceksiniz, verip kayıt mı alamıyorsunuz?',
    giris: 'Kayıtlarını bugüne kadar tavsiyeyle alan kurumla, reklam verdiği hâlde sınıfı dolmayan kurumun ilk işi aynı olmaz.',
    sol: {
      ust: 'Kayıtları bugüne kadar tavsiyeyle aldıysanız',
      baslik: 'İlk çalışmayı tek kademe ve tek dönem için kuruyoruz',
      metin: 'Bütün kademelere ya da bütün kur programlarına aynı anda reklam verildiğinde bütçe hiçbirine yetmez. İlk adımda kontenjanı en çok boş kalan kademeyi ya da programı seçip yalnız onun için reklam, sayfa ve görüşme adımı hazırlıyoruz.',
      maddeler: [
        { ad: 'Hangi kademe, hangi semtler?', aciklama: 'Anaokulu, ilkokul, hafta sonu kuru ya da tek bir ülke programı. Öğrencilerinizin geldiği semtler ve servis güzergâhı ilk kampanyanın sınırını çizer.' },
        { ad: 'Veli neyi görünce görüşme ister?', aciklama: 'Sınıflar, günlük program, öğretmenler ve ücretin neye göre değiştiği. Sayfanın ilk ekranı bu sorulara göre kurulur.' },
        { ad: 'Başvuruya kim, ne zaman dönecek?', aciklama: 'Formu kayıt ofisinde kim görecek, veliye hangi gün ve saat önerilecek? Yanıt düzeni yayından önce hazırlanır.' },
      ],
      cagri: 'Kayıt dönemini planlayalım',
      bag: { etiket: 'Google Ads mi, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      cizim: 'megafon',
    },
    sag: {
      ust: 'Reklam veriyor ama kayıt alamıyorsanız',
      baslik: 'Önce başvuruların nerede kaybolduğunu inceliyoruz',
      metin: 'Kayıt gelmiyorsa sorun reklamda, sayfada ya da başvurudan sonraki aramada olabilir. Yeni kampanya açmadan önce hangisinde olduğunu buluyoruz.',
      maddeler: [
        { ad: 'Arama terimleri', aciklama: 'Öğretmen ilanı, ücretsiz kurs ya da etkinlik fikri gibi kayıt getirmeyen aramaları ayıklıyoruz.' },
        { ad: 'Başvuru ile görüşme arası', aciklama: 'Form geldikten sonra veliye kimin, nasıl döndüğüne ve hangi başvuruların okul gezisine çıktığına sizinle birlikte bakıyoruz.' },
        { ad: 'Açılış sayfası', aciklama: 'Reklamdaki kademe ile sayfanın ilk ekranı aynı programı mı anlatıyor? Telefonda birlikte deniyoruz.' },
        { ad: 'Takvim ve bölge', aciklama: 'Reklamın yayında olduğu ayları ve gösterildiği semtleri, kayıtların geldiği dönem ve bölgelerle karşılaştırıyoruz.' },
      ],
      cagri: 'Başvurulara birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Aynı kelimeyi veli de yazar, iş arayan öğretmen de',
    metin: [
      'Eğitimde aynı kelimenin içinden okul arayan veli de çıkar, iş arayan öğretmen de, etkinlik fikri arayan da. Bütçeyi görüşme isteyen veliye toplamak için her aramaya ayrı bir karar yazılır.',
      'Tablo bir özel anaokulu için hazırlanmış temsili bir örnektir; kendi hesabınızda aynısını gerçek arama terimlerinizle çıkarıyoruz.',
    ],
    tabloBasligi: 'Özel anaokulu için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'özel anaokulu kayıt', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Kayıt yaptırmaya yakın. Bütçe bu aramaya toplanır, reklam okul gezisi sayfasını açar.' },
      { ilk: 'yarım gün anaokulu', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Programı belli, kurum arıyor. Reklam yarım gün programının saatlerini anlatan sayfayı açar.' },
      { ilk: 'anaokulu fiyatları', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Ücreti öğrenmek istiyor. Ücretin neye göre değiştiğini anlatan sayfaya iner; görüşmeye dönüp dönmediğine göre karar verilir.' },
      { ilk: 'anaokulu etkinlikleri', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Etkinlik fikri arıyor. Kayıt kampanyasında reklam gösterilmez.' },
      { ilk: 'anaokulu öğretmeni iş ilanları', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'İş arıyor. Negatif anahtar kelime olur.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Eğitim kurumları için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Kayıt dönemi, harita, web sitesi ve öğrenci görselleri hakkında okul ve kurs yöneticilerinden en çok duyduklarımız.',
    sorular: [
      {
        soru: 'Eğitim kurumları için dijital pazarlama nedir?',
        cevap:
          'Eğitim kurumları için dijital pazarlama; okul, kurs ya da yurt dışı programı araştıran veli ve öğrenciye Google aramalarında, haritada, Instagram’da ve web sitesinde ulaşıp onu tanışma görüşmesine ya da ön kayda getiren çalışmaların bütünüdür. Google Ads, Instagram ve Facebook reklamları, Google İşletme Profili, SEO ve web sitesini kapsar.',
      },
      {
        soru: 'Özel okul reklamı ne zaman verilmeli?',
        cevap:
          'Kayıt döneminden aylar önce, velinin araştırmaya başladığı sırada. Veli okulları kayıt açılmadan önce karşılaştırır ve gezer; reklam yalnız kayıt haftasında yayındaysa kararını vermiş veliye ulaşır. Araştırma aylarında tanıtım ve içerik, kayıt yaklaşırken görüşme talebi kampanyaları ağırlık kazanır.',
      },
      {
        soru: 'Anaokulu ve kreşler Google’da nasıl bulunur?',
        cevap:
          'Çoğunlukla harita sonuçlarından. Veli “anaokulu” ya da “kreş” yazdığında Google yakındaki kurumları haritayla birlikte listeler; veli fotoğraflara, yorumlara ve mesafeye bakar. Bu yüzden ilk iş Google İşletme Profilini eksiksiz doldurmak, ardından semt ve program bilgisini sitede açıkça yazmaktır.',
        bag: { etiket: 'Google İşletme Profili nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Okul web sitesi nasıl olmalı?',
        cevap:
          'Bir okul sitesi velinin görüşmeden önce sorduğu soruları yanıtlamalı ve her sayfada tanışma görüşmesi ya da okul gezisi adımını sunmalıdır. Kademeler, günlük program, servis ve yemek bilgisi, ücretin neye göre değiştiği ve okulun fotoğrafları ayrı ayrı bulunabilmelidir. Site çoğu zaman telefondan açıldığı için form ve arama düğmesi dar ekranda denenmelidir.',
      },
      {
        soru: 'Özel okul fiyatları sitede yazılmalı mı?',
        cevap:
          'Rakamı yazıp yazmamak kurumunuzun kararıdır, ancak ücret sorusu sayfada yanıtsız kalmamalıdır. “Özel okul fiyatları” Türkiye’de ayda yaklaşık 4.400 kez aranıyor; veli görüşmeye gelmeden önce bir fikir edinmek istiyor. Rakam yazmak istemeyen kurumlar ücretin kademeye göre nasıl değiştiğini, nelerin dahil olduğunu ve bilginin görüşmede nasıl verileceğini yazabilir.',
      },
      {
        soru: 'Yurt dışı eğitim danışmanlıkları öğrenciye nasıl ulaşır?',
        cevap:
          'Adayın araştırdığı ülke ve program sorularını yanıtlayan sayfalarla ve soruyu kolayca sorabileceği bir WhatsApp ya da form yoluyla. Yurt dışı eğitimde karar aylar sürer; aday ülkeyi, üniversiteyi ve programı araştırır, sorusunu çoğu zaman yazarak sorar. Bu yüzden ülke ve program içerikleri SEO ile, başvuruya yakın aramalar reklamla karşılanır.',
        bag: { etiket: 'Hun Education projesini inceleyin', url: '/calismalarimiz/hun-education/' },
      },
      {
        soru: 'Okul reklamlarında öğrenci fotoğrafı kullanılabilir mi?',
        cevap:
          'Velinin yazılı izni olmadan kullanılmasını önermiyoruz. Reklamlarda sınıfı, bahçeyi, etkinlik alanını ve öğretmenleri göstermek çoğu zaman yeterlidir; reklamı da çocuğa değil, kararı veren veliye yöneltiyoruz. İzin metni ve kişisel verilerin korunmasıyla ilgili hukuki değerlendirme kurumunuzun hukuk danışmanına aittir.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi kurumunuzun adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; reklam hesabı, Google İşletme Profili, alan adı, site ve geçmiş veriler kurumunuza aittir. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Kayıt sayısı, başvuru sayısı ya da sıralama için söz vermiyoruz. Söz verdiğimiz şey kurumunuzu ve hesabınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['google-ads-mi-instagram-reklami-mi', 'meta-reklam-formu-mu-whatsapp-mi'],
    sektorler: ['saglik-ve-klinikler', 'otel-ve-konaklama'],
  },
};

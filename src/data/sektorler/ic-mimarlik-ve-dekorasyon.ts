/**
 * İç mimarlık ve dekorasyon.
 * Ana niyet: "iç mimarlık ve dekorasyon firmaları için dijital pazarlama"; iç mimarlık ofisleri, dekorasyon ve dizayn firmaları,
 * mutfak ve mobilya tasarımcıları, tadilat firmaları. Site sahibi bu sektörü "dizayn firmaları" diye anıyor; söz metinde geçer.
 * Arama hacimleri: Türkiye, aylık yaklaşık (OpenSEO ölçümü, 15 Kasım 2026). İşletme sahibinin yazdığı ifadelerde
 * ("iç mimarlık ofisi reklam", "dekorasyon firması web sitesi", "iç mimar nasıl müşteri bulur" vb.) ölçülebilir hacim çıkmadı;
 * bu yüzden pano yalnız firmanın müşterisinin aramalarıyla kuruldu, işletme sahibinin soruları kartlarda ve sık sorulanlarda yanıtlandı.
 * Referans yok: referanslar alanı yazılmadı.
 * Kapsam: fotoğraf ve video çekimi, üç boyutlu görselleştirme, sosyal medya içerik üretimi ve hesap yönetimi vaat edilmez.
 * Görselleri firma sağlar; anlatılan iş reklam, reklamda görselin denenmesi, ilk yanıt düzeni, SEO ve keşif talebine götüren sitedir.
 * İnşaat ve yapı sayfasından ayrım: orada model ve arsa, burada mekânın içi, beğeni ve görsel karar.
 * Meslek kuralı kontrolü (15 Kasım 2026): TMMOB İçmimarlar Odası Ana Yönetmeliği, Serbest İçmimarlık Hizmetlerini Uygulama,
 * Tescil ve Mesleki Denetim Yönetmeliği (RG 16.09.2008, 26999), Odanın Web ve Sosyal Medya Yönergesi ile TMMOB Disiplin
 * Yönetmeliği resmî kaynaktan okundu; reklamı yasaklayan bir hüküm bulunmadı (Mimarlar Odasındaki m. 7(c) benzeri yok).
 * Ana Yönetmelik m. 8 üyeye "meslekî davranış ilkelerine" uyma ve "onura aykırı biçimde meslekî rekabet yapmama" yükümlülüğü
 * getiriyor; Genel Kurulun belirleyebileceği ayrı bir etik kurallar metni Odanın sitesinde yayımlı değil. Bu yüzden reklam
 * kartları duruyor, sık sorulanlarda oda üyesine kuralları ayrıca kontrol etmesi öneriliyor. kuralNotu kullanılmadı.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 11,
  kimlik: 'ic-mimarlik-ve-dekorasyon',
  ad: 'İç mimarlık ve dekorasyon',
  kimler: 'İç mimarlık ofisleri, dekorasyon ve dizayn firmaları, mutfak ve mobilya tasarımcıları, tadilat firmaları',
  ozet: 'Beğenip kaydeden ile keşif isteyen kişiyi ayıran, bitmiş işi gittiğiniz ilçelerde gösteren reklam ve site düzeni.',
  baslik: 'İç mimarlık ve dekorasyon firmaları için dijital pazarlama',
  metaBaslik: 'İç Mimarlık Ofisleri için Dijital Pazarlama',
  metaAciklama:
    'İç mimarlık ofisleri, dekorasyon, dizayn ve tadilat firmaları için Instagram reklamı, Google Ads, SEO ve web sitesi: bitmiş işi keşif talebine götüren kurulum.',
  tanim: [
    'İç mimarlık ve dekorasyon firmaları için dijital pazarlama, evini ya da iş yerini yeniletmek isteyen kişiye bitmiş işlerinizi gösterme ve bu beğeniyi keşif ve ölçü randevusuna taşıma işidir.',
    'Bu işte karar gözle verilir. Müşteri haftalarca Instagram’da, Pinterest’te ve Google Görseller’de fikir toplar; firma seçerken bitmiş işin fotoğrafına, öncesine ve sonrasına, kendi ilçesinde yapılmış işe bakar ve çoğu zaman mesajla yazar. Reklamı, proje sayfalarını ve ilk yanıtı bu sıraya göre kuruyoruz.',
    'İç mimarlık ofisleri, dekorasyon ve dizayn firmaları, mutfak ve mobilya tasarımcıları ve tadilat firmalarıyla çalışıyoruz.',
  ],
  gorselAlt:
    'Önü açık kâğıt bir ev kesiti: içinde koltuk, berjer, lambader, kitaplık ve halı olan aydınlık bir salon. Önünde renk kartelası, kumaş örnekleri ve mezura duruyor; kırmızı kalem çizgisi, biri rulo plan taşıyan üç kişiyi kapıya götürüyor.',
  cagri: 'Firmam için görüşelim',
  kanal: 'meta',

  aramalar: {
    baslik: 'İç mimarlık ve dekorasyonda müşteriler Google’da ne arıyor?',
    giris: 'Evini yeniletecek kişi aramaya firmadan başlamaz; önce odanın nasıl görünebileceğine bakar.',
    liste: [
      { ifade: 'mutfak dolabı modelleri', hacim: 74000 },
      { ifade: 'ev dekorasyonu', hacim: 12100 },
      { ifade: 'iç mimar', hacim: 12100 },
      { ifade: 'salon dekorasyonu', hacim: 4400 },
      { ifade: 'banyo tadilatı', hacim: 1900 },
      { ifade: 'ofis dekorasyonu', hacim: 1900 },
      { ifade: 'mutfak dizayn', hacim: 1000 },
      { ifade: 'ankara iç mimar', hacim: 1000 },
      { ifade: 'iç mimarlık ofisi', hacim: 880 },
      { ifade: 'dekorasyon firmaları', hacim: 170 },
    ],
    yorum: [
      'Listenin üstündekiler görsel aramalardır: “mutfak dolabı modelleri” ya da “salon dekorasyonu” yazan kişi fotoğraf bakıyor, işi ne zaman yaptıracağı belli değil. “İç mimar” yazanların bir kısmı da mesleği, bölümü ve maaşını araştıran öğrencidir. Firma arayan kişi işin ya da şehrin adını ekler: “banyo tadilatı”, “ofis dekorasyonu”, “ankara iç mimar”. Aynı iş “dizayn” sözüyle de aranır; “mutfak dizayn” bunun örneğidir.',
      'Bundan iki karar çıkarıyoruz. Arama reklamında bütçeyi işin ve bölgenin adını taşıyan aramalara topluyor, model ve fikir aramalarını ayrı tutuyoruz. Fikir toplayan kalabalığa Instagram reklamıyla ve sitedeki proje sayfalarıyla, bitmiş işin fotoğrafıyla görünüyoruz; sayfa başlıklarını yazarken dekorasyon, tasarım ve dizayn sözlerinden hangisinin arandığına bakıyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'İç mimarlık ve dekorasyon firmalarından en sık duyduğumuz sorular',
    giris: 'Beğeni ve mesaj çok, keşfe dönen talep az olduğunda sorular şu altı başlıkta toplanıyor. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Fiyat sorup kaybolan müşteriye ne yazmalıyım?',
        ornek:
          'Bir dekorasyon firmasının salon videosuna her gün “fiyat?” diye yazılıyor. Firma “keşif yapmadan fiyat veremiyoruz” diye yanıtlıyor, konuşma orada bitiyor.',
        care: 'İlçeyi, mekânın türünü ve zamanı soran, ardından keşif günü öneren ilk yanıtı hazırlıyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar neden satışa dönmüyor?', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Keşfe gidiyorum, neden iş alamıyorum?',
        ornek:
          'Bir tadilat firması haftada birkaç keşfe gidiyor. Adreslerin bir kısmı hizmet vermediği ilçede çıkıyor, bir kısmında ev sahibi yalnız tek duvarı boyatmak istiyor.',
        care: 'Reklamı gittiğiniz ilçelerle sınırlıyor, formda ve ilk mesajda işin kapsamını ve zamanını soruyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Form mu, WhatsApp mı?', url: '/blog/meta-reklam-formu-mu-whatsapp-mi/' },
      },
      {
        soru: 'İç mimarlık reklamında hangi görsel kullanılmalı?',
        ornek:
          'Bir iç mimarlık ofisi reklamda en beğendiği üç boyutlu çizimi kullanıyor; yazanlar “bu gerçek mi” diye soruyor. Teslim ettiği bir mutfağın öncesi ve sonrası ise hesabın altlarında kalmış.',
        care: 'Sizin sağladığınız çizimi, bitmiş iş fotoğrafını ve öncesi sonrasını aynı kitlede deniyor, keşif talebi getireni öne alıyoruz.',
        cizim: 'kreatif',
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Google’da şehrimin adıyla “iç mimar” yazınca neden çıkmıyorum?',
        ornek:
          'Ankara’da çalışan bir ofisin sitesinde tek bir “projelerimiz” sayfası var; fotoğrafların yanında ne ilçe ne de işin türü yazıyor. “ankara iç mimar” diye arayan kişinin açacağı bir sayfa yok.',
        care: 'Her iş türü ve hizmet bölgesi için sayfa planlıyor, proje fotoğraflarını ilçesi ve kapsamıyla birlikte yazıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Instagram hesabım varken web sitesi gerekli mi?',
        ornek:
          'Bir mutfak tasarımcısı bütün işlerini Instagram’da paylaşıyor. Hesabı beğenen çift firmanın adını Google’a yazınca adresi, çalışılan ilçeleri ve ölçü alma sürecini anlatan bir sayfa bulamıyor.',
        care: 'Bitmiş işleri oda ve iş türüne göre ayıran, her projeden keşif talebine götüren siteyi kuruyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Reklamda proje çizimini mi, anahtar teslim işi mi anlatmalıyım?',
        ornek:
          'Tavsiyeyle iş alan bir ofis ilk reklamına “iç mimarlık hizmetleri” yazıyor. Yazanlar arasında yalnız çizim isteyen de, tek odasını boyatacak olan da, evini baştan yaptıracak olan da var.',
        care: 'En çok kazandıran iş türünüzü seçip ilk kampanyayı, görseli ve formu yalnız onun için kuruyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'İlk kampanyayı planlayalım', url: '#baslangic' },
      },
    ],
  },

  kanallar: {
    baslik: 'İç mimarlık ve dekorasyon firmaları için hangi kanal ne işe yarar?',
    giris:
      'Müşteri önce görür, sonra arar, en son yazar. Dört kanalın her biri bu sıranın bir yerine denk gelir; hangisiyle başlanacağını incelemeden sonra, iş türünüze ve bölgenize bakarak birlikte seçiyoruz.',
    liste: [
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: bitmiş işi göstermek',
        metin: 'Evini yeniletmeyi düşünen kişi firma aramadan önce beğendiği işleri kaydeder. Reklam, teslim ettiğiniz işi hizmet verdiğiniz ilçelerde yaşayanların akışına getirir.',
        maddeler: ['Sizin fotoğraflarınızla görsel denemeleri', 'Mesaj ve keşif formu için ayrı kampanyalar', 'İlçeyi ve kapsamı soran hazır ilk yanıt'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'google-ads',
        baslik: 'Google Ads: işi ve şehri yazan aramalar',
        metin: 'Firma seçme aşamasına gelen kişi Google’a işin ve yerin adını yazar: “banyo tadilatı”, “ankara iç mimar”. Arama reklamı o anda görünür.',
        maddeler: ['Model ve fikir aramaları ayrı kampanyada', 'Öğrenci, iş ilanı ve hazır ürün aramaları negatif listede', 'Keşfe gidebildiğiniz ilçelere göre hedefleme'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'seo',
        baslik: 'SEO ve harita: ilçe ve iş türü aramaları',
        metin: 'Şehir ya da ilçe adıyla arayan kişiye Google çoğu zaman önce haritayı, ardından siteleri gösterir. Proje fotoğrafları da görsel aramada tek tek bulunur.',
        maddeler: ['Her iş türü ve hizmet bölgesi için sayfa', 'Proje fotoğraflarında ilçe ve kapsam bilgisi', 'Google İşletme Profili ve yorum düzeni'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi: proje sayfasından keşif talebine',
        metin: 'Instagram’da beğenen kişi karar vermeden önce firmanın adını Google’a yazar. Site, işleri oda ve iş türüne göre gösterir ve keşif talebini alır.',
        maddeler: ['Öncesi ve sonrasıyla proje sayfaları', 'İlçeyi, metrekareyi ve zamanı soran keşif formu', 'Büyük fotoğrafların telefonda çabuk açılması'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'İç mimarlık ve dekorasyon firmalarıyla nasıl çalışıyoruz?',
    giris: 'Önce hangi işten kazandığınızı ve müşterinin size hangi yoldan yazdığını inceliyor, sonra kuruyor, ardından düzenli optimizasyonla keşif ve sözleşme hedefinize yaklaştırıyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'İş türleri, ilçeler ve mesajlar', aciklama: 'Hangi iş türünden kazandığınızı, keşfe gidebildiğiniz ilçeleri ve son dönemde gelen mesajların hangi soruda kesildiğini çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'Görene ve arayana ayrı plan', aciklama: 'Fikir toplayan kişiye hangi işin gösterileceğini, firma arayan kişiye hangi aramada görünüleceğini ve talebin mesajla mı formla mı alınacağını planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Kampanya, sayfa, ilk yanıt', aciklama: 'Kampanyaları sizin fotoğraflarınızla kuruyor; proje sayfalarını, keşif formunu ve ilk yanıt metnini hazırlayıp yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Düzenli takip, görsel testi', aciklama: 'Gelen talepleri sizinle sınıflıyor; keşfe dönen görseli, ilçeyi ve aramayı öne alıp dönmeyeni kapatıyoruz.' },
      { ad: 'Hedef', ozet: 'Keşif, teklif ve sözleşme', aciklama: 'Başarıyı beğeni ve mesaj sayısıyla değil, yapılan keşifle ve imzalanan işle değerlendiriyoruz.' },
    ],
  },

  durumlar: {
    baslik: 'Hiç reklam vermediniz mi, verip yalnız “fiyat?” mesajı mı alıyorsunuz?',
    giris: 'Tavsiyeyle çalışan ofis ile reklamı açık olan firmanın ilk işi aynı olmaz. Hangisindeyseniz oradan başlıyoruz.',
    sol: {
      ust: 'İşi bugüne kadar tavsiyeyle ve Instagram hesabınızla aldıysanız',
      baslik: 'İlk kampanyayı tek iş türü ve birkaç ilçeyle kuruyoruz',
      metin: 'Mutfağı, banyoyu, ofisi ve komple tadilatı tek reklamda anlatınca reklamın kime seslendiği anlaşılmaz. İlk adımda en çok kazandıran işi ve rahat gidebildiğiniz ilçeleri seçip yalnız onlar için görsel, sayfa ve yanıt düzeni hazırlıyoruz.',
      maddeler: [
        { ad: 'Proje mi, uygulama mı, tek oda mı?', aciklama: 'Yalnız çizim, anahtar teslim uygulama, mutfak ya da ticari mekân ayrı müşteriye seslenir. İlk kampanya bunlardan biriyle ve keşfe gidebildiğiniz ilçelerle sınırlanır.' },
        { ad: 'Elinizde hangi fotoğraflar var?', aciklama: 'Teslim edilmiş işin fotoğrafı, öncesi ve sonrası, uygulamadan kareler. Fotoğrafları siz sağlarsınız; hangisinin keşif talebi getirdiğini reklamda biz deneriz.' },
        { ad: 'Mesaja kim, ne yazacak?', aciklama: 'Fiyat sorusuna verilecek yanıt, sorulacak sorular ve keşif gününü kimin ayarlayacağı yayından önce belirlenir.' },
      ],
      cagri: 'İlk kampanyamı planlayalım',
      bag: { etiket: 'Instagram’da reklam nasıl verilir?', url: '/blog/instagram-reklam-nasil-verilir/' },
      cizim: 'taslak',
    },
    sag: {
      ust: 'Reklam veriyor ama keşfe dönen talep alamıyorsanız',
      baslik: 'Önce konuşmaların nerede kesildiğini okuyoruz',
      metin: 'Yeni kampanya açmadan önce reklamın bugün kime gösterildiğini, hangi görselin mesaj getirdiğini ve konuşmaların hangi soruda bittiğini görmemiz gerekir.',
      maddeler: [
        { ad: 'Gelen mesajlar', aciklama: 'Son konuşmaları sizinle okuyor; fiyat sorusunda mı, ilçede mi, zamanlamada mı bittiğini ayırıyoruz.' },
        { ad: 'Kampanya hedefi', aciklama: 'Gönderi mi öne çıkarılmış, mesaj ya da form hedefiyle kampanya mı kurulmuş? Beğeni toplayan reklam ile keşif getiren reklam ayrı kurulur.' },
        { ad: 'Görsel', aciklama: 'Çizim, bitmiş iş fotoğrafı ve öncesi sonrası aynı kitlede denenmiş mi? Mesaj getiren görsel ile keşfe dönen görseli karşılaştırıyoruz.' },
        { ad: 'Bölge ve arama terimleri', aciklama: 'Reklamın gösterildiği yerleri gittiğiniz ilçelerle karşılaştırıyor; Google reklamında model, öğrenci ve hazır ürün aramalarını ayıklıyoruz.' },
      ],
      cagri: 'Hesabıma birlikte bakalım',
    },
  },

  ornek: {
    baslik: '“İç mimar” yazan herkes iç mimar mı arıyor?',
    metin: [
      'Aynı kelimeyi evini yeniletecek olan da yazar, fotoğraf bakan da, bölüm tercihi yapacak öğrenci de, hazır mobilya arayan da. Arama reklamında bütçenin keşif isteyen kişiye kalması için her arama terimine ayrı bir karar yazılır.',
      'Tablo, Ankara’da konut işi yapan bir iç mimarlık ofisi için hazırlanmış temsili bir örnektir. Sizin hesabınızda aynı tabloyu kendi arama terimlerinizle kuruyoruz.',
    ],
    tabloBasligi: 'İç mimarlık ofisi için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'çankaya iç mimar', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Firma arıyor ve hizmet bölgesinde. Bütçe bu aramaya toplanır, reklam o ilçede biten işleri gösteren sayfayı açar.' },
      { ilk: 'anahtar teslim ev tadilatı ankara', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'İşin kapsamını ve şehri yazmış. Reklam, süreci ve keşif adımını anlatan sayfayı açar.' },
      { ilk: 'salon dekorasyonu', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Fikir topluyor. Ayrı kampanyada proje sayfasına iner; keşif talebine dönüp dönmediğine göre karar verilir.' },
      { ilk: 'iç mimarlık taban puanları', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Bölüm tercihi yapan öğrenci. Negatif anahtar kelime olur.' },
      { ilk: 'tv ünitesi modelleri', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Hazır ürün ve fiyat bakıyor. Proje ve uygulama kampanyasında reklam gösterilmez.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'İç mimarlık ve dekorasyon firmaları için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Reklam, görsel, web sitesi ve fiyat soran mesajlar hakkında iç mimarlık ofislerinden, dekorasyon ve tadilat firmalarından en çok duyduklarımız.',
    sorular: [
      {
        soru: 'İç mimarlık ve dekorasyon firmaları için dijital pazarlama nedir?',
        cevap:
          'İç mimarlık ve dekorasyon firmaları için dijital pazarlama; evini ya da iş yerini yeniletmek isteyen kişiye Instagram’da, Google aramalarında ve web sitesinde bitmiş işleri gösterip onu keşif ve ölçü randevusuna getiren çalışmaların bütünüdür. Instagram ve Facebook reklamlarını, Google Ads’i, SEO’yu ve web sitesini kapsar.',
      },
      {
        soru: 'İç mimar nasıl müşteri bulur?',
        cevap:
          'İç mimar müşterisini üç yoldan bulur: eski müşterinin tavsiyesi, Instagram’da görülen bitmiş iş ve Google’da şehir ya da iş adıyla yapılan arama. Tavsiyenin hızını siz belirleyemezsiniz; diğer iki yol planlanabilir. Teslim ettiğiniz işi hizmet verdiğiniz ilçelerde yaşayanlara reklamla gösteriyor, “ankara iç mimar” ya da “banyo tadilatı” gibi aramalar için sayfa ve reklam hazırlıyoruz.',
      },
      {
        soru: 'İç mimarlık ofisi reklamı Instagram’a mı, Google’a mı verilmeli?',
        cevap:
          'Konut işlerinde çoğu zaman Instagram’la başlanır, çünkü müşteri kararını bitmiş işi görerek verir. Google arama reklamı işin ve şehrin adını yazan, firma seçme aşamasına gelmiş kişi içindir; ofis ya da mağaza yaptıracak işletme sahibi de çoğu zaman işi adıyla arar. İkisinde de reklam, keşfe gidebildiğiniz ilçelerle sınırlanır. İçmimarlar Odası üyesiyseniz odanızın tanıtımla ilgili kurallarını ayrıca kontrol etmenizi öneririz.',
        bag: { etiket: 'Google Ads mi, Instagram reklamı mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'İç mimarlık web sitesi nasıl olmalı?',
        cevap:
          'Bir iç mimarlık sitesi bitmiş işleri oda ve iş türüne göre ayırmalı, her projede ilçeyi, kapsamı ve varsa öncesini göstermeli, her sayfadan keşif talebine geçilebilmelidir. Projeyi beğenen kişi sayfayı çoğu zaman eşine ya da ortağına gönderir; bu yüzden her proje sayfası tek başına açıldığında da firmayı ve hizmet bölgesini anlatmalıdır. Fotoğraflar büyük olduğu için sitenin telefonda çabuk açılması ayrıca ele alınır.',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Dekorasyon ve tadilat firması Google’da nasıl bulunur?',
        cevap:
          'İlçe, şehir ve iş türü adıyla yapılan aramalarda bulunur; tek başına “dekorasyon” gibi geniş aramalarda çoğunlukla mağazalar, dergiler ve fikir siteleri çıkar. Bunun için her iş türüne ve hizmet bölgesine ayrı sayfa açılır, proje fotoğraflarının yanına ilçe ve kapsam yazılır, Google İşletme Profili iş fotoğrafları ve yorumlarla güncel tutulur. Aynı bilgi, yapay zekâ yanıtlarında firmanızın doğru anılmasına da yarar.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: '“Fiyat?” diye yazan müşteriye ne cevap verilmeli?',
        cevap:
          'Rakam yerine iki üç soru ve bir sonraki adım yazılmalıdır. Çoğu işte mekân görülmeden ve ölçü alınmadan net fiyat söylenemez; ama yalnız “keşif yapmadan fiyat veremiyoruz” demek konuşmayı bitirir. İlçeyi, hangi odaların yapılacağını ve işin ne zaman başlamasının istendiğini sormak, ardından keşif için gün önermek ciddi talebi ayırır. Bu ilk yanıtı ve soru sırasını sizinle birlikte yazıyoruz.',
        bag: { etiket: 'Instagram’dan mesaj geliyor, satış yok', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Reklam için fotoğraf ve videoları kim hazırlar?',
        cevap:
          'Fotoğrafları, videoları ve üç boyutlu çizimleri siz sağlarsınız; çekim, görselleştirme ve sosyal medya hesabı yönetimi hizmetlerimiz arasında değildir. Biz hangi görselin hangi kitlede deneneceğini planlıyor, reklamın sözünü hazırlıyor ve keşif talebi getiren görseli öne alıyoruz. Teslim ettiğiniz işlerin telefonla çekilmiş fotoğrafları ilk denemeler için çoğu zaman yeterlidir. Hangi işin yayımlanacağını, ev sahibinden aldığınız izne göre siz belirlersiniz.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi firmanızın adına açılır ve sizde kalır. Reklam hesabı, Instagram hesabı, Google İşletme Profili, alan adı ve site sizindir; bize yönetici erişimi verirsiniz ve bu erişimi dilediğiniz zaman kaldırabilirsiniz. Proje fotoğraflarınız ve çizimleriniz de sizde kalır.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Mesaj sayısı, keşif sayısı, sıralama ya da sözleşme için söz vermiyoruz. Söz verdiğimiz şey işinizi, hesabınızı ve gelen mesajları ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['instagram-reklam-mesajlari-satisa-donusmuyor', 'meta-reklam-formu-mu-whatsapp-mi'],
    sektorler: ['mimarlik-ofisleri', 'insaat-ve-yapi'],
  },
};

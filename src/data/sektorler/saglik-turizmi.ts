/**
 * Sağlık turizmi. HASSAS SEKTÖR: uluslararası sağlık turizmi yetki belgesine, tanıtımı ise Sağlık Bakanlığı'nın tanıtım
 * yönetmeliğine bağlıdır.
 * Ana niyet: "sağlık turizmi dijital pazarlama", "sağlık turizmi reklam", "sağlık turizmi ajansı", "sağlık turizmi danışmanlığı".
 * Sayfanın işi: sağlık turizmi yapan kurumlar için YAPABİLECEĞİMİZ çalışmaları anlatmak (çok dilli site, uluslararası SEO,
 * GEO, yurt dışına yönelik reklam, gelen talebin karşılanma düzeni). Kanal kartları web, seo, geo ve reklam (tur: 'meta').
 * Reklam kartı site sahibinin açık isteğiyle eklendi (15 Kasım 2026); yalnız yetki belgesi olan kurumlar için, yurt dışına
 * yönelik ve Türkçe dışındaki dillerde reklamı anlatır (aşağıdaki doğrulama notuna bakın). Google İşletme Profili ayrı kart
 * değildir; SEO kartının maddesinde geçer.
 * Tedavi önerisi, sağlık iddiası, başarı oranı, öncesi ve sonrası görseli, hasta yorumu, fiyat ve paket yazılmaz, önerilmez.
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026). Yabancı dildeki aramalar için hacim yazılmadı; tek örnek
 * ifade ("dental clinic in Turkey") metinde temsili olarak işaretlidir.
 * Referanslar: Dr. Emre Apaydın ve Uzm. Dr. Belda Yurtseven Tüner (yalnız SEO ve GEO). İkisi de SAĞLIK TURİZMİ projesi
 * değildir; "sağlık alanında yürüttüğümüz SEO ve GEO çalışmaları" olarak, aynı yaklaşımın örneği diye gösterilir.
 * musteriSozu: true, çünkü site sahibi iki hekimin kayıtlı sözünün kartta görünmesini istedi.
 *
 * Mevzuat cümlelerinin kaynağı (15 Kasım 2026):
 * - DOĞRULANDI (resmî kaynak): Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik, Resmî Gazete 26 Nisan 2025,
 *   sayı 32882. Metin USHAŞ'ın sitesindeki Resmî Gazete çıktısından okundu:
 *   https://www.ushas.gov.tr/wp-content/uploads/2025/05/resmigazete.gov_.tr_eskiler_2025_04_20250426-2.pdf
 *   (bağlantının verildiği sayfa: https://www.ushas.gov.tr/saglik-turizmi-mevzuati/). Sayfada bu metne dayanan bilgiler:
 *   yetki belgesi zorunluluğu ve belgeyi kimin düzenlediği (m. 5/1), sağlık tesisinin doğrudan başvuran hastayı kabul
 *   edebilmesi (m. 6/1-ç), tanıtımda Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik'in
 *   uygulanması (m. 13/1), yabancı dil seçeneği olan internet sitesi zorunluluğu ve sitedeki kurum adının yetki belgesiyle
 *   uyumu (m. 13/2), sağlık turizmi tanımı (m. 4/1-ı; vatandaşlıkla ilgili kısmı alınmadı). Görünür metinde madde numarası yok.
 *   Bu metin 26 Nisan 2025'te yayımlanan hâldir; sonraki değişiklikler kontrol edilemedi.
 * - İKİNCİL KAYNAKTAN (resmî site açılamadı): Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik,
 *   Resmî Gazete 12 Kasım 2025, sayı 33075. mevzuat.gov.tr, resmigazete.gov.tr ve saglik.gov.tr bu çalışma sırasında açılamadı;
 *   metin şu aktarımdan okundu:
 *   https://www.alomaliye.com/2025/11/12/saglik-hizmetlerinde-tanitim-ve-bilgilendirme-faaliyetleri-hakkinda-yonetmelik-2025/
 *   Sayfada bu metne dayanan bilgiler (uluslararası sağlık turizmi tanıtımı maddesi, m. 8): yetki belgesi olan tesis ve aracı
 *   kuruluşun yurt dışına yönelik ayrı bir site ya da sosyal medya hesabında, Türkçe dışındaki dillerde sponsorlu tanıtım
 *   yapabilmesi; Türkiye'deki kişilerin hedef kitle seçilememesi; yetki belgesinin sitede ya da hesapta yayımlanması.
 *   Sayfaya ALINMAYANLAR: HealthTürkiye logosu zorunluluğu, hasta yorumu izni, aracı kuruluşa özel sınırlar, indirim duyurusu.
 *   DİKKAT: aynı yönetmeliğin genel hükümlerinde arama motorlarında ücretli öne çıkma kayıtlarına ilişkin bir yasak var
 *   (m. 5); arama reklamının sağlık turizminde bu maddeye mi, m. 8'e mi tabi olduğu bu çalışmada netleştirilemedi. Bu yüzden
 *   kart sosyal medya reklamına (tur: 'meta') bağlandı ve "hangi mecranın uygun olduğuna kurumla birlikte bakıyoruz" denildi.
 *   Yayından önce resmî metinle ve kurumun hukuk danışmanıyla karşılaştırılmalıdır.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 9,
  kimlik: 'saglik-turizmi',
  ad: 'Sağlık turizmi',
  kimler: 'Yetki belgeli klinikler ve hastaneler, uluslararası hasta kabul eden hekimler, aracı kuruluşlar',
  ozet: 'Yurt dışındaki hastanın kendi dilinde yaptığı aramada kurumu, hekimi ve süreci doğru bilgiyle bulduğu çok dilli site ve arama düzeni.',
  baslik: 'Sağlık turizmi için dijital pazarlama',
  metaBaslik: 'Sağlık Turizmi için Dijital Pazarlama',
  metaAciklama:
    'Sağlık turizmi yapan klinik, hastane ve aracı kuruluşlar için çok dilli web sitesi, uluslararası SEO, yapay zekâ görünürlüğü ve yurt dışına yönelik reklam.',
  tanim: [
    'Sağlık turizmi için dijital pazarlama, tedavi için Türkiye’ye gelmeyi düşünen yurt dışındaki hastanın kendi dilinde yaptığı aramada kurumu, hekimi ve süreci doğru bilgiyle bulmasını ve kuruma doğrudan yazabilmesini sağlama işidir.',
    'Bu hasta kararını uzaktan verir: kurumu ve hekimi araştırır, kurumun yetkili olup olmadığına bakar, seyahati ve tedavi sonrasını sorar, en son WhatsApp’tan ya da formdan yazar. Biz hedef ülkede hangi dilde ne arandığını araştırıyor, her dil için ayrı sayfaları planlıyor ve gelen ilk mesajın nasıl karşılanacağını kurumla birlikte belirliyoruz.',
    'Sağlık turizmi yetki belgesi olan klinikler ve hastaneler, uluslararası hasta kabul eden hekimler ve aracı kuruluşlarla çalışıyoruz. Yetki belgesi olan kurumlar için yurt dışına yönelik reklam kampanyalarını da yönetiyoruz.',
  ],
  gorselAlt:
    'Solda park etmiş kâğıttan bir yolcu uçağı ve arkasında bir küre; uçağın merdiveninden inen valizli yolcular kırmızı kalem çizgisini izleyerek kapısının üstünde mavi bir kalp olan kliniğe yürüyor; yolda boş bir tabela tutan karşılama görevlisi, önde boş bir pasaport ve biniş kartı',
  cagri: 'Kurumum için görüşelim',
  kanal: 'belirsiz',
  musteriSozu: true,

  aramalar: {
    baslik: 'Sağlık turizmi hakkında Google’da ne aranıyor?',
    giris: 'Türkiye’de “sağlık turizmi” diye arayanların çoğu, bu işi yapan ya da yapmaya hazırlanan kurumlardır.',
    liste: [
      { ifade: 'saç ekimi', hacim: 22200 },
      { ifade: 'ushaş', hacim: 3600 },
      { ifade: 'sağlık turizmi', hacim: 1900 },
      { ifade: 'sağlık turizmi nedir', hacim: 880 },
      { ifade: 'sağlık turizmi yetki belgesi', hacim: 880 },
      { ifade: 'sağlık turizmi yönetmeliği', hacim: 390 },
      { ifade: 'sağlık turizmi ajansı', hacim: 320 },
      { ifade: 'sağlık turizmi dijital pazarlama', hacim: 170 },
      { ifade: 'sağlık turizmi reklam', hacim: 170 },
      { ifade: 'sağlık turizmi danışmanlığı', hacim: 70 },
    ],
    yorum: [
      'Bu sayılar Türkiye’den yapılan aramaları gösterir. Aracı kuruluşların yetki belgesini düzenleyen kurumun adı olan “ushaş” ile “sağlık turizmi yetki belgesi” ve “sağlık turizmi yönetmeliği” belge sürecindeki kurumların aramasıdır. “Sağlık turizmi ajansı”, “sağlık turizmi reklam” ve “sağlık turizmi dijital pazarlama” ifadelerini tanıtım için destek arayanlar yazar; “saç ekimi” ise yurt içindeki kişinin Türkçe aramasıdır.',
      'Yurt dışındaki hasta aramasını kendi ülkesinde, kendi dilinde yapar ve o aramalar bu listede yer almaz. Onları her projenin başında hedef ülke ve dil için ayrıca araştırıyor, sayfa planını o veriye göre kuruyoruz. Ölçmediğimiz bir ülke için burada sayı vermiyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'Sağlık turizmi yapan kurumlardan en sık duyduğumuz sorular',
    giris: 'Yeni başlayan kurum da, yıllardır aracıyla çalışan kurum da aynı altı noktada takılıyor. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Sitemi İngilizceye çevirdim, yurt dışından neden kimse yazmıyor?',
        ornek:
          'Bir tıp merkezi Türkçe sitesine çeviri eklentisi kurdu; sayfalar birçok dilde açılıyor ama hiçbiri o dilde arayan hastanın sorusuna göre yazılmadı. Almanya’dan arayan hasta merkezin Almanca sayfasına ulaşamıyor.',
        care: 'Hedef ülke ve dil için ayrı sayfaları planlıyor, dil ve bölge işaretlemesini kuruyoruz; çeviriyi kurumun çevirmeni yapıyor.',
        cizim: 'dukkan',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Yurt dışındaki hasta tedaviyi Google’da hangi kelimelerle arıyor?',
        ornek:
          'Bir diş kliniği İngilizce sayfalarını Türkçe anahtar kelimelerin çevirisiyle yazdı. Hedeflediği ülkedeki hasta aynı işlemi başka bir adla, çoğu zaman da ülke ya da şehir adıyla birlikte arıyor.',
        care: 'Hedef ülkede o dilde yapılan aramaları araştırıyor, sayfa başlıklarını ve içerik planını bu aramalara göre düzenliyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'ChatGPT’ye sorulduğunda kliniğimiz neden yanlış anlatılıyor?',
        ornek:
          'İngiltere’de yaşayan bir hasta ChatGPT’ye hangi ülkede, hangi klinikte tedavi olabileceğini soruyor. Yanıtta bir kliniğin adı geçiyor, ama şehri ve hizmet verdiği bölümler eski bir rehber kaydından alınmış.',
        care: 'Hastanın soracağı soruları hedef dilde soruyor, yanıtın dayandığı sayfaları bulup kurum bilgisini kaynağında düzeltiyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        soru: 'Yabancı hasta kliniğe güvenmek için sitede neye bakar?',
        ornek:
          'Bir saç ekimi kliniğinin İngilizce sayfasında hekimin adı var; yetki belgesi, kurumun tam unvanı ve hastayı kimin karşılayacağı yazmıyor. Uzaktan karar veren hasta bu bilgiyi bulamayınca yazmaktan vazgeçiyor.',
        care: 'Yetki belgesi bilgisini, kurum unvanını, hekimi ve süreç anlatımını her dil sayfasında ilk bakışta bulunacak yere koyuyoruz.',
        cizim: 'kilit',
        bag: { etiket: 'Kuralları kısaca okuyun', url: '#kanallar' },
      },
      {
        soru: 'Yabancı hastanın WhatsApp mesajına kim, hangi dilde cevap verecek?',
        ornek:
          'Bir göz merkezine gece Arapça bir WhatsApp mesajı geliyor; sabah gören görevli Türkçe, tek satırlık bir yanıt yazıyor. Hasta hangi bilgiyi göndereceğini ve kiminle görüşeceğini öğrenemeden yazışma bitiyor.',
        care: 'İlk yanıtın metnini, sorulacak soruları ve hangi dilde kimin yanıtlayacağını kurumla birlikte yazıya döküyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'WhatsApp Business nedir?', url: '/blog/whatsapp-business-nedir/' },
      },
      {
        soru: 'Hastalar hep aracıdan geliyor, kendi talebimi nasıl oluştururum?',
        ornek:
          'Bir özel hastanenin yabancı hastalarının neredeyse tamamı aracı kuruluşlardan geliyor. Hastanenin kendi sitesinde yabancı dilde yalnız bir iletişim sayfası var; kurumu adıyla arayan hasta bölümleri ve hekimleri bulamıyor.',
        care: 'Aracıyla çalışmanız sürerken, kurumu kendi adıyla ve bölümleriyle arayan hastanın bulacağı sayfaları planlıyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Nereden başlamalı?', url: '#baslangic' },
      },
    ],
  },

  kuralNotu: {
    baslik: 'Yetki belgesi, tanıtım kuralları ve bizim sınırımız',
    metin: [
      'Uluslararası sağlık turizminde faaliyet göstermek yetki belgesine bağlıdır. Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik’e göre belgeyi sağlık tesisi için Sağlık Bakanlığı, aracı kuruluş için USHAŞ düzenler. Aynı yönetmelik yabancı dil seçeneği olan bir internet sitesini zorunlu tutar; tanıtımda ise Sağlık Bakanlığı’nın Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmeliği uygulanır. Bu yönetmelik yurt dışına yönelik tanıtımı koşula bağlar: tanıtım yurt dışına ayrılmış bir site ya da hesap üzerinden, Türkçe dışındaki dillerde yapılır ve Türkiye’deki kişiler hedef kitle olarak seçilemez.',
      'Reklamı yalnız yetki belgesi olan kurumlar için ve bu koşullarla kuruyoruz; yetki belgesi olmayan kurum için tanıtım kampanyası kurmuyor, Türkiye’deki kişileri hedeflemiyoruz. Tıbbi içeriği biz yazmıyoruz: metinleri hekim ve kurum onaylar, içeriğin tanıtım kurallarına uygunluğunu da yayından önce son olarak kurum onaylar. Bu not hukuki görüş değildir; güncel metin için Resmî Gazete’ye ve il sağlık müdürlüğünüze bakmanızı öneririz.',
    ],
  },

  kanallar: {
    baslik: 'Sağlık turizminde hangi çalışma ne işe yarar?',
    giris:
      'İlk üç çalışma, yurt dışındaki hastanın kurum hakkındaki doğru bilgiye kendi dilinde ulaşmasıyla ilgilidir. Dördüncüsü reklamdır ve yalnız yetki belgesi olan kurumlar için, yurt dışına yönelik kurulur. Hangisinden başlanacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'web',
        baslik: 'Çok dilli site: her dil için ayrı sayfa',
        metin: 'Her hedef dilde tedavi ya da bölüm sayfası, hekim ve kurum bilgisi ve süreç anlatımı yer alır. Hangi sayfanın hangi dilde gerektiğini biz planlıyoruz; çeviriyi kurumun çevirmeni yapar.',
        maddeler: ['Dil ve bölge işaretlemesi (hreflang)', 'Yetki belgesi bilgisi her dilde görünür', 'Telefonda hızlı açılan sayfalar'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        tur: 'seo',
        baslik: 'Uluslararası SEO: hedef ülkedeki aramalar',
        metin: 'Aynı işlem her ülkede başka kelimelerle aranır; Türkçe anahtar kelimenin çevirisi her zaman karşılık bulmaz. Hedef ülkede o dilde yapılan aramaları araştırıp sayfaları bunlara göre düzenliyoruz.',
        maddeler: ['Ülke ve dile göre arama araştırması', 'Sayfa başlıkları ve içerik planı', 'Google İşletme Profili ve teknik kontrol'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'geo',
        baslik: 'Yapay zekâ: kurumun doğru anılması',
        metin: 'Yurt dışındaki hasta ChatGPT gibi araçlara hangi ülkede, hangi klinikte tedavi olabileceğini soruyor. Yanıtların dayandığı sayfalardaki kurum bilgisini düzeltiyoruz; anılma için söz vermiyoruz.',
        maddeler: ['Hedef dilde sorulan sorular', 'Yanıtın dayandığı kaynak sayfalar', 'Yanlış bilginin kaynağında düzeltilmesi'],
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        tur: 'meta',
        baslik: 'Yurt dışı reklamı: yalnız yetki belgesiyle',
        metin: 'Yetki belgesi olan kurumlar için hedef ülkedeki kişilere, o ülkenin dilinde reklam kampanyası kuruyoruz. Kampanya yurt dışına ayrılmış site ve hesaplar üzerinden yürür. Hangi mecranın ve içeriğin kurala uygun olduğuna kampanyadan önce kurumla birlikte bakıyoruz.',
        maddeler: ['Hedef kitle yalnız yurt dışı', 'Türkçe dışındaki dillerde reklam metni', 'Metin ve görselde kurum onayı'],
        bag: { etiket: 'Meta reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
    ],
  },

  yontem: {
    baslik: 'Sağlık turizmi yapan kurumlarla nasıl çalışıyoruz?',
    giris: 'İşe hedef ülkeyi ve bugünkü talebin nereden geldiğini inceleyerek başlıyor, sayfaları ve yanıt düzenini buna göre kuruyor, gelen talepleri kurumla birlikte değerlendirerek düzeltiyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Ülke, dil ve bugünkü talep', aciklama: 'Hangi ülkeden hasta kabul ettiğinizi, taleplerin aracıdan mı doğrudan mı geldiğini, yetki belgenizin durumunu ve sitenizin yabancı dildeki sayfalarını inceliyoruz.' },
      { ad: 'Strateji', ozet: 'Dil ve sayfa planı', aciklama: 'Hedef ülkede o dilde yapılan aramaları araştırıyor; hangi tedavi ya da bölüm sayfasının hangi dilde açılacağını, metni kimin yazıp kimin onaylayacağını planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Sayfalar, işaretleme, yanıt düzeni', aciklama: 'Dil sayfalarını ve dil ile bölge işaretlemesini kuruyor, WhatsApp ve form için ilk yanıt düzenini yazıyoruz. Çeviriyi çevirmeniniz yapar; tıbbi metinler hekim ve kurum onayıyla yayına girer. Yetki belgeniz varsa yurt dışına yönelik reklam kampanyası da bu aşamada kurulur.' },
      { ad: 'Optimizasyon', ozet: 'Düzenli takip ve iyileştirme', aciklama: 'Gelen talepleri sizinle birlikte ülkeye ve niteliğe göre değerlendiriyor; bulunmayan sayfayı, yanlış anılan bilgiyi ve yanıtsız kalan mesajı sıraya alıp düzeltiyoruz.' },
      { ad: 'Hedef', ozet: 'Doğrudan gelen nitelikli talep', aciklama: 'Hedefimiz, kurumu kendi dilinde arayan hastanın doğru bilgiyi bulup size doğrudan yazmasıdır. Hasta sayısı ya da sıralama için söz vermiyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'Sağlık alanında yürüttüğümüz çalışmalar',
    giris: 'İkisi de hekim siteleri için yürüttüğümüz SEO ve GEO çalışmalarıdır. Sağlık turizmi projesi olarak değil, burada anlattığımız yaklaşımın sağlıktaki örneği olarak gösteriyoruz.',
    liste: [
      {
        kimlik: 'emre-apaydin',
        not: 'Çalışma, hekimin uzmanlık bilgisinin arama sonuçlarında nasıl yer aldığı sorusu üzerine yürütüldü; projede yalnız SEO ve GEO yer aldı. Sağlık turizmi yapan bir kurumda aynı soruyu hedef ülkenin dilindeki aramalar için soruyoruz.',
      },
      {
        kimlik: 'belda-yurtseven-tuner',
        not: 'Çalışmada, hastanın aradığı uzmanlık alanını hekimin sitesinde nasıl bulduğuna bakıldı; projede yalnız SEO ve GEO yer aldı. Çok dilli bir sitede aynı incelemeyi her dil sayfası için ayrı yapıyoruz.',
      },
    ],
  },

  durumlar: {
    baslik: 'Yeni mi başlıyorsunuz, yıllardır aracıyla mı çalışıyorsunuz?',
    giris: 'Birinde iş dil ve sayfa planıyla, ötekinde bugünkü talebin nereden geldiğine bakmakla başlar.',
    sol: {
      ust: 'Yetki belgesi sürecindeyseniz ya da yeni aldıysanız',
      baslik: 'İlk adımda tek ülke ve tek dil seçiyoruz',
      metin: 'Bütün dillerde birden yayına çıkmak sayfaları inceltir. İlk adımda en çok hasta beklediğiniz ülkeyi seçip o dil için sayfaları ve yanıt düzenini hazırlıyoruz; belge süreciniz sürüyorsa yurt dışına dönük yayını belge alındıktan sonra açıyoruz.',
      maddeler: [
        { ad: 'Hangi ülke, hangi dil?', aciklama: 'Bugüne kadar hangi ülkeden, hangi bölümünüz için soru geldi? İlk dil sayfalarının sınırı bu seçimle çizilir.' },
        { ad: 'Sitede hangi bilgi görünecek?', aciklama: 'Yetki belgesi, kurumun unvanı, hekimler ve ilk görüşmeden kontrole kadar süreç. Her dil sayfasının ilk ekranı buna göre kurulur.' },
        { ad: 'İlk mesaja kim, hangi dilde dönecek?', aciklama: 'WhatsApp’tan ya da formdan gelen mesajı kim görecek, hangi soruları soracak? Yanıt düzeni yayından önce yazılır.' },
      ],
      cagri: 'Sitemi birlikte planlayalım',
      bag: { etiket: 'Web sitesi nasıl kurulur?', url: '/blog/web-sitesi-nasil-kurulur/' },
      cizim: 'taslak',
    },
    sag: {
      ust: 'Hastalarınız yıllardır aracıdan geliyorsa',
      baslik: 'Önce kurumun kendi adıyla nasıl bulunduğuna bakıyoruz',
      metin: 'Yönetmelik, sağlık tesisinin aracı kuruluş olmadan doğrudan başvuran hastayı da kabul edebileceğini söyler. Yeni sayfa açmadan önce bugünkü durumu görmemiz gerekir: talepler hangi ülkeden, hangi yoldan geliyor ve kurumu doğrudan arayan hasta neyle karşılaşıyor.',
      maddeler: [
        { ad: 'Talebin kaynağı', aciklama: 'Son dönemdeki talepleri aracıdan gelen ve doğrudan gelen diye sizinle birlikte ayırıyor, ülkelere göre sınıflıyoruz.' },
        { ad: 'Yabancı dildeki sayfalar', aciklama: 'Eklentiyle mi çevrildi, o dil için mi yazıldı? Dizine girmiş mi, dil işaretlemesi doğru mu, tek tek bakıyoruz.' },
        { ad: 'Kurum bilgisinin doğruluğu', aciklama: 'Kurumun adı, şehri ve bölümleri arama sonuçlarında ve yapay zekâ yanıtlarında doğru mu anılıyor? Hedef dilde soruyoruz.' },
        { ad: 'Yanıt düzeni', aciklama: 'Doğrudan yazan hastaya hangi dilde, kim dönüyor? Yanıtsız kalan ya da ilk mesajda biten yazışmaları birlikte okuyoruz.' },
      ],
      cagri: 'Siteme birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Hangi sayfa hangi dilde gerekir?',
    metin: [
      'Çok dilli sitede her sayfayı her dile çevirmek, kimsenin okuyup onaylamadığı tıbbi metinleri yayına koymak demektir. Bunun yerine her sayfa için ayrı bir karar yazılır: hangi dilde gerekir, metni kim onaylar.',
      'Tablo, Almanca konuşan hastaları hedefleyen bir diş kliniği için hazırlanmış temsili bir örnektir. Sizin sitenizde aynı tabloyu hedef ülkenizdeki aramalarla ve hastaların size yazdığı sorularla kuruyoruz.',
    ],
    tabloBasligi: 'Bir diş kliniği sitesi için dil ve sayfa kararları',
    sutunlar: ['Sayfa', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'Tedavi sayfaları', karar: 'Almanca yazılır', tur: 'evet', gerekce: 'Hedef ülkede o dilde yapılan aramalara göre kurulur. Çeviriyi kliniğin çevirmeni yapar, metni hekim onaylar.' },
      { ilk: 'Süreç sayfası', karar: 'Almanca yazılır', tur: 'evet', gerekce: 'İlk görüşme, seyahat, tedavi ve kontrol sırasıyla anlatılır. Transferi ve konaklamayı kimin düzenlediği açıkça yazar.' },
      { ilk: 'Yetki belgesi ve kurum bilgisi', karar: 'Her dilde görünür', tur: 'evet', gerekce: 'Kurumun unvanı yetki belgesindekiyle aynı yazılır. Bilgi her dil sayfasının aynı yerinde durur.' },
      { ilk: 'Türkçe blog yazıları', karar: 'Türkçe kalır', tur: '', gerekce: 'Yurt içindeki okur için yazıldı. Hedef dilde aranan bir soru varsa o dil için ayrı sayfa planlanır.' },
      { ilk: 'Eklentinin çevirdiği diğer diller', karar: 'Yayından kalkar', tur: 'hayir', gerekce: 'Kimsenin okuyup onaylamadığı tıbbi metin yayında durmaz. O dilde talep oluşursa sayfa ayrıca yazılır.' },
    ],
    not: 'Kararlar gerçek bir siteden alınmadı; kararın nasıl verildiğini gösterir. Tıbbi bilgi içermez.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Sağlık turizmi için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Yetki belgesi, reklam, çok dilli site ve gelen mesajların karşılanması hakkında kurumlardan duyduğumuz sorular.',
    sorular: [
      {
        soru: 'Sağlık turizmi için dijital pazarlama nedir?',
        cevap:
          'Sağlık turizmi için dijital pazarlama, tedavi için Türkiye’ye gelmeyi düşünen yurt dışındaki hastanın kendi dilinde yaptığı aramada kurumu, hekimi ve süreci doğru bilgiyle bulmasını sağlama işidir. Çok dilli web sitesini, uluslararası SEO’yu, yapay zekâ yanıtlarındaki kurum bilgisinin doğruluğunu, yetki belgesi olan kurumlar için yurt dışına yönelik reklamı ve gelen ilk mesajın karşılanma düzenini kapsar. Biz aracı kuruluş değiliz: hasta yönlendirmiyor, hasta adına kurumla anlaşma yapmıyoruz.',
      },
      {
        soru: 'Sağlık turizmi nedir, kimler yapabilir?',
        cevap:
          'Sağlık turizmi, sağlık hizmeti almak için yurt dışından Türkiye’ye geçici süreyle gelen kişilere sunulan sağlık ve aracılık hizmetleridir. Bu alanda faaliyet göstermek için yetki belgesi gerekir; belgeyi sağlık tesisleri için Sağlık Bakanlığı, aracı kuruluşlar için USHAŞ düzenler. Başvuru koşulları için yönetmeliğin güncel metnine ve USHAŞ’ın sayfasına bakmanızı öneririz.',
        bag: { etiket: 'Kaynak: USHAŞ, sağlık turizmi mevzuatı', url: 'https://www.ushas.gov.tr/saglik-turizmi-mevzuati/' },
      },
      {
        soru: 'Sağlık turizminde reklam verilebilir mi?',
        cevap:
          'Sağlık turizminde reklam, yetki belgesi olan sağlık tesisleri ve aracı kuruluşlar için, Sağlık Bakanlığı’nın tanıtım yönetmeliğindeki koşullarla yurt dışına yönelik olarak verilebilir. Yönetmeliğe göre tanıtım yurt dışına ayrılmış bir site ya da hesap üzerinden, Türkçe dışındaki dillerde yapılır; Türkiye’deki kişiler hedef kitle olarak seçilemez ve yetki belgesi sitede yayımlanır. Biz bu koşullarla, yetki belgesi olan kurumlar için reklam kampanyası kuruyoruz. Hangi mecranın ve içeriğin uygun olduğu kuruma göre değişebilir; güncel metin için Resmî Gazete’ye ve il sağlık müdürlüğünüze bakmanızı, kampanyadan önce hukuk danışmanınıza sormanızı öneririz.',
        bag: { etiket: 'Instagram ve Facebook reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Sağlık turizmi web sitesi nasıl olmalı?',
        cevap:
          'Sağlık turizmi yapan bir kurumun sitesi, hedef ülkenin dilinde ayrı yazılmış sayfalardan oluşmalı; kurumun unvanını, yetki belgesi bilgisini, hekimleri ve süreci ilk bakışta göstermelidir. Yönetmelik yabancı dil seçeneği olan bir siteyi zorunlu tutar ve sitedeki kurum adının yetki belgesindekiyle uyumlu olmasını ister. Biz hangi sayfanın hangi dilde gerektiğini ve teknik yapıyı kuruyoruz; çeviriyi kurumun çevirmeni yapar.',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Yurt dışındaki hastaya ulaşmak için SEO nasıl yapılır?',
        cevap:
          'Yurt dışındaki hasta için SEO, hedef ülkede o dilde yapılan aramaların araştırılmasıyla başlar; sayfalar bu aramalara göre düzenlenir, dil ile bölge işaretlemesi kontrol edilir. İngilizce arayan biri örneğin “dental clinic in Turkey” yazabilir; bu temsili bir ifadedir, gerçek aramaları ve hacimlerini her proje için ayrıca ölçüyoruz. Sıralama için söz vermiyoruz.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Yabancı hastalardan gelen mesajları siz mi yanıtlıyorsunuz?',
        cevap:
          'Hayır, mesajları kurumun kendi ekibi yanıtlar. Biz ilk yanıtın metnini, sorulacak soruları ve hangi dilde kimin döneceğini kurumla birlikte yazıya döküyor, gelen taleplerin niteliğini düzenli olarak sizinle değerlendiriyoruz. Hasta koordinasyonu, transfer, konaklama, tercümanlık ve CRM yazılımı bizim işimiz değildir; bunları kurum ya da sağlayıcısı yürütür, biz sayfaya bağlarız.',
      },
      {
        soru: 'Tıbbi içeriği ve çeviriyi kim yapar?',
        cevap:
          'Tıbbi içeriği hekim ve kurum yazar ya da onaylar, çeviriyi kurumun çevirmeni yapar. Biz tedavi önerisi, sağlık iddiası ya da başarı oranı yazmıyor; öncesi ve sonrası görseli ile hasta yorumu hazırlamıyoruz. Bizim işimiz hangi sayfanın hangi dilde gerektiğini çıkarmak, sayfanın düzenini kurmak ve metnin arama motorunca okunabilmesini sağlamaktır.',
      },
      {
        soru: 'Site ve alan adı kimin adına olur?',
        cevap:
          'Alan adı, site ve Google İşletme Profili kurumun adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; Search Console verisi de içinde olmak üzere geçmiş kayıtlar kuruma aittir. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Hasta sayısı, sıralama ya da yapay zekâ yanıtlarında anılma için söz vermiyoruz. Söz verdiğimiz şey sitenizi ve hedef ülkedeki aramaları ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['geo-nedir', 'seo-nedir'],
    sektorler: ['saglik-ve-klinikler', 'otel-ve-konaklama'],
  },
};

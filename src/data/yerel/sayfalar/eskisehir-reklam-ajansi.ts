/**
 * Eskişehir reklam ajansı (şehir sayfası).
 * Ana niyet: “eskişehir reklam ajansı” (480), “eskişehir sosyal medya ajansı” (50), “eskişehir sosyal medya yönetimi” (40),
 * “eskişehir dijital ajans” (20), “eskişehir dijital pazarlama” (20), “eskişehir dijital reklam ajansı” (10).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. “eskişehir reklam ajansları” aynı hacmi gösteren yakın yazımdır,
 * alınmadı. Google reklam, Google Ads ve Instagram reklam adıyla yapılan şehir aramaları için araç değer döndürmedi.
 * “Reklam ajansı” aramasını tabela, matbaa ve açık hava reklamı arayanlar da yapar: sayfa ne olduğumuzu ve ne yapmadığımızı
 * açıkça söyler. Sosyal medya aramalarında hesap yönetimi değil, sosyal medya reklamı yönettiğimiz yazılır.
 * Eskişehir’de ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir. Sağlık ve hukuk için reklam örneği verilmez.
 * Referanslar bu sayfada elle verildi: Estika ve EsVia Suit Apart’ın kendi sitelerinde Eskişehir’de oldukları yazıyor
 * (denetim: 15 Kasım 2026); üçüncü proje başka şehirdendir. EsVia’da reklam yönetimi yoktur ve notta böyle yazılır.
 * Yerel bilgiler herkesçe bilinen olgulardır: üniversite takvimi ve öğrenci nüfusu, Odunpazarı, Porsuk kıyısı, tramvay, Ankara ve
 * İstanbul’dan hızlı trenle gelen ziyaretçi, lületaşı işçiliği, organize sanayide beyaz eşya yan sanayi. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'eskisehir-reklam-ajansi',
  sehir: 'eskisehir',
  yerDe: 'Eskişehir’de',
  hizmet: 'reklam',
  baslik: 'Eskişehir reklam ajansı',
  metaBaslik: 'Eskişehir Reklam Ajansı: Google ve Instagram',
  metaAciklama:
    'Eskişehir’deki işletmeler için dijital reklam ajansı: Google Ads, Instagram ve Facebook reklam yönetimi, öğrenci takvimine ve bölgeye göre kurulum. Uzaktan çalışıyoruz.',
  ozet: 'Öğrenci takvimine, hafta sonu ziyaretçisine ve sanayi alıcısına göre kurulan, Eskişehir’deki işletmeler için Google Ads ve Instagram reklam yönetimi.',
  tanim: [
    'Eskişehir’deki işletmeler için reklam ajansı hizmeti, öğrenciye, şehre gezmeye gelen ziyaretçiye ya da sanayideki alıcıya ulaşmak üzere Google Ads, Instagram ve Facebook reklamlarının doğru dönemde ve doğru bölgede yayınlanıp yönetilmesi işidir.',
    'Önce ne olduğumuzu söyleyelim: Google Ads ile Instagram ve Facebook reklamlarını yöneten bir dijital reklam ajansıyız; tabela, matbaa ve açık hava reklamı işi almıyoruz. Eskişehir’de reklamın zamanı şehrin takvimine bağlı. Üniversiteler açılırken apart, kurs ve ev eşyası arayanlar çoğalıyor, yaz aylarında öğrenci şehirden ayrılıyor; hafta sonları ise Odunpazarı ve Porsuk çevresi Ankara ve İstanbul’dan trenle gelen ziyaretçiyle doluyor. Reklamı kurmadan önce işinizin bu takvimin neresinde durduğunu ve müşterinizin nereden geldiğini inceliyoruz.',
    'Çalışma biçimimiz uzaktan: toplantıları telefonla ya da görüntülü yapıyor, reklam hesabınızı ekranda birlikte açıp neyi neden değiştirdiğimizi orada gösteriyoruz.',
  ],
  cagri: 'Reklamlarımı görüşelim',

  aramalar: {
    baslik: 'Eskişehir’de reklam ajansı için ne aranıyor?',
    giris: 'Şehir adıyla yapılan aramaların ölçülebilen bölümü kısa bir liste; her satırda arayanın beklentisi biraz farklı.',
    liste: [
      { ifade: 'eskişehir reklam ajansı', hacim: 480 },
      { ifade: 'eskişehir sosyal medya ajansı', hacim: 50 },
      { ifade: 'eskişehir sosyal medya yönetimi', hacim: 40 },
      { ifade: 'eskişehir dijital ajans', hacim: 20 },
      { ifade: 'eskişehir dijital pazarlama', hacim: 20 },
      { ifade: 'eskişehir dijital reklam ajansı', hacim: 10 },
    ],
    yorum: [
      '“Eskişehir reklam ajansı” ayda yaklaşık 480 kez yazılıyor. Bu ifadeyi tabela, baskı ve açık hava reklamı arayanlar da kullandığı için sayının ne kadarının dijital reklamla ilgili olduğunu bilmiyoruz. “Sosyal medya ajansı” ve “sosyal medya yönetimi” yazanların çoğu hesabına içerik hazırlayıp paylaşacak birini arıyor; bu işi yapmıyoruz. Bizim işimiz aynı hesap üzerinden verilen Instagram ve Facebook reklamlarını ve Google Ads’i yönetmek.',
      'Ölçüm Türkiye geneli için yapıldı; aramanın Eskişehir’den mi, başka bir şehirden mi geldiğini göstermiyor. Google reklam ve Instagram reklam sözlerinin Eskişehir adıyla yazıldığı aramalar için araç hiç değer döndürmedi. Bu, şehirde reklam verilmediği anlamına gelmiyor; işletme sahibi kanalın adını yazmak yerine çoğu zaman “reklam ajansı” diye arıyor. Kampanyayı kurarken esas aldığımız liste ise müşterinizin kendi aramalarıdır; onu her işletme için ayrıca çıkarıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Eskişehir’de reklam verenlerde sık gördüğümüz altı durum',
    giris: 'Şehrin takvimi ve müşterinin geldiği yer, reklam ayarlarının çoğunu belirliyor. Altı durum ve her birinde değiştirdiğimiz şey:',
    kartlar: [
      {
        soru: 'Öğrenci eylülde geliyor, reklamı eylülde mi açmalıyız?',
        ornek:
          'Kampüs yakınında eşyalı daire kiralayan bir işletme reklamı okulların açıldığı hafta başlatıyor. Üniversiteyi yeni kazanan öğrencinin ailesi ise barınma seçeneklerini yerleştirme sonuçları açıklanır açıklanmaz, başka bir şehirden araştırmaya başlamış oluyor.',
        care: 'Kampanyayı sonuçların açıklandığı haftaya göre hazırlıyor, reklamı bu aramayı yapan velinin bulunduğu şehirlerde de gösteriyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Trenle gelen ziyaretçiye reklamı nerede göstermeliyiz?',
        ornek:
          'Odunpazarı’nda bir konak oteli Instagram reklamını yalnız Eskişehir’de oturanlara gösteriyor. Odayı tutacak kişi ise Ankara ya da İstanbul’da yaşıyor ve hafta sonu planını hafta içinde, tren biletine bakarken yapıyor.',
        care: 'Reklam bölgesini misafirin yaşadığı şehirlere çeviriyor, yayını hafta içi günlerine ağırlık vererek planlıyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Beğeni geliyor, masalar neden dolmuyor?',
        ornek:
          'Porsuk kıyısındaki bir kafe en çok beğenilen gönderisini öne çıkarıyor. Beğenenlerin bir bölümü mezun olup şehirden ayrılmış eski öğrenciler, bir bölümü de Eskişehir’e hiç gelmemiş takipçiler oluyor.',
        care: 'Kampanyayı Reklam Yöneticisi’nde, şehirde yaşayan ve kafeye yürüme ya da tramvay mesafesindeki kitleye göre kuruyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Sanayi firması reklamla teklif alabilir mi?',
        ornek:
          'Organize sanayi bölgesinde beyaz eşya için plastik parça üreten bir firma bugüne kadar yalnız tavsiyeyle müşteri bulmuş. Tedarikçi arayan satın almacı Google’a “plastik enjeksiyon fason üretim” yazdığında karşısına başka illerdeki firmaların reklamı çıkıyor.',
        care: 'Satın almacının yazdığı teknik ifadeleri kampanyaya alıyor, reklamı teklif formu olan ürün sayfasına indiriyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'El işi ürünü reklamla kime anlatmalıyız?',
        ornek:
          'Lületaşı işleyen bir atölye Instagram reklamında yalnız bitmiş piponun fotoğrafını kullanıyor ve reklamı Eskişehir’de gösteriyor. Ürünü merak edenlerin çoğu ise başka şehirlerde yaşayan koleksiyoncular ve hediye arayanlar.',
        care: 'Reklamı ülke geneline açıyor, bitmiş ürün fotoğrafı ile taşın işlenişini gösteren videoyu aynı kitlede ayrı ayrı deniyoruz.',
        cizim: 'kreatif',
        bag: { etiket: 'Butik markalar', url: '/sektorler/butik-markalar/' },
      },
      {
        soru: 'Reklam bütçem neden öğlene kalmadan bitiyor?',
        ornek:
          'Tepebaşı’nda evden eve nakliyat yapan bir firma, öğrencilerin taşındığı haziran ve eylül haftalarında Google reklamını tek bir geniş kelimeyle açıyor. “Nakliyat iş ilanı” ve “şehirler arası kargo” arayanlar da reklama tıklıyor, bütçe gün ortasında tükeniyor.',
        care: 'Arama terimlerini okuyup ilgisiz olanları kapatıyor, bütçeyi taşınma haftalarının yoğun saatlerine yayıyoruz.',
        cizim: 'kronometre',
        bag: { etiket: 'Reklamım neden gösterilmiyor?', url: '/blog/google-reklamim-neden-gosterilmiyor/' },
      },
    ],
  },

  isler: {
    baslik: 'Eskişehir’de reklam yönetimi kapsamında neler yapıyoruz?',
    giris: 'Aşağıdaki altı iş, reklamın şehrin takvimine ve müşterinizin bulunduğu yere uymasını sağlıyor.',
    liste: [
      { ad: 'Hesap ve pazar incelemesi', aciklama: 'Hesabınız varsa son dönemin arama terimlerini, reklamlarını ve gelen mesajları okuyoruz. Yoksa müşterinizin Eskişehir’de neyi, hangi sözlerle aradığını ve rakiplerin ne reklam verdiğini çıkarıyoruz.' },
      { ad: 'Takvime göre kampanya planı', aciklama: 'Kayıt haftaları, sınav dönemleri, yaz ayları ve hafta sonu ziyaretçisi: işinizi etkileyen dönemleri çıkarıp bütçeyi bu takvime göre dağıtıyoruz.' },
      { ad: 'Bölge ve şehir hedeflemesi', aciklama: 'Mahalle işletmesinde reklamı Tepebaşı ve Odunpazarı’nda hizmet verdiğiniz çevreyle sınırlıyoruz. Müşterisi dışarıdan gelen işlerde Ankara, İstanbul ve öğrencinin geldiği şehirleri hedefe ekliyoruz.' },
      { ad: 'Google Ads arama reklamları', aciklama: 'Hizmetinizi o an arayan kişinin yazdığı ifadeleri seçiyor, reklam metnini bu ifadeyle yazıyor, ilgisiz aramaları düzenli olarak ayıklıyoruz.' },
      { ad: 'Instagram ve Facebook kampanyaları', aciklama: 'Hedefi mesaj, form ya da site olarak seçiyor, reklamı Reklam Yöneticisi’nde kuruyoruz. Fotoğraf ve videoyu siz sağlarsınız; neyin deneneceğini birlikte planlarız.' },
      { ad: 'Başvuru yolu ve ölçüm', aciklama: 'Reklamın indiği sayfayı, formu ve ilk yanıt metnini gözden geçiriyor; telefon, form ve WhatsApp başvurularını ayrı ayrı sayan ölçümü kuruyoruz.' },
    ],
    bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
  },

  referanslar: {
    baslik: 'Eskişehir’den çalıştığımız markalar',
    giris: 'Estika ve EsVia Suit Apart Eskişehir’den; üçüncü marka başka bir şehirden bir yapı firması. Reklam yönetimi bu üç projenin ikisinde yer aldı; hangisinde ne yapıldığı kartın altında yazıyor.',
    liste: [
      {
        kimlik: 'estika',
        not: 'Lületaşı işleyen firmanın projesinde web tasarım ile SEO ve GEO’nun yanında dijital reklam yönetimi de yer aldı.',
      },
      {
        kimlik: 'esvia',
        not: 'Öğrenci apartı için yapılan iş web tasarım, SEO ve GEO ile sınırlı; bu projede reklam yönetimi yok.',
      },
      {
        kimlik: 'celikvillam',
        not: 'Eskişehir dışından bir örnek: site, model araştıran ile arsası hazır olup teklif isteyen ziyaretçinin hangi sayfaya gideceği sorusuna göre kuruldu; kapsamda reklam yönetimi de var.',
      },
    ],
  },

  secim: {
    giris:
      'Eskişehir’de reklam bütçesi çoğu zaman küçük başlıyor. Küçük bütçede her tıklama sayıldığı için ajansı, neyi kapatıp neyi açık tuttuğunu size nasıl anlattığına göre seçin.',
  },

  sss: {
    baslik: 'Eskişehir’de reklam ajansı ile çalışmak: sık sorulanlar',
    giris: 'Yaptığımız ve yapmadığımız işler, hesap sahipliği, bütçe ve uzaktan çalışma üzerine sık gelen sorular.',
    sorular: [
      {
        soru: 'Eskişehir’de reklam ajansı seçerken nelere dikkat edilir?',
        cevap:
          'İlk dikkat edilecek şey, ajansın sizin aradığınız reklam türünü yapıp yapmadığıdır; aynı ad altında tabelacı da, matbaa da, dijital ajans da çıkar. Dijital reklam istiyorsanız ajanstan daha önce kurduğu bir kampanyanın yapısını anlatmasını, hesabın kimde kalacağını ve işe hangi incelemeyle başlayacağını yazmasını isteyin.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Sosyal medya hesabımızı da yönetiyor musunuz?',
        cevap:
          'Hayır; gönderi hazırlama, paylaşım takvimi, fotoğraf ve video çekimi gibi hesap yönetimi işlerini yapmıyoruz. Instagram ve Facebook’ta yaptığımız iş reklamdır: kampanyanın hedefini, kitlesini, bölgesini ve bütçesini kurup yönetiyoruz. Reklamda kullanılacak görselleri siz ya da çalıştığınız içerik üreticisi sağlar.',
      },
      {
        soru: 'Eskişehir’de yüz yüze görüşmeden reklam yönetimi olur mu?',
        cevap:
          'Evet, olur; reklam hesapları internet üzerinden yönetilir ve biz işin tamamını uzaktan yapıyoruz. Görüşmeler telefonla ya da görüntülü ilerler. Şehrin takvimini, işletmenizin hangi mahallelerden ve hangi şehirlerden müşteri aldığını ilk görüşmede sizden öğreniyor, kurulumu bu bilgiyle yapıyoruz.',
      },
      {
        soru: 'Reklam hesapları ve Instagram sayfası kimde kalır?',
        cevap:
          'Tamamı sizde kalır. Google Ads hesabı, Meta işletme hesabı, Instagram profili ve Facebook sayfası işletmenizin adına kayıtlıdır; biz bunlara iş ortağı ya da yönetici olarak ekleniriz. Reklam harcaması sizin ödeme yönteminizden, doğrudan Google’a ve Meta’ya gider.',
      },
      {
        soru: 'Yazın öğrenciler gidince reklamı durdurmalı mıyız?',
        cevap:
          'Müşterinizin ne kadarının öğrenci olduğuna bağlı; hepsi öğrenciyse yaz aylarında bütçeyi kısmak çoğu zaman doğru karardır. Şehirde yaşayan ailelere ya da hafta sonu ziyaretçisine de satıyorsanız yazın reklamı kapatmak yerine kitleyi ve reklamdaki sözü değiştirmek gerekir. Hesabınızda geçen yılın verisi varsa kararı ona bakarak birlikte veriyoruz.',
      },
      {
        soru: 'Küçük bir işletme için reklam bütçesi nasıl belirlenir?',
        cevap:
          'Bütçe için tek bir rakam söylemiyoruz; hedeflenen aramaların tıklama maliyeti, hizmet verdiğiniz alanın genişliği ve karşılayabileceğiniz müşteri sayısı birlikte belirler. Küçük bir bütçeyle tek hizmete ve dar bir bölgeye odaklanmak, aynı parayı bütün hizmetlere yaymaktan daha okunur sonuç verir. Başlangıç planını görüşmeden sonra yazılı gönderiyoruz.',
      },
      {
        soru: 'Reklamdan satış gelmezse ne olur; garanti var mı?',
        cevap:
          'Garanti yok; satış, başvuru sayısı ya da belirli bir maliyet için söz vermiyoruz. Satış gelmediğinde yaptığımız şey nedenini aramaktır: arama terimlerine, gelen mesajlara ve reklamın indiği sayfaya bakıyor, bulduğumuzu size gerekçesiyle anlatıp ayarı değiştiriyoruz. Üstlendiğimiz iş ayrıntılı inceleme, bulguya dayanan kurulum ve düzenli optimizasyondur.',
      },
    ],
  },
};

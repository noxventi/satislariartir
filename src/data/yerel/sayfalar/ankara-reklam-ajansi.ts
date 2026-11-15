/**
 * Ankara reklam ajansı (şehir sayfası, reklam).
 * Ana niyet: "ankara reklam ajansı" (1.000). Yan niyetler: "ankara sosyal medya yönetimi" (320), "ankara sosyal medya ajansı" (260),
 * "ankara dijital ajans" (50), "ankara dijital pazarlama ajansı" (50), "ankara dijital reklam ajansı" (50),
 * "ankara dijital pazarlama" (40), "ankara google reklam ajansı" (30), "ankara google reklam" (20).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. Aynı hacmi gösteren "ankara reklam ajansları" yakın yazım
 * sayıldı ve alınmadı. "ankara reklam" (1.600) niyeti belirsiz olduğu için listeye girmedi. "ankara google ads ajansı",
 * "ankara instagram reklam" ve "ankara reklam yönetimi" için araç veri döndürmedi; yorumda bu olgu olarak söylenir.
 * Bu aramayı tabela, matbaa ve açık hava reklamı arayanlar da yazar: sayfa ne olduğumuzu ve ne yapmadığımızı açık söyler.
 * Sosyal medya hesap yönetimi ve içerik üretimi yapılmaz; yalnız Instagram ve Facebook reklamı yönetilir.
 * Hekim ve avukat için reklam örneği yok. Ankara’da ofis olduğu yazılmaz; iş uzaktan yürütülür.
 * Yerel bilgiler herkesçe bilinen olgulardır: şehrin Sincan’dan Mamak’a yayılması, İvedik sanayi bölgesi, Tunalı Hilmi
 * Caddesi’ndeki yeme içme mekânları, Gölbaşı’ndaki kır düğünü mekânları, Yaşamkent’teki konut projeleri. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'ankara-reklam-ajansi',
  sehir: 'ankara',
  yerDe: 'Ankara’da',
  hizmet: 'reklam',
  baslik: 'Ankara reklam ajansı',
  metaBaslik: 'Ankara Reklam Ajansı: Google ve Instagram',
  metaAciklama:
    'Ankara’daki işletmeler için dijital reklam ajansı: Google Ads ile Instagram ve Facebook reklamlarını ilçe hedeflemesiyle, uzaktan yönetiyoruz. Tabela ve baskı yapmıyoruz.',
  ozet: 'Sincan’dan Mamak’a uzanan Ankara’da Google ve Instagram reklamlarını, işletmenin gerçekten hizmet verdiği ilçelere ve satışa yakın aramalara göre yönetiyoruz.',
  tanim: [
    'Ankara’daki işletmeler için reklam ajansı hizmeti, Google Ads ile Instagram ve Facebook reklamlarının işletmenin hizmet verdiği ilçelere göre kurulması ve bütçenin satış getiren aramalara ve kitlelere yönlendirilmesi işidir.',
    'Biz dijital reklam ajansıyız: işimiz Google Ads ile Instagram ve Facebook reklamlarını yönetmek. Tabela, baskı ve açık hava reklamı yapmıyoruz. Ankara’da Keçiören’deki halı yıkama firması yalnız çevre ilçelere, İvedik’teki üretici her şehirdeki satın almacıya, Tunalı Hilmi’deki restoran yürüme mesafesindeki kişiye ulaşmak ister. Hiç reklam vermediyseniz müşterinizin aramalarından, veriyorsanız hesabınızdan başlıyor; kampanyaları bu incelemeye göre kuruyoruz.',
    'İşi uzaktan yürütüyoruz: toplantıları telefonla ya da görüntülü yapıyor, hesabınızda neyi neden değiştirdiğimizi ekran paylaşarak gösteriyoruz.',
  ],
  cagri: 'Reklamlarımı görüşelim',

  aramalar: {
    baslik: '“Ankara reklam ajansı” yazan kişi ne arıyor?',
    giris: 'Ajans arayan işletme sahibi aynı ihtiyacı farklı adlarla yazıyor: reklam ajansı, dijital ajans, sosyal medya ajansı.',
    liste: [
      { ifade: 'ankara reklam ajansı', hacim: 1000 },
      { ifade: 'ankara sosyal medya yönetimi', hacim: 320 },
      { ifade: 'ankara sosyal medya ajansı', hacim: 260 },
      { ifade: 'ankara dijital ajans', hacim: 50 },
      { ifade: 'ankara dijital pazarlama ajansı', hacim: 50 },
      { ifade: 'ankara dijital reklam ajansı', hacim: 50 },
      { ifade: 'ankara dijital pazarlama', hacim: 40 },
      { ifade: 'ankara google reklam ajansı', hacim: 30 },
      { ifade: 'ankara google reklam', hacim: 20 },
    ],
    yorum: [
      'Listenin başındaki “ankara reklam ajansı” ayda yaklaşık 1.000 kez yazılıyor. Bu sözü tabela, matbaa ve açık hava reklamı arayanlar da kullanıyor; biz bu işleri yapmıyoruz. “Ankara sosyal medya yönetimi” ile “ankara sosyal medya ajansı” yazanlar genellikle hesabına içerik üretecek birini arıyor. Hesap yönetimi ve içerik üretimi de bizim işimiz değil: sosyal medyada yalnız Instagram ve Facebook reklamlarını yönetiyoruz.',
      '“Google reklam” geçen iki ifade ayda 20 ile 30 aramada kalıyor; “ankara google ads ajansı” ve “ankara instagram reklam” için ölçüm aracı hiç veri döndürmedi. Bütün sayılar Türkiye’nin tamamında yapılan aramalara ait; kaçının Ankara içinden yazıldığına dair elimizde ölçüm yok. Kampanya kurarken baktığımız liste zaten başka: sizin müşterinizin hizmetinizi hangi sözle ve hangi ilçe adıyla aradığı.',
    ],
  },

  yerel: {
    baslik: 'Ankara’da reklam bütçesinin en sık kaçtığı altı yer',
    giris: 'Aynı reklam Sincan’da başka, Çankaya’da başka sonuç verir. Aşağıdaki işletmeler temsilidir; durumların her biri reklam hesaplarında sık görülür.',
    kartlar: [
      {
        soru: 'Reklamım neden Ankara dışında da görünüyor?',
        ornek:
          'Keçiören’de bir halı yıkama firması Google reklamını Ankara’ya hedeflemiş, ama konum seçeneği yalnız orada bulunanlarla sınırlanmamış. Reklam başka şehirlerden Ankara’yı araştıranlara ve servis aracının gitmediği Sincan ile Gölbaşı’na da gösteriliyor.',
        care: 'Konum ayarını yalnız orada bulunan kişilere çeviriyor, reklamı servis verdiğiniz ilçelerle sınırlıyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Kayıt dönemi reklamına ne zaman başlamalıyız?',
        ornek:
          'Eryaman’da bir özel anaokulu reklamını her yıl ağustos sonunda açıyor. Veliler ise okulları kış bitmeden gezmeye başlıyor; reklam yayına girdiğinde birçoğu kararını vermiş oluyor.',
        care: 'Reklam takvimini velinin araştırmaya başladığı aylara göre kuruyor, bütçenin aylara dağılımını sizinle planlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'Haritada arayan kişiye reklam gösterilebilir mi?',
        ornek:
          'Tunalı Hilmi Caddesi’nde yeni açılan bir restoran Instagram’da tanınıyor, ama öğle yemeği için haritaya bakan kişinin karşısına çıkmıyor. İşletme profili reklam hesabına bağlanmadığı için arama reklamında adres ve yol tarifi de görünmüyor.',
        care: 'Google İşletme Profili’ni reklam hesabına bağlıyor, reklamı caddeye yakın aramalarda adresle birlikte gösteriyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Instagram’dan mesaj çok, rezervasyon neden az?',
        ornek:
          'Gölbaşı’nda kır düğünü yapan bir mekân Instagram reklamından her gün mesaj alıyor. Yazanların çoğu yalnız fiyat soruyor; tarih ve davetli sayısı konuşulmadan yazışma bitiyor.',
        care: 'İlk yanıt metnini tarih ve davetli sayısını soracak biçimde yazıyor, hangi reklamın uygun başvuru getirdiğine bakıyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesaj var, satış yok', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Üretici firma Google reklamından teklif alır mı?',
        ornek:
          'İvedik’te hidrolik hortum üreten bir firma reklamını tek bir genel kelimeye bağlamış. Tıklayanların bir bölümü tek parça arayan araç sahibi, bir bölümü de iş ilanına bakan kişi.',
        care: 'Aramaları toplu alım ve imalat isteyenlere daraltıyor, perakende ve iş ilanı aramalarını hariç tutuyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Form dolduranlar aranınca neden ilgisiz çıkıyor?',
        ornek:
          'Yaşamkent’te konut projesi satan bir inşaat firması Instagram’da form reklamı veriyor. Form tek dokunuşla, bilgiler kendiliğinden dolarak gönderildiği için arandığında projeyi hatırlamayan kişiler çıkıyor.',
        care: 'Forma taşınma zamanını ve aranan daire tipini soran bir adım ekliyor, ilgisiz başvuruyu baştan ayıklıyoruz.',
        cizim: 'defter',
        bag: { etiket: 'İnşaat ve yapı', url: '/sektorler/insaat-ve-yapi/' },
      },
    ],
  },

  isler: {
    baslik: 'Ankara’daki işletmeniz için reklamda neler yapıyoruz?',
    giris: 'Hiç reklam vermemiş bir işletmede de, hesabı yıllardır açık olan bir işletmede de aynı altı kalemi ele alıyoruz.',
    liste: [
      { ad: 'İlçe ve semt hedeflemesi', aciklama: 'Reklamın gösterileceği yeri Ankara’nın tamamı olarak bırakmıyor, müşterinizin geldiği ya da servis verdiğiniz ilçeleri tek tek seçiyoruz. Talebin hangi ilçeden geldiğine bakıp listeyi güncelliyoruz.' },
      { ad: 'Google Ads arama kampanyaları', aciklama: 'Müşterinizin hizmetinizi hangi sözle ve hangi ilçe adıyla aradığını çıkarıyor, kampanyaları bu aramalara göre kuruyoruz. Satış getirmeyen aramaları negatif listeye alıyoruz.' },
      { ad: 'Instagram ve Facebook reklamları', aciklama: 'Reklamın mesaja mı, forma mı, siteye mi çıkacağını iş düzeninize göre seçiyoruz. Hesabınıza içerik üretmiyor ve gönderi paylaşmıyoruz; yalnız reklam kampanyalarını yönetiyoruz.' },
      { ad: 'Harita ve işletme profili', aciklama: 'Google İşletme Profili’nizi reklam hesabına bağlıyor, adresinizin ve yol tarifinin reklamda görünmesini sağlıyoruz.' },
      { ad: 'Dönüşüm takibi ve açılış sayfası', aciklama: 'Telefon aramasını, formu ve WhatsApp dokunuşunu ayrı ayrı sayan düzeni kuruyoruz. Reklamın indiği sayfayı telefonda deniyor, talep bırakmayı zorlaştıran yeri düzeltiyoruz.' },
      { ad: 'Düzenli optimizasyon', aciklama: 'Arama terimlerini ve gelen başvuruları düzenli okuyor, bütçeyi satışa dönen ilçeye, aramaya ve reklama kaydırıyoruz.' },
    ],
    bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
  },

  secim: {
    giris:
      'Ankara’da reklam ajansı ararken tabela ve matbaa firmaları da, Google ve Instagram reklamı yöneten ajanslar da karşınıza çıkıyor. Önce hangisini aradığınızı ayırın, sonra görüştüğünüz ajansa şu soruları sorun.',
  },

  sss: {
    baslik: 'Ankara’da reklam ajansı seçerken sık sorulan sorular',
    giris: 'Ajans seçimi, hesap sahipliği ve yapmadığımız işler hakkında Ankara’daki işletmelerin sorduğu sorular.',
    sorular: [
      {
        soru: 'Ankara’da reklam ajansı nasıl seçilir?',
        cevap:
          'Önce ajansın hangi reklamı yaptığını sorun: Ankara’da bu adı tabela ve baskı yapan firmalar da, Google ve Instagram reklamı yöneten ajanslar da kullanıyor. Dijital reklam için görüşüyorsanız reklam hesabının kimin adına açılacağını ve kampanyadan önce neyi inceleyeceklerini öğrenin. İlk görüşmede hangi ilçelere hizmet verdiğinizi ve bir müşterinin size ne kazandırdığını sormayan ajansla çalışmayı yeniden düşünün.',
        bag: { etiket: 'Ajans seçme rehberi', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Tabela, baskı ya da sosyal medya yönetimi yapıyor musunuz?',
        cevap:
          'Hayır, bu üç işi de yapmıyoruz. Tabela, matbaa işi ve açık hava reklamı bizim alanımız değil; sosyal medya hesabınıza içerik üretmiyor, hesabı yönetmiyoruz. Yaptığımız iş Google Ads ile Instagram ve Facebook reklamlarının kurulması ve düzenli optimizasyonudur.',
      },
      {
        soru: 'Yüz yüze görüşmeden reklam ajansıyla çalışılır mı?',
        cevap:
          'Evet, çalışılır; biz bütün işi uzaktan yürütüyoruz. Reklam hesapları zaten çevrim içi yönetiliyor. Toplantıları telefonla ya da görüntülü yapıyor, hesaptaki değişiklikleri ekran paylaşarak gösteriyoruz.',
      },
      {
        soru: 'Reklam hesabı kimin adına açılır?',
        cevap:
          'Google Ads hesabı da Meta reklam hesabı da işletmenizin adına açılır; ödeme yöntemi ve fatura bilgisi sizde durur. Bize yönetici erişimi tanımlarsınız ve bu erişimi istediğiniz gün kapatabilirsiniz. Hesabınız eski ajansınızın yönetici hesabı altındaysa devir adımlarına ilk görüşmede birlikte bakıyoruz.',
      },
      {
        soru: 'Ankara’da Google reklamı mı, Instagram reklamı mı daha uygun?',
        cevap:
          'Müşteriniz hizmeti ihtiyaç anında arıyorsa Google, sizi görünce fark ediyorsa Instagram daha uygundur. Yenimahalle’de oto çekici arayan kişi Google’a yazar; Bahçelievler’de yeni açılan bir kahveciyi çoğu kişi Instagram’da görür. İki kanalı birlikte kullanan işletmelerde hangisine ne kadar pay ayrılacağını gelen başvurulara bakarak belirliyoruz.',
        bag: { etiket: 'Google Ads mi, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Hekimler ve avukatlar için reklam veriyor musunuz?',
        cevap:
          'Hayır; Türkiye’deki hastaya ya da müvekkile yönelik reklam kampanyası kurmuyoruz. İki meslekte de tanıtım, meslek kurallarıyla sınırlanmış durumda. Çankaya’daki bir muayenehane ya da hukuk bürosu için yaptığımız iş, kurallara uygun bir web sitesi ve SEO çalışmasıdır.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Ankara’da reklam bütçesini ne belirler?',
        cevap:
          'Bütçeyi reklamın gösterileceği ilçelerin sayısı, hedeflenen aramaların tıklama maliyeti ve ayda kaç başvuruya ihtiyacınız olduğu belirler. Yalnız Keçiören’e hizmet veren bir servis ile bütün Ankara’ya satış yapan bir mağazanın ihtiyacı aynı olmaz. Rakamı görüşmede, sizin aramalarınıza bakarak birlikte çıkarıyoruz; sitede bütçe eşiği yayımlamıyoruz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Tıklama, başvuru ya da satış adedi için taahhütte bulunmuyoruz, çünkü sonuç teklifinize, fiyatınıza ve gelen talebe nasıl döndüğünüze de bağlı. Taahhüt ettiğimiz şey hesabı ve aramaları ayrıntılı incelemek, her kararın gerekçesini size anlatmak ve kampanyaları düzenli olarak iyileştirmektir.',
      },
    ],
  },
};

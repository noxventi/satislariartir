/**
 * İzmir reklam ajansı (şehir sayfası; Google Ads ile Instagram ve Facebook reklam yönetimi).
 * Ana niyet: "izmir reklam ajansı" (1.600), "izmir sosyal medya ajansı" (260), "izmir dijital ajans" (210),
 * "izmir dijital reklam ajansı" (170), "izmir dijital pazarlama ajansı" (70), "izmir google reklam ajansı" (20),
 * "izmir google ads" (10), "izmir google reklam" (10). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Aynı hacmi gösteren "izmir reklam ajansları" yakın yazım sayıldığı için listeye ayrıca alınmadı.
 * "Reklam ajansı" aramasını tabela, baskı ve açık hava reklamı arayanlar da yazar: sayfa ne yaptığımızı ve ne
 * yapmadığımızı açıkça söyler (tabela, baskı, açık hava, sosyal medya hesap yönetimi, çekim yok).
 * İzmir'de ofis olduğu yazılmaz. Sağlık ve hukuk için reklam örneği verilmez.
 * Yerel bilgiler: körfezin iki yakası (Bornova, Karşıyaka, Çiğli), Çeşme'de yaz sezonu, Alsancak, Mimar Kemalettin'deki
 * gelinlik ve abiye mağazaları, Torbalı'daki sanayi, Güzelbahçe. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'izmir-reklam-ajansi',
  sehir: 'izmir',
  yerDe: 'İzmir’de',
  hizmet: 'reklam',
  baslik: 'İzmir reklam ajansı',
  metaBaslik: 'İzmir Reklam Ajansı: Google ve Instagram',
  metaAciklama:
    'İzmir’de dijital reklam ajansı: Google Ads ile Instagram ve Facebook reklam yönetimi, ilçe hedefleme ve sezon planı. Tabela ve baskı yapmıyoruz; uzaktan çalışıyoruz.',
  ozet: 'İzmir’de Google ve Instagram reklamlarını ilçeye, sezona ve satışa göre kuruyor; tabela ve baskı işi yapmıyoruz.',
  tanim: [
    'İzmir’deki işletmeler için reklam ajansı hizmeti, Google Ads ile Instagram ve Facebook reklamlarının işletmenin müşteri aldığı ilçelere, mevsime ve satış hedefine göre kurulup düzenli olarak iyileştirilmesi işidir.',
    'Biz dijital reklam ajansıyız: Google’daki arama reklamlarını, Instagram ve Facebook reklamlarını yönetiyoruz. Tabela, baskı, açık hava reklamı ve sosyal medya hesap yönetimi yapmıyoruz. İzmir’de bütçenin nereye gideceğini çoğu zaman harita ve takvim belirler: Bornova’daki bir kurs için Karşıyaka körfezin öbür yakasıdır, Çeşme’deki bir işletmenin müşterisi baharda henüz başka şehirdedir. Hiç reklam vermediyseniz hesabı baştan kuruyor, verip sonuç alamadıysanız önce paranın hangi ilçeye ve hangi aramaya gittiğini inceliyoruz.',
    'Hesapları uzaktan yönetiyoruz. Görüşmeler telefonla ya da görüntülü olur; hesapta yaptığımız değişikliği ve gerekçesini bu görüşmelerde anlatırız.',
  ],
  cagri: 'Reklamlarımı görüşelim',

  aramalar: {
    baslik: 'İzmir’de reklam ajansı arayanlar ne yazıyor?',
    giris: '“Reklam ajansı” İzmir’de iki ayrı işi anlatıyor: tabela ve baskı yapan atölyeler ile internet reklamı yöneten ajanslar aynı sözle aranıyor.',
    liste: [
      { ifade: 'izmir reklam ajansı', hacim: 1600 },
      { ifade: 'izmir sosyal medya ajansı', hacim: 260 },
      { ifade: 'izmir dijital ajans', hacim: 210 },
      { ifade: 'izmir dijital reklam ajansı', hacim: 170 },
      { ifade: 'izmir dijital pazarlama ajansı', hacim: 70 },
      { ifade: 'izmir google reklam ajansı', hacim: 20 },
      { ifade: 'izmir google ads', hacim: 10 },
      { ifade: 'izmir google reklam', hacim: 10 },
    ],
    yorum: [
      'Ayda yaklaşık 1.600 kez yazılan “izmir reklam ajansı” aramasının bir bölümü tabela, araç giydirme ya da matbaa arayanlardan gelir; biz bu işleri yapmıyoruz. “Dijital reklam ajansı”, “google reklam ajansı” ve “google ads” yazanlar doğrudan bizim yaptığımız işi arıyor. “Sosyal medya ajansı” yazan kişi çoğu zaman paylaşım hazırlayacak birini ister; biz hesap yönetmiyor, Instagram ve Facebook’ta reklam yönetiyoruz.',
      'Sayılar ölçüm aracının Türkiye geneli için verdiği aylık yaklaşık değerlerdir; arayanın İzmir’de mi, başka bir şehirde mi olduğunu ölçmedik. Bu liste ajans arayanların sözleridir; kampanyanız için sizin müşterinizin sözleri gerekir. İşin başında hizmetinizin hangi ilçe adıyla ve hangi aylarda arandığını ayrıca araştırıyor, bütçeyi o aramalara göre dağıtıyoruz.',
    ],
  },

  yerel: {
    baslik: 'İzmir’de reklam verirken en sık gördüğümüz altı sorun',
    giris: 'Sorunların çoğu reklam metninden önce haritada ve takvimde başlıyor. Örnek işletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Reklamım neden gelmeyecek kişiye gösteriliyor?',
        ornek:
          'Bornova’da bir sürücü kursu Google reklamını bütün İzmir’e açmış. Tıklamaların bir bölümü Karşıyaka ve Çiğli’den geliyor; o yakada oturan aday direksiyon dersi için körfezi dolaşıp Bornova’ya gelmiyor.',
        care: 'Reklamı kursiyerin gerçekten geldiği ilçelerle sınırlıyor, bütçeyi o ilçelerdeki aramalara topluyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Sezonluk işletme reklama ne zaman başlamalı?',
        ornek:
          'Çeşme’de günübirlik tekne turu düzenleyen bir işletme reklamı temmuzda, sezonun ortasında açıyor. Tatilini bahar aylarında planlayan aile o günlerde yalnız başka işletmelerin reklamını görmüş oluyor.',
        care: 'Reklam takvimini talebin başladığı aylara göre kuruyor, sezon içinde bütçeyi dolu ve boş günlere göre ayarlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Yakındaki müşteri bizi haritada neden seçmiyor?',
        ornek:
          'Alsancak’ta bir çiçekçi Instagram’da reklam veriyor, ama harita profilinde çalışma saati eski ve telefon numarası değişmiş. Yolda “yakınımda çiçekçi” yazan kişi açık görünen başka bir dükkâna yöneliyor.',
        care: 'Reklamdan önce harita profilini düzeltiyor, arama reklamına dükkânın konumunu ve yol tarifini ekliyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Instagram’dan mesaj çok, satış neden az?',
        ornek:
          'Mimar Kemalettin’de gelinlik ve abiye satan bir mağaza Instagram reklamından her gün mesaj alıyor. Yazanların çoğu yalnız fiyat sorup kayboluyor, bir bölümü de başka şehirden yazdığı için provaya gelemiyor.',
        care: 'Reklamı provaya gelebilecek bölgeyle sınırlıyor, ilk yanıtı fiyat yerine prova randevusuna götürecek biçimde yazıyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar satışa dönmüyor', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Bütçemiz neden İzmir dışında harcanıyor?',
        ornek:
          'Torbalı’da ofis mobilyası üreten bir firma yalnız İzmir, Manisa ve Aydın’a teslimat yapıyor. Konum ayarı bölgeyle ilgilenen herkesi kapsayacak biçimde bırakıldığı için reklam başka şehirlerden arayanlara da çıkıyor.',
        care: 'Konum ayarını bölgede bulunan kişilerle sınırlıyor, il dışından gelen aramaları tek tek kapatıyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Kayıt dönemi bütçesi nasıl planlanmalı?',
        ornek:
          'Güzelbahçe’de bir anaokulu ön kayıtları şubatta açıyor, reklam bütçesi ise yılın her günü aynı. Velilerin okul aradığı haftalarda bütçe öğlene kalmadan bitiyor, yazın ise kimsenin aramadığı günlerde harcanıyor.',
        care: 'Bütçeyi kayıt takvimine göre aylara bölüyor, yoğun haftalarda reklamın gün boyu yayında kalmasını sağlıyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
    ],
  },

  isler: {
    baslik: 'İzmir’deki işletmenizin reklamı için neler yapıyoruz?',
    giris: 'Yayına almadan önce inceliyor, yayından sonra düzenli olarak düzeltiyoruz. İşin kalemleri şunlar:',
    liste: [
      {
        ad: 'Hesap ve arama incelemesi',
        aciklama: 'Reklam veriyorsanız paranın hangi ilçeden ve hangi aramadan gelen tıklamaya gittiğini satır satır okuyoruz. Vermiyorsanız müşterinizin hizmetinizi İzmir’de nasıl aradığını çıkarıyoruz.',
      },
      {
        ad: 'İlçe ve semt hedeflemesi',
        aciklama: 'Reklamı il sınırına göre açmıyoruz. Müşterinizin geldiği ilçeleri, gerekirse körfezin tek yakasını seçiyor, gelmeyeceği bölgeyi dışarıda bırakıyoruz.',
      },
      {
        ad: 'Google Ads kampanyaları',
        aciklama: 'Hizmetinizi adıyla arayan kişiye çıkan arama reklamlarını kuruyor, satış getirmeyen aramaları negatif kelimeyle kapatıyoruz.',
      },
      {
        ad: 'Instagram ve Facebook reklamları',
        aciklama: 'Reklamın mesaja mı, forma mı, siteye mi çıkacağını işinize göre seçiyoruz: çarşıdaki mağazada mesaj, Çeşme’deki işletmede rezervasyon talebi gibi.',
      },
      {
        ad: 'Sezon ve dönem takvimi',
        aciklama: 'Yaz sezonunu, okul kayıtlarını ve fuar haftalarını önceden işaretliyor, bütçeyi talebin yükseldiği haftalara kaydırıyoruz.',
      },
      {
        ad: 'Açılış sayfası ve dönüşüm takibi',
        aciklama: 'Reklamın indiği sayfayı telefonda deniyor; aramayı, formu ve WhatsApp dokunuşunu ayrı ayrı sayan ölçümü yayından önce kuruyoruz.',
      },
    ],
    bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
  },

  secim: {
    giris:
      'İzmir’de reklam ajansıyla görüşmeden önce kendinize bir soru sorun: müşteriniz sizi Google’da mı arıyor, Instagram’da mı görüyor? Ajansa soracaklarınız bundan sonra gelir.',
  },

  sss: {
    baslik: 'İzmir’de reklam ajansı hakkında sık sorulan sorular',
    giris: 'Hangi işi yaptığımız, hesabın sahipliği ve bütçe üzerine İzmir’deki işletmelerden duyduğumuz sorular.',
    sorular: [
      {
        soru: 'İzmir’de reklam ajansı nasıl seçilir?',
        cevap:
          'Önce ajansın hangi işi yaptığını sorun, çünkü İzmir’de “reklam ajansı” adını tabelacılar da, dijital ajanslar da kullanıyor. Dijital reklam için görüşüyorsanız hesabın kimin adına açılacağını ve bütçenin hangi aramalara gittiğini size nasıl göstereceklerini öğrenin. Hesabınızı görmeden sonuç sözü veren ajansa temkinli yaklaşın.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Tabela, afiş ya da billboard işi yapıyor musunuz?',
        cevap:
          'Hayır, yapmıyoruz. Tabela, baskı, açık hava reklamı, fotoğraf ve video çekimi bizim işimiz değil. Yaptığımız iş Google Ads ile Instagram ve Facebook reklamlarını kurmak ve yönetmek, gerekiyorsa reklamın indiği sayfayı hazırlamaktır.',
      },
      {
        soru: 'Sosyal medya hesabımızı da yönetiyor musunuz?',
        cevap:
          'Hayır; paylaşım hazırlama ve hesap yönetimi yapmıyoruz. Instagram ve Facebook’ta reklam yönetiyoruz: hedefi, kitleyi, bölgeyi ve denenecek reklam fikrini biz planlıyoruz. Görseli ve videoyu kimin hazırlayacağı ilk görüşmede netleşir.',
      },
      {
        soru: 'Google reklamı mı, Instagram reklamı mı vermeliyim?',
        cevap:
          'Müşteriniz hizmeti arayarak buluyorsa Google, görerek karar veriyorsa Instagram ilk kanal olur. Sürücü kursunu, nakliyeciyi ya da tesisatçıyı insanlar Google’a yazar; gelinliği, kahvaltı mekânını ya da Alaçatı’daki oteli çoğu zaman Instagram’da görür. İncelemeden sonra hangisiyle başlayacağınızı gerekçesiyle öneriyoruz.',
        bag: { etiket: 'Google mı, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Yüz yüze görüşmeden reklam yönetimi yürür mü?',
        cevap:
          'Evet, yürür; reklam hesapları internet üzerinden yönetildiği için bütün işi uzaktan yapıyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, hesabınıza sizin verdiğiniz yönetici erişimiyle giriyoruz. Hizmet verdiğiniz ilçeleri, yoğun aylarınızı ve müşterinizi ilk görüşmede sizden dinliyoruz.',
      },
      {
        soru: 'Reklam hesabı kimin adına açılır?',
        cevap:
          'Google Ads hesabı da Meta reklam hesabı da işletmenizin adına açılır, ödeme yöntemi sizin olur. Biz hesaba sizin tanımladığınız erişimle gireriz; çalışmayı bıraktığımızda hesap ve içindeki geçmiş sizde kalır.',
      },
      {
        soru: 'İzmir’de reklam bütçesi neye göre belirlenir?',
        cevap:
          'Bütçe; reklamın gösterileceği ilçelerin sayısına, hedeflenen aramaların tıklama maliyetine ve kaç başvuruya ihtiyacınız olduğuna göre belirlenir. Rakam söylemiyoruz, çünkü Kemeraltı’ndaki bir mağaza ile bütün Ege’ye satış yapan bir üreticinin ihtiyacı aynı değil. Görüşmede aramaları birlikte inceleyip başlangıç planını yazıyoruz.',
      },
      {
        soru: 'Reklamda satış garantisi veriyor musunuz?',
        cevap:
          'Hayır. Tıklama, mesaj ya da satış adedi için söz vermiyoruz. Üstlendiğimiz iş hesabı ve aramaları ayrıntılı incelemek, kampanyayı bulguya göre kurmak, sonuç getirmeyeni kapatıp getireni büyütmek ve kararlarımızı gerekçesiyle anlatmaktır.',
      },
    ],
  },
};

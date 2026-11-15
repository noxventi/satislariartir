/**
 * Bursa reklam ajansı (şehir sayfası).
 * Ana niyet: “bursa reklam ajansı” (1.000), “bursa dijital pazarlama ajansı” (170), “bursa sosyal medya ajansı” (110),
 * “bursa sosyal medya yönetimi” (110), “bursa dijital reklam ajansı” (70). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * “bursa reklam ajansları” aynı hacmi gösteren yakın yazım olduğu için listeye alınmadı.
 * “Reklam ajansı” aramasını tabela, matbaa ve açık hava reklamı arayanlar da yapar: sayfa ne olduğumuzu ve ne yapmadığımızı
 * açıkça söyler. Sosyal medya aramalarında hesap yönetimi değil, sosyal medya reklamı yönettiğimiz yazılır.
 * Bursa’da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir. Sağlık ve hukuk için reklam örneği verilmez.
 * Yerel bilgiler herkesçe bilinen olgulardır: Osmangazi, Yıldırım, Nilüfer, İnegöl, Gemlik, Karacabey ilçeleri; İnegöl’e mobilya
 * alışverişi için başka illerden gelinmesi; Uludağ kış sezonu; Mudanya ile İstanbul arasındaki deniz otobüsü; Nilüfer Organize
 * Sanayi Bölgesi. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'bursa-reklam-ajansi',
  sehir: 'bursa',
  yerDe: 'Bursa’da',
  hizmet: 'reklam',
  baslik: 'Bursa reklam ajansı',
  metaBaslik: 'Bursa Reklam Ajansı: Google ve Instagram',
  metaAciklama:
    'Bursa’daki işletmeler için dijital reklam ajansı: Google Ads ile Instagram ve Facebook reklam yönetimi, ilçe hedeflemesi ve düzenli optimizasyon. Uzaktan çalışıyoruz.',
  ozet: 'İnegöl’deki mobilya mağazasından Uludağ’daki otele, Bursa’da reklam bütçesini doğru ilçeye ve doğru mevsime yönelten Google ve Instagram reklam yönetimi.',
  tanim: [
    'Bursa’daki işletmeler için reklam ajansı hizmeti, Google Ads ile Instagram ve Facebook reklamlarının işletmenin hizmet verdiği ilçelere, satış mevsimine ve müşterinin aramasına göre kurulup düzenli olarak iyileştirilmesi işidir.',
    'Biz dijital reklam ajansıyız: Google Ads ile Instagram ve Facebook reklamlarını yönetiyoruz; tabela, baskı, araç giydirme ve açık hava reklamı yapmıyoruz. Bursa’da bütçenin nereye gideceğini işin türü belirliyor. Nilüfer’deki kurs merkezi çevre mahallelere, İnegöl’deki mobilya mağazası ilçeye alışverişe gelen başka şehirlerin müşterisine, Uludağ’daki otel kar yağmadan önce tatilini planlayan aileye seslenir. İlk kez reklam verecekseniz kurulumdan önce müşterinizin aramalarını, veriyorsanız hesabınızı ayrıntılı inceliyoruz.',
    'Çalışma uzaktan ilerliyor: görüşmeleri telefonla ya da görüntülü yapıyor, hesabınızı ekranda birlikte açıp kararları orada konuşuyoruz.',
  ],
  cagri: 'Reklamlarımı görüşelim',

  aramalar: {
    baslik: 'Bursa’da reklam ajansı arayanlar ne yazıyor?',
    giris: '“Reklam ajansı” yazan herkes aynı işi aramıyor; ifadelerin bir kısmı dijital reklamı, bir kısmı sosyal medya hesabının yönetimini kastediyor.',
    liste: [
      { ifade: 'bursa reklam ajansı', hacim: 1000 },
      { ifade: 'bursa dijital pazarlama ajansı', hacim: 170 },
      { ifade: 'bursa sosyal medya ajansı', hacim: 110 },
      { ifade: 'bursa sosyal medya yönetimi', hacim: 110 },
      { ifade: 'bursa dijital reklam ajansı', hacim: 70 },
      { ifade: 'bursa dijital pazarlama', hacim: 50 },
      { ifade: 'bursa dijital ajans', hacim: 40 },
      { ifade: 'bursa google reklam', hacim: 10 },
    ],
    yorum: [
      '“Bursa reklam ajansı” ayda yaklaşık 1.000 kez yazılıyor, ama bu aramayı tabela, matbaa ve açık hava reklamı yaptırmak isteyenler de yapıyor; bu işler bizde yok. “Dijital pazarlama ajansı” ve “dijital reklam ajansı” yazanlar aradığı işi daha açık söylüyor. “Sosyal medya ajansı” ile “sosyal medya yönetimi” aramalarında beklenti çoğunlukla hesabın içeriğini üretip paylaşacak biridir. Biz hesap yönetmiyor, içerik üretmiyoruz; Instagram ve Facebook’ta reklam kampanyalarını yönetiyoruz.',
      'Sayılar ifadelerin Türkiye genelindeki aylık yaklaşık aramalarıdır; arayanın Bursa’da olup olmadığına dair ayrı bir ölçümümüz yok. Kanal adıyla yapılan “bursa google reklam” araması ise listenin en küçük satırı. Kampanyayı kurarken asıl kullandığımız liste başkadır: sizin hizmetiniz için Bursa’da ve ilçelerinde ne yazıldığını Google Ads’in anahtar kelime aracıyla ayrıca çıkarıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Bursa’da reklam verirken en sık karşılaştığımız altı durum',
    giris: 'Aynı bütçe Nilüfer’de bir kurs için başka, İnegöl’de bir mağaza için başka yere harcanır. Altı durum ve her birinde ilk kontrol ettiğimiz ayar:',
    kartlar: [
      {
        soru: 'Reklamım neden gidemeyeceğimiz ilçelerde görünüyor?',
        ornek:
          'Osmangazi’de bir kombi servisi Google reklamını bütün Bursa’ya açmış. Gemlik’ten, İnegöl’den ve Karacabey’den gelen aramalara servis gönderemiyor, bütçenin bir bölümü bu tıklamalara gidiyor.',
        care: 'Reklamın gösterildiği bölgeyi servis verdiğiniz ilçelerle sınırlıyor, talebin hangi bölgeden geldiğine düzenli bakıyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'İnegöl’e mobilya almaya gelen müşteriye nasıl ulaşırız?',
        ornek:
          'İnegöl’de bir mobilya mağazası Instagram reklamını yalnız ilçede oturanlara gösteriyor. Takım almak için ilçeye çevre illerden de geliniyor; bu aileler yola çıkmadan önce modelleri telefonundan inceliyor.',
        care: 'Satışların hangi şehirlerden geldiğine bakıyor, reklam bölgesini ve reklamdaki sözü bu şehirlere göre ayrı ayrı kuruyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Sezon reklamına ne zaman başlamak gerekir?',
        ornek:
          'Uludağ’da kayak takımı kiralayan bir işletme reklamı ilk kar haberiyle birlikte açıyor. Sömestir tatilini planlayan aileler ise konaklamayı ve kiralamayı o tarihten önce araştırmaya başlamış oluyor.',
        care: 'Arama verisinden ilginin hangi haftalarda başladığını çıkarıyor, kampanyayı ve bütçeyi sezon takvimine göre planlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Hafta sonu gelen misafir bizi nasıl bulsun?',
        ornek:
          'Mudanya sahilinde bir balık restoranı reklamı yalnız Instagram’da veriyor. İstanbul’dan deniz otobüsüyle gelen aile iskelede telefonunu açıp “yakınımdaki balık restoranı” yazdığında haritada başka mekânları görüyor.',
        care: 'Google İşletme Profili’ni reklam hesabına bağlıyor, harita ve yakın çevre aramalarında görünen kampanyayı kuruyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Üretici firmayız, Google reklamı bize uyar mı?',
        ornek:
          'Nilüfer Organize Sanayi Bölgesi’nde kauçuk parça üreten bir firma reklamda yalnız “kauçuk” kelimesini kullanıyor. Tıklayanların çoğu iş ilanı arayan, ödev hazırlayan ya da tek bir conta almak isteyen kişiler oluyor.',
        care: 'Satın almacının yazdığı teknik aramaları seçiyor, iş ilanı ve perakende aramalarını negatif kelimeyle dışarıda bırakıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Mesaj çok, kayıt yok; sorun nerede?',
        ornek:
          'Nilüfer’de Özlüce’deki bir yabancı dil kursu kayıt döneminde Instagram reklamından onlarca mesaj alıyor. Yazanların bir bölümü şehrin öbür ucunda oturuyor, bir bölümü ücreti öğrenip sessizleşiyor, bir bölümüne de yanıt ertesi gün gidiyor.',
        care: 'Gelen mesajları tek tek okuyor; reklam bölgesini, reklamdaki sözü ve ilk yanıt metnini bulguya göre değiştiriyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar satışa dönmüyorsa', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
    ],
  },

  isler: {
    baslik: 'Bursa’da reklam yönetiminde hangi işleri üstleniyoruz?',
    giris: 'Reklamı yayına almak işin kısa kısmı. Bütçenin Bursa’da doğru ilçeye, doğru haftaya ve doğru aramaya gitmesi aşağıdaki altı işe bağlı.',
    liste: [
      { ad: 'Hesap ve arama incelemesi', aciklama: 'Reklam veriyorsanız hesabınızdaki arama terimlerini ve gelen başvuruları okuyoruz. İlk kez verecekseniz hizmetiniz için Bursa’da ne yazıldığını ve rakip reklamları çıkarıyoruz.' },
      { ad: 'İlçe ve bölge hedeflemesi', aciklama: 'Reklamı il geneline açmak yerine Nilüfer, Osmangazi, Yıldırım ya da İnegöl gibi müşteri aldığınız yerlere göre bölüyoruz. Şehir dışından müşteri alan işlerde hedef şehirleri ayrıca belirliyoruz.' },
      { ad: 'Google Ads kampanyaları', aciklama: 'Hizmetinizi arayan kişinin yazdığı ifadeleri seçiyor, satış getirmeyen aramaları negatif kelimeyle kapatıyoruz.' },
      { ad: 'Instagram ve Facebook reklamları', aciklama: 'Kampanya hedefini mesaj, form ya da site ziyareti olarak işinize göre seçiyoruz. Görselleri ve videoları siz sağlarsınız; hangi sözün ve hangi karenin deneneceğini biz planlarız.' },
      { ad: 'Sezon ve dönem planı', aciklama: 'Kış sezonu, okul kayıt dönemi ya da düğün ayları gibi işinizin yoğunlaştığı haftalar için bütçeyi ve kampanyayı önceden hazırlıyoruz.' },
      { ad: 'Açılış sayfası ve dönüşüm takibi', aciklama: 'Reklamın indiği sayfayı telefonda deniyor; aramayı, formu ve WhatsApp tıklamasını ayrı ayrı sayacak ölçümü yayından önce kuruyoruz.' },
    ],
    bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
  },

  secim: {
    giris:
      'Bursa’da sanayiye iş yapan bir firma ile Uludağ yolundaki bir otel aynı ajanstan çok farklı işler bekler. Ne beklediğinizi bilerek görüşmeye girerseniz aşağıdaki soruların cevabını tartmak kolaylaşır.',
  },

  sss: {
    baslik: 'Bursa’da reklam ajansı seçerken sık sorulanlar',
    giris: 'Hangi işleri yaptığımız, hesabın sahipliği, bütçe ve uzaktan çalışma üzerine sık gelen sorular.',
    sorular: [
      {
        soru: 'Bursa’da reklam ajansı nasıl seçilir?',
        cevap:
          'Önce ajansın hangi reklamı yaptığını netleştirin: tabela ve baskı işi yapan firma ile Google ve Instagram reklamı yöneten ajans farklı işletmelerdir. Dijital reklam için görüştüğünüz ajansa hesabın kimin adına açılacağını, arama terimlerine ne sıklıkla baktığını ve bir kararını hangi veriye dayandırdığını sorun. Bu sorulara açık cevap alamıyorsanız aramaya devam edin.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Tabela, broşür ya da billboard işi yapıyor musunuz?',
        cevap:
          'Hayır; tabela, matbaa, araç giydirme ve açık hava reklamı yapmıyoruz. Sosyal medya hesabı yönetimi, içerik üretimi, fotoğraf ve video çekimi de işimiz değil. Yaptığımız iş Google Ads ile Instagram ve Facebook reklamlarını kurmak ve yönetmek, yanında reklamın indiği sayfayı ve gerekiyorsa sitenizi hazırlamaktır.',
      },
      {
        soru: 'Yüz yüze görüşmeden reklam yönetimi yürütülür mü?',
        cevap:
          'Evet; reklam yönetimi hesap üzerinden yapılan bir iştir ve biz bütün çalışmalarımızı uzaktan yürütüyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, hesabı ekranda birlikte açıp kararları üzerinden anlatıyoruz. Bursa’nın hangi ilçelerinden müşteri aldığınızı ve işinizin yoğun dönemlerini ilk görüşmede sizden dinliyoruz.',
      },
      {
        soru: 'Reklam hesabı kimin adına açılır?',
        cevap:
          'Google Ads ve Meta reklam hesapları işletmenizin adına açılır, ödeme yöntemi ve fatura bilgisi sizde durur. Biz hesaba yönetici olarak ekleniriz. Çalışma sona erdiğinde hesap, geçmiş veriler ve kampanyalar sizde kalır.',
      },
      {
        soru: 'Google reklamı mı, Instagram reklamı mı vermeliyim?',
        cevap:
          'Müşteriniz ihtiyacı doğduğunda sizi arıyorsa Google, ürünü görünce istiyorsa Instagram ile başlamak daha doğrudur. Kombi servisi, nakliye ya da sanayi tedariki gibi işlerde kişi Google’a yazar; mobilya, gelinlik ya da yeni açılan bir restoran çoğu zaman önce Instagram’da görülür. İncelemeden sonra hangi kanalla başlanacağını gerekçesiyle öneriyoruz.',
        bag: { etiket: 'Google Ads mi, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Bursa’da reklam bütçesi ne kadar olmalı?',
        cevap:
          'Tek bir rakam vermek doğru olmaz; bütçeyi hedeflediğiniz aramaların tıklama maliyeti, kaç ilçeye hizmet verdiğiniz ve ayda kaç yeni müşteriyi karşılayabildiğiniz belirler. Görüşmede sektörünüzün aramalarını birlikte açıyor, hangi bütçeyle neyin denenebileceğini yazılı olarak paylaşıyoruz.',
      },
      {
        soru: 'Klinikler ve hukuk büroları için reklam veriyor musunuz?',
        cevap:
          'Hayır; sağlık ve hukuk alanında reklam kampanyası önermiyoruz, çünkü bu mesleklerin tanıtım kuralları reklamı sınırlar. Bu alanlarda yalnız web sitesi ve SEO çalışması yapıyoruz.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Satış ya da müşteri sayısı için garanti veriyor musunuz?',
        cevap:
          'Hayır; satış adedi, tıklama maliyeti ya da belirli bir sürede sonuç için söz vermiyoruz. Verdiğimiz söz hesabınızı ve pazarınızı ayrıntılı incelemek, kampanyayı bu bulguyla kurmak ve satış getirmeyen harcamayı düzenli olarak ayıklamaktır.',
      },
    ],
  },
};

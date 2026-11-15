/**
 * İstanbul reklam ajansı (şehir sayfası; Google Ads ile Instagram ve Facebook reklam yönetimi).
 * Ana niyet: "istanbul reklam ajansı" (9.900; ölçüm dosyasında doğrulanmamış şaşırtıcı değer olarak işaretli, yorumda
 * öyle anılır), "istanbul dijital ajans" (140), "istanbul dijital pazarlama ajansı" (140), "istanbul sosyal medya ajansı"
 * (140), "istanbul google reklam ajansı" (20). İlçe ve yaka adlı ifadeler de panoda: beylikdüzü 110, pendik 90, kadıköy 70,
 * maslak 40, anadolu yakası 20. Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * "istanbul reklam ajansları" aynı hacmi gösteren yakın yazım olduğu için, "istanbul reklam" (1.300) niyeti belirsiz
 * olduğu için listeye alınmadı.
 * Bu aramayı tabela, matbaa ve açık hava reklamı arayanlar da yazar; sayfa ne yaptığımızı ve ne yapmadığımızı açıkça
 * söyler. Sağlık ve hukuk için reklam örneği verilmez. İstanbul’da ofis olduğu yazılmaz.
 * Yerel bilgiler herkesçe bilinen olgulardır: Maslak’taki oto sanayi sitesi, Merter’in tekstil toptancıları, Adalar’ın
 * bahar ve yaz ziyaretçisi, Tarabya’nın balık restoranları, Levent’in plazaları. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'istanbul-reklam-ajansi',
  sehir: 'istanbul',
  yerDe: 'İstanbul’da',
  hizmet: 'reklam',
  baslik: 'İstanbul reklam ajansı',
  metaBaslik: 'İstanbul Reklam Ajansı: Google ve Instagram',
  metaAciklama:
    'İstanbul’da dijital reklam ajansı: Google Ads, Instagram ve Facebook reklamlarını ilçe ve yaka hedeflemesiyle yönetiyoruz. Tabela ve baskı yapmıyor, uzaktan çalışıyoruz.',
  ozet: 'İstanbul’da reklam bütçesini müşterinin gerçekten geldiği ilçelere ve yakaya toplayan Google Ads ve Instagram reklam yönetimi.',
  tanim: [
    'İstanbul’daki işletmeler için dijital reklam ajansı hizmeti, Google Ads ile Instagram ve Facebook reklamlarının işletmenin müşteri aldığı ilçelere ve yakaya göre kurulması, yönetilmesi ve bütçenin satış getiren aramalara yönlendirilmesi işidir.',
    'Biz dijital reklam ajansıyız: Google Ads ile Instagram ve Facebook reklamlarını yönetiyoruz; tabela, baskı, açık hava reklamı ve sosyal medya hesap yönetimi yapmıyoruz. İstanbul’da Maslak’taki oto servisin, Merter’deki toptancının ve Büyükada’daki pansiyonun müşterisi aynı haritada durmuyor. Hesabınız varsa hesabı, yoksa müşterinizin aramalarını ve rakip reklamları inceliyor, reklamı müşterinizin geldiği ilçelere göre kuruyoruz.',
    'Reklam hesaplarına uzaktan erişerek çalışıyoruz; görüşmeleri telefonla ya da görüntülü yapıyor, verdiğimiz her kararı gerekçesiyle anlatıyoruz.',
  ],
  cagri: 'Reklamlarımı görüşelim',

  aramalar: {
    baslik: 'İstanbul’da reklam ajansı arayan ne yazıyor?',
    giris: '“Reklam ajansı” sözünü İstanbul’da dijital reklam arayan da, tabela, matbaa ya da açık hava reklamı arayan da yazıyor.',
    liste: [
      { ifade: 'istanbul reklam ajansı', hacim: 9900 },
      { ifade: 'istanbul dijital ajans', hacim: 140 },
      { ifade: 'istanbul dijital pazarlama ajansı', hacim: 140 },
      { ifade: 'istanbul sosyal medya ajansı', hacim: 140 },
      { ifade: 'beylikdüzü reklam ajansı', hacim: 110 },
      { ifade: 'pendik reklam ajansı', hacim: 90 },
      { ifade: 'kadıköy reklam ajansı', hacim: 70 },
      { ifade: 'maslak reklam ajansı', hacim: 40 },
      { ifade: 'anadolu yakası reklam ajansı', hacim: 20 },
      { ifade: 'istanbul google reklam ajansı', hacim: 20 },
    ],
    yorum: [
      '“İstanbul reklam ajansı” için ölçüm aracı ayda yaklaşık 9.900 arama gösteriyor. Bu, aracın verdiği yaklaşık değerdir; başka bir kaynakla doğrulamadık ve arayanların ne kadarının dijital reklam, ne kadarının tabela ya da baskı işi aradığını bilmiyoruz. “Dijital pazarlama ajansı” ve “google reklam ajansı” yazanların niyeti daha açık. “Sosyal medya ajansı” yazanların bir bölümü hesap yönetimi ve içerik üretimi arıyor; biz bu işi yapmıyor, sosyal medyada yalnız reklam yönetiyoruz.',
      'Listenin alt yarısı İstanbul’a özgü bir şey söylüyor: Beylikdüzü, Pendik, Maslak, hatta “anadolu yakası” için ayrı ayrı reklam ajansı aranıyor. Sayılar Türkiye genelindeki aramalardır; arayanın bulunduğu yeri ölçmedik. Yine de ilçe ve yaka adlarının aramaya girmesi, işletme sahibinin reklamı kendi bölgesi üzerinden düşündüğünü gösteriyor. Kampanya kurarken ilk kararımız bu yüzden bölgedir: reklam hangi ilçelerde gösterilecek, hangilerinde gösterilmeyecek.',
    ],
  },

  yerel: {
    baslik: 'İstanbul’da reklam verirken en sık gördüğümüz altı sorun',
    giris: 'Altısı da şehrin büyüklüğünden ve aynı aramaya teklif veren firmaların çokluğundan doğuyor. Örnek işletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Reklamı bütün İstanbul’a mı, kendi yakama mı vermeliyim?',
        ornek:
          'Maslak’taki oto sanayi sitesinde çalışan bir servis, Google reklamının konumunu “İstanbul” olarak bırakmış. Reklama Pendik’teki, Tuzla’daki sürücüler de tıklıyor; çoğu arabasını köprünün öbür yanındaki bir servise getirmiyor.',
        care: 'Konumu müşterinizin gerçekten geldiği ilçelerle sınırlıyor, hangi ilçeden gelen tıklamanın randevuya döndüğüne bakıyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Otomotiv', url: '/sektorler/otomotiv/' },
      },
      {
        soru: 'Mesaj çok geliyor, toptan alıcı neden yok?',
        ornek:
          'Merter’de toptan satış yapan bir tekstil firması Instagram reklamında yeni sezon ürünlerini gösteriyor. Gelen mesajların çoğu tek parça almak isteyen kişilerden; butik işleten alıcı aradan seçilemiyor.',
        care: 'Reklamın sözüne ve ilk yanıt mesajına toptan satış koşulunu yazıyor, kitleyi perakende müşteriden ayırıyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'Mesajlar satışa dönmüyor', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Sezon dışında da reklam vermeli miyim?',
        ornek:
          'Büyükada’da bir pansiyon reklam bütçesini yılın her ayına eşit bölmüş. Adaya ilginin arttığı bahar ve yaz hafta sonlarında bütçe günün ortasında tükeniyor, kışın ise aynı para az sayıda aramaya harcanıyor.',
        care: 'Bütçeyi sezona ve haftanın günlerine göre dağıtıyor, sezon dışında yalnız rezervasyona yakın aramaları açık tutuyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Reklamımız haritada neden adres ve yol tarifiyle çıkmıyor?',
        ornek:
          'Tarabya’da bir balık restoranı Google’da arama reklamı veriyor, ama reklam hesabı Google İşletme Profili’ne bağlı değil. Akşam için yer bakan kişi, haritada adresi ve yorumları görünen başka bir restorana yöneliyor.',
        care: 'İşletme Profili’ni reklam hesabına bağlıyor, reklamı adres ve yol tarifi bilgisiyle birlikte yayına alıyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Kurumsal müşteri arıyoruz, Instagram reklamı işimize yarar mı?',
        ornek:
          'Levent’teki plazalara ofis temizliği hizmeti veren bir firma Instagram’da gönderi öne çıkarıyor; yazanlar ev temizliği soran kişiler. Plazanın idari işler sorumlusu ise bu hizmeti mesai saatinde Google’da arıyor.',
        care: 'Müşterinizin sizi arayarak mı, görerek mi bulduğunu inceliyor, bütçeyi Google ile Instagram arasında buna göre bölüyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Kanal seçimi rehberi', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'İstanbul’da tıklama neden bu kadar pahalıya geliyor?',
        ornek:
          'Maltepe’de bir evden eve nakliyat firması “istanbul nakliyat” gibi geniş aramalara teklif veriyor. Aynı aramaya şehrin her yanından firmalar teklif verdiği için tıklama pahalıya geliyor, bütçe gün bitmeden tükeniyor.',
        care: 'Geniş aramaları daraltıyor, ilçe adını ve işin türünü birlikte taşıyan aramaları öne alıyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'TBM nedir?', url: '/blog/roas-ctr-tbm-nedir/' },
      },
    ],
  },

  isler: {
    baslik: 'İstanbul’da reklam yönetiminde hangi işleri yapıyoruz?',
    giris: 'Reklamı yayına almak işin kısa kısmı. Bütçenin nereye gittiğini aşağıdaki altı iş belirliyor.',
    liste: [
      { ad: 'Hesap ve arama incelemesi', aciklama: 'Reklam veriyorsanız hesabınızdaki arama terimlerini ve tıklamaların geldiği ilçeleri, vermiyorsanız müşterinizin aramalarını ve rakip reklamları inceliyoruz.' },
      { ad: 'İlçe ve yaka hedeflemesi', aciklama: 'Reklamın gösterileceği ilçeleri müşterinizin size ulaşabildiği mesafeye göre seçiyor, İşletme Profili’ni hesaba bağlayıp reklamı adresinizle birlikte gösteriyoruz.' },
      { ad: 'Google Ads kampanyaları', aciklama: 'Arama kampanyalarını ilçe adı ve iş türü taşıyan aramalara göre kuruyor, satış getirmeyen terimleri negatif kelime olarak kapatıyoruz.' },
      { ad: 'Instagram ve Facebook reklamları', aciklama: 'Mesaj, form ya da site hedefini iş düzeninize göre seçiyor, kitleyi hizmet bölgenizle sınırlıyoruz. Hesabınıza gönderi üretmiyoruz; yaptığımız iş reklam yönetimidir.' },
      { ad: 'Dönüşüm takibi ve açılış sayfası', aciklama: 'Telefon aramasını, formu ve WhatsApp tıklamasını ayrı ayrı sayacak biçimde kuruyor, reklamın indiği sayfayı telefonda deniyoruz.' },
      { ad: 'Düzenli optimizasyon', aciklama: 'Arama terimlerini ve gelen başvuruları düzenli okuyor; sonuç getirmeyen ilçeyi, aramayı ve reklamı kapatıp bütçeyi satış getirene aktarıyoruz.' },
    ],
    bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
  },

  secim: {
    baslik: 'İstanbul’da en iyi reklam ajansı nasıl seçilir?',
    giris:
      '“İstanbul’un en iyi reklam ajansları” diye arayınca karşınıza hazır listeler çıkıyor; listeyi kimin hazırladığı ve neye göre sıraladığı çoğu zaman yazmıyor. Bir listeye güvenmek yerine görüştüğünüz ajansa şu yedi soruyu sorun.',
  },

  sss: {
    baslik: 'İstanbul’da reklam ajansı: sık sorulan sorular',
    giris: 'Ne yaptığımız, ne yapmadığımız, bölge seçimi, bütçe ve hesabın sahipliği üzerine sorular.',
    sorular: [
      {
        soru: 'İstanbul’da reklam ajansı nasıl seçilir?',
        cevap:
          'Önce ne aradığınızı ayırın: tabela ve baskı işi yapan ajans ile Google ve Instagram reklamı yöneten ajans farklı işletmelerdir. Dijital reklam için görüştüğünüz ajansa hesabın kimin adına açılacağını, hangi ilçelere reklam çıkmayı önerdiğini ve bunu neye dayanarak söylediğini sorun. İşletmenizi dinlemeden kampanya öneren ajans hesabı da hazır kalıpla kuracaktır.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Tabela, afiş ya da açık hava reklamı yapıyor musunuz?',
        cevap:
          'Hayır; tabela, matbaa, afiş ve açık hava reklamı işi yapmıyoruz. Biz dijital reklam ajansıyız: Google Ads ile Instagram ve Facebook reklamlarını yönetiyoruz. Sosyal medya hesabı yönetimi ve içerik üretimi de hizmetlerimiz arasında yok.',
      },
      {
        soru: 'İstanbul’da yüz yüze görüşmeden reklam yönetimi olur mu?',
        cevap:
          'Evet; reklam yönetimi baştan sona çevrim içi yürüyen bir iştir ve biz uzaktan çalışıyoruz. Hesaplara yönetici erişimiyle giriyor, görüşmeleri telefonla ya da görüntülü yapıyor, hesap ekranını paylaşarak kararları birlikte gözden geçiriyoruz.',
      },
      {
        soru: 'Reklamı bütün İstanbul’a mı, yalnız kendi ilçeme mi vermeliyim?',
        cevap:
          'Reklamı müşterinizin size gelebildiği ya da sizin gidebildiğiniz ilçelere vermelisiniz; çoğu yerel işletme için bu, şehrin tamamından küçük bir bölgedir. Kuaför, oto servis ya da kurs gibi müşterisi kapıya gelen işlerde komşu ilçelerle, yerinde servis veren işlerde servis çıkardığınız yakayla başlıyoruz. Bölgeyi sonra, hangi ilçeden gelen başvurunun satışa döndüğüne bakarak genişletiyor ya da daraltıyoruz.',
      },
      {
        soru: 'Reklam hesabı kimin adına açılır?',
        cevap:
          'Reklam hesabı sizin adınıza, sizin ödeme yönteminizle açılır ve sizde kalır. Biz hesaba yönetici olarak ekleniriz; çalışma bittiğinde erişimimizi kaldırırsınız, kampanyalar ve geçmiş veriler hesabınızda durur. Hesabınız daha önce başka bir ajansın hesabı altında açıldıysa sahipliğin size nasıl geçeceğine ilk görüşmede bakıyoruz.',
      },
      {
        soru: 'İstanbul’da reklam bütçesi ne kadar olmalı?',
        cevap:
          'Tek bir rakam söylemek doğru olmaz; bütçeyi hedeflediğiniz aramaların tıklama maliyeti, reklam çıkacağınız ilçelerin sayısı ve ihtiyacınız olan başvuru adedi belirler. İstanbul’da aynı aramaya çok firma teklif verdiği için bölgeyi dar tutmak, aynı bütçenin gün içinde daha uzun süre yetmesine yardım eder. Görüşmede sektörünüzdeki aramaları birlikte inceleyip başlangıç planını çıkarıyoruz.',
      },
      {
        soru: 'Klinikler ve avukatlar için reklam yönetiyor musunuz?',
        cevap:
          'Hayır; hekimler, klinikler ve avukatlar için reklam kampanyası önermiyoruz, çünkü bu mesleklerde tanıtımı meslek kuralları sınırlıyor. Bu işletmelerle web sitesi ve SEO üzerinde çalışıyoruz. Tek istisna, yetki belgesi olan kurumların yurt dışına yönelik sağlık turizmi tanıtımıdır.',
        bag: { etiket: 'Sağlık turizmi', url: '/sektorler/saglik-turizmi/' },
      },
      {
        soru: 'Reklamda satış garantisi veriyor musunuz?',
        cevap:
          'Hayır; tıklama, başvuru ya da satış adedi için söz vermiyoruz. Üstlendiğimiz iş hesabınızı ve pazarınızı ayrıntılı incelemek, her kararın gerekçesini size anlatmak ve kampanyaları düzenli olarak optimize etmektir.',
      },
    ],
  },
};

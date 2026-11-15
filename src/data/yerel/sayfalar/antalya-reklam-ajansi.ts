/**
 * Antalya reklam ajansı (şehir sayfası, hizmet: reklam).
 * Ana niyet: "antalya reklam ajansı" (720), "antalya sosyal medya ajansı" (170), "antalya dijital ajans" (90),
 * "alanya reklam ajansı" (90), "antalya dijital pazarlama ajansı" (70), "antalya dijital reklam ajansı" (50).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. Aynı hacmi gösteren "antalya reklam ajansları" ve
 * "antalya dijital pazarlama" yakın yazım sayıldı, listeye alınmadı.
 * Ölçülüp hacim dönmeyenler (yorumda anılır, listede yok): "antalya google reklam", "antalya instagram reklam".
 * Arama sonucu notu: bu aramada tabela, dijital baskı ve matbaa firmaları da çıkıyor. Sayfa ne olduğumuzu (dijital
 * reklam: Google Ads, Instagram ve Facebook reklamları) ve ne yapmadığımızı (tabela, baskı, matbaa, açık hava, sosyal
 * medya hesap yönetimi, fotoğraf ve video çekimi) açıkça söyler.
 * Antalya için ofis iddiası yok; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: turizm sezonu, Kaş dalış okulları, havalimanından Belek ve Side otellerine
 * transfer, il sınırının Alanya ve Kaş ilçelerini kapsaması, Alanya yabancıya konut satışı, Döşemealtı organize sanayi
 * bölgesi ve seracılığa çalışan üretim. Örnek işletmeler temsilidir. Sağlık ve hukuk için reklam örneği yok; sağlık
 * turizmi yalnız tek bir soruda, yetki belgesi olan kurumlar ve yurt dışı sınırıyla anılır.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'antalya-reklam-ajansi',
  sehir: 'antalya',
  yerDe: 'Antalya’da',
  hizmet: 'reklam',
  baslik: 'Antalya reklam ajansı',
  metaBaslik: 'Antalya Reklam Ajansı: Google ve Instagram',
  metaAciklama:
    'Antalya’daki işletmeler için dijital reklam ajansı: Google Ads ile Instagram ve Facebook reklam yönetimi. Tabela ve baskı işi yapmıyoruz; uzaktan çalışıyoruz.',
  ozet: 'Sezona, misafirin diline ve Antalya’nın geniş il sınırına göre kurulan Google Ads ve Instagram reklam yönetimi.',
  tanim: [
    'Antalya’daki işletmeler için reklam ajansı hizmeti, Google Ads ile Instagram ve Facebook reklamlarının işletmenin sezonuna, müşterisinin diline ve hizmet götürdüğü ilçelere göre kurulması ve bütçenin satış getiren aramaya, kitleye ve aya doğru düzenli olarak yönlendirilmesi işidir.',
    'Baştan söyleyelim: dijital reklam ajansıyız. Google Ads’i, Instagram ve Facebook reklamlarını yönetiyoruz; tabela, baskı, matbaa ve açık hava reklamı yapmıyoruz, sosyal medya hesabı da yönetmiyoruz. Antalya’da bir reklamın sonucunu üç karar belirliyor: turizmde sezon takvimi, yabancı misafirde ülke ve dil, yerli müşteride reklamın Alanya’dan Kaş’a uzanan ilin hangi ilçelerinde gösterileceği. İlk kez reklam verecekseniz bu kararları birlikte veriyor, reklam veriyorsanız önce hesabınızı inceliyoruz.',
    'Hesabınızı uzaktan yönetiyoruz: görüşmeleri telefonla ya da görüntülü yapıyor, hangi ayarı neden değiştirdiğimizi her görüşmede anlatıyoruz.',
  ],
  cagri: 'Reklamlarımı görüşelim',

  aramalar: {
    baslik: 'Antalya’da reklam ajansı arayanlar ne yazıyor?',
    giris: '“Reklam ajansı” sözü Antalya’da iki ayrı işi çağırıyor: dijital reklamı ve tabela ile baskıyı.',
    liste: [
      { ifade: 'antalya reklam ajansı', hacim: 720 },
      { ifade: 'antalya sosyal medya ajansı', hacim: 170 },
      { ifade: 'antalya dijital ajans', hacim: 90 },
      { ifade: 'alanya reklam ajansı', hacim: 90 },
      { ifade: 'antalya dijital pazarlama ajansı', hacim: 70 },
      { ifade: 'antalya dijital reklam ajansı', hacim: 50 },
    ],
    yorum: [
      'En çok yazılan ifade “antalya reklam ajansı”: ayda yaklaşık 720 arama. Bu aramanın sonuç sayfasında dijital ajansların yanında tabela ve dijital baskı yapan firmalar, harita bölümünde de matbaa işi yapan işletmeler yer alıyor. Demek ki arayanların bir bölümü dükkânına tabela ya da broşür yaptırmak istiyor; biz o işi yapmıyoruz. “Antalya sosyal medya ajansı” yazanların aradığı da çoğu zaman paylaşım hazırlayıp hesabı yürütecek biridir: biz hesap yönetmiyor, Instagram ve Facebook’ta reklam yönetiyoruz.',
      'Sayılar ifadelerin Türkiye genelindeki aylık aramasıdır; kaçının Antalya’dan yazıldığını ayrıca ölçmedik. “Antalya google reklam” ve “antalya instagram reklam” ifadelerine de baktık, ölçüm aracı bunlar için hacim göstermedi. Reklam ajansı arayan işletme çoğu zaman kanalı adıyla sormuyor; bu yüzden Google mı, Instagram mı sorusunu ilk görüşmede, müşterinizin sizi arayarak mı yoksa görerek mi bulduğuna bakıp birlikte yanıtlıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Antalya’da reklam verirken sık karşılaşılan altı durum',
    giris: 'Altı işletme, altı ayrı yerel sorun. Her kartın sonunda o durumda ilk yaptığımız iş yazıyor.',
    kartlar: [
      {
        soru: 'Sezonluk işletme reklama hangi ay başlamalı?',
        ornek:
          'Kaş’ta bir dalış okulu reklamı haziranda, tekneler denize indiği hafta açıyor. Tatilini aylar önce planlayan misafir o tarihte kararını çoktan vermiş oluyor, bütçe son dakikada bakanlara kalıyor.',
        care: 'Geçmiş rezervasyonların hangi ayda yapıldığına bakıyor, reklamın başlangıcını ve bütçenin aylara dağılımını buna göre planlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Google mı, Instagram mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Gidemeyeceğimiz ilçeden neden telefon geliyor?',
        ornek:
          'Kepez’de bir klima servisi Google reklamının bölgesini Antalya ili olarak seçmiş. İl sınırı Alanya’yı ve Kaş’ı da kapsadığı için saatlerce uzaktaki ilçelerden arayanlar oluyor, servis gidemediği her tıklamanın parasını ödüyor.',
        care: 'Hedef bölgeyi il olarak bırakmıyor, ekibinizin gidebildiği ilçeleri ve mahalleleri tek tek seçiyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Yabancı misafire reklam hangi dilde verilmeli?',
        ornek:
          'Havalimanından Belek ve Side’deki otellere transfer yapan bir firma reklamını yalnız Türkçe kelimelerle kurmuş. Tatilini Almanya’dan planlayan misafir aramayı Almanca yapıyor, reklam onun karşısına hiç çıkmıyor.',
        care: 'Kampanyaları misafirin ülkesine ve diline göre ayırıyor, yabancı dildeki reklam metnini çevirmeninizle birlikte hazırlıyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Google Ads nedir?', url: '/blog/google-ads-nedir/' },
      },
      {
        soru: 'Instagram’dan mesaj yağıyor, satış neden yok?',
        ornek:
          'Alanya’da yabancıya daire satan bir emlak ofisi Instagram reklamından her gün onlarca mesaj alıyor. Yazanların çoğu fiyatı sorup kayboluyor, kimin gerçekten alıcı olduğu anlaşılmadan gün bitiyor.',
        care: 'Reklamı bütçeyi ve taşınma zamanını soran kısa bir forma bağlıyor, ilk yanıt metnini sizinle birlikte yazıyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar satışa dönmüyor', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Tabela yaptırdık, dijital reklam ne ekler?',
        ornek:
          'Muratpaşa’da yeni açılan bir kuaför tabelasını astırmış, el ilanı dağıtmış. Dükkânın önünden geçmeyen ama birkaç sokak ötede oturan kişi salonun açıldığını hiç duymuyor.',
        care: 'Tabela ve baskı işini yapmıyoruz; çevre mahallelerde oturanlara Instagram reklamı, hizmeti arayanlara Google reklamı kuruyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Toptan satıyoruz, reklam bütçesi kime gidiyor?',
        ornek:
          'Döşemealtı’ndaki organize sanayi bölgesinde sera örtüsü üreten bir firma “sera naylonu” kelimesine reklam veriyor. Tıklayanların çoğu bahçesine küçük bir sera kurmak isteyen kişi; toplu alım yapacak üretici aramayı başka sözlerle yapıyor.',
        care: 'Perakende aramaları hariç tutuyor, bütçeyi “üretici”, “toptan” ve ölçü yazan aramalara topluyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
    ],
  },

  isler: {
    baslik: 'Antalya’daki işletmenizin reklamı için neler yapıyoruz?',
    giris: 'Bir reklam hesabında sonucu, yayından önce verilen kararlar belirliyor. Antalya’da bu kararların çoğu yer, ay ve dil üzerine.',
    liste: [
      { ad: 'Hesap ve arama incelemesi', aciklama: 'Reklam veriyorsanız hesabınızdaki arama terimlerini ve gelen mesajları okuyor, vermiyorsanız müşterinizin Antalya’da ve geldiği ülkede neyi aradığını çıkarıyoruz.' },
      { ad: 'İlçe ve mahalle hedeflemesi', aciklama: 'Reklamın gösterileceği yeri hizmet götürdüğünüz ilçelere ve mahallelere göre çiziyoruz. Gidemediğiniz ilçeyi hedefin dışında bırakıyoruz.' },
      { ad: 'Sezona göre bütçe', aciklama: 'Bütçeyi aylara eşit bölmüyoruz. Rezervasyonun ya da siparişin hangi ayda verildiğine bakıp reklamı sezondan önce açıyor, talep düştüğünde kısıyoruz.' },
      { ad: 'Ülke ve dile göre kampanya', aciklama: 'Yabancı misafire ya da alıcıya satış yapıyorsanız her ülke ve dil için ayrı kampanya kuruyoruz. Çeviri yapmıyoruz; yabancı dildeki metni çevirmeninizle hazırlıyoruz.' },
      { ad: 'Reklam metni ve görsel planı', aciklama: 'Hangi sözün ve hangi fotoğrafın deneneceğini planlıyor, her denemede tek bir şeyi değiştiriyoruz. Fotoğraf ve video çekmiyoruz; görseli siz sağlıyorsunuz.' },
      { ad: 'Dönüşüm takibi ve açılış sayfası', aciklama: 'Telefon aramasını, formu ve WhatsApp tıklamasını ayrı ayrı sayacak düzeni kuruyor, reklamın açtığı sayfayı gerçek telefonda deniyoruz.' },
    ],
    bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
  },

  secim: {
    giris:
      'Antalya’da “reklam ajansı” araması tabela, matbaa ve dijital reklam ajanslarını bir arada getiriyor. Sezon başlamadan bütçe ayıracaksanız seçimi şu sorulara göre yapın.',
  },

  sss: {
    baslik: 'Antalya’da reklam ajansı hakkında sık sorulan sorular',
    giris: 'Ne yaptığımız, ne yapmadığımız ve hesabın kimde kalacağı üzerine sorular.',
    sorular: [
      {
        soru: 'Antalya’da dijital reklam ajansı nasıl seçilir?',
        cevap:
          'Ajansı, ilk görüşmede müşterinize dair ne sorduğuna ve reklam hesabını kimin adına açtığına bakarak seçin. Sezonunuzu, misafirinizin hangi ülkeden geldiğini ve hangi ilçelere hizmet verdiğinizi sormayan bir ajans hazır bir kurulumu uygulayacaktır. Hesabın sizin adınıza açılmasını ve arama terimlerini görebilmeyi baştan isteyin.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Tabela, afiş ya da broşür işi yapıyor musunuz?',
        cevap:
          'Hayır; tabela, afiş, broşür, araç giydirme ve açık hava reklamı yapmıyoruz. İşimiz Google Ads ile Instagram ve Facebook reklamlarının yönetimidir. “Antalya reklam ajansı” aramasında iki tür firma birlikte çıktığı için bunu baştan söylüyoruz.',
      },
      {
        soru: 'Antalya’daki bir işletmenin reklamı uzaktan yönetilir mi?',
        cevap:
          'Evet, yönetilir; reklam hesapları internet üzerinden yönetilir ve biz bu işi uzaktan yapıyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, hesabı ekranda birlikte açıp yapılan değişikliği gösteriyoruz.',
      },
      {
        soru: 'Reklam hesabı kimin adına açılır?',
        cevap:
          'Reklam hesabı işletmenizin adına açılır; ödeme yöntemi, fatura ve hesabın geçmişi sizde durur. Bize yönetici yetkisi tanımlarsınız ve bu yetkiyi istediğiniz gün geri alabilirsiniz. Hesabınız bugün başka bir ajansın yönetici hesabının altındaysa nasıl devralınacağına ilk görüşmede birlikte bakıyoruz.',
      },
      {
        soru: 'Sezonluk işletme kışın reklamı kapatmalı mı?',
        cevap:
          'Her zaman değil; karar, müşterinizin rezervasyonu ya da siparişi hangi ayda verdiğine bağlıdır. Yazın gelecek misafir aramasını kış ve bahar aylarında yapıyorsa o aylarda görünmek gerekir. Geçmiş kayıtlarınıza bakıp reklamın hangi ay açık, hangi ay kısık kalacağını birlikte belirliyoruz.',
      },
      {
        soru: 'Sosyal medya hesabımızı da yönetiyor musunuz?',
        cevap:
          'Hayır, hesap yönetimi ve paylaşım hazırlama işi yapmıyoruz. Instagram ve Facebook’ta yalnız reklamı yönetiyoruz: hedefi, kitleyi, bölgeyi, denenecek sözü ve gelen başvurunun nereye düşeceğini. Fotoğraf ve video çekimi de kapsamımızda değil; reklamda sizin sağladığınız görselleri kullanıyoruz.',
      },
      {
        soru: 'Antalya’da sağlık turizmi için reklam yönetiyor musunuz?',
        cevap:
          'Yalnız uluslararası sağlık turizmi yetki belgesi olan kurumlar için ve yurt dışına yönelik olarak ele alıyoruz. Türkiye’deki hastaya dönük sağlık reklamı kurmuyoruz; hekimler ve klinikler için işimiz web sitesi ve SEO ile sınırlı.',
        bag: { etiket: 'Sağlık turizmi', url: '/sektorler/saglik-turizmi/' },
      },
      {
        soru: 'Reklamdan satış geleceğine söz veriyor musunuz?',
        cevap:
          'Hayır; tıklama, mesaj ya da satış adedi için söz vermiyoruz. Üstlendiğimiz iş hesabınızı ayrıntılı incelemek, aldığımız kararı gerekçesiyle anlatmak ve reklamı düzenli olarak optimize etmektir.',
      },
    ],
  },
};

/**
 * Alanya web tasarım (ilçe sayfası, Antalya; hizmet: web).
 * Ana niyet: "alanya web tasarım" (1.000). Bu değer ölçüm dosyasında "doğrulanmamış şaşırtıcı değer" diye işaretlidir;
 * yorumda "ölçüm aracının verdiği yaklaşık değer" olarak anılır ve büyütülmez. İlçenin diğer ölçülen ifadesi:
 * "alanya reklam ajansı" (90). Pano, ilin aynı hizmetteki ifadeleriyle tamamlandı: "antalya web tasarım" (1.600),
 * "web tasarım antalya" (140), "antalya web tasarım ajansı" (110). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Ölçülüp hacim dönmeyenler: "alanya web tasarım ajansı", "alanya dijital ajans", "alanya seo" (listede yok).
 * Alanya için ofis iddiası yok; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Alanya Kalesi ve limandan kalkan tekne turları, Kleopatra Plajı çevresindeki
 * oteller, Mahmutlar ve Oba mahallelerindeki emlak ofisleri ve yabancıya konut satışı, ilçeye yerleşmiş yabancılar.
 * Örnek işletmeler temsilidir. Çeviriyi işletmenin çevirmeni yapar; biz dil sayfalarının planını ve yapısını kurarız.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'alanya-web-tasarim',
  sehir: 'antalya',
  ilce: 'Alanya',
  yerDe: 'Alanya’da',
  hizmet: 'web',
  baslik: 'Alanya web tasarım',
  metaBaslik: 'Alanya Web Tasarım, Antalya: Kurumsal Site',
  metaAciklama:
    'Alanya’daki oteller, emlak ofisleri ve yerel işletmeler için web tasarım: dil sayfaları, telefonda hızlı açılan tasarım, harita uyumu. İşi uzaktan yürütüyoruz.',
  ozet: 'Mahmutlar’daki emlak ofisinden Kleopatra’daki apart otele, Alanya’da yabancı alıcıya ve misafire kendi dilinde bilgi veren web siteleri.',
  tanim: [
    'Alanya’daki işletmeler için web tasarım, otel misafirinin, daire bakan yabancı alıcının ve ilçede yıl boyu yaşayan müşterinin aradığı bilgiyi kendi dilinde bulup işletmeye doğrudan ulaştığı bir web sitesinin kurulması işidir.',
    'Alanya, Antalya merkezine uzak, kendi çarşısı ve kendi müşterisi olan bir ilçe. Kale’nin eteğindeki limandan kalkan tekne turları, Kleopatra Plajı çevresindeki oteller, Mahmutlar ve Oba’daki emlak ofisleri çoğunlukla yabancı müşteriyle çalışır; ilçeye yerleşmiş yabancılar da sigortadan araç kiralamaya gündelik hizmetlerin müşterisidir. Sayfaları ve dil sürümlerini bunlardan hangisine satış yaptığınıza göre planlıyor, işi uzaktan, telefonla ve görüntülü görüşerek yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Alanya’da web sitesi için yapılan aramalar',
    giris: 'İlçenin adıyla yapılan arama, ilin adıyla yapılanın hemen ardından geliyor.',
    liste: [
      { ifade: 'antalya web tasarım', hacim: 1600 },
      { ifade: 'alanya web tasarım', hacim: 1000 },
      { ifade: 'web tasarım antalya', hacim: 140 },
      { ifade: 'antalya web tasarım ajansı', hacim: 110 },
      { ifade: 'alanya reklam ajansı', hacim: 90 },
    ],
    yorum: [
      '“Alanya web tasarım” için ölçüm aracının verdiği yaklaşık değer ayda 1.000 arama. İlçe ölçeği için yüksek bir sayı; ikinci bir ölçümle doğrulamadık, bu yüzden kesin bir büyüklük gibi okumuyoruz. Sayılar Türkiye geneline aittir, aramayı yapanın Alanya’da olup olmadığı da ölçülmedi. Ölçümden çıkardığımız tek sonuç şu: Alanya’da site yaptırmak isteyenlerin bir bölümü aramaya “Antalya” yazmıyor, ilçenin adını yazıyor.',
      'Sizin siteniz için bakacağımız liste ise başka: müşterinizin Alanya’da oda, daire, tur ya da hizmet ararken hangi dilde ne yazdığını proje başında ayrıca çıkarıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Alanya’da site kuran işletmenin üç tipik durumu',
    giris: 'Müşterinin kim olduğu sitenin dilini, sayfa sayısını ve ilk ekranını değiştiriyor.',
    kartlar: [
      {
        soru: 'Yabancı alıcı portföyümüzü sitede neden göremiyor?',
        ornek:
          'Mahmutlar’da bir emlak ofisi dairelerini yalnız ilan sitelerine giriyor, kendi sitesindeki portföy aylar önce kalmış. Yurt dışından ofisin adını arayan alıcı, çoktan satılmış dairelerin durduğu bir sayfayla karşılaşıyor.',
        care: 'İlanları kendi ekibinizin kolayca güncellediği bir portföy bölümü kuruyor, dil sürümlerini alıcınızın ülkesine göre planlıyoruz.',
        cizim: 'liste',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Apart otelimize ayrı bir site gerekir mi?',
        ornek:
          'Kleopatra Plajı’na yakın bir apart otel odalarını yalnız rezervasyon sitelerinde gösteriyor. Geçen yaz kalan misafir bu yıl oteli adıyla arıyor, doğrudan yazabileceği bir sayfa bulamıyor.',
        care: 'Oda tiplerini, plaja uzaklığı ve doğrudan iletişim yolunu gösteren küçük bir site kuruyor, harita profilini bu siteye bağlıyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Müşterimiz Alanya’da yaşayan yabancı, site nasıl olmalı?',
        ornek:
          'Oba’da bir sigorta acentesinin müşterilerinin bir bölümü ilçeye yerleşmiş yabancılar. Site yalnız Türkçe olduğu için hangi poliçelere bakıldığını ve hangi dilde hizmet verildiğini öğrenmek isteyen kişi aramaya çekiniyor.',
        care: 'En çok sorulan bilgileri iki dilde, kısa sayfalarda topluyor, aynı bilgiyi Google İşletme Profili’ne de işliyoruz.',
        cizim: 'balon',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  isler: {
    baslik: 'Alanya’daki işletmenizin sitesinde neler yapıyoruz?',
    giris: 'Alanya’da bir işletme sitesinde öne çıkan dört iş kalemi:',
    liste: [
      { ad: 'Dil sayfalarının planı', aciklama: 'Sitenin kaç dilde olacağına alıcınızın ve misafirinizin geldiği ülkelere bakarak karar veriyor, her dile ayrı adres kuruyoruz. Metinleri sizin çevirmeniniz çeviriyor.' },
      { ad: 'Oda, portföy ve tur sayfaları', aciklama: 'Her oda tipine, daireye ya da tura fotoğrafı ve bilgisiyle ayrı bir sayfa açıyor, bu sayfaları sizin güncelleyebileceğiniz bir panele bağlıyoruz.' },
      { ad: 'Telefonda açılış ve iletişim', aciklama: 'Sayfaları telefon ekranına göre çiziyor; arama, form ve WhatsApp düğmesini yayından önce gerçek telefonda deniyoruz.' },
      { ad: 'Başlıkta ve profilde Alanya adı', aciklama: 'Sayfa başlıklarına Alanya’yı ve bulunduğunuz mahalleyi, Google İşletme Profili’ndeki adresle aynı yazımla koyuyoruz. Profildeki işletme adına ilçe ya da hizmet sözü eklemiyoruz; ad tabelanızdaki gibi kalıyor.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Alanya’da web tasarım hakkında sorular',
    giris: 'Dil, yer adı, uzaktan çalışma ve sahiplik üzerine.',
    sorular: [
      {
        soru: 'Alanya’da web tasarım firması seçerken neye bakılır?',
        cevap:
          'Firmanın yaptığı sitelerden birini telefonunuzda, yabancı dil sürümüyle açıp bakın. Sayfa çabuk açılıyorsa, çeviri bir insanın elinden çıkmışsa ve iletişim düğmesi çalışıyorsa firma Alanya’daki işin zor kısmını biliyordur. Müşterinizin hangi ülkeden geldiğini sormayan firmayla dil planı yapılamaz.',
      },
      {
        soru: 'Alanya’da emlak sitesi kaç dilde olmalı?',
        cevap:
          'Dil sayısını alıcılarınızın geldiği ülkeler belirler; her dili eklemek gerekmez. Son satışlarınıza bakıp alıcıların çoğunun konuştuğu dilleri seçiyor, önce o dillerde eksiksiz sayfalar kurmayı öneriyoruz. Çevirisi yarım kalan bir dil sürümünü yayına almıyoruz.',
      },
      {
        soru: 'Başlıkta Alanya mı, Antalya mı yazmalı?',
        cevap:
          'İşletmeniz Alanya’daysa başlıkta Alanya yazmalı; Google yerel aramalarda arayana yakın işletmeleri öne alıyor ve ilçedeki müşteri çoğu zaman ilçenin adını yazıyor. Antalya sözünü yalnız adres satırında, il bilgisi olarak kullanıyoruz. Merkezde şubeniz yoksa Antalya merkez için ayrı sayfa açmayı önermiyoruz.',
      },
      {
        soru: 'Alanya’ya gelmeden web sitesi yapabilir misiniz?',
        cevap:
          'Evet; çalışmayı uzaktan yürütüyoruz, bir araya gelmemiz gerekmiyor. Görüşmeler telefonla ya da görüntülü oluyor, fotoğrafları ve metinleri internet üzerinden alıyoruz. Fotoğraf çekimi yapmadığımız için işletmenizin güncel fotoğraflarını sizin sağlamanız gerekiyor.',
      },
      {
        soru: 'Site ve alan adı kimin adına kayıtlı olur?',
        cevap:
          'İkisi de işletmenizin adına kayıtlı olur. Alan adını sizin bilgilerinizle alıyor, yayın günü panel ve barındırma erişimlerini size teslim ediyoruz.',
      },
    ],
  },
};

/**
 * Buca web tasarım (İzmir, ilçe sayfası).
 * Ana niyet: "buca web tasarım" (140). Şehir ifadeleriyle tamamlandı: "izmir web tasarım" (1.900),
 * "web tasarım izmir" (390), "izmir web tasarım firmaları" (70); öteki üniversite ilçesi "bornova web tasarım" (90).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Buca'da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: üniversite kampüsü ve eğitim fakültesi, öğrenci nüfusu, Şirinyer ve
 * Menderes Caddesi'ndeki esnaf, ilçedeki giyim organize sanayi bölgesi. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'buca-web-tasarim',
  sehir: 'izmir',
  ilce: 'Buca',
  yerDe: 'Buca’da',
  hizmet: 'web',
  baslik: 'Buca web tasarım',
  metaBaslik: 'Buca Web Tasarım: İzmir’de Kurumsal Site',
  metaAciklama:
    'Buca’daki işletmeler için web tasarım: öğrenciye, mahalle müşterisine ve toptan alıcıya göre planlanan sayfalar. Çalışmayı uzaktan, görüşerek yürütüyoruz.',
  ozet: 'Buca’da kampüs çevresindeki işletmeler, Şirinyer esnafı ve giyim atölyeleri için ayrı ayrı düşünülmüş web siteleri.',
  tanim: [
    'Buca’daki işletmeler için web tasarım, öğrenciden veliye, mahalle müşterisinden toptan alıcıya kadar işletmenin asıl müşterisine göre sayfaları planlanmış bir web sitesinin tasarlanıp yayına alınması işidir.',
    'Buca’da işletmenin müşterisi bulunduğu yere göre değişir: kampüs çevresinde her eylülde yenilenen öğrenciler, Şirinyer’de ve Menderes Caddesi’nde yıllardır aynı esnafa gelen mahalleli, giyim atölyelerinde ise şehir dışındaki toptan alıcı. Önce sizin müşterinizin bunlardan hangisi olduğuna ve Google’a ne yazdığına bakıyor, siteyi buna göre kuruyoruz. İşi uzaktan yürütüyor, görüşmeleri telefonla ya da görüntülü yapıyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Buca’da web sitesi yaptırmak isteyen ne yazıyor?',
    giris: 'İlçe adıyla yapılan arama şehir geneline göre az; ama yazan kişinin ne istediği belli.',
    liste: [
      { ifade: 'izmir web tasarım', hacim: 1900 },
      { ifade: 'web tasarım izmir', hacim: 390 },
      { ifade: 'buca web tasarım', hacim: 140 },
      { ifade: 'bornova web tasarım', hacim: 90 },
      { ifade: 'izmir web tasarım firmaları', hacim: 70 },
    ],
    yorum: [
      '“Buca web tasarım” için ölçülen değer ayda yaklaşık 140; öteki üniversite ilçesi Bornova’da aynı arama 90. Bu sayılar Türkiye genelinin yaklaşık değerleridir, aramayı yapanın nerede oturduğunu göstermez.',
      'Sizin siteniz için belirleyici olan, kendi müşterinizin araması. Kampüse yakın bir işletmede “buca” yanına semt adı eklenerek yapılan aramalara, atölyede ise ürünün toptan alıcı tarafından nasıl arandığına bakıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Buca’da en sık gördüğümüz üç site sorunu',
    giris: 'Kampüs çevresi, mahalle esnafı ve giyim atölyeleri: üç ayrı müşteri, üç ayrı site. İşletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Öğrencimiz her yıl değişiyor, site nasıl güncel kalır?',
        ornek:
          'Eğitim fakültesine yakın bir öğretmenlik sınavı kursunun sitesinde geçen yılın ders programı duruyor. Öğretmen adayı güncel grupları ve saatleri görmek için kursun Instagram hesabına bakıyor, orada da bulamayınca yazmaktan vazgeçiyor.',
        care: 'Grup ve saat bilgisini kursun kendi değiştirebileceği bir panele bağlıyor, ön kayıt formunu telefonda deniyoruz.',
        cizim: 'defter',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'Müşterimiz mahalleden, site bize ne katar?',
        ornek:
          'Şirinyer’de yıllardır aynı dükkânda çalışan bir beyaz eşya servisi işini tanıdık tavsiyesiyle buluyor. İlçeye yeni taşınan aile “buca çamaşır makinesi servisi” yazdığında yalnız çağrı merkezlerinin sayfalarını görüyor.',
        care: 'Verilen servisleri, gidilen mahalleleri ve arama düğmesini öne alan bir site kuruyor, harita profiliyle eşliyoruz.',
        cizim: 'alet',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Fason üretim yapıyoruz, alıcı bizi nasıl bulur?',
        ornek:
          'Buca’daki giyim organize sanayi bölgesinde tişört ve sweatshirt diken bir atölye işlerini aracılar üzerinden alıyor. Kendi markası için üretici arayan girişimci atölyenin en az sipariş adedini, kumaş seçeneklerini ve baskı imkânını hiçbir yerde göremiyor.',
        care: 'Üretim kalemlerini, kapasite bilgisini ve numune talep formunu taşıyan bir site kuruyoruz.',
        cizim: 'liste',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
    ],
  },

  isler: {
    baslik: 'Buca’daki işletmeniz için web tasarımda neler yapıyoruz?',
    giris: 'Sayfa sayısı işletmeden işletmeye değişir; aşağıdaki dört iş değişmez.',
    liste: [
      {
        ad: 'Müşteriye göre sayfa planı',
        aciklama: 'Öğrenciye, mahalleliye ya da toptan alıcıya hitap etmenize göre sayfa listesi değişir. Planı tasarımdan önce yazıya döküyoruz.',
      },
      {
        ad: 'Buca ve semt adları',
        aciklama: 'Buca, Şirinyer ya da Tınaztepe adını başlıkta yalnız gerçekten bulunduğunuz yer için kullanıyor, Google İşletme Profili’ndeki adresle aynı yazıyoruz.',
      },
      {
        ad: 'Dönemlik içerik için panel',
        aciklama: 'Kayıt tarihleri, boş oda bilgisi ya da yeni sezon ürünleri değiştikçe siteyi sizin güncelleyebilmeniz için sade bir yönetim paneli kuruyoruz.',
      },
      {
        ad: 'Telefonda form ve WhatsApp',
        aciklama: 'Öğrenci de veli de siteyi telefonda açıyor. Ön kayıt formunu ve WhatsApp düğmesini dar ekranda deniyor, deneme başvurusunun size ulaştığını görüyoruz.',
      },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Buca’da web sitesi yaptırmak isteyenlerin soruları',
    giris: 'Dönem takvimi, semt adı, sayfa sayısı ve sahiplik üzerine Buca’daki işletmelerden gelen sorular.',
    sorular: [
      {
        soru: 'Buca’da web sitesi yaptırmak için görüşmeye gelmek gerekir mi?',
        cevap:
          'Hayır; bütün süreci uzaktan yürütüyoruz, bir yere gelmeniz gerekmez. İlk görüşmeyi telefonla ya da görüntülü yapıyor, taslakları bağlantıyla gönderiyoruz. Elinizdeki fotoğrafları ve metinleri dosya olarak iletirsiniz; eksik olanı birlikte listeleriz.',
      },
      {
        soru: 'Öğrenciye hitap eden bir işletme siteyi ne zaman yenilemeli?',
        cevap:
          'Kayıt ve taşınma dönemi başlamadan önce; Buca’da bu çoğu işletme için yaz sonudur. Tarih vermiyoruz, ama takvimi dönemin başlangıcından geriye doğru sizinle birlikte planlıyoruz. Dönem ortasında başlanan işte önce en çok sorulan bilgiyi taşıyan sayfayı yayına alıyoruz.',
      },
      {
        soru: 'Şirinyer’deki dükkânım için başlığa Buca mı yazılmalı?',
        cevap:
          'İkisi de yazılabilir; hangisinin öne geçeceğini müşterinizin araması belirler. Semt adıyla aranan işlerde başlıkta Şirinyer, ilçe geneline hizmet veren işlerde Buca öne alınır. Google İşletme Profili’ndeki adres her iki durumda da sitedekiyle aynı yazılır.',
      },
      {
        soru: 'Küçük bir işletme için kaç sayfalık site yeter?',
        cevap:
          'Çoğu zaman bir ana sayfa, her hizmete bir sayfa ve bir iletişim sayfası yeter. Sayıyı müşterinizin ayrı ayrı aradığı işlerin sayısı belirler. Tek iş yapan bir servisin sitesi kısa kalır; birçok ürün diken bir atölyede liste uzar.',
      },
      {
        soru: 'Alan adı ve site kimin üzerine kayıtlı olur?',
        cevap:
          'İşletmenizin üzerine kayıtlı olur; alan adını ve barındırmayı sizin hesabınızda açıyoruz. Bize verdiğiniz yönetici erişimini dilediğinizde kaldırırsınız.',
      },
    ],
  },
};

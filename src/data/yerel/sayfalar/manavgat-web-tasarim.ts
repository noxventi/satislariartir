/**
 * Manavgat web tasarım (ilçe sayfası, Antalya; hizmet: web).
 * Ana niyet: "manavgat web tasarım" (210). İlçe için ölçülen başka ifade yok; pano ilin aynı hizmetteki ifadeleriyle
 * tamamlandı: "antalya web tasarım" (1.600), "antalya web tasarım ajansı" (110), "antalya web tasarım firmaları" (40),
 * "antalya web sitesi yapan firmalar" (20). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Ölçülüp hacim dönmeyenler (yorumda anılır, listede yok): "manavgat web tasarım ajansı", "manavgat reklam ajansı",
 * "manavgat seo".
 * Manavgat için ofis iddiası yok; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Side, Sorgun, Kızılağaç ve Çolaklı otel bölgeleri, Manavgat Şelalesi ve
 * ırmak turları, Köprülü Kanyon rafting turları, ilçe merkezindeki çarşı, çevredeki tarım ve seracılık.
 * Örnek işletmeler temsilidir. Çeviriyi işletmenin çevirmeni yapar; biz dil sayfalarının yapısını kurarız.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'manavgat-web-tasarim',
  sehir: 'antalya',
  ilce: 'Manavgat',
  yerDe: 'Manavgat’ta',
  hizmet: 'web',
  baslik: 'Manavgat web tasarım',
  metaBaslik: 'Manavgat Web Tasarım, Antalya: Kurumsal Site',
  metaAciklama:
    'Manavgat, Side ve Sorgun’daki işletmeler için web tasarım: misafirin telefonunda hızlı açılan sayfalar, dil sürümleri ve harita uyumu. Uzaktan çalışıyoruz.',
  ozet: 'Side ve Sorgun’daki misafire, Manavgat çarşısındaki yerli müşteriye göre kurulan, telefonda hızlı açılan web siteleri.',
  tanim: [
    'Manavgat’taki işletmeler için web tasarım, Side ve Sorgun’da tatil yapan misafirin ya da ilçede yaşayan müşterinin işletmeyi telefonundan bulup ne sunduğunu, nerede olduğunu ve nasıl ulaşacağını ilk ekranda gördüğü bir web sitesinin hazırlanması işidir.',
    'Manavgat’ta iş iki ayrı yerde döner. Sahilde Side, Sorgun, Kızılağaç ve Çolaklı’daki otellerin çevresinde araç kiralayan, tur satan, şelaleye ve ırmağa gezi düzenleyen işletmeler vardır; müşterileri birkaç günlüğüne oradadır ve her şeyi telefonundan arar. İlçe merkezindeki çarşıda ve çevredeki tarım işletmelerinde ise müşteri yerlidir, işletmeyi adıyla tanır. Siteyi bu iki müşteriden hangisine sattığınıza bakarak planlıyor, çalışmanın tamamını uzaktan, telefon ve görüntülü görüşmeyle yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Manavgat’ta web sitesi için ne aranıyor?',
    giris: 'İlçe adıyla yapılan arama küçük, ama ölçülebilecek büyüklükte.',
    liste: [
      { ifade: 'antalya web tasarım', hacim: 1600 },
      { ifade: 'manavgat web tasarım', hacim: 210 },
      { ifade: 'antalya web tasarım ajansı', hacim: 110 },
      { ifade: 'antalya web tasarım firmaları', hacim: 40 },
      { ifade: 'antalya web sitesi yapan firmalar', hacim: 20 },
    ],
    yorum: [
      '“Manavgat web tasarım” ayda yaklaşık 210 kez yazılıyor. Aynı ölçümde “manavgat web tasarım ajansı”, “manavgat reklam ajansı” ve “manavgat seo” için hacim görünmedi; ilçe adıyla karşılık bulan tek hizmet sözü “web tasarım” oldu. Sayılar Türkiye geneline aittir, aramayı yapanın Manavgat’ta olup olmadığı ölçülmedi.',
      'Bir projede bizim baktığımız liste sizin müşterinizin aramalarıdır: Side’de araç arayan misafirin ya da Manavgat’ta sulama malzemesi arayan üreticinin Google’a ne yazdığı. Sayfa başlıklarını o listeye göre yazıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Manavgat’ta üç işletme, üç ayrı site durumu',
    giris: 'Sahildeki işletme ile çarşıdaki işletmenin sitesi aynı soruya cevap vermiyor.',
    kartlar: [
      {
        soru: 'Otel misafiri bizi telefonundan nasıl bulur?',
        ornek:
          'Side’de bir araç kiralama ofisi müşterisini otel resepsiyonlarına bıraktığı broşürle buluyor. Odasından telefonla araç arayan misafir araçları, teslim yerini ve koşulları gösteren bir sayfaya rastlamıyor.',
        care: 'Araçları, teslim noktalarını ve rezervasyon isteğini telefonda tek sayfada toplayan bir site kuruyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Otomotiv', url: '/sektorler/otomotiv/' },
      },
      {
        soru: 'Sitemiz misafirin telefonunda neden geç açılıyor?',
        ornek:
          'Köprülü Kanyon’da rafting turu düzenleyen bir işletmenin ana sayfası onlarca büyük fotoğrafla açılıyor. Otelin kablosuz bağlantısından bakan misafir sayfanın yüklenmesini beklemeden vazgeçiyor.',
        care: 'Fotoğrafları ekrana uygun boyutta sunuyor, sayfayı yavaş bağlantıda deneyerek yayına alıyoruz.',
        cizim: 'kronometre',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Müşterimiz Manavgatlı, site bize ne kazandırır?',
        ornek:
          'İlçe merkezinde sulama ve sera malzemesi satan bir işletme çevre köylerdeki üreticiye yıllardır tezgâhtan satıyor. Aradığı ürünü önce Google’a yazan genç üretici, ne satıldığını gösteren bir sayfa bulamayınca Antalya’daki firmayı arıyor.',
        care: 'Ürün gruplarını ve iletişim yollarını gösteren az sayfalı bir site kuruyor, Google İşletme Profili’ndeki bilgiyle eşliyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  isler: {
    baslik: 'Manavgat’taki işletmenizin sitesinde neler yapıyoruz?',
    giris: 'Küçük bir sitede de atlanmaması gereken dört iş var.',
    liste: [
      { ad: 'İlk ekranda iş, yer, iletişim', aciklama: 'İlk ekrana ne sattığınızı, Side’de mi ilçe merkezinde mi olduğunuzu ve tek bir iletişim düğmesini koyuyoruz.' },
      { ad: 'Yavaş bağlantıda açılan sayfalar', aciklama: 'Görselleri hafifletiyor, sayfayı yayından önce zayıf bir bağlantıda ve gerçek telefonda açıp bakıyoruz.' },
      { ad: 'Misafirin dili için sayfa yapısı', aciklama: 'İkinci ya da üçüncü dil gerekiyorsa hangi sayfaların çevrileceğini belirliyor, dil sürümlerinin adreslerini kuruyoruz. Çeviriyi sizin çalıştığınız çevirmen yapıyor.' },
      { ad: 'Yer adlarının doğru kullanımı', aciklama: 'İşletmeniz Side’deyse başlığa Side, çarşıdaysa Manavgat yazıyoruz; Google İşletme Profili’ndeki adres de aynı yazımla duruyor. Bulunmadığınız beldenin adını başlığa eklemiyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Manavgat’ta web tasarım hakkında sorular',
    giris: 'Firma seçimi, yer adı, sezon, uzaktan çalışma ve sahiplik üzerine.',
    sorular: [
      {
        soru: 'Manavgat’ta web sitesi yaptırırken firma nasıl seçilir?',
        cevap:
          'Firmanın yaptığı bir siteyi kendi telefonunuzda, mobil veriyle açın ve iletişim düğmesine basın. Sayfa bekletmeden açılıyor ve düğme çalışıyorsa işin temeli doğru atılmıştır. Firma size ilk görüşmede kime satış yaptığınızı soruyorsa doğru yerden başlıyordur.',
      },
      {
        soru: 'Side’deki işletme başlığa Side mi, Manavgat mı yazmalı?',
        cevap:
          'İşletme hangisindeyse onu yazmalı: Side’deyseniz Side, ilçe merkezindeyseniz Manavgat. Misafir aramasını çoğu zaman kaldığı beldenin adıyla, ilçede yaşayan ise Manavgat adıyla yapar. İki adı birden başlığa doldurmuyor, diğerini adres satırında bırakıyoruz.',
      },
      {
        soru: 'Sezonluk çalışan Manavgat işletmesinin sitesi kışın kapanmalı mı?',
        cevap:
          'Hayır, site kışın da yayında kalmalı; kapatılan sitenin sayfaları aramadan düşer ve sezon başında yeniden dizine girmesini beklemek gerekir. Kışın ana sayfaya hangi tarihte açılacağınızı yazmak yeterlidir. Saatleri ve duyuruyu panelden kendiniz değiştirebilirsiniz.',
      },
      {
        soru: 'Manavgat’a gelmeden web sitesi kurulur mu?',
        cevap:
          'Evet, kurulur; biz çalışmayı uzaktan yürütüyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, taslağı bağlantı olarak gönderip telefonunuzda açmanızı istiyoruz. İşletmenizin fotoğraflarını sizden alıyoruz; çekim yapmıyoruz.',
      },
      {
        soru: 'Alan adı ve site kimin üzerine olur?',
        cevap:
          'İşletmenizin üzerine olur. Alan adını sizin adınıza kaydediyor, yayın günü panelin ve barındırma hesabının yönetici bilgilerini size veriyoruz.',
      },
    ],
  },
};

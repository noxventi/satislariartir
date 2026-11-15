/**
 * Avcılar web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "avcılar web tasarım" (260). İlçenin başka ölçülmüş ifadesi olmadığı için pano İstanbul geneli web tasarım
 * ifadeleriyle ve "avrupa yakası web tasarım" (10) ile tamamlandı. Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * İlçede ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: üniversite yerleşkesi ve Üniversite Mahallesi, Marmara Caddesi esnafı,
 * E-5 hattı ve metrobüs. Okul adı yazılmadı. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'avcilar-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Avcılar',
  yerDe: 'Avcılar’da',
  hizmet: 'web',
  baslik: 'Avcılar web tasarım',
  metaBaslik: 'Avcılar Web Tasarım: İstanbul',
  metaAciklama:
    'Avcılar’daki esnaf, hizmet işletmeleri ve öğrenciye dönük işletmeler için web tasarım: az sayfalı, telefonda hızlı açılan siteler. Çalışmayı uzaktan yürütüyoruz.',
  ozet: 'Üniversite çevresinden Marmara Caddesi esnafına ve E-5 hattına, Avcılar’da müşterinin yoldayken açıp aradığı sade web siteleri.',
  tanim: [
    'Avcılar’daki işletmeler için web tasarım, öğrencinin, mahalle sakininin ya da yoldan geçen sürücünün telefonunda açıp hizmeti, konumu ve çalışma saatini gördüğü, tek dokunuşla aradığı sade bir web sitesini kurma işidir.',
    'Avcılar’da işletmenin müşterisi çoğunlukla yakında: yerleşkeye giden öğrenci, Marmara Caddesi’nde alışveriş yapan aile, E-5 kenarındaki servise ya da galeriye uğrayan sürücü. Bu müşteri aramayı telefonundan, çoğu zaman yoldayken yapıyor ve işletmeyi önce haritada görüyor. Biz önce müşterinin sizin işiniz için ne yazdığını inceliyor, sonra az sayfalı ama eksiksiz bir site planlıyoruz. İşin tamamını uzaktan yürütüyor, sizinle telefonda ya da görüntülü görüşüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Avcılar’da web tasarım için ne aranıyor?',
    giris: 'Web tasarım aramalarında İstanbul adı başı çekiyor; ilçe adıyla yapılan aramalar onun yanında küçük ama görünür.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'avcılar web tasarım', hacim: 260 },
      { ifade: 'istanbul web tasarım ajansı', hacim: 210 },
      { ifade: 'istanbul web tasarım firmaları', hacim: 90 },
      { ifade: 'avrupa yakası web tasarım', hacim: 10 },
    ],
    yorum: [
      '“Avcılar web tasarım” ayda yaklaşık 260 kez yazılıyor. Aynı ölçümde “avrupa yakası web tasarım” yalnız 10 arama gösterdi; işletme sahibi yakanın adını yazmıyor, ilçesini yazıyor. Sizin müşteriniz de büyük olasılıkla aynı şeyi yapıyor ve işinizi “Avcılar” ya da mahalle adıyla arıyor.',
      'Hacimler Türkiye geneli içindir; aramanın Avcılar’dan mı başka bir yerden mi yapıldığı bu ölçümde ayrışmıyor. Projeye başlarken hizmetleriniz için ilçe ve mahalle adıyla neler yazıldığına ayrıca bakıyor, sayfa başlıklarını o ifadelerden seçiyoruz.',
    ],
  },

  yerel: {
    baslik: 'Avcılar’da işletme sahibinin web sitesi hakkındaki üç sorusu',
    giris: 'Yerleşkenin çevresi, cadde esnafı ve E-5 hattı: üçünde de müşteri telefondan arıyor, sitenin işi her birinde başka.',
    kartlar: [
      {
        soru: 'Kayıt döneminde veliler bizi neden bulamıyor?',
        ornek:
          'Üniversite Mahallesi’nde bir öğrenci apartının tanıtımı yalnız Instagram’da duruyor. Başka şehirden gelecek öğrencinin velisi Google’a “avcılar öğrenci apartı” yazıyor; oda tiplerini, yerleşkeye uzaklığı ve ön kayıt yolunu gösteren bir sayfa bulamıyor.',
        care: 'Oda, ulaşım ve kayıt bilgisini ayrı başlıklarda veren, ön kayıt formu telefonda çalışan bir site kuruyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Dükkânımız cadde üstünde, web sitesi ne kazandırır?',
        ornek:
          'Marmara Caddesi’nde bir telefon tamircisinin haritadaki profili açık, ama profilde web sitesi yok. Ekranı kırılan kişi “avcılar ekran değişimi” yazıyor; hangi modellere bakıldığını ve işin ne kadar sürdüğünü göremeyince sıradaki dükkânı arıyor.',
        care: 'Her tamir işine kısa bir sayfa açıyor, bu sayfaları haritadaki profile bağlıyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'E-5 üstündeyiz, sürücü neden randevu almıyor?',
        ornek:
          'E-5 yan yolunda bir oto ekspertiz merkezinin sitesi bilgisayarda düzgün, telefonda ise hizmet listesi ekrandan taşıyor. İkinci el araca bakmaya giden alıcı yoldayken randevu almak istiyor, numaraya dokunduğunda arama başlamıyor.',
        care: 'Sayfaları telefon ekranına göre yeniden kuruyor, arama ve randevu düğmesini başparmağın ulaştığı yere koyuyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Otomotiv', url: '/sektorler/otomotiv/' },
      },
    ],
  },

  isler: {
    baslik: 'Avcılar’daki işletmeniz için neler yapıyoruz?',
    giris: 'Esnaf ve hizmet işletmesine çoğu zaman birkaç sayfalık bir site yeter; o sitede şu dört işi yapıyoruz.',
    liste: [
      { ad: 'Az ama eksiksiz sayfa', aciklama: 'Bir tamirci ya da kuaför için her hizmete kısa bir sayfa, bir iletişim sayfası ve çalışma saatleri çoğu zaman yeterlidir. Sayfa listesini işinize bakarak birlikte çıkarıyoruz.' },
      { ad: 'Yolda kullanılan telefon tasarımı', aciklama: 'Metrobüste ya da kaldırımda açılan sayfada telefon numarası, yol tarifi ve WhatsApp ilk ekranda durur. Düğmeleri yayından önce gerçek telefonda deniyoruz.' },
      { ad: 'Kayıt dönemi sayfası', aciklama: 'Apart, yurt ve kurs gibi öğrenciye hizmet veren işletmelerde dönem bilgisini tek bir sayfada tutuyoruz. Yeni dönemde bilgileri yönetim panelinden siz değiştirirsiniz.' },
      { ad: 'Profil ve site eşleşmesi', aciklama: 'Google İşletme Profili’ndeki adı, adresi ve telefonu sitedekiyle aynı yazıyor, profildeki bağlantıyı ilgili hizmet sayfasına veriyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Avcılar’da web tasarım hakkında sık sorulan sorular',
    giris: 'Sayfa sayısı, kayıt dönemi, harita profili ve fiyat üzerine kısa cevaplar.',
    sorular: [
      {
        soru: 'Avcılar’da web sitesi yaptırmak için firmanın aynı ilçede olması gerekir mi?',
        cevap:
          'Hayır, gerekmez; web sitesi işi baştan sona uzaktan yürütülebilir ve biz de böyle çalışıyoruz. İşletmenizi telefonda ya da görüntülü görüşmede anlatırsınız, taslakları size gönderdiğimiz bağlantıdan görür, düzeltmeleri aynı yoldan iletirsiniz. Yayından önce siteyi kendi telefonunuzda açıp birlikte kontrol ediyoruz.',
      },
      {
        soru: 'Avcılar’daki küçük bir işletme için kaç sayfalık site yeterli olur?',
        cevap:
          'Çoğu esnaf ve hizmet işletmesi için ana sayfa, her hizmete birer kısa sayfa ve iletişim sayfası yeterlidir. Sayfa sayısını artırmak yerine her sayfanın tek bir soruya cevap vermesine bakıyoruz: ne yapıyorsunuz, neredesiniz, ne zaman açıksınız, size nasıl ulaşılır. İşiniz büyüdükçe yeni hizmet sayfası eklemek kolaydır.',
      },
      {
        soru: 'Avcılar’da öğrenciye hizmet veren bir işletme sitesini ne zaman hazırlamalı?',
        cevap:
          'Site, üniversite kayıtları başlamadan önce yayında olmalı. Başka şehirden gelecek öğrenci ve velisi apart, yurt ya da kurs aramasını yerleştirme sonuçlarının ardından yapıyor; o günlerde açılan bir sitenin Google’da görünmesi zaman alabilir. Bu yüzden çalışmaya dönemden önce başlamayı öneriyoruz; kesin bir tarih sözü vermiyoruz.',
      },
      {
        soru: 'Google İşletme Profili’nde işletme adına “Avcılar” yazmalı mıyım?',
        cevap:
          'Hayır; tabelanızda yoksa işletme adına ilçe adı eklememelisiniz. Google profildeki adın işletmenin gerçek adıyla aynı olmasını ister ve kurala uymayan profili askıya alabilir. İlçe adının yeri adres alanı ile sitenizin sayfa başlığıdır.',
      },
      {
        soru: 'Avcılar’da web tasarım fiyatı neye göre değişir?',
        cevap:
          'Fiyatı sayfa sayısı, metin ve fotoğrafları kimin hazırlayacağı ve randevu formu gibi ek işlevler belirler. Rakam yayımlamıyoruz, çünkü bir tamirci ile bir öğrenci apartının ihtiyacı aynı değil. İlk görüşmenin ardından yapılacak işleri madde madde yazıyor, teklifi o listeyle gönderiyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
    ],
  },
};

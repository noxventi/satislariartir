/**
 * Beylikdüzü web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "beylikdüzü web tasarım" (720; ölçüm aracının verdiği, ayrıca doğrulanmamış yaklaşık değer),
 * "beylikdüzü reklam ajansı" (110), "beylikdüzü web tasarım ajansı" (30). Pano İstanbul geneli web tasarım ifadeleriyle
 * tamamlandı. Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * İlçede ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: konut siteleri, Beylikdüzü Organize Sanayi Bölgesi, Mermerciler Sanayi
 * Sitesi; Kavaklı, Adnan Kahveci, Yakuplu ve Gürpınar mahalleleri. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'beylikduzu-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Beylikdüzü',
  yerDe: 'Beylikdüzü’nde',
  hizmet: 'web',
  baslik: 'Beylikdüzü web tasarım',
  metaBaslik: 'Beylikdüzü Web Tasarım: İstanbul',
  metaAciklama:
    'Beylikdüzü’ndeki işletmeler için web tasarım: konut sitelerine hizmet veren işletmeden sanayideki üreticiye, telefonda rahat kullanılan siteler. Uzaktan çalışıyoruz.',
  ozet: 'Konut sitelerine hizmet veren işletmeden Mermerciler’deki atölyeye, Beylikdüzü’nde müşterinin telefonundan talep bıraktığı web siteleri.',
  tanim: [
    'Beylikdüzü’ndeki işletmeler için web tasarım, konut sitesinde oturan aileye de sanayi sitesinden alım yapan firmaya da aradığı hizmeti ilk ekranda gösteren, telefon ya da WhatsApp ile talep bırakılan bir web sitesini planlama ve yayına alma işidir.',
    'Beylikdüzü’nde işletmeler iki ayrı müşteriye çalışıyor. Kavaklı, Adnan Kahveci ve Yakuplu’daki konut sitelerinde oturanlar anaokulunu, kursu, kliniği ve oto servisi telefondan, çoğu zaman mahalle adıyla arıyor. Beylikdüzü Organize Sanayi Bölgesi ile Mermerciler Sanayi Sitesi’ndeki üreticinin müşterisi ise başka ilçelerden, bazen başka şehirlerden geliyor. İşe hangi müşteriye seslendiğinizi ve o müşterinin Google’a ne yazdığını inceleyerek başlıyor, sayfaları bu bulguya göre kuruyoruz. İlçeye gelmeden, telefon ve görüntülü görüşmeyle çalışıyor, taslakları bağlantıyla paylaşıyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Beylikdüzü’nde web tasarım için ne aranıyor?',
    giris: 'Web sitesi yaptıracak işletme sahibi aramasına İstanbul’un yanında çoğu zaman kendi ilçesini de yazıyor.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'beylikdüzü web tasarım', hacim: 720 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'istanbul web tasarım ajansı', hacim: 210 },
      { ifade: 'beylikdüzü reklam ajansı', hacim: 110 },
      { ifade: 'istanbul web tasarım firmaları', hacim: 90 },
      { ifade: 'beylikdüzü web tasarım ajansı', hacim: 30 },
    ],
    yorum: [
      '“Beylikdüzü web tasarım” için ölçüm aracının verdiği yaklaşık değer ayda 720 arama. Tek bir ölçüme dayandığı için bu sayıyı kesin kabul etmiyoruz; yine de ilçe adıyla arayanların az olmadığını gösteriyor. “Beylikdüzü reklam ajansı” yazanların bir bölümü tabela ya da baskı işi arıyor. O işleri yapmıyoruz; reklam tarafında yürüttüğümüz iş Google ile Instagram ve Facebook reklamlarının yönetimidir.',
      'Sayılar bu ifadelerin Türkiye genelinde kaç kez yazıldığını gösteriyor; yazanların kaçının Beylikdüzü’nde olduğunu ölçmedik. Sizin sitenizin sayfa planı ise kendi müşterinizin aramalarına dayanır. Bir anaokulu için velilerin, bir mermer atölyesi için tezgâh yaptıracak ev sahibinin yazdığı ifadeleri proje başında ayrıca çıkarıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Beylikdüzü’nde web sitesi kuran işletmenin üç tipik durumu',
    giris: 'Konut sitelerine hizmet veren işletme ile sanayi sitesindeki üretici aynı ilçede çalışıyor, ama ziyaretçileri başka şeyler arıyor.',
    kartlar: [
      {
        soru: 'Sanayi sitesindeyiz, web sitesi iş getirir mi?',
        ornek:
          'Mermerciler Sanayi Sitesi’nde mutfak tezgâhı yapan bir atölyenin sitesinde adres, telefon ve birkaç fotoğraf var. Tezgâh yaptıracak ev sahibi taş çeşitlerini, mimar ise ölçü ve montaj hizmetini göremeyince başka atölyeyi arıyor.',
        care: 'Taş türlerine ve yapılan işlere ayrı sayfa açıyor, keşif ve ölçü talebi formunu aynı sayfaya koyuyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Müşterimiz çevredeki sitelerde oturuyor, bizi nasıl bulur?',
        ornek:
          'Adnan Kahveci’de bir anaokulu öğrencilerinin çoğunu yürüme mesafesindeki konut sitelerinden alıyor. Okul arayan veli telefonuna “beylikdüzü anaokulu” yazıyor; açtığı sitede günlük programı, servis güzergâhını ve görüşme randevusunu bulamıyor.',
        care: 'Velinin sorduğu bilgileri ayrı başlıklarda yazıyor, randevu formunu telefonda deneyerek yayına alıyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'İlan sitelerindeyiz, ayrıca web sitesi gerekir mi?',
        ornek:
          'Kavaklı’da bir emlak ofisi bütün portföyünü ilan sitelerinde yayımlıyor. Dairesini satacak kişi ofisin adını Google’a yazdığında yalnız ilanları görüyor; ofisin hangi mahallelerde çalıştığını ve satış sürecini nasıl yürüttüğünü öğrenemiyor.',
        care: 'Çalışılan mahalleleri ve mülk sahibine verilen hizmeti anlatan, değerleme talebi formu olan bir site kuruyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  isler: {
    baslik: 'Beylikdüzü’ndeki işletmeniz için neler yapıyoruz?',
    giris: 'Anaokulunun da atölyenin de sitesinde aynı dört işi yapıyoruz; içerik işletmeye göre değişiyor.',
    liste: [
      { ad: 'Her hizmete ayrı sayfa', aciklama: 'Mermer atölyesinde tezgâh, merdiven ve cephe kaplaması; kursta her branş kendi sayfasında durur. Sayfa başlığını müşterinin o iş için yazdığı aramadan alıyoruz.' },
      { ad: 'Telefonda denenmiş talep yolları', aciklama: 'Konut sitesinde oturan müşteri sizi çoğunlukla telefonundan arıyor. Arama düğmesini, formu ve WhatsApp bağlantısını dar ekranda deniyor, başvurunun size ulaştığını görüyoruz.' },
      { ad: 'İlçe ve mahalle adının kullanımı', aciklama: 'Beylikdüzü adını sayfa başlığında bir kez, doğal biçimde yazıyoruz. Yakuplu, Kavaklı ya da Gürpınar’ı ancak o mahallelere hizmet veriyorsanız sayfalara ekliyoruz.' },
      { ad: 'Google İşletme Profili uyumu', aciklama: 'Haritadaki profilde işletme adını tabelanızdaki gibi bırakıyor; adresi, telefonu ve çalışma saatini siteyle aynı hâle getiriyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Beylikdüzü’nde web tasarım hakkında sık sorulan sorular',
    giris: 'Firma seçimi, uzaktan çalışma ve ilçe adının sitede kullanımı üzerine kısa cevaplar.',
    sorular: [
      {
        soru: 'Beylikdüzü’nde web tasarım firması nasıl seçilir?',
        cevap:
          'Firmayı, yayındaki sitelerini kendi telefonunuzda deneyerek ve ilk görüşmede size ne sorduğuna bakarak seçin. Müşterinizin konut sitelerinde mi oturduğunu, sanayiden mi alım yaptığını sormayan firma her işletmeye aynı sayfa düzenini kurar. Firmanın Beylikdüzü’nde olması tek başına bir ölçüt değildir; sitenin kimin adına açılacağını ve teslimde elinize ne geçeceğini yazılı isteyin.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Beylikdüzü’ne gelmeden web sitesi yapılabilir mi?',
        cevap:
          'Evet, yapılabilir; biz bütün çalışmayı uzaktan yürütüyoruz. İşletmenizi telefonda ya da görüntülü görüşmede dinliyor, metinleri ve fotoğrafları sizden çevrim içi alıyor, taslağı bağlantıyla gönderiyoruz. Atölyenizin ya da dükkânınızın fotoğraflarını sizin çekmeniz gerekir; fotoğraf çekimi hizmeti vermiyoruz.',
      },
      {
        soru: 'Beylikdüzü’nde organize sanayideki bir üreticinin sitesinde neler olmalı?',
        cevap:
          'Üretim kalemleri, makine parkı, işlenen malzeme ve teklif formu ayrı sayfalarda bulunmalı. Başlıklarda önce ürünün adını, ardından konumu yazıyoruz, çünkü satın almacının aramasında ürün adı başta gelir. Yurt dışına satış yapıyorsanız ikinci dil sayfalarını da plana ekliyoruz.',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Web sitemde Beylikdüzü adını nerede kullanmalıyım?',
        cevap:
          'İlçe adını ana sayfa başlığında, iletişim sayfasında ve adres bilgisinde kullanmanız yeterlidir. Her paragrafa “Beylikdüzü” eklemek okuru yorar ve Google’ın anahtar kelime doldurma saydığı bir uygulamadır. Google İşletme Profili’nde ise işletme adına ilçe adı eklemeyin; ad tabeladaki gibi kalır, ilçe adres alanında görünür.',
      },
      {
        soru: 'Site ve alan adı kimin adına kayıtlı olur?',
        cevap:
          'Alan adı ve barındırma hesabı sizin adınıza açılır; site sizin olur. Biz yönetici yetkisiyle çalışırız, bu yetkiyi istediğiniz gün kaldırabilirsiniz. Alan adınız daha önce başka bir firmanın hesabına alınmışsa önce onun size devrini ele alıyoruz.',
      },
    ],
  },
};

/**
 * Antalya web tasarım (şehir sayfası, hizmet: web).
 * Ana niyet: "antalya web tasarım" (1.600), "web tasarım antalya" (140), "antalya web tasarım ajansı" (110).
 * Panoda ilçe aramaları da yer alır: "alanya web tasarım" (1.000; ölçüm dosyasında doğrulanmamış değer diye işaretli,
 * yorumda yaklaşık değer olarak anılır), "manavgat web tasarım" (210), "konyaaltı web tasarım" (10).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. Aynı hacmi gösteren "antalya web tasarımı" yakın yazım
 * sayıldı, listeye alınmadı. Fiyat içeren ifade alınmadı.
 * Antalya için ofis iddiası yok; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Kaleiçi butik otelleri, Kemer tekne turları, Konyaaltı konut projeleri ve
 * yabancı alıcı, Kumluca ve Serik seracılığı, Lara, Muratpaşa büroları, turizm sezonu (nisan ile ekim arası).
 * Örnek işletmeler temsilidir.
 * Çok dilli site: çeviriyi işletmenin çevirmeni yapar; biz dil sayfalarının planını ve teknik yapısını kurarız.
 * Sağlık turizmi kartı yalnız web sitesi içeriğini anlatır; reklam önerilmez (ayrıntı: /sektorler/saglik-turizmi/).
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'antalya-web-tasarim',
  sehir: 'antalya',
  yerDe: 'Antalya’da',
  hizmet: 'web',
  baslik: 'Antalya web tasarım',
  metaBaslik: 'Antalya Web Tasarım: Kurumsal Web Sitesi',
  metaAciklama:
    'Antalya’daki işletmeler için kurumsal web tasarım: misafirin diline göre planlanan sayfalar, telefonda hızlı açılan tasarım, SEO’ya uygun yapı. Uzaktan çalışıyoruz.',
  ozet: 'Kaleiçi’ndeki butik otelden Kumluca’daki fide üreticisine, Antalya’da yerli ve yabancı müşterinin aradığını kendi dilinde bulduğu web siteleri.',
  tanim: [
    'Antalya’daki işletmeler için web tasarım, yerli ya da yabancı müşterinin aradığı odayı, turu, daireyi ya da hizmeti telefonunun ilk ekranında, kendi dilinde bulup işletmeye doğrudan ulaştığı bir web sitesinin planlanması, tasarlanması ve yayına alınması işidir.',
    'Antalya’da işletmelerin müşterisi iki kümede toplanır. Kaleiçi’ndeki butik otel, Kemer’deki tekne turu ve Konyaaltı’nda daire satan inşaat firması nisandan ekime yoğunlaşan, çoğu yabancı bir müşteriye; Muratpaşa’daki büro, Kepez’deki servis ve Kumluca’daki fide üreticisi yıl boyu aynı bölgede yaşayan müşteriye iş yapar. Biz önce müşterinizin hangi dilde, hangi ayda ve neyi aradığını inceliyor, sayfaları ve dil sürümlerini bu bulguya göre planlıyoruz.',
    'İşi uzaktan yürütüyoruz: toplantıları telefonla ya da görüntülü yapıyor, sayfa planını, taslakları ve yayın öncesi siteyi bağlantı üzerinden sizinle birlikte gözden geçiriyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Antalya’da web sitesi yaptırmak isteyen ne arıyor?',
    giris: 'Antalya geniş bir il. İşletme sahibi aramasına kimi zaman şehrin, kimi zaman Alanya ya da Manavgat gibi kendi ilçesinin adını yazıyor.',
    liste: [
      { ifade: 'antalya web tasarım', hacim: 1600 },
      { ifade: 'alanya web tasarım', hacim: 1000 },
      { ifade: 'manavgat web tasarım', hacim: 210 },
      { ifade: 'web tasarım antalya', hacim: 140 },
      { ifade: 'antalya web tasarım ajansı', hacim: 110 },
      { ifade: 'antalya web tasarım firmaları', hacim: 40 },
      { ifade: 'antalya web sitesi yapan firmalar', hacim: 20 },
      { ifade: 'antalya kurumsal web tasarım', hacim: 10 },
      { ifade: 'konyaaltı web tasarım', hacim: 10 },
    ],
    yorum: [
      'Panonun başındaki ifade “antalya web tasarım”: ayda yaklaşık 1.600 arama. Ardından iki ilçe geliyor: “alanya web tasarım” ve “manavgat web tasarım”. Alanya için ölçüm aracının verdiği 1.000 yaklaşık bir değerdir; ikinci bir ölçümle doğrulamadığımız için kesin bir büyüklük gibi okumuyoruz. Sıralamanın gösterdiği şu: merkeze uzak turizm ilçelerinde işletme sahibi aramayı kendi ilçesinin adıyla yapıyor.',
      'Hacimler her ifadenin Türkiye genelinde kaç kez yazıldığını gösterir; yazan kişinin Antalya’da olup olmadığı bu ölçümde yok. Bir projede bizi ilgilendiren liste ise sizin müşterinizin aramalarıdır: otel için oda ve bölge adları, transfer firması için havalimanı ve otel bölgeleri, fide üreticisi için çeşit adları. İşe başlarken bu aramaları Türkçe ve gerekiyorsa misafirinizin dilinde ayrıca çıkarıyor, sayfa listesini onlara göre yazıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Antalya’daki işletmelerin web sitesinde sık görülen altı durum',
    giris: 'İş dokusu sahilden ovaya, merkezden ilçelere değişiyor. Her kartta bir durum ve o durumda ilk yaptığımız iş var.',
    kartlar: [
      {
        soru: 'Misafirimiz yabancı, site kaç dilde olmalı?',
        ornek:
          'Kaleiçi’nde bir butik otelin sitesi Türkçe yazılmış, diğer diller otomatik çeviriyle açılıyor. Almanya’dan oda arayan misafir oda tiplerini ve iptal koşulunu kendi dilinde anlayamayınca rezervasyonu başka bir siteden yapıyor.',
        care: 'Hangi dilde hangi sayfanın gerektiğini planlıyor, dil sürümlerinin yapısını kuruyoruz; çeviriyi sizin çevirmeniniz yapıyor.',
        cizim: 'balon',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Yabancı alıcı projemizi sitede neden inceleyemiyor?',
        ornek:
          'Konyaaltı’nda daire satan bir inşaat firmasının sitesinde bütün projeler tek bir fotoğraf galerisinde duruyor. Yurt dışından bakan alıcı kat planını, teslim tarihini ve konumu bulamadan ilan sitesine dönüyor.',
        care: 'Her projeye kat planını, konumu ve teslim bilgisini taşıyan ayrı bir sayfa açıyor, bilgi isteme formunu o sayfaya koyuyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'İnşaat ve yapı', url: '/sektorler/insaat-ve-yapi/' },
      },
      {
        soru: 'Misafir tur bilgisini neden hep mesajla soruyor?',
        ornek:
          'Kemer’den günlük tekne turu düzenleyen bir işletmenin sitesinde kalkış saati, rota ve tura neyin dahil olduğu yazmıyor. Otel odasından telefonla bakan misafir hepsini mesajla soruyor, yanıt gecikince başka bir tura yazılıyor.',
        care: 'Her tur için saati, rotayı ve dahil olanları tek ekranda gösteren sayfalar kuruyor, rezervasyon isteğini kısa bir forma bağlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Siparişi telefonla alıyoruz, site bize ne katar?',
        ornek:
          'Kumluca’da fide yetiştiren bir firma siparişlerini yıllardır tanıdık üreticilerden telefonla alıyor. Serik’te ilk serasını kuran biri aradığı çeşidi Google’a yazdığında bu firmanın adına rastlamıyor.',
        care: 'Çeşitleri, dikim dönemini ve sipariş koşulunu ürün sayfalarına yazıyor, her sayfaya bir teklif formu ekliyoruz.',
        cizim: 'defter',
        bag: { etiket: 'Site nasıl kurulur?', url: '/blog/web-sitesi-nasil-kurulur/' },
      },
      {
        soru: 'Yurt dışından hasta geliyor, siteye ne yazabiliriz?',
        ornek:
          'Lara’da yurt dışından hasta kabul eden bir ağız ve diş sağlığı polikliniği, sitesini bir kampanya sayfası gibi hazırlatmış. Sağlık alanındaki tanıtım kuralları sitede kullanılabilecek sözü sınırlıyor, metinlerde ise bu sınır gözetilmemiş.',
        care: 'İçeriği kuralların izin verdiği bilgiyle sınırlı tutuyor, her dildeki metni yayından önce kurumunuza onaylatıyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Sağlık turizmi', url: '/sektorler/saglik-turizmi/' },
      },
      {
        soru: 'Müşterimiz Antalyalı, yine de site gerekir mi?',
        ornek:
          'Muratpaşa’da bir mali müşavirlik bürosu işini tavsiyeyle büyütmüş. Yeni şirket kuran biri büronun adını duyup Google’da arıyor; karşısına yalnız bir harita kaydı çıkıyor, hangi işlere bakıldığını göremiyor.',
        care: 'Baktığınız işleri anlatan az sayfalı bir site kuruyor, haritadaki kaydınızı bu siteyle aynı bilgiye getiriyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  isler: {
    baslik: 'Antalya’daki işletmenizin sitesi için neler yapıyoruz?',
    giris: 'Site kurmak yalnız sayfa çizmek anlamına gelmiyor. Antalya’daki bir işletme için işin altı kalemi şöyle:',
    liste: [
      { ad: 'Hizmet, oda ve ürün sayfaları', aciklama: 'Oda tipi, tur, proje ya da ürün: müşterinizin ayrı ayrı aradığı her kaleme kendi fotoğrafını ve bilgisini taşıyan bir sayfa açıyoruz.' },
      { ad: 'Dil sayfalarının planı ve yapısı', aciklama: 'Hangi dilin gerektiğine misafirinizin ya da alıcınızın geldiği ülkelere bakarak karar veriyor, her dil sürümünü arama motorunun ayırt edebileceği ayrı adreste kuruyoruz. Çeviriyi sizin çevirmeniniz yapıyor.' },
      { ad: 'Önce telefon için tasarım', aciklama: 'Misafir siteyi çoğu zaman yoldan ya da otel odasından, telefonla açıyor. Sayfaları dar ekrana ve yavaş bağlantıya göre tasarlıyor, görselleri hafif tutuyoruz.' },
      { ad: 'Rezervasyon isteği, form ve WhatsApp', aciklama: 'Rezervasyon isteğini, teklif formunu ve WhatsApp düğmesini gerçek telefonda sınıyoruz. Rezervasyon yazılımı geliştirmiyoruz; kullandığınız bir sistem varsa sayfadan ona bağlantı veriyoruz.' },
      { ad: 'Arama için başlık ve adres', aciklama: 'Sayfa başlıklarını ve adreslerini, misafirinizin ya da müşterinizin Google’a yazdığı sözcüklerle kuruyoruz. Lara, Konyaaltı ya da Kemer gibi yer adlarını yalnız gerçekten bulunduğunuz ve hizmet götürdüğünüz yerler için kullanıyoruz.' },
      { ad: 'Yönetim paneli ve teslim', aciklama: 'Sezon açılırken saatleri, fotoğrafları ve duyuruları kendi ekibinizin değiştirebileceği bir panel kuruyor, yayın günü bütün erişimleri size devrediyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  fiyat: {
    giris:
      'Antalya’da bir butik otelin üç dilli sitesi ile bir oto servisin tanıtım sitesini aynı teklifle karşılaştırmak mümkün değil. Teklifin tutarını aşağıdaki kalemlerden hangilerinin işe dahil olduğu belirliyor.',
  },

  secim: {
    giris:
      'Antalya’da sezon açılmadan site yetiştirmek isteyen işletme çoğu zaman aceleyle karar veriyor. Sezon ortasında çıkan sürprizlerin çoğu, aşağıdaki sorulardan birinin baştan sorulmamasından doğuyor.',
  },

  sss: {
    baslik: 'Antalya’da web tasarım hakkında sık sorulan sorular',
    giris: 'Dil, sezon, sahiplik ve firma seçimi üzerine Antalya’daki bir işletmenin sorabileceği sorular.',
    sorular: [
      {
        soru: 'Antalya’da web tasarım firması nasıl seçilir?',
        cevap:
          'Firmayı, yaptığı sitelerin bugün yayında olup olmadığına ve sizin müşterinizi tanımak için ne sorduğuna bakarak seçin. Turizmde çalışıyorsanız yaptıkları sitelerden birini telefonunuzda, yabancı dil sürümüyle açın; sayfanın hızına, çevirinin okunup okunmadığına ve rezervasyon isteğinin gönderilebildiğine bakın. Müşterinizin kim olduğunu sormadan tasarım gösteren firma işi hazır kalıba göre yapacaktır.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Antalya’daki işletmeye yüz yüze görüşmeden site yapılır mı?',
        cevap:
          'Evet, yapılır; biz çalışmalarımızı uzaktan yürütüyoruz. İlk görüşmeyi ve sonraki toplantıları telefonla ya da görüntülü yapıyor, taslakları ekran paylaşarak birlikte okuyoruz. Fotoğrafları, logoyu ve metinleri internet üzerinden paylaşmanız yeterli oluyor.',
      },
      {
        soru: 'Çok dilli otel ya da emlak sitesinde çeviriyi kim yapar?',
        cevap:
          'Çeviriyi işletmenizin çalıştığı çevirmen yapar; biz çeviri hizmeti vermiyoruz. Bizim işimiz hangi sayfaların hangi dile çevrileceğini planlamak, dil sürümlerini ayrı adreslerle kurmak ve çevirmenden gelen metni sayfalara yerleştirmektir. Otomatik çeviriye bırakılmış sayfayı önermiyoruz; iptal koşulu gibi bilgilerin yanlış anlaşılması işletmeye sorun çıkarır.',
      },
      {
        soru: 'Sezon açılmadan site yetişir mi?',
        cevap:
          'Görüşmeden önce tarih vermiyoruz; süre sayfa sayısına, dil sayısına ve metinlerle fotoğrafların ne kadarının hazır olduğuna bağlı. Sezon içinde metin ve fotoğraf onayına vakit ayırmak zorlaştığı için turizm işletmelerine hazırlığa sezon kapanınca başlamayı öneriyoruz. İlk görüşmede sayfa listesini ve sizden beklenenleri çıkarıyor, takvimi buna göre birlikte belirliyoruz.',
      },
      {
        soru: 'Antalya’da web tasarım fiyatları neye göre değişir?',
        cevap:
          'Fiyatı sayfa sayısı, dil sayısı, içeriği kimin hazırlayacağı ve yönetim paneli gibi ek işler belirler. İki dilli bir otel sitesi ile tek dilli bir büro sitesinin iş yükü aynı olmadığı için sitemizde fiyat listesi yok. Teklifi, görüşmede çıkan iş listesinin her kalemini ayrı yazarak veriyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Rezervasyon sitelerinde yerimiz var, ayrıca site gerekir mi?',
        cevap:
          'Evet, çoğu konaklama işletmesi için gerekir; kendi siteniz, sizi adıyla arayan misafirin koşulları sizden okuyup doğrudan ulaşabildiği yerdir. Rezervasyon siteleri sizi hiç duymamış misafire gösterir, kendi siteniz ise adınızı bilen kişiyi karşılar. Sitenizi bu ikinci grubun talebini alacak biçimde kuruyoruz.',
      },
      {
        soru: 'Alan adı, site ve içerik kimin olur?',
        cevap:
          'Hepsi işletmenizin olur. Alan adını ve barındırma hesabını sizin adınıza açıyor, yayın günü yönetici bilgilerini size teslim ediyoruz; bizim erişimimizi istediğiniz gün kapatabilirsiniz.',
      },
      {
        soru: 'Site rezervasyon ya da talep getirir diye söz veriyor musunuz?',
        cevap:
          'Hayır; rezervasyon sayısı, ziyaret ya da sıralama için söz vermiyoruz. Taahhüdümüz işin kendisiyle ilgili: işletmenizi ve müşterinizin aramalarını ayrıntılı incelemek, her kararı gerekçesiyle anlatmak ve yayından sonra siteyi düzenli olarak iyileştirmek.',
      },
    ],
  },
};

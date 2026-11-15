/**
 * Bursa web tasarım (şehir sayfası).
 * Ana niyet: “bursa web tasarım” (1.000), “bursa web tasarım ajansı” (110), “bursa web tasarım firmaları” (50),
 * “bursa web sitesi yapan firmalar” (50), “inegöl web tasarım” (50). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Listeye alınmayanlar: “bursa web tasarım ajansları” (110; “ajansı” ile aynı grup), “bursa web tasarımı” (70), “bursa web sitesi
 * tasarım” ve “bursa web site tasarım” (50; yakın yazım), “bursa web tasarım & yazılım” (70; yazılım geliştirme işimiz değil).
 * Bursa’da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü açıkça söylenir. Ajansın bulunduğu şehir de yazılmaz.
 * Yerel bilgiler herkesçe bilinen olgulardır: organize sanayi bölgeleri ve otomotiv yan sanayi, İnegöl mobilyası, havlu ve
 * ev tekstili, Uludağ kış turizmi, Nilüfer’de FSM Bulvarı çevresi, Koza Han’daki ipek ticareti, Mudanya sahili.
 * Örnek işletmeler temsilidir. İkinci dil sayfalarında çeviri işletmenin çevirmenindedir (üretim ve ihracat sayfasıyla aynı karar).
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'bursa-web-tasarim',
  sehir: 'bursa',
  yerDe: 'Bursa’da',
  hizmet: 'web',
  baslik: 'Bursa web tasarım',
  metaBaslik: 'Bursa Web Tasarım: Kurumsal Web Sitesi',
  metaAciklama:
    'Bursa’daki üreticiler, mobilyacılar ve hizmet işletmeleri için kurumsal web tasarım: ürün ve hizmet sayfaları, telefonda rahat kullanım. Çalışmayı uzaktan yürütüyoruz.',
  ozet: 'Organize sanayideki yan sanayiciden İnegöl’deki mobilyacıya, Bursa’da alıcının aradığı ürünü ve teklif yolunu hemen bulduğu web siteleri.',
  tanim: [
    'Bursa’daki işletmeler için web tasarım, alıcının ya da müşterinin aradığı ürünü ve hizmeti telefon ekranında bulup size teklif isteği, arama ya da WhatsApp mesajıyla ulaşabildiği bir sitenin planlanıp kurulması işidir.',
    'Bursa’da siteden beklenen iş, işletmenin kime sattığına göre değişiyor. Organize sanayi bölgelerindeki otomotiv yan sanayicisi tedarikçi arayan satın almacıya, İnegöl’deki mobilyacı hem bayiye hem evini döşeyen aileye, Uludağ’daki otel kış tatilini planlayan misafire sayfa hazırlar. Biz işe bu okurun kim olduğunu ve Google’a ne yazdığını inceleyerek başlıyor, sayfaları çıkan bulguya göre kuruyoruz.',
    'İşi uzaktan yürütüyoruz: toplantıları telefonla ya da görüntülü yapıyor, sayfa planını, taslakları ve metinleri her aşamada ekran paylaşarak sizinle birlikte gözden geçiriyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Bursa’da web sitesi yaptırmak isteyenler ne arıyor?',
    giris: 'Site yaptıracak işletme sahibi aramasına çoğunlukla şehrin adını ekliyor; ilçe adıyla ölçülebilen tek arama İnegöl’den geliyor.',
    liste: [
      { ifade: 'bursa web tasarım', hacim: 1000 },
      { ifade: 'bursa web tasarım ajansı', hacim: 110 },
      { ifade: 'bursa web tasarım firmaları', hacim: 50 },
      { ifade: 'bursa web sitesi yapan firmalar', hacim: 50 },
      { ifade: 'bursa web sitesi tasarımı', hacim: 50 },
      { ifade: 'web tasarım bursa', hacim: 50 },
      { ifade: 'inegöl web tasarım', hacim: 50 },
    ],
    yorum: [
      'Listenin başındaki “bursa web tasarım” ayda yaklaşık 1.000 kez yazılıyor; öteki ifadeler bunun çok altında kalıyor. Sonuna “ajansı”, “firmaları” ya da “yapan firmalar” ekleyenler birkaç adayı yan yana koyup karşılaştırıyor. “İnegöl web tasarım” ise ilçenin kendi başına bir iş merkezi olduğunu gösteriyor: mobilya üreticisi aramasına Bursa yerine İnegöl yazıyor.',
      'Bu hacimler ifadelerin Türkiye’nin tamamında kaç kez yazıldığını gösterir; aramaların ne kadarının Bursa’dan yapıldığını ölçmedik. Sayfa planı için asıl baktığımız liste sizin ürününüzle ilgili olandır. İşin başında “otomotiv kalıp imalatı”, “İnegöl koltuk takımı” ya da “Mudanya balık restoranı” gibi müşterinizin yazdığı aramaları çıkarıyor, her birine hangi sayfanın cevap vereceğini belirliyoruz.',
    ],
  },

  yerel: {
    baslik: 'Bursa’da site kuran işletmelerde sık gördüğümüz altı durum',
    giris: 'Organize sanayideki fabrika ile Mudanya sahilindeki restoran siteden aynı şeyi beklemiyor. Altı örnek ve her birinde işe nereden başladığımız:',
    kartlar: [
      {
        soru: 'Yan sanayiciyiz, sitemiz satın almacıya ne göstermeli?',
        ornek:
          'Demirtaş Organize Sanayi Bölgesi’nde otomotiv için plastik parça üreten bir firmanın sitesi üç cümlelik bir tanıtımdan ve uzaktan çekilmiş bir bina fotoğrafından oluşuyor. Yeni tedarikçi arayan satın almacı enjeksiyon makinelerini, kalite belgelerini ve üretilen parça gruplarını bulamadan sayfayı kapatıyor.',
        care: 'Makine parkını, parça gruplarını ve kalite belgelerini ayrı sayfalarda gösteriyor, her birine teklif formu ekliyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Site bayiye mi, evine mobilya alana mı konuşmalı?',
        ornek:
          'İnegöl’de koltuk takımı üreten bir firma aynı ana sayfada hem bayilik soran mağaza sahibine hem evine takım bakan aileye seslenmeye çalışıyor. İkisi de kendi sorusunun cevabına ulaşmak için bütün sayfayı kaydırmak zorunda kalıyor.',
        care: 'Bayi başvurusunu ve ürün koleksiyonlarını iki ayrı yola ayırıyor, okuru ilk ekrandan kendi sayfasına gönderiyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Yurt dışındaki alıcı sitemizde neden aradığını bulamıyor?',
        ornek:
          'Havlu ve bornoz üreten bir Bursa firması fuarda tanıştığı alıcıya kartvizitindeki site adresini veriyor. Alıcı adresi açınca yalnız Türkçe yazılmış, gramajı ve ölçüyü söylemeyen birkaç ürün fotoğrafıyla karşılaşıyor.',
        care: 'Ürün gruplarını teknik bilgisiyle yazıyor, aynı sayfaların ikinci dil sürümünü kuruyoruz; çeviri sizin çevirmeninizden gelir.',
        cizim: 'zarf',
        bag: { etiket: 'Yayındaki siteler', url: '/calismalarimiz/' },
      },
      {
        soru: 'Kışın doluyuz, site yazın ne işe yarar?',
        ornek:
          'Uludağ’da küçük bir otel kış rezervasyonlarını aracı sitelerden alıyor; kendi sitesinde geçen sezondan kalmış bir sayfa duruyor. Yazın serinlemek için dağa çıkmak isteyen misafir otelin açık olup olmadığını siteden anlayamıyor.',
        care: 'Kış ve yaz dönemini ayrı sayfalarda anlatıyor, oda ve tarih bilgisini otelin kendi güncelleyebileceği bir panele bağlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Klinik sitesine neler yazılabilir, neler yazılamaz?',
        ornek:
          'Nilüfer’de FSM Bulvarı üzerindeki bir diş kliniği, sitesini mağaza kampanyası diliyle yazdırmış. Sağlık alanındaki tanıtım kuralları bu dile izin vermiyor; klinik bunu site yayına girdikten sonra öğreniyor.',
        care: 'Metinleri bilgilendirme sınırında tutuyor, her sayfayı yayından önce hekimin onayına sunuyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Sağlık ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Çarşıda dükkânımız var, site bize ne katar?',
        ornek:
          'Koza Han’da ipek şal ve eşarp satan bir dükkânı gezmeye gelen ziyaretçi beğeniyor, şehrine dönünce bir tane daha almak istiyor. Dükkânın adını Google’a yazdığında yalnız harita kaydı çıkıyor; ürünleri görebileceği, sipariş için yazabileceği bir sayfa yok.',
        care: 'Ürünleri fotoğrafı ve bilgisiyle gösteren, siparişi WhatsApp’a ya da forma bağlayan yalın bir site kuruyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Butik markalar', url: '/sektorler/butik-markalar/' },
      },
    ],
  },

  isler: {
    baslik: 'Bursa’daki işletmeniz için hangi işleri yapıyoruz?',
    giris: 'Site kurmak sayfaları çizmekle bitmiyor. Bursa’daki bir işletme için aşağıdaki altı işi tek bir plan içinde yürütüyoruz.',
    liste: [
      { ad: 'Ürün ve hizmet sayfaları', aciklama: 'Kalıp, döküm, koltuk takımı ya da oda tipi: müşterinizin ayrı aradığı her kalem kendi sayfasını alır. Sayfada o kalemin fotoğrafı, teknik bilgisi ve teklif yolu birlikte durur.' },
      { ad: 'Telefon ekranına göre tasarım', aciklama: 'Satın almacı çoğunlukla masaüstünden, mobilya bakan aile telefondan gelir. Sayfaları dar ekranda başlatıp geniş ekrana doğru büyütüyoruz.' },
      { ad: 'Teklif formu ve WhatsApp', aciklama: 'Teklif formuna yalnız gereken soruları koyuyor, formu ve WhatsApp düğmesini yayından önce deneme başvurusuyla sınıyoruz.' },
      { ad: 'İkinci dil sayfaları', aciklama: 'İhracat yapan üreticide yabancı dil sürümünü ayrı adreste kuruyoruz. Çeviriyi sizin çevirmeniniz yapar; hangi sayfanın hangi dilde gerektiğini biz çıkarırız.' },
      { ad: 'Arama ve harita uyumu', aciklama: 'Sayfa başlıklarını müşterinizin aramasına göre yazıyoruz. İnegöl, Nilüfer ya da Mudanya adını yalnız orada bulunduğunuz ya da oraya hizmet verdiğiniz sayfada kullanıyor, Google İşletme Profili’ndeki bilgiyi siteyle eşliyoruz.' },
      { ad: 'Yönetim paneli ve devir', aciklama: 'Yeni ürünü, sezon bilgisini ya da referansı kendi ekibinizin ekleyebileceği bir panel kuruyoruz. Yayın günü bütün erişimler sizin adınıza kayıtlı olur.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  secim: {
    giris:
      'Bursa’da sanayiye iş yapan bir üretici de, Nilüfer’deki bir klinik de siteyi yıllarca kullanacak. Seçimi bugünkü teklife bakarak değil, sitenin o yıllar boyunca kimin elinde kalacağına bakarak yapın.',
  },

  sss: {
    baslik: 'Bursa’da web tasarım: sık sorulan sorular',
    giris: 'Firma seçimi, uzaktan çalışma, süre ve sitenin sahipliği üzerine sık gelen sorular ve kısa cevapları.',
    sorular: [
      {
        soru: 'Bursa’da web tasarım firması nasıl seçilir?',
        cevap:
          'Firmayı, yayındaki işlerine ve ilk görüşmede sizden ne öğrenmek istediğine bakarak seçin. Verdiği örnek siteleri telefonunuzdan açıp teklif formunu sonuna kadar doldurmayı deneyin. Kime sattığınızı, hangi ürünün daha çok sorulduğunu ve teklifin size nasıl ulaştığını sormayan firma, sitenizi hazır bir kalıba yerleştirecektir.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Bursa’da yüz yüze görüşmeden site yaptırılır mı?',
        cevap:
          'Evet; işi baştan sona uzaktan yürütüyoruz. İlk görüşmeyi telefonla ya da görüntülü yapıyor, taslakları ve yayın öncesi siteyi ekran paylaşarak birlikte inceliyoruz. Fabrika, mağaza ve ürün fotoğraflarını siz gönderirsiniz; hangi karelere ihtiyaç olduğunu sayfa planıyla birlikte yazılı veriyoruz.',
      },
      {
        soru: 'İhracat yapıyoruz, site kaç dilde olmalı?',
        cevap:
          'Site, satış yaptığınız ve gelen isteğe o dilde cevap verebildiğiniz pazarların dilinde olmalı. İlk akla gelen dil İngilizcedir; Avrupa’daki alıcıyla çalışıyorsanız Almanca gibi ikinci bir yabancı dil de eklenebilir. Çeviriyi sizin çevirmeniniz yapar; biz dil sürümlerinin adres yapısını ve her dilde hangi sayfaların gerektiğini üstleniriz.',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'İnegöl’deyiz; ilçe adını sitede nasıl kullanmalıyız?',
        cevap:
          'İlçe adını, gerçekten bulunduğunuz yerin adı olarak başlıkta ve iletişim bilgisinde açıkça kullanın. Mobilyada “İnegöl” ürünün yanında anılan bir addır; ürün sayfasının başlığında yer alması aramayla sayfayı buluşturur. Bulunmadığınız ilçelerin adını sırf arama için sayfalara dizmek ise hem okuru hem Google’ı yanıltır.',
      },
      {
        soru: 'Web sitesi ne kadar sürede biter?',
        cevap:
          'Tarih vermeden önce sayfa listesini görmemiz gerekir; süreyi en çok sayfa sayısı ile metin ve fotoğrafların hazır olup olmadığı belirler. İlk görüşmenin ardından hangi sayfaların kurulacağını ve sizden beklenen malzemeyi yazıyor, takvimi bu listeye bakarak birlikte çıkarıyoruz.',
      },
      {
        soru: 'Bursa’da web sitesi fiyatı neye göre değişir?',
        cevap:
          'Fiyatı sayfa sayısı, ürün ve hizmet kalemlerinin çokluğu, ikinci dil ve metinleri kimin yazacağı belirler. Birkaç sayfalık bir hizmet sitesi ile geniş ürün kataloğu olan bir üreticinin sitesi aynı iş değildir; bu yüzden liste fiyatı yayımlamıyoruz. İşin kalemlerini görüşmeden sonra tek tek yazıyor, teklifi bu dökümün üzerinden veriyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Site, alan adı ve hesaplar kimin adına olur?',
        cevap:
          'Hepsi işletmenizin adına kayıtlı olur. Alan adını ve barındırma hesabını siz açarsınız ya da açılırken size eşlik ederiz; bize yalnız yönetici erişimi verirsiniz. Çalışma bittiğinde ya da dilediğiniz bir anda erişimi kaldırmak sizin elinizdedir.',
      },
      {
        soru: 'Site yayına girince teklif sayısı için söz veriyor musunuz?',
        cevap:
          'Hayır; teklif adedi, ziyaret ya da Google sırası için söz vermiyoruz. Üstlendiğimiz iş, işletmenizi ve müşterinizin aramalarını ayrıntılı incelemek, her kararı gerekçesiyle anlatmak ve yayından sonra sayfaları düzenli olarak iyileştirmektir.',
      },
    ],
  },
};

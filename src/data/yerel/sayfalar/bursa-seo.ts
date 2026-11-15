/**
 * Bursa SEO (şehir sayfası).
 * Ana niyet: “bursa seo uzmanı” (170), “bursa seo hizmeti” (170), “bursa seo” (140), “bursa seo ajansı” (90), “inegöl seo” (10).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. SEO adıyla ölçülen ifade beş tane olduğu için listeye, SEO’yu da
 * içeren daha geniş iki arama eklendi: “bursa dijital pazarlama ajansı” (170) ve “bursa dijital pazarlama” (50).
 * Ağırlık yerel SEO’dadır: Google İşletme Profili, harita sonuçları, ilçe ve ürün adıyla yapılan aramalar, yorum isteme düzeni,
 * yapay zekâ yanıtlarında işletme bilgisinin doğruluğu. Sıralama ya da süre sözü verilmez; yorum yazma ve satın alma yoktur.
 * Bursa’da ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir. Sağlık ve hukukta yalnız site ve SEO anlatılır.
 * Yerel bilgiler herkesçe bilinen olgulardır: Nilüfer, Osmangazi, Yıldırım, Mudanya, Gürsu, İnegöl, Gemlik ilçeleri; İnegöl
 * mobilyası, Bursa havlusu, Gemlik zeytini, Çekirge kaplıcaları, Bursa Organize Sanayi Bölgesi. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'bursa-seo',
  sehir: 'bursa',
  yerDe: 'Bursa’da',
  hizmet: 'seo',
  baslik: 'Bursa SEO',
  metaBaslik: 'Bursa SEO Ajansı ve SEO Danışmanlığı',
  metaAciklama:
    'Bursa’daki işletmeler için SEO: Google İşletme Profili, harita sonuçları, ilçe ve ürün aramalarına göre sayfalar, düzenli iyileştirme. Çalışmayı uzaktan yürütüyoruz.',
  ozet: 'Nilüfer’deki stüdyodan İnegöl’deki mobilya üreticisine, Bursa’da harita sonuçlarında ve ürün aramalarında bulunmak için yürütülen yerel SEO çalışması.',
  tanim: [
    'Bursa’daki işletmeler için SEO, işletmenin Google’ın harita ve arama sonuçlarında, hizmetini ilçe ya da ürün adıyla arayan kişinin karşısına reklam vermeden çıkması için sitesinde ve Google İşletme Profili’nde yapılan çalışmadır.',
    'Bursa’da arama iki ayrı yoldan geliyor. Nilüfer, Osmangazi ya da Yıldırım’da oturan kişi dişçiyi, veterineri, oto servisini ilçe ve mahalle adıyla arıyor ve çoğu zaman haritadaki ilk sonuçlardan birini seçiyor. İnegöl mobilyasını, Bursa havlusunu ya da Gemlik zeytinini arayan ise başka bir şehirden yazıyor ve ürün sayfası arıyor. Çalışmaya, işletmenizin bu iki yoldan hangisiyle müşteri aldığını inceleyerek başlıyoruz.',
    'SEO çalışmasını uzaktan yürütüyoruz: sitenize ve işletme profilinize yönetici erişimiyle giriyor, bulguları ve yapılacakları telefonla ya da görüntülü görüşmede sizinle paylaşıyoruz.',
  ],
  cagri: 'SEO için görüşelim',

  aramalar: {
    baslik: 'Bursa’da SEO için hangi aramalar yapılıyor?',
    giris: 'SEO desteği arayan işletme sahibi kimi zaman bir uzman, kimi zaman bir ajans, kimi zaman doğrudan hizmetin adını yazıyor.',
    liste: [
      { ifade: 'bursa seo uzmanı', hacim: 170 },
      { ifade: 'bursa seo hizmeti', hacim: 170 },
      { ifade: 'bursa dijital pazarlama ajansı', hacim: 170 },
      { ifade: 'bursa seo', hacim: 140 },
      { ifade: 'bursa seo ajansı', hacim: 90 },
      { ifade: 'bursa dijital pazarlama', hacim: 50 },
      { ifade: 'inegöl seo', hacim: 10 },
    ],
    yorum: [
      'Dört ifade aynı işi dört ayrı adla istiyor: “bursa seo uzmanı” ve “bursa seo hizmeti” ayda yaklaşık 170’er, “bursa seo” 140, “bursa seo ajansı” 90 kez yazılıyor. “Uzman” yazan tek bir kişiyle, “ajans” yazan bir ekiple çalışmayı düşünüyor; istenen iş ikisinde de aynı. “Dijital pazarlama ajansı” arayanların bir bölümü SEO’yu reklamla birlikte soruyor. “İnegöl seo” küçük bir arama, ama ilçenin kendi adıyla arandığını gösteriyor.',
      'Bu değerler Türkiye genelinde ölçülmüş aylık yaklaşık sayılardır; arayanların kaçının Bursa’da olduğunu bilmiyoruz. Üstelik bunlar ajans arayan işletme sahiplerinin aramaları. Sizin için belirleyici olan, müşterinizin yazdıklarıdır: “nilüfer pilates”, “bursa oto ekspertiz” ya da “inegöl yatak odası takımı” gibi. Her çalışmanın başında bu listeyi işletmeniz için ayrıca çıkarıyor, hangi aramaya hangi sayfanın ve harita kaydının cevap vereceğini belirliyoruz.',
    ],
  },

  yerel: {
    baslik: 'Bursa’da SEO çalışmasında sık gördüğümüz altı durum',
    giris: 'Haritada görünmek isteyen mahalle işletmesi ile ürününü ülkenin her yerine satan üreticinin SEO’su aynı yerden başlamıyor. Altı durum:',
    kartlar: [
      {
        soru: 'Haritada neden rakiplerimiz çıkıyor, biz çıkmıyoruz?',
        ornek:
          'Nilüfer’de İhsaniye’deki bir pilates stüdyosunun Google İşletme Profili yıllar önce açılmış; kategori eksik, çalışma saatleri eski, fotoğraf yok. “Nilüfer pilates” yazan kişi haritadaki ilk sonuçların arasında stüdyoyu göremiyor.',
        care: 'Profildeki kategoriyi, hizmetleri ve saatleri tamamlıyor, sitedeki adres ve telefonu profille aynı hâle getiriyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Her ilçe için ayrı sayfa açmalı mıyız?',
        ornek:
          'Yıldırım’da bir halı yıkama firması Osmangazi, Nilüfer, Mudanya ve Gürsu için ilçe adı dışında her cümlesi aynı olan sayfalar açmış. Birbirinin kopyası olan bu sayfaların hiçbiri aramada görünmüyor.',
        care: 'Yalnız gerçekten servis verdiğiniz ilçeler için, o ilçeye özgü bilgi taşıyan sayfalar kuruyoruz.',
        cizim: 'yapboz',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Ürünümüz aranıyor, neden satıcı siteleri üstte çıkıyor?',
        ornek:
          'İnegöl’de yatak odası takımı üreten bir firmanın sitesinde bütün modeller tek bir “Ürünler” sayfasında, yalnız fotoğrafla duruyor. Model adını ve ölçüsünü yazan alıcı, bu bilgiyi satıcı sitelerinin ürün sayfalarında buluyor.',
        care: 'Her modele ölçüsü, malzemesi ve teslim bilgisiyle kendi sayfasını açıyor, koleksiyon sayfalarını aramalara göre düzenliyoruz.',
        cizim: 'kitaplik',
        bag: { etiket: 'Anahtar kelime nedir?', url: '/blog/anahtar-kelime-nedir/' },
      },
      {
        soru: 'Sanayi firması için SEO ne işe yarar?',
        ornek:
          'Bursa Organize Sanayi Bölgesi’nde hidrolik silindir üreten bir firma yalnız kendi adıyla aratıldığında çıkıyor. “Hidrolik silindir imalatı” yazan satın almacı, ürün sayfası olan başka şehirlerdeki üreticilere ulaşıyor.',
        care: 'Ürün ve imalat kalemlerine ayrı sayfalar açıyor, başlıkları satın almacının yazdığı teknik terimlerle kuruyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Misafir bizi neden aracı sitelerde buluyor?',
        ornek:
          'Çekirge’de termal suyu olan küçük bir otelin adı arandığında üst sıralarda rezervasyon siteleri çıkıyor. Otelin kendi sitesi kaplıcayı, oda tiplerini ve ulaşımı anlatmadığı için “bursa termal otel” aramasında da yer almıyor.',
        care: 'Otelin sitesine kaplıca, oda ve ulaşım sayfalarını ekliyor, işletme profilindeki site bağlantısını ve bilgileri güncelliyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Yapay zekâ işletmemiz hakkında neden yanlış bilgi veriyor?',
        ornek:
          'Gemlik’te sofralık zeytin üreten bir aile işletmesini ChatGPT’ye soran alıcı, yıllar önce kapanan satış noktasının adresini ve eski telefon numarasını cevap olarak alıyor. İşletmenin sitesindeki, harita kaydındaki ve rehber sitelerindeki bilgiler birbirini tutmuyor.',
        care: 'İşletme bilgisini sitede ve işletme profilinde aynı hâle getiriyor, sitede soruya açık cevap veren sayfalar kuruyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO nedir?', url: '/blog/geo-nedir/' },
      },
    ],
  },

  isler: {
    baslik: 'Bursa’da SEO için hangi işleri yapıyoruz?',
    giris: 'Çalışma sitenin içinde bitmiyor; harita kaydı, ilçe sayfaları ve yapay zekâ yanıtları da aynı işin parçası. Altı kalem:',
    liste: [
      { ad: 'Teknik inceleme', aciklama: 'Sayfalarınızın Google tarafından taranıp dizine eklendiğini, telefonda düzgün açıldığını ve eski adreslerin doğru yönlendiğini Search Console verisiyle kontrol ediyoruz.' },
      { ad: 'Arama araştırması', aciklama: 'Hizmetinizin Bursa’da hangi ilçe, semt ve ürün adlarıyla arandığını çıkarıyor; satın almaya yakın aramaları bilgi arayanlardan ayırıyoruz.' },
      { ad: 'Google İşletme Profili ve harita', aciklama: 'Profildeki kategoriyi, hizmet listesini, çalışma saatlerini ve fotoğrafları tamamlıyor; ad, adres ve telefonu sitenizle eşliyoruz.' },
      { ad: 'Hizmet, ürün ve ilçe sayfaları', aciklama: 'Her hizmete ve ürün grubuna bir sayfa kuruyoruz. İlçe sayfasını yalnız Nilüfer, Mudanya ya da İnegöl’de gerçekten bulunduğunuz ya da oraya servis verdiğiniz durumda açıyoruz.' },
      { ad: 'Yorum isteme düzeni', aciklama: 'Müşteriden yorumu ne zaman ve nasıl isteyeceğinizi birlikte belirliyor, gelen yorumlara verilecek yanıtların çerçevesini hazırlıyoruz. Yorum yazmıyor, yorum satın almıyoruz.' },
      { ad: 'Yapay zekâ yanıtlarında doğruluk', aciklama: 'ChatGPT ve Google’ın yapay zekâ yanıtlarının işletmeniz hakkında ne söylediğine bakıyor, yanlış ya da eksik bilginin kaynağı olan sayfaları düzeltiyoruz.' },
    ],
    bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
  },

  sss: {
    baslik: 'Bursa’da SEO hakkında sık sorulan sorular',
    giris: 'Ajans seçimi, harita sonuçları, süre ve erişimler üzerine sık gelen sorular.',
    sorular: [
      {
        soru: 'Bursa’da SEO ajansı nasıl seçilir?',
        cevap:
          'SEO ajansını, sitenizi incelemeden önce size ne vaat ettiğine bakarak eleyin: belirli bir sıra ya da süre sözü veren ajans, elinde olmayan bir şeyi satıyordur. Görüşmede Search Console erişimi isteyip istemediğine, Google İşletme Profili’ni sorup sormadığına ve yapacağı işi madde madde yazıp yazmadığına bakın.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Bursa SEO uzmanı mı, SEO ajansı mı?',
        cevap:
          'İkisi aynı işi yapar; fark işin kaç kişiye dağıldığındadır. Tek kişiyle çalışmak iletişimi kısaltır, ekip ise teknik düzeltme, içerik ve harita çalışmasını aynı anda yürütebilir. Karar verirken unvandan çok, incelemenin ne kadar ayrıntılı yapıldığına ve bulguların size nasıl anlatıldığına bakın.',
      },
      {
        soru: 'Yüz yüze görüşmeden SEO çalışması yürütülür mü?',
        cevap:
          'Evet; SEO sitenize ve işletme profilinize verilen yönetici erişimiyle uzaktan yapılır, biz de böyle çalışıyoruz. Toplantıları telefonla ya da görüntülü yapıyor, bulguları ekranda gösteriyoruz. Dükkânın, stüdyonun ya da fabrikanın fotoğraflarını ve mahalleyle ilgili ayrıntıları sizden alıyoruz.',
      },
      {
        soru: 'Google haritalarda üst sıralara nasıl çıkılır?',
        cevap:
          'Harita sonuçlarını Google üç şeye bakarak sıralar: aramayla ilgi, arayana uzaklık ve işletmenin bilinirliği. Uzaklığı değiştiremezsiniz; ilgiyi profilin eksiksiz doldurulması ve sitenin aynı bilgiyi taşıması, bilinirliği ise yorumlar ve işletmenizden söz eden diğer siteler etkiler. Sıra için söz vermiyoruz; profilinizi ve sitenizi bu başlıklara göre düzenliyoruz.',
        bag: { etiket: 'Google yorumları rehberi', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'SEO çalışması ne zaman sonuç verir?',
        cevap:
          'Tarih vermek doğru olmaz, çünkü değişiklikler aynı hızda görünmez. Profil ve teknik düzeltmeler önce fark edilir; yeni sayfaların aramalarda yer bulması daha uzun sürer ve rakiplerin durumuna bağlıdır. Hangi aramada ne değiştiğine düzenli olarak bakıyor, geride kalan sayfayı yeniden ele alıyoruz.',
      },
      {
        soru: 'Site ve Google İşletme Profili kimin adına olur?',
        cevap:
          'İkisi de işletmenize aittir. Profilin birincil sahibi siz olursunuz, bizi yönetici olarak eklersiniz; alan adı ve site yönetimi de sizin hesabınızda durur. Çalışma bittiğinde erişimimizi tek adımda kaldırabilirsiniz.',
      },
      {
        soru: 'Klinik ve hukuk bürosu için SEO yapıyor musunuz?',
        cevap:
          'Evet; sağlık ve hukuk alanında web sitesi ve SEO çalışması yapıyoruz, reklam kampanyası ise önermiyoruz. Bu alanlarda içeriği meslek kurallarının izin verdiği bilgilendirmeyle sınırlı tutuyor; tedavi ya da dava sonucu vaadi, karşılaştırma ve hasta yorumu yazmıyoruz. Her metin hekimin ya da avukatın onayından sonra yayımlanır.',
        bag: { etiket: 'Sağlık ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Sıralama garantisi veriyor musunuz?',
        cevap:
          'Hayır; Google’da belirli bir sıra, harita sonuçlarında yer ya da belirli bir ziyaret sayısı için söz vermiyoruz, çünkü sıralamaya Google karar verir. Söz verebildiğimiz şey sitenizi ve profilinizi ayrıntılı incelemek, hangi düzeltmeyi neden yaptığımızı göstermek ve çalışmayı düzenli olarak sürdürmektir.',
      },
    ],
  },
};

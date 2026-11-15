/**
 * Antalya SEO (şehir sayfası, hizmet: seo).
 * Ana niyet: "antalya seo" (210), "antalya seo uzmanı" (140), "antalya seo ajansı" (90), "antalya seo hizmeti" (40).
 * Antalya için ölçülen SEO ifadesi dört tane olduğundan pano, aynı kitlenin yazdığı "antalya dijital ajans" (90),
 * "antalya dijital pazarlama ajansı" (70) ve "antalya web tasarım seo" (10) ile tamamlandı.
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. Aynı hacmi gösteren "antalya dijital pazarlama" yakın
 * yazım sayıldı, listeye alınmadı.
 * Ölçülüp hacim dönmeyenler (yorumda anılır, listede yok): "alanya seo", "manavgat seo", "konyaaltı seo".
 * Sayfa yerel SEO ağırlıklıdır: Google İşletme Profili, harita sonuçları, ilçe sayfaları, yorum isteme düzeni (yorum
 * toplama ya da yazdırma vaadi yok), dil sürümleri, yapay zekâ yanıtlarında işletme bilgisi. Sıralama sözü yok.
 * Antalya için ofis iddiası yok; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Kepez sanayi siteleri, ilin Alanya ile Kaş arasındaki genişliği, Çıralı
 * bungalov işletmeleri, Konyaaltı sahili, Kalkan villa kiralama, Aksu seraları. Örnek işletmeler temsilidir.
 * Harita sıralamasındaki üç ölçüt (ilgi, uzaklık, bilinirlik) Google İşletme Profili yardım sayfasındaki anlatımdır.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'antalya-seo',
  sehir: 'antalya',
  yerDe: 'Antalya’da',
  hizmet: 'seo',
  baslik: 'Antalya SEO',
  metaBaslik: 'Antalya SEO Ajansı ve SEO Danışmanlığı',
  metaAciklama:
    'Antalya’daki işletmeler için SEO: Google İşletme Profili, harita sonuçları, ilçe ve dil sayfaları, teknik düzeltme. Çalışmayı uzaktan, görüntülü görüşerek yürütüyoruz.',
  ozet: 'Antalya’da haritada, ilçe aramalarında ve misafirin kendi dilinde yaptığı aramalarda görünmek için yerel SEO ve teknik düzenleme.',
  tanim: [
    'Antalya’daki işletmeler için SEO, işletmenin Google’ın organik sonuçlarında, harita bölümünde ve yapay zekâ yanıtlarında, hizmetini Antalya’da ya da Antalya’ya gelmeden önce arayan kişinin karşısına reklam vermeden çıkması için sitesinde ve Google İşletme Profili’nde yapılan düzenleme işidir.',
    'Antalya’da arama iki yerden gelir. Şehirde yaşayan kişi “Kepez oto servis” ya da “Konyaaltı veteriner” gibi ilçe adını ekleyerek, çoğu zaman haritaya bakarak arar. Tatilini planlayan misafir ise aramayı gelmeden haftalar önce, kendi ülkesinden ve kendi dilinde yapar. Biz önce müşterinizin bu iki gruptan hangisinde olduğuna bakıyor; Google İşletme Profili’ni, ilçe sayfalarını ve dil sürümlerini buna göre sıraya koyuyoruz.',
    'SEO çalışmasını uzaktan yürütüyoruz: görüşmeler telefonla ya da görüntülü oluyor, sitede ve profilde yaptığımız değişikliklerin gerekçesini bu görüşmelerde anlatıyoruz.',
  ],
  cagri: 'SEO için görüşelim',

  aramalar: {
    baslik: 'Antalya’da SEO için hangi ifadeler aranıyor?',
    giris: 'SEO desteği arayan işletme sahibi şehir adının yanına “uzmanı”, “ajansı” ya da “hizmeti” sözünü ekliyor.',
    liste: [
      { ifade: 'antalya seo', hacim: 210 },
      { ifade: 'antalya seo uzmanı', hacim: 140 },
      { ifade: 'antalya seo ajansı', hacim: 90 },
      { ifade: 'antalya dijital ajans', hacim: 90 },
      { ifade: 'antalya dijital pazarlama ajansı', hacim: 70 },
      { ifade: 'antalya seo hizmeti', hacim: 40 },
      { ifade: 'antalya web tasarım seo', hacim: 10 },
    ],
    yorum: [
      '“Antalya seo” ayda yaklaşık 210, “antalya seo uzmanı” 140 kez yazılıyor; “ajansı” ve “hizmeti” ekleyenler daha az. “Uzman” yazan işletme çoğu zaman tek bir kişiyle doğrudan konuşarak çalışmak istiyor, “ajans” yazan işin tamamını devretmeyi düşünüyor. İki biçimde de çalışıyoruz: danışmanlıkta uygulamayı sizin ekibiniz ya da geliştiriciniz yapar, ajans düzeninde incelemeyi, düzeltmeyi ve içerik planını biz üstleniriz.',
      'Bu değerler Türkiye genelindeki aramalardır; arayanın hangi şehirde olduğu ölçülmedi. Alanya, Manavgat ve Konyaaltı için “seo” aramalarına da baktık, ölçüm aracı hiçbirinde hacim göstermedi. Müşteriniz ise sizin işinizi ilçe adıyla arayabilir; çalışmanın ilk işi, hizmetinizin Antalya’da ve ilçelerinde hangi sözlerle arandığını çıkarmaktır.',
    ],
  },

  yerel: {
    baslik: 'Antalya’da aramada görünmek isteyen işletmenin altı durumu',
    giris: 'Harita, ilçe sayfası, yabancı dil, yorum, yapay zekâ ve hizmet sayfası: her kart ayrı bir konuya bakıyor.',
    kartlar: [
      {
        soru: 'Dükkânımız sanayide, haritada neden çıkmıyoruz?',
        ornek:
          'Kepez’deki sanayi sitesinde bir oto elektrikçinin Google İşletme Profili yıllar önce açılmış; kategorisi genel, çalışma saatleri eski, fotoğraf yok. “Yakınımdaki oto elektrikçi” yazan sürücü haritada komşu dükkânları görüyor.',
        care: 'Profilin kategorisini, hizmet listesini, saatlerini ve fotoğraflarını güncelliyor, sitedeki bilgiyle birebir eşliyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Bütün ile gidiyoruz, her ilçeye sayfa açmalı mıyız?',
        ornek:
          'Merkezdeki bir evden eve nakliyat firması Alanya’dan Kaş’a her ilçe için birer sayfa açmış; sayfaların metni aynı, yalnız ilçe adı değişiyor. Google bu sayfaların çoğunu dizine almıyor, alınanlar da birbirinin önünü kesiyor.',
        care: 'Yalnız düzenli iş aldığınız ilçeler için, o ilçeye özgü bilgi taşıyan sayfalar planlıyoruz.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Yabancı misafir bizi kendi dilinde neden bulamıyor?',
        ornek:
          'Çıralı’da bir bungalov işletmesinin sitesinde İngilizce ve Almanca sayfalar var, ama hangi sayfanın hangi dile ait olduğu arama motoruna bildirilmemiş. İngiltere’den arayan misafirin karşısına Türkçe sayfa çıkıyor.',
        care: 'Her dil sürümüne ayrı adres ve dil etiketi veriyor, misafirin o dilde yazdığı aramaları ayrıca araştırıyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Google yorumlarımız az, bu bizi geriye mi atıyor?',
        ornek:
          'Konyaaltı sahilinde bir balık restoranı her akşam dolu, ama Google’daki yorumu az ve hiçbirine yanıt yazılmamış. Akşam yemeği için haritaya bakan aile, yorumu çok olan yan mekânı seçiyor.',
        care: 'Yorum yazdırmıyoruz; memnun misafirden yorumun ne zaman, nasıl isteneceğini ve yanıt biçimini birlikte belirliyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'Google yorumları rehberi', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'Yapay zekâ işletmemizi neden yanlış anlatıyor?',
        ornek:
          'Kalkan’da villa kiralayan bir işletmeyi, tatilini planlayan misafir yapay zekâ aracına soruyor. Araç eski bir dizin kaydına dayanarak sezonu ve havalimanına uzaklığı yanlış aktarıyor.',
        care: 'İşletme bilgisini sitede ve profillerde tek hâle getiriyor, sık sorulan soruya açık cevap veren sayfalar yazıyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO nedir?', url: '/blog/geo-nedir/' },
      },
      {
        soru: 'Rakip firma aynı işte neden bizden üstte?',
        ornek:
          'Aksu’da sera kurulumu yapan bir firmanın sitesinde tek bir “Hizmetlerimiz” sayfası var; cam sera ile plastik sera aynı paragrafta anlatılıyor. “Sera yapımı” aramasında, her sera tipine ayrı sayfa açmış rakipler görünüyor.',
        care: 'Her işe ölçüsü, malzemesi ve iş örnekleriyle ayrı bir sayfa açıyor, sayfaları birbirine bağlıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'Anahtar kelime nedir?', url: '/blog/anahtar-kelime-nedir/' },
      },
    ],
  },

  isler: {
    baslik: 'Antalya’daki işletmenizin SEO’su için neler yapıyoruz?',
    giris: 'Hangi işe önce başlanacağı incelemeden sonra belli olur. Antalya’daki bir işletmede sıraya giren altı kalem:',
    liste: [
      { ad: 'Google İşletme Profili düzeni', aciklama: 'Kategoriyi, hizmet listesini, saatleri ve fotoğrafları güncelliyoruz. Sezonluk çalışan işletmelerde açılış ve kapanış tarihlerini profile işliyoruz.' },
      { ad: 'Hizmet ve ilçe sayfaları', aciklama: 'Her hizmete, arayan kişinin sorusunu yanıtlayan bir sayfa kuruyoruz. İlçe sayfasını yalnız gerçekten hizmet verdiğiniz yer için, o yere özgü bilgiyle açıyoruz.' },
      { ad: 'Teknik SEO', aciklama: 'Sayfaların dizine girip girmediğine, yönlendirmelere, site haritasına ve telefondaki açılış hızına bakıyor, bulduğumuz engelleri öncelik sırasıyla kaldırıyoruz.' },
      { ad: 'Dil sürümleri ve yabancı aramalar', aciklama: 'Siteniz birden çok dildeyse her dile ayrı adres ve dil etiketi veriyor, misafirinizin kendi dilinde yazdığı aramaları araştırıyoruz. Çeviri sizin çevirmeninizde kalıyor.' },
      { ad: 'Yorum isteme düzeni', aciklama: 'Yorum yazdırmıyor, satın almıyoruz. Yorumun hangi anda ve hangi yolla isteneceğini, gelen yoruma kimin nasıl yanıt vereceğini birlikte kararlaştırıyoruz.' },
      { ad: 'Yapay zekâ yanıtlarında işletme bilgisi', aciklama: 'ChatGPT ve Google’ın yapay zekâ yanıtlarının işletmenizi hangi kaynaktan okuduğuna bakıyor; adres, sezon ve hizmet bilgisini sitede ve profillerde aynı hâle getiriyoruz.' },
    ],
    bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
  },

  sss: {
    baslik: 'Antalya’da SEO hakkında sık sorulan sorular',
    giris: 'Ajans seçimi, harita sıralaması, sezon ve sahiplik üzerine sorular.',
    sorular: [
      {
        soru: 'Antalya’da SEO ajansı nasıl seçilir?',
        cevap:
          'Ajansı, sıralama sözü verip vermediğine ve ilk görüşmede sitenize dair hangi bulguyu gösterdiğine bakarak seçin. Belirli bir sıra ya da tarih için söz veren ajans, kendi elinde olmayan bir sonucu satıyordur. Sitenizin dizin durumunu, Google İşletme Profili’nizi ve müşterinizin aramalarını sormadan plan sunan ajans da işi hazır listeyle yürütecektir.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Antalya SEO uzmanı mı, SEO ajansı mı?',
        cevap:
          'Fark işi kimin uygulayacağındadır: danışmanlıkta biz yönlendirir ve denetleriz, düzeltmeyi sizin ekibiniz ya da geliştiriciniz yapar; ajans düzeninde uygulamayı da biz üstleniriz. İki biçimde de çalışıyoruz. Hangisinin uyduğu, sitenize kimin erişebildiğine ve ekibinizin ne kadar zaman ayırabildiğine göre ilk görüşmede belli olur.',
      },
      {
        soru: 'Antalya’daki işletmenin SEO’su uzaktan yürütülür mü?',
        cevap:
          'Evet, yürütülür; çalışma siteniz, Search Console ve Google İşletme Profili üzerinden yapılır. Bize bu üç yere yönetici erişimi vermeniz yeterlidir; görüşmeleri telefonla ya da görüntülü yapıyoruz.',
      },
      {
        soru: 'Google Haritalar’da sıralama neye göre belirlenir?',
        cevap:
          'Google harita sonuçlarını üç şeye göre sıralar: işletmenin aramayla ilgisi, arayan kişiye uzaklığı ve bilinirliği. Uzaklığı değiştiremezsiniz; ilgiyi profilin kategorisi, hizmet listesi ve sitedeki sayfalar, bilinirliği ise yorumlar ve işletmenizden söz eden diğer siteler belirler. Biz çalışmayı bu iki alanda yürütüyor, sıra için söz vermiyoruz.',
      },
      {
        soru: 'Sezonluk işletme kışın SEO çalışmasını durdurmalı mı?',
        cevap:
          'Hayır, durdurmamalı; yazın gelecek misafirin aramasına cevap verecek sayfaların sezon açılmadan dizinde olması gerekir. Kış ayları teknik düzeltme, yeni sayfa ve dil sürümü için işletmenin de vakit ayırabildiği dönemdir. Profilde kapalı olduğunuz tarihleri de bu dönemde doğru gösteriyoruz.',
      },
      {
        soru: 'Antalya’da SEO ne zaman sonuç verir?',
        cevap:
          'Tarih veremiyoruz, çünkü süre sitenizin bugünkü durumuna ve aramadaki rekabete bağlı. Teknik düzeltmelerin etkisi önce görülür, hangi aramalarda göründüğünüz ondan sonra değişir, talep en son gelir. Hangi adımda olduğumuzu görüşmelerde Search Console verisi üzerinden gösteriyoruz.',
      },
      {
        soru: 'Search Console hesabı ve harita profili kimde kalır?',
        cevap:
          'Üçü de işletmenizin hesabında durur ve sizde kalır. Bize yönetici olarak erişim açarsınız; çalışma bittiğinde ya da dilediğiniz gün bu erişimi kaldırırsınız.',
      },
      {
        soru: 'SEO’da sıralama garantisi veriyor musunuz?',
        cevap:
          'Hayır; sıra, ziyaret sayısı ya da talep adedi için söz vermiyoruz. Bize düşen sitenizi ve müşterinizin aramalarını ayrıntılı incelemek, yapılacak işi gerekçesiyle sıraya koymak ve sayfaları düzenli olarak güncellemektir.',
      },
    ],
  },
};

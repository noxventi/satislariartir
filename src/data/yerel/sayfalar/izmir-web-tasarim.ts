/**
 * İzmir web tasarım (şehir sayfası).
 * Ana niyet: "izmir web tasarım" (1.900), "web tasarım izmir" (390), "izmir web tasarım ajansı" (170),
 * "izmir web tasarım firmaları" (70). İlçe ifadeleri: karşıyaka (140), buca (140), bornova (90), alsancak (30).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026. Aynı hacmi gösteren "izmir web tasarımı" yakın yazım
 * sayıldığı için listeye ayrıca alınmadı.
 * İzmir'de ofis olduğu yazılmaz; işin uzaktan yürütüldüğü açıkça söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: liman ve ihracat (kuru incir, kuru üzüm), Çiğli'deki Atatürk Organize
 * Sanayi Bölgesi, Kemalpaşa'daki sanayi, Kemeraltı çarşısı, Kordon, Bornova'daki üniversite kampüsü, Çeşme ve Alaçatı
 * turizmi, şehrin fuar geleneği. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'izmir-web-tasarim',
  sehir: 'izmir',
  yerDe: 'İzmir’de',
  hizmet: 'web',
  baslik: 'İzmir web tasarım',
  metaBaslik: 'İzmir Web Tasarım: Kurumsal Web Sitesi',
  metaAciklama:
    'İzmir’deki işletmeler için web tasarım: ürün ve hizmet sayfaları, ikinci dil, telefonda hızlı açılan tasarım. İşi uzaktan, telefon ve görüntülü görüşmeyle yürütüyoruz.',
  ozet: 'İzmir’de ihracatçının yurt dışındaki alıcısına, otelin yaz misafirine ve çarşı esnafının müşterisine göre planlanan web siteleri.',
  tanim: [
    'İzmir’deki işletmeler için web tasarım, işletmenin ne sattığını ilk bakışta anlatan ve ziyaretçiyi arama, form ya da WhatsApp ile işletmeye ulaştıran bir web sitesinin sayfa planından yayına kadar hazırlanması işidir.',
    'İzmir’de bir sitenin kime hitap edeceği ilçeden ilçeye değişir. Kemalpaşa’daki üretici ve limandan mal gönderen ihracatçı yurt dışındaki alıcıya, Alaçatı’daki butik otel yazın gelecek misafire, Karşıyaka çarşısındaki mağaza iki sokak ötedeki müşteriye sayfa hazırlar. Hiç siteniz olmasa da, siteniz olup talep getirmese de işe müşterinizin kim olduğunu, hangi dilde ve hangi mevsimde aradığını inceleyerek başlıyoruz.',
    'İşi uzaktan yürütüyoruz. Toplantılar telefonla ya da görüntülü olur; sayfa taslaklarını ve metinleri bağlantıyla gönderiyor, sizinle birlikte gözden geçiriyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'İzmir’de web tasarım için Google’a ne yazılıyor?',
    giris: 'Site yaptırmak isteyenlerin çoğu şehir adını yazıyor; körfezin iki yakasındaki ilçeler de kendi adlarıyla aranıyor.',
    liste: [
      { ifade: 'izmir web tasarım', hacim: 1900 },
      { ifade: 'web tasarım izmir', hacim: 390 },
      { ifade: 'izmir web tasarım ajansı', hacim: 170 },
      { ifade: 'karşıyaka web tasarım', hacim: 140 },
      { ifade: 'buca web tasarım', hacim: 140 },
      { ifade: 'bornova web tasarım', hacim: 90 },
      { ifade: 'izmir web tasarım firmaları', hacim: 70 },
      { ifade: 'alsancak web tasarım', hacim: 30 },
      { ifade: 'izmir web sitesi tasarımı', hacim: 10 },
    ],
    yorum: [
      'Listenin başında ayda yaklaşık 1.900 aramayla “izmir web tasarım” var. Sonuna “ajansı” ya da “firmaları” ekleyen kişi birkaç seçeneği yan yana koymak istiyor. Karşıyaka, Buca, Bornova ve Alsancak adlarıyla yapılan aramalar ise İzmir’in tek merkezli bir şehir olmadığını gösteriyor: ilçe adını yazan işletme sahibi, kendi çarşısını ve müşterisini bilen biriyle çalışmak istiyor.',
      'Hacimler Türkiye’nin tamamında yapılan aramaların aylık yaklaşık sayısıdır; arayanın İzmir’de olup olmadığını ayrıca ölçmedik. Sizin projenizde bu listeyle yetinmiyoruz. Hizmetleriniz için ayrı bir arama araştırması yapıyoruz: Urla’daki bir restoran için yemek ve rezervasyon aramaları, Çiğli’deki bir üretici için ürünün yurt dışında hangi adla arandığı gibi.',
    ],
  },

  yerel: {
    baslik: 'İzmir’de web sitesi kurarken sık gördüğümüz altı durum',
    giris: 'Limanda, çarşıda, kampüs çevresinde ve sahilde site başka başka işlere yarıyor. Örnek işletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Yurt dışındaki alıcı sitemizde neyi arıyor?',
        ornek:
          'Kuru incir ve kuru üzüm ihraç eden bir İzmir firmasının sitesi yalnız Türkçe; bütün ürünler tek bir “Ürünlerimiz” sayfasında duruyor. Hamburg’daki ithalatçı ambalaj seçeneklerini ve belgeleri göremeyince numune istemeden sayfayı kapatıyor.',
        care: 'Her ürüne İngilizce bir sayfa açıyor; ambalaj, belge ve numune talebini aynı ekrana koyuyoruz.',
        cizim: 'zarf',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Çarşıdaki dükkânım için site gerekir mi?',
        ornek:
          'Kemeraltı’nda bir kuyumcu müşterisini yıllardır çarşının kalabalığından alıyor. Alyans bakacak genç çift ise yola çıkmadan önce modelleri ve dükkânın saatlerini telefonda arıyor; bulamayınca sayfası olan başka bir kuyumcuya gidiyor.',
        care: 'Ürün gruplarını, çalışma saatini ve yol tarifini gösteren küçük bir site kuruyor, harita profiliyle eşliyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Otelimizin sitesi neden rezervasyon getirmiyor?',
        ornek:
          'Alaçatı’da bir butik otelin sitesinde bütün odalar tek galeride toplanmış, İngilizce sayfa yok. Tatilini mayısta planlayan misafir oda tipini ve müsaitliği nasıl soracağını göremeyince rezervasyon sitesine dönüyor.',
        care: 'Her oda tipine fotoğraflı bir sayfa açıyor, Türkçe ve İngilizce talep formunu sezon başlamadan deniyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Başka şehirdeki veli bizi nasıl değerlendiriyor?',
        ornek:
          'Bornova’da kampüse yürüme mesafesindeki özel bir öğrenci yurdu en çok aramayı tercih sonuçlarının açıklandığı haftalarda alıyor. Şehir dışındaki veli odaları, yemek düzenini ve ulaşımı sitede göremediği için telefonla soruyor; hat meşgulken başka yurda geçiyor.',
        care: 'Odaları, günlük düzeni ve ulaşımı ayrı sayfalarda gösteriyor, ön kayıt formunu yoğun haftalardan önce yayına alıyoruz.',
        cizim: 'kitaplik',
        bag: { etiket: 'Eğitim kurumları', url: '/sektorler/egitim-kurumlari/' },
      },
      {
        soru: 'Fuarda tanıştığımız alıcı sitede ne buluyor?',
        ornek:
          'Çiğli’deki Atatürk Organize Sanayi Bölgesi’nde ambalaj makinesi üreten bir firma fuarda onlarca kartvizit topluyor. Standı gezen satın almacı ertesi hafta siteye girdiğinde gördüğü makinenin teknik bilgisini bulamıyor, karşısına yıllar önceki ürün listesi çıkıyor.',
        care: 'Her makineye teknik bilgisi ve teklif formu olan bir sayfa açıyor, fuardan önce yayında olmasını planlıyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Menümüz telefonda neden okunmuyor?',
        ornek:
          'Kordon’da bir balık restoranının menüsü siteye fotoğraf olarak yüklenmiş; telefonda yazılar okunmuyor, numaraya dokununca arama başlamıyor. Akşam için yer bakan kişi menüyü okuyamayınca haritadaki bir sonraki restorana geçiyor.',
        care: 'Menüyü telefonda okunan bir sayfaya çeviriyor, rezervasyon ve yol tarifi düğmelerini ilk ekrana alıyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
    ],
  },

  isler: {
    baslik: 'İzmir’deki işletmenizin sitesi için yaptığımız altı iş',
    giris: 'Tasarım işin görünen kısmı. Sitenin teklif, rezervasyon ya da telefon getirmesi aşağıdaki işlerin birlikte yürümesine bağlı.',
    liste: [
      {
        ad: 'Ürün ve hizmet sayfaları',
        aciklama: 'Sattığınız her ürün grubunu ve verdiğiniz her hizmeti kendi sayfasında anlatıyoruz. Kemeraltı’ndaki bir mağazada bu birkaç sayfadır, Çiğli’deki bir üreticide uzun bir ürün listesi.',
      },
      {
        ad: 'İkinci dil sayfaları',
        aciklama: 'Yurt dışına satan üretici ve yabancı misafir ağırlayan otel için her dile ayrı adres ve başlık kuruyoruz. Çeviriyi kimin yapacağı ilk görüşmede netleşir.',
      },
      {
        ad: 'Telefon ekranına göre tasarım',
        aciklama: 'Kordon’da yürürken restoran arayan da, şantiyeden tedarikçi arayan da siteyi telefonda açıyor. Sayfaları önce dar ekranda çiziyor, görselleri hafif tutuyoruz.',
      },
      {
        ad: 'Teklif, rezervasyon ve WhatsApp',
        aciklama: 'Üreticide teklif formu, otelde rezervasyon talebi, çarşıdaki mağazada WhatsApp: talep yolunu işinize göre seçiyor, yayından önce deneme başvurusuyla sınıyoruz.',
      },
      {
        ad: 'Aramaya uygun yapı',
        aciklama: 'Sayfa başlıklarını ve adreslerini müşterinizin yazdığı sözlerle kuruyoruz. İlçe adını yalnız hizmet verdiğiniz yer için kullanıyoruz: Bornova’daki işletme için Bornova, Çeşme’deki otel için Çeşme.',
      },
      {
        ad: 'Panel, teslim ve sahiplik',
        aciklama: 'Sezon bilgisini, menüyü ya da ürün listesini sizin güncelleyebileceğiniz bir panel kuruyoruz. Yayın günü yönetim erişimi size geçer.',
      },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  fiyat: {
    giris:
      'İzmir’de bir ihracatçının iki dilli ürün kataloğu ile bir kafenin menü sitesi aynı tutara yapılmaz. Tutarı şehir belirlemez; sitenin kapsamı belirler ve kapsam şu kalemlerden oluşur.',
  },

  secim: {
    giris:
      'İzmir’de bir ihracatçı da, Alsancak’ta bir kafe de aynı soruyla başlıyor: siteyi kime yaptırmalı? Karar vermeden önce görüştüğünüz firmaya şu yedi soruyu sorun.',
  },

  sss: {
    baslik: 'İzmir’de web sitesi yaptırırken en çok sorulanlar',
    giris: 'Ajans seçimi, yabancı dil, sezon ve sitenin sahipliği üzerine İzmir’deki işletmelerden gelen sorular.',
    sorular: [
      {
        soru: 'İzmir’de web tasarım ajansı nasıl seçilir?',
        cevap:
          'Seçimi, ajansın sizinkine benzeyen bir işletme için kurduğu siteyi kendi telefonunuzda deneyerek yapın. Otel işletiyorsanız bir otel sitesinde talep bırakın, üreticiyseniz bir ürün sayfasında teklif isteyin. İlk görüşmede müşterinizin kim olduğunu ve hangi dilde aradığını sormayan ajans, siteyi hazır kalıba göre kuracaktır.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Hiç yüz yüze görüşmeden web sitesi yaptırabilir miyim?',
        cevap:
          'Evet, yaptırabilirsiniz; biz bütün projeleri uzaktan yürütüyoruz. İlk görüşme telefonla ya da görüntülü olur, sonrasında taslak sayfaları bağlantıyla gönderir, notlarınızı aynı ekranda birlikte konuşuruz. İşletmenizin fotoğraflarını ve belgelerini sizden dosya olarak alırız.',
      },
      {
        soru: 'İzmir’de web tasarım fiyatları neye göre değişir?',
        cevap:
          'Fiyatı en çok sayfa sayısı, dil sayısı ve içeriği kimin hazırlayacağı değiştirir. İki dilli bir otel sitesi ile tek dilli, birkaç sayfalık bir mağaza sitesi aynı iş değildir; bu yüzden hazır bir liste yayımlamıyoruz. Görüşmeden sonra yapılacak işleri satır satır yazıp teklifi o yazıya göre veriyoruz.',
        bag: { etiket: 'Web sitesi fiyatları', url: '/blog/web-sitesi-fiyatlari/' },
      },
      {
        soru: 'Siteyi İngilizce ya da başka bir dilde de kuruyor musunuz?',
        cevap:
          'Evet, siteyi birden çok dilde kuruyoruz; her dilin kendi adresi ve kendi sayfa başlığı olur. Hangi dilin gerektiğine alıcınızın ya da misafirinizin nereden geldiğine bakarak birlikte karar veriyoruz. Çeviriyi kimin yapacağı teklifte ayrı bir satır olarak yazar.',
      },
      {
        soru: 'Sezonluk çalışan bir işletme siteyi ne zaman yaptırmalı?',
        cevap:
          'Çeşme ya da Foça’da yazın çalışan bir işletmenin sitesi, misafirin tatilini planlamaya başladığı aylardan önce yayında olmalıdır. Tarih vermiyoruz; takvimi sayfa sayısına ve fotoğrafların hazır olup olmadığına göre ilk görüşmede birlikte çıkarıyoruz. Sezon ortasında başlanan işte önce en çok talep alan sayfayı yayına alıyoruz.',
      },
      {
        soru: 'Alan adı ve site kimin adına kayıtlı olur?',
        cevap:
          'Alan adı, barındırma ve sitenin kendisi işletmenizin adına kayıtlı olur. Bizde yalnız sizin verdiğiniz yönetici erişimi bulunur ve bu erişimi istediğiniz gün kapatabilirsiniz. Eski siteniz başka birinin hesabında duruyorsa nasıl devralınacağına ilk görüşmede bakıyoruz.',
      },
      {
        soru: 'Web sitesi için sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır, vermiyoruz. Kaç teklif ya da kaç rezervasyon geleceğini kimse önceden bilemez. Üstlendiğimiz şey işinizi ve müşterinizin aramalarını ayrıntılı incelemek, her kararı gerekçesiyle anlatmak ve yayından sonra sayfaları düzenli olarak iyileştirmektir.',
      },
    ],
  },
};

/**
 * OSTİM web tasarım (semt sayfası: organize sanayi bölgesi, Ankara, web).
 * Ana niyet: "ostim web tasarım" (110); ölçülen Ankara ilçe ve semtleri içinde en yüksek hacim (Çankaya 90, Etimesgut ve
 * Keçiören 40). "ostim web tasarım ankara" (20) aynı ölçümün genişletme bölümünden. Liste Ankara ifadeleriyle tamamlandı:
 * "ankara web tasarım" (2.900), "ankara web tasarım firmaları" (260), "ankara web sitesi yapan firmalar" (70),
 * "kurumsal web tasarım ankara" (20). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * "ostim web tasarım ajansı", "ostim reklam ajansı", "ostim dijital ajans" ve "ostim seo" için araç veri döndürmedi.
 * Sayfa üretici, tedarikçi, makine ve yedek parça firmalarının sitelerine bakar: teknik ürün sayfası, katalog, teklif
 * formu, yurt dışı alıcı için ikinci dil. Çeviri hizmeti ve fotoğraf çekimi verilmez; bu açıkça söylenir.
 * OSTİM’de ofis olduğu yazılmaz; iş uzaktan yürütülür.
 * Yerel bilgiler herkesçe bilinen olgulardır: OSTİM’in Yenimahalle’de bir organize sanayi bölgesi olması, küçük ve orta
 * ölçekli üreticiler, iş makinesi yedek parçası, kauçuk, medikal, savunma ve raylı sistemler alanındaki üretim.
 * Örnek firmalar temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'ostim-web-tasarim',
  sehir: 'ankara',
  ilce: 'OSTİM',
  yerDe: 'OSTİM’de',
  hizmet: 'web',
  baslik: 'OSTİM web tasarım',
  metaBaslik: 'OSTİM Web Tasarım, Ankara: Üretici Siteleri',
  metaAciklama:
    'OSTİM’deki üretici, tedarikçi ve yedek parça firmaları için web tasarım: teknik ürün sayfaları, katalog, teklif formu ve ikinci dil. Projeyi uzaktan yürütüyoruz.',
  ozet: 'OSTİM’de makine, yedek parça ve fason imalat firmaları için teknik ürün sayfası, katalog ve teklif formu taşıyan web siteleri.',
  tanim: [
    'OSTİM’deki firmalar için web tasarım, satın almacının aradığı ürünü, teknik değerlerini ve teklif isteme yolunu aynı sayfada bulduğu bir web sitesinin kurulması işidir.',
    'OSTİM, Ankara’nın Yenimahalle ilçesinde, büyük bölümü küçük ve orta ölçekli üreticilerden oluşan bir organize sanayi bölgesi. Makine imalatı, metal işleme, iş makinesi yedek parçası, kauçuk ve plastik ile savunma, medikal ve raylı sistemler için parça üretimi aynı sokaklarda yapılıyor. Buradaki firmanın müşterisi vitrine bakarak gelmiyor; parçanın ya da işlemin adını Google’a yazıyor. Siteyi o aramaya ve teklif isteyen satın almacıya göre kuruyor, projeyi telefonla ve görüntülü görüşerek uzaktan yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: '“Ostim web tasarım” aramasını nasıl okuyoruz?',
    giris: 'Ankara’da ilçe ve semt adıyla yapılan web tasarım aramaları içinde ölçtüğümüz en yüksek hacim OSTİM’e ait.',
    liste: [
      { ifade: 'ankara web tasarım', hacim: 2900 },
      { ifade: 'ankara web tasarım firmaları', hacim: 260 },
      { ifade: 'ostim web tasarım', hacim: 110 },
      { ifade: 'ankara web sitesi yapan firmalar', hacim: 70 },
      { ifade: 'kurumsal web tasarım ankara', hacim: 20 },
      { ifade: 'ostim web tasarım ankara', hacim: 20 },
    ],
    yorum: [
      '“Ostim web tasarım” ayda yaklaşık 110 kez yazılıyor. Bu sayı Çankaya’nın (90), Etimesgut ile Keçiören’in (40) üstünde. Biz bunu şöyle okuyoruz: sanayi bölgesindeki firma, üretici sitesinin nasıl kurulduğunu bilen birini arıyor.',
      'Sayılar Türkiye geneli için; aramanın OSTİM içinden yapılıp yapılmadığına dair ölçümümüz yok. Sizin sitenizde hedeflenecek aramalar da bunlar olmayacak; alıcınızın yazdığı ürün ve işlem adları olacak. Proje başında ürün gruplarınız için hangi teknik adların arandığını ölçüyor, sayfa listesini ona göre çıkarıyoruz.',
    ],
  },

  yerel: {
    baslik: 'OSTİM’de üretici sitelerinde sık gördüğümüz üç durum',
    giris: 'Üç örnek de temsili. Ortak yanları: alıcının aradığı bilgi firmada var, ama sitede bulunacağı yerde durmuyor.',
    kartlar: [
      {
        soru: 'PDF kataloğumuz var, ürün sayfası şart mı?',
        ornek:
          'OSTİM’de hidrolik silindir üreten bir firmanın bütün ürünleri sitede tek bir PDF dosyasında duruyor. Şantiyeden telefonuyla arama yapan bakım sorumlusu, çap ve strok ölçüsünü görmek için dosyayı indirip büyütmek zorunda kalıyor.',
        care: 'Her ürün grubuna ölçü tablosu telefonda okunan bir sayfa açıyor, kataloğu indirme bağlantısı olarak koruyoruz.',
        cizim: 'kitaplik',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Teklif formunda müşteriye ne sormalıyız?',
        ornek:
          'İş makinesi yedek parçası satan bir firmanın formunda yalnız ad ve telefon alanı var. Parça numarası ve makine modeli sorulmadığı için her talepte müşteri yeniden aranıyor, teklif ertesi güne kalıyor.',
        care: 'Forma makine modeli, parça numarası ve fotoğraf ekleme alanı koyuyor, kaydın size ulaştığını deneme talebiyle görüyoruz.',
        cizim: 'zarf',
        bag: { etiket: 'Form gösterimi', url: '/hizmetler/web-tasarim/#form-gosterimi' },
      },
      {
        soru: 'Yurt dışındaki alıcı için İngilizce site nasıl olmalı?',
        ornek:
          'Medikal cihaz parçası üreten bir firmaya yurt dışından e-postayla teklif isteği geliyor. Alıcı karar vermeden önce siteyi açıyor: ana sayfa İngilizce, ürün sayfaları ve teknik tablolar Türkçe.',
        care: 'İngilizce sürümü ürün sayfalarıyla birlikte kendi adresinde kuruyoruz; çeviriyi sizin ekibiniz ya da çevirmeniniz yapıyor.',
        cizim: 'yol-ayrimi',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  isler: {
    baslik: 'OSTİM’deki firmanız için sitede neler kuruyoruz?',
    giris: 'Üretici sitesinde iş dört kalemde toplanıyor.',
    liste: [
      { ad: 'Teknik ürün sayfaları', aciklama: 'Her ürün grubuna malzeme, ölçü, kapasite ve kullanım alanını gösteren bir sayfa açıyoruz. Başlığı, satın almacının Google’a yazdığı adla yazıyoruz.' },
      { ad: 'Katalog ve belge alanı', aciklama: 'Kataloğu, teknik föyleri ve kalite belgelerini tek bir indirme alanında topluyoruz. Dosyadaki bilginin özeti ilgili ürün sayfasında da yer alır.' },
      { ad: 'Teklif formu', aciklama: 'Formu ürün, adet, teslim yeri ve varsa teknik çizim soracak biçimde kuruyor, telefonda deneyip kaydın size ulaştığını görüyoruz.' },
      { ad: 'İkinci dil sürümü', aciklama: 'İhracat yapıyorsanız her dili kendi adresinde kuruyor, arama motoruna hangi sayfanın hangi dilde olduğunu bildiriyoruz. Çeviri hizmeti vermiyoruz; metni sizden alıyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'OSTİM’de web sitesi yaptıran firmaların sorduğu sorular',
    giris: 'Sanayi bölgesindeki firmaların site kurarken sorduğu sorular.',
    sorular: [
      {
        soru: 'OSTİM’deki bir üretici firmanın sitesinde hangi sayfalar olmalı?',
        cevap:
          'En az şunlar olmalı: her ürün grubu için bir sayfa, makine parkını ve üretim yeteneklerini gösteren bir sayfa, kalite belgeleri, teklif formu ve iletişim. “Hakkımızda” yazısı tek başına satın almacının sorusunu yanıtlamaz; o kişi hangi malzemeyi, hangi ölçüde ve hangi toleransla işlediğinizi öğrenmek ister. Sayfa listesini ilk görüşmede ürün gruplarınıza bakarak birlikte çıkarıyoruz.',
      },
      {
        soru: 'Sitede ve Google İşletme Profili’nde OSTİM adı nasıl geçmeli?',
        cevap:
          'OSTİM adı adresinizin parçası olarak, “OSTİM OSB, Yenimahalle/Ankara” biçiminde geçmeli. Bölgeyi tanıyan alıcı aramasına OSTİM adını ekleyebildiği için adı ana sayfa başlığında ve iletişim sayfasında da kullanıyoruz. Google İşletme Profili’nde firma adının yanına OSTİM ya da ürün adı eklemiyoruz; profildeki ad tabelanızdaki adla aynı kalır.',
      },
      {
        soru: 'İngilizce ya da Arapça siteyi siz mi çeviriyorsunuz?',
        cevap:
          'Hayır, çeviri hizmeti vermiyoruz. Çeviriyi sizin ekibiniz ya da çalıştığınız çevirmen yapar; biz hangi sayfaların çevrilmesi gerektiğini belirliyor, dil sürümlerini kendi adreslerinde kuruyor ve dil etiketlerini ekliyoruz. Teknik terimleri ürünü bilen birinin kontrol etmesini öneriyoruz.',
      },
      {
        soru: 'Atölyeye gelmeden site yapılır mı, ürün fotoğraflarını kim çeker?',
        cevap:
          'Evet, yapılır; projeyi uzaktan yürütüyor, görüşmeleri telefonla ya da görüntülü yapıyoruz. Fotoğraf ve video çekimi yapmıyoruz. Elinizdeki ürün fotoğraflarını, teknik çizimleri ve katalog görsellerini kullanıyor, eksik kalanların listesini çekimi yapacak kişiye iletmeniz için size veriyoruz.',
      },
      {
        soru: 'Alan adı, site ve katalog dosyaları kimde kalır?',
        cevap:
          'Hepsi firmanızda kalır. Alan adı ve barındırma firmanızın adına kayıtlıdır, yönetim paneli erişimi yayın günü size geçer. Paneli, ürün eklemeyi ve katalog dosyasını değiştirmeyi kendi ekibinizin yapabileceği biçimde kuruyoruz.',
      },
    ],
  },
};

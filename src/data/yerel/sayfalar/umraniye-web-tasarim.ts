/**
 * Ümraniye web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "ümraniye web tasarım" (260). Yan niyet: "ümraniye reklam ajansı" (30). Pano, İstanbul geneli ve komşu ilçe
 * ifadeleriyle tamamlandı: "istanbul web tasarım" (1.000), "web tasarım istanbul" (320), "ataşehir web tasarım" (260),
 * "üsküdar web tasarım" (90). Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Ümraniye’de ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Dudullu Organize Sanayi Bölgesi, İMES Sanayi Sitesi, MODOKO mobilyacılar
 * çarşısı, Alemdağ Caddesi çarşısı, Şerifali’deki ofis binaları. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'umraniye-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Ümraniye',
  yerDe: 'Ümraniye’de',
  hizmet: 'web',
  baslik: 'Ümraniye web tasarım',
  metaBaslik: 'Ümraniye Web Tasarım: İstanbul’da Web Sitesi',
  metaAciklama:
    'Ümraniye’deki üretici, mağaza ve ofisler için web tasarım: ürün sayfaları, teklif formu ve telefonda rahat okunan site. Projeyi uzaktan, sizinle görüşerek yürütüyoruz.',
  ozet: 'Dudullu ve İMES’teki üreticiden Alemdağ Caddesi’ndeki mağazaya, Ümraniye’de ürününü arayana doğru sayfayı gösteren web siteleri.',
  tanim: [
    'Ümraniye’deki işletmeler için web tasarım, sanayi sitesindeki üreticinin, caddedeki mağazanın ya da plazadaki firmanın işini arayan kişiye ilk ekranda gösteren ve onu teklif formuna, telefona ya da WhatsApp’a ulaştıran web sitesinin planlanıp kurulması işidir.',
    'Ümraniye’de aynı ilçenin içinde üç ayrı satış biçimi var. Dudullu Organize Sanayi Bölgesi ile İMES Sanayi Sitesi’ndeki üreticiler başka firmaların satın almacısına satıyor. Alemdağ Caddesi’ndeki mağazalar ve MODOKO’daki mobilyacılar kapıdan giren müşteriye, Şerifali’deki ofislerde çalışan hizmet firmaları ise kurumsal alıcıya ulaşmaya çalışıyor. Sitenizi kime sattığınıza göre planlıyor, projeyi telefon ve görüntülü görüşmeyle uzaktan yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Ümraniye’de web tasarım arayanlar ne yazıyor?',
    giris: 'İlçe adıyla yapılan aramalar İstanbul geneli aramaların yanında küçük kalıyor, ama Ümraniye için ölçülebilir bir sayı var.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'ümraniye web tasarım', hacim: 260 },
      { ifade: 'ataşehir web tasarım', hacim: 260 },
      { ifade: 'üsküdar web tasarım', hacim: 90 },
      { ifade: 'ümraniye reklam ajansı', hacim: 30 },
    ],
    yorum: [
      '“Ümraniye web tasarım” ayda yaklaşık 260 kez yazılıyor. Komşu Ataşehir için de aynı değer ölçüldü; Üsküdar için ölçülen değer 90. Aynı işi isteyenlerin daha büyük bölümü ilçe adı vermeden “istanbul web tasarım” diye arıyor. “Ümraniye reklam ajansı” ayda 30 kadar yazılıyor ve bu aramayı tabela ya da baskı işi arayanlar da yapıyor; bizim reklam tarafındaki işimiz Google ile Instagram ve Facebook reklamlarının yönetimidir.',
      'Sayılar Türkiye’nin tamamındaki aramaları kapsıyor; kaçının Ümraniye’den yapıldığını bu ölçüm göstermiyor. Bundan çıkardığımız karar, ilçe adına tek başına yaslanmamak. Dudullu’daki kalıpçı “plastik enjeksiyon kalıbı”, MODOKO’daki mağaza “köşe koltuk takımı” diye aranıyor; proje başında bu tür ürün aramalarını sizin işiniz için ayrıca çıkarıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Ümraniye’de site kuran işletmenin üç tipik durumu',
    giris: 'Sanayi sitesindeki atölye, mobilya mağazası ve plazadaki ofis aynı ilçede duruyor, ama siteden bekledikleri iş farklı.',
    kartlar: [
      {
        soru: 'Ürünlerimiz katalogda, Google’da neden çıkmıyoruz?',
        ornek:
          'İMES’te bağlantı elemanı üreten bir firmanın bütün ürünleri sitedeki tek bir PDF katalogda duruyor. Ölçüyü ve standardı yazarak arayan satın almacının karşısına bu katalog çıkmıyor, çıksa da telefonda okunmuyor.',
        care: 'Her ürün grubuna ölçü tablosunu ve teklif formunu taşıyan ayrı bir sayfa açıyoruz.',
        cizim: 'kitaplik',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Müşteri mağazaya gelmeden sitede ne görmek ister?',
        ornek:
          'MODOKO’da yemek odası takımı satan bir mağazanın sitesinde yıllar önce çekilmiş birkaç fotoğraf var. Hafta sonu mobilya bakmaya çıkacak çift, teşhirde ne olduğunu göremeyince gezeceği mağazaların listesine burayı yazmıyor.',
        care: 'Teşhirdeki ürünleri oda oda gösteren sayfalar kuruyor, yol tarifini ve çalışma saatini her sayfaya koyuyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Dekorasyon ve mobilya', url: '/sektorler/ic-mimarlik-ve-dekorasyon/' },
      },
      {
        soru: 'Ofisi Ümraniye’ye taşıdık, sitede ne değişmeli?',
        ornek:
          'Şerifali’de yeni bir ofis binasına taşınan iş güvenliği firmasının sitesinde ve haritadaki kaydında eski adres duruyor. Firmayı adıyla arayan müşteri iki ayrı adres görüyor, toplantıya hangisine gideceğini sormak için telefon açıyor.',
        care: 'Yeni adresi sitenin her sayfasında ve Google İşletme Profili’nde güncelliyor, eski adresi gösteren sayfaları tek tek buluyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'Google İşletme Profili', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  isler: {
    baslik: 'Ümraniye’deki işletmeniz için neler yapıyoruz?',
    giris: 'Üretici için de mağaza için de ofis için de aynı dört iş yapılır; değişen, sayfaların içeriğidir.',
    liste: [
      { ad: 'Ürün ve hizmet sayfaları', aciklama: 'Dudullu’daki üreticide ürün gruplarına, Alemdağ Caddesi’ndeki mağazada ürün çeşitlerine, ofiste verilen hizmetlere ayrı sayfa açıyoruz.' },
      { ad: 'Telefonda okunan tasarım', aciklama: 'Atölyede ya da mağaza gezerken sitenizi açan kişinin elinde telefon vardır. Ölçü tablolarını ve ürün fotoğraflarını önce o ekranda okunacak biçimde yerleştiriyoruz.' },
      { ad: 'Teklif formu ve WhatsApp', aciklama: 'Formda yalnız teklif için gereken bilgiyi soruyor, gönderilen talebin size ulaştığını yayından önce bir deneme kaydıyla görüyoruz.' },
      { ad: 'İlçe adı ve harita kaydı', aciklama: 'Ümraniye, Dudullu ya da Şerifali adını yalnız gerçekten bulunduğunuz yer için başlığa yazıyor, Google İşletme Profili’ndeki adresi siteyle eşliyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Ümraniye’de web tasarım hakkında sık sorulan sorular',
    giris: 'Ümraniye’deki bir üreticinin, mağazanın ya da ofisin site yaptırmadan önce sorduğu sorular.',
    sorular: [
      {
        soru: 'Ümraniye’de web tasarım firması seçerken neye bakmalı?',
        cevap:
          'Firmanın yaptığı siteler içinde sizin işinize benzeyen bir örneğe bakın: üreticiyseniz ürün sayfaları olan, mağazaysanız ürün fotoğrafı ağırlıklı bir site. O siteyi telefonunuzda açıp bir ürünü bulmayı ve form göndermeyi deneyin. İlk görüşmede müşterinizin kim olduğunu sormayan firma, Dudullu’daki atölyeye de Alemdağ Caddesi’ndeki mağazaya da aynı şablonu kurar.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'Dudullu OSB ya da İMES’teki bir üretici için site kaç dilde olmalı?',
        cevap:
          'Yalnız iç pazara satıyorsanız Türkçe yeter; yurt dışına satıyorsanız alıcınızın dilinde, çoğu zaman İngilizce sayfalar gerekir. Hangi ürün sayfalarının ikinci dile alınacağına ihracatını yaptığınız kalemlere bakarak birlikte karar veriyoruz. İkinci dildeki sayfalarda ürün adını, alıcının aramada kullandığı teknik terimle yazıyoruz.',
      },
      {
        soru: 'Sayfa başlığına “Ümraniye” yazmak Google’da öne çıkarır mı?',
        cevap:
          'Hayır, ilçe adı tek başına öne çıkarmaz. İlçe adı, müşteriniz aramasına ilçeyi eklediğinde işe yarar: mobilya mağazası, servis ya da kurs gibi kapısına müşteri gelen işlerde başlıkta ve Google İşletme Profili’nde aynı biçimde yer almalıdır. Türkiye’nin her yerine satan bir üreticinin başlığında ise ilçe yerine ürünün adı durmalıdır.',
      },
      {
        soru: 'Ümraniye’ye gelmeden web sitesi işi yürür mü?',
        cevap:
          'Evet, yürür; biz bütün projeleri uzaktan yürütüyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, taslakları bağlantı olarak gönderiyoruz. Tesisin ya da mağazanın fotoğraflarını siz iletiyorsunuz; fotoğraf çekimi yapmıyoruz, hangi sayfaya hangi karenin gerektiğini listeliyoruz.',
      },
      {
        soru: 'Atölyemizin hiç web sitesi yok, nereden başlanır?',
        cevap:
          'En çok teklif aldığınız ürün gruplarından başlanır; her biri bir sayfa olur. Elinizdeki katalog, teknik resimler ve tesis fotoğrafları ilk içeriği verir, eksik kalanı görüşmede birlikte listeliyoruz. Alan adı ve barındırma hesabı firmanızın adına açılır.',
        bag: { etiket: 'Web sitesi nasıl kurulur?', url: '/blog/web-sitesi-nasil-kurulur/' },
      },
    ],
  },
};

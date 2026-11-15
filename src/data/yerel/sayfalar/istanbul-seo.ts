/**
 * İstanbul SEO (şehir sayfası; yerel SEO ağırlıklı).
 * Ana niyet: "istanbul seo ajansı" (2.900), "istanbul seo uzmanı" (320), "istanbul seo" (210), "istanbul seo hizmeti" (170).
 * İlçe adıyla SEO araması yok denecek kadar az: "esenyurt seo" (20), "pendik seo" (10); ölçülen diğer ilçe ifadeleri için
 * araç değer döndürmedi. Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * Sayfanın ana fikri: SEO ajansı şehir adıyla aranıyor, ama işletmenin müşterisi hizmeti ilçe adıyla arıyor.
 * Sıralama sözü verilmez. Yorum toplama vaadi yok; yalnız yorum isteme düzeninden söz edilir. İstanbul’da ofis olduğu yazılmaz.
 * Yerel bilgiler herkesçe bilinen olgulardır: Kapalıçarşı’nın kuyumcuları, Tuzla’nın tersaneleri, Çengelköy’ün kahvaltı
 * mekânları, Nişantaşı ve Maslak’ın ofisleri, şehrin iki yakaya bölünmüş olması. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'istanbul-seo',
  sehir: 'istanbul',
  yerDe: 'İstanbul’da',
  hizmet: 'seo',
  baslik: 'İstanbul SEO',
  metaBaslik: 'İstanbul SEO Ajansı ve SEO Danışmanlığı',
  metaAciklama:
    'İstanbul’daki işletmeler için SEO: ilçe adıyla yapılan aramalar, Google İşletme Profili, harita sonuçları ve hizmet sayfaları. Uzaktan çalışıyor, sıra sözü vermiyoruz.',
  ozet: 'İstanbul’da müşterinin ilçe adıyla yaptığı aramalarda ve harita sonuçlarında görünmek için site, işletme profili ve içerik çalışması.',
  tanim: [
    'İstanbul’daki işletmeler için SEO, müşterinin hizmeti ilçe ya da semt adıyla aradığı Google sonuçlarında, harita paketinde ve yapay zekâ yanıtlarında işletmenin reklam vermeden görünmesi için sitenin, Google İşletme Profili’nin ve içeriğin düzenlenmesi işidir.',
    'İstanbul’da “diş kliniği” ya da “oto servis” yazan kişi çoğu zaman aramanın sonuna Beşiktaş, Bakırköy ya da Üsküdar gibi bir ilçe adı ekliyor, çünkü karşı yakadaki işletmeye gitmeyecek. Bütün şehirde görünmeye çalışan site çok; kendi ilçesinin aramasına cevap veren sayfa ise çoğu sitede eksik. Biz önce sitenizi ve profilinizi inceliyor, hangi ilçe aramalarında görünmeniz gerektiğini çıkarıp işi o listeye göre sıralıyoruz.',
    'İncelemeyi, düzeltmeleri ve görüşmeleri uzaktan yapıyoruz: toplantılar telefonla ya da görüntülü, bulgular ve yapılan değişiklikler yazılı olarak size ulaşıyor.',
  ],
  cagri: 'SEO için görüşelim',

  aramalar: {
    baslik: 'İstanbul’da SEO için ne aranıyor?',
    giris: 'SEO hizmeti arayan işletme sahibi şehrin adını, onun müşterisi ise ilçenin adını yazıyor.',
    liste: [
      { ifade: 'istanbul seo ajansı', hacim: 2900 },
      { ifade: 'istanbul seo uzmanı', hacim: 320 },
      { ifade: 'istanbul seo', hacim: 210 },
      { ifade: 'istanbul seo hizmeti', hacim: 170 },
      { ifade: 'esenyurt seo', hacim: 20 },
      { ifade: 'pendik seo', hacim: 10 },
    ],
    yorum: [
      '“İstanbul seo ajansı” ayda yaklaşık 2.900 arama gösteriyor; “istanbul seo uzmanı” 320, yalın “istanbul seo” 210. Aramanın büyük bölümü “ajans” sözüyle yapılıyor. Bunu, işletme sahibinin incelemeden içeriğe kadar işi üstlenecek birini aradığı biçiminde okuyoruz. “Uzman” yazanlar çoğunlukla danışmanlık, yani kendi ekibinin uygulayacağı bir plan istiyor. İki düzende de çalışıyoruz.',
      'İlçe adıyla SEO araması ise yok denecek kadar az: “esenyurt seo” 20, “pendik seo” 10 arama gösteriyor; ölçtüğümüz öteki ilçe ifadeleri için araç değer döndürmedi. Sayılar Türkiye genelini kapsar, arayanın konumunu içermez. Buradan çıkardığımız sonuç: SEO ajansı şehir adıyla aranıyor, ama o ajansın uğraşacağı aramalar müşterinizin ilçe adıyla yaptığı aramalardır. Çalışmanın başında hizmetleriniz için ilçe ilçe arama listesi çıkarıyor, sayfa ve profil kararlarını bu listeye bağlıyoruz.',
    ],
  },

  yerel: {
    baslik: 'İstanbul’da aramada görünmek isteyen işletmelerin altı sorusu',
    giris: 'Sorular farklı semtlerden ve farklı işlerden geliyor; cevap çoğu zaman ilçe ölçeğinde çıkıyor. Örnek işletmeler temsilidir.',
    kartlar: [
      {
        soru: '“İstanbul” aramasında mı, ilçe aramasında mı görünmeliyiz?',
        ornek:
          'Bakırköy’de bir diş kliniği yıllardır “istanbul diş kliniği” aramasında yükselmeye uğraşıyor. Kliniğe gelen hastaların neredeyse tamamı ise Bakırköy ve komşu ilçelerden; onlar aramaya ilçenin adını yazıyor.',
        care: 'Hastanın yazdığı ilçe aramalarını çıkarıyor, hizmet sayfalarını meslek kurallarına uygun biçimde bu aramalara göre düzenliyoruz.',
        cizim: 'hedef',
        bag: { etiket: 'Sağlık ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Yan dükkân haritada çıkıyor, biz neden çıkmıyoruz?',
        ornek:
          'Kapalıçarşı’da bir kuyumcunun Google profili yıllar önce açılmış ve öyle kalmış: kategori genel, saatler boş, fotoğraflar eski. Çarşıya gelmeden önce haritaya bakan kişi, profili dolu olan komşu dükkânı görüyor.',
        care: 'Profilin kategorisini, saatlerini, ürünlerini ve fotoğraflarını tamamlıyor, bilgiyi siteyle birebir eşitliyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'Profil nasıl açılır?', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Ürünümüzü arayan alıcı bizi neden bulamıyor?',
        ornek:
          'Tuzla’da tersanelere pompa ve vana tedarik eden bir firma, sitesinde ürünleri kendi stok kodlarıyla sıralamış. Satın almacı ise ürünü sektörde bilinen adıyla arıyor; bu ad sitedeki hiçbir sayfanın başlığında geçmiyor.',
        care: 'Ürün sayfalarını alıcının kullandığı adlarla başlıklandırıyor, teknik bilgiyi sayfaya okunabilir metin olarak ekliyoruz.',
        cizim: 'alet',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'Her ilçeye ayrı sayfa açsak daha çok görünür müyüz?',
        ornek:
          'Esenyurt’ta bir su arıtma servisi, sitesine İstanbul’un bütün ilçeleri için yalnız ilçe adı değişen sayfalar eklemiş. Sayfaların çoğu Google’ın dizinine girmemiş; servis verilen komşu ilçelerde de görünürlük artmamış.',
        care: 'Yalnız gerçekten servis verdiğiniz ilçeler için, o ilçeye özgü bilgi taşıyan az sayıda sayfa kuruyoruz.',
        cizim: 'yapboz',
        bag: { etiket: 'SEO analizi rehberi', url: '/blog/seo-analizi-nasil-yapilir/' },
      },
      {
        soru: 'Rakibin yorumu çok, biz haritada geride mi kalırız?',
        ornek:
          'Çengelköy’de bir kahvaltı salonu hafta sonları dolup taşıyor, ama profilinde son aylarda yazılmış yorum yok. Aynı sahildeki başka bir işletmenin profili düzenli yorum alıyor ve haritada daha üstte görünüyor.',
        care: 'Yorum isteme düzenini birlikte kuruyor, gelen yorumlara verilecek yanıtları yazılı hâle getiriyoruz.',
        cizim: 'balon',
        bag: { etiket: 'Google yorumları rehberi', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'Yapay zekâ işletmemizin adresini neden yanlış söylüyor?',
        ornek:
          'Nişantaşı’ndan Maslak’a taşınan bir iç mimarlık ofisinin eski adresi rehber sitelerinde ve eski tanıtım yazılarında duruyor. ChatGPT’ye ofisi soran kişi eski adresi, Google’da arayan kişi yenisini görüyor.',
        care: 'Ad, adres ve telefonu sitede, profilde ve rehber kayıtlarında aynı hâle getiriyor, bu bilgiyi açıkça yazan bir sayfa kuruyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'GEO nedir?', url: '/blog/geo-nedir/' },
      },
    ],
  },

  isler: {
    baslik: 'İstanbul’da SEO çalışmasında hangi işleri yapıyoruz?',
    giris: 'Sıra bulguya göre değişir; aşağıdaki altı iş ise hemen her çalışmada yer alır.',
    liste: [
      { ad: 'Site ve arama incelemesi', aciklama: 'Search Console verinizi, dizine girmeyen sayfaları ve aynı aramalarda üstte duran rakip sayfaları okuyoruz. İlk bulgu listesi buradan çıkıyor.' },
      { ad: 'İlçe ve hizmet aramaları', aciklama: 'Her hizmetiniz için hangi ilçe ve semt adlarıyla arama yapıldığını çıkarıyor, her aramaya sitede tek bir sayfa belirliyoruz.' },
      { ad: 'İşletme profili ve harita sonuçları', aciklama: 'Google İşletme Profili’nin kategorisini, hizmet bölgesini ve saatlerini düzenliyor; ad, adres ve telefonu sitedekiyle aynı yazıyoruz.' },
      { ad: 'Hizmet ve ilçe sayfaları', aciklama: 'Hizmet sayfalarını müşterinin sorusuna cevap verecek biçimde yeniden yazıyoruz. İlçe sayfasını yalnız orada gerçekten hizmet veriyorsanız açıyoruz.' },
      { ad: 'Teknik düzeltme ve düzenli kontrol', aciklama: 'Dizine kapalı sayfaları ve kırık yönlendirmeleri düzeltiyor; sonrasında arama verisini düzenli okuyup görünmeyen sayfayı yeniden ele alıyoruz.' },
      { ad: 'Yapay zekâ yanıtlarında işletme bilgisi', aciklama: 'ChatGPT ve Google’ın yapay zekâ yanıtlarının işletmeniz hakkında ne söylediğine bakıyor, yanlış ya da eksik kalan bilgiyi kaynağında düzeltiyoruz.' },
    ],
    bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
  },

  sss: {
    baslik: 'İstanbul’da SEO: sık sorulan sorular',
    giris: 'Ajans seçimi, ilçe aramaları, harita sonuçları, süre ve hesapların sahipliği üzerine sorular.',
    sorular: [
      {
        soru: 'İstanbul’da SEO ajansı nasıl seçilir?',
        cevap:
          'SEO ajansını, ilk görüşmede sitenizle ilgili ne bulduğuna ve bunu size nasıl gösterdiğine bakarak seçin. “İlk sayfa” sözü veren ajanstan uzak durun; sıralamayı Google belirler. Ajansa hangi ilçe aramalarını hedeflediğini, hangi sayfaları değiştireceğini ve yapılan işi sizin nasıl denetleyeceğinizi sorun.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'İstanbul’da SEO uzmanı ile SEO ajansı arasındaki fark ne?',
        cevap:
          'Fark, işi kimin uyguladığındadır: uzman yol gösterir ve denetler, ajans incelemeden içeriğe kadar işi kendisi yapar. Sitenize bakan bir geliştiriciniz ya da içerik yazan bir ekibiniz varsa danışmanlık çoğu zaman yeter. Biz iki düzende de çalışıyoruz; hangisinin uygun olduğunu ilk görüşmede birlikte belirliyoruz.',
      },
      {
        soru: 'İstanbul’da yüz yüze görüşmeden SEO çalışması yapılır mı?',
        cevap:
          'Evet; SEO çalışmasının tamamı sitenize ve Google hesaplarınıza uzaktan erişerek yapılır, biz de böyle çalışıyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, bulguları ve yapılan değişiklikleri yazılı olarak gönderiyoruz.',
      },
      {
        soru: '“İstanbul” aramasında mı, kendi ilçemde mi görünmeye çalışmalıyım?',
        cevap:
          'Müşteriniz size kendi ilçenizden ya da komşu ilçelerden geliyorsa önce ilçe aramalarında görünmeye çalışmalısınız. “İstanbul” geçen aramalarda bütün şehrin siteleriyle ve rehber siteleriyle aynı sayfayı paylaşırsınız; ilçe aramasında rakip azalır ve arayan kişi size gelebilecek mesafededir. Şehrin tamamına satış yapan üretici, toptancı ve çevrim içi satış işletmelerinde sıra tersine döner.',
      },
      {
        soru: 'Google Haritalar’da üstte görünmek neye bağlı?',
        cevap:
          'Google harita sonuçlarını üç şeye bakarak sıralar: arayan kişiye uzaklık, işletmenin aramayla ilgisi ve bilinirliği. Uzaklığı değiştiremezsiniz. İlgiyi profilin kategorisi, hizmetleri ve sitenizin içeriği; bilinirliği yorumlar ve işletmenizden söz eden kaynaklar belirler. Bu yüzden profil ile siteyi birlikte ele alıyor, belirli bir sıra için söz vermiyoruz.',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'İstanbul’da SEO ne zaman sonuç verir?',
        cevap:
          'Tarih vermek doğru olmaz; süre sitenizin bugünkü durumuna ve hedeflediğiniz aramadaki rekabete bağlıdır. Dizine girme ve teknik düzeltmelerin sonucu önce görülür, ilçe aramalarındaki görünürlük ondan sonra değişir. Bütün şehri kapsayan, çok sayıda sitenin hedeflediği aramalarda süre daha uzundur.',
      },
      {
        soru: 'Site ve Google hesapları kimin adına olur?',
        cevap:
          'Alan adı, site, Search Console ve Google İşletme Profili sizin hesabınızda durur; biz kullanıcı olarak eklenir, işimiz bitince çıkarılırız. Profiliniz eski bir çalışanın ya da önceki ajansın hesabındaysa sahipliğin size geçmesi için gereken adımları ilk görüşmede konuşuyoruz.',
      },
      {
        soru: 'SEO’da sıralama garantisi veriyor musunuz?',
        cevap:
          'Hayır; hiçbir arama için sıra, ziyaret ya da talep sayısı sözü vermiyoruz. Sonucu Google’ın sıralaması ve rakiplerinizin yaptığı iş de belirler. Taahhüt ettiğimiz şey sitenizi ve aramalarınızı ayrıntılı incelemek, yaptığımız her değişikliği gerekçesiyle göstermek ve çalışmayı düzenli olarak sürdürmektir.',
      },
    ],
  },
};

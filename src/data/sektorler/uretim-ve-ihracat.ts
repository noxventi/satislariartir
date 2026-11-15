/**
 * Üretim ve ihracat sektörü.
 * Ana niyet: "üretici firmalar için dijital pazarlama", "b2b pazarlama", "endüstriyel pazarlama", "ihracat müşteri bulma".
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026).
 * Referanslar: Rotech Defense (gabionmaterials.com), Estika, Bodrum Olive House (yalnız web tasarım).
 * Vaat edilmeyen işler: LinkedIn reklamı ve çeviri hizmeti. Devlet destekleri hakkında ayrıntı ya da rakam yazılmaz.
 * Teknik değerler (standart, kapasite, minimum sipariş, teslim süresi) uydurulmaz; sayfada yer alması gerektiği anlatılır.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 4,
  kimlik: 'uretim-ve-ihracat',
  ad: 'Üretim ve ihracat',
  kimler: 'Üreticiler, ihracatçılar, sanayi tedarikçileri, B2B satış yapan firmalar',
  ozet: 'Az sayıdaki ciddi alıcıya teknik bilgiyi kendi dilinde veren, teklif isteğini doğru sorularla toplayan site ve reklam düzeni.',
  baslik: 'Üretici ve ihracatçı firmalar için dijital pazarlama',
  metaBaslik: 'Üretici ve İhracatçı için Dijital Pazarlama',
  metaAciklama:
    'Üretici, ihracatçı ve sanayi tedarikçileri için Google Ads, SEO, yapay zekâ görünürlüğü ve web sitesi: teknik bilgi arayan alıcıdan teklif isteği alan kurulum.',
  tanim: [
    'Üretici ve ihracatçı firmalar için dijital pazarlama, tedarikçi arayan satın almacının ya da yurt dışındaki alıcının araştırma yaptığı anda karşısına çıkma ve ondan teklif isteği alma işidir.',
    'Bu sektörde alıcı azdır, tek bir talebin değeri büyüktür. Kararı satın alma, teknik ekip ve yönetim birlikte, uzun sürede verir; her biri sitede başka bir bilgiye bakar. Ürün sayfalarını, reklamı ve teklif formunu bu bilgilere göre kuruyoruz.',
    'Üreticiler, ihracatçılar, sanayi tedarikçileri ve işletmeden işletmeye (B2B) satış yapan firmalarla çalışıyoruz.',
  ],
  gorselAlt:
    'Kâğıttan testere dişli çatılı bir fabrika: kapısında koli taşıyan forklift, yanında üst üste konteynerler ve rıhtımda bir yük gemisi; kırmızı kalem çizgisi fabrikanın kapısından çıkıp iki işçinin ve çantalı bir alıcının yanından arka plandaki küreye uzanıyor',
  cagri: 'Firmam için görüşelim',
  kanal: 'belirsiz',

  aramalar: {
    baslik: 'Üretim ve ihracatta Google’da ne aranıyor?',
    giris: 'Bu aramaların bir kısmını tedarikçi arayan alıcı, bir kısmını ihracata yol arayan üretici yazar.',
    liste: [
      { ifade: 'naturel sızma zeytinyağı', hacim: 3600 },
      { ifade: 'toptan satış', hacim: 1600 },
      { ifade: 'fason üretim', hacim: 1000 },
      { ifade: 'e-ihracat', hacim: 720 },
      { ifade: 'ihracat nasıl yapılır', hacim: 320 },
      { ifade: 'üretici firmalar', hacim: 260 },
      { ifade: 'endüstriyel pazarlama', hacim: 110 },
      { ifade: 'tedarikçi bulma', hacim: 90 },
      { ifade: 'ihracat müşteri bulma', hacim: 70 },
      { ifade: 'b2b pazarlama', hacim: 50 },
    ],
    yorum: [
      'Sayılar tüketici sektörlerinin yanında küçük kalır ve bu normaldir: bir fabrikanın alıcısı binlerce kişi olmaz. “Fason üretim”, “toptan satış” ya da “üretici firmalar” yazan kişinin elinde çoğu zaman karşılanacak bir ihtiyaç vardır. Bunlar az ama satın alma niyeti belirgin aramalardır.',
      'Listenin en büyük araması “naturel sızma zeytinyağı” ise çoğunlukla sofrası için şişe alacak kişiden gelir; toptan alıcı aynı ürün adının yanına “toptan”, “üretici” ya da bir ülke adı ekler. Bütçeyi ürün adına yaymıyor, alıcının eklediği bu sözleri ve hedef ülkenin dilindeki karşılıklarını çıkarıp reklamı ve sayfayı onlara göre kuruyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'Üretici ve ihracatçı firmalardan en sık duyduğumuz sorular',
    giris: 'Müşterisini fuardan bulan firma da, yıllardır reklam veren firma da aynı altı noktada takılıyor. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'İhracat için müşteri nasıl bulunur?',
        ornek:
          'Bir makine parçası üreticisi yurt dışı müşterisini yıllardır fuardan ve aracıdan buluyor. Aynı parçayı Almanya’daki satın almacı kendi dilinde Google’a yazıyor; karşısına çıkan sayfaların hiçbiri bu üreticinin değil.',
        care: 'Ürününüzün hedef ülkede hangi sözlerle arandığını çıkarıp arama reklamını o ülkeye ve o dile göre kuruyoruz.',
        cizim: 'tabela',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Siteden gelen teklif istekleri neden işe dönmüyor?',
        ornek:
          'Bir ambalaj üreticisinin formunda yalnız ad, e-posta ve mesaj alanı var. Gelen isteklerin çoğu tek satırlık “fiyat alabilir miyim” sorusu; miktarı ve teslim yerini öğrenmek için günlerce yazışılıyor.',
        care: 'Formda ürünü, miktarı, teslim ülkesini ve firma adını soruyor; teklif hazırlamaya yetecek bilgiyi ilk istekte topluyoruz.',
        cizim: 'zarf',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Alıcı siteye giriyor, neden teklif istemeden çıkıyor?',
        ornek:
          'Bir döküm firmasının sitesinde ürün fotoğrafları ve “kaliteli üretim” yazısı var. Satın almacı ise standardı, kapasiteyi, minimum siparişi ve teslim süresini arıyor; bulamayınca listesindeki öbür tedarikçiye geçiyor.',
        care: 'Alıcının sorduğu teknik bilgileri sizden alıp her ürünün sayfasına, karşılaştırma yapılabilecek biçimde yerleştiriyoruz.',
        cizim: 'kitaplik',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'ChatGPT’ye sorulunca firmam neden çıkmıyor?',
        ornek:
          'Yurt dışındaki bir satın almacı ChatGPT’ye “Türkiye’de paslanmaz bağlantı elemanı üreticileri” diye soruyor. Yıllardır bu işi yapan firmanın adı yanıtta yok; sitesinde ne ürettiği açık bir cümleyle yazmıyor.',
        care: 'Alıcının sorabileceği soruları birkaç araçta soruyor, ürününüzü ve sevk ettiğiniz ülkeleri açıkça yazan sayfaları hazırlıyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        soru: 'Google reklamından neden hep perakende müşteri arıyor?',
        ornek:
          'Bir havlu üreticisi “havlu” kelimesine reklam veriyor. Arayanların çoğu tek bir havlunun fiyatını soruyor; bütçe, otellere toptan alım yapan satın almacıya ulaşmadan bitiyor.',
        care: 'Arama terimlerini okuyup perakende aramalarını ayırıyor, bütçeyi “toptan”, “üretici” ve “fason” geçen aramalara topluyoruz.',
        cizim: 'kitle',
        bag: { etiket: 'Tıklama var, telefon yok', url: '/blog/google-ads-tiklama-var-telefon-yok/' },
      },
      {
        soru: 'Fuar ve bayi ağı varken web sitesi ne işe yarar?',
        ornek:
          'Fuarda kartvizit alan alıcı ofisine dönünce firmanın adını Google’a yazıyor. Karşısına yıllar önce güncellenmiş bir site ve açılmayan bir katalog bağlantısı çıkıyor.',
        care: 'Fuarda anlattığınız ürünleri sitede aynı adlarla ve aynı teknik değerlerle gösteriyor, dönüp bakan alıcıyı teklif formuna taşıyoruz.',
        cizim: 'dukkan',
        bag: { etiket: 'İlk adımı planlayalım', url: '#baslangic' },
      },
    ],
  },

  kanallar: {
    baslik: 'Üretici ve ihracatçı firmalar için hangi kanal ne işe yarar?',
    giris:
      'Alıcı tedarikçiyi çoğunlukla arayarak ve sorarak bulur; aşağıdaki dört kanal bu arayışın farklı bir yerinde durur. Instagram bu sektörde ikincil kalır, üretimi ve sevkiyatı gösteren bir vitrin işi görür.',
    liste: [
      {
        tur: 'google-ads',
        baslik: 'Google Ads: hedef ülkede ürünü arayan alıcı',
        metin: 'Satın almacı ürünü kendi ülkesinden, kendi dilinde arar. Arama reklamını o ülkeye ve o dile göre kuruyor, bütçeyi toptan alım niyeti taşıyan aramalara topluyoruz.',
        maddeler: ['Her hedef ülke ve dil için ayrı kampanya', 'Perakende ve iş ilanı aramaları negatif listede', 'Reklamın açtığı yer: ürün sayfası ve teklif formu'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'seo',
        baslik: 'SEO: ürün sayfaları ve çok dilli yapı',
        metin: 'Alıcı ürünü adıyla, standardıyla ve kullanım alanıyla arar. Her ürüne bu bilgileri taşıyan bir sayfa, her dile de arama motorunun doğru tanıdığı bir adres gerekir.',
        maddeler: ['Ürün ve kullanım alanı sayfaları', 'Dil sürümleri için ayrı adres ve dil etiketi', 'Standart, kapasite ve teslim bilgisinin yeri'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'geo',
        baslik: 'Yapay zekâ görünürlüğü: tedarikçi sorusu',
        metin: 'Yurt dışındaki alıcı ChatGPT gibi araçlara “bu ürünü kim üretiyor” diye sorar. Doğru bilgiyle anılmak için ne ürettiğinizi ve nereye sevk ettiğinizi açıkça yazan sayfalar gerekir.',
        maddeler: ['Alıcının sorabileceği soruların listesi', 'Yanıtların dayandığı kaynak sayfalar', 'Site dışındaki firma bilgisinin tutarlılığı'],
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi: ürün sayfasından teklif isteğine',
        metin: 'Fuarda ya da bayide adınızı duyan alıcı dönüp sitenize bakar. Ürünün teknik bilgisini orada bulur, teklif formunda doğru soruları yanıtlar.',
        maddeler: ['Teknik değerleri kolay okunan ürün sayfaları', 'Ürün, miktar ve teslim ülkesini soran form', 'Katalog ve belgeler için indirme alanı'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'Üretici ve ihracatçı firmalarla nasıl çalışıyoruz?',
    giris: 'Önce ürününüzü, alıcınızı ve teklif isteğinin bugün size hangi yoldan geldiğini inceliyoruz. Kurulum ve düzenli optimizasyon bu bulguların üstüne gelir.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Ürün, alıcı ve hedef ülkeler', aciklama: 'Hangi ürünü kime sattığınızı, alıcının teklif istemeden önce neyi sorduğunu ve hedef ülkelerde ürünün nasıl arandığını çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'Ülke, dil ve sayfa planı', aciklama: 'Hangi ülkeye hangi dilde, hangi ürün sayfasıyla ve hangi kanalla gidileceğini öncelik sırasına koyuyoruz.' },
      { ad: 'Kurulum', ozet: 'Ürün sayfası, form, kampanya', aciklama: 'Ürün sayfalarını, teklif formunu ve kampanyaları kuruyor; formu yayından önce deneme isteğiyle sınıyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Gelen isteklere göre düzeltme', aciklama: 'Gelen teklif isteklerini satış ekibinizle birlikte okuyor; perakende aramaları kapatıp ciddi alıcı getiren aramaya ve ülkeye ağırlık veriyoruz.' },
      { ad: 'Hedef', ozet: 'Teklif ve sipariş', aciklama: 'Ziyaret ve tıklama sayısına takılmıyoruz; teklif verdiğiniz ve siparişe dönen istekleri sayıyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'Üretim ve ihracatta çalıştığımız markalar',
    giris: 'Üçü de yayında olan, bugün açıp inceleyebileceğiniz siteler.',
    liste: [
      {
        kimlik: 'rotech-defense',
        not: 'gabionmaterials.com, teknik bir ürünü yurt dışındaki alıcıya anlatıyor. Site, bu alıcının teklif isteğini nasıl ileteceği sorusu etrafında kuruldu.',
      },
      {
        kimlik: 'estika',
        not: 'Estika’nın sitesi firmanın üretim alanlarını anlatıyor. Sayfa düzeni, bu alanları inceleyen ziyaretçinin talebini nereye bırakacağı sorusuna göre kuruldu.',
      },
      {
        kimlik: 'bodrum-olive-house',
        not: 'İhracatçı bir zeytinyağı markasının çok dilli kurumsal sitesi. Tasarım, farklı dillerdeki alıcıya aynı kurumsal bilginin nasıl sunulacağı sorusuna göre yapıldı; projede yalnız web tasarım yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'Fuarla mı satıyorsunuz, sitenizden teklif mi gelmiyor?',
    giris: 'Birinde işe tek bir ürün sayfasıyla, diğerinde bugün gelen isteklerin incelenmesiyle başlıyoruz.',
    sol: {
      ust: 'Müşteriyi fuardan, bayiden ve tanıdıktan bulduysanız',
      baslik: 'İlk adımı tek ürün ve tek ülkeyle atıyoruz',
      metin: 'Bütün kataloğu bütün dünyaya açmak bütçeyi ve emeği dağıtır. İlk adımda en çok sattığınız ürünü ve en yakından tanıdığınız pazarı seçip yalnız onun için sayfa, form ve reklam hazırlıyoruz.',
      maddeler: [
        { ad: 'Hangi ürün, hangi ülke?', aciklama: 'Satışını ve sevkiyatını bugün en rahat yaptığınız ürün ve pazar. İlk kampanyanın dili ve bölgesi bu seçimle belirlenir.' },
        { ad: 'Alıcı teklif istemeden önce ne sorar?', aciklama: 'Standart, kapasite, minimum sipariş, teslim süresi. Satış ekibinizin en sık yanıtladığı sorular ürün sayfasına yazılır.' },
        { ad: 'İsteği kim, hangi dilde yanıtlayacak?', aciklama: 'Form kime düşecek, yabancı dildeki isteğe kim dönecek? Yanıt düzeni yayından önce belirlenir.' },
      ],
      cagri: 'İlk adımı planlayalım',
      bag: { etiket: 'Landing page nedir?', url: '/blog/landing-page-nedir/' },
      cizim: 'hedef',
    },
    sag: {
      ust: 'Siteniz ve reklamınız var ama teklif isteği gelmiyorsa',
      baslik: 'Önce alıcının nerede vazgeçtiğini buluyoruz',
      metin: 'Yeni kampanya açmadan ya da siteyi yenilemeden önce bugün kimin geldiğine, ne aradığına ve formu neden doldurmadığına bakmamız gerekir.',
      maddeler: [
        { ad: 'Arama terimleri', aciklama: 'Bütçenin perakende fiyatı, iş ilanı ya da ödev araştırması gibi aramalara gidip gitmediğini okuyoruz.' },
        { ad: 'Ürün sayfaları', aciklama: 'Alıcının sorduğu teknik bilgiler sayfada mı, yoksa yalnız katalog dosyasının içinde mi kalmış?' },
        { ad: 'Teklif formu', aciklama: 'Form telefonda ve yurt dışından çalışıyor mu, istek doğru kişiye ulaşıyor mu? Deneme isteğiyle kontrol ediyoruz.' },
        { ad: 'Dil ve ülke', aciklama: 'Reklamın gösterildiği ülkeleri ve sitenin dillerini, sevkiyat yaptığınız pazarlarla karşılaştırıyoruz.' },
      ],
      cagri: 'Sitemize birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Bir arama toptan alıcıdan mı geliyor?',
    metin: [
      'Üretimde aynı ürün adını satın almacı da yazar, evi için tek parça arayan da, iş arayan da. Alıcı sayısı az olduğu için her aramaya ayrı bir karar yazılır.',
      'Tablo bir karton ambalaj üreticisi için hazırlanmış temsili bir örnektir. Sizin hesabınızda aynı tabloyu kendi ürününüzle ve hedef ülkelerinizin diliyle kuruyoruz.',
    ],
    tabloBasligi: 'Karton ambalaj üreticisi için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'corrugated box manufacturer turkey', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Yurt dışından Türkiye’de üretici arıyor. İngilizce kampanyada görünür, İngilizce ürün sayfasını açar.' },
      { ilk: 'toptan karton kutu üreticisi', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Toptan alacak ve üretici arıyor. Reklam, kapasiteyi ve minimum siparişi yazan ürün sayfasını açar.' },
      { ilk: 'karton kutu ölçüleri', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Bilgi topluyor; alıcı da olabilir, öğrenci de. Ölçü tablosuna iner, teklif isteğine dönüp dönmediğine bakılır.' },
      { ilk: 'taşınma kolisi fiyatı', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Evi için birkaç koli arıyor. Toptan kampanyasında reklam gösterilmez.' },
      { ilk: 'ambalaj fabrikası iş ilanları', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'İş arayan kişinin araması. Negatif listeye eklenir.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Üretici ve ihracatçı firmalar için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Teklif isteği, çok dilli site ve yurt dışındaki alıcı hakkında üretici firmalardan en çok duyduklarımız.',
    sorular: [
      {
        soru: 'Üretici ve ihracatçı firmalar için dijital pazarlama nedir?',
        cevap:
          'Üretici ve ihracatçı firmalar için dijital pazarlama; tedarikçi arayan satın almacıya ve yurt dışındaki alıcıya Google aramalarında, yapay zekâ araçlarının yanıtlarında ve web sitesinde ulaşıp ondan teklif isteği alan çalışmaların bütünüdür. Google Ads, SEO, yapay zekâ görünürlüğü ve web sitesini kapsar.',
      },
      {
        soru: 'B2B pazarlama tüketiciye yönelik pazarlamadan nasıl ayrılır?',
        cevap:
          'B2B pazarlamada alıcı sayısı azdır, tek bir siparişin değeri büyüktür ve karar birden çok kişiyle, uzun sürede verilir. Satın almacı, teknik ekip ve yönetici sitede ayrı bilgilere bakar; içerik bu okurlara göre hazırlanır. Başvuru da çoğu zaman bir satın alma olmaz, teklif isteği olur. Endüstriyel pazarlama diye aranan iş de budur.',
      },
      {
        soru: 'Yurt dışındaki alıcıya internetten nasıl ulaşılır?',
        cevap:
          'Ürününüzün hedef ülkede, o ülkenin diliyle nasıl arandığını bulup o aramada görünerek ulaşılır. Bunun için hedef ülkeye yönelik arama reklamı, o dilde hazırlanmış ürün sayfası ve yapay zekâ araçlarının okuyabileceği açık firma bilgisi birlikte çalışır. Fuar ve bayi ağı yerinde durur; site, orada tanıştığınız alıcının dönüp baktığı yer olur.',
      },
      {
        soru: 'Üretici firma web sitesi nasıl olmalı?',
        cevap:
          'Bir üretici sitesi her ürünü kendi sayfasında, alıcının tedarikçileri karşılaştırırken baktığı bilgilerle anlatmalıdır: ürün özellikleri, uyduğu standart, üretim kapasitesi, minimum sipariş ve teslim süresi. Bu bilgileri siz verirsiniz; biz sayfada kolay bulunur ve okunur hâle getiririz. Her ürün sayfası, ürünü ve miktarı soran bir teklif formuna bağlanır.',
      },
      {
        soru: 'İhracat yapan firmanın sitesi hangi dillerde olmalı?',
        cevap:
          'Site, satış yaptığınız ve gelen isteğe yanıt verebildiğiniz pazarların dilinde olmalıdır. Her dil sürümü kendi adresinde durur ve arama motoruna hangi dile ait olduğu bildirilir. Çeviriyi sizin ekibiniz ya da çalıştığınız çevirmen yapar; biz hangi sayfanın hangi dilde gerektiğini, o dilde hangi aramaların yapıldığını ve sitenin teknik yapısını üstleniriz.',
      },
      {
        soru: 'Arama hacmi bu kadar düşükken reklam vermeye değer mi?',
        cevap:
          'Düşük hacim bu sektörde beklenen bir durumdur ve tek başına reklamdan vazgeçme nedeni sayılmaz. Alıcı az olduğu için aramalar da azdır; “fason üretim” ya da “üretici firmalar” yazan kişi ise çoğu zaman bir ihtiyacı karşılamaya çalışan satın almacıdır. Değip değmeyeceğine, tek bir teklif isteğinin sizin için taşıdığı değere ve aramaların ne kadarının alıcıdan geldiğine bakarak birlikte karar veriyoruz.',
      },
      {
        soru: 'ChatGPT gibi araçlarda tedarikçi olarak anılmak için ne yapılır?',
        cevap:
          'İlk iş, ne ürettiğinizi, hangi standarda göre ürettiğinizi ve hangi ülkelere sevk ettiğinizi sitenizde açık cümlelerle yazmaktır. Yanıtın hangi kaynağa dayanacağına araç kendisi karar verir; bu yüzden anılma sözü veremeyiz. Alıcının sorabileceği soruları çıkarıyor, yanıtları okuyor ve eksik ya da yanlış bilgiyi durduğu sayfada düzeltiyoruz.',
        bag: { etiket: 'GEO nedir?', url: '/blog/geo-nedir/' },
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi firmanızın adına açılır ve sizde kalır. Reklam hesabı, alan adı, site ve dil sürümleri firmanıza aittir; bize yönetici erişimi verirsiniz. Erişimi dilediğiniz zaman kaldırabilirsiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Teklif isteği sayısı, sıralama ya da sipariş için söz vermiyoruz. Söz verdiğimiz şey ürününüzü ve pazarınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['geo-nedir', 'landing-page-nedir'],
    sektorler: ['insaat-ve-yapi', 'butik-markalar'],
  },
};

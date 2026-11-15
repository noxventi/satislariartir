/**
 * Mimarlık ofisleri.
 * Ana niyet: "mimarlık ofisleri için dijital pazarlama", "mimarlık ofisi web sitesi", "mimar web sitesi", "mimarlık portfolyo sitesi".
 * Arama hacimleri: Türkiye, aylık yaklaşık (OpenSEO ölçümü, 15 Kasım 2026).
 * Referans: ÇelikVillam (Rotech Mühendislik). Mimarlık ofisi DEĞİLDİR; yapı alanındaki çalışma olarak, bu söylenerek gösterilir.
 *
 * MESLEK KURALI (15 Kasım 2026'da Mimarlar Odası'nın mevzuat sayfasından indirilen metinden okundu):
 * TMMOB Mimarlar Odası Mesleki Davranış Kuralları Yönetmeliği, madde 7 (c):
 *   "Mimar, proje ve uygulamaları için gerçeğe aykırı olarak kendisinin kaliteli ve ucuz bina yaptığını ya da zamandan tasarruf
 *   sağladığını, ucuz ve süratli hizmet yaptığını ya da buna benzer bir hususu ileri sürerek ilan vermez. Hiçbir şekilde reklam yapamaz."
 * Madde 1: kamuda ve özel sektörde çalışan bütün mimarları kapsar. Madde 3: uymayan mimar Onur Kuruluna sevk edilir.
 * - Liste: http://mo.org.tr/?sayfa=belge&sub=list&bid=220&mid=220
 * - Metin: http://www.mo.org.tr/mevzuatDocs/mesleki-davranis-080609.doc
 * Bu yüzden sayfada reklam kampanyası önerilmez; kanallar web, seo, geo ve harita kartlarıdır (hukuk-burolari.ts ile aynı düzen).
 * kuralNotu alanı kullanılmadı; kural bir soru kartında ve SSS'de kaynağıyla anlatılır.
 * Kural cümleleri ve "reklam kampanyası önermiyoruz" kararı yayından önce site sahibince onaylanmalıdır; mevzuat değişirse güncellenir.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 10,
  kimlik: 'mimarlik-ofisleri',
  ad: 'Mimarlık ofisleri',
  kimler: 'Mimarlık ofisleri, serbest mimarlar, proje ve uygulama firmaları, restorasyon ofisleri',
  ozet: 'Portfolyoyu, şehrinde mimar arayan kişinin sorularını yanıtlayan proje sayfalarına çeviren ve ilk görüşmeye götüren site ile arama görünürlüğü.',
  baslik: 'Mimarlık ofisleri için dijital pazarlama',
  metaBaslik: 'Mimarlık Ofisleri için Dijital Pazarlama',
  metaAciklama:
    'Mimarlık ofisleri ve serbest mimarlar için web sitesi, SEO, Google İşletme Profili ve yapay zekâ görünürlüğü: biten işi gösteren, görüşme talebi getiren kurulum.',
  tanim: [
    'Mimarlık ofisleri için dijital pazarlama, evine, arsasına ya da yatırımına mimar arayan kişinin ofisin yaptığı işleri web sitesinde, Google aramalarında ve haritada bulmasını ve ilk görüşmeyi istemesini sağlama işidir.',
    'Mimar seçimi haftalar, çoğu zaman aylar süren bir karardır. Arsa sahibi önce örnek proje ve plan arar, sonra şehrindeki ofislerin tamamlanmış yapılarına bakar, en son görüşme ister. Mimarlar Odası’nın meslek kuralları mimarın reklam yapmasına izin vermediği için bu alanda reklam kampanyası önermiyoruz; proje sayfalarını, arama görünürlüğünü ve işletme profilini bu üç aşamaya göre kuruyoruz.',
    'Mimarlık ofisleri, tek başına çalışan serbest mimarlar, proje ve uygulamayı birlikte üstlenen firmalar ve restorasyon ofisleriyle çalışıyoruz.',
  ],
  gorselAlt:
    'Kâğıttan bir mimarlık atölyesi: çizim masasının üstünde teraslı modern bir bina maketi, rulo planlar, gönye ve masa lambası. Kırmızı kalem çizgisi dört kişiyi çizgili tenteli ofisin kapısına götürüyor.',
  cagri: 'Ofisim için görüşelim',
  kanal: 'web',
  reklamsiz: true,

  aramalar: {
    baslik: 'Mimar arayan kişi Google’a ne yazıyor?',
    giris: 'Ev yaptıracak kişi aramaya ofisin adını yazmaz; yaptırmak istediği yapıyı, ardından bulunduğu şehri yazar.',
    liste: [
      { ifade: 'mimar', hacim: 12100 },
      { ifade: 'mimarlık ofisi', hacim: 5400 },
      { ifade: 'villa projeleri', hacim: 3600 },
      { ifade: 'ev projeleri', hacim: 3600 },
      { ifade: 'mimari proje', hacim: 1300 },
      { ifade: 'ev projesi çizimi', hacim: 1000 },
      { ifade: 'ankara mimarlık ofisi', hacim: 880 },
      { ifade: 'istanbul mimarlık ofisi', hacim: 590 },
      { ifade: 'anahtar teslim villa', hacim: 170 },
      { ifade: 'ruhsat projesi', hacim: 140 },
    ],
    yorum: [
      'En çok aranan iki ifade aynı zamanda en karışık olanlar. “Mimar” yazanların bir kısmı mesleği merak ediyor; “mimarlık ofisi” yazanların arasında iş arayan mimarlar da var (“mimar iş ilanları” ayda 6.600 kez aranıyor). “Villa projeleri” ve “ev projeleri” yazan kişi çoğu zaman fikir topluyor, plan ve cephe örneklerine bakıyor. Mimar tutmaya hazır olan daha az ama daha açık yazıyor: şehrinin adıyla ofis, “ev projesi çizimi”, “ruhsat projesi”.',
      'Sayfa planını bu ayrıma göre yapıyoruz. Fikir toplayan kişi proje sayfalarında fotoğraf, plan ve kısa bir künye bulur; şehir adıyla arayan kişi ofisin nerede, hangi yapı türlerinde çalıştığını ayrı bir sayfada okur. “Proje çizimi” ile “anahtar teslim” arayan kişiler aynı ofise farklı beklentiyle gelir; hangi işi üstlendiğinizi sitenin ilk ekranı söyler.',
    ],
  },

  sorunlar: {
    baslik: 'Mimarlık ofislerinden en sık duyduğumuz sorular',
    giris: 'Altı sorunun çoğu aynı yere çıkıyor: portfolyo göze hitap ediyor ama mimar arayan kişinin sorusunu yanıtlamıyor.',
    kartlar: [
      {
        soru: 'Mimarlık ofisi web sitesi nasıl olmalı?',
        ornek:
          'Bir ofisin sitesi tam ekran görsellerle açılıyor, projelerin altında yalnız ad ve yıl yazıyor. Arsasına ev yaptıracak kişi bu ofisin konut çizip çizmediğini, işin nasıl ilerlediğini ve kime yazacağını bulamıyor.',
        care: 'Her projeye yapı türünü, yerini, ofisin üstlendiği işi ve görüşme adımını taşıyan ayrı bir sayfa açıyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Mimarlık ofisi reklam verebilir mi?',
        ornek:
          'Ofisini yeni açan bir mimar, ilk işlerini almak için Google ve Instagram reklamı vermeyi düşünüyor. Mimarlar Odası’nın Mesleki Davranış Kuralları Yönetmeliği ise mimarın reklam yapamayacağını söylüyor.',
        care: 'Mimarlık ofislerine reklam kampanyası önermiyor; işi site, arama görünürlüğü ve işletme profiliyle kuruyoruz.',
        cizim: 'megafon',
        bag: { etiket: 'Kuralın metni ve kaynağı', url: '#sss' },
      },
      {
        soru: 'Şehrimin adıyla “mimarlık ofisi” arayınca neden çıkmıyorum?',
        ornek:
          'Ankara’da yıllardır çalışan bir ofisin sitesinde şehrin adı yalnız iletişim sayfasında geçiyor, haritadaki kaydı da eski adresi gösteriyor. “Ankara mimarlık ofisi” yazan kişi başka ofisleri görüyor.',
        care: 'Sitede çalıştığınız şehri ve yapı türlerini açıkça yazıyor, Google İşletme Profili’ndeki ad, adres ve kategoriyi düzeltiyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Instagram’da takipçim çok, neden iş gelmiyor?',
        ornek:
          'Bir ofisin paylaştığı villa görselleri çok beğeniliyor ama gelen mesajların çoğu “planı paylaşır mısınız” diye soruyor. Profildeki bağlantı ana sayfayı açıyor; görseldeki projeyi ve görüşme adımını bulmak ziyaretçiye kalıyor.',
        care: 'Hesabı siz yürütüyorsunuz; biz profil bağlantısının açtığı proje sayfasını ve görüşme formunu kuruyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Form ve WhatsApp düzeni', url: '/hizmetler/web-tasarim/#form-gosterimi' },
      },
      {
        soru: 'Arayanlar neden yalnız çizim ücretini sorup kapatıyor?',
        ornek:
          'Bir proje ofisini arayanların çoğu ruhsat için çizim ücretini soruyor, bir kısmı da evi anahtar teslim yaptırmak istiyor. Site, ofisin hangi işi üstlendiğini ve görüşmeden önce neyi bilmesi gerektiğini söylemiyor.',
        care: 'Hizmet sayfalarında üstlendiğiniz işi açıkça yazıyor, formda arsanın yerini, imar durumunu ve yapı türünü soruyoruz.',
        cizim: 'telefon',
        bag: { etiket: 'İlk ekranda ne olmalı?', url: '/hizmetler/web-tasarim/#ilk-ekran' },
      },
      {
        soru: 'Yapay zekâ mimarlık ofisi önerirken beni neden saymıyor?',
        ornek:
          'Arsası olan biri ChatGPT’ye “İzmir’de villa projesi çizen mimarlık ofisleri” diye soruyor. Yalnız görsel yayımlayan bir ofisin sitesinde aracın okuyup aktarabileceği bir cümle bulunmuyor.',
        care: 'Ofisin ne yaptığını, nerede çalıştığını ve hangi yapıları tamamladığını açık cümlelerle sayfalara yazıyoruz.',
        cizim: 'robot',
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
    ],
  },

  kanallar: {
    baslik: 'Mimarlık ofisi için hangi kanal ne işe yarar?',
    giris:
      'Dört kanal, mimar arayan kişinin karar sürecinde ayrı aşamalara denk gelir ve hiçbiri ücretli reklam içermez. Hangisinden başlanacağını incelemeden sonra birlikte seçiyoruz.',
    liste: [
      {
        tur: 'web',
        baslik: 'Web sitesi: portfolyodan görüşmeye giden yol',
        metin: 'Müşteri bir ofise yazmadan önce kendi işine benzeyen bir yapının bitmiş hâlini görmek ister. Proje sayfası fotoğrafı, planı ve ofisin o işte ne üstlendiğini birlikte taşır.',
        maddeler: ['Yapı türüne göre ayrılmış proje sayfaları', 'Arsa, imar durumu ve zamanlamayı soran form', 'Büyük görsellerin telefonda çabuk açılması'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        tur: 'seo',
        baslik: 'SEO: şehir ve yapı türüyle yapılan aramalar',
        metin: 'Mimar tutmaya hazır kişi şehrini ve yaptıracağı yapıyı yazar. Bu aramalarda görünmek için sitenin aynı sözleri kendi sayfalarında düz bir dille söylemesi gerekir.',
        maddeler: ['Çalıştığınız şehirler için ayrı sayfa', 'Villa, konut, ticari yapı ve restorasyon sayfaları', 'Ruhsat ve proje aşaması sorularına yanıtlar'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'geo',
        baslik: 'Yapay zekâ görünürlüğü: ofisin doğru anılması',
        metin: 'Ev yaptıracak kişi mimar sorusunu ChatGPT’ye ve Gemini’ye de soruyor. Bu araçlar yanıtını sayfalardaki cümlelerden kurar; yalnız görselden oluşan bir portfolyoda okuyacak bir şey bulamaz.',
        maddeler: ['Ofisin adıyla ve şehriyle sorulan sorular', 'Proje sayfalarında açık künye bilgisi', 'Eski bilginin kaynağında düzeltilmesi'],
        bag: { etiket: 'GEO danışmanlığı', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
      {
        tur: 'harita',
        baslik: 'Google İşletme Profili: şehirdeki ofis aramaları',
        metin: '“Ankara mimarlık ofisi” gibi aramalarda sonuçların başında çoğu zaman harita çıkar. Profilde ofisin adı, adresi, kategorisi ve biten işlerin fotoğrafları güncel durmalıdır.',
        maddeler: ['Ad, adres, telefon ve kategori doğruluğu', 'Tamamlanan yapılardan fotoğraflar', 'Müşteri yorumlarına yanıt düzeni'],
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
    ],
  },

  yontem: {
    baslik: 'Mimarlık ofisleriyle nasıl çalışıyoruz?',
    giris: 'Önce ofisin hangi işlerle anılmak istediğini ve bugün arandığında ne göründüğünü inceliyor, sonra siteyi ve profili kuruyor, ardından düzenli optimizasyonla görüşme talebine yaklaştırıyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Portfolyo, şehir ve aramalar', aciklama: 'Tamamladığınız yapıları, almak istediğiniz iş türünü ve çalıştığınız şehirleri çıkarıyor; mimar arayan kişinin bu işleri hangi sözlerle aradığına bakıyoruz.' },
      { ad: 'Strateji', ozet: 'Yapı türüne göre sayfa planı', aciklama: 'Hangi projenin öne çıkacağını, hangi yapı türüne ve şehre sayfa açılacağını ve görüşme formunun neyi soracağını sizinle birlikte yazıyoruz.' },
      { ad: 'Kurulum', ozet: 'Proje sayfaları, form ve profil', aciklama: 'Sizin sağladığınız fotoğraf, plan ve görselleri sayfalara yerleştiriyor; formu ve Google İşletme Profili’ni kurup yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Yeni işler ve arama takibi', aciklama: 'Biten işleri siteye ve profile ekliyor, hangi sayfanın görüşme talebi getirdiğine bakıp getirmeyen sayfaları yeniden düzenliyoruz.' },
      { ad: 'Hedef', ozet: 'İlk görüşme ve sözleşme', aciklama: 'Ölçütümüz, almak istediğiniz iş türünden gelen görüşme talepleri ve bunların kaçının sözleşmeye döndüğüdür.' },
    ],
  },

  referanslar: {
    baslik: 'Yapı alanında yürüttüğümüz bir çalışma',
    giris: 'ÇelikVillam bir mimarlık ofisi değil; yapı alanında yürüttüğümüz, bugün açıp inceleyebileceğiniz bir çalışma. Müşterisi sizinkine benziyor: arsası olan ve ev yaptırmak isteyen kişi.',
    liste: [
      {
        kimlik: 'celikvillam',
        not: 'Site bu soru etrafında kuruldu; mimarlık ofisinde aynı ayrım örnek plan arayan ile mimar tutmaya hazır kişi arasında yaşanır. Projede web tasarım, SEO ve GEO ile reklam yönetimi yer aldı; reklam bu yapı markasına özgü bir iştir, mimarlık ofislerine önermiyoruz.',
      },
    ],
  },

  durumlar: {
    baslik: 'İşler tavsiyeyle mi geliyor, siteniz var ama arayan mı yok?',
    giris: 'Birinde iş proje seçimiyle, ötekinde yayındaki sitenin incelenmesiyle başlar.',
    sol: {
      ust: 'Bugüne kadar tavsiyeyle ve Instagram’la iş aldıysanız',
      baslik: 'Siteyi seçilmiş birkaç projeyle kuruyoruz',
      metin: 'Bütün arşivi yüklemek gerekmez. İlk adımda almak istediğiniz iş türünü en açık anlatan projeleri seçiyor, yalnız onlar için sayfa ve görüşme adımı hazırlıyoruz.',
      maddeler: [
        { ad: 'Hangi işi almak istiyorsunuz?', aciklama: 'Müstakil konut, apartman, ticari yapı ya da restorasyon. Öne çıkacak projeleri ve sayfa başlıklarını bu seçim belirler.' },
        { ad: 'Elinizde hangi malzeme var?', aciklama: 'Biten yapının fotoğrafı, plan ve kesitler, görselleştirmeler. Bunları siz sağlarsınız; biz sayfaya yerleştiririz.' },
        { ad: 'Görüşme talebi kime ulaşacak?', aciklama: 'Form arsanın yerini, imar durumunu ve yapı türünü sorar. Talebin kime düşeceğini ve ilk yanıtı yayından önce belirliyoruz.' },
      ],
      cagri: 'Ofis sitemi planlayalım',
      bag: { etiket: 'Web sitesi nasıl kurulur?', url: '/blog/web-sitesi-nasil-kurulur/' },
      cizim: 'dukkan',
    },
    sag: {
      ust: 'Siteniz var ama görüşme talebi gelmiyorsa',
      baslik: 'Önce sitenin arayan kişiye ne söylediğine bakıyoruz',
      metin: 'Yeni sayfa açmadan önce ofisiniz arandığında neyin çıktığını ve proje sayfalarının bir arsa sahibinin sorularını yanıtlayıp yanıtlamadığını görmemiz gerekir.',
      maddeler: [
        { ad: 'Proje sayfaları', aciklama: 'Sayfada yapı türü, yer, yıl ve ofisin üstlendiği iş yazıyor mu, yoksa yalnız görsel mi var?' },
        { ad: 'Arama görünürlüğü', aciklama: 'Şehrinizin adıyla yapılan ofis aramalarında siteniz ve haritadaki kaydınız çıkıyor mu? Search Console’dan bakıyoruz.' },
        { ad: 'Telefonda açılış', aciklama: 'Büyük görseller dar ekranda geç mi açılıyor, menü ve iletişim düğmesi bulunuyor mu? Birlikte deniyoruz.' },
        { ad: 'Görüşme adımı', aciklama: 'Form ne soruyor, talep kime düşüyor, ilk yanıt nasıl veriliyor? Gelen son talepleri sizinle sınıflıyoruz.' },
      ],
      cagri: 'Siteme birlikte bakalım',
    },
  },

  ornek: {
    baslik: 'Hangi aramaya sayfa açılır, hangisine açılmaz?',
    metin: [
      'Mimarlıkla ilgili aramaların hepsi iş getirmez: aynı kelimeyi fikir toplayan da yazar, iş arayan mimar da, arsası hazır olan da. Her arama için sitede sayfa açılıp açılmayacağına ayrı karar verilir.',
      'Tablo, müstakil konut projeleri çizen bir ofis için hazırlanmış temsili bir örnektir. Sizin sitenizde aynı tabloyu kendi şehriniz ve yapı türlerinizle kuruyoruz.',
    ],
    tabloBasligi: 'Konut projesi çizen bir ofis için sayfa kararları',
    sutunlar: ['Arama', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'izmir mimarlık ofisi', sorgu: true, karar: 'Sayfa aç', tur: 'evet', gerekce: 'Şehrinde ofis arıyor. Ofisin yerini, çalıştığı yapı türlerini ve biten işleri gösteren sayfa açılır.' },
      { ilk: 'villa projesi çizimi', sorgu: true, karar: 'Sayfa aç', tur: 'evet', gerekce: 'Arsası hazır, mimar arıyor. Hizmet sayfası sürecin aşamalarını ve görüşme formunu taşır.' },
      { ilk: 'villa projeleri', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Fikir topluyor. Proje sayfaları bu aramada görünür; görüşmeye dönüp dönmediğine bakılır.' },
      { ilk: 'anahtar teslim villa', sorgu: true, karar: 'Ofise göre', tur: '', gerekce: 'Uygulamayı da üstleniyorsanız ayrı sayfa açılır. Yalnız proje çiziyorsanız sitede bu açıkça yazılır.' },
      { ilk: 'mimar iş ilanları', sorgu: true, karar: 'Açma', tur: 'hayir', gerekce: 'İş arıyor. Kariyer bilgisi ayrı tutulur, proje ve hizmet sayfalarına karıştırılmaz.' },
    ],
    not: 'Aramalar gerçek bir siteden alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'liste',
  },

  sss: {
    baslik: 'Mimarlık ofisleri için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Meslek kuralları, portfolyo sitesi ve görüşme talepleri hakkında mimarlık ofislerinden duyduğumuz sorular.',
    sorular: [
      {
        soru: 'Mimarlık ofisleri için dijital pazarlama nedir?',
        cevap:
          'Mimarlık ofisleri için dijital pazarlama, mimar arayan kişinin ofisin yaptığı işleri web sitesinde, Google aramalarında, haritada ve yapay zekâ yanıtlarında bulmasını ve görüşme istemesini sağlayan çalışmaların bütünüdür. Proje sayfalarıyla kurulmuş bir web sitesini, SEO’yu, Google İşletme Profili’ni ve yapay zekâ görünürlüğünü kapsar. Meslek kuralları nedeniyle reklam kampanyası önermiyoruz.',
      },
      {
        soru: 'Mimarlar reklam verebilir mi?',
        cevap:
          'Mimarlar Odası’nın yayımladığı meslek kuralları buna izin vermiyor: TMMOB Mimarlar Odası Mesleki Davranış Kuralları Yönetmeliği’nin 7. maddesi mimar için “Hiçbir şekilde reklam yapamaz” hükmünü içerir. Aynı madde, mimarın gerçeğe aykırı biçimde ucuz, hızlı ya da kaliteli iş yaptığını ileri sürerek ilan vermesini de yasaklar. Yönetmelik kamuda ve özel sektörde çalışan bütün mimarları kapsar; hükmün çevrimiçi reklama ve şirket olarak yürüttüğünüz uygulama işlerine nasıl uygulandığını bağlı olduğunuz şubeye sormanızı öneririz. Biz hukuki görüş vermiyoruz; mimarlık ofislerine reklam kampanyası da önermiyoruz.',
        bag: { etiket: 'Kaynak: Mimarlar Odası, mevzuat', url: 'http://mo.org.tr/?sayfa=belge&sub=list&bid=220&mid=220' },
      },
      {
        soru: 'Mimarlık ofisi nasıl müşteri bulur?',
        cevap:
          'Mimarlık ofisleri işlerini çoğu zaman tavsiyeyle, önceki işverenlerinden ve yarışmalardan alır; site ve arama görünürlüğü bunlara, ofisi hiç tanımayan kişinin ulaşabildiği bir yol ekler. Tavsiyeyle gelen kişi de görüşmeden önce ofisin adını Google’a yazar ve biten işlere bakar. Bu yüzden ilk iş, adınız arandığında çıkan sayfaların bugünkü işinizi doğru göstermesidir.',
      },
      {
        soru: 'Mimarlık ofisi web sitesi nasıl olmalı?',
        cevap:
          'Bir mimarlık ofisi sitesi, tamamlanan yapıları ayrı sayfalarda fotoğraf, plan ve kısa bir künyeyle göstermeli ve ziyaretçiye görüşme için açık bir adım sunmalıdır. Arsa sahibi üç şeye bakar: kendi işine benzeyen bir yapı yapmış mısınız, işi hangi aşamalarla yürütüyorsunuz ve kiminle görüşecek. Yalnız görselden oluşan bir portfolyo çoğu zaman meslektaşa hitap eder; müşterinin sorusunu sayfadaki yazı yanıtlar.',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Mimarlık portfolyo sitesinde hangi projeler ve görseller yer almalı?',
        cevap:
          'Almak istediğiniz iş türüne benzeyen, tamamlanmış işler öne alınmalıdır. Müşteri biten yapının fotoğrafına görselleştirmeden daha çok güvenir; sayfada hangisinin fotoğraf, hangisinin görselleştirme olduğu yazılır. Yarışma projeleri ve ödüller ayrı bir bölümde durur ve kurumsal işveren için bir güven göstergesidir. Fotoğrafları, planları ve görselleri siz sağlarsınız, biz sayfaya yerleştiririz; çekim ve görselleştirme hizmeti vermiyoruz.',
      },
      {
        soru: 'Mimarlık ofisi için Instagram yeterli mi?',
        cevap:
          'Tek başına yetmez: Instagram ofisin vitrinidir, ama mimar tutmaya hazır kişi karar vermeden önce çoğu zaman siteye geçip projeye, sürece ve ofisin kim olduğuna bakar. Ev yaptırmayı düşünen kişi Instagram ve Pinterest’te fikir toplar; beğendiği görselin hangi ofise ait olduğunu ve o ofise nasıl ulaşacağını bulabilmelidir. Hesabı ve paylaşımları siz yürütürsünüz; biz profildeki bağlantının açtığı sayfayı ve görüşme formunu kurarız.',
      },
      {
        soru: '“Proje çizimi” arayan ile “anahtar teslim” arayan müşteri nasıl ayrılır?',
        cevap:
          'Proje çizimi arayan kişinin arsası vardır ve yapımı kendisi ya da müteahhidi yürütecektir; mimardan ruhsat için gereken projeleri ister. Anahtar teslim arayan kişi tasarımı ve yapımı tek elden yürütecek bir firma arar. Ofisiniz hangisini üstleniyorsa site bunu ilk ekranda söyler ve iki iş için ayrı sayfa açılır; form da arsanın yerini ve imar durumunu sorarak ilk görüşmeyi kısaltır.',
      },
      {
        soru: 'Site ve alan adı kimin adına olur?',
        cevap:
          'Alan adı, site ve Google İşletme Profili ofisinizin adına açılır ve sizde kalır. Bize yönetici erişimi verirsiniz; erişimi dilediğiniz zaman kaldırabilirsiniz. Sayfalardaki fotoğraf, plan ve görseller de sizin malzemenizdir.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Sıralama, ziyaretçi ya da görüşme talebi sayısı için söz vermiyoruz. Söz verdiğimiz şey ofisinizi ve sitenizi ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['web-sitesi-nasil-kurulur', 'google-isletme-profili-nasil-acilir'],
    sektorler: ['insaat-ve-yapi', 'ic-mimarlik-ve-dekorasyon'],
  },
};

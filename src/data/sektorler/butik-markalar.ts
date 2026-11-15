/**
 * Butik markalar ve atölyeler.
 * Ana niyet: "butik markalar için dijital pazarlama"; el yapımı ürün, atölye, galeri ve kurs veren stüdyolar.
 * Arama hacimleri: Türkiye, aylık yaklaşık (ölçüm 15 Kasım 2026).
 * Referanslar: White Earth Atelier ve 1001 Art.
 * Kapsam: e-ticaret altyapısı, pazaryeri mağaza yönetimi, sosyal medya içerik üretimi ve hesap yönetimi vaat edilmez.
 * Anlatılan iş reklam, reklamda görsel ile metnin denenmesi, SEO ve ürünü anlatıp sipariş ya da kayıt adımına götüren sitedir.
 */
import type { Sektor } from './tip';

export const sektor: Sektor = {
  sira: 8,
  kimlik: 'butik-markalar',
  ad: 'Butik markalar ve atölyeler',
  kimler: 'El yapımı ürün markaları, seramik ve tasarım atölyeleri, sanat galerileri ve sanatçılar, kurs veren stüdyolar',
  ozet: 'Ürünü görüp beğenen alıcı ile kurs arayan kişiyi ayrı yollardan siparişe ve kayda götüren reklam ve site düzeni.',
  baslik: 'Butik markalar ve atölyeler için dijital pazarlama',
  metaBaslik: 'Butik Markalar için Dijital Pazarlama',
  metaAciklama:
    'El yapımı ürün markaları, seramik atölyeleri, galeriler ve kurs veren stüdyolar için Instagram reklamı, Google Ads, SEO ve web sitesi: siparişe ve kayda götüren kurulum.',
  tanim: [
    'Butik markalar ve atölyeler için dijital pazarlama, el yapımı ürünü onu henüz aramayan kişiye gösterme, kurs ya da belirli bir ürün arayanın karşısına çıkma ve bu ilgiyi siparişe ya da kayda götürme işidir.',
    'Bu işlerde alıcı çoğu zaman bir şey aramıyordur: ürünü Instagram’da görür, kimin yaptığına ve kaç adet olduğuna bakar, sonra mesaj yazar. Kurs arayan ise Google’a yazar; günü, saati ve yeri sorar. Reklamı ve sayfaları bu iki yola göre ayrı ayrı kuruyoruz.',
    'El yapımı ürün markaları, seramik ve tasarım atölyeleri, sanat galerileri, sanatçılar ve kurs veren stüdyolarla çalışıyoruz.',
  ],
  gorselAlt:
    'Kâğıttan bir atölye: geniş vitrininde ve önündeki masada lacivert ve fildişi seramik vazolar, kâseler; açık kapının yanında bir şövale ve çömlek tornası başında önlüklü bir zanaatkâr; biri hediye çantası taşıyan iki müşteri kırmızı kalem çizgisini izleyerek kapıya yürüyor',
  cagri: 'Markam için görüşelim',
  kanal: 'belirsiz',

  aramalar: {
    baslik: 'Butik markaların ve atölyelerin müşterisi Google’da ne arıyor?',
    giris: 'Google’a yazanların bir kısmı ürünü almak, bir kısmı o ürünü kendi eliyle yapmayı öğrenmek ister.',
    liste: [
      { ifade: 'tablo', hacim: 49500 },
      { ifade: 'yağlı boya tablo', hacim: 12100 },
      { ifade: 'resim kursu', hacim: 4400 },
      { ifade: 'seramik atölyesi', hacim: 2900 },
      { ifade: 'seramik kursu', hacim: 2400 },
      { ifade: 'el yapımı seramik', hacim: 390 },
      { ifade: 'internetten satış', hacim: 390 },
    ],
    yorum: [
      'Tek başına “tablo” yazan kişinin ne aradığı belli değildir; sonuç sayfasını da büyük pazaryerleri ve mağazalar doldurur. Kurs arayan kişi ürün almayı düşünmüyor, fırçayı ya da çamuru eline almak istiyor. “El yapımı seramik” az aranır, çünkü alıcısı çoğu zaman aramaz; Instagram’da görüp beğenir. “İnternetten satış” ise satış yolu araştıran üreticinin aramasıdır.',
      'Bu yüzden geniş aramalarda büyük mağazalarla yarışmıyor; tekniği, boyutu ya da kullanım yerini söyleyen aramalar için sayfa açıyoruz. Kurs aramalarını ayrı kampanyada ve ayrı sayfada karşılıyor, ürünü aramayan alıcıya Instagram reklamıyla ulaşıyoruz.',
    ],
  },

  sorunlar: {
    baslik: 'Butik markalardan ve atölyelerden en sık duyduğumuz sorular',
    giris: 'Ürün seramik de olsa, tablo da olsa, kurs da olsa sorular aynı altı başlıkta toplanıyor. Her birinde ilk baktığımız yer:',
    kartlar: [
      {
        soru: 'Instagram’da beğeni var, neden sipariş gelmiyor?',
        ornek:
          'Bir seramik atölyesinin kupa videosu binlerce beğeni alıyor, sipariş veren çıkmıyor. Videoda kupanın kaç adet yapıldığı, ne zaman teslim edileceği ve nasıl sipariş verileceği yok.',
        care: 'Reklamı sipariş hedefiyle kuruyor; adedi, teslim süresini ve sipariş yolunu söyleyen görsel ile metin sürümlerini deniyoruz.',
        cizim: 'kreatif',
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        soru: 'Kişiye özel sipariş mesajları neden yarıda kalıyor?',
        ornek:
          'İsim yazılı kupa yapan bir atölyeye her gün “kaç günde hazır olur, on adet yapar mısınız” diye yazılıyor. Yanıt her seferinde baştan yazıldığı ve akşama kaldığı için alıcı hediyeyi başka yerden alıyor.',
        care: 'Süre, adet ve teslim bilgisini sayfaya ve ilk yanıta yerleştiriyor, konuşmayı siparişe götüren soru sırasını hazırlıyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Mesajlar neden satışa dönmüyor?', url: '/blog/instagram-reklam-mesajlari-satisa-donusmuyor/' },
      },
      {
        soru: 'Google’da “tablo” yazınca neden hep büyük mağazalar çıkıyor?',
        ornek:
          'Bir ressam sitesinin her sayfasına yalnız “tablo” yazmış; bu aramada sıra sıra pazaryeri ve mağaza var. Salonuna büyük boy, soyut bir yağlı boya arayan kişinin açacağı bir sayfası ise yok.',
        care: 'Tekniği, boyutu ve konuyu söyleyen aramaları çıkarıp her biri için eser ya da koleksiyon sayfası planlıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Kurs duyurusu yapıyorum, kontenjan neden dolmuyor?',
        ornek:
          'Bir seramik stüdyosu yeni dönemi yalnız hikâyede duyuruyor; görenler zaten takipçisi. “Seramik kursu” diye arayan kişi ise sitede günü, saati ve kayıt adımını gösteren bir sayfa bulamıyor.',
        care: 'Kurs için ayrı bir arama kampanyası ve gün, saat, kontenjan ile kayıt adımını taşıyan bir sayfa kuruyoruz.',
        cizim: 'defter',
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        soru: 'Pazaryerinde satıyorum, kendi sitem de olmalı mı?',
        ornek:
          'El yapımı takı satan bir marka siparişlerini pazaryerinden alıyor. Ürünü beğenip markanın adını Google’a yazan kişi ise kimin yaptığını, nasıl yapıldığını ve yeni koleksiyonu görebileceği bir yer bulamıyor.',
        care: 'Ürünü ve yapan eli anlatan, sipariş adımına götüren siteyi kuruyoruz; pazaryeri mağazanız sizde kalıyor.',
        cizim: 'dukkan',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Yılbaşı ve Anneler Günü için reklama ne zaman başlamalıyım?',
        ornek:
          'İlk reklamını Anneler Günü haftasında açan bir mum atölyesine “pazara yetişir mi” diye yazılıyor. Ürün elde yapıldığı ve kargoya verildiği için yetişmiyor, sorular siparişe dönmüyor.',
        care: 'Son sipariş tarihini üretim ve kargo sürenize göre belirliyor; reklamı, görseli ve sayfayı bu tarihten önce hazırlıyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'İlk kampanyayı planlayalım', url: '#baslangic' },
      },
    ],
  },

  kanallar: {
    baslik: 'Butik markalar ve atölyeler için hangi kanal ne işe yarar?',
    giris:
      'Ürün satışı ile kurs kaydı aynı kanaldan beslenmez. Dördünü birden açmak gerekmez; hangisiyle başlanacağını incelemeden sonra, gelirinizin hangi yoldan geldiğine bakarak birlikte seçiyoruz.',
    liste: [
      {
        tur: 'meta',
        baslik: 'Instagram ve Facebook: ürünü aramayana göstermek',
        metin: 'El yapımı ürünü alan kişi çoğu zaman onu aramıyordur; görünce ister. Reklam, ürünü ve onu yapan eli bu kişinin akışına getirir.',
        maddeler: ['Ürün ve yapım görüntülerinin reklamda denenmesi', 'Hediye dönemlerine göre kampanya takvimi', 'Sipariş mesajı için hazır ilk yanıt'],
        bag: { etiket: 'Instagram reklam yönetimi', url: '/hizmetler/meta-reklam-yonetimi/' },
      },
      {
        tur: 'google-ads',
        baslik: 'Google Ads: kurs ve belirli ürün aramaları',
        metin: 'Kursa yazılmak isteyen ve tekniğini, boyutunu söyleyerek ürün arayan kişi Google’a yazar. Arama reklamı onu kayıt ya da ürün sayfasına indirir.',
        maddeler: ['Kurs ve ürün aramaları ayrı kampanyalarda', 'Malzeme ve yapı seramiği aramaları negatif listede', 'Atölyeye gelebilecek ilçelere göre hedefleme'],
        bag: { etiket: 'Google Ads yönetimi', url: '/hizmetler/google-ads-yonetimi/' },
      },
      {
        tur: 'seo',
        baslik: 'SEO ve yapay zekâ görünürlüğü: belirli aramalar',
        metin: 'Geniş aramalarda büyük pazaryerleri ve mağazalar çıkar. Küçük markanın yeri tekniği, malzemeyi ve yapanı soran aramalardır.',
        maddeler: ['Ürün, koleksiyon ve atölye sayfaları', 'Bakım, ölçü ve sipariş sorularının yanıtları', 'Yapay zekâ yanıtları için net marka bilgisi'],
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        tur: 'web',
        baslik: 'Web sitesi: hikâyeden siparişe giden yol',
        metin: 'Alıcı ürünü kimin, nasıl yaptığını ve kaç adet olduğunu görmek ister. Site bunu anlatır, sonra sipariş ya da kayıt adımına götürür.',
        maddeler: ['Yapım sürecini ve adedi anlatan ürün sayfaları', 'Gün, saat ve kayıt adımıyla kurs sayfası', 'Sanatçı ve alıcı için ayrı giriş'],
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
    ],
  },

  yontem: {
    baslik: 'Butik markalar ve atölyelerle nasıl çalışıyoruz?',
    giris: 'Önce ürününüzü, alıcınızı ve siparişin bugün hangi yoldan geldiğini inceliyor, sonra kuruyor, ardından düzenli optimizasyonla sipariş ve kayıt hedefinize yaklaştırıyoruz.',
    adimlar: [
      { ad: 'İnceleme', ozet: 'Ürün, alıcı ve sipariş yolu', aciklama: 'Hangi ürünün ya da kursun kazandırdığını, alıcının sizi nerede gördüğünü ve siparişin mesajdan mı, siteden mi, pazaryerinden mi geldiğini çıkarıyoruz.' },
      { ad: 'Strateji', ozet: 'Ürün ve kurs için ayrı plan', aciklama: 'Ürün satışını ve kurs kaydını ayrı hedef olarak yazıyor; her biri için kanalı, sayfayı ve hediye dönemlerinin takvimini planlıyoruz.' },
      { ad: 'Kurulum', ozet: 'Kampanya, sayfa ve ilk yanıt', aciklama: 'Kampanyaları, ürün ve kurs sayfalarını, sipariş mesajına verilecek ilk yanıtı hazırlıyor; yayından önce telefonda deniyoruz.' },
      { ad: 'Optimizasyon', ozet: 'Düzenli takip ve görsel testi', aciklama: 'Gelen sipariş ve kayıtlara sizinle birlikte bakıyor; sipariş getiren görseli ve aramayı öne alıp getirmeyeni kapatıyoruz.' },
      { ad: 'Hedef', ozet: 'Sipariş ve kurs kaydı', aciklama: 'Başarıyı beğeni ve takipçi sayısıyla değil, tamamlanan siparişle ve dolan kurs kontenjanıyla değerlendiriyoruz.' },
    ],
  },

  referanslar: {
    baslik: 'Sanat ve zanaat alanında çalıştığımız markalar',
    giris: 'İki projede de site, ziyaretçinin tek bir sorusu etrafında kuruldu.',
    liste: [
      {
        kimlik: 'white-earth-atelier',
        not: 'Site, el işi bir ürünün zanaatıyla birlikte nasıl anlatılacağı sorusu etrafında kuruldu. Projede web tasarım, SEO ve GEO ile reklam yönetimi yer aldı.',
      },
      {
        kimlik: '1001-art',
        not: 'Sanatçı ile sanat alıcısı aynı siteye farklı amaçlarla geliyor; site, ikisinin kendi yolunu bulabilmesi sorusu etrafında kuruldu. Projede web tasarım, reklam yönetimi, SEO ve GEO yer aldı.',
      },
    ],
  },

  durumlar: {
    baslik: 'İlk kez mi reklam vereceksiniz, verip sipariş mi alamıyorsunuz?',
    giris: 'Başlangıç noktası iki durumda aynı değildir. Önce hangisinde olduğunuza bakıyoruz.',
    sol: {
      ust: 'Bugüne kadar takipçilerinize ve tanıdık çevrenize sattıysanız',
      baslik: 'İlk kampanyayı tek bir ürünle ya da kursla kuruyoruz',
      metin: 'Bütün koleksiyonu ve kursları birden tanıtmak bütçeyi dağıtır. İlk adımda en çok sorulan ürün grubunu ya da kontenjanı dolması gereken kursu seçip yalnız onun için reklam, sayfa ve sipariş yolu hazırlıyoruz.',
      maddeler: [
        { ad: 'Ürün mü, kurs mu?', aciklama: 'İkisinin alıcısı ve araması ayrıdır. İlk kampanya, gelir beklediğiniz yola göre tek bir hedefle kurulur.' },
        { ad: 'Alıcı neyi görünce sipariş verir?', aciklama: 'Ürünün yakın çekimi, yapan el, adet ve teslim süresi. Çekimi siz yaparsınız; hangi görselin sipariş getirdiğini reklamda biz deneriz.' },
        { ad: 'Siparişe kim, nasıl dönecek?', aciklama: 'Mesajlara bakacak kişi, süre ve adet sorusuna verilecek yanıt yayından önce belirlenir.' },
      ],
      cagri: 'İlk kampanyamı planlayalım',
      bag: { etiket: 'Instagram reklamı nasıl verilir?', url: '/blog/instagram-reklam-nasil-verilir/' },
      cizim: 'hedef',
    },
    sag: {
      ust: 'Reklam veriyor ama sipariş alamıyorsanız',
      baslik: 'Önce ilginin nerede kesildiğine bakıyoruz',
      metin: 'Yeni kampanya açmadan önce reklamın bugün ne için kurulduğunu, gelen mesajların neden siparişe dönmediğini ve sayfanın alıcıyı nerede bıraktığını görmemiz gerekir.',
      maddeler: [
        { ad: 'Kampanya hedefi', aciklama: 'Reklam beğeni ve izlenme için mi, sipariş mesajı ya da site ziyareti için mi kurulmuş, ona bakıyoruz.' },
        { ad: 'Görsel ve metin', aciklama: 'Beğeni toplayan görsel ile sipariş getiren görseli ayırıyor; adedi, süreyi ve sipariş yolunu söyleyen sürümleri deniyoruz.' },
        { ad: 'Gelen mesajlar', aciklama: 'Son mesajları sizinle okuyor, konuşmanın süre, adet ya da kargo sorusundan hangisinde bittiğini buluyoruz.' },
        { ad: 'Arama terimleri', aciklama: 'Google reklamı veriyorsanız malzeme ve yapı seramiği aramalarını ayıklıyor, kurs ile ürün aramalarını ayırıyoruz.' },
      ],
      cagri: 'Hesabıma birlikte bakalım',
    },
  },

  ornek: {
    baslik: '“Seramik” yazan kişi kupa mı arıyor, kurs mu, fayans mı?',
    metin: [
      'Aynı kelimenin içinden el yapımı kupa arayan da çıkar, kursa yazılmak isteyen de, banyosuna yer kaplaması bakan da. Bütçeyi sipariş ve kayıt getiren aramalara toplamak için her arama terimine ayrı bir karar yazılır.',
      'Tablo, hem ürün satan hem kurs veren bir seramik atölyesi için hazırlanmış temsili bir örnektir. Sizin hesabınızda aynı tabloyu kendi arama terimlerinizle kuruyoruz.',
    ],
    tabloBasligi: 'Seramik atölyesi için arama terimi kararları',
    sutunlar: ['Arama terimi', 'Karar', 'Gerekçe'],
    satirlar: [
      { ilk: 'hafta sonu seramik kursu', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Kursa yazılmak istiyor. Reklam günü, saati ve kontenjanı gösteren kayıt sayfasını açar.' },
      { ilk: 'el yapımı seramik kupa', sorgu: true, karar: 'Öne al', tur: 'evet', gerekce: 'Belirli bir ürün arıyor. Reklam kupa koleksiyonunu ve sipariş adımını gösteren sayfayı açar.' },
      { ilk: 'seramik atölyesi', sorgu: true, karar: 'İzle', tur: '', gerekce: 'Kurs mu, ürün mü istediği belli değil. Atölye sayfasına iner; hangi yola gittiğine göre karar verilir.' },
      { ilk: 'seramik çamuru nereden alınır', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Kendi üretiyor, malzeme arıyor. Kurs ve ürün kampanyalarında reklam gösterilmez.' },
      { ilk: 'banyo seramiği modelleri', sorgu: true, karar: 'Hariç tut', tur: 'hayir', gerekce: 'Yer ve duvar kaplaması arıyor. Negatif anahtar kelime olur.' },
    ],
    not: 'Terimler gerçek bir hesaptan alınmadı; kararın nasıl verildiğini gösterir.',
    cizim: 'yol-ayrimi',
  },

  sss: {
    baslik: 'Butik markalar ve atölyeler için dijital pazarlama hakkında sık sorulan sorular',
    giris: 'Reklam, web sitesi, kurs kaydı ve pazaryeri hakkında butik markalardan ve atölyelerden en çok duyduklarımız.',
    sorular: [
      {
        soru: 'Butik markalar için dijital pazarlama nedir?',
        cevap:
          'Butik markalar için dijital pazarlama; el yapımı ürünü, eseri ya da kursu Instagram’da, Google aramalarında ve web sitesinde alıcının önüne getirip bu ilgiyi siparişe ya da kayda götüren çalışmaların bütünüdür. Instagram ve Facebook reklamlarını, Google Ads’i, SEO’yu ve web sitesini kapsar.',
      },
      {
        soru: 'El yapımı ürün için Instagram reklamı mı, Google reklamı mı verilmeli?',
        cevap:
          'Ürün satışında çoğu zaman Instagram’la başlanır, çünkü el yapımı ürünü alan kişi onu aramaz, görünce ister. Kurs kaydı ve tekniği, boyutu söylenerek aranan ürünler için Google arama reklamı daha uygundur. Hangisiyle başlayacağınızı gelirinizin ürün satışından mı, kurstan mı geldiğine bakarak birlikte seçiyoruz.',
        bag: { etiket: 'Google Ads mi, Instagram reklamı mı?', url: '/blog/google-ads-mi-instagram-reklami-mi/' },
      },
      {
        soru: 'Seramik ya da resim kursu için reklam nasıl verilir?',
        cevap:
          'Kurs reklamı iki yerden verilir: “seramik kursu” ya da “resim kursu” yazan kişiye Google’da arama reklamı, atölyeye gelebilecek uzaklıkta yaşayanlara Instagram reklamı gösterilir. Reklamın açtığı sayfada gün, saat, kontenjan ve kayıt adımı bulunmalıdır. Kurs kampanyasını ürün kampanyasından ayrı kuruyoruz; ikisinin kitlesi de sözü de farklıdır.',
      },
      {
        soru: 'El yapımı ürün satan markanın web sitesi nasıl olmalı?',
        cevap:
          'Site ürünü, kimin nasıl yaptığını ve kaç adet üretildiğini göstermeli, her üründen sipariş adımına kolayca geçilmelidir. Kişiye özel üretim yapıyorsanız süre ve adet bilgisi ürünün yanında durmalıdır. Web tasarım hizmetimiz bu anlatımı ve yönlendirmeyi kapsar; sepet ve ödeme altyapısını kendi sağlayıcınız yürütür, biz sayfaları ona bağlarız.',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'İnternetten satış için pazaryeri mi, kendi site mi?',
        cevap:
          'İkisi birbirinin yerine geçmez; birlikte de kullanılabilir. Pazaryeri, orada ürün arayan alıcıya ulaştırır. Kendi siteniz ise markayı adıyla arayan kişiye hikâyeyi, yapım sürecini ve bütün koleksiyonu gösterir; reklamın açacağı sayfayı da siz belirlersiniz. Pazaryeri mağazanızı siz yönetirsiniz, biz siteyi ve reklamı kurarız.',
      },
      {
        soru: 'Tablo ve sanat eseri satan bir site Google’da nasıl bulunur?',
        cevap:
          'Tekniği, boyutu, konuyu ya da sanatçıyı söyleyen aramalarda bulunur; tek başına “tablo” gibi geniş aramalarda sonuçları büyük pazaryerleri ve mağazalar doldurur. Bu yüzden her eser ve koleksiyon için tekniğin, ölçünün ve sanatçının yazıldığı ayrı sayfalar hazırlanır. Galeri sitelerinde eserini göstermek isteyen sanatçı ile eser almak isteyen alıcıya ayrı giriş açılır.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Yılbaşı ve Anneler Günü reklamı ne zaman başlamalı?',
        cevap:
          'Reklam, son sipariş tarihinden geriye doğru planlanır. El yapımı ve kişiye özel üründe üretim ve kargo süresi olduğu için alıcının kararını özel günden önce vermesi gerekir. Bu yüzden görselleri, sayfayı ve son sipariş tarihini dönem başlamadan hazırlıyoruz.',
      },
      {
        soru: 'Reklam hesabı ve site kimin adına olur?',
        cevap:
          'Hepsi işletmenizin adına açılır ve sizde kalır. Reklam hesabı, Instagram hesabı, alan adı ve site sizindir; bize yönetici erişimi verirsiniz ve bu erişimi dilediğiniz zaman kaldırabilirsiniz. Pazaryeri mağazanızı ve ödeme altyapınızı siz yönetmeye devam edersiniz.',
      },
      {
        soru: 'Sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır. Sipariş sayısı, kurs kaydı ya da sıralama için söz vermiyoruz. Söz verdiğimiz şey ürününüzü, alıcınızı ve hesabınızı ayrıntılı incelemek, verdiğimiz kararları gerekçesiyle anlatmak ve düzenli optimizasyon yapmaktır.',
      },
    ],
  },

  ilgili: {
    blog: ['instagram-reklam-nasil-verilir', 'instagram-reklam-mesajlari-satisa-donusmuyor'],
    sektorler: ['restoran-ve-kafe', 'uretim-ve-ihracat'],
  },
};

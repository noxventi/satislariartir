/**
 * Kadıköy web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "kadıköy web tasarım" (260), "kadıköy reklam ajansı" (70). Pano İstanbul geneli web tasarım ifadeleriyle
 * tamamlandı. Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * İlçede ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: Çarşı, Moda, Yeldeğirmeni atölyeleri, Bağdat Caddesi boyunca Caddebostan
 * ve Suadiye, yaya trafiği. Örnek işletmeler temsilidir. Sağlık ve hukuk için yalnız web sitesi ve SEO anlatılır.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'kadikoy-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Kadıköy',
  yerDe: 'Kadıköy’de',
  hizmet: 'web',
  baslik: 'Kadıköy web tasarım',
  metaBaslik: 'Kadıköy Web Tasarım: İstanbul',
  metaAciklama:
    'Kadıköy’deki kafe, restoran, atölye, muayenehane ve bürolar için web tasarım: haritadan gelen müşteriye telefonda hızlı cevap veren siteler. Uzaktan çalışıyoruz.',
  ozet: 'Çarşı’daki restorandan Bağdat Caddesi’ndeki muayenehaneye, Kadıköy’de sokaktan ve haritadan gelen müşteriye göre kurulan web siteleri.',
  tanim: [
    'Kadıköy’deki işletmeler için web tasarım, sokaktan ya da haritadan gelen müşterinin menüyü, hizmeti ve randevu yolunu telefonunda hemen bulduğu bir web sitesini planlama, tasarlama ve yayına alma işidir.',
    'Kadıköy yaya trafiğiyle çalışan bir ilçe. Çarşı’da yemek yiyecek yer arayan, Moda’da kahve içecek, Yeldeğirmeni’nde atölye gezecek kişi kararını çoğu zaman birkaç sokak ötedeyken, telefonundaki haritaya bakarak veriyor. Bağdat Caddesi boyunca Caddebostan’dan Suadiye’ye uzanan muayenehanelerde ve bürolarda ise müşteri hekimi ya da büroyu adıyla arıyor. Önce sizin hangi durumda olduğunuzu inceliyor, siteyi o müşterinin telefonda aradığı bilgiye göre kuruyoruz; çalışmayı uzaktan, sizinle telefonda ve görüntülü konuşarak yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Kadıköy’de web tasarım için ne aranıyor?',
    giris: 'Kadıköy adı hem web tasarım hem reklam ajansı aramalarında ölçülebilir bir hacimle geçiyor.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'kadıköy web tasarım', hacim: 260 },
      { ifade: 'istanbul web tasarım ajansı', hacim: 210 },
      { ifade: 'istanbul web tasarım firmaları', hacim: 90 },
      { ifade: 'kadıköy reklam ajansı', hacim: 70 },
    ],
    yorum: [
      '“Kadıköy web tasarım” ayda yaklaşık 260, “kadıköy reklam ajansı” yaklaşık 70 kez aranıyor. İkinci aramada niyet karışık: tabela, baskı ya da sosyal medya hesap yönetimi arayanlar da aynı ifadeyi yazıyor. Bunlar bizim işimiz değil; reklamda yalnız Google ile Instagram ve Facebook reklamlarını yönetiyoruz, bu sayfanın konusu ise web sitesi.',
      'Bu değerler ifadelerin Türkiye genelinde kaç kez yazıldığını gösterir; arayanın Kadıköy’de olup olmadığını bu ölçümden bilemiyoruz. Kendi siteniz için bakacağımız liste başkadır. Kadıköy’de bir kahveciyi ya da hekimi arayan kişinin ilçe yerine Moda, Yeldeğirmeni ya da Caddebostan yazması olağandır; bu aramaları proje başında sizin işiniz için ayrıca ölçüyoruz.',
    ],
  },

  yerel: {
    baslik: 'Kadıköy’de web sitesinin işe yaradığı üç durum',
    giris: 'Moda’da kafe, Yeldeğirmeni’nde atölye, Bağdat Caddesi’nde muayenehane: üçünde de müşteri telefonuna bakıyor, aradığı bilgi farklı.',
    kartlar: [
      {
        soru: 'Haritada görünüyoruz, web sitesine ne gerek var?',
        ornek:
          'Moda’da bir kahvaltı salonu haritada çıkıyor, ama profildeki bağlantı aylardır güncellenmeyen bir menü dosyasına gidiyor. Birkaç sokak ötede yer arayan kişi dosyayı telefonunda açamıyor, hafta sonu rezervasyon alınıp alınmadığını da öğrenemiyor.',
        care: 'Menüyü telefonda okunan bir sayfaya taşıyor, rezervasyon ve yol tarifi düğmelerini ilk ekrana koyuyoruz.',
        cizim: 'harita',
        bag: { etiket: 'Restoran ve kafe', url: '/sektorler/restoran-ve-kafe/' },
      },
      {
        soru: 'Kayıtları mesajla alıyoruz, web sitesi gerekir mi?',
        ornek:
          'Yeldeğirmeni’nde bir seramik atölyesi hafta sonu derslerini Instagram’da duyuruyor, kayıtları tek tek mesajla alıyor. Tarihi ve kontenjanı soran herkese aynı cevabı yazmak saatler sürüyor; cevap geciktiğinde ilgilenen kişi başka atölyeye yazılıyor.',
        care: 'Ders takvimini ve kayıt formunu siteye koyuyor, Instagram profilindeki bağlantıyı bu sayfaya veriyoruz.',
        cizim: 'mesaj',
        bag: { etiket: 'Butik markalar', url: '/sektorler/butik-markalar/' },
      },
      {
        soru: 'Hasta adımızı arayınca karşısına ne çıkıyor?',
        ornek:
          'Caddebostan’da muayenehanesi olan bir hekimi hastası adıyla arıyor. İlk sonuçlarda randevu sitelerindeki eski kayıtlar çıkıyor; birinde önceki adres, diğerinde artık kullanılmayan bir telefon numarası yazıyor.',
        care: 'Uzmanlığı, güncel adresi ve randevu yolunu veren sade bir site kuruyor, metni sağlık tanıtım kurallarına göre yazıyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'Doktorlar ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
    ],
  },

  isler: {
    baslik: 'Kadıköy’deki işletmeniz için neler yapıyoruz?',
    giris: 'Yaya trafiğiyle çalışan işletmede sitenin görevi, haritadan gelen kişiye birkaç saniyede cevap vermektir. Bunun için yaptığımız dört iş:',
    liste: [
      { ad: 'Menü, hizmet ve takvim sayfaları', aciklama: 'Menüyü, hizmet listesini ya da atölye takvimini indirilen bir dosya yerine telefonda okunan sayfalar olarak kuruyoruz. İçerik değiştiğinde sayfayı kendi ekibiniz günceller.' },
      { ad: 'Haritadan gelene ilk ekran', aciklama: 'Profilinizdeki bağlantıya dokunan kişi açık olup olmadığınızı, yol tarifini ve rezervasyon ya da randevu yolunu sayfayı kaydırmadan görür.' },
      { ad: 'Semt ve ilçe adının yeri', aciklama: 'Başlıkta işletmenizin bulunduğu semti, adres satırında Kadıköy’ü yazıyoruz. Şubeniz olmayan semtlerin adını sayfalara eklemiyoruz.' },
      { ad: 'Google İşletme Profili ile uyum', aciklama: 'Profildeki ad tabeladaki adla, adres ve çalışma saatleri siteyle aynı olur. Bayram ve tatil günlerindeki saat değişikliğini profilde nasıl yapacağınızı gösteriyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Kadıköy’de web tasarım hakkında sık sorulan sorular',
    giris: 'Kafe ve restoran siteleri, semt adının kullanımı, sağlık ve hukuktaki sınırlar ve çalışma biçimimiz üzerine cevaplar.',
    sorular: [
      {
        soru: 'Kadıköy’deki bir kafe ya da restoran için web sitesi gerekli mi?',
        cevap:
          'Haritadaki profiliniz dolu ve güncelse site zorunlu değildir; ama menüyü, rezervasyonu ve duyuruları kendi denetiminizde tutmanın yolu sitedir. Profildeki bağlantı bir sosyal medya hesabına ya da telefonda açılmayan bir dosyaya gidiyorsa ziyaretçi aradığını bulamaz. Hızlı açılan birkaç sayfa çoğu mekâna yeter.',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Web sitemde Kadıköy mü yazmalı, Moda ya da Caddebostan mı?',
        cevap:
          'İkisi de yazılır: semt adı sayfa başlığında, Kadıköy adres satırında durur. Müşteriniz sizi semt adıyla arıyorsa başlıkta semt öne geçer. Google İşletme Profili’ndeki işletme adına ise semt de ilçe de eklenmez; ad tabeladaki gibi kalır.',
      },
      {
        soru: 'Kadıköy’de muayenehane ya da hukuk bürosu için reklam yönetiyor musunuz?',
        cevap:
          'Hayır; hekimler ve avukatlar için reklam kampanyası önermiyoruz, çünkü iki meslekte de tanıtım kurallarla sınırlı. Bu alanlarda yaptığımız iş web sitesi ve SEO’dur. Sitede uzmanlık alanı, iletişim ve çalışma saatleri gibi kuralların izin verdiği bilgilere yer veriyor, her metni yayından önce onayınıza sunuyoruz.',
        bag: { etiket: 'Hukuk büroları', url: '/sektorler/hukuk-burolari/' },
      },
      {
        soru: 'Kadıköy’e gelip görüşme yapıyor musunuz?',
        cevap:
          'Hayır, görüşmeleri telefonla ya da görüntülü yapıyoruz; çalışmanın tamamı uzaktan ilerliyor. Mekânınızı tanımak için fotoğraflarınıza, haritadaki profilinize ve müşteri yorumlarına bakıyor, eksik kalanı size soruyoruz. Taslağı işletmenizin içinde, kendi telefonunuzda denemenizi istiyoruz.',
      },
      {
        soru: 'Web sitesi için sonuç garantisi veriyor musunuz?',
        cevap:
          'Hayır, vermiyoruz; ziyaret, sıralama ya da rezervasyon sayısı için söz verilemez. Üstlendiğimiz iş işletmenizi ve müşterinizin aramalarını ayrıntılı incelemek, her sayfayı bir gerekçeyle kurmak ve yayından sonra hangi sayfanın talep getirdiğine bakıp getirmeyeni düzeltmektir.',
      },
    ],
  },
};

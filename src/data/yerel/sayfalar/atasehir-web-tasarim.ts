/**
 * Ataşehir web tasarım (İstanbul, ilçe sayfası).
 * Ana niyet: "ataşehir web tasarım" (260), "ataşehir reklam ajansı" (50). Pano İstanbul geneli web tasarım ifadeleriyle
 * ve "anadolu yakası web tasarım" (10) ile tamamlandı. Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * İlçede ofis olduğu yazılmaz; işin uzaktan yürütüldüğü söylenir.
 * Yerel bilgiler herkesçe bilinen olgulardır: finans merkezi, Batı Ataşehir plazaları ve rezidansları, Ataşehir Bulvarı,
 * İçerenköy ve Küçükbakkalköy. Örnek işletmeler temsilidir. Sağlık için yalnız web sitesi ve SEO anlatılır.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'atasehir-web-tasarim',
  sehir: 'istanbul',
  ilce: 'Ataşehir',
  yerDe: 'Ataşehir’de',
  hizmet: 'web',
  baslik: 'Ataşehir web tasarım',
  metaBaslik: 'Ataşehir Web Tasarım: İstanbul',
  metaAciklama:
    'Ataşehir’deki danışmanlık firmaları, klinikler ve mimarlık ofisleri için kurumsal web tasarım: hizmet sayfaları, iki dilli yapı ve teslim. Çalışmayı uzaktan yürütüyoruz.',
  ozet: 'Plazadaki danışmanlık firmasından rezidans çevresindeki kliniğe, Ataşehir’de satın almacının da mahalle sakininin de aradığını bulduğu web siteleri.',
  tanim: [
    'Ataşehir’deki işletmeler için web tasarım, firmayı toplantıdan önce araştıran kurumsal müşterinin de çevredeki rezidanslarda oturan kişinin de aradığı bilgiyi bulduğu bir web sitesinin planlanması, yazılması ve yayına alınması işidir.',
    'Ataşehir’de iki iş dokusu yan yana duruyor. Finans merkezi ve Batı Ataşehir’deki plazalarda bankalara, sigorta şirketlerine ve büyük firmalara hizmet veren danışmanlık, denetim ve teknoloji firmaları çalışıyor; bu firmaların müşterisi siteye karar öncesinde, firmayı tartmak için giriyor. Rezidansların, İçerenköy’ün ve Küçükbakkalköy’ün çevresindeki klinikler, stüdyolar ve mimarlık ofisleri ise yakında oturan kişiye hizmet veriyor. Sayfa planı hangi tarafta olduğunuza göre değişiyor; işe bunu inceleyerek başlıyoruz. Toplantıları görüntülü ya da telefonla yapıyor, projeyi baştan sona uzaktan yürütüyoruz.',
  ],
  cagri: 'Web projemi görüşelim',

  aramalar: {
    baslik: 'Ataşehir’de web tasarım için ne aranıyor?',
    giris: 'Ataşehir adıyla yapılan web tasarım araması, ölçtüğümüz Kadıköy ve Ümraniye aramalarıyla aynı düzeyde.',
    liste: [
      { ifade: 'istanbul web tasarım', hacim: 1000 },
      { ifade: 'web tasarım istanbul', hacim: 320 },
      { ifade: 'ataşehir web tasarım', hacim: 260 },
      { ifade: 'istanbul web tasarım ajansı', hacim: 210 },
      { ifade: 'istanbul web tasarım firmaları', hacim: 90 },
      { ifade: 'ataşehir reklam ajansı', hacim: 50 },
      { ifade: 'anadolu yakası web tasarım', hacim: 10 },
    ],
    yorum: [
      '“Ataşehir web tasarım” ayda yaklaşık 260 kez yazılıyor. “İstanbul web tasarım firmaları” gibi çoğul aramalar kişinin karşılaştıracağı birkaç seçenek aradığını gösteriyor; böyle bir karşılaştırmada bu sayfanın altındaki yayında olan siteleri açıp kendi telefonunuzda denemenizi öneririz. “Ataşehir reklam ajansı” aramasını tabela ve baskı işi arayanlar da yazıyor. Biz o işleri yapmıyor, dijital tarafta Google ile Instagram ve Facebook reklamlarını yönetiyoruz.',
      'Ölçüm Türkiye geneli içindir; aramayı yapanların ne kadarının Ataşehir’de olduğu bu veride yok. Başka firmalara hizmet veren bir işletmede müşterinin araması çoğu zaman ilçe adı taşımaz, hizmetin adını taşır. Bu yüzden sayfa planını kurarken önce hizmetleriniz için yazılan ifadelere, sonra konuma bakıyoruz.',
    ],
  },

  yerel: {
    baslik: 'Ataşehir’de web sitesi kurarken karşılaşılan üç durum',
    giris: 'Plazadaki firmanın, kliniğin ve iç mimarlık ofisinin sitesine gelen kişi başka başka sorularla geliyor.',
    kartlar: [
      {
        soru: 'Teklif verdiğimiz firma sitemizde neye bakıyor?',
        ornek:
          'Batı Ataşehir’de bir plazada çalışan, bankalara ve sigorta şirketlerine eğitim ve danışmanlık veren bir firma teklif gönderiyor. Teklifi değerlendiren satın alma ekibi siteyi açıyor; hizmetler tek paragrafta geçiyor, hangi konuda nasıl çalışıldığı anlaşılmıyor.',
        care: 'Her hizmete kapsamı ve çalışma biçimini anlatan ayrı bir sayfa açıyor, teklif formunu o sayfanın içine yerleştiriyoruz.',
        cizim: 'liste',
        bag: { etiket: 'Kurumsal web tasarım', url: '/hizmetler/web-tasarim/' },
      },
      {
        soru: 'Kliniğin sitesinde her tedavi ayrı mı anlatılmalı?',
        ornek:
          'Ataşehir Bulvarı yakınında birkaç hekimin çalıştığı bir diş kliniği bütün tedavileri tek sayfada sıralamış. Çocuğu için hekim arayan ebeveyn de implant hakkında bilgi arayan kişi de aynı uzun sayfada kendi konusunu bulmaya çalışıyor.',
        care: 'Her tedavi alanına ve hekime ayrı sayfa açıyor, metinleri bilgilendirme sınırında tutup hekimlere onaylatıyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Doktorlar ve klinikler', url: '/sektorler/saglik-ve-klinikler/' },
      },
      {
        soru: 'Dairesini yenileyecek kişi iç mimarı nasıl seçiyor?',
        ornek:
          'İçerenköy’de bir iç mimarlık ofisi tamamladığı işleri yalnız sosyal medyada paylaşıyor. Rezidans dairesini yeniletecek kişi “ataşehir iç mimar” diye arıyor; işin kapsamını ve sürecin nasıl ilerlediğini anlatan bir proje sayfası bulamıyor.',
        care: 'Tamamlanan her işi fotoğrafı, kapsamı ve süreciyle ayrı bir proje sayfasına taşıyor, keşif talebi formunu ekliyoruz.',
        cizim: 'taslak',
        bag: { etiket: 'İç mimarlık ofisleri', url: '/sektorler/ic-mimarlik-ve-dekorasyon/' },
      },
    ],
  },

  isler: {
    baslik: 'Ataşehir’deki işletmeniz için neler yapıyoruz?',
    giris: 'Kurumsal müşteriye çalışan firmada da mahalleye hizmet veren klinikte de aşağıdaki dört iş sitenin temelini oluşturuyor.',
    liste: [
      { ad: 'Hizmet ve firma sayfaları', aciklama: 'Her hizmeti kapsamı, çalışma biçimi ve ilgili sektörleriyle kendi sayfasında anlatıyoruz. Satın alma ekibinin aradığı firma bilgilerini tek bir kurumsal sayfada topluyoruz.' },
      { ad: 'Türkçe ve İngilizce yapı', aciklama: 'Yurt dışındaki bir yöneticinin de okuyacağı sayfaları iki dilde, ayrı adreslerle kuruyoruz. İngilizce metni kimin hazırlayacağını teklifte ayrıca yazıyoruz.' },
      { ad: 'Plaza adresi ve harita profili', aciklama: 'Adresi sitede ve Google İşletme Profili’nde aynı biçimde, plaza adı ve katıyla yazıyoruz. Ataşehir adını başlıkta bir kez kullanıyor, hizmet vermediğiniz ilçeleri sayfalara eklemiyoruz.' },
      { ad: 'Onay süreci ve teslim', aciklama: 'Metinleri hukuk ya da kurumsal iletişim biriminizin onaylayabileceği biçimde, sayfa sayfa gönderiyoruz. Yayın günü yönetim panelini ekibinize devrediyoruz.' },
    ],
    bag: { etiket: 'Kurumsal web tasarım hizmeti', url: '/hizmetler/web-tasarim/' },
  },

  sss: {
    baslik: 'Ataşehir’de web tasarım hakkında sık sorulan sorular',
    giris: 'İngilizce sayfalar, plaza adresi, site yenileme ve erişimler üzerine cevaplar.',
    sorular: [
      {
        soru: 'Ataşehir’deki bir danışmanlık firmasının sitesinde İngilizce sayfa gerekir mi?',
        cevap:
          'Müşterileriniz arasında yabancı ortaklı ya da genel merkezi yurt dışında olan firmalar varsa gerekir. Teklifi değerlendiren yönetici Türkçe okumuyorsa hizmetlerinizi ve firma bilgilerinizi kendi dilinde görmek ister. İngilizce sayfaları Türkçe sayfalarla aynı içerikte ve ayrı adreslerde kuruyoruz; müşteriniz yalnız Türkiye’deyse bu işi plana almıyoruz.',
      },
      {
        soru: 'Ataşehir’de plazada çalışan bir firma Google İşletme Profili açmalı mı?',
        cevap:
          'Çalışma saatlerinde ekibinizin bulunduğu ve müşteri kabul ettiğiniz bir büronuz varsa açmalısınız. Yalnız posta adresi olarak kullanılan sanal ofisler için profil açılmaz; Google bu adresleri kabul etmiyor. Profil açtıysanız plaza adını, katı ve telefon numarasını sitenizdekiyle aynı yazın.',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Ataşehir’e toplantıya gelmeden proje nasıl ilerliyor?',
        cevap:
          'Proje baştan sona çevrim içi ilerliyor; toplantıları görüntülü ya da telefonla yapıyoruz. Sayfa planını, metinleri ve tasarım taslaklarını bağlantıyla paylaşıyor, onay verecek birimlerin görüşünü tek bir belgede topluyoruz. Kimin neyi onaylayacağını ilk görüşmede birlikte belirliyoruz.',
      },
      {
        soru: 'Kurumsal sitemizi yenilersek Google’daki sıralamamız korunur mu?',
        cevap:
          'Korunacağına söz veremeyiz; yaptığımız iş, sıralama kaybının bilinen nedeni olan karşılıksız kalmış eski adresleri önlemektir. Yayından önce her eski adresi yeni sayfasıyla eşleştiriyor, yönlendirmeleri yayından sonra tek tek deniyoruz. Uzun süredir yayında olan kurumsal sitelerde bu liste uzun olur; bu yüzden eşleştirmeye tasarımla aynı anda başlıyoruz.',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Site, alan adı ve erişimler kimde kalır?',
        cevap:
          'Alan adı, barındırma ve yönetim paneli firmanızın hesaplarında kalır; biz bu hesaplara yetkili kullanıcı olarak ekleniriz. Bilgi işlem biriminiz varsa erişimleri onlarla birlikte kuruyoruz. İş bittiğinde ya da dilediğiniz zaman yetkimizi kaldırabilirsiniz.',
      },
    ],
  },
};

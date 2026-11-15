/**
 * Proje kayıtları.
 *
 * İki ayrı kaynaktan iki ayrı bilgi tutulur ve ön yüzde ayrı gösterilir:
 * 1) obrandyKapsami: Obrandy referans sayfasında proje bazında görülen iş (kaynak kontrolü: 14 Kasım 2026).
 * 2) reklamYonetimi: Google Ads ve Meta yönetiminin güncel olarak sürdüğüne dair işletme sahibi beyanı.
 *    Sağlık ve hukuk alanındaki markalarda aktif reklam referansı gösterilmez.
 *
 * Projeler ekibin Obrandy bünyesinde yürüttüğü işlerdir; Satışları Artır imzası atılmaz.
 * Ölçülmüş sonuç, müşteri onayı gelene kadar hiçbir kayıtta yer almaz.
 */

export type Kapsam = 'Web sitesi tasarımı' | 'SEO' | 'SEO ve GEO' | 'Dijital reklam yönetimi' | 'Sosyal medya yönetimi' | 'CRM yapısı';

export interface Proje {
  kimlik: string;
  marka: string;
  /** Marka adından farklıysa kamuya açık site adı. */
  siteAdi?: string;
  alanAdi: string;
  sektor: string;
  obrandyKapsami: Kapsam[];
  /** beyan: güncel Google Ads ve Meta yönetimi (işletme sahibi beyanı). gosterilmez: sağlık ya da netleşmemiş durum. */
  reklamYonetimi: 'beyan' | 'gosterilmez';
  /** Bu sitede projenin anlatıldığı işletme kararı. Obrandy'deki portföy metninden farklı bir okuma. */
  karar: string;
  /** Ayrıntılı proje sayfası varsa yolu. */
  dosya?: string;
  /** Site tasarımı ekibe ait değilse not. */
  tasarimNotu?: string;
  oncelik?: boolean;
}

export const OBRANDY_KAYNAK = 'https://obrandy.com/referanslar/';
export const KAYNAK_KONTROL_TARIHI = '14 Kasım 2026';

export const PROJELER: Proje[] = [
  {
    kimlik: 'celikvillam',
    marka: 'Rotech Mühendislik',
    siteAdi: 'ÇelikVillam',
    alanAdi: 'celikvillam.com',
    sektor: 'Yapı ve mühendislik',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO', 'Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Model araştıran ziyaretçi ile arsası hazır olup teklif isteyen ziyaretçi hangi sayfaya gider?',
    dosya: '/calismalarimiz/celikvillam/',
    oncelik: true,
  },
  {
    kimlik: 'hun-education',
    marka: 'Hun Education',
    alanAdi: 'huneducation.com',
    sektor: 'Eğitim',
    obrandyKapsami: ['Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Macaristan’da program arayan aday, reklamdan başvuru adımına nasıl ulaşır?',
    dosya: '/calismalarimiz/hun-education/',
    tasarimNotu: 'Web sitesi ekibimizin tasarımı değildir. Reklam kampanyalarının yönlendirildiği sitedir.',
    oncelik: true,
  },
  {
    kimlik: 'burger-engineer',
    marka: 'Burger Engineer',
    alanAdi: 'burgerengineer.com.tr',
    sektor: 'Yeme-içme',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO', 'Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Yakındaki biri menüye bakıp siparişe nasıl geçer?',
  },
  {
    kimlik: 'rotech-defense',
    marka: 'Rotech Defense',
    alanAdi: 'gabionmaterials.com',
    sektor: 'Üretim ve ihracat',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO', 'Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Teknik ürün arayan yurt dışındaki alıcı teklif isteğini nasıl iletir?',
  },
  {
    kimlik: '1001-art',
    marka: '1001 Art',
    alanAdi: '1001art.org',
    sektor: 'Sanat ve zanaat',
    obrandyKapsami: ['Web sitesi tasarımı', 'Dijital reklam yönetimi', 'SEO ve GEO'],
    reklamYonetimi: 'beyan',
    karar: 'Sanatçı ile sanat alıcısı aynı sitede kendi yolunu nasıl bulur?',
  },
  {
    kimlik: 'rotech-danismanlik',
    marka: 'Rotech Danışmanlık',
    alanAdi: 'rotechdanismanlik.com',
    sektor: 'Personel hizmetleri',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO', 'Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Personel hizmeti isteyen firma ile iş arayan aday birbirinden nasıl ayrılır?',
  },
  {
    kimlik: 'estika',
    marka: 'Estika',
    alanAdi: 'estika.com.tr',
    sektor: 'Üretim ve ihracat',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO', 'Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Üretim alanlarını inceleyen ziyaretçi talebini nereye bırakır?',
  },
  {
    kimlik: 'white-earth-atelier',
    marka: 'White Earth Atelier',
    alanAdi: 'whiteearthatelier.com',
    sektor: 'Sanat ve zanaat',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO', 'Dijital reklam yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'El işi bir ürün, sitede zanaatıyla birlikte nasıl anlatılır?',
  },
  {
    kimlik: 'bodrum-olive-house',
    marka: 'Bodrum Olive House',
    alanAdi: 'bodrumolivehouse.com',
    sektor: 'Üretim ve ihracat',
    obrandyKapsami: ['Web sitesi tasarımı'],
    reklamYonetimi: 'beyan',
    karar: 'İhracatçı bir marka, farklı dillerdeki alıcıya aynı kurumsal bilgiyi nasıl sunar?',
  },
  {
    kimlik: 'tarum-havuz',
    marka: 'Tarum Havuz',
    alanAdi: 'tarumhavuz.com',
    sektor: 'Yapı ve mühendislik',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO', 'Sosyal medya yönetimi'],
    reklamYonetimi: 'beyan',
    karar: 'Havuz yaptırmak isteyenle havuzunu yenilemek isteyen hangi sayfayı görür?',
  },
  {
    kimlik: 'esvia',
    marka: 'EsVia Suit Apart',
    alanAdi: 'esvia.com.tr',
    sektor: 'Konaklama',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO'],
    reklamYonetimi: 'beyan',
    karar: 'Öğrenci ve ailesi konaklama talebini nasıl iletir?',
  },
  {
    kimlik: 'yurt-disi-egitim-rehberim',
    marka: 'Yurt Dışı Eğitim Rehberim',
    alanAdi: 'yurtdisiegitimrehberim.com',
    sektor: 'Eğitim',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO'],
    reklamYonetimi: 'beyan',
    karar: 'Ülke ve program araştıran okur, içerikten danışmanlığa nasıl geçer?',
  },
  {
    kimlik: 'eduregist',
    marka: 'EduRegist',
    alanAdi: 'eduregist.com',
    sektor: 'Eğitim',
    obrandyKapsami: ['Web sitesi tasarımı', 'CRM yapısı'],
    reklamYonetimi: 'beyan',
    karar: 'Bir CRM ürünü, tanıtım sitesinde eğitim danışmanlıklarına nasıl anlatılır?',
  },
  {
    kimlik: 'ilk-gunebakan',
    marka: 'İlk Günebakan Özel Eğitim ve Rehabilitasyon Merkezi',
    alanAdi: 'ilkgunebakan.com',
    sektor: 'Eğitim',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO'],
    reklamYonetimi: 'gosterilmez',
    karar: 'Özel eğitim arayan aile, kurumun hizmetlerini sitede nasıl bulur?',
  },
  {
    kimlik: 'suha-akyildiz',
    marka: 'Av. Suha Akyıldız',
    alanAdi: 'suha.av.tr',
    sektor: 'Hukuk',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO'],
    // Avukatlıkta reklam yasağı vardır (Avukatlık Kanunu m. 55): bu kayıt reklam müşterisi olarak gösterilmez.
    reklamYonetimi: 'gosterilmez',
    karar: 'Hukuki bir soruyla gelen ziyaretçi ilgili çalışma alanına nasıl ulaşır?',
  },
  {
    kimlik: 'pinar-tasdemir',
    marka: 'Doç. Dr. Pınar Taşdemir',
    alanAdi: 'kayseridermatolog.com',
    sektor: 'Sağlık',
    obrandyKapsami: ['Web sitesi tasarımı', 'SEO ve GEO'],
    reklamYonetimi: 'gosterilmez',
    karar: 'Hekimin çalışma alanları arama sonuçlarında ve yapay zekâ yanıtlarında nasıl yer alır?',
  },
  {
    kimlik: 'emre-apaydin',
    marka: 'Dr. Emre Apaydın',
    alanAdi: 'emreapaydin.com',
    sektor: 'Sağlık',
    obrandyKapsami: ['SEO ve GEO'],
    reklamYonetimi: 'gosterilmez',
    karar: 'Hekimin uzmanlık bilgisi arama sonuçlarında nasıl yer alır?',
  },
  {
    kimlik: 'belda-yurtseven-tuner',
    marka: 'Uzm. Dr. Belda Yurtseven Tüner',
    alanAdi: 'drbeldayurtseventuner.com',
    sektor: 'Sağlık',
    obrandyKapsami: ['SEO ve GEO'],
    reklamYonetimi: 'gosterilmez',
    karar: 'Hasta, aradığı uzmanlık alanını hekimin sitesinde nasıl bulur?',
  },
];

export const projeBul = (kimlik: string) => PROJELER.find((p) => p.kimlik === kimlik)!;

/** Kaynağında gerçekten yer alan, atfı ve bağlamıyla doğrulanmış müşteri sözleri. */
export const MUSTERI_SOZLERI = {
  'hun-education': {
    soz: 'Düzenli iletişim ve yapılan çalışmaların açık şekilde aktarılması süreci bizim için çok daha kolay hâle getirdi.',
    kisi: 'Ejder Bey',
    kurum: 'Hun Education',
    baglam: 'Reklam yönetimi çalışmamız üzerine.',
  },
} as const;

/** İç kayıt: sözlerin alındığı yer. Ön yüzde gösterilmez. */
export const MUSTERI_SOZU_KAYITLARI = {
  'hun-education': 'https://obrandy.com/referanslar/#yorum-hun-education',
} as const;

/**
 * Ana sayfadaki müşteri yorumları. Her söz, müşterinin kaynağındaki yorumundan KELİMESİ KELİMESİNE alınmış
 * bir ya da art arda iki cümledir (kaynak: OBRANDY_KAYNAK sayfasındaki "yorum-..." kayıtları, kontrol 15 Kasım 2026).
 * Cümle eklenmez, değiştirilmez, birleştirilmez. Sağlık alanındaki markalarda reklamdan söz eden cümle alınmaz.
 * Yorumlar ilk olarak ekibin önceki markası için yazıldı; burada kullanım için müşterilerden onay alınmalıdır (TESLIM.md).
 */
export const MUSTERI_YORUMLARI = [
  {
    kimlik: 'tarum-havuz',
    soz: 'İletişimi açık, süreci planlı ve ihtiyaçlarımıza karşı oldukça ilgiliydi. Dijital görünümümüzün işimizin kalitesini daha doğru yansıttığını düşünüyoruz.',
    kisi: 'Lütfi Bey',
    kurum: 'Tarum Havuz',
    is: 'Web tasarım, SEO ve sosyal medya',
  },
  {
    kimlik: 'hun-education',
    soz: 'Düzenli iletişim ve yapılan çalışmaların açık şekilde aktarılması süreci bizim için çok daha kolay hâle getirdi.',
    kisi: 'Ejder Bey',
    kurum: 'Hun Education',
    is: 'Reklam yönetimi',
  },
  {
    kimlik: 'bodrum-olive-house',
    soz: 'Ürünlerimizin, hikâyemizin ve ihracat vizyonumuzun daha güçlü anlatıldığı, kullanımı kolay ve çok daha profesyonel bir site ortaya çıktı. Süreç boyunca ihtiyaçlarımız dikkatle dinlendi ve her detay özenle ele alındı.',
    kisi: 'Cemile Hanım',
    kurum: 'Bodrum Olive House',
    is: 'Web tasarım',
  },
  {
    kimlik: 'white-earth-atelier',
    soz: 'Arama motorları ve yapay zekâ destekli platformlardaki görünürlüğümüzü artırmaya yönelik kapsamlı çalışmalar yürütürken reklam kampanyalarımızı da hedef odaklı ve profesyonel bir yaklaşımla yönettiler. Süreç boyunca hızlı iletişimleri, titiz çalışmaları ve çözüm odaklı desteklerinden oldukça memnun kaldık.',
    kisi: 'Bahri Bey',
    kurum: 'White Earth Atelier',
    is: 'Web tasarım, SEO ve GEO, reklam yönetimi',
  },
  {
    kimlik: '1001-art',
    soz: 'Süreç boyunca hem teknik hem de pazarlama tarafında güven veren bir destek aldık.',
    kisi: 'Kemal Bey',
    kurum: '1001 Art',
    is: 'Web tasarım, reklam yönetimi, SEO ve GEO',
  },
  {
    kimlik: 'yurt-disi-egitim-rehberim',
    soz: 'Ortaya çıkan site, danışmanlık hizmetimizi çok daha net anlatıyor ve ziyaretçilerin aradıkları bilgiye kolayca ulaşmasını sağlıyor.',
    kisi: 'Enver Bey',
    kurum: 'Yurt Dışı Eğitim Rehberim',
    is: 'Web tasarım ve SEO',
  },
  {
    kimlik: 'ilk-gunebakan',
    soz: 'Markamızı ve hizmetlerimizi doğru anlayarak hem profesyonel hem de kullanıcı dostu bir web sitesi hazırladılar. Arama motorlarında ve yapay zekâ destekli aramalarda görünürlüğümüzü artırmaya yönelik tüm detayları titizlikle ele aldılar.',
    kisi: 'Emek Hanım',
    kurum: 'İlk Günebakan Özel Eğitim ve Rehabilitasyon Merkezi',
    is: 'Web tasarım, SEO ve GEO',
  },
  {
    kimlik: 'belda-yurtseven-tuner',
    soz: 'Süreç boyunca hem profesyonel hem de ihtiyaçlarıma özel bir çalışma yürüttüler. Sitemin arama motorlarında daha görünür hâle gelmesinin yanı sıra, içeriklerimin yapay zekâ destekli aramalarda doğru ve güvenilir şekilde öne çıkmasına yönelik önemli geliştirmeler yaptılar.',
    kisi: 'Belda Hanım',
    kurum: 'Uzm. Dr. Belda Yurtseven Tüner',
    is: 'SEO ve GEO',
  },
  {
    kimlik: 'emre-apaydin',
    soz: 'Arama motorlarında ve yapay zekâ destekli platformlarda daha görünür olmamıza yönelik stratejik ve titiz bir çalışma yürüttüler.',
    kisi: 'Emre Bey',
    kurum: 'Dr. Emre Apaydın',
    is: 'SEO ve GEO',
  },
] as const;

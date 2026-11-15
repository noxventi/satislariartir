/**
 * Şehir sayfalarındaki iki karar bölümünün ortak içeriği:
 * - "Nasıl seçilir?" (#secim): "ankara web tasarım firmaları", "istanbul en iyi reklam ajansları" gibi seçim aramaları için.
 * - "Fiyatı ne belirler?" (#fiyat): "ankara web tasarım fiyatları" gibi aramalar için. Rakam YAZILMAZ (iş kararı); fiyatı
 *   belirleyen kalemler anlatılır.
 * Ölçütler her şehirde aynıdır, çünkü iyi bir ajansı ayıran şey şehre göre değişmez; başlık ve giriş cümlesi sayfanın
 * kendi verisindedir (YerelSayfa.secim, YerelSayfa.fiyat). Ölçütleri bize de uygulanabilecek biçimde yazıyoruz.
 *
 * Kaynaklar (15 Kasım 2026):
 * - Google Arama Merkezi, "SEO uzmanına ihtiyacınız var mı?": "Kimse Google'da birinci sıra garantisi veremez."
 *   https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr
 * - Google Ads, Üçüncü taraf politikası: yönetim ücretinin müşteriye açıklanması ve en üst yerleşimi garanti etme iddiasının
 *   yasak olması. https://support.google.com/adspolicy/answer/6086450?hl=tr
 */
import type { YerelHizmet } from './tip';

export interface Olcut {
  ad: string;
  aciklama: string;
}

export const SECIM_OLCUTLERI: Partial<Record<YerelHizmet, Olcut[]>> = {
  web: [
    {
      ad: 'Yayındaki sitelerini telefonunuzda açın',
      aciklama: 'Örnek görsellere değil, bugün yayında olan sitelere bakın. Sayfa çabuk açılıyor mu, yazı okunuyor mu, form ve arama düğmesi çalışıyor mu?',
    },
    {
      ad: 'İlk görüşmede sizi mi dinliyor?',
      aciklama: 'İşinizi, müşterinizi ve talebin bugün nereden geldiğini sormadan renk ve şablon öneren firma siteyi kendi kalıbına göre kurar.',
    },
    {
      ad: 'Alan adı ve site kimin adına?',
      aciklama: 'Alan adı, barındırma hesabı ve sitenin dosyaları sizin adınıza açılmalı. Firmadan ayrıldığınızda sitenizle birlikte gidebilmelisiniz.',
    },
    {
      ad: 'Teklif kalem kalem yazılmış mı?',
      aciklama: 'Sayfa listesi, içeriği kimin hazırlayacağı, yönetim paneli ve yıllık giderler ayrı satırlarda durmalı. Tek satırlık “web sitesi” teklifi karşılaştırılamaz.',
    },
    {
      ad: 'Sayfaları aramaya göre kim kuruyor?',
      aciklama: 'Hangi hizmete ayrı sayfa açılacağını, sayfa başlıklarını ve adreslerini kimin, hangi aramalara bakarak yazacağını sorun.',
    },
    {
      ad: 'Yayından sonra ne oluyor?',
      aciklama: 'Güvenlik güncellemeleri, küçük değişiklikler ve yedekleme kimde? Siteyi kendi ekibiniz güncelleyebilecek mi?',
    },
    {
      ad: '“İlk sayfa garantisi” veren teklife dikkat',
      aciklama: 'Google’ın kendi rehberi açıkça söyler: kimse Google’da birinci sıra garantisi veremez. Sıralama sözü veren firmaya bunu neye dayanarak söylediğini sorun.',
    },
  ],
  reklam: [
    {
      ad: 'Dijital reklam mı, tabela ve baskı mı?',
      aciklama: '“Reklam ajansı” aramasında ikisi de çıkar. Google ve Instagram reklamı yöneten ajans ile tabela, matbaa ya da açık hava işi yapan firma farklı işletmelerdir.',
    },
    {
      ad: 'Reklam hesabı kimin adına açılıyor?',
      aciklama: 'Hesap sizin adınıza, sizin ödeme yönteminizle açılmalı; ajans yönetici olarak eklenmeli. Ayrıldığınızda kampanyalar ve geçmiş veriler sizde kalır.',
    },
    {
      ad: 'Bütçe ile yönetim ücreti ayrı mı yazılıyor?',
      aciklama: 'Google’a ödenen reklam bütçesi ile ajansın yönetim ücreti ayrı satırlarda durmalı. Google’ın üçüncü taraf politikası da yönetim ücretinin müşteriye açıklanmasını ister.',
    },
    {
      ad: 'Neye dayanarak öneriyor?',
      aciklama: 'Hangi bölgede, hangi aramalarla ya da hangi kitleyle başlamayı önerdiğini ve bunu neye bakarak söylediğini sorun. Gerekçesi olmayan öneri hazır kalıptır.',
    },
    {
      ad: 'Telefon, form ve WhatsApp nasıl sayılacak?',
      aciklama: 'Reklamdan gelen talebin hangi yoldan geldiği ayrı ayrı sayılmazsa hangi aramanın satış getirdiği bilinemez; bütçe tıklama sayısına göre yönetilir.',
    },
    {
      ad: 'Kampanyalara ne sıklıkla bakılacak?',
      aciklama: 'Arama terimlerini ve gelen başvuruları ne sıklıkla okuyacağını, neyi kapatıp neyi güçlendireceğini ve bunu size nasıl anlatacağını sorun.',
    },
    {
      ad: 'Satış ya da “en üst sıra” garantisi veren teklife dikkat',
      aciklama: 'Google’ın üçüncü taraf politikası, reklamda en üst yerleşimi garanti etme iddiasını yasaklanan iddialar arasında sayar.',
    },
  ],
};

export const FIYAT_KALEMLERI: Partial<Record<YerelHizmet, Olcut[]>> = {
  web: [
    { ad: 'Sayfa sayısı ve sayfa türleri', aciklama: 'Beş sayfalık bir tanıtım sitesi ile her hizmete ve her ürüne ayrı sayfa açılan bir site aynı iş değildir.' },
    { ad: 'İçeriği kimin hazırladığı', aciklama: 'Metinleri ve fotoğrafları siz mi sağlıyorsunuz, yoksa yazılması ve düzenlenmesi de işin içinde mi?' },
    { ad: 'Özel tasarım ya da hazır tema', aciklama: 'Hazır tema daha kısa sürer; özel tasarım işinize göre kurulur ama daha çok emek ister.' },
    { ad: 'Yönetim paneli', aciklama: 'Metni ve görselleri kendi ekibinizin güncelleyeceği bir panel, sitenin nasıl kurulacağını değiştirir.' },
    { ad: 'İkinci dil', aciklama: 'Her dil ayrı sayfalar, ayrı başlıklar ve çeviri demektir; çeviriyi çoğu zaman işletme sağlar.' },
    { ad: 'Ek işlevler', aciklama: 'Rezervasyon, ödeme, ürün kataloğu ya da başka bir yazılımla bağlantı çoğu zaman ayrı bir sağlayıcı ve ek kurulum gerektirir.' },
    { ad: 'Arama motoruna uygun kurulum', aciklama: 'Sayfa başlıkları, adresler, site haritası ve hız ayarları yapılacak mı, yoksa yalnız tasarım mı teslim edilecek?' },
    { ad: 'Yıllık giderler', aciklama: 'Alan adı, barındırma ve bakım her yıl yenilenir; teklifte tasarım ücretinden ayrı yazılmalıdır.' },
  ],
};

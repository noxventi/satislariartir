/**
 * Şehir ve ilçe sayfalarının veri modeli. Her sayfa kendi dosyasında durur (src/data/yerel/sayfalar/<kimlik>.ts) ve
 * `export const sayfa: YerelSayfa = { ... }` biçiminde dışa aktarılır. Adres: /<kimlik>/ (ör. /ankara-web-tasarim/).
 * Sayfayı src/pages/[yerel].astro çizer; dizin: /sehirler/.
 *
 * Amaç: "ankara web tasarım", "izmir reklam ajansı", "çankaya web tasarım" gibi şehir ve ilçe adıyla yapılan aramalarda
 * bulunmak. Sayfa açma kararı ölçülmüş arama hacmine dayanır (OpenSEO, Türkiye, 15 Kasım 2026).
 *
 * Kurallar (iş kararı):
 * - O şehirde ya da ilçede ofis, şube, ekip olduğu YAZILMAZ ve ima edilmez. İşin telefonla ve görüntülü görüşmeyle,
 *   uzaktan yürütüldüğü açıkça söylenir. Adres, harita, "merkezimiz", "yerel ekibimiz" yok.
 * - Fiyat, bütçe eşiği, sonuç ya da süre sözü yok. Uydurma sonuç, rakam, müşteri sözü yok.
 * - Arama hacimleri yalnız ölçülmüş değerlerdir. Ölçülmemiş ifade listeye girmez.
 * - Şehir ve ilçe hakkındaki bilgiler (sanayi bölgesi, üniversite, turizm, ilçenin iş dokusu) herkesçe bilinen,
 *   doğrulanabilir olgular olmalı; istatistik ve nüfus rakamı yazılmaz.
 * - Örnek işletmeler temsilidir ("OSTİM’de sac işleyen bir atölye"); gerçek firma adı yalnız referanslarda geçer.
 * - Her sayfa kendi şehrine ya da ilçesine özgü yazılır; şehir adı değiştirilerek kopyalanmış cümle kabul edilmez.
 */
import type { Baglanti, SektorArama, SektorReferans, SektorSoru, SektorSorun } from '../sektorler/tip';

export type SehirKimligi = 'ankara' | 'istanbul' | 'izmir' | 'bursa' | 'eskisehir' | 'antalya';

/** web: web tasarım. reklam: reklam ajansı (Google ve Instagram reklam yönetimi). seo: SEO. */
export type YerelHizmet = 'web' | 'reklam' | 'seo';

export interface YerelIs {
  ad: string;
  aciklama: string;
}

export interface YerelSayfa {
  /** Adres parçası: /<kimlik>/ . Küçük harf, Türkçe karaktersiz, tireli: "ankara-web-tasarim". */
  kimlik: string;
  sehir: SehirKimligi;
  /** İlçe ya da semt sayfasıysa adı ("Çankaya", "OSTİM"). Şehir sayfalarında yazılmaz. */
  ilce?: string;
  /** Yerin bulunma hâli: "Ankara’da", "İzmir’de", "Beylikdüzü’nde". */
  yerDe: string;
  hizmet: YerelHizmet;
  /** H1: aranan ifade, doğal yazımıyla. */
  baslik: string;
  /** En çok 44 karakter; şablon sonuna " | Satışları Artır" ekler. */
  metaBaslik: string;
  /** 120 ile 170 karakter. */
  metaAciklama: string;
  /** Dizin ve bağlantı kartlarındaki tek cümle (12 ile 20 kelime). */
  ozet: string;
  /** Üst alan: şehir sayfasında üç, ilçe sayfasında iki paragraf. İlki tek cümlelik tanımdır. */
  tanim: string[];
  /** Sayfa boyunca tek görüşme çağrısı (2 ile 4 kelime). */
  cagri: string;
  aramalar: { baslik: string; giris: string; liste: SektorArama[]; yorum: string[] };
  /** Bu şehirde ya da ilçede sık gördüğümüz işletme durumları: soru, temsili yerel örnek, yaptığımız iş. */
  yerel: { baslik: string; giris: string; kartlar: SektorSorun[] };
  /** Bu hizmette yaptığımız işler. Dört ya da altı kalem. */
  isler: { baslik: string; giris: string; liste: YerelIs[]; bag?: Baglanti };
  /**
   * "Nasıl seçilir?" bölümü (seçim aramaları için). Ölçütler ortaktır (src/data/yerel/rehber.ts); burada yalnız başlık ve
   * o şehre özgü giriş cümlesi durur. Başlık verilmezse "<Şehir>’da web tasarım firması / reklam ajansı nasıl seçilir?" olur.
   */
  secim?: { baslik?: string; giris: string };
  /** "Fiyatı ne belirler?" bölümü (yalnız web). Rakam yazılmaz; kalemler ortaktır. */
  fiyat?: { baslik?: string; giris: string };
  /** Verilmezse şablon hizmete göre üç proje gösterir. Yalnız o şehirle bağı kamuya açık olan projeler için yazılır. */
  referanslar?: { baslik: string; giris: string; liste: SektorReferans[] };
  sss: { baslik: string; giris: string; sorular: SektorSoru[] };
}

/**
 * Sektör sayfalarının veri modeli. Her sektör kendi dosyasında durur (src/data/sektorler/<kimlik>.ts) ve
 * `export const sektor: Sektor = { ... }` biçiminde dışa aktarılır. Sayfayı src/pages/sektorler/[sektor].astro çizer.
 *
 * Kurallar (iş kararı):
 * - Fiyat, bütçe eşiği, sonuç ya da süre sözü yazılmaz. Uydurma sonuç, rakam, müşteri sözü yazılmaz.
 * - Arama hacimleri yalnız ölçülmüş değerlerdir (Türkiye, aylık yaklaşık). Ölçülmemiş ifade hacimsiz yazılır.
 * - Referanslar yalnız src/data/projeler.ts içindeki kayıtlardır; "not" alanı projede yapılan işi anlatır, sonuç iddia etmez.
 * - Sağlık ve hukukta reklam kampanyası önerilmez ve bu markalar reklam referansı gösterilmez. Tek istisna sağlık turizmidir:
 *   yalnız yetki belgesi olan kurumlar için, yurt dışına yönelik reklam anlatılır (saglik-turizmi.ts başındaki nota bakın).
 */
import type { HizmetKimligi, KanalDegeri } from '../../site.config';

export interface Baglanti {
  etiket: string;
  url: string;
}

/** Müşterinin Google'a yazdığı ifade ve Türkiye'deki aylık yaklaşık arama sayısı. */
export interface SektorArama {
  ifade: string;
  hacim?: number;
}

/** Soru kartı: işletmenin kendi sorusu, gündelik (temsili) örnek ve yaptığımız iş. */
export interface SektorSorun {
  soru: string;
  ornek: string;
  care: string;
  /** src/assets/cizimler/ altındaki dosya adı (uzantısız). */
  cizim: string;
  bag: Baglanti;
}

/** 'harita': Google İşletme Profili ve harita sonuçları. */
export type KanalTuru = HizmetKimligi | 'harita';

export interface SektorKanal {
  tur: KanalTuru;
  /** Kartın başlığı: kanalın bu sektördeki işi, ör. "Google Ads: keşif isteyen aramalar". */
  baslik: string;
  metin: string;
  /** İki ya da üç kısa madde. */
  maddeler: string[];
  bag: Baglanti;
}

export interface SektorAdim {
  ad: string;
  ozet: string;
  aciklama: string;
}

export interface SektorDurum {
  ust: string;
  baslik: string;
  metin: string;
  maddeler: { ad: string; aciklama: string }[];
  /** Düğme etiketi; görüşme formuna iner. */
  cagri: string;
  bag?: Baglanti;
  /** Yalnız sol panelde görünür: src/assets/cizimler/ dosya adı. */
  cizim?: string;
}

export interface SektorReferans {
  /** src/data/projeler.ts içindeki kimlik. */
  kimlik: string;
  /** Projede yapılan işin bu sektör açısından anlatımı. Sonuç iddiası içermez. */
  not: string;
}

/** Temsili çalışma örneği: üç sütunlu karar tablosu. */
export interface SektorOrnek {
  baslik: string;
  metin: string[];
  tabloBasligi: string;
  sutunlar: [string, string, string];
  satirlar: {
    ilk: string;
    /** İlk sütun bir arama ifadesiyse true (tırnak içinde, arama yazı tipiyle gösterilir). */
    sorgu?: boolean;
    karar: string;
    tur: 'evet' | 'hayir' | '';
    gerekce: string;
  }[];
  not: string;
  cizim: string;
}

export interface SektorSoru {
  soru: string;
  cevap: string;
  bag?: Baglanti;
}

export interface Sektor {
  /** Dizin ve menüdeki sıra. */
  sira: number;
  /** Adres parçası: /sektorler/<kimlik>/ */
  kimlik: string;
  /** Menü ve kart adı: "İnşaat ve yapı". */
  ad: string;
  /** Kimler için: menüde ve dizin kartında adın altında durur. Virgülle ayrılmış üç dört işletme türü. */
  kimler: string;
  /** Dizin kartındaki tek cümle. */
  ozet: string;
  /** H1: aranan ifade. */
  baslik: string;
  /** En çok 44 karakter; şablon sonuna " | Satışları Artır" ekler. */
  metaBaslik: string;
  /** 120 ile 170 karakter. */
  metaAciklama: string;
  /** Üst alan: iki ya da üç paragraf. İlki tek cümlelik tanımdır. */
  tanim: string[];
  gorselAlt: string;
  /** Sayfa boyunca tek görüşme çağrısı. */
  cagri: string;
  kanal: KanalDegeri;
  aramalar: { baslik: string; giris: string; liste: SektorArama[]; yorum: string[] };
  sorunlar: { baslik: string; giris: string; kartlar: SektorSorun[] };
  /** Meslek kuralı notu (hukuk, sağlık): kanallar bölümünün başında durur. */
  kuralNotu?: { baslik: string; metin: string[] };
  /**
   * Meslek kuralı nedeniyle reklam önerilmeyen ama ayrı kural notu taşımayan sayfalar (mimarlık ofisleri: Mimarlar Odası
   * Mesleki Davranış Kuralları Yönetmeliği m. 7). Şablon bu sayfalarda da yansız etiketleri kullanır
   * ("müşteri" ve "bu sektörde çalıştığımız markalar" yerine "insanlar" ve "çalıştıklarımız").
   */
  reklamsiz?: boolean;
  /**
   * Referans kartlarında kayıtlı müşteri sözü gösterilsin mi? Varsayılan: meslek kuralı notu olan sayfalarda hayır,
   * diğerlerinde evet. Marka sahibinin açıkça örnek gösterilmesini istediği sayfalarda true yazılır.
   */
  musteriSozu?: boolean;
  kanallar: { baslik: string; giris: string; liste: SektorKanal[] };
  yontem: { baslik: string; giris: string; adimlar: SektorAdim[] };
  referanslar?: { baslik: string; giris: string; liste: SektorReferans[] };
  durumlar: { baslik: string; giris: string; sol: SektorDurum; sag: SektorDurum };
  ornek?: SektorOrnek;
  sss: { baslik: string; giris: string; sorular: SektorSoru[] };
  /** Sayfa sonundaki kartlar: blog yazısı dosya adları ve diğer sektörlerin kimlikleri. */
  ilgili: { blog: string[]; sektorler: string[] };
}

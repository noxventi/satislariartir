# Satışları Artır web sitesi

İşletmelerin müşteri bulması ve satışlarını artırması için çalışan dijital pazarlama ajansının sitesi. Astro ile statik HTML üretilir; yalnız görüşme formu ucu,
teşekkür sayfası ve talep listesi sunucuda çalışır. Durum, bekleyen bilgiler ve test sonuçları için `TESLIM.md` dosyasına bakın.

## Komutlar

| Komut | Ne yapar? |
|---|---|
| `npm run dev` | Geliştirme sunucusu, http://localhost:4321 |
| `npm run build` | Üretim derlemesi (`dist/`) |
| `npm start` | Derlenmiş siteyi çalıştırır |
| `node araclar/denetim.mjs` | Bozuk bağlantı, çapa, H1, başlık ve uzun tire denetimi |
| `node araclar/yerel-denetle.mjs <kimlik…>` | Şehir ve ilçe sayfası denetimi (bölüm sayıları, ofis iddiası, yasak ifade); `--benzerlik` sayfalar arasında aynen yinelenen cümleleri listeler |
| `node araclar/ekran.mjs <url> <genişlik> <klasör> <ad>` | Tam boy ekran görüntüsü (mobil öykünmeli) |
| `node araclar/gorunum.mjs <url> <genişlik> <seçici\|-> <çıktı.jpg>` | Tek ekranlık görüntü; sabit duran öğeleri (alt çubuk, yüzen WhatsApp düğmesi) görmek için |
| `npm run gorseller` | Higgsfield fotoğraflarını site ana kopyalarına işler |
| `node araclar/cizim-isle.mjs` | İllüstrasyonları site ana kopyalarına işler (saf beyaz zemin) |
| `npm run ikonlar` | Kullanılan Phosphor ikonlarını `src/data/ikonlar.json` dosyasına çıkarır |
| `node araclar/marka-uret.mjs` | favicon.ico, apple-touch-icon, logo.png ve OG görselini üretir |
| `node araclar/logo-vektor.mjs` | Satışları Artır logosunu vektöre çevirir (`src/data/logo.json`, `public/favicon.svg`); potrace ister |
| `node araclar/logo-topla.mjs` | Çalışılan markaların logolarını kendi sitelerinden toplar |
| `node araclar/logo-isle.mjs` | Toplanan logoları güven şeridi için tek renge çevirir (`src/assets/logolar/`) |
| `node araclar/proje-ekran.mjs <alan adı>` | Canlı proje sitesinin gerçek ekran görüntüsünü alır |

## Canlıya alma (Hostinger, GitHub üzerinden)

Site çoğunlukla statik HTML'dir, ama görüşme formu (`/api/talep/`), teşekkür sayfası ve talep listesi (`/yonetim/talepler/`)
sunucuda çalışır. Bu yüzden Hostinger'da **Node.js uygulaması** olarak kurulmalıdır (Business Web Hosting ya da Cloud plan;
yalnız statik barındırmada form çalışmaz).

1. hPanel > Web siteleri > yeni web sitesi > **Node.js** seçin, GitHub'ı bağlayıp bu depoyu ve `main` dalını seçin.
2. Derleme ve dağıtım ayarları (Settings and redeploy):

   | Alan | Değer |
   |---|---|
   | Application type (framework) | `Astro` |
   | Root directory | boş ya da `/` |
   | Build script | `build` |
   | Output directory | `dist` |
   | **Entry file** | **`server/entry.mjs`** (çıktı klasörüne göre yazılır; `dist/` tekrar yazılmaz) |
   | Node.js version | **24** (en az 22.23.4) |
   | Package manager | npm |

   **Entry file boş bırakılırsa Hostinger siteyi statik dosya olarak yayımlar ve Node sunucusu hiç çalışmaz:** ana
   sayfa 403 verir, sayfalar `/client/` altında görünür, form çalışmaz. (15 Kasım 2026'daki ilk dağıtımda olan buydu.)
   Kaynak: Hostinger, Node.js build settings (docs.hostinger.com/node.js/build-settings).
3. Ortam değişkenleri (hPanel > Environment variables; derleme ve çalışma sırasında okunur):
   - `VERI_KLASORU`: talep veritabanının klasörü. **Uygulama klasörünün dışında, kalıcı bir yol olmalı.** Hostinger her
     dağıtımda uygulama klasörünü yeniler; içeride kalan kayıtlar silinir. Tanımlanmazsa üretimde ev dizinindeki
     `satislariartir-veri` klasörü kullanılır (uygulama klasörünün dışında olduğu için güvenli varsayılan).
   - `YONETIM_KULLANICI`, `YONETIM_SIFRESI`: talep listesinin girişi. Tanımlı değilse sayfa kapalıdır.
   - `BILDIRIM_WEBHOOK_URL`: yeni talebin iletileceği adres (e-posta köprüsü, CRM ya da otomasyon aracı). Önerilir.
   - `PUBLIC_GTM_ID`, `PUBLIC_META_PIXEL_ID`: ölçüm etiketleri. Boşken hiçbir üçüncü taraf betiği yüklenmez ve çerez bandı
     çıkmaz. Derlemede okunduğu için değiştirince yeniden dağıtım gerekir.
   - `PORT` ve `HOST`: Hostinger kendisi veriyorsa dokunmayın. Uygulama `PORT` ortam değişkenini okur.
   - `PUBLIC_SITE_ORTAMI`: canlıda **boş** bırakın (`taslak` yazılırsa site aramaya kapanır).
4. Alan adı `satislariartir.com` ve `www.satislariartir.com` olmalı: form, başka alan adlarından gelen gönderimi güvenlik
   gereği reddeder (`astro.config.mjs` > `security.allowedDomains`). Başka bir adres kullanılacaksa listeye eklenmeli.
5. Yayından sonra: formu bir kez deneyin, kaydın `/yonetim/talepler/` sayfasında göründüğünü kontrol edin; `https://satislariartir.com/sitemap.xml`
   adresini Google Search Console'a ekleyin.

`main` dalına yapılan her push yeniden derleme ve dağıtım başlatır.

## Şehir ve ilçe sayfaları

Adres `/<kimlik>/` (ör. `/ankara-web-tasarim/`, `/cankaya-web-tasarim/`); dizin `/sehirler/`.

- Veri: `src/data/yerel/sayfalar/<kimlik>.ts` (`export const sayfa: YerelSayfa`). Model ve kurallar: `src/data/yerel/tip.ts`.
  Şehir listesi, sıra ve şehir sahneleri: `src/data/yerel/index.ts` (`src/assets/sehirler/<sehir>.jpg`).
- Şablon: `src/pages/[yerel].astro`. Çalışma adımları, "birlikte nasıl çalışıyoruz" maddeleri, çalıştığımız markalar ve
  sayfa sonu kartları şablondan gelir; sayfa verisi tanımı, arama panosunu, yerel durum kartlarını, iş kalemlerini ve
  sık sorulan soruları taşır.
- Yeni sayfa eklemek için klasöre bir dosya koymak yeter: dizin, alt bilgi, hizmet sayfalarındaki "şehrinize göre"
  bağlantıları, aynı şehrin diğer sayfaları bölümü ve site haritası kendiliğinden güncellenir.
- Örnek sayfa: `ankara-web-tasarim.ts`. Denetim: `node araclar/yerel-denetle.mjs <kimlik>` ve `--benzerlik`.
- Sayfalarda o şehirde ofis olduğu yazılmaz; arama hacimleri yalnız ölçülmüş değerlerdir.

## Nerede ne var?

| Yol | İçerik |
|---|---|
| `src/site.config.ts` | Marka, iletişim, veri sorumlusu, hizmetler, menü. Boş alan ön yüzde gizlenir |
| `src/data/projeler.ts` | 18 proje kaydı, kapsam kaynağı ve doğrulanmış müşteri sözü |
| `src/content/rehberler/*.mdx` | Blog yazıları (adres `/blog/<dosya adı>/`; koleksiyonun adı "rehberler" olarak kaldı). Şema ve yayın durumları `src/content.config.ts` içinde |
| `src/components/blog/` | Yazı içi görsel parçalar: `SonucSayfasi`, `Akis`, `Karsilastirma`, `Terimler`, `AdimListesi`, `AramaKutulari`, `AraGorsel`, `Sahne`, `Not` |
| `src/data/sektorler/*.ts` | Sektör sayfalarının verisi (adres `/sektorler/<kimlik>/`). Veri modeli `tip.ts`; sayfayı `src/pages/sektorler/[sektor].astro` çizer |
| `src/pages/` | Sayfalar. `api/talep.ts` form ucu, `yonetim/talepler.astro` talep listesi |
| `src/components/` | Ortak bileşenler. `Ustbilgi` (görselli menü panelleri), `TalepFormu`, `GorusmeBandi`, `SayfaBasi`, `ProjeKarti`, `Isaret` (kırmızı kalem) |
| `src/styles/global.css` | Tasarım sistemi: renk, yazı, düğme, form, tablo, iç sayfa kalıpları |
| `src/scripts/olcum.ts` | Ölçüm olayları, çerez tercihi, kaynak kaydı |
| `src/lib/talepler.ts` | Talep kayıtları (SQLite), tekrar önleme, bildirim kuyruğu |
| `arastirma/` | OpenSEO sonuçları (14 Kasım 2026) |
| `gorsel-kaynak/` | Görsel ham dosyaları ve `KAYIT.md` |
| `onizleme/` | Masaüstü ve mobil tam boy önizlemeler |

## Yeni blog yazısı eklemek

1. `src/content/rehberler/` altına `.mdx` dosyası açın; örnek: `google-ads-nedir.mdx`. Dosya adı adres olur (`/blog/<dosya adı>/`).
2. Kapak sahnesini `src/assets/blog/<ad>.jpg` olarak koyun ve ön bilgide `kapak: <ad>`, `kapakAlt: "..."` yazın.
   `aramalar` alanına yazının yanıtladığı iki ile dört aramayı girin.
3. Yazı düz metin olmasın: `src/components/blog/` altındaki görsel parçalardan en az dördünü kullanın (her dosyanın başında kullanımı yazar).
4. `durum: inceleme` ile başlayın. Uzman incelemesinden sonra `inceleyen` alanını doldurup `durum: yayinda` yapın.
   Yalnız yayındaki yazılar indekslenir ve site haritasına girer.
5. `node araclar/yazi-denetle.mjs <dosya adı>` ile ön bilgiyi, yazım kurallarını ve görsel yoğunluğunu;
   `node araclar/denetim.mjs` ile yetim yazı ve bozuk bağlantıyı kontrol edin.

## Yeni sektör sayfası eklemek

1. `src/data/sektorler/<kimlik>.ts` dosyasını açın; örnek: `insaat-ve-yapi.ts`. Alanların anlamı `tip.ts` içinde yazar.
2. Üst görseli `src/assets/sektorler/<kimlik>.jpg` olarak koyun (3:2).
3. Arama hacimleri yalnız ölçülmüş değerlerdir; ölçülmemiş ifade `hacim` alanı olmadan yazılır.
   Referanslar yalnız `src/data/projeler.ts` kayıtlarıdır.
4. Sayfa, dizin kartı, üst menü paneli, alt bilgi ve site haritası kendiliğinden güncellenir.
5. `node araclar/sektor-denetle.mjs <kimlik>` ile bölüm sayılarını ve yazım kurallarını kontrol edin.

## Üst menüyü denetlemek

`node araclar/menu-ekran.mjs http://localhost:4321/ 1440 onizleme/_menu` masaüstünde iki paneli ve kaydırılmış durumu,
`... 390 onizleme/_menu 844` telefondaki tam ekran menüyü çeker.

## İçerik kuralları

Fiyat, paket ya da bütçe eşiği yayımlanmaz. Sonuç garantisi verilmez. Ölçülmemiş sonuç, çalışan portresi, sertifika ya da
ödül yazılmaz. Gerçek veri olmayan her örnek "Temsili" olarak etiketlenir. Projelerin kaynağı gösterilir.

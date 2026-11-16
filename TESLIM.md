# Satışları Artır | teslim notu

Tarih: 14 Kasım 2026. Kaynak belge: `SatislariArtir-Claude-PRD.md`.

Bu not, sitenin bugünkü durumunu tek yerde toplar: neyin canlıya hazır olduğu, neyin taslakta kaldığı, formun nereye
gittiği, ölçümün nasıl test edildiği ve hangi bilgilerin beklediği.

## 0. 14 Kasım 2026 tarihli geri bildirimle değişenler

Marka sahibinin geri bildirimi PRD'nin bazı kararlarının önüne geçti:

- **Konumlandırma:** site yalnız reklam yönetimi olarak sunulmuyor. Satışları Artır, işletmelerin müşteri bulması ve
  satışlarını artırması için çalışan dijital pazarlama ajansı olarak anlatılıyor (reklam, SEO, GEO ve AEO, web tasarım).
- **Ana sayfa baştan kuruldu.** Üst alanda gerçek aramalar yazılıyor ("google'a reklam vermek", "seo ajansı"...), altında
  "Bunu mu demek istediniz: Satışları artır." duruyor. Çelik birleşim fotoğrafı ve ÇelikVillam atfı üst alandan kalktı.
  Liste ve tablo yapısındaki iki bölüm, illüstrasyonlu dert kartlarına ve beş fotoğraflı hizmet galerisine dönüştü.
- **Ana sayfa H1'i:** "Dijital pazarlama ajansı" (aylık yaklaşık 2.400 arama, yükselişte). Ana çağrı: "Satışlarımı artırmak istiyorum".
- **Obrandy sitede anılmıyor.** Projeler "yürüttüğümüz projeler" olarak geçiyor; kaynak bağlantıları ve "ekip beyanı"
  ibareleri kaldırıldı. İç kayıt `src/data/projeler.ts` dosyasında duruyor.
- **Örnekler:** dert kartları ve iz şeridi yalnız referans projelere değil, gündelik işletmelere dayanıyor
  (mobilyacı, güzellik salonu, çilingir, restoran, mimarlık ofisi, pilates stüdyosu, kombi servisi). Hepsi temsilidir.
- **Dikkat edilecek nokta:** Ejder Bey'in sözü ilk olarak Obrandy için yazılmıştı. Kaynak bağlantısı kaldırıldığı için söz
  artık bu markanın altında, "reklam yönetimi çalışmamız üzerine" bağlamıyla duruyor. Müşteriden bu kullanım için onay alınması iyi olur.
- **Üst alan görseli ikinci kez değişti.** İlk illüstrasyon "çok basit" bulundu. Yerine fotoğraflanmış bir kâğıt kasaba geldi:
  kâğıt insanlar kırmızı kalem çizgisini izleyerek ışıkları yanan dükkâna yürüyor. Dert kartlarının görselleri de aynı
  kâğıt işi üslubuyla yenilendi.
- **Çalışmalar sayfası baştan kuruldu.** Çizgili liste yerine gerçek site görüntülerinden oluşan bir duvar var:
  on iki canlı sitenin ilk ekranı, dört yazı karosu, yapılan işe göre süzgeç ve iki ayrıntılı dosya. Kişi portresi içeren
  siteler (avukat, hekim) ile tasarımı ekibe ait olmayan siteler görüntüyle değil yazı karosuyla gösterilir.
- **İç sayfalar baştan kuruldu (15 Kasım 2026).** Marka sahibi iç sayfaların görünümünü "AI slop" buldu ve görselli, SEO ve GEO
  açısından dolu, gezinmesi kolay sayfalar istedi. Çizgili satır listeleri ve düzen tabloları kalktı. Ortak parçalar:
  `SayfaBasi` (tanım cümlesi + kâğıt işi sahne), `BuSayfada` (sayfa içi gezinme), `SoruKartlari`, `Adimlar`, `IkiDurum`
  (ilk kez yapacaklar / zaten yapanlar), `Sss` (FAQPage yapısal verisiyle), `IlgiliSayfalar`. Örnek sayfa:
  `src/pages/hizmetler/google-ads-yonetimi.astro`. Yenilenen sayfalar: beş hizmet sayfası, hizmetler dizini, hakkımızda,
  iletişim, 404, teşekkürler, rehber dizini ve rehber şablonu (altı rehberin metni dahil), iki proje sayfası, proje kartı,
  iki reklam açılış sayfası, yasal sayfalar (hukuki metin değişmedi, yalnız görünüm). İç sayfalar için 17 kâğıt işi nesne
  ve bir atölye sahnesi üretildi (`gorsel-kaynak/KAYIT.md`).
- **Ana sayfada hizalama (15 Kasım 2026).** Marka sahibi kaydırmalı, farklı oranlı düzenleri "karman çorman" buldu.
  Soru kartları (3x2), hizmetler (üstte iki, altta üç) ve markalar (3x2) artık düz ızgaralarda; kartların satırları ortak
  olduğu için başlık, açıklama ve bağlantılar aynı hizada. `SoruKartlari` bileşeni de aynı düzene geçti.
- **Çalıştığımız markalar bölümü** altı canlı sitenin masaüstü ilk ekranını aynı ölçüde çerçevelerde, logosu, sektörü ve
  yapılan işle gösteriyor (ÇelikVillam, Tarum Havuz, Burger Engineer, Estika, Bodrum Olive House, EsVia).
- **Müşteri yorumları bölümü** ana sayfaya eklendi: dokuz gerçek yorum, yana kayan kartlarda. Sözler `src/data/projeler.ts`
  içindeki `MUSTERI_YORUMLARI` kaydında, kaynağındaki yorumdan kelimesi kelimesine alınmış bir ya da art arda iki cümle
  olarak duruyor (ekibin önceki markasının adını anan cümleler alınmadı; cümle değiştirilmedi, birleştirilmedi).
  İki hekimin yorumundan yalnız arama görünürlüğüyle ilgili cümle alındı, reklamdan söz eden cümle alınmadı.
  **Yorumlar ilk olarak ekibin önceki markası için yazıldı; bu sitede kullanım için dokuz müşteriden onay alınmalı.**
- **Güven şeridi:** üst alanın altında, çalışılan 18 markanın logosu tek renkte yavaşça kayıyor (`src/components/MarkaSeridi.astro`).
  Logolar markaların kendi sitelerinden alındı. Şeritte yazı ve durdurma düğmesi yok (marka sahibinin kararı, 15 Kasım 2026);
  hareket imleç üzerindeyken durur, hareket azaltma tercihinde logolar durağan dizilir. Üç hekim ve İlk Günebakan da
  marka sahibinin kararıyla şeride eklendi. Bu dört kayıtta reklam yönetimi referansı hâlâ gösterilmiyor
  (çalışmalar sayfasındaki etiketler değişmedi).
- **Ana sayfa metinleri (15 Kasım 2026):** bölümler artık insanların aradığı ifadelerle yazılı.
  "Satışlarınız neden artmıyor?" bölümündeki altı kartın başlığı soru ("Google reklamı veriyorum, neden satış gelmiyor?").
  Hizmetler bölümünün başlığı "Dijital pazarlama hizmetlerimiz"; her hizmetin başlığı aranan adı (Google Ads yönetimi,
  Instagram ve Facebook reklam yönetimi, SEO danışmanlığı, GEO ve AEO danışmanlığı, Kurumsal web tasarım).
  Sekiz soruluk "Sık sorulan sorular" bölümü ve FAQPage yapısal verisi eklendi. Soru seçimi OpenSEO hacimlerine dayanır
  (google reklam verme 5.400, instagram reklam verme 5.400, seo nedir 5.400, dijital pazarlama nedir 1.900, geo nedir 1.000).
- **Yöntem anlatımı değişti:** "O teklif hangi reklamdan geldi?" bölümü kalktı. Marka sahibinin yönlendirmesiyle vurgu
  izleme ve raporlamadan çıktı; yerine "Satış hedefinize en doğru ve en hızlı şekilde ulaşın." başlığıyla (marka sahibinin
  ifadesi) beş adım geldi: inceleme, strateji, kurulum, optimizasyon, hedef. İç sayfalarda (hizmetler, hakkımızda,
  proje dosyaları) eski "satış kaydı" anlatımı duruyor.
- **İlk kez reklam verecekler:** marka sahibi bu kitleyi "çok ama çok önemli" olarak tanımladı (15 Kasım 2026). Üst alanın
  hemen altına "İlk kez reklam mı vereceksiniz?" bölümü kondu: hiç reklam vermemiş, Google'da reklamı çıkmamış,
  Instagram'da gönderiyi öne çıkarıp sonuç alamamış ve web sitesi olmayan işletmeler için dört kart, yeni bir kâğıt işi
  sahne ve "İlk reklamımı planlamak istiyorum" düğmesi (formda kampanya durumunu "yeni" olarak işaretler).
  SSS'ye iki soru eklendi: "Reklam vermek için neler gerekir?" ve "Daha önce reklam verdim, sonuç alamadım."
  Dikkat: "Öne çıkar" düğmesiyle ilgili cümle Meta'nın yardım sayfasından doğrulanamadı; genel bilgiye dayanır,
  uzman incelemesinde kontrol edilmeli.
- **Arama hacmi kaynak notu** üst alandan kaldırıldı (marka sahibinin kararı). Kaynak kaydı bu dosyada ve
  `arastirma/` klasöründe duruyor.
- **Logo:** marka sahibinin verdiği logo (tıklayan ok, fiyat etiketi, "Satışları Artır" yazısı) vektöre çevrildi; üst bilgide,
  alt bilgide, site simgesinde ve paylaşım görselinde kullanılıyor. Kırmızı kalemle altı çizili eski yazı markası kalktı.
  Logo hareketlidir: oturumun ilk sayfasında ok gelir, basar, kıvılcımlar çıkar, etiket yerine düşer; sonraki sayfalarda
  yalnız kısa bir tık oynar; üzerine gelince ya da dokununca tekrarlar. Hareket azaltma tercihinde durağandır.
- **Düğmeler:** kâğıttan kesilmiş gibi sert gölgeli. Üzerine gelince kalkar, basınca gölgesine oturur; sağ üst köşeden
  logodaki tıklama kıvılcımları çıkar, ok bir kez sağdan çıkıp soldan girer (`src/styles/global.css`, `.dugme`).
- **Üst alan açıklaması:** markayı ve hizmetleri adıyla söyleyen iki cümle (dijital pazarlama ajansı, Google Ads ve Instagram
  reklam yönetimi, SEO, GEO, web tasarım).

Aşağıdaki bölümlerde bu kararlarla çelişen satır varsa bu bölüm geçerlidir.

## 0.1 Sektör sayfaları, yeni üst menü ve blog (15 Kasım 2026)

Marka sahibinin isteği: sektörel hizmet sayfaları (ayrıntılı, görselli, en çok aranan kelimelere göre kurulmuş, varsa
sektör referanslarıyla), görsel açıdan ilgi çeken yeni bir üst menü ve yapılan işlerle ilgili en çok aranan kelimeleri
hedefleyen 20 blog yazısı ("her şey yazı yazı olmasın").

### Ne eklendi?

- **Sekiz sektör sayfası ve bir dizin** (`/sektorler/`): inşaat ve yapı, eğitim kurumları, restoran ve kafe, üretim ve
  ihracat, otel ve konaklama, hukuk büroları, sağlık ve klinikler, butik markalar ve atölyeler. Her sayfada: sektörün
  kâğıt işi sahnesi, ölçülmüş arama hacimleriyle "müşteriniz ne arıyor" panosu, altı soru kartı, dört kanal kartı,
  beş çalışma adımı, o sektörde çalışılan markalar (gerçek ekran görüntüsü, yapılan iş, varsa müşterinin sözü),
  iki durum paneli, temsili karar tablosu ve sekiz dokuz soruluk sık sorulanlar. Veri `src/data/sektorler/` altında.
- **Yeni üst menü:** "Hizmetler" ve "Sektörler" görselli panel açıyor; bağlantıların altına kırmızı kalem çizgisi
  çekiliyor; sayfa kaydıkça alt kenarda okuma çizgisi ilerliyor; panel açıkken sayfa hafifçe kararıyor. Dar ekranda
  menü tam ekran: hizmetler görselleriyle, sektörler iki sütunda. Alt bilgiye sektörler sütunu, ana sayfaya sektör şeridi eklendi.
- **Blog:** `/rehberler/` adresi `/blog/` oldu (eski adresler 301 ile yönleniyor). 20 yeni yazı eklendi, toplam 26.
  Her yazının bir kapak sahnesi, yanıtladığı aramalar ve en az beş görsel parçası var (arama sonucu şeması, akış şeması,
  karşılaştırma kartları, terim kartları, adım listesi, kontrol listesi, çalışma örneği). İlk altı rehbere de kapak ve
  görsel parçalar eklendi.
- **Görseller:** 35 yeni kâğıt işi sahne (9 sektör, 26 blog). Kayıt: `gorsel-kaynak/KAYIT.md`.

### Arama verisi (Türkiye, aylık yaklaşık; ölçüm 15 Kasım 2026)

Blog konuları bu hacimlere göre seçildi: meta business suite 40.500; whatsapp business 40.500; google benim işletmem 12.100;
alan adı sorgulama 9.900; seo ajansı 8.100; google işletme profili 6.600; reklam ajansı 6.600; google reklam verme 5.400;
instagram reklam verme 5.400; seo nedir 5.400; web sitesi kurma 5.400; google yorumları 5.400; domain nedir 4.400;
hosting nedir 2.400; seo analizi 2.400; dijital pazarlama ajansı 2.400; dijital pazarlama nedir 1.900; google ads nedir 1.900;
anahtar kelime nedir 1.900; web sitesi fiyatları 1.900; geo nedir 1.000; web tasarım fiyatları 1.000; landing page nedir 880;
backlink nedir 880; roas nedir 880; instagram reklam ücretleri 880; ctr nedir 720.

Sektör + "dijital pazarlama / reklam" aramaları Türkiye'de çok düşük hacimli (ör. emlak reklam 210, otel reklam 210,
restoran reklam 20). Bu yüzden sektör sayfaları, o sektörün MÜŞTERİSİNİN aradığı ifadeler üzerine kuruldu
(prefabrik ev 90.500; bodrum otelleri 135.000; anaokulu 49.500; diş hekimi 60.500...). Hukuk alanındaki ifadeler için
hacim ölçülemedi; o sayfada aramalar sayısız gösteriliyor.

### Yayından önce marka sahibinin bakması gerekenler

1. **Blog yazıları yayında (15 Kasım 2026).** 43 yazının tamamı işletme sahibinin kararıyla `durum: yayinda` yapıldı;
   indekslenir ve site haritasındadır. `inceleyen` alanı boş: yazıyı gerçekten okuyan biri olursa adı oraya yazılır.
2. **Hukuk sayfası (`/sektorler/hukuk-burolari/`): en önemli karar burada.** Türkiye Barolar Birliği Reklam Yasağı
   Yönetmeliği'nin 7. maddesi (9/8/2024 değişikliği) yalnız reklamı değil, iş elde etme amacıyla arama motorlarında üst
   sıralara çıkmaya yönelik anahtar sözcük ve sayfa adresi kullanımını, genel bilgi paylaşarak yayın yapmayı ve müvekkil
   bilgisi paylaşmayı da yasaklıyor (kaynak: barobirlik.org.tr'deki yönetmelik metni, 15 Kasım 2026'da okundu). Bu yüzden:
   - Sayfanın başlığından "SEO" çıkarıldı ("Avukatlar ve hukuk büroları için web sitesi"). Sayfa reklam kampanyası
     kurmadığımızı, sıralama hedefi koymadığımızı ve blog yazısını görünürlük yöntemi olarak önermediğimizi söylüyor.
   - `src/data/projeler.ts` içinde Av. Suha Akyıldız kaydı `reklamYonetimi: 'gosterilmez'` yapıldı. Çalışmalar sayfası
     avukatı "Google Ads ve Meta yönetimi" ibaresiyle reklam müşterisi gibi gösteriyordu; bu ibare kalktı.
     Gerçekten reklam yönetimi yapılmıyorsa doğru olan budur; yapılıyorsa bu, avukat açısından ayrıca konuşulması gereken bir konudur.
   - Avukatın adı sitede hâlâ "Web tasarım, SEO ve GEO" işiyle geçiyor (çalışmalar sayfası, hukuk sektör sayfası, logo şeridi).
     Yönetmeliğin 11. maddesi avukatın, üçüncü kişilerin reklam sayılabilecek davranışına izin vermemesini istiyor.
     Bu kullanım için avukattan açık onay alın ya da "SEO ve GEO" ibaresini bu kayıttan çıkarmamı isteyin.
   - Sayfadaki 19 meslek kuralı cümlesi yayından önce bir avukata okutulmalı. Yönetmelik hakkında iptal davası açıldığına
     dair haber var; sonucunu doğrulayamadık.
3. **Sağlık sayfası (`/sektorler/saglik-ve-klinikler/`).** Reklam kampanyası önerilmiyor; hekimler reklam referansı olarak
   gösterilmiyor. Sayfadaki somut kural cümleleri Türk Tabipleri Birliği'nin 11.07.2025 tarihli tanıtım kılavuzuna
   dayanıyor. Sağlık Bakanlığı yönetmeliği 12 Kasım 2025'te yenilenmiş görünüyor, ancak resmî metne (mevzuat.gov.tr)
   ulaşılamadı; sayfada yönetmelik yalnız adıyla geçiyor. Yayından önce hekim müşterilerinize okutun. Ayrıca:
   - Hukuk ve sağlık sektör sayfalarında müşteri sözü gösterilmiyor. Hekimlerin sözlerindeki "daha görünür olmamıza",
     "öne çıkmasına" ifadeleri TTB kılavuzundaki "ön plana çıkaran ifade" sınırına takılabilir. Aynı iki söz ANA SAYFADAKİ
     yorumlar bölümünde duruyor; hekimlerden onay alın ya da bu iki sözü kaldırmamı isteyin.
   - Diş hekimleri için Türk Dişhekimleri Birliği kurallarına bakılmadı.
4. **Referans notları.** Her sektör sayfasındaki proje notları `src/data/projeler.ts` içindeki kapsam ve "karar"
   alanlarından yazıldı; sonuç iddiası içermiyor. Yine de her markanın notunu bir kez okuyun. Müşteri sözleri ana
   sayfadakiyle aynı kayıtlar; kullanım için müşteri onayı gereği sürüyor.
5. **"Şunu yapıyoruz" cümleleri.** Sektör sayfalarında hizmetin sınırını çizen yeni cümleler var: rezervasyon motoru ve
   sipariş sistemi kurmuyoruz (sayfayı var olan sisteme bağlıyoruz), çeviriyi müşteri yapar, pazaryeri mağazasını ve
   ödeme altyapısını müşteri yönetir, çekimi müşteri yapar, QR kodun basılması müşteride kalır. Hizmetinize uymayan
   varsa ilgili sektör dosyasında tek cümlelik değişiklikle düzelir.
6. **Platform rakamları.** Blog yazılarında yalnız resmî yardım sayfalarında geçen rakamlar var (ör. Kalite Puanı 1 ile 10,
   Meta'da öğrenme aşaması için 50 sonuç, günlük bütçede %75'e kadar esneme, iPhone uygulamasından öne çıkarmada Apple
   hizmet ücreti %30, Core Web Vitals eşikleri). Platformlar bunları değiştirebilir; her yazının sonunda kaynak ve son
   kontrol tarihi yazıyor. Meta'nın Türkiye için "konum ücreti" oranı yürürlük tarihi doğrulanamadığı için yazıya alınmadı.
7. **Fiyat konulu üç yazı** (web sitesi fiyatları, Instagram reklam ücretleri, ajans seçimi) hiçbir TL tutarı, aralık ya da
   bütçe eşiği içermiyor; fiyatı neyin belirlediğini anlatıyor. Bu, PRD'nin fiyat yazmama kuralına uygun; okurun
   rakam beklentisini karşılamadığını bilerek böyle bırakıldı.
8. **Terim seçimleri.** GEO için "üretken yapay zekâ optimizasyonu" kullanıldı (Google'ın Türkçe rehberi "Üretken Arama
   Motoru Optimizasyonu" diyor). Google'ın özelliği sitede "yapay zekâ özeti" diye geçiyor (Google'ın Türkçe adı
   "Yapay Zeka Bakışı"). WhatsApp Business'ta "Hazır yanıtlar" ve "Listeler (eski adıyla etiketler)" resmî adlardır.

### Görüşme bölümü (her sayfanın sonundaki mavi bant)

Marka sahibi ana sayfadaki "Satışlarınızı artırmaya nereden başlayalım?" bölümünün güzelleştirilmesini istedi. Bölüm
`src/components/GorusmeBandi.astro` olduğu için bütün sayfalarda yenilendi: başlığın son kelimesinin altı kâğıt beyazı
kalemle çiziliyor; altında "Görüşme nasıl ilerler?" başlıklı üç adım var (süre ya da sonuç sözü içermez); sol altta
bölümün mavisiyle birleşen yeni bir kâğıt işi sahne duruyor (dükkânından çıkan esnaf, kırmızı çizgiyi izleyerek telefonu
çalan görüşme masasına yürüyor); form beyaz bir fiş olarak lacivert sert gölgeyle ve "Kendinizi tanıtın" başlığıyla
duruyor. Formun alanları, doğrulaması ve gönderimi değişmedi.

### Doğrulama

- Sektör sayfaları, blog dizini, örnek yazılar ve üst menü 1440, 1920 ve 390 genişlikte ekran görüntüsüyle kontrol edildi;
  yatay taşma yok. Üst menünün açık hâlleri `node araclar/menu-ekran.mjs` ile çekildi (1100, 1440, 1920, 834 ve 390).
- `node araclar/sektor-denetle.mjs`, `node araclar/yazi-denetle.mjs` ve `node araclar/denetim.mjs` sonuçları ve derleme
  durumu bu bölümün sonundaki "Son durum" satırında yazıyor.
- Gerçek cihazda denenmedi. Üst menü panelleri fareyle ve klavyeyle (düğme, Escape, sekme) çalışacak biçimde yazıldı;
  dokunmatik geniş ekranda (yatay tablet) panel, başlığın yanındaki ok düğmesiyle açılır.
- **Son durum (15 Kasım 2026):** `node araclar/denetim.mjs` "Sorun bulunmadı" (bozuk bağlantı ve çapa yok, her sayfada tek H1,
  başlık ve açıklamalar benzersiz, uzun tire yok). `node araclar/sektor-denetle.mjs` sekiz sektörde temiz.
  `node araclar/yazi-denetle.mjs` 20 yeni yazıda temiz; ilk altı rehberde yalnız bilerek bırakılan satırlar kalıyor
  (kısa gövde, üç ara başlık, bir yazıda tek kaynak: bu yazılar yeniden yazılmadı, yalnız görselleştirildi).
  `npx astro build` tamamlanıyor: 26 blog yazısı, 8 sektör sayfası ve dizinleri üretiliyor; site haritasında 22 adres var
  (sektör sayfaları dahil, incelemedeki blog yazıları hariç). Eski `/rehberler/...` adresleri sunucuda 301 ile `/blog/...` adresine gidiyor.
- **Bilinen küçük kalan:** `onizleme/_c` klasörü (bir yazım ajanının 87 ekran görüntüsü) silinemedi; zararsızdır, elle silinebilir.
  Geliştirme sunucusunda `astro.config.mjs` değişince içerik deposu yeni yazıları almayı bırakabiliyor; sunucuyu yeniden başlatmak düzeltiyor.

## 0.2 Web tasarım eklemeleri, sağlık turizmi sayfası, hikâye bölümü ve iletişim yolları (15 Kasım 2026)

Marka sahibinin isteği: web tasarım sayfasına beş özellik ve "çünkü" cümleleri; sağlık turizmi için ayrı bir sayfa
(Dr. Emre Apaydın ve Uzm. Dr. Belda Yurtseven Tüner örnek gösterilerek); hakkımızda sayfasına kuruluş hikâyesi; sitenin
genelinde kanıtlanmış müşteri kazanma pratikleri ve gereksiz yerlerin sadeleştirilmesi. Verilen örnek metinler birebir
alınmadı, sitenin diliyle yeniden yazıldı.

### Ne eklendi?

- **Web tasarım sayfası** (`/hizmetler/web-tasarim/`): sayfanın başına "İyi bir kurumsal web sitesi nasıl olmalı?" başlıklı
  beş kart (hız ve performans, mobil uyumluluk, kullanıcı odaklı, SEO dostu, yapay zekâ arama görünürlüğü; her kartta
  marka sahibinin kısa sözü ve bizim nasıl yaptığımızı söyleyen bir cümle). "İlk ekran" bölümünden sonra lacivert bantta
  "Neden böyle tasarlıyoruz?": üç büyük cümle, her birinde "çünkü" kâğıt bir etiket olarak durur. Kapsam listesi altıdan
  dörde indi (hız ve SEO maddeleri yeni kartlarla aynı şeyi söylüyordu). Sayfa sonundaki başlık "Projeniz mi var? Bizimle
  iletişime geçebilirsiniz." oldu.
- **Sağlık turizmi sayfası** (`/sektorler/saglik-turizmi/`, veri: `src/data/sektorler/saglik-turizmi.ts`): çok dilli site,
  uluslararası SEO, yapay zekâ yanıtlarında kurum bilgisinin doğruluğu, yetki belgesi olan kurumlar için yurt dışına
  yönelik reklam ve yabancı hastadan gelen ilk mesajın karşılanma düzeni. Referans olarak iki hekim sitesi (yalnız SEO ve GEO) kayıtlı sözleriyle gösteriliyor ve
  "sağlık turizmi projesi değil, aynı yaklaşımın sağlıktaki örneği" diye açıkça yazıyor. Sektör sayısı dokuz oldu; üst
  menü paneli, sektör dizini, ana sayfa şeridi ve alt bilgi üçerli ızgaraya geçti.
- **Hakkımızda** (`/hakkimizda/#hikaye`): "Hikâyenizi anlatmanıza yardımcı olalım." bölümü; açılır kitaptan yükselen kâğıt
  kasaba sahnesi, kuruluştaki iki söz ("Hep gelişmek", "Fark yaratmak") ve üç kısa paragraf. Kuruluş yılı, kişi adı ya da
  rakam yazılmadı.
- **İletişim yolları (müşteri kazanma):**
  - WhatsApp bağlantıları sohbeti hazır bir ilk cümleyle açıyor ("Merhaba, SEO hakkında görüşmek istiyorum." gibi; blog
    yazısında yazının adıyla). Tek yerden üretiliyor: `src/lib/iletisim.ts`. Cümlede kişisel veri yok.
  - Her sayfanın sonundaki form fişinin altında "Form doldurmak istemezseniz": WhatsApp ve telefon düğmeleri.
  - Formun yanında, sayfanın konusuna uyan kayıtlı bir müşteri sözü (`GorusmeBandi` `kanit`; ana sayfada, proje
    sayfalarında ve sektör sayfalarında kapalı, çünkü o sayfalarda söz zaten var). Sağlık alanındaki sözler burada kullanılmıyor.
  - Geniş ekranda sağ altta, ilk ekran geçildikten sonra beliren "WhatsApp’tan yazın" düğmesi (form ve alt bilgi görünürken
    gizlenir; telefonda alt çubuk aynı işi görüyor). Üst menüde 86rem ve üstünde tıklanınca arayan telefon numarası.
  - Blog yazılarının sonunda "Bu yazıyla ilgili bir sorunuz mu var?" kartı (WhatsApp ve görüşme formu).
  - Teşekkür sayfasında "Beklemek istemezseniz WhatsApp’tan da yazabilirsiniz" satırı.
  - Bütün telefon ve WhatsApp tıklamaları `phone_click` ve `whatsapp_click` olayı olarak ölçülüyor (`data-yer` ile konum).
- **Bilerek yapılmayanlar:** sahte aciliyet ya da sayaç, açılır pencere, "ücretsiz analiz", uydurma rakam, sonuç ya da
  süre sözü. Formun alanları ve sunucu tarafı değişmedi.

### Yayından önce marka sahibinin bakması gerekenler

1. **Sağlık turizminde reklam.** Marka sahibinin isteğiyle (15 Kasım 2026) dördüncü kanal kartı "Yurt dışı reklamı: yalnız
   yetki belgesiyle" oldu (Google İşletme Profili kartının yerine; profil artık SEO kartının maddesinde geçiyor). Kart, kural
   notu ve "Sağlık turizminde reklam verilebilir mi?" sorusu şunu söylüyor: reklam yalnız yetki belgesi olan kurumlar için,
   yurt dışına ayrılmış site ya da hesap üzerinden, Türkçe dışındaki dillerde kurulur; Türkiye'deki kişiler hedeflenmez;
   yetki belgesi sitede yayımlanır. Dayanak: yetki belgesi, belgeyi kimin düzenlediği, yabancı dilli site zorunluluğu ve
   doğrudan başvuran hastanın kabulü Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik'in (Resmî Gazete
   26 Nisan 2025, sayı 32882) USHAŞ sitesindeki metninden doğrulandı. Reklam koşulları ise Sağlık Hizmetlerinde Tanıtım ve
   Bilgilendirme Faaliyetleri Hakkında Yönetmelik'in (Resmî Gazete 12 Kasım 2025, sayı 33075) **ikincil bir kaynaktaki**
   aktarımından okundu (alomaliye.com); resmî siteler bağlantıyı kesti. **Yayından önce resmî metinle ve hukuk danışmanınızla
   karşılaştırın.** İki açık nokta: (a) aynı yönetmeliğin genel hükümlerinde arama motorlarında ücretli öne çıkma
   kayıtlarına ilişkin bir yasak var; Google arama reklamının sağlık turizminde serbest olup olmadığı netleştirilemedi,
   bu yüzden kart sosyal medya reklamı sayfasına bağlandı ve "hangi mecranın uygun olduğuna kurumla birlikte bakıyoruz"
   yazıldı; (b) yönetmelik HealthTürkiye logosu ve hasta yorumu gibi başka koşullar da içeriyor, bunlar sayfaya alınmadı.
   Sektör dizinindeki "sağlıkta reklam kurmuyoruz" cümlesi buna göre düzeltildi. Bu sayfa hukuki görüş değildir.
2. **Sağlık turizmi sayfasındaki sınır cümleleri:** "Yetki belgesi olmayan kurum için tanıtım kampanyası kurmuyoruz",
   "belge süreciniz sürüyorsa yurt dışına dönük yayını belge alındıktan sonra açıyoruz", "Biz aracı kuruluş değiliz",
   "mesajları kurumun kendi ekibi yanıtlar", "çeviriyi kurumun çevirmeni yapar", "Türkiye'deki kişileri hedeflemiyoruz". Bunlar
   gerçek çalışma biçiminizle uyuşmuyorsa veri dosyasından değiştirilmeli.
3. **İki hekimin referans notları** ("projede yalnız SEO ve GEO yer aldı") ve sözlerinin bu sayfada kullanımı için onay.
4. **Formun yanındaki müşteri sözleri.** Sözler ana sayfadakilerle aynı kayıttan geliyor; artık hizmet, blog, hakkımızda ve
   dizin sayfalarında formun yanında da görünüyor. Müşteri onayı konusu (0.1'deki madde) bu kullanım için de geçerli.
5. **Hikâye metni** marka sahibinin verdiği düşünceden yeniden yazıldı; "dijital pazarlamada işler birbirinin kopyası gibi
   yapılıyordu" cümlesi marka sahibinin görüşüdür.

### Doğrulama

- Web tasarım, hakkımızda ve sağlık turizmi sayfaları 1440 ve 390 genişlikte baştan sona; özellik kartları 1000, "neden"
  bandı 1920, üst menü 1000 ve 1200 genişlikte ekran görüntüsüyle kontrol edildi; yatay taşma yok. Sabit duran öğeler
  (alt çubuk, yüzen düğme) için yeni araç: `node araclar/gorunum.mjs <url> <genişlik> <seçici|-> <çıktı.jpg>`.
- `node araclar/sektor-denetle.mjs saglik-turizmi` temiz (2807 kelime, 10 arama, 6 soru, 4 kanal, 5 adım, 2 referans, 9 soru).
  `node araclar/denetim.mjs` "Sorun bulunmadı". `npx astro build` tamamlanıyor; dokuz sektör sayfası üretiliyor.
- Denenmeyenler: gerçek cihaz; WhatsApp bağlantısının telefonda uygulamayı açması; teşekkür sayfasındaki yeni satır
  (yalnız gerçek bir form gönderiminden sonra görünür, gönderim yapılmadı).

## 0.3 Şehir ve ilçe sayfaları, yeni sektörler, mobil ana sayfa ve alt bilgi (15 Kasım 2026)

Marka sahibinin istekleri (kendi sözleri, kısaltılarak): "ankara istanbul izmir bursa eskişehir antalya'ya özel sayfalar
yapalım ... openseo aracılığıyla anahtar kelimelere bak ... arama yapılan ilçeler varsa ... bunlara da sayfa
oluşturabilirsin. sayfa oluşturma ve içerik kararlarını tamamen sana bırakıyorum"; "mimarlık, dizayn, inşaat ve
otomativ firmalarını çekecek içerikler ve sayfalar da oluştur"; "çeşitli bloglar da yazabilirsin"; "anasayfanın mobil
görünümünü tutarlı ve mükemmel hale getirelim"; "mobilde footerın görünümünü güzelleştir"; sağlık turizmi sayfasına
yurt dışı reklam kartı eklensin ("Evet, ekle").

### Ne eklendi?

- **30 şehir ve ilçe sayfası** (`/sehirler/` dizini; adresler kök dizinde: `/ankara-web-tasarim/`, `/cankaya-web-tasarim/`):
  - Şehir sayfaları (17): Ankara, İstanbul, İzmir, Bursa, Antalya için web tasarım, reklam ajansı ve SEO; Eskişehir için
    web tasarım ve reklam ajansı (Eskişehir'de "SEO" aramaları ayrı sayfa açacak hacimde değildi).
  - İlçe sayfaları (13, hepsi web tasarım): Çankaya, OSTİM, Beylikdüzü, Avcılar, Kadıköy, Ataşehir, Ümraniye, Pendik,
    Kartal, Karşıyaka, Buca, Alanya, Manavgat. (Ölçümde 50 aramanın üstünde kalan ilçeler; ilçelerde hacim yalnız
    "web tasarım" kalıbında çıktı.)
  - Sayfa açma kararı OpenSEO ölçümüne dayanıyor (Türkiye, aylık yaklaşık, 15 Kasım 2026). "Şehir + dijital pazarlama
    ajansı" aramaları çok düşük çıktı (Ankara 50); işletme sahipleri "reklam ajansı" yazıyor, sayfalar bu yüzden o ifadeyle.
  - Her sayfa kendi şehrinin ya da ilçesinin iş dokusuna göre yazıldı (sanayi bölgeleri, çarşılar, turizm, üniversiteler);
    sayfalar arasında aynen tekrar eden cümle yok (`node araclar/yerel-denetle.mjs --benzerlik`).
  - Reklam ajansı sayfaları, aynı aramayı tabela ve matbaa arayanların da yaptığını kabul edip ne yaptığımızı
    (Google ve Instagram reklamı) ve ne yapmadığımızı (tabela, baskı, açık hava, sosyal medya hesap yönetimi) açıkça yazıyor.
  - Hiçbir sayfada o şehirde ofisimiz olduğu yazmıyor; hepsi uzaktan çalıştığımızı söylüyor.
  - Bağlantılar: alt bilgide "Şehirler" sütunu, üst menüdeki sektör panelinde "Şehrinize göre sayfalar", mobil menüde
    "Şehirler", dört hizmet sayfasının sonunda "Şehrinize göre ..." bölümü, her şehir sayfasında aynı şehrin diğer sayfaları,
    site haritası.
  - Kâğıt işi şehir sahneleri: altı şehir için ayrı (gorsel-kaynak/KAYIT.md).
- **Üç yeni sektör sayfası:** mimarlık ofisleri, iç mimarlık ve dekorasyon, otomotiv (sektör sayısı 12).
- **16 yeni blog yazısı** (no 27 ile 42; mimarlık 2, iç mimarlık ve mobilya 2, inşaat ve emlak 2, otomotiv 3, genel 7).
  Konular ölçülmüş aramaya göre seçildi; hepsi `durum: inceleme` (arama motoruna kapalı) ve kapaklı. Durum aşağıdaki
  "Son durum" satırında.
- **Ana sayfa, telefon:** soru kartlarında görsel başlığın yanına küçüldü (kartlar kısaldı), sektör karoları üçerli eş
  ızgaraya geçti, altı marka iki sütunda küçük pencereler olarak bir arada, "Bütün çalışmalar" diğer bölümlerle aynı oklu
  bağlantı oldu; hareket azaltma tercihinde logo şeridi üç sütunlu düzgün ızgara.
- **Alt bilgi, telefon:** iletişim tek çerçevede dokunulacak üç satır (telefon, WhatsApp, e-posta); bağlantı grupları açılır
  kapanır satırlar (betik yoksa hepsi açık); yasal bağlantılar telif satırının üstünde. Geniş ekranda dört sütun.
- **Sağlık turizmi:** dördüncü kanal kartı "Yurt dışı reklamı: yalnız yetki belgesiyle" (0.2'deki madde 1 güncellendi).
- **"En iyi ... firmaları" ve "... fiyatları" aramaları** (marka sahibinin önerisi). Ölçüm: şehir adıyla "en iyi web tasarım"
  aramalarında veri yok; tek istisna "istanbul en iyi reklam ajansları" (880). Şehir fiyat aramaları küçük: Ankara 90,
  İzmir 90, İstanbul 40, Antalya 20, Bursa 10. Ülke genelinde "web tasarım firmaları" 880, "en iyi web tasarım firmaları" 390.
  Bu yüzden ayrı ve birbirine benzeyen ince sayfalar açılmadı; aramalar mevcut sayfalarda karşılandı:
  - Altı şehrin web tasarım ve reklam ajansı sayfalarına "<Şehir>’da ... nasıl seçilir?" bölümü (yedi ölçüt; İstanbul
    reklam sayfasında başlık "İstanbul’da en iyi reklam ajansı nasıl seçilir?").
  - Ankara, İstanbul, İzmir ve Antalya web tasarım sayfalarına "<Şehir>’da web tasarım fiyatları neye göre değişir?"
    bölümü (sekiz kalem, rakam yok; ortak içerik `src/data/yerel/rehber.ts`).
  - Ülke geneli için blog yazısı: "En iyi web tasarım firması nasıl seçilir?" (no 43). Liste değildir; hiçbir firmayı
    (bizi de) "en iyi" ilan etmez ve rakip adı vermez. "En iyi" sözü yalnız aranan soru olarak geçer.

### Yayından önce marka sahibinin bakması gerekenler

1. **Mimarlık ofisleri sayfası reklamsız.** TMMOB Mimarlar Odası Mesleki Davranış Kuralları Yönetmeliği m. 7(c):
   "Hiçbir şekilde reklam yapamaz" (kaynak: http://www.mo.org.tr/mevzuatDocs/mesleki-davranis-080609.doc, odanın kendi
   sitesi). Sayfa site, SEO, yapay zekâ görünürlüğü ve işletme profiliyle çalışıyor; inşaat sayfasının "kimler" satırından
   mimarlık ofisleri çıkarıldı. İçmimarlar Odası'nın yayımlı yönetmeliklerinde böyle bir hüküm bulunamadı; iç mimarlık
   sayfası reklam öneriyor ve "oda üyesiyseniz kurallarınızı kontrol edin" diyor. İkisini de hukukçunuza gösterin.
2. **Ofis bilgisi.** Bir şehirde ofisiniz varsa söyleyin; o şehrin sayfalarına adres ve "yüz yüze görüşme" eklenir.
   Şu an bütün sayfalar uzaktan çalışmayı anlatıyor.
3. **Eskişehir sayfaları** Estika ve EsVia'yı "Eskişehir'den çalıştığımız markalar" diye gösteriyor (iki markanın kendi
   sitesinde Eskişehir yazıyor). Notlar yalnız proje kaydındaki işi anlatıyor.
4. **Otomotiv ve iç mimarlık sayfalarının "şunu yapıyoruz" cümleleri** (ilan sitesi mağazasını ve rezervasyon yazılımını
   sizin yönettiğiniz, fotoğrafları sizin sağladığınız, ilk mesaj yanıtını birlikte yazdığımız gibi): çalışma biçiminize
   uymayan varsa veri dosyasından değiştirilmeli (`src/data/sektorler/`).
5. **Arama hacimleri** ölçüm aracının yaklaşık değerleridir; üç değer şaşırtıcı yüksek çıktı ve başka kaynakla doğrulanmadı
   ("istanbul reklam ajansı" 9.900, "alanya web tasarım" 1.000, "beylikdüzü web tasarım" 720). Sayfalarda bu değerler
   "aracın verdiği yaklaşık değer" diye anılıyor.
6. **Fiyat yayımlama kararı.** "Ankara web tasarım fiyatları" gibi aramalarda okur rakam bekliyor; sitede iş kararı gereği
   rakam yok, bölümler fiyatı neyin belirlediğini anlatıyor. Başlangıç fiyatı yayımlamak isterseniz bu kararı siz verirsiniz;
   o zaman fiyat bölümleri ve `web-sitesi-fiyatlari` yazısı güncellenmeli.
7. **Yeni blog yazılarında onayınızı bekleyen cümleler** (yazarların raporundan):
   - YouTube yazısı video kampanyalarını Google Ads yönetiminin parçası gibi anlatıyor; hizmet sayfasında video kampanyası
     geçmiyor. YouTube kampanyası yönetiyor musunuz?
   - Instagram işletme hesabı yazısı: "Hesabın günlük yönetimi, paylaşımlar ve gelen mesajlar sizde kalır; biz reklam
     tarafını kuruyoruz." Mobilya ve YouTube yazıları: fotoğraf ve video çekimi yapmadığımızı söylüyor.
   - Emlak reklamı yazısı: Meta'nın konut ilanları için "Özel Reklam Kategorisi" kısıtlamalarının Türkiye'de geçerli olup
     olmadığı Meta'nın sayfasından doğrulanamadı; yazı bunu açıkça söylüyor.
   - Apple Haritalar yazısı: Apple, Business Connect araçlarını 2026'da "Apple Business" hizmetine taşıdı (Apple Newsroom,
     24 Mart 2026); Türkçe arayüz terimleri doğrulanamadı, adımlar işleviyle yazıldı.
   - Google AI Modu yazısı: Türkiye'de ve Türkçe kullanılabildiği Google'ın yardım sayfası ve Türkiye blogundan (18 Şubat
     2026) doğrulandı; AI Modu'nu kapatan resmî bir ayar bulunamadı, yazı da öyle söylüyor.
   - Mimarlık yazıları Mimarlar Odası metnine gövde içinden bağlanıyor (odanın sitesi yalnız http ile açıldığı için kaynak
     listesinde yok).

### Doğrulama

- `node araclar/yerel-denetle.mjs` 30 sayfada temiz; `--benzerlik` "aynen yinelenen cümle yok".
  `node araclar/sektor-denetle.mjs` yeni üç sektörde ve inşaat sayfasında temiz.
- Ekran görüntüsü: ana sayfa 390 (tam boy), alt bilgi 390 ve 1440 ve 1100, şehir dizini 1440 ve 390, Ankara web tasarım
  1440 ve 390, Eskişehir reklam ajansı 1440, Beylikdüzü 390, sektör paneli 1440; yatay taşma yok. Telefondaki alt çağrı
  çubuğunun ilk ekranda bağlantının üstüne bindiği görüntü tam boy çekimin yan etkisi; gerçek tarayıcıda çubuk ilk ekranda gizli.
- Gerçek cihazda denenmedi.
- **Son durum:** bölüm 0.4'teki derleme satırına bakın.

## 0.4 Hukuki düzenlemeler ve yayına alma (15 Kasım 2026)

Marka sahibinin isteği: "hukuki sayfaları inceledim, kendimizi hukuki açıdan en iyi şekilde koruyacağımız düzenlemeleri
yap gördüm olarak varsay ve websitesini buraya commitle, hostinger aracılığıyla github üzerinden canlıya alacağım";
"genel olarak sektörel ortalamalardan bahsedebilirsin sadece fiyatlar sayfasında".

### Ne değişti?

- **Aydınlatma metni** baştan yazıldı (KVKK m. 10 ve Aydınlatma Tebliği): veri kategorileri (kimlik, iletişim, müşteri
  işlem, kaynak bilgisi, işlem güvenliği, ölçüm), toplama yöntemi, her amaç için hukuki sebep (m. 5/2-c, ç, e, f; ölçüm
  için açık rıza), telefon, WhatsApp ve e-postayla gelen iletişim, aktarılan alıcı grupları, yurt dışına aktarım (m. 9),
  somut saklama süresi (sözleşmeye dönüşmeyen talepler en geç iki yıl; sözleşmeye dönüşenlerde mevzuattaki süre), m. 11
  hakları ve Başvuru Tebliği'ne uygun başvuru yolu (yazılı, KEP, güvenli e-imza ya da kayıtlı e-posta; otuz gün).
- **Gizlilik** sayfası: telefon, WhatsApp ve e-posta bölümü, IP adresinin kayda yazılmadığı ve en çok on dakika
  bellekte tutulduğu, güvenlik, yurt dışı ve saklama süresi. Kod da buna göre düzeltildi: süresi dolan IP adresleri artık
  dakikada bir bellekten siliniyor (`src/pages/api/talep.ts`).
- **Yeni sayfa: Kullanım koşulları** (`/kullanim-kosullari/`): içeriğin genel bilgilendirme olduğu ve danışmanlık yerine
  geçmediği; sitenin teklif olmadığı; sonuç garantisi verilmediği; arama hacmi, platform ve fiyat bilgilerinin tarihli
  üçüncü taraf verisi olduğu; "temsili" örneklerin kurgu olduğu; markaların sahiplerine ait olduğu ve platformlarla
  bağlantı bulunmadığı; fikri haklar; bağlantılar; kullanım kuralları; Türk Borçlar Kanunu m. 115 ve tüketici mevzuatı
  saklı tutularak sorumluluğun sınırları; uygulanacak hukuk.
- **Alt bilgi:** kullanım koşulları bağlantısı, "marka ve logolar sahiplerine aittir" notu ve veri sorumlusu bilgileri
  doldurulunca görünen künye satırı (unvan, adres, MERSİS, vergi dairesi ve numarası, KEP).
- **Blog yazıları:** her yazının kaynak notuna "genel bilgilendirme amaçlıdır; hukuki, mali ya da vergisel danışmanlık
  yerine geçmez" cümlesi ve kullanım koşulları bağlantısı.
- **Fiyatlar yazısı** (`/blog/web-sitesi-fiyatlari/`): kaynaklı piyasa aralıkları eklendi (marka sahibinin istisnası; başka
  hiçbir sayfada rakam yok, kendi fiyatımız hiçbir yerde yok).
- **Depo ve yayın:** `.gitignore` form kayıtlarını (`veri/`, `*.sqlite`), `.env` dosyalarını, ekran görüntülerini ve ham
  görselleri (`gorsel-kaynak` içindeki büyük dosyalar) dışarıda tutuyor. Hostinger kurulumu README'de ("Canlıya alma").

### Yayından önce mutlaka yapılması gerekenler

1. **Veri sorumlusu bilgileri** (`src/site.config.ts` > `SITE.veriSorumlusu`): 16 Kasım 2026'da unvan (Adra Yazılım
   Ltd. Şti.) ve tebligat adresi (Çankaya/Ankara) girildi; yasal sayfalar taslaktan çıktı ve aramaya açıldı. KVKK başvuru
   e-postası ayrıca verilmediği için sayfalar info@satislariartir.com adresini kullanıyor. MERSİS, vergi dairesi ve
   numarası, KEP henüz verilmedi; girilince künyede ve yasal sayfalarda kendiliğinden görünür.
2. **Yurt dışına aktarım:** Hostinger'da sunucu konumunu seçerken Türkiye dışındaki bir veri merkezi seçilirse talep
   kayıtları yurt dışına aktarılmış olur. KVKK m. 9 kapsamında barındırma şirketiyle standart sözleşme imzalanıp beş iş
   günü içinde Kurul'a bildirilmesi gerekebilir. Bunu hukuk danışmanınızla netleştirin.
3. **VERBİS:** Kayıt yükümlülüğünüz olup olmadığı çalışan sayısı ve yıllık bilanço eşiğine bağlıdır; danışmanınıza sorun.
4. **Müşteri logoları, yorumları ve ekran görüntüleri:** her markadan yazılı kullanım izni alındığından emin olun
   (alındı sayıyoruz; izni olmayanı `src/data/projeler.ts` ve `src/components/MarkaSeridi.astro` içinden çıkarın).
5. **Blog yazıları** şu an `durum: inceleme` (aramaya kapalı). Yayına açma kararı bekleniyor.

6. **Fiyat tablosu eskir.** `/blog/web-sitesi-fiyatlari/` tablosundaki rakamlar 15 Kasım 2026'da açılan sayfalardan
   (Armut, ikas, Ticimax, İsimtescil, Hostinger, Natro, Let's Encrypt) alındı; Ticimax ve Natro rakamları Kasım kampanya
   fiyatı. Tablo en az üç ayda bir yenilenmeli. Yazı denetimde bilerek istisna (`araclar/yazi-denetle.mjs` > `FIYAT_ISTISNASI`).

### Doğrulama

- `npx astro build` tamamlanıyor (106 sayfa); `node araclar/denetim.mjs` "Sorun bulunmadı"; site haritasında 57 adres
  (yasal sayfalar ve incelemedeki blog yazıları hariç).
- Yasal sayfalar, aydınlatma tablosu (telefonda dahil), kullanım koşulları, alt bilgi ve fiyat tablosu 1440 ve 390
  genişlikte kontrol edildi.
- Depo: https://github.com/noxventi/satislariartir (`main`). İlk commit `3a4716c`; fiyat güncellemesi ikinci commit.
- **Canlı (15 Kasım 2026, 20:50):** ilk dağıtımda Hostinger'da Giriş dosyası boş kaldığı için site statik yayımlanmıştı
  (ana sayfa 403, sayfalar `/client/` altında, sunucu dosyası herkese açık). Ayar düzeltildi: Framework Astro, Node 24.x,
  Çıktı dizini `dist`, Giriş dosyası `server/entry.mjs`. Sonrasında canlıda kontrol edilenler: ana sayfa, blog, şehir,
  sektör, iletişim ve kullanım koşulları 200; site haritası 57 adres; robots.txt aramaya açık; `/api/talep/` yalnız
  gönderim kabul ediyor (405); `/yonetim/talepler/` şifre tanımlı olmadığı için kapalı (404); `/server/entry.mjs` ve
  `/client/` artık 404; eski `/rehberler/` adresi 301; www adresi açılıyor.
- **Henüz denenmeyen:** canlıda gerçek bir form gönderimi (kayıt açacağı için yapılmadı). Yönetim şifresi tanımlandıktan
  sonra bir deneme başvurusu gönderip `/yonetim/talepler/` sayfasında görünmesini kontrol edin.

## 1. Durum

Site çalışır durumda: 25 sayfa, gerçek Türkçe metin, 360 ile 1440 px arasında kontrol edilmiş düzen, kayıt alan form.
**Canlıya çıkmadan önce bölüm 9'daki işletme bilgileri tamamlanmalı.** Bu bilgiler olmadan yasal metinler taslaktır ve
rehberler uzman incelemesi beklemektedir.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm start
```

Ortam değişkenleri `.env.example` dosyasında açıklanmıştır. Sunucu Node 22.23 ya da üstünü ister (yerleşik SQLite kullanılır).

## 2. Sayfalar: canlıya alınacaklar ve taslakta kalanlar

| Sayfa | Adres | Arama durumu | Not |
|---|---|---|---|
| Ana sayfa | `/` | Açık | |
| Hizmetler dizini | `/hizmetler/` | Açık | |
| Google Ads yönetimi | `/hizmetler/google-ads-yonetimi/` | Açık | |
| Meta reklam yönetimi | `/hizmetler/meta-reklam-yonetimi/` | Açık | |
| SEO danışmanlığı | `/hizmetler/seo-danismanligi/` | Açık | |
| GEO ve AEO | `/hizmetler/yapay-zeka-gorunurlugu/` | Açık | H1 arama verisiyle değişti (bölüm 5) |
| Web tasarım | `/hizmetler/web-tasarim/` | Açık | H1 arama verisiyle değişti (bölüm 5) |
| Çalışmalarımız | `/calismalarimiz/` | Açık | 18 proje, kapsam kaynağıyla |
| ÇelikVillam, Hun Education | `/calismalarimiz/…/` | Açık | Ölçülmüş sonuç yok, "proje kapsamı" olarak sunuldu |
| Rehberler dizini | `/rehberler/` | Açık | |
| Blog yazıları (43) | `/blog/…/` | **Açık (index)** | 15 Kasım 2026'da yayına alındı; site haritasında |
| Hakkımızda, İletişim | `/hakkimizda/`, `/iletisim/` | Açık | Ekip adları ve iletişim bilgisi bekliyor |
| Reklam açılış sayfaları | `/lp/google-ads-hesap-inceleme/`, `/lp/meta-reklam-inceleme/` | Kapalı (noindex, taranabilir) | Site haritasında yok, AdsBot erişebilir |
| Gizlilik, Aydınlatma, Çerez tercihleri | `/gizlilik/`, `/aydinlatma/`, `/cerez-tercihleri/` | **Açık (index)** | 16 Kasım 2026'da veri sorumlusu bilgisi girildi |
| Teşekkür, 404 | `/tesekkurler/` | Kapalı | |
| Talep listesi | `/yonetim/talepler/` | Kapalı, şifreli | Şifre tanımlı değilse sayfa yoktur |

Yazılmayan içerik: PRD'deki 36 rehberin 30'u (07-36). Rehber dizini yalnız var olan altı rehberi listeler.

## 3. Form nereye gidiyor?

1. Ziyaretçi formu doldurur. Hatalar alanın altında Türkçe görünür, odak ilk hataya gider.
2. `POST /api/talep/` sunucuda yeniden doğrular ve kaydı `veri/talepler.sqlite` dosyasına yazar.
3. Kayıt yazıldıktan sonra ziyaretçi `/tesekkurler/` sayfasında kayıt numarasını görür. Kayıt yazılamazsa alanlar korunur ve yeniden deneme sunulur.
4. `BILDIRIM_WEBHOOK_URL` tanımlıysa yeni talep o adrese gönderilir. Gönderim başarısız olursa kayıt durur, bildirim 5 dakikada bir en çok 12 kez yeniden denenir.
5. Satış sorumlusu `/yonetim/talepler/` sayfasında talepleri görür ve durumu günceller: yeni, ulaşıldı, uygun, görüşme, teklif, kazanıldı, kapandı.

**Test sonucu (14 Kasım 2026, geliştirme ve üretim derlemesi):**

| Senaryo | Sonuç |
|---|---|
| Geçerli gönderim | Tek kayıt, kayıt numarası döndü |
| Aynı formun ikinci kez gönderilmesi (çift tıklama, zaman aşımı sonrası yeniden deneme) | Aynı kayıt döndü, yeni kayıt açılmadı |
| Sayfayı yenileyip aynı iletişim bilgisiyle yeniden gönderme (10 dakika içinde) | Aynı kayıt döndü |
| Eksik ya da hatalı alan | 422, alan bazında Türkçe hata, odak ilk hatada |
| Betiksiz gönderim | Sunucu doğruladı, teşekkür sayfasına yönlendirdi |
| Teşekkür sayfasını yenileme, doğrudan açma | Başarı gösterilmedi, yeni talep ya da dönüşüm doğmadı |
| Gizli alanı dolduran otomatik gönderim | Kayıt açılmadı |
| Başka siteden gelen gönderim, sahte yönlendirme başlığı | 403 ile reddedildi |
| Talep listesi şifresiz | 401; şifre tanımlı değilken 404 |

Test kayıtları veritabanında `test` türüyle duruyor ve asıl rapora girmiyor. Canlıya çıkmadan önce `veri/` klasörü boşaltılabilir.

**Eksik olan:** e-posta bildirimi. Bugün yalnız webhook var; talebin kime, hangi sistemle iletileceği belli olduğunda bağlanmalı.
Kampanya yayına girmeden önce bir gerçek test başvurusunun sorumlunun gördüğü kuyruğa düştüğü ayrıca doğrulanmalı.

## 4. Ölçüm nasıl test edildi?

Olaylar `dataLayer`'a yazılır. GTM ve Meta Piksel kimlikleri tanımlı değildir; bu yüzden **hiçbir üçüncü taraf betiği
yüklenmiyor ve Google Ads, GA4 ya da Meta tarafında uçtan uca doğrulama yapılmadı.** Yapılan kontrol tarayıcıdadır:

| Olay | Doğrulanan davranış |
|---|---|
| `form_error` | Yalnız alan adı ve hata türü yazıldı (ör. `ad / bos`). Alan değeri yok |
| `generate_lead` | Yalnız sunucunun doğruladığı gerçek kayıtta, kayıt numarasıyla bir kez yazıldı. Yenilemede tekrarlanmadı. Test ve şüpheli kayıtlarda yazılmadı |
| `cta_click`, `service_view`, `case_view`, `form_start`, `whatsapp_click`, `phone_click` | Kodda tanımlı, tarayıcıda tek tek doğrulanmadı |

Kişisel veri (ad, telefon, e-posta, not) hiçbir olaya yazılmaz: yalnız izinli anahtarlar geçer (`src/scripts/olcum.ts`).
Kimlikler tanımlandığında yapılacaklar: GTM'de etiketleri kurmak, aynı Google Ads hedefini GA4 aktarımı ve yerel etiketle
iki kez birincil yapmamak, Meta tarayıcı ve sunucu olaylarını aynı olay kimliğiyle tekilleştirmek, takibi reddeden
ziyaretçide ağ isteklerini kontrol etmek. `qualify_lead` ve `close_convert_lead` için CRM ya da talep listesinden platforma
geri besleme yazılmadı.

## 5. Arama araştırması ve başlık kararları

Araç: OpenSEO MCP. Tarih: 14 Kasım 2026. Pazar Türkiye, dil Türkçe, motor Google. Harcama yaklaşık 82 kredi.
Ayrıntı: `arastirma/openseo-2026-11-14.md` ve `.csv`. 49 sorgunun 13'ü veri döndürmedi; sorun odaklı sorguların çoğunda hacim yok.

| Adres | H1 | Karar |
|---|---|---|
| `/` | Dijital pazarlama ajansı | **Değişti** (14 Kasım geri bildirimi). "dijital pazarlama ajansı" aylık yaklaşık 2.400, "reklam ajansı" 6.600 |
| Google Ads | Google Ads reklam yönetimi | Korundu |
| Meta | Instagram ve Facebook için Meta reklam yönetimi | Korundu |
| SEO | SEO danışmanlığı | Korundu |
| GEO ve AEO | GEO ve AEO danışmanlığı: yapay zekâ aramalarında görünürlük | **Değişti.** "yapay zeka görünürlüğü" ve "aeo danışmanlığı" veri döndürmedi; "geo danışmanlığı" ve "geo ajansı" yükselişte |
| Web tasarım | Kurumsal web tasarım | **Değişti.** "kurumsal web tasarım" aylık 2.900, önceki ifade aylık 70 |

Arama başlıklarında marka eki ` | Satışları Artır` biçimindedir.

İkinci sorgu (aynı gün, 30 terim): insanlar derdini değil çözümü arıyor. "google'a reklam vermek" 5.400, "instagram reklam verme" 5.400,
"web sitesi yaptırmak" 590; "satışları artırmak", "müşteri bulma yolları" gibi ifadeler 10 ile 70 arasında. Ana sayfanın üst alanındaki
arama hacimleri bu veridir.

## 6. Kullanılan gerçek kaynaklar

- Obrandy referans sayfası (18 proje, kapsam etiketleri, Ejder Bey yorumu): tarayıcıda açılıp doğrulandı. Yorum kaynağında kelimesi kelimesine yer alıyor. Marka sahibinin kararıyla bu kaynak sitede gösterilmiyor.
- celikvillam.com ve huneducation.com: proje sayfalarındaki olgular bu sitelerden alındı.
- Google Ads Yardım: "Arama terimleri raporu hakkında", "Telefon araması dönüşümü izleme hakkında", "Reklamınızı görememenizin nedeni". Üçü de açılıp okundu.
- Google Search Central (AI özellikleri) ve Search Console yardım sayfaları: açılıp okundu.
- **Meta yardım sayfaları: yalnız başlıkları doğrulanabildi, içerikleri okunamadı.** Meta ile ilgili anlatım bu yüzden genel tutuldu. 02, 03, 05 ve 06 numaralı rehberler ile Meta hizmet sayfası uzman incelemesinde canlı arayüzle karşılaştırılmalı.

## 7. Görseller

Higgsfield ile 11 görsel üretildi; kayıt `gorsel-kaynak/KAYIT.md` dosyasında (talimat, model, üretim kimliği, onay, kırpım odağı).
Canlı proje sitelerinin gerçek ekran görüntüleri ayrıdır ve aynı dosyada açıklanmıştır.

## 8. Önizlemeler

`onizleme/` klasöründe dokuz sayfanın 1440 ve 390 px tam boy görüntüsü var. Yeniden üretmek için:

```bash
node araclar/ekran.mjs http://localhost:4321/ 390 onizleme ana-sayfa-390
```

Site denetimi (bozuk bağlantı, çapa, tek H1, benzersiz başlık, uzun tire):

```bash
node araclar/denetim.mjs
```

Son denetim: 25 sayfa, sorun yok. 360, 390, 768, 1024 ve 1440 px'te yatay taşma yok (768 ve 1024 yalnız ana sayfa ve Google Ads sayfasında bakıldı).

## 9. Bekleyen işletme bilgileri

`src/site.config.ts` içinde boş bırakılan her alan ön yüzde gizlidir; hiçbiri tahminle doldurulmadı.

- **Kurumsal iletişim:** telefon ve WhatsApp (+90 530 574 77 35) ile e-posta (info@satislariartir.com) 15 Kasım 2026'da marka
  sahibinden geldi ve girildi; iletişim sayfasında, alt bilgide, mobil menüde ve telefondaki sabit çağrı çubuğunda görünüyor.
  Adres ve çalışma saatleri hâlâ boş; girilince iletişim sayfasında ve alt bilgide kendiliğinden görünür.
- **İletişim sayfası (15 Kasım 2026):** marka sahibinin isteğiyle sayfada ilk görünen öğe form oldu. Üst alan mavi bir bölüm:
  solda H1'i "Görüşme isteyin" olan form fişi, sağda telefon, WhatsApp ve e-posta satırları ile görüşme sahnesi.
  Telefonda sıra form, iletişim yolları, sahne. Telefon ve WhatsApp tıklamaları `phone_click` ve `whatsapp_click` olarak
  ölçülür; bunlar talep sayılmaz. Arama, WhatsApp ve e-posta bağlantıları gerçek cihazda denenmedi.
- **Form bildirimi:** formdan gelen talepler hâlâ yalnız sunucudaki kayda düşüyor (bölüm 3). info@satislariartir.com adresine
  bildirim gitmesi isteniyorsa bildirim adresinin tanımlanması gerekir.
- **Veri sorumlusu:** unvan, adres, başvuru e-postası, varsa MERSİS. Girilince yasal sayfalar taslaktan çıkar.
- **Hukuk onayı:** aydınlatma metnindeki hukuki sebepler ve saklama süresi ifadesi bir hukukçu tarafından gözden geçirilmeli.
- **Formun teslim edileceği kişi ya da sistem:** CRM ya da bildirim adresi, talep listesi kullanıcı adı ve şifresi.
- **Yetkili ekip adları:** `src/pages/hakkimizda.astro` içindeki `EKIP` listesi. Rehberlerde yazar ve inceleyen.
- **Ölçüm kimlikleri:** `PUBLIC_GTM_ID`, `PUBLIC_META_PIXEL_ID`.
- **Proje ekran görüntüleri için izin:** çalışmalar sayfasındaki on iki site (liste `gorsel-kaynak/KAYIT.md` dosyasında).
- **Müşteri yorumları için onay:** ana sayfadaki dokuz yorum (Lütfi Bey, Ejder Bey, Cemile Hanım, Bahri Bey, Kemal Bey,
  Enver Bey, Emek Hanım, Belda Hanım, Emre Bey). Onay vermeyenin kaydı `MUSTERI_YORUMLARI` listesinden silinir.
- **İç sayfalardaki yeni taahhüt cümleleri:** sayfalar yeniden yazılırken çalışma biçimine dair cümleler eklendi
  (ör. "her hizmet tek başına alınabilir", "hesap sizin adınıza açılır ve sizde kalır", "incelemeden kurulum yapmayız",
  "yayın günü yönetim erişimini size devrediyoruz", hekimler dışındaki sektör listesi). Yayından önce bir kez okuyup
  gerçek çalışma biçiminize uymayanı düzeltin.
- **Logo kullanımı için izin:** güven şeridindeki 18 marka (liste aynı dosyada). Hekimlerin ve avukatın adının bir
  ajansın referans şeridinde geçmesi kendi meslek kurallarına dokunabilir; onay alırken bunu da sorun. İzin vermeyen markanın satırı
  `MarkaSeridi.astro` içindeki `SIRA` listesinden silinir.
- **Vaka malzemesi:** müşteri onaylı ölçüm ya da yeni müşteri sözü geldiğinde proje sayfalarına eklenir.
- **Teyit edilecek taahhütler:** web tasarım sayfasındaki "yönetim erişimi sizde olur" ifadesi ve teslim listesi; Google Ads sayfasındaki hesap sahipliği anlatımı; İlk Günebakan için reklam etiketi kararı.
- **Barındırma:** kalıcı ve yedeklenen bir `veri/` diski olan Node sunucusu. Alan adı değişirse `astro.config.mjs` içindeki `allowedDomains` güncellenmeli.

## 10. PRD'den farklı verilen kararlar

- **Yazı tipi:** başlıkta Barlow Semi Condensed yerine Archivo (genişlik eksenli), gövdede Source Sans 3 korundu. Gerekçe: uzun Türkçe sözcükler 360 px'te dar kesimle tek satıra sığıyor, H1 ve editoryal soru aynı ailenin iki genişliğiyle ayrışıyor ve tek değişken dosya mobilde daha az yük getiriyor.
- **Küçük ekranda üst alan:** PRD'nin önerdiği gibi H1 ana başlık oldu, "O teklif hangi reklamdan geldi?" sorusu görselin altına, proje girişine indi.
- **Koyu tema yok:** fotoğraflar sitenin kırık beyazına göre üretildi, palet PRD'de sabit.
- **Çerez bandı:** ölçüm kimliği tanımlı değilken görünmez. Tasarım kontrolü için `PUBLIC_CEREZ_BANDI=1`.
- **Kampanya etiketleri (UTM):** oturum süresince tarayıcıda tutulur ve forma eklenir; reklam tıklama kimlikleri ve kalıcı kaynak kaydı yalnız ölçüm izniyle saklanır. Bu ayrım hukuk onayına sunulmalı.

## 11. Doğrulanmayanlar

- Gerçek telefonda, ekran okuyucuyla ve %200 yakınlaştırmayla test yapılmadı. Kontroller tarayıcı öykünmesiyle yapıldı.
- Lighthouse ya da saha verisi yok. Ana görselin mobil AVIF türevleri 10 ile 69 KB arasında.
- Yazdırma çıktısı ve çalışma tablosunun betiksiz görünümü denenmedi.
- Beş saniyelik üst ekran testi ve ilk beş kullanıcıyla görev testi yapılmadı.
- 768 ve 1024 px yalnız ana sayfa ve Google Ads sayfasında kontrol edildi; diğer sayfalar 360, 390 ve 1440 px'te kontrol edildi.

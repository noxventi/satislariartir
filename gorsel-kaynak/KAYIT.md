# Görsel varlık kaydı

Üretim tarihi: 14 Kasım 2026. Araç: Higgsfield MCP. Model: `gpt_image_2_6` (GPT Image 2.6), kalite `high`, çözünürlük `2k`.
Toplam harcama yaklaşık 30 kredi (11 üretim). Ham çıktılar bu klasörde PNG olarak durur; site ana kopyaları
`src/assets/gorseller/` altındadır (`node araclar/gorsel-isle.mjs` ile üretilir). AVIF ve WebP türevlerini derleme sırasında Astro çıkarır.

Bütün sahnelere eklenen ortak talimat: "Photographic realism, material grain, believable proportions, restrained cobalt, ivory and
deep red palette, unretouched editorial finish. No readable text, no logos, no watermark, no synthetic business people,
no invented dashboard, no growth arrows, no neon, no chrome 3D."

| Yerleşim | Ham dosya | Site dosyası | Üretim kimliği | Oran | Talimatın özü | Onay ve kırpım odağı |
|---|---|---|---|---|---|---|
| Ana sayfa, ilk deneme | `ana-sayfa/ana-v1.png` | (kullanılmıyor) | `39cc3bbb-52b0-44c4-8d9b-e4a3bb26ce7e` | 16:9 | PRD ana sayfa sahnesi: mavi aydınger üstünde galvanizli çelik birleşim, kırmızı marangoz kalemi, sağda konu, solda boş alan | Kompozisyon onaylandı, zemin bej çıktı. Sonraki üretimlere ışık ve renk referansı. |
| ÇelikVillam proje sayfası | `ana-sayfa/ana-v2.png` | `celik-birlesim.jpg` | `03b39337-eb2f-449f-bdc0-6b0923b75334` | 16:9 | Aynı talimatın ikinci varyantı: kolon ve kiriş birleşimi | Onaylandı. Odak: birleşim ve kalem ucu, sağ alt. |
| Ana sayfa üst alan, masaüstü | `ana-sayfa/ana-v3-beyaz-zemin.png` | `ana-masaustu.jpg` | `ebee816c-5c5b-402e-bd58-72d086570096` | 16:9 | v1 referans alınarak yalnız zemin sitenin kırık beyazına (#F8F7F3) çevrildi | Onaylandı. Zemin kanal düzeltmesiyle sayfa rengine eşitlendi (1.025, 1.038, 1.03). Odak: taban plakası ve kalem, sağ %45. Sol %55 yazı alanı. |
| Ana sayfa üst alan, mobil | `ana-sayfa/ana-v3-mobil-4x5.png` | `ana-mobil.jpg` | `cfb23cdc-3a79-44dc-a85b-8e74e6d43346` | 4:5 | Aynı sahnenin dikey kadrajı | Onaylandı. Kanal düzeltmesi (1.042, 1.074, 1.089). Odak: plaka ve kalem, alt üçte iki. |
| Google Ads | `sahneler/google-ads-3x2.png` | `google-ads.jpg` | `8b64e755-ac51-42b6-ae0b-e5b243e0f0ca` | 3:2 | Keşif masası: üç boş talep fişi, çelik cetvel, mavi kumaş, kırmızı kalemle çembere alınmış detay | Onaylandı. Odak: fişler ve çemberli çizim. |
| Meta reklamları | `sahneler/meta-4x5.png` | `meta.jpg` | `5719e9c6-08cd-432b-bf14-3dea096c6946` | 4:5 | Mavi panoda aynı seramik fincanın üç baskısı, yakın detay kırmızı kalemle seçilmiş | Onaylandı. Odak: çemberli baskı, alt orta. Mobilde kare kırpım, üst %35. |
| SEO danışmanlığı | `sahneler/seo-3x2.png` | `seo.jpg` | `21bd8e4c-e6e8-49df-878a-8d17fea0b6a8` | 3:2 | Kart dizini, kobalt sekmeler, bir kartta kırmızı kalem çizgisi | Onaylandı. Odak: kırmızı çizgili kart. |
| GEO ve AEO | `sahneler/geo-3x2.png` | `geo.jpg` | `cd67eff6-fbf6-4db7-88ca-da24815c4704` | 3:2 | Işıklı masada üst üste iki aydınger sayfası, aynı detayı hizalayan kırmızı düzelti işareti | Onaylandı. Odak: kırmızı çizgi ve iki çember. |
| Web tasarımı | `sahneler/web-3x2.png` | `web.jpg` | `643050e0-6ad1-4893-b4ba-741876f18a74` | 3:2 | Kesim altlığında telefon ve masaüstü boyutunda kâğıt prototip, kırmızı çakışma işareti | Onaylandı. Odak: iki kâğıt çerçeve. |
| Rehber 02 ve 23 | `sahneler/basvuru-4x3.png` | `basvuru.jpg` | `11483713-1bb6-48dd-9672-8993264874db` | 4:3 | Üç bölmeli tepside sıralanan boş talep kartları, kenarda kırmızı kalem | Onaylandı. Odak: tepsi ve kırmızı ayraçlar. |
| Rehber 05 ve ana sayfa | `sahneler/kanal-3x2.png` | `kanal.jpg` | `4d9c2877-908d-4c42-bc6a-3200aa95c736` | 3:2 | Büyüteç altında havuz mozaiği ile aynı mozaikle kaplı havuzun baskısı | Onaylandı. Odak: büyüteç ve baskı. Dikey kırpımda yatay %38. |

Görsel inceleme: sahnelerde logo, okunur yazı, insan figürü ya da uydurma panel yok. Cetvellerdeki ölçü çizgileri gerçek cetvel
görünümüdür. Görseller temsili çekimlerdir; hiçbiri bir müşterinin ürününü, şantiyesini ya da çalışanını göstermez.

## Kâğıt işi görseller (ana sayfanın güncel görselleri)

Marka sahibi ilk illüstrasyonlu üst alanı "çok basit" buldu. Üst alan ve dert kartları, fotoğraflanmış kâğıt işi bir dünyaya
geçirildi: mavi beyaz kartondan bir kasaba, masaya çizilmiş kırmızı kalem çizgisi ve gerçek bir marangoz kalemi.
Model `gpt_image_2_6`, kalite `high`; üst alan adayları 2k, nesneler 1k. Yaklaşık 20 kredi.

| Yerleşim | Ham dosya | Site dosyası | Üretim kimliği | Konu ve karar |
|---|---|---|---|---|
| Üst alan ve OG görseli | `kapak/diorama-kasaba.png` | `gorseller/kapak-masaustu.jpg`, `gorseller/kapak-mobil.jpg` | `d2b7c6ea-de8f-4b2f-9857-7b2aff586f8c` | Kâğıt insanlar kırmızı kalem çizgisini izleyerek ışıkları yanan dükkâna yürüyor. Seçildi. Zemin hafifçe soğutuldu (1.018, 1.052, 1.064); mobil için sağ taraf kare kırpıldı (`node araclar/kapak-isle.mjs`). |
| (kullanılmıyor) | `kapak/diorama-sokak.png` | | `b05109a1-7b89-4ec8-becb-20d32b62b389` | Beş dükkânlı sade sokak. Temiz ama daha az etkileyici. |
| (kullanılmıyor) | `kapak/cizim-carsi.png` | | `4813089f-00a5-4baf-a978-6972d202c4f6` | Ayrıntılı çizgi çarşı sahnesi. |
| Dert kartı: reklam var, satış yok | `kagit/megafon.png` | `cizimler/megafon.png` | `e6695979-2ee2-4a45-9e5b-36ff64e68a4f` | Ağzından kâğıt para saçan megafon |
| Dert kartı: mesaj var, satış yok | `kagit/mesaj.png` | `cizimler/mesaj.png` | `3aa886ab-ab63-4bf3-8269-178e828de2cd` | Mesaj balonları taşan telefon, boş sipariş defteri ve kırmızı kalem |
| Dert kartı: Google'da çıkmıyorum | `kagit/buyutec.png` | `cizimler/buyutec.png` | `2930f51d-a21c-4b8b-aef2-7bc040012af1` | Büyüteç altında dükkânlar, biri örtünün altında |
| Dert kartı: sitem var, arayan yok | `kagit/dukkan.png` | `cizimler/dukkan.png` | `f23d2e2a-e127-4951-a15a-13d9500243f6` | Dükkân vitrini olarak dizüstü bilgisayar, köşede kırmızı örümcek ağı |
| Dert kartı: yapay zekâda adım geçmiyor | `kagit/balon.png` | `cizimler/balon.png` | `97a57d16-632d-40ac-81f7-47bd552b188a` | Konuşma balonunda üç kart, dışarıda kalan kart kırmızı çemberde |
| Dert kartı: ilk kez reklam | `kagit/yol-ayrimi.png` | `cizimler/yol-ayrimi.png` | `1301412a-3b4b-47db-9f65-b219f1393536` | Yol ayrımında tabela ve pusula |
| Rehberler bölümü | `kagit/defter.png` | `cizimler/defter.png` | `7a2e6f19-0845-4cf9-a5c3-365893d64af2` | Masa lambası altında defter, kırmızı kalem işaretleri |

### "Müşteri size beş yoldan gelir" sahneleri

Bölümdeki masa üstü fotoğraflar (talep fişleri, seramik baskılar, kart dizini...) marka sahibince yeterince anlamlı bulunmadı.
Yerlerine, her yolu doğrudan gösteren beş kâğıt işi sahne üretildi. Üst alan görseli üslup referansı olarak verildi.
Model `gpt_image_2_6`, kalite `high`, 2k. Yaklaşık 14 kredi. Site kopyaları `node araclar/kapak-isle.mjs` ile üretilir.

| Yol | Ham dosya | Site dosyası | Üretim kimliği | Sahne |
|---|---|---|---|---|
| Google araması | `yollar/arama-3x2.png` | `gorseller/yol-arama.jpg` | `7a1455fe-1cd7-4a84-95ff-a900dfedc92c` | Dev arama kutusuna uzanan müşteri; kırmızı çizgi dükkâna gidiyor |
| Instagram akışı | `yollar/akis-4x5.png` | `gorseller/yol-akis.jpg` | `8d1a5ccc-9cdd-4db5-87b5-65feb3df367a` | Dev telefonda fotoğraf kareleri; dükkân karesi kırmızı çemberde |
| Cevap arayan | `yollar/cevap-4x5.png` | `gorseller/yol-cevap.jpg` | `634bd2db-10f2-436e-ac25-a627112dda27` | Reklam panolarını geçip açık kitaba yürüyen, elinde soru işareti olan müşteri |
| Yapay zekâya soran | `yollar/yapay-zeka-1x1.png` | `gorseller/yol-yapay-zeka.jpg` | `e003fdeb-554a-45ad-99ae-66f23ff6f0a8` | Yardımcı robot ve konuşma balonu; üç dükkândan biri kırmızı çemberde |
| Siteye varan | `yollar/site-4x5.png` | `gorseller/yol-site.jpg` | `ded995bf-78b2-4cd3-a5cf-e844fa5bcc78` | Ekranı dükkân olan dizüstü; üç kırmızı çizgi kapıda birleşiyor |

| İlk kez reklam verenler bölümü | `yollar/ilk-adim-4x5.png` | `gorseller/ilk-adim.jpg` | `167cae69-5af7-47a9-ac11-bcf3af9290cf` | 15 Kasım 2026. Dükkânının kapısında megafonla boş yola bakan esnaf; kırmızı kalem yolun yalnız ilk çizgisini çizmiş, devamı kurşun kalemle noktalı. Üst alan görseli üslup referansı verildi. İlk denemede seçildi. |

Eski masa üstü fotoğraflar (`google-ads.jpg`, `meta.jpg`, `seo.jpg`, `geo.jpg`, `web.jpg`) hizmet sayfalarının başlığında kullanılmaya devam ediyor.
Telefon görünümünde üst alan görseli artık en üstte durur; bunun için sağ dörtte üçlük 4:3 kırpım kullanılır (`gorseller/kapak-mobil.jpg`).

Nesneler saf beyaz zeminde üretildi ve sayfada "multiply" ile alttaki yüzeye karışıyor (`node araclar/cizim-isle.mjs`).

### İç sayfalar için kâğıt işi nesneler (15 Kasım 2026)

Marka sahibi iç sayfalarda görsel kullanımının çoğaltılmasını istedi. Megafon görseli (`e6695979-…`) üslup referansı verilerek
17 nesne ve bir sahne üretildi. Model `gpt_image_2_6`, kalite `high`; nesneler 1k (1:1), sahne 2k (3:2). Ham dosyalar
`kagit/<ad>.png`, site kopyaları `src/assets/cizimler/<ad>.png`.

| Ad | Üretim kimliği | Konu |
|---|---|---|
| liste | `6d3d6993-2662-4ccb-a7d0-090c4776ef39` | Pano üstünde liste, bazı satırlar kırmızı çizili, biri çemberde |
| telefon | `229b2962-4722-4df2-b0be-4d5522035334` | Ahizesi kalkık masa telefonu ve talep fişleri |
| hedef | `fcf66af3-20fb-45b4-aacc-102e011bc4f3` | Ortasında kırmızı ok olan hedef tahtası |
| kreatif | `0653aa90-26bd-492d-9178-78e490ba4d39` | İki çerçeve, biri kırmızı halkada (A/B denemesi) |
| kitle | `5dde50e1-32b6-4d34-9c1c-acac32ed7bd9` | Büyüteç altında insan grubu |
| harita | `8d91d721-9936-4c8c-bfd3-1c65bcb178f3` | Sayfa kartlarından site haritası ağacı |
| kitaplik | `79ae3618-b9b3-491b-bcc1-361bcbd1cb27` | Kitaplık, bir kitapta kırmızı ayraç |
| robot | `d75d231b-cabf-459d-aeac-9546607b77ad` | Kitap okuyan robot |
| taslak | `d4006abd-4f2e-4c20-bd97-e3532a5cf4b0` | Dizüstü ve telefonda tel kafes çizimi, cetvel, kalem |
| takvim | `9567f36d-02f8-43cc-8d8f-d7dc2e69ba85` | Kırmızı tikli masa takvimi ve anahtar |
| zarf | `fbf0d329-6d72-4ac1-9981-8f8548271a40` | Posta kutusu ve zarflar |
| yapboz | `82a7f6f0-5c76-4238-8fbf-a65db18424e2` | Dört parça yapboz, son parça kırmızı çizgili |
| terazi | `b119bbd8-4b9d-4cbb-b78a-390f17c98d1d` | Büyüteç ve fotoğraf tartan terazi |
| kilit | `c25686ea-e473-47c0-b453-6bf175a0bb05` | Asma kilit ve anahtar |
| tabela | `1b2818d4-ec08-473c-a53f-e1197a0069c6` | Devrilmiş yön tabelası ve pusula |
| soru | `cbabd454-b6c5-48e1-8e75-f3d86a5d0922` | Soru işareti ve ampul |
| alet | `92334869-538a-48cc-829f-0fa154990dc1` | Alet çantası ve dişliler |
| atolye (sahne) | `948aeafd-10b0-4bfc-866b-4be2138c28a6` | Kâğıt kasabanın kurulduğu atölye masası; `yollar/atolye-3x2.png`, site kopyası `gorseller/atolye.jpg` |

Görsellerde okunur yazı, logo ve gerçek kişi yok; hepsi ilk üretimde kabul edildi.

## İlk illüstrasyon seti (artık kullanılmıyor)

Aşağıdaki düz çizimler ilk denemedir; ham dosyaları `cizimler/` altında kayıt olarak durur, sitede yer almaz.

Ana sayfa, marka sahibinin 14 Kasım 2026 tarihli geri bildirimiyle yeniden kuruldu: üst alandaki çelik birleşim fotoğrafı
kaldırıldı, yerine markayı anlatan bir illüstrasyon seti geldi. Model `gpt_image_2_6`, kalite `high`; kapak 2k, diğerleri 1k.
Yaklaşık 15 kredi. Ham dosyalar `cizimler/` altında, site kopyaları `src/assets/cizimler/` altındadır
(`node araclar/cizim-isle.mjs`). Çizimler saf beyaz zeminde üretilir ve sayfada "multiply" ile alttaki yüzeye karışır;
koyu zeminde kullanılmaz.

Ortak üslup talimatı: elle çizilmiş, hafif düzensiz lacivert mürekkep çizgisi; kobalt ve açık mavi düz dolgular; yalnız küçük
vurgularda kırmızı kalem; saf beyaz zemin; yazı, rakam, logo, yüz, ok ve grafik yok. Kapak çizimi diğer yedisine üslup
referansı olarak verildi.

| Yerleşim | Ham dosya | Site dosyası | Üretim kimliği | Konu |
|---|---|---|---|---|
| Üst alan ve OG görseli | `cizimler/kapak-v1.png` | `kapak.png` | `1d820bec-5fc3-44bf-afce-9f9e20cd7b08` | Çalan masa telefonu, fişlerle dolu fiş mili, kapı zili, tik atan kırmızı kalem. Onaylandı. |
| (kullanılmıyor) | `cizimler/kapak-v2.png` | | `086dd43e-fde8-456e-913c-510cc06bf1a8` | Aynı konunun ikinci varyantı |
| Dert kartı: reklam var, satış yok | `cizimler/megafon.png` | `megafon.png` | `54effc58-1512-46ce-8756-f3bd23307f91` | Ağzından ses yerine madeni para saçan megafon |
| Dert kartı: mesaj var, satış yok | `cizimler/mesaj.png` | `mesaj.png` | `fe490a33-3637-4b54-a1de-dcde31049342` | Mesaj balonları taşan telefon ve boş sipariş defteri |
| Dert kartı: Google'da çıkmıyorum | `cizimler/buyutec.png` | `buyutec.png` | `90f8dba7-a746-4ffb-b5b1-e95916af171e` | Büyüteç altında dört dükkân, biri örtünün altında |
| Dert kartı: sitem var, arayan yok | `cizimler/dukkan.png` | `dukkan.png` | `611b0bc2-bcc9-46fe-9e13-bc614ee4c8a2` | Tenteli, kapısı kapalı dükkân olarak çizilmiş dizüstü bilgisayar |
| Dert kartı: yapay zekâda adım geçmiyor | `cizimler/balon.png` | `balon.png` | `ddd3534e-1547-4d28-ad75-8e8f6eeee732` | Konuşma balonunda üç kart, dışarıda kalan dördüncü kart kırmızı çemberde |
| Dert kartı: ilk kez reklam | `cizimler/yol-ayrimi.png` | `yol-ayrimi.png` | `d76faa8c-a4fa-4935-b6ef-ab6466bc86a0` | Yol ayrımında iki tabelalı direk ve pusula |
| Rehberler bölümü | `cizimler/defter.png` | `defter.png` | `abbaa654-e9f0-4de7-8d99-b9dc15b07c8c` | Masa lambası altında açık defter, kırmızı kalem işaretleri |

`ana-masaustu.jpg` artık ana sayfada kullanılmıyor. `ana-mobil.jpg` yalnız ÇelikVillam proje sayfasında temsili çekim olarak duruyor.

## Gerçek proje ekran görüntüleri

`proje-ekranlari/` altındaki dosyalar canlı sitelerin 14 Kasım 2026 tarihli ilk ekran görüntüleridir
(`node araclar/proje-ekran.mjs <alan adı>`). Üretken araçla taklit edilmedi. Çerez bandı reddedilerek çekildi.
Kullanılanlar (çalışmalar sayfasındaki duvar): celikvillam.com, tarumhavuz.com, burgerengineer.com.tr, gabionmaterials.com,
rotechdanismanlik.com, estika.com.tr, whiteearthatelier.com, bodrumolivehouse.com, esvia.com.tr, yurtdisiegitimrehberim.com,
eduregist.com, ilkgunebakan.com. Kullanılmayanlar: 1001art.org (üçüncü kişilerin adı ve eserleri), suha.av.tr ve
kayseridermatolog.com (kişi portresi), huneducation.com ve iki hekim sitesi (web tasarımı ekibe ait değil). Bunlar yazı karosu olarak gösterilir. Kullanım izni marka sahipleriyle teyit edilmelidir.

## Çalışılan markaların logoları (güven şeridi)

`logolar/ham/` altındaki dosyalar 14 Kasım 2026'da markaların kendi sitelerinden alındı (`node araclar/logo-topla.mjs`):
başlıktaki logo, küçük kaldığında sitenin yapısal verisinde (JSON-LD `logo`) ya da `srcset` içinde duran büyük sürüm.
EduRegist ve Av. Suha Akyıldız'da logo simge + HTML yazı olduğu için başlıktaki marka bağlantısı 4 kat yoğunlukta çekildi.
Üretken araç kullanılmadı, logolar yeniden çizilmedi.

`node araclar/logo-isle.mjs` her logoyu sitenin mürekkep rengine çevirir (`src/assets/logolar/*.png`): renk atılır, biçim kalır,
ton farkı saydamlıkla korunur. Şeritteki markalar: Hun Education, Burger Engineer, Tarum Havuz, Rotech Mühendislik
(celikvillam.com), Estika, Yurt Dışı Eğitim Rehberim, 1001 Art, Bodrum Olive House, Rotech Defense, EsVia Suit Apart,
White Earth Atelier, EduRegist, Rotech Danışmanlık, Av. Suha Akyıldız. 15 Kasım 2026'da marka sahibinin kararıyla dört
kayıt daha eklendi: İlk Günebakan (ilkgunebakan.com), Doç. Dr. Pınar Taşdemir (kayseridermatolog.com, başlık çekimi),
Dr. Emre Apaydın (emreapaydin.com), Uzm. Dr. Belda Yurtseven Tüner (drbeldayurtseventuner.com).
Logoların kullanım izni marka sahipleriyle teyit edilmelidir.

## Marka dosyaları

Logo: `marka/logo-kaynak.png` marka sahibinin 14 Kasım 2026'da verdiği dosyadır (2172x724). `node araclar/logo-vektor.mjs`
renk katmanlarını ayırır (lacivert yazı, mavi ok, kırmızı etiket ve kıvılcımlar), potrace ile vektöre çevirir ve
`src/data/logo.json` ile `public/favicon.svg` dosyalarını yazar. potrace proje bağımlılığı değildir; betik `POTRACE`
ortam değişkeniyle verilen modülü ya da kuruluysa `potrace` paketini kullanır. Kaynak renkler (#000f3a, #0039a0, #bb1633)
sitenin değişkenlerine (#101c39, #173da6, #b92338) eşlendi.

`public/favicon.ico`, `public/apple-touch-icon.png`, `public/logo.png` (yapısal veri için) ve `public/og.jpg`
`node araclar/marka-uret.mjs` ile üretilir (OG görseli sitenin yazı tipleri, logosu ve kapak fotoğrafıyla çizilir).

## Sektör ve blog sahneleri (15 Kasım 2026)

Marka sahibi sektör sayfaları ve blog yazıları için görsel kullanımının artırılmasını istedi. Üst alan görseli
(`d2b7c6ea-…`, kâğıt kasaba) üslup referansı verilerek 35 sahne üretildi. Model `gpt_image_2_6`, kalite `high`, 2k, oran 3:2,
soluk mavi kesintisiz fon. Toplam harcama yaklaşık 96 kredi (görüşme bandı sahneleriyle birlikte yaklaşık 102). Ham dosyalar `gorsel-kaynak/sektorler/<ad>.png` ve
`gorsel-kaynak/blog/<ad>.png`; site kopyaları `src/assets/sektorler/<ad>.jpg` ve `src/assets/blog/<ad>.jpg`
(`node araclar/sahne-indir.mjs <sektorler|blog> <ad>=<adres>`; ham dosya varsa yeniden indirmez, yalnız site kopyasını üretir).
Göz denetimi için pano: `node araclar/sahne-pano.mjs <çıktı.jpg> <dosyalar…>`.

Ortak talimat: üst alan görselinin dünyası, malzemesi ve ışığı; yüzsüz kâğıt figürler; masaya çizilmiş kırmızı kalem çizgisi
ya da halkası; sahnede gerçek bir kırmızı marangoz kalemi; yazı, harf, rakam, logo, marka işareti ve içerikli ekran yok.

### Sektör sayfaları (`src/assets/sektorler/`)

| Dosya | Üretim kimliği | Sahne |
|---|---|---|
| insaat-ve-yapi | `c3cbe505-0ae3-4484-b7ae-0c46943675e9` | Çelik iskeleti yükselen villa, vinç ve kapısı açık şantiye ofisi |
| egitim-kurumlari | `70b0b731-aba3-4800-833e-079b7543353d` | Çan kuleli okul, dev açık kitap, küre ve mezuniyet kepleri |
| restoran-ve-kafe | `e1a525a7-1df1-4ea2-a6de-929f77d46910` | Tenteli restoran, dışarıda masalar, çatının arkasında kırmızı harita iğnesi |
| uretim-ve-ihracat | `bc5167cb-792e-41be-b10e-892f22fd7b21` | Fabrika, forklift, konteynerler, yük gemisi ve küre |
| otel-ve-konaklama | `9b66cb25-3b38-4d32-af28-97ba9af90a70` | Üç katlı butik otel, palmiyeler, kırmızı etiketli oda anahtarı |
| hukuk-burolari | `8d580a90-4a38-41d9-93a2-f36e60f108a9` | Sütunlu hukuk bürosu, terazi ve kırmızı ayraçlı kitaplar |
| saglik-ve-klinikler | `0af74e27-a87c-448a-b12a-4d46666594cb` | Klinik, stetoskop ve boş satırlı not panosu (haç simgesi yok) |
| butik-markalar | `2aef2b06-5c36-412e-a332-5f9289915074` | Seramik atölyesi, şövale ve çömlek tornası |
| sektorler (dizin) | `5c2609f0-d7f9-4811-bb57-3330c4e1735d` | Yan yana sekiz farklı bina; kırmızı çizgi her kapıya uğruyor |

### Blog kapakları (`src/assets/blog/`)

| Dosya | Üretim kimliği | Sahne |
|---|---|---|
| google-ads-nedir | `b865d0fb-9ee6-413a-b1b8-bdeb9d9658c0` | Arama kutusunun önünde levha kaldırarak teklif veren esnaflar |
| google-reklam-verme | `40bba80f-6f05-4a34-896f-24094350ca4a` | Sonuç panosunun en üst sırasına dükkân kartı yerleştiren esnaf |
| instagram-reklam-verme | `5243acd1-c46c-4060-9e64-6ecddc565230` | Üstünden megafon çıkan dev telefon; kalpler dükkâna iniyor |
| seo-nedir | `2bb8d9d0-24ba-4ca2-a1e5-773ed9d2ff65` | Basamaklara sıralanmış dükkânlar ve büyüteç |
| web-sitesi-kurma | `65d86e59-6a54-4612-8a95-c384fc48b513` | İnşaat hâlindeki dev dizüstü bilgisayar |
| dijital-pazarlama-nedir | `8ca9fbc1-3050-42bb-bf8d-a01c1f76796e` | Beş yolun birleştiği meydandaki dükkân |
| anahtar-kelime | `f83fd0b9-965c-4969-afa7-95ae4e53ddd8` | Dev anahtar, arama kutusu ve boş etiketler |
| meta-business-suite | `3aa3546c-e617-4cad-911e-ee6f9cbb5170` | Kumanda masası; telefon, konuşma balonu ve megafona giden kablolar |
| whatsapp-business | `6b458f12-790c-4028-a53e-d493c5980fae` | Dükkân tezgâhı, büyük konuşma balonu ve sıra bekleyen müşteriler |
| geo-nedir | `0738aa26-4a55-4c98-af95-6dbf68721f82` | Okuma masasındaki robot ve sayfa taşıyan esnaflar |
| landing-page | `b02721ec-0c44-48e0-a041-f9bbc9e7617a` | Piste inmiş kâğıt uçak ve büfeye giden kırmızı çizgi |
| backlink | `d06d9a67-32d4-4d6c-a50b-6d0cdc98e10a` | Adaları dükkâna bağlayan köprüler; biri kırmızı kalemle çizili |
| reklam-terimleri | `ec69afd9-c105-4359-92ad-bf13faf61a79` | Parayı alışveriş torbasıyla tartan terazi, huni, abaküs |
| web-sitesi-fiyatlari | `ec4d6321-8dd5-4258-b0f3-43180cee9a8d` | Büyüyen üç bina maketi ve boş fiyat etiketleri |
| instagram-reklam-ucretleri | `b4935530-b7a2-4da1-89f6-304307bad803` | Dev telefonun yuvasına para atan esnaf |
| domain-hosting | `eb8b35cb-ddc9-497f-ad2d-06cc9a45e6ed` | Boş parseller ve parsele indirilen dükkân |
| seo-analizi | `3ad81519-5b81-4f49-8191-655e3a47de2a` | Kesiti görünen dükkânı inceleyen denetçiler |
| ajans-secimi | `36f990f0-6bbc-4969-8a19-392124346daa` | Üç kapının önünde not panosuyla duran esnaf |
| google-isletme-profili | `63fd8aa0-cae6-4f26-ba94-0b85026926f9` | Sokak haritası üstünde dükkân ve kırmızı harita iğnesi |
| google-yorumlari | `00a6b3d2-d4be-40ce-b151-980119492251` | Dükkânın çatısına yıldız yerleştiren müşteri |
| tiklama-var-telefon-yok | `c1396881-513c-466e-b2c9-251a3eeb30e1` | Sessiz telefonun başında bekleyen esnaf |
| mesajlar-satisa-donusmuyor | `199d833c-e3a0-44d8-9671-9a09e1b1b77b` | Telefondan taşan mesaj balonlarını ayıran esnaf |
| reklam-icin-gerekenler | `b2ec0883-960f-4392-9c5b-35509faebb9d` | Açılıştan önce anahtar, kilit ve kartları dizen esnaf |
| reklam-gosterilmiyor | `5c462986-282a-49d2-89c6-1f5bd1d9a537` | Sonuç panosunda üstü örtülü sıra |
| google-mi-instagram-mi | `7fac703c-18e8-46d2-b718-a8141d7635e2` | Yol ayrımı: bir yol büyütece, diğeri telefona gidiyor |
| form-mu-whatsapp-mi | `d023507e-f210-4151-84c9-5b882719de7a` | Yan yana iki büfe: form ve konuşma balonu |

Göz denetimi: 35 sahnenin hepsi ilk üretimde kabul edildi. Sahnelerde okunur yazı, logo ya da gerçek kişi yok.
Sektör dizini sahnesindeki klinik binasında mavi zemin üstünde beyaz bir artı işareti var (Kızılay ya da Kızılhaç amblemi değil).
Aynı sahneler üst menü panellerinde, ana sayfadaki sektör şeridinde ve "ilgili sayfalar" kartlarında küçük boyda da kullanılıyor.

## Sağlık turizmi, hikâye ve kronometre görselleri (15 Kasım 2026)

Aynı gün üç görsel daha üretildi; model `gpt_image_2_6`, kalite `high`.

| Dosya | Üretim kimliği | Sahne | Kullanım |
|---|---|---|---|
| `src/assets/sektorler/saglik-turizmi.jpg` (ham: `sektorler/saglik-turizmi.png`) | `8b712c79-0da4-4cd0-865c-06918cee6fec` | Park etmiş kâğıt uçak ve küre; valizli yolcular kırmızı çizgiyi izleyerek kapısında mavi kalp olan kliniğe yürüyor; boş pasaport ve biniş kartı | Sağlık turizmi sayfası, menü paneli, dizin kartı (2k, 3:2, üslup referansı üst alan görseli) |
| `src/assets/gorseller/hikaye.jpg` (ham: `kagit/hikaye.png`) | `e6d391c7-fa55-4a0c-8655-7a146a0cd089` | Açık duran kâğıt kitaptan yükselen kasaba; kırmızı kalem çizgisi dört kişiyi sayfanın kenarından dükkânın kapısına götürüyor | Hakkımızda, "Hikâyemiz" bölümü (2k, 4:5, üslup referansı üst alan görseli) |
| `src/assets/cizimler/kronometre.png` (ham: `kagit/kronometre.png`) | `5eb24c86-d941-4cc2-a923-fcb46e5c01a5` | Beyaz zeminde kâğıt kronometre, kırmızı hız çizgileri | Web tasarım sayfası, "Hız ve performans" kartı (1k, 1:1, üslup referansı megafon) |

Üç görsel de ilk üretimde kabul edildi; okunur yazı, logo ya da gerçek kişi yok. Klinik kapısındaki işaret mavi bir kalptir
(haç ya da hilal amblemi değil).

## Yeni sektör ve şehir sahneleri (15 Kasım 2026, ikinci tur)

Marka sahibi mimarlık, dizayn (iç mimarlık ve dekorasyon) ve otomotiv için sektör sayfaları; Ankara, İstanbul, İzmir, Bursa,
Eskişehir ve Antalya için şehir sayfaları istedi. Dokuz sahne üretildi: model `gpt_image_2_6`, kalite `high`, 2k, 3:2,
soluk mavi kesintisiz fon, üslup referansı üst alan görseli (`d2b7c6ea-…`). Ham dosyalar `gorsel-kaynak/sektorler/` ve
`gorsel-kaynak/sehirler/`; site kopyaları `src/assets/sektorler/` ve `src/assets/sehirler/`
(`node araclar/sahne-indir.mjs <sektorler|sehirler> <ad>=<adres>`).

| Dosya | Üretim kimliği | Sahne |
|---|---|---|
| sektorler/mimarlik-ofisleri | `fb59263a-b3ad-42bc-9c70-57651ff91e79` | Çizim masasında teraslı bina maketi, rulo planlar, gönye; çizgili tenteli ofis |
| sektorler/ic-mimarlik-ve-dekorasyon | `e281d2b6-1669-4542-9c86-ab6df9dc6590` | Önü açık ev kesiti: salon, kitaplık, lambader; önde renk kartelası, kumaş örnekleri, mezura |
| sektorler/otomotiv | `383ef94d-d83a-4ef7-ae51-ae7960b9a734` | Galeri vitrininde otomobil, yanda liftte araç, lastikler; markasız, plakasız araçlar |
| sehirler/ankara | `83144a5b-8a87-4241-8dc7-dc3a8e26732b` | Yuvarlak tepeli gözlem kulesi, tepede kale surları, önde dükkân |
| sehirler/istanbul | `cec01c9a-fc12-47c3-bbbb-c7ca0845e8cd` | Konik çatılı taş kule, asma köprü, vapur ve martılar |
| sehirler/izmir | `b7fdb987-3160-4aba-beaf-52495f2f8358` | Saat kulesi, palmiyeli sahil, körfezde vapur |
| sehirler/bursa | `72f7a061-2c06-45bc-b24c-df43d5c11e86` | Zirvesi karlı dağ ve teleferik, cumbalı evler, taş saat kulesi |
| sehirler/eskisehir | `c94e0b27-29b7-4383-936c-8b45ec626478` | Çay, kemerli yaya köprüleri, gondol ve tramvay, cumbalı evler |
| sehirler/antalya | `887a889c-c5fd-4f8d-8891-52440a2c2727` | Üç kemerli antik kapı, palmiyeler, falezler ve yelkenli |

Dokuzu da ilk üretimde kabul edildi. Sahnelerde okunur yazı, logo, bayrak ya da gerçek kişi yok. Şehir sahneleri tanınan
yapıların kâğıt işi yorumudur (birebir kopya değil); İstanbul, Bursa ve Eskişehir sahnelerinin arka planında şehir
siluetinin parçası olarak küçük kubbe ve minareler görünüyor. Antalya sahnesinde palet dışı iki renk var (kiremit çatılar,
pembe begonviller). Şehir sahnesi o şehrin bütün sayfalarında (ilçeler dahil) kullanılıyor.

## Blog kapakları, ikinci tur (15 Kasım 2026)

16 yeni blog yazısı için kapak; model `gpt_image_2_6`, kalite `high`, 2k, 3:2, üslup referansı üst alan görseli.
Ham dosyalar `gorsel-kaynak/blog/<ad>.png`, site kopyaları `src/assets/blog/<ad>.jpg`. Hepsi ilk üretimde kabul edildi;
yazı, logo, plaka ve marka işareti yok.

| Dosya | Üretim kimliği | Sahne |
|---|---|---|
| mimarlik-portfolyosu-nasil-hazirlanir | `286065d4-fe7b-4cd2-bb12-319d973eef85` | Açık portfolyo dosyasında üç bina maketi, sıraya koyan mimar |
| mimarlik-ofisi-web-sitesi-nasil-olmali | `6ef2907b-b714-4a17-af0d-fb607a0207d6` | Çizim masasında ekranında bina olan dizüstü, rulo plan, gönye |
| mobilya-reklami-nasil-yapilir | `782fa8f1-f093-4c99-a437-1f063a6f4c4c` | Mağaza önünde sahnedeki koltuk ve aynı koltuğu gösteren telefon |
| ic-mimar-nasil-musteri-bulur | `7fdde9de-fa15-47a0-8472-073937fd9735` | Renk kartelalı iç mimar ve önü açık oda; arkadaki evden gelen müşteriler |
| insaat-firmasi-reklami-nasil-yapilir | `79e641f1-e428-44e4-b67e-c548005e93ae` | İskeleli bina, vinç, satış ofisi ve boş pano |
| emlak-reklami-nasil-verilir | `02f6bada-0f69-4458-9329-d32b9d15acd2` | Sıra evler, anahtar uzatan emlakçı ve alıcılar |
| oto-galeri-ismi-nasil-secilir | `ee9485af-1194-4c52-b1a5-ad65cde38361` | Galerinin boş tabelasına levha tutan galerici |
| oto-yikama-reklami-nasil-yapilir | `1f3d65e8-e796-4115-bd27-d9d29db9664e` | Fırçalı ve köpüklü oto yıkama, sıradaki araçlar |
| rent-a-car-sitesi-nasil-kurulur | `69f657d3-4101-488a-a7c1-96db7d478f52` | Ekranı takvim olan dizüstü, kiralama büfesi, valizli yolcu |
| google-yorumu-nasil-silinir | `7f159836-295f-4fd7-b43c-1fb287be9577` | Yıldızlı kartlardan buruşuk olanına uzanan esnaf |
| seo-fiyatlari | `6c65eef2-6962-47b7-9b23-eae96847dac6` | Yükselen üç merdiven ve büyüteç, kartları karşılaştıran esnaf |
| google-reklam-ucretleri | `5ae72b7b-6bd0-47c4-8a75-8a254a57c593` | Arama kutusu, paralarla torbayı tartan terazi |
| youtube-reklam-nasil-verilir | `8583fde7-4486-49b1-9bf1-a944ddc7f203` | Kâğıt video ekranı, bankta izleyenler, dükkâna yürüyen izleyici |
| instagram-isletme-hesabi-nasil-acilir | `1342f8b2-a550-47bb-a5fb-861ef697624f` | Ekranı dükkâna dönüşmüş telefon, levha takan esnaf |
| google-ai-modu-nedir | `36757ca1-6cc3-43e3-911b-d239558f3c79` | Arama kutusundan sarkan yanıt kartı ve okuyan robot |
| apple-haritalar-isletme-ekleme | `93c627e3-d34c-43fc-87f7-cae61291ce11` | Üç kâğıt haritada aynı dükkân ve konum iğneleri |

## Görüşme bandı sahnesi (15 Kasım 2026)

Marka sahibi her sayfanın sonundaki görüşme bölümünün güzelleştirilmesini istedi. Bölümün mavi zeminiyle birleşecek iki
sahne lacivert mavi fonda (hedef #173da6) üretildi; model `gpt_image_2_6`, kalite `high`, 2k, 3:2, üslup referansı üst
alan görseli. Ham dosyalar `gorsel-kaynak/gorusme/`, site kopyası `src/assets/gorseller/gorusme.jpg`
(`node araclar/gorusme-sahnesi.mjs yol`: fon rengini ölçer ve bölüm rengine eşitler; kalan fark sayfada kenar maskesiyle erir).

| Ham dosya | Üretim kimliği | Sahne | Karar |
|---|---|---|---|
| `gorusme/yol.png` | `b4daa8b2-1da5-42c1-8049-4bb4f234b8ea` | Dükkânından çıkan esnaf, kırmızı kalem çizgisini ve ayak izlerini izleyerek telefonu çalan görüşme masasına yürüyor | Seçildi: geniş ve alçak kompozisyon bölümün alt kenarına oturuyor |
| `gorusme/masa.png` | `948e0b55-6f0d-4482-ae7d-b5711f7095c3` | Dükkânın önündeki masada görüşen esnaf ve danışman | Kullanılmıyor |

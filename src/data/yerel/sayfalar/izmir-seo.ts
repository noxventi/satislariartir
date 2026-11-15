/**
 * İzmir SEO (şehir sayfası; yerel SEO ağırlıklı).
 * Ana niyet: "izmir seo uzmanı" (480), "izmir seo" (390), "izmir seo ajansı" (260), "izmir seo hizmeti" (70).
 * Tek ekipten birden çok iş arayanlar: "izmir dijital ajans" (210), "izmir dijital pazarlama" (70).
 * Hacimler: OpenSEO, Türkiye, aylık yaklaşık, 15 Kasım 2026.
 * İzmir'de ofis olduğu yazılmaz. Sıralama, süre ve yorum sayısı için söz verilmez; yorum toplanmaz, yorum isteme
 * düzeni anlatılır. Hukuk örneği yalnız site ve SEO içindir.
 * Yerel bilgiler: körfezin iki yakası, Karşıyaka ve Bostanlı, Gaziemir, Bayraklı'daki adliye çevresi, Foça ve Çeşme'de
 * yaz sezonu, Urla'da zeytinyağı üretimi, Alsancak'taki bürolar. Örnek işletmeler temsilidir.
 */
import type { YerelSayfa } from '../tip';

export const sayfa: YerelSayfa = {
  kimlik: 'izmir-seo',
  sehir: 'izmir',
  yerDe: 'İzmir’de',
  hizmet: 'seo',
  baslik: 'İzmir SEO',
  metaBaslik: 'İzmir SEO Ajansı ve SEO Danışmanlığı',
  metaAciklama:
    'İzmir’deki işletmeler için SEO: teknik inceleme, Google İşletme Profili, ilçe adlı aramalar ve harita sonuçları. Çalışmayı uzaktan yürütüyor, sıralama sözü vermiyoruz.',
  ozet: 'İzmir’de ilçe adıyla yapılan aramalar ve harita sonuçları için site, Google İşletme Profili ve içerik çalışması.',
  tanim: [
    'İzmir’deki işletmeler için SEO, işletmenin sitesinin ve Google İşletme Profili’nin, hizmeti İzmir ya da ilçe adıyla arayan kişiye reklam vermeden görünecek biçimde incelenmesi, düzeltilmesi ve düzenli olarak geliştirilmesi işidir.',
    'İzmir’de müşteri çoğu hizmeti kendi ilçesinde arar: Karşıyaka’da oturan kişi diş hekimi için körfezin öbür yakasına bakmaz, Çeşme’ye gelen misafir restoranı haritadan seçer. Bu yüzden işe sitenizle birlikte harita profilinizden ve ilçe adlı aramalardan başlıyoruz. Siteniz yeniyse temeli kuruyor, daha önce SEO yaptırıp sonuç alamadıysanız işin nerede takıldığını buluyoruz.',
    'SEO çalışmasını uzaktan yürütüyoruz; sitenize ve profilinize sizin verdiğiniz erişimle giriyor, bulguları telefonla ya da görüntülü görüşmede anlatıyoruz.',
  ],
  cagri: 'SEO için görüşelim',

  aramalar: {
    baslik: 'İzmir’de SEO için ne aranıyor?',
    giris: 'SEO desteği arayanların bir kısmı ajans, bir kısmı tek bir uzman arıyor; yazdıkları söz de buna göre değişiyor.',
    liste: [
      { ifade: 'izmir seo uzmanı', hacim: 480 },
      { ifade: 'izmir seo', hacim: 390 },
      { ifade: 'izmir seo ajansı', hacim: 260 },
      { ifade: 'izmir dijital ajans', hacim: 210 },
      { ifade: 'izmir seo hizmeti', hacim: 70 },
      { ifade: 'izmir dijital pazarlama', hacim: 70 },
    ],
    yorum: [
      'İzmir için en çok yazılan ifade “izmir seo uzmanı”: ayda yaklaşık 480 arama. “Uzman” yazan kişi kendisiyle doğrudan konuşacak birini, “ajans” yazan ise işi baştan sona üstlenecek bir ekibi arıyor. İki biçimde de çalışıyoruz: işi tümüyle üstlenebilir ya da sizin ekibinize ne yapılacağını yazılı verebiliriz. “Dijital ajans” yazanlar ise SEO’yu site ve reklamla birlikte tek ekipten almak istiyor.',
      'Bu değerler Türkiye’nin tamamı için ölçülmüş aylık yaklaşık aramalardır; arayan kişinin İzmir’de oturup oturmadığına dair bir ölçümümüz yok. Sizin için daha belirleyici olan, müşterinizin hizmetin adına ilçe ekleyerek yaptığı aramalardır. Çalışmanın başında bu aramaları hizmetleriniz için tek tek çıkarıyor, her birine sitenizde hangi sayfanın cevap vereceğini belirliyoruz.',
    ],
  },

  yerel: {
    baslik: 'İzmir’de SEO’da en sık karşılaştığımız altı durum',
    giris: 'Harita, ilçe adı, mevsim ve ikinci dil: İzmir’de aramanın sonucunu çoğu zaman bu dördü belirliyor. Örnek işletmeler temsilidir.',
    kartlar: [
      {
        soru: 'Haritada neden rakiplerin altında kalıyoruz?',
        ornek:
          'Bostanlı’da bir güzellik salonunun Google İşletme Profili’nde kategori yanlış seçilmiş, hizmet listesi boş bırakılmış. “Karşıyaka cilt bakımı” yazan kişi haritadaki ilk sonuçlar arasında salonu göremiyor.',
        care: 'Profilin kategorisini, hizmet listesini ve çalışma saatini düzeltiyor, sitedeki bilgiyle eşitliyoruz.',
        cizim: 'harita',
        bag: { etiket: 'İşletme profili rehberi', url: '/blog/google-isletme-profili-nasil-acilir/' },
      },
      {
        soru: 'Her ilçe için ayrı sayfa açmalı mıyız?',
        ornek:
          'Gaziemir’deki bir klima servisi İzmir’in bütün ilçeleri için yalnız ilçe adı değişen sayfalar açmış. Google bu sayfaların çoğunu dizine almıyor; servisin gerçekten gittiği Buca ve Bornova sayfaları da kopyaların arasında kayboluyor.',
        care: 'Yalnız gerçekten hizmet verdiğiniz ilçeler için, o ilçedeki işinizi anlatan sayfalar kuruyoruz.',
        cizim: 'yapboz',
        bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
      },
      {
        soru: 'Büromuz adıyla aranınca neden çıkmıyor?',
        ornek:
          'Bayraklı’da adliyeye yakın bir hukuk bürosunun sitesi yeni yayına alınmış, ancak bir tema ayarı yüzünden sayfalar Google’a kapalı. Tavsiye üzerine büronun adını yazan kişi yalnız rehber sitelerindeki eski adresi buluyor.',
        care: 'Sayfaları dizine açıyor; büro adını, adresi ve telefonu sitede ve harita profilinde aynı biçimde yazıyoruz.',
        cizim: 'terazi',
        bag: { etiket: 'Hukuk büroları', url: '/sektorler/hukuk-burolari/' },
      },
      {
        soru: 'Kendi sitemiz neden yalnız adımızla çıkıyor?',
        ornek:
          'Foça’da bir butik otelin sitesi yalnız otelin adı yazıldığında görünüyor; “foça butik otel” aramasında rezervasyon siteleri sıralanıyor. Oda ve bölge sayfaları her yıl sezon açıldıktan sonra güncellendiği için arama başladığında hazır olmuyor.',
        care: 'Oda ve bölge sayfalarını sezondan aylar önce yayına alıyor, İngilizce sayfaları ayrı adreslerle kuruyoruz.',
        cizim: 'takvim',
        bag: { etiket: 'Otel ve konaklama', url: '/sektorler/otel-ve-konaklama/' },
      },
      {
        soru: 'Yurt dışındaki alıcı bizi Google’da nasıl bulur?',
        ornek:
          'Urla’da zeytinyağı üreten bir firmanın İngilizce sayfası Türkçe sayfanın makine çevirisi; ürün, alıcının kullandığı terimle yazılmamış. Toptan alım yapan ithalatçı aramasında yalnız aracı pazar yerlerini görüyor.',
        care: 'Alıcının yazdığı terimleri araştırıyor, her ürüne o dilde ayrı bir sayfa ve doğru dil etiketleri kuruyoruz.',
        cizim: 'buyutec',
        bag: { etiket: 'Üretim ve ihracat', url: '/sektorler/uretim-ve-ihracat/' },
      },
      {
        soru: 'ChatGPT işletmemizi neden yanlış anlatıyor?',
        ornek:
          'Alsancak’ta bir mimarlık ofisi kendini yapay zekâ aracına sorduğunda eski adresini ve artık vermediği bir hizmeti görüyor. Araç bu bilgiyi güncellenmemiş rehber kayıtlarından ve ofisin eski sitesinden derlemiş.',
        care: 'Ofis bilgisini sitede, harita profilinde ve rehber kayıtlarında tutarlı hâle getiriyor, hizmet sayfalarını açık cevap verecek biçimde yazıyoruz.',
        cizim: 'robot',
        bag: { etiket: 'Yapay zekâ görünürlüğü', url: '/hizmetler/yapay-zeka-gorunurlugu/' },
      },
    ],
  },

  isler: {
    baslik: 'İzmir’deki işletmeniz için SEO’da neler yapıyoruz?',
    giris: 'İş incelemeyle başlar; sonraki kalemlerin hangisine ağırlık vereceğimizi bulgular gösterir.',
    liste: [
      {
        ad: 'Teknik inceleme',
        aciklama: 'Sayfalarınızın Google’a açık olup olmadığına, telefonda nasıl açıldığına ve eski adreslerin nereye gittiğine bakıyoruz. Bulguları öncelik sırasıyla yazıyoruz.',
      },
      {
        ad: 'İlçe adlı arama araştırması',
        aciklama: 'Hizmetinizin İzmir’de hangi ilçe ve semt adlarıyla arandığını çıkarıyor, her arama için sitede tek bir sayfa belirliyoruz.',
      },
      {
        ad: 'Google İşletme Profili ve harita',
        aciklama: 'Kategoriyi, hizmet listesini, çalışma saatini ve fotoğrafları düzenliyor; ad, adres ve telefonun siteyle aynı yazıldığını kontrol ediyoruz.',
      },
      {
        ad: 'Hizmet ve ilçe sayfaları',
        aciklama: 'Her hizmete bir sayfa, yalnız gerçekten gittiğiniz ilçelere birer sayfa kuruyoruz. O ilçedeki işinizi anlatmayan ilçe sayfasını açmıyoruz.',
      },
      {
        ad: 'Yorum isteme düzeni',
        aciklama: 'İşi biten müşteriden yorumun ne zaman ve nasıl isteneceğini birlikte belirliyoruz. Yorumu sizin yerinize yazmıyor, sayı için söz vermiyoruz.',
      },
      {
        ad: 'Yapay zekâ yanıtlarında işletme bilgisi',
        aciklama: 'ChatGPT’de ve Google’ın yapay zekâ yanıtlarında işletmenizin nasıl anlatıldığına bakıyor, yanlış ya da eksik bilginin kaynağını düzeltiyoruz.',
      },
    ],
    bag: { etiket: 'SEO danışmanlığı', url: '/hizmetler/seo-danismanligi/' },
  },

  sss: {
    baslik: 'İzmir’de SEO hakkında sık sorulan sorular',
    giris: 'Ajans ve uzman seçimi, yerel SEO, yorumlar ve sıralama üzerine İzmir’deki işletmelerin sorduğu sorular.',
    sorular: [
      {
        soru: 'İzmir’de SEO ajansı nasıl seçilir?',
        cevap:
          'SEO ajansını, sitenizi görmeden söz verip vermediğine ve ilk görüşmede neyi inceleyeceğini söylemesine bakarak seçin. Belirli bir sıra ya da tarih vaat eden teklif, Google’ın kimseye vermediği bir şeyi satıyordur. İzmir’de çalışacağınız ekibe harita profiliniz ve ilçe aramalarınız için ne yapacağını ayrıca sorun.',
        bag: { etiket: 'Ajans nasıl seçilir?', url: '/blog/dijital-pazarlama-ajansi-nasil-secilir/' },
      },
      {
        soru: 'SEO uzmanı ile SEO ajansı arasında ne fark var?',
        cevap:
          'SEO uzmanı çoğu zaman tek başına çalışan bir danışmandır; ajans ise incelemeyi, teknik düzeltmeyi ve içeriği birlikte yürüten bir ekiptir. Hangisinin size uyduğu, sitede değişikliği kimin yapacağına bağlıdır. Geliştiriciniz varsa bulguları ona yazılı veririz, yoksa düzeltmeyi biz yaparız.',
      },
      {
        soru: 'İzmir’de yerel SEO neleri kapsar?',
        cevap:
          'Yerel SEO; Google İşletme Profili’nin düzenlenmesini, ad, adres ve telefonun her yerde aynı yazılmasını, yorumları ve ilçe adıyla yapılan aramalara cevap veren sayfaları kapsar. Bornova’da tek şubesi olan bir işletme için iş, profil ve birkaç sayfadan oluşur. İzmir’in birçok ilçesine servis veren bir firmada ise hangi ilçeye sayfa açılacağı ayrıca kararlaştırılır.',
      },
      {
        soru: 'Google yorumları harita sıralamasını etkiler mi?',
        cevap:
          'Evet; Google, yorum sayısını ve puanını yerel sonuçlardaki öne çıkma ölçütleri arasında sayıyor. Yorum satın almak ya da yorum karşılığında indirim vermek ise Google’ın kurallarına aykırıdır. Biz yorum toplamıyoruz; işi biten müşteriden yorum istemeyi günlük düzeninize nasıl ekleyeceğinizi birlikte planlıyoruz.',
        bag: { etiket: 'Yorum rehberi', url: '/blog/google-yorumlari-nasil-artirilir/' },
      },
      {
        soru: 'Yüz yüze görüşmeden SEO çalışması yapılır mı?',
        cevap:
          'Evet, yapılır; SEO’nun işi sitede, Search Console’da ve harita profilinde yürür, biz de uzaktan çalışıyoruz. Görüşmeleri telefonla ya da görüntülü yapıyor, erişimleri sizin hesabınız üzerinden alıyoruz. Dükkânın ya da tesisin fotoğrafı gerektiğinde sizden istiyoruz.',
      },
      {
        soru: 'Site ve Google İşletme Profili kimin adına olur?',
        cevap:
          'İkisi de sizin adınıza kayıtlı kalır. Search Console’a, siteye ve işletme profiline bizi yönetici olarak eklersiniz; sahiplik el değiştirmez. Profiliniz eski bir çalışanın ya da başka bir ajansın hesabındaysa nasıl geri alınacağına ilk görüşmede bakıyoruz.',
      },
      {
        soru: 'İzmir’de SEO ne zaman sonuç verir?',
        cevap:
          'Tarih vermiyoruz, çünkü teknik düzeltme, görünürlük ve talep farklı hızda değişir. Dizine kapalı bir sayfanın açılması ilk görülen değişikliktir; kalabalık bir ilçe aramasında yer değiştirmek en son gelir. İncelemeden sonra hangi işin önce yapılacağını ve neye bağlı olduğunu yazıyoruz.',
      },
      {
        soru: 'Sıralama garantisi veriyor musunuz?',
        cevap:
          'Hayır, sıralama için söz vermiyoruz; sonuçların sırasına Google karar verir. Verebildiğimiz söz çalışma biçimimizle ilgili: siteyi ve profili ayrıntılı inceliyor, yaptığımız her değişikliğin nedenini söylüyor, arama verisine düzenli bakıp geride kalan sayfayı yeniden ele alıyoruz.',
      },
    ],
  },
};

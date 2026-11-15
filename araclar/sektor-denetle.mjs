// Sektör sayfası denetimi: sayfa açılıyor mu, bölümler beklenen sayıda mı, başlık ve açıklama ölçüleri tutuyor mu,
// yasak ifade var mı? Çalışan geliştirme sunucusundan sayfayı okur.
// Kullanım: node araclar/sektor-denetle.mjs <kimlik> [<kimlik> ...] [--kok=http://localhost:4321]
const kok = (process.argv.find((a) => a.startsWith('--kok=')) || '--kok=http://localhost:4321').slice(6);
const kimlikler = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!kimlikler.length) {
  console.error('Kullanım: node araclar/sektor-denetle.mjs <kimlik> ...');
  process.exit(1);
}
const say = (html, desen) => (html.match(desen) || []).length;
const metin = (html) =>
  html
    .replace(/<head[\s\S]*?<\/head>/, ' ')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/g, ' ');
let toplam = 0;
for (const k of kimlikler) {
  const yanit = await fetch(`${kok}/sektorler/${k}/`);
  const html = await yanit.text();
  const sorunlar = [];
  if (yanit.status !== 200) {
    const hata = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    console.log(`\n${k}: HTTP ${yanit.status} ${hata}\n  SORUN  sayfa açılmıyor (veri dosyasında eksik alan ya da sözdizimi hatası olabilir)`);
    toplam++;
    continue;
  }
  const baslik = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const aciklama = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (baslik.length > 62) sorunlar.push(`başlık ${baslik.length} karakter (en çok 62): ${baslik}`);
  if (aciklama.length < 120 || aciklama.length > 170) sorunlar.push(`açıklama ${aciklama.length} karakter (120 ile 170 arası)`);
  if (say(html, /<h1\b/g) !== 1) sorunlar.push(`H1 sayısı ${say(html, /<h1\b/g)}`);
  const sayilar = {
    arama: say(html, /class="ara__ifade/g),
    soru: say(html, /class="sk__kart/g),
    kanal: say(html, /class="kn__kart/g),
    adim: say(html, /class="ay__durak/g),
    referans: say(html, /class="rf__kart/g),
    sss: say(html, /class="sss__oge/g),
    tabloSatiri: say(html, /<td data-baslik/g) / 3,
  };
  if (sayilar.arama < 6 || sayilar.arama > 10) sorunlar.push(`arama sayısı ${sayilar.arama} (6 ile 10 arası)`);
  if (![4, 6].includes(sayilar.soru)) sorunlar.push(`soru kartı sayısı ${sayilar.soru} (4 ya da 6)`);
  if (sayilar.kanal !== 4) sorunlar.push(`kanal kartı sayısı ${sayilar.kanal} (4 olmalı)`);
  if (sayilar.adim !== 5) sorunlar.push(`adım sayısı ${sayilar.adim} (5 olmalı)`);
  if (sayilar.sss < 7 || sayilar.sss > 9) sorunlar.push(`sık sorulan soru sayısı ${sayilar.sss} (7 ile 9 arası)`);
  const govde = metin(html);
  const tire = govde.match(/.{0,30}[—–].{0,30}/g);
  if (tire) sorunlar.push(`uzun tire: ${tire.slice(0, 3).map((t) => t.trim()).join(' | ')}`);
  const duzKesme = govde.match(/[A-Za-zÇĞİÖŞÜçğıöşü]'[A-Za-zÇĞİÖŞÜçğıöşü]/g);
  if (duzKesme) sorunlar.push(`düz kesme işareti: ${[...new Set(duzKesme)].slice(0, 5).join(' ')}`);
  if (/"[A-Za-zÇĞİÖŞÜçğıöşü]/.test(govde)) sorunlar.push('düz çift tırnak var (“ ” kullanın)');
  if (/Obrandy/i.test(govde)) sorunlar.push('Obrandy adı geçiyor');
  if (/\b\d[\d.]*\s?(TL|₺|lira)\b/i.test(govde)) sorunlar.push('TL tutarı var');
  if (/ücretsiz analiz|garanti ediyoruz|garantili|1\. sıra/i.test(govde)) sorunlar.push('yasak vaat ifadesi var');
  if (/·/.test(govde)) sorunlar.push('ortadaki nokta (·) var');
  const kelime = govde.split(/\s+/).filter((x) => /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(x)).length;
  toplam += sorunlar.length;
  console.log(`\n${k}: HTTP 200, ${kelime} kelime | ${Object.entries(sayilar).map(([a, d]) => `${a} ${d}`).join(', ')}`);
  console.log(`  başlık (${baslik.length}): ${baslik}\n  açıklama (${aciklama.length}): ${aciklama}`);
  for (const s of sorunlar) console.log(`  SORUN  ${s}`);
  if (!sorunlar.length) console.log('  temiz');
}
console.log(toplam ? `\n${toplam} sorun var.` : '\nSorun bulunmadı.');
process.exitCode = toplam ? 1 : 0;

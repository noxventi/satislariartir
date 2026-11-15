// Şehir ve ilçe sayfası denetimi: sayfa açılıyor mu, bölümler beklenen sayıda mı, başlık ve açıklama ölçüleri tutuyor mu,
// yasak ifade (ofis iddiası, fiyat, vaat) var mı? Çalışan geliştirme sunucusundan sayfayı okur.
// Kullanım: node araclar/yerel-denetle.mjs <kimlik> [<kimlik> ...] [--kok=http://localhost:4321]
//           node araclar/yerel-denetle.mjs --benzerlik   (veri dosyaları arasında aynen yinelenen cümleleri listeler)
import { readdirSync, readFileSync } from 'node:fs';

const KLASOR = 'src/data/yerel/sayfalar';

if (process.argv.includes('--benzerlik')) {
  // Aynı cümlenin birden çok sayfada geçmesi kopyalanmış içerik demektir. Yer adları aynı kalıba indirgenerek karşılaştırılır.
  const YERLER = /(Ankara|İstanbul|İzmir|Bursa|Eskişehir|Antalya|Çankaya|OSTİM|Ostim|Beylikdüzü|Pendik|Ataşehir|Kadıköy|Ümraniye|Avcılar|Kartal|Karşıyaka|Buca|Alanya|Manavgat)(’[a-zçğıöşü]+)?/g;
  const cumleler = new Map();
  for (const dosya of readdirSync(KLASOR).filter((d) => d.endsWith('.ts'))) {
    const metin = readFileSync(`${KLASOR}/${dosya}`, 'utf8');
    const dizgiler = [...metin.matchAll(/'((?:[^'\\]|\\.){40,})'/g)].map((m) => m[1]);
    for (const dizgi of dizgiler) {
      for (const cumle of dizgi.split(/(?<=[.?])\s+/)) {
        const kelime = cumle.trim().split(/\s+/).length;
        if (kelime < 9) continue;
        const anahtar = cumle.trim().replace(YERLER, '<yer>').toLocaleLowerCase('tr');
        if (!cumleler.has(anahtar)) cumleler.set(anahtar, new Set());
        cumleler.get(anahtar).add(dosya.replace('.ts', ''));
      }
    }
  }
  const yinelenen = [...cumleler.entries()].filter(([, s]) => s.size > 1).sort((a, b) => b[1].size - a[1].size);
  for (const [cumle, sayfalar] of yinelenen) console.log(`${sayfalar.size} sayfa: ${[...sayfalar].join(', ')}\n   ${cumle}\n`);
  console.log(yinelenen.length ? `${yinelenen.length} cümle birden çok sayfada aynen geçiyor.` : 'Sayfalar arasında aynen yinelenen cümle yok.');
  process.exit(0);
}

const kok = (process.argv.find((a) => a.startsWith('--kok=')) || '--kok=http://localhost:4321').slice(6);
const kimlikler = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!kimlikler.length) {
  console.error('Kullanım: node araclar/yerel-denetle.mjs <kimlik> ...   |   --benzerlik');
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
  const yanit = await fetch(`${kok}/${k}/`);
  const html = await yanit.text();
  const sorunlar = [];
  if (yanit.status !== 200) {
    const hata = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    console.log(`\n${k}: HTTP ${yanit.status} ${hata}\n  SORUN  sayfa açılmıyor (veri dosyasında eksik alan ya da sözdizimi hatası olabilir)`);
    toplam++;
    continue;
  }
  let veri = '';
  try {
    veri = readFileSync(`${KLASOR}/${k}.ts`, 'utf8');
  } catch {
    sorunlar.push(`veri dosyası yok: ${KLASOR}/${k}.ts`);
  }
  const ilce = /^\s*ilce:/m.test(veri);
  const baslik = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const aciklama = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (baslik.length > 62) sorunlar.push(`başlık ${baslik.length} karakter (en çok 62): ${baslik}`);
  if (aciklama.length < 120 || aciklama.length > 170) sorunlar.push(`açıklama ${aciklama.length} karakter (120 ile 170 arası)`);
  if (say(html, /<h1\b/g) !== 1) sorunlar.push(`H1 sayısı ${say(html, /<h1\b/g)}`);
  const sayilar = {
    arama: say(html, /class="ara__ifade/g),
    kart: say(html, /class="sk__kart/g),
    is: say(html, /<ul class="tikli tikli--ikili[^"]*"[^>]*>[\s\S]*?<\/ul>/.test(html) ? /<li[^>]*>\s*<strong/g : /$^/g),
    sss: say(html, /class="sss__oge/g),
  };
  // "is" sayısı yalnız işler listesinden alınır.
  const islerListesi = (html.match(/id="isler"[\s\S]*?<ul class="tikli[^>]*>([\s\S]*?)<\/ul>/) || [])[1] || '';
  sayilar.is = say(islerListesi, /<li/g);
  if (ilce) {
    if (sayilar.arama < 4 || sayilar.arama > 8) sorunlar.push(`arama sayısı ${sayilar.arama} (ilçe sayfasında 4 ile 8 arası)`);
    if (sayilar.kart !== 3) sorunlar.push(`durum kartı sayısı ${sayilar.kart} (ilçe sayfasında 3 olmalı)`);
    if (sayilar.is !== 4) sorunlar.push(`iş kalemi sayısı ${sayilar.is} (ilçe sayfasında 4 olmalı)`);
    if (sayilar.sss < 4 || sayilar.sss > 5) sorunlar.push(`sık sorulan soru sayısı ${sayilar.sss} (ilçe sayfasında 4 ya da 5)`);
  } else {
    if (sayilar.arama < 6 || sayilar.arama > 10) sorunlar.push(`arama sayısı ${sayilar.arama} (6 ile 10 arası)`);
    if (sayilar.kart !== 6) sorunlar.push(`durum kartı sayısı ${sayilar.kart} (6 olmalı)`);
    if (sayilar.is !== 6) sorunlar.push(`iş kalemi sayısı ${sayilar.is} (6 olmalı)`);
    if (sayilar.sss < 6 || sayilar.sss > 8) sorunlar.push(`sık sorulan soru sayısı ${sayilar.sss} (6 ile 8 arası)`);
  }
  const govde = metin(html);
  const tire = govde.match(/.{0,30}[—–].{0,30}/g);
  if (tire) sorunlar.push(`uzun tire: ${tire.slice(0, 3).map((t) => t.trim()).join(' | ')}`);
  const duzKesme = govde.match(/[A-Za-zÇĞİÖŞÜçğıöşü]'[A-Za-zÇĞİÖŞÜçğıöşü]/g);
  if (duzKesme) sorunlar.push(`düz kesme işareti: ${[...new Set(duzKesme)].slice(0, 5).join(' ')}`);
  if (/"[A-Za-zÇĞİÖŞÜçğıöşü]/.test(govde)) sorunlar.push('düz çift tırnak var (“ ” kullanın)');
  if (/Obrandy/i.test(govde)) sorunlar.push('Obrandy adı geçiyor');
  if (/\b\d[\d.]*\s?(TL|₺|lira)\b/i.test(govde)) sorunlar.push('TL tutarı var');
  // "En iyi" yalnız aranan soru olarak geçebilir: tırnak içindeki arama ifadeleri ve "... nasıl seçilir?" soruları ayıklanır.
  const vaatMetni = govde.replace(/“[^”]*”/g, ' ').replace(/[^.?!]*nasıl seçilir\?/gi, ' ');
  if (/ücretsiz analiz|garanti ediyoruz|garantili|1\. sıra|ilk sıraya|en iyi (web|seo|reklam|ajans)/i.test(vaatMetni)) sorunlar.push('yasak vaat ya da üstünlük ifadesi var');
  // Ofis iddiası yalnız veri dosyasında aranır (şablonun ortak metni temizdir).
  const ofis = veri.match(/.{0,40}(ofisimiz|şubemiz|merkezimiz|yerel ekibimiz|ekibimiz [^.]{0,30}’(da|de|ta|te) |adresimiz|yüz yüze görüş(üyoruz|ebiliriz)|ziyaret edebilirsiniz).{0,40}/gi);
  if (ofis) sorunlar.push(`ofis ya da yüz yüze görüşme iddiası: ${ofis.slice(0, 2).join(' | ')}`);
  if (/·/.test(govde)) sorunlar.push('ortadaki nokta (·) var');
  if (/!/.test(veri.replace(/^\s*(\/\/|\*|\/\*).*$/gm, '').replace(/!==?|!\w/g, ''))) sorunlar.push('veri dosyasında ünlem işareti var');
  const kelime = govde.split(/\s+/).filter((x) => /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(x)).length;
  toplam += sorunlar.length;
  console.log(`\n${k}${ilce ? ' (ilçe)' : ''}: HTTP 200, ${kelime} kelime | ${Object.entries(sayilar).map(([a, d]) => `${a} ${d}`).join(', ')}`);
  console.log(`  başlık (${baslik.length}): ${baslik}\n  açıklama (${aciklama.length}): ${aciklama}`);
  for (const s of sorunlar) console.log(`  SORUN  ${s}`);
  if (!sorunlar.length) console.log('  temiz');
}
console.log(toplam ? `\n${toplam} sorun var.` : '\nSorun bulunmadı.');
process.exitCode = toplam ? 1 : 0;

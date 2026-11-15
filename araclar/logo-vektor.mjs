// Satışları Artır logosunu (gorsel-kaynak/marka/logo-kaynak.png, işletme sahibinin verdiği dosya) vektöre çevirir.
// 1) Renk katmanları ayrılır: lacivert yazı, mavi ok, kırmızı etiket ve kıvılcımlar.
// 2) Her katman potrace ile izlenir (potrace proje bağımlılığı değildir: `npm i -D potrace` ya da POTRACE ortam
//    değişkeniyle modül yolu verilir).
// 3) Yollar ortak bir ölçeğe indirilir, src/data/logo.json ve public/favicon.svg yazılır.
// Renkler kaynak dosyadan ölçülür ve raporlanır; sitede tasarım değişkenleri kullanılır (bkz. Logo.astro).
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const KAYNAK = 'gorsel-kaynak/marka/logo-kaynak.png';
const BUYUT = 2;
const { default: potrace } = await import(process.env.POTRACE ? pathToFileURL(process.env.POTRACE).href : 'potrace');

const { data, info } = await sharp(KAYNAK).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const px = (x, y) => { const i = (y * w + x) * 3; return [data[i], data[i + 1], data[i + 2]]; };
const koyuluk = (c) => 1 - Math.min(c[0], c[1], c[2]) / 255;

// Simge ile yazı arasındaki boş sütun: sol yarıda, en uzun boşluğun ortası.
const dolu = new Array(w).fill(0);
for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) if (koyuluk(px(x, y)) > 0.25) dolu[x]++;
const ilk = dolu.findIndex((d) => d > 0);
let ayrim = 0;
for (let x = ilk, bas = -1, enUzun = 0; x < w * 0.4; x++) {
  if (dolu[x] === 0) { if (bas < 0) bas = x; if (x - bas > enUzun) { enUzun = x - bas; ayrim = Math.round((bas + x) / 2); } } else bas = -1;
}

// Katman renkleri: tam dolu piksellerin ortancası.
const ortanca = (d) => { d.sort((a, b) => a - b); return d[Math.floor(d.length / 2)]; };
const ornek = { yazi: [[], [], []], mavi: [[], [], []], kirmizi: [[], [], []] };
const sinif = (x, c) => (x > ayrim ? 'yazi' : c[0] > c[2] ? 'kirmizi' : 'mavi');
for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) {
  const c = px(x, y);
  if (koyuluk(c) < 0.7) continue;
  const s = ornek[sinif(x, c)];
  s[0].push(c[0]); s[1].push(c[1]); s[2].push(c[2]);
}
const renk = Object.fromEntries(Object.entries(ornek).map(([k, s]) => [k, s.map(ortanca)]));
const onalti = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
console.log('ayrım sütunu', ayrim, '| renkler', Object.entries(renk).map(([k, c]) => `${k} ${onalti(c)}`).join(', '));

// Kaplama: beyazdan katman rengine giden doğru üzerindeki konum (0 beyaz, 1 tam renk).
const yollar = {};
for (const k of ['yazi', 'mavi', 'kirmizi']) {
  const K = renk[k], v = [255 - K[0], 255 - K[1], 255 - K[2]], vv = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
  const maske = Buffer.alloc(w * h, 255);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const c = px(x, y);
    if (koyuluk(c) < 0.04 || sinif(x, c) !== k) continue;
    const t = Math.min(1, Math.max(0, ((255 - c[0]) * v[0] + (255 - c[1]) * v[1] + (255 - c[2]) * v[2]) / vv));
    maske[y * w + x] = Math.round(255 * (1 - t));
  }
  const png = await sharp(maske, { raw: { width: w, height: h, channels: 1 } }).resize({ width: w * BUYUT, kernel: 'lanczos3' }).png().toBuffer();
  await sharp(png).toFile(`gorsel-kaynak/marka/katman-${k}.png`);
  yollar[k] = await new Promise((coz, reddet) => {
    const iz = new potrace.Potrace({ threshold: 128, turdSize: 24, optCurve: true, optTolerance: 0.5, alphaMax: 1, turnPolicy: 'minority', blackOnWhite: true });
    iz.loadImage(png, (hata) => (hata ? reddet(hata) : coz(/ d="([^"]+)"/.exec(iz.getPathTag())[1])));
  });
}

// Ortak ölçek: içerik kutusu, yükseklik 100 birim.
const sayilar = (d) => d.match(/-?\d+(?:\.\d+)?/g).map(Number);
let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
for (const d of Object.values(yollar)) sayilar(d).forEach((n, i) => { if (i % 2 === 0) { x0 = Math.min(x0, n); x1 = Math.max(x1, n); } else { y0 = Math.min(y0, n); y1 = Math.max(y1, n); } });
const olcek = 100 / (y1 - y0);
const cevir = (d, dx = x0, dy = y0, o = olcek, hassas = 10) => {
  let i = 0;
  return d
    .replace(/-?\d+(?:\.\d+)?/g, (n) => String(Math.round((Number(n) - (i++ % 2 === 0 ? dx : dy)) * o * hassas) / hassas))
    .replace(/\s*,\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};
const logo = {
  kutu: [Math.round((x1 - x0) * olcek * 100) / 100, 100],
  simgeGenisligi: Math.round((ayrim * BUYUT - x0) * olcek * 100) / 100,
  kaynakRenk: Object.fromEntries(Object.entries(renk).map(([k, c]) => [k, onalti(c)])),
  yazi: cevir(yollar.yazi),
  mavi: cevir(yollar.mavi),
  kirmizi: cevir(yollar.kirmizi),
};
writeFileSync('src/data/logo.json', JSON.stringify(logo));

// Simge tek başına (site simgesi): mavi ok, kırmızı etiket ve kıvılcımlar, kare alana ortalanmış.
let sx1 = -Infinity, sy0 = Infinity, sy1 = -Infinity, sx0 = Infinity;
for (const k of ['mavi', 'kirmizi']) sayilar(logo[k]).forEach((n, i) => { if (i % 2 === 0) { sx0 = Math.min(sx0, n); sx1 = Math.max(sx1, n); } else { sy0 = Math.min(sy0, n); sy1 = Math.max(sy1, n); } });
const sw = sx1 - sx0, sh = sy1 - sy0, kenar = Math.max(sw, sh) * 1.16;
const so = 64 / kenar, ox = sx0 - (kenar - sw) / 2, oy = sy0 - (kenar - sh) / 2;
const simge = (k) => cevir(logo[k], ox, oy, so, 100);
writeFileSync(
  'public/favicon.svg',
  // Renkler her temada üst bilgideki logoyla aynıdır (marka sahibinin isteği, 15 Kasım 2026). Görünüm kutusu kenar boşluğunu kırpar.
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 58 58">\n  <path fill="#173da6" fill-rule="evenodd" d="${simge('mavi')}"/>\n  <path fill="#b92338" fill-rule="evenodd" d="${simge('kirmizi')}"/>\n</svg>\n`,
);
console.log('kutu', logo.kutu.join('x'), '| simge genişliği', logo.simgeGenisligi, '| yol uzunlukları', ['yazi', 'mavi', 'kirmizi'].map((k) => `${k} ${logo[k].length}`).join(', '));

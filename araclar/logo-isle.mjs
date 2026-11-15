// Toplanan marka logolarını güven şeridi için tek renge (sitenin mürekkep rengi) çevirir.
// Renk atılır, biçim kalır: her piksel için bir saydamlık hesaplanır, renk hep aynıdır. Ton farkı saydamlıkla korunur
// (ör. turuncu büyüteç siyah yazıdan biraz daha açık kalır), böylece logo dolu bir lekeye dönmez.
//
// Modlar:
//   acik: açık zemin için tasarlanmış logo. Zemin (verilmediyse beyaz) saydamlaşır, koyu ve renkli alanlar mürekkep olur.
//   koyu: koyu zemin üstünde duran logo (zemin dosyada ya da ekran görüntüsünde). Zemin saydamlaşır, açık alanlar mürekkep olur.
//   alfa: saydam zeminli, tek parça logo. Dosyanın kendi saydamlığı kullanılır.
import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const HAM = 'gorsel-kaynak/logolar/ham';
const HEDEF = 'src/assets/logolar';
const MUREKKEP = [16, 28, 57]; // --murekkep #101c39
mkdirSync(HEDEF, { recursive: true });

const LOGOLAR = [
  { kimlik: 'celikvillam', kaynak: 'celikvillam-buyuk.png', mod: 'acik' },
  { kimlik: 'hun-education', kaynak: 'hun-education-0.png', mod: 'acik' },
  { kimlik: 'burger-engineer', kaynak: 'burger-engineer-buyuk.png', mod: 'koyu' },
  { kimlik: 'rotech-defense', kaynak: 'rotech-defense-0.svg', mod: 'acik' },
  { kimlik: '1001-art', kaynak: '1001-art-0.svg', mod: 'acik' },
  { kimlik: 'rotech-danismanlik', kaynak: 'rotech-danismanlik-buyuk.png', mod: 'acik' },
  { kimlik: 'estika', kaynak: 'estika-buyuk.png', mod: 'acik' },
  { kimlik: 'white-earth-atelier', kaynak: 'white-earth-atelier-buyuk.webp', mod: 'alfa' },
  { kimlik: 'bodrum-olive-house', kaynak: 'bodrum-olive-house-buyuk.png', mod: 'alfa' },
  { kimlik: 'tarum-havuz', kaynak: 'tarum-havuz-0.png', mod: 'acik' },
  { kimlik: 'esvia', kaynak: 'esvia-buyuk.png', mod: 'acik' },
  { kimlik: 'yurt-disi-egitim-rehberim', kaynak: 'yurt-disi-egitim-rehberim-0.png', mod: 'acik' },
  { kimlik: 'eduregist', kaynak: 'eduregist-duzen.png', mod: 'koyu' },
  { kimlik: 'suha-akyildiz', kaynak: 'suha-akyildiz-duzen.png', mod: 'acik' },
  { kimlik: 'ilk-gunebakan', kaynak: 'ilk-gunebakan-0.avif', mod: 'acik' },
  // Başlık çekimi krem zeminde.
  { kimlik: 'pinar-tasdemir', kaynak: 'pinar-tasdemir-duzen.png', mod: 'acik', zemin: [244, 239, 232] },
  { kimlik: 'emre-apaydin', kaynak: 'emre-apaydin-0.png', mod: 'alfa' },
  // ton düşük: mor dairenin içindeki altın çiçek seçilsin.
  { kimlik: 'belda-yurtseven-tuner', kaynak: 'belda-yurtseven-tuner-0.png', mod: 'acik', ton: 0.22 },
];

const yumusak = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const secili = process.argv.slice(2);
for (const l of LOGOLAR) {
  if (secili.length && !secili.includes(l.kimlik)) continue;
  const { data, info } = await sharp(`${HAM}/${l.kaynak}`, { density: 360 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  // Koyu modda zemin rengi: verilmediyse saydam olmayan ilk köşe pikseli.
  let zemin = l.zemin;
  if (l.mod === 'koyu' && !zemin) {
    for (const [x, y] of [[2, 2], [w - 3, 2], [2, h - 3], [w - 3, h - 3], [Math.round(w / 2), 3]]) {
      const i = (y * w + x) * 4;
      if (data[i + 3] > 250) { zemin = [data[i], data[i + 1], data[i + 2]]; break; }
    }
    zemin ??= [0, 0, 0];
  }
  const ton = l.ton ?? 0.58;
  const maske = Buffer.alloc(w * h);
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let p = 0; p < w * h; p++) {
    const r = data[p * 4], g = data[p * 4 + 1], b = data[p * 4 + 2], a = data[p * 4 + 3] / 255;
    const isik = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    let s;
    if (l.mod === 'alfa') s = a;
    else if (l.mod === 'acik') {
      const z = l.zemin ?? [255, 255, 255];
      const fark = Math.max(Math.abs(z[0] - r), Math.abs(z[1] - g), Math.abs(z[2] - b)) / 255;
      s = a * yumusak(0.06, 0.34, fark) * (ton + (1 - ton) * (1 - isik));
    } else {
      const fark = Math.max(Math.abs(r - zemin[0]), Math.abs(g - zemin[1]), Math.abs(b - zemin[2])) / 255;
      s = a * yumusak(0.1, 0.4, fark) * (ton + (1 - ton) * isik);
    }
    const v = Math.round(Math.min(1, s) * 255);
    maske[p] = v;
    if (v > 10) {
      const x = p % w, y = (p - x) / w;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }
  if (x1 < 0) { console.log(l.kimlik, 'BOŞ MASKE'); continue; }
  const kw = x1 - x0 + 1, kh = y1 - y0 + 1;
  const rgba = Buffer.alloc(kw * kh * 4);
  let dolu = 0;
  for (let y = 0; y < kh; y++) for (let x = 0; x < kw; x++) {
    const v = maske[(y + y0) * w + x + x0], i = (y * kw + x) * 4;
    rgba[i] = MUREKKEP[0]; rgba[i + 1] = MUREKKEP[1]; rgba[i + 2] = MUREKKEP[2]; rgba[i + 3] = v;
    dolu += v;
  }
  const cikti = await sharp(rgba, { raw: { width: kw, height: kh, channels: 4 } })
    .resize({ width: 640, height: 200, fit: 'inside', kernel: 'lanczos3' })
    .png({ palette: true, colours: 64, effort: 10, compressionLevel: 9 })
    .toFile(`${HEDEF}/${l.kimlik}.png`);
  console.log(l.kimlik.padEnd(26), l.mod.padEnd(5), `${kw}x${kh} -> ${cikti.width}x${cikti.height}`, `oran ${(kw / kh).toFixed(2)}`, `doluluk ${((dolu / (kw * kh * 255)) * 100).toFixed(0)}%`, `${(cikti.size / 1024).toFixed(1)} KB`);
}

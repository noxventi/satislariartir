// Higgsfield çıktılarını (gorsel-kaynak/) site ana kopyalarına (src/assets/gorseller/) dönüştürür.
// AVIF/WebP türevlerini ve srcset'i derleme sırasında Astro üretir.
// "carpan": zemini sitenin kırık beyazına (#F8F7F3) eşitleyen kanal düzeltmesi.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const K = 'gorsel-kaynak', H = 'src/assets/gorseller';
const liste = [
  { k: 'ana-sayfa/ana-v3-beyaz-zemin.png', h: 'ana-masaustu.jpg', carpan: [1.025, 1.038, 1.03] },
  { k: 'ana-sayfa/ana-v3-mobil-4x5.png', h: 'ana-mobil.jpg', carpan: [1.042, 1.074, 1.089] },
  { k: 'ana-sayfa/ana-v2.png', h: 'celik-birlesim.jpg' },
  { k: 'sahneler/google-ads-3x2.png', h: 'google-ads.jpg' },
  { k: 'sahneler/meta-4x5.png', h: 'meta.jpg' },
  { k: 'sahneler/seo-3x2.png', h: 'seo.jpg' },
  { k: 'sahneler/geo-3x2.png', h: 'geo.jpg' },
  { k: 'sahneler/web-3x2.png', h: 'web.jpg' },
  { k: 'sahneler/basvuru-4x3.png', h: 'basvuru.jpg' },
  { k: 'sahneler/kanal-3x2.png', h: 'kanal.jpg' },
];
mkdirSync(H, { recursive: true });
for (const g of liste) {
  let s = sharp(`${K}/${g.k}`);
  if (g.carpan) s = s.linear(g.carpan, [0, 0, 0]);
  const info = await s.resize({ width: 2400, withoutEnlargement: true }).jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(`${H}/${g.h}`);
  const m = await sharp(`${H}/${g.h}`).metadata();
  const kose = async (l, t) => [...(await sharp(`${H}/${g.h}`).extract({ left: l, top: t, width: 24, height: 24 }).resize(1, 1).raw().toBuffer())].slice(0, 3).join(',');
  console.log(g.h.padEnd(22), `${m.width}x${m.height}`, `${Math.round(info.size / 1024)} KB`, 'sol-üst', await kose(0, 0), 'sol-alt', await kose(0, m.height - 24), 'sağ-üst', await kose(m.width - 24, 0));
}

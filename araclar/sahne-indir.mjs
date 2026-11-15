// Üretilen kâğıt işi sahneleri indirir ve site kopyalarını çıkarır.
// Kullanım: node araclar/sahne-indir.mjs <tur> <ad>=<adres> [<ad>=<adres> ...]
//   tur: sektorler | blog | sehirler
// Ham dosya gorsel-kaynak/<tur>/<ad>.png olarak saklanır; site kopyası src/assets/<tur>/<ad>.jpg (2000 px, 3:2).
// Ham dosya zaten varsa yeniden indirilmez; yalnız site kopyası yeniden üretilir.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const [tur, ...ciftler] = process.argv.slice(2);
if (!['sektorler', 'blog', 'sehirler'].includes(tur) || !ciftler.length) {
  console.error('Kullanım: node araclar/sahne-indir.mjs <sektorler|blog|sehirler> <ad>=<adres> ...');
  process.exit(1);
}
const HAM = `gorsel-kaynak/${tur}`;
const SITE = `src/assets/${tur}`;
mkdirSync(HAM, { recursive: true });
mkdirSync(SITE, { recursive: true });

for (const cift of ciftler) {
  const ayrac = cift.indexOf('=');
  const ad = cift.slice(0, ayrac);
  const adres = cift.slice(ayrac + 1);
  const ham = `${HAM}/${ad}.png`;
  if (!existsSync(ham)) {
    const yanit = await fetch(adres);
    if (!yanit.ok) {
      console.error(`${ad}: indirilemedi (${yanit.status})`);
      continue;
    }
    writeFileSync(ham, Buffer.from(await yanit.arrayBuffer()));
  }
  const bilgi = await sharp(ham).resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(`${SITE}/${ad}.jpg`);
  console.log(ad.padEnd(28), `${bilgi.width}x${bilgi.height}`, `${Math.round(bilgi.size / 1024)} KB`);
}

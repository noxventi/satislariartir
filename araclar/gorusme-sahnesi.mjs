// Görüşme bandının sahnesini hazırlar (gorsel-kaynak/gorusme/<ad>.png -> src/assets/gorseller/gorusme.jpg).
// Sahne lacivert mavi fonda üretildi; bölümün zemini (#173da6) ile birleşsin diye fon rengi ölçülür ve
// kanal bazında hafifçe düzeltilir. Kalan fark sayfada kenar maskesiyle erir.
// Kullanım: node araclar/gorusme-sahnesi.mjs <ad> [<adres>]   (adres verilirse ham dosya önce indirilir)
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const [ad, adres] = process.argv.slice(2);
if (!ad) {
  console.error('Kullanım: node araclar/gorusme-sahnesi.mjs <ad> [<adres>]');
  process.exit(1);
}
const HAM = 'gorsel-kaynak/gorusme';
mkdirSync(HAM, { recursive: true });
const ham = `${HAM}/${ad}.png`;
if (adres && !existsSync(ham)) {
  const yanit = await fetch(adres);
  if (!yanit.ok) throw new Error(`indirilemedi: ${yanit.status}`);
  writeFileSync(ham, Buffer.from(await yanit.arrayBuffer()));
}

// Fon rengi: üst kenardaki şeridin ortancası (sahne alt yarıda durur, üst kenar boş fondur).
const { data, info } = await sharp(ham).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const ornek = [[], [], []];
for (let y = 0; y < Math.round(info.height * 0.12); y += 3) {
  for (let x = 0; x < info.width; x += 5) {
    const i = (y * info.width + x) * 3;
    ornek[0].push(data[i]);
    ornek[1].push(data[i + 1]);
    ornek[2].push(data[i + 2]);
  }
}
const ortanca = (d) => d.sort((a, b) => a - b)[Math.floor(d.length / 2)];
const fon = ornek.map(ortanca);
const HEDEF = [0x17, 0x3d, 0xa6];
// Düzeltme: fonu hedefe taşıyan, beyazı (255) yerinde bırakan doğrusal eşleme. c' = 255 - (255 - c) * (255 - hedef) / (255 - fon)
const carpan = fon.map((f, i) => (255 - HEDEF[i]) / (255 - f));
const sabit = carpan.map((c) => 255 * (1 - c));
console.log(ad, 'fon', fon.join(','), '| hedef', HEDEF.join(','), '| çarpan', carpan.map((c) => c.toFixed(3)).join(', '));

const cikti = process.argv.includes('--onizleme') ? `onizleme/gorusme-${ad}.jpg` : 'src/assets/gorseller/gorusme.jpg';
const bilgi = await sharp(ham).linear(carpan, sabit).resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(cikti);
console.log(cikti, `${bilgi.width}x${bilgi.height}`, `${Math.round(bilgi.size / 1024)} KB`);

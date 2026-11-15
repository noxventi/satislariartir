// Ana sayfa görsellerini site ana kopyalarına dönüştürür:
// - Üst alan (kâğıt kasaba): masaüstü tam kare 16:9; telefon için sağ dörtte üç, 4:3 kırpım (dükkân, insanlar, kalem).
// - "Müşteri size beş yoldan gelir" bölümünün beş sahnesi.
// Üst alanın zemini sitenin kırık beyazına yaklaşacak kadar hafifçe soğutulur; kalan fark sayfada maske geçişiyle erir.
import sharp from 'sharp';

const H = 'src/assets/gorseller';
const KAPAK = 'gorsel-kaynak/kapak/diorama-kasaba.png';
const duzelt = [1.018, 1.052, 1.064];

const m = await sharp(KAPAK).metadata();
const tam = await sharp(KAPAK).linear(duzelt, [0, 0, 0]).resize({ width: 2400 }).jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(`${H}/kapak-masaustu.jpg`);
const sol = Math.round(m.width * 0.25);
const mobil = await sharp(KAPAK)
  .extract({ left: sol, top: 0, width: m.width - sol, height: m.height })
  .linear(duzelt, [0, 0, 0])
  .resize({ width: 1600 })
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true })
  .toFile(`${H}/kapak-mobil.jpg`);
console.log('kapak-masaustu', `${tam.width}x${tam.height}`, `${Math.round(tam.size / 1024)} KB`);
console.log('kapak-mobil   ', `${mobil.width}x${mobil.height}`, `${Math.round(mobil.size / 1024)} KB`);

const yollar = [
  ['arama-3x2', 'yol-arama'],
  ['akis-4x5', 'yol-akis'],
  ['cevap-4x5', 'yol-cevap'],
  ['yapay-zeka-1x1', 'yol-yapay-zeka'],
  ['site-4x5', 'yol-site'],
  // Ana sayfadaki 'İlk kez reklam mı vereceksiniz?' bölümü.
  ['ilk-adim-4x5', 'ilk-adim'],
  // Hakkımızda sayfası: kâğıt kasabanın kurulduğu atölye masası.
  ['atolye-3x2', 'atolye'],
];
for (const [k, h] of yollar) {
  const info = await sharp(`gorsel-kaynak/yollar/${k}.png`).resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(`${H}/${h}.jpg`);
  console.log(h.padEnd(14), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
}

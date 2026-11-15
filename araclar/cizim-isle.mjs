// Ana sayfa görsellerini (kâğıt işi nesneler, gorsel-kaynak/kagit/) site ana kopyalarına (src/assets/cizimler/) dönüştürür.
// Zemin saf beyaza itilir: görseller sayfada "multiply" ile alttaki yüzeye karışır, gölgeleri korunur.
// İlk üretilen düz çizimler gorsel-kaynak/cizimler/ altında kayıt olarak durur, sitede kullanılmaz.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const K = 'gorsel-kaynak/kagit', H = 'src/assets/cizimler';
const liste = [
  'megafon', 'mesaj', 'buyutec', 'dukkan', 'balon', 'yol-ayrimi', 'defter',
  // İç sayfalar için üretilen nesneler (15 Kasım 2026).
  'liste', 'telefon', 'hedef', 'kreatif', 'kitle', 'harita', 'kitaplik', 'robot', 'taslak', 'takvim', 'zarf', 'yapboz', 'terazi', 'kilit', 'tabela', 'soru', 'alet',
  // Web tasarım sayfasındaki "hız ve performans" kartı (15 Kasım 2026).
  'kronometre',
];
mkdirSync(H, { recursive: true });
for (const ad of liste) {
  const info = await sharp(`${K}/${ad}.png`).flatten({ background: '#ffffff' }).linear(1.012, 0).resize({ width: 1200, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(`${H}/${ad}.png`);
  const kose = [...(await sharp(`${H}/${ad}.png`).extract({ left: 0, top: 0, width: 20, height: 20 }).resize(1, 1).raw().toBuffer())].slice(0, 3).join(',');
  console.log(ad.padEnd(12), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`, 'köşe', kose);
}

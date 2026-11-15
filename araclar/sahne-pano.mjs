// Sahne görsellerini tek bir kontrol panosunda toplar (göz denetimi için).
// Kullanım: node araclar/sahne-pano.mjs <çıktı.jpg> <dosya> [<dosya> ...]
import sharp from 'sharp';

const [cikti, ...dosyalar] = process.argv.slice(2);
const G = 560, Y = 372, SUTUN = 4, ARA = 8;
const satir = Math.ceil(dosyalar.length / SUTUN);
const parcalar = await Promise.all(
  dosyalar.map(async (d, i) => ({
    input: await sharp(d).resize(G, Y, { fit: 'cover' }).jpeg({ quality: 80 }).toBuffer(),
    left: (i % SUTUN) * (G + ARA),
    top: Math.floor(i / SUTUN) * (Y + ARA),
  })),
);
await sharp({ create: { width: SUTUN * (G + ARA) - ARA, height: satir * (Y + ARA) - ARA, channels: 3, background: '#ffffff' } })
  .composite(parcalar)
  .jpeg({ quality: 82 })
  .toFile(cikti);
console.log(cikti, dosyalar.length, 'görsel');

// Birkaç görseli tek kontak baskıda birleştirir (inceleme için).
import sharp from 'sharp';
const [,, cikti, sutun, ...girdiler] = process.argv;
const S = Number(sutun), W = 560, H = 420, P = 8;
const parcalar = await Promise.all(girdiler.map(async (f, i) => ({
  input: await sharp(f).resize(W, H, { fit: 'contain', background: '#222' }).jpeg({ quality: 80 }).toBuffer(),
  left: P + (i % S) * (W + P), top: P + Math.floor(i / S) * (H + P),
})));
const satir = Math.ceil(girdiler.length / S);
await sharp({ create: { width: P + S * (W + P), height: P + satir * (H + P), channels: 3, background: '#222' } })
  .composite(parcalar).jpeg({ quality: 78 }).toFile(cikti);
console.log('tamam', cikti);

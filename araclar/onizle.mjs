import sharp from 'sharp';
const [,, out, ...ins] = process.argv;
for (const f of ins) {
  const m = await sharp(f).metadata();
  const name = f.split(/[\/]/).pop().replace(/\.\w+$/, '');
  await sharp(f).resize({ width: 1100 }).jpeg({ quality: 72 }).toFile(`${out}/${name}-onizleme.jpg`);
  // sample left-side ivory colour
  const { data } = await sharp(f).extract({ left: Math.round(m.width*0.05), top: Math.round(m.height*0.3), width: Math.round(m.width*0.2), height: Math.round(m.height*0.4) }).resize(1,1).raw().toBuffer({ resolveWithObject: true });
  const tl = await sharp(f).extract({ left: 0, top: 0, width: 40, height: 40 }).resize(1,1).raw().toBuffer();
  const bl = await sharp(f).extract({ left: 0, top: m.height-40, width: 40, height: 40 }).resize(1,1).raw().toBuffer();
  console.log(name, m.width+'x'+m.height, 'sol-orta rgb', [...data].slice(0,3), 'sol-ust', [...tl].slice(0,3), 'sol-alt', [...bl].slice(0,3));
}

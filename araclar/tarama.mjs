// Bütün sayfaların küçültülmüş tam boy görüntülerini yan yana dizer (genel bakış için).
// Kullanım: node araclar/tarama.mjs <genislik=1440> <klasor=onizleme/tarama> [yol ...]
import { existsSync, mkdirSync } from 'node:fs';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const [, , gen = '1440', klasor = 'onizleme/tarama', ...secili] = process.argv;
const W = Number(gen), mobil = W < 768;
const YOLLAR = secili.length
  ? secili
  : [
      '/hizmetler/',
      '/hizmetler/google-ads-yonetimi/',
      '/hizmetler/meta-reklam-yonetimi/',
      '/hizmetler/seo-danismanligi/',
      '/hizmetler/yapay-zeka-gorunurlugu/',
      '/hizmetler/web-tasarim/',
      '/blog/',
      '/blog/google-ads-tiklama-var-telefon-yok/',
      '/calismalarimiz/celikvillam/',
      '/calismalarimiz/hun-education/',
      '/hakkimizda/',
      '/iletisim/',
      '/lp/google-ads-hesap-inceleme/',
      '/lp/meta-reklam-inceleme/',
      '/gizlilik/',
      '/cerez-tercihleri/',
    ];
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
mkdirSync(klasor, { recursive: true });
const t = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
const kucuk = mobil ? 330 : 420, enFazla = mobil ? 21000 : 3600, SUTUN = mobil ? 6 : 4;
const kareler = [];
for (const yol of YOLLAR) {
  const s = await t.newPage();
  try {
    await s.setViewport({ width: W, height: mobil ? 844 : 900, deviceScaleFactor: 1, isMobile: mobil, hasTouch: mobil });
    await s.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const y = await s.goto('http://localhost:4321' + yol, { waitUntil: 'networkidle2', timeout: 90000 });
    await s.evaluate(async () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((g) => (g.loading = 'eager'));
      for (let yy = 0; yy < document.documentElement.scrollHeight; yy += 700) { window.scrollTo(0, yy); await new Promise((r) => setTimeout(r, 40)); }
      window.scrollTo(0, 0);
      await Promise.all([...document.images].map((g) => (g.complete ? null : new Promise((r) => { g.onload = g.onerror = r; }))));
      await Promise.all([...document.images].map((g) => g.decode().catch(() => null)));
      await document.fonts.ready;
    });
    await new Promise((r) => setTimeout(r, 300));
    const olcu = await s.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, h: document.documentElement.scrollHeight }));
    // Uzun sayfalar parça parça çekilir (tarayıcının 16.384 px sınırı).
    const PARCA = 6000, parcalar = [];
    for (let yy = 0; yy < olcu.h; yy += PARCA) {
      parcalar.push({ input: await s.screenshot({ clip: { x: 0, y: yy, width: W, height: Math.min(PARCA, olcu.h - yy) }, captureBeyondViewport: true }), left: 0, top: yy });
    }
    const ham = await sharp({ create: { width: W, height: olcu.h, channels: 3, background: '#ffffff' }, limitInputPixels: false }).composite(parcalar).png().toBuffer();
    const b = await sharp(ham, { limitInputPixels: false }).resize({ width: kucuk }).toBuffer();
    const m = await sharp(b).metadata();
    const kesik = m.height > enFazla ? await sharp(b).extract({ left: 0, top: 0, width: kucuk, height: enFazla }).toBuffer() : b;
    kareler.push({ yol, b: kesik, h: Math.min(m.height, enFazla) });
    console.log(yol.padEnd(52), y.status(), `${olcu.h}px`, olcu.sw > olcu.iw ? `!! YATAY TAŞMA ${olcu.sw}>${olcu.iw}` : '');
  } catch (h) {
    console.log(yol, 'HATA', h.message.slice(0, 100));
  } finally {
    await s.close();
  }
}
await t.close();
// Telefon genişliğinde tek sayfa istenmişse: uzun sayfa 3.000 piksellik sütunlara bölünür, yan yana dizilir.
if (mobil && kareler.length === 1) {
  const { b, h, yol } = kareler[0];
  const S = 3000, adet = Math.ceil(h / S);
  const katman = [];
  for (let i = 0; i < adet; i++) {
    katman.push({ input: await sharp(b).extract({ left: 0, top: i * S, width: kucuk, height: Math.min(S, h - i * S) }).toBuffer(), left: i * (kucuk + 8), top: 0 });
  }
  const ad = yol.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'ana';
  await sharp({ create: { width: adet * (kucuk + 8), height: Math.min(S, h), channels: 3, background: '#333' } }).composite(katman).jpeg({ quality: 74 }).toFile(`${klasor}/tel-${ad}.jpg`);
  console.log('telefon levhası', `${klasor}/tel-${ad}.jpg`);
  process.exit(0);
}
for (let i = 0, n = 1; i < kareler.length; i += SUTUN, n++) {
  const grup = kareler.slice(i, i + SUTUN);
  const H = Math.max(...grup.map((k) => k.h)) + 26;
  const katman = [];
  grup.forEach((k, j) => {
    katman.push({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${kucuk}" height="24"><text x="4" y="17" font-family="Arial" font-size="13" fill="#fff">${k.yol}</text></svg>`), left: j * (kucuk + 10), top: 0 });
    katman.push({ input: k.b, left: j * (kucuk + 10), top: 26 });
  });
  await sharp({ create: { width: grup.length * (kucuk + 10), height: H, channels: 3, background: '#333' } }).composite(katman).jpeg({ quality: 70 }).toFile(`${klasor}/sayfa-${W}-${n}.jpg`);
}
console.log('levha sayısı', Math.ceil(kareler.length / SUTUN));

// Sayfanın tam boy ekran görüntüsünü alır ve incelemek için dilimlere böler.
// Kurulu Chrome/Edge kullanılır (puppeteer-core, tarayıcı indirmez). Mobil genişliklerde cihaz öykünmesi yapılır.
// Kullanım: node araclar/ekran.mjs <url> <genislik> <cikti-klasoru> <ad> [dilim-yuksekligi=1800] [olcek=0.5]
// Not: görünüme girince açılan bloklar boş çıkmasın diye "hareketi azalt" tercihiyle çekilir.
import { mkdirSync, existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const [,, url, gen, klasor, ad, dilim = '1800', olcek = '0.5'] = process.argv;
const W = Number(gen), mobil = W < 768;
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
mkdirSync(klasor, { recursive: true });
const tarayici = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
try {
  const sayfa = await tarayici.newPage();
  await sayfa.setViewport({ width: W, height: mobil ? 844 : 900, deviceScaleFactor: 1, isMobile: mobil, hasTouch: mobil });
  await sayfa.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  const yanit = await sayfa.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
  // Tembel yüklenen görseller için sayfayı bir kez baştan sona kaydır.
  await sayfa.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((g) => (g.loading = 'eager'));
    for (let y = 0; y < document.documentElement.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
    await Promise.all([...document.images].map((g) => (g.complete ? null : new Promise((r) => { g.onload = g.onerror = r; }))));
    // Tam boy çekimde boş görünmesin diye bütün görsellerin çözülmesi beklenir.
    await Promise.all([...document.images].map((g) => g.decode().catch(() => null)));
    await document.fonts.ready;
  });
  await new Promise((r) => setTimeout(r, 400));
  const olcu = await sayfa.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, h: document.documentElement.scrollHeight }));
  const ham = `${klasor}/${ad}-tam.png`;
  // Tarayıcı 16.384 pikselden uzun tek görüntü üretemez: sayfa parça parça çekilip birleştirilir.
  const PARCA = 6000;
  const parcalar = [];
  for (let y = 0; y < olcu.h; y += PARCA) {
    const yukseklik = Math.min(PARCA, olcu.h - y);
    parcalar.push({ input: await sayfa.screenshot({ clip: { x: 0, y, width: W, height: yukseklik }, captureBeyondViewport: true }), left: 0, top: y });
  }
  await sharp({ create: { width: W, height: olcu.h, channels: 3, background: '#ffffff' }, limitInputPixels: false }).composite(parcalar).png().toFile(ham);
  const m = await sharp(ham, { limitInputPixels: false }).metadata();
  const D = Number(dilim), O = Number(olcek);
  let i = 0;
  for (let y = 0; y < m.height; y += D, i++) {
    const h = Math.min(D, m.height - y);
    await sharp(ham, { limitInputPixels: false }).extract({ left: 0, top: y, width: m.width, height: h }).resize({ width: Math.round(m.width * O) }).jpeg({ quality: 72 }).toFile(`${klasor}/${ad}-${String(i + 1).padStart(2, '0')}.jpg`);
  }
  console.log(`${ad}: HTTP ${yanit.status()} ${m.width}x${m.height} -> ${i} dilim` + (olcu.sw > olcu.iw ? `  !! YATAY TAŞMA: scrollWidth ${olcu.sw} > ${olcu.iw}` : '  (yatay taşma yok)'));
} finally {
  await tarayici.close();
}

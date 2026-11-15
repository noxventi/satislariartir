// Tek bir görünüm alanı (viewport) görüntüsü alır: sabit duran öğeleri (alt çubuk, yüzen düğme) görmek için.
// Kullanım: node araclar/gorunum.mjs <url> <genislik> <secici|-> <cikti.jpg> [bekleme-ms=1500]
// Seçici verilirse o öğe ekranın üstüne kaydırılır. Hareket açıkken çekilir (görünüme giriş animasyonları oynar).
import { existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const [, , url, gen, secici = '-', cikti, bekle = '1500'] = process.argv;
const W = Number(gen);
const mobil = W < 768;
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const tarayici = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
try {
  const sayfa = await tarayici.newPage();
  await sayfa.setViewport({ width: W, height: mobil ? 844 : 900, deviceScaleFactor: 1, isMobile: mobil, hasTouch: mobil });
  await sayfa.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
  if (secici !== '-') {
    // Tembel görseller yüklenince sayfa uzar ve hedef kayar: önce hepsini yükle, sonra kaydır.
    await sayfa.evaluate(async () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((g) => (g.loading = 'eager'));
      await Promise.all([...document.images].map((g) => (g.complete ? null : new Promise((r) => { g.onload = g.onerror = r; }))));
    });
    const kaydir = () => sayfa.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: 'start', behavior: 'instant' }), secici);
    await kaydir();
    await new Promise((r) => setTimeout(r, 400));
    await kaydir();
  }
  await new Promise((r) => setTimeout(r, Number(bekle)));
  await sayfa.screenshot({ path: cikti, type: 'jpeg', quality: 82 });
  console.log(cikti);
} finally {
  await tarayici.close();
}

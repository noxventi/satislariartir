// Üst menünün açık durumlarını çeker: masaüstünde iki panel, dar ekranda tam ekran menü.
// Kullanım: node araclar/menu-ekran.mjs <url> <genislik> <cikti-klasoru> [yukseklik=900] [olcek=1]
// Çıktılar: <klasor>/menu-<genislik>-kapali.jpg, -hizmetler.jpg, -sektorler.jpg (geniş) ya da -mobil.jpg, -mobil-alt.jpg (dar).
import { mkdirSync, existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const [, , url, gen, klasor, yuk = '900', olcek = '1'] = process.argv;
const W = Number(gen), H = Number(yuk), O = Number(olcek), mobil = W < 768;
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
mkdirSync(klasor, { recursive: true });
const tarayici = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
const kaydet = async (sayfa, ad) => {
  const ham = await sayfa.screenshot({ type: 'png' });
  await sharp(ham).resize({ width: Math.round(W * O) }).jpeg({ quality: 80 }).toFile(`${klasor}/menu-${W}-${ad}.jpg`);
  console.log(`menu-${W}-${ad}.jpg`);
};
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
try {
  const sayfa = await tarayici.newPage();
  await sayfa.setViewport({ width: W, height: H, deviceScaleFactor: 1, isMobile: mobil, hasTouch: mobil });
  await sayfa.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
  await sayfa.evaluate(() => document.fonts.ready);
  await bekle(1900); // logo açılışı bitsin
  const panelVar = await sayfa.evaluate(() => getComputedStyle(document.querySelector('.ust__menu') ?? document.body).display !== 'none' && Boolean(document.querySelector('.ust__menu')));
  if (panelVar) {
    await kaydet(sayfa, 'kapali');
    const dugmeler = await sayfa.$$('[data-alt-menu] > .ust__bag');
    const adlar = ['hizmetler', 'sektorler'];
    for (let i = 0; i < dugmeler.length; i++) {
      await dugmeler[i].hover();
      await bekle(1500);
      await sayfa.evaluate(async () => {
        await Promise.all([...document.querySelectorAll('[data-acik] .panel img')].map((g) => (g.complete ? null : new Promise((r) => { g.onload = g.onerror = r; }))));
      });
      await bekle(300);
      await kaydet(sayfa, adlar[i] ?? `panel-${i}`);
    }
    // Kaydırılmış durum: okuma çizgisi.
    await sayfa.mouse.move(W / 2, H - 20);
    await bekle(400);
    await sayfa.evaluate(() => window.scrollTo(0, 1400));
    await bekle(500);
    await kaydet(sayfa, 'kaydi');
  } else {
    await kaydet(sayfa, 'kapali');
    await sayfa.click('[data-menu-ac]');
    await bekle(1200);
    await sayfa.evaluate(async () => {
      await Promise.all([...document.querySelectorAll('#mobil-menu img')].map((g) => (g.complete ? null : new Promise((r) => { g.onload = g.onerror = r; }))));
    });
    await bekle(300);
    await kaydet(sayfa, 'mobil');
    await sayfa.evaluate(() => document.querySelector('#mobil-menu').scrollTo(0, 9999));
    await bekle(300);
    await kaydet(sayfa, 'mobil-alt');
    const tasma = await sayfa.evaluate(() => { const m = document.querySelector('#mobil-menu'); return m.scrollWidth > m.clientWidth; });
    console.log(tasma ? '!! menüde yatay taşma' : 'menüde yatay taşma yok');
  }
} finally {
  await tarayici.close();
}

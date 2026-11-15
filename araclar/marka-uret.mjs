// Marka dosyalarını üretir: favicon.ico, apple-touch-icon.png, logo.png (yapısal veri için), og.jpg (1200x630).
// Site simgesi (public/favicon.svg) ve logo çizimi (src/data/logo.json) araclar/logo-vektor.mjs çıktısıdır.
// OG görseli sitenin kendi yazı tipleri, logosu ve üst alan fotoğrafıyla, kurulu Chrome'da çizilir.
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const kok = process.cwd();
const logo = JSON.parse(readFileSync('src/data/logo.json', 'utf8'));
const logoSvg = (ek = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${logo.kutu[0]} ${logo.kutu[1]}" ${ek}><path fill="#173da6" fill-rule="evenodd" d="${logo.mavi}"/><path fill="#b92338" fill-rule="evenodd" d="${logo.kirmizi}"/><path fill="#101c39" fill-rule="evenodd" d="${logo.yazi}"/></svg>`;

const svg = readFileSync('public/favicon.svg');
// iOS saydam simgeyi siyah zemine koyar: dokunma simgesi sitenin kâğıt rengine oturtulur.
await sharp(svg, { density: 600 }).resize(180, 180).flatten({ background: '#f8f7f3' }).png().toFile('public/apple-touch-icon.png');
// Kurum logosu (schema.org Organization.logo): beyaz zeminde, kenar boşluklu.
const logoPng = await sharp(Buffer.from(logoSvg('width="1040"')), { density: 300 }).resize({ width: 1040 }).png().toBuffer();
const lm = await sharp(logoPng).metadata();
await sharp({ create: { width: 1200, height: lm.height + 160, channels: 3, background: '#ffffff' } })
  .composite([{ input: logoPng, left: 80, top: 80 }])
  .png({ palette: true, colours: 128 })
  .toFile('public/logo.png');
const png32 = await sharp(svg, { density: 300 }).resize(32, 32).png().toBuffer();
// ICO kabı: tek PNG girdisi.
const bas = Buffer.alloc(22);
bas.writeUInt16LE(0, 0);
bas.writeUInt16LE(1, 2);
bas.writeUInt16LE(1, 4);
bas.writeUInt8(32, 6);
bas.writeUInt8(32, 7);
bas.writeUInt8(0, 8);
bas.writeUInt8(0, 9);
bas.writeUInt16LE(1, 10);
bas.writeUInt16LE(32, 12);
bas.writeUInt32LE(png32.length, 14);
bas.writeUInt32LE(22, 18);
writeFileSync('public/favicon.ico', Buffer.concat([bas, png32]));

const u = (p) => pathToFileURL(path.join(kok, p)).href;
const arsiv = 'node_modules/@fontsource-variable/archivo/files';
const html = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>
@font-face{font-family:A;src:url(${u(`${arsiv}/archivo-latin-wdth-normal.woff2`)}) format('woff2');font-weight:100 900;font-stretch:62% 125%;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F}
@font-face{font-family:A;src:url(${u(`${arsiv}/archivo-latin-ext-wdth-normal.woff2`)}) format('woff2');font-weight:100 900;font-stretch:62% 125%;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#f8f7f3;color:#101c39;font-family:A,sans-serif;position:relative;overflow:hidden}
img{position:absolute;right:-150px;top:0;height:630px;-webkit-mask-image:linear-gradient(to right,transparent 30%,#000 58%)}
.m{position:absolute;left:58px;top:34px;height:74px;width:auto}
.ara{position:absolute;left:64px;top:150px;display:flex;align-items:center;gap:14px;height:64px;padding:0 22px;background:#fff;border:2px solid #101c39;border-radius:4px;box-shadow:6px 6px 0 #e8edf8;font-weight:560;font-stretch:92%;font-size:28px}
.ara span{position:relative}
.ara span::after{content:'';position:absolute;left:-4px;right:-4px;top:54%;height:4px;background:#b92338;border-radius:2px;transform:rotate(-1.2deg)}
.ara svg{width:26px;height:26px;fill:#59657f}
.d{position:absolute;left:64px;top:262px;font-weight:560;font-stretch:96%;font-size:27px;color:#2b3757}
.s{position:absolute;left:84px;top:312px;font-weight:740;font-stretch:82%;font-size:100px;line-height:1;letter-spacing:-.032em;white-space:nowrap}
.s span{position:relative}
.s svg{position:absolute;left:-.42em;top:-.26em;width:calc(100% + .84em);height:calc(100% + .5em);overflow:visible}
.a{position:absolute;left:64px;bottom:54px;font-weight:640;font-stretch:94%;font-size:28px;color:#173da6;display:flex;align-items:center;gap:16px}
.a::before{content:'';width:44px;height:3px;background:#b92338}
</style></head><body>
<img src="${u('src/assets/gorseller/kapak-masaustu.jpg')}">
${logoSvg('class="m"')}
<p class="ara"><svg viewBox="0 0 256 256"><path d="M229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z"/></svg><span>google’a reklam vermek</span></p>
<p class="d">Bunu mu demek istediniz:</p>
<p class="s"><span>Satışları artır.<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 5 56 C 2 18 9 7 53 7 C 82 6.5 97.5 22 96.5 49 C 95.5 78 76 93 49 92.5 C 20 92 2 80 4 49 C 4.5 24 11 9.5 32 6.5" fill="none" stroke="#b92338" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg></span></p>
<p class="a">Dijital pazarlama ajansı</p>
</body></html>`;
writeFileSync('gorsel-kaynak/og-sablon.html', html);
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const t = await puppeteer.launch({ executablePath, headless: true, args: ['--allow-file-access-from-files'] });
const s = await t.newPage();
await s.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await s.goto(u('gorsel-kaynak/og-sablon.html'), { waitUntil: 'networkidle0' });
await s.evaluate(() => document.fonts.ready);
await s.screenshot({ path: 'gorsel-kaynak/og.png' });
await t.close();
const og = await sharp('gorsel-kaynak/og.png').jpeg({ quality: 86, mozjpeg: true }).toFile('public/og.jpg');
console.log('og.jpg', Math.round(og.size / 1024), 'KB; favicon.ico', bas.length + png32.length, 'bayt');

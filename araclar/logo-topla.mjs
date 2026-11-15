// Çalışılan markaların logolarını kendi sitelerinden toplar.
// Her site için logo adaylarını bulur, kaynak dosyayı ve sayfadaki görünümünü gorsel-kaynak/logolar/ham altına kaydeder.
// Seçim ve tek renge çevirme: araclar/logo-isle.mjs. Kullanım izni marka sahibiyle teyit edilmelidir (bkz. TESLIM.md).
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const SITELER = {
  celikvillam: 'celikvillam.com',
  'hun-education': 'huneducation.com',
  'burger-engineer': 'burgerengineer.com.tr',
  'rotech-defense': 'gabionmaterials.com',
  '1001-art': '1001art.org',
  'rotech-danismanlik': 'rotechdanismanlik.com',
  estika: 'estika.com.tr',
  'white-earth-atelier': 'whiteearthatelier.com',
  'bodrum-olive-house': 'bodrumolivehouse.com',
  'tarum-havuz': 'tarumhavuz.com',
  esvia: 'esvia.com.tr',
  'yurt-disi-egitim-rehberim': 'yurtdisiegitimrehberim.com',
  eduregist: 'eduregist.com',
  'suha-akyildiz': 'suha.av.tr',
  'ilk-gunebakan': 'ilkgunebakan.com',
  'pinar-tasdemir': 'kayseridermatolog.com',
  'emre-apaydin': 'emreapaydin.com',
  'belda-yurtseven-tuner': 'drbeldayurtseventuner.com',
};

// Başlıktaki dosya küçük kaldığında sitenin kendi yapısal verisinde (JSON-LD "logo") ya da srcset'inde duran büyük sürüm.
const BUYUK = {
  celikvillam: 'https://celikvillam.com/brand/rotech-logo.png',
  'burger-engineer': 'https://burgerengineer.com.tr/brand/burger-engineer-logo.png',
  esvia: 'https://www.esvia.com.tr/images/brand/esvia-logo@3x.png?v=2',
  'white-earth-atelier': 'https://whiteearthatelier.com/brand/lockup@2x.webp',
  estika: 'https://estika.com.tr/assets/brand/estika-logo@2x.png',
  'rotech-danismanlik': 'https://rotechdanismanlik.com/brand/rotech-logo.png',
  'bodrum-olive-house': 'https://bodrumolivehouse.com/wp-content/uploads/boh/bodrum-olive-house-logo-light.png',
};

// Logosu simge + HTML yazı olan siteler: başlıktaki marka bağlantısı olduğu gibi, yüksek yoğunlukta çekilir.
const DUZEN = {
  eduregist: 'img[src*="mark"]',
  'suha-akyildiz': 'img[src*="logo"]',
  'pinar-tasdemir': 'img[src*="logo-mark"]',
};

const YALNIZ_EK = process.argv.includes('--ek');
const secili = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const HAM = 'gorsel-kaynak/logolar/ham';
mkdirSync(HAM, { recursive: true });
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const tarayici = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
const rapor = {};

for (const [kimlik, alan] of Object.entries(SITELER)) {
  if (YALNIZ_EK || (secili.length && !secili.includes(kimlik))) continue;
  const sayfa = await tarayici.newPage();
  try {
    await sayfa.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await sayfa.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await sayfa.goto(`https://${alan}/`, { waitUntil: 'networkidle2', timeout: 45000 });
    await new Promise((r) => setTimeout(r, 1200));

    const adaylar = await sayfa.evaluate(() => {
      const zemin = (el) => {
        for (let e = el; e; e = e.parentElement) {
          const c = getComputedStyle(e).backgroundColor;
          if (c && c !== 'transparent' && !/rgba\(\s*0,\s*0,\s*0,\s*0\s*\)/.test(c)) return c;
        }
        return 'rgb(255, 255, 255)';
      };
      const liste = [];
      const ekle = (el, tur) => {
        const r = el.getBoundingClientRect();
        if (r.width < 24 || r.height < 12 || r.width > 700) return;
        const bag = el.closest('a');
        let anaBag = false;
        try { anaBag = !!bag && new URL(bag.href, location.href).pathname.replace(/\/(tr|en)\/?$/, '/') === '/'; } catch {}
        const ipucu = [tur === 'img' ? el.currentSrc || el.src : '', el.getAttribute('class') || '', el.getAttribute('alt') || '', el.id || '', bag?.getAttribute('class') || '', el.closest('[class*="logo" i], [id*="logo" i], [class*="brand" i]') ? 'logo-kap' : '']
          .join(' ')
          .toLowerCase();
        let puan = 0;
        if (/logo|brand/.test(ipucu)) puan += 5;
        if (anaBag) puan += 4;
        if (el.closest('header, nav, [class*="header" i], [class*="navbar" i]')) puan += 3;
        if (r.top < 200) puan += 2;
        if (r.top > 900) puan -= 3;
        if (puan < 4) return;
        liste.push({
          tur,
          puan,
          src: tur === 'img' ? el.currentSrc || el.src : null,
          svg: tur === 'svg' ? new XMLSerializer().serializeToString(el) : null,
          renk: tur === 'svg' ? getComputedStyle(el).color : null,
          alt: el.getAttribute('alt') || el.getAttribute('aria-label') || '',
          kutu: [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)],
          dogal: tur === 'img' ? [el.naturalWidth, el.naturalHeight] : null,
          zemin: zemin(el),
          el,
        });
      };
      document.querySelectorAll('img').forEach((e) => ekle(e, 'img'));
      document.querySelectorAll('svg').forEach((e) => ekle(e, 'svg'));
      liste.sort((a, b) => b.puan - a.puan || a.kutu[1] - b.kutu[1]);
      const gorulen = new Set();
      const sonuc = [];
      for (const a of liste) {
        const anahtar = a.src || a.svg;
        if (gorulen.has(anahtar)) continue;
        gorulen.add(anahtar);
        a.el.setAttribute('data-logo-aday', String(sonuc.length));
        delete a.el;
        sonuc.push(a);
        if (sonuc.length === 4) break;
      }
      return sonuc;
    });

    for (const [i, a] of adaylar.entries()) {
      const kok = `${HAM}/${kimlik}-${i}`;
      try {
        const el = await sayfa.$(`[data-logo-aday="${i}"]`);
        await el.screenshot({ path: `${kok}-sayfada.png` });
      } catch (h) {
        a.ekranHata = h.message.slice(0, 80);
      }
      if (a.tur === 'svg') {
        let svg = a.svg;
        if (!/xmlns=/.test(svg)) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        svg = svg.replace(/currentColor/g, a.renk || '#000');
        writeFileSync(`${kok}.svg`, svg);
        a.dosya = `${kok}.svg`;
        delete a.svg;
      } else if (a.src?.startsWith('data:')) {
        const [bas, veri] = a.src.split(',');
        const uz = /svg/.test(bas) ? 'svg' : /png/.test(bas) ? 'png' : /webp/.test(bas) ? 'webp' : 'jpg';
        writeFileSync(`${kok}.${uz}`, /base64/.test(bas) ? Buffer.from(veri, 'base64') : decodeURIComponent(veri));
        a.dosya = `${kok}.${uz}`;
        a.src = 'data:';
      } else if (a.src) {
        try {
          const y = await fetch(a.src, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36', referer: `https://${alan}/` } });
          const tip = y.headers.get('content-type') || '';
          const uz = /svg/.test(tip) || /\.svg(\?|$)/i.test(a.src) ? 'svg' : /png/.test(tip) ? 'png' : /webp/.test(tip) ? 'webp' : /avif/.test(tip) ? 'avif' : /gif/.test(tip) ? 'gif' : 'jpg';
          const veri = Buffer.from(await y.arrayBuffer());
          writeFileSync(`${kok}.${uz}`, veri);
          a.dosya = `${kok}.${uz}`;
          a.boyut = veri.length;
        } catch (h) {
          a.indirmeHata = h.message.slice(0, 80);
        }
      }
    }
    rapor[kimlik] = { alan, adaylar };
    console.log(kimlik.padEnd(26), adaylar.map((a) => `${a.tur}:${a.puan}:${a.kutu[2]}x${a.kutu[3]}`).join('  ') || 'ADAY YOK');
  } catch (h) {
    rapor[kimlik] = { alan, hata: h.message.slice(0, 160) };
    console.log(kimlik.padEnd(26), 'HATA', h.message.slice(0, 120));
  } finally {
    await sayfa.close();
  }
}
for (const [kimlik, secici] of Object.entries(DUZEN)) {
  if (secili.length && !secili.includes(kimlik)) continue;
  const sayfa = await tarayici.newPage();
  try {
    await sayfa.setViewport({ width: 1440, height: 900, deviceScaleFactor: 4 });
    await sayfa.goto(`https://${SITELER[kimlik]}/`, { waitUntil: 'networkidle2', timeout: 45000 });
    await new Promise((r) => setTimeout(r, 1200));
    const kutu = await sayfa.evaluate((s) => {
      const img = [...document.querySelectorAll(s)].find((e) => {
        const r = e.getBoundingClientRect();
        return r.width > 16 && r.top < 200 && r.top >= 0;
      });
      const bag = img?.closest('a');
      if (!bag) return null;
      const r = bag.getBoundingClientRect();
      return { x: Math.max(0, r.left - 6), y: Math.max(0, r.top - 6), width: r.width + 12, height: r.height + 12 };
    }, secici);
    if (!kutu) throw new Error('marka bağlantısı bulunamadı');
    await sayfa.screenshot({ path: `${HAM}/${kimlik}-duzen.png`, clip: kutu });
    console.log(kimlik.padEnd(26), 'düzen', `${Math.round(kutu.width)}x${Math.round(kutu.height)} @4x`);
  } catch (h) {
    console.log(kimlik.padEnd(26), 'DÜZEN HATA', h.message.slice(0, 120));
  } finally {
    await sayfa.close();
  }
}
await tarayici.close();

for (const [kimlik, url] of Object.entries(BUYUK)) {
  if (secili.length && !secili.includes(kimlik)) continue;
  try {
    const y = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36' } });
    const tip = y.headers.get('content-type') || '';
    if (!y.ok || !/image/.test(tip)) throw new Error(`HTTP ${y.status} ${tip}`);
    const uz = /png/.test(tip) ? 'png' : /webp/.test(tip) ? 'webp' : /svg/.test(tip) ? 'svg' : 'jpg';
    const veri = Buffer.from(await y.arrayBuffer());
    writeFileSync(`${HAM}/${kimlik}-buyuk.${uz}`, veri);
    console.log(kimlik.padEnd(26), 'büyük', `${Math.round(veri.length / 1024)} KB`);
  } catch (h) {
    console.log(kimlik.padEnd(26), 'BÜYÜK HATA', h.message.slice(0, 120));
  }
}

if (!YALNIZ_EK) {
  const dosya = `${HAM}/rapor${secili.length ? '-' + secili.join('_') : ''}.json`;
  writeFileSync(dosya, JSON.stringify(rapor, null, 2));
  console.log('rapor:', dosya);
}

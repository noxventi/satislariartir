// Canlı proje sitelerinin gerçek ekran görüntülerini alır (masaüstü 1440x900, mobil 390x844).
// Görüntüler kamuya açık sayfaların olduğu gibi kaydıdır; kişisel veri içeren alan çekilmez (yalnız ilk ekran).
// Kullanım izni marka sahibiyle teyit edilmelidir (bkz. TESLIM.md).
import { mkdirSync, existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const siteler = process.argv.slice(2);
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const HAM = 'gorsel-kaynak/proje-ekranlari', HEDEF = 'src/assets/projeler';
mkdirSync(HAM, { recursive: true }); mkdirSync(HEDEF, { recursive: true });
const tarayici = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
for (const alan of siteler) {
  const ad = alan.replace(/\..*$/, '');
  for (const [tur, vp] of [['masaustu', { width: 1440, height: 900, deviceScaleFactor: 1 }], ['mobil', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }]]) {
    const sayfa = await tarayici.newPage();
    try {
      await sayfa.setViewport(vp);
      await sayfa.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      const y = await sayfa.goto(`https://${alan}/`, { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise((r) => setTimeout(r, 1500));
      // Çerez bandı görüntüyü kapatmasın: zorunlu olmayan çerezler reddedilir.
      await sayfa.evaluate(() => {
        const d = [...document.querySelectorAll('button, a')].find((e) => /^(reddet|reject|reject all|reject non-essential|tümünü reddet)$/i.test((e.textContent || '').trim()));
        d?.click();
      });
      await new Promise((r) => setTimeout(r, 900));
      const ham = `${HAM}/${ad}-${tur}.png`;
      await sayfa.screenshot({ path: ham });
      await sharp(ham).jpeg({ quality: 88, mozjpeg: true }).toFile(`${HEDEF}/${ad}-${tur}.jpg`);
      console.log(alan, tur, 'HTTP', y?.status(), await sayfa.title());
    } catch (h) {
      console.log(alan, tur, 'HATA', h.message.slice(0, 120));
    } finally {
      await sayfa.close();
    }
  }
}
await tarayici.close();

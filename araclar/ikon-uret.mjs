// Phosphor ikon setinden yalnız kullanılanları src/data/ikonlar.json dosyasına çıkarır.
// Yeni ikon gerektiğinde adı listeye ekleyip `node araclar/ikon-uret.mjs` çalıştırın.
import { readFileSync, writeFileSync } from 'node:fs';
const adlar = [
  'arrow-right', 'arrow-up-right', 'arrow-left', 'arrow-down', 'caret-down', 'caret-right', 'list', 'x',
  'phone', 'envelope-simple', 'whatsapp-logo', 'check', 'check-circle', 'warning-circle', 'info',
  'magnifying-glass', 'instagram-logo', 'google-logo', 'chat-circle-text', 'cursor-click',
  'clipboard-text', 'note-pencil', 'file-text', 'clock', 'calendar-blank', 'link-simple', 'plus', 'minus',
  'pencil-simple-line', 'map-pin', 'user', 'buildings', 'arrow-counter-clockwise', 'circle-notch',
  'device-mobile', 'desktop', 'funnel', 'eye', 'lock-simple', 'download-simple', 'copy', 'robot', 'globe-simple',
  'megaphone', 'target', 'receipt', 'handshake', 'phone-call', 'sliders-horizontal', 'cookie',
];
const set = JSON.parse(readFileSync(new URL('../node_modules/@iconify-json/ph/icons.json', import.meta.url), 'utf8'));
const cikti = {};
const eksik = [];
for (const ad of adlar) {
  const ikon = set.icons[ad];
  if (!ikon) { eksik.push(ad); continue; }
  cikti[ad] = ikon.body;
}
writeFileSync(new URL('../src/data/ikonlar.json', import.meta.url), JSON.stringify(cikti, null, 0));
console.log('yazıldı:', Object.keys(cikti).length, 'eksik:', eksik.join(', ') || 'yok');

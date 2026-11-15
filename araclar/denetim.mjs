// Site denetimi: bozuk iç bağlantı ve çapa, tek H1, benzersiz başlık ve açıklama, robots durumu,
// görünür metinde uzun tire, yetim rehber. Kullanım: node araclar/denetim.mjs [kök-adres]
const KOK = process.argv[2] || 'http://localhost:4321';
const baslangic = ['/', '/lp/google-ads-hesap-inceleme/', '/lp/meta-reklam-inceleme/', '/gizlilik/', '/aydinlatma/', '/cerez-tercihleri/', '/kullanim-kosullari/', '/tesekkurler/'];
const sayfalar = new Map(); // yol -> { durum, html }
const kuyruk = [...baslangic];
const getir = async (yol) => {
  if (sayfalar.has(yol)) return sayfalar.get(yol);
  const y = await fetch(KOK + yol, { redirect: 'manual' });
  const kayit = { durum: y.status, html: (y.headers.get('content-type') || '').includes('html') ? await y.text() : '' };
  sayfalar.set(yol, kayit);
  return kayit;
};
const sorunlar = [];
const gelenBag = new Map();
while (kuyruk.length) {
  const yol = kuyruk.shift();
  const s = await getir(yol);
  if (s.durum !== 200) { sorunlar.push(`[${s.durum}] ${yol}`); continue; }
  for (const m of s.html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|javascript:)/.test(href)) continue;
    const [yolu, capa] = href.split('#');
    const hedef = yolu ? yolu.split('?')[0] : yol;
    if (!gelenBag.has(hedef)) gelenBag.set(hedef, new Set());
    gelenBag.get(hedef).add(yol);
    if (!sayfalar.has(hedef)) { await getir(hedef); if (sayfalar.get(hedef).durum === 200 && sayfalar.get(hedef).html) kuyruk.push(hedef); }
    const h = sayfalar.get(hedef);
    if (h.durum !== 200) sorunlar.push(`BOZUK BAĞLANTI ${yol} -> ${href} [${h.durum}]`);
    else if (capa && !h.html.includes('id="' + capa + '"')) sorunlar.push(`ÇAPA YOK ${yol} -> ${href}`);
  }
}
const metin = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ');
const basliklar = new Map(), aciklamalar = new Map();
const satirlar = [];
for (const [yol, s] of [...sayfalar].sort()) {
  if (s.durum !== 200 || !s.html) continue;
  const h1 = [...s.html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => metin(m[1]).replace(/\s+/g, ' ').trim());
  const baslik = (s.html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const aciklama = (s.html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const robots = (s.html.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || '';
  const kanonik = (s.html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  if (h1.length !== 1) sorunlar.push(`H1 SAYISI ${h1.length}: ${yol}`);
  if (!aciklama) sorunlar.push(`AÇIKLAMA YOK ${yol}`);
  if (aciklama.length > 170) sorunlar.push(`AÇIKLAMA UZUN (${aciklama.length}) ${yol}`);
  if (!kanonik.endsWith(yol)) sorunlar.push(`KANONİK FARKLI ${yol} -> ${kanonik}`);
  for (const [harita, deger, ad] of [[basliklar, baslik, 'BAŞLIK'], [aciklamalar, aciklama, 'AÇIKLAMA']]) {
    if (harita.has(deger)) sorunlar.push(`${ad} TEKRARI ${yol} = ${harita.get(deger)}`); else harita.set(deger, yol);
  }
  const govde = metin(s.html.replace(/<head[\s\S]*?<\/head>/, ''));
  const tire = govde.match(/.{0,30}[—–].{0,30}/g);
  if (tire) sorunlar.push(`UZUN TİRE ${yol}: ${tire.slice(0, 3).map((t) => t.trim()).join(' | ')}`);
  if (/[—–]/.test(baslik + aciklama)) sorunlar.push(`BAŞLIKTA UZUN TİRE ${yol}`);
  satirlar.push({ yol, robots: robots.replace(',max-image-preview:large', ''), h1: h1[0]?.slice(0, 58), baslik: baslik.slice(0, 62), gelen: gelenBag.get(yol)?.size ?? 0 });
}
for (const s of satirlar) if (s.yol.startsWith('/blog/') && s.yol !== '/blog/' && s.gelen < 2) sorunlar.push(`YETİM REHBER (${s.gelen} bağlantı) ${s.yol}`);
console.table(satirlar);
console.log(sorunlar.length ? `\n${sorunlar.length} SORUN:\n` + [...new Set(sorunlar)].join('\n') : '\nSorun bulunmadı.');

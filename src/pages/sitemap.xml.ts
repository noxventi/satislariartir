/**
 * Site haritası. Yalnız indekslenmesi istenen sayfalar girer.
 * Dışarıda kalanlar: reklam açılış sayfaları (/lp/), teşekkür, yönetim, API, 404,
 * taslak yasal metinler ve uzman incelemesi bekleyen blog yazıları.
 */
import type { APIRoute } from 'astro';
import { HIZMETLER, SITE } from '../site.config';
import { PROJELER } from '../data/projeler';
import { indekslenir, rehberleriGetir, rehberUrl } from '../lib/rehberler';
import { SEKTORLER, sektorUrl } from '../data/sektorler';
import { YEREL_SAYFALAR, yerelUrl } from '../data/yerel';

export const GET: APIRoute = async () => {
  const rehberler = (await rehberleriGetir()).filter(indekslenir);
  const yasalYayinda = Boolean(SITE.veriSorumlusu.unvan);

  const sayfalar: { yol: string; degisim?: string }[] = [
    { yol: '/' },
    { yol: '/hizmetler/' },
    ...HIZMETLER.map((h) => ({ yol: h.url })),
    { yol: '/sektorler/' },
    ...SEKTORLER.map((sk) => ({ yol: sektorUrl(sk) })),
    { yol: '/sehirler/' },
    ...YEREL_SAYFALAR.map((y) => ({ yol: yerelUrl(y) })),
    { yol: '/calismalarimiz/' },
    ...PROJELER.filter((p) => p.dosya).map((p) => ({ yol: p.dosya! })),
    { yol: '/blog/' },
    ...rehberler.map((r) => ({ yol: rehberUrl(r), degisim: r.data.sonKontrol.toISOString().slice(0, 10) })),
    { yol: '/hakkimizda/' },
    { yol: '/iletisim/' },
    ...(yasalYayinda ? [{ yol: '/gizlilik/' }, { yol: '/aydinlatma/' }, { yol: '/cerez-tercihleri/' }, { yol: '/kullanim-kosullari/' }] : []),
  ];

  const govde = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sayfalar
  .map((s) => `  <url><loc>${SITE.url}${s.yol}</loc>${s.degisim ? `<lastmod>${s.degisim}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`;
  return new Response(govde, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};

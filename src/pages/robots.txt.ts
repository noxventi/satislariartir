/**
 * robots.txt. Arama botları ve AdsBot bütün açık sayfalara erişir (LP'ler dahil: noindex ama taranabilir).
 * PUBLIC_SITE_ORTAMI=taslak iken (ön izleme ortamı) site tümüyle aramaya kapatılır.
 */
import type { APIRoute } from 'astro';
import { SITE } from '../site.config';

export const GET: APIRoute = () => {
  const taslak = import.meta.env.PUBLIC_SITE_ORTAMI === 'taslak';
  const govde = taslak
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /yonetim/\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap.xml\n`;
  return new Response(govde, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};

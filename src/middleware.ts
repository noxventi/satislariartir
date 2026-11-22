/**
 * demo.satislariartir.com yönlendirmesi.
 *
 * Demo alt alan adı ana siteyle aynı uygulamaya bağlıdır. Bu alan adından gelen kök istek (/)
 * demo sayfasına yazılır; ana sayfa bu yüzden sunucuda üretilir (src/pages/index.astro > prerender = false).
 * Statik dosyalar (görseller, /_astro/) ara katmandan geçmeden doğrudan sunulur.
 */
import { defineMiddleware } from 'astro:middleware';

const DEMO_ALAN_ADI = 'demo.satislariartir.com';
const DEMO_SAYFASI = '/demo/demiderm/';

export const onRequest = defineMiddleware((context, next) => {
  const sunucu = (context.request.headers.get('x-forwarded-host') || context.url.host).split(',')[0].trim().toLowerCase();
  if (sunucu === DEMO_ALAN_ADI) {
    if (context.url.pathname === '/') return next(DEMO_SAYFASI);
    // Demo alan adında ana sitenin sayfaları dizinlenmez.
    return next().then((yanit) => {
      yanit.headers.set('x-robots-tag', 'noindex, nofollow');
      return yanit;
    });
  }
  return next();
});

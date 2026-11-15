// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';

// Sayfalar statik HTML olarak üretilir. Yalnız form ucu (/api/talep) ve
// erişimi sınırlı talep listesi (/yonetim/) sunucuda çalışır.
export default defineConfig({
  site: 'https://satislariartir.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  // Astro 7 varsayılanı 'jsx': satır içi öğeler arasındaki boşlukları yutar.
  // Türkçe metinde bağlantı ve vurgu aralarındaki boşluk korunmalı.
  compressHTML: true,
  integrations: [mdx()],
  build: { format: 'directory', inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
  server: { port: 4321, host: true },
  // Blog eskiden /rehberler/ adresindeydi (15 Kasım 2026'da taşındı). Eski adresler yeni adrese yönlenir.
  redirects: {
    '/rehberler': '/blog',
    '/rehberler/[slug]': '/blog/[slug]',
  },
  devToolbar: { enabled: false },
  // Form gönderimleri yalnız aynı kaynaktan kabul edilir (CSRF koruması).
  // Site bir vekil sunucunun arkasında çalışırken gerçek alan adının tanınması için izinli alan adları tanımlıdır.
  // Alan adı değişirse ya da bir ön izleme adresi eklenirse bu liste güncellenmelidir.
  security: {
    checkOrigin: true,
    allowedDomains: [
      { hostname: 'satislariartir.com', protocol: 'https' },
      { hostname: 'www.satislariartir.com', protocol: 'https' },
    ],
  },
  vite: {
    build: { cssMinify: true },
  },
});

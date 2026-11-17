/**
 * /llms.txt: büyük dil modelleri ve yapay zekâ arama araçları için sitenin Markdown özeti (llmstxt.org biçimi).
 *
 * Google bu dosyayı kullanmaz; ChatGPT, Perplexity ve benzeri araçların bir kısmı siteyi özetlerken okuyabilir. Dosya
 * site verilerinden üretilir: yeni hizmet, sektör, şehir sayfası ya da yayındaki yazı eklendikçe kendiliğinden güncellenir.
 * İçerikte yalnız sitede zaten yazan olgular yer alır; fiyat, garanti ya da yeni bir iddia eklenmez.
 */
import type { APIRoute } from 'astro';
import { HIZMETLER, SITE } from '../site.config';
import { SEKTORLER, sektorUrl } from '../data/sektorler';
import { YEREL_SAYFALAR, yerelUrl } from '../data/yerel';
import { indekslenir, rehberleriGetir, rehberUrl } from '../lib/rehberler';

const tamUrl = (yol: string) => `${SITE.url}${yol}`;
const tekSatir = (metin: string) => metin.replace(/\s+/g, ' ').trim();

export const GET: APIRoute = async () => {
  const yazilar = (await rehberleriGetir()).filter(indekslenir);
  const { telefon, eposta } = SITE.iletisim;

  const satirlar: string[] = [
    `# ${SITE.ad}`,
    '',
    '> Satışları Artır, Google Ads ve Instagram reklam yönetimini, SEO’yu, yapay zekâ görünürlüğünü (GEO) ve web tasarımını ayrıntılı bir incelemeyle kurup düzenli optimizasyonla geliştirerek işletmelerin satışlarını artırmak için çalışan bir dijital pazarlama ajansıdır.',
    '',
    'Temel bilgiler:',
    '',
    '- Hizmet bölgesi: Türkiye geneli. Çalışma uzaktan yürür; görüşmeler telefonla ya da görüntülü yapılır. Şehir sayfaları o şehirde ofis olduğu anlamına gelmez.',
    '- Çalışma biçimi: önce hesap, site ve müşterinin aramaları ayrıntılı incelenir; kurulum bulgulara göre yapılır ve düzenli optimizasyonla geliştirilir.',
    '- Hesaplar: reklam hesabı, ölçüm hesapları ve site işletmenin adına açılır ve işletmede kalır.',
    '- Verilmeyen sözler: Google’da sıralama, belli bir satış ya da belli bir tarih garantisi verilmez.',
    '- Yapılmayan işler: tabela, matbaa, afiş ve açık hava reklamı; sosyal medya hesap yönetimi ve içerik üretimi; e-ticaret altyapısı kurulumu.',
    ...(telefon ? [`- Telefon ve WhatsApp: ${telefon}`] : []),
    ...(eposta ? [`- E-posta: ${eposta}`] : []),
    ...(SITE.sosyal.instagram ? [`- Instagram: ${SITE.sosyal.instagram}`] : []),
    `- İletişim sayfası: ${tamUrl('/iletisim/')}`,
    '',
    '## Hizmetler',
    '',
    ...HIZMETLER.map((h) => `- [${h.ad}](${tamUrl(h.url)}): ${tekSatir(h.ozet)}`),
    '',
    '## Sektörler',
    '',
    ...SEKTORLER.map((s) => `- [${s.baslik}](${tamUrl(sektorUrl(s))}): ${tekSatir(s.ozet)}`),
    '',
    '## Rehberler',
    '',
    ...yazilar.map((r) => `- [${r.data.soru}](${tamUrl(rehberUrl(r))}): ${tekSatir(r.data.aciklama)}`),
    '',
    '## Şehir ve ilçe sayfaları',
    '',
    ...YEREL_SAYFALAR.map((y) => `- [${y.baslik}](${tamUrl(yerelUrl(y))}): ${tekSatir(y.ozet)}`),
    '',
    '## Optional',
    '',
    `- [Hakkımızda](${tamUrl('/hakkimizda/')}): çalışma ilkeleri, verilen ve verilmeyen sözler, kısaca bilgi kartı.`,
    `- [Çalışmalarımız](${tamUrl('/calismalarimiz/')}): birlikte çalışılan markalar ve yayındaki siteler.`,
    `- [Dijital pazarlama sözlüğü](${tamUrl('/sozluk/')}): reklam, ölçüm, SEO, GEO ve web terimlerinin kısa tanımları.`,
    `- [Site haritası](${tamUrl('/sitemap.xml')})`,
    '',
  ];

  return new Response(satirlar.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};

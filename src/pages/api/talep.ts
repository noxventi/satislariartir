/**
 * POST /api/talep/
 * Görüşme talebini doğrular ve kalıcı olarak kaydeder.
 *
 * - Betikle gelen istek (Accept: application/json) JSON yanıt alır.
 * - Betiksiz form gönderimi başarıda /tesekkurler/ sayfasına yönlenir, hatada sade bir hata sayfası görür.
 * - Başarı çerezi (sa_onay) yalnız teşekkür sayfasında bir kez okunur: sayfayı doğrudan açmak,
 *   yenilemek ya da geri dönmek yeni talep ya da yeni dönüşüm üretmez.
 */
import type { APIRoute } from 'astro';
import { dogrula, temizle, type Hatalar } from '../../lib/dogrulama';
import { bildirimleriIsle, talepKaydet, type Tur } from '../../lib/talepler';

export const prerender = false;

/* Basit istek sınırı: aynı adresten 10 dakikada en çok 8 gönderim. */
const PENCERE_MS = 10 * 60_000;
const SINIR = 8;
const istekler = new Map<string, number[]>();
// IP adresi yalnız bu bellek tablosunda ve en çok PENCERE_MS kadar tutulur; talep kaydına yazılmaz (gizlilik sayfası).
let sonTemizlik = 0;
function sinirAsildi(adres: string) {
  const simdi = Date.now();
  // Süresi dolan adresler dakikada bir silinir.
  if (simdi - sonTemizlik > 60_000) {
    sonTemizlik = simdi;
    for (const [a, zamanlar] of istekler) if (!zamanlar.some((z) => simdi - z < PENCERE_MS)) istekler.delete(a);
  }
  const liste = (istekler.get(adres) || []).filter((z) => simdi - z < PENCERE_MS);
  liste.push(simdi);
  istekler.set(adres, liste);
  if (istekler.size > 5000) istekler.clear();
  return liste.length > SINIR;
}

const json = (govde: unknown, durum = 200) =>
  new Response(JSON.stringify(govde), {
    status: durum,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const kacis = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Betiksiz gönderimde hata sayfası. Alanlar tarayıcının geri düğmesiyle korunur. */
function hataSayfasi(baslik: string, satirlar: string[], durum: number) {
  const html = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>${kacis(baslik)} | Satışları Artır</title>
<style>body{margin:0;font:18px/1.55 system-ui,sans-serif;background:#f8f7f3;color:#101c39}main{max-width:34rem;margin:0 auto;padding:4rem 1.25rem}
h1{font-size:2rem;line-height:1.1;margin:0 0 1rem}li{margin:.4rem 0}a{display:inline-block;margin-top:1.5rem;padding:.9rem 1.4rem;background:#b92338;color:#fff;border-radius:4px;text-decoration:none;font-weight:600}</style></head>
<body><main><h1>${kacis(baslik)}</h1><ul>${satirlar.map((s) => `<li>${kacis(s)}</li>`).join('')}</ul>
<a href="javascript:history.back()">Forma dönün</a></main></body></html>`;
  return new Response(html, { status: durum, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

export const POST: APIRoute = async ({ request, clientAddress, cookies, redirect }) => {
  const jsonIstegi = (request.headers.get('accept') || '').includes('application/json');

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonIstegi ? json({ ok: false, kod: 'bicim' }, 400) : hataSayfasi('Talebiniz okunamadı', ['Formu yeniden gönderin.'], 400);
  }
  const ham = Object.fromEntries(form) as Record<string, unknown>;

  let adres = 'bilinmiyor';
  try {
    adres = clientAddress;
  } catch {
    /* bazı ortamlarda istemci adresi yok */
  }
  if (sinirAsildi(adres)) {
    return jsonIstegi
      ? json({ ok: false, kod: 'siklik' }, 429)
      : hataSayfasi('Kısa sürede çok sayıda deneme yapıldı', ['Birkaç dakika sonra yeniden deneyin.'], 429);
  }

  // Gizli alan doluysa bu bir otomatik doldurucudur: kayıt açılmaz, yanıt başarı gibi görünür.
  if (String(ham.firma_web || '').trim()) {
    return jsonIstegi ? json({ ok: true, kimlik: null }) : redirect('/tesekkurler/', 303);
  }

  const girdi = temizle(ham);
  const hatalar: Hatalar = dogrula(girdi);
  if (Object.keys(hatalar).length) {
    return jsonIstegi
      ? json({ ok: false, kod: 'dogrulama', hatalar }, 422)
      : hataSayfasi(
          'Talebiniz gönderilemedi',
          Object.values(hatalar).map((h) => h!.mesaj),
          422,
        );
  }

  // Tür: ekip denemeleri ve şüpheli hızda doldurulan formlar asıl rapora girmez.
  const acilis = Number(ham.acilis);
  const cokHizli = Number.isFinite(acilis) && acilis > 0 && Date.now() - acilis < 2500;
  const tur: Tur = /^\s*\[?test\]?\b/i.test(girdi.mesaj) || /^\s*\[?test\]?\b/i.test(girdi.isletme) ? 'test' : cokHizli ? 'supheli' : 'gercek';

  let sonuc;
  try {
    sonuc = talepKaydet(girdi, {
      istemciAnahtari: String(ham.talep_kimligi || ''),
      sayfa: String(ham.sayfa || ''),
      kaynak: String(ham.kaynak || '{}'),
      tur,
    });
  } catch (hata) {
    console.error('[talep] kayıt hatası', hata instanceof Error ? hata.message : hata);
    return jsonIstegi
      ? json({ ok: false, kod: 'kayit' }, 500)
      : hataSayfasi('Talebiniz kaydedilemedi', ['Bir sorun oluştu. Formu yeniden gönderin.'], 500);
  }

  cookies.set('sa_onay', sonuc.kimlik, {
    path: '/tesekkurler/',
    httpOnly: true,
    sameSite: 'lax',
    secure: new URL(request.url).protocol === 'https:',
    maxAge: 600,
  });

  // Bildirim kaydı bekletmez; başarısız olursa kuyrukta kalır ve yeniden denenir.
  if (sonuc.yeni) void bildirimleriIsle().catch(() => {});

  return jsonIstegi ? json({ ok: true, kimlik: sonuc.kimlik, yeni: sonuc.yeni }) : redirect('/tesekkurler/', 303);
};

export const GET: APIRoute = () => new Response(null, { status: 405, headers: { allow: 'POST' } });

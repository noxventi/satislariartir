/**
 * Yeni görüşme talebini SMTP ile ekibin e-posta kutusuna iletir.
 *
 * Gerekli ortam değişkenleri: SMTP_KULLANICI (tam posta adresi) ve SMTP_SIFRESI.
 * İsteğe bağlı: BILDIRIM_EPOSTA (alıcı, boşsa SMTP_KULLANICI), SMTP_SUNUCU, SMTP_PORT.
 *
 * Gönderen adres doğrulanan posta kutusudur; alan adının SPF ve DKIM kayıtları bu sayede geçerli kalır.
 * Ziyaretçinin e-postası yalnız Yanıtla adresi olur. Günlüğe kişisel veri yazılmaz.
 */
import { KANALLAR, SITE } from '../site.config';
import type { Talep } from './talepler';

function ayarlar() {
  const kullanici = (process.env.SMTP_KULLANICI || '').trim();
  const sifre = process.env.SMTP_SIFRESI || '';
  if (!kullanici || !sifre) return null;
  return {
    sunucu: (process.env.SMTP_SUNUCU || '').trim() || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    kullanici,
    sifre,
    alici: (process.env.BILDIRIM_EPOSTA || '').trim() || kullanici,
  };
}

export const epostaTanimli = () => ayarlar() !== null;

export type GonderimSonucu = { tamam: true } | { tamam: false; kod: string; altyapi: boolean };

/** Bu hatalar tek bir talebe değil bağlantıya ya da hesaba aittir; sıradaki kayıtlar aynı turda denenmez. */
const ALTYAPI_HATALARI = new Set(['EAUTH', 'ECONNECTION', 'ETIMEDOUT', 'ESOCKET', 'EDNS', 'ETLS', 'EMODUL', 'EAYAR']);

const kacis = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const tekSatir = (s: string) => s.replace(/\s+/g, ' ').trim();

const TUR_ETIKETI: Record<Talep['tur'], string> = { gercek: '', test: '[Test] ', supheli: '[Şüpheli] ' };
const KAMPANYA_ETIKETI: Record<string, string> = { new: 'İlk kampanya', existing: 'Mevcut hesap' };

function iletiOlustur(t: Talep) {
  const iletisim = t.yontem === 'telefon' ? `+${t.telefon}` : t.eposta;
  const tarih = new Intl.DateTimeFormat('tr-TR', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Istanbul' }).format(
    new Date(t.olusturma),
  );
  const panel = `${SITE.url}/yonetim/talepler/`;
  const satirlar: [string, string][] = [
    ['Ad', t.ad],
    ['İşletme', t.isletme],
    [t.yontem === 'telefon' ? 'Telefon' : 'E-posta', iletisim],
    ['İlgilendiği konu', KANALLAR.find((k) => k.deger === t.kanal)?.etiket ?? t.kanal],
    ['Kampanya durumu', KAMPANYA_ETIKETI[t.kampanya_durumu] ?? ''],
    ['Web adresi', t.adres],
    ['Mesaj', t.mesaj],
    ['Form sayfası', t.sayfa],
    ['Tarih', tarih],
    ['Kayıt no', t.kimlik],
  ];
  const dolu = satirlar.filter(([, deger]) => deger);

  const baglanti =
    t.yontem === 'telefon'
      ? `<a href="tel:+${kacis(t.telefon)}" style="color:#b92338">Ara</a> &nbsp;·&nbsp; <a href="https://wa.me/${kacis(t.telefon)}" style="color:#b92338">WhatsApp'tan yaz</a>`
      : `<a href="mailto:${kacis(t.eposta)}" style="color:#b92338">E-postayla yanıtla</a>`;

  const html = `<!doctype html><html lang="tr"><body style="margin:0;padding:24px;background:#f8f7f3;color:#101c39;font:16px/1.5 Arial,sans-serif">
<div style="max-width:560px;margin:0 auto;padding:24px;background:#ffffff;border:1px solid #e4e2da">
<h1 style="margin:0 0 4px;font-size:22px;line-height:1.25">${kacis(TUR_ETIKETI[t.tur])}Yeni görüşme talebi</h1>
<p style="margin:0 0 20px">${baglanti}</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
${dolu
  .map(
    ([etiket, deger]) =>
      `<tr><td style="padding:8px 12px 8px 0;border-top:1px solid #e4e2da;color:#5b6478;vertical-align:top;white-space:nowrap">${kacis(etiket)}</td><td style="padding:8px 0;border-top:1px solid #e4e2da;white-space:pre-wrap;word-break:break-word">${kacis(deger)}</td></tr>`,
  )
  .join('\n')}
</table>
<p style="margin:20px 0 0;font-size:14px"><a href="${panel}" style="color:#101c39">Talep listesini açın</a></p>
</div></body></html>`;

  return {
    konu: `${TUR_ETIKETI[t.tur]}Yeni talep: ${tekSatir(t.isletme)} (${tekSatir(t.ad)})`.slice(0, 180),
    metin: `Yeni görüşme talebi\n\n${dolu.map(([etiket, deger]) => `${etiket}: ${deger}`).join('\n')}\n\nTalep listesi: ${panel}\n`,
    html,
  };
}

/** Hata fırlatmaz: sonucu kuyruğa bildirir. Hata kodu kayda ve günlüğe yazılır, ileti içeriği yazılmaz. */
export async function talepEpostasiGonder(t: Talep): Promise<GonderimSonucu> {
  const ayar = ayarlar();
  if (!ayar) return { tamam: false, kod: 'EAYAR', altyapi: true };

  // Paket ancak gönderim anında yüklenir: bir yükleme sorunu formun kaydını asla engellemez.
  let nodemailer;
  try {
    nodemailer = (await import('nodemailer')).default;
  } catch (hata) {
    console.error('[talep] e-posta paketi yüklenemedi', hata instanceof Error ? hata.message : hata);
    return { tamam: false, kod: 'EMODUL', altyapi: true };
  }

  const ulastirici = nodemailer.createTransport({
    host: ayar.sunucu,
    port: ayar.port,
    secure: ayar.port === 465,
    requireTLS: ayar.port === 587,
    auth: { user: ayar.kullanici, pass: ayar.sifre },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  try {
    const ileti = iletiOlustur(t);
    const bilgi = await ulastirici.sendMail({
      from: { name: `${SITE.ad} Web Formu`, address: ayar.kullanici },
      to: ayar.alici,
      replyTo: t.eposta || undefined,
      subject: ileti.konu,
      text: ileti.metin,
      html: ileti.html,
      // Yeniden denemede aynı kimlik kullanılır; alıcı sunucu aynı iletiyi tanıyabilir.
      messageId: `<${t.kimlik}@${new URL(SITE.url).hostname}>`,
    });
    if (!bilgi.accepted?.length) {
      console.error('[talep] e-posta alıcı tarafından kabul edilmedi', t.kimlik);
      return { tamam: false, kod: 'EREDDEDILDI', altyapi: false };
    }
    return { tamam: true };
  } catch (hata) {
    const h = hata as { code?: string; responseCode?: number };
    const kod = [h.code || 'EBILINMIYOR', h.responseCode].filter(Boolean).join(' ').slice(0, 40);
    console.error('[talep] e-posta gönderilemedi', t.kimlik, kod);
    return { tamam: false, kod, altyapi: ALTYAPI_HATALARI.has(h.code || '') };
  } finally {
    ulastirici.close();
  }
}

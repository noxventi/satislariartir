/**
 * Görüşme formu davranışı.
 * - Alan hatası alanın altında Türkçe anlatılır, odak ilk hataya gider.
 * - Gönderim sırasında düğme durum belirtir, ikinci tıklama yeni istek açmaz.
 * - Aynı form aynı anahtarla yeniden gönderilir: zaman aşımı ya da çift tıklama talebi çoğaltmaz.
 * - Kayıt başarısızsa alanlar korunur ve yeniden deneme sunulur.
 * - Olaylara alan değeri yazılmaz; yalnız alan adı ve hata türü.
 */
import { ALAN_SIRASI, dogrula, temizle, KANAL_DEGERLERI, type AlanAdi, type Hatalar } from '../lib/dogrulama';
import { kaynagiOku, olay } from './olcum';

let baslatildi = false;

export function talepFormlariniBaslat() {
  if (baslatildi) return;
  baslatildi = true;
  document.querySelectorAll<HTMLFormElement>('form[data-talep-formu]').forEach(kur);

  // "İlk kampanyamı planlamak istiyorum" gibi bağlantılar formun bağlamını ayarlar.
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLElement>('[data-kampanya-durumu], [data-kanal-sec]');
    if (!a) return;
    document.querySelectorAll<HTMLFormElement>('form[data-talep-formu]').forEach((f) => {
      if (a.dataset.kampanyaDurumu) (f.elements.namedItem('kampanya_durumu') as HTMLInputElement).value = a.dataset.kampanyaDurumu;
      if (a.dataset.kanalSec) (f.elements.namedItem('kanal') as HTMLSelectElement).value = a.dataset.kanalSec;
    });
  });
}

const kimlikUret = () =>
  typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;

function kur(form: HTMLFormElement) {
  const al = <T extends HTMLElement = HTMLInputElement>(ad: string) => form.elements.namedItem(ad) as unknown as T;
  const dugme = form.querySelector<HTMLButtonElement>('[data-gonder]')!;
  const dugmeMetni = form.querySelector<HTMLElement>('[data-gonder-metni]')!;
  const asilEtiket = dugmeMetni.textContent || '';
  const durum = form.querySelector<HTMLElement>('[data-form-durumu]')!;
  const durumMetni = form.querySelector<HTMLElement>('[data-form-durumu-metni]')!;
  const yeniden = form.querySelector<HTMLElement>('[data-yeniden]')!;
  const konum = form.dataset.konum || '';
  const baglam = () => ({
    form_location: konum,
    channel: al<HTMLSelectElement>('kanal').value,
    campaign_status: al('kampanya_durumu').value,
    page_type: document.body.dataset.sayfaTuru,
  });

  al('talep_kimligi').value = kimlikUret();
  al('acilis').value = String(Date.now());

  // Adres çubuğundan gelen bağlam: /iletisim/?kanal=meta&durum=ilk-kampanya
  const p = new URLSearchParams(location.search);
  const kanal = p.get('kanal');
  if (kanal && (KANAL_DEGERLERI as readonly string[]).includes(kanal)) al<HTMLSelectElement>('kanal').value = kanal;
  if (p.get('durum') === 'ilk-kampanya') al('kampanya_durumu').value = 'new';
  if (p.get('durum') === 'mevcut-hesap') al('kampanya_durumu').value = 'existing';

  let basladi = false;
  form.addEventListener('input', (e) => {
    if (!basladi) {
      basladi = true;
      olay('form_start', baglam());
    }
    const hedef = e.target as HTMLInputElement;
    if (hedef.getAttribute('aria-invalid') === 'true') hatayiTemizle(hedef.name as AlanAdi);
  });

  const hataAlani = (ad: AlanAdi) => form.querySelector<HTMLElement>(`[data-hata="${ad}"]`);

  function hatayiTemizle(ad: AlanAdi) {
    al(ad)?.removeAttribute('aria-invalid');
    const h = hataAlani(ad);
    if (h) {
      h.hidden = true;
      h.textContent = '';
    }
  }

  function hatalariGoster(hatalar: Hatalar, olayYaz: boolean) {
    let ilk: HTMLElement | null = null;
    for (const ad of ALAN_SIRASI) {
      const hata = hatalar[ad];
      if (!hata) {
        hatayiTemizle(ad);
        continue;
      }
      const girdi = al(ad);
      const h = hataAlani(ad);
      girdi.setAttribute('aria-invalid', 'true');
      if (h) {
        h.textContent = hata.mesaj;
        h.hidden = false;
      }
      ilk ??= girdi;
      if (olayYaz) olay('form_error', { ...baglam(), field: ad, error_type: hata.tur });
    }
    ilk?.focus();
    return Boolean(ilk);
  }

  function durumGoster(mesaj: string | null, tekrar = false) {
    durum.hidden = !mesaj;
    durumMetni.textContent = mesaj || '';
    yeniden.hidden = !tekrar;
    if (mesaj) durum.focus();
  }

  function mesgul(evet: boolean) {
    dugme.setAttribute('aria-busy', String(evet));
    dugme.disabled = evet;
    dugmeMetni.textContent = evet ? 'Gönderiliyor' : asilEtiket;
  }

  let gonderiliyor = false;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (gonderiliyor) return;

    const girdi = temizle(Object.fromEntries(new FormData(form)) as Record<string, unknown>);
    durumGoster(null);
    if (hatalariGoster(dogrula(girdi), true)) return;

    gonderiliyor = true;
    mesgul(true);
    al('kaynak').value = JSON.stringify(kaynagiOku());

    const iptal = new AbortController();
    const sure = setTimeout(() => iptal.abort(), 15000);
    let yonleniyor = false;
    try {
      const yanit = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
        signal: iptal.signal,
      });
      const veri = await yanit.json().catch(() => null);
      if (yanit.ok && veri?.ok) {
        yonleniyor = true;
        location.assign('/tesekkurler/');
        return;
      }
      if (yanit.status === 422 && veri?.hatalar) {
        hatalariGoster(veri.hatalar as Hatalar, true);
      } else if (yanit.status === 429) {
        durumGoster('Kısa sürede çok sayıda deneme yapıldı. Birkaç dakika sonra yeniden deneyin. Yazdıklarınız duruyor.', true);
        olay('form_error', { ...baglam(), field: 'form', error_type: 'siklik' });
      } else {
        durumGoster('Talebiniz kaydedilemedi. Yazdıklarınız duruyor, yeniden deneyebilirsiniz.', true);
        olay('form_error', { ...baglam(), field: 'form', error_type: 'sunucu' });
      }
    } catch {
      durumGoster('Bağlantı kurulamadı. Yazdıklarınız duruyor. İnternet bağlantınızı kontrol edip yeniden deneyin.', true);
      olay('form_error', { ...baglam(), field: 'form', error_type: 'ag' });
    } finally {
      clearTimeout(sure);
      if (!yonleniyor) {
        gonderiliyor = false;
        mesgul(false);
      }
    }
  });

  // Geri düğmesiyle dönüldüğünde düğme takılı kalmasın.
  addEventListener('pageshow', (e) => {
    if (e.persisted) {
      gonderiliyor = false;
      mesgul(false);
    }
  });
}

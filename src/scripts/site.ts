/**
 * Site betiği. Her şey ilerletici geliştirmedir: betik çalışmasa da
 * menü bağlantıları, çağrılar ve formlar temel işlevini sürdürür.
 */
import { etiketTanimli, kaynagiKaydet, olay, tercihOku, tercihUygula, tercihYaz, type OlayAdi } from './olcum';

const hareketAz = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Kırmızı kalem işareti: yolu gerçek kutu ölçüsüne ölçekle ---------------- */
function isaretOlcekle(el: HTMLElement) {
  const svg = el.querySelector<SVGSVGElement>('.isaret__cizim');
  const yol = svg?.querySelector<SVGPathElement>('path');
  if (!svg || !yol?.dataset.yol) return;
  const { width: w, height: h } = svg.getBoundingClientRect();
  if (w < 2 || h < 2) return;
  const d = yol.dataset.yol.replace(
    /(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g,
    (_m, x: string, y: string) => `${((+x * w) / 100).toFixed(1)} ${((+y * h) / 100).toFixed(1)}`,
  );
  svg.setAttribute('viewBox', `0 0 ${w.toFixed(1)} ${h.toFixed(1)}`);
  svg.removeAttribute('preserveAspectRatio');
  yol.removeAttribute('vector-effect');
  yol.setAttribute('d', d);
}

function isaretler() {
  const hepsi = [...document.querySelectorAll<HTMLElement>('.isaret')];
  if (!hepsi.length) return;
  const ro = new ResizeObserver((girdiler) => girdiler.forEach((g) => isaretOlcekle(g.target as HTMLElement)));
  hepsi.forEach((el) => {
    isaretOlcekle(el);
    ro.observe(el);
  });
}

/* ---- Görünüme girince ------------------------------------------------------- */
function gorunum() {
  const hedefler = [...document.querySelectorAll<HTMLElement>('[data-gir], .isaret[data-ciz]')];
  if (!hedefler.length) return;
  const isle = (el: HTMLElement) => el.classList.add(el.matches('.isaret') ? 'cizildi' : 'girdi-goruldu');
  if (hareketAz || !('IntersectionObserver' in window)) return hedefler.forEach(isle);
  const io = new IntersectionObserver(
    (girdiler) =>
      girdiler.forEach((g) => {
        if (!g.isIntersecting) return;
        isle(g.target as HTMLElement);
        io.unobserve(g.target);
      }),
    { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
  );
  hedefler.forEach((el) => io.observe(el));
}

/* ---- Üst bilgi ---------------------------------------------------------------- */
function ustBilgi() {
  const ust = document.querySelector<HTMLElement>('[data-ust]');
  if (!ust) return;

  const nobet = document.createElement('div');
  nobet.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:12px;pointer-events:none';
  document.body.prepend(nobet);
  new IntersectionObserver(([g]) => ust.toggleAttribute('data-kaydi', !g.isIntersecting)).observe(nobet);

  // Paneller (Hizmetler, Sektörler). Fareyle üzerine gelince kısa bir gecikmeyle açılır: imleç bir panelden
  // diğerinin başlığının üstünden geçerken panel değişmesin. Düğme klavye ve dokunma içindir.
  const ogeler = [...ust.querySelectorAll<HTMLElement>('[data-alt-menu]')];
  if (ogeler.length) {
    let acik: HTMLElement | null = null;
    let sayac = 0;
    const ayarla = (li: HTMLElement | null) => {
      ogeler.forEach((o) => {
        const buMu = o === li;
        o.toggleAttribute('data-acik', buMu);
        o.querySelector('button')?.setAttribute('aria-expanded', String(buMu));
      });
      acik = li;
      ust.toggleAttribute('data-menu-acik', Boolean(li));
    };
    const planla = (li: HTMLElement | null, ms: number) => {
      clearTimeout(sayac);
      sayac = window.setTimeout(() => ayarla(li), ms);
    };
    ogeler.forEach((li) => {
      const dugme = li.querySelector<HTMLButtonElement>('button');
      li.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') planla(li, acik && acik !== li ? 120 : 70);
      });
      li.addEventListener('pointerleave', (e) => {
        if (e.pointerType === 'mouse') planla(null, 200);
      });
      dugme?.addEventListener('click', () => {
        clearTimeout(sayac);
        ayarla(acik === li ? null : li);
      });
      li.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || acik !== li) return;
        clearTimeout(sayac);
        ayarla(null);
        dugme?.focus();
      });
      li.addEventListener('focusout', (e) => {
        if (acik === li && !li.contains(e.relatedTarget as Node)) planla(null, 0);
      });
      // Panelden bir sayfaya gidilirken panel kapanır (geri gelindiğinde açık kalmasın).
      li.querySelectorAll('.panel a').forEach((a) => a.addEventListener('click', () => ayarla(null)));
    });
    document.addEventListener('click', (e) => {
      if (acik && !acik.contains(e.target as Node)) ayarla(null);
    });
    addEventListener('pageshow', (e) => {
      if (e.persisted) ayarla(null);
    });

    // Panel görselleri ilk açılışa kadar indirilmez; fare ya da odak menüye ilk yaklaştığında önden indirilir.
    const menu = ust.querySelector<HTMLElement>('.ust__menu');
    const isit = () => ust.querySelectorAll<HTMLImageElement>('.panel img[loading="lazy"]').forEach((g) => (g.loading = 'eager'));
    menu?.addEventListener('pointerenter', isit, { once: true });
    menu?.addEventListener('focusin', isit, { once: true });
  }

  // Okuma çizgisi: sayfanın okunan kısmı kadar uzar. Kısa sayfalarda görünmez.
  const cizgi = ust.querySelector<HTMLElement>('.ust__ilerleme');
  if (cizgi) {
    let bekliyor = false;
    const guncelle = () => {
      bekliyor = false;
      const enFazla = document.documentElement.scrollHeight - innerHeight;
      const oran = enFazla > innerHeight * 0.8 ? Math.min(1, Math.max(0, scrollY / enFazla)) : 0;
      cizgi.style.setProperty('--okunan', oran.toFixed(4));
    };
    const iste = () => {
      if (bekliyor) return;
      bekliyor = true;
      requestAnimationFrame(guncelle);
    };
    addEventListener('scroll', iste, { passive: true });
    addEventListener('resize', iste);
    guncelle();
  }

  // Mobil menü
  const menu = document.querySelector<HTMLDialogElement>('#mobil-menu');
  const ac = document.querySelector<HTMLAnchorElement>('[data-menu-ac]');
  if (menu && ac && typeof menu.showModal === 'function') {
    ac.setAttribute('role', 'button');
    ac.addEventListener('click', (e) => {
      e.preventDefault();
      menu.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
    menu.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
    });
    menu.querySelector('[data-menu-kapat]')?.addEventListener('click', () => menu.close());
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.close()));
  }
}

/* ---- Mobil görüşme çubuğu ------------------------------------------------------
   Ekranda aynı anda tek baskın düğme olur: sayfadaki ana çağrı, bir form ya da
   alt bilgi görünürken çubuk çekilir. */
function mobilCagri() {
  // Telefonda alt çubuk, geniş ekranda sağ alttaki WhatsApp düğmesi: ikisi de aynı anda görünür ve gizlenir.
  const cubuklar = [...document.querySelectorAll<HTMLElement>('[data-mobil-cagri], [data-yuzen-cagri]')];
  if (!cubuklar.length || !('IntersectionObserver' in window)) return;
  const engeller = new Set<Element>();
  const guncelle = () => {
    const goster = engeller.size === 0 && !document.body.hasAttribute('data-cerez-acik');
    cubuklar.forEach((cubuk) => {
      cubuk.toggleAttribute('data-goster', goster);
      cubuk.inert = !goster;
    });
  };
  const basEngeli = document.createElement('div');
  basEngeli.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:70vh;pointer-events:none';
  document.body.prepend(basEngeli);
  const hedefler = [
    basEngeli,
    ...document.querySelectorAll('main [data-ana-cagri], main form, footer, [data-cagri-engeli]'),
  ];
  const io = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => (g.isIntersecting ? engeller.add(g.target) : engeller.delete(g.target)));
    guncelle();
  });
  hedefler.forEach((h) => io.observe(h));
  document.addEventListener('sa:cerez-bandi', guncelle);
}

/* ---- Alt bilgi: bağlantı grupları telefonda açılır kapanır ------------------------
   Gruplar <details open> olarak gelir. Telefonda kapalı başlar; geniş ekranda hep açıktır ve başlık düğme değildir. */
function altBilgi() {
  const gruplar = [...document.querySelectorAll<HTMLDetailsElement>('[data-alt-grup]')];
  if (!gruplar.length) return;
  const dar = window.matchMedia('(max-width: 47.99rem)');
  const ayarla = () => {
    gruplar.forEach((g) => {
      g.open = !dar.matches;
      const baslik = g.querySelector('summary');
      if (baslik) baslik.tabIndex = dar.matches ? 0 : -1;
    });
  };
  ayarla();
  dar.addEventListener('change', ayarla);
  gruplar.forEach((g) => {
    g.querySelector('summary')?.addEventListener('click', (e) => {
      if (!dar.matches) e.preventDefault();
    });
  });
}

/* ---- Çerez bandı ---------------------------------------------------------------- */
function cerezBandi() {
  const bant = document.querySelector<HTMLElement>('[data-cerez-bandi]');
  if (!bant) return;
  const zorla = bant.hasAttribute('data-her-zaman');
  if (tercihOku() || !(etiketTanimli() || zorla)) return;
  const kapat = () => {
    bant.hidden = true;
    document.body.removeAttribute('data-cerez-acik');
    document.dispatchEvent(new Event('sa:cerez-bandi'));
  };
  bant.hidden = false;
  document.body.setAttribute('data-cerez-acik', '');
  document.dispatchEvent(new Event('sa:cerez-bandi'));
  bant.querySelector('[data-cerez-kabul]')?.addEventListener('click', () => {
    tercihYaz({ olcum: true, pazarlama: true });
    kaynagiKaydet();
    kapat();
  });
  bant.querySelector('[data-cerez-ret]')?.addEventListener('click', () => {
    tercihYaz({ olcum: false, pazarlama: false });
    kapat();
  });
}

/* ---- Olaylar ----------------------------------------------------------------------- */
function olaylar() {
  const govde = document.body.dataset;
  const baglam = { page_type: govde.sayfaTuru, service: govde.hizmet, case: govde.proje };

  if (govde.sayfaTuru === 'hizmet' || govde.sayfaTuru === 'lp') olay('service_view', baglam);
  if (govde.sayfaTuru === 'proje') olay('case_view', baglam);

  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLElement>('a, button');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    let ad = a.dataset.olay as OlayAdi | undefined;
    if (!ad && href.startsWith('tel:')) ad = 'phone_click';
    if (!ad && /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) ad = 'whatsapp_click';
    if (!ad) return;
    olay(ad, { ...baglam, placement: a.dataset.yer, channel: a.dataset.kanal });
  });
}

/* ---- Logo ------------------------------------------------------------------------- */
/** Üzerine gelince, odaklanınca ya da dokununca logo bir kez "tıklar". Sınıf, en uzun hareket bitince kalkar;
 *  böylece imleç erken ayrılsa da hareket yarıda kesilmez. */
function logo() {
  if (hareketAz) return;
  // Açılış bittikten sonra işareti kaldır: açılış kuralları tık kurallarının önüne geçmesin.
  setTimeout(() => document.documentElement.removeAttribute('data-logo'), 1700);
  document.querySelectorAll<HTMLElement>('[data-logo]').forEach((l) => {
    const tik = () => l.classList.add('logo--tik');
    l.addEventListener('pointerenter', tik);
    l.addEventListener('pointerdown', tik);
    l.addEventListener('focus', tik);
    l.addEventListener('animationend', (e) => {
      if (e.animationName === 'logo-salla') l.classList.remove('logo--tik');
    });
  });
}

/* ---- Başlat ----------------------------------------------------------------------- */
logo();
tercihUygula(tercihOku());
kaynagiKaydet();
isaretler();
gorunum();
ustBilgi();
altBilgi();
mobilCagri();
cerezBandi();
olaylar();

// Yazı tipi yüklendikten sonra işaret ölçülerini tazele.
document.fonts?.ready.then(() => document.querySelectorAll<HTMLElement>('.isaret').forEach(isaretOlcekle));

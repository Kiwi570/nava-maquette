/* Effets propres à NAVA (direction « Façades »). Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les mesures et la bibliothèque d'effets (lignes, mots, cascade, rideau, parallaxe…), posés par attributs dans les pages.
   Effets du plan, marqués data-effet : facades (intro), sceau, tiroirs (module offre-a-tiroirs), ilot-3d (module
   objet-3d-qui-se-construit), mosaique, charniere, cadran, frise, filtres, rendez-vous. */
import { demarrer, versObjet, quand, rafraichir, boucle, aller } from './socle/index.js?v=2';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Horaires du showroom, à l'heure de Ternay (jamais celle du visiteur) ----------
   Lundi à samedi, 10 h-12 h et 14 h-19 h (site actuel). Dimanche et jours fériés : horaires non communiqués,
   donc aucun statut affiché ces jours-là (texte sûr par défaut). */
const HORAIRES = { semaine: { 1: [[600, 720], [840, 1140]], 2: [[600, 720], [840, 1140]], 3: [[600, 720], [840, 1140]], 4: [[600, 720], [840, 1140]], 5: [[600, 720], [840, 1140]], 6: [[600, 720], [840, 1140]] },
  feries: ['2026-11-01', '2026-11-11', '2026-12-25', '2027-01-01', '2027-03-29', '2027-05-01', '2027-05-06', '2027-05-08', '2027-05-17', '2027-07-14', '2027-08-15', '2027-11-01', '2027-11-11', '2027-12-25'] };
function heureTernay(instant = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short' })
    .formatToParts(instant).map((x) => [x.type, x.value]));
  const jours = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { iso: `${p.year}-${p.month}-${p.day}`, min: (+p.hour % 24) * 60 + +p.minute, jour: jours[p.weekday] };
}
const fmt = (m) => { const h = Math.floor(m / 60), r = m % 60; return `${h} h${r ? String(r).padStart(2, '0') : ''}`; };
const lendemain = (iso) => { const [a, m, j] = iso.split('-').map(Number); return new Date(Date.UTC(a, m - 1, j + 1)).toISOString().slice(0, 10); };
function statutShowroom(n = heureTernay()) {
  const creneaux = HORAIRES.semaine[n.jour];
  if (!creneaux || HORAIRES.feries.includes(n.iso)) return null;
  for (const [d, f] of creneaux) if (n.min >= d && n.min < f) return f - n.min <= 30 ? { etat: 'bientot', cle: 'bientot', h: f } : { etat: 'ouvert', cle: 'ouvert', h: f };
  const suite = creneaux.find(([d]) => d > n.min);
  if (suite) return { etat: 'ferme', cle: 'fermeAujourdhui', h: suite[0] };
  const demain = lendemain(n.iso), jd = (n.jour + 1) % 7;
  if (HORAIRES.semaine[jd] && !HORAIRES.feries.includes(demain)) return { etat: 'ferme', cle: 'fermeDemain', h: HORAIRES.semaine[jd][0][0] };
  return null;
}
const TEXTES_STATUT = { ouvert: 'Showroom ouvert · jusqu’à {h}', bientot: 'Showroom · ferme bientôt, à {h}', fermeAujourdhui: 'Showroom fermé · ouvre à {h}', fermeDemain: 'Showroom fermé · ouvre demain à {h}' };
function poserStatuts() {
  const s = statutShowroom();
  $$('[data-statut]').forEach((el) => {
    if (!s) return;
    el.dataset.etat = s.etat;
    const t = el.querySelector('[data-statut-texte]');
    if (t) t.textContent = TEXTES_STATUT[s.cle].replace('{h}', fmt(s.h));
  });
}

/* Cadran 24 h : l'aiguille rejoint l'heure de Ternay quand le cadran entre à l'écran. */
function cadrans() {
  const n = heureTernay();
  $$('[data-cadran]').forEach((fig) => {
    const aiguille = fig.querySelector('[data-aiguille]');
    if (!aiguille || !gsap) return;
    const angle = (n.min / 1440) * 360;
    const arcs = fig.querySelectorAll('.cadran-creneau');
    gsap.fromTo(aiguille, { rotation: angle - 140, svgOrigin: '120 120' }, { rotation: angle, svgOrigin: '120 120', ease: 'power3.out', duration: 1.6, scrollTrigger: { trigger: fig, start: 'top 82%', once: true } });
    gsap.fromTo(arcs, { strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.2, stagger: 0.25, ease: 'power2.inOut', scrollTrigger: { trigger: fig, start: 'top 82%', once: true } });
  });
}

/* ---------- Sceau de garantie : l'anneau tourne avec le défilement ---------- */
function sceau() {
  const a = $('.sceau-anneau');
  if (!a || !gsap || !window.ScrollTrigger) return;
  /* Rotation propre (lente, 48 s par tour, seulement à l'écran) et rotation du défilement, additionnées. */
  const etat = { propre: 0, defile: 0 };
  const poser = () => gsap.set(a, { rotation: etat.propre + etat.defile });
  ScrollTrigger.create({ trigger: '.ouv--accueil', start: 'top top', end: 'bottom top', scrub: 0.6, onUpdate: (s) => { etat.defile = s.progress * 140; poser(); } });
  boucle(a, (dt) => { etat.propre = (etat.propre + dt * 7.5) % 360; poser(); });
}

/* ---------- Accueil : la cuisine respire lentement après l'intro (zoom de 6 % en 9 s, aller-retour), seulement à l'écran ---------- */
function respiration() {
  const img = $('.ouv--accueil .ouv-media img');
  if (!img || !gsap || !window.ScrollTrigger) return;
  let tw = null;
  const lancer = () => {
    if (tw) return;
    tw = gsap.fromTo(img, { scale: 1 }, { scale: 1.06, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1, paused: true });
    ScrollTrigger.create({ trigger: '.ouv--accueil', start: 'top bottom', end: 'bottom top', onToggle: (s) => (s.isActive ? tw.play() : tw.pause()) });
    if (img.getBoundingClientRect().bottom > 0) tw.play();
  };
  quand('pret', () => setTimeout(lancer, 1600));
}

/* ---------- Tiroirs : module offre-a-tiroirs de la bibliothèque, branché sur le socle du projet ---------- */
function tiroirs() {
  const root = $('[data-module="offre-a-tiroirs"]');
  if (!root) return;
  const items = $$('.ofr__tiroir', root);
  root.classList.add('ofr--pret');
  items.forEach((t, i) => {
    const b = t.querySelector('.ofr__poignee'), c = t.querySelector('.ofr__contenu');
    if (!c.id) c.id = `${t.id}-contenu`;
    b.setAttribute('aria-controls', c.id);
  });
  let visuels = root.querySelector('.ofr__visuels');
  const figures = items.map((t) => t.querySelector('.ofr__image'));
  if (figures.some(Boolean)) {
    visuels = document.createElement('div'); visuels.className = 'ofr__visuels'; visuels.setAttribute('aria-hidden', 'true');
    root.querySelector('.ofr__tiroirs').before(visuels);
    items.forEach((t, i) => {
      const v = figures[i] ? figures[i].cloneNode(true) : document.createElement('figure');
      v.className = 'ofr__visuel'; v.dataset.pour = t.id;
      v.querySelectorAll('img').forEach((img) => { img.alt = ''; img.loading = i === 0 ? 'eager' : 'lazy'; });
      visuels.appendChild(v);
    });
    root.classList.add('ofr--visuels');
  }
  const poser = (t, o) => { t.classList.toggle('est-ouvert', o); t.querySelector('.ofr__poignee').setAttribute('aria-expanded', o ? 'true' : 'false'); t.querySelector('.ofr__contenu').inert = !o; };
  const actif = () => { const a = items.find((x) => x.classList.contains('est-ouvert')); visuels?.querySelectorAll('.ofr__visuel').forEach((v) => v.classList.toggle('est-actif', !!a && v.dataset.pour === a.id)); };
  const ouvrir = (t) => { items.forEach((x) => x !== t && poser(x, false)); poser(t, true); actif(); };
  items.forEach((t) => poser(t, false));
  const parAncre = items.find((t) => location.hash === '#' + t.id);
  ouvrir(parAncre || items[0]);
  root.addEventListener('click', (e) => {
    const b = e.target.closest('.ofr__poignee'); if (!b) return;
    const t = b.closest('.ofr__tiroir');
    if (t.classList.contains('est-ouvert')) { poser(t, false); actif(); } else ouvrir(t);
  });
  /* Hauteur changée : positions des effets recalculées dès la fin du dépliage. */
  let prevu = 0;
  root.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'grid-template-rows' || !window.ScrollTrigger || prevu) return;
    prevu = requestAnimationFrame(() => { prevu = 0; window.ScrollTrigger.refresh(); });
  });
  root.addEventListener('keydown', (e) => {
    const b = e.target.closest?.('.ofr__poignee'); if (!b) return;
    const ps = items.map((t) => t.querySelector('.ofr__poignee')), i = ps.indexOf(b);
    const j = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: ps.length - 1 }[e.key];
    if (j === undefined) return;
    e.preventDefault(); ps[(j + ps.length) % ps.length].focus();
  });
  /* Les façades des tiroirs glissent en place au défilement, l'une après l'autre. */
  if (gsap && window.ScrollTrigger) {
    gsap.fromTo(items.map((t) => t.querySelector('.ofr__poignee')), { xPercent: 6, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.9, stagger: 0.09, ease: 'power3.out',
      scrollTrigger: { trigger: root.querySelector('.ofr__tiroirs'), start: 'top 82%', once: true } });
  }
}

/* ---------- Îlot 3D : module objet-3d-qui-se-construit de la bibliothèque ----------
   Rotation écrite directement en transform sur l'objet, ombres tous les 15 degrés, valeurs écrites seulement si elles changent
   (parade testée du module contre les images lentes). */
function ilot() {
  const root = $('.o3d');
  if (!root || !gsap || !window.ScrollTrigger) return;
  const o = { longueur: 1.4, depart: -34, tour: 360, inclinaison: -24, lumiere: -35, largeur: 560, hauteur: 340, largeurMin: 900, hauteurMin: 600 };
  const scene = $('.o3d__scene', root), objet = $('.o3d__objet', root);
  const pieces = $$('.o3d__piece', root), etapes = $$('.o3d__etapes [data-de]', root);
  let k = 1;
  const echelle = () => { const r = scene.getBoundingClientRect(); k = Math.min(r.width / o.largeur, r.height / o.hauteur, 1.2); ecrire(true); };
  const etat = { p: 0, main: 0, v: 0, tenu: false };
  const lisse = (a, b, t) => { const x = Math.min(1, Math.max(0, (t - a) / Math.max(0.001, b - a))); return x * x * (3 - 2 * x); };
  const ombre = (ry, n) => { const d = (((ry + n - o.lumiere) % 360) + 360) % 360 * Math.PI / 180; return (0.5 * (1 - Math.max(0, Math.cos(d)))).toFixed(2); };
  let dernierRy = null, dernierPas = null;
  function ecrire(force = false) {
    const ry = o.depart + etat.p * o.tour + etat.main;
    if (force || Math.abs(ry - dernierRy) > 0.05) { objet.style.transform = `scale(${k.toFixed(3)}) rotateX(${o.inclinaison}deg) rotateY(${ry.toFixed(2)}deg)`; dernierRy = ry; }
    const pas = Math.round(ry / 15) * 15;
    if (force || pas !== dernierPas) { dernierPas = pas; root.style.setProperty('--o3d-o-av', ombre(pas, 0)); root.style.setProperty('--o3d-o-d', ombre(pas, 90)); root.style.setProperty('--o3d-o-ar', ombre(pas, 180)); root.style.setProperty('--o3d-o-g', ombre(pas, 270)); }
    pieces.forEach((pc) => {
      const m = lisse(parseFloat(pc.dataset.de) || 0, parseFloat(pc.dataset.a) || 1, etat.p);
      if (m !== pc.__m) {
        pc.__m = m;
        const mf = Math.min(m, 0.34).toFixed(3);
        if (mf !== pc.__mf) { pc.__mf = mf; pc.style.setProperty('--m', mf); }
        pc.style.transform = `translate3d(0, ${((1 - m) * pc.__chute).toFixed(1)}px, 0) rotateY(${((1 - m) * pc.__vrille).toFixed(1)}deg)`;
        pc.style.visibility = m <= 0.001 ? 'hidden' : '';
      }
    });
    let n = -1; etapes.forEach((e, i) => { if (etat.p + 0.001 >= (parseFloat(e.dataset.de) || 0)) n = i; });
    etapes.forEach((e, i) => e.classList.toggle('est-active', i === n));
  }
  /* Les variables de chute et de vrille sont lues une fois (pas à chaque image). */
  pieces.forEach((pc) => { const cs = getComputedStyle(pc); pc.__chute = parseFloat(cs.getPropertyValue('--o3d-chute')) || -280; pc.__vrille = parseFloat(cs.getPropertyValue('--o3d-vrille')) || 0; });
  root.classList.add('est-actif');
  echelle();
  new ResizeObserver(echelle).observe(scene);
  let raf = 0, avant = 0;
  const tour = (t) => {
    const dt = Math.min(0.05, avant ? (t - avant) / 1000 : 1 / 60); avant = t;
    if (!etat.tenu && Math.abs(etat.v) > 4) { etat.main += etat.v * dt; etat.v *= Math.exp(-dt * 2.4); ecrire(); raf = requestAnimationFrame(tour); } else { raf = 0; avant = 0; }
  };
  let id = null, x0 = 0, t0 = 0;
  scene.addEventListener('pointerdown', (e) => { if (e.button !== 0) return; id = e.pointerId; etat.tenu = true; etat.v = 0; x0 = e.clientX; t0 = performance.now(); scene.setPointerCapture(id); root.classList.add('est-touche'); });
  scene.addEventListener('pointermove', (e) => { if (!etat.tenu || e.pointerId !== id) return; const t = performance.now(), d = (e.clientX - x0) * 0.45; etat.v += (d / Math.max(0.008, (t - t0) / 1000) - etat.v) * 0.35; etat.main += d; x0 = e.clientX; t0 = t; ecrire(); });
  const lacher = () => { if (!etat.tenu) return; etat.tenu = false; if (performance.now() - t0 > 120) etat.v = 0; etat.v = Math.max(-900, Math.min(900, etat.v)); if (!raf) raf = requestAnimationFrame(tour); };
  scene.addEventListener('pointerup', lacher); scene.addEventListener('pointercancel', lacher); scene.addEventListener('lostpointercapture', lacher);
  scene.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); etat.main += e.key === 'ArrowLeft' ? -20 : 20; ecrire(); } });
  const mm = gsap.matchMedia();
  mm.add(`(min-width: ${o.largeurMin}px) and (min-height: ${o.hauteurMin}px)`, () => {
    root.classList.add('o3d--epingle'); echelle();
    const st = ScrollTrigger.create({ trigger: root, start: 'top top', end: () => '+=' + Math.round(innerHeight * o.longueur), pin: true, scrub: 0.8,
      onUpdate: (x) => { etat.p = x.progress; ecrire(); }, onRefresh: (x) => { etat.p = x.progress; ecrire(); }, onToggle: (x) => root.classList.toggle('est-epingle', x.isActive) });
    return () => { st.kill(); root.classList.remove('o3d--epingle', 'est-epingle'); echelle(); };
  });
  mm.add(`(max-width: ${o.largeurMin - 1}px), (max-height: ${o.hauteurMin - 1}px)`, () => {
    const st = ScrollTrigger.create({ trigger: scene, start: 'top 85%', end: 'bottom 35%', scrub: 0.6, onUpdate: (x) => { etat.p = x.progress; ecrire(); }, onRefresh: (x) => { etat.p = x.progress; ecrire(); } });
    return () => st.kill();
  });
}

/* ---------- Mosaïque : les tuiles, dispersées, se rangent dans la grille au défilement ---------- */
function mosaique() {
  const m = $('.mosaique');
  if (!m || !gsap || !window.ScrollTrigger) return;
  const tuiles = $$('.mosaique-tuile', m);
  const depart = [[-40, 60, -4], [30, 90, 3], [60, -30, 5], [-50, 40, -3], [40, 70, 2], [-30, 50, -5]];
  const etroit = innerWidth < 761;
  tuiles.forEach((t, i) => {
    const [x0, y, r] = depart[i % depart.length];
    const x = etroit ? 0 : x0;
    gsap.fromTo(t, { xPercent: x * 0.4, yPercent: y * 0.5, rotation: r, scale: 0.92 }, { xPercent: 0, yPercent: 0, rotation: 0, scale: 1, ease: 'none',
      scrollTrigger: { trigger: m, start: 'top 95%', end: 'top 35%', scrub: 0.7 } });
  });
}

/* ---------- Garantie : la porte du placard s'entrouvre sur sa charnière au défilement ---------- */
function charniere() {
  $$('.placard').forEach((p) => {
    const porte = p.querySelector('.placard-porte');
    if (!porte || !gsap || !window.ScrollTrigger) return;
    /* Au défilement, la porte s'entrouvre (rotation de base) ; un toucher la ferme ou l'ouvre en grand, avec un rebond. */
    const etat = { base: 0, main: 0 };
    let ouverte = null;
    const poser = () => gsap.set(porte, { rotationY: Math.max(-112, Math.min(0, etat.base + etat.main)) });
    ScrollTrigger.create({ trigger: p, start: 'top 80%', end: 'top 20%', scrub: 0.6, onUpdate: (s) => { etat.base = -84 * s.progress; if (ouverte === null) poser(); } });
    porte.addEventListener('click', () => {
      const base = etat.base;
      ouverte = ouverte === null ? base > -42 : !ouverte;
      const cible = ouverte ? -110 : 0;
      gsap.to(etat, { main: cible - base, duration: ouverte ? 1.1 : 0.8, ease: ouverte ? 'elastic.out(1, .55)' : 'power3.out', onUpdate: () => { etat.base = base; poser(); } });
      porte.setAttribute('aria-pressed', ouverte ? 'true' : 'false');
      p.classList.add('placard--touche');
    });
  });
}

/* ---------- Réalisations : filtres par pièce (gardés dans l'adresse) et visionneuse ---------- */
function realisations() {
  const grille = $('[data-realisations]');
  if (!grille) return;
  const items = $$('.real-item', grille);
  /* Lien profond vers une photo : la grille est posée tout de suite (pas d'apparition qui la décale pendant l'arrivée). */
  if (location.hash.startsWith('#r-')) grille.removeAttribute('data-anime');
  const boutons = $$('[data-filtre]');
  const compte = $('[data-compte]');
  const appliquer = (piece, { anime = true } = {}) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', b.dataset.filtre === piece ? 'true' : 'false'));
    const montrer = items.filter((it) => piece === 'toutes' || it.dataset.piece === piece);
    const cacher = items.filter((it) => !montrer.includes(it));
    const fin = () => { cacher.forEach((it) => { it.hidden = true; }); montrer.forEach((it) => { it.hidden = false; }); if (compte) compte.textContent = compte.dataset.modele.replace('{n}', montrer.length); rafraichir(); };
    if (anime && gsap) {
      gsap.to(grille, { opacity: 0, duration: 0.18, onComplete: () => { fin(); gsap.fromTo(montrer, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: 'power2.out', clearProps: 'transform' }); gsap.to(grille, { opacity: 1, duration: 0.2 }); } });
    } else fin();
    const u = new URL(location.href);
    if (piece === 'toutes') u.searchParams.delete('piece'); else u.searchParams.set('piece', piece);
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
  };
  boutons.forEach((b) => b.addEventListener('click', () => {
    appliquer(b.dataset.filtre);
    const haut = grille.getBoundingClientRect().top;
    if (haut < 0) window.scrollTo({ top: scrollY + haut - 140, behavior: 'auto' });
  }));
  const depart = new URLSearchParams(location.search).get('piece');
  if (depart && boutons.some((b) => b.dataset.filtre === depart)) appliquer(depart, { anime: false });

  /* Visionneuse : elle s'ouvre depuis la vignette, flèches, glissement, Échap ; chaque photo a son lien (#r-…). */
  const dlg = $('[data-visionneuse]');
  if (!dlg) return;
  const img = dlg.querySelector('img'), leg = dlg.querySelector('[data-legende]');
  let courant = -1, retour = null;
  const visibles = () => items.filter((it) => !it.hidden);
  const montrer = (it) => {
    const src = it.querySelector('img');
    const grand = (src.getAttribute('srcset') || '').split(',').map((s) => s.trim().split(' ')[0]).pop() || src.currentSrc || src.src;
    img.src = grand; img.alt = src.alt; leg.textContent = it.dataset.titre;
    courant = visibles().indexOf(it);
    history.replaceState(history.state, '', location.pathname + location.search + '#' + it.id);
  };
  const ouvrir = (it) => {
    retour = it.querySelector('a, button');
    montrer(it);
    if (!dlg.open) dlg.showModal();
    document.documentElement.classList.add('visionneuse-ouverte');
    if (gsap) gsap.fromTo(img, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' });
  };
  const fermer = () => { dlg.close(); };
  dlg.addEventListener('close', () => { document.documentElement.classList.remove('visionneuse-ouverte'); history.replaceState(history.state, '', location.pathname + location.search); retour && retour.focus(); });
  const pas = (d) => { const v = visibles(); if (!v.length) return; montrer(v[(courant + d + v.length) % v.length]); if (gsap) gsap.fromTo(img, { x: 24 * d, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35 }); };
  items.forEach((it) => it.querySelector('a').addEventListener('click', (e) => { e.preventDefault(); ouvrir(it); }));
  dlg.querySelector('[data-precedente]').addEventListener('click', () => pas(-1));
  dlg.querySelector('[data-suivante]').addEventListener('click', () => pas(1));
  dlg.querySelector('[data-fermer]').addEventListener('click', fermer);
  dlg.addEventListener('click', (e) => { if (e.target === dlg) fermer(); });
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') pas(-1); if (e.key === 'ArrowRight') pas(1); });
  let x0 = null;
  dlg.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
  dlg.addEventListener('pointerup', (e) => { if (x0 !== null && Math.abs(e.clientX - x0) > 50) pas(e.clientX < x0 ? 1 : -1); x0 = null; });
  const parAncre = items.find((it) => location.hash === '#' + it.id);
  if (parAncre) quand('pret', () => ouvrir(parAncre));
  /* Lien vers une photo depuis la page elle-même (changement d'ancre) : elle s'ouvre aussi. */
  window.addEventListener('hashchange', () => { const it = items.find((x) => location.hash === '#' + x.id); if (it && !dlg.open) ouvrir(it); });
}

/* ---------- Rendez-vous en trois étapes (formulaire simulé du socle) ---------- */
function rendezVous() {
  const f = $('[data-rdv]');
  if (!f) return;
  const etapesF = $$('[data-etape]', f);
  const indic = $('[data-etape-indic]', f);
  const recap = $('[data-recap]', f);
  let n = 0;
  const params = new URLSearchParams(location.search);
  const libelle = (name) => { const c = f.querySelector(`[name="${name}"]:checked`); return c ? c.closest('label').querySelector('span').textContent.trim() : ''; };
  const montrer = (i, focus = true) => {
    n = i;
    etapesF.forEach((e, k) => { e.hidden = k !== i; });
    if (indic) indic.textContent = indic.dataset.modele.replace('{n}', i + 1);
    $$('[data-pastille]', f).forEach((p, k) => p.classList.toggle('est-faite', k <= i));
    if (recap) recap.innerHTML = [['projet'], ['mode'], ['moment']].map(([k]) => libelle(k)).filter(Boolean).map((t) => `<li>${t}</li>`).join('');
    if (focus) { const t = etapesF[i].querySelector('legend, h3'); if (t) { t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); } }
    if (gsap) gsap.fromTo(etapesF[i], { x: 24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'transform' });
    rafraichir();
  };
  const valide = (i) => {
    const groupes = [...new Set($$('input[type="radio"][required]', etapesF[i]).map((r) => r.name))];
    for (const g of groupes) {
      const ok = f.querySelector(`[name="${g}"]:checked`);
      const err = f.querySelector(`[data-erreur-groupe="${g}"]`);
      if (err) err.textContent = ok ? '' : err.dataset.texte;
      if (!ok) { f.querySelector(`[name="${g}"]`).focus(); return false; }
    }
    return true;
  };
  $$('[data-suivant]', f).forEach((b) => b.addEventListener('click', () => { if (valide(n)) montrer(Math.min(n + 1, etapesF.length - 1)); }));
  /* Envoi accepté (le socle a vérifié les champs et montré son message) : le formulaire se range, la confirmation apparaît. */
  const merci = $('[data-merci]', f);
  f.addEventListener('submit', () => setTimeout(() => {
    const msg = f.querySelector('[data-message-envoi]');
    if (!merci || !msg || msg.hidden) return;
    $('[data-merci-titre]', merci).textContent = merci.dataset.modele.replace('{prenom}', (f.querySelector('#f-prenom').value || '').trim());
    $('[data-merci-recap]', merci).innerHTML = ['projet', 'mode', 'moment'].map(libelle).filter(Boolean).map((t) => `<li>${t}</li>`).join('');
    const partir = [...etapesF, $('.rdv-progres', f), indic].filter(Boolean);
    const fin = () => {
      partir.forEach((e) => { e.hidden = true; });
      merci.hidden = false;
      $('[data-merci-titre]', merci).focus({ preventScroll: true });
      if (f.getBoundingClientRect().top < 0) aller(f);
      if (gsap) {
        gsap.fromTo(merci, { rotationX: -70, opacity: 0, transformOrigin: '50% 0%' }, { rotationX: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.4)', clearProps: 'transform' });
        gsap.fromTo(merci.querySelectorAll('.rdv-merci-coche circle, .rdv-merci-coche path'), { strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, stagger: 0.25, delay: 0.25, ease: 'power2.out' });
      }
      rafraichir();
    };
    if (gsap) gsap.to(partir, { y: -12, opacity: 0, duration: 0.3, stagger: 0.04, onComplete: () => { gsap.set(partir, { clearProps: 'transform,opacity' }); fin(); } });
    else fin();
  }, 0));
  $('[data-nouvelle]', f)?.addEventListener('click', () => {
    f.reset();
    merci.hidden = true;
    [...etapesF, $('.rdv-progres', f), indic].filter(Boolean).forEach((e) => { e.hidden = false; });
    const msg = f.querySelector('[data-message-envoi]'); if (msg) msg.hidden = true;
    const envoi = f.querySelector('[type="submit"]'); if (envoi) { envoi.disabled = false; envoi.removeAttribute('aria-disabled'); }
    montrer(0);
  });
  $$('[data-precedent]', f).forEach((b) => b.addEventListener('click', () => montrer(Math.max(0, n - 1))));
  if (params.get('projet') || params.get('mode')) { /* choix déjà fait par le bouton d'origine : on reste sur la première étape, cochée */ }
  montrer(0, false);
}

/* ---------- Frise de l'accompagnement : le trait de la frise se remplit au défilement ---------- */
function frise() {
  const f = $('[data-frise]');
  if (!f || !gsap || !window.ScrollTrigger) return;
  const trait = f.querySelector('.frise-trait span');
  if (trait) gsap.fromTo(trait, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: f, start: 'top 70%', end: 'bottom 60%', scrub: 0.5 } });
  $$('.frise-etape', f).forEach((e) => ScrollTrigger.create({ trigger: e, start: 'top 65%', onEnter: () => e.classList.add('est-active'), onLeaveBack: () => e.classList.remove('est-active') }));
}

/* ---------- Savoir-faire : les cinq façades montent doucement au défilement, décalées ---------- */
function facadesPieces() {
  const n = $('.facades-pieces');
  if (!n || !gsap || !window.ScrollTrigger) return;
  const ps = $$('.facade-piece', n);
  ps.forEach((p, i) => gsap.fromTo(p, { yPercent: 0 }, { yPercent: -4 - i * 2.5, ease: 'none', scrollTrigger: { trigger: n, start: 'top 60%', end: 'bottom top', scrub: 0.6 } }));
}
const arriveeFacades = (tl, t) => {
  const ps = $$('.facade-piece');
  if (!ps.length) return;
  const anim = [ps, { clipPath: 'inset(100% 0% 0% 0% round 14px)' }, { clipPath: 'inset(0% 0% 0% 0% round 14px)', duration: 0.9, stagger: 0.08, ease: 'power3.inOut', clearProps: 'clipPath' }];
  if (tl) tl.fromTo(...anim, t); else gsap.fromTo(anim[0], anim[1], { ...anim[2], delay: 0.15 });
};

/* ---------- Intro : façades qui s'ouvrent, logo qui se pose sur le sceau (ou l'objet de la page) ---------- */
const lignesTitre = () => $$('.ouv-ligne');
const debutOuverture = () => $$('.ouv [data-anime="gsap"]:not(h1)');

demarrer({
  preparer() {
    poserStatuts();
    setInterval(poserStatuts, 60000);
    tiroirs();
    ilot();
    mosaique();
    charniere();
    sceau();
    respiration();
    cadrans();
    realisations();
    rendezVous();
    frise();
    facadesPieces();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const portes = $$('.facade');
    tl.fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.45 }, 0.05)
      .to('.ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.25 }, 0.6)
      .to('.ouverture-centre', { backgroundColor: 'rgba(244,240,234,0)', boxShadow: '0 0 0 0 rgba(0,0,0,0)', duration: 0.3 }, 0.6);
    /* Les façades pivotent sur leurs charnières, l'une après l'autre (gauche puis droite). */
    portes.forEach((p, i) => {
      const sens = p.classList.contains('facade--d') ? 1 : -1;
      tl.fromTo(p, { rotationY: 0 }, { rotationY: sens * 96, duration: 0.75, ease: 'power2.in' }, 0.5 + i * 0.08);
    });
    const media = $('.ouv-media img, .ouv .media img');
    if (media) tl.fromTo(media, { scale: 1.14 }, { scale: 1, duration: 1.7, ease: 'power2.out' }, 0.5);
    versObjet(tl, { a: 1.05, duree: 0.45, ouverture: 0.7 });
    arriveeFacades(tl, 1.1);
    if (lignesTitre().length) {
      tl.set('.ouv h1', { opacity: 1 }, 1.0)
        .fromTo(lignesTitre(), { yPercent: 140 }, { yPercent: 0, duration: 0.8, stagger: 0.1 }, 1.05)
        .fromTo(debutOuverture(), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 }, 1.3);
    }
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.ouv [data-anime="gsap"]', { opacity: 1, clearProps: 'transform' });
    gsap.set(lignesTitre(), { clearProps: 'transform' });
  },
  arrivee() {
    if (!gsap) return;
    gsap.set('.ouv h1', { opacity: 1 });
    gsap.fromTo(lignesTitre(), { yPercent: 140 }, { yPercent: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.1 });
    gsap.fromTo(debutOuverture(), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07, delay: 0.3 });
    arriveeFacades(null);
    const media = $('.ouv-media img, .ouv .media img');
    if (media) gsap.fromTo(media, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power2.out' });
  },
});

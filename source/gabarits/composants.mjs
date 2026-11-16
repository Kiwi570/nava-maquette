/* Composants communs aux pages NAVA : titres à mot en italique, appel final, statut du showroom, cadran des horaires,
   îlot 3D, frise des étapes. Les textes viennent toujours de donnees/textes/fr.json. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Titre en deux temps : « Tout sur mesure, » puis le mot accent en italique chêne. */
export const titre = (c, cle, { niveau = 'h2', classe = '', id = '', anime = 'lignes' } = {}) => {
  const attrs = [classe && `class="${classe}"`, id && `id="${id}"`, anime && `data-anime="${anime}"`].filter(Boolean).join(' ');
  return html`${brut(`<${niveau} ${attrs}>`)}${c.t(cle)} <em>${c.t(cle + 'Accent')}</em>${brut(`</${niveau}>`)}`;
};

/* Statut du showroom (calculé à l'heure de Ternay par site.js ; texte sûr par défaut). */
export const statut = (c, { info = false } = {}) => html`<p class="statut"${info ? brut(' data-info-cle') : ''} data-statut><i aria-hidden="true"></i><span data-statut-texte>${c.t('commun.statutDefaut')}</span></p>`;

/* Cadran 24 h : créneaux d'ouverture tracés, aiguille sur l'heure de Ternay (site.js). Minuit en haut. */
export function cadran(c, { classe = '' } = {}) {
  const C = 120, R = 92;
  const pt = (m, r) => { const t = (m / 1440) * Math.PI * 2 - Math.PI / 2; return [(C + Math.cos(t) * r).toFixed(1), (C + Math.sin(t) * r).toFixed(1)]; };
  const arc = (d, f) => { const a = pt(d, R), b = pt(f, R); return `M${a[0]} ${a[1]}A${R} ${R} 0 ${f - d > 720 ? 1 : 0} 1 ${b[0]} ${b[1]}`; };
  const traits = Array.from({ length: 24 }, (_, h) => { const fort = h % 6 === 0; const a = pt(h * 60, 104), b = pt(h * 60, fort ? 116 : 111); return `<line class="cadran-grad${fort ? ' est-forte' : ''}" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`; }).join('');
  const chiffres = [[0, '0 h'], [360, '6 h'], [720, '12 h'], [1080, '18 h']].map(([m, t]) => { const p = pt(m, 74); return `<text x="${p[0]}" y="${p[1]}" class="cadran-chiffre">${t}</text>`; }).join('');
  return html`<figure class="cadran ${classe}" data-cadran data-visuel data-effet="cadran">
  <svg viewBox="0 0 240 240" aria-hidden="true" focusable="false">
    <circle class="cadran-piste" cx="120" cy="120" r="${R}"/>
    ${brut(traits)}
    <path class="cadran-creneau" pathLength="1" d="${arc(600, 720)}"/>
    <path class="cadran-creneau" pathLength="1" d="${arc(840, 1140)}"/>
    ${brut(chiffres)}
    <g class="cadran-aiguille" data-aiguille><line x1="120" y1="120" x2="120" y2="38"/><circle cx="120" cy="120" r="5"/></g>
  </svg>
  <figcaption><span class="cadran-titre">${c.t('showroom.acces.horaires')}</span><span>${c.t('showroom.acces.jours')}</span><strong>${c.t('showroom.acces.creneaux')}</strong></figcaption>
</figure>`;
}

/* Appel final de chaque page. */
export const fin = (c, { titreCle, texteCle, action, secondaire, image, alt, accent = false }) => html`<section class="fin" id="fin">
  <div class="conteneur fin-grille">
    <div class="fin-texte">
      ${accent ? titre(c, titreCle) : html`<h2 data-anime="lignes">${c.t(titreCle)}</h2>`}
      <p data-anime>${c.t(texteCle)}</p>
      <p class="actions" data-anime>${action}${secondaire || ''}</p>
    </div>
    ${c.media({ nom: image, alt, classe: 'fin-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>`;

/* Une boîte de l'îlot 3D (module objet-3d-qui-se-construit) : style = variables de position et de taille. */
const faces = '<i class="o3d__f o3d__f--av"></i><i class="o3d__f o3d__f--ar"></i><i class="o3d__f o3d__f--g"></i><i class="o3d__f o3d__f--d"></i><i class="o3d__f o3d__f--haut"></i>';
const boite = (style, cl = '') => `<div class="o3d__boite${cl ? ' ' + cl : ''}" style="${style}">${faces}</div>`;
const piece = (de, a, contenu, style = '') => `<div class="o3d__piece" data-de="${de}" data-a="${a}"${style ? ` style="${style}"` : ''}>${contenu}</div>`;
const NOIR = '--o3d-teinte: color-mix(in oklab, var(--texte) 86%, var(--fond))';
const CAISSON = '--o3d-teinte: color-mix(in oklab, var(--fond) 92%, var(--texte))';
const CHENE = '--o3d-teinte: color-mix(in oklab, var(--chene) 82%, var(--fond))';
const LAITON = '--o3d-teinte: #b8925a';
export function ilot() {
  const xs = [-148, 0, 148];
  return brut([
    piece(-0.1, 0.08, boite(`--l:440px;--p:196px;--h:12px;${NOIR}`), '--o3d-chute:-120px'),
    ...xs.map((x, i) => piece(0.16 + i * 0.05, 0.3 + i * 0.05, boite(`--l:144px;--p:186px;--h:104px;--y:12px;--x:${x}px;${CAISSON}`))),
    piece(0.4, 0.52, boite(`--l:476px;--p:216px;--h:12px;--y:116px;--z:-8px;${CHENE}`), '--o3d-chute:-220px'),
    ...xs.map((x, i) => piece(0.48 + i * 0.04, 0.6 + i * 0.04, boite(`--l:140px;--p:6px;--h:100px;--y:14px;--z:96px;--x:${x}px;${NOIR}`), '--o3d-chute:-160px;--o3d-vrille:40deg')),
    ...xs.map((x, i) => piece(0.7 + i * 0.03, 0.78 + i * 0.03, boite(`--l:104px;--p:4px;--h:4px;--y:100px;--z:101px;--x:${x}px;${LAITON}`), '--o3d-chute:-90px')),
    piece(0.76, 0.86, boite(`--l:92px;--p:70px;--h:3px;--y:127px;--x:120px;--z:20px;${NOIR}`) + boite(`--l:8px;--p:8px;--h:58px;--y:128px;--x:120px;--z:-28px;${NOIR}`) + boite(`--l:8px;--p:44px;--h:8px;--y:178px;--x:120px;--z:-10px;${NOIR}`), '--o3d-chute:-140px'),
    ...[-120, -20].map((x, i) => piece(0.84 + i * 0.05, 0.94 + i * 0.04, boite(`--l:8px;--p:8px;--h:74px;--x:${x}px;--z:-150px;${NOIR}`) + boite(`--l:48px;--p:48px;--h:8px;--y:74px;--x:${x}px;--z:-150px;${CHENE}`), '--o3d-chute:-200px;--o3d-vrille:90deg')),
  ].join(''));
}

/* Liste des étapes (accueil : allumées par l'îlot ; accompagnement : frise). */
export const etapes = (c, valeurs = [0, 0.2, 0.42, 0.72]) => html`${[1, 2, 3, 4].map((n, i) => html`<li data-de="${valeurs[i]}"><div><strong>${c.t('etapes.e' + n)}</strong><span>${c.t('etapes.e' + n + 't')}</span></div></li>`)}`;

/* Savoir-faire : ouverture en cinq façades (une par pièce, chacune mène à sa partie), une partie par prestation
   en mises en page alternées, matières et 3D, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { titre, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'savoir-faire', fichier: 'savoir-faire', imagePartage: 'sejour-cuisine-1280.webp' };

export default (c) => {
  const real = Object.fromEntries(c.donnees.realisations.map((r) => [r.id, r]));
  return html`
<section class="ouv ouv--facades" id="debut">
  <div class="conteneur ouv-facades-tete">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('savoirFaire.surtitre')}</p>
      <h1 class="ouv-titre ouv-titre--moyen" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('savoirFaire.titre')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('savoirFaire.titreAccent')}</em></span></span></h1>
    </div>
    <div class="ouv-facades-cote">
      <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('savoirFaire.texte')}</p>
      <p class="actions" data-anime="gsap">${c.lien('showroom', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('savoirFaire.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="info-cle" data-anime="gsap" data-info-cle>${c.t('savoirFaire.info')}</p>
    </div>
  </div>
  <nav class="facades-pieces conteneur" aria-label="${c.s('savoirFaire.sommaire')}" data-iris-centre data-effet="facades-pieces">
    ${c.donnees.prestations.map((p, i) => html`<a class="facade-piece" href="#${p.id}" data-sans-transition style="--i:${i}">${c.media({ nom: p.facade, alt: '', classe: 'facade-piece-media', sizes: '(max-width: 760px) 100vw, 22vw', priorite: true })}<span class="facade-piece-nom"><small>${p.num}</small>${p.nom}</span><i class="facade-piece-poignee" aria-hidden="true"></i></a>`)}
  </nav>
</section>

${c.donnees.prestations.map((p, i) => html`<section class="piece ${i % 2 ? 'piece--inverse' : ''}" id="${p.id}" aria-labelledby="t-${p.id}">
  <div class="conteneur piece-grille">
    <div class="piece-images">
      ${c.media({ nom: p.image, alt: p.imageAlt, cadrage: p.cadrage, classe: 'piece-media piece-media--grand', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-anime="rideau"' })}
      ${p.images.map((id, k) => c.media({ nom: id, alt: real[id].alt, classe: 'piece-media piece-media--petit piece-media--' + (k + 1) + (p.images.length === 1 ? ' piece-media--large' : ''), sizes: '(max-width: 760px) 50vw, 22vw', attrs: 'data-fx="parallaxe" data-fx-force="' + (10 + k * 6) + '"' }))}
    </div>
    <div class="piece-texte">
      <p class="piece-num" aria-hidden="true">${p.num}</p>
      <h2 id="t-${p.id}" data-anime="lignes">${p.nom}</h2>
      <p class="piece-resume" data-anime>${p.resume}</p>
      <p data-anime>${p.texte}</p>
      <p class="actions" data-anime>${c.lien('showroom', { ancre: 'rendez-vous', params: 'projet=' + p.id, classe: 'bouton bouton--contour', texte: c.t('savoirFaire.parler') })}${c.lien('realisations', { params: 'piece=' + p.piece, classe: 'lien-fleche', texte: c.t('savoirFaire.photos') })}</p>
    </div>
  </div>
</section>`)}

<section class="matieres sombre" id="matieres">
  ${c.media({ nom: 'grok/matieres', alt: 'Échantillons de chêne, noyer, terrazzo, laque noire et laiton', classe: 'matieres-media', sizes: '100vw', attrs: 'data-fx="zoom"' })}
  <div class="conteneur matieres-texte">
    <p class="surtitre">${c.t('savoirFaire.matieres.surtitre')}</p>
    ${titre(c, 'savoirFaire.matieres.titre')}
    <p data-anime>${c.t('savoirFaire.matieres.texte')}</p>
    <p data-anime>${c.lien('accompagnement', { classe: 'lien-fleche', texte: c.t('savoirFaire.matieres.lien') })}</p>
  </div>
</section>

${fin(c, {
  titreCle: 'savoirFaire.fin', texteCle: 'savoirFaire.finTexte', image: 'bain-led', alt: real['bain-led'].alt,
  action: c.lien('showroom', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('savoirFaire.finAction'), attrs: 'data-survol="magnetique"' }),
})}
`;
};

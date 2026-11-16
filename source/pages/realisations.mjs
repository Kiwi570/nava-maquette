/* Réalisations : ouverture plein cadre (cuisine noir mat, titre en bas à gauche sur la partie sombre), filtres par pièce gardés dans l'adresse,
   grille en mosaïque, visionneuse avec un lien par photo (#r-…), appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'realisations', fichier: 'realisations', imagePartage: 'cuisine-noire-arche-1280.webp' };
const PIECES = ['cuisines', 'bains', 'dressings', 'sejours'];

export default (c) => {
  const liste = c.donnees.realisations.filter((r) => r.id !== 'cuisine-noire-arche');
  return html`
<section class="ouv ouv--plein sombre" id="debut">
  ${c.media({ nom: 'cuisine-noire-arche', alt: 'Cuisine noir mat, colonne four et coin repas devant une arche rose', cadrage: '62% 50%', cadrageMobile: '22% 50%', priorite: true, classe: 'ouv-plein-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  <div class="ouv-plein-texte conteneur">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.realisations.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('realisations.titre')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('realisations.titreAccent')}</em></span></span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('realisations.texte')}</p>
    <p class="actions" data-anime="gsap"><a class="bouton" href="#galerie" data-action-principale data-sans-transition>${c.t('realisations.compte', { n: liste.length })}</a>${c.lien('showroom', { ancre: 'rendez-vous', classe: 'lien-fleche', texte: c.t('realisations.action') })}</p>
    <p class="info-cle" data-anime="gsap" data-info-cle>${c.t('realisations.info')}</p>
  </div>
</section>

<section class="galerie-real" id="galerie" aria-labelledby="galerie-titre">
  <div class="conteneur">
    <div class="filtres-barre">
      <h2 class="visuellement-cache" id="galerie-titre">${c.t('realisations.titre')} ${c.t('realisations.titreAccent')}</h2>
      <div class="filtres" role="group" aria-label="${c.s('realisations.filtres')}" data-effet="filtres" data-anime="cascade">
        <button type="button" class="puce" data-filtre="toutes" aria-pressed="true">${c.t('realisations.toutes')}</button>
        ${PIECES.map((p) => html`<button type="button" class="puce" data-filtre="${p}" aria-pressed="false">${c.t('realisations.' + p)}</button>`)}
      </div>
      <p class="filtres-compte" aria-live="polite" data-compte data-modele="${c.s('realisations.compte')}">${c.t('realisations.compte', { n: liste.length })}</p>
    </div>
    <ul class="real-grille" data-realisations data-anime="cascade">${liste.map((r) => html`<li class="real-item real-item--${r.format}" id="r-${r.id}" data-piece="${r.piece}" data-titre="${r.titre}">
      <a href="#r-${r.id}" data-sans-transition aria-label="${c.s('realisations.ouvrir', { t: r.titre })}">${c.media({ nom: r.id, alt: r.alt, classe: 'real-media', sizes: '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw' })}<span class="real-legende">${r.titre}</span></a>
    </li>`)}</ul>
  </div>
</section>

<dialog class="visionneuse" data-visionneuse data-recouvrement aria-label="${c.s('realisations.visionneuse')}">
  <figure><img src="/assets/images/cuisine-ilot-blanc-640.webp" alt="" width="1600" height="1067" loading="eager" decoding="async"><figcaption data-legende></figcaption></figure>
  <button type="button" class="visionneuse-bouton visionneuse-precedente" data-precedente aria-label="${c.s('realisations.precedente')}">←</button>
  <button type="button" class="visionneuse-bouton visionneuse-suivante" data-suivante aria-label="${c.s('realisations.suivante')}">→</button>
  <button type="button" class="visionneuse-bouton visionneuse-fermer" data-fermer aria-label="${c.s('realisations.fermer')}">✕</button>
</dialog>

${fin(c, {
  titreCle: 'realisations.fin', texteCle: 'realisations.finTexte', image: 'meuble-tv-claustra', alt: 'Séjour avec meuble TV bas et mur en tasseaux de bois',
  action: c.lien('showroom', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('realisations.finAction'), attrs: 'data-survol="magnetique"' }),
  secondaire: c.lien('savoir-faire', { classe: 'bouton bouton--contour', texte: c.t('realisations.finSecondaire') }),
})}
`;
};

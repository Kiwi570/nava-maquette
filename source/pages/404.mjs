/* Page 404 : « Ce tiroir est vide », avec son image (tiroir ouvert et vide). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="ouv ouv--404 conteneur" id="debut">
  <div class="ouv-404-texte">
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('introuvable.titre')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('introuvable.titreAccent')}</em></span></span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('introuvable.texte')}</p>
    <p class="actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}${c.lien('realisations', { classe: 'lien-fleche', texte: c.t('introuvable.realisations') })}</p>
    <p class="info-cle" data-anime="gsap" data-info-cle>${c.t('commun.horairesCourts')}</p>
  </div>
  ${c.media({ nom: 'grok/404', alt: 'Tiroir de cuisine ouvert et vide, une seule cuillère en bois', cadrage: '55% 55%', priorite: true, classe: 'ouv-404-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-iris-centre' })}
</section>
`;

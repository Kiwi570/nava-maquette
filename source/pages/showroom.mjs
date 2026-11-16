/* Showroom & contact : photo du café en plein cadre, carte posée dessus (« Prenons un café ») et cadran des horaires en direct, rendez-vous en trois étapes
   (simulé, prérempli depuis le bouton d'origine), accès et façade dessinée, appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, statut, cadran } from '../gabarits/composants.mjs';

export const page = { cle: 'showroom', fichier: 'showroom', imagePartage: 'grok/etape-cafe-1280.webp' };

const PROJETS = [['cuisine', 'cuisine'], ['salle-de-bain', 'salleDeBain'], ['dressing', 'dressing'], ['renovation', 'renovation'], ['meuble-tv', 'meubleTv'], ['autre', 'autre']];
const choix = (c, name, valeurs, prefixe) => html`${valeurs.map(([v, cle]) => html`<label class="carte-choix"><input type="radio" name="${name}" value="${v}" required><span>${c.t(prefixe + cle)}</span></label>`)}`;

export default (c) => html`
<section class="ouv ouv--cafe" id="debut">
  ${c.media({ nom: 'grok/etape-cafe', alt: 'Deux tasses de café sur une table en chêne, à côté d\u2019échantillons de matières', cadrage: '30% 60%', cadrageMobile: '34% 62%', priorite: true, classe: 'ouv-cafe-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  <div class="conteneur ouv-cafe-cadre">
    <div class="ouv-cafe-carte">
      <p class="surtitre" data-anime="gsap">${c.t('showroom.surtitre')}</p>
      <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('showroom.titre')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('showroom.titreAccent')}</em></span></span></h1>
      <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('showroom.texte')}</p>
      <p class="actions" data-anime="gsap"><a class="bouton" href="#rendez-vous" data-action-principale data-sans-transition data-survol="magnetique">${c.t('showroom.action')}</a><a class="lien-fleche" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      <div data-anime="gsap">${statut(c, { info: true })}</div>
    </div>
    ${cadran(c, { classe: 'cadran--flottant' })}
  </div>
</section>

<section class="rdv" id="rendez-vous" aria-labelledby="rdv-titre">
  <div class="conteneur rdv-grille">
    <div class="rdv-tete">
      <p class="surtitre">${c.t('showroom.rdv.surtitre')}</p>
      ${titre(c, 'showroom.rdv.titre', { id: 'rdv-titre' })}
      <p data-anime>${c.t('showroom.rdv.texte')}</p>
      ${c.media({ nom: 'plan-terrazzo', alt: 'Plan de travail en terrazzo, évier inox et mur végétal', classe: 'rdv-media', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <form class="rdv-form" data-formulaire data-rdv data-effet="rendez-vous" data-grille="retour" action="#" novalidate data-anime>
      <div class="rdv-progres" aria-hidden="true"><span data-pastille></span><span data-pastille></span><span data-pastille></span></div>
      <p class="rdv-indic" data-etape-indic data-modele="${c.s('showroom.rdv.etape')}" aria-live="polite">${c.t('showroom.rdv.etape', { n: 1 })}</p>
      <fieldset class="rdv-etape" data-etape>
        <legend>${c.t('showroom.rdv.projet')}</legend>
        <div class="cartes-choix">${choix(c, 'projet', PROJETS, 'showroom.rdv.')}</div>
        <p class="champ-erreur" data-erreur-groupe="projet" data-texte="${c.s('showroom.rdv.choisir')}" aria-live="polite"></p>
        <p class="rdv-nav"><button type="button" class="bouton" data-suivant>${c.t('showroom.rdv.suivant')}</button></p>
      </fieldset>
      <fieldset class="rdv-etape" data-etape>
        <legend>${c.t('showroom.rdv.mode')}</legend>
        <div class="cartes-choix cartes-choix--deux">${choix(c, 'mode', [['showroom', 'modeShowroom'], ['telephone', 'modeTel']], 'showroom.rdv.')}</div>
        <p class="champ-erreur" data-erreur-groupe="mode" data-texte="${c.s('showroom.rdv.choisir')}" aria-live="polite"></p>
        <p class="rdv-sous">${c.t('showroom.rdv.moment')}</p>
        <div class="cartes-choix cartes-choix--deux">${choix(c, 'moment', [['matin', 'matin'], ['apres-midi', 'apresMidi']], 'showroom.rdv.')}</div>
        <p class="champ-erreur" data-erreur-groupe="moment" data-texte="${c.s('showroom.rdv.choisir')}" aria-live="polite"></p>
        <p class="rdv-nav"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('showroom.rdv.precedent')}</button><button type="button" class="bouton" data-suivant>${c.t('showroom.rdv.suivant')}</button></p>
      </fieldset>
      <fieldset class="rdv-etape" data-etape>
        <legend>${c.t('showroom.rdv.e3')}</legend>
        <div class="rdv-recap"><p>${c.t('showroom.rdv.recap')}</p><ul data-recap></ul></div>
        <div class="champs-deux">
          <div class="champ"><label for="f-prenom">${c.t('showroom.rdv.prenom')}</label><input id="f-prenom" name="prenom" autocomplete="given-name" required></div>
          <div class="champ"><label for="f-nom">${c.t('showroom.rdv.nom')}</label><input id="f-nom" name="nom" autocomplete="family-name" required></div>
          <div class="champ"><label for="f-email">${c.t('showroom.rdv.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
          <div class="champ"><label for="f-tel">${c.t('showroom.rdv.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" required></div>
        </div>
        <div class="champ"><label for="f-message">${c.t('showroom.rdv.message')}</label><textarea id="f-message" name="message" rows="4"></textarea></div>
        <p class="mention-donnees">${c.tb('showroom.rdv.donnees')}</p>
        <p class="rdv-nav"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('showroom.rdv.precedent')}</button><button type="submit" class="bouton">${c.t('showroom.rdv.envoyer')}</button></p>
        <p data-message-envoi data-texte="${c.s('showroom.rdv.envoye')}" role="status" tabindex="-1" hidden></p>
      </fieldset>
      <div class="rdv-merci" data-merci data-modele="${c.s('showroom.rdv.merci')}" hidden>
        <svg class="rdv-merci-coche" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" stroke-width="2.5" pathLength="1"/><path d="M19 33 L28 42 L46 23" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/></svg>
        <p class="rdv-merci-titre" tabindex="-1" data-merci-titre></p>
        <ul class="rdv-merci-recap" data-merci-recap></ul>
        <p class="rdv-merci-texte">${c.t('showroom.rdv.merciTexte')}</p>
        <p><button type="button" class="bouton bouton--contour" data-nouvelle>${c.t('showroom.rdv.nouvelle')}</button></p>
      </div>
    </form>
  </div>
</section>

<section class="acces sombre" id="acces">
  <div class="conteneur acces-grille">
    <div>
      <p class="surtitre">${c.t('showroom.acces.surtitre')}</p>
      ${titre(c, 'showroom.acces.titre')}
      <p data-anime>${c.t('showroom.acces.texte')}</p>
      <dl class="acces-liste" data-anime="cascade">
        <div><dt>${c.t('showroom.acces.horaires')}</dt><dd>${c.t('showroom.acces.jours')}, ${c.t('showroom.acces.creneaux')}</dd></div>
        <div><dt>${c.t('commun.appeler')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${c.t('commun.suivre')}</dt><dd><a href="${c.site.contact.instagram}" target="_blank" rel="noopener">@nava_france<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a></dd></div>
      </dl>
      <p class="actions" data-anime><a class="bouton" href="${c.site.contact.itineraire}" target="_blank" rel="noopener">${c.t('commun.itineraire')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a></p>
    </div>
    ${c.media({ nom: 'facade-showroom', alt: c.s('showroom.acces.dessin'), classe: 'acces-dessin', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>
`;

/* Accueil NAVA, direction « Façades » : intro des façades qui s'ouvrent, sceau de garantie (objet d'ouverture) qui tourne,
   presse et chiffres, prestations en tiroirs, citation, îlot 3D qui se monte avec les étapes, mosaïque des réalisations,
   garantie et porte de placard (au défilement et à la main), showroom : cadran des horaires et trois façons de se parler (appel final). */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, statut, cadran, ilot, etapes } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'cuisine-ilot-blanc-1280.webp' };

const MOSAIQUE = ['evier-noir', 'bain-miroir-rond', 'plan-terrazzo', 'meuble-tv-claustra', 'cuisine-bar-noire', 'douche-italienne'];
const PIECES = ['cuisines', 'bains', 'dressings', 'sejours'];

export default (c) => {
  const real = Object.fromEntries(c.donnees.realisations.map((r) => [r.id, r]));
  const nf = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ');
  return html`
<section class="ouv ouv--accueil" id="debut">
  <div class="ouv-texte">
    <p class="surtitre ouv-sur masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('accueil.hero.titre2')}</em></span></span></h1>
    <p class="ouv-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="actions ouv-actions" data-anime="gsap">
      ${c.lien('showroom', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('realisations', { classe: 'lien-fleche', texte: c.t('accueil.hero.secondaire') })}
    </p>
    <div class="ouv-statut" data-anime="gsap">${statut(c, { info: true })}</div>
  </div>
  <div class="ouv-visuel">
    ${c.media({ nom: 'cuisine-ilot-blanc', alt: real['cuisine-ilot-blanc'].alt, cadrage: '58% 55%', cadrageMobile: '58% 55%', priorite: true, classe: 'ouv-media', sizes: '(max-width: 760px) 100vw, 58vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <p class="sceau" data-iris-centre="disque" data-effet="sceau">
      <span class="visuellement-cache">${c.t('accueil.garantie.texte')}</span>
      <svg class="sceau-anneau" viewBox="0 0 200 200" aria-hidden="true" focusable="false" data-superpose><defs><path id="sceau-cercle" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0"/></defs><text><textPath href="#sceau-cercle" textLength="452" lengthAdjust="spacing">${c.t('accueil.hero.sceau')}</textPath></text></svg>
      <span class="sceau-centre" aria-hidden="true" data-superpose><strong data-superpose>${c.t('accueil.hero.sceauCentre')}</strong><span data-superpose>${c.t('accueil.hero.sceauAns')}</span></span>
    </p>
  </div>
</section>

<section class="reperes" id="reperes">
  <div class="conteneur reperes-grille">
    <div class="presse">
      <p class="surtitre">${c.t('accueil.presse.titre')}</p>
      <ul class="presse-logos" data-anime="cascade">
        <li>${c.media({ nom: 'presse-forbes', alt: 'Forbes', classe: 'presse-logo', sizes: '96px' })}</li>
        <li>${c.media({ nom: 'presse-lyon-people', alt: 'Lyon People', classe: 'presse-logo', sizes: '96px' })}</li>
        <li>${c.media({ nom: 'presse-lyon-capitale', alt: 'Lyon Capitale', classe: 'presse-logo', sizes: '96px' })}</li>
      </ul>
    </div>
    <div class="chiffres-bloc">
      <h2 class="chiffres-titre" data-anime="lignes">${c.t('accueil.chiffres.titre')}</h2>
      <ul class="chiffres-liste" data-anime="cascade">${c.donnees.chiffres.map((x) => html`<li>
        <p class="chiffre">${x.avant ? html`<span class="chiffre-avant">${x.avant}</span>` : ''}<strong data-compteur="${x.valeur}">${nf(x.valeur)}</strong>${x.apres ? html`<span class="chiffre-apres">${x.apres}</span>` : ''}</p>
        <p class="chiffre-texte">${c.t('accueil.chiffres.' + x.cle)}</p></li>`)}</ul>
    </div>
  </div>
</section>

<section class="ofr" id="prestations" data-module="offre-a-tiroirs" aria-labelledby="ofr-titre">
  <div class="conteneur">
    <div class="ofr__tete">
      <p class="surtitre">${c.t('accueil.prestations.surtitre')}</p>
      ${titre(c, 'accueil.prestations.titre', { classe: 'ofr__h2', id: 'ofr-titre' })}
      <p class="ofr__intro" data-anime>${c.t('accueil.prestations.intro')}</p>
    </div>
    <div class="ofr__corps">
      <ol class="ofr__tiroirs" data-effet="tiroirs">${c.donnees.prestations.map((p) => html`<li class="ofr__tiroir" id="${p.id}" data-sujet="${p.id}">
        <h3 class="ofr__titre"><button type="button" class="ofr__poignee"><span class="ofr__num">${p.num}</span><span class="ofr__nom">${p.nom}</span><span class="ofr__resume">${p.resume}</span></button></h3>
        <div class="ofr__contenu"><div class="ofr__interieur">
          ${c.media({ nom: p.image, alt: p.imageAlt, cadrage: p.cadrage, classe: 'ofr__image', sizes: '(max-width: 960px) 90vw, 40vw' })}
          <p>${p.texte}</p>
          <p class="actions">${c.lien('showroom', { ancre: 'rendez-vous', params: 'projet=' + p.id, classe: 'bouton bouton--petit', texte: c.t('accueil.prestations.parler') })}${c.lien('savoir-faire', { ancre: p.id, classe: 'lien-fleche', texte: c.t('accueil.prestations.voir') })}</p>
        </div></div>
      </li>`)}</ol>
    </div>
  </div>
</section>

<section class="citation sombre" id="citation">
  <div class="conteneur citation-grille">
    <blockquote class="citation-bloc">
      <p class="citation-texte" data-anime="mots">«&nbsp;${c.t('accueil.citation.texte')}&nbsp;»</p>
      <footer class="citation-auteur" data-anime>${c.t('accueil.citation.auteur')}</footer>
    </blockquote>
    <div class="citation-cote">
      ${c.media({ nom: 'evier-inox', alt: real['evier-inox'].alt, classe: 'citation-media', sizes: '(max-width: 760px) 90vw, 32vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
      <p class="citation-suite" data-anime>${c.t('accueil.citation.suite')}</p>
    </div>
  </div>
</section>

<section class="o3d" id="methode" data-scene aria-labelledby="o3d-titre">
  <div class="o3d__cadre conteneur">
    <div class="o3d__texte">
      <p class="surtitre">${c.t('accueil.methode.surtitre')}</p>
      ${titre(c, 'accueil.methode.titre', { classe: 'o3d__titre', id: 'o3d-titre' })}
      <p class="o3d__intro">${c.t('accueil.methode.intro')}</p>
    </div>
    <div class="o3d__scene" data-grille="manipuler" tabindex="0" role="region" aria-label="${c.s('accueil.methode.scene')}" data-effet="ilot-3d" data-visuel>
      <div class="o3d__objet" aria-hidden="true"><div class="o3d__sol"></div>${ilot()}</div>
      <p class="o3d__indice" aria-hidden="true">${c.t('accueil.methode.indice')}</p>
    </div>
    <ol class="o3d__etapes">${etapes(c)}</ol>
    <p class="o3d__lien">${c.lien('accompagnement', { classe: 'lien-fleche', texte: c.t('accueil.methode.lien') })}</p>
  </div>
</section>

<section class="mosaique-section" id="realisations">
  <div class="conteneur">
    <div class="section-tete">
      <p class="surtitre">${c.t('accueil.realisations.surtitre')}</p>
      ${titre(c, 'accueil.realisations.titre')}
      <p data-anime>${c.t('accueil.realisations.texte')}</p>
    </div>
    <ul class="mosaique" data-effet="mosaique">${MOSAIQUE.map((id, i) => html`<li class="mosaique-tuile mosaique-tuile--${i + 1}">
      <a href="${c.url('realisations', 'r-' + id)}" data-libelle="${c.libelle('realisations')}" aria-label="${real[id].titre}">${c.media({ nom: id, alt: real[id].alt, classe: 'mosaique-media', sizes: '(max-width: 760px) 50vw, 30vw' })}<span class="mosaique-legende" aria-hidden="true">${real[id].titre}</span></a>
    </li>`)}</ul>
    <p class="pieces" data-anime="cascade">${PIECES.map((p) => c.lien('realisations', { params: 'piece=' + p, classe: 'puce', texte: c.t('realisations.' + p) }))}${c.lien('realisations', { classe: 'bouton bouton--contour', texte: c.t('accueil.realisations.tout') })}</p>
  </div>
</section>

<section class="garantie sombre" id="garantie">
  <div class="conteneur garantie-grille">
    <div class="garantie-texte">
      <p class="surtitre">${c.t('accueil.garantie.surtitre')}</p>
      <h2 class="garantie-titre" data-anime="lignes"><span class="garantie-chiffre">${c.t('accueil.garantie.chiffre')}</span> ${c.t('accueil.garantie.titre')}</h2>
      <p class="garantie-phrase" data-anime>${c.t('accueil.garantie.texte')}</p>
      <p data-anime>${c.t('accueil.garantie.engagements')}</p>
    </div>
    <div class="placard" data-effet="charniere" data-grille="manipuler">
      ${c.media({ nom: 'grok/charniere', alt: 'Charnière d’une porte de placard laquée noire entrouverte', classe: 'placard-media', sizes: '(max-width: 760px) 90vw, 46vw' })}
      <button type="button" class="placard-porte" data-porte aria-pressed="false" aria-label="${c.s('accueil.garantie.porte')}"><i></i><span class="placard-indice" aria-hidden="true">${c.t('accueil.garantie.porteIndice')}</span></button>
    </div>
  </div>
</section>

<section class="showroom-accueil" id="showroom">
  <div class="conteneur showroom-grille">
    <div class="showroom-tete">
      <p class="surtitre">${c.t('accueil.showroom.surtitre')}</p>
      ${titre(c, 'accueil.showroom.titre')}
      <p data-anime>${c.t('accueil.showroom.texte')}</p>
      ${statut(c)}
    </div>
    ${cadran(c)}
    <ul class="choix" data-anime="cascade">
      <li class="choix-carte"><p class="choix-titre">${c.t('accueil.showroom.tel')}</p><p>${c.t('accueil.showroom.telTexte')}</p><a class="lien-fleche" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></li>
      <li class="choix-carte choix-carte--prefere"><p class="choix-titre">${c.t('accueil.showroom.visite')}</p><p>${c.t('accueil.showroom.visiteTexte')}</p>${c.lien('showroom', { ancre: 'rendez-vous', params: 'mode=showroom', classe: 'lien-fleche', texte: c.t('accueil.showroom.visiteLien') })}</li>
      <li class="choix-carte"><p class="choix-titre">${c.t('accueil.showroom.formulaire')}</p><p>${c.t('accueil.showroom.formulaireTexte')}</p>${c.lien('showroom', { ancre: 'rendez-vous', classe: 'lien-fleche', texte: c.t('accueil.showroom.formulaireLien') })}</li>
    </ul>
  </div>
</section>


`;
};

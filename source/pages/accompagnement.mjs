/* L'accompagnement : très grand titre puis bande d'image, frise des quatre étapes (images, 3D en traits), engagements,
   garantie et porte qui s'entrouvre, histoire de Perene à NAVA (façade dessinée, presse), appel final. */
import { html } from '../../outils/gabarit.mjs';
import { titre, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'accompagnement', fichier: 'accompagnement', imagePartage: 'grok/matieres-1280.webp' };

/* Étape 3 « Projetez-vous » : un îlot dessiné en perspective, trait par trait (data-fx="trace"). */
const ilotTrace = (c) => html`<figure class="etape-visuel etape-trace" data-visuel role="img" aria-label="${c.s('etapes.e3Visuel')}">
  <svg viewBox="0 0 400 290" aria-hidden="true" data-fx="trace" focusable="false">
    <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">
      <path d="M70 150 L230 205 L340 160 L180 112 Z"/>
      <path d="M70 150 L70 165 L230 220 L230 205"/><path d="M230 220 L340 175 L340 160"/>
      <path d="M78 165 L78 228 L226 278"/><path d="M226 222 L226 262"/>
      <path d="M126 182 L126 244"/><path d="M178 199 L178 261"/>
      <path d="M100 196 L110 199"/><path d="M150 213 L160 216"/><path d="M200 230 L210 233"/>
      <path d="M232 222 L232 262 L336 218 L336 176"/>
      <path d="M262 150 Q 262 128 280 128 L 280 140"/><path d="M250 145 L292 157 L306 151 L264 139 Z"/>
    </g>
    <g stroke="currentColor" stroke-width=".6" opacity=".45"><path d="M20 270 L380 140"/><path d="M40 110 L380 240"/></g>
  </svg>
</figure>`;

export default (c) => html`
<section class="ouv ouv--bande" id="debut">
  <div class="conteneur ouv-bande-tete">
    <p class="surtitre" data-anime="gsap">${c.t('accompagnement.etapes.surtitre')}</p>
    <h1 class="ouv-titre ouv-titre--geant" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('accompagnement.titre')}</span></span><span class="ligne-masque"><span class="ouv-ligne"><em>${c.t('accompagnement.titreAccent')}</em></span></span></h1>
    <div class="ouv-bande-ligne">
      <p class="ouv-intro" data-anime="gsap">${c.t('accompagnement.texte')}</p>
      <p class="actions" data-anime="gsap">${c.lien('showroom', { ancre: 'rendez-vous', params: 'mode=showroom', classe: 'bouton', texte: c.t('accompagnement.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="info-cle" data-info-cle>${c.t('accompagnement.info')}</span></p>
    </div>
  </div>
  ${c.media({ nom: 'grok/matieres', alt: 'Échantillons de chêne, terrazzo, laque noire et laiton posés sur une table', cadrage: '55% 50%', priorite: true, classe: 'ouv-bande-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10" data-iris-centre' })}
</section>

<section class="frise-section" id="etapes" aria-labelledby="etapes-titre">
  <div class="conteneur">
    <div class="section-tete">${titre(c, 'accompagnement.etapes.titre', { id: 'etapes-titre' })}</div>
    <ol class="frise" data-frise data-effet="frise">
      <span class="frise-trait" aria-hidden="true"><span></span></span>
      <li class="frise-etape" id="cafe"><div class="frise-texte"><p class="frise-num">01</p><h3>${c.t('etapes.e1')}</h3><p>${c.t('etapes.e1t')}</p></div>${c.media({ nom: 'grok/etape-cafe', alt: 'Deux tasses de café sur une table en chêne, à côté d’échantillons de matières', classe: 'etape-visuel', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-anime="rideau"' })}</li>
      <li class="frise-etape" id="imaginer"><div class="frise-texte"><p class="frise-num">02</p><h3>${c.t('etapes.e2')}</h3><p>${c.t('etapes.e2t')}</p></div>${c.media({ nom: 'grok/etape-croquis', alt: 'Plan de cuisine dessiné au crayon sur papier calque, règle et échantillons', classe: 'etape-visuel', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-anime="rideau"' })}</li>
      <li class="frise-etape" id="projeter"><div class="frise-texte"><p class="frise-num">03</p><h3>${c.t('etapes.e3')}</h3><p>${c.t('etapes.e3t')}</p></div>${ilotTrace(c)}</li>
      <li class="frise-etape" id="poser"><div class="frise-texte"><p class="frise-num">04</p><h3>${c.t('etapes.e4')}</h3><p>${c.t('etapes.e4t')}</p></div>${c.media({ nom: 'grok/etape-pose', alt: 'Niveau à bulle posé sur un plan de travail en chêne fraîchement installé', classe: 'etape-visuel', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-anime="rideau"' })}</li>
    </ol>
  </div>
</section>

<section class="engagements" id="engagements" aria-labelledby="engagements-titre">
  <div class="conteneur engagements-grille">
    ${c.media({ nom: 'meuble-tv-claustra', alt: 'Séjour avec meuble TV bas et mur en tasseaux de bois', classe: 'engagements-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
    <div>
      <h2 id="engagements-titre" data-anime="lignes">${c.t('accompagnement.engagements.titre')}</h2>
      <ul class="engagements-liste" data-anime="cascade">
        ${[1, 2, 3].map((n) => html`<li><p class="engagement-titre">${c.t('accompagnement.engagements.e' + n)}</p><p>${c.t('accompagnement.engagements.e' + n + 't')}</p></li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="garantie sombre" id="garantie">
  <div class="conteneur garantie-grille">
    <div class="garantie-texte">
      <p class="surtitre">${c.t('accueil.garantie.surtitre')}</p>
      <h2 class="garantie-titre" data-anime="lignes"><span class="garantie-chiffre">${c.t('accueil.garantie.chiffre')}</span> ${c.t('accueil.garantie.titre')}</h2>
      <p class="garantie-phrase" data-anime>${c.t('accueil.garantie.texte')}</p>
    </div>
    <div class="placard" data-effet="charniere">
      ${c.media({ nom: 'grok/charniere', alt: 'Charnière d’une porte de placard laquée noire entrouverte', classe: 'placard-media', sizes: '(max-width: 760px) 90vw, 46vw' })}
      <span class="placard-porte" aria-hidden="true"><i></i></span>
    </div>
  </div>
</section>

<section class="histoire" id="histoire">
  <div class="conteneur histoire-grille">
    <div>
      <p class="surtitre">${c.t('accompagnement.histoire.surtitre')}</p>
      ${titre(c, 'accompagnement.histoire.titre')}
      <p data-anime>${c.t('accompagnement.histoire.texte')}</p>
      <p data-anime>${c.t('accompagnement.histoire.texte2')}</p>
      <blockquote class="histoire-citation" data-anime><p>«&nbsp;${c.t('accompagnement.histoire.citation')}&nbsp;»</p></blockquote>
      <p class="surtitre presse-sur">${c.t('accueil.presse.titre')}</p>
      <ul class="presse-logos" data-anime="cascade">
        <li>${c.media({ nom: 'presse-forbes', alt: 'Forbes', classe: 'presse-logo', sizes: '96px' })}</li>
        <li>${c.media({ nom: 'presse-lyon-people', alt: 'Lyon People', classe: 'presse-logo', sizes: '96px' })}</li>
        <li>${c.media({ nom: 'presse-lyon-capitale', alt: 'Lyon Capitale', classe: 'presse-logo', sizes: '96px' })}</li>
      </ul>
    </div>
    ${c.media({ nom: 'facade-showroom', alt: 'Dessin de la façade du showroom Faure Agencement', classe: 'histoire-dessin', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${fin(c, {
  titreCle: 'accompagnement.fin', texteCle: 'accompagnement.finTexte', image: 'dressing-chambre', alt: 'Chambre avec dressing intégré blanc du sol au plafond',
  action: c.lien('showroom', { ancre: 'rendez-vous', params: 'mode=showroom', classe: 'bouton', texte: c.t('accompagnement.finAction'), attrs: 'data-survol="magnetique"' }),
})}
`;

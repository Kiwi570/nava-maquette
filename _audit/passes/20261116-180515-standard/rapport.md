# Rapport d’audit

Projet : `nava` · 16/11/2026 19:22:37 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **79 échec(s)**
- Passe : `20261116-180515-standard` · version ?v=1
- Échecs : **79**
- À regarder : **40**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > div.ouv-statut > p.statut « Showroom fermé · ouvre demain à 10 h » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > div.ouv-statut > p.statut « Showroom à Ternay, du lundi au samedi » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/realisations` — section#debut > div.ouv-plein-texte.conteneur > p.info-cle:nth-of-type(4) « 100 % authentique : toutes ces photos viennent de  » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-grille > div.ouv-texte:nth-of-type(1) > div > p.statut « Showroom fermé · ouvre demain à 10 h » _(320×568 normal, 844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-grille > div.ouv-texte:nth-of-type(1) > div > p.statut « Showroom à Ternay, du lundi au samedi » _(320×568 sansJs)_

### texte coupé (13)

- **texte coupé** — `/` — div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Cuisiniste » — coupé par section#debut > div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) « Cuisiniste » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « sur-mesure » — coupé par section#debut > div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « sur-mesure » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/` — ul.mosaique > li.mosaique-tuile.mosaique-tuile--1:nth-of-type(1) > a > span.mosaique-legende « Évier noir intégré » — coupé par section#realisations « 100 % AUTHENTIQUE Notre savoir-faire en images Tou » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/404` — div.ouv-404-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Ce tiroir » — coupé par section#debut > div.ouv-404-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(1) « Ce tiroir » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/404` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « est vide » — coupé par section#debut > div.ouv-404-texte > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « est vide » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/accompagnement` — div.conteneur.ouv-bande-tete > h1.ouv-titre.ouv-titre--geant > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « De l'idée » — coupé par section#debut > div.conteneur.ouv-bande-tete > h1.ouv-titre.ouv-titre--geant > span.ligne-masque:nth-of-type(1) « De l'idée » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/accompagnement` — h1.ouv-titre.ouv-titre--geant > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « à la pose » — coupé par section#debut > div.conteneur.ouv-bande-tete > h1.ouv-titre.ouv-titre--geant > span.ligne-masque:nth-of-type(2) « à la pose » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/realisations` — div.ouv-plein-texte.conteneur > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Nos » — coupé par section#debut > div.ouv-plein-texte.conteneur > h1.ouv-titre > span.ligne-masque:nth-of-type(1) « Nos » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/realisations` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « réalisations » — coupé par section#debut > div.ouv-plein-texte.conteneur > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « réalisations » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/savoir-faire` — div.ouv-texte > h1.ouv-titre.ouv-titre--moyen > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Cinq savoir-faire, » — coupé par section#debut > div.ouv-texte > h1.ouv-titre.ouv-titre--moyen > span.ligne-masque:nth-of-type(1) « Cinq savoir-faire, » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/savoir-faire` — h1.ouv-titre.ouv-titre--moyen > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « un même soin » — coupé par section#debut > div.ouv-texte > h1.ouv-titre.ouv-titre--moyen > span.ligne-masque:nth-of-type(2) « un même soin » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/showroom` — div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Prenons » — coupé par div.conteneur.ouv-cafe-grille > div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) « Prenons » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/showroom` — h1.ouv-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne > em « un café » — coupé par div.conteneur.ouv-cafe-grille > div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(2) « un café » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### textes qui se chevauchent (39)

- **textes qui se chevauchent** — `/` — p.sceau > svg.sceau-anneau > text > textpath — avec div.ouv-visuel:nth-of-type(2) > p.sceau > span.sceau-centre:nth-of-type(2) > strong « 10 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — p.sceau > svg.sceau-anneau > text > textpath — avec div.ouv-visuel:nth-of-type(2) > p.sceau > span.sceau-centre:nth-of-type(2) > span « ANS » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — div.ouv-visuel:nth-of-type(2) > p.sceau > span.sceau-centre:nth-of-type(2) > strong « 10 » — avec div.ouv-visuel:nth-of-type(2) > p.sceau > span.sceau-centre:nth-of-type(2) > span « ANS » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > span.chiffre-avant « PLUS DE » — avec ul.chiffres-liste.fx-fini > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > strong « 2 000 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > span.chiffre-avant:nth-of-type(1) « PLUS DE » — avec ul.chiffres-liste.fx-fini > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > strong « 20 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre > span.garantie-chiffre « 10 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre « 10 ans de garantie » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(1) « Mentions légales (à compléter) » — avec span#confidentialite « Politique de confidentialité (à compléter) » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > strong « 2 000 » — avec div.chiffres-bloc:nth-of-type(2) > ul.chiffres-liste.fx-fini > li:nth-of-type(1) > p.chiffre-texte:nth-of-type(2) « projets réalisés, tous uniques, tous pensés pour d » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(2) > p.chiffre:nth-of-type(1) > strong « 10 » — avec div.chiffres-bloc:nth-of-type(2) > ul.chiffres-liste.fx-fini > li:nth-of-type(2) > p.chiffre-texte:nth-of-type(2) « de garantie sur tous nos meubles » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > strong « 20 » — avec div.chiffres-bloc:nth-of-type(2) > ul.chiffres-liste.fx-fini > li:nth-of-type(3) > p.chiffre-texte:nth-of-type(2) « à Ternay, de Perene à NAVA » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.surtitre.ouv-sur:nth-of-type(1) « TERNAY · CUISINES, BAINS, DRESSINGS » — avec div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Cuisiniste » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > span.chiffre-avant « PLUS DE » — avec ul.chiffres-liste > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > strong « 2 000 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > strong « 2 000 » — avec div.chiffres-bloc:nth-of-type(2) > ul.chiffres-liste > li:nth-of-type(1) > p.chiffre-texte:nth-of-type(2) « projets réalisés, tous uniques, tous pensés pour d » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste > li:nth-of-type(2) > p.chiffre:nth-of-type(1) > strong « 10 » — avec div.chiffres-bloc:nth-of-type(2) > ul.chiffres-liste > li:nth-of-type(2) > p.chiffre-texte:nth-of-type(2) « de garantie sur tous nos meubles » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > span.chiffre-avant:nth-of-type(1) « PLUS DE » — avec ul.chiffres-liste > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > strong « 20 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — ul.chiffres-liste > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > strong « 20 » — avec div.chiffres-bloc:nth-of-type(2) > ul.chiffres-liste > li:nth-of-type(3) > p.chiffre-texte:nth-of-type(2) « à Ternay, de Perene à NAVA » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(1) « Mentions légales (à compléter) » — avec span#confidentialite « Politique de confidentialité (à compléter) » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/accompagnement` — li#cafe > div.frise-texte > p.frise-num:nth-of-type(1) « 01 » — avec li#cafe > div.frise-texte > h3 « Prenons un café » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/accompagnement` — li#imaginer > div.frise-texte > p.frise-num:nth-of-type(1) « 02 » — avec li#imaginer > div.frise-texte > h3 « Imaginons ensemble » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/accompagnement` — li#projeter > div.frise-texte > p.frise-num:nth-of-type(1) « 03 » — avec li#projeter > div.frise-texte > h3 « Projetez-vous » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/accompagnement` — li#poser > div.frise-texte > p.frise-num:nth-of-type(1) « 04 » — avec li#poser > div.frise-texte > h3 « Place au concret » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/accompagnement` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre > span.garantie-chiffre « 10 » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/accompagnement` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre « 10 ans de garantie » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/accompagnement` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(1) « Mentions légales (à compléter) » — avec span#confidentialite « Politique de confidentialité (à compléter) » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/accompagnement` — section#debut > div.conteneur.ouv-bande-tete > div.ouv-bande-ligne > p.ouv-intro:nth-of-type(1) « Un accompagnement de la conception à la pose, avec » — avec div.conteneur.ouv-bande-tete > div.ouv-bande-ligne > p.actions:nth-of-type(2) > a.bouton « Commencer par un café » _(768×1024 normal)_
- **textes qui se chevauchent** — `/accompagnement` — section#debut > div.conteneur.ouv-bande-tete > p.surtitre « ÉTAPE PAR ÉTAPE » — avec div.conteneur.ouv-bande-tete > h1.ouv-titre.ouv-titre--geant > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « De l'idée » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/realisations` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(1) « Mentions légales (à compléter) » — avec span#confidentialite « Politique de confidentialité (à compléter) » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/realisations` — section#debut > div.ouv-plein-texte.conteneur > p.surtitre:nth-of-type(1) « 100 % AUTHENTIQUE » — avec div.ouv-plein-texte.conteneur > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Nos » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/savoir-faire` — section#cuisine > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 01 » — avec h2#t-cuisine « Cuisine sur mesure » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#salle-de-bain > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 02 » — avec h2#t-salle-de-bain « Salle de bain » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#dressing > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 03 » — avec h2#t-dressing « Dressing intégré » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#renovation > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 04 » — avec h2#t-renovation « Rénovation » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#meuble-tv > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 05 » — avec h2#t-meuble-tv « Meuble TV » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(1) « Mentions légales (à compléter) » — avec span#confidentialite « Politique de confidentialité (à compléter) » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/savoir-faire` — section#debut > div.ouv-texte > p.surtitre:nth-of-type(1) « SAVOIR-FAIRE » — avec div.ouv-texte > h1.ouv-titre.ouv-titre--moyen > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Cinq savoir-faire, » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/showroom` — div.conteneur.ouv-cafe-grille > div.ouv-cafe-visuel:nth-of-type(2) > figure.media.ouv-cafe-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — avec div.ouv-cafe-visuel:nth-of-type(2) > figure.cadran.cadran--flottant:nth-of-type(2) > figcaption > span:nth-of-type(2) « Du lundi au samedi » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/showroom` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) > span:nth-of-type(1) « Mentions légales (à compléter) » — avec span#confidentialite « Politique de confidentialité (à compléter) » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/showroom` — section#debut > div.conteneur.ouv-cafe-grille > div.ouv-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « SHOWROOM & CONTACT » — avec div.ouv-texte:nth-of-type(1) > h1.ouv-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Prenons » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### contraste insuffisant (6)

- **contraste insuffisant** — `/` — section#reperes > div.conteneur.reperes-grille > div.presse:nth-of-type(1) > p.surtitre « ILS PARLENT DE NOUS » — 4.47:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > span.chiffre-avant « PLUS DE » — 4.47:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/` — ul.chiffres-liste.fx-fini > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > span.chiffre-avant:nth-of-type(1) « PLUS DE » — 4.47:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.showroom-grille > figure.cadran > figcaption > span.cadran-titre:nth-of-type(1) « HORAIRES DU SHOWROOM » — 4.47:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — ul.chiffres-liste > li:nth-of-type(1) > p.chiffre:nth-of-type(1) > span.chiffre-avant « PLUS DE » — 4.47:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ul.chiffres-liste > li:nth-of-type(3) > p.chiffre:nth-of-type(1) > span.chiffre-avant:nth-of-type(1) « PLUS DE » — 4.47:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### élément sans nom accessible (6)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/accompagnement` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/realisations` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/savoir-faire` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/showroom` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .presse > .surtitre ; li:nth-child(1) > .chiffre > .chiffre-avant ; li:nth-child(3) > .chiffre > .chiffre-avant — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/` — div.citation-cote > figure.media.citation-media > picture > img « Évier inox sous plan sombre, robinet bronze et pla » — evier-inox (4/5, faible, 34 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/404` — section#debut > figure.media.ouv-404-media > picture > img « Tiroir de cuisine ouvert et vide, une seule cuillè » — grok/404 (3/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/realisations` — div.conteneur.fin-grille > figure.media.fin-media > picture > img « Évier noir intégré et robinet noir sur un plan som » — evier-noir (4/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### image non chargée (1)

- **image non chargée** — `/realisations` — main#contenu > dialog.visionneuse > figure > img — http://127.0.0.1:42379/realisations _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### contraste sur image (2)

- **contraste sur image** — `/realisations` — section#debut > div.ouv-plein-texte.conteneur > p.surtitre:nth-of-type(1) « 100 % AUTHENTIQUE » — 3.61:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/realisations` — section#debut > div.ouv-plein-texte.conteneur > p.ouv-intro.masque-ecran-tres-bas:nth-of-type(2) « Cuisines, salles de bain, dressings et séjours : u » — 3.79:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### lien profond (1)

- **lien profond** — `/ → /realisations#r-evier-noir` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_

### positions non recalculées après un changement de hauteur (2)

- **positions non recalculées après un changement de hauteur** — `/` — 01Cuisine sur mesureUne vraie pièce à vi — décalage de 25 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/` — 02Salle de bainClé en main, un cocon de  — décalage de 147 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `showroom.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (28)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.surtitre.ouv-sur:nth-of-type(1) « TERNAY · CUISINES, BAINS, DRESSINGS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#reperes > div.conteneur.reperes-grille > div.presse:nth-of-type(1) > p.surtitre « ILS PARLENT DE NOUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#prestations > div.conteneur > div.ofr__tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « NOS PRESTATIONS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#methode > div.o3d__cadre.conteneur > div.o3d__texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « ÉTAPE PAR ÉTAPE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#realisations > div.conteneur > div.section-tete > p.surtitre:nth-of-type(1) « 100 % AUTHENTIQUE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.garantie-grille > div.placard:nth-of-type(2) > figure.media.placard-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#showroom > div.conteneur.showroom-grille > div.showroom-tete > p.surtitre:nth-of-type(1) « TROIS CHOIX, UN PROJET EN COMMUN » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.showroom-grille > figure.cadran > figcaption > span.cadran-titre:nth-of-type(1) « HORAIRES DU SHOWROOM » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — section#debut > div.conteneur.ouv-bande-tete > p.surtitre « ÉTAPE PAR ÉTAPE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — section#debut > figure.media.ouv-bande-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — li#cafe > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — li#imaginer > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — li#poser > figure.media.etape-visuel > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — div.conteneur.garantie-grille > div.placard:nth-of-type(2) > figure.media.placard-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — section#histoire > div.conteneur.histoire-grille > div > p.surtitre:nth-of-type(1) « QUI SOMMES-NOUS ? » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/accompagnement` — section#histoire > div.conteneur.histoire-grille > div > p.surtitre.presse-sur:nth-of-type(4) « ILS PARLENT DE NOUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/realisations` — section#debut > div.ouv-plein-texte.conteneur > p.surtitre:nth-of-type(1) « 100 % AUTHENTIQUE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/savoir-faire` — section#debut > div.ouv-texte > p.surtitre:nth-of-type(1) « SAVOIR-FAIRE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/savoir-faire` — section#matieres > figure.media.matieres-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/savoir-faire` — section#matieres > div.conteneur.matieres-texte > p.surtitre:nth-of-type(1) « IMAGINONS ENSEMBLE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/showroom` — section#debut > div.conteneur.ouv-cafe-grille > div.ouv-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « SHOWROOM & CONTACT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/showroom` — div.conteneur.ouv-cafe-grille > div.ouv-cafe-visuel:nth-of-type(2) > figure.media.ouv-cafe-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 3 autres (rapport.json)

### typographie française (2)

- **typographie française** — `/` — section#citation > div.conteneur.citation-grille > blockquote.citation-bloc > p.citation-texte « « Chez NAVA, nous ne faisons pas que rénover. Nous » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/accompagnement` — div.conteneur.histoire-grille > div > blockquote.histoire-citation > p « « Chaque projet raconte une histoire… Nous en avon » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### photo moyenne affichée en très grand (2)

- **photo moyenne affichée en très grand** — `/accompagnement` — div.conteneur.engagements-grille > figure.media.engagements-media > picture > img « Cuisine aux meubles hauts noirs, bar et tabourets, » — cuisine-bar-noire (3/5, 65 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/accompagnement` — div.conteneur.engagements-grille > figure.media.engagements-media > picture > img « Cuisine aux meubles hauts noirs, bar et tabourets, » — cuisine-bar-noire (3/5, 48 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/realisations` — à 84 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_
- **retour avant : changement brusque** — `/realisations` — à 96 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/realisations` — écran différent à la même position après rechargement (5.3 %), voir comparaisons/rechargement-realisations-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 36 min de travail pour 115 min de budget, 27 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /accompagnement, /realisations, /savoir-faire, /showroom.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2486 ms depuis le premier octet
- Ouverture /accompagnement (1366×768) : 2417 ms depuis le premier octet
- Ouverture /realisations (1366×768) : 2462 ms depuis le premier octet
- Ouverture /savoir-faire (1366×768) : 2466 ms depuis le premier octet
- Ouverture /showroom (1366×768) : 2403 ms depuis le premier octet
- Ouverture / (390×844) : 2442 ms depuis le premier octet
- Ouverture /accompagnement (390×844) : 2407 ms depuis le premier octet
- Ouverture /realisations (390×844) : 2425 ms depuis le premier octet
- Ouverture /savoir-faire (390×844) : 2402 ms depuis le premier octet
- Ouverture /showroom (390×844) : 2429 ms depuis le premier octet
- Bords de l’écran : 305 images d’intro, 16 de voile et 130 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /accompagnement : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /savoir-faire : aucune section épinglée ou plein écran.
- Tient dans l'écran /showroom : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 447, tâche la plus longue 87 ms
- Fluidité /accompagnement 1366×768 (molette) : 0 % d'images lentes sur 342, tâche la plus longue 0 ms
- Fluidité /realisations 1366×768 (molette) : 0 % d'images lentes sur 239, tâche la plus longue 0 ms
- Fluidité /savoir-faire 1366×768 (molette) : 0 % d'images lentes sur 341, tâche la plus longue 0 ms
- Fluidité /showroom 1366×768 (molette) : 0 % d'images lentes sur 127, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /accompagnement 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /realisations 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /savoir-faire 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /showroom 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.92 s de calcul au chargement (téléphone ralenti).
- Vitesse /accompagnement : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /realisations : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /savoir-faire : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /showroom : 0.49 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```

# Rapport d’audit

Projet : `nava` · 16/11/2026 19:52:23 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **19 échec(s)**
- Passe : `20261116-183452-standard` · version ?v=1
- Échecs : **19**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (4), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-180515-standard | standard | toutes | toutes | 79 | 40 | 1 | échecs |
| 20261116-182438-standard-partiel | standard | toutes | fichiers, mesures, parcours | 17 | 4 | 0 | échecs |
| **20261116-183452-standard** (celle-ci) | standard | toutes | toutes | 19 | 10 | 1 | échecs |

## Échecs

### contraste insuffisant (4)

- **contraste insuffisant** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(4) > span.facade-piece-nom > small « 04 » — 1.28:1 (minimum 4.5:1) _(320×568 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/savoir-faire` — section#debut > nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(4) > span.facade-piece-nom « 04 Rénovation » — 1.00:1 (minimum 4.5:1) _(320×568 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(5) > span.facade-piece-nom > small « 05 » — 1.28:1 (minimum 4.5:1) _(320×568 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/savoir-faire` — section#debut > nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(5) > span.facade-piece-nom « 05 Meuble TV » — 1.00:1 (minimum 4.5:1) _(320×568 normal, 320×568 sansJs)_

### contraste sur image (11)

- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(2) > span.facade-piece-nom > small « 02 » — 1.36:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — section#debut > nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(2) > span.facade-piece-nom « 02 Salle de bain » — 1.67:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(3) > span.facade-piece-nom > small « 03 » — 1.68:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — section#debut > nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(3) > span.facade-piece-nom « 03 Dressing intégré » — 1.33:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(4) > span.facade-piece-nom > small « 04 » — 1.22:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — section#debut > nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(4) > span.facade-piece-nom « 04 Rénovation » — 1.86:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(5) > span.facade-piece-nom > small « 05 » — 1.21:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — section#debut > nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(5) > span.facade-piece-nom « 05 Meuble TV » — 1.60:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(2) > span.facade-piece-nom > small « 02 » — 3.94:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(3) > span.facade-piece-nom > small « 03 » — 2.72:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/savoir-faire` — nav.facades-pieces.conteneur > a.facade-piece:nth-of-type(5) > span.facade-piece-nom > small « 05 » — 4.18:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-cadre > div.ouv-cafe-carte > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(320×568 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-cadre > div.ouv-cafe-carte > div > p.statut « Showroom fermé · ouvre demain à 10 h » _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-cadre > div.ouv-cafe-carte > div > p.statut « Showroom à Ternay, du lundi au samedi » _(390×844 sansJs, 320×568 sansJs)_

### positions non recalculées après un changement de hauteur (1)

- **positions non recalculées après un changement de hauteur** — `/` — 01Cuisine sur mesureUne vraie pièce à vi — décalage de 18 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `showroom.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (2)

- **texte de contenu sous 13 px (ordinateur)** — `/showroom` — div > dl.acces-liste.fx-fini > div:nth-of-type(1) > dt « HORAIRES DU SHOWROOM » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/showroom` — div > dl.acces-liste > div:nth-of-type(1) > dt « HORAIRES DU SHOWROOM » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/realisations` — à 85 ms (différence 27 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/realisations` — à 66 ms (différence 37 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 73 ms (différence 53 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

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
- Ouverture / (1366×768) : 2485 ms depuis le premier octet
- Ouverture /accompagnement (1366×768) : 2398 ms depuis le premier octet
- film de l'ouverture /accompagnement 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /realisations (1366×768) : 2430 ms depuis le premier octet
- Ouverture /savoir-faire (1366×768) : 2506 ms depuis le premier octet
- Ouverture /showroom (1366×768) : 2426 ms depuis le premier octet
- film de l'ouverture /showroom 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2465 ms depuis le premier octet
- Ouverture /accompagnement (390×844) : 2397 ms depuis le premier octet
- film de l'ouverture /accompagnement 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /realisations (390×844) : 2396 ms depuis le premier octet
- Ouverture /savoir-faire (390×844) : 2541 ms depuis le premier octet
- Ouverture /showroom (390×844) : 2414 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 328 images d’intro, 10 de voile et 131 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /accompagnement : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /savoir-faire : aucune section épinglée ou plein écran.
- Tient dans l'écran /showroom : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 444, tâche la plus longue 79 ms
- Fluidité /accompagnement 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité /realisations 1366×768 (molette) : 0 % d'images lentes sur 241, tâche la plus longue 0 ms
- Fluidité /savoir-faire 1366×768 (molette) : 0 % d'images lentes sur 345, tâche la plus longue 0 ms
- Fluidité /showroom 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /accompagnement 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /realisations 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /savoir-faire 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /showroom 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Vitesse / : 0.63 s de calcul au chargement (téléphone ralenti).
- Vitesse /accompagnement : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /realisations : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /savoir-faire : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /showroom : 0.52 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/savoir-faire,/showroom --seulement=fichiers,mesures,parcours
```

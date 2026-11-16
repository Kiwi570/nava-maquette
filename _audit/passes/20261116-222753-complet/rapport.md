# Rapport d’audit

Projet : `nava` · 16/11/2026 23:50:04 · 22 min · 6 page(s) · audit complet

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261116-222753-complet` · version ?v=2
- Échecs : **4**
- À regarder : **6**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), filtres et visionneuse (1), tiroirs et porte du placard (1), rendez-vous en trois étapes (1), statut du showroom le dimanche (1), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /showroom |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — div.ofr__visuels > figure.ofr__visuel.est-actif:nth-of-type(1) > picture > img — plan-terrazzo (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/savoir-faire` — div.piece-images:nth-of-type(1) > figure.media.piece-media:nth-of-type(1) > picture > img « Plan de travail en terrazzo, évier inox et mur vég » — plan-terrazzo (4/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### ancre introuvable (1)

- **ancre introuvable** — `/` — Cuisine noir mat — /realisations#r-cuisine-noire-arche

### visionneuse (1)

- **visionneuse** — `/realisations` — le lien /realisations#r-evier-noir n’ouvre pas la photo _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `showroom.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/realisations` — à 78 ms (différence 27 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/realisations` — à 70 ms (différence 37 %) (films/retour-avant-390.png) _(390×844 retour avant)_

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

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 18 min de travail pour 20 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2505 ms depuis le premier octet
- Ouverture /accompagnement (1366×768) : 2398 ms depuis le premier octet
- Ouverture /realisations (1366×768) : 2513 ms depuis le premier octet
- Ouverture /savoir-faire (1366×768) : 2545 ms depuis le premier octet
- Ouverture /showroom (1366×768) : 2421 ms depuis le premier octet
- Ouverture / (390×844) : 2444 ms depuis le premier octet
- Ouverture /accompagnement (390×844) : 2397 ms depuis le premier octet
- Ouverture /realisations (390×844) : 2442 ms depuis le premier octet
- film de l'ouverture /realisations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /savoir-faire (390×844) : 2529 ms depuis le premier octet
- Ouverture /showroom (390×844) : 2424 ms depuis le premier octet
- Bords de l’écran : 280 images d’intro, 10 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /accompagnement : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /savoir-faire : aucune section épinglée ou plein écran.
- Tient dans l'écran /showroom : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 358, tâche la plus longue 71 ms
- Fluidité /accompagnement 1366×768 (molette) : 0 % d'images lentes sur 354, tâche la plus longue 0 ms
- Fluidité /realisations 1366×768 (molette) : 0 % d'images lentes sur 245, tâche la plus longue 0 ms
- Fluidité /savoir-faire 1366×768 (molette) : 0 % d'images lentes sur 349, tâche la plus longue 0 ms
- Fluidité /showroom 1366×768 (molette) : 0 % d'images lentes sur 141, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1446, tâche la plus longue 56 ms
- Fluidité /accompagnement 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /realisations 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /savoir-faire 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /showroom 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Vitesse / : 0.90 s de calcul au chargement (téléphone ralenti).
- Vitesse /accompagnement : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /realisations : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /savoir-faire : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /showroom : 0.49 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/savoir-faire,/realisations --seulement=fichiers,mesures,parcours
```

# Rapport d’audit

Projet : `nava` · 16/11/2026 19:30:33 · 6 min · 6 page(s) · audit standard (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **17 échec(s)**
- Passe : `20261116-182438-standard-partiel` · version ?v=1
- Échecs : **17**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-180515-standard | standard | toutes | toutes | 79 | 40 | 1 | échecs |
| **20261116-182438-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, parcours | 17 | 4 | 0 | échecs |

## Échecs

### textes qui se chevauchent (14)

- **textes qui se chevauchent** — `/` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre > span.garantie-chiffre « 10 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre « 10 ans de garantie » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/accompagnement` — li#cafe > div.frise-texte > p.frise-num:nth-of-type(1) « 01 » — avec li#cafe > div.frise-texte > h3 « Prenons un café » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/accompagnement` — li#imaginer > div.frise-texte > p.frise-num:nth-of-type(1) « 02 » — avec li#imaginer > div.frise-texte > h3 « Imaginons ensemble » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/accompagnement` — li#projeter > div.frise-texte > p.frise-num:nth-of-type(1) « 03 » — avec li#projeter > div.frise-texte > h3 « Projetez-vous » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/accompagnement` — li#poser > div.frise-texte > p.frise-num:nth-of-type(1) « 04 » — avec li#poser > div.frise-texte > h3 « Place au concret » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/accompagnement` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre > span.garantie-chiffre « 10 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/accompagnement` — section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA QUALITÉ NAVA » — avec section#garantie > div.conteneur.garantie-grille > div.garantie-texte:nth-of-type(1) > h2.garantie-titre « 10 ans de garantie » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/savoir-faire` — section#cuisine > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 01 » — avec h2#t-cuisine « Cuisine sur mesure » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#salle-de-bain > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 02 » — avec h2#t-salle-de-bain « Salle de bain » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#dressing > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 03 » — avec h2#t-dressing « Dressing intégré » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#renovation > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 04 » — avec h2#t-renovation « Rénovation » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/savoir-faire` — section#meuble-tv > div.conteneur.piece-grille > div.piece-texte:nth-of-type(2) > p.piece-num:nth-of-type(1) « 05 » — avec h2#t-meuble-tv « Meuble TV » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/showroom` — div.conteneur.ouv-cafe-grille > div.ouv-cafe-visuel:nth-of-type(2) > figure.media.ouv-cafe-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — avec div.ouv-cafe-visuel:nth-of-type(2) > figure.cadran.cadran--flottant:nth-of-type(2) > figcaption > span:nth-of-type(2) « Du lundi au samedi » _(320×568 normal, 320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/` — ul.mosaique > li.mosaique-tuile.mosaique-tuile--1:nth-of-type(1) > a > span.mosaique-legende « Évier noir intégré » — coupé par section#realisations « 100 % AUTHENTIQUE Notre savoir-faire en images Tou » _(390×844 normal, 390×844 sansWebgl)_

### lien profond (1)

- **lien profond** — `/ → /realisations#r-evier-noir` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_

### positions non recalculées après un changement de hauteur (1)

- **positions non recalculées après un changement de hauteur** — `/` — 02Salle de bainClé en main, un cocon de  — décalage de 147 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `showroom.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (2)

- **texte de contenu sous 13 px (ordinateur)** — `/showroom` — div > dl.acces-liste.fx-fini > div:nth-of-type(1) > dt « HORAIRES DU SHOWROOM » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/showroom` — div > dl.acces-liste > div:nth-of-type(1) > dt « HORAIRES DU SHOWROOM » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/realisations` — écran différent à la même position après rechargement (5.3 %), voir comparaisons/rechargement-realisations-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 36 min de travail pour 115 min de budget, 27 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /accompagnement, /realisations, /savoir-faire, /showroom.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

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

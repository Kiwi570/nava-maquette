# Rapport d’audit

Projet : `nava` · 17/11/2026 00:11:17 · 6 min · 1 page(s) · audit standard ciblé sur / (étapes : fichiers, mesures, films, bords, mouvement, fluidite, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-230530-standard-cible-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (11), balayage (1), films d’ouverture (2), films de transition (2), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), filtres et visionneuse (1), tiroirs et porte du placard (1), rendez-vous en trois étapes (1), statut du showroom le dimanche (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (10), souris immobile (1)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-222753-complet | complet | toutes | toutes | 4 | 6 | 1 | échecs |
| 20261116-225112-complet-cible-partiel | complet | /,/savoir-faire,/realisations | fichiers, mesures, parcours | 0 | 2 | 0 | complet |
| **20261116-230530-standard-cible-partiel** (celle-ci) | standard | / | fichiers, mesures, films, bords, mouvement, fluidite, parcours | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `showroom.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/realisations` — à 77 ms (différence 27 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/realisations` — à 77 ms (différence 37 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 18 min de travail pour 20 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2511 ms depuis le premier octet
- Ouverture / (390×844) : 2469 ms depuis le premier octet
- Bords de l’écran : 85 images d’intro, 3 de voile et 42 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 367, tâche la plus longue 79 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1450, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

# Rapport d’audit

Projet : `nava` · 16/11/2026 20:00:52 · 6 min · 6 page(s) · audit complet (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261116-185453-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-180515-standard | standard | toutes | toutes | 79 | 40 | 1 | échecs |
| 20261116-182438-standard-partiel | standard | toutes | fichiers, mesures, parcours | 17 | 4 | 0 | échecs |
| 20261116-183452-standard | standard | toutes | toutes | 19 | 10 | 1 | échecs |
| **20261116-185453-complet-partiel** (celle-ci) | complet | toutes | fichiers, mesures, ecran | 4 | 1 | 0 | échecs |
| 20261116-185455-standard-cible-partiel | standard | / | parcours | 0 | 1 | 0 | complet |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > div.ouv-statut > p.statut « Showroom à Ternay, du lundi au samedi » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.ouv-404-texte > p.info-cle:nth-of-type(3) « Du lundi au samedi, 10 h-12 h et 14 h-19 h » _(844×390 sansJs)_
- **premier écran : information clé hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-cadre > div.ouv-cafe-carte > div > p.statut « Showroom fermé · ouvre demain à 10 h » _(320×568 normal, 320×568 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/showroom` — div.conteneur.ouv-cafe-cadre > div.ouv-cafe-carte > div > p.statut « Showroom à Ternay, du lundi au samedi » _(320×568 sansJs, 1000×560 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `showroom.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 36 min de travail pour 115 min de budget, 27 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /accompagnement : aucune section épinglée ou plein écran.
- Tient dans l'écran /realisations : aucune section épinglée ou plein écran.
- Tient dans l'écran /savoir-faire : aucune section épinglée ou plein écran.
- Tient dans l'écran /showroom : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/showroom --seulement=fichiers,mesures
```

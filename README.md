# NAVA · maquette

Maquette du site de NAVA By Faure Agencement, cuisiniste sur-mesure à Ternay (69), d'après le site actuel www.nava.fr.
Adresse prévue : https://nava-maquette.vercel.app

Direction « Façades » : lin, sable, noir mat et chêne ; titres en Instrument Serif, texte en Manrope.
L'idée du site est le meuble : des façades qui s'ouvrent à l'arrivée, les prestations rangées en tiroirs, un îlot qui se monte en 3D au fil des quatre étapes, une porte de placard qui s'entrouvre sur la garantie, et deux portes qui se ferment entre les pages.

## Pages

- Accueil
- Réalisations : filtres par pièce, visionneuse, un lien par photo (`/realisations#r-…`)
- Savoir-faire : cuisine, salle de bain, dressing, rénovation, meuble TV (`/savoir-faire#cuisine`…)
- L'accompagnement : les quatre étapes, les engagements, la garantie, l'histoire de Perene à NAVA
- Showroom & contact : horaires en direct, rendez-vous en trois étapes (simulé), accès
- 404

Pages du site actuel non reprises, faute de contenu : Devenir partenaire, Espace pro, Recrutement, Presse & média, Blog.

## À fournir par le client (à compléter)

- Mentions légales : raison sociale, adresse du siège, SIRET, directeur de la publication, assurance décennale le cas échéant.
- Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 16 novembre 2026 dans les conditions de Vercel).
- Politique de confidentialité (formulaires de contact et de rendez-vous).
- Crédits : les illustrations marquées « Illustration générée » ont été créées par IA (Grok) ; la mention reste sur le site final.
- Ancienneté : le site actuel annonce « 25 ans d'expertise » en titre et « plus de 20 ans » sous Perene (© 2004). La maquette affiche « plus de 20 ans » : à confirmer.
- Horaires du dimanche et des jours fériés : non communiqués. Le statut « ouvert maintenant » ne s'affiche donc pas ces jours-là.
- Avis Trustpilot : le site actuel montre le logo et cinq étoiles, sans note ni nombre d'avis. Rien n'est affiché : donner la note exacte et le nombre d'avis pour les ajouter.
- Adresse e-mail de contact (le site actuel n'en publie pas).
- Page Facebook exacte (non reprise faute d'adresse fiable).
- Photos du showroom et de l'équipe, s'il y en a (aucune sur le site actuel).
- Prix : le site actuel n'en donne aucun ; la maquette indique « Sur devis ».

## Retiré du site actuel

- Photo de séjour portant un filigrane leboncoin, photo des WC, une salle de bain trop compressée, image de la plume (décor).
- Logo Trustpilot (voir plus haut).

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaire de rendez-vous simulé (le brancher sur un vrai envoi), mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Fabrication

- Textes : `donnees/textes/fr.json` ; données : `donnees/*.json` ; pages : `source/pages/*.mjs`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les pages HTML à la main).
- Images : pipeline de la bibliothèque des maquettes (`plan-images.json`, `produire.mjs`, `partage.mjs`).
- Modules repris de la bibliothèque : offre-a-tiroirs (prestations), objet-3d-qui-se-construit (îlot).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).

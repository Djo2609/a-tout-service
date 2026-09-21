# À fournir / à valider — A Tout Service

Liste de reprise pour le webdesigner et le commercial. Ce qui est marqué 🔴 bloque la mise en ligne.

## 1. Visuels

| Élément | Situation actuelle | Action |
|---|---|---|
| 🔴 Logo vectoriel (SVG/PDF/AI) | Logo récupéré sur le site actuel en PNG 336 px, fond blanc détouré automatiquement | Demander le fichier source ; le remplacer dans `assets/img/logo-ats.webp` et `logo-ats.png` |
| Photos réelles des intervenants, des agences et de l'équipe | Aucune photo client disponible | Idéalement 6 à 10 photos (avec l'accord écrit des personnes) : intervenants en situation, façade de l'agence de Monein, équipe permanente. À placer en priorité sur l'accueil, `a-propos.html` (bloc « L'équipe » laissé vide exprès) et `trouver-un-emploi.html` |
| Photos issues de Unsplash (licence gratuite, usage commercial autorisé) | Ménage, accueil, bricolage, devoirs, courses, événement, entreprise, entretien, équipe | Aucune action obligatoire. À remplacer par de vraies photos dès que possible (plus crédible) |
| 🔴 Photos « Fotolia » reprises du site actuel (repassage, jardinage, animaux) | Achetées pour l'ancien site ? Licence inconnue ; basse définition (800 px, agrandies) | Confirmer que la licence couvre le nouveau site, sinon les remplacer |
| Instagram / Facebook | Photos non extractibles automatiquement (connexion requise) | Le client peut transmettre directement ses meilleures photos |

## 2. Informations à confirmer par le client

- 🔴 **E-mail de contact public** : `direction@ats-64.fr` (trouvé dans les mentions légales actuelles). Une adresse générique (`contact@…`) serait préférable.
- 🔴 **Horaires** des 3 agences et des 3 permanences (repris du site actuel, page « Nos bureaux »).
- 🔴 **SIRET** et **hébergeur** (mentions légales, marqués « À compléter »).
- **Coordonnées GPS** du siège (43.3238, -0.5764 : approximatives) : vérifier sur Google Maps et corriger dans `index.html`, `contact.html`, `a-propos.html` (JSON-LD) et l'iframe de la carte.
- **Liste des communes desservies** (23 communes citées, hypothèse « Monein + 40 km ») et limite réelle de la zone.
- **Services** : les 8 services proposés ont été déduits du site actuel. Confirmer ou retirer :
  - animaux et plantes (garde pendant les absences) ;
  - courses (mode de règlement des achats) ;
  - événements (service, plonge) ;
  - vitres, petite manutention, retrait de commandes, « mercredis et vacances » pour la garde d'enfants ;
  - matériel de jardinage fourni ou non, évacuation des déchets verts.
- **Crédit d'impôt** : textes rédigés selon les règles générales des services à la personne (plafonds 5 000 € jardinage, 500 € petit bricolage ; courses éligibles seulement dans une offre globale ; animaux seulement pour les personnes dépendantes ; événements non éligibles). À faire valider par la direction. Préciser si l'association propose l'**avance immédiate du crédit d'impôt** (URSSAF), c'est un argument fort à ajouter.
- **Tarifs** : aucun tarif affiché (« sur devis »). Un tarif horaire indicatif « à partir de … € / h, soit … € après crédit d'impôt » augmenterait les demandes.
- **Mise à disposition en entreprise** : délais annoncés (« quelques jours ») et mention des clauses sociales des marchés publics, à valider.
- **Page candidats** : conditions d'accès (orientation par France Travail, Mission locale, travailleurs sociaux ?), documents à apporter, formations proposées.
- **Espace privé** : le lien actuel pointe vers une adresse IP (`https://77.197.211.142/?LOG=GTA265`). Confirmer qu'il doit rester visible, et s'il existe une adresse plus propre.
- **Mention « Directrice de la publication : Audrey Larrère »** : reprise des mentions actuelles, à confirmer.

## 3. Contenus laissés en attente (placeholders)

| Page | Emplacement | À fournir |
|---|---|---|
| `avis.html` | 3 cartes « Avis Google n° … — à intégrer » | 3 à 6 avis Google réels (texte exact, prénom + initiale, date). **Ne jamais inventer d'avis.** Quand ils sont intégrés, on peut ajouter les données structurées `Review` / `AggregateRating` |
| `a-propos.html` | Bloc « L'équipe » (encart « À compléter ») | Photo de l'équipe + un mot de la direction |
| `a-propos.html` | Commentaire HTML sous les chiffres | Chiffres clés : personnes accompagnées par an, heures de travail réalisées, taux de sorties vers l'emploi |
| `mentions-legales.html` | SIRET, hébergeur, licence Fotolia | Voir section 2 |
| `contact.html` | Formulaire | Adresse Formspree / Netlify Forms (voir README, étape 6) |

## 4. Techniques (webdesigner)

- Remplacer l'action du formulaire (`A-CONFIGURER`).
- Mettre en place les redirections 301 des anciennes URL Webador (README, étape 5).
- Soumettre le sitemap dans Google Search Console ; aligner la fiche Google Business Profile (nom, adresse, téléphone identiques).
- Option performance : héberger les polices localement (Familjen Grotesk, Instrument Sans) pour supprimer l'appel à Google Fonts (mentionné dans les mentions légales).

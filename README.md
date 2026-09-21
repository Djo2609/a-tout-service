# A Tout Service — site vitrine

Site statique multipage (HTML + CSS + un petit fichier JS). Aucun CMS, aucune base de données, aucun framework : il suffit de copier les fichiers sur un hébergement web.

## Contenu du dossier

```
/
├── index.html                                  Accueil
├── services.html                               Vue d'ensemble des services
├── service-menage-repassage.html               ┐
├── service-jardinage-espaces-verts.html        │
├── service-bricolage-petits-travaux.html       │
├── service-garde-enfants-aide-devoirs.html     │ une page par service
├── service-courses-livraison.html              │ (référencement local)
├── service-animaux-plantes-absences.html       │
├── service-aide-evenements-reception.html      │
├── service-mise-a-disposition-personnel.html   ┘ (page « Entreprises »)
├── trouver-un-emploi.html                      Page candidats / demandeurs d'emploi
├── a-propos.html                               L'association
├── avis.html                                   Avis clients (emplacements à remplir)
├── contact.html                                Agences, permanences, formulaire, carte
├── mentions-legales.html                       Mentions légales + RGPD
├── sitemap.xml · robots.txt                    Référencement Google
├── llms.txt · llm.txt                          Résumé pour les moteurs IA (contenu identique)
├── assets/css/style.css                        Feuille de styles unique
├── assets/js/main.js                           Menu mobile, formulaire, animations (≈ 3 Ko)
├── assets/img/                                 Images WebP (2 tailles), logo, favicon, image de partage
├── A-FOURNIR.md                                Ce qu'il reste à fournir / valider
└── README.md                                   Ce fichier
```


## Mise en ligne — étapes

1. **Choisir l'hébergement.** Tout hébergement « web statique » convient :
   - OVH / o2switch / Ionos (offre mutualisée) : envoi des fichiers par FTP (FileZilla) dans le dossier `www/`.
   - Netlify ou Cloudflare Pages (gratuit) : glisser-déposer le dossier sur le tableau de bord.
2. **Envoyer les fichiers** à la racine du site (là où doit se trouver `index.html`), en conservant l'arborescence `assets/…`.
3. **Pointer le nom de domaine** `atoutservice64.fr` vers le nouvel hébergement (enregistrements DNS chez le registrar actuel, via Webador si le domaine y est géré). Activer le HTTPS (certificat Let's Encrypt, généralement en un clic).
4. **Rediriger `atoutservice64.fr` vers `www.atoutservice64.fr`** (ou l'inverse, mais rester cohérent : toutes les balises `canonical`, le sitemap et les données structurées utilisent `https://www.atoutservice64.fr/`). Si un autre domaine est retenu, faire un rechercher/remplacer de `https://www.atoutservice64.fr/` dans tous les fichiers.
5. **Redirections 301 des anciennes pages Webador** (pour ne pas perdre le référencement acquis) :
   | Ancienne URL | Nouvelle URL |
   |---|---|
   | `/renseignements` | `/a-propos.html` |
   | `/nos-services` | `/services.html` |
   | `/nos-bureaux` | `/contact.html` |
   | `/contact` | `/contact.html` |
   | `/mentions-legales-et-rgpd` | `/mentions-legales.html` |

   Sur Apache (OVH, o2switch…), dans un fichier `.htaccess` à la racine :
   ```
   Redirect 301 /renseignements /a-propos.html
   Redirect 301 /nos-services /services.html
   Redirect 301 /nos-bureaux /contact.html
   Redirect 301 /contact /contact.html
   Redirect 301 /mentions-legales-et-rgpd /mentions-legales.html
   ```
   Sur Netlify : fichier `_redirects` avec `/nos-services /services.html 301`, etc.
6. **Brancher le formulaire de contact** (`contact.html`) : créer un formulaire gratuit sur [Formspree](https://formspree.io) (ou utiliser Netlify Forms), puis remplacer `https://formspree.io/f/A-CONFIGURER` par l'adresse fournie. Tant que ce n'est pas fait, le bouton « Envoyer » ouvre la messagerie du visiteur avec le message pré-rempli vers `direction@ats-64.fr`.
7. **Google Search Console** : ajouter le domaine, puis soumettre `https://www.atoutservice64.fr/sitemap.xml`.
8. **Fiche Google Business Profile** : vérifier que l'adresse, le téléphone, les horaires et le lien du site correspondent exactement à ceux du site (cohérence = meilleur classement local). Créer une fiche par agence (Mourenx, Orthez) si ce n'est pas déjà fait.
9. **Contrôle final** : tester chaque page sur mobile, cliquer sur les numéros de téléphone, envoyer un message de test via le formulaire, lancer Lighthouse (Chrome › Outils de développement › Lighthouse).

## Modifier le site

- **Textes** : ouvrir le fichier `.html` concerné dans un éditeur de texte (VS Code, Notepad++) et modifier directement. Le header et le footer sont dupliqués dans chaque page : une modification (ex. horaires, téléphone) doit être répercutée dans toutes les pages — utiliser « Rechercher / remplacer dans les fichiers ».
- **Couleurs, typographie, espacements** : tout est centralisé en haut de `assets/css/style.css` (bloc `:root`).
- **Images** : format WebP, deux tailles par image (`nom-1200.webp` et `nom-640.webp`, ratio 3:2). Pour remplacer une photo, garder les mêmes noms de fichiers ou mettre à jour les balises `<img>`. Outil gratuit : [Squoosh](https://squoosh.app).
- **Nouvelle page service** : dupliquer une page `service-….html`, adapter `<title>`, `<meta name="description">`, `canonical`, balises Open Graph, bloc JSON-LD, `h1` et contenu ; ajouter le lien dans le menu, le footer, `services.html`, `sitemap.xml` et `llms.txt`.

## Système de design (pour le webdesigner)

- **Concept « Trois traits »** : les trois couleurs du logo ATS servent de code de lecture.
  Corail `#F18B82` = particuliers · Menthe `#8ECCB9` = professionnels · Soleil `#E6DE7A` = emploi / candidats.
  Ardoise `#1E2F38` porte le texte et les sections sombres ; `#4F6978` (ardoise du logo) pour le texte secondaire.
- **Élément signature** : le trait oblique (angle −16°, repris du soulignement du logo) — surlignage des mots-clés des titres, puces, bandes du hero et du bandeau d'appel à l'action.
- **Typographies** (Google Fonts) : *Familjen Grotesk* (titres, 600/700) + *Instrument Sans* (texte, 400/600/700).
- **Accessibilité** : contrastes AA, focus clavier visible, lien d'évitement, menu mobile accessible (Échap pour fermer), animations désactivées si l'utilisateur a choisi « réduire les animations ».

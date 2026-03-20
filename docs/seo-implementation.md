# SEO implementation - Maisonbionat

## Rôle de ce document
Ce document définit la mise en oeuvre SEO technique de Maisonbionat dans Next.js App Router.

Objectif :
- garantir une base SEO propre dès la conception
- rendre les pages faciles à comprendre pour les moteurs
- garder une cohérence entre structure éditoriale, URLs, metadata et données structurées
- éviter les erreurs techniques classiques

## Principes généraux
Le SEO du site doit reposer sur :
- une architecture claire
- une intention principale par page
- des URLs descriptives
- des liens internes utiles
- des métadonnées cohérentes
- des données structurées justifiées
- des canoniques propres
- des fichiers robots et sitemap maintenus proprement

Le SEO technique ne doit jamais compenser un contenu faible ou flou.

## Implémentation Next.js
Utiliser en priorité les conventions natives de Next.js App Router.

### À utiliser
- metadata API native
- generateMetadata quand une page nécessite des métadonnées dynamiques
- app/robots.ts ou app/robots.txt
- app/sitemap.ts ou app/sitemap.xml
- JSON-LD propre quand un balisage structuré est justifié

### À éviter
- bricoler le head manuellement si une API native existe
- disperser les règles SEO dans plusieurs endroits incohérents
- multiplier les solutions différentes pour un même besoin

## URLs
Les URLs doivent être :
- descriptives
- lisibles
- courtes à raisonnablement courtes
- stables
- cohérentes avec l'architecture des silos
- écrites dans la langue de l'audience

### Règles
- utiliser des mots français
- utiliser des tirets pour séparer les mots
- éviter les paramètres inutiles pour les pages indexables
- éviter les slugs vagues
- éviter les structures incohérentes entre silos

### Exemples de logique
- /air-interieur/
- /air-interieur/comment-ameliorer-lair-dans-la-maison/
- /materiaux-sains/
- /piece-par-piece/chambre-saine/

## Canonicalisation
Chaque page indexable doit avoir une URL canonique cohérente.

### Règles
- ne pas utiliser robots.txt pour gérer la canonicalisation
- ne pas envoyer de signaux contradictoires entre sitemap, canonicals et maillage interne
- ne pas définir plusieurs URL canoniques différentes pour une même page
- ne pas utiliser de fragment comme canonique
- garder une logique unique et stable

### Application
- la canonical doit pointer vers l'URL propre, finale et indexable de la page
- les liens internes doivent pointer directement vers l'URL canonique
- éviter les doublons de contenu inutiles

## Métadonnées globales
Le layout global doit définir les éléments communs du site quand ils sont réellement partagés :
- template de title
- metadataBase
- valeurs de base de robots
- valeurs de base Open Graph si logique
- icônes et éléments globaux

## Title tags
Le title doit être :
- spécifique
- clair
- utile
- aligné avec l'intention de la page
- cohérent avec le H1

### Règles
- éviter les titles trop génériques
- éviter les titles surchargés artificiellement
- éviter plusieurs pages avec des titles quasi identiques
- garder une formulation naturelle
- inclure le nom de la marque de façon cohérente

### Logique recommandée
- Homepage : [promesse principale] | Maisonbionat
- Page pilier : [sujet principal] | Maisonbionat
- Page enfant : [mot-clé ou sujet précis] | Maisonbionat

## Meta descriptions
La meta description doit :
- résumer honnêtement la page
- donner envie de cliquer sans exagération
- refléter le bénéfice principal
- rester cohérente avec le contenu réel

### Règles
- ne pas dupliquer la même description sur plusieurs pages
- éviter les descriptions vagues
- éviter les promesses excessives
- privilégier une formulation utile et naturelle

## H1 et headings
### H1
- un seul H1 par page
- formulation claire
- alignement avec l'intention principale
- cohérence avec le title

### H2 et H3
- doivent structurer réellement la page
- ne doivent pas servir au remplissage
- doivent aider la lecture autant que le SEO

## Homepage
### Objectif SEO
La homepage vise un champ sémantique large autour de :
- maison saine
- habitat sain
- maison naturelle
- maison écologique
- maison plus respirable
- maison saine pour la famille

### Règles
- ne pas chercher à tout traiter en profondeur
- utiliser la home comme page pilier large
- pousser les silos principaux
- éviter le flux d'articles comme structure centrale
- metadata dédiées et stables
- données structurées limitées à ce qui est réellement justifié

### Données structurées possibles
- WebPage
- WebSite
- Organization
- FAQPage seulement si la FAQ est visible et réelle

## Pages piliers
### Objectif
Chaque page pilier doit couvrir clairement son thème mère et redistribuer vers ses pages enfants.

### Règles
- metadata propres
- H1 clair
- maillage vers pages enfants
- contenu utile avant l'annuaire de liens
- possibilité de BreadcrumbList si la hiérarchie est claire

### Données structurées possibles
- WebPage
- BreadcrumbList
- FAQPage si visible et justifiée

## Pages enfants
### Objectif
Traiter un besoin précis avec une intention principale nette.

### Règles
- title spécifique
- description propre
- canonical stable
- maillage vers page mère
- liens contextuels vers pages soeurs si pertinents
- éviter les doublons avec la page pilier

### Données structurées possibles
- Article si la page est réellement éditoriale et structurée comme telle
- BreadcrumbList
- FAQPage si visible et utile

## Open Graph et partage
Prévoir des métadonnées de partage propres :
- title
- description
- image
- type adapté
- URL correcte

Les éléments de partage doivent rester cohérents avec la page réelle.
Éviter les OG génériques si une meilleure version existe.

## Breadcrumbs
Les breadcrumbs sont recommandés quand la hiérarchie est claire.

### Règles
- afficher un fil d'Ariane visible si cela améliore la navigation
- garder une hiérarchie propre et logique
- utiliser BreadcrumbList quand la structure s'y prête
- ne pas créer des breadcrumbs artificiels ou incohérents

## FAQ et FAQPage
La FAQ ne doit pas être automatique.

### Règles
- la FAQ doit exister visiblement dans la page
- les questions doivent être utiles
- les réponses doivent être réellement affichées
- ne pas ajouter FAQPage si le bloc n'existe pas réellement
- ne pas créer de FAQ juste pour le rich result

## Organization et WebSite
Prévoir un balisage stable pour le site quand les informations nécessaires sont disponibles.

### WebSite
Peut être utilisé pour décrire le site dans son ensemble.

### Organization
À utiliser de manière cohérente quand les informations d'organisation et d'identité du site sont définies.

Ne pas inventer d'informations d'organisation non établies.

## JSON-LD
Préférer le JSON-LD propre et maintenu centralement quand un balisage structuré est nécessaire.

### Règles
- utiliser le type le plus pertinent
- ne pas multiplier les types sans raison
- garder une structure propre et maintenable
- centraliser les helpers structurés si possible dans lib/seo

## robots.txt
Le site doit disposer d'un robots propre.

### Règles
- autoriser l'exploration des pages publiques utiles
- ne pas utiliser robots.txt pour la canonicalisation
- inclure la référence au sitemap
- bloquer uniquement ce qui doit réellement l'être

## sitemap.xml
Le site doit disposer d'un sitemap maintenu proprement.

### Règles
- inclure les URLs indexables importantes
- garder le sitemap cohérent avec les canoniques
- ne pas lister des URLs que le site ne souhaite pas indexer
- maintenir le sitemap au fil de l'évolution du site

## Liens internes
Les liens internes doivent être :
- descriptifs
- crawlables
- utiles
- cohérents avec la structure des silos

### Règles
- éviter "cliquez ici" ou "en savoir plus" seuls
- faire pointer les liens vers les URLs finales propres
- croiser les contenus quand cela aide réellement la navigation
- éviter les liens répétitifs inutiles

## Pagination, filtres, paramètres
Si le site évolue avec des systèmes de filtres ou de navigation avancée :
- éviter que des variantes inutiles deviennent indexables
- garder une logique canonique claire
- ne pas créer des doublons techniques incontrôlés

## Recherche et vérification en amont
Avant de produire un contenu informatif avec données, comparaisons, repères techniques ou informations évolutives :
- effectuer une recherche web
- privilégier les sources officielles, institutionnelles, techniques ou reconnues
- éviter les affirmations factuelles non vérifiées
- croiser les sources si le sujet est sensible

## Structure recommandée côté code
Prévoir une organisation SEO propre, par exemple :
- lib/seo/metadata.ts
- lib/seo/jsonld.ts
- lib/seo/breadcrumbs.ts
- app/robots.ts
- app/sitemap.ts

Cette structure peut évoluer, mais l'objectif est de centraliser la logique SEO technique.

## Vérifications à faire avant publication
Pour chaque page, vérifier :
1. l'intention principale
2. l'URL
3. le H1
4. le title
5. la meta description
6. la canonical
7. le maillage interne
8. le type éventuel de données structurées
9. la cohérence avec le silo
10. l'absence de duplication inutile

## Interdictions
- ne pas créer des titles génériques en série
- ne pas dupliquer les meta descriptions
- ne pas ajouter des données structurées trompeuses
- ne pas utiliser robots.txt pour régler des problèmes de canonicalisation
- ne pas envoyer des signaux contradictoires entre sitemap, canonicals et liens internes
- ne pas créer de pages proches sans angle réellement distinct

## Règle finale
À chaque implémentation SEO, se demander :
"Cette page est-elle compréhensible, cohérente, techniquement propre et alignée avec son intention réelle ?"

Si la réponse est non, revoir la structure ou la mise en oeuvre.
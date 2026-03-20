# Maisonbionat.fr - Guide du projet

## Positionnement
Maisonbionat est un site dédié à la maison écologique, naturelle et saine pour la famille.

Question centrale du site :
"Comment rendre sa maison plus saine, plus naturelle et plus respirable au quotidien ?"

Le site ne doit pas être traité comme un simple blog.
La page d'accueil est la page centrale du projet. Elle doit être active, informative, utile pour le SEO et pensée comme un hub éditorial et de navigation.

Public principal :
- familles
- parents
- personnes qui veulent un habitat plus sain
- lecteurs sensibles à l'air intérieur, aux matériaux, à l'humidité, aux produits du quotidien et à la rénovation saine

## Objectifs produit
- Créer un site utile, clair et sobre
- Faire de la homepage une vraie page pilier
- Structurer le site autour de silos SEO cohérents
- Favoriser une navigation orientée besoins réels
- Éviter l'effet "liste d'articles de blog"

## Stack technique
- Framework : Next.js App Router
- SEO et métadonnées : metadata API native de Next.js, generateMetadata quand nécessaire
- Images : next/image
- Typographies : next/font
- Déploiement : Vercel
- Langue : français exclusivement
- Mobile first obligatoire

## Principes d'architecture
- Utiliser des layouts globaux et des composants réutilisables
- Le header doit être un composant global unique
- Le footer doit être un composant global unique
- Toute modification du header ou du footer doit se répercuter partout
- Les sections communes doivent être construites comme des composants réutilisables
- Les pages doivent rester faciles à éditer et à faire évoluer
- Éviter les composants trop complexes si une solution simple suffit

## Architecture du site
La homepage est la page mère.
Elle doit déjà informer, orienter et redistribuer vers les principaux silos.

Silos principaux envisagés :
- /air-interieur/
- /materiaux-sains/
- /humidite-maison/
- /produits-et-habitudes/
- /piece-par-piece/
- /renovation-saine/
- /maison-saine-famille/

Ne pas créer de structure fourre-tout.
Ne pas créer de catégories vagues ou redondantes.
Ne pas créer de pages qui se cannibalisent sémantiquement.

## Rôle de la homepage
La homepage ne doit pas être une vitrine corporate.
La homepage ne doit pas être un flux d'articles récents.
La homepage doit fonctionner comme :
- une page pilier
- un guide de démarrage
- un hub de navigation
- un point d'entrée SEO large sur la maison saine

Structure attendue en général :
1. Hero avec promesse claire et H1 unique
2. Bloc "Par quoi commencer ?"
3. Bloc des grands piliers
4. Navigation par pièces
5. Navigation par problèmes fréquents
6. Bloc selon les situations de vie
7. Guides essentiels
8. FAQ si elle est réellement utile et visible

## Recherche et fiabilité des informations
Avant de rédiger un contenu éditorial ou informatif, effectuer une recherche web dès que le sujet repose sur :
- des faits
- des chiffres
- des comparaisons
- des normes
- des recommandations techniques
- des informations susceptibles d'évoluer

Privilégier les sources :
- officielles
- institutionnelles
- techniques
- reconnues
- récentes quand la temporalité compte

Ne pas inventer de données.
Ne pas s'appuyer sur des sources faibles ou trop commerciales si des sources plus fiables existent.
Quand le sujet le justifie, croiser plusieurs sources.

## UX et design
Direction :
- éditoriale
- sobre
- crédible
- naturelle
- non militante
- utile avant tout

Éviter :
- design trop startup
- surcharge visuelle
- homepage décorative sans contenu utile
- carrousels gadget
- animations excessives
- sections purement remplies pour faire du volume

Favoriser :
- lisibilité
- hiérarchie claire
- sections utiles
- cartes simples
- maillage visible mais propre
- densité éditoriale raisonnable
- cohérence des espacements, couleurs, boutons et cartes

## SEO - Règles strictes
- Une seule intention principale par page
- Un seul H1 par page
- Le H1 contient le mot-clé principal ou sa formulation naturelle la plus proche
- La homepage cible un champ sémantique large lié à la maison saine, naturelle et écologique
- Chaque silo cible un thème clair et distinct
- Pas de duplication d'angle entre silos
- Maillage interne fort entre homepage, silos et contenus enfants
- Les liens internes doivent être descriptifs et utiles
- Les pages piliers doivent être informatives avant d'être décoratives
- Ne pas créer des sections SEO artificielles sans utilité réelle

## Métadonnées et données structurées
- Utiliser la metadata API native de Next.js
- Utiliser generateMetadata quand une page en a besoin
- Prévoir un balisage cohérent pour le site
- Utiliser BreadcrumbList sur les pages où la hiérarchie est claire
- Utiliser FAQPage seulement si la FAQ est visible et réellement présente dans la page
- Utiliser les données structurées uniquement si elles correspondent au contenu affiché
- Ne jamais ajouter de balisage trompeur ou non justifié

## Performance - Règles strictes
- Server Components par défaut
- "use client" uniquement si nécessaire
- Limiter le JavaScript côté client
- Utiliser next/image pour les images
- Utiliser next/font pour les typographies
- Éviter les animations lourdes
- Éviter les dépendances inutiles
- Éviter les composants coûteux pour de simples effets visuels
- Privilégier une homepage rapide, lisible et stable
- Limiter les risques de CLS, surtout sur le hero, les images et les polices

## Contenu éditorial
Ton :
- vouvoiement exclusif
- sobre
- clair
- crédible
- pédagogique
- jamais sensationnaliste

Le contenu doit :
- aider réellement l'utilisateur
- répondre à des problèmes concrets
- éviter le jargon non expliqué
- éviter le greenwashing
- éviter les affirmations douteuses ou pseudo-scientifiques
- privilégier les formulations précises
- rester utile avant d'être séduisant

## Développement - Règles
- Préférer des composants simples, propres et réutilisables
- Ne pas disperser la logique globale dans plusieurs fichiers sans raison
- Centraliser les éléments transverses du site
- Prévoir une structure compatible avec une évolution future du contenu
- Ne pas casser l'architecture existante sans l'expliquer
- Avant toute grosse refonte, proposer un plan
- Privilégier des conventions de nommage claires

## Workflow Claude Code
Quand vous travaillez sur une tâche importante :
1. analyser l'existant
2. proposer un plan court
3. implémenter proprement
4. résumer ce qui a été modifié

Pour les changements structurants, commencer par un plan avant d'éditer.

## Fichiers de référence
Toujours consulter si présents :
- docs/vision.md
- docs/homepage-architecture.md
- docs/silos.md
- docs/design-system.md
- .claude/rules/*.md

## Interdictions absolues
- Ne pas transformer la homepage en index de blog centré sur les derniers articles
- Ne pas multiplier les CTA agressifs
- Ne pas inventer des données factuelles
- Ne pas produire de contenu pseudo-médical
- Ne pas utiliser un ton alarmiste
- Ne pas ajouter de structured data non visible ou trompeuse
- Ne pas ajouter des dépendances ou effets lourds sans raison claire
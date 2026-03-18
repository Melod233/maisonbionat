---
paths:
  - "app/**/*.ts"
  - "app/**/*.tsx"
  - "components/**/*.ts"
  - "components/**/*.tsx"
  - "lib/**/*.ts"
  - "lib/**/*.tsx"
---

# Règles Next.js App Router - Maisonbionat

## Principe général
Le projet doit être construit avec une architecture claire, simple à maintenir et cohérente avec Next.js App Router.

Le code doit rester lisible, modulaire et évolutif.
Éviter toute complexité prématurée.

## Organisation générale
Utiliser une structure propre avec séparation claire entre :
- app : routes, layouts, pages, metadata
- components : composants réutilisables
- lib : helpers, logique SEO, données structurées, utilitaires
- public : assets statiques
- docs : documentation projet
- content ou data : contenu structuré si nécessaire

## Layout global
- Utiliser un layout global unique pour la structure du site
- Le header doit être un composant global unique
- Le footer doit être un composant global unique
- Le header et le footer ne doivent pas être dupliqués dans les pages
- Toute modification globale doit passer par les composants partagés

## Pages
- Une page doit rester centrée sur sa responsabilité
- Éviter les pages monolithiques illisibles
- Les grandes pages doivent assembler des composants de section réutilisables
- Une page ne doit pas contenir trop de logique de présentation inline si cette logique peut être factorisée

## Composants
- Préférer des composants simples, explicites et réutilisables
- Créer des composants partagés quand un motif revient vraiment
- Éviter de sur-composantiser trop tôt
- Ne pas créer des abstractions trop intelligentes pour des besoins encore hypothétiques
- Le nom des composants doit être clair et orienté usage

## Homepage
- La homepage doit être construite comme un assemblage de sections
- Chaque grande section de homepage doit pouvoir être isolée dans un composant dédié
- La homepage ne doit pas devenir un fichier géant difficile à modifier
- Les sections doivent rester cohérentes avec la logique SEO et UX définie dans les fichiers docs

## Server vs Client Components
- Server Components par défaut
- Ajouter "use client" uniquement si nécessaire
- Ne pas transformer un composant en client component sans raison réelle
- Réserver les client components aux cas où il faut :
  - useState
  - useEffect
  - handlers d'événements
  - APIs navigateur
  - comportement interactif réel

## Données et contenu
- Éviter de disperser des contenus structurés importants dans plusieurs fichiers sans logique claire
- Quand du contenu statique ou semi-structuré est partagé, envisager un fichier de données dédié
- Ne pas coder en dur la même information dans plusieurs composants

## Navigation
- Utiliser la navigation interne de Next.js
- Les liens internes doivent être clairs et descriptifs
- La navigation globale doit rester simple à faire évoluer
- Le header doit être pensé comme un point d'accès aux grands silos du site

## SEO technique
- Utiliser les conventions natives de Next.js pour les metadata
- Ne pas bricoler les balises head manuellement si une API native existe
- Prévoir une structure propre pour les données structurées et le SEO technique
- Les breadcrumbs, FAQ et autres éléments SEO doivent être gérés proprement via des helpers ou composants dédiés si nécessaire

## Maintenabilité
- Une modification simple ne doit pas nécessiter de toucher un grand nombre de fichiers
- Préférer une architecture où les éléments transverses sont centralisés
- Garder les conventions de nommage stables
- Éviter les dépendances inutiles
- Éviter les patterns compliqués si le besoin n'est pas réel

## Styles et UI
- Le projet doit rester compatible avec un design system centralisé
- Les composants visuels partagés doivent suivre les mêmes conventions
- Ne pas multiplier les variantes arbitraires d'un même composant
- Penser aux composants comme à des briques durables du site

## Avant toute évolution importante
Avant une refonte importante :
1. analyser l'existant
2. proposer un plan court
3. implémenter proprement
4. résumer ce qui a été modifié

## Interdictions
- Ne pas dupliquer header ou footer dans les pages
- Ne pas utiliser "use client" par facilité
- Ne pas créer une homepage monolithique énorme
- Ne pas disperser les conventions globales dans des fichiers multiples sans logique claire
- Ne pas introduire des abstractions inutiles
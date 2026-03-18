---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "components/**/*.tsx"
  - "components/**/*.ts"
  - "lib/**/*.ts"
  - "lib/**/*.tsx"
  - "app/**/*.css"
  - "components/**/*.css"
---

# Règles performance - Maisonbionat

## Principe général
La performance du site est une contrainte de base du projet.

Le design, l'animation, les composants et les choix techniques ne doivent jamais dégrader inutilement :
- la vitesse du site
- la stabilité visuelle
- la lisibilité mobile
- la maintenabilité du code

Toute proposition visuelle ou technique doit être évaluée aussi sous l'angle de la performance.

## Rendu et architecture
- Server Components par défaut
- Ajouter "use client" uniquement si nécessaire
- Ne pas transformer une section entière en client component si seule une petite interaction le justifie
- Préférer déplacer l'interactivité dans un composant enfant ciblé
- Éviter le JavaScript côté client pour de simples effets visuels si CSS suffit

## JavaScript
- Limiter strictement le JavaScript côté client
- Éviter les librairies lourdes pour des besoins mineurs
- Ne pas ajouter de dépendance sans justification claire
- Préférer des solutions natives, simples et légères
- Éviter les effets de scroll complexes, les animations coûteuses et les comportements difficiles à maintenir
- Toute animation ou interaction doit rester légère et utile

## CSS et styles
- Garder une base CSS simple, cohérente et maintenable
- Éviter les styles redondants ou contradictoires
- Éviter les systèmes visuels trop complexes à maintenir
- Préférer des composants bien pensés plutôt qu'une accumulation d'exceptions locales
- Les styles doivent rester compatibles avec une bonne lisibilité mobile et desktop
- Éviter les effets coûteux si leur gain visuel est faible

## Images
- Utiliser next/image pour les images du site
- Prévoir des dimensions stables ou des conteneurs stables pour limiter les décalages de mise en page
- Ne pas charger des images inutilement lourdes
- Les images du hero et des sections importantes doivent être particulièrement bien gérées
- Éviter la surabondance d'images si elles n'apportent pas de vraie valeur éditoriale ou visuelle

## Typographies
- Utiliser next/font
- Limiter le nombre de familles et de variantes de police
- Éviter de charger trop de graisses inutiles
- La hiérarchie typographique doit être forte sans multiplier les fichiers de font
- Les choix typographiques doivent rester compatibles avec de bonnes performances et une bonne lisibilité

## CLS et stabilité visuelle
- Limiter les risques de CLS dès la conception
- Le hero doit être stable au chargement
- Les images doivent avoir une structure stable
- Les polices ne doivent pas provoquer de gros décalages visibles
- Les composants interactifs ne doivent pas faire bouger la page de manière brutale ou imprévisible

## LCP et above the fold
- Le contenu principal visible au chargement doit être prioritaire
- Le hero doit être rapide, lisible et stable
- Éviter de surcharger le haut de page avec des éléments coûteux
- Ne pas bloquer inutilement l'affichage du contenu essentiel
- Toute complexité visuelle above the fold doit être justifiée

## Animation et mouvement
- Autoriser uniquement des animations discrètes, sobres et peu coûteuses
- Préférer de petites transitions élégantes à des effets démonstratifs
- Éviter les animations qui reposent fortement sur JavaScript
- Éviter les effets permanents ou très fréquents
- Le mouvement ne doit jamais gêner la lecture, la navigation ou les performances

## Composants
- Un composant doit rester proportionné à son utilité
- Éviter les composants trop complexes pour des besoins simples
- Préférer des composants réutilisables, sobres et robustes
- Si un composant visuellement ambitieux devient coûteux, fragile ou confus, le simplifier
- Les composants globaux comme header et footer doivent être particulièrement propres et stables

## Contenu et performance
- Le contenu utile doit rester visible et accessible rapidement
- Ne pas faire dépendre l'information essentielle d'interactions lourdes
- Ne pas cacher trop de contenu utile derrière des mécaniques inutiles
- Les sections doivent être pensées pour être lisibles sans surcharge graphique

## Dépendances
- Toute nouvelle dépendance doit avoir un vrai bénéfice
- Éviter les bibliothèques lourdes pour des effets qui peuvent être obtenus simplement
- Privilégier les outils et APIs natifs quand ils suffisent
- Réduire le risque d'alourdir le bundle sans nécessité

## Mobile first
- La performance mobile est prioritaire
- Toute proposition UI doit être jugée aussi sur mobile
- Éviter les interfaces trop denses, trop lourdes ou trop fragiles sur petits écrans
- Le site doit rester rapide et confortable sur mobile avant d'être spectaculaire sur desktop

## SEO technique et performance
- Les choix visuels ne doivent pas nuire à l'exploration, au rendu ou à la lisibilité du contenu
- Le contenu principal doit rester disponible en texte
- Le site doit rester compatible avec de bonnes pratiques SEO techniques
- Le design ne doit pas masquer la structure réelle des pages

## Règle finale
Toujours se demander :
"Ce choix améliore-t-il réellement le site sans le rendre plus lourd, plus fragile ou plus lent ?"

Si la réponse est non, simplifier.
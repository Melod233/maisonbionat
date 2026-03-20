export type Silo = {
  slug: string;
  href: string;
  label: string;
  shortDescription: string;
  fullDescription: string;
};

/**
 * Silos principaux du site.
 * Utilisé dans le header, le footer, la homepage et les pages piliers.
 */
export const silos: Silo[] = [
  {
    slug: "air-interieur",
    href: "/air-interieur/",
    label: "Air intérieur",
    shortDescription: "Qualité de l'air, ventilation, polluants et odeurs.",
    fullDescription:
      "La qualité de l'air intérieur est souvent dégradée par des sources invisibles. Comprendre les polluants, améliorer la ventilation et aérer efficacement.",
  },
  {
    slug: "materiaux-sains",
    href: "/materiaux-sains/",
    label: "Matériaux sains",
    shortDescription: "Peintures, revêtements et finitions à faibles émissions.",
    fullDescription:
      "Peintures, revêtements de sol, meubles, colles et finitions : certains matériaux émettent des composés dans l'air. Comment choisir plus sainement.",
  },
  {
    slug: "humidite-maison",
    href: "/humidite-maison/",
    label: "Humidité",
    shortDescription: "Condensation, moisissures et murs humides.",
    fullDescription:
      "L'humidité fragilise la maison et dégrade l'air qu'on respire. Identifier les causes, traiter les moisissures et limiter la condensation.",
  },
  {
    slug: "produits-et-habitudes",
    href: "/produits-et-habitudes/",
    label: "Produits et habitudes",
    shortDescription: "Ménage, lessive, bougies et gestes du quotidien.",
    fullDescription:
      "Produits ménagers, sprays, parfums d'intérieur : des choix simples pour réduire l'exposition aux substances irritantes au quotidien.",
  },
  {
    slug: "piece-par-piece",
    href: "/piece-par-piece/",
    label: "Pièce par pièce",
    shortDescription: "Chambre, cuisine, salle de bain, salon, garage.",
    fullDescription:
      "Agir concrètement dans chaque espace de votre logement : les priorités par pièce pour un habitat plus sain au quotidien.",
  },
  {
    slug: "renovation-saine",
    href: "/renovation-saine/",
    label: "Rénovation saine",
    shortDescription: "Travaux, matériaux et priorités avant de rénover.",
    fullDescription:
      "Avant de refaire une pièce, quelques priorités à poser pour éviter les erreurs courantes et choisir des matériaux adaptés.",
  },
  {
    slug: "maison-saine-famille",
    href: "/maison-saine-famille/",
    label: "Maison saine famille",
    shortDescription: "Bébé, enfants et priorités réalistes en famille.",
    fullDescription:
      "Rendre son logement plus sain quand on vit en famille : chambre bébé, produits adaptés et arbitrages réalistes pour avancer progressivement.",
  },
];

/**
 * Données statiques de la homepage.
 * Modifier ici pour mettre à jour les contenus sans toucher aux composants.
 */

// ─── Section "Par quoi commencer ?" ──────────────────────────────────────────

export type StartCard = {
  label: string;
  href: string;
  description: string;
};

export const startCards: StartCard[] = [
  {
    label: "L'air intérieur",
    href: "/air-interieur/",
    description:
      "C'est le premier levier. L'air d'un logement mal ventilé peut concentrer des polluants invisibles. Aérer et ventiler correctement fait une différence immédiate.",
  },
  {
    label: "L'humidité",
    href: "/humidite-maison/",
    description:
      "Condensation et moisissures dégradent à la fois la maison et l'air intérieur. Les identifier tôt permet d'agir avant que les problèmes s'installent.",
  },
  {
    label: "Les matériaux",
    href: "/materiaux-sains/",
    description:
      "Peintures, revêtements, meubles : certains émettent des composés dans l'air pendant des mois. Savoir quoi regarder aide à faire de meilleurs choix.",
  },
  {
    label: "Les produits du quotidien",
    href: "/produits-et-habitudes/",
    description:
      "Produits ménagers, sprays, bougies parfumées : des substitutions simples permettent de réduire les sources d'irritation sans changer radicalement ses habitudes.",
  },
];

// ─── Section "Pièce par pièce" ───────────────────────────────────────────────

export type RoomEntry = {
  label: string;
  href: string;
};

export const roomEntries: RoomEntry[] = [
  { label: "Chambre", href: "/piece-par-piece/chambre-saine/" },
  { label: "Chambre enfant", href: "/piece-par-piece/chambre-enfant-saine/" },
  { label: "Cuisine", href: "/piece-par-piece/cuisine-saine/" },
  { label: "Salle de bain", href: "/piece-par-piece/salle-de-bain-saine/" },
  { label: "Salon", href: "/piece-par-piece/salon-sain/" },
  { label: "Garage", href: "/piece-par-piece/garage-sain/" },
  { label: "Extérieur", href: "/piece-par-piece/exterieur-sain/" },
];

// ─── Section "Problèmes fréquents" ───────────────────────────────────────────

export type ProblemEntry = {
  label: string;
  href: string;
};

export const problemEntries: ProblemEntry[] = [
  { label: "Humidité dans la maison", href: "/humidite-maison/problemes-humidite/" },
  { label: "Moisissures", href: "/humidite-maison/moisissures-maison/" },
  { label: "Air intérieur pollué", href: "/air-interieur/air-interieur-pollue/" },
  { label: "Trop de poussière", href: "/air-interieur/poussiere-maison/" },
  { label: "Odeurs persistantes", href: "/air-interieur/odeurs-persistantes-maison/" },
  { label: "Produits ménagers irritants", href: "/produits-et-habitudes/produits-menagers-irritants/" },
  { label: "Choisir une peinture plus saine", href: "/materiaux-sains/peinture-plus-saine/" },
  { label: "Matériaux à faibles émissions", href: "/materiaux-sains/materiaux-faibles-emissions/" },
];

// ─── Section "Selon votre situation" ─────────────────────────────────────────

export type SituationEntry = {
  label: string;
  description: string;
  href: string;
};

export const situationEntries: SituationEntry[] = [
  {
    label: "Vous attendez un bébé",
    description: "Préparer une chambre plus saine, identifier les priorités avant l'arrivée.",
    href: "/maison-saine-famille/chambre-bebe-saine/",
  },
  {
    label: "Vous rénovez",
    description: "Les erreurs à éviter, les matériaux à privilégier et l'ordre des priorités.",
    href: "/renovation-saine/renover-plus-sainement/",
  },
  {
    label: "Vous souhaitez moins de produits chimiques",
    description: "Substitutions simples, gestes du quotidien et produits plus sobres.",
    href: "/produits-et-habitudes/reduire-produits-chimiques-maison/",
  },
  {
    label: "Vous cherchez des matériaux plus naturels",
    description: "Comprendre les labels, comparer les options et éviter les pièges marketing.",
    href: "/materiaux-sains/materiaux-plus-naturels/",
  },
];

// ─── Section "Guides essentiels" ─────────────────────────────────────────────
// Sélection fixe et éditorialisée. Ne pas automatiser.

export type GuideCard = {
  title: string;
  description: string;
  href: string;
};

export const essentialGuides: GuideCard[] = [
  {
    title: "Comment améliorer l'air intérieur de votre maison",
    description:
      "Les sources de pollution les plus fréquentes, les gestes prioritaires et les solutions concrètes pour respirer mieux chez vous.",
    href: "/air-interieur/ameliorer-air-maison/",
  },
  {
    title: "Humidité dans la maison : causes et solutions",
    description:
      "Comprendre d'où vient l'humidité, reconnaître les signes d'alerte et agir avant que les moisissures s'installent.",
    href: "/humidite-maison/problemes-humidite/",
  },
  {
    title: "Les matériaux à privilégier pour une chambre plus saine",
    description:
      "Peintures, revêtements de sol et meubles : les critères essentiels pour limiter les émissions dans la pièce où l'on passe le plus de temps.",
    href: "/materiaux-sains/materiaux-faibles-emissions/",
  },
];

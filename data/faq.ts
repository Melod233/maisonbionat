export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * FAQ de la homepage.
 * Ces questions sont affichées dans HomeFaqSection et balisées en FAQPage.
 * Ne modifier que si les réponses sont réellement mises à jour dans la page.
 */
export const homepageFaq: FaqItem[] = [
  {
    question: "Qu'est-ce qu'une maison plus saine concrètement ?",
    answer:
      "Une maison plus saine, c'est un logement où l'air est mieux renouvelé, les matériaux émettent peu de composés volatils, l'humidité est maîtrisée et les produits utilisés au quotidien sont moins irritants. Il ne s'agit pas d'un idéal inaccessible, mais d'un ensemble de choix progressifs et réalistes.",
  },
  {
    question: "Par où commencer pour améliorer son logement ?",
    answer:
      "La priorité va à la qualité de l'air : aérer régulièrement, vérifier la ventilation et identifier les sources d'humidité ou de moisissures. Ensuite viennent les matériaux (peintures, revêtements) et les produits du quotidien. Chaque amélioration, même modeste, a un impact réel.",
  },
  {
    question: "Quels sujets sont traités sur Maisonbionat ?",
    answer:
      "Le site couvre la qualité de l'air intérieur, les matériaux à faibles émissions, l'humidité et les moisissures, les produits ménagers, la rénovation saine et l'organisation de la maison pièce par pièce. Chaque sujet est traité avec des conseils concrets, sans alarmisme.",
  },
  {
    question: "Le site s'adresse-t-il uniquement aux familles ?",
    answer:
      "Non. Maisonbionat s'adresse à toute personne qui veut améliorer la qualité de son logement. Les familles, les parents et les personnes qui attendent un enfant y trouveront des contenus adaptés, mais les sujets traités concernent tous les types de foyers.",
  },
  {
    question: "Comment naviguer selon mon problème ou ma pièce ?",
    answer:
      "Le site propose deux logiques de navigation : par thème (air, matériaux, humidité, produits) et par pièce (chambre, cuisine, salle de bain, etc.). Vous pouvez aussi utiliser la section 'Problèmes fréquents' pour aller directement à ce qui vous concerne.",
  },
];

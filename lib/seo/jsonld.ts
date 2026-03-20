const BASE_URL = "https://www.maisonbionat.fr";

/**
 * Données structurées pour la homepage.
 * WebSite + WebPage.
 * FAQPage est géré séparément dans le composant HomeFaqSection.
 */
export function getHomepageJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Maisonbionat",
      url: BASE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "La maison saine, concrètement.",
      url: `${BASE_URL}/`,
      description:
        "Maisonbionat vous aide à rendre votre logement plus sain : air intérieur, matériaux, humidité, produits du quotidien et rénovation.",
      inLanguage: "fr",
      isPartOf: {
        "@type": "WebSite",
        name: "Maisonbionat",
        url: BASE_URL,
      },
    },
  ];
}

type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Données structurées FAQPage.
 * À utiliser uniquement si la FAQ est réellement visible dans la page.
 */
export function getFaqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type BreadcrumbItem = {
  name: string;
  href: string;
};

/**
 * Données structurées BreadcrumbList.
 * Pour les pages piliers et enfants.
 */
export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

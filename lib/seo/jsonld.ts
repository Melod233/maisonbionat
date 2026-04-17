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

// ──────────────────────────────────────────────────────────
// Données structurées pour les pages d'avis éditoriaux
// ──────────────────────────────────────────────────────────

type BookReviewJsonLdProps = {
  bookTitle: string;
  /** Nom unique (affiché) ou tableau de noms pour les ouvrages collectifs */
  author: string | string[];
  publisher?: string;
  isbn?: string;
  globalRating: number;
  reviewBody: string;
  pageUrl: string;
};

/**
 * Données structurées Review + Book imbriqué.
 * Uniquement si la review est réellement visible dans la page.
 */
export function getBookReviewJsonLd({
  bookTitle,
  author,
  publisher,
  isbn,
  globalRating,
  reviewBody,
  pageUrl,
}: BookReviewJsonLdProps) {
  const authorEntry = Array.isArray(author)
    ? author.map((name) => ({ "@type": "Person" as const, name }))
    : { "@type": "Person" as const, name: author };

  return {
    "@context": "https://schema.org",
    "@type": "Review",
    url: resolveUrl(pageUrl),
    inLanguage: "fr",
    author: {
      "@type": "Organization",
      name: "Maisonbionat",
      url: BASE_URL,
    },
    itemReviewed: {
      "@type": "Book",
      name: bookTitle,
      author: authorEntry,
      ...(publisher
        ? { publisher: { "@type": "Organization", name: publisher } }
        : {}),
      ...(isbn ? { isbn } : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: globalRating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody,
  };
}

// ──────────────────────────────────────────────────────────
// Données structurées pour les guides (WordPress headless)
// ──────────────────────────────────────────────────────────

type GuideJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  image?: string | null;
};

/**
 * Données structurées Article pour un guide.
 */
export function getGuideJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: GuideJsonLdProps) {
  const url = resolveUrl(`/guides/${slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "fr",
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Maisonbionat",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Maisonbionat",
      url: BASE_URL,
    },
    ...(image ? { image } : {}),
  };
}

type BreadcrumbItem = {
  name: string;
  href: string;
};

/**
 * Résout un href en URL absolue de manière robuste.
 *
 * - Si href est déjà une URL absolue  → retourné tel quel (pas de double-préfixe)
 * - Si href est un chemin relatif     → new URL() construit l'URL correctement
 *
 * Évite la concaténation naïve `${BASE_URL}${href}` qui produisait
 * "https://www.maisonbionat.frhttps://www.maisonbionat.fr/..." quand
 * href était déjà absolu.
 */
function resolveUrl(href: string): string {
  return new URL(href, BASE_URL).toString();
}

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
      item: resolveUrl(item.href),
    })),
  };
}

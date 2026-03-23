type BreadcrumbItem = {
  name: string;
  href: string;
};

/**
 * Génère les breadcrumbs pour une page pilier.
 */
export function getSiloBreadcrumbs(siloName: string, siloHref: string): BreadcrumbItem[] {
  return [
    { name: "Accueil", href: "/" },
    { name: siloName, href: siloHref },
  ];
}

/**
 * Génère les breadcrumbs pour une page d'avis (ex: /livres-eco-construction/la-conception-bioclimatique/).
 */
export function getReviewBreadcrumbs(
  categoryLabel: string,
  categoryHref: string,
  reviewLabel: string,
  reviewHref: string
): BreadcrumbItem[] {
  return [
    { name: "Accueil", href: "/" },
    { name: categoryLabel, href: categoryHref },
    { name: reviewLabel, href: reviewHref },
  ];
}

/**
 * Génère les breadcrumbs pour une page enfant.
 */
export function getArticleBreadcrumbs(
  siloName: string,
  siloHref: string,
  articleName: string,
  articleHref: string
): BreadcrumbItem[] {
  return [
    { name: "Accueil", href: "/" },
    { name: siloName, href: siloHref },
    { name: articleName, href: articleHref },
  ];
}

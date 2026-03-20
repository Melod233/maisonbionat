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

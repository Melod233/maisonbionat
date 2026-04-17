import type { Metadata } from "next";

const BASE_URL = "https://www.maisonbionat.fr";

type SiloMetadataParams = {
  title: string;
  description: string;
  slug: string;
};

/**
 * Génère les métadonnées pour une page pilier (silo).
 */
export function buildSiloMetadata({
  title,
  description,
  slug,
}: SiloMetadataParams): Metadata {
  const url = `${BASE_URL}/${slug}/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

type ArticleMetadataParams = {
  title: string;
  description: string;
  siloSlug: string;
  articleSlug: string;
};

/**
 * Génère les métadonnées pour une page enfant (article dans un silo).
 */
export function buildArticleMetadata({
  title,
  description,
  siloSlug,
  articleSlug,
}: ArticleMetadataParams): Metadata {
  const url = `${BASE_URL}/${siloSlug}/${articleSlug}/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
  };
}

// ──────────────────────────────────────────────────────────
// Guides (WordPress headless)
// ──────────────────────────────────────────────────────────

type GuideMetadataParams = {
  title: string;
  description: string;
  slug: string;
  image?: string | null;
  imageWidth?: number | null;
  imageHeight?: number | null;
  imageAlt?: string | null;
  publishedTime?: string;
  modifiedTime?: string;
};

const GUIDE_INDEX_TITLE = "Guides pratiques pour une maison saine";
const GUIDE_INDEX_DESCRIPTION =
  "Retrouvez tous nos guides pour rendre votre maison plus saine, plus naturelle et plus respirable au quotidien.";

/**
 * Métadonnées pour la page index /guides/.
 */
export function buildGuideIndexMetadata(): Metadata {
  const url = `${BASE_URL}/guides/`;
  return {
    title: GUIDE_INDEX_TITLE,
    description: GUIDE_INDEX_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: GUIDE_INDEX_TITLE,
      description: GUIDE_INDEX_DESCRIPTION,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: GUIDE_INDEX_TITLE,
      description: GUIDE_INDEX_DESCRIPTION,
    },
  };
}

/**
 * Métadonnées pour une page guide individuelle /guides/[slug]/.
 */
export function buildGuideMetadata({
  title,
  description,
  slug,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  publishedTime,
  modifiedTime,
}: GuideMetadataParams): Metadata {
  const url = `${BASE_URL}/guides/${slug}/`;

  const ogImages = image
    ? [
        {
          url: image,
          ...(imageWidth ? { width: imageWidth } : {}),
          ...(imageHeight ? { height: imageHeight } : {}),
          ...(imageAlt ? { alt: imageAlt } : {}),
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/**
 * Métadonnées noindex, à utiliser en fallback quand un slug
 * n'est pas (ou plus) disponible côté WordPress.
 */
export const NOINDEX_METADATA: Metadata = {
  robots: { index: false, follow: false },
};

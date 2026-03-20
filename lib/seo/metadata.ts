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

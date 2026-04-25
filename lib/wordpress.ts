const WP_URL = process.env.WORDPRESS_URL;

if (!WP_URL) {
  throw new Error(
    "La variable d'environnement WORDPRESS_URL est manquante. " +
      "Ajoutez-la dans .env.local (ex : https://admin.maisonbionat.fr)"
  );
}

const API = `${WP_URL}/wp-json/wp/v2`;

// ──────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
};

export type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  /** URL de l'image mise en avant (ajoutée via _embed) */
  featuredImage: string | null;
  /** Texte alt de l'image mise en avant */
  featuredImageAlt: string;
  /** Largeur réelle de l'image mise en avant (si disponible via _embed) */
  featuredImageWidth: number | null;
  /** Hauteur réelle de l'image mise en avant (si disponible via _embed) */
  featuredImageHeight: number | null;
  /** Catégories WordPress associées au post (via _embed) */
  categories: WPCategory[];
};

type WPRawTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

type WPRawPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        width?: number;
        height?: number;
      };
    }>;
    "wp:term"?: WPRawTerm[][];
  };
};

// ──────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Décode les entités HTML courantes produites par WordPress
 * (&#8217;, &amp;, &nbsp;, &#039;, etc.).
 */
export function decodeEntities(input: string): string {
  if (!input) return input;
  // &amp; en premier pour gérer le double-encodage (ex: &amp;rsquo; → &rsquo; → ’)
  return input
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    )
    .replace(/&lsquo;/g, "‘")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&sbquo;/g, "‚")
    .replace(/&bdquo;/g, "„")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&middot;/g, "·")
    .replace(/&bull;/g, "•")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™")
    .replace(/&euro;/g, "€")
    .replace(/&deg;/g, "°")
    .replace(/&times;/g, "×")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function mapPost(raw: WPRawPost): WPPost {
  const media = raw._embedded?.["wp:featuredmedia"]?.[0];
  const terms = raw._embedded?.["wp:term"] ?? [];
  const categories: WPCategory[] = terms
    .flat()
    .filter((t) => t.taxonomy === "category")
    .map((t) => ({
      id: t.id,
      name: decodeEntities(t.name),
      slug: t.slug,
    }));

  return {
    id: raw.id,
    slug: raw.slug,
    title: { rendered: decodeEntities(raw.title.rendered) },
    excerpt: { rendered: decodeEntities(raw.excerpt.rendered) },
    content: raw.content,
    date: raw.date,
    modified: raw.modified,
    featuredImage: media?.source_url ?? null,
    featuredImageAlt: decodeEntities(media?.alt_text ?? ""),
    featuredImageWidth: media?.media_details?.width ?? null,
    featuredImageHeight: media?.media_details?.height ?? null,
    categories,
  };
}

// ──────────────────────────────────────────────────────────
// Fetchers
// ──────────────────────────────────────────────────────────

/** Durée de revalidation ISR (en secondes). */
export const REVALIDATE = 300; // 5 minutes

/**
 * Récupère tous les posts publiés, triés par date décroissante.
 * Utilise _embed pour inclure l'image mise en avant.
 */
export async function getAllGuides(): Promise<WPPost[]> {
  const res = await fetch(
    `${API}/posts?_embed&per_page=100&orderby=date&order=desc`,
    { next: { revalidate: REVALIDATE } }
  );
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const raw: WPRawPost[] = await res.json();
  return raw.map(mapPost);
}

/**
 * Récupère un post par son slug.
 */
export async function getGuideBySlug(
  slug: string
): Promise<WPPost | null> {
  const res = await fetch(`${API}/posts?_embed&slug=${slug}`, {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const raw: WPRawPost[] = await res.json();
  if (raw.length === 0) return null;
  return mapPost(raw[0]);
}

/**
 * Récupère tous les slugs (pour generateStaticParams).
 */
export async function getAllGuideSlugs(): Promise<string[]> {
  const res = await fetch(`${API}/posts?per_page=100&_fields=slug`, {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const raw: Array<{ slug: string }> = await res.json();
  return raw.map((p) => p.slug);
}

/**
 * Récupère tous les slugs + date de modification (pour le sitemap).
 */
export async function getAllGuidesForSitemap(): Promise<
  Array<{ slug: string; modified: string }>
> {
  const res = await fetch(
    `${API}/posts?per_page=100&_fields=slug,modified&orderby=modified&order=desc`,
    { next: { revalidate: REVALIDATE } }
  );
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  return res.json();
}

/**
 * Extrait un texte brut à partir de l'excerpt WordPress (HTML),
 * avec décodage des entités.
 */
export function getPlainExcerpt(post: WPPost): string {
  return decodeEntities(stripHtml(post.excerpt.rendered));
}

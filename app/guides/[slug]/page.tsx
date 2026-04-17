import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getGuideBySlug,
  getAllGuideSlugs,
  getAllGuides,
  getPlainExcerpt,
} from "@/lib/wordpress";
import {
  buildGuideMetadata,
  NOINDEX_METADATA,
} from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getGuideJsonLd } from "@/lib/seo/jsonld";
import { getGuideBreadcrumbs } from "@/lib/seo/breadcrumbs";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GuideContent from "@/components/guide/GuideContent";
import GuideCard from "@/components/guide/GuideCard";

export const revalidate = 300;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return NOINDEX_METADATA;
  return buildGuideMetadata({
    title: guide.title.rendered,
    description: getPlainExcerpt(guide),
    slug: guide.slug,
    image: guide.featuredImage,
    imageWidth: guide.featuredImageWidth,
    imageHeight: guide.featuredImageHeight,
    imageAlt: guide.featuredImageAlt || guide.title.rendered,
    publishedTime: guide.date,
    modifiedTime: guide.modified,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const breadcrumbs = getGuideBreadcrumbs(guide.title.rendered, guide.slug);
  const formattedDate = new Date(guide.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Guides associés : on privilégie les guides de la même catégorie
  // WordPress pour renforcer la cohérence éditoriale du silo. Si la
  // catégorie ne remonte pas assez de guides, on complète avec les
  // plus récents hors guide courant.
  const allGuides = await getAllGuides();
  const otherGuides = allGuides.filter((g) => g.slug !== guide.slug);
  const currentCategoryIds = new Set(guide.categories.map((c) => c.id));
  const sameCategory = currentCategoryIds.size
    ? otherGuides.filter((g) =>
        g.categories.some((c) => currentCategoryIds.has(c.id))
      )
    : [];
  const fallback = otherGuides.filter((g) => !sameCategory.includes(g));
  const relatedGuides = [...sameCategory, ...fallback].slice(0, 3);

  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getBreadcrumbJsonLd(breadcrumbs),
            getGuideJsonLd({
              title: guide.title.rendered,
              description: getPlainExcerpt(guide),
              slug: guide.slug,
              datePublished: guide.date,
              dateModified: guide.modified,
              image: guide.featuredImage,
            }),
          ]),
        }}
      />

      <article>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="bg-dark pt-14 pb-0 lg:pt-20">
          <div className="site-container">
            <Breadcrumbs items={breadcrumbs} variant="dark" />

            <div className="mb-8 lg:mb-10">
              <SectionLabel variant="dark">Guide</SectionLabel>
            </div>

            {/* ── Image mise en avant + Titre ──────────────────── */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
              {guide.featuredImage && (
                <div className="shrink-0">
                  <div
                    className="w-full sm:w-[240px] lg:w-[280px] aspect-[4/3] overflow-hidden border border-line-inv"
                    style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.45)" }}
                  >
                    <Image
                      src={guide.featuredImage}
                      alt={guide.featuredImageAlt || guide.title.rendered}
                      width={560}
                      height={420}
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 240px, 100vw"
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <h1
                  className="font-semibold text-ink-inv leading-[1.05] break-words [hyphens:auto]"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {guide.title.rendered}
                </h1>
              </div>
            </div>

            <div className="border-t border-line-inv mt-10 pt-9 pb-16 lg:pb-20">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-dim">
                <time dateTime={guide.date}>{formattedDate}</time>
                {guide.modified !== guide.date && (
                  <span>
                    Mis à jour le{" "}
                    <time dateTime={guide.modified}>
                      {new Date(guide.modified).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contenu ──────────────────────────────────────── */}
        <section className="bg-light py-16 lg:py-20">
          <div className="site-container">
            <div className="max-w-[720px] mx-auto">
              <GuideContent html={guide.content.rendered} />
            </div>
          </div>
        </section>
      </article>

      {/* ── Guides associés ──────────────────────────────── */}
      {relatedGuides.length > 0 && (
        <section
          className="bg-light pb-16 lg:pb-20"
          aria-labelledby="related-guides-heading"
        >
          <div className="site-container">
            <div className="max-w-[880px] mx-auto border-t border-line pt-12 lg:pt-16">
              <div className="mb-8 lg:mb-10">
                <SectionLabel variant="light">Poursuivre</SectionLabel>
                <h2
                  id="related-guides-heading"
                  className="font-semibold text-ink leading-[1.1] mt-4"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Autres guides à lire
                </h2>
              </div>

              <nav aria-label="Guides associés">
                <div className="flex flex-col">
                  {relatedGuides.map((g, i) => (
                    <GuideCard
                      key={g.id}
                      number={String(i + 1).padStart(2, "0")}
                      title={g.title.rendered}
                      excerpt={getPlainExcerpt(g)}
                      date={g.date}
                      href={`/guides/${g.slug}/`}
                    />
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </section>
      )}

      {/* ── Retour guides ────────────────────────────────── */}
      <section className="bg-light pb-16 lg:pb-20">
        <div className="site-container">
          <div className="max-w-[880px] mx-auto border-t border-line pt-8">
            <Link
              href="/guides/"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink hover:text-accent transition-colors duration-150"
            >
              <span
                className="group-hover:-translate-x-0.5 transition-transform duration-150"
                aria-hidden
              >
                ←
              </span>
              Voir tous les guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

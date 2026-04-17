import type { Metadata } from "next";
import { getAllGuides, getPlainExcerpt } from "@/lib/wordpress";
import { buildGuideIndexMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { getGuideIndexBreadcrumbs } from "@/lib/seo/breadcrumbs";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GuideCard from "@/components/guide/GuideCard";

export const metadata: Metadata = buildGuideIndexMetadata();
export const revalidate = 300;

export default async function GuidesPage() {
  const guides = await getAllGuides();
  const breadcrumbs = getGuideIndexBreadcrumbs();

  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-dark pt-14 pb-0 lg:pt-20">
        <div className="site-container">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="mb-8 lg:mb-10">
            <SectionLabel variant="dark">Guides</SectionLabel>
          </div>

          <h1
            className="font-semibold text-ink-inv leading-[1.05]"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5.25rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Guides pratiques
          </h1>

          <div className="border-t border-line-inv mt-10 pt-9 pb-16 lg:pb-20">
            <p className="text-ink-dim text-base leading-[1.7] max-w-[52ch]">
              Des guides concrets pour rendre votre maison plus saine,
              plus naturelle et plus respirable au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* ── Liste des guides ─────────────────────────────── */}
      <section className="bg-light py-16 lg:py-20">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <SectionLabel variant="light">Explorer</SectionLabel>
              <h2
                className="font-semibold text-ink leading-[1.08] mt-4"
                style={{
                  fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Tous les guides
              </h2>
            </div>
            <p className="text-ink-muted text-sm leading-[1.65] max-w-[40ch] lg:text-right">
              {guides.length} guide{guides.length > 1 ? "s" : ""} disponible
              {guides.length > 1 ? "s" : ""}
            </p>
          </div>

          {guides.length === 0 ? (
            <p className="text-ink-muted text-sm py-12">
              Aucun guide pour le moment. Revenez bientôt.
            </p>
          ) : (
            <nav aria-label="Liste des guides">
              <div className="flex flex-col">
                {guides.map((guide, i) => (
                  <GuideCard
                    key={guide.id}
                    number={String(i + 1).padStart(2, "0")}
                    title={guide.title.rendered}
                    excerpt={getPlainExcerpt(guide)}
                    date={guide.date}
                    href={`/guides/${guide.slug}/`}
                  />
                ))}
              </div>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}

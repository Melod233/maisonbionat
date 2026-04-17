import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { getAllGuides, getPlainExcerpt } from "@/lib/wordpress";

export default async function HomeLatestGuidesSection() {
  let latestGuides: Awaited<ReturnType<typeof getAllGuides>> = [];
  try {
    const all = await getAllGuides();
    latestGuides = all.slice(0, 3);
  } catch {
    // WordPress indisponible : on n'affiche pas la section plutôt
    // que de casser la homepage.
    return null;
  }

  if (latestGuides.length === 0) return null;

  return (
    <section
      id="derniers-guides"
      className="bg-white py-16 lg:py-24 border-t border-line"
      aria-labelledby="home-latest-guides-heading"
    >
      <div className="site-container">
        {/* ── En-tête ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">Derniers guides</SectionLabel>
            <h2
              id="home-latest-guides-heading"
              className="font-semibold leading-[1.08] text-ink mt-4"
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Nos derniers guides pour{" "}
              <br className="hidden lg:block" />
              une maison plus saine
            </h2>
          </div>
          <p className="text-ink-muted text-sm leading-[1.65] max-w-[42ch] lg:text-right">
            Des conseils concrets, pensés pour vous aider à avancer sur un
            sujet précis, pièce par pièce ou problème par problème.
          </p>
        </div>

        {/* ── Grille des 3 derniers guides ────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {latestGuides.map((guide) => {
            const excerpt = getPlainExcerpt(guide);
            const href = `/guides/${guide.slug}/`;
            const formattedDate = new Date(guide.date).toLocaleDateString(
              "fr-FR",
              { day: "numeric", month: "long", year: "numeric" }
            );

            return (
              <Link
                key={guide.id}
                href={href}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden border border-line bg-line mb-6">
                  {guide.featuredImage ? (
                    <Image
                      src={guide.featuredImage}
                      alt={guide.featuredImageAlt || guide.title.rendered}
                      width={800}
                      height={600}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="w-full h-full flex items-center justify-center text-ink-muted text-[11px] tracking-widest uppercase"
                    >
                      Guide
                    </div>
                  )}
                </div>

                {/* Métadonnée fine */}
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-ink-muted mb-3">
                  <span className="font-mono text-accent">Guide</span>
                  <span aria-hidden className="opacity-50">
                    /
                  </span>
                  <time dateTime={guide.date}>{formattedDate}</time>
                </div>

                {/* Titre */}
                <h3
                  className="font-semibold text-ink leading-[1.25] group-hover:text-accent transition-colors duration-150 mb-3"
                  style={{
                    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {guide.title.rendered}
                </h3>

                {/* Extrait */}
                <p className="text-sm text-ink-muted leading-[1.65] line-clamp-3 flex-1">
                  {excerpt}
                </p>

                {/* Lien */}
                <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-muted group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-[3px] mt-5">
                  Lire le guide →
                </span>
              </Link>
            );
          })}
        </div>

        {/* ── Lien vers tous les guides ───────────────── */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-line">
          <Link
            href="/guides/"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink hover:text-accent transition-colors duration-150"
          >
            Voir tous les guides
            <span
              aria-hidden
              className="group-hover:translate-x-0.5 transition-transform duration-150"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

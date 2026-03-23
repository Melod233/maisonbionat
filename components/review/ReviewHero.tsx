import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export type ReviewAnchor = {
  id: string;
  label: string;
};

export type ReviewCartouche = {
  label: string;
  value: string;
};

type Props = {
  categoryLabel: string;
  categoryHref: string;
  /** H1 éditorial, contient le titre du livre + angle */
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  globalRating: number;
  cartouches: ReviewCartouche[];
  anchors?: ReviewAnchor[];
  /** Image de couverture de la ressource recensée */
  coverImage?: { src: string; alt: string };
};

export default function ReviewHero({
  categoryLabel,
  categoryHref,
  heroTitle,
  heroSubtitle,
  heroIntro,
  globalRating,
  cartouches,
  anchors,
  coverImage,
}: Props) {
  const ratingDisplay = globalRating.toFixed(1);

  return (
    <section className="bg-dark pt-14 pb-0 lg:pt-20">
      <div className="site-container">

        {/* ── Breadcrumb ───────────────────────────────────── */}
        <Link
          href={categoryHref}
          className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-ink-dim hover:text-accent transition-colors duration-150 mb-10"
        >
          <span
            className="group-hover:-translate-x-0.5 transition-transform duration-150"
            aria-hidden
          >
            ←
          </span>
          {categoryLabel}
        </Link>

        {/* ── Label ────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel variant="dark">Avis éditorial</SectionLabel>
        </div>

        {/* ── Couverture + Titre + Note ────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">

          {/* Couverture (mobile : petite à gauche du titre via flex-row imbriqué) */}
          <div className="flex items-start gap-6 lg:contents">

            {coverImage && (
              <div className="shrink-0 lg:order-none">
                <div
                  className="w-[72px] lg:w-[128px] overflow-hidden"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.55)" }}
                >
                  <Image
                    src={coverImage.src}
                    alt={coverImage.alt}
                    width={128}
                    height={176}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h1
                className="font-semibold text-ink-inv leading-[1.05] break-words [hyphens:auto]"
                style={{
                  fontSize: "clamp(1.75rem, 4.5vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {heroTitle}
              </h1>
              <p className="text-ink-dim text-[13px] uppercase tracking-[0.1em] font-medium mt-5">
                {heroSubtitle}
              </p>
            </div>

          </div>

          {/* Badge de notation */}
          <div className="shrink-0 self-start flex flex-col items-start lg:items-center gap-2">
            <div className="border border-line-inv px-5 py-4 lg:px-7 lg:py-5 text-center min-w-[80px] lg:min-w-[96px]">
              <div
                className="font-semibold text-accent leading-none"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {ratingDisplay}
              </div>
              <div className="text-ink-dim text-[10px] uppercase tracking-[0.18em] mt-1.5">
                / 5
              </div>
            </div>
            <p className="text-ink-dim text-[9px] uppercase tracking-[0.14em] text-center w-full">
              Note éditoriale
            </p>
          </div>

        </div>

        {/* ── Cartouches ───────────────────────────────────── */}
        <div className="mt-10">

          {/* Mobile : grille 2 colonnes */}
          <div className="grid grid-cols-2 gap-px bg-line-inv border-t border-line-inv lg:hidden">
            {cartouches.map((c, i) => (
              <div key={i} className="bg-dark flex flex-col py-4 px-4">
                <span className="text-[9px] uppercase tracking-[0.16em] text-ink-dim mb-1">
                  {c.label}
                </span>
                <span className="text-ink-inv text-sm font-medium">
                  {c.value}
                </span>
              </div>
            ))}
            {cartouches.length % 2 !== 0 && (
              <div className="bg-dark" aria-hidden />
            )}
          </div>

          {/* Desktop : bande horizontale avec séparateurs */}
          <div className="hidden lg:flex flex-wrap border-t border-line-inv">
            {cartouches.map((c, i) => (
              <div
                key={i}
                className="flex flex-col py-4 pr-8 mr-8 border-r border-line-inv last:border-r-0 last:mr-0"
              >
                <span className="text-[9px] uppercase tracking-[0.16em] text-ink-dim mb-1">
                  {c.label}
                </span>
                <span className="text-ink-inv text-sm font-medium">
                  {c.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ── Intro + Navigation de page ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 border-t border-line-inv mt-0 pt-9 pb-16 lg:pb-20">

          <div className="lg:col-span-3">
            <p className="text-ink-dim text-base leading-[1.7] max-w-[52ch]">
              {heroIntro}
            </p>
          </div>

          {anchors && anchors.length > 0 && (
            <nav aria-label="Contenu de la page" className="lg:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.14em] text-ink-dim mb-5 font-medium">
                Sur cette page
              </p>
              <ol className="flex flex-col">
                {anchors.map((anchor, i) => (
                  <li key={anchor.id}>
                    <a
                      href={`#${anchor.id}`}
                      className="group flex items-center gap-3 py-2 border-b border-line-inv last:border-b-0"
                    >
                      <span className="text-accent font-mono text-[10px] shrink-0 leading-none w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-ink-dim group-hover:text-ink-inv transition-[color,transform] duration-150 group-hover:translate-x-[2px]">
                        {anchor.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

        </div>
      </div>
    </section>
  );
}

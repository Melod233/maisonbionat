import Link from "next/link";

const quickLinks = [
  { n: "01", label: "Air intérieur",   href: "/air-interieur/" },
  { n: "02", label: "Humidité",        href: "/humidite-maison/" },
  { n: "03", label: "Matériaux sains", href: "/materiaux-sains/" },
  { n: "04", label: "Produits",        href: "/produits-et-habitudes/" },
];

export default function HomeHero() {
  return (
    <section className="bg-dark pt-14 pb-0 lg:pt-20">
      <div className="site-container">

        {/* ── Label + H1 (unité visuelle) ─────────────── */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[11px] uppercase tracking-[0.15em] text-ink-dim mb-5">
            <span className="text-accent">//</span> Maison saine
          </p>
          <h1
            className="font-semibold leading-[1.05] text-ink-inv"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.25rem)", letterSpacing: "-0.02em" }}
          >
            La maison saine,
            <br />
            concrètement.
          </h1>
        </div>

        {/* ── Intro + CTA | Accès rapides ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 border-t border-line-inv pt-9 lg:pt-11 pb-16 lg:pb-24">

          <div className="flex flex-col justify-between gap-9">
            <p className="text-ink-dim text-base leading-[1.7] max-w-[48ch]">
              Air, matériaux, humidité, produits du quotidien et rénovation :
              Maisonbionat vous aide à identifier les priorités pour un logement
              plus sain, progressivement et sans excès.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="#par-ou-commencer"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white text-sm font-medium px-5 py-3 transition-[background-color,transform] duration-150 hover:-translate-y-px"
              >
                Par où commencer
                <span className="text-sm leading-none transition-transform duration-150 group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
              <Link
                href="#tous-les-sujets"
                className="group inline-flex items-center gap-1.5 text-sm text-ink-dim hover:text-ink-inv transition-colors duration-200"
              >
                Tous les sujets
                <span className="text-[10px] text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150" aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* ── Accès rapides ───────────────────────────── */}
          <div className="grid grid-cols-2 gap-px bg-line-inv self-end">
            {quickLinks.map(({ n, label, href }) => (
              <Link
                key={href}
                href={href}
                className="bg-dark hover:bg-dark-2 flex items-center gap-3 px-5 py-[14px] group transition-colors duration-150"
              >
                <span className="text-accent text-[10px] font-mono shrink-0">
                  {n}
                </span>
                <span className="text-ink-inv text-sm font-medium flex-1">
                  {label}
                </span>
                <span
                  className="text-ink-dim text-xs shrink-0 group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

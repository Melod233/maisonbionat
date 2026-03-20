import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export type PillarAnchor = {
  id: string;
  label: string;
};

type Props = {
  tag: string;
  title: string;
  description: string;
  anchors?: PillarAnchor[];
  parentLabel?: string;
  parentHref?: string;
};

export default function HeroPillar({ tag, title, description, anchors, parentLabel = "Accueil", parentHref = "/" }: Props) {
  return (
    <section className="bg-dark pt-14 pb-0 lg:pt-20">
      <div className="site-container">

        {/* ── Breadcrumb ───────────────────────────────────── */}
        <Link
          href={parentHref}
          className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-ink-dim hover:text-accent transition-colors duration-150 mb-10"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-150" aria-hidden>←</span>
          {parentLabel}
        </Link>

        {/* ── Tag ─────────────────────────────────────────── */}
        <div className="mb-8 lg:mb-10">
          <SectionLabel variant="dark">{tag}</SectionLabel>
        </div>

        {/* ── H1 ──────────────────────────────────────────── */}
        <h1
          className="font-semibold text-ink-inv leading-[1.05]"
          style={{ fontSize: "clamp(2.75rem, 6vw, 5.25rem)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>

        {/* ── Split : description + ancres ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 border-t border-line-inv mt-10 pt-9 pb-16 lg:pb-20">

          {/* Description */}
          <div className="lg:col-span-3">
            <p className="text-ink-dim text-base leading-[1.7] max-w-[52ch]">
              {description}
            </p>
          </div>

          {/* Navigation de page */}
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

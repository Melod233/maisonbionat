import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export type IssueStat = {
  value: string;
  label: string;
};

type Props = {
  parentLabel: string;
  parentHref: string;
  tag: string;
  title: string;
  quickAnswer: string;
  quickAnswerLabel?: string;
  stats?: IssueStat[];
  anchors?: { id: string; label: string }[];
};

function formatStatValue(value: string): string {
  return value
    .replace(/>/g, "> ")
    .replace(/</g, "< ")
    .replace(/–/g, " – ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export default function HeroIssue({
  parentLabel,
  parentHref,
  tag,
  title,
  quickAnswer,
  quickAnswerLabel = "En bref",
  stats,
  anchors,
}: Props) {
  return (
    <section className="bg-dark pt-14 pb-0 lg:pt-20">
      <div className="site-container">

        {/* Breadcrumb */}
        <Link
          href={parentHref}
          className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-ink-dim hover:text-accent transition-colors duration-150 mb-10"
        >
          <span
            className="group-hover:-translate-x-0.5 transition-transform duration-150"
            aria-hidden
          >
            ←
          </span>
          {parentLabel}
        </Link>

        {/* Tag */}
        <SectionLabel variant="dark">{tag}</SectionLabel>

        {/* H1 */}
        <h1
          className="font-semibold text-ink-inv leading-[1.05] mt-5 max-w-[26ch]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>

        {/* Réponse immédiate */}
        <div className="flex gap-5 items-start mt-9 max-w-[58ch]">
          <span className="font-mono text-accent text-[9px] uppercase tracking-[0.18em] shrink-0 pt-[3px] leading-none">
            {quickAnswerLabel}
          </span>
          <div className="flex-1 border-l border-accent/30 pl-5">
            <p className="text-ink-dim text-base leading-[1.75]">{quickAnswer}</p>
          </div>
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line-inv mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-dark-2 px-6 py-6 flex flex-col gap-1.5">
                <span
                  className="font-semibold text-ink-inv leading-none"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", letterSpacing: "-0.02em" }}
                >
                  {formatStatValue(stat.value)}
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-ink-dim leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Navigation de page */}
        {anchors && anchors.length > 0 && (
          <nav
            aria-label="Contenu de la page"
            className="py-5 flex flex-col gap-y-1 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2 border-t border-line-inv"
          >
            {anchors.map((anchor, i) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-ink-dim hover:text-ink-inv transition-colors duration-150"
              >
                <span className="font-mono text-accent text-[9px] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {anchor.label}
              </a>
            ))}
          </nav>
        )}

      </div>
    </section>
  );
}

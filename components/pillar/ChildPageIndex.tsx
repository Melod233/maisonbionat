import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export type ChildPage = {
  number: string;
  title: string;
  description: string;
  href: string;
};

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  pages: ChildPage[];
};

export default function ChildPageIndex({ id, title, subtitle, pages }: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">Explorer ce thème</SectionLabel>
            <h2
              className="font-semibold text-ink leading-[1.08] mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-ink-muted text-sm leading-[1.65] max-w-[40ch] lg:text-right">
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Index des pages enfants ──────────────────────── */}
        <nav aria-label="Pages de ce thème">
        <div className="flex flex-col">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group grid grid-cols-[3rem_1fr_auto] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-center border-t border-line py-6 last:border-b last:border-line hover:bg-white transition-colors duration-150 -mx-6 px-6 lg:-mx-10 lg:px-10"
            >
              {/* Numéro */}
              <span className="font-mono text-accent text-[11px] shrink-0">
                {page.number}
              </span>

              {/* Titre + description */}
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink group-hover:text-accent transition-colors duration-150 leading-snug">
                  {page.title}
                </span>
                <span className="text-sm text-ink-muted leading-[1.65] max-w-[60ch]">
                  {page.description}
                </span>
              </div>

              {/* Flèche */}
              <span
                className="text-ink-muted group-hover:text-accent text-sm transition-[color,transform] duration-150 group-hover:translate-x-1 shrink-0"
                aria-hidden
              >
                →
              </span>
            </Link>
          ))}
        </div>
        </nav>

      </div>
    </section>
  );
}

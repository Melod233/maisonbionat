import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export type Priority = {
  number: string;
  action: string;
  description: string;
  href?: string;
};

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  priorities: Priority[];
  variant?: "light" | "white";
};

export default function PriorityBlock({
  id,
  title,
  subtitle,
  priorities,
  variant = "light",
}: Props) {
  const bg = variant === "white" ? "bg-white" : "bg-light";

  return (
    <section id={id} className={`${bg} py-16 lg:py-20`}>
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">Priorités</SectionLabel>
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

        {/* ── Liste des priorités ──────────────────────────── */}
        <div className="flex flex-col">
          {priorities.map((p) => (
            <div
              key={p.number}
              className="grid grid-cols-[3rem_1fr] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-start border-t border-line py-7 last:border-b last:border-line"
            >
              {/* Numéro */}
              <span
                className="font-mono text-accent leading-none pt-[3px]"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                aria-hidden
              >
                {p.number}
              </span>

              {/* Contenu */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-ink leading-snug">
                  {p.action}
                </h3>
                <p className="text-sm text-ink-muted leading-[1.65] max-w-[60ch]">
                  {p.description}
                </p>
              </div>

              {/* Lien optionnel */}
              {p.href && (
                <div className="col-start-2 lg:col-start-3 mt-3 lg:mt-0 lg:self-center">
                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-1.5 text-[12px] text-ink-muted hover:text-accent transition-[color,transform] duration-150"
                  >
                    En savoir plus
                    <span className="group-hover:translate-x-1 transition-transform duration-150" aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

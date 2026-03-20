import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { essentialGuides } from "@/data/homepage";

export default function HomeGuidesSection() {
  return (
    <section className="bg-light py-16 lg:py-24 border-t border-line">
      <div className="site-container">

        {/* ── En-tête ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">Guides essentiels</SectionLabel>
            <h2
              className="font-semibold leading-[1.08] text-ink mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              L&apos;essentiel avant d&apos;aller plus loin
            </h2>
          </div>
          <p className="text-ink-muted text-sm leading-[1.65] max-w-[40ch] lg:text-right">
            Une sélection de guides structurants, pas un flux d&apos;articles,
            une base pour avancer.
          </p>
        </div>

        {/* ── Trois guides fixes ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
          {essentialGuides.map(({ title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="bg-light hover:bg-white group flex flex-col gap-4 px-6 pt-7 pb-8 transition-colors duration-150"
            >
              <div className="border-t-2 border-accent pt-5">
                <h3 className="text-base font-semibold text-ink leading-snug group-hover:text-accent transition-colors duration-150">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-ink-muted leading-[1.65] flex-1">
                {description}
              </p>
              <span className="text-[12px] text-ink-muted group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-[3px] mt-1">
                Lire le guide →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

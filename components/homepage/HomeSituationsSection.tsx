import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { situationEntries } from "@/data/homepage";

export default function HomeSituationsSection() {
  return (
    <section className="bg-light py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ─────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="light">Votre situation</SectionLabel>
          <h2
            className="font-semibold leading-[1.08] text-ink mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Des priorités différentes{" "}
            <br className="hidden lg:block" />
            selon votre projet
          </h2>
        </div>

        {/* ── Cartes situation ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
          {situationEntries.map(({ label, description, href }) => (
            <Link
              key={href}
              href={href}
              className="bg-light hover:bg-white group flex flex-col gap-3 px-6 py-7 border-t-2 border-transparent hover:border-accent transition-colors duration-150"
            >
              <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors duration-150">
                {label}
              </h3>
              <p className="text-sm text-ink-muted leading-[1.65]">
                {description}
              </p>
              <span className="text-[12px] text-ink-muted group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-[3px] mt-1">
                Voir les conseils →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

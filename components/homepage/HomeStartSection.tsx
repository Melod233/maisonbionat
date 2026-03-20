import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { startCards } from "@/data/homepage";

export default function HomeStartSection() {
  return (
    <section id="par-ou-commencer" className="bg-light py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">Par où commencer</SectionLabel>
            <h2
              className="font-semibold leading-[1.08] text-ink mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Les priorités pour rendre{" "}
              <br className="hidden lg:block" />
              votre maison plus saine
            </h2>
          </div>
          <p className="text-ink-muted text-sm leading-[1.65] max-w-[42ch] lg:text-right">
            Ces quatre sujets couvrent l&apos;essentiel de ce qui peut améliorer
            concrètement votre logement.
          </p>
        </div>

        {/* ── Grille de cartes ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
          {startCards.map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-light hover:bg-white group flex flex-col gap-4 px-6 pt-6 pb-8 transition-colors duration-150"
            >
              {/* Numéro + séparateur */}
              <div className="flex items-center gap-3 border-t-2 border-accent pt-4">
                <span className="text-accent text-[11px] font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">
                {card.label}
              </h3>

              {/* Description */}
              <p className="text-ink-muted text-sm leading-[1.65] flex-1">
                {card.description}
              </p>

              {/* Lien */}
              <span className="text-[12px] text-ink-muted group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-[3px] mt-1">
                Explorer →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

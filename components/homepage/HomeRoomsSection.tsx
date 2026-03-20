import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { roomEntries } from "@/data/homepage";

export default function HomeRoomsSection() {
  return (
    <section className="bg-light py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ─────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="light">Pièce par pièce</SectionLabel>
          <h2
            className="font-semibold leading-[1.08] text-ink mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Commencez par la pièce{" "}
            <br className="hidden lg:block" />
            qui vous préoccupe
          </h2>
        </div>

        {/* ── Grille de pièces ────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-line">
          {roomEntries.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="bg-light hover:bg-white group flex items-center justify-between px-5 py-5 transition-colors duration-150 border-t-2 border-transparent hover:border-accent"
            >
              <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors duration-150">
                {label}
              </span>
              <span
                className="text-ink-muted text-xs ml-2 group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </Link>
          ))}
          {/* Fillers dynamiques selon le nombre de pièces */}
          {(() => {
            const n = roomEntries.length;
            const f2 = (2 - n % 2) % 2;
            const f3 = (3 - n % 3) % 3;
            const f4 = (4 - n % 4) % 4;
            const max = Math.max(f2, f3, f4);
            return Array.from({ length: max }).map((_, i) => {
              const s2 = i < f2;
              const s3 = i < f3;
              const s4 = i < f4;
              const cls = [
                s2 ? "block" : "hidden",
                s3 ? "sm:block" : "sm:hidden",
                s4 ? "lg:block" : "lg:hidden",
              ].join(" ");
              return <div key={i} className={`bg-light ${cls}`} />;
            });
          })()}
        </div>

        {/* ── Lien vers silo ──────────────────────────── */}
        <div className="mt-8 pt-6 border-t border-line">
          <Link
            href="/piece-par-piece/"
            className="text-sm text-ink-muted hover:text-ink transition-colors duration-200 underline underline-offset-4 decoration-line"
          >
            Voir tous les guides par pièce
          </Link>
        </div>

      </div>
    </section>
  );
}

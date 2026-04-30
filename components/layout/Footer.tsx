import Link from "next/link";
import Logo from "./Logo";

const siloLinks = [
  { label: "Air intérieur",         href: "/air-interieur/" },
  { label: "Eau maison",            href: "/eau-maison/" },
  { label: "Matériaux sains",       href: "/materiaux-sains/" },
  { label: "Humidité maison",       href: "/humidite-maison/" },
  { label: "Produits et habitudes", href: "/produits-et-habitudes/" },
  { label: "Pièce par pièce",       href: "/piece-par-piece/" },
  { label: "Rénovation saine",      href: "/renovation-saine/" },
  { label: "Maison saine famille",  href: "/maison-saine-famille/" },
];

// Pages à venir — affichées en texte non cliquable jusqu'à leur création
const pendingLabels = ["À propos", "Contact", "Mentions légales"];


function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 py-2.5 lg:py-1.5 text-[13px] text-ink-dim hover:text-ink-inv transition-colors duration-150 leading-snug"
    >
      <span>{children}</span>
      <span
        className="text-[11px] text-accent opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150 shrink-0"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}

function NavLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-7">
      <span
        className="inline-block w-[5px] h-[5px] rounded-full bg-accent shrink-0"
        aria-hidden="true"
      />
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-dim">
        {children}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden border-t border-line-inv">

      {/* ── Fond graphique ─────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >

        {/*
          Marque M géométrique en filigrane — coin bas droit.
          Path original Logo (viewBox 0 0 24 18) mis à l'échelle ×25 :
          M1.5 16.5 → 37.5 412.5 | V2.5 → 62.5 | L12 9.5 → 300 237.5
          L22.5 2.5 → 562.5 62.5 | V16.5 → 412.5
        */}
        <svg
          className="absolute bottom-0 right-0 opacity-[0.11]"
          width="600"
          height="450"
          viewBox="0 0 600 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M37.5 412.5V62.5L300 237.5L562.5 62.5V412.5"
            stroke="var(--color-ink-inv)"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div className="relative z-10 site-container">

        {/* ── Zone identité ──────────────────────────────── */}
        <div className="pt-16 pb-14 lg:pt-20 lg:pb-16 border-b border-line-inv">
          <Logo />
          <p
            className="mt-8 text-ink-inv font-semibold leading-[1.12] max-w-[20ch]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
          >
            Rendre votre logement<br />
            plus sain, concrètement.
          </p>
          <p className="mt-4 text-ink-dim text-[14px] leading-[1.7] max-w-[42ch]">
            Air intérieur, matériaux, humidité, produits du quotidien et rénovation.
            Des réponses claires, sans jargon.
          </p>
        </div>

        {/* ── Navigation ─────────────────────────────────── */}
        <div className="py-12 lg:py-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-b border-line-inv">

          {/* Thèmes */}
          <nav className="md:col-span-2" aria-label="Navigation thématique">
            <NavLabel>Thèmes</NavLabel>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {siloLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Le site — texte non cliquable jusqu'à la création des pages */}
          <div>
            <NavLabel>Le site</NavLabel>
            <ul>
              {pendingLabels.map((label) => (
                <li key={label}>
                  <span className="block py-2.5 lg:py-1.5 text-[13px] text-ink-dim leading-snug opacity-40">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Barre de bas ────────────────────────────────── */}
        <div className="py-5 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[12px] text-ink-dim">
            © {new Date().getFullYear()} Maisonbionat
          </p>
          <p className="inline-flex items-center gap-2 text-[12px] text-ink-dim">
            <span
              className="text-accent font-medium leading-none"
              style={{ fontSize: "9px" }}
              aria-hidden="true"
            >
              //
            </span>
            Fait avec soin.
          </p>
        </div>

      </div>
    </footer>
  );
}

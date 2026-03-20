import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Logo from "./Logo";

export const navLinks = [
  { label: "Air intérieur",    href: "/air-interieur/" },
  { label: "Matériaux sains",  href: "/materiaux-sains/" },
  { label: "Humidité",         href: "/humidite-maison/" },
  { label: "Produits",         href: "/produits-et-habitudes/" },
  { label: "Pièce par pièce",  href: "/piece-par-piece/" },
  { label: "Rénovation",       href: "/renovation-saine/" },
  { label: "Famille",          href: "/maison-saine-famille/" },
];

export default function Header() {
  return (
    <header className="bg-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">

        {/* ── Logo ───────────────────────────────────── */}
        <Logo />

        {/* ── Navigation desktop ─────────────────────── */}
        <NavDesktop links={navLinks} />

        {/* ── Navigation mobile ──────────────────────── */}
        <div className="lg:hidden">
          <NavMobile links={navLinks} />
        </div>

      </div>
    </header>
  );
}

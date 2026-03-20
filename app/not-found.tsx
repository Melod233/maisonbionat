import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-container py-24 lg:py-32">
      <p
        className="font-mono text-accent leading-none mb-6"
        style={{ fontSize: "11px" }}
        aria-hidden="true"
      >
        404
      </p>
      <h1
        className="font-semibold text-ink leading-[1.08] mb-4"
        style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
      >
        Page introuvable.
      </h1>
      <p className="text-ink-muted text-[15px] leading-[1.65] max-w-[48ch] mb-10">
        Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil
        ou explorez les thèmes principaux.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-150"
        >
          Accueil
        </Link>
        <Link
          href="/air-interieur/"
          className="inline-flex items-center gap-2 px-5 py-3 border border-line text-sm text-ink-muted hover:text-ink hover:border-ink-muted transition-colors duration-150"
        >
          Air intérieur
        </Link>
        <Link
          href="/humidite-maison/"
          className="inline-flex items-center gap-2 px-5 py-3 border border-line text-sm text-ink-muted hover:text-ink hover:border-ink-muted transition-colors duration-150"
        >
          Humidité maison
        </Link>
        <Link
          href="/materiaux-sains/"
          className="inline-flex items-center gap-2 px-5 py-3 border border-line text-sm text-ink-muted hover:text-ink hover:border-ink-muted transition-colors duration-150"
        >
          Matériaux sains
        </Link>
      </div>
    </div>
  );
}

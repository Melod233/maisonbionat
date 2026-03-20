import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Maisonbionat, accueil"
      className="inline-flex items-center gap-[14px] shrink-0 group"
    >
      {/* ── Sigle MBN ──────────────────────────────────────── */}
      <span className="inline-flex items-center gap-[7px]" aria-hidden="true">

        {/* Marque M géométrique */}
        {/*
          Géométrie : deux sommets en haut (caps), vallée centrale à mi-hauteur,
          deux jambes sur la ligne de base. Stroke carré, jointure miter.
          L'accent orange positionné exactement au fond de la vallée (12, 9.5)
          est l'ancre visuelle du sigle.
        */}
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1.5 16.5V2.5L12 9.5L22.5 2.5V16.5"
            stroke="var(--color-ink-inv)"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <rect
            x="10"
            y="7.5"
            width="4"
            height="4"
            fill="var(--color-accent)"
          />
        </svg>

        {/* BN — complète le monogramme */}
        <span
          className="font-semibold leading-none tracking-[0.16em] text-ink-dim"
          style={{ fontSize: "8.5px" }}
        >
          BN
        </span>

      </span>

      {/* ── Règle verticale ────────────────────────────────── */}
      <span
        className="block w-px h-[18px] bg-line-inv shrink-0"
        aria-hidden="true"
      />

      {/* ── Wordmark ───────────────────────────────────────── */}
      <span
        className="font-medium leading-none text-ink-inv group-hover:text-accent transition-colors duration-200"
        style={{ fontSize: "11px", letterSpacing: "0.22em" }}
      >
        MAISONBIONAT
      </span>

    </Link>
  );
}

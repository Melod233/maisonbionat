import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash cohérent avec les URLs canoniques (/silo/)
  trailingSlash: true,

  images: {
    // Formats modernes pour la performance
    formats: ["image/avif", "image/webp"],
    // Domaine WordPress pour les images distantes
    remotePatterns: process.env.WORDPRESS_URL
      ? [
          {
            protocol: new URL(process.env.WORDPRESS_URL).protocol.replace(
              ":",
              ""
            ) as "https" | "http",
            hostname: new URL(process.env.WORDPRESS_URL).hostname,
          },
        ]
      : [],
  },

  // Redirections 301 pour résoudre les cannibalisations / changements d'URL
  async redirects() {
    return [
      {
        source: "/maison-saine-famille/chambre-enfant-saine",
        destination: "/piece-par-piece/chambre-enfant-saine/",
        permanent: true,
      },
      {
        source: "/maison-saine-famille/chambre-enfant-saine/",
        destination: "/piece-par-piece/chambre-enfant-saine/",
        permanent: true,
      },
      // Migration /livres-eco-construction/ -> /avis/livres/
      {
        source: "/livres-eco-construction",
        destination: "/avis/livres/",
        permanent: true,
      },
      {
        source: "/livres-eco-construction/",
        destination: "/avis/livres/",
        permanent: true,
      },
      {
        source: "/livres-eco-construction/la-conception-bioclimatique",
        destination: "/avis/livres/la-conception-bioclimatique/",
        permanent: true,
      },
      {
        source: "/livres-eco-construction/la-conception-bioclimatique/",
        destination: "/avis/livres/la-conception-bioclimatique/",
        permanent: true,
      },
      {
        source: "/livres-eco-construction/manuel-architecture-naturelle",
        destination: "/avis/livres/manuel-architecture-naturelle/",
        permanent: true,
      },
      {
        source: "/livres-eco-construction/manuel-architecture-naturelle/",
        destination: "/avis/livres/manuel-architecture-naturelle/",
        permanent: true,
      },
      // Zone E : fusion sources-humidite-interieure -> problemes-humidite
      {
        source: "/humidite-maison/sources-humidite-interieure",
        destination: "/humidite-maison/problemes-humidite/",
        permanent: true,
      },
      {
        source: "/humidite-maison/sources-humidite-interieure/",
        destination: "/humidite-maison/problemes-humidite/",
        permanent: true,
      },
      // Zone B : fusion isolants-biosources (renovation -> materiaux)
      {
        source: "/renovation-saine/isolants-biosources",
        destination: "/materiaux-sains/isolants-biosources/",
        permanent: true,
      },
      {
        source: "/renovation-saine/isolants-biosources/",
        destination: "/materiaux-sains/isolants-biosources/",
        permanent: true,
      },
    ];
  },

  // Headers de sécurité de base
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

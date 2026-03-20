import type { MetadataRoute } from "next";

const BASE = "https://www.maisonbionat.fr";
const SILOS_UPDATED = "2025-03-20";
const PAGES_UPDATED = "2025-03-20";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ─────────────────────────────────────────────
    {
      url: BASE,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ── Silos ────────────────────────────────────────────────
    {
      url: `${BASE}/air-interieur/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/humidite-maison/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/materiaux-sains/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/produits-et-habitudes/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/piece-par-piece/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/renovation-saine/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/maison-saine-famille/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ── Air intérieur (9) ────────────────────────────────────
    {
      url: `${BASE}/air-interieur/aeration-ou-ventilation/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/air-interieur-pollue/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/ameliorer-air-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/bien-aerer-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/entretien-vmc/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/odeurs-persistantes-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/polluants-interieurs-frequents/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/poussiere-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/sources-pollution-air/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Humidité maison (8) ──────────────────────────────────
    {
      url: `${BASE}/humidite-maison/chambre-humide/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/condensation-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/diagnostic-humidite/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/moisissures-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/problemes-humidite/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/reduire-humidite-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/sources-humidite-interieure/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/ventilation-humidite/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Matériaux sains (9) ──────────────────────────────────
    {
      url: `${BASE}/materiaux-sains/degazage-materiaux/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/degazage-meubles-neufs/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/isolants-biosources/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/materiaux-faibles-emissions/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/materiaux-plus-naturels/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/meubles-faibles-emissions/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/peinture-plus-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/peintures-revetements-faibles-emissions/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/revetements-sol-faibles-emissions/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Produits et habitudes (10) ───────────────────────────
    {
      url: `${BASE}/produits-et-habitudes/alternatives-produits-menagers/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/bougies-paraffine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/desodorisants-air-interieur/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/gestes-maison-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/lessive-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/produits-menagers-irritants/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/produits-menagers-sains/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/recettes-produits-menagers/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/reduire-produits-chimiques-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/produits-et-habitudes/secher-linge-interieur/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Pièce par pièce (7) ──────────────────────────────────
    {
      url: `${BASE}/piece-par-piece/chambre-enfant-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/chambre-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/cuisine-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/exterieur-sain/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/garage-sain/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/salle-de-bain-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/salon-sain/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Rénovation saine (7) ─────────────────────────────────
    {
      url: `${BASE}/renovation-saine/aerer-apres-travaux/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/renovation-saine/artisan-renovation-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/renovation-saine/diagnostic-renovation/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/renovation-saine/isolants-biosources/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/renovation-saine/isolation-ventilation/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/renovation-saine/label-a-plus-travaux/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/renovation-saine/renover-plus-sainement/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Maison saine famille (4) ─────────────────────────────
    {
      url: `${BASE}/maison-saine-famille/chambre-bebe-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/maison-saine-famille/chambre-enfant-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/maison-saine-famille/maison-grossesse/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/maison-saine-famille/produits-menagers-enfants/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

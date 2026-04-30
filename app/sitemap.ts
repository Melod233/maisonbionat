import type { MetadataRoute } from "next";
import { getAllGuidesForSitemap } from "@/lib/wordpress";

const BASE = "https://www.maisonbionat.fr";
const SILOS_UPDATED = "2026-04-30";
const PAGES_UPDATED = "2026-04-30";

// WordPress renvoie modified au format "2024-09-12T14:23:45" (sans Z ni offset),
// ce qui n'est pas un W3C datetime valide pour les sitemaps (Search Console rejette).
// On convertit en Date JS pour que Next.js sérialise en ISO 8601 complet avec Z.
function normalizeWpDate(raw: string, fallback: string): string | Date {
  const d = new Date(raw);
  return isNaN(d.getTime()) ? fallback : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Guides WordPress (récupérés dynamiquement)
  let guideEntries: MetadataRoute.Sitemap = [];
  let guidesIndexLastModified: string | Date = SILOS_UPDATED;
  try {
    const guides = await getAllGuidesForSitemap();
    if (guides.length > 0) {
      guidesIndexLastModified = normalizeWpDate(guides[0].modified, SILOS_UPDATED);
    }
    guideEntries = guides.map((g) => ({
      url: `${BASE}/guides/${g.slug}/`,
      lastModified: normalizeWpDate(g.modified, PAGES_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // En cas d'échec WP, on ne casse pas le sitemap : on renvoie
    // au moins les pages statiques du site.
    guideEntries = [];
  }

  return [
    // ── Homepage ─────────────────────────────────────────────
    {
      url: BASE,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ── Index guides ─────────────────────────────────────────
    {
      url: `${BASE}/guides/`,
      lastModified: guidesIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
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
    {
      url: `${BASE}/eau-maison/`,
      lastModified: SILOS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── Eau maison (8) ───────────────────────────────────────
    {
      url: `${BASE}/eau-maison/qualite-eau-robinet/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/plomb-canalisations/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/nitrates-eau-robinet/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/filtre-eau-robinet/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/pfas-eau-robinet/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/eau-calcaire-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/chlore-eau-robinet/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/eau-maison/eau-bouteille-vs-robinet/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Air intérieur (17) ───────────────────────────────────
    {
      url: `${BASE}/air-interieur/acariens-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
      url: `${BASE}/air-interieur/co2-maison/`,
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
      url: `${BASE}/air-interieur/formaldehyde-maison/`,
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
      url: `${BASE}/air-interieur/plantes-depolluantes-maison/`,
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
      url: `${BASE}/air-interieur/purificateur-air-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/radon-maison/`,
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
    {
      url: `${BASE}/air-interieur/monoxyde-carbone-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/air-interieur/particules-fines-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Humidité maison (13) ─────────────────────────────────
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
      url: `${BASE}/humidite-maison/deshumidificateur-maison/`,
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
      url: `${BASE}/humidite-maison/salpetre-murs/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/taux-humidite-ideal/`,
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
    {
      url: `${BASE}/humidite-maison/remontees-capillaires/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/humidite-maison/condensation-fenetre/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Matériaux sains (13) ─────────────────────────────────
    {
      url: `${BASE}/materiaux-sains/degazage-materiaux/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/etiquetage-cov-comprendre/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/materiaux-sains/colles-faibles-emissions/`,
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
      url: `${BASE}/materiaux-sains/panneaux-bois-formaldehyde/`,
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
    {
      url: `${BASE}/materiaux-sains/parquet-massif-sain/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Produits et habitudes (11) ───────────────────────────
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
    {
      url: `${BASE}/produits-et-habitudes/diffuseur-huiles-essentielles/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Pièce par pièce (10) ─────────────────────────────────
    {
      url: `${BASE}/piece-par-piece/chambre-enfant-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/bureau-teletravail-sain/`,
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
    {
      url: `${BASE}/piece-par-piece/buanderie-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/piece-par-piece/sous-sol-sain/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Rénovation saine (9) ─────────────────────────────────
    {
      url: `${BASE}/renovation-saine/ventilation-pendant-travaux/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
    {
      url: `${BASE}/renovation-saine/vmc-double-flux/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Maison saine famille (5) ─────────────────────────────
    {
      url: `${BASE}/maison-saine-famille/chambre-bebe-saine/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/maison-saine-famille/allergies-respiratoires-enfant/`,
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
    {
      url: `${BASE}/maison-saine-famille/asthme-enfant-maison/`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Guides WordPress (dynamique) ─────────────────────────
    ...guideEntries,
  ];
}

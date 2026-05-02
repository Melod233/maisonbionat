import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

type ExploreTopic = {
  label: string;
  href: string;
};

type ExploreGroup = {
  id: string;
  silo: string;
  siloHref: string;
  topics: ExploreTopic[];
};

type MetaCluster = {
  id: string;
  index: string;
  label: string;
  groups: ExploreGroup[];
};

const metaClusters: MetaCluster[] = [
  {
    id: "air-humidite",
    index: "01",
    label: "Air intérieur & humidité",
    groups: [
      {
        id: "air-interieur",
        silo: "Air intérieur",
        siloHref: "/air-interieur/",
        topics: [
          { label: "Polluants fréquents",       href: "/air-interieur/polluants-interieurs-frequents/" },
          { label: "Aérer correctement",        href: "/air-interieur/bien-aerer-maison/" },
          { label: "Aération vs. ventilation",  href: "/air-interieur/aeration-ou-ventilation/" },
          { label: "Entretien de la VMC",       href: "/air-interieur/entretien-vmc/" },
          { label: "Sources de pollution",      href: "/air-interieur/sources-pollution-air/" },
          { label: "Odeurs persistantes",       href: "/air-interieur/odeurs-persistantes-maison/" },
          { label: "Radon",                     href: "/air-interieur/radon-maison/" },
          { label: "CO₂",                       href: "/air-interieur/co2-maison/" },
          { label: "Acariens",                  href: "/air-interieur/acariens-maison/" },
          { label: "Formaldéhyde",              href: "/air-interieur/formaldehyde-maison/" },
          { label: "Monoxyde de carbone",       href: "/air-interieur/monoxyde-carbone-maison/" },
          { label: "Particules fines",          href: "/air-interieur/particules-fines-maison/" },
          { label: "Purificateur d'air",        href: "/air-interieur/purificateur-air-maison/" },
        ],
      },
      {
        id: "humidite-maison",
        silo: "Humidité",
        siloHref: "/humidite-maison/",
        topics: [
          { label: "Condensation",              href: "/humidite-maison/condensation-maison/" },
          { label: "Condensation fenêtres",     href: "/humidite-maison/condensation-fenetre/" },
          { label: "Moisissures",               href: "/humidite-maison/moisissures-maison/" },
          { label: "Chambre humide",            href: "/humidite-maison/chambre-humide/" },
          { label: "Réduire l'humidité",        href: "/humidite-maison/reduire-humidite-maison/" },
          { label: "Sources d'humidité",        href: "/humidite-maison/sources-humidite-interieure/" },
          { label: "Ventilation et humidité",   href: "/humidite-maison/ventilation-humidite/" },
          { label: "Taux d'humidité idéal",     href: "/humidite-maison/taux-humidite-ideal/" },
          { label: "Salpêtre sur les murs",     href: "/humidite-maison/salpetre-murs/" },
          { label: "Remontées capillaires",     href: "/humidite-maison/remontees-capillaires/" },
        ],
      },
    ],
  },
  {
    id: "materiaux-renovation",
    index: "02",
    label: "Matériaux & rénovation",
    groups: [
      {
        id: "materiaux-sains",
        silo: "Matériaux sains",
        siloHref: "/materiaux-sains/",
        topics: [
          { label: "Peintures faibles émissions", href: "/materiaux-sains/peintures-revetements-faibles-emissions/" },
          { label: "Sols faibles émissions",       href: "/materiaux-sains/revetements-sol-faibles-emissions/" },
          { label: "Meubles faibles émissions",    href: "/materiaux-sains/meubles-faibles-emissions/" },
          { label: "Parquet massif",               href: "/materiaux-sains/parquet-massif-sain/" },
          { label: "Isolants biosourcés",          href: "/materiaux-sains/isolants-biosources/" },
          { label: "Dégazage des matériaux",       href: "/materiaux-sains/degazage-materiaux/" },
        ],
      },
      {
        id: "renovation-saine",
        silo: "Rénovation saine",
        siloHref: "/renovation-saine/",
        topics: [
          { label: "Diagnostic pré-travaux",    href: "/renovation-saine/diagnostic-renovation/" },
          { label: "Isolation et ventilation",  href: "/renovation-saine/isolation-ventilation/" },
          { label: "Isolants biosourcés",       href: "/renovation-saine/isolants-biosources/" },
          { label: "VMC double flux",           href: "/renovation-saine/vmc-double-flux/" },
          { label: "Label A+ matériaux",        href: "/renovation-saine/label-a-plus-travaux/" },
          { label: "Aérer après travaux",       href: "/renovation-saine/aerer-apres-travaux/" },
        ],
      },
    ],
  },
  {
    id: "produits-famille",
    index: "03",
    label: "Produits & vie en famille",
    groups: [
      {
        id: "produits-habitudes",
        silo: "Produits & habitudes",
        siloHref: "/produits-et-habitudes/",
        topics: [
          { label: "Alternatives ménagères",         href: "/produits-et-habitudes/alternatives-produits-menagers/" },
          { label: "Lessive saine",                  href: "/produits-et-habitudes/lessive-saine/" },
          { label: "Gestes du quotidien",            href: "/produits-et-habitudes/gestes-maison-saine/" },
          { label: "Désodorisants d'intérieur",      href: "/produits-et-habitudes/desodorisants-air-interieur/" },
          { label: "Bougies et qualité de l'air",    href: "/produits-et-habitudes/bougies-paraffine/" },
          { label: "Sécher le linge dedans",         href: "/produits-et-habitudes/secher-linge-interieur/" },
          { label: "Diffuseurs huiles essentielles", href: "/produits-et-habitudes/diffuseur-huiles-essentielles/" },
        ],
      },
      {
        id: "maison-saine-famille",
        silo: "Maison & famille",
        siloHref: "/maison-saine-famille/",
        topics: [
          { label: "Chambre de bébé",           href: "/maison-saine-famille/chambre-bebe-saine/" },
          { label: "Produits avec des enfants", href: "/maison-saine-famille/produits-menagers-enfants/" },
          { label: "Maison et grossesse",       href: "/maison-saine-famille/maison-grossesse/" },
          { label: "Asthme de l'enfant",        href: "/maison-saine-famille/asthme-enfant-maison/" },
        ],
      },
    ],
  },
  {
    id: "eau-chauffage",
    index: "04",
    label: "Eau & chauffage",
    groups: [
      {
        id: "eau-maison",
        silo: "Eau maison",
        siloHref: "/eau-maison/",
        topics: [
          { label: "Qualité eau du robinet",      href: "/eau-maison/qualite-eau-robinet/" },
          { label: "Chlore dans l'eau",           href: "/eau-maison/chlore-eau-robinet/" },
          { label: "Plomb dans les canalisations",href: "/eau-maison/plomb-canalisations/" },
          { label: "Nitrates",                    href: "/eau-maison/nitrates-eau-robinet/" },
          { label: "PFAS dans l'eau",             href: "/eau-maison/pfas-eau-robinet/" },
          { label: "Eau calcaire",                href: "/eau-maison/eau-calcaire-maison/" },
          { label: "Filtres à eau",               href: "/eau-maison/filtre-eau-robinet/" },
          { label: "Eau bouteille vs robinet",    href: "/eau-maison/eau-bouteille-vs-robinet/" },
        ],
      },
      {
        id: "chauffage-sain",
        silo: "Chauffage sain",
        siloHref: "/chauffage-sain/",
        topics: [
          { label: "Choisir son chauffage",           href: "/chauffage-sain/choisir-chauffage-renovation/" },
          { label: "Chauffage électrique",            href: "/chauffage-sain/chauffage-electrique-sain/" },
          { label: "Pompe à chaleur air-eau",         href: "/chauffage-sain/pompe-a-chaleur-air-eau/" },
          { label: "Poêle à bois et air intérieur",   href: "/chauffage-sain/poele-bois-air-interieur/" },
        ],
      },
    ],
  },
];

export default function HomeExploreSection() {
  return (
    <section className="bg-dark py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <SectionLabel variant="dark">Explorer en profondeur</SectionLabel>
            <h2
              className="font-semibold leading-[1.08] text-ink-inv mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Que voulez-vous approfondir ?
            </h2>
          </div>
          <p className="text-ink-dim text-sm leading-[1.65] max-w-[38ch] lg:text-right">
            Des pages consacrées aux questions concrètes de la maison saine,
            organisées par thème.
          </p>
        </div>

        {/* ── Clusters thématiques ──────────────────────── */}
        <div className="flex flex-col">
          {metaClusters.map((cluster) => (
            <div key={cluster.id} className="border-t border-line-inv pt-10 pb-12 lg:pt-12 lg:pb-16">

              {/* Cluster header : index + label + ligne décorative */}
              <div className="flex items-center gap-3 mb-8 lg:mb-10">
                <span
                  className="font-mono text-accent leading-none shrink-0"
                  style={{ fontSize: "11px" }}
                  aria-hidden
                >
                  {cluster.index}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-dim shrink-0">
                  {cluster.label}
                </span>
                <div className="flex-1 h-px bg-line-inv opacity-20" aria-hidden />
              </div>

              {/* Deux silos côte à côte */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {cluster.groups.map((group) => (
                  <div key={group.id}>

                    {/* Silo title link */}
                    <Link
                      href={group.siloHref}
                      className="group inline-flex items-center gap-2 mb-5"
                    >
                      <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-inv group-hover:text-accent transition-colors duration-150">
                        {group.silo}
                      </span>
                      <span
                        className="text-ink-dim group-hover:text-accent text-[11px] transition-[color,transform] duration-150 group-hover:translate-x-[2px] shrink-0"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>

                    {/* Topic pills */}
                    <div className="flex flex-wrap gap-2">
                      {group.topics.map((topic) => (
                        <Link
                          key={topic.href}
                          href={topic.href}
                          className="group relative inline-flex items-center justify-center px-5 py-3 lg:py-2 border border-line-inv hover:border-accent hover:bg-dark-2 text-sm text-ink-dim hover:text-ink-inv transition-[color,border-color,background-color] duration-200"
                        >
                          <span className="transition-transform duration-200 group-hover:-translate-x-2">
                            {topic.label}
                          </span>
                          <span
                            className="absolute right-3 text-accent text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Fermeture */}
          <div className="border-t border-line-inv" aria-hidden />
        </div>

      </div>
    </section>
  );
}

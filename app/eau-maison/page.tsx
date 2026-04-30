import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroPillar from "@/components/pillar/HeroPillar";
import InsightGrid from "@/components/pillar/InsightGrid";
import PriorityBlock from "@/components/pillar/PriorityBlock";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import ChildPageIndex from "@/components/pillar/ChildPageIndex";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Eau dans la maison : qualité, filtration et canalisations",
  description:
    "Qualité de l'eau du robinet, filtres, plomb dans les canalisations, nitrates : comprendre ce qu'on consomme à la maison et agir en connaissance de cause.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/",
  },
  openGraph: {
    title: "Eau dans la maison : qualité, filtration et canalisations",
    description:
      "Qualité de l'eau du robinet, filtres, plomb dans les canalisations, nitrates : comprendre ce qu'on consomme à la maison et agir en connaissance de cause.",
    url: "https://www.maisonbionat.fr/eau-maison/",
  },
};

export default function EauMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
  ]);
  const faqItems = [
    {
      question: "L'eau du robinet en France est-elle de bonne qualité ?",
      answer:
        "La France a l'un des contrôles sanitaires de l'eau potable les plus stricts en Europe, piloté par les Agences régionales de santé (ARS). Les analyses portent sur la microbiologie et environ 70 substances chimiques (nitrates, pesticides, métaux, sous-produits de désinfection). Plus de 96 % de la population française est desservie par une eau conforme aux limites de qualité en analyse globale. Les non-conformités concernent essentiellement les pesticides en zone agricole et les nitrates dans certains bassins versants. Vous pouvez consulter la qualité de votre eau sur le site de l'ARS de votre région ou sur la carte interactive d'UFC Que Choisir.",
    },
    {
      question: "Faut-il filtrer son eau du robinet ?",
      answer:
        "Pas systématiquement. Pour la majorité des Français desservis par un réseau public conforme, l'eau du robinet est consommable sans filtration. Une carafe filtrante peut améliorer le goût (chlore résiduel, calcaire) mais n'est pas une nécessité sanitaire. La filtration devient pertinente dans trois cas précis : canalisations en plomb suspectes (logement avant 1949), eau de puits ou forage privé, contamination locale documentée (pesticides, nitrates au-dessus du seuil pour nourrissons). Choisir le filtre selon le polluant ciblé : charbon actif pour le chlore et les COV, osmoseur pour métaux lourds et polluants persistants.",
    },
    {
      question: "Mon logement est ancien : risque-t-il d'avoir des canalisations en plomb ?",
      answer:
        "Probablement si la maison a été construite avant 1949, le plomb étant le matériau de prédilection des canalisations privatives jusqu'à cette date. Selon le Conseil général de l'environnement et du développement durable, environ 7,5 millions de logements en France (22 % du parc) seraient encore concernés. La limite réglementaire de 10 µg/L de plomb dans l'eau au robinet (en vigueur depuis le 25 décembre 2013) est strictement applicable, et les canalisations privatives sont à la charge du propriétaire. Une analyse d'eau (40 à 80 € en laboratoire agréé COFRAC) suffit à lever le doute.",
    },
    {
      question: "Faut-il s'inquiéter des nitrates pour un bébé ou une grossesse ?",
      answer:
        "C'est le seul cas où la prudence est explicitement justifiée par les autorités sanitaires. La limite réglementaire française pour les nitrates dans l'eau potable est de 50 mg/L, mais l'OMS et l'ANSES recommandent de ne pas dépasser 10 mg/L pour les nourrissons de moins de 6 mois (risque de méthémoglobinémie ou « syndrome du bébé bleu ») et conseillent la prudence pour les femmes enceintes. Si votre eau dépasse 10 mg/L de nitrates (information disponible sur la facture d'eau ou auprès de l'ARS), utilisez une eau en bouteille faiblement minéralisée pour la préparation des biberons jusqu'à 6 mois.",
    },
    {
      question: "Que valent vraiment les carafes filtrantes ?",
      answer:
        "Elles font ce qu'elles annoncent partiellement : le charbon actif retient bien le chlore résiduel (effet sur le goût) et certains COV, les résines échangeuses d'ions adoucissent partiellement le calcaire. Mais l'ANSES a alerté sur leurs limites : aucune efficacité démontrée sur les PFAS (polluants persistants), efficacité limitée sur les métaux lourds, risque de relargage de contaminants captés par la cartouche si elle est utilisée trop longtemps ou mal conservée. Recommandations ANSES : changer la cartouche selon les indications fabricant (souvent toutes les 4 semaines), conserver la carafe au réfrigérateur, consommer l'eau dans les 24 heures.",
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ① Hero */}
      <HeroPillar
        tag="Eau maison"
        title="L'eau qu'on boit, qu'on cuisine, qu'on donne à un bébé."
        description="Qualité de l'eau du robinet, plomb des canalisations privatives, nitrates en zone agricole, choix d'un filtre adapté : comprendre ce qui circule dans la maison et agir là où c'est utile, sans surenchère."
        anchors={[
          { id: "comprendre", label: "Ce qu'il faut savoir" },
          { id: "priorites", label: "Les priorités concrètes" },
          { id: "erreurs", label: "Erreurs fréquentes" },
          { id: "explorer", label: "Explorer ce thème" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      {/* ② Insights */}
      <InsightGrid
        id="comprendre"
        title="Ce qu'il faut savoir sur l'eau de la maison"
        insights={[
          {
            number: "01",
            label: "Contrôle sanitaire renforcé",
            text: "L'eau du robinet est, en France, l'un des aliments les plus contrôlés. Les ARS pilotent un contrôle multi-points (ressource, station de traitement, robinet) sur la microbiologie et environ 70 substances chimiques.",
          },
          {
            number: "02",
            label: "Plomb : 10 µg/L depuis 2013",
            text: "Le seuil réglementaire est passé à 10 µg/L au 25 décembre 2013 (décret du 22 décembre 2001). Selon le CGEDD, ~7,5 millions de logements pré-1949 (22 % du parc) ont potentiellement encore des canalisations privatives en plomb.",
          },
          {
            number: "03",
            label: "Nitrates : limite 50 mg/L",
            text: "Limite de qualité française. Mais l'OMS et l'ANSES recommandent ≤ 10 mg/L pour les nourrissons et femmes enceintes (risque de méthémoglobinémie). Bretagne, Beauce, Centre-Val de Loire en zones agricoles sont les plus exposées.",
          },
          {
            number: "04",
            label: "Pesticides en surveillance",
            text: "La limite est de 0,1 µg/L par molécule et 0,5 µg/L cumulés. Les non-conformités sont essentiellement liées aux métabolites de pesticides agricoles, en hausse depuis 2020 du fait de l'élargissement des paramètres recherchés.",
          },
          {
            number: "05",
            label: "Carafes filtrantes : utilité limitée",
            text: "Le charbon actif retient le chlore et certains COV. L'ANSES alerte sur l'absence d'efficacité sur les PFAS, le risque de relargage si cartouche mal entretenue, et impose une utilisation rigoureuse (changement régulier, conservation au frigo, eau consommée < 24 h).",
          },
          {
            number: "06",
            label: "Osmoseur : le plus efficace mais coûteux",
            text: "Seul dispositif domestique à filtrer métaux lourds, pesticides et polluants persistants. Mais rejette 3 à 5 L d'eau pour 1 L filtré, déminéralise totalement (à reminéraliser ensuite) et coûte 400-1500 € installé. À réserver aux cas où la filtration est vraiment justifiée.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Par où commencer pour l'eau de votre logement"
        subtitle="Trois étapes simples pour décider en connaissance de cause, sans surcoût inutile."
        priorities={[
          {
            number: "01",
            action: "Consulter la qualité de l'eau de votre commune",
            description:
              "Rendez-vous sur le site de votre ARS ou sur la carte interactive UFC Que Choisir. Vous y trouverez les analyses publiques sur les nitrates, pesticides, microbiologie, dureté. C'est gratuit, immédiat, et ça oriente toutes les décisions suivantes.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            number: "02",
            action: "Vérifier vos canalisations privatives si maison ancienne",
            description:
              "Logement construit avant 1949 ou non rénové depuis : risque de plomb dans les conduites. Une analyse d'eau au robinet (40-80 € en laboratoire COFRAC) tranche définitivement. La canalisation est à la charge du propriétaire, pas du distributeur.",
            href: "/eau-maison/plomb-canalisations/",
          },
          {
            number: "03",
            action: "Choisir un filtre seulement si nécessaire",
            description:
              "Carafe pour le goût (chlore), filtre sous évier au charbon actif pour les COV, osmoseur uniquement si métaux lourds ou polluants persistants documentés. Filtrer sans cause identifiée coûte cher pour un bénéfice nul.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Ce qu'on croit à tort sur l'eau de la maison"
        errors={[
          {
            label: "L'eau en bouteille est toujours plus saine que l'eau du robinet",
            explanation:
              "Faux dans la majorité des cas. L'eau du robinet en France est plus contrôlée que l'eau en bouteille (analyses plus fréquentes, plus de paramètres, traçabilité ARS). L'eau en bouteille a un coût environnemental et financier 100 à 300 fois supérieur, sans bénéfice sanitaire démontré pour la grande majorité des consommateurs. Exception justifiée : préparation des biberons en zone à nitrates > 10 mg/L.",
          },
          {
            label: "Le calcaire dans l'eau est mauvais pour la santé",
            explanation:
              "Le calcaire (carbonate de calcium et magnésium) n'a aucun effet sanitaire négatif documenté. Au contraire, il contribue aux apports en calcium et magnésium. Les adoucisseurs sont utiles pour préserver les appareils ménagers, pas pour la santé. Ne jamais boire d'eau adoucie sans by-pass : l'eau adoucie est trop chargée en sodium pour une consommation régulière.",
          },
          {
            label: "Une carafe filtrante règle tous les problèmes",
            explanation:
              "Une carafe filtre le chlore et certains COV, c'est tout. Elle n'a pas d'effet sur les PFAS, peu sur les métaux lourds, et peut elle-même devenir une source de contamination si la cartouche est trop vieille ou la carafe mal conservée. L'ANSES impose un usage rigoureux pour qu'elle reste utile.",
          },
          {
            label: "L'eau du puits est plus naturelle, donc meilleure",
            explanation:
              "Au contraire. Une eau de puits ou de forage privé n'est soumise à aucun contrôle sanitaire automatique. Elle peut contenir nitrates, pesticides, bactéries, métaux selon le sous-sol et l'environnement agricole. Toute consommation impose une analyse complète initiale puis annuelle, et souvent un traitement adapté (UV, charbon actif, parfois osmoseur).",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer l'eau de la maison en détail"
        subtitle="Huit sujets pour décider en connaissance de cause selon votre situation."
        pages={[
          {
            number: "01",
            title: "Qualité de l'eau du robinet en France",
            description: "Système de contrôle ARS, paramètres surveillés, lecture des résultats publics, principaux dépassements observés. Comment vérifier l'eau de votre commune en quelques minutes.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            number: "02",
            title: "Plomb dans les canalisations : reconnaître et agir",
            description: "Logements construits avant 1949, identification visuelle des conduites, mesure au robinet, obligations légales et coûts de remplacement.",
            href: "/eau-maison/plomb-canalisations/",
          },
          {
            number: "03",
            title: "Nitrates dans l'eau : nourrissons et femmes enceintes",
            description: "Seuil 50 mg/L vs recommandation 10 mg/L pour les populations sensibles, zones les plus exposées, alternatives pour la préparation des biberons.",
            href: "/eau-maison/nitrates-eau-robinet/",
          },
          {
            number: "04",
            title: "Filtre à eau : carafe, charbon actif ou osmoseur ?",
            description: "Comparatif des solutions de filtration domestique : ce que filtre vraiment chaque dispositif, coût, entretien, recommandations ANSES.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
          {
            number: "05",
            title: "PFAS dans l'eau du robinet : seuil 0,1 µg/L applicable en 2026",
            description: "Polluants éternels : nouvelle limite européenne, 22 réseaux français en dépassement, zones à risque (vallée du Rhône, Salindres, aéroports) et solutions de filtration efficaces.",
            href: "/eau-maison/pfas-eau-robinet/",
          },
          {
            number: "06",
            title: "Eau calcaire à la maison : santé, peau, électroménager",
            description: "Comprendre la dureté (TH) avant d'investir dans un adoucisseur. Pas d'effet santé documenté, mais nuisances domestiques et énergétiques bien réelles. Les pièges de l'eau adoucie.",
            href: "/eau-maison/eau-calcaire-maison/",
          },
          {
            number: "07",
            title: "Chlore dans l'eau du robinet : goût et sécurité",
            description: "Pourquoi le chlore est là, ce que dit l'arrêté du 11 janvier 2007, sous-produits de désinfection (THM) et solutions simples pour atténuer le goût sans investir lourd.",
            href: "/eau-maison/chlore-eau-robinet/",
          },
          {
            number: "08",
            title: "Eau du robinet ou eau en bouteille : le comparatif honnête",
            description: "Santé, coût, environnement, traçabilité. Données ANSES et ADEME, affaire Nestlé Waters, microplastiques, et les cas où la bouteille reste justifiée.",
            href: "/eau-maison/eau-bouteille-vs-robinet/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'eau de la maison"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Maison saine famille",
            title: "Maison et grossesse",
            description:
              "Précautions pendant la grossesse, dont la qualité de l'eau consommée et les choix pour la préparation des biberons à venir.",
            href: "/maison-saine-famille/maison-grossesse/",
          },
          {
            tag: "Humidité maison",
            title: "Humidité et habitat",
            description:
              "L'eau dans le logement ne se limite pas à l'eau potable : humidité ambiante, infiltrations, condensation forment un autre versant de la maison saine.",
            href: "/humidite-maison/",
          },
          {
            tag: "Rénovation saine",
            title: "Diagnostic avant rénovation",
            description:
              "Avant tous travaux dans un logement ancien : penser aux canalisations en plomb au même titre que l'amiante et la peinture au plomb.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
        ]}
      />
    </>
  );
}

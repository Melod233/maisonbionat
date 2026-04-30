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
  title: "Produits et habitudes : réduire la pollution chimique au quotidien",
  description:
    "Produits ménagers, bougies, sprays, lessive : identifier les sources de pollution chimique dans votre logement et les remplacer progressivement par des alternatives plus saines.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/",
  },
  openGraph: {
    title: "Produits et habitudes : réduire la pollution chimique au quotidien",
    description:
      "Produits ménagers, bougies, sprays, lessive : identifier les sources de pollution chimique dans votre logement et les remplacer progressivement par des alternatives plus saines.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/",
  },
};

export default function ProduitsEtHabitudesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
  ]);
  const faqItems = [
    {
      question: "Les bougies sont-elles dangereuses pour la santé ?",
      answer:
        "Les bougies en paraffine libèrent du benzène, du toluène et des particules fines (PM2,5) en brûlant. Dans une pièce fermée, leur usage régulier peut dégrader significativement la qualité de l'air. Les alternatives en cire de soja ou d'abeille, sans parfum synthétique, sont nettement moins émissives. Dans tous les cas, aérez la pièce.",
    },
    {
      question: "Le vinaigre blanc est-il vraiment efficace pour nettoyer ?",
      answer:
        "Le vinaigre blanc est efficace sur le calcaire, certaines bactéries et les odeurs. Il ne remplace pas un désinfectant médical, mais pour l'entretien courant (surfaces, vitres, sanitaires), il est suffisant dans la majorité des situations et émet très peu de COV. Son odeur se dissipe rapidement.",
    },
    {
      question: "Faut-il vraiment changer ses habitudes de ménage ?",
      answer:
        "Pas forcément tout changer. L'impact le plus significatif vient des quelques produits les plus émissifs : sprays désodorisants, nettoyants multi-usages en aérosol, bougies paraffine dans les espaces fermés. Remplacer ces produits en priorité donne la majeure partie du bénéfice.",
    },
    {
      question: "Les huiles essentielles améliorent-elles l'air ?",
      answer:
        "Non. Les huiles essentielles sont des COV naturels. Diffusées dans un espace fermé, elles ajoutent des composés volatils à l'air. Certaines (eucalyptus, menthe) peuvent être irritantes pour les enfants et les personnes asthmatiques. Elles peuvent parfumer agréablement, mais ne purifient pas l'air.",
    },
    {
      question: "Comment réduire les acariens sans produits chimiques ?",
      answer:
        "Les acariens se développent dans les environnements chauds et humides. Les mesures les plus efficaces : maintenir l'hygrométrie en dessous de 50 %, laver la literie à 60 °C régulièrement, utiliser des housses anti-acariens sur matelas et oreillers, aspirer avec un filtre HEPA. Les sprays anti-acariens chimiques sont moins efficaces que ces mesures préventives.",
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
        tag="Produits et habitudes"
        title="Ce que vous utilisez chaque jour pollue aussi votre air."
        description="Nettoyants, bougies, parfums d'ambiance, lessive en spray : les produits du quotidien sont une source majeure de polluants intérieurs souvent sous-estimée. Identifier, remplacer progressivement, sans radicalité."
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
        title="Ce que les produits du quotidien font à votre logement"
        insights={[
          {
            number: "01",
            label: "Parfums d'ambiance",
            text: "Les études ADEME (programme PRESSENS) montrent que les sprays manuels et aérosols sont les désodorisants les plus émissifs. Plusieurs dépassements de valeurs de référence ont été mesurés pour le benzène, l'acroléine, le formaldéhyde et les particules fines.",
          },
          {
            number: "02",
            label: "Bougies à la paraffine",
            text: "Les bougies en paraffine (dérivé du pétrole) libèrent en brûlant du benzène, du toluène et des particules fines. Dans une pièce fermée, une bougie allumée peut dépasser les seuils recommandés pour les PM2,5.",
          },
          {
            number: "03",
            label: "Linge intérieur",
            text: "Une lessive séchée sur étendoir libère environ 2 litres d'eau dans l'air intérieur. Selon une étude écossaise, le taux d'humidité augmente de 30 % le jour du séchage, et reste supérieur de 15 % les jours suivants dans un logement mal ventilé.",
          },
          {
            number: "04",
            label: "Allergènes ménagers",
            text: "Les acariens prolifèrent au-dessus de 50 % d'humidité relative et 20 °C. Les moquettes, coussins et literies non protégées sont les réservoirs principaux. Une hygiène régulière et un taux d'hygrométrie maîtrisé limitent fortement leur présence.",
          },
        ]}
      />

      {/* ③ Priorités */}
      <PriorityBlock
        id="priorites"
        title="Agir sur les produits dans le bon ordre"
        subtitle="Les substitutions les plus simples avec le plus grand impact sur l'air intérieur."
        priorities={[
          {
            number: "01",
            action: "Supprimer les sprays parfumés et désodorisants",
            description:
              "Désodorisants d'ambiance, sprays WC, diffuseurs chimiques : ces produits masquent les odeurs sans les traiter et ajoutent des COV dans l'air. Remplacez-les par une aération efficace : c'est gratuit et plus efficace.",
            href: "/produits-et-habitudes/desodorisants-air-interieur/",
          },
          {
            number: "02",
            action: "Remplacer bougies paraffine par bougies cire végétale",
            description:
              "Les bougies en cire de soja ou d'abeille émettent nettement moins de particules et de COV que la paraffine. Si vous utilisez des bougies, préférez celles à cire végétale, sans parfum synthétique, et aérez la pièce.",
            href: "/produits-et-habitudes/bougies-paraffine/",
          },
          {
            number: "03",
            action: "Faire sécher le linge à l'extérieur ou en pièce ventilée",
            description:
              "Sécher le linge dans une pièce fermée est l'une des causes les plus fréquentes d'excès d'humidité. Si l'extérieur est impossible, privilégiez une pièce dédiée avec fenêtre entrouverte ou sèche-linge à condensation.",
            href: "/produits-et-habitudes/secher-linge-interieur/",
          },
          {
            number: "04",
            action: "Passer aux produits ménagers à faibles COV",
            description:
              "Bicarbonate de soude, vinaigre blanc, savon de Marseille : des solutions à faible coût et faibles émissions pour la majorité des usages ménagers courants. Réservez les produits puissants aux situations qui le nécessitent vraiment.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
        ]}
      />

      {/* ④ Erreurs */}
      <ErrorCallout
        id="erreurs"
        title="Les erreurs qui dégradent votre air sans que vous le sachiez"
        errors={[
          {
            label: "Utiliser un spray après avoir nettoyé",
            explanation:
              "Pulvériser un désinfectant ou un parfum d'ambiance juste après le ménage cumule les sources de COV. Les nettoyants eux-mêmes émettent déjà des composés volatils : le spray final aggrave l'exposition.",
          },
          {
            label: "Allumer une bougie dans une pièce fermée",
            explanation:
              "Une bougie dans un espace mal ventilé peut rapidement dépasser les recommandations en PM2,5. Toujours aérer légèrement avant et après utilisation, surtout dans une chambre ou une salle de bain.",
          },
          {
            label: "Les produits \"naturels\" sont toujours sûrs",
            explanation:
              "Un produit labellisé \"naturel\" ou \"bio\" peut encore contenir des huiles essentielles irritantes ou des agents tensioactifs émissifs. Le critère pertinent est la liste des ingrédients, pas le positionnement marketing.",
          },
          {
            label: "Le ménage quotidien protège de la poussière",
            explanation:
              "Passer l'aspirateur sans filtre HEPA recycle la poussière et les acariens dans l'air. Un aspirateur inadapté peut dégrader la qualité de l'air plutôt que l'améliorer.",
          },
        ]}
      />

      {/* ⑤ Pages enfants */}
      <ChildPageIndex
        id="explorer"
        title="Explorer les produits et habitudes en détail"
        subtitle="Guides pratiques pour changer progressivement sans se compliquer la vie."
        pages={[
          {
            number: "01",
            title: "Alternatives aux produits ménagers",
            description: "Bicarbonate, vinaigre, savon noir : ce qui fonctionne vraiment, comment s'en servir et ce qu'on ne peut pas remplacer facilement.",
            href: "/produits-et-habitudes/alternatives-produits-menagers/",
          },
          {
            number: "02",
            title: "Recettes de produits ménagers maison",
            description: "Recettes simples et fiables pour fabriquer ses propres nettoyants, à base d'ingrédients courants et peu coûteux.",
            href: "/produits-et-habitudes/recettes-produits-menagers/",
          },
          {
            number: "03",
            title: "Choisir une lessive plus saine",
            description: "Lessive liquide, en poudre, en feuilles ou maison : impact sur les allergènes et l'air intérieur. Labels et ingrédients à connaître.",
            href: "/produits-et-habitudes/lessive-saine/",
          },
          {
            number: "04",
            title: "Les gestes du quotidien pour une maison saine",
            description: "Habitudes simples à intégrer dans la routine : aération, cuisine, séchage, nettoyage, pour un impact réel sans dépense.",
            href: "/produits-et-habitudes/gestes-maison-saine/",
          },
          {
            number: "05",
            title: "Désodorisants et parfums d'intérieur",
            description: "Les désodorisants masquent les odeurs en ajoutant des COV à l'air. Comprendre leur impact et les alternatives réelles.",
            href: "/produits-et-habitudes/desodorisants-air-interieur/",
          },
          {
            number: "06",
            title: "Bougies à la paraffine et qualité de l'air",
            description: "Ce qu'émettent les bougies courantes, les différences entre types de cire, et comment minimiser l'impact si vous en utilisez.",
            href: "/produits-et-habitudes/bougies-paraffine/",
          },
          {
            number: "07",
            title: "Sécher le linge à l'intérieur",
            description: "Impact sur l'humidité et la qualité de l'air, risques réels, alternatives et méthode correcte quand il n'y a pas d'autre choix.",
            href: "/produits-et-habitudes/secher-linge-interieur/",
          },
          {
            number: "08",
            title: "Choisir des produits ménagers sains",
            description: "Labels, ingrédients à éviter, lecture d'étiquette : comment naviguer l'offre commerciale pour des choix moins problématiques.",
            href: "/produits-et-habitudes/produits-menagers-sains/",
          },
          {
            number: "09",
            title: "Produits ménagers irritants : identifier et remplacer les plus nocifs",
            description: "Sprays, javel, parfums d'ambiance : certains produits dégradent l'air intérieur sans que vous le sachiez. Identifier les plus émissifs et les remplacer progressivement.",
            href: "/produits-et-habitudes/produits-menagers-irritants/",
          },
          {
            number: "10",
            title: "Réduire les produits chimiques à la maison : par quoi commencer",
            description: "44 % des produits d'entretien courants contiennent des composés dangereux. La plupart des substitutions sont simples et moins chères. Un guide pour agir dans le bon ordre.",
            href: "/produits-et-habitudes/reduire-produits-chimiques-maison/",
          },
          {
            number: "11",
            title: "Diffuseur d'huiles essentielles : précautions et alternatives",
            description: "Position ANSES (1 400+ cas centres antipoison entre 2011-2019), précautions enfants/femmes enceintes/asthmatiques, alternatives crédibles à la diffusion.",
            href: "/produits-et-habitudes/diffuseur-huiles-essentielles/",
          },
        ]}
      />

      {/* ⑥ FAQ */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur les produits et habitudes"
        items={faqItems}
      />

      {/* ⑦ Sujets connexes */}
      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Qualité de l'air et polluants",
            description: "Les produits ménagers sont une des sources principales de COV intérieurs. Les deux sujets se traitent ensemble pour un impact réel.",
            href: "/air-interieur/",
          },
          {
            tag: "Humidité maison",
            title: "Humidité et habitudes domestiques",
            description: "Sécher le linge, cuisiner, se doucher : les habitudes du quotidien sont directement liées au taux d'humidité du logement.",
            href: "/humidite-maison/",
          },
          {
            tag: "Maison saine famille",
            title: "Produits adaptés aux enfants",
            description: "Les enfants sont plus vulnérables aux polluants chimiques. Choisir les bons produits pour les espaces qu'ils occupent.",
            href: "/maison-saine-famille/",
          },
        ]}
      />
    </>
  );
}

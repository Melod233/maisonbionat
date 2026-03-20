import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import RoomPriorities from "@/components/room/RoomPriorities";
import RoomChecklist from "@/components/room/RoomChecklist";
import RoomImpact from "@/components/room/RoomImpact";
import RoomActionsGrid from "@/components/room/RoomActionsGrid";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Salon plus sain : meubles, tapis, COV et qualité de l'air",
  description:
    "Le salon concentre les sources silencieuses : meubles, tapis, textiles, chaussures. L'impact est moins visible mais l'exposition est quotidienne. Priorités et solutions.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/salon-sain/",
  },
  openGraph: {
    title: "Salon plus sain : meubles, tapis, COV et qualité de l'air",
    description:
      "Le salon concentre les sources silencieuses : meubles, tapis, textiles, chaussures. L'impact est moins visible mais l'exposition est quotidienne. Priorités et solutions.",
    url: "https://www.maisonbionat.fr/piece-par-piece/salon-sain/",
  },
};

export default function SalonPlusSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Salon plus sain : meubles, tapis, COV et qualité de l'air", href: "https://www.maisonbionat.fr/piece-par-piece/salon-sain/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Pièce par pièce"
        parentHref="/piece-par-piece/"
        tag="Salon"
        title="Le salon accumule silencieusement ce que les autres pièces produisent."
        quickAnswer="Meubles, tapis, textiles, chaussures, bougies : le salon cumule les sources de COV, d'acariens et de polluants extérieurs. L'exposition est quotidienne et longue ; les enjeux sont réels même si l'urgence est moins visible."
        stats={[
          { value: "4–6h", label: "de présence quotidienne en moyenne" },
          { value: "COV", label: "meubles · tapis · textiles · sprays" },
          { value: "Vecteur n°1", label: "chaussures : principal vecteur de polluants vers le sol" },
          { value: "10 min", label: "d'aération pour renouveler l'air" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités du salon"
        priorities={[
          {
            number: "01",
            action: "Aérer quotidiennement, matin et soir",
            description:
              "Le salon accumule les polluants émis par les meubles, les textiles et les activités humaines. 10 minutes d'aération en créant un courant d'air dilue efficacement ces concentrations. Simple, gratuit, immédiatement efficace.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Supprimer les produits parfumés et les bougies à la paraffine",
            description:
              "Les désodorisants, sprays d'ambiance et bougies paraffine sont parmi les sources les plus importantes de COV dans les pièces de vie. Une bougie paraffine allumée émet du benzène et du toluène. Remplacez par une simple aération efficace.",
            impact: "fort",
          },
          {
            number: "03",
            action: "Créer une zone de déchaussage à l'entrée",
            description:
              "Les chaussures introduisent des résidus de pesticides, métaux lourds, hydrocarbures et bactéries dans le logement. Les enfants, qui jouent au sol, y sont directement exposés. Une zone de déchaussage à l'entrée réduit significativement ces apports.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Aspirer régulièrement avec un filtre HEPA",
            description:
              "Les moquettes et tapis retiennent allergènes, poussières, acariens et polluants extérieurs. Un aspirateur sans filtre HEPA recycle ces particules dans l'air au lieu de les capturer. L'aspiration efficace réduit l'exposition aux allergènes.",
            impact: "moyen",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans le salon"
        subtitle="Le salon s'optimise progressivement, pas de rupture brutale, mais des habitudes qui changent."
        items={[
          {
            label: "Aérer matin et soir",
            detail: "10 min en créant un courant d'air. Même en ville : l'air extérieur est généralement moins chargé que l'intérieur accumulé.",
            frequency: "quotidien",
          },
          {
            label: "Enlever les chaussures à l'entrée",
            detail: "Zone de déchaussage avec chaussons disponibles. Réduction immédiate des polluants extérieurs.",
            frequency: "quotidien",
          },
          {
            label: "Ne pas utiliser de sprays ou désodorisants",
            detail: "Si l'air semble lourd, aérez plutôt que de masquer avec un parfum d'ambiance.",
            frequency: "quotidien",
          },
          {
            label: "Dépoussiérer les surfaces horizontales",
            detail: "Tablettes, buffets, meubles TV : surfaces d'accumulation de poussières et allergènes.",
            frequency: "hebdo",
          },
          {
            label: "Aspirer tapis, moquettes et canapé",
            detail: "Filtre HEPA recommandé. Le canapé concentre les acariens autant qu'un matelas.",
            frequency: "hebdo",
          },
          {
            label: "Laver les plaids et coussins",
            detail: "À 60°C si possible, sinon à 40°C avec cycle anti-acarien. Réduit les allergènes textiles.",
            frequency: "mensuel",
          },
          {
            label: "Contrôler la bouche VMC du salon",
            detail: "Souvent négligée dans les pièces sèches. Vérifiez qu'elle n'est pas obstruée.",
            frequency: "mensuel",
          },
          {
            label: "Laisser dégazer les meubles neufs",
            detail: "Canapé neuf, bibliothèque en aggloméré, meuble TV : dégazez 2 à 4 semaines dans un espace ventilé avant installation.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus sur la qualité du salon"
        factors={[
          {
            rank: "01",
            factor: "Mobilier et textiles",
            statement: "Les meubles neufs émettent pendant des mois.",
            detail:
              "Canapé, bibliothèque, meuble TV : les panneaux d'aggloméré et les mousses synthétiques émettent du formaldéhyde et des COV pendant des mois après fabrication. Dans un salon peu ventilé, les concentrations s'accumulent durablement.",
            weight: "modéré",
          },
          {
            rank: "02",
            factor: "Tapis et moquettes",
            statement: "Réservoirs d'allergènes et de polluants extérieurs.",
            detail:
              "Un tapis peut retenir jusqu'à 10 fois plus d'allergènes qu'un sol dur. Il concentre les acariens, les polluants ramenés par les chaussures, les poussières et les résidus chimiques. Les enfants qui jouent au sol y sont directement exposés.",
            weight: "modéré",
          },
          {
            rank: "03",
            factor: "Produits d'ambiance",
            statement: "Bougies et sprays dégradent l'air en quelques minutes.",
            detail:
              "L'ADEME a mesuré que les sprays d'ambiance et les bougies paraffine créent des pics de COV et de particules fines dans les pièces closes. Dans un salon fermé, une bougie paraffine peut dépasser les seuils recommandés en PM2,5.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Aérer systématiquement matin et soir",
            description: "10 minutes, fenêtres en opposition. Dilue efficacement les COV accumulés. Gratuit et immédiat.",
            effort: "Gratuit",
          },
          {
            label: "Supprimer bougies paraffine et désodorisants",
            description: "Si vous tenez aux bougies, passez à la cire de soja ou d'abeille sans parfum synthétique. Pour les odeurs persistantes, cherchez la cause plutôt que de masquer.",
            effort: "Gratuit",
          },
          {
            label: "Installer une zone de déchaussage",
            description: "Panier à chaussures à l'entrée, chaussons disponibles. Réduction immédiate des polluants extérieurs dans le salon.",
            effort: "Gratuit, étagère à chaussures : 20–50€",
          },
          {
            label: "Aspirer le canapé et les coussins cette semaine",
            description: "Le canapé concentre les acariens autant qu'un matelas non protégé. Aspirez face, dos et dessous avec filtre HEPA.",
            effort: "Gratuit (si équipé)",
          },
        ]}
        deep={[
          {
            label: "Remplacer moquette ou tapis épais par sol dur",
            description: "Parquet massif, carrelage, linoléum : 10 fois moins d'allergènes qu'un tapis. Si vous gardez des tapis, préférez des pièces lavables à 60°C.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Investir dans un aspirateur à filtre HEPA",
            description: "Un aspirateur standard recycle les particules fines et les allergènes dans l'air. Le filtre HEPA capture 99,97% des particules. Investissement utile si allergie ou enfants au sol.",
            effort: "150–350€",
          },
          {
            label: "Remplacer le mobilier aggloméré par du bois massif ou A+",
            description: "Lors d'un renouvellement de mobilier, préférez le bois massif huilé, le bambou ou des meubles labellisés A+ sur les émissions. Le différentiel de prix est souvent marginal sur du mobilier durable.",
            effort: "Lors d'un achat mobilier",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes dans le salon"
        errors={[
          {
            label: "Masquer les odeurs au lieu de les traiter",
            explanation:
              "Un spray désodorisant ajoute des COV à un air déjà chargé. Si l'air du salon semble lourd ou malodorant, la cause est une ventilation insuffisante, un tapis qui stagne, un meuble qui dégage. Aérer d'abord, identifier la source ensuite.",
          },
          {
            label: "Aspirer sans filtre HEPA pense dépolluer",
            explanation:
              "Un aspirateur sans filtre HEPA ou avec un filtre saturé projette les particules fines et les allergènes dans l'air. Après l'aspiration, les concentrations en suspension peuvent temporairement augmenter. Un filtre HEPA correctement entretenu est indispensable.",
          },
          {
            label: "Les plantes purifient le salon",
            explanation:
              "En conditions réelles, les plantes ont un effet négligeable sur la qualité de l'air d'une pièce habitée. L'aération reste 10 à 100 fois plus efficace. Les plantes sont décoratives : ne leur attribuez pas un rôle de dépollution qu'elles n'ont pas.",
          },
          {
            label: "Ouvrir une fenêtre le week-end suffit",
            explanation:
              "Les polluants intérieurs s'accumulent chaque jour. Une aération unique de 30 minutes le week-end ne maintient pas une qualité d'air satisfaisante. Des ouvertures courtes et quotidiennes sont bien plus efficaces qu'une longue aération occasionnelle.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le salon"
        items={[
          {
            question: "Mon salon a une moquette : dois-je la remplacer ?",
            answer:
              "Pas forcément immédiatement. Une moquette peut être maintenue propre avec des aspirations fréquentes (filtre HEPA), un nettoyage à la vapeur annuel et le déchaussage à l'entrée. Si vous avez des enfants allergiques, le remplacement par un sol dur devient une priorité plus forte.",
          },
          {
            question: "Les bougies naturelles sont-elles vraiment plus sûres ?",
            answer:
              "Oui, significativement. Les bougies en cire de soja ou d'abeille, sans parfum synthétique, émettent nettement moins de particules fines et de COV qu'une bougie paraffine. L'étude ADEME/CSTB (programme EBENE) l'a confirmé. Dans tous les cas, aérez légèrement avant et après utilisation.",
          },
          {
            question: "Les purificateurs d'air sont-ils utiles dans un salon ?",
            answer:
              "Un purificateur à filtre HEPA peut réduire les allergènes en suspension dans un salon, utile pour les personnes allergiques. Il ne traite pas les COV gazeux et ne remplace pas la ventilation. C'est un complément, pas une solution de base.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Matériaux sains",
            title: "Meubles et revêtements à faibles émissions",
            description: "Comprendre l'étiquetage A+ et choisir des meubles moins émissifs pour les pièces de vie.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Produits et habitudes",
            title: "Alternatives aux parfums d'ambiance",
            description: "Bougies, sprays, désodorisants : les sources à réduire et les alternatives concrètes.",
            href: "/produits-et-habitudes/",
          },
          {
            tag: "Air intérieur",
            title: "Qualité de l'air dans les pièces de vie",
            description: "Les sources de polluants du salon s'inscrivent dans une stratégie globale de qualité de l'air.",
            href: "/air-interieur/",
          },
        ]}
      />
    </>
  );
}

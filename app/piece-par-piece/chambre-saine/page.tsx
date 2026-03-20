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
  title: "Chambre saine : CO₂, acariens, humidité et solutions",
  description:
    "Vous dormez 7 à 8 heures dans votre chambre : l'air s'y accumule. Priorités, vérifications et actions concrètes pour une chambre réellement plus saine.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/chambre-saine/",
  },
  openGraph: {
    title: "Chambre saine : CO₂, acariens, humidité et solutions",
    description:
      "Vous dormez 7 à 8 heures dans votre chambre : l'air s'y accumule. Priorités, vérifications et actions concrètes pour une chambre réellement plus saine.",
    url: "https://www.maisonbionat.fr/piece-par-piece/chambre-saine/",
  },
};

export default function ChambreSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Chambre saine : CO₂, acariens, humidité et solutions", href: "https://www.maisonbionat.fr/piece-par-piece/chambre-saine/" },
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
        tag="Chambre adulte"
        title="7 à 8 heures d'air immobile chaque nuit. C'est le vrai enjeu."
        quickAnswer="Pendant le sommeil, CO₂, vapeur d'eau et allergènes s'accumulent dans une pièce fermée. L'air que vous respirez au réveil est souvent le plus chargé de la journée."
        stats={[
          { value: "7–8h", label: "exposition nocturne sans renouvellement" },
          { value: "60°C", label: "température efficace contre les acariens" },
          { value: "40–60%", label: "hygrométrie idéale" },
          { value: "10 min", label: "pour renouveler l'air d'une chambre" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités de la chambre adulte"
        priorities={[
          {
            number: "01",
            action: "Aérer chaque matin pendant 10 minutes",
            description:
              "Ouvrez les fenêtres en grand dès le réveil. L'air d'une chambre fermée la nuit s'enrichit en CO₂ et vapeur d'eau. 10 minutes suffisent à renouveler complètement l'air d'une pièce standard. Gratuit, immédiat, déterminant.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Lutter contre les acariens dans la literie",
            description:
              "Les acariens prolifèrent dans les matelas, oreillers et couettes à plus de 50 % d'hygrométrie. Lavez la literie à 60°C minimum chaque semaine : c'est la seule température qui détruit les acariens et leurs allergènes.",
            impact: "critique",
          },
          {
            number: "03",
            action: "Maintenir l'hygrométrie entre 40 et 60 %",
            description:
              "En dessous de 40 %, l'air dessèche les muqueuses. Au-dessus de 60 %, les conditions favorisent acariens et moisissures. Un hygromètre (10–20€) permet de vérifier sans approximation.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Préférer des matériaux à faibles émissions",
            description:
              "Meubles récents en aggloméré, peintures anciennes, moquette : dans une chambre fermée la nuit, les émissions de COV s'accumulent. Priorité au label A+ pour toute nouvelle finition ou mobilier.",
            impact: "moyen",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans la chambre"
        subtitle="Un contrôle régulier évite les problèmes silencieux qui s'installent lentement."
        items={[
          {
            label: "Ouvrir les fenêtres au moins 10 minutes",
            detail: "Créez un courant d'air si possible : efficacité 3x supérieure à une fenêtre entrouverte.",
            frequency: "quotidien",
          },
          {
            label: "Ne pas faire le lit immédiatement au réveil",
            detail: "Laissez la literie à l'air 15 à 20 min pour évacuer l'humidité corporelle accumulée la nuit.",
            frequency: "quotidien",
          },
          {
            label: "Laver la literie à 60°C minimum",
            detail: "Draps, taies d'oreillers, housses de couette. 40°C ne détruit pas les acariens.",
            frequency: "hebdo",
          },
          {
            label: "Aspirer le matelas et les zones sous le lit",
            detail: "Zones de forte accumulation d'allergènes. Filtre HEPA recommandé.",
            frequency: "hebdo",
          },
          {
            label: "Vérifier le taux d'humidité avec un hygromètre",
            detail: "Cible : 40–60 %. Si > 60 %, cherchez la source (condensation, VMC insuffisante).",
            frequency: "mensuel",
          },
          {
            label: "Contrôler la bouche VMC",
            detail: "Vérifiez qu'elle n'est pas obstruée : la ventilation de la chambre en dépend.",
            frequency: "mensuel",
          },
          {
            label: "Dépoussiérer rideaux, têtes de lit et textiles",
            detail: "Réservoirs d'acariens et de poussières. Lavage à 60°C pour les rideaux lavables.",
            frequency: "mensuel",
          },
          {
            label: "Laisser dégazer les meubles neufs en aggloméré",
            detail: "Idéalement dans un espace ventilé 2 à 4 semaines avant installation dans la chambre.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus sur la qualité de la chambre"
        factors={[
          {
            rank: "01",
            factor: "Accumulation nocturne",
            statement: "L'air confiné altère la récupération.",
            detail:
              "En 8 heures de sommeil dans une chambre fermée, la concentration en CO₂ peut dépasser 2000 ppm (le seuil de confort est à 800 ppm). La qualité du sommeil se dégrade progressivement sans que vous le perceviez directement.",
            weight: "élevé",
          },
          {
            rank: "02",
            factor: "Acariens et allergènes",
            statement: "Première cause d'allergie respiratoire intérieure.",
            detail:
              "Les acariens se concentrent dans le matelas (jusqu'à 2 millions par matelas non protégé) et prolifèrent au-dessus de 50 % d'hygrométrie et 18 °C. La chambre réunit exactement ces conditions.",
            weight: "élevé",
          },
          {
            rank: "03",
            factor: "COV des matériaux",
            statement: "Les meubles récents émettent la nuit.",
            detail:
              "Dans une chambre fermée, les émissions de formaldéhyde et COV des meubles en aggloméré s'accumulent pendant le sommeil. Les concentrations au réveil peuvent être 2 à 3 fois plus élevées que le jour.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Ouvrir en grand chaque matin",
            description: "10 minutes, fenêtres en opposition si possible. Gratuit, résultat immédiat sur CO₂ et vapeur d'eau.",
            effort: "Gratuit, 10 min/jour",
          },
          {
            label: "Ne pas fermer la chambre hermétiquement la nuit",
            description: "Laisser la porte entrouverte si l'appartement est ventilé. Réduit l'accumulation de CO₂.",
            effort: "Gratuit",
          },
          {
            label: "Laver les draps à 60°C cette semaine",
            description: "Seule température efficace contre les acariens. Si votre machine ne monte pas à 60°C, un cycle à 40°C avec produit anti-acarien peut partiellement compenser.",
            effort: "Coût lessive",
          },
          {
            label: "Retirer les peluches et textiles accumulateurs",
            description: "Coussins décoratifs, plaids, peluches : réservoirs d'acariens. Lavez-les ou réduisez leur nombre dans la chambre.",
            effort: "Gratuit",
          },
        ]}
        deep={[
          {
            label: "Housse anti-acariens pour matelas et oreillers",
            description: "Enveloppes imperméables aux acariens et leurs allergènes. Investissement unique, efficacité durable. Cherchez des labels certifiés (OEKO-TEX, anti-acarien testé).",
            effort: "30–80€ selon taille",
          },
          {
            label: "Aspirateur à filtre HEPA",
            description: "Un aspirateur standard recycle les allergènes dans l'air. Le filtre HEPA retient 99,97 % des particules. Recommandé si vous souffrez d'allergies.",
            effort: "150–350€",
          },
          {
            label: "Hygromètre-thermomètre",
            description: "Mesurer l'hygrométrie permet d'agir au bon moment plutôt que de supputer. Un hygromètre numérique coûte moins de 20€.",
            effort: "10–25€",
          },
          {
            label: "Sol dur à la place de la moquette",
            description: "La moquette retient 10 fois plus d'allergènes qu'un sol dur. Si rénovation en cours, préférez parquet massif, carrelage ou linoléum naturel.",
            effort: "Lors d'une rénovation",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes dans la chambre"
        errors={[
          {
            label: "Aérer 30 secondes suffit",
            explanation:
              "Pour renouveler l'air d'une chambre de 15 m², il faut 7 à 10 minutes de fenêtre ouverte en grand avec courant d'air. Une fenêtre entrouverte ou un entrebâillement bref est insuffisant.",
          },
          {
            label: "Laver les draps à 40°C tue les acariens",
            explanation:
              "Les acariens ne sont détruits qu'à partir de 60°C. Le lavage à 40°C nettoie la literie mais ne supprime pas les allergènes. En dessous de 60°C, les acariens survivent et se réinstallent rapidement.",
          },
          {
            label: "Les plantes dépolluent suffisamment",
            explanation:
              "En conditions réelles, les plantes ont un effet négligeable sur la qualité de l'air d'une chambre. L'aération reste incomparablement plus efficace. Les plantes ne remplacent pas une VMC ou une ouverture de fenêtre.",
          },
          {
            label: "Garder la chambre chaude pour éviter l'humidité",
            explanation:
              "Chauffer sans ventiler réduit l'humidité relative momentanément, mais la vapeur d'eau reste dans la pièce et se redépose dès que la température baisse. La combinaison chaleur + aération est indispensable.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la chambre saine"
        items={[
          {
            question: "Quelle est la température idéale dans une chambre pour bien dormir ?",
            answer:
              "Entre 16 et 19 °C est la plage recommandée pour un sommeil de qualité. Au-delà de 20 °C, la qualité du sommeil se détériore progressivement. La chambre fraîche favorise aussi la réduction naturelle de l'humidité relative.",
          },
          {
            question: "Faut-il aérer même en hiver ?",
            answer:
              "Oui, absolument. En hiver, l'air extérieur froid est très peu chargé en vapeur d'eau. 10 minutes d'aération même par temps froid renouvèle efficacement l'air sans refroidir durablement la pièce ; les murs conservent leur chaleur.",
          },
          {
            question: "Les housses anti-acariens sont-elles vraiment efficaces ?",
            answer:
              "Oui, c'est l'une des mesures les plus efficaces contre les allergènes d'acariens. Une housse certifiée imperméable aux acariens (maille <10 microns) empêche physiquement les allergènes d'atteindre votre espace de sommeil. À combiner avec lavage à 60°C de la literie.",
          },
          {
            question: "Combien de temps faut-il aérer chaque jour ?",
            answer:
              "10 minutes le matin en créant un courant d'air (deux fenêtres ou une fenêtre + une porte ouverte) suffisent à renouveler complètement l'air d'une chambre standard. Si la VMC fonctionne correctement, c'est un complément, pas un substitut.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Humidité maison",
            title: "Humidité et condensation",
            description: "Les fenêtres qui suent, les murs froids, l'air lourd au réveil : comprendre et agir sur l'humidité dans la chambre.",
            href: "/humidite-maison/",
          },
          {
            tag: "Air intérieur",
            title: "COV et qualité de l'air nocturne",
            description: "Les matériaux et meubles de la chambre émettent des composés volatils. Comprendre les sources et les solutions.",
            href: "/air-interieur/",
          },
          {
            tag: "Matériaux sains",
            title: "Meubles et finitions faibles émissions",
            description: "Choisir des matériaux A+ pour la chambre, comprendre l'étiquetage et éviter les pièges.",
            href: "/materiaux-sains/",
          },
        ]}
      />
    </>
  );
}

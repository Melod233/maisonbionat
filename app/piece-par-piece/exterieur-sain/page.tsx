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
  title: "Extérieur plus sain : terrasse, jardin et ce qu'on ramène dedans",
  description:
    "Jardin, terrasse, balcon : les espaces extérieurs introduisent pollens, pesticides et polluants dans le logement. Comprendre les vecteurs et agir simplement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/exterieur-sain/",
  },
  openGraph: {
    title: "Extérieur plus sain : terrasse, jardin et ce qu'on ramène dedans",
    description:
      "Jardin, terrasse, balcon : les espaces extérieurs introduisent pollens, pesticides et polluants dans le logement. Comprendre les vecteurs et agir simplement.",
    url: "https://www.maisonbionat.fr/piece-par-piece/exterieur-sain/",
  },
};

export default function ExterieurPlusSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Extérieur plus sain : terrasse, jardin et ce qu'on ramène dedans", href: "https://www.maisonbionat.fr/piece-par-piece/exterieur-sain/" },
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
        tag="Extérieur"
        title="Ce qui entre dans la maison commence dehors."
        quickAnswer="Terrasse, jardin, balcon : ces espaces ne sont pas seulement des sources de bien-être ; ils introduisent dans le logement pollens, résidus de pesticides et polluants via les chaussures, vêtements et courants d'air. Quelques habitudes changent beaucoup."
        stats={[
          { value: "Vecteur n°1", label: "chaussures : premier vecteur de contaminants vers l'intérieur" },
          { value: "Mars–Oct.", label: "principale saison pollinique en France" },
          { value: "A+", label: "label pour les produits de traitement bois terrasse" },
          { value: "0", label: "pesticide de synthèse nécessaire dans un jardin bien géré" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités pour les espaces extérieurs"
        priorities={[
          {
            number: "01",
            action: "Créer une zone de déchaussage à l'entrée",
            description:
              "Les chaussures sont le principal vecteur d'introduction de polluants extérieurs dans le logement : résidus de pesticides, métaux lourds, hydrocarbures, bactéries fécales. Une zone de déchaussage avec chaussons disponibles est la mesure la plus simple et la plus efficace.",
            impact: "fort",
          },
          {
            number: "02",
            action: "Supprimer les pesticides et herbicides de synthèse",
            description:
              "Les produits phytosanitaires de synthèse (désherbants, insecticides, fongicides) laissent des résidus sur les surfaces, les vêtements et les semelles. Ils peuvent être inhalés ou ingérés par les enfants qui jouent dans le jardin. Des alternatives mécaniques et naturelles couvrent la quasi-totalité des usages courants.",
            impact: "fort",
          },
          {
            number: "03",
            action: "Traiter la terrasse et le bois extérieur avec des produits A+",
            description:
              "Lasures, huiles, produits de traitement du bois : choisissez des produits à faibles émissions de COV (label A+). Les produits de traitement conventionnels contiennent souvent des solvants qui s'évaporent et peuvent entrer dans le logement par les fenêtres ouvertes.",
            impact: "moyen",
          },
          {
            number: "04",
            action: "Gérer la végétation autour des ouvertures",
            description:
              "Une végétation dense contre les murs favorise l'humidité et peut abriter des insectes ou des moisissures. Maintenez une distance de 50 cm entre les plantes grimpantes et les murs. Évitez les végétaux très pollinisants près des fenêtres si vous souffrez d'allergies.",
            impact: "moyen",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier côté extérieur"
        subtitle="Les espaces extérieurs s'entretiennent moins souvent, mais leur impact sur l'intérieur est réel."
        items={[
          {
            label: "Enlever les chaussures à l'entrée",
            detail: "Mettre des chaussons disponibles immédiatement à l'entrée facilite l'adoption de cette habitude.",
            frequency: "quotidien",
          },
          {
            label: "Rincer les fruits et légumes du jardin avant d'entrer",
            detail: "Réduit les résidus de traitement (même naturels) et les pollens.",
            frequency: "quotidien",
          },
          {
            label: "Fermer les fenêtres aux heures de pic pollinique",
            detail: "En période de pollinisation (mars–juin principalement), les pics sont tôt le matin et en début d'après-midi. Information en temps réel sur pollens.fr.",
            frequency: "quotidien",
          },
          {
            label: "Nettoyer le paillasson d'entrée",
            detail: "Un paillasson encrassé concentre les polluants et les redistribue à chaque passage.",
            frequency: "hebdo",
          },
          {
            label: "Inspecter les murs extérieurs pour traces d'humidité ou de végétation",
            detail: "Mousses, lichens, taches sombres : indicateurs d'humidité susceptibles de favoriser les moisissures internes.",
            frequency: "mensuel",
          },
          {
            label: "Vérifier l'état des produits de traitement bois stockés",
            detail: "Bidons correctement fermés, à l'abri de la chaleur, hors de portée des enfants.",
            frequency: "mensuel",
          },
          {
            label: "Nettoyer les grilles de ventilation extérieures",
            detail: "Entrées d'air VMC, grilles de fenêtres : feuilles mortes, toiles d'araignées et dépôts réduisent le débit.",
            frequency: "ponctuel",
          },
          {
            label: "Traiter le bois terrasse avec produit faibles émissions",
            detail: "Lors de tout traitement de terrasse, préférez les produits à base d'eau, label A+, et appliquez fenêtres fermées.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce que l'extérieur introduit dans votre logement"
        factors={[
          {
            rank: "01",
            factor: "Chaussures et semelles",
            statement: "Principal vecteur de polluants extérieurs vers l'intérieur.",
            detail:
              "Les semelles de chaussures collectent résidus de pesticides, métaux lourds (plomb, cadmium des enrobés), hydrocarbures et bactéries. Ces substances se déposent sur les sols du logement et restent accessibles, notamment pour les enfants qui jouent au sol.",
            weight: "modéré",
          },
          {
            rank: "02",
            factor: "Pollens",
            statement: "Allergènes saisonniers qui entrent par toutes les ouvertures.",
            detail:
              "En période de pollinisation, les pollens pénètrent dans le logement via les fenêtres ouvertes, les vêtements et les cheveux. Pour les personnes allergiques, la gestion des heures d'aération en fonction des pics polliniques est essentielle.",
            weight: "modéré",
          },
          {
            rank: "03",
            factor: "Produits de traitement extérieur",
            statement: "COV des lasures et traitements qui entrent par les fenêtres.",
            detail:
              "Un traitement de terrasse avec une lasure à solvants, appliqué avec les fenêtres du rez-de-chaussée ouvertes, peut introduire des concentrations significatives de COV dans le logement. Les produits à base d'eau réduisent drastiquement ce risque.",
            weight: "faible",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Installer un paillasson efficace + panier à chaussures",
            description: "Un double paillasson (extérieur + intérieur) et un panier visible à l'entrée facilite le déchaussage systématique. Investissement de quelques euros, efficacité immédiate.",
            effort: "20–50€",
          },
          {
            label: "Consulter les alertes polliniques avant d'ouvrir les fenêtres",
            description: "Des applis et sites (pollens.fr, allerair.be) donnent les niveaux en temps réel. En période de forte pollinisation, ouvrez les fenêtres le soir plutôt que le matin.",
            effort: "Gratuit",
          },
          {
            label: "Remplacer le désherbant chimique par le désherbage manuel ou thermique",
            description: "Un désherbeur thermique coûte 30 à 80€ et ne laisse aucun résidu chimique. Le désherbage à la main ou au paillis est encore plus simple et ne coûte rien.",
            effort: "Gratuit ou 30–80€",
          },
          {
            label: "Laisser les vêtements de jardinage à l'extérieur",
            description: "Gants, bottes, vêtements portés pendant le jardinage ne doivent pas entrer dans le logement avant d'être lavés. Ils transportent pollens, pesticides et terre.",
            effort: "Gratuit, habitude",
          },
        ]}
        deep={[
          {
            label: "Passer à des produits de traitement bois à base d'eau",
            description: "Lasures et huiles à l'eau, label A+ : performances équivalentes aux formules solvantées sur la durabilité, sans émissions de COV. Disponibles dans toutes les grandes surfaces de bricolage.",
            effort: "Prix comparable aux produits solvantés",
          },
          {
            label: "Créer un jardin sans pesticides",
            description: "Paillage pour limiter les mauvaises herbes, associations de plantes, insectes auxiliaires, purins naturels : un jardin géré naturellement réduit les sources de contamination chimique à zéro.",
            effort: "Organisation + investissement ponctuel en paillage",
          },
          {
            label: "Poser un revêtement de terrasse sans traitement",
            description: "Bois naturellement résistant (teck, ipé, robinia), composite ou pierre naturelle : des matériaux de terrasse qui ne nécessitent pas ou peu de traitement chimique annuel.",
            effort: "Lors d'une rénovation terrasse",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes côté extérieur"
        errors={[
          {
            label: "Traiter la terrasse avec les fenêtres ouvertes",
            explanation:
              "Appliquer une lasure ou un produit d'entretien du bois avec les fenêtres du rez-de-chaussée ouvertes introduit directement les vapeurs de solvants dans le logement. Fermez toutes les ouvertures lors du traitement et pendant les 2 à 4 heures suivantes.",
          },
          {
            label: "Croire que les pesticides bio sont sans risque",
            explanation:
              "Les produits de biocontrôle et les insecticides naturels (pyrèthre, huiles essentielles) ne sont pas dénués d'effets. Certains sont toxiques pour les insectes pollinisateurs ou les animaux domestiques. L'objectif est de réduire les traitements, pas de les substituer.",
          },
          {
            label: "Aérer le matin en période pollinique",
            explanation:
              "Les concentrations de pollens sont maximales entre 6h et 10h du matin en période de pollinisation. Aérer à ces heures maximise l'introduction de pollens dans le logement. Préférez l'aération en soirée ou après la pluie.",
          },
          {
            label: "Stocker les produits de jardin dans le logement",
            explanation:
              "Herbicides, fongicides, engrais liquides : ces produits ne doivent pas être stockés dans le logement. Le garage (avec ventilation adaptée) ou un abri extérieur dédié est le bon endroit. Jamais sous l'évier ou dans un placard intérieur.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'extérieur"
        items={[
          {
            question: "Le jardin peut-il vraiment polluer l'air intérieur ?",
            answer:
              "Directement, moins qu'on ne le pense, sauf si vous utilisez des produits phytosanitaires à proximité des ouvertures. L'impact principal vient des vecteurs : chaussures, vêtements, outils qui introduisent résidus chimiques et polluants dans le logement. Un jardin géré sans pesticides de synthèse a un impact très faible.",
          },
          {
            question: "Comment gérer les allergies aux pollens sans renoncer à aérer ?",
            answer:
              "Consultez les bulletins polliniques (pollens.fr, Réseau National de Surveillance Aérobiologique) pour connaître les espèces actives et les niveaux. En période de forte pollinisation, aérez le soir et après la pluie (les pollens retombent). Les filtres de fenêtre anti-pollens peuvent compléter l'approche pour les allergiques sévères.",
          },
          {
            question: "Les plantes de terrasse ou balcon ont-elles un impact sur l'air intérieur ?",
            answer:
              "L'impact est positif globalement : elles ne libèrent pas de polluants et peuvent intercepter certaines poussières. L'exception : les plantes fortement pollinisantes proches des fenêtres (graminées, bouleau, cyprès) pendant leur période de pollinisation. Pour les allergiques, évitez ces espèces sur balcon.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Produits de jardinage et alternatives",
            description: "Les alternatives aux pesticides de synthèse pour un jardin sain qui ne contamine pas l'intérieur.",
            href: "/produits-et-habitudes/",
          },
          {
            tag: "Air intérieur",
            title: "Pollens et qualité de l'air",
            description: "Les allergènes polliniques sont des polluants biologiques de l'air intérieur. Comment les limiter.",
            href: "/air-interieur/",
          },
          {
            tag: "Maison saine famille",
            title: "Jardin et enfants",
            description: "Les enfants jouent au sol, dans le jardin, à la terrasse. Adapter les espaces extérieurs à leur vulnérabilité.",
            href: "/maison-saine-famille/",
          },
        ]}
      />
    </>
  );
}

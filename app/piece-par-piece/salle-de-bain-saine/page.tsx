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
  title: "Salle de bain plus saine : humidité, moisissures et ventilation",
  description:
    "La salle de bain est la pièce la plus humide du logement. Une mauvaise ventilation crée des moisissures qui migrent vers les autres pièces. Priorités et solutions concrètes.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/salle-de-bain-saine/",
  },
  openGraph: {
    title: "Salle de bain plus saine : humidité, moisissures et ventilation",
    description:
      "La salle de bain est la pièce la plus humide du logement. Une mauvaise ventilation crée des moisissures qui migrent vers les autres pièces. Priorités et solutions concrètes.",
    url: "https://www.maisonbionat.fr/piece-par-piece/salle-de-bain-saine/",
  },
};

export default function SalleDeBainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Salle de bain plus saine : humidité, moisissures et ventilation", href: "https://www.maisonbionat.fr/piece-par-piece/salle-de-bain-saine/" },
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
        tag="Salle de bain"
        title="L'humidité produite ici ne reste pas ici."
        quickAnswer="Une douche libère de la vapeur qui, sans extraction efficace, migre vers les pièces voisines. Les moisissures qui s'y installent ne sont pas un problème esthétique : elles libèrent des spores dans l'air de tout le logement."
        stats={[
          { value: "+30%", label: "d'hygrométrie après une douche" },
          { value: "20 min", label: "de ventilation post-douche recommandée" },
          { value: "60%", label: "seuil d'hygrométrie à ne pas dépasser" },
          { value: "22–24°C", label: "température idéale pour évaporer l'humidité" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités de la salle de bain"
        priorities={[
          {
            number: "01",
            action: "Assurer une extraction VMC fonctionnelle",
            description:
              "La VMC d'extraction en salle de bain est l'équipement clé. Vérifiez qu'elle tourne (bouche non obstruée, débit perceptible), qu'elle évacue bien vers l'extérieur et non dans un vide sanitaire. Une VMC hygroréglable adapte automatiquement son débit au taux d'humidité.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Ventiler 20 minutes après chaque douche ou bain",
            description:
              "Laissez la VMC tourner et, si possible, ouvrez une fenêtre entrouverte pendant 20 minutes. L'humidité produite par une douche prend plusieurs minutes à se dissiper ; quitter la salle de bain et fermer la porte emprisonne la vapeur.",
            impact: "critique",
          },
          {
            number: "03",
            action: "Traiter les moisissures existantes à la source",
            description:
              "Nettoyer les moisissures sans traiter la cause d'humidité sous-jacente ne sert à rien : elles reviennent en quelques semaines. Identifier si l'origine est condensation (ventilation), infiltration (fuite) ou remontée capillaire avant de traiter.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Maintenir la température au-dessus de 18 °C",
            description:
              "Une salle de bain froide favorise la condensation sur les murs et les carrelages. La vapeur d'eau se dépose sur les surfaces froides. Une température d'au moins 18 °C réduit significativement la formation de condensation.",
            impact: "moyen",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans la salle de bain"
        subtitle="L'humidité s'installe silencieusement. Un contrôle régulier évite les problèmes structurels."
        items={[
          {
            label: "Laisser la VMC tourner après la douche",
            detail: "Minimum 20 minutes. Ne pas éteindre la lumière et partir immédiatement : la vapeur reste.",
            frequency: "quotidien",
          },
          {
            label: "Essuyer les surfaces humides après la douche",
            detail: "Cabine de douche, parois, carreaux autour de la baignoire : essuyer réduit le temps de présence de l'humidité.",
            frequency: "quotidien",
          },
          {
            label: "Ne pas laisser les serviettes sécher enroulées",
            detail: "Une serviette humide enroulée met 3 à 4x plus de temps à sécher. Étendez-les à plat pour libérer l'humidité.",
            frequency: "quotidien",
          },
          {
            label: "Vérifier l'absence de moisissures sur les joints",
            detail: "Joints de carrelage, silicone autour de la baignoire, angles en bas de murs : zones à inspecter.",
            frequency: "hebdo",
          },
          {
            label: "Contrôler le débit de la bouche VMC",
            detail: "Un papier fin doit être attiré par la bouche. Si non, nettoyez la grille ou faites vérifier le moteur.",
            frequency: "mensuel",
          },
          {
            label: "Vérifier l'étanchéité des joints de baignoire et douche",
            detail: "Un joint fendu ou décollé laisse infiltrer l'eau dans les murs et le sol, source de moisissures internes.",
            frequency: "mensuel",
          },
          {
            label: "Mesurer l'hygrométrie après la douche et 20 min après",
            detail: "Si l'humidité ne redescend pas sous 70% après 20 min, la ventilation est insuffisante.",
            frequency: "ponctuel",
          },
          {
            label: "Vérifier l'absence de fuites sous le lavabo et derrière WC",
            detail: "Une fuite lente est indétectable à l'œil mais maintient une humidité permanente dans la cloison.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus sur la qualité de la salle de bain"
        factors={[
          {
            rank: "01",
            factor: "Ventilation insuffisante",
            statement: "L'humidité ne sort pas : elle migre.",
            detail:
              "Sans extraction efficace, la vapeur d'eau produite par la douche ne s'évacue pas : elle migre vers les pièces voisines via les passages d'air et se dépose sur les surfaces les plus froides. Les moisissures apparaissent dans la chambre ou le couloir avant même d'être visibles dans la salle de bain.",
            weight: "élevé",
          },
          {
            rank: "02",
            factor: "Moisissures et spores",
            statement: "Les moisissures libèrent des spores dans tout le logement.",
            detail:
              "Les moisissures visibles sur les joints ou les murs ne sont que la partie émergée du problème. Elles libèrent en permanence des spores qui se dispersent dans l'air. L'OMS et l'ANSES confirment le lien entre exposition aux moisissures et pathologies respiratoires.",
            weight: "élevé",
          },
          {
            rank: "03",
            factor: "Produits d'entretien en espace confiné",
            statement: "La salle de bain concentre les expositions chimiques.",
            detail:
              "Détergents, désinfectants, sprays anticalcaire : utilisés dans un espace petit et souvent sans fenêtre, les concentrations de COV peuvent être très élevées. Ventilez toujours pendant et après le nettoyage.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Essuyer la cabine de douche après chaque utilisation",
            description: "Réduit de moitié le temps de présence de l'humidité sur les surfaces. Une raclette de douche suffit, 30 secondes.",
            effort: "Gratuit, raclette : 5–10€",
          },
          {
            label: "Laisser la porte entrouverte après la douche",
            description: "Si pas de VMC, laisser la porte entrouverte permet à l'humidité de se diluer dans le reste du logement plutôt que de se concentrer.",
            effort: "Gratuit",
          },
          {
            label: "Étendre les serviettes à plat",
            description: "Une serviette étendue sèche 3x plus vite qu'une serviette enroulée. Moins d'humidité dans la pièce.",
            effort: "Gratuit",
          },
          {
            label: "Nettoyer les joints noircis au bicarbonate + vinaigre",
            description: "Mélange efficace sur les moisissures en surface. Si les joints sont profondément atteints, ils devront être remplacés.",
            effort: "Produits : 2–5€",
          },
        ]}
        deep={[
          {
            label: "Installer ou remplacer par une VMC hygroréglable",
            description: "La VMC hygroréglable adapte son débit en fonction du taux d'humidité. Plus efficace qu'une VMC à débit fixe, elle évacue davantage quand c'est nécessaire et économise l'énergie quand c'est calme.",
            effort: "150–500€ + pose",
          },
          {
            label: "Remplacer les joints de baignoire/douche",
            description: "Des joints en silicone noirs de moisissures ne peuvent pas être nettoyés en profondeur. Ils doivent être découpés et refaits, opération accessible en bricolage ou par un plombier.",
            effort: "20–150€ selon surface",
          },
          {
            label: "Poser un carrelage sur les murs humides",
            description: "Les murs peints en salle de bain absorbent l'humidité. Le carrelage jusqu'au plafond des zones humides est la solution durable.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Installer un sèche-serviettes chauffant",
            description: "Aide à maintenir la température de la salle de bain au-dessus de 18 °C et à sécher les serviettes rapidement : deux actions qui réduisent l'humidité résiduelle.",
            effort: "80–300€",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes dans la salle de bain"
        errors={[
          {
            label: "Peindre les moisissures sans traiter la cause",
            explanation:
              "Repeindre par-dessus des moisissures sans corriger la source d'humidité ne fait que retarder le problème de quelques semaines. Les moisissures reviennent à travers la nouvelle peinture, souvent plus rapidement, car la peinture fraîche a absorbé de l'humidité.",
          },
          {
            label: "Éteindre la VMC pour économiser l'électricité",
            explanation:
              "La VMC consomme environ 15 à 25 watts, moins qu'une ampoule. L'éteindre pour économiser entraîne une accumulation d'humidité dont les conséquences (moisissures, dégradation des matériaux) coûtent bien plus cher à traiter.",
          },
          {
            label: "Utiliser un déshumidificateur à la place de la VMC",
            explanation:
              "Un déshumidificateur électrique retire l'eau de l'air mais ne renouvelle pas l'air. Dans une salle de bain, il masque le problème de ventilation sans le résoudre. Les moisissures peuvent continuer à se développer derrière les murs même avec l'hygrométrie de l'air abaissée.",
          },
          {
            label: "Nettoyer avec un spray en espace fermé",
            explanation:
              "Les sprays anticalcaires, désinfectants et nettoyants ménagers émettent des COV dans un espace petit et souvent sans fenêtre. Toujours ouvrir la fenêtre ou laisser la VMC tourner pendant et après le nettoyage.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la salle de bain"
        items={[
          {
            question: "Ma salle de bain n'a pas de fenêtre : comment l'aérer ?",
            answer:
              "Une salle de bain sans fenêtre doit absolument être équipée d'une VMC à extraction efficace. Vérifiez que la bouche est propre et que le débit est perceptible. Laissez la porte entrouverte après la douche pour diluer l'humidité dans le reste du logement. En l'absence de VMC, un extracteur mural commandé par minuterie est une solution abordable.",
          },
          {
            question: "Les moisissures dans la salle de bain sont-elles dangereuses ?",
            answer:
              "Oui, en particulier pour les personnes asthmatiques, allergiques ou immunodéprimées. Les moisissures libèrent des spores et des mycotoxines qui se dispersent dans l'air. Une exposition prolongée peut provoquer ou aggraver des pathologies respiratoires. Les moisissures visibles sont un signal qu'il faut traiter, pas seulement nettoyer.",
          },
          {
            question: "Comment savoir si ma VMC fonctionne bien ?",
            answer:
              "Approchez un morceau de papier fin de la bouche VMC : il doit être clairement attiré. Vous pouvez aussi allumer une bougie ou une allumette à proximité ; la flamme doit fléchir vers la bouche. Si rien ne se passe, la VMC est insuffisante ou obstruée.",
          },
          {
            question: "Peut-on utiliser du vinaigre blanc pour nettoyer les moisissures ?",
            answer:
              "Le vinaigre blanc est efficace pour traiter les moisissures en surface (joints, carrelage). Laissez agir 30 minutes avant de frotter et rincer. Pour des moisissures plus profondes (dans le joint, dans le mur), il faut remplacer le joint ou traiter le support. Le vinaigre ne règle pas la cause sous-jacente.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Humidité maison",
            title: "Humidité et condensation dans le logement",
            description: "La salle de bain est la principale source d'humidité domestique. Comprendre comment elle circule dans le logement.",
            href: "/humidite-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Moisissures et qualité de l'air",
            description: "Les spores de moisissures de la salle de bain dégradent l'air de tout le logement. Agir à la source.",
            href: "/air-interieur/",
          },
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers en espace confiné",
            description: "Les produits d'entretien utilisés dans la salle de bain méritent une attention particulière : espace petit, ventilation limitée.",
            href: "/produits-et-habitudes/",
          },
        ]}
      />
    </>
  );
}

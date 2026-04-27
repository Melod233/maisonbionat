import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import IssueDiagnosis from "@/components/issue/IssueDiagnosis";
import IssueSigns from "@/components/issue/IssueSigns";
import IssueCauses from "@/components/issue/IssueCauses";
import IssueActions from "@/components/issue/IssueActions";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Trop de poussière dans la maison : causes et solutions durables",
  description:
    "La poussière revient trop vite ? Identifier pourquoi (acariens, VMC, textiles, extérieur) et agir sur les causes, pas seulement sur les surfaces.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/poussiere-maison/",
  },
  openGraph: {
    title: "Trop de poussière dans la maison : causes et solutions durables",
    description:
      "La poussière revient trop vite ? Identifier pourquoi (acariens, VMC, textiles, extérieur) et agir sur les causes, pas seulement sur les surfaces.",
    url: "https://www.maisonbionat.fr/air-interieur/poussiere-maison/",
  },
};

export default function TropDePoussierePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    { name: "Trop de poussière dans la maison : causes et solutions durables", href: "https://www.maisonbionat.fr/air-interieur/poussiere-maison/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Problème fréquent"
        title="Trop de poussière malgré le ménage. D'où ça vient vraiment."
        quickAnswer="La poussière domestique n'est pas qu'une question de propreté : elle contient des acariens, des spores, des particules fines et des allergènes. Dépoussiérer à sec redistribue les particules dans l'air. Identifier la source principale permet d'agir durablement."
        stats={[
          { value: "70–80%", label: "de la poussière = cellules mortes de peau humaine" },
          { value: "1–2 M", label: "d'acariens par matelas non protégé (conditions favorables)" },
          { value: ">50%", label: "d'humidité : seuil de prolifération des acariens" },
          { value: "10×", label: "plus d'allergènes dans une moquette que sur un sol dur" },
        ]}
        anchors={[
          { id: "diagnostic", label: "D'où vient la poussière" },
          { id: "signes", label: "Signes d'un problème sérieux" },
          { id: "causes", label: "Causes principales" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Poussière : trois problèmes distincts, trois approches."
        description="Quand on parle de 'trop de poussière', on désigne en réalité des problèmes différents. La poussière sur les surfaces, la poussière en suspension dans l'air et les acariens ont des causes et des solutions distinctes."
        variants={[
          {
            indicator: "Le plus visible",
            name: "Accumulation rapide sur les surfaces",
            description:
              "La poussière revient très vite sur les meubles et les rebords. Cause principale : VMC insuffisante qui ne filtre pas les entrées d'air, textiles en grande quantité qui émettent des fibres, ou apports extérieurs importants (chaussures, fenêtres en façade sur rue).",
          },
          {
            indicator: "Le moins visible",
            name: "Poussière en suspension dans l'air",
            description:
              "L'air semble poussiéreux, on voit des particules dans un rayon de lumière. Lié aux activités qui remettent les particules en suspension : aspirateur sans filtre HEPA, plumeau à sec, aération dans une zone polluée. La VMC peut aussi recirculer des particules si elle est encrassée.",
          },
          {
            indicator: "Le plus impactant pour la santé",
            name: "Acariens et allergènes dans les textiles",
            description:
              "Les acariens sont microscopiques et invisibles. Leur présence se révèle par des symptômes allergiques : rhinite, toux, yeux qui piquent, surtout au lever. Ils vivent principalement dans les matelas, oreillers, coussins et moquettes.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quand la poussière devient un problème de santé."
        subtitle="La quantité de poussière visible n'est pas toujours proportionnelle à l'impact sur la santé."
        signs={[
          {
            label: "Poussière présente dès 2 à 3 jours après le ménage",
            description:
              "Un retour rapide de la poussière indique une source active : textiles abondants, VMC inefficace ou apports extérieurs importants. Ce n'est pas une question de ménage insuffisant.",
            severity: "léger",
          },
          {
            label: "Rhinite matinale ou toux au lever",
            description:
              "Des symptômes respiratoires qui apparaissent surtout après une nuit dans le logement sont caractéristiques d'une allergie aux acariens. Le matelas et les oreillers sont les réservoirs principaux.",
            severity: "critique",
          },
          {
            label: "Éternuements ou yeux qui piquent en faisant le ménage",
            description:
              "L'utilisation d'un aspirateur sans filtre HEPA ou d'un plumeau remet les allergènes en suspension. La réaction pendant le ménage est souvent le premier signe d'une sensibilisation aux allergènes de poussière.",
            severity: "modéré",
          },
          {
            label: "Poussière grise ou noire dans les zones peu fréquentées",
            description:
              "Une poussière foncée sur les plinthes ou derrière les meubles peut indiquer des particules fines liées à la combustion (bougies, encens, cuisson) ou des spores de moisissures transportées par l'air.",
            severity: "modéré",
          },
          {
            label: "Irritation persistante sans cause identifiée",
            description:
              "Gorge sèche, nez irrité ou fatigue inexpliquée dans le logement peuvent être liés à une concentration élevée de particules fines en suspension, même sans poussière visible.",
            severity: "modéré",
          },
          {
            label: "Moquette ou tapis qui sent le renfermé",
            description:
              "L'odeur d'une moquette est souvent due aux acariens, à leurs déjections et à l'humidité emprisonnée dans les fibres. C'est un indicateur de la charge allergénique du revêtement.",
            severity: "léger",
          },
        ]}
        footerNote="Si vous avez des symptômes allergiques persistants, un test allergologique chez un médecin peut confirmer une allergie aux acariens et orienter les mesures à prendre."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi la poussière s'accumule autant."
        causes={[
          {
            number: "01",
            cause: "Abondance de surfaces textiles",
            explanation:
              "Moquette, tapis, coussins, rideaux lourds, plaids, peluches : les textiles émettent des fibres en continu et retiennent la poussière et les acariens. Plus il y a de surfaces textiles, plus la charge en allergènes est élevée et plus la poussière visible est importante.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Occupation humaine et animaux domestiques",
            explanation:
              "Chaque occupant perd environ 1 à 1,5 g de peau par jour, principale nourriture des acariens. Les animaux domestiques ajoutent des poils et des danders. La densité d'occupation est directement proportionnelle à la charge en poussière.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "VMC encrassée ou absente",
            explanation:
              "Une VMC mal entretenue filtre moins bien les particules entrantes et peut recirculer les particules existantes. En son absence, les particules en suspension restent plus longtemps dans l'air avant de se déposer sur les surfaces.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Apports extérieurs par les chaussures et vêtements",
            explanation:
              "Les chaussures transportent pesticides, résidus de pollution, spores et sable. Les vêtements ramènent des fibres et des particules. Une entrée sans zone de déchaussement favorise la dispersion de ces particules dans tout le logement.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Hygrométrie favorable aux acariens",
            explanation:
              "Les acariens ont besoin de plus de 50 % d'humidité relative et d'une température de 18 à 25 °C pour proliférer. Un taux d'hygrométrie maintenu sous 50 % réduit significativement leur multiplication dans la literie et les textiles.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire la poussière et les allergènes durablement."
        immediate={[
          {
            label: "Passer un chiffon humide plutôt que sec",
            description:
              "Un chiffon sec ou un plumeau remet la poussière en suspension dans l'air. Un chiffon légèrement humide ou une lingette microfibre humide piège les particules et les retire. Simple, sans produit supplémentaire.",
            effort: "Gratuit",
          },
          {
            label: "Déchausser à l'entrée systématiquement",
            description:
              "Les chaussures sont le principal vecteur d'introduction de particules extérieures. Installez un tapis brosse à l'entrée et créez une zone de déchaussement. Impact immédiat et durable sur la propreté des sols.",
            effort: "Gratuit ou faible",
          },
          {
            label: "Aérer avant et après le ménage",
            description:
              "Ouvrir les fenêtres 10 minutes avant le ménage permet d'évacuer une partie des particules remises en suspension pendant le nettoyage. Le renouvellement d'air est le complément indispensable du dépoussiérage.",
            effort: "Gratuit",
          },
          {
            label: "Laver la literie à 60°C chaque semaine",
            description:
              "C'est la seule température qui détruit les acariens et leurs allergènes. Draps, taies d'oreillers, housses de couette. À 40°C, les acariens survivent et se réinstallent rapidement.",
            effort: "Coût lessive",
          },
        ]}
        structural={[
          {
            label: "Passer à un aspirateur à filtre HEPA",
            description:
              "Un aspirateur sans filtre HEPA recycle jusqu'à 30 % des particules dans l'air. Un HEPA certifié retient 99,97 % des particules de 0,3 micron. Investissement unique, indispensable si vous avez une allergie aux acariens.",
            effort: "150–350 €",
          },
          {
            label: "Installer des housses anti-acariens sur la literie",
            description:
              "Des housses certifiées imperméables aux acariens (maille < 10 microns) sur le matelas, les oreillers et la couette constituent la mesure la plus efficace contre les allergènes nocturnes. Investissement unique, efficacité durable.",
            effort: "40–100 € selon la taille",
          },
          {
            label: "Remplacer la moquette par un sol dur",
            description:
              "La moquette retient 10 fois plus d'allergènes qu'un sol dur. Si vous avez une allergie aux acariens, c'est la mesure structurelle la plus impactante. Parquet massif, carrelage ou linoléum naturel émettent peu et sont faciles à entretenir.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Réduire les textiles décoratifs dans les chambres",
            description:
              "Coussins accumulés, rideaux lourds, plaids non lavés : chaque textile est un réservoir potentiel. Conservez le minimum fonctionnel dans les chambres et lavez-les régulièrement à haute température.",
            effort: "Gratuit",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qui aggrave le problème sans qu'on le sache."
        errors={[
          {
            label: "Utiliser un plumeau ou un balai sec",
            explanation:
              "Ces outils déplacent la poussière plutôt qu'ils ne l'éliminent. Les particules remises en suspension restent dans l'air plusieurs heures avant de se redéposer, souvent plus loin. Préférez un chiffon humide ou un aspirateur HEPA.",
          },
          {
            label: "Aspirer sans filtre HEPA",
            explanation:
              "Un aspirateur sans filtre HEPA ou avec un filtre encrassé recycle une partie des particules fines et des allergènes dans l'air ambiant. Il nettoie le sol visible mais dégrade temporairement la qualité de l'air respiré.",
          },
          {
            label: "Laver la literie à 40°C",
            explanation:
              "40°C nettoie visuellement mais ne tue pas les acariens. Ils survivent et se réinstallent immédiatement. La température minimale efficace est 60°C pour une durée de cycle suffisante.",
          },
          {
            label: "Accumuler des textiles décoratifs dans la chambre",
            explanation:
              "Peluches, coussins, rideaux épais, tapis au pied du lit : plus il y a de textiles dans la chambre, plus la charge en allergènes est élevée. L'esthétique et la santé respiratoire sont en tension dans les chambres chargées.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la poussière"
        items={[
          {
            question: "Y a-t-il vraiment 1 million d'acariens dans un matelas ?",
            answer:
              "Dans des conditions favorables (hygrométrie > 50 %, température entre 18 et 25 °C), un matelas non protégé peut effectivement contenir des populations importantes d'acariens, de l'ordre de plusieurs centaines de milliers à plusieurs millions. Ce qui est problématique, ce sont leurs allergènes (déjections, fragments de corps) plutôt que les acariens eux-mêmes.",
          },
          {
            question: "Un filtre à air HEPA réduit-il vraiment la poussière ?",
            answer:
              "Un purificateur d'air à filtre HEPA réduit les particules et les allergènes en suspension dans l'air, ce qui peut aider les personnes allergiques. Il ne supprime pas les sources (textiles, literie) et ne remplace pas un aspirateur HEPA ni l'aération. C'est un complément utile dans les pièces de sommeil pour les personnes sensibles.",
          },
          {
            question: "Faut-il aspirer le matelas ?",
            answer:
              "Oui, régulièrement (hebdomadaire si vous êtes allergique, mensuel sinon) avec un aspirateur à filtre HEPA. Aspirez également sous le lit et dans les zones difficilement accessibles. Associez cette pratique aux housses anti-acariens pour un effet maximal.",
          },
          {
            question: "La poussière est-elle vraiment mauvaise pour la santé ?",
            answer:
              "Pour la majorité des personnes, une quantité normale de poussière est sans conséquence notable. Pour les personnes allergiques aux acariens (15 à 30 % de la population) ou asthmatiques, une charge élevée en allergènes de poussière peut déclencher ou aggraver des symptômes respiratoires. Les enfants sont plus sensibles.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Purificateur d'air maison : utile, gadget ou complément ?",
            description:
              "Avant d'investir dans un purificateur pour maîtriser la poussière, comprendre ce qu'il fait vraiment et ce qu'il ne remplace pas.",
            href: "/air-interieur/purificateur-air-maison/",
          },
          {
            tag: "Pièce par pièce",
            title: "Chambre saine",
            description:
              "La chambre est le premier espace à traiter contre les acariens : literie, matelas, sol, hygrométrie.",
            href: "/piece-par-piece/chambre-saine/",
          },
          {
            tag: "Humidité maison",
            title: "Contrôler l'humidité",
            description:
              "L'hygrométrie est le facteur clé dans la prolifération des acariens. Maintenir un taux sous 50 % réduit significativement leur développement.",
            href: "/humidite-maison/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Humidité dans la maison : causes, diagnostic et solutions",
  description:
    "Condensation sur les vitres, murs humides, air lourd : identifier la cause exacte de l'humidité dans votre logement et agir avec la bonne solution.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/problemes-humidite/",
  },
  openGraph: {
    title: "Humidité dans la maison : causes, diagnostic et solutions",
    description:
      "Condensation sur les vitres, murs humides, air lourd : identifier la cause exacte de l'humidité dans votre logement et agir avec la bonne solution.",
    url: "https://www.maisonbionat.fr/humidite-maison/problemes-humidite/",
  },
};

export default function HumiditeDansLaMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Humidité dans la maison : causes, diagnostic et solutions", href: "https://www.maisonbionat.fr/humidite-maison/problemes-humidite/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Humidité maison"
        parentHref="/humidite-maison/"
        tag="Problème fréquent"
        title="Votre logement est trop humide. Voilà d'où ça vient."
        quickAnswer="Dans la majorité des cas, l'excès d'humidité vient d'une ventilation insuffisante, pas d'une infiltration. Avant tout travaux, vérifiez que votre VMC fonctionne et aérez deux fois par jour."
        stats={[
          { value: "40–60%", label: "hygrométrie idéale dans un logement" },
          { value: "12 L", label: "de vapeur produite par jour par une famille de 4" },
          { value: "90%", label: "des cas dus à une ventilation insuffisante" },
          { value: ">60%", label: "d'hygrométrie : conditions favorables aux moisissures" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Identifier le type d'humidité" },
          { id: "signes", label: "Signes à reconnaître" },
          { id: "causes", label: "Causes fréquentes" },
          { id: "actions", label: "Que faire" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Trois types d'humidité, trois origines différentes."
        description="L'humidité excessive dans un logement n'a pas toujours la même origine. Identifier le bon type avant d'agir évite de perdre du temps et de l'argent sur des solutions qui ne correspondent pas au problème réel."
        variants={[
          {
            indicator: "La plus fréquente",
            name: "Humidité de condensation",
            description:
              "La vapeur d'eau produite par les occupants (douches, cuisine, respiration, linge) se dépose sur les surfaces froides quand la ventilation est insuffisante. Apparaît surtout sur les vitres, dans les angles froids et dans les pièces peu aérées.",
          },
          {
            indicator: "Origine externe",
            name: "Infiltration par la toiture ou les murs",
            description:
              "L'eau entre par des défauts d'étanchéité : tuile cassée, joint de fenêtre dégradé, fissure en façade. Les taches apparaissent après la pluie, souvent en haut des murs ou au plafond.",
          },
          {
            indicator: "Origine structurelle",
            name: "Remontées capillaires",
            description:
              "L'eau du sol remonte dans les murs par capillarité, généralement dans les maisons anciennes sans barrière d'étanchéité. Les taches sont persistantes en bas des murs, souvent associées à un efflorescence blanchâtre.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Comment reconnaître un problème d'humidité."
        subtitle="Certains signes sont visibles immédiatement, d'autres s'installent progressivement."
        signs={[
          {
            label: "Condensation sur les vitres",
            description:
              "Des gouttelettes ou une buée persistante sur les vitres, surtout le matin, indiquent que l'air intérieur est saturé en vapeur d'eau. Premier signal d'une ventilation insuffisante.",
            severity: "modéré",
          },
          {
            label: "Odeur de renfermé ou de moisi",
            description:
              "Une odeur persistante même après aération est souvent le signe d'humidité cachée : derrière un meuble, sous un revêtement de sol ou dans une cloison.",
            severity: "modéré",
          },
          {
            label: "Taches sombres sur les murs",
            description:
              "Des auréoles ou des zones sombres, surtout dans les angles et en haut des murs, signalent soit une condensation récurrente soit une infiltration. À investiguer rapidement.",
            severity: "critique",
          },
          {
            label: "Peinture qui cloque ou se décolle",
            description:
              "La peinture qui boursoufle ou se décolle sans raison apparente indique une humidité derrière le revêtement. Symptôme fréquent des murs exposés à une infiltration ou à des remontées capillaires.",
            severity: "modéré",
          },
          {
            label: "Air qui semble lourd ou chargé",
            description:
              "Une sensation de lourdeur ou d'inconfort, surtout dans certaines pièces, peut indiquer un taux d'humidité supérieur à 60 %. Un hygromètre confirme en quelques secondes.",
            severity: "léger",
          },
          {
            label: "Bois qui se déforme",
            description:
              "Parquet qui gonfle, portes qui frottent, menuiseries qui ne ferment plus correctement : le bois absorbe l'humidité ambiante. Un signal discret mais fiable d'un taux d'hygrométrie trop élevé.",
            severity: "modéré",
          },
        ]}
        footerNote="Un hygromètre numérique (10 à 20 €) permet de mesurer le taux d'humidité de chaque pièce en quelques secondes. Placez-en un dans les pièces concernées pendant 48h avant de tirer des conclusions."
      />

      <IssueCauses
        id="causes"
        title="D'où vient l'excès d'humidité."
        subtitle="La cause conditionne la solution. Agir sans diagnostic revient à traiter les symptômes."
        causes={[
          {
            number: "01",
            cause: "Ventilation insuffisante ou obstruée",
            explanation:
              "Une VMC mal entretenue, des bouches obstruées ou absentes sont la cause principale de l'accumulation de vapeur d'eau. L'air ne se renouvelle pas, l'humidité produite par les occupants stagne et se condense.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Activités domestiques non compensées",
            explanation:
              "Douche, cuisson, linge séché en intérieur : une famille de 4 personnes produit plus de 12 litres de vapeur d'eau par jour. Sans extraction adaptée (hotte, VMC salle de bain), cette vapeur reste dans le logement.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Ponts thermiques et surfaces froides",
            explanation:
              "Les angles de murs, les tableaux de fenêtres ou les zones mal isolées ont une température de surface inférieure au reste de la pièce. La vapeur d'eau se condense préférentiellement sur ces zones froides.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Infiltration par l'enveloppe du bâtiment",
            explanation:
              "Toiture endommagée, joints de fenêtres dégradés, fissures en façade : l'eau de pluie entre dans le bâtiment et humidifie les murs de l'intérieur. L'humidité apparaît après les épisodes de pluie.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Remontées capillaires",
            explanation:
              "Dans les maisons anciennes sans barrière d'étanchéité en pied de mur, l'eau du sol remonte dans la maçonnerie par capillarité. Les murs restent humides en permanence en bas, souvent avec des efflorescences blanches.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Agir dans le bon ordre."
        immediate={[
          {
            label: "Aérer deux fois par jour, 10 minutes",
            description:
              "Ouvrez les fenêtres en opposition matin et soir. En hiver, l'air froid extérieur est très peu chargé en vapeur d'eau : 10 minutes suffisent à renouveler l'air d'une pièce sans refroidir durablement.",
            effort: "Gratuit, 20 min/jour",
          },
          {
            label: "Vérifier et nettoyer les bouches VMC",
            description:
              "Retirez les grilles et nettoyez-les. Passez la main devant la bouche : vous devez sentir un débit d'air. Si rien, la VMC est peut-être en panne ou la bouche obstruée.",
            effort: "Gratuit",
          },
          {
            label: "Arrêter de sécher le linge en intérieur",
            description:
              "Un étendage de linge libère 2 à 4 litres de vapeur d'eau dans l'air. Si l'extérieur est impossible, utilisez une pièce dédiée avec fenêtre entrouverte ou un sèche-linge à condensation.",
            effort: "Gratuit",
          },
          {
            label: "Mesurer l'hygrométrie avec un hygromètre",
            description:
              "Placez un hygromètre dans chaque pièce concernée. Mesurez le taux au réveil et en soirée. Cela permet de confirmer le problème et de cibler les pièces prioritaires.",
            effort: "10–20 €",
          },
        ]}
        structural={[
          {
            label: "Faire réviser ou remplacer la VMC",
            description:
              "Une VMC simple flux doit être entretenue tous les 3 à 5 ans. Une VMC double flux permet un renouvellement d'air plus efficace tout en limitant les pertes de chaleur. Faites appel à un professionnel.",
            effort: "Entretien : 100–200 € / Remplacement : 500–2000 €",
          },
          {
            label: "Traiter les ponts thermiques par l'isolation",
            description:
              "L'isolation des angles froids ou des tableaux de fenêtres supprime les zones de condensation préférentielle. À intégrer dans un projet de rénovation plus large.",
            effort: "Devis artisan",
          },
          {
            label: "Réparer l'étanchéité du bâtiment",
            description:
              "En cas d'infiltration confirmée : remplacement de tuiles, refection des joints de fenêtres ou traitement des fissures de façade. Un diagnostic préalable est indispensable.",
            effort: "Variable selon cause",
          },
          {
            label: "Traiter les remontées capillaires",
            description:
              "Les remontées capillaires nécessitent un traitement professionnel : injection de résine hydrofuge, drain en pied de mur ou cuvelage. Les solutions superficielles (enduits étanches) sont insuffisantes.",
            effort: "Devis professionnel obligatoire",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui aggravent le problème."
        errors={[
          {
            label: "Boucher les grilles de ventilation",
            explanation:
              "Les grilles d'aération semblent créer des courants d'air ou des pertes de chaleur. Les obstruer est pourtant l'une des causes les plus fréquentes d'accumulation d'humidité et de moisissures.",
          },
          {
            label: "Utiliser un déshumidificateur sans traiter la cause",
            explanation:
              "Un déshumidificateur électrique consomme de l'énergie et traite l'air, mais ne résout pas une VMC défaillante ou une infiltration. Il masque le problème en attendant qu'il s'aggrave.",
          },
          {
            label: "Repeindre sur des murs humides",
            explanation:
              "La peinture appliquée sur une surface humide ne tient pas. Elle finira par cloquer et se décoller quelques semaines ou mois plus tard, en laissant le problème intact en dessous.",
          },
          {
            label: "Chauffer fort pour assécher",
            explanation:
              "Monter le chauffage sans ventiler réduit l'humidité relative temporairement, mais la vapeur d'eau reste présente et se redépose dès que la température baisse. Seule la combinaison chaleur + aération est efficace.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'humidité dans la maison"
        items={[
          {
            question: "Comment mesurer le taux d'humidité dans une pièce ?",
            answer:
              "Avec un hygromètre numérique, disponible pour 10 à 20 € en grande surface ou en ligne. Placez-le dans la pièce et laissez-le stabiliser pendant 30 minutes. Mesurez le matin (humidité souvent plus haute) et le soir. L'objectif est de rester entre 40 et 60 %.",
          },
          {
            question: "Comment distinguer une condensation d'une infiltration ?",
            answer:
              "La condensation apparaît sur les surfaces froides (vitres, angles de murs) après des activités humides (douche, cuisine) et s'améliore avec l'aération. Une infiltration crée des taches stables qui apparaissent après la pluie, souvent en haut des murs ou au plafond, et ne s'améliorent pas avec l'aération.",
          },
          {
            question: "Faut-il un déshumidificateur ?",
            answer:
              "Un déshumidificateur peut aider ponctuellement (après dégât des eaux, dans une cave) mais ne remplace pas une ventilation fonctionnelle. Si votre problème est chronique, investissez d'abord dans l'entretien ou le remplacement de la VMC.",
          },
          {
            question: "L'humidité est-elle dangereuse pour la santé ?",
            answer:
              "Un taux d'humidité chroniquement élevé (> 60 %) favorise le développement des moisissures et des acariens. Les spores de moisissures et les allergènes d'acariens irritent les voies respiratoires et peuvent aggraver l'asthme ou provoquer des allergies. Les personnes les plus sensibles : enfants, asthmatiques, personnes immunodéprimées.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "Humidité persistante et moisissures vont souvent de pair. Identifier le type de moisissure et choisir la bonne méthode de traitement.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Qualité de l'air et ventilation",
            description:
              "L'humidité et la qualité de l'air sont directement liées. Une bonne VMC règle souvent les deux problèmes à la fois.",
            href: "/air-interieur/",
          },
          {
            tag: "Pièce par pièce",
            title: "Salle de bain et cuisine",
            description:
              "Les deux pièces les plus productrices de vapeur d'eau. Équipements, habitudes et ventilation spécifiques.",
            href: "/piece-par-piece/salle-de-bain-saine/",
          },
        ]}
      />
    </>
  );
}

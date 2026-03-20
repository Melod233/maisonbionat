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
  title: "Diagnostic humidité maison : identifier le type de problème",
  description:
    "Condensation, infiltration ou remontées capillaires : comment distinguer les types d'humidité dans votre logement, les indices visuels à observer et quand faire appel à un professionnel.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/diagnostic-humidite/",
  },
  openGraph: {
    title: "Diagnostic humidité maison : identifier le type de problème",
    description:
      "Condensation, infiltration ou remontées capillaires : comment distinguer les types d'humidité dans votre logement, les indices visuels à observer et quand faire appel à un professionnel.",
    url: "https://www.maisonbionat.fr/humidite-maison/diagnostic-humidite/",
  },
};

export default function DiagnosticHumiditePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Diagnostic humidité maison : identifier le type de problème", href: "https://www.maisonbionat.fr/humidite-maison/diagnostic-humidite/" },
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
        tag="Comprendre"
        title="Diagnostic humidité : condensation, infiltration ou remontées capillaires ?"
        quickAnswer="Traiter une humidité sans en identifier la cause précise, c'est risquer de dépenser de l'argent inutilement ou d'aggraver le problème. La condensation, l'infiltration et les remontées capillaires ont des causes radicalement différentes et appellent des solutions opposées. Ce guide vous donne les indices pour distinguer chaque situation et savoir quand un professionnel est nécessaire."
        stats={[
          { value: "3", label: "types principaux d'humidité dans le bâtiment, avec des causes et solutions distincts" },
          { value: ">60 %", label: "des problèmes d'humidité sont liés à la condensation selon les experts du bâtiment" },
          { value: "10–50 %", label: "des logements européens présentent des signes d'humidité (OMS)" },
          { value: "24–48 h", label: "suffisent pour que les moisissures colonisent une surface humide en conditions favorables" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les 3 types d'humidité" },
          { id: "signes", label: "Indices visuels" },
          { id: "causes", label: "Causes par type" },
          { id: "actions", label: "Comment diagnostiquer" },
          { id: "eviter", label: "Erreurs de diagnostic" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les trois types d'humidité et leurs signatures."
        description="Chaque type d'humidité laisse des traces caractéristiques. Observer attentivement l'emplacement, la forme et le comportement des zones humides permet souvent d'identifier la cause sans instrument."
        variants={[
          {
            indicator: "Type 1 : le plus fréquent",
            name: "Condensation",
            description:
              "La vapeur d'eau intérieure se condense sur les surfaces froides. Localisation : vitres, angles de murs extérieurs, derrière les meubles. Apparition : après des activités productrices de vapeur ou la nuit. Fluctue selon les habitudes et la saison. Disparaît avec une meilleure ventilation dans la majorité des cas.",
          },
          {
            indicator: "Type 2 : humidité venue de l'extérieur",
            name: "Infiltration",
            description:
              "L'eau de pluie pénètre par un défaut d'étanchéité (toiture, façade, fenêtres, balcon). Localisation : en hauteur (plafond, angle mur-toiture), près des menuiseries, sur les murs exposés à la pluie. Apparition : après les épisodes pluvieux, avec une auréole brune caractéristique. Ne varie pas selon les activités intérieures.",
          },
          {
            indicator: "Type 3 : humidité venue du sol",
            name: "Remontées capillaires",
            description:
              "L'eau du sol remonte par capillarité dans les fondations et les murs bas. Localisation : exclusivement en bas des murs (0 à 1 mètre de hauteur), souvent avec une ligne horizontale nette. Présence fréquente de salpêtre (efflorescences blanches). Problème quasi exclusif des constructions anciennes sans barrière d'étanchéité.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les indices visuels pour identifier chaque type."
        subtitle="Observez l'emplacement, la forme, la couleur et le comportement des zones humides avant d'agir."
        signs={[
          {
            label: "Buée et gouttelettes sur les vitres",
            description:
              "Condensation de surface. Apparaît la nuit ou après une douche. C'est de la condensation liée à la vapeur intérieure. Premier signe d'une humidité relative trop élevée dans le logement.",
            severity: "léger",
          },
          {
            label: "Taches sombres dans les angles de murs",
            description:
              "Condensation chronique sur les ponts thermiques. Les angles extérieurs sont les premiers points froids. Si les taches noircissent, ce sont des moisissures qui commencent à s'installer.",
            severity: "modéré",
          },
          {
            label: "Auréole brune ou jaunâtre sur un plafond ou un mur haut",
            description:
              "Infiltration par la toiture ou une terrasse. La tache est souvent localisée et se forme ou s'élargit après la pluie. La couleur caractéristique vient des minéraux entraînés par l'eau.",
            severity: "critique",
          },
          {
            label: "Humidité concentrée en bas des murs avec ligne horizontale",
            description:
              "Remontées capillaires typiques. La limite haute est souvent nette et horizontale. On peut observer du salpêtre (poudre blanche cristallisée) ou des cloques dans la peinture à la base des murs.",
            severity: "critique",
          },
          {
            label: "Humidité qui apparaît uniquement après la pluie",
            description:
              "Infiltration par la façade, les menuiseries ou la toiture. La corrélation avec les épisodes pluvieux est le meilleur indice pour distinguer une infiltration d'une condensation.",
            severity: "modéré",
          },
          {
            label: "Humidité derrière les meubles, côté mur extérieur",
            description:
              "Condensation sur pont thermique avec zone stagnante. La vapeur se condense préférentiellement sur les surfaces froides inaccessibles à l'air circulant. Souvent accompagnée de moisissures cachées.",
            severity: "modéré",
          },
        ]}
        footerNote="En cas de doute, le test du papier aluminium peut aider : collez un carré sur la zone suspecte. Si la condensation se forme côté intérieur, c'est de la condensation de surface. Si elle se forme côté mur, l'humidité vient de la paroi."
      />

      <IssueCauses
        id="causes"
        title="Les causes selon chaque type d'humidité."
        subtitle="Même symptôme, causes radicalement différentes. Un traitement efficace commence par la bonne identification."
        causes={[
          {
            number: "01",
            cause: "Condensation : ventilation insuffisante et excès de vapeur",
            explanation:
              "La vapeur produite par les occupants (respiration, cuisine, douche, linge) n'est pas évacuée par une ventilation suffisante. Elle s'accumule et se condense sur les surfaces les plus froides. Cause principale : VMC défaillante, grilles obturées, absence d'aération.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Condensation : ponts thermiques et mauvaise isolation",
            explanation:
              "Les zones mal isolées (jonctions mur-plancher, tableaux de fenêtres, angles extérieurs) ont une température de surface bien inférieure au reste de la pièce. Même avec une bonne ventilation, ces points froids concentrent la condensation si l'air est chargé en vapeur.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Infiltration : défaut d'étanchéité de l'enveloppe",
            explanation:
              "Tuiles fissurées ou manquantes, joints de fenêtres défectueux, façade poreuse, solin de toiture mal posé, balcon fissuré : toute discontinuité dans l'étanchéité du bâtiment laisse entrer l'eau de pluie. Les infiltrations sont souvent sous-estimées car les dégâts apparaissent à distance du point d'entrée.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Remontées capillaires : absence de barrière d'étanchéité en pied de mur",
            explanation:
              "Dans les constructions anciennes (avant les années 1950 environ), il n'existait pas de barrière étanche entre les fondations et les murs. L'eau du sol remonte par les pores des matériaux (pierre, brique ancienne, béton poreux) jusqu'à 1 à 1,5 mètre de hauteur.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Erreur de rénovation : humidité piégée dans la paroi",
            explanation:
              "Une isolation intérieure mal conçue peut déplacer le point de rosée à l'intérieur du mur, provoquant une condensation interstitielle invisible. Le mur reste froid côté intérieur, l'isolant s'humidifie progressivement. Cas fréquent lors d'une isolation intérieure sans pare-vapeur adapté.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Comment mener soi-même un premier diagnostic."
        immediateLabel="Observer et tester"
        structuralLabel="Quand faire appel à un professionnel"
        immediate={[
          {
            label: "Observez l'emplacement et la forme des traces",
            description:
              "Notez précisément : en haut ou en bas du mur ? Sur vitres ou murs ? Près des menuiseries ? L'emplacement est le premier indice. Photographiez les zones suspectes à différents moments (après pluie, après douche, au matin) pour établir des corrélations.",
            effort: "Gratuit",
          },
          {
            label: "Testez avec le papier aluminium",
            description:
              "Collez un carré de papier aluminium (15 x 15 cm) sur la zone humide avec du ruban adhésif sur tous les côtés. Attendez 24 à 48 heures. Si la condensation est sur la face intérieure : c'est de la condensation de surface. Si elle est côté mur : l'humidité vient de la paroi (infiltration ou remontées).",
            effort: "Gratuit",
          },
          {
            label: "Mesurez le taux d'humidité de l'air",
            description:
              "Un hygromètre posé dans les pièces concernées donne une indication directe. Si le taux est supérieur à 65 % en permanence, la condensation est probable. Si le taux intérieur est normal mais que des zones restent humides, c'est plutôt une humidité venant du bâti.",
            effort: "10–20 €",
          },
          {
            label: "Cherchez la corrélation avec la météo",
            description:
              "Observez si les taches humides apparaissent ou s'agrandissent après les jours de pluie. Si oui, infiltration. Si elles sont présentes en permanence indépendamment de la météo extérieure, condensation ou remontées capillaires.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Faire appel à un expert bâtiment en cas de doute",
            description:
              "Un expert ou un diagnostiqueur humidité peut identifier précisément le type de problème avec des instruments de mesure (hygromètre de paroi, caméra thermique). Recommandé quand plusieurs types semblent combinés ou quand les travaux envisagés représentent un investissement important.",
            effort: "150–400 € selon la prestation",
          },
          {
            label: "Demander un diagnostic avant tous travaux d'isolation",
            description:
              "Avant d'isoler un mur qui présente de l'humidité, faites identifier la cause précise. Isoler par-dessus une infiltration ou des remontées capillaires peut emprisonner l'humidité et aggraver les dégâts. L'ordre logique : traiter l'humidité, puis isoler.",
            effort: "Conseil professionnel",
          },
          {
            label: "Faire inspecter la toiture après l'identification d'une infiltration",
            description:
              "Une infiltration par la toiture nécessite l'intervention d'un couvreur. N'attendez pas : chaque épisode pluvieux aggrave les dégâts dans la structure et les isolants. Les démarches d'assurance habitation peuvent couvrir les dégâts des eaux selon les circonstances.",
            effort: "Devis couvreur",
          },
          {
            label: "Traiter les remontées capillaires par des professionnels spécialisés",
            description:
              "Les remontées capillaires nécessitent une intervention spécialisée : injection de résine hydrophobe en pied de mur ou pose d'un drain périphérique. Les enduits anti-humidité de surface retardent mais ne traitent pas la cause. Un spécialiste en assèchement de murs est recommandé.",
            effort: "Devis professionnel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs de diagnostic qui coûtent cher."
        errors={[
          {
            label: "Traiter une infiltration comme de la condensation",
            explanation:
              "Améliorer la ventilation ne résoudra jamais une infiltration par la toiture ou la façade. Si l'eau entre de l'extérieur, elle continuera à entrer jusqu'à ce que le point d'entrée soit traité. Un diagnostic incorrectement orienté entraîne des travaux inutiles et le problème persiste.",
          },
          {
            label: "Traiter des remontées capillaires avec des enduits de surface",
            explanation:
              "Les enduits étanches appliqués sur un mur soumis à des remontées capillaires créent une pression hydraulique à la base des murs qui finit par décoller les enduits et aggraver la situation. Seule une barrière en pied de mur traite le problème.",
          },
          {
            label: "Isoler un mur humide sans traiter la source d'humidité",
            explanation:
              "L'isolation intérieure d'un mur humide emprisonne l'humidité dans la paroi, accélère la dégradation des matériaux et peut provoquer des pathologies plus graves. La règle est absolue : traiter l'humidité avant d'isoler.",
          },
          {
            label: "Confondre salpêtre et moisissures",
            explanation:
              "Le salpêtre (dépôt blanc cristallisé, poudre ou effloresence) est un dépôt minéral laissé par l'eau qui s'évapore. Il n'est pas dangereux en soi mais indique une humidité de paroi venant du sol ou de la maçonnerie. Les moisissures sont organiques, sombres et se développent sur les surfaces. Les deux nécessitent des traitements différents.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le diagnostic d'humidité"
        items={[
          {
            question: "Peut-on faire un diagnostic humidité soi-même ?",
            answer:
              "Oui, un premier diagnostic visuel et par observation est souvent suffisant pour distinguer la condensation d'une infiltration ou de remontées capillaires. Les tests simples (papier aluminium, corrélation avec la météo, emplacement des taches) donnent des indications fiables dans la majorité des cas. Un professionnel est recommandé quand les causes semblent multiples, quand des travaux importants sont envisagés ou quand le problème résiste malgré les actions entreprises.",
          },
          {
            question: "Combien coûte un diagnostic humidité professionnel ?",
            answer:
              "Un expert bâtiment ou un diagnostiqueur humidité facture généralement entre 150 et 400 € pour une visite avec rapport. Certains prestataires proposent un déplacement gratuit s'il est suivi de travaux. Méfiez-vous des devis très attractifs qui conditionnent le diagnostic à l'achat immédiat d'un traitement.",
          },
          {
            question: "Mon logement a-t-il plusieurs types d'humidité en même temps ?",
            answer:
              "Oui, c'est fréquent. Un logement peut présenter simultanément de la condensation (mauvaise ventilation), une infiltration ponctuelle (joint de fenêtre défectueux) et des remontées capillaires (maison ancienne). Chaque problème doit être traité séparément avec la solution adaptée. C'est pourquoi le diagnostic précis est indispensable avant d'agir.",
          },
          {
            question: "Qu'est-ce qu'un pont thermique et comment l'identifier ?",
            answer:
              "Un pont thermique est une zone de l'enveloppe du bâtiment où la résistance thermique est localement plus faible, laissant plus facilement passer le froid. En hiver, ces zones ont une température de surface inférieure au reste de la pièce. On les identifie par : condensation récurrente aux mêmes endroits, température plus froide au toucher, ou par caméra thermique. Les jonctions mur-plancher, les tableaux de fenêtres et les angles extérieurs sont les ponts thermiques les plus fréquents.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Condensation dans le logement",
            description:
              "Comprendre la condensation en détail : pourquoi elle se forme, où elle apparaît et comment la réduire durablement.",
            href: "/humidite-maison/condensation-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Problèmes d'humidité dans la maison",
            description:
              "Vue d'ensemble des problèmes d'humidité, des solutions et des priorités d'action.",
            href: "/humidite-maison/problemes-humidite/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover en tenant compte de l'humidité",
            description:
              "Isolation, matériaux et travaux : comment intégrer la gestion de l'humidité dans un projet de rénovation.",
            href: "/renovation-saine/",
          },
        ]}
      />
    </>
  );
}

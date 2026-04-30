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
  title: "Aérer après des travaux : durée, méthode et quand réintégrer",
  description:
    "Les COV émis après une rénovation sont maximaux dans les premières 72 heures. Protocoles d'aération selon le type de travaux, durées recommandées et conseils pour réintégrer en sécurité une chambre ou une pièce de vie.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/aerer-apres-travaux/",
  },
  openGraph: {
    title: "Aérer après des travaux : durée, méthode et quand réintégrer",
    description:
      "Les COV émis après une rénovation sont maximaux dans les premières 72 heures. Protocoles d'aération selon le type de travaux, durées recommandées et conseils pour réintégrer en sécurité une chambre ou une pièce de vie.",
    url: "https://www.maisonbionat.fr/renovation-saine/aerer-apres-travaux/",
  },
};

export default function AererApresTravauxPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Aérer après des travaux : durée, méthode et quand réintégrer", href: "https://www.maisonbionat.fr/renovation-saine/aerer-apres-travaux/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Rénovation saine"
        parentHref="/renovation-saine/"
        tag="Guide pratique"
        title="Aérer après des travaux : combien de temps et comment"
        quickAnswer="Une pièce fraîchement rénovée peut contenir 3 à 5 fois plus de COV que la normale, et les premières 24 à 72 heures sont les plus critiques. Aérer fortement et en continu pendant cette période est la mesure la plus efficace pour réduire l'exposition. La durée recommandée varie selon le type de travaux : quelques jours pour une simple retouche de peinture, plusieurs semaines pour une rénovation complète. Réintégrer une pièce trop tôt, surtout pour y dormir, augmente l'exposition aux concentrations les plus élevées."
        stats={[
          { value: "3 à 5 fois", label: "augmentation des concentrations de COV dans une pièce fraîchement rénovée par rapport à la normale" },
          { value: "24 à 72 h", label: "période de pic d'émission après application de peintures ou de colles" },
          { value: "10 µg/m³", label: "valeur guide ANSES pour le formaldéhyde en air intérieur (usage chronique, depuis janvier 2023)" },
          { value: "2 à 4 semaines", label: "durée minimale recommandée de ventilation intensive après une rénovation complète d'une pièce" },
        ]}
        anchors={[
          { id: "diagnostic", label: "La pollution post-travaux" },
          { id: "signes", label: "Évaluer l'aération" },
          { id: "causes", label: "Pourquoi les premières heures comptent" },
          { id: "actions", label: "Protocoles d'aération" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="L'ampleur de la pollution post-travaux selon le type d'intervention"
        description="Tous les travaux ne génèrent pas la même charge en COV. L'intensité et la durée de l'aération recommandée varient selon les matériaux appliqués et la superficie concernée."
        variants={[
          {
            indicator: "Travaux légers",
            name: "Retouche de peinture, rebouchage, mastic",
            description:
              "Une retouche de peinture sur une petite surface ou un rebouchage localisé génère une pollution modérée et concentrée dans le temps. Les émissions diminuent rapidement si la pièce est aérée dès l'application. 48 à 72 heures de ventilation intensive (fenêtres ouvertes en grand) sont généralement suffisantes avant de réoccuper normalement la pièce. Évitez quand même d'y dormir les deux premières nuits.",
          },
          {
            indicator: "Travaux intermédiaires",
            name: "Pose de revêtement de sol, peinture complète d'une pièce",
            description:
              "La pose d'un parquet collé, d'un carrelage avec colle, d'un revêtement vinyle adhésif ou la peinture complète d'une pièce génère une charge en COV significative, surtout avec les colles. Les émissions restent élevées pendant 7 à 14 jours. Ventilation intensive pendant au minimum 1 semaine, idéalement 2 semaines. Pour une chambre à coucher, attendez au moins 7 jours avant d'y dormir.",
          },
          {
            indicator: "Rénovation complète",
            name: "Sol + murs + plafond + isolant, ou changement total de finitions",
            description:
              "Une rénovation complète (sol, peintures, cloisons, isolant) superpose plusieurs matériaux dont les émissions se cumulent. Les concentrations peuvent rester significativement élevées pendant 4 à 8 semaines. La ventilation intensive doit durer au moins 2 à 4 semaines, avec si possible une période de 'bake-out' (montée en température) pour accélérer le dégazage. Pour une chambre d'enfant, prévoyez 4 à 6 semaines minimum.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Évaluer si la pièce est suffisamment aérée avant d'y revenir"
        subtitle="En l'absence d'un capteur de COV, ces indicateurs sensoriels et comportementaux permettent d'évaluer si l'aération a été suffisante."
        signs={[
          {
            label: "Odeur persistante à l'entrée dans la pièce",
            description:
              "Si vous percevez encore une odeur de peinture, de colle, de solvant ou de matériau neuf en entrant dans la pièce après aération, les concentrations de COV restent élevées. L'absence d'odeur n'est pas une garantie absolue (certains COV sont inodores à ces concentrations), mais la présence d'odeur est un signal clair d'aération insuffisante.",
            severity: "critique",
          },
          {
            label: "Irritations des yeux ou de la gorge en entrant",
            description:
              "Des picotements oculaires, une irritation de la gorge ou des éternuements à l'entrée dans une pièce rénovée indiquent des concentrations de COV encore significatives. Ces symptômes sont causés notamment par le formaldéhyde et les aldéhydes, particulièrement irritants pour les muqueuses.",
            severity: "critique",
          },
          {
            label: "Sensation de tête lourde après quelques minutes dans la pièce",
            description:
              "Une sensation de pesanteur, des maux de tête légers ou une fatigue inhabituelle après quelques minutes dans une pièce fraîchement rénovée indiquent une exposition à des concentrations élevées de COV ou de CO2. Sortez, aérez davantage et n'occupez pas la pièce de nuit avant la disparition de ces symptômes.",
            severity: "critique",
          },
          {
            label: "Fenêtres fermées depuis plusieurs heures",
            description:
              "Si la pièce a été fermée pour cause de météo, d'absence ou de nuit, les COV se sont reconcentrés dans l'air stagnant. Rouvrez en grand avant toute occupation, même brève, et laissez ventiler au moins 30 minutes avant d'entrer.",
            severity: "modéré",
          },
          {
            label: "Moins de 7 jours après une pose de parquet collé ou de carrelage",
            description:
              "Les colles de pose de revêtements de sol sont parmi les produits les plus émissifs d'un chantier de rénovation. Même si l'odeur semble disparue en surface, des émissions significatives peuvent persister dans les premières semaines. Ne dormez pas dans cette pièce avant une semaine de ventilation intensive.",
            severity: "modéré",
          },
          {
            label: "Pièce occupée par un enfant ou une personne sensible",
            description:
              "Les enfants, les femmes enceintes, les personnes asthmatiques ou ayant une sensibilité chimique sont plus vulnérables aux COV. Pour ces profils, les durées recommandées d'aération avant réoccupation sont à doubler par rapport aux recommandations standards pour un adulte en bonne santé.",
            severity: "modéré",
          },
        ]}
        footerNote="Des capteurs de COV et de formaldéhyde domestiques existent à partir de 50 à 150 € et permettent un suivi plus objectif des concentrations. Ils ne remplacent pas les mesures professionnelles, mais donnent une indication utile sur l'évolution de la qualité de l'air après travaux."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi les premières heures et jours sont les plus critiques"
        subtitle="Les mécanismes physico-chimiques qui expliquent la concentration des émissions dans la période post-travaux immédiate."
        causes={[
          {
            number: "01",
            cause: "Les solvants et diluants s'évaporent massivement dans les premières heures",
            explanation:
              "Les peintures, colles et vernis contiennent des solvants (eau pour les produits en phase aqueuse, solvants organiques pour les autres) qui s'évaporent lors du séchage. La quasi-totalité de cette évaporation a lieu dans les premières 24 à 48 heures après application. C'est la phase où les concentrations atmosphériques de COV sont maximales, pouvant atteindre des niveaux 3 à 5 fois supérieurs aux concentrations habituelles.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "La chaleur accélère et intensifie le dégazage",
            explanation:
              "Plus la température est élevée dans la pièce, plus les COV se volatilisent rapidement. En été, les concentrations post-travaux peuvent être significativement plus élevées que par temps frais. C'est d'ailleurs le principe du 'bake-out' : monter la température à 25-30°C pendant plusieurs jours pour provoquer un dégazage accéléré, puis ventiler intensivement pour évacuer les COV concentrés.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le formaldéhyde est émis sur une période plus longue",
            explanation:
              "Contrairement à la plupart des COV qui s'évaporent rapidement, le formaldéhyde continue d'être émis par certains matériaux (panneaux de bois, isolants, colles à base de résines formaldéhyde) pendant des semaines voire des mois. Classé cancérogène avéré (CIRC groupe 1) et soumis à une valeur guide ANSES de 10 µg/m³, il justifie une période de ventilation prolongée au-delà des émissions initiales.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "La nuit, les concentrations se reconstituent en l'absence d'aération",
            explanation:
              "Pendant les heures de sommeil, la pièce est fermée et la ventilation réduite. Les COV qui continuent de dégazer s'accumulent dans l'air confiné. En dormant dans une pièce fraîchement rénovée, on s'expose pendant 7 à 8 heures d'affilée à des concentrations qui ont eu toute la nuit pour se reconstituer. C'est une exposition nocturnalement plus intense que pendant la journée.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "La VMC seule ne suffit pas dans la phase initiale",
            explanation:
              "Une VMC simple flux hygroréglable assure un débit de renouvellement d'air adapté aux conditions normales d'occupation. Mais face à des émissions 3 à 5 fois supérieures à la normale, ce débit ne suffit pas à maintenir des concentrations acceptables. L'ouverture des fenêtres en grand reste indispensable pendant la phase critique post-travaux, en complément de la VMC.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Protocole d'aération selon le type de travaux"
        immediateLabel="Pendant et juste après les travaux"
        structuralLabel="Dans les jours et semaines qui suivent"
        immediate={[
          {
            label: "Ouvrir les fenêtres en grand pendant l'application",
            description:
              "Dès le début des travaux d'application (peinture, colle, vernis), ouvrez toutes les fenêtres et portes donnant sur l'extérieur. Créez si possible un courant d'air traversant entre deux ouvertures opposées. Cette ventilation protège aussi les artisans, dont l'exposition est encore plus directe que celle des occupants.",
            effort: "Gratuit",
          },
          {
            label: "Maintenir la ventilation en continu pendant les 72 premières heures",
            description:
              "Après la fin des travaux, laissez les fenêtres ouvertes en continu pendant les 72 premières heures, même la nuit si les conditions météo le permettent. Si le froid ou la pluie l'empêchent, ouvrez au maximum plusieurs fois par heure (30 minutes toutes les heures au minimum) et fermez aussi peu que possible.",
            effort: "Organisation",
          },
          {
            label: "Ventiler en courant d'air traversant, pas par une seule ouverture",
            description:
              "Ouvrir une seule fenêtre crée une zone d'air renouvelée près de l'ouverture, mais laisse l'air intérieur stagner dans le reste de la pièce. L'idéal est deux ouvertures sur des façades opposées ou perpendiculaires pour créer un courant traversant qui balaye l'ensemble du volume de la pièce.",
            effort: "Gratuit",
          },
          {
            label: "Envisager la technique du bake-out pour une rénovation complète",
            description:
              "Pour une rénovation complète, la technique du bake-out consiste à monter la température de la pièce à 25-30°C pendant 3 à 5 jours (chauffage en marche, fenêtres fermées), puis à ventiler intensivement pendant 24 à 48 heures. Cette technique provoque un dégazage accéléré et réduit significativement les concentrations résiduelles. Elle est plus facile à mettre en oeuvre en été.",
            effort: "Consommation d'énergie modérée",
          },
        ]}
        structural={[
          {
            label: "Respecter les durées minimales selon le type de travaux",
            description:
              "Peinture seule : ventilation intensive pendant 3 à 7 jours avant réoccupation normale. Pose de revêtement de sol collé : 7 à 14 jours. Rénovation complète (sol, murs, plafond) : 2 à 4 semaines minimum. Chambre d'enfant quelle que soit l'ampleur des travaux : doubler les durées ci-dessus. Ces durées supposent une ventilation intensive continue, pas simplement une fenêtre entrouverte.",
            effort: "Organisation",
          },
          {
            label: "Continuer à aérer manuellement après la réintégration",
            description:
              "Même après la période de dégazage principale, des émissions résiduelles persistent, en particulier pour le formaldéhyde. Pendant les 2 premiers mois suivant une rénovation complète, ouvrez les fenêtres 20 à 30 minutes matin et soir, en courant d'air, en complément de la VMC.",
            effort: "Habitude quotidienne",
          },
          {
            label: "Utiliser un capteur de COV pour suivre la qualité de l'air",
            description:
              "Un capteur de COV ou de qualité de l'air intérieur (50 à 150 €) placé dans la pièce rénovée permet de suivre l'évolution des concentrations au fil des jours. L'affichage en temps réel vous aide à décider du bon moment pour réintégrer et à vérifier que la ventilation est effective. Ces capteurs ne distinguent pas les substances individuelles, mais détectent le niveau global de pollution.",
            effort: "50 à 150 € pour un capteur",
          },
          {
            label: "Ne pas remettre les meubles et textiles immédiatement",
            description:
              "Les tapis, rideaux, coussins et matelas absorbent les COV présents dans l'air pendant la phase de dégazage, puis les restituent progressivement. Attendre la fin de la période de ventilation intensive avant de remeubleur la pièce évite cette accumulation secondaire dans les textiles.",
            effort: "Organisation du déménagement",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes après des travaux"
        errors={[
          {
            label: "Réintégrer la chambre d'un enfant dès la fin du chantier",
            explanation:
              "C'est l'erreur la plus fréquente et la plus préjudiciable. Les enfants passent 10 à 12 heures par jour dans leur chambre, souvent fenêtres fermées la nuit. S'installer dans une pièce fraîchement rénovée sans période de dégazage expose à des concentrations maximales pendant les heures de sommeil. Une chambre d'enfant doit être aérée au minimum 1 semaine pour des travaux légers, et 4 à 6 semaines pour une rénovation complète.",
          },
          {
            label: "Confondre 'peinture sèche' et 'peinture dégazée'",
            explanation:
              "Une peinture est sèche au toucher en quelques heures. Elle continue pourtant d'émettre des COV pendant plusieurs jours à plusieurs semaines. La sécheresse visuelle ou tactile ne signifie pas la fin du dégazage. Le critère pertinent n'est pas l'absence de traces au doigt, mais la réduction des émissions atmosphériques, qui prend beaucoup plus de temps.",
          },
          {
            label: "Aérer uniquement pendant le séchage, pas après",
            explanation:
              "Certains occupants aèrent pendant les travaux mais referment dès que l'artisan part, pensant que le dégazage est terminé. C'est inexact : les émissions se poursuivent pendant des jours après la fin de l'application. La ventilation intensive doit se maintenir plusieurs jours après la fin des travaux, pas seulement pendant.",
          },
          {
            label: "Ne pas protéger les artisans pendant l'application",
            explanation:
              "Les artisans sont exposés aux concentrations les plus élevées de COV : directement lors de l'application, à courte distance, sans dilution. Pour les peintures à solvant, colles et vernis, le port d'un demi-masque filtrant (FFP2 ou masque à cartouche organique) est recommandé pendant l'application. L'aération du chantier les protège aussi, et réduit les concentrations pour les occupants dès les premières heures.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'aération après travaux"
        items={[
          {
            question: "Combien de temps faut-il aérer après la pose d'un parquet collé ?",
            answer:
              "La colle de pose de parquet est l'une des sources d'émission les plus importantes d'un chantier. Les solvants contenus dans certaines colles s'évaporent principalement dans les 48 à 72 premières heures, mais des émissions résiduelles persistent jusqu'à 2 semaines. Aérez intensément (fenêtres ouvertes en grand) pendant au minimum 7 jours avant de réoccuper la pièce la nuit, et 14 jours pour une chambre d'enfant. Si la colle est sans solvant (à base d'eau), ces délais peuvent être réduits de moitié.",
          },
          {
            question: "Peut-on accélérer le dégazage avec la chaleur ?",
            answer:
              "Oui. La chaleur accélère la volatilisation des COV, ce qui peut raccourcir la durée de la phase de dégazage si elle est suivie d'une ventilation intensive. La technique du bake-out consiste à chauffer la pièce à 25-30°C pendant 3 à 5 jours fenêtres fermées, puis à ventiler intensivement 24 à 48 heures. Cette méthode est plus efficace que la simple ventilation à température ambiante. Attention : ne pas rester dans la pièce pendant la phase de chauffe, car les concentrations de COV sont alors maximales.",
          },
          {
            question: "Doit-on aérer même si les produits utilisés sont A+ ?",
            answer:
              "Oui. Le label A+ mesure les émissions à 28 jours dans des conditions standardisées. Dans les premières 72 heures après application, même un produit A+ peut émettre des concentrations 3 à 5 fois supérieures à la normale. L'aération intensive reste indispensable, quelle que soit la classe des produits. Le A+ réduit les émissions de fond sur le long terme, mais ne supprime pas le pic initial.",
          },
          {
            question: "Comment savoir si une pièce est suffisamment aérée pour y faire dormir un enfant ?",
            answer:
              "En l'absence de capteur de COV, utilisez vos sens : si aucune odeur de peinture, de colle ou de matériau neuf n'est perceptible après 30 minutes dans la pièce fermée, c'est un premier indicateur favorable. Le critère temporel reste le plus fiable : pour une chambre d'enfant, 1 semaine minimum pour des travaux de peinture seuls, 4 semaines pour une rénovation complète, avec ventilation intensive continue sur toute cette période.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Le label A+ lors des travaux",
            description:
              "Comprendre ce que le label A+ mesure et ce qu'il ne garantit pas, pour choisir les produits adaptés à chaque pièce et chaque usage.",
            href: "/renovation-saine/label-a-plus-travaux/",
          },
          {
            tag: "Rénovation saine",
            title: "VMC double flux : qualité d'air, performances et coûts",
            description:
              "Au-delà de l'aération manuelle post-travaux, une VMC double flux assure le renouvellement d'air permanent et filtre les particules entrantes. Pertinence selon le bâti, coûts et aides 2026.",
            href: "/renovation-saine/vmc-double-flux/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux",
            description:
              "Comment les matériaux de construction et de décoration émettent des COV dans le temps, et quels sont les matériaux qui dégazent le plus longtemps.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
        ]}
      />
    </>
  );
}

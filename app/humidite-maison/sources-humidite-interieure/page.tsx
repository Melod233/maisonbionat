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
  title: "Sources d'humidité dans la maison : d'où vient la vapeur d'eau ?",
  description:
    "Cuisine, douche, linge, respiration : identifier les principales sources d'humidité intérieure et comprendre leur contribution quotidienne pour agir efficacement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/sources-humidite-interieure/",
  },
  openGraph: {
    title: "Sources d'humidité dans la maison : d'où vient la vapeur d'eau ?",
    description:
      "Cuisine, douche, linge, respiration : identifier les principales sources d'humidité intérieure et comprendre leur contribution quotidienne pour agir efficacement.",
    url: "https://www.maisonbionat.fr/humidite-maison/sources-humidite-interieure/",
  },
};

export default function SourcesHumiditeInterieurePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Sources d'humidité dans la maison : d'où vient la vapeur d'eau ?", href: "https://www.maisonbionat.fr/humidite-maison/sources-humidite-interieure/" },
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
        title="D'où vient l'humidité dans votre maison ? Les sources quotidiennes de vapeur."
        quickAnswer="L'humidité intérieure est rarement due à une infiltration ou un défaut du bâti. Dans la grande majorité des logements, elle provient des activités des occupants : cuisine, douches, respiration, linge séché à l'intérieur. Une famille de quatre personnes produit plus de 12 litres de vapeur d'eau par jour. Identifier les sources les plus actives chez soi est la première étape pour agir sur le taux d'hygrométrie sans dépenses inutiles."
        stats={[
          { value: "12 L", label: "de vapeur produits par jour dans un foyer de 4 personnes" },
          { value: "1–2 L", label: "de vapeur libérés par une lessive séchée à l'intérieur" },
          { value: "40–60 %", label: "taux d'hygrométrie recommandé dans un logement (ADEME)" },
          { value: ">60 %", label: "d'humidité : conditions favorables au développement des moisissures" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Deux grandes catégories" },
          { id: "signes", label: "Identifier les sources actives" },
          { id: "causes", label: "Quantifier les apports" },
          { id: "actions", label: "Réduire les sources" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Deux grandes catégories de sources d'humidité."
        description="Avant d'agir, il est utile de distinguer les sources liées aux habitudes des occupants, sur lesquelles on peut agir facilement, et les sources liées au bâti, qui nécessitent un diagnostic plus approfondi et parfois des travaux."
        variants={[
          {
            indicator: "Sources les plus fréquentes",
            name: "Habitudes et activités quotidiennes",
            description:
              "Respiration, cuisine, douches, linge séché à l'intérieur, plantes d'intérieur : ces sources sont permanentes et cumulatives. Elles représentent la grande majorité de la vapeur d'eau dans un logement correctement entretenu. On peut les réduire par des gestes simples ou en améliorant la ventilation.",
          },
          {
            indicator: "Sources à ne pas négliger",
            name: "Sources liées au bâti",
            description:
              "Remontées capillaires depuis les fondations, infiltrations par la toiture ou les murs, condensation interstitielle dans les parois : ces sources sont indépendantes des habitudes des occupants. Elles se distinguent par leur localisation (bas de murs, plafond, coins spécifiques) et leur permanence, même en l'absence d'activités productrices de vapeur.",
          },
          {
            indicator: "Cas particulier",
            name: "Facteurs saisonniers",
            description:
              "En hiver, les logements sont moins aérés et le chauffage augmente la capacité de l'air à contenir de la vapeur avant saturation. En été, les épisodes de forte chaleur peuvent créer des phénomènes de condensation dans les sous-sols. Les variations saisonnières amplifivent les sources existantes sans en créer de nouvelles.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Identifier les sources les plus actives chez vous."
        subtitle="Certains signes permettent de repérer quelles activités ou zones du logement contribuent le plus à l'humidité intérieure, sans mesure spécialisée."
        signs={[
          {
            label: "Condensation surtout le matin dans les chambres",
            description:
              "La buée matinale sur les vitres de chambre est principalement due à la respiration nocturne des occupants. En moyenne, une personne expire environ 1 litre de vapeur par nuit. Dans une chambre fermée peu ventilée, cette vapeur se condense sur les surfaces les plus froides.",
            severity: "léger",
          },
          {
            label: "Humidité forte après la douche ou le bain",
            description:
              "Une douche chaude libère environ 2 à 3 litres de vapeur. Sans extraction efficace (VMC ou fenêtre ouverte), cette vapeur se répand dans la salle de bain et les pièces adjacentes. Les carreaux couverts de buée après chaque douche sont un indicateur direct.",
            severity: "modéré",
          },
          {
            label: "Hygrométrie qui monte lors du séchage du linge",
            description:
              "Un hygromètre dans la pièce où sèche le linge peut afficher une montée de 10 à 20 points lors du séchage d'une lessive. Une charge standard libère 1 à 2 litres de vapeur. Dans une pièce peu ventilée, cela suffit à dépasser 65 % d'humidité relative.",
            severity: "modéré",
          },
          {
            label: "Buée sur les vitres de cuisine pendant la cuisson",
            description:
              "La cuisson est l'une des sources les plus intenses de vapeur : les casseroles sans couvercle, les cuissons à la vapeur ou les mijotages libèrent environ 1 litre de vapeur par repas chaud. L'activation de la hotte pendant toute la durée de la cuisson est essentielle.",
            severity: "léger",
          },
          {
            label: "Humidité persistante en bas des murs ou sous les fenêtres",
            description:
              "Des taches humides stables en bas des murs, indépendantes des saisons et des activités, peuvent indiquer des remontées capillaires. Ce type de source ne répond pas à une amélioration des habitudes : il nécessite un diagnostic du bâti.",
            severity: "critique",
          },
          {
            label: "Taches d'humidité apparaissant après la pluie",
            description:
              "Des traces qui apparaissent ou s'aggravent après des épisodes pluvieux (en haut des murs, au plafond, autour des fenêtres) sont caractéristiques d'une infiltration par l'enveloppe du bâtiment. Il s'agit d'une source liée au bâti, à traiter séparément.",
            severity: "critique",
          },
        ]}
        footerNote="Un hygromètre simple (10 à 20 euros) est l'outil le plus utile pour quantifier l'impact de chaque activité sur l'humidité intérieure. Mesurer avant et après une douche, ou pendant le séchage du linge, donne une idée précise des sources les plus actives."
      />

      <IssueCauses
        id="causes"
        title="Quantifier les apports de vapeur au quotidien."
        subtitle="Chaque activité contribue différemment à l'humidité intérieure. Voici les ordres de grandeur généralement admis, utiles pour prioriser les actions."
        causes={[
          {
            number: "01",
            cause: "Séchage du linge à l'intérieur",
            explanation:
              "C'est souvent la source la plus sous-estimée. Une charge de lessive standard libère entre 1 et 2 litres de vapeur en séchant. Séchée dans une pièce fermée sans ventilation, cette vapeur s'accumule rapidement et peut maintenir l'hygrométrie au-dessus de 65 % pendant plusieurs heures.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Douches et bains",
            explanation:
              "Une douche chaude de 5 à 10 minutes libère entre 2 et 3 litres de vapeur. Dans un foyer de quatre personnes avec deux douches par jour, cela représente 4 à 6 litres quotidiens, soit une contribution majeure à l'hygrométrie si la salle de bain n'est pas bien ventilée.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Respiration et transpiration des occupants",
            explanation:
              "Chaque personne expire environ 40 grammes de vapeur par heure en état de repos, davantage lors d'activités physiques. La nuit, dans une chambre fermée, c'est près d'un litre par personne qui s'ajoute à l'air ambiant. Dans un foyer de quatre personnes, la contribution quotidienne dépasse 3 litres.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Cuisson et préparation des repas",
            explanation:
              "Bouillir de l'eau, cuisiner à la vapeur, mijotez sans couvercle : chaque repas chaud libère environ 1 litre de vapeur. L'activation systématique de la hotte aspirante pendant la cuisson est le geste le plus efficace pour limiter cette source.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Plantes d'intérieur en grand nombre",
            explanation:
              "Les plantes libèrent de la vapeur par évapotranspiration. Une plante seule contribue peu, mais une concentration importante de plantes dans une pièce peu ventilée peut élever l'hygrométrie de plusieurs points. L'effet est plus marqué après l'arrosage.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire les sources d'humidité les plus importantes."
        immediate={[
          {
            label: "Séchez le linge à l'extérieur ou dans une pièce ventilée",
            description:
              "C'est le geste avec le plus grand impact. Si le séchage extérieur n'est pas possible, choisissez une pièce avec une fenêtre entrouverte ou une bouche VMC active. Évitez impérativement la chambre et les pièces de vie fermées.",
            effort: "Gratuit",
          },
          {
            label: "Activez la hotte pendant toute la durée de la cuisson",
            description:
              "La hotte aspirante doit fonctionner dès le début de la cuisson, pas seulement quand la vapeur est visible. Laissez-la tourner 10 minutes après la fin de la cuisson pour extraire les derniers résidus de vapeur et de graisses.",
            effort: "Gratuit",
          },
          {
            label: "Aérez la salle de bain immédiatement après la douche",
            description:
              "Ouvrez la fenêtre ou vérifiez que la bouche VMC extrait bien l'air. Ne fermez pas la porte de la salle de bain dans l'heure qui suit une douche pour éviter que la vapeur se répande dans les couloirs et chambres.",
            effort: "Gratuit",
          },
          {
            label: "Couvrez les casseroles pendant la cuisson",
            description:
              "Un couvercle réduit l'évaporation et accélère la cuisson. Geste simple qui diminue significativement les apports de vapeur en cuisine, en plus de réduire la consommation d'énergie.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Installer ou réviser la VMC pour une extraction efficace",
            description:
              "Une VMC hygroréglable adapte son débit aux apports de vapeur réels. C'est la solution structurelle qui compense toutes les sources habituelles sans nécessiter de changer chaque comportement individuellement.",
            effort: "800–1 500 € pose comprise",
          },
          {
            label: "Acquérir un sèche-linge à condensation ou avec évacuation externe",
            description:
              "Un sèche-linge avec évacuation externe élimine complètement le problème du séchage intérieur. Le modèle à condensation récupère l'eau dans un bac sans la relâcher dans l'air, mais consomme davantage d'énergie.",
            effort: "300–700 €",
          },
          {
            label: "Faire diagnostiquer les sources liées au bâti",
            description:
              "Si des taches d'humidité persistent en bas des murs ou après la pluie, malgré une bonne ventilation et des habitudes adaptées, un diagnostic de l'enveloppe du bâtiment est nécessaire. Remontées capillaires et infiltrations ne se traitent pas par les mêmes moyens.",
            effort: "Diagnostic professionnel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui masquent les sources d'humidité."
        errors={[
          {
            label: "Croire que l'humidité vient toujours de l'extérieur",
            explanation:
              "La grande majorité de l'humidité intérieure est produite par les occupants eux-mêmes. Dans un logement correctement clos, les infiltrations représentent une part minoritaire. Chercher une fuite ou un défaut de toiture avant d'examiner les habitudes est souvent une piste moins productive.",
          },
          {
            label: "Sous-estimer le séchage du linge",
            explanation:
              "1 à 2 litres de vapeur par lessive est une quantité considérable. Dans un appartement de 50 m², sécher deux lessives par semaine dans une pièce fermée équivaut à maintenir une source d'humidité constante. C'est souvent la source que les occupants identifient en dernier.",
          },
          {
            label: "Utiliser un déshumidificateur sans identifier la source",
            explanation:
              "Un déshumidificateur traite l'effet sans s'attaquer à la cause. Si la source d'humidité reste active (linge, douches, cuisson mal ventilée), l'appareil devra tourner en permanence, générant un coût d'usage continu qui aurait pu être évité par des gestes simples.",
          },
          {
            label: "Négliger les plantes en cas d'humidité chronique",
            explanation:
              "Les plantes ne sont pas une source majeure d'humidité, mais dans un logement déjà en limite d'hygrométrie, leur contribution peut faire basculer le bilan. Regrouper les plantes dans une pièce bien ventilée est préférable à les répartir dans tout le logement.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les sources d'humidité"
        items={[
          {
            question: "Comment savoir si l'humidité vient des occupants ou du bâti ?",
            answer:
              "L'humidité liée aux occupants fluctue : elle monte après une douche, pendant le séchage du linge, et baisse après aération. Elle est répartie dans tout le logement. L'humidité liée au bâti est localisée (bas de murs, autour d'une fenêtre, dans un coin précis), stable ou qui s'aggrave après la pluie, et ne répond pas à une amélioration de la ventilation. Un hygromètre posé dans différentes pièces pendant quelques jours aide à orienter le diagnostic.",
          },
          {
            question: "Les plantes d'intérieur contribuent-elles vraiment à l'humidité ?",
            answer:
              "Oui, mais de façon modeste pour une ou deux plantes. L'évapotranspiration d'une plante de taille moyenne représente quelques centilitres par jour. L'effet devient significatif avec une concentration importante de plantes (dix plantes ou plus) dans une pièce peu ventilée. Dans ce cas, regrouper les plantes dans une pièce avec une bonne ventilation est une mesure simple.",
          },
          {
            question: "Combien de vapeur produit-on en dormant ?",
            answer:
              "En moyenne, une personne expire environ 40 grammes de vapeur par heure au repos. Sur une nuit de huit heures, cela représente environ 300 grammes par personne, soit près d'un litre pour deux personnes dans la même chambre. Dans une chambre fermée et peu ventilée, cette vapeur se condense sur les surfaces froides (vitres, murs extérieurs) dès que la température baisse.",
          },
          {
            question: "La cuisson produit-elle vraiment autant d'humidité que la douche ?",
            answer:
              "Cela dépend beaucoup des habitudes. Une douche chaude de 7 à 8 minutes libère environ 2 à 3 litres de vapeur de façon concentrée. La cuisson libère moins d'un coup mais sur une durée plus longue et de façon variable selon le type de plat. Avec une hotte aspirante efficace, la cuisson peut être quasi-neutre. Sans hotte, elle contribue autant voire davantage qu'une douche.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Réduire l'humidité au quotidien",
            description:
              "Les gestes concrets pour maintenir un taux d'hygrométrie sain une fois les sources identifiées.",
            href: "/humidite-maison/reduire-humidite-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Condensation dans le logement",
            description:
              "Comprendre comment la vapeur produite se transforme en condensation sur les surfaces froides.",
            href: "/humidite-maison/condensation-maison/",
          },
          {
            tag: "Produits et habitudes",
            title: "Sécher son linge à l'intérieur",
            description:
              "L'impact du séchage intérieur sur l'humidité et les alternatives pour limiter ce problème.",
            href: "/produits-et-habitudes/secher-linge-interieur/",
          },
        ]}
      />
    </>
  );
}

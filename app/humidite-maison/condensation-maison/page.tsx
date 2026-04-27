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
  title: "Condensation dans le logement : causes et solutions concrètes",
  description:
    "Gouttelettes sur les vitres, murs froids humides : comprendre pourquoi la condensation se forme dans votre logement et comment la réduire durablement sans travaux lourds.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/condensation-maison/",
  },
  openGraph: {
    title: "Condensation dans le logement : causes et solutions concrètes",
    description:
      "Gouttelettes sur les vitres, murs froids humides : comprendre pourquoi la condensation se forme dans votre logement et comment la réduire durablement sans travaux lourds.",
    url: "https://www.maisonbionat.fr/humidite-maison/condensation-maison/",
  },
};

export default function CondensationMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Condensation dans le logement : causes et solutions concrètes", href: "https://www.maisonbionat.fr/humidite-maison/condensation-maison/" },
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
        title="La condensation dans le logement : pourquoi elle apparaît et comment y remédier."
        quickAnswer="La condensation se forme quand de la vapeur d'eau en suspension dans l'air entre en contact avec une surface plus froide que son point de rosée. Elle n'est pas un défaut du bâti en soi : c'est presque toujours le signe d'une ventilation insuffisante combinée à une production élevée de vapeur. Dans la majorité des cas, améliorer l'aération suffit à réduire significativement le phénomène."
        stats={[
          { value: "40–60 %", label: "taux d'hygrométrie recommandé dans un logement (ADEME)" },
          { value: ">5 %", label: "des logements français dépassent 63 % d'humidité relative (OQAI)" },
          { value: "12 L", label: "de vapeur d'eau produits par jour dans un foyer de 4 personnes" },
          { value: "100 %", label: "d'humidité relative : seuil du point de rosée, condensation inévitable" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de condensation" },
          { id: "signes", label: "Signes et gravité" },
          { id: "causes", label: "Causes" },
          { id: "actions", label: "Solutions" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Toutes les condensations n'ont pas la même origine."
        description="La condensation peut se manifester de plusieurs façons selon la saison, la pièce et le type de bâti. Identifier à quel cas vous faites face permet d'agir avec précision plutôt que de traiter un symptôme."
        variants={[
          {
            indicator: "Cas le plus courant",
            name: "Condensation sur les vitres en hiver",
            description:
              "Buée ou gouttelettes sur la face intérieure des fenêtres, surtout le matin. Signe que l'air intérieur est trop chargé en vapeur et que les vitrages, plus froids que le reste de la pièce, atteignent leur point de rosée. Résolu dans la grande majorité des cas par une meilleure aération.",
          },
          {
            indicator: "Cas fréquent",
            name: "Condensation sur les angles et murs extérieurs froids",
            description:
              "Zones humides, parfois noirâtres, dans les angles des pièces donnant sur l'extérieur ou derrière des meubles collés contre un mur froid. Indicateur d'un pont thermique ou d'une isolation insuffisante en ces points. La ventilation atténue le phénomène mais un traitement thermique est parfois nécessaire.",
          },
          {
            indicator: "Cas à surveiller",
            name: "Condensation dans la masse (interstitielle)",
            description:
              "La vapeur pénètre dans l'épaisseur de la paroi et se condense à l'intérieur du mur, invisiblement. Phénomène fréquent dans les constructions ancienne mal isolées ou après des travaux d'isolation intérieure mal conçus. Diagnostic professionnel souvent nécessaire.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître et évaluer la condensation dans votre logement."
        subtitle="Certains signes sont anodins et faciles à corriger. D'autres indiquent un problème plus profond à ne pas laisser s'installer."
        signs={[
          {
            label: "Buée sur les vitres au réveil",
            description:
              "Signe classique d'une nuit passée dans une pièce peu ventilée. La respiration des occupants charge l'air en vapeur qui se condense sur les surfaces les plus froides. Aérer 10 minutes après le réveil suffit dans la plupart des cas.",
            severity: "léger",
          },
          {
            label: "Gouttelettes qui coulent sur les fenêtres",
            description:
              "Condensation abondante qui ruisselle sur les encadrements et les rebords de fenêtres, parfois jusqu'au sol. Taux d'humidité intérieure probablement supérieur à 65 %. Risque de dégradation des boiseries et des joints à terme.",
            severity: "modéré",
          },
          {
            label: "Taches sombres dans les angles et coins de murs",
            description:
              "Les zones angulaires extérieures sont les premières à atteindre le point de rosée. Des traces d'humidité persistantes à ces endroits indiquent une condensation chronique, précurseur direct des moisissures.",
            severity: "modéré",
          },
          {
            label: "Murs froids au toucher côté extérieur",
            description:
              "Une surface de mur froide signifie une isolation thermique insuffisante ou absente. La vapeur intérieure se condense préférentiellement sur ces zones. L'amélioration de l'isolation réduit ce risque durablement.",
            severity: "modéré",
          },
          {
            label: "Peinture qui cloque ou papier peint qui se décolle",
            description:
              "La vapeur d'eau qui pénètre derrière les revêtements les dégrade progressivement. Ce phénomène indique une condensation répétée sur cette paroi depuis un certain temps, parfois accompagnée de moisissures cachées.",
            severity: "critique",
          },
          {
            label: "Apparition de moisissures sur les zones condensation",
            description:
              "La condensation chronique crée les conditions idéales pour les moisissures : humidité supérieure à 60 %, surface organique (papier peint, bois, joint). Si des taches noires ou vertes apparaissent, le problème dépasse la simple condensation.",
            severity: "critique",
          },
        ]}
        footerNote="La condensation ne disparaît pas seule. Sans action sur la ventilation ou l'isolation, elle s'aggrave progressivement d'année en année, avec des dégâts matériels et sanitaires croissants."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi la condensation se forme dans votre logement."
        subtitle="Le phénomène est toujours le même : trop de vapeur, pas assez d'évacuation, des surfaces froides. Ce qui varie, c'est l'origine de chaque facteur."
        causes={[
          {
            number: "01",
            cause: "Ventilation insuffisante ou mal entretenue",
            explanation:
              "C'est la cause principale dans la grande majorité des cas. Une VMC obstruée, des bouches d'aération bouchées ou une ouverture de fenêtres insuffisante empêchent l'évacuation de la vapeur produite par les occupants. La vapeur s'accumule et cherche les surfaces les plus froides pour se condenser.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Production intense de vapeur d'eau",
            explanation:
              "Cuisson sans couvercle ni hotte, douches longues, linge séché à l'intérieur, nombreuses plantes d'intérieur : chaque activité contribue. Un foyer de 4 personnes peut produire entre 7 et 12 litres de vapeur par jour en conditions normales, davantage les jours de lessive.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Ponts thermiques et surfaces mal isolées",
            explanation:
              "Les ponts thermiques sont des zones où la chaleur s'échappe plus facilement : jonctions mur-plancher, tableaux de fenêtres, angles extérieurs. Ces surfaces plus froides que le reste de la pièce atteignent leur point de rosée en premier et concentrent la condensation.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Vitrages simples ou insuffisants",
            explanation:
              "Le simple vitrage offre une résistance thermique très faible. La face intérieure atteint des températures proches de l'extérieur, bien en dessous du point de rosée de l'air intérieur. Le double vitrage réduit significativement ce phénomène. Le triple vitrage l'élimine presque.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Logement peu chauffé ou chauffage intermittent",
            explanation:
              "Un logement maintenu à basse température a des surfaces froides en permanence. Un chauffage trop intermittent crée des cycles de refroidissement qui favorisent la condensation dès que l'air se refroidit mais conserve son humidité. Un chauffage modéré mais continu est préférable.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire la condensation dans le bon ordre."
        immediateLabel="Cette semaine"
        structuralLabel="Pour durer"
        immediate={[
          {
            label: "Aérez chaque pièce 10 minutes matin et soir",
            description:
              "Ouvrez les fenêtres en grand pendant 10 minutes, deux fois par jour. L'air intérieur chargé de vapeur est remplacé par un air extérieur plus sec. En hiver, l'air froid extérieur est paradoxalement moins humide que l'air intérieur chaud et chargé en vapeur.",
            effort: "Gratuit",
          },
          {
            label: "Vérifiez et débouchez les bouches VMC",
            description:
              "Passez un mouchoir devant chaque bouche d'extraction : il doit être aspiré légèrement. Si non, les bouches sont peut-être obstruées par la poussière. Nettoyez-les avec un aspirateur. Un entretien deux fois par an est recommandé.",
            effort: "Gratuit",
          },
          {
            label: "Réduisez les sources de vapeur",
            description:
              "Couvrez les casseroles pendant la cuisson, activez la hotte, ne faites pas sécher le linge dans les pièces à vivre. Ces gestes simples réduisent de façon significative la quantité de vapeur à évacuer chaque jour.",
            effort: "Gratuit",
          },
          {
            label: "Éloignez les meubles des murs extérieurs",
            description:
              "Un meuble plaqué contre un mur froid empêche l'air de circuler derrière, créant une zone stagnante et froide où la condensation s'accumule. Laissez 5 à 10 cm d'espace entre les meubles volumineux et les murs extérieurs.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Installer ou remplacer la VMC",
            description:
              "Une VMC hygroréglable adapte automatiquement son débit au taux d'humidité intérieur. Elle est beaucoup plus efficace qu'une VMC autoréglable classique pour gérer les pics de vapeur. C'est l'investissement le plus rentable contre la condensation chronique.",
            effort: "800–2 500 € pose comprise",
          },
          {
            label: "Remplacer les vitrages simples par du double vitrage",
            description:
              "Le double vitrage augmente la température de la face intérieure du vitrage de plusieurs degrés, repoussant le point de rosée bien au-delà des conditions habituelles. La condensation sur les fenêtres disparaît dans la grande majorité des cas.",
            effort: "200–600 € par fenêtre",
          },
          {
            label: "Traiter les ponts thermiques lors d'une rénovation",
            description:
              "L'isolation thermique par l'extérieur (ITE) supprime les ponts thermiques de façon globale et efficace. Une isolation intérieure ciblée sur les angles froids est possible mais doit être conçue avec soin pour éviter de déplacer le problème.",
            effort: "Lors d'une rénovation",
          },
          {
            label: "Poser un hygromètre dans les pièces sensibles",
            description:
              "Un hygromètre simple (10 à 20 €) permet de mesurer le taux d'humidité réel et de savoir si les actions entreprises fonctionnent. Cible : maintenir entre 40 et 60 % en permanence.",
            effort: "10–20 €",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui entretiennent la condensation."
        errors={[
          {
            label: "Chauffer fort sans aérer",
            explanation:
              "Augmenter la température réduit l'humidité relative mais ne fait pas disparaître la vapeur d'eau du logement. Dès que la température redescend (la nuit, en dehors des heures de chauffage), la vapeur se condense sur les surfaces froides. Chauffer et aérer vont de pair.",
          },
          {
            label: "Boucher les grilles et bouches de ventilation",
            explanation:
              "Obstruer les entrées d'air ou les bouches d'extraction pour éviter les courants d'air ou le froid prive le logement de son seul moyen d'évacuer la vapeur produite par les occupants. C'est l'une des causes les plus fréquentes de condensation chronique.",
          },
          {
            label: "Croire que l'humidité vient toujours de l'extérieur",
            explanation:
              "La condensation est presque toujours d'origine intérieure. La vapeur produite par les occupants (respiration, cuisine, douche, linge) dépasse largement ce qui peut s'infiltrer depuis l'extérieur dans un logement correctement clos.",
          },
          {
            label: "Utiliser un déshumidificateur sans traiter la ventilation",
            explanation:
              "Un déshumidificateur électrique traite l'air mais consomme de l'énergie et ne résout pas le problème de fond. Sans amélioration de la ventilation, il doit fonctionner en continu pour maintenir un taux acceptable, sans jamais régler la cause.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la condensation"
        items={[
          {
            question: "La condensation sur les fenêtres est-elle grave ?",
            answer:
              "En soi, de la buée légère le matin n'est pas grave si elle disparaît après aération. En revanche, une condensation abondante et quotidienne qui ruisselle sur les encadrements indique un taux d'humidité intérieure trop élevé. Sur le long terme, cela dégrade les boiseries, les joints et favorise les moisissures. Il faut agir sur la ventilation.",
          },
          {
            question: "Comment savoir si mon problème est de la condensation ou une infiltration ?",
            answer:
              "La condensation apparaît sur les surfaces froides (vitres, angles) et survient après des activités productrices de vapeur ou la nuit. Elle fluctue selon la météo et les habitudes. Une infiltration crée des taches localisées et stables, souvent après la pluie, situées en haut des murs ou au plafond, avec parfois une auréole brune. Le test simple : collez un carré de papier aluminium sur la zone suspecte avec du ruban adhésif et attendez 24 heures. Si la condensation est côté intérieur, c'est de la condensation de surface. Si elle est côté mur, c'est une humidité venant du mur.",
          },
          {
            question: "L'air extérieur en hiver n'est-il pas trop humide pour aérer ?",
            answer:
              "Non. L'air froid extérieur contient moins de vapeur d'eau en valeur absolue que l'air chaud intérieur, même si son humidité relative est élevée. Une fois réchauffé par le logement, cet air a une capacité bien supérieure à absorber la vapeur. Aérer en hiver, même quelques minutes, renouvelle efficacement l'air intérieur chargé en vapeur.",
          },
          {
            question: "Une VMC hygroréglable est-elle vraiment plus efficace ?",
            answer:
              "Oui, de façon significative. Une VMC autoréglable fonctionne à débit constant, qu'il y ait beaucoup ou peu de vapeur dans l'air. Une VMC hygroréglable augmente son débit automatiquement quand l'humidité monte (après une douche, en cuisine) et le réduit quand l'air est sec, limitant les pertes de chaleur inutiles. Elle est particulièrement adaptée aux logements avec des pics de vapeur importants.",
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
              "La condensation chronique est le principal précurseur des moisissures. Identifier les types et agir avec la bonne méthode.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Ventilation et humidité",
            description:
              "La ventilation est la réponse structurelle à la condensation. Comprendre le rôle de la VMC et choisir le bon système.",
            href: "/humidite-maison/ventilation-humidite/",
          },
          {
            tag: "Humidité maison",
            title: "Salpêtre sur les murs : reconnaître, traiter et prévenir",
            description:
              "Quand la condensation chronique laisse apparaître des dépôts blanchâtres : reconnaître le salpêtre et identifier la cause d'humidité.",
            href: "/humidite-maison/salpetre-murs/",
          },
        ]}
      />
    </>
  );
}

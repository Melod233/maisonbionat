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
  title: "Taux d'humidité idéal dans la maison : valeurs cibles et hygromètre",
  description:
    "Plage 40-60 % recommandée par l'ADEME, valeurs pièce par pièce, saisonnalité, choix d'hygromètre et corrections concrètes en cas de taux trop bas ou trop élevé.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/taux-humidite-ideal/",
  },
  openGraph: {
    title: "Taux d'humidité idéal dans la maison : valeurs cibles et hygromètre",
    description:
      "Plage 40-60 % recommandée par l'ADEME, valeurs pièce par pièce, saisonnalité, choix d'hygromètre et corrections concrètes en cas de taux trop bas ou trop élevé.",
    url: "https://www.maisonbionat.fr/humidite-maison/taux-humidite-ideal/",
  },
};

const faqItems = [
  {
    question: "Quel taux d'humidité viser dans une maison ?",
    answer:
      "L'ADEME recommande une plage de 40 à 60 % d'humidité relative dans les pièces de vie. En dessous de 30 %, l'air devient trop sec et favorise les irritations respiratoires et la sécheresse cutanée. Au-dessus de 60 %, les acariens et les moisissures se développent. En hiver, viser plutôt 40 à 50 % limite la condensation sur les parois froides ; en été, 50 à 60 % reste confortable.",
  },
  {
    question: "Comment mesurer le taux d'humidité chez soi ?",
    answer:
      "Un hygromètre numérique grand public (10 à 25 €) suffit dans la majorité des cas. Placez-le à hauteur de respiration, loin des sources d'humidité directes (douche, plantes arrosées, fenêtre ouverte) et d'une bouche de chauffage. Pour un suivi sérieux, deux ou trois appareils répartis dans les pièces principales (séjour, chambre, salle de bain) donnent une vision plus fidèle qu'un seul point de mesure.",
  },
  {
    question: "Que faire si le taux dépasse durablement 60 % ?",
    answer:
      "Vérifiez d'abord la ventilation : VMC fonctionnelle, bouches d'extraction propres, hotte de cuisine raccordée à l'extérieur, aération de 10 minutes matin et soir. Identifiez les sources internes (séchage du linge en intérieur, douches sans extraction, cuisson sans hotte). Si le taux reste élevé sans cause évidente, un diagnostic humidité s'impose : il s'agit souvent d'un problème structurel (remontées capillaires, infiltrations, condensation sur parois mal isolées).",
  },
  {
    question: "Que faire si l'air est trop sec en hiver ?",
    answer:
      "Un taux inférieur à 30-35 % en hiver vient presque toujours d'un chauffage trop élevé combiné à une aération brève. Baissez la température d'un degré ou deux, surtout dans les chambres (18-19 °C suffisent), réduisez la durée des aérations sans les supprimer, et placez un récipient d'eau sur un radiateur si nécessaire. Un humidificateur n'est utile qu'en dernier recours, et doit être nettoyé toutes les semaines pour éviter la prolifération bactérienne.",
  },
];

export default function TauxHumiditeIdealPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    {
      name: "Taux d'humidité idéal dans la maison : valeurs cibles et hygromètre",
      href: "https://www.maisonbionat.fr/humidite-maison/taux-humidite-ideal/",
    },
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
        tag="Repère pratique"
        title="Taux d'humidité idéal dans la maison : valeurs cibles, mesure et corrections"
        quickAnswer="L'humidité relative recommandée dans un logement se situe entre 40 % et 60 %, plage validée par l'ADEME et l'OMS pour le confort, la santé respiratoire et la durabilité du bâti. En dessous de 30 %, l'air sec irrite les muqueuses, favorise les infections respiratoires et la sécheresse cutanée. Au-dessus de 60 %, les acariens et les moisissures se développent activement. La pièce, la saison et l'occupation modifient ce repère général : une chambre vise plutôt 40-50 % en hiver, une salle de bain peut passer à 60-70 % ponctuellement après une douche mais doit redescendre vite. Un hygromètre numérique à 10-25 € permet de piloter cette valeur au quotidien."
        stats={[
          {
            value: "40-60 %",
            label: "plage d'humidité relative recommandée par l'ADEME dans les pièces de vie",
          },
          {
            value: "× 3",
            label: "risque de maladie respiratoire chez un enfant en logement durablement humide",
          },
          {
            value: "> 60 %",
            label: "seuil au-delà duquel acariens et moisissures se développent activement",
          },
          {
            value: "< 30 %",
            label: "seuil bas associé aux irritations respiratoires et à la transmission virale",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre l'humidité relative" },
          { id: "signes", label: "Reconnaître un déséquilibre" },
          { id: "causes", label: "Pourquoi le taux dérive" },
          { id: "actions", label: "Mesurer et corriger" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est l'humidité relative et pourquoi sa plage idéale est étroite."
        description="L'humidité relative (HR), exprimée en pourcentage, mesure la quantité de vapeur d'eau présente dans l'air par rapport à la quantité maximale qu'il pourrait contenir à une température donnée. À 20 °C, un air à 50 % HR contient environ 8,7 g d'eau par kilogramme d'air. C'est cette grandeur que mesure un hygromètre. La plage 40-60 % n'est pas un confort arbitraire : elle est l'intersection des plages où la santé respiratoire, la durabilité des matériaux, la limitation des allergènes biologiques et le confort thermique sont tous acceptables. Sortir de cette plage, dans un sens ou dans l'autre, dégrade au moins l'un de ces aspects."
        variants={[
          {
            indicator: "40-60 %",
            name: "Plage idéale (ADEME / OMS)",
            description:
              "C'est la cible recommandée pour les pièces de vie occupées plusieurs heures par jour : séjour, chambre, bureau. Dans cette plage, le confort respiratoire est bon, les acariens se reproduisent peu, les moisissures ne se développent pas et les muqueuses ne se dessèchent pas. C'est aussi la plage où les meubles en bois et les parquets restent stables.",
          },
          {
            indicator: "30-40 % (hiver)",
            name: "Limite basse acceptable",
            description:
              "En hiver, dans un logement bien chauffé et aéré, le taux peut descendre vers 30-40 %. C'est encore acceptable mais des personnes sensibles (asthme, peau sèche, lentilles) peuvent ressentir une gêne. Sous 30 %, les muqueuses respiratoires se dessèchent, ce qui réduit leur fonction de barrière et favorise la transmission des virus respiratoires.",
          },
          {
            indicator: "60-70 % (ponctuel)",
            name: "Tolérance dans pièces humides",
            description:
              "Cuisine pendant une cuisson, salle de bain après une douche, buanderie pendant un séchage : ces pics sont normaux à condition de redescendre rapidement (1 à 2 heures) grâce à l'extraction et à l'aération. Au-delà de 70 % de manière prolongée, les surfaces froides condensent et les conditions deviennent favorables aux moisissures, même sans dégât d'eau visible.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître que le taux est sorti de la plage saine."
        subtitle="Avant même de mesurer, plusieurs signes physiques et matériels indiquent un déséquilibre. Ils orientent la lecture des valeurs de l'hygromètre."
        signs={[
          {
            label: "Buée persistante sur les vitres le matin (hiver)",
            description:
              "De la condensation qui ne disparaît pas en quelques minutes au lever signale un excès d'humidité combiné à des parois froides. Dans une chambre, c'est typiquement le signe d'une HR au-dessus de 60 % la nuit, à corriger en priorité par la ventilation.",
            severity: "modéré",
          },
          {
            label: "Odeur de renfermé ou de moisi dans une pièce",
            description:
              "Une odeur persistante, même sans tache visible, indique un développement microbien lié à un taux d'humidité durablement élevé ou à un point froid mal ventilé. Fréquent dans les chambres adultes après plusieurs nuits, dans les placards extérieurs et dans les sous-sols semi-enterrés.",
            severity: "critique",
          },
          {
            label: "Lèvres gercées, gorge sèche au réveil, peau qui tire",
            description:
              "À l'inverse, ces signes en période de chauffe traduisent un air trop sec, souvent sous 30 % HR. La cause est presque toujours un chauffage poussé combiné à une aération efficace : l'air froid extérieur, une fois réchauffé, perd énormément d'humidité relative.",
            severity: "léger",
          },
          {
            label: "Petites taches noires aux angles ou derrière les meubles",
            description:
              "Les premières moisissures apparaissent dans les zones les moins ventilées : derrière une armoire collée à un mur extérieur, dans un angle de plafond, le long d'un encadrement de fenêtre. Elles signalent un point froid combiné à une HR locale supérieure à 70 %.",
            severity: "critique",
          },
          {
            label: "Bois qui travaille : portes qui coincent, parquets qui craquent",
            description:
              "Un parquet ou un meuble en bois massif réagit à une variation forte d'humidité. Bois qui gonfle, portes qui frottent en été : excès d'humidité. Joints qui s'écartent, bois qui craque en hiver : air trop sec. Ce sont des indicateurs gratuits qui complètent l'hygromètre.",
            severity: "léger",
          },
          {
            label: "Allergies, asthme ou rhinites qui s'aggravent à la maison",
            description:
              "Une recrudescence de symptômes respiratoires à domicile, notamment au réveil, est compatible avec une prolifération d'acariens (HR durablement supérieure à 60 %) ou de spores de moisissures. À mesurer et à corriger en priorité dans les chambres.",
            severity: "modéré",
          },
        ]}
        footerNote="Aucun de ces signes ne dispense d'une mesure. Un hygromètre placé pendant 24 à 48 heures dans une pièce donne une lecture nettement plus fiable que la seule perception."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi le taux d'humidité dérive dans un logement."
        subtitle="L'humidité relative résulte d'un équilibre entre apports d'eau, ventilation et température. Une dérive vient toujours d'un déséquilibre identifiable."
        causes={[
          {
            number: "01",
            cause: "Activités quotidiennes qui produisent beaucoup de vapeur",
            explanation:
              "Une famille de quatre personnes émet environ 10 à 15 litres d'eau par jour dans le logement : respiration, douches, cuissons, séchage du linge en intérieur, plantes vertes nombreuses. Sans extraction ni aération, cette eau reste dans l'air et se dépose sur les parois froides.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Ventilation absente, sous-dimensionnée ou défaillante",
            explanation:
              "Une VMC bouchée, une hotte non raccordée à l'extérieur, des entrées d'air masquées par de la peinture ou du papier peint, une grille d'aération obstruée : autant de défauts qui empêchent l'évacuation de la vapeur. C'est de loin la première cause d'excès d'humidité dans les logements rénovés.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Chauffage hivernal trop poussé sans humidification",
            explanation:
              "Réchauffer un air froid extérieur fait chuter son HR. Un air à 0 °C et 80 % HR amené à 22 °C tombe à environ 25 % HR. Plus on chauffe, plus l'air devient sec. C'est la cause quasi systématique des sensations d'air trop sec en hiver dans les logements bien aérés.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Problèmes structurels du bâti",
            explanation:
              "Remontées capillaires, infiltrations par toiture ou façade, défaut d'étanchéité sur menuiseries, ponts thermiques marqués : ces causes structurelles produisent une humidité durable que la ventilation seule ne corrige pas. Elles relèvent d'un diagnostic humidité spécifique.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Géographie et saison",
            explanation:
              "Un logement en bord de mer ou en zone humide subit une HR extérieure élevée plusieurs mois par an. À l'inverse, un logement en altitude ou très bien isolé en hiver tend vers le bas. Ces contextes modulent la difficulté à rester dans la plage 40-60 % et orientent les solutions.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Mesurer son hygrométrie et la maintenir entre 40 et 60 %."
        immediate={[
          {
            label: "Acquérir un ou plusieurs hygromètres numériques",
            description:
              "Un modèle à 10-25 € donne une lecture suffisamment précise (± 3 à 5 % HR) pour piloter une maison. Idéal : un appareil dans le séjour, un dans la chambre principale, un dans la salle de bain. Vérifier sur 24 à 48 heures avant de tirer des conclusions.",
            effort: "Coût modéré, installation immédiate",
          },
          {
            label: "Aérer 10 minutes matin et soir, fenêtres en opposition",
            description:
              "Le geste le plus efficace pour réguler l'humidité, dans les deux sens. En hiver, l'aération brève évacue la vapeur sans refroidir le bâti. En été, elle se fait plutôt tôt le matin. Systématiquement après une douche, une cuisson ou un séchage de linge.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Vérifier et entretenir la VMC et les bouches",
            description:
              "Bouches d'extraction nettoyées tous les 6 mois, entrées d'air dégagées, hotte de cuisine raccordée à l'extérieur : ces vérifications corrigent l'essentiel des excès d'humidité dans les logements récents. Un débit anormalement faible justifie une intervention.",
            effort: "30 minutes par semestre",
          },
          {
            label: "Limiter le séchage du linge en intérieur",
            description:
              "Un tambour de linge mouillé libère 2 à 3 litres d'eau dans l'air en quelques heures. Quand c'est inévitable, le faire dans une pièce fermée avec extraction (salle de bain) ou fenêtre ouverte, jamais dans une chambre fermée la nuit.",
            effort: "Organisation",
          },
        ]}
        structural={[
          {
            label: "Réguler le chauffage hivernal pièce par pièce",
            description:
              "Une chambre à 18-19 °C garde une HR plus élevée et mieux équilibrée qu'à 22 °C. Baisser la température dans les pièces non utilisées et accepter un séjour à 19-20 °C limite l'effet d'assèchement du chauffage et réduit la facture énergétique.",
            effort: "Aucun coût, ajustement thermostat",
          },
          {
            label: "Faire un diagnostic humidité si le taux reste élevé",
            description:
              "Si la HR reste durablement supérieure à 60 % malgré une ventilation correcte et des habitudes saines, la cause est probablement structurelle. Un diagnostic spécialisé identifie remontées capillaires, infiltrations ou défauts d'isolation, conditions sine qua non avant de choisir la bonne solution.",
            effort: "Investissement diagnostic, intervention spécialisée",
          },
          {
            label: "Recourir à un déshumidificateur ou humidificateur seulement en complément",
            description:
              "Un déshumidificateur peut corriger un excès saisonnier (cave, buanderie, intersaison). Un humidificateur peut compenser un air trop sec en hiver. Ces appareils ne remplacent jamais la correction de la cause racine et exigent un entretien hebdomadaire pour éviter la prolifération bactérienne.",
            effort: "Investissement modéré + entretien",
          },
          {
            label: "Renforcer l'isolation des parois froides",
            description:
              "Les ponts thermiques (angles de murs extérieurs, dalles non isolées, menuiseries simple vitrage) créent des points de condensation locaux. Leur traitement, dans le cadre d'une rénovation, supprime durablement les zones où les moisissures apparaissent même quand la HR ambiante est correcte.",
            effort: "Gros œuvre, projet de rénovation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur l'humidité dans la maison."
        errors={[
          {
            label: "\"Plus l'air est sec, plus c'est sain\"",
            explanation:
              "Faux. Un air trop sec dessèche les muqueuses respiratoires, augmente la sensibilité aux infections virales (notamment grippe), aggrave les eczémas et irrite les yeux. La cible n'est pas le sec absolu, c'est la plage 40-60 %.",
          },
          {
            label: "\"Quelques plantes vertes suffisent à humidifier l'air\"",
            explanation:
              "Marginal à l'échelle d'une pièce. Quelques plantes ajoutent moins d'un gramme d'eau par heure dans l'air, négligeable face aux dizaines de grammes apportés par la respiration ou évacués par la ventilation. Elles n'ont pas non plus d'effet mesurable contre l'air trop sec en hiver.",
          },
          {
            label: "\"Sécher le linge à l'intérieur ne change rien\"",
            explanation:
              "Un cycle de séchage en intérieur peut faire monter la HR locale de 30 à 70 % en quelques heures dans une pièce fermée. C'est une cause fréquente de moisissures dans les chambres et les buanderies non ventilées. À limiter, ou à confiner dans une pièce avec extraction.",
          },
          {
            label: "\"Mon hygromètre intégré au thermostat suffit\"",
            explanation:
              "Une mesure unique dans le couloir ou le séjour ne reflète pas la situation des chambres ou des salles de bain, où la dérive se joue. Plusieurs points de mesure sont nécessaires pour piloter correctement, surtout dans une maison de plus de 80 m².",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le taux d'humidité dans la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Diagnostic humidité : repérer une cause structurelle",
            description:
              "Quand la HR reste durablement élevée malgré une ventilation correcte, le problème est dans le bâti. Méthode pour identifier la bonne cause avant tout travaux.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
          {
            tag: "Humidité maison",
            title: "Réduire l'humidité dans une maison",
            description:
              "Les leviers concrets, du plus simple au plus structurel, pour ramener une HR excessive vers la plage saine.",
            href: "/humidite-maison/reduire-humidite-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Ventilation et humidité : ce qui marche vraiment",
            description:
              "VMC, hotte, aération naturelle : comprendre quel système répond à quel besoin et comment les combiner.",
            href: "/humidite-maison/ventilation-humidite/",
          },
        ]}
      />
    </>
  );
}

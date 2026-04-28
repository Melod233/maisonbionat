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
  title: "CO2 dans la maison : indicateur de confinement et seuils utiles",
  description:
    "Comprendre ce que mesure un capteur de CO2, pourquoi 1000 ppm reste un repère clé, comment l'interpréter en chambre, séjour ou bureau, et choisir un appareil NDIR fiable.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/co2-maison/",
  },
  openGraph: {
    title: "CO2 dans la maison : indicateur de confinement et seuils utiles",
    description:
      "Comprendre ce que mesure un capteur de CO2, pourquoi 1000 ppm reste un repère clé, comment l'interpréter en chambre, séjour ou bureau, et choisir un appareil NDIR fiable.",
    url: "https://www.maisonbionat.fr/air-interieur/co2-maison/",
  },
};

const faqItems = [
  {
    question: "Le CO2 dans une maison est-il dangereux ?",
    answer:
      "Aux concentrations rencontrées dans un logement, le CO2 n'est pas toxique en lui-même. L'ANSES rappelle qu'il n'est pas pertinent comme indicateur sanitaire direct. Sa valeur tient à son rôle d'indicateur de confinement : quand le CO2 monte, cela signifie que l'air est peu renouvelé, donc que d'autres polluants intérieurs (COV, formaldéhyde, particules, allergènes) s'accumulent en parallèle. C'est un thermomètre de la ventilation, pas un poison.",
  },
  {
    question: "À partir de quelle valeur faut-il s'inquiéter ?",
    answer:
      "1000 ppm est le seuil de référence le plus utilisé : au-delà, on parle d'air confiné, et des effets cognitifs (concentration, prise de décision) sont documentés à partir de ce niveau. Le HCSP recommande 800 ppm en établissement recevant du public, avec un différentiel maximal de 400 ppm avec l'extérieur. Au-dessus de 1700 ppm, l'indice ICONE classe la pièce en confinement élevé. Ces seuils s'appliquent aussi à un logement.",
  },
  {
    question: "Pourquoi mesure-t-on souvent 2000 à 3000 ppm dans une chambre la nuit ?",
    answer:
      "Une chambre fermée, fenêtres et porte closes, sans VMC fonctionnelle, voit son CO2 monter rapidement. Deux adultes émettent environ 30 à 40 litres de CO2 par heure en sommeil. Sans renouvellement d'air, le seuil de 1000 ppm est franchi en moins d'une heure, et 2000 à 3000 ppm sont atteints dans la nuit. C'est le cas le plus fréquent de confinement domestique, et celui qui affecte le plus la qualité du sommeil.",
  },
  {
    question: "Quel capteur de CO2 choisir pour la maison ?",
    answer:
      "Privilégier un capteur à technologie NDIR (infrarouge non dispersif), seule techno fiable pour le CO2 grand public. Comptez 80 à 200 € pour un appareil sérieux. Les capteurs MOS ou électrochimiques moins chers donnent des valeurs peu reproductibles. Placer l'appareil entre 1 et 2 mètres de hauteur, loin des fenêtres, des bouches de VMC et de la respiration directe. Un appareil mobile suffit pour piloter plusieurs pièces successivement.",
  },
];

export default function Co2MaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "CO2 dans la maison : indicateur de confinement et seuils utiles",
      href: "https://www.maisonbionat.fr/air-interieur/co2-maison/",
    },
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
        tag="Indicateur de qualité"
        title="CO2 dans la maison : ce qu'il indique vraiment, à quels seuils s'inquiéter, comment le mesurer"
        quickAnswer="Le dioxyde de carbone (CO2) que nous expirons s'accumule dans les pièces fermées. À l'extérieur, l'air contient environ 420 ppm de CO2. Dans un logement bien ventilé, on reste sous 1000 ppm. Au-delà, on parle d'air confiné : ce n'est pas le CO2 lui-même qui pose problème aux concentrations domestiques, mais ce qu'il révèle. L'ANSES et le HCSP utilisent le CO2 comme indicateur de la qualité de la ventilation, donc indirectement comme marqueur de l'accumulation des autres polluants intérieurs (COV, formaldéhyde, particules, allergènes). Le bon réflexe est un capteur NDIR pour identifier les pièces et moments problématiques, puis l'amélioration de l'aération et de la VMC."
        stats={[
          {
            value: "~420 ppm",
            label: "concentration moyenne de CO2 dans l'air extérieur (réf. atmosphérique 2025)",
          },
          {
            value: "1000 ppm",
            label: "seuil au-delà duquel l'air est considéré confiné, premiers effets cognitifs documentés",
          },
          {
            value: "800 ppm",
            label: "valeur seuil recommandée par le HCSP en établissement recevant du public",
          },
          {
            value: "1700 ppm",
            label: "seuil haut de l'indice ICONE de confinement utilisé en milieu scolaire",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre ce que dit le CO2" },
          { id: "signes", label: "Repérer le confinement" },
          { id: "causes", label: "Pourquoi le CO2 monte" },
          { id: "actions", label: "Mesurer et ventiler" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi le CO2 est utilisé comme indicateur, et ce qu'il ne mesure pas."
        description="Le CO2 que nous expirons (environ 1 kg par jour et par adulte) s'accumule dans les espaces clos. C'est un gaz inodore, incolore, présent partout, dont la concentration intérieure dépend uniquement de l'occupation et du renouvellement d'air. C'est cette double caractéristique qui en fait un excellent indicateur de la ventilation : si le CO2 monte vite, c'est que l'air n'est pas renouvelé, et donc que les autres polluants émis dans la pièce (COV des matériaux, formaldéhyde, allergènes, particules de cuisson) s'accumulent eux aussi. L'ANSES a explicitement rappelé que le CO2 n'est pas un indicateur sanitaire direct aux concentrations domestiques : sa valeur n'est pas dans son effet propre, mais dans ce qu'il révèle de l'aération."
        variants={[
          {
            indicator: "< 800 ppm",
            name: "Air bien renouvelé",
            description:
              "Niveau cible dans une pièce occupée. Correspond à une aération régulière ou à une VMC bien dimensionnée. C'est la valeur recommandée par le Haut Conseil de la santé publique pour les établissements recevant du public, et un bon repère pour un logement aussi.",
          },
          {
            indicator: "800 - 1000 ppm",
            name: "Limite haute acceptable",
            description:
              "Encore acceptable mais s'approche du seuil de confinement. Aération conseillée. C'est la zone typique d'un séjour occupé par 4 personnes en hiver, fenêtres fermées, avec une VMC standard.",
          },
          {
            indicator: "1000 - 1700 ppm",
            name: "Air confiné",
            description:
              "Premier indicateur d'effets cognitifs documentés (baisse de concentration, prise de décision, performance scolaire). Le HCSP estime que 1000 ppm marque le besoin d'agir. Au-dessus de 1700 ppm, l'indice ICONE classe la pièce en confinement élevé.",
          },
          {
            indicator: "> 2000 ppm",
            name: "Confinement marqué",
            description:
              "Niveau atteint typiquement dans une chambre fermée la nuit, dans une salle de classe non ventilée, ou dans un séjour très occupé sans aération. Indique une ventilation manifestement insuffisante. Le risque sanitaire ne vient pas du CO2 mais de l'ensemble des polluants qui montent en parallèle.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les pièces et moments où le CO2 monte fortement."
        subtitle="On ne sent pas le CO2. Mais certaines situations sont presque toujours associées à un confinement marqué, mesurable à l'appareil."
        signs={[
          {
            label: "Chambre fermée la nuit, plusieurs occupants",
            description:
              "Deux adultes dans une chambre de 12-15 m², fenêtre et porte closes, sans VMC fonctionnelle, atteignent 2000 à 3000 ppm en quelques heures. C'est la situation la plus fréquente de confinement domestique, avec un impact direct sur la qualité du sommeil et sur les réveils en gorge sèche.",
            severity: "modéré",
          },
          {
            label: "Bureau ou pièce de télétravail occupée plusieurs heures",
            description:
              "Une personne en travail prolongé dans une petite pièce sans aération atteint 1200 à 1800 ppm en deux à trois heures. La baisse de concentration mesurée à partir de 1000 ppm devient sensible. C'est un cas-type pour acquérir un capteur portable.",
            severity: "modéré",
          },
          {
            label: "Réunion ou repas familial avec plusieurs personnes en pièce fermée",
            description:
              "Six à huit personnes dans un séjour de 25-30 m² fermé peuvent dépasser 2000 ppm en moins d'une heure. Le confinement est temporaire mais marqué. Une aération brève en milieu de réunion ramène l'air à un niveau acceptable en quelques minutes.",
            severity: "léger",
          },
          {
            label: "Mal de tête, somnolence, baisse de concentration en pièce fermée",
            description:
              "À partir de 1500-2000 ppm, des symptômes diffus apparaissent chez certaines personnes. S'ils disparaissent en quelques minutes en sortant ou en ouvrant la fenêtre, le diagnostic est probable : il s'agit du confinement, pas d'autre chose.",
            severity: "léger",
          },
          {
            label: "Vitres qui se voilent au lever en hiver",
            description:
              "Une légère buée sur la fenêtre d'une chambre au réveil indique un excès d'humidité combiné à un manque de ventilation. Le CO2 a très probablement dépassé 2000 ppm pendant la nuit. C'est un signe gratuit qui anticipe la mesure.",
            severity: "léger",
          },
          {
            label: "Salle de bain ou cuisine sans extraction efficace",
            description:
              "Cuisson, douche, séchage : ces activités émettent peu de CO2 en valeur absolue mais beaucoup de polluants associés. Une cuisine sans hotte raccordée à l'extérieur cumule CO2, particules fines et NO2 en quelques minutes.",
            severity: "modéré",
          },
        ]}
        footerNote="Sans capteur, ces signes orientent. Avec un capteur NDIR, on quantifie et on cible précisément les pièces et créneaux à corriger."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi le CO2 monte dans une maison."
        subtitle="Les causes sont peu nombreuses et bien identifiées. Elles pointent toutes vers la ventilation."
        causes={[
          {
            number: "01",
            cause: "L'occupation humaine et animale",
            explanation:
              "Un adulte expire environ 1 kg de CO2 par jour, plus pendant l'effort, moins pendant le sommeil. La plupart du CO2 d'une maison vient des occupants. Plus la pièce est petite, plus le nombre d'occupants est élevé, plus la concentration monte vite à ventilation constante.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Une ventilation mécanique absente, en panne ou bouchée",
            explanation:
              "Une VMC bouchée, des entrées d'air masquées par de la peinture, des bouches d'extraction colmatées : l'air n'est plus renouvelé, et le CO2 monte avec tous les autres polluants. C'est de loin la première cause de confinement chronique dans les logements rénovés.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Des pièces fermées sans aération en hiver",
            explanation:
              "L'hiver, on aère moins par souci d'économie d'énergie. Une chambre, un bureau, un séjour fermés plusieurs heures sans renouvellement passent rapidement la barre des 1000 ppm. C'est saisonnier mais récurrent dans la majorité des foyers.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "La combustion à l'intérieur (cheminée, gazinière, bougies)",
            explanation:
              "Toute combustion émet du CO2 en plus des autres polluants. Une gazinière mal raccordée, un poêle à pétrole, un foyer ouvert mal tiré peuvent faire monter rapidement le CO2 d'une pièce, et plus encore le CO et les particules. À ne pas confondre avec le CO2 respiratoire, mais à surveiller au même titre.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Une isolation thermique renforcée sans ajustement de la ventilation",
            explanation:
              "Une rénovation thermique (changement de fenêtres, isolation par l'extérieur) qui rend le bâti très étanche sans installer ou redimensionner la VMC piège mécaniquement le CO2 et le reste. C'est un effet pervers fréquent des rénovations énergétiques mal pensées.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Mesurer le CO2 et améliorer durablement la ventilation."
        immediate={[
          {
            label: "Aérer 10 minutes matin et soir, fenêtres en opposition",
            description:
              "Un courant d'air bref ramène la concentration intérieure proche de la valeur extérieure (~420 ppm). À refaire systématiquement après une réunion, un repas familial, une nuit en chambre fermée. C'est le geste de base et il fonctionne.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Acquérir un capteur de CO2 NDIR pour cibler",
            description:
              "Un appareil mobile à 80-200 € permet de mesurer pièce par pièce, créneau par créneau. On découvre presque toujours que la chambre la nuit est la pièce la plus problématique, et que le séjour en réunion familiale dépasse les seuils. La mesure oriente l'action.",
            effort: "Coût ponctuel modéré",
          },
          {
            label: "Vérifier et entretenir la VMC",
            description:
              "Bouches d'extraction propres tous les 6 mois, entrées d'air dégagées, hotte de cuisine raccordée à l'extérieur. Une VMC en bon état peut maintenir un séjour occupé sous 1000 ppm sans avoir besoin d'ouvrir les fenêtres en plein hiver.",
            effort: "30 minutes par semestre",
          },
          {
            label: "Laisser une ventilation nocturne en chambre",
            description:
              "Entrebâiller une fenêtre la nuit (oscillo-battant en hiver), laisser la porte légèrement ouverte si une VMC est présente dans le couloir, ou installer une grille d'aération haute. Une chambre qui passe la nuit sous 1200 ppm transforme la qualité du sommeil.",
            effort: "Gratuit, ajustement quotidien",
          },
        ]}
        structural={[
          {
            label: "Ajouter ou redimensionner la VMC après une rénovation thermique",
            description:
              "Toute isolation renforcée doit s'accompagner d'une ventilation adaptée. Une VMC simple flux hygroréglable suffit dans la plupart des logements ; une double flux est intéressante en zone froide ou en logement très étanche. À chiffrer dès l'étude de la rénovation, pas après.",
            effort: "Investissement, intervention spécialisée",
          },
          {
            label: "Installer des entrées d'air haute performance dans les pièces de vie",
            description:
              "Des entrées d'air autoréglables ou hygroréglables placées en partie haute des fenêtres apportent un débit constant sans courant d'air ressenti. Elles complètent la VMC simple flux et règlent les chambres mal ventilées sans gros travaux.",
            effort: "Travaux modérés",
          },
          {
            label: "Installer un capteur fixe avec alerte dans une pièce sensible",
            description:
              "Un capteur fixe avec affichage et seuil d'alerte (1000 ou 1200 ppm) dans une chambre, une salle de réunion familiale ou un bureau de télétravail crée un réflexe collectif d'aération. L'effet sur les habitudes est durable et bien documenté en milieu scolaire.",
            effort: "Investissement modéré",
          },
          {
            label: "Évaluer l'option VMC double flux dans un projet de rénovation",
            description:
              "La VMC double flux récupère la chaleur de l'air extrait pour préchauffer l'air entrant, ce qui permet de ventiler généreusement sans pénaliser la facture de chauffage. Pertinente dans les logements bien isolés ou les régions froides, à dimensionner avec un installateur qualifié.",
            effort: "Investissement important, projet de rénovation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le CO2 dans la maison."
        errors={[
          {
            label: "\"Le CO2 est toxique chez soi\"",
            explanation:
              "Aux concentrations rencontrées dans un logement (jusqu'à 3000-4000 ppm dans les cas extrêmes), le CO2 n'est pas toxique. La toxicité directe commence très haut, au-delà de 30 000-50 000 ppm. Le risque domestique vient de ce que le CO2 indique : un manque de ventilation, donc une accumulation des autres polluants intérieurs.",
          },
          {
            label: "\"Les plantes vertes absorbent le CO2 et règlent le problème\"",
            explanation:
              "L'effet est totalement négligeable à l'échelle d'une pièce occupée. Quelques plantes captent une fraction infime du CO2 émis par un seul occupant. Pour atteindre un effet mesurable, il faudrait des dizaines de plantes par mètre carré. L'aération reste sans comparaison plus efficace.",
          },
          {
            label: "\"Mon capteur premier prix donne des chiffres précis\"",
            explanation:
              "Les capteurs MOS ou électrochimiques bon marché (sous 50 €) ne mesurent pas réellement le CO2 mais des composés équivalents (eCO2), avec une précision insuffisante pour piloter une décision. Seule la technologie NDIR donne une mesure fiable et reproductible.",
          },
          {
            label: "\"Si la VMC tourne, je n'ai pas besoin d'aérer\"",
            explanation:
              "Une VMC standard est dimensionnée pour un usage moyen, pas pour des pics d'occupation. Six personnes dans un séjour, deux adultes dans une chambre la nuit : la VMC est insuffisante pour maintenir le CO2 sous 1000 ppm. L'aération manuelle ponctuelle reste utile, complément à la VMC, pas alternative.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le CO2 dans la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Bien aérer sa maison au quotidien",
            description:
              "La routine d'aération qui maintient un CO2 bas et limite l'accumulation de tous les polluants intérieurs.",
            href: "/air-interieur/bien-aerer-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Aération ou ventilation : ce qui change",
            description:
              "Aération manuelle, VMC simple flux, double flux : comprendre quel système répond à quel besoin et comment les combiner.",
            href: "/air-interieur/aeration-ou-ventilation/",
          },
          {
            tag: "Air intérieur",
            title: "Entretien VMC : ce qui compte vraiment",
            description:
              "Une VMC en panne fait monter le CO2 et tous les autres polluants. Routine d'entretien et signaux d'alerte.",
            href: "/air-interieur/entretien-vmc/",
          },
        ]}
      />
    </>
  );
}

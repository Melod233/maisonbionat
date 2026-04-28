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
  title: "Allergies respiratoires de l'enfant : agir sur l'environnement domestique",
  description:
    "Acariens, animaux, moisissures : ce que les parents peuvent faire dans le logement pour limiter l'exposition aux allergènes domestiques, en complément d'un suivi médical.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/maison-saine-famille/allergies-respiratoires-enfant/",
  },
  openGraph: {
    title: "Allergies respiratoires de l'enfant : agir sur l'environnement domestique",
    description:
      "Acariens, animaux, moisissures : ce que les parents peuvent faire dans le logement pour limiter l'exposition aux allergènes domestiques, en complément d'un suivi médical.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/allergies-respiratoires-enfant/",
  },
};

const faqItems = [
  {
    question: "Mon enfant a une rhinite et tousse au réveil : est-ce une allergie ?",
    answer:
      "Ce sont des signes compatibles avec une allergie aux acariens domestiques, mais ils peuvent aussi correspondre à d'autres causes (infection virale persistante, hyperréactivité bronchique, exposition à un irritant). Seul un médecin (médecin traitant, pédiatre, ou allergologue selon l'orientation) peut établir un diagnostic. Les tests allergologiques de référence sont les prick-tests cutanés et le dosage sanguin des IgE spécifiques. Cette page traite uniquement de la réduction de l'exposition aux allergènes domestiques, pas du diagnostic ni du traitement médical.",
  },
  {
    question: "Un enfant peut-il développer de l'asthme à cause d'allergènes dans la maison ?",
    answer:
      "Les allergènes domestiques (acariens, moisissures, animaux, blattes) figurent parmi les facteurs qui peuvent favoriser ou aggraver un asthme allergique chez l'enfant prédisposé, selon les recommandations des sociétés savantes (SP2A, SPLF). La part exacte revenant à l'environnement domestique varie selon les enfants : certains sont très sensibles, d'autres beaucoup moins. La prise en charge est toujours individuelle et médicale. La réduction de l'exposition à domicile est l'un des leviers, jamais le seul.",
  },
  {
    question: "Faut-il se séparer de l'animal de compagnie en cas d'allergie ?",
    answer:
      "Cette décision relève d'un échange avec l'allergologue ou le pneumo-pédiatre qui suit l'enfant, en fonction du niveau de sensibilisation, de la sévérité des symptômes et du contexte familial. Plusieurs mesures intermédiaires existent (interdire l'accès à la chambre, baigner régulièrement l'animal, aspirateur HEPA, ventilation renforcée). Aucune position générale ne peut remplacer l'évaluation médicale individuelle. Cette page ne formule pas de recommandation à ce sujet.",
  },
  {
    question: "Les filtres HEPA et les housses anti-acariens fonctionnent-ils vraiment ?",
    answer:
      "Les recommandations de la SP2A pour l'asthme allergique aux acariens citent l'usage hebdomadaire d'un aspirateur à filtre HEPA et la réduction de l'humidité intérieure. Les housses anti-acariens à pores fins (< 10 microns) sur matelas, oreillers et couette font également partie des mesures décrites par les sociétés savantes pour limiter l'exposition. Leur efficacité dépend d'une utilisation correcte et combinée, et ne se substitue pas au suivi médical de l'enfant allergique.",
  },
];

export default function AllergiesRespiratoiresEnfantPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
    {
      name: "Allergies respiratoires de l'enfant : agir sur l'environnement domestique",
      href: "https://www.maisonbionat.fr/maison-saine-famille/allergies-respiratoires-enfant/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Maison saine famille"
        parentHref="/maison-saine-famille/"
        tag="Environnement domestique"
        title="Allergies respiratoires de l'enfant : ce que l'environnement domestique peut changer"
        quickAnswer="Cette page s'adresse à des parents dont l'enfant présente des symptômes respiratoires (rhinite, toux, sifflements) potentiellement liés à des allergènes domestiques, ou dont une allergie respiratoire a déjà été diagnostiquée. Elle ne remplace en aucun cas le diagnostic et la prise en charge par un médecin (médecin traitant, pédiatre, allergologue, pneumo-pédiatre). Elle traite uniquement du périmètre du logement : ce que les parents peuvent ajuster dans l'environnement domestique pour réduire l'exposition aux allergènes les plus fréquents (acariens, moisissures, animaux, blattes). Selon Santé Publique France, la prévalence de l'asthme chez l'enfant en France est estimée autour de 9 à 11 %, et l'exploration allergologique respiratoire est recommandée chez tous les patients asthmatiques selon les recommandations de la SPLF. La gestion environnementale n'est qu'un volet, jamais le seul, de la prise en charge."
        stats={[
          {
            value: "9-11 %",
            label: "prévalence estimée de l'asthme chez l'enfant en France (Santé Publique France, enquêtes 2012-2013)",
          },
          {
            value: "Acariens",
            label: "premier allergène respiratoire identifié dans l'environnement domestique (recommandations SPLF / SP2A)",
          },
          {
            value: "< 50 % HR",
            label: "objectif d'humidité dans la chambre pour limiter la prolifération des acariens",
          },
          {
            value: "60 °C",
            label: "température de lavage hebdomadaire de la literie recommandée pour éliminer les acariens",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Cadre et limites de cette page" },
          { id: "signes", label: "Signes qui justifient un avis médical" },
          { id: "causes", label: "Allergènes domestiques fréquents" },
          { id: "actions", label: "Réduire l'exposition à domicile" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Le périmètre exact de cette page et la place du suivi médical."
        description="Une allergie respiratoire chez l'enfant ne se diagnostique pas en lisant un site internet et ne se traite pas avec des conseils environnementaux seuls. Le diagnostic repose sur un examen clinique, les antécédents personnels et familiaux, et des tests allergologiques (prick-tests, dosage IgE) réalisés par un médecin formé. La prise en charge associe selon les cas des traitements médicamenteux, une éducation thérapeutique, parfois une immunothérapie allergénique, et toujours une réflexion sur l'environnement de l'enfant. Cette dernière dimension est le seul volet abordé ici. Les recommandations citées dans cette page proviennent des sociétés savantes françaises de référence : Société pédiatrique de pneumologie et d'allergologie (SP2A), Société de pneumologie de langue française (SPLF), avec les données épidémiologiques de Santé Publique France."
        variants={[
          {
            indicator: "Diagnostic",
            name: "Du ressort exclusif du médecin",
            description:
              "Le diagnostic d'allergie respiratoire (rhinite allergique, asthme allergique, conjonctivite allergique) est établi par un médecin sur la base d'un examen clinique et de tests allergologiques. Les sociétés savantes recommandent une exploration allergologique chez tous les enfants asthmatiques. Aucune information de cette page ne peut s'y substituer.",
          },
          {
            indicator: "Traitement",
            name: "Médical, pas environnemental",
            description:
              "Les traitements pharmacologiques (antihistaminiques, corticoïdes inhalés, bronchodilatateurs), l'éducation thérapeutique et l'éventuelle immunothérapie allergénique relèvent de la décision médicale. Selon les recommandations 2024 de la SP2A, l'immunothérapie sublinguale aux acariens ou graminées peut être envisagée dès l'âge de 5 ans dans certaines situations, sur avis spécialisé.",
          },
          {
            indicator: "Environnement",
            name: "Le périmètre de cette page",
            description:
              "Réduire l'exposition aux allergènes identifiés est l'un des piliers de la prise en charge globale, selon les recommandations SP2A et SPLF. Pour les acariens, par exemple, les sociétés savantes citent la réduction de l'humidité, l'usage hebdomadaire d'un aspirateur à filtre HEPA et la mise en place de housses anti-acariens. Cette page détaille ce qui peut être fait dans le logement, en complément du suivi médical.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quels signes orientent vers un avis médical."
        subtitle="Cette section liste des signes qui justifient une consultation, sans poser de diagnostic. Le médecin traitant ou le pédiatre est la première porte d'entrée."
        signs={[
          {
            label: "Rhinite persistante avec écoulement clair, éternuements, démangeaisons",
            description:
              "Une rhinite qui dure au-delà de quelques semaines, avec écoulement clair (et non purulent) et démangeaisons nasales et oculaires, peut évoquer une rhinite allergique. Une consultation médicale permet d'orienter le diagnostic et d'évaluer la pertinence d'une exploration allergologique.",
            severity: "modéré",
          },
          {
            label: "Symptômes qui s'améliorent à l'extérieur ou en vacances",
            description:
              "Une amélioration franche en dehors du logement (vacances, séjour ailleurs) qui se retrouve au retour est un signal souvent évocateur d'une exposition à un allergène domestique. À mentionner explicitement au médecin lors de la consultation.",
            severity: "modéré",
          },
          {
            label: "Toux ou sifflements nocturnes, réveils répétés",
            description:
              "Toux sèche persistante, sifflements à l'expiration, réveils nocturnes liés à une gêne respiratoire : ces signes justifient une consultation rapide, en particulier s'ils retentissent sur le sommeil ou la vie quotidienne. Ils peuvent évoquer un asthme, dont la prise en charge est d'autant plus efficace qu'elle est précoce.",
            severity: "critique",
          },
          {
            label: "Essoufflement à l'effort, gêne respiratoire en activité",
            description:
              "Une diminution de la capacité à courir, à jouer ou à pratiquer un sport sans s'arrêter mérite un avis médical. Ce n'est pas seulement une question de condition physique : un asthme d'effort peut se cacher derrière ce type de tableau.",
            severity: "critique",
          },
          {
            label: "Antécédents familiaux d'asthme, d'eczéma, de rhinite allergique",
            description:
              "Le terrain atopique familial augmente la probabilité d'allergie respiratoire chez l'enfant. À mentionner systématiquement en consultation, car cela oriente le bilan et la prise en charge dès les premiers symptômes.",
            severity: "léger",
          },
          {
            label: "Réveils en gorge sèche, congestion nasale au lever",
            description:
              "Symptômes typiques d'une exposition nocturne aux allergènes de la literie (acariens) ou à d'autres allergènes confinés en chambre fermée. À documenter et à mentionner lors de la consultation : leur lien éventuel avec l'environnement de la chambre est utile au médecin pour orienter le bilan.",
            severity: "modéré",
          },
        ]}
        footerNote="En cas de gêne respiratoire aiguë, sifflements importants, difficulté à terminer une phrase, lèvres bleutées ou somnolence inhabituelle chez l'enfant : il s'agit d'une situation médicale qui justifie un avis médical en urgence (15, SAMU)."
      />

      <IssueCauses
        id="causes"
        title="Les principaux allergènes domestiques cités par les sociétés savantes."
        subtitle="Selon les recommandations de la SPLF, le bilan allergologique standard chez l'enfant inclut les acariens, les squames de chien et de chat, les moisissures, les graminées et certains pollens d'arbres."
        causes={[
          {
            number: "01",
            cause: "Les acariens domestiques (Dermatophagoides pteronyssinus et farinae)",
            explanation:
              "Premier allergène respiratoire identifié dans l'environnement domestique français, présent dans tous les logements à des niveaux variables. Les allergènes (Der p1, Der f1) sont contenus dans les déjections d'acariens et se diffusent dans l'air avec la poussière. Concentration la plus élevée dans la literie, les sommiers tapissiers, les moquettes et les peluches.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les squames d'animaux de compagnie (chat, chien)",
            explanation:
              "Les allergènes (Fel d1 du chat, Can f1 du chien) sont libérés dans la salive, l'urine et les squames cutanées. Ils persistent dans l'environnement plusieurs mois après le départ d'un animal. La sensibilisation est variable selon les enfants. La gestion en cas d'allergie diagnostiquée relève d'une décision médicale individuelle.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les moisissures domestiques (Aspergillus, Alternaria, Cladosporium)",
            explanation:
              "Présentes dans les logements humides, derrière les meubles collés aux murs froids, autour des fenêtres mal isolées, dans les salles de bain peu ventilées. Leurs spores diffusent dans l'air et peuvent déclencher rhinite ou asthme allergique chez les enfants sensibilisés. Le traitement de l'humidité est ici à la fois sanitaire et préventif.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les blattes (cafards) dans les logements urbains anciens",
            explanation:
              "Les allergènes de blattes sont des sensibilisants reconnus, particulièrement en logement urbain ancien ou en contexte de précarité. Une infestation justifie une intervention spécialisée. Cet allergène est cité dans les bilans allergologiques de référence.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Les pollens d'extérieur entrés dans le logement",
            explanation:
              "Bien que d'origine extérieure, les pollens (graminées, arbres, ambroise, armoise selon les régions) entrent dans le logement par les fenêtres ouvertes en saison et se déposent sur les surfaces et les vêtements. Pour un enfant pollen-allergique, des ajustements saisonniers de l'aération sont parfois nécessaires, sur avis médical.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire l'exposition aux allergènes domestiques, en complément du suivi médical."
        immediate={[
          {
            label: "Maintenir la chambre à 17-18 °C la nuit et 40-50 % d'humidité",
            description:
              "Les sociétés savantes citent la réduction de l'humidité intérieure parmi les mesures prioritaires en allergie aux acariens. Une chambre fraîche et peu humide est moins favorable à la prolifération des acariens. Vérifier avec un hygromètre. Mesure simple, sans coût, à mettre en place rapidement.",
            effort: "Gratuit, ajustement immédiat",
          },
          {
            label: "Laver la literie à 60 °C chaque semaine",
            description:
              "Draps, taies d'oreiller et housses à 60 °C une fois par semaine ; couettes et oreillers tous les trois mois. Recommandation OQAI standard, reprise par les sociétés savantes. Les acariens meurent à partir de 58 °C, le lavage à 30 ou 40 °C les nettoie sans les éliminer.",
            effort: "Routine hebdomadaire",
          },
          {
            label: "Aspirer la chambre une à deux fois par semaine, filtre HEPA",
            description:
              "Les recommandations SP2A pour l'asthme allergique aux acariens citent l'usage hebdomadaire d'un aspirateur équipé d'un filtre HEPA. Sans filtre HEPA, l'aspirateur redistribue dans l'air une partie des allergènes capturés. Aspirer matelas, sommier, sol et plinthes.",
            effort: "Routine, investissement aspirateur HEPA",
          },
          {
            label: "Aérer la chambre 30 minutes par jour, lit défait",
            description:
              "Défaire le lit, ouvrir la fenêtre en grand pendant 20 à 30 minutes, laisser la literie sécher de l'humidité respiratoire de la nuit. Réduit la HR de la literie et limite la prolifération. Adaptation saisonnière en cas d'allergie aux pollens : aérer plutôt en début de matinée et fin de soirée selon le pollen incriminé.",
            effort: "Gratuit, 30 minutes par jour",
          },
        ]}
        structural={[
          {
            label: "Installer des housses anti-acariens sur la literie complète",
            description:
              "Housses à pores inférieurs à 10 microns avec fermeture éclair intégrale, sur matelas, oreillers et couette. Mesure citée par les sociétés savantes parmi les leviers efficaces pour limiter l'exposition aux allergènes d'acariens. Comptez 50-150 € pour un ensemble complet, à renouveler tous les 5-8 ans.",
            effort: "Investissement modéré, longue durée",
          },
          {
            label: "Privilégier parquet ou stratifié à la moquette en chambre",
            description:
              "Les surfaces textiles épaisses (moquette, tapis lourds) retiennent davantage d'allergènes que les sols durs. Pour un enfant allergique avéré, le passage à un sol dur est l'une des décisions ayant l'impact le plus mesurable. À combiner avec un grand tapis lavable si une zone douce est souhaitée.",
            effort: "Travaux ou choix au moment d'un changement",
          },
          {
            label: "Traiter durablement l'humidité et les moisissures s'il y en a",
            description:
              "Tâches de moisissures derrière un meuble, dans une salle de bain peu ventilée, autour de fenêtres : nettoyer puis surtout corriger la cause (ventilation, isolation, infiltration). En cas d'allergie aux moisissures diagnostiquée, c'est une priorité absolue dans le logement.",
            effort: "Travaux ciblés, intervention possible",
          },
          {
            label: "Échanger avec l'allergologue ou le pneumo-pédiatre sur les arbitrages spécifiques",
            description:
              "Animal de compagnie, choix du mode de garde, voyages, activités : ces décisions individuelles dépendent du profil allergique de l'enfant et de la sévérité des symptômes. Le médecin spécialiste a la vision globale nécessaire pour conseiller. Cette page n'a pas vocation à se substituer à cet échange.",
            effort: "Consultation médicale spécialisée",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les allergies respiratoires de l'enfant."
        errors={[
          {
            label: "\"Mon enfant tousse souvent, c'est forcément une allergie\"",
            explanation:
              "Une toux persistante chez un enfant peut avoir de multiples causes : infections virales répétées, asthme, hyperréactivité bronchique, reflux, allergies, exposition à des irritants. Seul un médecin peut établir le diagnostic correct. Présupposer une allergie peut retarder la prise en charge d'autres causes.",
          },
          {
            label: "\"Si je supprime tous les allergènes, l'allergie disparaît\"",
            explanation:
              "L'éviction des allergènes réduit l'exposition mais n'élimine pas le terrain allergique. La prise en charge médicale (traitement de fond, immunothérapie le cas échéant) reste centrale. Selon les recommandations SP2A, la gestion environnementale est un volet, pas la totalité de la prise en charge.",
          },
          {
            label: "\"Les huiles essentielles ou plantes médicinales soignent l'allergie\"",
            explanation:
              "Aucune étude clinique solide ne soutient l'usage d'huiles essentielles ou de plantes médicinales en traitement de fond d'une allergie respiratoire de l'enfant. Certaines huiles essentielles peuvent même être irritantes pour les voies respiratoires d'un enfant asthmatique. Toute initiative en automédication doit être discutée avec le médecin de l'enfant.",
          },
          {
            label: "\"Les filtres ioniseurs et les purificateurs réglent tout\"",
            explanation:
              "Les purificateurs HEPA peuvent réduire les particules en suspension, mais leur efficacité réelle sur les symptômes allergiques chez l'enfant est variable et discutée. Les ioniseurs peuvent émettre de l'ozone, irritant respiratoire. Aucun appareil ne remplace les mesures de base (humidité, lavage 60 °C, aspirateur HEPA) ni le suivi médical.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les allergies respiratoires de l'enfant"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Acariens : allergènes, literie et leviers efficaces",
            description:
              "Le dossier dédié aux acariens : conditions de prolifération, mesures à efficacité démontrée, place dans la chambre d'enfant.",
            href: "/air-interieur/acariens-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "Identifier les types de moisissures domestiques, traiter localement et corriger la cause structurelle, avec rappel des risques pour les enfants sensibles.",
            href: "/humidite-maison/moisissures-maison/",
          },
          {
            tag: "Pièce par pièce",
            title: "Une chambre saine pour mieux respirer la nuit",
            description:
              "Au-delà des allergènes, ce qui compose une chambre saine : literie, matériaux, ventilation, température.",
            href: "/piece-par-piece/chambre-saine/",
          },
        ]}
      />
    </>
  );
}

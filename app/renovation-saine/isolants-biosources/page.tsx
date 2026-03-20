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
  title: "Isolants biosourcés en rénovation : guide pratique",
  description:
    "Ouate de cellulose, laine de chanvre, liège expansé, fibre de bois : quel isolant biosourcé choisir selon le poste de travaux, les performances attendues et le budget. Guide pratique pour la rénovation.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/isolants-biosources/",
  },
  openGraph: {
    title: "Isolants biosourcés en rénovation : guide pratique",
    description:
      "Ouate de cellulose, laine de chanvre, liège expansé, fibre de bois : quel isolant biosourcé choisir selon le poste de travaux, les performances attendues et le budget. Guide pratique pour la rénovation.",
    url: "https://www.maisonbionat.fr/renovation-saine/isolants-biosources/",
  },
};

export default function IsolantsBiosourcesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Isolants biosourcés en rénovation : guide pratique", href: "https://www.maisonbionat.fr/renovation-saine/isolants-biosources/" },
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
        title="Isolants biosourcés en rénovation : lesquels choisir, où les utiliser"
        quickAnswer="Les isolants biosourcés (ouate de cellulose, laine de chanvre, liège expansé, fibre de bois, laine de mouton) offrent des performances thermiques comparables aux isolants synthétiques courants, avec en plus une capacité à réguler la vapeur d'eau et de faibles émissions de COV. Leur coût est généralement plus élevé à l'achat, mais des aides comme MaPrimeRénov' et les CEE s'appliquent à plusieurs d'entre eux. Le bon isolant dépend avant tout du poste de travaux : combles, murs, sol ou cloisons intérieures."
        stats={[
          { value: "0,038 à 0,042 W/m·K", label: "conductivité thermique de la ouate de cellulose et de la laine de chanvre, comparable aux isolants conventionnels" },
          { value: "30 à 60 %", label: "surcoût moyen des isolants biosourcés par rapport à la laine de roche ou au polystyrène expansé" },
          { value: "A+", label: "étiquetage COV attendu sur les isolants et les colles de pose associées" },
          { value: "MaPrimeRénov'", label: "aide applicable aux isolants biosourcés sous conditions de ressources et de travaux" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les types d'isolants" },
          { id: "signes", label: "Quand choisir le biosourcé" },
          { id: "causes", label: "Avantages et limites" },
          { id: "actions", label: "Planifier les travaux" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les principaux isolants biosourcés et leurs usages en rénovation"
        description="Chaque matériau a des caractéristiques propres qui le rendent plus adapté à certains postes de travaux qu'à d'autres."
        variants={[
          {
            indicator: "Combles et toitures",
            name: "Ouate de cellulose et fibre de bois",
            description:
              "La ouate de cellulose en vrac soufflé est particulièrement adaptée aux combles perdus : elle s'insinue dans les recoins, offre une bonne inertie thermique et une conductivité de l'ordre de 0,038 à 0,040 W/m·K. La fibre de bois en panneaux rigides ou semi-rigides convient mieux aux rampants de toiture, où elle apporte également une protection contre la chaleur estivale grâce à son déphasage thermique élevé (8 à 12 heures selon l'épaisseur).",
          },
          {
            indicator: "Murs",
            name: "Fibre de bois (ITE) et laine de chanvre (ITI)",
            description:
              "Pour une isolation thermique par l'extérieur (ITE), la fibre de bois en panneaux rigides est la référence biosourcée : elle se pose comme un isolant synthétique, accepte les enduits de façade et régule l'humidité dans la paroi. Pour une isolation thermique par l'intérieur (ITI), la laine de chanvre en rouleaux ou en panneaux semi-rigides s'intercale facilement entre les montants d'une ossature bois ou derrière un placo. Sa perméabilité à la vapeur permet aux parois anciennes de respirer.",
          },
          {
            indicator: "Sols et dalles",
            name: "Liège expansé",
            description:
              "Le liège expansé en panneaux rigides est résistant à la compression, imputrescible et imperméable à l'eau liquide tout en restant perméable à la vapeur. Il convient aux sols sur vide sanitaire, aux dalles béton et aux planchers intermédiaires où une charge mécanique est exercée. Sa conductivité thermique est de l'ordre de 0,040 à 0,045 W/m·K. Sous chape, il résiste à l'écrasement tout en amortissant les bruits d'impact.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quand un isolant biosourcé est le bon choix"
        subtitle="Certaines situations rendent les isolants biosourcés particulièrement pertinents, au-delà de la simple préférence pour des matériaux naturels."
        signs={[
          {
            label: "Logement en bois, pans de bois ou murs anciens en pierre",
            description:
              "Les murs anciens en pierre, briques ou pans de bois ont besoin de respirer. L'utilisation d'un isolant non perméable à la vapeur (polystyrène, polyuréthane) peut créer des phénomènes de condensation interne. Les isolants biosourcés, naturellement perméables, sont beaucoup plus adaptés à ces typologies de bâti.",
            severity: "critique",
          },
          {
            label: "Chambre d'enfant ou pièce de vie rénovée",
            description:
              "Les isolants biosourcés émettent très peu ou pas de COV une fois posés. Pour une chambre, une nurserie ou une pièce fréquentée en continu, cette faible émissivité est un avantage sanitaire réel par rapport à certains isolants synthétiques et à leurs colles de pose.",
            severity: "modéré",
          },
          {
            label: "Chantier avec objectif de confort d'été",
            description:
              "La fibre de bois et la ouate de cellulose offrent un déphasage thermique de 8 à 12 heures selon l'épaisseur, ce qui ralentit la pénétration de la chaleur estivale. C'est un avantage notable en toiture par rapport à la laine de verre ou de roche à épaisseur équivalente.",
            severity: "modéré",
          },
          {
            label: "Rénovation de maison ancienne classée ou en zone protégée",
            description:
              "Dans certains cas, l'isolation par l'extérieur avec enduit est contrainte par les règles d'urbanisme. L'isolation par l'intérieur avec des matériaux perméables à la vapeur (chanvre, ouate de cellulose) est alors la solution la plus sûre pour préserver l'intégrité du bâti.",
            severity: "modéré",
          },
          {
            label: "Budget partiellement couvert par des aides",
            description:
              "MaPrimeRénov' et les Certificats d'Économies d'Énergie (CEE) s'appliquent aux travaux d'isolation sans distinction entre biosourcé et synthétique, sous conditions de faire appel à un artisan RGE. Le surcoût des biosourcés est donc partiellement absorbé par ces aides.",
            severity: "léger",
          },
          {
            label: "Objectif de bilan carbone du chantier",
            description:
              "Les isolants biosourcés stockent du carbone d'origine végétale dans la masse du bâtiment pendant toute la durée de vie du matériau. Pour un projet de rénovation avec une démarche environnementale globale, c'est un argument de bilan carbone différenciant par rapport aux isolants à base de pétrole ou de fibre de verre.",
            severity: "léger",
          },
        ]}
        footerNote="Les performances thermiques des isolants biosourcés sont évaluées selon les mêmes normes européennes que les isolants conventionnels. Vérifiez la présence d'un marquage CE et d'une Déclaration de Performances (DoP) avant toute pose."
      />

      <IssueCauses
        id="causes"
        title="Avantages et limites comparés aux isolants conventionnels"
        subtitle="Les points forts des biosourcés sont réels, mais ils s'accompagnent de contraintes pratiques à connaître avant de se décider."
        causes={[
          {
            number: "01",
            cause: "Perméabilité à la vapeur : un avantage structurant pour le bâti ancien",
            explanation:
              "La plupart des isolants biosourcés laissent migrer la vapeur d'eau à travers la paroi, ce qui évite les phénomènes de condensation interne. C'est un avantage déterminant dans les bâtiments anciens qui fonctionnent en 'paroi hygroscopique'. À l'inverse, les isolants imperméables (polystyrène, polyuréthane) peuvent piéger l'humidité et endommager la structure.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Performances thermiques équivalentes, inertie thermique supérieure",
            explanation:
              "Les conductivités thermiques des isolants biosourcés courants (0,038 à 0,045 W/m·K) sont comparables à celles de la laine de verre ou de la laine de roche. Leur avantage se manifeste surtout dans le déphasage thermique : une forte chaleur estivale met plus de temps à traverser un mur isolé en fibre de bois qu'un mur isolé en laine minérale à épaisseur équivalente.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Surcoût à l'achat, partiellement compensé par les aides",
            explanation:
              "Les isolants biosourcés coûtent en moyenne 30 à 60 % de plus que leurs équivalents synthétiques en prix matière. Ce surcoût est réduit, mais rarement annulé, par les aides disponibles. Sur le coût global d'un chantier (pose, finitions, VMC), la différence de matière reste souvent marginale.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Nécessité d'un artisan formé à leur mise en oeuvre",
            explanation:
              "La ouate de cellulose soufflée nécessite un équipement spécifique. La fibre de bois en panneaux rigides se coupe et se pose différemment du polystyrène. Tous les artisans ne sont pas également formés à ces matériaux. Vérifier l'expérience du poseur sur le matériau choisi est une étape importante.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Sensibilité à l'humidité pour certains matériaux",
            explanation:
              "La laine de mouton et la laine de chanvre peuvent se tasser ou perdre une partie de leurs propriétés si elles sont exposées à une humidité prolongée. Ils ne sont pas adaptés à des zones en contact direct avec de l'eau liquide (sol sur terre-plein sans pare-vapeur, mur contre talus humide). Le liège expansé est en revanche imputrescible.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Planifier et faire réaliser l'isolation biosourcée"
        immediateLabel="Avant les travaux"
        structuralLabel="Pendant et après"
        immediate={[
          {
            label: "Identifier le bon matériau selon le poste de travaux",
            description:
              "Combles perdus : ouate de cellulose soufflée. Rampants de toiture : fibre de bois en panneaux. Mur par l'intérieur : laine de chanvre ou ouate projetée. Mur par l'extérieur : fibre de bois rigide avec enduit. Sol sur vide sanitaire ou dalle : liège expansé. Cette correspondance simplifie le choix et évite les erreurs de mise en oeuvre.",
            effort: "Choix amont, gratuit",
          },
          {
            label: "Demander un artisan RGE avec expérience sur les biosourcés",
            description:
              "Le label RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier de MaPrimeRénov' et des CEE. Assurez-vous que l'artisan a déjà posé le matériau que vous souhaitez utiliser : demandez des références de chantiers similaires et vérifiez sa certification sur le registre officiel.",
            effort: "Consultation de devis",
          },
          {
            label: "Vérifier les Déclarations Environnementales de Produit (FDES)",
            description:
              "Les FDES (Fiches de Déclaration Environnementale et Sanitaire) des isolants biosourcés sont disponibles sur la base Inies. Elles permettent de comparer les impacts environnementaux réels de chaque produit et de s'assurer de l'absence de traitements chimiques préoccupants (sel de bore, etc. selon les produits).",
            effort: "Consultation en ligne, gratuit",
          },
          {
            label: "Anticiper les délais d'approvisionnement",
            description:
              "Les isolants biosourcés peuvent nécessiter des délais de commande plus longs que les laines minérales disponibles en grande surface. Prévoyez 2 à 4 semaines supplémentaires dans le planning du chantier pour l'approvisionnement, surtout pour la ouate en vrac ou les panneaux de fibre de bois en grande épaisseur.",
            effort: "Organisation du chantier",
          },
        ]}
        structural={[
          {
            label: "S'assurer de la continuité de l'isolation",
            description:
              "La performance d'un isolant biosourcé, comme de tout isolant, dépend de la continuité de la couche posée. Les ponts thermiques aux jonctions (planchers, refends, menuiseries) réduisent significativement l'efficacité globale. Un contrôle par thermographie après travaux peut confirmer l'absence de défaut.",
            effort: "Thermographie : 200 à 500 €",
          },
          {
            label: "Préserver la gestion de la vapeur d'eau dans la paroi",
            description:
              "Avec un isolant perméable à la vapeur, la paroi doit pouvoir s'assécher vers l'intérieur ou l'extérieur. Évitez d'associer un isolant biosourcé à un pare-vapeur mal positionné ou à un revêtement totalement imperméable côté intérieur (carrelage sur les quatre murs d'une chambre, par exemple). Consultez un professionnel si vous avez un doute sur la gestion des flux de vapeur.",
            effort: "Conseil professionnel",
          },
          {
            label: "Constituer le dossier d'aides avant le début des travaux",
            description:
              "MaPrimeRénov' et les CEE nécessitent que le dossier soit monté avant le début des travaux : ne commencez aucune intervention avant d'avoir reçu l'accord de financement. L'accompagnateur Rénov' (Mon Accompagnateur Rénov', dispositif public) peut vous aider à constituer ce dossier gratuitement selon votre situation.",
            effort: "Démarche administrative",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes avec les isolants biosourcés"
        errors={[
          {
            label: "Utiliser un isolant biosourcé sans vérifier sa compatibilité avec la paroi",
            explanation:
              "Un isolant perméable à la vapeur posé sur un mur porteur humide sans traitement préalable de la source d'humidité peut absorber l'humidité en excès et se dégrader. La perméabilité à la vapeur est un avantage dans une paroi saine, pas un remède à un problème d'humidité existant.",
          },
          {
            label: "Confondre isolant biosourcé et isolant naturel non certifié",
            explanation:
              "Tous les produits présentés comme 'naturels' ou 'écologiques' ne disposent pas d'une certification de performance thermique ni d'une évaluation sanitaire fiable. Un isolant biosourcé sérieux possède un marquage CE, une Déclaration de Performances et idéalement une FDES. Méfiez-vous des produits sans documentation technique.",
          },
          {
            label: "Négliger le traitement contre les nuisibles pour la ouate de cellulose",
            explanation:
              "La ouate de cellulose de qualité est traitée avec du sel de bore pour la résistance au feu et aux insectes. Vérifiez que le produit dispose d'un Avis Technique ou d'une Évaluation Technique Européenne (ETE) incluant ce traitement. Sans cette certification, la garantie de performance dans le temps est incertaine.",
          },
          {
            label: "Sous-estimer l'épaisseur nécessaire",
            explanation:
              "Les biosourcés ont des conductivités thermiques légèrement supérieures à certains isolants synthétiques à très haute performance (polyuréthane, polyisocyanurate). Pour atteindre une résistance thermique R équivalente, une épaisseur légèrement supérieure peut être nécessaire. Vérifiez le calcul avec l'artisan avant de figer les détails constructifs.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les isolants biosourcés"
        items={[
          {
            question: "Les isolants biosourcés sont-ils aussi performants que la laine de verre ?",
            answer:
              "En termes de conductivité thermique, oui : la ouate de cellulose, la laine de chanvre et la fibre de bois affichent des valeurs de 0,038 à 0,042 W/m·K, similaires à la laine de verre standard (0,032 à 0,044 W/m·K selon les produits). Leur avantage se manifeste davantage dans la gestion de la vapeur d'eau, l'inertie thermique et le confort d'été, pas nécessairement dans la résistance thermique à épaisseur égale.",
          },
          {
            question: "Les isolants biosourcés sont-ils éligibles à MaPrimeRénov' ?",
            answer:
              "Oui, les travaux d'isolation utilisant des isolants biosourcés sont éligibles à MaPrimeRénov' au même titre que les isolants conventionnels, sous conditions : l'artisan doit être RGE, les travaux doivent concerner un poste éligible (combles, murs, planchers), et votre situation personnelle doit répondre aux critères de ressources en vigueur. Les montants varient selon le poste, le profil du ménage et l'année des travaux.",
          },
          {
            question: "La ouate de cellulose est-elle dangereuse pour la santé ?",
            answer:
              "Non, la ouate de cellulose est fabriquée à partir de papier recyclé et traitée avec du sel de bore. Elle ne contient pas de fibres minérales et n'est pas classée comme substance dangereuse. Pendant la pose en soufflage, le port d'un masque anti-poussière est recommandé pour l'artisan. Une fois posée et recouverte, elle ne présente aucun risque pour les occupants.",
          },
          {
            question: "Peut-on poser soi-même un isolant biosourcé ?",
            answer:
              "La pose de panneaux de laine de chanvre ou de liège expansé est techniquement accessible à un bricoleur expérimenté. En revanche, la ouate de cellulose soufflée nécessite un équipement professionnel spécifique et ne se réalise pas en DIY dans de bonnes conditions. Dans tous les cas, si vous souhaitez bénéficier de MaPrimeRénov' ou des CEE, l'intervention d'un artisan RGE est obligatoire.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Isolation et ventilation : les planifier ensemble",
            description:
              "Poser un isolant biosourcé sans mettre à jour la ventilation peut créer des problèmes d'humidité. Comprendre le lien entre étanchéité et renouvellement d'air.",
            href: "/renovation-saine/isolation-ventilation/",
          },
          {
            tag: "Matériaux sains",
            title: "Isolants biosourcés : comprendre les matériaux",
            description:
              "Une présentation approfondie des isolants naturels : composition, propriétés, comparatifs et points de vigilance pour bien choisir.",
            href: "/materiaux-sains/isolants-biosources/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover plus sainement",
            description:
              "L'ordre des travaux, les matériaux à privilégier et les délais de dégazage pour organiser une rénovation qui préserve la qualité de l'air.",
            href: "/renovation-saine/renover-plus-sainement/",
          },
        ]}
      />
    </>
  );
}

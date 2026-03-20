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
  title: "Isolants biosourcés : chanvre, ouate, liège, laine de mouton",
  description:
    "Laine de chanvre, ouate de cellulose, liège, laine de bois, laine de mouton : comprendre les isolants biosourcés, leurs performances thermiques, leurs limites et comment les comparer aux isolants conventionnels.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/isolants-biosources/",
  },
  openGraph: {
    title: "Isolants biosourcés : chanvre, ouate, liège, laine de mouton",
    description:
      "Laine de chanvre, ouate de cellulose, liège, laine de bois, laine de mouton : comprendre les isolants biosourcés, leurs performances thermiques, leurs limites et comment les comparer aux isolants conventionnels.",
    url: "https://www.maisonbionat.fr/materiaux-sains/isolants-biosources/",
  },
};

export default function IsolantsSourcesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Isolants biosourcés : chanvre, ouate, liège, laine de mouton", href: "https://www.maisonbionat.fr/materiaux-sains/isolants-biosources/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Matériaux sains"
        parentHref="/materiaux-sains/"
        tag="Comprendre"
        title="Isolants biosourcés : performances, limites et comment choisir"
        quickAnswer="Les isolants biosourcés (laine de chanvre, ouate de cellulose, liège, laine de bois, laine de mouton) offrent des performances thermiques comparables aux isolants minéraux classiques, avec une conductivité thermique (lambda) de l'ordre de 0,035 à 0,042 W/m.K. Leur principal avantage réside dans leurs propriétés hygroscopiques : ils absorbent et restituent l'humidité sans se dégrader, ce qui améliore le confort et limite les risques de condensation. Ils n'émettent pas de fibres minérales et contribuent positivement au bilan carbone. Leur coût est généralement supérieur de 10 à 30 % aux isolants conventionnels."
        stats={[
          {
            value: "0,035–0,042",
            label: "W/m.K : conductivité thermique des principaux isolants biosourcés, comparable à la laine de verre",
          },
          {
            value: "15 à 40 €",
            label: "par m², coût moyen des isolants biosourcés selon le matériau et l'épaisseur",
          },
          {
            value: "ACERMI",
            label: "certification française de performance thermique et mécanique, disponible pour la plupart des isolants biosourcés",
          },
          {
            value: "FDES",
            label: "Fiche de Déclaration Environnementale et Sanitaire : document de référence pour comparer l'impact environnemental",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les principaux types" },
          { id: "signes", label: "Quand les utiliser" },
          { id: "causes", label: "Avantages et limites" },
          { id: "actions", label: "Choisir et mettre en oeuvre" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les principaux isolants biosourcés et leurs caractéristiques."
        description="Un isolant est dit biosourcé lorsqu'il est fabriqué à partir de matières premières d'origine biologique : végétale, animale ou issue du recyclage de matières organiques. Voici les trois familles principales disponibles sur le marché français."
        variants={[
          {
            indicator: "Origine végétale",
            name: "Chanvre, laine de bois, liège, lin, coton",
            description:
              "La laine de chanvre (lambda : 0,038 à 0,040 W/m.K) et la laine de bois (lambda : 0,038 à 0,052 W/m.K selon la densité) sont les plus courantes. Le liège expansé (lambda : 0,037 à 0,040 W/m.K) est particulièrement adapté en isolation par l'extérieur. Ces matériaux sont excellents pour la régulation hygrométrique et le confort d'été grâce à leur inertie thermique.",
          },
          {
            indicator: "Origine animale",
            name: "Laine de mouton, plumes",
            description:
              "La laine de mouton (lambda : 0,035 à 0,042 W/m.K) a une capacité naturelle à absorber l'humidité sans perte significative de performance thermique. Elle est légère et facile à mettre en oeuvre. Attention : elle nécessite un traitement anti-mites et doit être évitée dans les endroits très humides car elle peut retenir l'eau de façon excessive.",
          },
          {
            indicator: "Matières recyclées",
            name: "Ouate de cellulose",
            description:
              "La ouate de cellulose est fabriquée à partir de papier journal recyclé (80 à 85 % de papier). Son lambda est de l'ordre de 0,038 à 0,040 W/m.K. C'est probablement le meilleur rapport performance/prix/impact environnemental parmi les biosourcés. Elle est disponible en vrac (insufflation) ou en panneaux. Bonne résistance hygrique et bonne inertie thermique.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Dans quels contextes les isolants biosourcés sont-ils particulièrement adaptés."
        subtitle="Les isolants biosourcés ne sont pas universellement supérieurs aux isolants minéraux : leur pertinence dépend du contexte de mise en oeuvre."
        signs={[
          {
            label: "Rénovation d'une maison ancienne à murs respirants",
            description:
              "Dans les constructions anciennes en pierre, brique ou pisé, les murs sont conçus pour laisser passer la vapeur d'eau. Un isolant hygroscopique biosourcé respecte ce fonctionnement. Un isolant minéral avec une membrane vapeur peut créer des désordres (condensation, moisissures) dans ces murs.",
            severity: "critique",
          },
          {
            label: "Chambre d'enfant ou chambre à coucher principale",
            description:
              "Les isolants biosourcés n'émettent pas de fibres minérales et ne contiennent pas de liant synthétique. Dans une pièce de sommeil, leur absence d'émissions chimiques et leur caractère neutre pour la qualité de l'air intérieur est un avantage réel.",
            severity: "modéré",
          },
          {
            label: "Projet de construction à faible impact environnemental",
            description:
              "Les FDES des isolants biosourcés montrent généralement un impact carbone plus favorable que les laines minérales : la matière première est renouvelable et peut stocker du carbone. Pour un projet BBC ou Passivhaus avec ambition écologique, les biosourcés sont cohérents avec la démarche globale.",
            severity: "modéré",
          },
          {
            label: "Isolation des combles perdus par soufflage",
            description:
              "La ouate de cellulose en vrac est particulièrement adaptée à l'isolation par insufflation dans les combles perdus. Elle comble facilement les espaces irréguliers, se tasse peu dans le temps et offre une excellente performance pour un coût raisonnable (15 à 25 €/m² pour une épaisseur de 30 cm).",
            severity: "léger",
          },
          {
            label: "Isolation acoustique d'une cloison ou d'un plancher",
            description:
              "Les isolants biosourcés, notamment la laine de bois dense et la ouate de cellulose, ont de bonnes propriétés d'atténuation acoustique grâce à leur densité plus élevée que les laines minérales légères. Pour les planchers entre deux niveaux, la laine de bois dense est une option pertinente.",
            severity: "léger",
          },
          {
            label: "Construction neuve BBC ou ossature bois",
            description:
              "La ouate de cellulose insufflée et la laine de chanvre en panneaux sont fréquemment utilisées dans les maisons à ossature bois. Elles sont compatibles avec la structure bois et participent à la régulation hygrométrique de l'enveloppe. Les avis techniques (ATec) et ACERMI nécessaires aux projets réglementaires existent pour les principaux produits.",
            severity: "léger",
          },
        ]}
        footerNote="La certification ACERMI garantit les performances thermiques et mécaniques d'un isolant indépendamment de son origine biosourcée ou non. Vérifiez sa présence avant tout projet soumis à réglementation thermique."
      />

      <IssueCauses
        id="causes"
        title="Avantages et limites des isolants biosourcés."
        subtitle="Une évaluation honnête des points forts et des contraintes réelles de ces matériaux."
        causes={[
          {
            number: "01",
            cause: "Régulation hygrométrique supérieure aux isolants minéraux",
            explanation:
              "Les fibres végétales et animales peuvent absorber et restituer la vapeur d'eau sans perte significative de performance thermique (capacité hygroscopique). Cette propriété améliore le confort intérieur en réduisant les variations d'humidité relative. Elle est particulièrement utile dans les murs à forte variation hygrométrique saisonnière.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Meilleure inertie thermique pour le confort d'été",
            explanation:
              "Les isolants biosourcés ont généralement une capacité thermique massique plus élevée que les laines minérales légères. Cela signifie qu'ils absorbent et restituent la chaleur plus lentement, ce qui améliore le confort en été en retardant la pénétration de la chaleur. La déphasage thermique est un critère souvent supérieur pour les biosourcés.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Coût plus élevé que les isolants conventionnels",
            explanation:
              "Les isolants biosourcés coûtent généralement 10 à 30 % de plus que les laines minérales pour une résistance thermique équivalente. La ouate de cellulose est la plus accessible (15 à 25 €/m²). Le liège expansé est le plus onéreux (30 à 50 €/m² selon l'épaisseur). Un surcoût à mettre en regard de la durabilité et des avantages sanitaires.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Traitement nécessaire contre les nuisibles pour certains matériaux",
            explanation:
              "La laine de mouton nécessite un traitement anti-mites. La ouate de cellulose contient des sels de bore comme ignifugeant et fongicide naturel. Le chanvre et la laine de bois sont naturellement résistants aux nuisibles mais peuvent nécessiter des traitements dans des contextes très humides. Vérifiez la composition des traitements utilisés.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Disponibilité et délais plus longs selon les régions",
            explanation:
              "Tous les isolants biosourcés ne sont pas également disponibles dans toutes les régions françaises. La ouate de cellulose et la laine de chanvre sont bien distribuées. Le liège en panneaux épais et certaines laines de mouton peuvent nécessiter des commandes spécifiques avec des délais. Anticipez la logistique lors de la planification de vos travaux.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Comment choisir et mettre en oeuvre un isolant biosourcé."
        immediate={[
          {
            label: "Définir le contexte de mise en oeuvre avant de choisir",
            description:
              "Combles perdus, murs par l'intérieur, plancher, toiture sarking : chaque configuration a ses contraintes. La ouate de cellulose en vrac convient aux combles perdus. Les panneaux de laine de bois ou de chanvre conviennent aux murs et aux rampants. Le liège est adapté à l'isolation par l'extérieur ou comme sous-couche de sol.",
            effort: "Étude préalable",
          },
          {
            label: "Vérifier la certification ACERMI du produit",
            description:
              "La certification ACERMI garantit les performances thermiques (lambda certifié) et mécaniques (comportement sous charge) du produit dans ses conditions de mise en oeuvre. Pour tout projet soumis à la réglementation thermique (RE2020, rénovation avec aide), elle est généralement requise.",
            effort: "Vérification à l'achat",
          },
          {
            label: "Consulter la FDES pour comparer les impacts environnementaux",
            description:
              "La Fiche de Déclaration Environnementale et Sanitaire (FDES) de chaque produit est accessible sur la base INIES. Elle permet de comparer objectivement le bilan carbone, la consommation d'eau et d'énergie grises entre différents isolants. C'est l'outil de référence pour une approche sérieuse.",
            effort: "Gratuit, consultation en ligne (inies.fr)",
          },
          {
            label: "Anticiper les détails de mise en oeuvre avec un professionnel expérimenté",
            description:
              "La pose d'isolants biosourcés nécessite une attention particulière aux points singuliers (jonctions, ponts thermiques, pare-vapeur ou frein-vapeur adapté). Un professionnel non expérimenté avec ces matériaux peut faire des erreurs de mise en oeuvre qui réduisent les performances ou créent des pathologies (condensation).",
            effort: "Choix du professionnel",
          },
        ]}
        structural={[
          {
            label: "Opter pour la ouate de cellulose insufflée pour les combles perdus",
            description:
              "Pour l'isolation des combles perdus, la ouate de cellulose insufflée offre le meilleur rapport performance/coût/impact parmi les biosourcés. Elle remplit parfaitement les zones irrégulières, se tasse peu dans le temps et peut être complétée si nécessaire. Coût indicatif : 15 à 25 €/m² pour 30 cm d'épaisseur.",
            effort: "15 à 25 €/m² pose incluse",
          },
          {
            label: "Utiliser la laine de chanvre ou de bois pour les murs en ossature",
            description:
              "Dans une construction à ossature bois ou lors d'une isolation par l'intérieur, les panneaux semi-rigides de chanvre ou de laine de bois s'insèrent entre les montants et contribuent à la régulation hygrométrique du mur. Associés à un frein-vapeur hygrovariable, ils permettent une enveloppe performante et respirante.",
            effort: "20 à 35 €/m² pour le matériau seul",
          },
          {
            label: "Choisir le liège expansé pour l'isolation par l'extérieur",
            description:
              "Le liège expansé en panneaux est l'un des rares isolants biosourcés adaptés à l'isolation thermique par l'extérieur (ITE). Imperméable à l'eau, stable dimensionnellement, imputrescible, il ne nécessite aucun traitement. Son coût est plus élevé (30 à 50 €/m²) mais sa durabilité est exceptionnelle.",
            effort: "30 à 50 €/m² pour le matériau seul",
          },
          {
            label: "Demander les aides disponibles, y compris pour les biosourcés",
            description:
              "Les isolants biosourcés certifiés ACERMI sont éligibles aux mêmes aides que les isolants conventionnels (MaPrimeRénov', éco-PTZ, CEE). Certaines collectivités territoriales accordent des bonifications spécifiques pour les matériaux biosourcés. Renseignez-vous avant de démarrer les travaux.",
            effort: "Démarches administratives",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les idées reçues sur les isolants biosourcés."
        errors={[
          {
            label: "\"Biosourcé veut dire sans traitement chimique\"",
            explanation:
              "La ouate de cellulose contient des sels de bore (ignifugeant et fongicide). Certaines laines de mouton reçoivent des traitements anti-mites. Ces traitements sont nécessaires pour garantir la durabilité et la sécurité des produits. Ils ne remettent pas en cause le caractère biosourcé mais il est utile de le savoir.",
          },
          {
            label: "\"Les isolants biosourcés sont toujours plus performants thermiquement\"",
            explanation:
              "Les performances thermiques des biosourcés sont globalement comparables à celles des laines minérales, pas supérieures. Il faut parfois 5 à 10 % d'épaisseur supplémentaire pour atteindre la même résistance thermique. Leur avantage principal est le confort d'été et la régulation hygrométrique, pas nécessairement le lambda.",
          },
          {
            label: "\"Tout professionnel peut poser des isolants biosourcés\"",
            explanation:
              "La mise en oeuvre de la ouate de cellulose insufflée nécessite un équipement spécifique et une formation. La pose de frein-vapeur hygrovariable adapté aux biosourcés requiert une compréhension des transferts de vapeur. Choisissez un professionnel qui a des références concrètes avec ces matériaux.",
          },
          {
            label: "\"Un isolant biosourcé ne nécessite pas de pare-vapeur\"",
            explanation:
              "Cette idée est partiellement vraie pour certaines configurations (murs très respirants avec ouate en vrac), mais fausse dans d'autres. Dans la majorité des constructions modernes, un frein-vapeur hygrovariable est recommandé même avec des isolants biosourcés pour contrôler les transferts d'humidité et éviter les condensations dans la paroi.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les isolants biosourcés"
        items={[
          {
            question: "Quelle est la différence entre isolant biosourcé et isolant naturel ?",
            answer:
              "Les deux termes sont souvent utilisés de façon interchangeable. 'Biosourcé' est la terminologie réglementaire française (définie par le label 'bâtiment biosourcé' et l'arrêté du 19 décembre 2012), qui désigne tout matériau issu de la biomasse (végétale, animale ou recyclée organique). 'Naturel' est une désignation commerciale sans définition réglementaire précise. La laine minérale (verre ou roche) n'est ni biosourcée ni naturelle au sens biologique, bien qu'elle soit minérale.",
          },
          {
            question: "Les isolants biosourcés sont-ils éligibles aux aides à la rénovation ?",
            answer:
              "Oui, à condition qu'ils disposent d'une certification ACERMI (ou équivalent) attestant leurs performances thermiques. Les aides (MaPrimeRénov', éco-PTZ, CEE) ne distinguent pas les isolants selon leur origine biosourcée ou non : c'est la résistance thermique atteinte et la qualification de l'entreprise qui comptent. Renseignez-vous auprès d'un conseiller France Rénov' pour votre situation spécifique.",
          },
          {
            question: "La ouate de cellulose est-elle adaptée à toutes les configurations ?",
            answer:
              "La ouate de cellulose en vrac insufflée est idéale pour les combles perdus horizontaux et certains murs creux. Elle n'est pas adaptée aux applications inclinées sans coffrage (rampants de toiture, parois verticales sans caisson). Dans ces configurations, des panneaux semi-rigides de laine de bois ou de chanvre sont plus appropriés. Vérifiez la compatibilité avec votre configuration avant de commander.",
          },
          {
            question: "Comment comparer objectivement deux isolants biosourcés ?",
            answer:
              "Trois critères techniques sont comparables : le lambda certifié ACERMI (plus il est bas, plus l'isolant est performant), la capacité thermique massique (plus elle est haute, meilleur le confort d'été) et le mu (résistance à la diffusion de vapeur : un mu bas est préférable pour les murs respirants). La FDES permet de comparer l'impact environnemental. Le coût final dépend de l'épaisseur nécessaire pour atteindre la résistance thermique cible (R en m².K/W).",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Matériaux plus naturels pour la construction",
            description:
              "Les isolants biosourcés s'inscrivent dans une approche plus large du choix des matériaux naturels. Comprendre les critères et les compromis.",
            href: "/materiaux-sains/materiaux-plus-naturels/",
          },
          {
            tag: "Rénovation saine",
            title: "Isolants biosourcés en rénovation",
            description:
              "Intégrer des isolants biosourcés dans un projet de rénovation : contraintes techniques, aides disponibles et priorités.",
            href: "/renovation-saine/isolants-biosources/",
          },
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions : le guide général",
            description:
              "Isolation, peintures, revêtements : comprendre l'étiquetage et les émissions de l'ensemble des matériaux d'un logement.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
        ]}
      />
    </>
  );
}

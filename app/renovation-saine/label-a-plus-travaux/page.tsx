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
  title: "Label A+ lors des travaux : comprendre et appliquer l'étiquetage COV",
  description:
    "Le label A+ est la classe d'émission la plus faible pour les matériaux de construction. Comprendre ce qu'il mesure, ce qu'il ne couvre pas, et comment l'utiliser concrètement dans un chantier de rénovation.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/label-a-plus-travaux/",
  },
  openGraph: {
    title: "Label A+ lors des travaux : comprendre et appliquer l'étiquetage COV",
    description:
      "Le label A+ est la classe d'émission la plus faible pour les matériaux de construction. Comprendre ce qu'il mesure, ce qu'il ne couvre pas, et comment l'utiliser concrètement dans un chantier de rénovation.",
    url: "https://www.maisonbionat.fr/renovation-saine/label-a-plus-travaux/",
  },
};

export default function LabelAPlusTravauxPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Label A+ lors des travaux : comprendre et appliquer l'étiquetage COV", href: "https://www.maisonbionat.fr/renovation-saine/label-a-plus-travaux/" },
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
        tag="Comprendre"
        title="Le label A+ dans les travaux : ce qu'il garantit et comment l'utiliser"
        quickAnswer="Le label A+ est la classe d'émission la plus favorable du système français d'étiquetage des matériaux de construction et de décoration. Il atteste que le produit émet peu de composés organiques volatils (COV) dans l'air intérieur, selon un test standardisé en chambre. Obligatoire depuis 2013 sur de nombreux produits vendus en France, il est un repère utile mais pas suffisant seul : il faut aussi aérer correctement après les travaux et associer le bon produit au bon usage."
        stats={[
          { value: "2013", label: "année d'application obligatoire de l'étiquetage pour les produits de construction et de décoration vendus en France (décret 2011-321)" },
          { value: "4 classes", label: "A+, A, B, C : de la plus faible à la plus forte émission de COV" },
          { value: "11 substances", label: "COV réglementés dans ce système d'étiquetage, dont le formaldéhyde, l'acétaldéhyde, le toluène et le benzène" },
          { value: "28 jours", label: "durée du test en chambre pour mesurer les émissions et attribuer la classe" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les quatre classes" },
          { id: "signes", label: "Quand vérifier le A+" },
          { id: "causes", label: "Limites du label" },
          { id: "actions", label: "Appliquer en chantier" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les quatre classes du système d'étiquetage COV"
        description="Le décret 2011-321, applicable depuis septembre 2013, impose un étiquetage des émissions de COV sur les produits de construction et de décoration vendus en France."
        variants={[
          {
            indicator: "Classe A+ : la meilleure",
            name: "Émissions très faibles",
            description:
              "La classe A+ correspond aux produits dont les émissions de COV sont les plus faibles après 28 jours de test en chambre d'essai. C'est le niveau recommandé pour toutes les pièces de vie, et particulièrement pour les chambres d'enfants, les nurseries et les espaces peu ventilés. Les seuils sont définis pour chacune des 11 substances réglementées (formaldéhyde, acétaldéhyde, toluène, xylènes, benzène, TVOC, etc.).",
          },
          {
            indicator: "Classes A et B",
            name: "Émissions modérées à significatives",
            description:
              "Les classes A et B correspondent à des niveaux d'émission croissants. Un produit classé A émet plus qu'un A+ mais reste dans une zone acceptable pour des espaces bien ventilés. Un produit classé B émet davantage et devrait être évité dans les chambres, les pièces de vie et les espaces confinés. Pour les travaux de rénovation résidentielle, la classe A+ est le standard minimum recommandé.",
          },
          {
            indicator: "Classe C : à éviter en intérieur",
            name: "Émissions élevées",
            description:
              "La classe C est la moins favorable. Ces produits émettent des quantités significatives de COV et sont déconseillés pour tout usage en intérieur résidentiel. Leur emploi dans des espaces non ventilés, des chambres ou des logements occupés pendant et après les travaux présente un risque sanitaire réel. L'existence légale de cette classe ne signifie pas qu'elle est recommandée.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quand vérifier le label A+ avant d'acheter"
        subtitle="Certains contextes rendent la vérification de la classe d'émission particulièrement importante, au-delà de la précaution générale."
        signs={[
          {
            label: "Chambre d'enfant ou de bébé",
            description:
              "Les enfants passent plus de temps dans leur chambre que les adultes, respirent proportionnellement plus d'air par rapport à leur poids corporel, et leur organisme est plus sensible aux COV. Pour toute rénovation d'une chambre d'enfant, la classe A+ est indispensable sur la peinture, la colle de pose, le revêtement de sol et le primaire.",
            severity: "critique",
          },
          {
            label: "Pièce peu ventilée ou sans fenêtre ouvrante",
            description:
              "Dans une pièce qui ne peut pas être aérée normalement (cuisine sans ouvrant, bureau intérieur, couloir), les COV émis par les matériaux s'accumulent plus longtemps. L'étiquetage A+ compense partiellement ce défaut de ventilation, sans toutefois le remplacer.",
            severity: "critique",
          },
          {
            label: "Occupation rapide après travaux",
            description:
              "Si la pièce doit être réoccupée rapidement après les travaux (location, emménagement contraint), l'utilisation de produits A+ réduit les pics d'émission initiaux et les risques d'exposition. Cela ne dispense pas d'aérer intensément, mais limite les concentrations en cas de délai court.",
            severity: "modéré",
          },
          {
            label: "Pose de plusieurs produits successifs",
            description:
              "Un chantier de rénovation superpose souvent plusieurs produits : primaire, peinture, colle, revêtement. L'effet cumulatif des émissions de chaque couche s'additionne dans l'air de la pièce. Vérifier la classe de chaque produit individuellement, et pas seulement du produit de finition visible, est important.",
            severity: "modéré",
          },
          {
            label: "Panneaux de bois et agglomérés",
            description:
              "Les panneaux de particules, MDF et contreplaqués peuvent contenir des colles à base de formaldéhyde. L'étiquetage A+ s'applique aussi à ces produits. Pour les meubles intégrés, cloisons légères ou revêtements muraux en bois, vérifiez la classe d'émission avant l'achat.",
            severity: "modéré",
          },
          {
            label: "Produits sans étiquetage visible",
            description:
              "En France, l'étiquetage est obligatoire sur les produits concernés vendus depuis 2013. Un produit sans étiquette visible est soit hors du périmètre réglementaire, soit mal étiqueté. Dans ce deuxième cas, abstenez-vous de l'utiliser dans un espace résidentiel ou demandez la fiche technique au fabricant.",
            severity: "léger",
          },
        ]}
        footerNote="L'étiquetage s'applique aux produits de construction et de décoration au sens du décret 2011-321 : peintures, vernis, colles, enduits, revêtements de sol, de mur et de plafond, panneaux à base de bois, produits d'étanchéité. Les meubles et textiles relèvent d'autres réglementations."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi le label A+ est pertinent mais pas suffisant seul"
        subtitle="Comprendre les limites du système pour ne pas lui faire dire plus qu'il ne garantit."
        causes={[
          {
            number: "01",
            cause: "Le test mesure les émissions après 28 jours, pas dans les premières heures",
            explanation:
              "Le test en chambre qui permet d'attribuer la classe est mesuré à 28 jours après application. Or, les émissions de COV sont maximales dans les premières 24 à 72 heures. Un produit A+ peut tout à fait émettre des quantités importantes de COV en phase initiale, même si ses émissions résiduelle à 28 jours sont faibles. Cela justifie d'aérer intensément même avec des produits A+.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "L'effet cumulatif de plusieurs produits A+ n'est pas mesuré",
            explanation:
              "Le label est attribué produit par produit dans des conditions standardisées. Lorsque plusieurs produits A+ sont posés dans la même pièce, les émissions de chacun s'additionnent dans l'air réel. Aucun test ne mesure cet effet cumulatif. Dans une rénovation complète, la charge totale en COV peut être significative même si chaque produit est A+.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le label ne couvre pas tous les produits utilisés sur un chantier",
            explanation:
              "Certains produits utilisés en rénovation ne sont pas soumis à l'étiquetage : produits de traitement du bois, antirouilles, produits d'entretien du chantier, certains mastics et mousses expansives. Ces produits peuvent être fortement émissifs sans que rien ne l'indique sur l'emballage. Ils méritent une attention particulière.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La classe attribuée dépend des conditions de test, pas des conditions réelles",
            explanation:
              "Le test est réalisé dans une chambre à 23°C avec un taux de renouvellement d'air et une surface de matériau standardisés. Dans la réalité, les conditions varient : une pièce plus chaude favorise le dégazage, une pièce moins ventilée concentre les émissions. Le A+ est un repère fiable dans les conditions standard, pas une garantie absolue dans tous les contextes.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Appliquer le label A+ dans un chantier de rénovation"
        immediateLabel="Avant les travaux"
        structuralLabel="Pendant et après"
        immediate={[
          {
            label: "Lister tous les produits de finition et vérifier leur classe",
            description:
              "Avant d'acheter, dressez la liste de tous les produits qui seront appliqués dans la pièce : sous-couche, peinture, colle de pose (carrelage, parquet, papier peint), primaire d'accrochage, enduit de rebouchage, mastic de finition. Vérifiez la classe d'émission de chacun, idéalement A+. Cette vérification est simple : la classe est affichée sur l'emballage.",
            effort: "Gratuit, vérification d'étiquettes",
          },
          {
            label: "Demander la liste des produits A+ à l'artisan avant le début des travaux",
            description:
              "Si vous faites appel à un artisan, demandez-lui de vous transmettre les références des produits qu'il prévoit d'utiliser avant le démarrage. Vérifiez leur classe. Faites mentionner l'obligation d'utiliser des produits A+ dans le devis signé si votre chantier le justifie (chambre d'enfant, logement occupé pendant les travaux).",
            effort: "Demande écrite à l'artisan",
          },
          {
            label: "Privilégier les peintures à base d'eau et les colles sans solvant",
            description:
              "Les peintures à base d'eau sont plus souvent A+ que les peintures à solvant organique. Les colles sans solvant (colles vinyliques, colles en dispersion aqueuse) sont généralement moins émissives que les colles à base de résines solvantées. Ce choix réduit les émissions initiales, celles qui sont les plus intenses.",
            effort: "Choix à l'achat",
          },
          {
            label: "Consulter la base de données des produits certifiés",
            description:
              "L'AFSSET (aujourd'hui intégrée à l'ANSES) a publié les critères réglementaires, et les fabricants font certifier leurs produits par des organismes accrédités. Pour les grandes marques, les fiches techniques disponibles sur les sites fabricants indiquent la classe d'émission avec le certificat associé.",
            effort: "Consultation en ligne",
          },
        ]}
        structural={[
          {
            label: "Aérer intensément pendant et après l'application, même avec des produits A+",
            description:
              "Quelle que soit la classe des produits utilisés, les émissions sont maximales dans les premières heures et les premiers jours après application. Fenêtres ouvertes pendant les travaux, puis ventilation intensive pendant au moins 48 à 72 heures, et dans l'idéal 1 à 2 semaines pour une pièce complètement rénovée.",
            effort: "Gratuit",
          },
          {
            label: "Ne pas réoccuper une chambre d'enfant sans période de dégazage",
            description:
              "Même avec des produits A+, une chambre fraîchement rénovée doit être aérée plusieurs jours avant d'être occupée la nuit par un enfant. La chaleur dégagée par le corps pendant le sommeil et la position allongée (proche des matériaux de sol) augmentent l'exposition. Une semaine de ventilation intensive est un minimum raisonnable.",
            effort: "Attente et aération",
          },
          {
            label: "Conserver les étiquettes et emballages des produits utilisés",
            description:
              "En cas de question ultérieure sur les matériaux posés, avoir conservé les étiquettes, boîtes et fiches techniques vous permet de vérifier les produits réellement utilisés. Pour des travaux réalisés par un artisan, demandez les bons de livraison ou les emballages en fin de chantier.",
            effort: "Archivage",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes avec le label A+"
        errors={[
          {
            label: "Croire que A+ signifie 'sans COV'",
            explanation:
              "Le label A+ ne signifie pas l'absence de COV, mais des émissions mesurées sous un seuil défini. Un produit A+ peut contenir et émettre des COV dans les premières heures après application. La notion de 'zéro COV' n'existe pas en pratique pour les produits de finition courants. L'aération reste indispensable.",
          },
          {
            label: "Vérifier uniquement la peinture en oubliant la colle",
            explanation:
              "La colle de pose d'un parquet, d'un carrelage ou d'un revêtement mural peut être aussi, voire plus émissive que la peinture. Ne vérifier que les produits visibles en ignorant les colles, primaires et mastics de sous-couche laisse passer des sources d'émission importantes.",
          },
          {
            label: "Utiliser des produits A+ sans aérer",
            explanation:
              "Le label A+ ne remplace pas la ventilation. Des études montrent que des pièces fraîchement peintes avec des produits A+ peuvent afficher des concentrations de COV 3 à 5 fois supérieures à la normale pendant les premières 72 heures. L'aération est le seul moyen efficace d'évacuer ces émissions initiales.",
          },
          {
            label: "Acheter des produits étiquetés A+ d'un fabricant inconnu sans vérification",
            explanation:
              "L'étiquetage repose sur des tests réalisés par des organismes accrédités, mais l'auto-déclaration existe aussi pour certains produits. Pour les produits d'une marque peu connue, vérifiez que la classe est adossée à un certificat d'un laboratoire accrédité, pas seulement à une affirmation de l'emballage.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le label A+"
        items={[
          {
            question: "Le label A+ est-il obligatoire sur tous les produits de peinture vendus en France ?",
            answer:
              "L'étiquetage des émissions de COV est obligatoire depuis septembre 2013 pour les produits de construction et de décoration relevant du décret 2011-321 vendus en France. Cela inclut les peintures, vernis, enduits, revêtements de sol et de mur, colles et mastics. Le produit doit afficher sa classe (A+, A, B ou C) sur l'emballage. L'absence d'étiquette sur un produit concerné est une non-conformité.",
          },
          {
            question: "Quelle est la différence entre un produit A+ et un produit 'naturel' ou 'écologique' ?",
            answer:
              "A+ mesure les émissions de COV d'un produit fini selon un protocole standardisé. Un produit naturel ou écologique peut être A+ ou non : ce ne sont pas des catégories équivalentes. Un produit naturel peut contenir des terpènes (huiles essentielles, résines) qui sont des COV naturels et peuvent émettre en quantité significative. Inversement, un produit synthétique bien formulé peut être A+. Les deux critères sont complémentaires, pas interchangeables.",
          },
          {
            question: "Le formaldéhyde est-il couvert par le label A+ ?",
            answer:
              "Oui. Le formaldéhyde est l'une des 11 substances réglementées dans le système d'étiquetage français. Un produit A+ doit respecter un seuil d'émission de formaldéhyde de 10 µg/m³ en conditions de test standardisées, ce qui correspond à la valeur guide de l'ANSES pour le formaldéhyde en air intérieur (usage chronique, depuis janvier 2023). Le classement en groupe 1 par le CIRC (cancérogène avéré pour l'homme depuis 2004) rend ce contrôle particulièrement important.",
          },
          {
            question: "Comment lire l'étiquette sur un produit de peinture ?",
            answer:
              "L'étiquette d'émission de COV doit apparaître sur l'emballage et comporte la classe (A+, A, B ou C) dans un encadré standardisé, avec la mention 'Émissions dans l'air intérieur' et la liste des substances testées. La classe globale correspond à la substance la plus émissive parmi les 11 réglementées. Certains emballages affichent aussi le numéro de certificat délivré par l'organisme de test.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Peintures et revêtements à faibles émissions",
            description:
              "Comment choisir une peinture, un enduit ou un revêtement mural en tenant compte des émissions de COV et des alternatives naturelles disponibles.",
            href: "/materiaux-sains/peintures-revetements-faibles-emissions/",
          },
          {
            tag: "Rénovation saine",
            title: "Aérer correctement après des travaux",
            description:
              "Même avec des produits A+, les premières 72 heures après application sont les plus critiques. Les méthodes et durées recommandées pour évacuer les émissions initiales.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
          {
            tag: "Rénovation saine",
            title: "VMC double flux : qualité d'air, performances et coûts",
            description:
              "Le label A+ limite les émissions à la source ; une VMC double flux évacue ce qui est émis et filtre l'air entrant. Les deux leviers se combinent pour une qualité d'air mesurable.",
            href: "/renovation-saine/vmc-double-flux/",
          },
        ]}
      />
    </>
  );
}

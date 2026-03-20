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
  title: "Revêtements de sol à faibles émissions : parquet, carrelage, vinyle",
  description:
    "Parquet massif, stratifié, vinyle, carrelage, liège : comparer les revêtements de sol selon leurs émissions de COV, formaldéhyde et phtalates pour choisir un sol plus sain.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/materiaux-sains/revetements-sol-faibles-emissions/",
  },
  openGraph: {
    title: "Revêtements de sol à faibles émissions : parquet, carrelage, vinyle",
    description:
      "Parquet massif, stratifié, vinyle, carrelage, liège : comparer les revêtements de sol selon leurs émissions de COV, formaldéhyde et phtalates pour choisir un sol plus sain.",
    url: "https://www.maisonbionat.fr/materiaux-sains/revetements-sol-faibles-emissions/",
  },
};

export default function RevetementsSolPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Revêtements de sol à faibles émissions : parquet, carrelage, vinyle", href: "https://www.maisonbionat.fr/materiaux-sains/revetements-sol-faibles-emissions/" },
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
        tag="Guide pratique"
        title="Revêtements de sol : lequel émet le moins de polluants dans votre logement ?"
        quickAnswer="Tous les revêtements de sol ne se valent pas du point de vue des émissions chimiques. Le parquet stratifié et les sols vinyliques (PVC) sont les plus émissifs : le stratifié contient des résines à base de formaldéhyde, le vinyle des phtalates reconnus comme perturbateurs endocriniens. Le parquet massif, le carrelage et le liège naturel sont les options les moins émissives. Dans tous les cas, la colle de pose contribue également aux émissions totales."
        stats={[
          {
            value: "E1",
            label: "norme européenne maximale pour les panneaux bois : 0,124 mg/m³ de formaldéhyde",
          },
          {
            value: "A+",
            label: "classement obligatoire depuis 2013 sur tous les revêtements de sol vendus en France (décret 2011-321)",
          },
          {
            value: "phtalates",
            label: "plastifiants du PVC, classés perturbateurs endocriniens, présents dans les sols vinyliques bas de gamme",
          },
          {
            value: "0 COV",
            label: "émissions propres au carrelage céramique, option la plus neutre chimiquement",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comparer les revêtements" },
          { id: "signes", label: "Signes d'un sol émissif" },
          { id: "causes", label: "Sources de polluants" },
          { id: "actions", label: "Choisir et agir" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les revêtements de sol et leurs émissions : un panorama comparatif."
        description="Chaque type de revêtement de sol présente un profil d'émissions différent. La question n'est pas seulement le matériau lui-même, mais aussi les colles et les finitions utilisées lors de la pose. Voici les trois grandes catégories selon leur niveau d'émission."
        variants={[
          {
            indicator: "Émissions faibles à nulles",
            name: "Carrelage, parquet massif huilé, liège naturel",
            description:
              "Le carrelage céramique n'émet aucun COV par lui-même. Le parquet massif huilé (non verni avec des vernis synthétiques) émet très peu. Le liège naturel non traité est également peu émissif. Ces options sont les plus sûres, à condition d'utiliser des colles et des finitions adaptées, elles aussi à faibles émissions.",
          },
          {
            indicator: "Émissions modérées à surveillées",
            name: "Parquet contrecollé, linoléum naturel, béton ciré",
            description:
              "Le parquet contrecollé contient des couches de contre-plaqué ou d'aggloméré qui peuvent émettre du formaldéhyde. Le linoléum naturel (à base d'huile de lin et de farine de liège) a des émissions faibles mais peut dégager des terpènes en phase initiale. Le béton ciré nécessite une résine de finition dont l'émissivité dépend du produit.",
          },
          {
            indicator: "Émissions élevées à questionner",
            name: "Parquet stratifié, sol vinylique, moquette synthétique",
            description:
              "Le parquet stratifié contient des résines urée-formol dans ses couches d'aggloméré et peut émettre du formaldéhyde, du benzène ou du trichloréthylène via ses colles. Le vinyle (PVC) peut contenir des phtalates plastifiants et émettre des COV. La moquette synthétique retient la poussière et les allergènes, et peut contenir des ignifugeants chimiques.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Comment détecter un revêtement de sol potentiellement problématique."
        subtitle="Certains signes, avant ou après la pose, permettent d'évaluer le niveau d'émission d'un revêtement de sol."
        signs={[
          {
            label: "Forte odeur chimique à l'ouverture des emballages",
            description:
              "Un parquet stratifié ou un sol vinylique qui dégage une odeur forte et persistante à l'ouverture des boîtes est clairement en phase de dégazage actif. Cette odeur signale des concentrations élevées de COV. Laissez les lames dans un espace ventilé avant de les poser.",
            severity: "critique",
          },
          {
            label: "Absence d'étiquette de classe d'émission",
            description:
              "Depuis 2013, tous les revêtements de sol vendus en France doivent afficher leur classe d'émission (A+ à C). Un produit sans étiquette visible ne respecte pas la réglementation ou a été fabriqué avant 2012. Dans les deux cas, il vaut mieux en choisir un autre.",
            severity: "critique",
          },
          {
            label: "Irritations ou maux de tête dans la pièce récemment rénovée",
            description:
              "Des céphalées, des irritations oculaires ou une gorge sèche qui apparaissent après la pose d'un nouveau revêtement de sol signalent des concentrations élevées de COV dans l'air. Aérez immédiatement et ventilez en continu jusqu'à disparition des symptômes.",
            severity: "modéré",
          },
          {
            label: "Sol vinylique très souple ou à l'odeur de plastique chauffé",
            description:
              "Les sols vinyliques bas de gamme très souples contiennent une forte proportion de plastifiants (phtalates). L'odeur de plastique qui se libère à la chaleur (par exemple en été) signale que ces plastifiants continuent de se volatiliser dans l'air ambiant.",
            severity: "modéré",
          },
          {
            label: "Moquette ancienne dans une chambre humide",
            description:
              "Une moquette ancienne dans une pièce sujette à l'humidité est un milieu propice au développement d'acariens et de moisissures. Les fibres synthétiques retiennent les allergènes et les particules. C'est l'un des profils les plus défavorables pour la qualité de l'air d'une chambre.",
            severity: "modéré",
          },
          {
            label: "Colle de pose ancienne ou non étiquetée",
            description:
              "Les anciennes colles à parquet contiennent parfois des solvants chlorés ou du benzène. Si vous rénovez un sol existant et que vous découvrez une colle à l'odeur forte sous l'ancien revêtement, protégez-vous et aérez pendant les travaux.",
            severity: "léger",
          },
        ]}
        footerNote="Les revêtements de sol neufs ont généralement leurs émissions maximales dans les premières semaines. Un sol posé depuis plus de deux ans a déjà dégazé l'essentiel de ses émissions initiales."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les polluants dans les revêtements de sol."
        subtitle="Les émissions ne viennent pas uniquement du revêtement lui-même : la colle, le sous-couche et les finitions jouent un rôle majeur."
        causes={[
          {
            number: "01",
            cause: "Le formaldéhyde dans les panneaux du parquet stratifié",
            explanation:
              "Le parquet stratifié est composé de couches d'aggloméré ou de HDF (haute densité) liées avec des résines urée-formaldéhyde. La norme européenne E1 autorise jusqu'à 0,124 mg/m³ de formaldéhyde en chambre d'essai, mais les émissions réelles dans un logement peu ventilé peuvent dépasser la valeur guide de l'ANSES (10 µg/m³ pour une exposition chronique). Les stratifiés certifiés E0 ou CARB Phase 2 ont des émissions nettement plus basses.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les phtalates et plastifiants dans les sols PVC et vinyliques",
            explanation:
              "Le PVC rigide serait inutilisable sans plastifiants, principalement des phtalates (DEHP, DBP, BBP). Ces composés migrent hors du matériau et se retrouvent dans la poussière domestique, où ils peuvent être inhalés ou ingérés, notamment par les jeunes enfants. Certains phtalates sont classés perturbateurs endocriniens par l'Agence européenne des produits chimiques (ECHA). Les sols vinyliques haut de gamme utilisent désormais des plastifiants de substitution moins préoccupants.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les colles de pose et adhésifs",
            explanation:
              "La colle utilisée pour la pose d'un parquet ou d'un carrelage contribue souvent autant, voire davantage, aux émissions de COV que le revêtement lui-même. Les anciennes colles à base de solvants (néoprène, époxy, polyuréthane à solvants) sont particulièrement émissives. Les colles aqueuses et les colles à faibles émissions (étiquetées A+) réduisent significativement cet impact.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les vernis et finitions de surface sur parquets",
            explanation:
              "Un parquet massif verni avec un vernis polyuréthane à solvants peut émettre autant de COV qu'un stratifié. L'alternative est l'huile naturelle ou la cire à base de cires végétales, qui ont des émissions très faibles après application et séchage. Le choix de la finition est donc aussi important que le choix du bois lui-même.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Les ignifugeants et traitements chimiques des moquettes",
            explanation:
              "Certaines moquettes, notamment synthétiques, reçoivent des traitements ignifugeants (PBDE, organophosphorés) et antistatiques. Ces composés peuvent se libérer dans la poussière domestique. Les moquettes en fibres naturelles (laine, sisal, jute) non traitées chimiquement ont un profil bien plus favorable.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir un revêtement de sol plus sain."
        immediate={[
          {
            label: "Vérifier le classement A+ sur le revêtement ET la colle",
            description:
              "Au moment de l'achat, l'étiquette de classe d'émission doit être présente sur l'emballage du revêtement et sur celui de la colle de pose. Un sol A+ posé avec une colle non étiquetée ne garantit pas un résultat satisfaisant.",
            effort: "Gratuit, vérification à l'achat",
          },
          {
            label: "Laisser les lames ou rouleaux dégazer avant la pose",
            description:
              "Pour un parquet stratifié ou un sol vinylique, laissez les emballages ouverts dans une pièce bien ventilée (garage, balcon couvert) pendant 48 à 72 heures avant la pose. Cela réduit les émissions de pic liées au conditionnement.",
            effort: "Gratuit, organisation",
          },
          {
            label: "Aérer intensément pendant 4 à 6 semaines après la pose",
            description:
              "Les émissions sont maximales dans les premières semaines suivant la pose, combinant les émissions du revêtement, de la colle et de toute finition éventuelle. Maintenez une aération quotidienne de la pièce pendant cette période.",
            effort: "Gratuit",
          },
          {
            label: "Éviter les sols vinyliques bas de gamme dans les chambres d'enfants",
            description:
              "Les enfants passent plus de temps au sol et respirent proportionnellement plus d'air que les adultes. Les phtalates migrent dans la poussière au sol. Dans les chambres d'enfants et les pièces de vie des tout-petits, privilégiez le carrelage, le liège ou un parquet massif huilé.",
            effort: "Choix au moment de la rénovation",
          },
        ]}
        structural={[
          {
            label: "Opter pour le carrelage dans les pièces humides",
            description:
              "La cuisine, la salle de bain et les toilettes sont les pièces où le sol vinylique est le plus souvent posé pour des raisons pratiques. Le carrelage céramique n'émet aucun COV, est imperméable et durable. C'est l'option la plus neutre chimiquement dans ces pièces.",
            effort: "Coût de pose : 30 à 80 €/m² selon la prestation",
          },
          {
            label: "Choisir un parquet massif huilé pour les pièces de vie",
            description:
              "Le parquet massif (chêne, hêtre, pin) huilé avec une huile naturelle (lin, tung) est l'option bois la moins émissive. Il est rénovable, durable et ne contient pas de résines synthétiques. Son coût est plus élevé qu'un stratifié mais son cycle de vie est incomparablement plus long.",
            effort: "40 à 120 €/m² pose incluse",
          },
          {
            label: "Demander un stratifié certifié CARB Phase 2 ou E0 si le budget l'impose",
            description:
              "Si le budget impose un sol stratifié, la certification CARB Phase 2 (California Air Resources Board) ou la classe E0 (moins de 0,05 mg/m³ de formaldéhyde) garantit des émissions nettement inférieures à la norme E1 européenne standard. Vérifiez ces mentions dans la fiche technique.",
            effort: "Surcoût modéré par rapport au stratifié standard",
          },
          {
            label: "Considérer le liège pour une chambre ou une salle de jeux",
            description:
              "Le liège naturel non traité est un revêtement chaud, acoustiquement performant et peu émissif. Il est naturellement résistant aux moisissures et aux insectes. Assurez-vous que la finition de surface (cire ou huile) est également à faibles émissions.",
            effort: "25 à 50 €/m² selon l'épaisseur et la finition",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les idées reçues sur les revêtements de sol et les émissions."
        errors={[
          {
            label: "\"Un parquet en bois naturel ne pollue pas\"",
            explanation:
              "Le bois massif brut n'émet effectivement que très peu de COV. Mais un parquet massif verni avec un vernis polyuréthane à solvants peut émettre autant de polluants qu'un stratifié. La finition est souvent le principal vecteur d'émissions dans un parquet bois.",
          },
          {
            label: "\"Le vinyle A+ est aussi sain que le carrelage\"",
            explanation:
              "Le classement A+ porte sur les émissions de COV mesurées en chambre d'essai. Il ne préjuge pas de la présence de phtalates dans le matériau, qui migrent dans la poussière par mécanisme physique et non par évaporation. Un sol vinylique A+ peut toujours contenir des plastifiants préoccupants.",
          },
          {
            label: "\"La moquette retient la poussière, donc elle est meilleure\"",
            explanation:
              "La moquette retient effectivement les particules en suspension, mais les libère à nouveau lors du passage ou du nettoyage. Elle favorise le développement d'acariens et de moisissures en milieu humide. Pour les personnes allergiques ou asthmatiques, c'est généralement le revêtement le moins adapté.",
          },
          {
            label: "\"Un vieux parquet abîmé doit être remplacé\"",
            explanation:
              "Un parquet massif ancien, même abîmé en surface, peut souvent être poncé et rehuilé, ce qui est bien moins émissif que la pose d'un revêtement neuf. Le remplacement génère des émissions de chantier et des déchets. La rénovation d'un parquet existant est presque toujours préférable d'un point de vue sanitaire.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les revêtements de sol et les émissions"
        items={[
          {
            question: "Quel est le revêtement de sol le moins émissif ?",
            answer:
              "Le carrelage céramique est le revêtement de sol le plus neutre chimiquement : il n'émet aucun COV par lui-même. Le parquet massif huilé avec une huile naturelle est l'option bois la moins émissive. Le liège naturel non traité est également très faible en émissions. Dans tous les cas, la colle de pose contribue aux émissions totales et doit également être choisie à faibles émissions (A+).",
          },
          {
            question: "Le parquet stratifié est-il vraiment dangereux pour la santé ?",
            answer:
              "Le terme dangereux est excessif pour un usage en logement bien ventilé. Cependant, les parquets stratifiés standard contiennent des résines urée-formaldéhyde qui émettent du formaldéhyde, classé cancérigène avéré (groupe 1, CIRC). En logement peu ventilé, les concentrations peuvent dépasser la valeur guide de l'ANSES (10 µg/m³ en exposition chronique). Un stratifié certifié E0 ou CARB Phase 2 a des émissions nettement plus basses.",
          },
          {
            question: "Les sols vinyliques de gamme élevée sont-ils sans phtalates ?",
            answer:
              "Les fabricants de sols vinyliques haut de gamme utilisent de plus en plus des plastifiants de substitution (DINCH, DOTP) considérés moins préoccupants que les phtalates historiques (DEHP, DBP). Vérifiez dans la fiche technique si le produit est explicitement déclaré sans phtalate SVHC (substances très préoccupantes au sens du règlement REACH). Cette information doit être disponible sur demande.",
          },
          {
            question: "Quelle colle utiliser pour poser un parquet ou un carrelage de façon plus saine ?",
            answer:
              "Préférez les colles à dispersion aqueuse (colles acryliques en pâte), qui ont une teneur en COV bien inférieure aux colles à solvants ou aux colles époxy classiques. Vérifiez que la colle affiche un classement A+. Pour le carrelage, les colles en poudre à diluer (ciment-colle) sont généralement les moins émissives. Aérez pendant et après la pose.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Matériaux à faibles émissions : le guide général",
            description:
              "L'étiquetage A+, les COV et les alternatives naturelles : comprendre les choix de matériaux dans une logique globale pour tout le logement.",
            href: "/materiaux-sains/materiaux-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Meubles et mobilier à faibles émissions",
            description:
              "Après le sol, les meubles sont la deuxième source de formaldéhyde dans un logement. Comprendre les étiquettes et faire de meilleurs choix.",
            href: "/materiaux-sains/meubles-faibles-emissions/",
          },
          {
            tag: "Air intérieur",
            title: "Polluants intérieurs les plus fréquents",
            description:
              "COV, formaldéhyde, phtalates : identifier chaque polluant, ses sources et ses niveaux d'exposition dans un logement ordinaire.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
        ]}
      />
    </>
  );
}

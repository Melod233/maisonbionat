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
  title: "Trouver un artisan pour une rénovation saine : guide pratique",
  description:
    "Labels RGE, Qualibat, questions à poser sur les produits utilisés : comment identifier et choisir un artisan qui maîtrise la qualité de l'air pendant et après les travaux.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/artisan-renovation-saine/",
  },
  openGraph: {
    title: "Trouver un artisan pour une rénovation saine : guide pratique",
    description:
      "Labels RGE, Qualibat, questions à poser sur les produits utilisés : comment identifier et choisir un artisan qui maîtrise la qualité de l'air pendant et après les travaux.",
    url: "https://www.maisonbionat.fr/renovation-saine/artisan-renovation-saine/",
  },
};

export default function ArtisanRenovationSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Trouver un artisan pour une rénovation saine : guide pratique", href: "https://www.maisonbionat.fr/renovation-saine/artisan-renovation-saine/" },
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
        title="Choisir un artisan pour une rénovation saine : les bons critères"
        quickAnswer="Le choix de l'artisan influence directement la qualité de l'air de votre logement après travaux : les produits qu'il utilise, sa façon de ventiler le chantier et son attention aux émissions de COV font une différence concrète. Quelques labels servent de repères fiables, mais ils ne suffisent pas seuls : les questions à poser en amont, les signaux d'alerte et la lecture du devis sont tout aussi importants pour s'assurer d'un chantier orienté qualité sanitaire."
        stats={[
          { value: "RGE", label: "Reconnu Garant de l'Environnement : label obligatoire pour accéder à MaPrimeRénov' et aux CEE" },
          { value: "Qualibat", label: "organisme de certification des entreprises du bâtiment, avec qualifications spécialisées par métier" },
          { value: "A+", label: "classe d'émission de COV la plus faible : à exiger sur tous les produits de finition" },
          { value: "3 devis", label: "minimum recommandé pour comparer les approches, les produits utilisés et les prix" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Labels et certifications" },
          { id: "signes", label: "Signaux d'alerte" },
          { id: "causes", label: "Pourquoi l'artisan compte" },
          { id: "actions", label: "Trouver et qualifier" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Labels et certifications à connaître"
        description="Deux systèmes de référence permettent d'évaluer la qualification d'un artisan pour des travaux de rénovation."
        variants={[
          {
            indicator: "Label obligatoire pour les aides",
            name: "RGE : Reconnu Garant de l'Environnement",
            description:
              "Le label RGE est attribué à des entreprises formées et auditées sur les travaux d'efficacité énergétique : isolation, ventilation, chauffage, menuiseries. Il est obligatoire pour que le client puisse bénéficier de MaPrimeRénov', des Certificats d'Économies d'Énergie (CEE) et de l'éco-PTZ. Vérifiable sur le registre officiel renovation-info-service.gouv.fr. Attention : RGE couvre la compétence énergétique, pas nécessairement la sensibilité à la qualité de l'air.",
          },
          {
            indicator: "Certification métier",
            name: "Qualibat",
            description:
              "Qualibat certifie les entreprises du bâtiment par métier et par niveau de technicité. Les qualifications vont de la simple référence de compétence à des niveaux spécialisés avec contrôle de chantiers. Une qualification Qualibat atteste que l'entreprise a été vérifiée sur ses capacités techniques, financières et organisationnelles. Consultez qualibat.com pour vérifier la qualification et sa date de validité.",
          },
          {
            indicator: "À demander directement",
            name: "Fiches techniques des produits utilisés",
            description:
              "Au-delà des labels d'entreprise, demandez systématiquement la liste des produits utilisés (peintures, colles, primaires, enduits) et les fiches techniques ou fiches de données de sécurité associées. Un artisan soucieux de la qualité de l'air doit pouvoir vous indiquer la classe d'émission COV (A+ de préférence) de chaque produit de finition qu'il pose. Cette demande est légitime et peut figurer dans le devis.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signaux d'un artisan peu soucieux de la qualité de l'air"
        subtitle="Ces comportements, observables dès le premier contact ou à la lecture du devis, méritent d'être notés avant de prendre une décision."
        signs={[
          {
            label: "Refus de préciser les produits utilisés",
            description:
              "Un artisan qui ne peut pas ou ne veut pas indiquer les marques et références des peintures, colles ou primaires qu'il utilise n'est pas en mesure de vous garantir le niveau d'émission de COV du chantier. Cette transparence est un indicateur simple de professionnalisme.",
            severity: "critique",
          },
          {
            label: "Absence d'assurance décennale vérifiable",
            description:
              "Tout artisan du bâtiment doit être couvert par une assurance décennale. Demandez le numéro de police et l'assureur, vérifiez la validité avant de signer. Un artisan qui ne peut pas fournir ce document expose le client à un risque majeur en cas de sinistre.",
            severity: "critique",
          },
          {
            label: "Prix très en dessous du marché sans explication",
            description:
              "Un devis très inférieur à la moyenne pour une prestation identique signifie souvent des économies sur les matériaux (produits bas de gamme, non A+), sur la main-d'oeuvre (non déclarée) ou sur les délais (réduction du temps de séchage, pas d'aération entre les couches). C'est un signal d'alerte à prendre au sérieux.",
            severity: "critique",
          },
          {
            label: "Pas de mention de ventilation du chantier dans l'approche",
            description:
              "Un artisan qui ne mentionne pas l'aération pendant et après les travaux n'intègre pas la dimension sanitaire dans sa pratique. La ventilation du chantier réduit l'exposition des occupants (et des artisans eux-mêmes) aux COV pendant la phase critique des premières heures.",
            severity: "modéré",
          },
          {
            label: "Devis trop vague sur les produits et méthodes",
            description:
              "Un devis qui se contente de mentionner 'peinture blanche 2 couches' sans préciser la marque ni la classe d'émission laisse la porte ouverte à l'utilisation de produits de mauvaise qualité. Un bon devis décrit les produits, les méthodes et les délais entre les étapes.",
            severity: "modéré",
          },
          {
            label: "Pas de référence de chantier similaire récent",
            description:
              "Pour une rénovation orientée qualité de l'air (chambre d'enfant, isolants biosourcés, peintures sans solvant), demandez des références de chantiers similaires réalisés récemment. Un artisan qui n'en a pas n'a peut-être pas l'habitude de ce type d'approche.",
            severity: "léger",
          },
        ]}
        footerNote="La vérification du label RGE, de l'assurance décennale et des qualifications Qualibat se fait en ligne, gratuitement, sur les registres officiels. Ces vérifications prennent moins de dix minutes et peuvent éviter des problèmes sérieux."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi le choix de l'artisan influence la qualité sanitaire"
        subtitle="La qualité de l'air après travaux ne dépend pas uniquement des matériaux choisis, mais aussi de la façon dont ils sont mis en oeuvre."
        causes={[
          {
            number: "01",
            cause: "Le choix des produits est souvent laissé à l'artisan",
            explanation:
              "Dans la majorité des chantiers, le client valide l'artisan mais pas les produits qu'il utilise. L'artisan achète ce qu'il connaît et ce qu'il trouve localement. Sans demande explicite du client sur la classe COV et l'étiquetage A+, il n'y a aucune raison pour qu'il opte systématiquement pour les produits les moins émissifs.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "La ventilation pendant les travaux est rarement spontanée",
            explanation:
              "Aérer correctement un chantier (fenêtres ouvertes en permanence pendant l'application de peintures ou de colles) demande un effort et peut gêner le travail par temps froid ou par mauvais temps. Les artisans qui n'ont pas intégré cet aspect sanitaire dans leur pratique tendent à fermer les ouvertures pour des raisons de confort de travail.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les délais entre les couches et les étapes sont réduits",
            explanation:
              "Les temps de séchage et de dégazage recommandés par les fabricants sont parfois raccourcis pour tenir les délais. Une peinture posée sur une sous-couche insuffisamment sèche émet plus longtemps. Un primaire non complètement sec avant la pose du revêtement crée une accumulation d'émissions dans la paroi.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les matériaux de finition ont des impacts très variables",
            explanation:
              "Entre une peinture A+ à base d'eau et une peinture bon marché à solvant organique, les émissions de COV pendant et après application peuvent varier d'un facteur 10 ou plus. Ce choix est directement dans les mains de l'artisan si le client ne spécifie pas ses exigences.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "La qualité sanitaire n'est pas encore un critère standard",
            explanation:
              "Les artisans sont formés à la qualité technique et à la sécurité du travail, mais pas systématiquement à la qualité de l'air intérieur. Sauf formation spécifique ou intérêt personnel du professionnel, la dimension sanitaire des matériaux n'est pas intégrée dans les pratiques de métier standard.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les étapes pour trouver et qualifier un artisan"
        immediateLabel="Recherche et sélection"
        structuralLabel="Contractualisation et suivi"
        immediate={[
          {
            label: "Commencer par les registres officiels",
            description:
              "Pour les travaux éligibles aux aides (isolation, ventilation, menuiseries), vérifiez le label RGE sur renovation-info-service.gouv.fr. Pour les qualifications métier, consultez qualibat.com. Ces registres indiquent aussi les dates de validité des certifications, qui doivent être en cours au moment des travaux.",
            effort: "Gratuit, en ligne",
          },
          {
            label: "Demander trois devis comparables",
            description:
              "Formulez votre demande de devis en précisant explicitement vos exigences : produits A+ sur tous les revêtements, aération du chantier pendant l'application, délais de séchage respectés. Un artisan qui répond à ces critères sans les trouver excessifs est déjà un bon signal. Comparez les devis sur les produits mentionnés, pas seulement sur le prix.",
            effort: "2 à 3 semaines de délai",
          },
          {
            label: "Poser les bonnes questions lors de la visite",
            description:
              "Quelles marques de peintures utilisez-vous ? Quelle est leur classe d'émission COV ? Ouvrez-vous les fenêtres pendant l'application ? Respectez-vous les délais de séchage entre les couches ? Pouvez-vous me fournir les fiches techniques des produits avant le début des travaux ? Ces questions sont légitimes et les réponses sont révélatrices.",
            effort: "Visite chantier",
          },
          {
            label: "Vérifier les références pour des travaux similaires",
            description:
              "Pour une rénovation d'une chambre d'enfant, d'une pièce de vie avec des matériaux biosourcés ou d'une cuisine avec des produits sans solvant, demandez des photos ou les coordonnées de clients ayant réalisé un chantier similaire. Un artisan expérimenté sur ce type de rénovation connaît les contraintes spécifiques.",
            effort: "Consultation de références",
          },
        ]}
        structural={[
          {
            label: "Faire figurer les exigences dans le devis signé",
            description:
              "Le devis signé est un contrat. Faites y mentionner explicitement les produits retenus (marque, référence, classe A+ si applicable), l'obligation de ventiler le chantier pendant l'application des produits et les délais de séchage entre les étapes. Ces mentions vous protègent en cas de désaccord pendant le chantier.",
            effort: "Rédaction préalable",
          },
          {
            label: "Demander les fiches techniques avant le début des travaux",
            description:
              "Avant le premier coup de pinceau, demandez les fiches de données de sécurité (FDS) ou les fiches techniques des produits de finition principaux. Vérifiez la classe d'émission COV (A+ de préférence) et l'absence de substances préoccupantes identifiées (formaldéhyde, benzène, toluène). Ce contrôle prend peu de temps et peut conduire à substituer un produit avant la pose.",
            effort: "Vérification documentaire",
          },
          {
            label: "Prévoir un passage en fin de chantier",
            description:
              "Visitez le logement à la fin des travaux, avant de solder la facture. Vérifiez que les bouches de ventilation sont dégagées, que les fenêtres peuvent être ouvertes normalement et que les finitions correspondent aux produits annoncés. Si une odeur forte persiste, la ventilation pendant le chantier a peut-être été insuffisante.",
            effort: "Visite de réception",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes dans le choix d'un artisan"
        errors={[
          {
            label: "Se fier uniquement au bouche-à-oreille pour des travaux sanitaires",
            explanation:
              "Un artisan recommandé pour la qualité de son travail en peinture décorative n'a pas nécessairement été choisi pour la classe d'émission de ses produits. La recommandation est utile pour la fiabilité et la qualité d'exécution, mais pas suffisante pour garantir un chantier orienté qualité de l'air. Posez quand même les questions.",
          },
          {
            label: "Ne pas vérifier la validité de l'assurance décennale",
            explanation:
              "Un artisan peut présenter une attestation d'assurance décennale expirée ou résiliée. Demandez le document original et vérifiez la date de validité. Certains artisans présentent des attestations périmées à la signature, puis interviennent sans couverture. Cette vérification est indispensable avant tout démarrage de chantier.",
          },
          {
            label: "Accepter un devis sans mention des produits",
            explanation:
              "Un devis qui ne mentionne pas les produits utilisés vous laisse sans recours si l'artisan utilise des matériaux de qualité inférieure à ce qui était attendu. Si l'artisan refuse d'inscrire les produits dans le devis, c'est un signal d'alerte. Un professionnel sérieux n'a pas de raison de s'y opposer.",
          },
          {
            label: "Confondre RGE et compétence en qualité de l'air",
            explanation:
              "Le label RGE couvre la maîtrise des travaux d'efficacité énergétique. Il n'implique pas une formation ou une sensibilité particulière à la qualité sanitaire des matériaux. Un artisan RGE peut utiliser des produits très émissifs s'il n'a pas été formé ou sensibilisé à ce sujet. Les deux dimensions sont complémentaires, pas interchangeables.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le choix d'un artisan"
        items={[
          {
            question: "Le label RGE est-il une garantie de chantier sain ?",
            answer:
              "Non. Le label RGE atteste de la compétence de l'artisan pour réaliser des travaux d'efficacité énergétique dans les règles de l'art et garantit l'accès aux aides financières. Il ne couvre pas la qualité sanitaire des produits utilisés ni les pratiques d'aération pendant le chantier. Ces aspects doivent être traités séparément lors de la consultation.",
          },
          {
            question: "Peut-on exiger des produits A+ dans le contrat ?",
            answer:
              "Oui, et c'est recommandé. Rien n'empêche de mentionner dans le devis ou le contrat que tous les produits de finition (peintures, colles, primaires) doivent afficher la classe d'émission A+. C'est une exigence contractuelle légalement valable. Si l'artisan accepte, il est engagé sur ce point. S'il refuse sans justification, c'est un signal d'alerte.",
          },
          {
            question: "Comment vérifier qu'un artisan est bien RGE ?",
            answer:
              "Sur le site renovation-info-service.gouv.fr, un moteur de recherche permet de retrouver les entreprises RGE par code postal et type de travaux. Le résultat indique le nom de l'entreprise, les travaux couverts par la qualification et la date d'expiration. Cette vérification est gratuite et prend moins de deux minutes.",
          },
          {
            question: "Que faire si l'artisan n'a pas utilisé les produits convenus ?",
            answer:
              "Si les produits mentionnés dans le devis n'ont pas été utilisés, vous êtes en droit de refuser le solde de la facture et d'ouvrir un litige. Conservez les bons de livraison et les emballages des produits si possible, et comparez avec les références convenues. En cas de désaccord persistant, la médiation de la consommation ou les associations de consommateurs peuvent vous aider à faire valoir vos droits.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Diagnostic avant rénovation",
            description:
              "Ce qu'il faut vérifier avant de rencontrer les artisans : amiante, plomb, humidité, ventilation. Les documents à avoir en main avant de demander des devis.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
          {
            tag: "Rénovation saine",
            title: "Le label A+ lors des travaux",
            description:
              "Comprendre le système d'étiquetage des émissions de COV et comment l'appliquer concrètement dans un chantier de rénovation.",
            href: "/renovation-saine/label-a-plus-travaux/",
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

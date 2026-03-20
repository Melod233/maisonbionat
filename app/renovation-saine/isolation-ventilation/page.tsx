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
  title: "Isolation et ventilation : pourquoi les deux vont ensemble",
  description:
    "Isoler sans mettre à jour la ventilation est l'erreur la plus fréquente en rénovation. Comprendre le lien entre étanchéité thermique et qualité de l'air pour ne pas asphyxier son logement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/isolation-ventilation/",
  },
  openGraph: {
    title: "Isolation et ventilation : pourquoi les deux vont ensemble",
    description:
      "Isoler sans mettre à jour la ventilation est l'erreur la plus fréquente en rénovation. Comprendre le lien entre étanchéité thermique et qualité de l'air pour ne pas asphyxier son logement.",
    url: "https://www.maisonbionat.fr/renovation-saine/isolation-ventilation/",
  },
};

export default function IsolationVentilationPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Isolation et ventilation : pourquoi les deux vont ensemble", href: "https://www.maisonbionat.fr/renovation-saine/isolation-ventilation/" },
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
        title="Isoler sans asphyxier son logement : le lien indispensable avec la ventilation"
        quickAnswer="Un logement mieux isolé est aussi plus étanche à l'air. En réduisant les infiltrations naturelles, on diminue le renouvellement spontané de l'air intérieur. Sans ventilation adaptée, l'humidité, les COV issus des matériaux neufs et les polluants du quotidien s'accumulent. Isolation et ventilation doivent toujours être planifiées ensemble, jamais l'une sans l'autre."
        stats={[
          { value: "5 à 20 %", label: "part des déperditions thermiques liées aux ponts thermiques dans une maison ancienne" },
          { value: "3 500 à 5 500 €", label: "coût moyen d'installation d'une VMC double flux en rénovation, pose comprise" },
          { value: "15 à 20 %", label: "économies de chauffage moyennes avec une VMC double flux dans un logement bien isolé" },
          { value: "90 %", label: "de la chaleur de l'air extrait récupérée par une VMC double flux à haut rendement" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Le problème" },
          { id: "signes", label: "Signaux d'alerte" },
          { id: "causes", label: "Causes fréquentes" },
          { id: "actions", label: "Solutions" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Comprendre le déséquilibre isolation-ventilation"
        description="Trois scénarios types selon le niveau d'étanchéité et la qualité de ventilation du logement."
        variants={[
          {
            indicator: "Logement mal isolé, VMC fonctionnelle",
            name: "Beaucoup de déperditions, air renouvelé",
            description:
              "L'air se renouvelle abondamment par les infiltrations autour des fenêtres, des prises et des planchers. Ce n'est pas efficace énergétiquement, mais la qualité de l'air intérieur est généralement correcte. Les polluants sont dilués par l'air extérieur qui s'infiltre en permanence. Le problème est thermique, pas sanitaire.",
          },
          {
            indicator: "Logement isolé, sans VMC adaptée",
            name: "La situation à risque",
            description:
              "C'est le scénario le plus problématique. En rendant le logement plus étanche, on supprime les échanges d'air naturels sans les remplacer. L'humidité produite par les occupants (respiration, cuisine, douches) ne s'évacue plus. Les COV issus des nouveaux matériaux s'accumulent. Des moisissures apparaissent sur les surfaces les plus froides. La qualité de l'air se dégrade rapidement.",
          },
          {
            indicator: "Logement isolé, VMC adaptée",
            name: "L'objectif à atteindre",
            description:
              "Un logement bien isolé ET bien ventilé consomme peu d'énergie tout en maintenant une bonne qualité de l'air. La VMC assure un renouvellement d'air contrôlé, régulier et filtré. En cas de VMC double flux, jusqu'à 90 % de la chaleur de l'air extrait est récupérée, ce qui réduit les besoins de chauffage sans dégrader l'air intérieur.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Signes que la ventilation ne suit pas l'isolation"
        subtitle="Ces indicateurs apparaissent souvent dans les mois qui suivent des travaux d'isolation réalisés sans mise à jour de la ventilation."
        signs={[
          {
            label: "Apparition de moisissures aux angles des pièces",
            description:
              "Les angles de murs, les bords de fenêtres et les zones peu chauffées deviennent des points de condensation. Sans ventilation suffisante, l'humidité relative de l'air intérieur augmente et l'eau se dépose sur les surfaces froides. Les moisissures s'y développent rapidement.",
            severity: "critique",
          },
          {
            label: "Buée persistante sur les vitres le matin",
            description:
              "Une condensation matinale abondante sur les vitrages intérieurs indique un taux d'humidité trop élevé dans le logement. C'est un signe précoce que l'air ne se renouvelle pas suffisamment, souvent aggravé après l'ajout d'une isolation.",
            severity: "modéré",
          },
          {
            label: "Odeurs persistantes après travaux",
            description:
              "Si des odeurs de colle, de peinture ou de matériaux neufs persistent au-delà de 4 à 6 semaines après la fin des travaux, la ventilation est insuffisante. Les COV s'accumulent faute d'être évacués. Ce phénomène est amplifié dans un logement rendu plus étanche.",
            severity: "modéré",
          },
          {
            label: "Décollement de peinture ou de revêtement mural",
            description:
              "Des cloques, décollements ou taches sur les enduits quelques mois après des travaux d'isolation peuvent signaler une migration d'humidité à travers les parois. Cela se produit quand le point de rosée se déplace dans la paroi suite à l'isolation sans correction de la ventilation.",
            severity: "modéré",
          },
          {
            label: "Sensation d'air lourd ou de confinement",
            description:
              "Un air qui semble lourd, chargé, avec des odeurs corporelles persistantes ou une sensation de fatigue en restant dans la pièce est un signe de renouvellement d'air insuffisant. L'accumulation de CO2 produit par les occupants contribue à cette sensation.",
            severity: "léger",
          },
          {
            label: "Hygrométrie intérieure constamment supérieure à 65 %",
            description:
              "Mesurée avec un hygromètre (10 à 20 €), une humidité relative supérieure à 65 % en permanence est un signal d'alerte. L'idéal est de maintenir une hygrométrie entre 40 et 60 %. Au-dessus de 65 %, le risque de développement de moisissures augmente sensiblement.",
            severity: "modéré",
          },
        ]}
        footerNote="Un hygromètre simple suffit pour un premier diagnostic de l'humidité ambiante. Si les relevés dépassent régulièrement 65 % dans une pièce de vie, la ventilation mérite d'être vérifiée."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi l'isolation et la ventilation sont systématiquement dissociées"
        subtitle="Les raisons pour lesquelles ce problème est si fréquent lors des projets de rénovation."
        causes={[
          {
            number: "01",
            cause: "Des corps de métier différents",
            explanation:
              "L'isolation est souvent réalisée par un plaquiste ou un couvreur, la ventilation par un plombier ou un électricien. Sans maîtrise d'ouvrage coordonnée, ces deux lots sont traités indépendamment. Personne ne pose la question du lien entre les deux, et les deux artisans interviennent sans coordination.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "La ventilation est invisible et peu valorisée",
            explanation:
              "Contrairement à une belle fenêtre ou à un sol neuf, la VMC n'est pas visible. Elle est perçue comme un équipement technique secondaire, souvent budgétée en dernier ou sacrifiée pour réduire le coût total. Pourtant, c'est le système qui conditionne directement la qualité de l'air quotidien.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "La RE2020 ne s'applique pas aux rénovations classiques",
            explanation:
              "La réglementation environnementale RE2020 impose des exigences de ventilation dans les constructions neuves depuis 2022, mais elle ne s'applique pas aux rénovations ordinaires. En rénovation, il n'existe pas d'obligation réglementaire systématique de mettre à jour la ventilation lors d'une isolation. La vigilance doit venir du maître d'ouvrage.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La VMC existante semble fonctionner",
            explanation:
              "Une VMC qui tourne n'est pas nécessairement adaptée. Si le débit de la VMC a été dimensionné pour un logement qui respirait beaucoup par ses infiltrations, il sera insuffisant une fois le logement isolé et étanché. Vérifier le débit réel de la VMC avant les travaux d'isolation est une étape essentielle.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Les ponts thermiques sont traités après coup",
            explanation:
              "Les ponts thermiques sont des zones de rupture dans l'isolation (planchers intermédiaires, refends, linteaux). Dans une maison ancienne, ils représentent 5 à 20 % des déperditions. Si on isole les surfaces courantes sans traiter les ponts thermiques, les parois froides restent des points de condensation même avec une ventilation suffisante.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Planifier isolation et ventilation ensemble"
        immediateLabel="Avant les travaux"
        structuralLabel="Pendant et après"
        immediate={[
          {
            label: "Faire un bilan de ventilation avant d'isoler",
            description:
              "Demandez à un professionnel de mesurer le débit de la VMC existante et de vérifier l'état des gaines. Ce bilan permet de savoir si la VMC actuelle pourra assumer une étanchéité renforcée, ou si elle doit être remplacée ou complétée.",
            effort: "Bilan inclus dans certains devis ou 100 à 200 € séparément",
          },
          {
            label: "Intégrer la VMC au budget dès la phase de conception",
            description:
              "La ventilation doit apparaître dans le cahier des charges initial, pas en option. Pour une rénovation globale avec forte isolation, une VMC double flux (3 500 à 5 500 € posée) est à sérieusement envisager : elle récupère jusqu'à 90 % de la chaleur de l'air extrait et filtre l'air entrant.",
            effort: "VMC simple flux hygroréglable : 800 à 1 500 € posée",
          },
          {
            label: "Identifier les ponts thermiques avant d'isoler",
            description:
              "Une thermographie infrarouge (caméra thermique) permet de visualiser les zones de déperdition et les ponts thermiques. Réalisée avant travaux, elle aide à cibler les interventions. Certains diagnostiqueurs la proposent dans le cadre d'un bilan énergétique global.",
            effort: "200 à 500 € selon la surface",
          },
          {
            label: "Prévoir un lotissement coordonné des travaux",
            description:
              "La VMC doit être opérationnelle avant les finitions et avant que le logement ne soit rendu étanche. Si les lots sont coordonnés, l'installateur VMC intervient avant le plaquiste ou le couvreur pour l'isolation des combles.",
            effort: "Organisation du chantier",
          },
        ]}
        structural={[
          {
            label: "Vérifier le débit de la VMC après les travaux",
            description:
              "Un chantier peut obturer des bouches de ventilation ou endommager des gaines. Après les finitions, vérifiez que chaque bouche d'extraction (cuisine, salle de bain, WC) est dégagée et que le débit est perceptible à la main. Si la VMC est hygroréglable, les vannes doivent être accessibles et propres.",
            effort: "Gratuit",
          },
          {
            label: "Surveiller l'hygrométrie les premiers mois",
            description:
              "Un hygromètre (10 à 20 €) placé dans le salon et dans la chambre vous donne un suivi simple de l'humidité ambiante. Si elle dépasse régulièrement 65 %, renforcez l'aération manuelle et vérifiez que la VMC fonctionne correctement.",
            effort: "Hygromètre : 10 à 20 €",
          },
          {
            label: "Entretenir la VMC régulièrement",
            description:
              "Une VMC encrassée ne ventile plus correctement. Nettoyez ou remplacez les filtres tous les 6 à 12 mois pour une double flux, dépoussiérez les bouches d'une simple flux chaque année. L'entretien conditionne à la fois l'efficacité et la longévité du système.",
            effort: "30 à 100 € par an selon le système",
          },
          {
            label: "Aérer manuellement en complément pendant les semaines post-travaux",
            description:
              "La VMC seule ne suffit pas pendant la phase de dégazage des matériaux neufs. Fenêtres ouvertes 30 minutes matin et soir, en courant d'air traversant, pendant les 4 à 6 premières semaines après les finitions. Cela réduit significativement les concentrations de COV dans l'air.",
            effort: "Gratuit",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes lors de la planification isolation-ventilation"
        errors={[
          {
            label: "Calfeutrer toutes les fenêtres et portes sans VMC adaptée",
            explanation:
              "Le calfeutrage améliore l'efficacité thermique mais réduit aussi les infiltrations qui assuraient un renouvellement d'air minimal. Si la VMC n'est pas adaptée, chaque joint supplémentaire aggrave le confinement de l'air intérieur. Le calfeutrage doit toujours s'accompagner d'un bilan de ventilation.",
          },
          {
            label: "Installer une VMC double flux dans un logement mal isolé",
            explanation:
              "La VMC double flux n'est rentable énergétiquement que dans un logement suffisamment étanche et isolé. Dans un logement avec de nombreuses infiltrations, la chaleur récupérée par l'échangeur est annulée par les pertes par les parois. La double flux s'envisage en complément d'une isolation sérieuse.",
          },
          {
            label: "Condamner une bouche de ventilation pour éviter les courants d'air",
            explanation:
              "C'est une erreur fréquente et dangereuse. Boucher une bouche d'extraction réduit le débit global de la VMC et déséquilibre le système. L'air ne se renouvelle plus dans la pièce concernée. Si une bouche vous dérange, faites ajuster son débit par un professionnel, ne la condamnez pas.",
          },
          {
            label: "Négliger l'isolation des gaines de VMC dans les combles",
            explanation:
              "Les gaines de VMC qui traversent des espaces non chauffés (combles, vide sanitaire) doivent être isolées thermiquement. Sans isolation, la condensation se forme à l'intérieur des gaines, favorise le développement de moisissures et réduit l'efficacité du système, en particulier pour une double flux.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur isolation et ventilation"
        items={[
          {
            question: "Peut-on isoler ses combles sans changer la VMC ?",
            answer:
              "Cela dépend de l'état et du débit de la VMC existante. Si elle est récente, en bon état et correctement dimensionnée, une isolation des combles seuls peut ne pas nécessiter de la remplacer. Mais si la VMC est vétuste ou sous-dimensionnée, l'isolation renforcée va aggraver le confinement. Un bilan de ventilation préalable est la bonne démarche avant de décider.",
          },
          {
            question: "Quelle est la différence entre VMC simple flux et double flux ?",
            answer:
              "La VMC simple flux extrait l'air vicié des pièces humides (cuisine, salle de bain, WC) et laisse entrer l'air frais par des entrées d'air en façade. Elle est efficace et peu coûteuse (800 à 1 500 € posée). La VMC double flux aspire l'air extérieur, le filtre, le préchauffé grâce à la chaleur de l'air extrait, puis l'insuffle dans les pièces de vie. Elle récupère jusqu'à 90 % de la chaleur et améliore aussi la filtration des pollens. Elle est plus efficace mais aussi plus chère (3 500 à 5 500 € posée) et nécessite un entretien régulier des filtres.",
          },
          {
            question: "La RE2020 impose-t-elle une VMC double flux en rénovation ?",
            answer:
              "Non. La RE2020 s'applique aux constructions neuves depuis 2022, pas aux rénovations ordinaires. Elle ne rend pas la VMC double flux obligatoire même en neuf (la simple flux hygroréglable reste compatible). En rénovation, il n'existe pas d'obligation réglementaire systématique de mettre à jour la ventilation. La décision revient au maître d'ouvrage, idéalement guidé par un bilan énergétique.",
          },
          {
            question: "Combien de temps faut-il pour amortir une VMC double flux ?",
            answer:
              "Dans un logement bien isolé, la VMC double flux peut réduire les besoins de chauffage de 15 à 20 %. Pour un logement de 100 m² avec une facture de chauffage de 1 500 € par an, le gain annuel serait de 225 à 300 €. Avec un investissement de 4 500 €, le retour sur investissement se situe entre 15 et 20 ans. Ce calcul s'améliore si le logement est très isolé et situé dans une région froide.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Aérer correctement après des travaux",
            description:
              "Les COV émis par les matériaux neufs nécessitent une aération intensive pendant plusieurs semaines. Les méthodes et durées recommandées.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
          {
            tag: "Air intérieur",
            title: "Entretien de la VMC",
            description:
              "Une VMC encrassée ne ventile plus correctement. Les gestes d'entretien réguliers pour maintenir un renouvellement d'air efficace.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Rénovation saine",
            title: "Rénover plus sainement",
            description:
              "L'ordre des travaux, les matériaux à choisir et les priorités pour que la rénovation améliore, et non dégrade, la qualité de l'air.",
            href: "/renovation-saine/renover-plus-sainement/",
          },
        ]}
      />
    </>
  );
}

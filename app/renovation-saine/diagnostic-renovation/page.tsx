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
  title: "Diagnostic avant rénovation : ce qu'il faut vérifier avant de commencer",
  description:
    "Diagnostic amiante, plomb, DPE, humidité : quels diagnostics sont obligatoires avant travaux, lesquels sont utiles, et comment prioriser votre rénovation selon les résultats.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/diagnostic-renovation/",
  },
  openGraph: {
    title: "Diagnostic avant rénovation : ce qu'il faut vérifier avant de commencer",
    description:
      "Diagnostic amiante, plomb, DPE, humidité : quels diagnostics sont obligatoires avant travaux, lesquels sont utiles, et comment prioriser votre rénovation selon les résultats.",
    url: "https://www.maisonbionat.fr/renovation-saine/diagnostic-renovation/",
  },
};

export default function DiagnosticRenovationPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    { name: "Diagnostic avant rénovation : ce qu'il faut vérifier avant de commencer", href: "https://www.maisonbionat.fr/renovation-saine/diagnostic-renovation/" },
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
        title="Avant de rénover : ce que vous devez savoir sur votre logement"
        quickAnswer="Un diagnostic préalable permet d'éviter deux écueils fréquents : rénover par-dessus un problème existant (humidité, plomb, amiante) et sous-estimer l'ampleur des travaux nécessaires. Certains diagnostics sont obligatoires avant tout chantier, d'autres sont facultatifs mais précieux pour prioriser vos investissements. Commencer par ce bilan évite des surcoûts et des erreurs difficiles à corriger une fois les finitions posées."
        stats={[
          { value: "1997", label: "permis avant cette date : repérage amiante obligatoire avant travaux (décret 2017-899)" },
          { value: "1949", label: "construction avant cette date : diagnostic plomb recommandé avant intervention sur les peintures" },
          { value: "7 classes", label: "A à G : l'échelle DPE pour évaluer la performance énergétique d'un logement" },
          { value: "10 ans", label: "validité du DPE réalisé depuis le 1er juillet 2021" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de diagnostics" },
          { id: "signes", label: "Quand diagnostiquer" },
          { id: "causes", label: "Erreurs fréquentes" },
          { id: "actions", label: "Étapes pratiques" },
          { id: "eviter", label: "Pièges à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les diagnostics avant rénovation : obligatoires et utiles"
        description="Certains diagnostics sont exigés par la réglementation avant tout chantier. D'autres sont facultatifs, mais permettent de prendre de meilleures décisions sur les priorités et le budget."
        variants={[
          {
            indicator: "Obligatoire",
            name: "Repérage amiante avant travaux (RAT)",
            description:
              "Obligatoire pour tout bâtiment dont le permis de construire est antérieur au 1er juillet 1997, avant toute intervention. Le repérage doit être réalisé par un diagnostiqueur certifié avec mention. Les entreprises ont l'obligation légale de disposer de ce document avant d'intervenir sur le chantier. Coût : 150 à 500 € selon la surface et la complexité du bâtiment.",
          },
          {
            indicator: "Selon le bâtiment",
            name: "Constat de risque d'exposition au plomb (CREP)",
            description:
              "Obligatoire pour les logements construits avant le 1er janvier 1949 en cas de vente ou de location, et recommandé avant tous travaux susceptibles de perturber des peintures anciennes. Le plomb peut se retrouver dans les peintures, mais aussi dans les canalisations et certains raccords. Coût : 80 à 250 €.",
          },
          {
            indicator: "Utile avant travaux",
            name: "Diagnostic de performance énergétique (DPE)",
            description:
              "Le DPE classe le logement de A (très performant) à G (passoire thermique) selon sa consommation d'énergie en kWh/m²/an et ses émissions de CO2. Bien que non obligatoire avant travaux à proprement parler, il oriente les priorités de rénovation énergétique et conditionne l'accès à certaines aides (MaPrimeRénov', éco-PTZ). Un DPE projeté peut aussi estimer la performance après travaux. Coût : 100 à 250 €.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quand réaliser un diagnostic avant de rénover ?"
        subtitle="Certaines situations rendent le diagnostic non seulement utile, mais indispensable avant d'engager des travaux."
        signs={[
          {
            label: "Maison construite avant 1997",
            description:
              "Le repérage amiante avant travaux est légalement obligatoire. L'amiante peut se trouver dans les dalles de sol vinyle, les colles de carrelage, les faux plafonds, les enduits, les plaques ondulées de toiture et de nombreux autres matériaux.",
            severity: "critique",
          },
          {
            label: "Logement construit avant 1949",
            description:
              "Le risque plomb s'ajoute au risque amiante. Les peintures anciennes peuvent contenir des teneurs élevées en plomb. Avant tout ponçage, décapage ou démolition, un CREP est fortement recommandé pour protéger les occupants et les artisans.",
            severity: "critique",
          },
          {
            label: "Présence de taches d'humidité ou d'odeurs",
            description:
              "Rénover par-dessus un problème d'humidité non identifié aggrave systématiquement la situation. Un diagnostic humidité (détection des remontées capillaires, infiltrations, condensation) doit précéder toute finition murale ou de sol.",
            severity: "critique",
          },
          {
            label: "Logement en classe F ou G au DPE",
            description:
              "Un logement classé F ou G est interdit à la location depuis 2025 pour les logements G, et sera progressivement concerné pour les F. Avant tout projet de rénovation energétique, un DPE permet de cibler les travaux à impact maximal.",
            severity: "modéré",
          },
          {
            label: "Rénovation globale ou changement de destination",
            description:
              "Pour une rénovation complète, un audit énergétique est conseillé (obligatoire pour certaines aides). Il est plus complet que le DPE : il identifie les travaux prioritaires, leur coût estimatif et le gain énergétique attendu.",
            severity: "modéré",
          },
          {
            label: "Doute sur la qualité de la ventilation existante",
            description:
              "Un bilan de ventilation avant travaux permet de savoir si la VMC en place est suffisante, correctement entretenue et compatible avec un renforcement de l'isolation. Isoler sans corriger la ventilation est une erreur fréquente.",
            severity: "léger",
          },
        ]}
        footerNote="Les diagnostics immobiliers obligatoires (amiante, plomb) doivent être réalisés par des professionnels certifiés inscrits sur la liste officielle. Vérifiez la certification de votre diagnostiqueur avant de le mandater."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi sauter le diagnostic est une erreur coûteuse"
        subtitle="Les raisons pour lesquelles le diagnostic est souvent remis à plus tard, et les conséquences réelles que cela entraîne."
        causes={[
          {
            number: "01",
            cause: "Découverte d'amiante en cours de chantier",
            explanation:
              "Si de l'amiante est identifié pendant les travaux et non avant, le chantier doit s'arrêter immédiatement pour permettre un repérage complet. Cela génère des délais, des surcoûts importants et une exposition potentielle des occupants et artisans aux fibres.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Rénovation posée sur un fond humide",
            explanation:
              "Un revêtement de sol ou une peinture murale appliqués sur une surface humide se dégradent en quelques mois : cloques, décollements, moisissures. Le problème d'origine est aggravé et les travaux doivent être refaits. Le diagnostic humidité préalable évite ce scénario.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Mauvais choix de travaux prioritaires",
            explanation:
              "Sans DPE ni audit énergétique, il est difficile de savoir si isoler les combles, changer les fenêtres ou remplacer la chaudière est la dépense la plus efficace. On peut investir plusieurs milliers d'euros dans des travaux à faible retour si les déperditions principales ne sont pas identifiées.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Perte d'éligibilité aux aides",
            explanation:
              "MaPrimeRénov' et l'éco-PTZ exigent dans certains cas un DPE ou un audit énergétique préalable. Commencer les travaux avant d'avoir ces documents peut rendre une partie des dépenses inéligible aux subventions.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Isolation sans diagnostic de ventilation",
            explanation:
              "Renforcer l'isolation d'un logement sans vérifier l'état de la ventilation augmente son étanchéité à l'air. Sans VMC adaptée, l'air se charge en polluants et en humidité. Ce déséquilibre est difficile à corriger une fois les finitions posées.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Organiser son diagnostic avant rénovation : les étapes"
        immediateLabel="À faire en premier"
        structuralLabel="Pour aller plus loin"
        immediate={[
          {
            label: "Vérifier la date du permis de construire",
            description:
              "Premier réflexe avant tout projet : consultez le permis de construire ou les actes notariaux. Si le permis est antérieur au 1er juillet 1997, un repérage amiante avant travaux (RAT) est obligatoire avant d'engager quoi que ce soit.",
            effort: "Gratuit, documents administratifs",
          },
          {
            label: "Mandater un diagnostiqueur certifié",
            description:
              "Pour le RAT et le CREP, le diagnostiqueur doit être certifié par un organisme accrédité (Certivia, Certification Bureau Veritas, etc.). Vérifiez sa certification sur le registre officiel. Comptez 2 à 3 semaines pour obtenir les résultats et planifier votre chantier en conséquence.",
            effort: "150 à 500 € selon le diagnostic et la surface",
          },
          {
            label: "Faire réaliser ou mettre à jour le DPE",
            description:
              "Si le DPE du logement date d'avant 2021, il n'est plus fiable (méthode de calcul modifiée). Un DPE récent vous donnera une image précise des déperditions thermiques et orientera le choix des travaux prioritaires.",
            effort: "100 à 250 €",
          },
          {
            label: "Évaluer l'humidité avant toute finition",
            description:
              "Taches sur les murs, odeurs persistantes, peinture qui cloque, condensation régulière sur les vitres : faites appel à un professionnel pour identifier la source avant de rénover. Un hygromètre simple (10 à 20 €) peut aussi vous donner un premier indicateur sur l'hygrométrie ambiante.",
            effort: "Bilan professionnel : 100 à 300 €",
          },
        ]}
        structural={[
          {
            label: "Commander un audit énergétique pour une rénovation globale",
            description:
              "Obligatoire pour MaPrimeRénov' Accompagnée (rénovation par étapes ou globale), l'audit énergétique va plus loin que le DPE : il propose plusieurs scénarios de travaux, chiffrés et classés par efficacité. Il est réalisé par un auditeur certifié.",
            effort: "500 à 1 500 € (partiellement pris en charge)",
          },
          {
            label: "Faire un bilan de ventilation",
            description:
              "Un professionnel peut vérifier l'état de la VMC existante, mesurer les débits et évaluer si le système est compatible avec un renforcement de l'isolation. C'est l'étape souvent oubliée, mais qui conditionne la qualité de l'air après rénovation.",
            effort: "Inclus dans certains bilans énergétiques",
          },
          {
            label: "Constituer le dossier technique avant de rencontrer les artisans",
            description:
              "Avoir en main le RAT, le DPE et les résultats du bilan humidité vous permet de soumettre un cahier des charges précis aux artisans. Cela réduit les risques de mauvaise surprise et facilite la comparaison des devis.",
            effort: "Organisation",
          },
          {
            label: "Conserver tous les diagnostics après les travaux",
            description:
              "Les diagnostics amiante et plomb font partie du Dossier Technique Amiante (DTA) et du dossier de vente ou de location du logement. Conservez-les précieusement : ils seront nécessaires pour toute intervention future et pour toute transaction immobilière.",
            effort: "Archivage",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs les plus fréquentes avant rénovation"
        errors={[
          {
            label: "Faire réaliser les diagnostics par le même professionnel que les travaux",
            explanation:
              "Le diagnostiqueur doit être indépendant des entreprises qui réalisent les travaux. Un artisan ne peut pas établir lui-même le repérage amiante pour son propre chantier. Cette indépendance est une exigence réglementaire et une garantie pour le maître d'ouvrage.",
          },
          {
            label: "Se contenter d'un diagnostic immobilier de vente",
            explanation:
              "Le diagnostic amiante remis lors d'une vente (dossier de diagnostic technique) ne remplace pas le repérage amiante avant travaux. Leur périmètre et leur méthode sont différents. Le RAT est plus exhaustif et spécifique au type de chantier envisagé.",
          },
          {
            label: "Ignorer le DPE parce que le logement n'est pas en vente",
            explanation:
              "Même hors transaction, le DPE est un outil de pilotage précieux. Il identifie les déperditions principales et les travaux à impact maximal. Commencer une rénovation sans DPE revient souvent à investir dans les mauvaises priorités.",
          },
          {
            label: "Planifier le chantier sans délai pour les résultats des diagnostics",
            explanation:
              "Un diagnostiqueur peut prendre 2 à 4 semaines pour rendre ses résultats, surtout en période chargée. Lancer le chantier sans attendre ces résultats est illégal pour l'amiante, et risqué pour tous les autres diagnostics. Intégrez ces délais dans votre planning dès le départ.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le diagnostic avant rénovation"
        items={[
          {
            question: "Le repérage amiante avant travaux est-il vraiment obligatoire pour de petits travaux ?",
            answer:
              "Oui, dès lors que le bâtiment a été construit avant le 1er juillet 1997, le repérage amiante avant travaux (RAT) est obligatoire quelle que soit l'ampleur du chantier. Même une simple pose de carrelage ou le remplacement d'une fenêtre peut concerner des matériaux amiantés. Cette obligation découle du décret 2017-899 complété par l'arrêté du 16 juillet 2019.",
          },
          {
            question: "Quelle est la différence entre un DPE et un audit énergétique ?",
            answer:
              "Le DPE est un document de diagnostic qui classe le logement de A à G selon sa consommation énergétique. Il est réalisé par un diagnostiqueur. L'audit énergétique va plus loin : il analyse les déperditions thermiques en détail, propose plusieurs scénarios de travaux avec leurs coûts et gains attendus, et est réalisé par un auditeur spécialement certifié. L'audit est obligatoire pour MaPrimeRénov' Accompagnée.",
          },
          {
            question: "Peut-on obtenir des aides sans DPE préalable ?",
            answer:
              "Cela dépend du type d'aide. MaPrimeRénov' par geste ne l'exige pas systématiquement, mais MaPrimeRénov' Accompagnée (rénovation globale) nécessite un audit énergétique préalable. L'éco-PTZ peut quant à lui être accordé sans DPE pour certains travaux. Dans tous les cas, avoir un DPE récent facilite les démarches et oriente les choix.",
          },
          {
            question: "Un diagnostiqueur peut-il se tromper dans son repérage amiante ?",
            answer:
              "Les diagnostiqueurs certifiés sont soumis à des exigences strictes de méthode et d'indépendance. Cependant, le repérage avant travaux est dit non destructif : il ne perce pas les murs pour prélever chaque matériau. Si des matériaux suspects apparaissent pendant le chantier malgré un RAT négatif, les travaux doivent être suspendus le temps d'un prélèvement complémentaire. Cette procédure est prévue par la réglementation.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Rénover plus sainement",
            description:
              "L'ordre des travaux, les matériaux à choisir et les délais de dégazage : un guide structuré pour organiser une rénovation qui préserve la qualité de l'air.",
            href: "/renovation-saine/renover-plus-sainement/",
          },
          {
            tag: "Humidité maison",
            title: "Diagnostic humidité",
            description:
              "Identifier la source d'humidité avant de rénover : remontées capillaires, condensation, infiltrations. Les signes à ne pas ignorer.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
          {
            tag: "Rénovation saine",
            title: "Choisir un artisan pour une rénovation saine",
            description:
              "Labels RGE, questions à poser, signaux d'alerte : comment choisir un professionnel compétent pour un chantier orienté qualité de l'air.",
            href: "/renovation-saine/artisan-renovation-saine/",
          },
        ]}
      />
    </>
  );
}

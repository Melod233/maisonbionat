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
  title: "Amiante dans le logement : repérer, faire diagnostiquer, ne pas manipuler soi-même",
  description:
    "Amiante interdit en France depuis le 1er janvier 1997 (décret 96-1133). Matériaux concernés, repérages obligatoires (DAPP, RAT), risques sanitaires reconnus par l'ANSES et l'INRS, recours aux professionnels certifiés sous-section 3 ou 4. Information générale, pas un substitut au diagnostic.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/amiante-logement/",
  },
  openGraph: {
    title: "Amiante dans le logement : repérer, faire diagnostiquer, ne pas manipuler soi-même",
    description:
      "Matériaux concernés, repérages obligatoires (DAPP, RAT), recours aux professionnels certifiés. Information générale.",
    url: "https://www.maisonbionat.fr/materiaux-sains/amiante-logement/",
  },
};

export default function AmianteLogementPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Amiante dans le logement",
      href: "https://www.maisonbionat.fr/materiaux-sains/amiante-logement/",
    },
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
        tag="Sujet réglementé : information générale, pas de diagnostic à distance"
        title="Amiante dans le logement : repérer, faire diagnostiquer, ne jamais manipuler soi-même."
        quickAnswer="L'amiante est interdit en France depuis le 1er janvier 1997 (décret 96-1133). Les logements construits avant cette date peuvent en contenir : toitures et plaques en fibrociment, dalles vinyle, colles, flocages, calorifugeages, certains enduits. La dangerosité dépend de l'état du matériau (intact, dégradé) et de sa nature (lié dans un matériau dur, ou friable). Les fibres libérées peuvent provoquer, plusieurs décennies plus tard, des pathologies graves reconnues : mésothéliome, cancer broncho-pulmonaire, asbestose (sources : ANSES, INRS, Santé publique France). Cette page donne une information générale pour repérer les situations à risque et orienter vers les bons interlocuteurs. Elle ne remplace pas un diagnostic réalisé par un opérateur certifié : tout matériau suspecté doit être identifié par prélèvement et analyse en laboratoire accrédité, et toute intervention sur amiante exige une entreprise certifiée sous-section 3 ou sous-section 4 (selon les travaux)."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "1er janv. 1997", label: "interdiction totale de l'amiante en France (décret 96-1133)" },
          { value: "20–40 ans", label: "latence avant apparition des pathologies liées à l'amiante (INRS)" },
          { value: "2", label: "sous-sections de certification entreprise selon les travaux (SS3 retrait, SS4 maintenance)" },
          { value: "0", label: "manipulation amateur recommandée : aucune, dans tous les cas" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Cadre légal et repérages obligatoires" },
          { id: "signes", label: "Matériaux susceptibles d'en contenir" },
          { id: "causes", label: "Pourquoi le risque est reconnu" },
          { id: "actions", label: "Démarche : qui appeler, dans quel ordre" },
          { id: "eviter", label: "Erreurs à ne jamais commettre" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Cadre légal"
        title="Repérages amiante : qui doit en faire, dans quels cas"
        description="Plusieurs repérages sont prévus par le code de la santé publique et le code du travail. Tous concernent uniquement les bâtiments dont le permis de construire a été délivré avant le 1er juillet 1997."
        variants={[
          {
            indicator: "Vente",
            name: "Diagnostic amiante avant vente (DTA / DAPP selon le cas)",
            description:
              "Obligatoire pour la vente d'un logement dont le permis de construire est antérieur au 1er juillet 1997 (articles R. 1334-14 et suivants du code de la santé publique). Réalisé par un diagnostiqueur certifié. Pour les parties privatives d'immeubles collectifs : Dossier Amiante Parties Privatives (DAPP) tenu par le propriétaire. Pour les parties communes : Dossier Technique Amiante (DTA) tenu par le syndic.",
          },
          {
            indicator: "Travaux",
            name: "Repérage avant travaux (RAT)",
            description:
              "Obligatoire avant toute opération susceptible de provoquer l'émission de fibres dans un bâtiment construit avant le 1er juillet 1997 (arrêté du 16 juillet 2019 et suivants). Le donneur d'ordre (propriétaire, maître d'ouvrage) doit faire réaliser ce repérage par un opérateur certifié, et le transmettre à toute entreprise intervenante. Sans RAT, l'entreprise doit travailler comme si le matériau contenait de l'amiante (coût d'intervention nettement supérieur).",
          },
          {
            indicator: "Location",
            name: "Diagnostic à la mise en location",
            description:
              "Le DAPP (parties privatives) doit être communiqué au locataire pour les logements construits avant le 1er juillet 1997. Il n'y a pas d'obligation de retrait systématique : un matériau amiante intact, non friable, en bon état, peut rester en place avec un suivi périodique. C'est la dégradation qui crée le risque, pas la présence seule.",
          },
          {
            indicator: "Démolition",
            name: "Repérage amiante avant démolition",
            description:
              "Obligatoire pour toute démolition de bâtiment antérieur au 1er juillet 1997. Le repérage est exhaustif et destructif : sondages dans tous les matériaux susceptibles d'en contenir. Sans ce repérage, la démolition est interdite et toute évacuation de déchets considérée comme illégale.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Repérer"
        title="Les matériaux du logement qui peuvent contenir de l'amiante."
        subtitle="La présomption se fait sur la date de construction et la nature du matériau. Aucune identification visuelle n'est fiable à 100 % : seul un prélèvement analysé en laboratoire confirme. Cette liste oriente la vigilance, elle ne remplace pas un diagnostic."
        signs={[
          {
            label: "Plaques de toiture ou de bardage en fibrociment (avant 1997)",
            description:
              "Plaques ondulées grises souvent utilisées sur garages, abris de jardin, hangars, certaines toitures. Très fréquentes dans les constructions des années 1950 à 1996. Tant qu'elles sont intactes, le risque d'émission de fibres est faible. Une plaque cassée, érodée par l'érosion, ou découpée à la meuleuse libère des fibres. À faire diagnostiquer avant toute intervention.",
            severity: "critique",
          },
          {
            label: "Dalles vinyle de sol (avant 1997)",
            description:
              "Dalles plastiques carrées de 25, 30 ou 50 cm de côté, souvent collées sur chape ou sur plancher bois. Très répandues dans les logements des années 1960 à 1980. Peuvent contenir de l'amiante dans la dalle elle-même et/ou dans la colle bitumineuse noire sous-jacente. Pose en l'état possible (par-dessus, sans agression) ; retrait obligatoirement par entreprise certifiée.",
            severity: "critique",
          },
          {
            label: "Flocages, calorifugeages, faux plafonds",
            description:
              "Flocages projetés sur structures métalliques (sous-faces de planchers, poutres, gaines), calorifugeages de canalisations d'eau chaude ou de chauffage. Matériaux friables : risque d'émission spontanée si dégradés. Concernés en priorité par les obligations renforcées (évaluation périodique de l'état de conservation tous les 3 ans).",
            severity: "critique",
          },
          {
            label: "Joints, mastics, enduits de finition (avant 1997)",
            description:
              "Joints de portes de four ou de chaudière, mastics de menuiserie, certaines colles à carrelage, enduits de ragréage, peintures spécifiques. Quantités d'amiante souvent faibles mais réelles. Toute intervention par ponçage, perçage ou meulage est à proscrire sans diagnostic préalable.",
            severity: "modéré",
          },
          {
            label: "Conduits d'évacuation, tuyaux en fibrociment",
            description:
              "Conduits de cheminée, conduits d'évacuation d'eau, descentes en fibrociment fréquents dans le bâti d'avant 1997. Identifiables à leur teinte gris clair et à leur texture cimentaire. À diagnostiquer avant tout remplacement, démontage ou modification.",
            severity: "modéré",
          },
          {
            label: "Matériau dégradé visible (cassures, poussière, effritement)",
            description:
              "Tout matériau suspecté d'amiante qui présente des dégradations visibles (plaque cassée, dalle qui s'effrite, flocage qui tombe) doit être traité comme prioritaire. Ne pas tenter de nettoyer, balayer, aspirer ou ramasser : confiner la zone (porte fermée, ne pas passer dessus), aérer modérément, contacter un diagnostiqueur et une entreprise certifiée.",
            severity: "critique",
          },
        ]}
        footerNote="Cette liste n'est pas exhaustive. Plus de 3 500 produits contenant de l'amiante ont été commercialisés en France avant 1997 (source : INRS). Pour tout matériau suspect dans un bâtiment d'avant 1997, le réflexe est : ne pas intervenir, faire diagnostiquer."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi le risque"
        title="Pourquoi l'amiante reste un sujet de santé publique en 2026."
        subtitle="Les effets sanitaires de l'amiante sont reconnus depuis longtemps et documentés par les agences sanitaires françaises et internationales : Santé publique France, ANSES, INRS, CIRC (OMS). Le risque n'est pas immédiat mais différé."
        causes={[
          {
            number: "01",
            cause: "Les fibres d'amiante sont inhalables et persistantes",
            explanation:
              "Les fibres d'amiante (chrysotile, amphiboles) sont microscopiques, suffisamment fines pour atteindre les alvéoles pulmonaires et y persister durablement. Elles ne sont pas évacuées par les mécanismes habituels de nettoyage des poumons. Sources : INRS, ANSES.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Toutes les variétés d'amiante sont classées cancérogènes avérés",
            explanation:
              "Le CIRC (Centre international de recherche sur le cancer, OMS) classe l'ensemble des variétés d'amiante en groupe 1 (cancérogène avéré pour l'homme). Le règlement européen CLP les classe H350 (peut provoquer le cancer). Cette classification s'applique au chrysotile comme aux amphiboles.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Pathologies à très longue latence",
            explanation:
              "Les pathologies liées à l'amiante (mésothéliome de la plèvre ou du péritoine, cancer broncho-pulmonaire, asbestose) apparaissent typiquement 20 à 40 ans après les premières expositions (source : INRS, Santé publique France). Cette latence explique que des cas continuent d'être diagnostiqués en 2026 chez des personnes exposées avant 1997.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "L'intensité d'exposition n'est pas le seul facteur",
            explanation:
              "Une exposition courte mais intense (bricolage sur amiante sans protection, par exemple) peut suffire à déclencher une pathologie des décennies plus tard. Il n'existe pas, selon les données scientifiques actuelles, de seuil d'exposition en dessous duquel le risque serait nul. Ce constat justifie l'obligation de précaution maximale, même pour des interventions courtes.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "L'amiante en place n'émet pas tant qu'il n'est pas agressé",
            explanation:
              "Un matériau amiante lié (fibrociment intact, dalle vinyle en bon état) émet très peu de fibres dans des conditions normales. C'est l'agression mécanique (ponçage, perçage, découpe, choc, déposage) ou la dégradation par vieillissement et intempéries qui libère les fibres en quantité préoccupante. D'où la règle : ne pas toucher tant qu'on ne sait pas, et faire intervenir des professionnels formés si retrait nécessaire.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Quels professionnels contacter et dans quel ordre."
        immediateLabel="Diagnostic et information"
        structuralLabel="Travaux et retrait"
        immediate={[
          {
            label: "Consulter le DAPP ou le DTA si vous êtes propriétaire ou locataire",
            description:
              "Pour un logement d'avant 1997, le DAPP (parties privatives) doit être tenu à jour par le propriétaire. Le DTA (parties communes en copropriété) est tenu par le syndic. Ces documents listent les matériaux repérés contenant de l'amiante et leur état de conservation. Première étape : demander à les consulter avant tout projet de travaux.",
            effort: "Demande au propriétaire ou au syndic",
          },
          {
            label: "Faire réaliser un diagnostic ou un repérage avant travaux",
            description:
              "Pour toute intervention (rénovation, percement, retrait d'un matériau suspect), un repérage avant travaux est obligatoire dans un bâtiment d'avant 1997. Réalisé par un diagnostiqueur certifié pour la mission « amiante avec mention » : il prélève des échantillons et les fait analyser en laboratoire accrédité COFRAC. Coût indicatif : 300 à 1 200 € selon la surface et le nombre d'échantillons.",
            effort: "300 à 1 200 € selon mission",
          },
          {
            label: "Si présence confirmée, demander un diagnostic d'état de conservation",
            description:
              "L'opérateur certifié évalue l'état du matériau selon une grille réglementaire et propose une suite : maintien en l'état avec contrôle périodique (état conservé), action corrective sous 3 ans (état intermédiaire), confinement ou retrait sous 36 mois maximum (état dégradé). Le propriétaire ne décide pas seul du retrait : la grille réglementaire encadre la décision.",
            effort: "Inclus ou complément 100 à 400 €",
          },
          {
            label: "En cas de doute urgent, joindre l'ARS ou un médecin",
            description:
              "Suspicion d'exposition récente (bricolage sur matériau identifié a posteriori, fissure récente sur fibrociment manipulé) : signalement possible à l'ARS (Agence régionale de santé) du département. Pour un suivi médical individuel, consulter son médecin traitant ou un médecin du travail. Ne pas paniquer : une exposition courte et unique a un risque très faible dans la majorité des cas, mais le suivi est une démarche raisonnable.",
            effort: "Consultation médicale",
          },
        ]}
        structural={[
          {
            label: "Faire intervenir une entreprise certifiée sous-section 3 ou 4",
            description:
              "Travaux de retrait, encapsulage, démolition : entreprise certifiée sous-section 3 (SS3) au sens du code du travail. Travaux de maintenance ou d'entretien sur matériau amiante (réparation toiture fibrociment, percement ponctuel) : entreprise certifiée sous-section 4 (SS4). La certification est délivrée par des organismes accrédités (AFNOR, GLOBAL, QUALIBAT). Annuaire public disponible sur le site du ministère du Travail.",
            effort: "Devis 3 entreprises certifiées",
          },
          {
            label: "Évacuation des déchets en filière dédiée",
            description:
              "Les déchets contenant de l'amiante (DCA) sont des déchets dangereux. Évacuation par bordereau de suivi (BSDA) vers une installation autorisée (ISDD pour amiante lié, ISDND avec acceptation spécifique pour fibrociment selon préfecture). Certaines déchèteries acceptent les particuliers pour de petites quantités de fibrociment sous conditions strictes : se renseigner auprès du SYNDICAT de collecte avant tout transport.",
            effort: "Inclus dans devis SS3/SS4",
          },
          {
            label: "Plan de retrait et déclaration aux autorités",
            description:
              "Une entreprise SS3 doit établir un plan de retrait conforme et le déclarer à l'inspection du travail et à la CARSAT (régime général) un mois avant le début des travaux. Pour un propriétaire, cela signifie un délai de 4 à 8 semaines entre la signature du devis et le début effectif des travaux. Prévoir un logement temporaire si retrait dans une pièce de vie.",
            effort: "Délai 4 à 8 semaines",
          },
          {
            label: "Conserver tous les documents",
            description:
              "Rapports de diagnostic, bordereaux de suivi des déchets, attestations de fin de travaux, mesures d'empoussièrement post-chantier : conserver l'ensemble du dossier sans limite de durée. Documents utiles en cas de revente, de litige, ou de demande de reconnaissance d'exposition professionnelle plus tard.",
            effort: "Classement durable",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs à ne jamais commettre face à un matériau suspecté."
        errors={[
          {
            label: "Poncer, percer, meuler, découper un matériau suspect sans diagnostic",
            explanation:
              "Toute action mécanique sur un matériau contenant de l'amiante libère des fibres en grande quantité. Ponçage de dalles vinyle, perçage de plaques fibrociment, découpe à la meuleuse : ces gestes amateurs sont parmi les plus dangereux. Si le bâtiment a un permis antérieur au 1er juillet 1997 et que le matériau n'a pas été identifié, considérer qu'il peut contenir de l'amiante et faire diagnostiquer avant.",
          },
          {
            label: "Casser des plaques fibrociment pour les évacuer en déchèterie classique",
            explanation:
              "Les plaques fibrociment doivent être maniées entières (jamais cassées), humidifiées légèrement avant manipulation, déposées dans des contenants étanches (sacs grands volume spécifiques). L'évacuation en déchèterie n'est possible que pour certaines installations acceptant les DCA des particuliers et sous conditions strictes (quantité limitée, conditionnement réglementaire).",
          },
          {
            label: "Nettoyer une poussière suspecte à l'aspirateur classique",
            explanation:
              "Un aspirateur domestique non équipé de filtre absolu (HEPA H13 minimum, voire filtre à très haute efficacité) recrache les fibres dans l'air ambiant. Si une dégradation est suspectée (plaque tombée, flocage qui s'effrite), ne pas aspirer ni balayer : confiner la zone, contacter une entreprise certifiée. Les aspirateurs spécifiques amiante (TH H pour usage professionnel) ne sont pas en vente libre pour les particuliers.",
          },
          {
            label: "Se fier à une identification visuelle ou à un avis sur photo",
            explanation:
              "L'aspect d'un fibrociment, d'une dalle vinyle ou d'un flocage ne permet jamais de conclure avec certitude à la présence ou à l'absence d'amiante. Seul un prélèvement analysé en laboratoire accrédité (analyse par microscopie électronique à transmission, MET) donne une réponse fiable. Aucune photo, aucun forum, aucun chatbot ne remplace cette analyse.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur l'amiante dans le logement"
        items={[
          {
            question: "Mon logement est-il concerné ?",
            answer:
              "Si le permis de construire a été délivré avant le 1er juillet 1997, oui : votre logement peut contenir des matériaux amiantés. Si après cette date, théoriquement non, sauf rénovation ayant réemployé des matériaux antérieurs (rare). Pour un appartement, demandez au syndic le DTA des parties communes ; pour les parties privatives, le DAPP est tenu par le propriétaire.",
          },
          {
            question: "Un matériau amiante en bon état doit-il être retiré ?",
            answer:
              "Pas systématiquement. La réglementation distingue trois états de conservation. État conservé : maintien en place avec contrôle périodique (tous les 3 ans pour les matériaux friables). État intermédiaire : actions de protection. État dégradé : travaux de confinement ou de retrait sous 36 mois maximum. La décision se prend selon la grille d'évaluation réglementaire, pas selon la préférence du propriétaire.",
          },
          {
            question: "Combien coûte le retrait d'amiante ?",
            answer:
              "Très variable selon la surface, la nature du matériau et l'accès. Pour une toiture de garage en fibrociment de 25 m² : 3 000 à 8 000 € posée par une entreprise SS3, déchets et nouvelle couverture compris. Pour des dalles vinyle dans une pièce de 20 m² : 2 000 à 5 000 €. Pour un flocage friable : nettement plus, jusqu'à plusieurs dizaines de milliers d'euros pour de grandes surfaces. Devis multiples auprès d'entreprises certifiées indispensables.",
          },
          {
            question: "Existe-t-il des aides financières pour le retrait ?",
            answer:
              "Pour les particuliers, les aides directes au retrait d'amiante sont limitées et variables selon les régions et les communes. Quelques pistes : Anah pour les ménages modestes dans le cadre d'une rénovation globale, certaines aides locales (régions, départements, communes), prêts à taux réduits selon les banques. Renseignez-vous auprès du France Rénov' de votre territoire pour les dispositifs en vigueur localement.",
          },
          {
            question: "J'ai bricolé sur de l'amiante sans le savoir, que faire ?",
            answer:
              "Ne pas paniquer mais prendre la situation au sérieux. Une exposition courte et unique a un risque statistique faible, mais le suivi est recommandé. Consultez votre médecin traitant pour évaluer la situation et documenter l'événement. Pour une exposition professionnelle, signalement à la médecine du travail. Pour le particulier, le suivi médical post-exposition est encadré par recommandation HCSP : examens et imagerie selon l'intensité d'exposition. Conservez par écrit les circonstances précises (date, durée, nature du matériau, présence ou non de masque).",
          },
          {
            question: "Peut-on continuer à louer un logement avec amiante ?",
            answer:
              "Oui dans la grande majorité des cas. Le DAPP doit être communiqué au locataire. Tant que les matériaux sont en état de conservation acceptable selon la grille réglementaire, leur présence n'empêche pas la location. Le propriétaire reste responsable du suivi périodique et de l'information du locataire en cas d'évolution de l'état des matériaux.",
          },
          {
            question: "L'amiante dans l'eau du robinet, est-ce un sujet ?",
            answer:
              "Les canalisations en fibrociment ont été utilisées pour la distribution d'eau potable jusqu'aux années 1990. L'OMS et l'ANSES considèrent que l'ingestion d'amiante par l'eau, dans les concentrations rencontrées en France, n'a pas démontré d'effet sanitaire chez l'homme. La voie d'exposition préoccupante reste l'inhalation. Pour des questions sur l'eau, contactez votre fournisseur d'eau qui publie des analyses de qualité.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Le silo matériaux sains",
            description:
              "Peintures, sols, meubles, isolants : la vue d'ensemble pour des matériaux à faibles émissions et à faible impact sanitaire.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Matériaux sains",
            title: "Plomb des peintures anciennes",
            description:
              "Autre risque sanitaire bien documenté du bâti ancien, avec son propre cadre réglementaire (CREP, saturnisme).",
            href: "/materiaux-sains/plomb-peintures-anciennes-crep/",
          },
          {
            tag: "Rénovation saine",
            title: "Diagnostic pré-travaux",
            description:
              "Quels diagnostics commander avant des travaux, dans quel ordre, et comment les utiliser pour les choix techniques.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
        ]}
      />
    </>
  );
}

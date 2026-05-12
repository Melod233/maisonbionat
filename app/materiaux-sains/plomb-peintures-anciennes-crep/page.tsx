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
  title: "Plomb dans les peintures anciennes : CREP, saturnisme, précautions",
  description:
    "Peintures anciennes au plomb (avant 1949) : Constat de Risque d'Exposition au Plomb (CREP) obligatoire, risque de saturnisme chez l'enfant reconnu par Santé publique France, précautions de travaux. Information générale, pas un substitut au diagnostic.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/plomb-peintures-anciennes-crep/",
  },
  openGraph: {
    title: "Plomb dans les peintures anciennes : CREP, saturnisme, précautions",
    description:
      "Peintures avant 1949, CREP, saturnisme infantile : les repères réglementaires et sanitaires pour ne pas exposer sa famille.",
    url: "https://www.maisonbionat.fr/materiaux-sains/plomb-peintures-anciennes-crep/",
  },
};

export default function PlombPeinturesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Plomb des peintures anciennes",
      href: "https://www.maisonbionat.fr/materiaux-sains/plomb-peintures-anciennes-crep/",
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
        tag="Sujet santé enfant : information générale, pas de diagnostic à distance"
        title="Plomb des peintures anciennes : CREP, saturnisme, précautions à connaître."
        quickAnswer="Les peintures à la céruse (carbonate de plomb) ont été massivement utilisées en France avant 1949 sur les boiseries (fenêtres, portes, plinthes, escaliers, balustrades) et certains revêtements muraux. Leur interdiction est intervenue progressivement, principalement à partir de 1949 pour les peintures intérieures (loi du 1er août 1948), avec d'autres restrictions ultérieures. Aujourd'hui, le risque sanitaire concerne surtout les peintures dégradées : écailles ingérées par de jeunes enfants, poussière issue de ponçage ou de frottement. La pathologie associée (saturnisme infantile) est une intoxication chronique reconnue par Santé publique France et l'ANSES, pouvant entraîner des effets neurodéveloppementaux durables même à faibles doses. Le Constat de Risque d'Exposition au Plomb (CREP) est obligatoire à la vente et à la location de tout logement antérieur au 1er janvier 1949. Cette page donne une information générale et oriente vers les bons interlocuteurs. Elle ne remplace ni le CREP, ni un avis médical."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "1er janv. 1949", label: "date limite pour le CREP obligatoire à la vente et à la location" },
          { value: "1 mg/cm²", label: "seuil réglementaire de concentration en plomb dans le revêtement (CREP)" },
          { value: "50 µg/L", label: "seuil de plombémie déclenchant l'investigation pour saturnisme infantile (HCSP)" },
          { value: "0", label: "seuil sanitaire sans risque démontré : pas de seuil sans effet identifié" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Cadre réglementaire et CREP" },
          { id: "signes", label: "Où chercher dans le logement" },
          { id: "causes", label: "Pourquoi le risque est pris au sérieux" },
          { id: "actions", label: "Démarche concrète" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Cadre légal"
        title="Constat de Risque d'Exposition au Plomb (CREP) : quand, par qui"
        description="Le CREP est encadré par les articles L. 1334-5 et suivants du code de la santé publique. Il a pour but de repérer la présence de plomb dans les revêtements et d'évaluer leur état."
        variants={[
          {
            indicator: "Vente",
            name: "CREP avant vente",
            description:
              "Obligatoire pour la vente d'un logement (ou d'une partie privative d'immeuble) dont le permis de construire est antérieur au 1er janvier 1949. Réalisé par un diagnostiqueur certifié, le CREP a une validité d'un an si du plomb est détecté à un état dégradé, illimitée si négatif ou détecté en bon état. Le rapport doit être annexé à la promesse ou à l'acte de vente.",
          },
          {
            indicator: "Location",
            name: "CREP à la mise en location",
            description:
              "Obligatoire avant la mise en location d'un logement antérieur au 1er janvier 1949. Le CREP doit être annexé au bail. Validité de 6 ans si du plomb est détecté, illimitée sinon. Si du plomb dégradé est constaté, le propriétaire est tenu d'effectuer des travaux pour supprimer le risque d'exposition.",
          },
          {
            indicator: "Parties communes",
            name: "CREP des parties communes en copropriété",
            description:
              "Obligatoire pour les immeubles antérieurs au 1er janvier 1949, à la charge du syndicat des copropriétaires. Concerne paliers, escaliers, halls, façades intérieures de cour. À consulter via le syndic. Diagnostic à la fois pour la sécurité collective et pour les travaux d'entretien des parties communes.",
          },
          {
            indicator: "Signalement",
            name: "Saturnisme déclaré : enquête environnementale ARS",
            description:
              "Tout cas de saturnisme infantile déclaré (plombémie ≥ 50 µg/L) déclenche une enquête environnementale par l'Agence régionale de santé (ARS), qui identifie les sources d'exposition. Si un logement est en cause, le préfet peut imposer au propriétaire des travaux d'office (article L. 1334-2 du CSP). Procédure formalisée et coercitive.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Où chercher"
        title="Les éléments d'un logement ancien qui peuvent contenir du plomb."
        subtitle="La présence de peintures au plomb se présume sur les éléments restés sous leur peinture d'origine ou avec des couches superposées sans retrait. Voici les emplacements les plus fréquents dans le bâti d'avant 1949."
        signs={[
          {
            label: "Boiseries de fenêtres, portes, plinthes, escaliers",
            description:
              "Lieu de prédilection des peintures à la céruse, choisies pour leur opacité et leur résistance. Les frottements répétés (frottement de fenêtre à guillotine, ouverture-fermeture de porte, montée d'escalier) usent localement la peinture et libèrent des poussières dans le logement. Zones à inspecter en priorité.",
            severity: "critique",
          },
          {
            label: "Garde-corps, balustrades, ferronneries intérieures et extérieures",
            description:
              "Peintures de protection anti-corrosion fréquemment au plomb sur les éléments métalliques anciens. Les écailles tombées au pied d'un balcon ou d'un escalier extérieur peuvent contaminer le sol environnant. Présence souvent visible (couches multiples, écaillage en plaques).",
            severity: "modéré",
          },
          {
            label: "Façades extérieures et fenêtres côté rue",
            description:
              "Les peintures de façades anciennes (huile pour les boiseries extérieures, certaines peintures décoratives) peuvent contenir du plomb. La dégradation par les intempéries génère des écailles et de la poussière qui se déposent au pied des façades, contaminant le sol et la végétation directement en contact. Préoccupation accrue si des enfants jouent à proximité.",
            severity: "modéré",
          },
          {
            label: "Murs intérieurs sous papiers peints ou peintures récentes",
            description:
              "Les peintures au plomb ont souvent été recouvertes de couches plus récentes ou de papiers peints. Tant que le revêtement supérieur est intact, le risque d'émission est faible. Mais le ponçage, le décollement, l'arrachage agressif ou la dégradation par humidité peut exposer la couche ancienne et libérer des poussières.",
            severity: "modéré",
          },
          {
            label: "Écailles visibles, peinture qui se décolle, fissures profondes",
            description:
              "Toute peinture visiblement dégradée dans un logement d'avant 1949 doit être considérée comme potentiellement à risque. Particulièrement préoccupant si de jeunes enfants vivent dans le logement (porter les écailles à la bouche est un comportement normal du jeune enfant). Mesures d'urgence : ne pas laisser circuler les enfants dans la pièce, ne pas balayer ni aspirer (risque de remise en suspension), contacter un diagnostiqueur.",
            severity: "critique",
          },
          {
            label: "Poussières fines dans un logement ancien jamais rénové",
            description:
              "Les poussières domestiques d'un logement ancien peuvent contenir du plomb même en l'absence d'écailles visibles, par dépôt cumulé au fil des décennies. Un nettoyage humide régulier (essuyage humide plutôt que balayage), une attention particulière aux mains et aux jouets des enfants, et un suivi médical (plombémie) en cas de doute sont des mesures de précaution raisonnables.",
            severity: "modéré",
          },
        ]}
        footerNote="Tout doute appelle un CREP par diagnostiqueur certifié (méthode par fluorescence X portable, non destructive, 150 à 400 € selon surface). L'identification fiable ne se fait pas à l'œil nu, ni par chatbot, ni par photo : seule la mesure instrumentale ou l'analyse en laboratoire est valide."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi c'est sérieux"
        title="Pourquoi le plomb des peintures anciennes reste un sujet majeur."
        subtitle="Le saturnisme infantile est l'un des sujets de santé environnementale les plus documentés et les mieux suivis en France. Les données scientifiques et épidémiologiques sont solides et largement diffusées par les agences sanitaires."
        causes={[
          {
            number: "01",
            cause: "Le plomb est neurotoxique pour le système nerveux en développement",
            explanation:
              "Le plomb traverse la barrière hémato-encéphalique et perturbe le développement cérébral des jeunes enfants : effets sur le QI, l'attention, le comportement, le sommeil, documentés à des plombémies désormais considérées comme faibles. Selon les données HCSP et ANSES, il n'existe pas de seuil démontré sans effet : la stratégie est de réduire les expositions autant que possible, pas de viser un seuil acceptable.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les jeunes enfants ingèrent par main-bouche",
            explanation:
              "Entre 6 mois et 6 ans, les enfants explorent le monde par la bouche : doigts portés aux lèvres, jouets léchés, écailles ramassées et avalées. Cette voie d'exposition est la plus documentée pour le saturnisme infantile, devant l'inhalation de poussières. Ce comportement normal du développement est précisément ce qui rend le plomb des peintures anciennes si préoccupant.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le plomb s'accumule dans l'organisme",
            explanation:
              "Le plomb absorbé se stocke majoritairement dans les os (95 % chez l'adulte), avec un temps de demi-vie osseuse de 10 à 30 ans. Il continue de se libérer lentement dans le sang et les tissus mous, y compris longtemps après la fin de l'exposition. C'est pourquoi des expositions précoces, même limitées dans le temps, peuvent avoir des effets durables.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Les femmes enceintes transmettent au fœtus",
            explanation:
              "Le plomb stocké dans les os d'une femme enceinte est partiellement remobilisé pendant la grossesse (besoin de calcium accru) et traverse la barrière placentaire. Le fœtus peut être exposé même si la mère n'a plus d'exposition environnementale active. Préoccupation supplémentaire pour les femmes ayant vécu dans des logements anciens dans leur enfance.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Le seuil de surveillance a été abaissé à 50 µg/L",
            explanation:
              "En 2015, le Haut Conseil de la santé publique (HCSP) a abaissé le seuil de plombémie déclenchant des actions de santé publique de 100 à 50 µg/L pour les enfants, sur la base de la littérature scientifique mise à jour. Cet abaissement traduit la prise en compte d'effets démontrés à plombémies plus basses qu'on ne le pensait. Le suivi médical est plus rigoureux qu'autrefois.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Démarche concrète : diagnostiquer, protéger, intervenir si nécessaire."
        immediateLabel="Mesures immédiates de précaution"
        structuralLabel="Diagnostic et travaux durables"
        immediate={[
          {
            label: "Inspecter visuellement et stopper toute dégradation",
            description:
              "Si vous occupez un logement antérieur à 1949, inspectez fenêtres, portes, plinthes, escaliers. Toute peinture qui s'écaille, se fissure ou se décolle dans une pièce de vie d'enfant doit être traitée comme à risque : confiner la zone, ne pas balayer ni aspirer, nettoyer en essuyage humide (chiffon mouillé jeté ensuite). Pas de ponçage, pas de grattage, pas de décapage à la chaleur ou chimique sans diagnostic préalable.",
            effort: "Inspection 30 minutes",
          },
          {
            label: "Faire réaliser un CREP",
            description:
              "Diagnostiqueur certifié (annuaire COFRAC ou ministère du Logement), méthode par fluorescence X portable, non destructive. Coût indicatif : 150 à 400 € pour un appartement, 300 à 800 € pour une maison. Le rapport identifie les revêtements contenant du plomb au-delà de 1 mg/cm² et évalue leur état (non dégradé, état d'usage, dégradé). Document utile à conserver durablement.",
            effort: "150 à 800 € selon surface",
          },
          {
            label: "Si jeune enfant à domicile, demander un avis médical",
            description:
              "Un médecin (généraliste ou pédiatre) peut prescrire un dosage de plombémie chez l'enfant en cas de suspicion d'exposition. Le dosage se fait par prise de sang. Coût remboursé par l'Assurance maladie en cas de prescription. Si plombémie ≥ 50 µg/L, déclaration obligatoire à l'ARS et enquête environnementale automatique. Le dosage est une démarche de santé courante en pédiatrie environnementale, à ne pas hésiter à demander.",
            effort: "Consultation médicale",
          },
          {
            label: "Renforcer le nettoyage humide et l'hygiène des mains",
            description:
              "Essuyage humide quotidien des surfaces basses (où jouent les enfants), lavage des sols à l'eau plutôt qu'à sec, lavage fréquent des mains des enfants surtout avant repas, nettoyage des jouets, lavage des mains à la sortie du logement. Ces mesures de bon sens réduisent significativement l'exposition tant qu'une solution durable n'est pas en place.",
            effort: "Routines quotidiennes",
          },
        ]}
        structural={[
          {
            label: "Travaux par professionnels formés au risque plomb",
            description:
              "Tout recouvrement, retrait ou décapage de peintures au plomb doit être réalisé par une entreprise formée au risque plomb (formation obligatoire selon le code du travail). Méthodes acceptables : décapage chimique avec récupération, retrait à l'eau sous très haute pression confiné, démontage complet de l'élément, recouvrement étanche par doublage. Méthodes proscrites : ponçage à sec sans aspiration, décapage thermique au-dessus de 450 °C (vaporise le plomb), grattage à sec.",
            effort: "Devis professionnels",
          },
          {
            label: "Recouvrement étanche : doublage, lambris, plaque de plâtre",
            description:
              "Plutôt que de retirer la peinture ancienne (opération lourde), la recouvrir d'un revêtement étanche et solide est souvent la solution la plus pertinente : doublage en plaque de plâtre vissée, lambris bois, peinture spécifique de fixation pour plomb (peinture de scellement). Mesure durable si la peinture sous-jacente reste intacte. Le recouvrement doit être documenté pour les ventes futures (CREP mentionnant cette intervention).",
            effort: "Variable selon surface",
          },
          {
            label: "Confinement et protection lors de travaux",
            description:
              "Pour toute intervention dans une zone à plomb : confinement par bâche plastique au sol et sur les meubles, dépose des éléments mobiles, ventilation extérieure forcée, équipements de protection (masque FFP3, combinaison jetable, gants), interdiction d'accès aux enfants et femmes enceintes pendant et après les travaux jusqu'au nettoyage complet. Aspirateur THE filtration HEPA H13 minimum pour le nettoyage post-travaux. Ces précautions sont obligatoires pour les pros, vivement recommandées si un particulier intervient.",
            effort: "Précautions strictes",
          },
          {
            label: "Suivi médical post-exposition si nécessaire",
            description:
              "Après une exposition documentée (travaux non protégés, vie prolongée dans un logement à plomb dégradé), un suivi de plombémie peut être prescrit par le médecin traitant. Pour les enfants, le suivi pédiatrique inclut désormais une attention au risque environnemental. Conserver les documents (CREP, dates de travaux, plombémies) pour le suivi long terme.",
            effort: "Médical, sur prescription",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs à éviter face à des peintures anciennes."
        errors={[
          {
            label: "Poncer ou décaper soi-même des peintures anciennes sans diagnostic",
            explanation:
              "Le ponçage à sec génère un nuage de poussières de plomb particulièrement contaminant. Le décapage thermique au-dessus de 450 °C vaporise le plomb (encore plus dangereux). Le décapage chimique sans confinement disperse les écailles. Dans un logement d'avant 1949, ne jamais entamer ces opérations sans CREP préalable et, en cas de présence de plomb, sans entreprise formée. Mesure de précaution sanitaire majeure, particulièrement si des enfants vivent au foyer.",
          },
          {
            label: "Aspirer ou balayer des écailles tombées",
            explanation:
              "Le balayage et l'aspirateur classique remettent les poussières en suspension dans l'air. Mesure correcte : essuyage humide (chiffon mouillé passé sur les surfaces, jeté ensuite dans un sac fermé), ou aspirateur à filtration HEPA H13 minimum. Les écailles ramassées doivent être emballées dans un sac fermé et évacuées en déchèterie (dans la mesure du possible, en filière déchets dangereux).",
          },
          {
            label: "Croire que la peinture moderne recouvre suffit",
            explanation:
              "Une simple peinture moderne appliquée par-dessus une peinture au plomb dégradée ne supprime pas le risque : à terme, les écailles anciennes se décollent avec la nouvelle peinture, et le ponçage de préparation libère des poussières. Le recouvrement durable exige plus : peinture spécifique de fixation pour plomb, ou doublage matériel (plaque, lambris). La préparation préalable doit toujours être faite par professionnel formé si du plomb est présent.",
          },
          {
            label: "Ignorer un CREP positif lors d'une location",
            explanation:
              "Si un CREP révèle du plomb en état dégradé dans un logement loué, le propriétaire est tenu de réaliser les travaux nécessaires pour supprimer le risque (article L. 1334-9 du CSP). Ignorer cette obligation expose à des sanctions et à une responsabilité civile et pénale en cas de saturnisme déclaré chez un locataire. Pour un locataire qui constate un CREP positif : exiger les travaux par lettre recommandée, contacter l'ARS si pas de réponse.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur le plomb des peintures anciennes"
        items={[
          {
            question: "Mon logement est-il concerné ?",
            answer:
              "Si le permis de construire est antérieur au 1er janvier 1949, oui : votre logement peut contenir des peintures au plomb. À partir de 1949 et jusqu'à dans les années 1990 pour certaines applications spécifiques (peintures anti-corrosion), des résidus peuvent encore exister, mais le pic d'utilisation domestique des peintures à la céruse est antérieur à 1949. Pour avoir une réponse fiable : CREP par diagnostiqueur certifié.",
          },
          {
            question: "Combien coûte un CREP ?",
            answer:
              "Indicativement 150 à 400 € pour un appartement de 50 à 100 m², 300 à 800 € pour une maison. Tarifs libres, demander plusieurs devis. La méthode standard utilise un appareil de fluorescence X portable, non destructif. En complément, des prélèvements en laboratoire (200 à 500 € pour quelques échantillons) peuvent être réalisés en cas de doute sur la mesure portable.",
          },
          {
            question: "Mon enfant a-t-il besoin d'un dosage de plombémie ?",
            answer:
              "À discuter avec le médecin traitant ou le pédiatre. Indications fréquentes : logement antérieur à 1949 avec peintures dégradées visibles, signalement de l'ARS dans le voisinage, troubles inexpliqués pouvant évoquer une intoxication. Le dosage est simple (prise de sang), remboursé sur prescription. En PMI, le dépistage du saturnisme est inclus dans le suivi pédiatrique courant pour les enfants vivant en zones à risque.",
          },
          {
            question: "Que faire si je dois rénover un appartement parisien Haussmannien ?",
            answer:
              "Démarche en plusieurs étapes : 1) consulter le CREP (à demander au vendeur ou au syndic), 2) si plomb présent, faire un repérage avant travaux complémentaire si nécessaire, 3) faire intervenir une entreprise formée au risque plomb pour les opérations sur revêtements concernés, 4) conserver l'attestation de fin de travaux et la joindre au CREP mis à jour. Anticiper le surcoût : 20 à 50 % de plus qu'une rénovation standard selon les surfaces concernées.",
          },
          {
            question: "Les peintures actuelles contiennent-elles encore du plomb ?",
            answer:
              "Non, le plomb dans les peintures de bâtiment grand public a été interdit progressivement depuis 1949 et complètement supprimé. Les peintures actuelles vendues dans le commerce ne contiennent plus de plomb. Les enjeux sanitaires des peintures modernes concernent les COV (composés organiques volatils) et certains additifs, mais plus le plomb. Sujet voisin traité dans les pages peintures du silo matériaux sains.",
          },
          {
            question: "Le sol autour d'une vieille maison peut-il être contaminé ?",
            answer:
              "Oui, en particulier au pied des façades anciennes peintes (chute d'écailles cumulée sur des décennies) et le long des clôtures métalliques peintes anciennement. Précaution si potager familial à proximité directe d'une façade ancienne : analyse de sol pour métaux lourds (50 à 150 €). Si contamination, potager à éloigner ou à installer en bac surélevé avec terre rapportée. Voir aussi la page dédiée à l'analyse de sol pour potager.",
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
            title: "Amiante dans le logement",
            description:
              "Autre risque sanitaire bien documenté du bâti ancien, avec son propre cadre réglementaire (DAPP, RAT).",
            href: "/materiaux-sains/amiante-logement/",
          },
          {
            tag: "Eau maison",
            title: "Plomb dans les canalisations",
            description:
              "Autre voie d'exposition au plomb à la maison : les canalisations en plomb des immeubles anciens.",
            href: "/eau-maison/plomb-canalisations/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Récupérer l'eau de pluie pour l'arrosage : règles et installation",
  description:
    "Cuve de récupération d'eau de pluie : règles selon l'usage (extérieur libre, intérieur déclaré), dimensionnement, contraintes de toiture, qualité de l'eau. Arrêté du 12 juillet 2024 et choix d'équipement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/recuperation-eau-pluie-arrosage/",
  },
  openGraph: {
    title: "Récupérer l'eau de pluie pour l'arrosage : règles et installation",
    description:
      "Cuve de récupération : règles, dimensionnement, toiture, qualité. Le guide complet pour un usage extérieur ou intérieur.",
    url: "https://www.maisonbionat.fr/jardin/recuperation-eau-pluie-arrosage/",
  },
};

export default function EauPluieJardinPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Récupérer l'eau de pluie pour l'arrosage",
      href: "https://www.maisonbionat.fr/jardin/recuperation-eau-pluie-arrosage/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Jardin"
        parentHref="/jardin/"
        tag="Eau de pluie et réglementation"
        title="Récupérer l'eau de pluie : ce qui est libre, ce qui est encadré, comment dimensionner."
        quickAnswer="Pour un usage extérieur (arrosage du jardin, lavage de véhicule, nettoyage de terrasse), aucune démarche n'est nécessaire : une cuve raccordée à une descente de gouttière suffit. Pour un usage intérieur (alimentation des chasses de WC, lave-linge), une déclaration en mairie est obligatoire et un réseau de canalisations strictement séparé du réseau d'eau potable est imposé, avec marquage spécifique. La toiture ne doit contenir ni amiante ni plomb. Cadre : arrêté du 12 juillet 2024 modifiant le code de la santé publique. L'eau récupérée n'est jamais potable, même filtrée. Dimensionnement courant pour le jardin : 1 000 à 5 000 L pour une famille avec potager, à ajuster selon la surface de toit et le climat."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "0", label: "démarche pour un usage extérieur (arrosage, lavage)" },
          { value: "120 L", label: "d'eau récupérée par mètre carré de toit pour 100 mm de pluie" },
          { value: "12 juillet 2024", label: "arrêté qui encadre les usages intérieurs" },
          { value: "0 ans", label: "depuis lequel l'eau de pluie est potable : jamais" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Le cadre légal" },
          { id: "signes", label: "Évaluer son besoin" },
          { id: "causes", label: "Pourquoi installer une cuve" },
          { id: "actions", label: "Installation et choix" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Cadre légal"
        title="Ce que dit l'arrêté du 12 juillet 2024"
        description="L'arrêté du 12 juillet 2024 modifiant le code de la santé publique distingue clairement deux régimes selon que l'eau est utilisée à l'extérieur ou à l'intérieur du logement."
        variants={[
          {
            indicator: "Libre",
            name: "Usage extérieur : arrosage, lavage, nettoyage",
            description:
              "Arrosage du jardin et du potager, lavage de véhicule, nettoyage de terrasses et façades : aucune déclaration ni installation particulière imposée. Une simple cuve de récupération raccordée à une descente de gouttière suffit, qu'elle soit aérienne (récupérateur standard) ou enterrée.",
          },
          {
            indicator: "Déclaré",
            name: "Usage intérieur : WC, lave-linge, nettoyage des sols",
            description:
              "Trois usages intérieurs sont autorisés depuis l'arrêté 2024 : alimentation des chasses d'eau, lave-linge (avec dispositif de traitement adapté) et nettoyage des sols. Obligations : déclaration en mairie, réseau de canalisations strictement séparé du réseau d'eau potable, marquage des canalisations « eau non potable », signalisation aux points de soutirage, entretien annuel avec vérification de la disconnexion, carnet sanitaire.",
          },
          {
            indicator: "Interdit",
            name: "Boisson, hygiène corporelle, cuisson, vaisselle",
            description:
              "L'eau de pluie n'est jamais autorisée pour la consommation, la douche, la cuisson, le lavage de la vaisselle ou le nettoyage du linge en contact avec la peau (linge de toilette par exemple). Aucun système de filtration ou de désinfection accessible aux particuliers ne permet de garantir la potabilité dans la durée.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Estimer"
        title="Évaluer son besoin et son potentiel de récupération."
        subtitle="Avant d'acheter une cuve, deux calculs simples permettent de dimensionner correctement : ce que la toiture peut collecter, et ce que le jardin consomme."
        signs={[
          {
            label: "Surface de toiture × pluviométrie locale",
            description:
              "Chaque mètre carré de toit reçoit en moyenne 600 à 1 200 mm de pluie par an en France métropolitaine. Une toiture de 100 m² collecte donc 60 à 120 m³ par an, dont environ 80 % récupérables (le reste est perdu en évaporation et débordements). Données pluviométrie : meteofrance.com ou normales sur 30 ans.",
            severity: "léger",
          },
          {
            label: "Consommation d'arrosage du jardin",
            description:
              "Un potager de 50 m² consomme 200 à 400 L par semaine en pleine saison (juillet–août). Un jardin d'agrément de 200 m² avec massifs et arbustes établis : 300 à 600 L par semaine. Pour 3 mois de saison sèche : 3 à 8 m³ d'arrosage selon les cultures.",
            severity: "léger",
          },
          {
            label: "Durée et intensité des épisodes secs locaux",
            description:
              "Climat méditerranéen ou continental sec : épisodes de 4 à 8 semaines sans pluie utile possibles. La cuve doit pouvoir tenir entre deux recharges. Climat océanique : recharges fréquentes, cuve plus petite acceptable.",
            severity: "modéré",
          },
          {
            label: "Place disponible et budget",
            description:
              "Cuve aérienne (200 à 1 500 L) : sous descente de gouttière, 30 à 300 €. Cuve enterrée (3 000 à 10 000 L) : 1 500 à 6 000 € installation comprise, terrassement requis. Le bon dimensionnement est celui qui permet de vivre les épisodes secs sans recourir à l'eau du robinet.",
            severity: "modéré",
          },
          {
            label: "Toiture contenant amiante ou plomb",
            description:
              "Toiture en fibrociment d'avant 1997 (présence possible d'amiante) ou avec des éléments en plomb (faîtages, noues) : récupération déconseillée. Le risque sanitaire est faible pour un usage strictement extérieur mais la réglementation interdit la récupération sur ces toitures pour usage intérieur.",
            severity: "critique",
          },
        ]}
        footerNote="Le bon dimensionnement de cuve est rarement la cuve la plus grande possible. Une cuve de 3 000 L bien remplie est plus utile qu'une cuve de 10 000 L jamais pleine. Commencez par calculer votre besoin réel."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi le faire"
        title="Pourquoi l'eau de pluie est un bon choix pour le jardin."
        subtitle="Au-delà de l'économie sur la facture d'eau, l'eau de pluie présente des qualités spécifiques pour les usages extérieurs et le jardin."
        causes={[
          {
            number: "01",
            cause: "Une eau douce, sans calcaire, à pH neutre",
            explanation:
              "L'eau de pluie a un pH naturellement légèrement acide (5,5 à 6,5), sans calcium ni magnésium. Idéale pour les plantes calcifuges (rhododendrons, azalées, hortensias bleus, agrumes), les semis et les boutures. L'eau du robinet calcaire ferme progressivement le sol et stresse certaines plantes sensibles.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Une eau gratuite après amortissement",
            explanation:
              "Le coût de l'eau du robinet en France est en moyenne de 4,30 €/m³ tout compris (eau + assainissement). Un jardin consommant 30 m³ par an d'arrosage représente environ 130 € évités par an. Amortissement d'une cuve aérienne de qualité (300 à 500 €) : 2 à 4 ans. Cuve enterrée plus longue à amortir (8 à 15 ans).",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Une réduction des prélèvements en période de tension",
            explanation:
              "Les restrictions d'arrosage en été (arrêtés sécheresse préfectoraux) ne s'appliquent pas à l'eau de pluie stockée. La cuve permet de continuer à arroser un potager en alerte renforcée, là où l'eau du robinet est interdite pour cet usage. Argument réglementaire important dans les régions méditerranéennes et de plus en plus dans le centre.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Une eau à température ambiante, mieux tolérée",
            explanation:
              "L'eau du robinet est souvent froide (10 à 15 °C), surtout en été. Verser de l'eau froide sur des plantes par fortes chaleurs crée un choc thermique. L'eau de cuve, à température extérieure, est mieux assimilée et ne stresse pas les racines.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Un appui crédible à la résilience hydrique du logement",
            explanation:
              "Au-delà du jardin, un système de récupération bien conçu peut alimenter les chasses d'eau d'une maison (déclaration mairie requise) : 25 à 35 % de la consommation d'eau d'un foyer passe par les WC. Un foyer de 4 personnes économise alors 30 à 50 m³ par an, soit 130 à 220 € par an. Investissement plus lourd mais retour structurel.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et installer son système de récupération."
        immediateLabel="Solutions aériennes, sans travaux"
        structuralLabel="Installations enterrées et systèmes intérieurs"
        immediate={[
          {
            label: "Récupérateur aérien classique (200 à 500 L)",
            description:
              "Modèle plastique ou décor bois, raccordement direct à une descente de gouttière via un collecteur filtrant. Trop-plein renvoyé vers l'évacuation existante. Robinet en partie basse pour arrosoir, possibilité d'ajouter une pompe d'arrosage. Pose 1 à 2 heures sans compétence particulière.",
            effort: "30 à 300 €",
          },
          {
            label: "Cuve souple en sous-toiture (1 000 à 5 000 L)",
            description:
              "Cuve en PVC armé pliée placée dans un vide sanitaire ou sous une terrasse couverte. Discrète, économique, large capacité. Limites : nécessite une hauteur sous plancher suffisante (60 à 100 cm), pose plus technique que la cuve aérienne.",
            effort: "400 à 1 200 €",
          },
          {
            label: "Cuves modulaires reliées en série",
            description:
              "Plusieurs cuves aériennes de 200 à 500 L raccordées entre elles : augmentation progressive de la capacité sans gros travaux. Solution intermédiaire avant un investissement enterré. Encombrement à prévoir.",
            effort: "100 à 200 € par cuve supplémentaire",
          },
          {
            label: "Collecteur filtrant et trop-plein",
            description:
              "Tout système doit comporter : un collecteur filtrant sur la descente (élimine feuilles, mousses, premiers ruissellements), un trop-plein dirigé vers l'évacuation existante ou un puits d'infiltration. Sans ces deux éléments, la cuve s'encrasse rapidement et déborde n'importe où.",
            effort: "20 à 60 € de matériel",
          },
        ]}
        structural={[
          {
            label: "Cuve enterrée en béton ou polyéthylène (3 000 à 10 000 L)",
            description:
              "Pose par terrassement, raccordement aux descentes de gouttières par regards filtrants enterrés, surverse vers le réseau pluvial ou un puits d'infiltration. Eau préservée du gel et de la lumière (pas de développement d'algues). Durée de vie 30 à 50 ans pour le béton, 20 à 30 ans pour le polyéthylène. Possibilité d'évolution vers un usage intérieur ultérieur.",
            effort: "1 500 à 6 000 € pose comprise",
          },
          {
            label: "Système double réseau pour WC et lave-linge",
            description:
              "Pompe immergée ou de surface, surpresseur, filtration (filtre à sédiments 25 µm puis 5 µm), réseau de canalisations en polyéthylène marqué « eau non potable », disconnecteur ou cuve tampon pour éviter tout retour vers le réseau d'eau potable. Déclaration en mairie obligatoire, marquage des points de soutirage, carnet sanitaire d'entretien.",
            effort: "2 500 à 6 000 € + entretien annuel",
          },
          {
            label: "Filtration adaptée à l'usage",
            description:
              "Usage extérieur : un préfiltre grossier sur le collecteur suffit. Usage WC : filtre à sédiments 25 puis 5 µm. Usage lave-linge : filtration plus poussée + UV ou ultrafiltration. Aucune filtration ne rend l'eau de pluie potable de manière fiable : un système de potabilisation domestique ne satisfait pas aux exigences sanitaires sur la durée.",
            effort: "50 à 600 € selon niveau",
          },
          {
            label: "Entretien régulier obligatoire",
            description:
              "Une fois par an : nettoyage du collecteur, vidange et nettoyage de la cuve, vérification des canalisations et de la disconnexion (pour usage intérieur). Tenue d'un carnet sanitaire avec les dates d'intervention si usage intérieur déclaré. Sans entretien, le système devient un risque sanitaire (légionelles, bactéries).",
            effort: "1 à 2 demi-journées par an",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs courantes en récupération d'eau de pluie."
        errors={[
          {
            label: "Acheter une cuve trop grande sans calcul préalable",
            explanation:
              "Une cuve enterrée de 10 000 L mal dimensionnée se vide en quelques semaines et reste vide tout l'été. Calculez d'abord votre besoin réel d'arrosage et le potentiel de récupération de votre toiture avant de choisir. Souvent 3 000 à 5 000 L suffisent largement pour un usage jardin familial.",
          },
          {
            label: "Raccorder une cuve à un WC sans déclaration",
            explanation:
              "Tout usage intérieur de l'eau de pluie (WC, lave-linge, sols) impose une déclaration en mairie et un réseau séparé conforme. Une installation sans déclaration et sans disconnexion peut contaminer le réseau d'eau potable de l'immeuble ou du quartier : sanctions civiles et pénales possibles, assurance habitation potentiellement non couvrante.",
          },
          {
            label: "Penser pouvoir boire l'eau filtrée",
            explanation:
              "Aucun système de filtration domestique ne garantit la potabilité de l'eau de pluie dans la durée. Bactéries, métaux lourds (toiture), résidus atmosphériques, biofilms dans la cuve : les variations sont permanentes. La règle reste : l'eau de pluie ne se boit pas, même en cas de coupure d'eau potable.",
          },
          {
            label: "Oublier de vidanger avant l'hiver",
            explanation:
              "Une cuve aérienne pleine d'eau qui gèle se fend : fissures, robinet cassé, raccords éclatés. Avant les premières gelées : ouvrir le robinet en partie basse pour vidange partielle, déconnecter le collecteur de la descente (l'eau de pluie hivernale va directement à l'évacuation). Au printemps, reconnecter et redémarrer la collecte.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la récupération d'eau de pluie"
        items={[
          {
            question: "Faut-il une autorisation pour installer une cuve aérienne ?",
            answer:
              "Pas d'autorisation pour une cuve aérienne ou enterrée destinée à un usage extérieur (arrosage, lavage). Pour une cuve enterrée volumineuse, un permis ou une déclaration préalable de travaux peut être nécessaire selon la commune (terrassement, modification du sol). Pour un usage intérieur, déclaration en mairie obligatoire (formulaire spécifique CERFA disponible).",
          },
          {
            question: "Combien d'eau peut-on espérer collecter ?",
            answer:
              "Volume annuel = surface de toiture en m² × pluviométrie annuelle en mm × coefficient de récupération (0,8). Exemple : toiture de 100 m² × 800 mm × 0,8 = 64 000 L par an. À ajuster selon la répartition saisonnière : un climat océanique récupère régulièrement, un climat méditerranéen reçoit l'essentiel sur quelques épisodes intenses.",
          },
          {
            question: "L'eau de pluie est-elle utilisable pour les semis et les plantes en pot ?",
            answer:
              "Oui, c'est même l'usage idéal. L'absence de calcaire et le pH neutre conviennent particulièrement aux semis fragiles, aux plantes en pot et aux plantes acidophiles. Pour les semis, laissez l'eau revenir à température ambiante avant arrosage (ne pas utiliser une eau qui sort directement d'une cuve froide en hiver sur des semis chauffés).",
          },
          {
            question: "Comment éviter le développement d'algues et de moustiques ?",
            answer:
              "Algues : la lumière favorise leur développement. Une cuve enterrée n'a pas ce problème. Pour une cuve aérienne, choisir un modèle opaque ou habiller la cuve transparente. Moustiques : couvrir hermétiquement les ouvertures (grille fine sur l'entrée, couvercle étanche). Un peu d'huile végétale en surface bloque la ponte (à utiliser avec parcimonie). Vidange et nettoyage annuels indispensables.",
          },
          {
            question: "Combien de temps l'eau peut-elle être stockée sans risque ?",
            answer:
              "Pour un usage strictement extérieur : pas de limite stricte. Plusieurs mois de stockage sont possibles sans problème majeur si la cuve est propre, fermée et à l'abri de la lumière. Pour un usage intérieur (WC) : turnover régulier souhaitable, filtration et désinfection adaptées. L'eau qui stagne plus de 6 mois sans renouvellement peut développer un biofilm bactérien.",
          },
          {
            question: "Quelle pompe choisir pour l'arrosage ?",
            answer:
              "Pour un arrosage à l'arrosoir : pas de pompe, robinet en partie basse de la cuve. Pour un arrosage au tuyau ou au goutte-à-goutte : pompe d'arrosage de surface (50 à 250 €, débit 2 à 4 m³/h, pression 2 à 4 bars) ou pompe immergée si cuve enterrée. Vérifier la compatibilité avec le système d'arrosage existant (pression nécessaire).",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Jardin",
            title: "Le silo jardin sain",
            description:
              "Sol vivant, eau de pluie, biodéchets, équipements durables : la vue d'ensemble du jardin sain.",
            href: "/jardin/",
          },
          {
            tag: "Eau maison",
            title: "L'eau du robinet et la maison",
            description:
              "Qualité de l'eau potable, plomb des canalisations, filtres : le sujet complémentaire de l'eau de pluie.",
            href: "/eau-maison/",
          },
          {
            tag: "Jardin",
            title: "Sol vivant et paillage",
            description:
              "Un sol bien structuré réduit fortement les besoins en arrosage : le levier amont de la consommation d'eau du jardin.",
            href: "/jardin/sol-vivant-paillage-matiere-organique/",
          },
        ]}
      />
    </>
  );
}

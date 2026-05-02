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
  title: "VMC double flux : qualité d'air, performances et coûts en 2026",
  description:
    "Filtration des particules fines et pollens, récupération de chaleur, contraintes d'entretien : ce qu'apporte vraiment une VMC double flux en rénovation et combien elle coûte.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/vmc-double-flux/",
  },
  openGraph: {
    title: "VMC double flux : qualité d'air, performances et coûts en 2026",
    description:
      "Filtration des particules fines et pollens, récupération de chaleur, contraintes d'entretien : ce qu'apporte vraiment une VMC double flux en rénovation et combien elle coûte.",
    url: "https://www.maisonbionat.fr/renovation-saine/vmc-double-flux/",
  },
};

const faqItems = [
  {
    question: "VMC simple flux ou double flux : laquelle choisir ?",
    answer:
      "Le simple flux extrait l'air vicié des pièces humides et fait entrer l'air neuf par des entrées d'air en façade. Il est simple, fiable, peu coûteux (1 500 à 3 500 € posé) mais ne filtre pas l'air entrant et fait entrer l'air froid. Le double flux insuffle de l'air neuf filtré et préchauffé via un échangeur, ce qui améliore la qualité de l'air (filtration F7 ou ePM1) et permet 60 à 90 % de récupération de chaleur. Coût plus élevé (7 000 à 10 000 € posé en 2026) et entretien plus exigeant. Le double flux se justifie surtout en rénovation thermique poussée (BBC, RE 2020), en zone urbaine polluée, ou en cas d'allergies respiratoires.",
  },
  {
    question: "Quelles aides en 2026 pour installer une VMC double flux ?",
    answer:
      "MaPrimeRénov' propose en 2026 entre 1 500 € et 2 500 € selon les revenus pour l'installation d'une VMC double flux par un installateur RGE. Le dispositif s'inscrit dans le cadre d'un parcours de travaux (bouquet ou parcours accompagné). La TVA réduite à 5,5 % s'applique également si l'installation se fait dans le cadre d'une rénovation énergétique. Les CEE (certificats d'économie d'énergie) viennent souvent compléter l'aide. Vérifier l'éligibilité sur france-renov.gouv.fr et exiger un installateur certifié RGE Qualibat ou Qualifelec ventilation, sans quoi les aides ne sont pas accordées.",
  },
  {
    question: "Une VMC double flux filtre-t-elle vraiment les particules fines et les pollens ?",
    answer:
      "Oui, à condition de choisir un niveau de filtration adapté et de changer les filtres régulièrement. Les filtres F7 (ePM2,5 ≥ 50 %) bloquent une part significative des PM2,5 et des pollens. Les filtres F9 ou ePM1 ≥ 80 % retiennent davantage de particules fines, dont une partie des PM1 et des suies. Les filtres doivent être remplacés tous les 6 à 12 mois selon l'environnement (en ville polluée, plus souvent). Sans changement, ils saturent, perdent en efficacité et font tourner le moteur en surconsommation. La filtration ne traite pas les COV gazeux : c'est la ventilation, pas la filtration, qui les évacue.",
  },
  {
    question: "Quel entretien réel pour une VMC double flux ?",
    answer:
      "Trois opérations clés. 1) Remplacement des filtres tous les 6 à 12 mois (compter 30 à 80 € la paire de filtres haute efficacité). 2) Nettoyage du caisson et des bouches d'extraction/insufflation tous les 6 à 12 mois à l'aspirateur ou à la brosse. 3) Inspection et nettoyage de l'échangeur tous les 2 ans, contrôle complet par un professionnel tous les 3 à 5 ans (150 à 250 €). Une VMC double flux mal entretenue perd ses bénéfices, voire dégrade la qualité de l'air par accumulation de poussière dans les gaines. C'est l'écueil principal de cette technologie : la performance dépend strictement du suivi.",
  },
];

export default function VmcDoubleFluxPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    {
      name: "VMC double flux",
      href: "https://www.maisonbionat.fr/renovation-saine/vmc-double-flux/",
    },
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
        tag="Ventilation"
        title="VMC double flux : ce que ça apporte vraiment, à quel prix et pour quel logement"
        quickAnswer="La VMC double flux est un système de ventilation mécanique qui extrait l'air vicié des pièces humides et insuffle simultanément de l'air neuf filtré dans les pièces de vie, en récupérant 60 à 90 % de la chaleur de l'air sortant via un échangeur. Elle améliore la qualité de l'air intérieur en filtrant particules fines et pollens, et réduit les pertes de chaleur par renouvellement d'air d'environ 30 à 50 % par rapport à un simple flux. En 2026, le coût d'une installation complète posée se situe entre 7 000 et 10 000 € pour un modèle classique, jusqu'à 17 500 € pour une version thermodynamique avec pompe à chaleur intégrée. MaPrimeRénov' apporte 1 500 à 2 500 € selon les revenus. La VMC double flux n'est pertinente que sur un bâti suffisamment étanche (rénovation BBC, RE 2020, ou bâti récent), avec un installateur RGE et un suivi d'entretien rigoureux."
        stats={[
          {
            value: "60 à 90 %",
            label: "récupération de chaleur typique d'un échangeur de VMC double flux",
          },
          {
            value: "7 000-10 000 €",
            label: "coût d'une VMC double flux classique posée en 2026",
          },
          {
            value: "1 500-2 500 €",
            label: "aide MaPrimeRénov' 2026 selon les revenus du foyer",
          },
          {
            value: "F7 / ePM1",
            label: "filtration efficace contre PM2,5 et pollens (F7) ou PM1 (ePM1)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre la double flux" },
          { id: "signes", label: "Logements adaptés" },
          { id: "causes", label: "Bénéfices et limites" },
          { id: "actions", label: "Choisir et installer" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Comment fonctionne une VMC double flux et ce qui la distingue."
        description="Une VMC double flux comporte deux réseaux de gaines : un réseau d'extraction qui aspire l'air vicié des cuisines, salles de bain, WC et buanderies, et un réseau d'insufflation qui apporte de l'air neuf dans les chambres et le séjour. Les deux flux se croisent dans un caisson équipé d'un échangeur de chaleur (à plaques, le plus souvent contre-courant) où l'air sortant cède sa chaleur à l'air entrant sans qu'ils se mélangent. L'air neuf est filtré (F7 ou ePM1 selon la qualité demandée) avant d'être insufflé. La régulation peut être hygroréglable, modulée selon les sondes CO2, ou pilotée par un thermostat selon les modèles."
        variants={[
          {
            indicator: "Auto-réglable",
            name: "Double flux à débits constants",
            description:
              "Le ventilateur tourne à un débit fixe (avec petite et grande vitesse manuelle). Solution la plus simple, la moins coûteuse, mais la moins économe en air et en énergie. Pertinente sur un logement de petite ou moyenne taille avec occupation stable.",
          },
          {
            indicator: "Hygroréglable / sondes",
            name: "Double flux à débits modulés",
            description:
              "Le débit est ajusté en continu selon le taux d'humidité, le CO2 ou la présence dans la pièce. Permet d'extraire plus quand c'est utile (douche, cuisine en activité, chambre occupée) et de réduire le reste du temps. Compromis classique en rénovation BBC : 10 à 20 % d'économies supplémentaires sur la consommation, qualité d'air mieux ajustée à l'usage.",
          },
          {
            indicator: "Thermodynamique",
            name: "Double flux avec PAC intégrée",
            description:
              "L'échangeur est complété par une pompe à chaleur sur l'air extrait, qui peut produire l'eau chaude sanitaire ou un complément de chauffage. Solution haut de gamme, intéressante en construction neuve performante ou rénovation très poussée. Coût 12 000 à 17 500 € posé. Le retour sur investissement dépend fortement du climat et de l'usage du logement.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Pour quels logements une VMC double flux a vraiment du sens."
        subtitle="Une VMC double flux n'est pas universellement adaptée. Sa performance dépend de l'étanchéité du bâti, de l'agencement des pièces et de la capacité à entretenir le système. Voici les configurations où l'investissement se justifie."
        signs={[
          {
            label: "Rénovation thermique poussée ou bâti récent étanche",
            description:
              "Sur une enveloppe étanche (n50 < 1 ou test BBC validé), l'air n'entre plus naturellement. Une ventilation mécanique performante devient indispensable et la double flux apporte alors le meilleur compromis qualité d'air/économies. Sur un bâti ancien non étanchéifié, les fuites parasites ruinent une partie du bénéfice.",
            severity: "critique",
          },
          {
            label: "Logement en zone urbaine polluée ou en bord de route",
            description:
              "Les particules fines extérieures (PM2,5, suies) peuvent dépasser les niveaux intérieurs en l'absence de filtration. Une double flux avec filtres F7 ou ePM1 abaisse significativement la concentration intérieure et constitue dans ce cas l'argument principal de l'investissement, devant l'économie d'énergie.",
            severity: "critique",
          },
          {
            label: "Famille avec allergies respiratoires ou asthme",
            description:
              "Les filtres haute efficacité retiennent une bonne part des pollens et des allergènes extérieurs. Combinée à une bonne gestion des acariens et de l'humidité, la double flux apporte un confort respiratoire mesurable pour les enfants asthmatiques ou allergiques.",
            severity: "modéré",
          },
          {
            label: "Climat froid ou hiver long",
            description:
              "Plus le delta de température extérieur/intérieur est grand, plus la récupération de chaleur sur l'air extrait est rentable. Les régions à climat continental ou de montagne amortissent l'investissement plus rapidement que les zones tempérées du littoral.",
            severity: "modéré",
          },
          {
            label: "Maîtrise du bruit et entretien dans la durée",
            description:
              "Une double flux mal posée ou mal entretenue peut devenir bruyante (caisson près des chambres, gaines mal isolées) et contre-productive (filtres saturés, gaines empoussiérées). Privilégier ce système si on est prêt à assurer un suivi d'entretien rigoureux et à passer par un installateur certifié.",
            severity: "modéré",
          },
          {
            label: "Pas pour un petit logement existant peu étanche",
            description:
              "Sur un T2 ou T3 ancien sans rénovation lourde, le coût de la double flux n'est presque jamais amorti et l'encombrement (caisson + gaines) pose problème. Un simple flux hygroréglable suffit dans la majorité des cas, à 1/3 du coût.",
            severity: "léger",
          },
        ]}
        footerNote="La règle générale : VMC double flux pertinente quand l'enveloppe est étanche, le climat froid et l'air extérieur dégradé. Sur les autres configurations, un simple flux hygroréglable bien posé donne souvent un meilleur ratio coût/bénéfice."
      />

      <IssueCauses
        id="causes"
        title="Bénéfices réels et limites à connaître avant de signer."
        subtitle="La VMC double flux a des avantages techniques solides, mais elle a aussi des contraintes que les fiches commerciales abordent rarement. Voici les deux faces du système."
        causes={[
          {
            number: "01",
            cause: "Récupération de chaleur de 60 à 90 %",
            explanation:
              "L'échangeur récupère la chaleur de l'air vicié sortant pour préchauffer l'air neuf entrant. Sur un logement BBC, cela représente une économie de chauffage de 5 à 15 % par rapport à un simple flux hygroréglable, et 25 à 40 % par rapport à une ventilation par ouverture des fenêtres. C'est la raison historique de l'éligibilité aux aides énergétiques.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Filtration de l'air entrant",
            explanation:
              "Filtres F7 (ePM2,5) ou F9 / ePM1 sur l'air neuf : retient une part significative des particules fines, suies, pollens et débris organiques. Sur un logement urbain ou en bord de route, cet effet peut représenter le bénéfice principal du système, devant l'économie d'énergie. Pas d'effet sur les COV gazeux ni sur le formaldéhyde.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Confort thermique en mi-saison et hiver",
            explanation:
              "L'air neuf insufflé est préchauffé à 17-20 °C en hiver au lieu d'arriver à la température extérieure. Plus de courants d'air froid près des entrées d'air, ambiance plus stable, sensation de confort renforcée. Effet net en climat froid, plus modeste en zone tempérée.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Coût d'installation et complexité",
            explanation:
              "7 000 à 10 000 € posé en 2026 pour un modèle classique, jusqu'à 17 500 € pour une version thermodynamique. Installation lourde : faux plafonds ou combles aménagés pour passer les gaines, espace technique pour le caisson, alimentation électrique dédiée. Difficile à intégrer dans une rénovation légère sans casse importante.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Entretien exigeant, performance dépendante",
            explanation:
              "Filtres à changer tous les 6 à 12 mois (30 à 80 € la paire). Bouches à nettoyer tous les 6 à 12 mois. Échangeur à inspecter tous les 2 ans. Contrôle complet par un professionnel tous les 3 à 5 ans (150 à 250 €). Une double flux négligée perd ses bénéfices et peut dégrader la qualité de l'air par empoussièrement des gaines. C'est le principal facteur d'échec en pratique.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir, faire installer et entretenir dans la durée."
        immediate={[
          {
            label: "Vérifier l'étanchéité et l'agencement avant tout devis",
            description:
              "Un test d'infiltrométrie (200 à 400 €) ou une inspection sérieuse par un thermicien permet de savoir si le bâti justifie une double flux. Vérifier aussi la faisabilité du passage des gaines (combles, faux plafonds) et l'emplacement possible du caisson (loin des chambres pour le bruit). Sans cette étape, le risque de mauvaise adéquation est élevé.",
            effort: "Diagnostic ponctuel, 200-400 €",
          },
          {
            label: "Demander 2 à 3 devis à des installateurs RGE certifiés",
            description:
              "Exiger la certification RGE Qualibat ventilation ou Qualifelec ventilation, sans quoi MaPrimeRénov' n'est pas accordé. Le devis doit préciser : modèle exact (marque, référence, certification NF VMC), classe de filtration, débits, niveau acoustique en dB(A), longueur et isolation des gaines, garantie matériel et pose.",
            effort: "1 à 2 semaines",
          },
          {
            label: "Anticiper l'intégration dans la rénovation",
            description:
              "Le passage des gaines impose de planifier la VMC en même temps que les autres lots (faux plafonds, isolation des combles, électricité). Faire poser la double flux après la peinture ou les revêtements de sol, sinon les bouches et grilles peuvent se retrouver mal positionnées. Coordination avec le maître d'œuvre indispensable.",
            effort: "Planification chantier",
          },
          {
            label: "Vérifier l'éligibilité MaPrimeRénov' et CEE",
            description:
              "Sur france-renov.gouv.fr, simuler les aides. Pour MaPrimeRénov', constituer le dossier avant les travaux (devis, RIB, avis d'imposition). Demander à l'installateur de cumuler avec les CEE (Certificats d'économie d'énergie), souvent éligibles sur ce poste. Ne signer le devis qu'après validation de la prime.",
            effort: "2 à 4 semaines administratif",
          },
        ]}
        structural={[
          {
            label: "Mettre en place un calendrier d'entretien dès l'installation",
            description:
              "Noter dans un agenda partagé : changement de filtres tous les 6 à 12 mois, nettoyage des bouches tous les 6 à 12 mois, inspection de l'échangeur tous les 2 ans, contrôle professionnel tous les 3 à 5 ans. Acheter d'avance un stock de filtres compatibles. Sans ce suivi, la double flux perd ses bénéfices et peut devenir contre-productive.",
            effort: "Routine 1 à 2 fois par an",
          },
          {
            label: "Surveiller le débit et le bruit dans la durée",
            description:
              "Un débit qui faiblit, un bruit qui augmente, des odeurs aux bouches d'insufflation : signaux que les filtres sont saturés, qu'une gaine s'est désolidarisée ou que le moteur fatigue. Réagir tôt évite les coûts d'intervention curative. Un capteur de CO2 dans le séjour ou la chambre principale donne un retour direct sur l'efficacité réelle de la ventilation.",
            effort: "Vigilance continue",
          },
          {
            label: "Faire intervenir un professionnel tous les 3 à 5 ans",
            description:
              "Inspection complète : nettoyage de l'échangeur, contrôle des moteurs, mesure des débits aux bouches, vérification de l'étanchéité des gaines, équilibrage du réseau. Compter 150 à 250 €. Conserver les rapports d'entretien : ils peuvent être demandés en cas de revente du logement avec mise en avant de la performance énergétique.",
            effort: "Tous les 3 à 5 ans, 150-250 €",
          },
          {
            label: "Mesurer la qualité d'air après mise en service",
            description:
              "Un dosimètre passif radon (en zone à potentiel), un capteur CO2 et idéalement une mesure ponctuelle des PM2,5 permettent de valider la performance réelle. Les chiffres servent aussi à ajuster l'usage (vitesse, contournements en mi-saison) et à objectiver le bénéfice santé du système.",
            effort: "Mesures ponctuelles",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur la VMC double flux."
        errors={[
          {
            label: "\"Avec une double flux, je n'ai plus besoin d'aérer\"",
            explanation:
              "Faux. La double flux assure le renouvellement d'air permanent à un débit calculé pour les conditions normales. En cas d'activité forte (cuisson, peinture, ménage avec produits, accueil de plusieurs personnes), le débit nominal ne suffit pas et une aération brève reste utile. La double flux ne dispense pas non plus d'évacuer les fumées de cuisson par une hotte indépendante.",
          },
          {
            label: "\"Plus le filtre est fin, mieux c'est\"",
            explanation:
              "Pas exactement. Un filtre H13 ou HEPA absolu (utilisé en milieu hospitalier) crée des pertes de charge énormes qui font tourner le moteur en surconsommation et l'usent prématurément. Sur une VMC domestique, F7 ou ePM1 ≥ 80 % couvre l'essentiel des besoins. Au-delà, le rapport bénéfice/contrainte s'effondre.",
          },
          {
            label: "\"Une double flux est toujours plus rentable qu'un simple flux\"",
            explanation:
              "Non. Sur un logement de moins de 80 m², ancien et peu étanche, le retour sur investissement d'une double flux dépasse souvent 20 à 30 ans. Un simple flux hygroréglable bien posé (1 500 à 3 500 €) peut donner un meilleur ratio coût/bénéfice. La double flux n'a de sens que sur un bâti étanche, en climat exigeant ou en zone polluée.",
          },
          {
            label: "\"Je peux installer ma double flux moi-même pour économiser\"",
            explanation:
              "Très déconseillé. Le dimensionnement des débits, l'équilibrage du réseau, l'isolation des gaines, l'étanchéité des piquages et la mise en route demandent une expertise spécifique. Une installation amateur fait perdre l'éligibilité aux aides (RGE obligatoire), expose à des pertes de performance majeures (jusqu'à 50 %) et à des problèmes acoustiques difficiles à corriger après coup.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la VMC double flux"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Entretien VMC : ce qui compte vraiment",
            description:
              "Protocole d'entretien détaillé selon le type de VMC, dont les spécificités du double flux et de la filtration.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Rénovation saine",
            title: "Aérer après les travaux",
            description:
              "Mise en service de la ventilation après chantier et bonnes pratiques pour limiter l'exposition aux émissions de matériaux.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
          {
            tag: "Rénovation saine",
            title: "Label A+ et émissions des matériaux",
            description:
              "Le bénéfice d'une VMC double flux est démultiplié quand elle est combinée à des matériaux faiblement émissifs.",
            href: "/renovation-saine/label-a-plus-travaux/",
          },
        ]}
      />
    </>
  );
}

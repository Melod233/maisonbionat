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
  title: "Chauffage électrique sain : inertie, infrarouge, plancher rayonnant",
  description:
    "Zéro émission intérieure, technologies disponibles, consommation réelle selon l'isolation. Comparaison avec PAC en logement performant et ce qui change en 2026.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/chauffage-electrique-sain/",
  },
  openGraph: {
    title: "Chauffage électrique sain : inertie, infrarouge, plancher rayonnant",
    description:
      "Zéro émission intérieure, technologies disponibles, consommation réelle selon l'isolation. Comparaison avec PAC en logement performant et ce qui change en 2026.",
    url: "https://www.maisonbionat.fr/chauffage-sain/chauffage-electrique-sain/",
  },
};

const faqItems = [
  {
    question: "Le chauffage électrique consomme-t-il vraiment plus que les autres modes ?",
    answer:
      "Cela dépend strictement de l'isolation du logement et de la technologie choisie. Sur un logement performant (RT 2012, RE 2020, BBC), un chauffage électrique à inertie (fluide caloporteur ou pierre/céramique) consomme 40 à 80 kWh/m²/an, soit un coût annuel de 400 à 1 200 € selon les tarifs réglementés 2026 et la zone climatique. C'est compétitif avec une PAC sur le coût total (achat + installation + exploitation) sur 15 ans, le moindre coût d'investissement compensant le rendement légèrement inférieur. Sur un logement mal isolé, le chauffage électrique direct est en effet le plus coûteux à l'usage : 150 à 250 kWh/m²/an, ce qui justifie de prioriser l'isolation avant tout choix d'équipement.",
  },
  {
    question: "Quelle technologie de radiateur électrique privilégier ?",
    answer:
      "Hiérarchie des technologies par performance et confort : 1) Plancher rayonnant électrique : confort optimal (chaleur diffuse, douce), idéal en construction neuve ou rénovation lourde. 2) Radiateur à inertie fluide ou pierre/céramique : bon confort, accumulation de chaleur, modulation fine. C'est le standard à privilégier en rénovation. 3) Panneau rayonnant : intermédiaire, chauffe rapide mais moins de confort thermique. 4) Convecteur : à éviter, technologie ancienne, chauffe par air sec, peu confortable et plus consommatrice. Les anciens convecteurs des années 1980-1990 (« grille-pains ») doivent être remplacés en priorité.",
  },
  {
    question: "Le chauffage électrique pollue-t-il l'air intérieur ?",
    answer:
      "Non, pas du tout. Le chauffage électrique fonctionne sans combustion, donc sans émission de particules fines, de monoxyde de carbone, de COV ou d'autres polluants liés à la combustion. C'est de loin le mode de chauffage le plus sain pour l'air intérieur, sur le critère strict des émissions in situ. Le seul reproche parfois fait (sensation d'air sec, brûlure de poussière sur les convecteurs anciens) est lié à la technologie convecteur dépassée, pas au principe électrique. Un radiateur à inertie ne brûle pas la poussière et ne génère aucune sensation d'air sec.",
  },
  {
    question: "Y a-t-il des aides en 2026 pour passer au chauffage électrique performant ?",
    answer:
      "MaPrimeRénov' ne soutient pas directement le remplacement de convecteurs par des radiateurs à inertie (poste considéré comme du remplacement à l'identique sans changement d'énergie). Les CEE (Certificats d'économie d'énergie) peuvent intervenir pour le remplacement de convecteurs anciens par des radiateurs à inertie performants : 50 à 200 € par radiateur selon les opérateurs et les revenus. Les aides locales (régions, départements, métropoles) varient considérablement, à vérifier auprès de votre Espace Conseil France Rénov. Pour un changement plus structurant (passage du gaz à l'électrique avec radiateurs à inertie), une rénovation globale BBC peut ouvrir droit au parcours accompagné MaPrimeRénov'.",
  },
];

export default function ChauffageElectriquePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
    {
      name: "Chauffage électrique sain",
      href: "https://www.maisonbionat.fr/chauffage-sain/chauffage-electrique-sain/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Chauffage sain"
        parentHref="/chauffage-sain/"
        tag="Sans combustion"
        title="Chauffage électrique sain : technologies disponibles et consommation réelle"
        quickAnswer="Le chauffage électrique est, sur le strict critère de la qualité de l'air intérieur, le mode le plus sain : aucune combustion, aucune émission de particules, de CO ou de COV in situ. Sa réputation de « gros consommateur » est en partie héritée des anciens convecteurs des années 1980-1990, particulièrement énergivores et inconfortables. Les technologies actuelles (radiateurs à inertie fluide ou pierre/céramique, plancher rayonnant) consomment 30 à 50 % moins que les convecteurs et offrent un confort comparable à un chauffage central basse température. Sur un logement bien isolé (RT 2012, RE 2020), le chauffage électrique à inertie est compétitif avec une PAC sur le coût global (achat + installation + exploitation) sur 15 ans, et reste la solution la plus simple à installer (pas de chaudière, pas de réseau, pas d'unité extérieure). En 2026, les aides MaPrimeRénov' privilégient la PAC, mais les CEE et les aides locales peuvent soutenir le remplacement de convecteurs anciens."
        stats={[
          {
            value: "0",
            label: "émission de particules, CO ou COV in situ (mode sans combustion)",
          },
          {
            value: "30-50 %",
            label: "économies d'un radiateur à inertie face à un convecteur ancien à confort équivalent",
          },
          {
            value: "40-80 kWh/m²/an",
            label: "consommation typique en logement performant avec radiateurs à inertie",
          },
          {
            value: "100 %",
            label: "rendement énergétique (1 kWh élec = 1 kWh chaleur, peu de pertes de distribution)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les technologies" },
          { id: "signes", label: "Logements adaptés" },
          { id: "causes", label: "Quand l'électrique pèse" },
          { id: "actions", label: "Choisir et exploiter" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les technologies de chauffage électrique en 2026."
        description="Le chauffage électrique regroupe plusieurs technologies très différentes en confort et consommation. Tous restituent 100 % de l'électricité consommée en chaleur dans la pièce (rendement strictement unitaire), mais la qualité de la diffusion de cette chaleur (rayonnante, convective, accumulée) change tout sur le confort perçu et la consommation réelle. Les radiateurs récents à inertie ou à pilotage intelligent permettent une régulation fine pièce par pièce qui réduit la consommation par rapport aux anciens convecteurs."
        variants={[
          {
            indicator: "Inertie fluide / pierre",
            name: "Radiateur à accumulation moderne",
            description:
              "Standard 2026 à privilégier en rénovation. Un fluide caloporteur (huile, eau glycolée) ou un cœur en pierre/céramique accumule la chaleur et la restitue progressivement. Confort thermique élevé, modulation par thermostat électronique précis, programmation par zone. Coût 300-800 € par radiateur. Durée de vie 15-25 ans.",
          },
          {
            indicator: "Plancher rayonnant",
            name: "Solution premium en construction neuve",
            description:
              "Câbles chauffants noyés dans la chape, basse température (25-28 °C en surface), confort optimal. Idéal en construction neuve ou rénovation lourde. Coût 80-150 €/m² posé. Inertie thermique du sol importante : monte lentement mais maintient longtemps. Programmation par zone via thermostat dédié.",
          },
          {
            indicator: "Panneau rayonnant",
            name: "Intermédiaire entre convecteur et inertie",
            description:
              "Chauffe par rayonnement direct via une plaque chaude. Montée en température rapide, confort moyen, peu de stockage. Compromis pour les pièces de passage (salle de bain, couloir) où l'on veut un complément rapide. Coût 150-400 € par radiateur. Convient mal en chauffage principal d'une chambre ou d'un séjour occupé longuement.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les configurations où l'électrique est le bon choix."
        subtitle="Le chauffage électrique n'est pas universellement adapté, mais il l'emporte clairement dans plusieurs situations spécifiques. Voici les configurations à privilégier."
        signs={[
          {
            label: "Logement très bien isolé (RT 2012, RE 2020, BBC)",
            description:
              "Configuration idéale. Un logement aux faibles déperditions n'a besoin que de petits apports thermiques, ce qui réduit la facture électrique à un niveau compétitif avec une PAC. Sur un T3 récent de 70 m² consommant 50 kWh/m²/an, la facture annuelle plafonne à 700-900 €, avec un investissement de 2 000-4 000 € pour un parc complet de radiateurs à inertie.",
            severity: "critique",
          },
          {
            label: "Petite surface ou usage occasionnel",
            description:
              "Studio, T1, résidence secondaire, chambre indépendante : la simplicité d'installation et l'absence d'entretien lourd font du chauffage électrique le bon choix. Pas de chaudière à entretenir, pas de circuit hydraulique à purger, pas de mise en route complexe en début de saison. Adapté aux occupations intermittentes.",
            severity: "critique",
          },
          {
            label: "Logement collectif sans accès extérieur (PAC impossible)",
            description:
              "En appartement sans balcon, sans terrasse, sans accès à un espace extérieur dédié, l'unité extérieure d'une PAC air-eau est rarement installable. Le chauffage électrique devient l'option logique, à condition d'isolation correcte et de radiateurs à inertie performants. La PAC air-air monobloc reste possible dans certains cas mais avec contraintes acoustiques fortes.",
            severity: "critique",
          },
          {
            label: "Recherche de simplicité d'installation et d'entretien",
            description:
              "Pas de chaudière, pas de réseau de tuyaux, pas de fluide frigorigène, pas d'entretien annuel obligatoire. Installation par un électricien standard en quelques heures. La fiabilité long terme est élevée (peu de pannes), la durée de vie d'un radiateur à inertie atteint 15-25 ans. Argument important pour les budgets contraints ou les logements peu occupés.",
            severity: "modéré",
          },
          {
            label: "Climat tempéré ou doux",
            description:
              "En climat doux (façade atlantique, sud, méditerranéen), la consommation reste modérée et la PAC ne montre pas un avantage décisif sur le coût total. La balance penche vers l'électrique pour la simplicité. En climat continental sévère ou montagne, la PAC ou le bois reprennent l'avantage économique malgré leur complexité.",
            severity: "modéré",
          },
          {
            label: "Pas de gaz raccordé sur la commune",
            description:
              "En l'absence de réseau gaz et sans projet de cuve fioul ou de poêle bois, le choix se fait entre PAC air-eau et électrique direct. La PAC est plus performante mais demande l'investissement et les conditions de pose. L'électrique reste l'option de repli simple, surtout en logement bien isolé.",
            severity: "léger",
          },
        ]}
        footerNote="Si plusieurs critères convergent (logement isolé, petite surface, simplicité recherchée, pas de gaz), le chauffage électrique à inertie est probablement le bon choix en 2026, malgré les aides plus importantes sur la PAC. Le coût global sur 15 ans est souvent comparable."
      />

      <IssueCauses
        id="causes"
        title="Quand le chauffage électrique pèse trop lourd sur la facture."
        subtitle="Les déconvenues observées en chauffage électrique tiennent à 4 facteurs identifiés. Les anticiper permet de garder l'électrique dans son meilleur cas d'usage."
        causes={[
          {
            number: "01",
            cause: "Logement insuffisamment isolé",
            explanation:
              "Cause numéro un. Une passoire thermique avec chauffage électrique direct atteint facilement 150-250 kWh/m²/an, soit 2 500-5 000 € de facture annuelle. Le rendement strictement unitaire de l'électrique amplifie le coût des déperditions. La règle absolue : isoler avant d'installer du chauffage électrique en chauffage principal d'un logement habité longuement.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Convecteurs anciens (avant 2000)",
            explanation:
              "Les convecteurs des années 1980-1990 (« grille-pains ») chauffent l'air par convection forte, sans inertie ni régulation fine. Consommation 30 à 50 % supérieure à un radiateur à inertie moderne pour un confort moindre. Brûlent la poussière à proximité directe. Remplacer prioritaire en rénovation, même partielle. CEE et aides locales possibles.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Pilotage manuel sans programmation",
            explanation:
              "Un radiateur réglé en mode permanent maximum consomme 30-50 % plus qu'un radiateur programmé en zone (jour/nuit, présence/absence, week-end). Les thermostats électroniques modernes et les boîtiers de pilotage centralisés (Cozytouch, Heatzy, Netatmo, etc.) permettent une programmation fine pour 50-200 € de matériel.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Tarif électrique inadapté",
            explanation:
              "Le tarif Heures Pleines / Heures Creuses peut être pertinent en chauffage électrique avec des radiateurs à fort accumulateur (chauffe la nuit, restitue le jour). Mais inutile sur des radiateurs à faible inertie. Vérifier l'option avec son fournisseur. Tempo, EJP et autres tarifs spécifiques à analyser selon le profil de consommation. Une mauvaise option peut coûter 100-400 €/an de plus.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Climat continental rigoureux sans complément",
            explanation:
              "En zone froide (montagne, Massif central, Vosges), la consommation électrique en chauffage principal grimpe vite au-delà de 100 kWh/m²/an même avec une bonne isolation. La PAC ou le bois deviennent économiquement plus pertinents. L'électrique reste alors un complément utile (salle de bain, pièces peu occupées) plutôt qu'un mode principal.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et exploiter un chauffage électrique sain."
        immediate={[
          {
            label: "Vérifier l'isolation avant tout autre investissement",
            description:
              "Audit thermique ou diagnostic DPE récent. Un logement F ou G ne sera pas chauffable durablement à l'électrique sans surcoût massif. Travaux d'isolation prioritaires (toiture, murs, fenêtres) dans le cadre du parcours MaPrimeRénov'. Sur un logement déjà bien isolé, passer directement au choix des radiateurs.",
            effort: "Audit thermique 250-700 €",
          },
          {
            label: "Remplacer les convecteurs anciens par des radiateurs à inertie",
            description:
              "Compter 300-800 € par radiateur (à choisir selon la pièce : pierre/céramique pour pièces de vie, fluide pour chambres, panneau rayonnant pour salle de bain). CEE possibles : 50-200 € par radiateur selon opérateurs. Économie attendue : 30-50 % sur la consommation par rapport aux anciens convecteurs, à confort équivalent.",
            effort: "300-800 € par radiateur",
          },
          {
            label: "Installer un thermostat ou un boîtier de pilotage centralisé",
            description:
              "Thermostats électroniques sur fil pilote (50-100 € par radiateur) ou boîtier centralisé connecté (Cozytouch, Heatzy, Netatmo : 100-300 €). Permet la programmation jour/nuit, semaine/week-end, présence/absence. Économie 15-30 % sur la consommation par rapport à un pilotage manuel. ROI < 2 ans.",
            effort: "100-300 € + radiateurs compatibles",
          },
          {
            label: "Adapter le tarif électrique au profil de consommation",
            description:
              "Comparer les options tarifaires (Heures Pleines/Heures Creuses, Tempo) selon votre profil. Pour un foyer avec radiateurs à forte inertie et automatismes, les Heures Creuses peuvent économiser 100-300 €/an. Pour un usage variable, le tarif base reste plus simple. Faire le calcul sur votre relevé annuel via les comparateurs publics (médiateur de l'énergie).",
            effort: "Comparaison annuelle",
          },
        ]}
        structural={[
          {
            label: "Plancher rayonnant en construction neuve ou rénovation lourde",
            description:
              "Si l'opportunité existe (chape à refaire, construction neuve), le plancher rayonnant électrique offre le meilleur confort thermique. Coût 80-150 €/m² posé. Pas de radiateurs visibles, chaleur diffuse depuis le sol, programmation par zone. Inertie élevée donc anticipation nécessaire en saisonnalité. Idéal en pièces principales, à éviter sous certains parquets sensibles à la température.",
            effort: "80-150 €/m² en chape",
          },
          {
            label: "Combiner avec un chauffe-eau thermodynamique pour l'ECS",
            description:
              "Pour découpler le chauffage et l'eau chaude sanitaire, un chauffe-eau thermodynamique (CET) consomme 60-70 % moins qu'un cumulus électrique standard. MaPrimeRénov' 2026 finance le CET (1 200 € pour très modestes, 800 € pour modestes, 400 € pour intermédiaires). Investissement 2 500-4 000 € posé, amorti en 5-10 ans selon usage.",
            effort: "Investissement 2 500-4 000 €",
          },
          {
            label: "Compléter avec des protections solaires en été",
            description:
              "Un logement bien isolé pour l'hiver tend à surchauffer l'été (effet thermos). Volets, brise-soleil, films solaires ou stores extérieurs réduisent les apports solaires et évitent le recours à la climatisation. Stratégie cohérente avec un chauffage électrique : préserver l'enveloppe pour limiter la dépendance à tout équipement actif.",
            effort: "Travaux complémentaires",
          },
          {
            label: "Suivre les consommations annuelles pour ajuster",
            description:
              "Tableau de suivi simple : consommation totale du logement, consommation chauffage estimée (différence été/hiver), kWh/m²/an. Comparer aux références ADEME pour le climat et le bâti (entre 40 et 80 kWh/m²/an pour un BBC, 100-150 pour un classique non rénové). Une dérive signale un défaut à investiguer (radiateur en panne, programmation oubliée).",
            effort: "Suivi mensuel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le chauffage électrique."
        errors={[
          {
            label: "\"Le chauffage électrique est forcément ruineux\"",
            explanation:
              "Faux dans les bonnes conditions. Sur un logement bien isolé avec radiateurs à inertie, la consommation est compétitive avec une PAC sur le coût global. La réputation tient aux anciens convecteurs sur logement passoire, configuration en effet ruineuse. Mais ce n'est pas une fatalité du principe électrique, c'est un cumul de choix défavorables.",
          },
          {
            label: "\"Les radiateurs électriques brûlent l'air et le rendent sec\"",
            explanation:
              "Vrai pour les anciens convecteurs (chauffe d'air par contact direct sur résistance brûlante) qui pyrolysent la poussière déposée. Faux pour les radiateurs à inertie modernes : la surface chauffe à 60-70 °C maximum, pas de pyrolyse, pas d'effet sécheur sur l'air. La sensation d'air sec en hiver vient surtout de l'air froid extérieur naturellement peu humide qu'on chauffe (l'humidité absolue ne change pas, mais l'humidité relative chute).",
          },
          {
            label: "\"Sans entretien, ça va tomber en panne rapidement\"",
            explanation:
              "Un radiateur électrique à inertie n'a quasiment pas d'entretien : pas de fluide à recharger, pas de filtre à changer, pas de joints à surveiller. Dépoussiérage annuel suffit. Durée de vie 15-25 ans typique. C'est même l'un des avantages du mode électrique : zéro contrainte d'entretien obligatoire, contrairement à la PAC (entretien annuel) ou au gaz (contrôle annuel obligatoire).",
          },
          {
            label: "\"Le chauffage électrique pollue à cause de l'origine de l'électricité\"",
            explanation:
              "Réduction trop rapide. En France, le mix électrique est très peu carboné (≈ 50 g CO₂eq/kWh en 2024 selon RTE), grâce au nucléaire et aux renouvelables. Le chauffage électrique a donc un bilan CO₂ comparable ou meilleur qu'une PAC dans certains pays voisins, et nettement meilleur qu'un chauffage gaz ou fioul. Sur le critère qualité de l'air intérieur (objet de cette page), l'électrique reste imbattable.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le chauffage électrique sain"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Chauffage sain",
            title: "Pompe à chaleur air-eau : performance, aides, contraintes",
            description:
              "Comparaison directe : la PAC est plus performante mais plus complexe. Critères pour arbitrer entre PAC et électrique selon votre situation.",
            href: "/chauffage-sain/pompe-a-chaleur-air-eau/",
          },
          {
            tag: "Chauffage sain",
            title: "Choisir son chauffage en rénovation",
            description:
              "Méthode globale d'arbitrage entre PAC, électrique et bois selon climat, isolation et budget.",
            href: "/chauffage-sain/choisir-chauffage-renovation/",
          },
          {
            tag: "Rénovation saine",
            title: "Isolation et ventilation",
            description:
              "L'isolation est la condition n°1 d'un chauffage électrique économe. À traiter avant tout choix d'équipement.",
            href: "/renovation-saine/isolation-ventilation/",
          },
        ]}
      />
    </>
  );
}

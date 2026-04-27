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
  title: "Dégazage des matériaux de construction : comprendre le phénomène",
  description:
    "Peintures, colles, parquets, panneaux bois : comprendre le dégazage des matériaux, sa durée selon les catégories, les facteurs qui l'influencent et comment l'accélérer.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/degazage-materiaux/",
  },
  openGraph: {
    title: "Dégazage des matériaux de construction : comprendre le phénomène",
    description:
      "Peintures, colles, parquets, panneaux bois : comprendre le dégazage des matériaux, sa durée selon les catégories, les facteurs qui l'influencent et comment l'accélérer.",
    url: "https://www.maisonbionat.fr/materiaux-sains/degazage-materiaux/",
  },
};

export default function DegazageMateriauxPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Dégazage des matériaux de construction : comprendre le phénomène", href: "https://www.maisonbionat.fr/materiaux-sains/degazage-materiaux/" },
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
        tag="Comprendre"
        title="Le dégazage des matériaux : pourquoi vos murs, sols et colles émettent des polluants dans l'air"
        quickAnswer="Le dégazage est le processus par lequel les composés chimiques volatils contenus dans les matériaux de construction et de décoration se libèrent progressivement dans l'air intérieur. Ce phénomène est normal et inévitable avec la plupart des matériaux synthétiques : peintures, colles, panneaux de bois aggloméré, revêtements de sol. Les émissions sont maximales dans les premières semaines, puis décroissent selon une courbe exponentielle. La ventilation, la température et l'humidité sont les principaux facteurs qui influencent la durée et l'intensité du dégazage."
        stats={[
          {
            value: "Pic",
            label: "d'émissions dans les premiers jours, puis décroissance exponentielle",
          },
          {
            value: "5 à 7 ans",
            label: "durée d'émission mesurable pour certains panneaux de particules agglomérées en conditions normales",
          },
          {
            value: "300–400",
            label: "µg/m³/heure : émissions de formaldéhyde d'un meuble neuf en aggloméré en espace peu ventilé",
          },
          {
            value: "10 µg/m³",
            label: "valeur guide ANSES pour le formaldéhyde en exposition chronique (longue durée)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Catégories de matériaux" },
          { id: "signes", label: "Reconnaître un dégazage actif" },
          { id: "causes", label: "Facteurs qui l'influencent" },
          { id: "actions", label: "Accélérer et gérer" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les matériaux qui dégazent le plus et leurs profils d'émission."
        description="Tous les matériaux ne dégazent pas de la même façon ni pendant la même durée. On peut distinguer trois grandes catégories selon leur intensité et la durée de leurs émissions."
        variants={[
          {
            indicator: "Émissions intenses et courtes",
            name: "Peintures, vernis et solvants de chantier",
            description:
              "Les peintures à base de solvants et les vernis émettent des COV en grande quantité dans les premières heures et les premiers jours après application. Les émissions décroissent rapidement. Pour une peinture à l'eau classique, l'essentiel du dégazage est terminé en 4 à 6 semaines. Pour les vernis à solvants, les émissions peuvent se prolonger plusieurs mois.",
          },
          {
            indicator: "Émissions modérées et prolongées",
            name: "Colles de pose, adhésifs, mastics",
            description:
              "Les colles à solvants pour sols ou les mastics de calfeutrage peuvent émettre des COV pendant plusieurs mois après application. Leur surface d'émission est parfois importante (colle étalée sur toute la surface d'un sol) et leur accessibilité à l'air est limitée une fois le revêtement posé, ce qui ralentit mais prolonge le dégazage.",
          },
          {
            indicator: "Émissions faibles mais très durables",
            name: "Panneaux de bois aggloméré, MDF, stratifié",
            description:
              "Les panneaux de bois reconstitués contenant des résines urée-formaldéhyde émettent du formaldéhyde pendant des années. Le mécanisme est une hydrolyse lente des résines, accélérée par l'humidité et la chaleur. Un meuble ou un parquet stratifié peut émettre du formaldéhyde à des niveaux mesurables pendant 5 à 7 ans, avec des concentrations décroissantes.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Comment reconnaître qu'un matériau est en phase de dégazage actif."
        subtitle="Certains indices permettent de détecter un dégazage important, même en l'absence de mesure directe."
        signs={[
          {
            label: "Odeur chimique persistante dans la pièce",
            description:
              "Une odeur de solvant, de plastique neuf, de colle ou de peinture fraîche qui persiste plus de 48 à 72 heures après la fin des travaux ou l'installation d'un meuble signale un dégazage actif. L'intensité de l'odeur n'est pas proportionnelle au niveau de danger : certains COV sont inodores.",
            severity: "modéré",
          },
          {
            label: "Odeur qui réapparaît à la chaleur",
            description:
              "Si une odeur chimique, absente en hiver, réapparaît en été dans une pièce, cela indique un dégazage résiduel encore actif. La chaleur accélère l'évaporation des composés volatils. C'est particulièrement observé avec les sols vinyliques et certains panneaux de bois.",
            severity: "léger",
          },
          {
            label: "Irritation des yeux ou de la gorge dans la pièce rénovée",
            description:
              "Des muqueuses irritées (yeux, gorge, nez) qui s'améliorent en quittant la pièce indiquent des concentrations élevées de COV dans l'air. C'est un indicateur clinique du dégazage actif. Ces symptômes sont plus fréquents dans les premiers jours à semaines après travaux.",
            severity: "critique",
          },
          {
            label: "Condensation anormale sur les surfaces fraîchement peintes",
            description:
              "Certains solvants lourds en cours d'évaporation peuvent créer une fine couche de condensation sur les surfaces voisines. Ce phénomène est temporaire mais indique une forte concentration de composés volatils en cours de dégazage dans l'air de la pièce.",
            severity: "léger",
          },
          {
            label: "Mesure de formaldéhyde au-dessus de 10 µg/m³",
            description:
              "Des kits de mesure de formaldéhyde (bandelettes ou tubes colorimétriques, disponibles en ligne ou en quincaillerie) permettent une évaluation objective. Une concentration supérieure à 10 µg/m³ dépasse la valeur guide ANSES pour l'exposition chronique. Une mesure élevée dans une pièce récemment rénovée confirme un dégazage actif.",
            severity: "critique",
          },
          {
            label: "Odeur plus forte après avoir chauffé la pièce",
            description:
              "Si l'odeur d'une pièce s'intensifie après avoir monté le chauffage, c'est un signe de dégazage thermiquement activé. Cela confirme que des composés volatils résiduels sont encore présents dans les matériaux et se libèrent sous l'effet de la chaleur.",
            severity: "modéré",
          },
        ]}
        footerNote="L'absence d'odeur ne garantit pas l'absence de COV. Le formaldéhyde, qui est l'un des polluants intérieurs les plus répandus, a un seuil olfactif élevé (environ 100 µg/m³) : il peut être présent à des concentrations préoccupantes sans être détecté à l'odorat."
      />

      <IssueCauses
        id="causes"
        title="Les facteurs qui accélèrent ou prolongent le dégazage."
        subtitle="Comprendre ces facteurs permet d'agir efficacement pour réduire la durée et l'intensité des émissions."
        causes={[
          {
            number: "01",
            cause: "La température ambiante",
            explanation:
              "La chaleur est le principal accélérateur du dégazage. Pour chaque augmentation de 10°C, la vitesse d'évaporation des composés volatils est multipliée par un facteur 2 à 3 environ. Une pièce maintenue à 25°C dégazera environ deux fois plus vite qu'à 15°C. Cette propriété peut être utilisée volontairement pour accélérer le dégazage des matériaux avant l'occupation d'une pièce.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "La ventilation et le renouvellement d'air",
            explanation:
              "La ventilation crée un gradient de concentration entre les matériaux (riches en COV) et l'air ambiant, ce qui accélère la migration des molécules volatiles hors des matériaux. Une pièce bien ventilée dégazera plus vite et à des concentrations bien plus basses qu'une pièce fermée. C'est le levier le plus accessible et le plus puissant.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "L'humidité relative",
            explanation:
              "L'humidité accélère l'hydrolyse des résines urée-formaldéhyde dans les panneaux de bois, ce qui augmente leurs émissions de formaldéhyde. Dans une cuisine ou une salle de bain humide, les meubles en aggloméré émettront davantage que dans une pièce sèche. C'est l'une des raisons pour lesquelles les pièces humides méritent une attention particulière sur le choix des matériaux.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La surface d'exposition et les finitions de surface",
            explanation:
              "Un panneau de bois dont les faces sont recouvertes d'un placage ou d'un film mélaminé émet moins par unité de surface qu'un panneau brut. Les chants non listurés, les faces intérieures non finies et les dos bruts représentent des surfaces d'émission directe qui prolongent le dégazage total du matériau.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "L'âge du matériau et ses conditions de stockage",
            explanation:
              "Un matériau stocké longtemps en entrepôt ventilé aura déjà partiellement dégazé avant sa pose. En revanche, un matériau stocké dans un espace clos et chaud (camion de livraison, container) peut avoir accumulé des COV et présenter un pic d'émissions plus important lors de l'ouverture. La durée entre fabrication et pose influence le profil d'émission.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Gérer et accélérer le dégazage des matériaux."
        immediate={[
          {
            label: "Ventiler en continu pendant et après les travaux",
            description:
              "L'aération est le levier principal. Ouvrez les fenêtres en opposition (deux ouvertures sur des façades différentes) pour créer un courant d'air. Pendant les travaux : ventilation en continu. Après les travaux : aération intensive pendant au moins 4 à 6 semaines, plusieurs heures par jour minimum.",
            effort: "Gratuit",
          },
          {
            label: "Chauffer puis aérer pour accélérer le dégazage",
            description:
              "Technique du 'bake out' : chauffez la pièce à 25-27°C pendant quelques heures (chauffage d'appoint si nécessaire), puis aérez intensément pendant 1 à 2 heures. Répétez plusieurs fois avant l'occupation. La chaleur libère les COV plus rapidement, l'aération les évacue. Cette technique est particulièrement efficace pour les peintures et les vernis.",
            effort: "Coût léger du chauffage",
          },
          {
            label: "Ne pas occuper les pièces rénovées pendant la phase de dégazage intense",
            description:
              "Les concentrations de COV sont maximales dans les premiers jours après la fin des travaux. Si possible, n'occupez pas la pièce pendant au moins 1 à 2 semaines après une rénovation importante (peinture + sol + mobilier neuf). Les personnes vulnérables (enfants, femmes enceintes, asthmatiques) doivent être prioritaires dans cette précaution.",
            effort: "Organisation",
          },
          {
            label: "Mesurer la qualité de l'air avant la réoccupation si possible",
            description:
              "Des kits de mesure de formaldéhyde (10 à 30 €) permettent d'évaluer objectivement si les concentrations sont revenues sous la valeur guide de l'ANSES (10 µg/m³ en exposition chronique). Pour les chambres d'enfants, cette vérification est particulièrement utile après une rénovation complète.",
            effort: "10 à 30 € pour un kit de mesure",
          },
        ]}
        structural={[
          {
            label: "Choisir des matériaux moins émissifs pour réduire la durée de dégazage",
            description:
              "Les matériaux classés A+ (peintures, revêtements), E0 ou CARB Phase 2 (panneaux bois) ont des émissions initiales plus faibles et atteignent des niveaux bas beaucoup plus rapidement. Un investissement dans des matériaux meilleurs qualifie chaque rénovation pour réduire structurellement la phase de dégazage.",
            effort: "Surcoût de 10 à 30 % selon les produits",
          },
          {
            label: "Installer ou entretenir une VMC pour maintenir le renouvellement d'air",
            description:
              "Une ventilation mécanique contrôlée (VMC) bien entretenue assure un renouvellement d'air en continu, ce qui limite l'accumulation des COV émis par les matériaux dans le temps. C'est la solution la plus efficace pour gérer les émissions résiduelles à long terme, notamment celles des panneaux de bois qui durent plusieurs années.",
            effort: "Installation : 500 à 1500 € ; entretien : 100 à 200 €/an",
          },
          {
            label: "Planifier les rénovations en plusieurs phases pour limiter les cumuls",
            description:
              "Quand plusieurs matériaux sont posés simultanément (peinture + sol + mobilier neuf), leurs émissions se cumulent. Si les travaux le permettent, étalez les interventions sur plusieurs semaines : posez d'abord le sol, laissez-le dégazer, puis peignez, puis installez les meubles. Chaque matériau dégazera dans un air déjà partiellement dilué.",
            effort: "Organisation du chantier",
          },
          {
            label: "Peindre les surfaces brutes des panneaux pour bloquer les émissions résiduelles",
            description:
              "Les faces non finies des panneaux (dos de meubles, intérieur de tiroirs, chants bruts) sont des surfaces d'émission directe. Recouvrez-les d'une peinture A+ ou d'un vernis approprié pour réduire les échanges gazeux entre le panneau et l'air ambiant. Ce geste peut réduire sensiblement les émissions résiduelles à long terme.",
            effort: "Faible coût (peinture A+)",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les idées reçues sur le dégazage des matériaux."
        errors={[
          {
            label: "\"Une pièce qui ne sent plus rien ne dégazent plus\"",
            explanation:
              "Le formaldéhyde, qui est l'un des COV les plus préoccupants dans les logements, n'est perceptible à l'odorat qu'à partir d'environ 100 µg/m³. La valeur guide de l'ANSES est 10 fois inférieure (10 µg/m³). Un matériau peut donc émettre du formaldéhyde à des niveaux problématiques sans que l'odeur soit perceptible.",
          },
          {
            label: "\"Le dégazage est terminé en quelques semaines\"",
            explanation:
              "Pour les peintures et vernis, c'est approximativement vrai. Pour les panneaux de bois aggloméré et MDF, les émissions de formaldéhyde peuvent rester mesurables pendant plusieurs années. Le dégazage initial intense se termine en quelques semaines, mais la queue longue des émissions se prolonge bien au-delà.",
          },
          {
            label: "\"Les plantes dépolluantes absorbent les COV du dégazage\"",
            explanation:
              "Les études menées en conditions réelles (et non en laboratoire) montrent que l'effet des plantes sur les COV dans un logement est négligeable à l'échelle d'une pièce. Il faudrait plusieurs centaines de plantes pour obtenir un effet mesurable sur la concentration de formaldéhyde. L'aération est incomparablement plus efficace.",
          },
          {
            label: "\"Ouvrir les fenêtres en hiver aggrave la situation\"",
            explanation:
              "L'aération en hiver est légèrement moins efficace par rapport aux températures estivales (la chaleur accélère le dégazage), mais elle reste le levier le plus puissant pour réduire les concentrations. Même 10 minutes d'aération intensive en courant d'air suffisent à réduire de 50 à 70 % les concentrations de COV accumulées.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le dégazage des matériaux"
        items={[
          {
            question: "Combien de temps dure le dégazage d'une peinture ?",
            answer:
              "Pour une peinture acrylique à l'eau classée A+, les émissions les plus importantes se concentrent dans les 48 à 72 premières heures. Elles deviennent faibles au bout de 2 à 4 semaines. Pour une peinture alkyde ou glycéro (à solvants), la durée peut être de 2 à 4 mois. L'aération intensive raccourcit ces délais. Même avec une peinture A+, une aération de 4 à 6 semaines reste recommandée.",
          },
          {
            question: "Les matériaux anciens dégazent-ils encore ?",
            answer:
              "Les matériaux anciens ont déjà largement dégazé. Pour les peintures, après 2 à 3 mois, les émissions résiduelles sont généralement très faibles. Pour les panneaux de bois aggloméré, après 5 à 7 ans, les émissions sont très basses mais pas nulles. La rénovation (ponçage, perçage, découpe) d'un ancien matériau peut rouvrir des surfaces d'émission et relancer un dégazage local.",
          },
          {
            question: "Faut-il aérer même si les matériaux sont tous classés A+ ?",
            answer:
              "Oui. Le classement A+ garantit de faibles émissions par unité de surface, mais dans une pièce entièrement rénovée (sol + murs + plafond + mobilier neuf), la surface totale émissive est grande. Le cumul de plusieurs matériaux A+ peut créer une concentration significative dans l'air d'une pièce peu ventilée. L'aération reste indispensable.",
          },
          {
            question: "Comment mesurer le formaldéhyde chez soi ?",
            answer:
              "Plusieurs types de kits sont disponibles : les tubes colorimétriques (lecture visuelle, 5 à 15 €, mesure ponctuelle), les capteurs passifs sur badge (exposés pendant 24 à 48 heures, envoyés en laboratoire, 20 à 40 €) et les moniteurs électrochimiques (100 à 300 €, mesure en continu). Pour une évaluation après travaux, le capteur passif envoyé en laboratoire offre le meilleur rapport précision/coût.",
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
              "Comprendre l'étiquetage A+ des peintures, choisir les bons produits et gérer le dégazage après application.",
            href: "/materiaux-sains/peintures-revetements-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des meubles neufs : protocole pratique",
            description:
              "Guide pratique pour gérer la période de dégazage d'un meuble neuf avant de l'installer dans une chambre.",
            href: "/materiaux-sains/degazage-meubles-neufs/",
          },
          {
            tag: "Air intérieur",
            title: "Le formaldéhyde dans la maison",
            description:
              "Le polluant majeur émis par les matériaux qui dégazent : sources, valeurs guides ANSES et stratégie complète de réduction.",
            href: "/air-interieur/formaldehyde-maison/",
          },
        ]}
      />
    </>
  );
}

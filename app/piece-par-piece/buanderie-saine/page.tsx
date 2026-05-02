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
  title: "Buanderie saine : ventilation, séchage et lessive sans pollution",
  description:
    "Pièce dédiée au lavage et au séchage : maîtriser l'humidité, choisir une ventilation adaptée, organiser le séchage et limiter les COV des produits de lessive.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/buanderie-saine/",
  },
  openGraph: {
    title: "Buanderie saine : ventilation, séchage et lessive sans pollution",
    description:
      "Pièce dédiée au lavage et au séchage : maîtriser l'humidité, choisir une ventilation adaptée, organiser le séchage et limiter les COV des produits de lessive.",
    url: "https://www.maisonbionat.fr/piece-par-piece/buanderie-saine/",
  },
};

const faqItems = [
  {
    question: "La buanderie doit-elle être raccordée à la VMC ?",
    answer:
      "Oui, c'est le cas idéal. La buanderie produit beaucoup d'humidité (lavage, séchage du linge) et doit être traitée comme une pièce humide au sens technique : raccordement à l'extraction de la VMC avec une bouche dédiée, débit minimum 30 m³/h en simple flux. Si l'extraction n'est pas possible (pièce ajoutée hors plan VMC, sous-sol non raccordé), une ventilation autonome (extracteur sur fenêtre ou en gaine vers l'extérieur) avec hygrostat est l'alternative la plus efficace. Une fenêtre seule ne suffit jamais à compenser le pic d'humidité d'un séchage de linge en intérieur.",
  },
  {
    question: "Sèche-linge à condensation ou pompe à chaleur : quel impact sur la maison ?",
    answer:
      "Un sèche-linge à condensation classique récupère l'eau du linge mais rejette de la chaleur et un peu d'humidité résiduelle dans la pièce. Un sèche-linge à pompe à chaleur consomme 50 à 60 % moins d'électricité et rejette beaucoup moins de chaleur, mais reste plus lent et plus cher à l'achat (700 à 1 200 € contre 400 à 700 €). Aucun des deux ne dispense de ventiler la buanderie. À l'achat, vérifier la classe énergétique (A+++ pour les pompes à chaleur récentes) et la présence d'un capteur d'humidité qui arrête le cycle au juste sec, économe en énergie et meilleur pour les textiles.",
  },
  {
    question: "Où installer la buanderie dans la maison ?",
    answer:
      "L'idéal est une pièce dédiée à proximité de la cuisine ou de la salle de bain (les arrivées et évacuations d'eau sont déjà en place), avec une fenêtre ou une bouche VMC, et si possible un accès extérieur direct pour un séchoir parapluie. Une buanderie en sous-sol est possible mais demande une vigilance accrue sur la ventilation (le sous-sol cumule humidité et risque de radon en zone à potentiel) et une évacuation chauffée pour éviter le gel des canalisations. Une cuisine ouverte qui sert de buanderie est la pire configuration : l'humidité et les COV de la lessive contaminent l'espace de cuisson et le séjour.",
  },
  {
    question: "Quels produits de lessive choisir pour une buanderie saine ?",
    answer:
      "Privilégier les lessives à composition courte, sans parfum synthétique, sans optique azurant, sans phosphates ni EDTA. Les labels EU Ecolabel et Ecocert offrent un garde-fou minimum sur les ingrédients. Les lessives en feuilles ou en barre concentrent moins d'eau et ont un meilleur bilan d'émissions, mais l'efficacité varie selon les marques. Éviter les adoucissants (forte charge en parfums et tensioactifs cationiques émissifs) et les feuilles assouplissantes pour sèche-linge (qui déposent des résidus chimiques sur les fibres et dans l'air). Pour une lessive vraiment minimale, savon de Marseille ou cendres de bois filtrées restent les options les plus sobres pour l'air intérieur.",
  },
];

export default function BuanderieSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    {
      name: "Buanderie saine",
      href: "https://www.maisonbionat.fr/piece-par-piece/buanderie-saine/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Pièce par pièce"
        parentHref="/piece-par-piece/"
        tag="Pièce humide"
        title="Buanderie saine : maîtriser humidité, lessive et séchage dans une pièce dédiée"
        quickAnswer="La buanderie est l'une des pièces les plus humides du logement et l'une des plus chargées en COV émis par les produits de lessive et d'entretien des textiles. Une lessive de 5 kg contient 1,5 à 3 litres d'eau qui se libèrent pendant le séchage, soit l'équivalent de plusieurs douches en humidité ajoutée. Sans ventilation adaptée, cette vapeur migre dans tout le logement, condense sur les vitrages des pièces froides et favorise les moisissures. Une buanderie bien conçue est traitée comme une pièce humide au sens technique : raccordement à la VMC ou ventilation autonome dédiée, sol étanche, séchage organisé (sèche-linge ou séchoir avec ventilation soutenue), choix de produits de lessive à composition simple. Cette page liste les arbitrages d'aménagement et les bonnes pratiques pour limiter l'impact d'une buanderie sur la qualité de l'air du reste de la maison."
        stats={[
          {
            value: "1,5 à 3 L",
            label: "eau libérée par cycle de séchage d'une lessive de 5 kg",
          },
          {
            value: "30 m³/h",
            label: "débit minimal d'extraction recommandé pour une buanderie en VMC simple flux",
          },
          {
            value: "50-60 %",
            label: "économies d'énergie d'un sèche-linge à pompe à chaleur (A+++) vs condensation classique",
          },
          {
            value: "EU Ecolabel",
            label: "label public exigeant sur les ingrédients des lessives",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les enjeux" },
          { id: "signes", label: "Configurations à risque" },
          { id: "causes", label: "Sources de pollution" },
          { id: "actions", label: "Aménager et équiper" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi une buanderie mérite la même attention qu'une salle de bain."
        description="Au regard de l'humidité produite et des produits chimiques manipulés, une buanderie cumule deux profils de pièce difficile : la pièce humide (au sens des règles de ventilation NF DTU 68.3) et la pièce de stockage de produits ménagers émissifs. La produire sans réfléchir à la ventilation, comme un simple débarras avec un lave-linge, garantit une humidité élevée qui contamine le reste du logement et une concentration de COV plus marquée que dans une cuisine équivalente. Les arbitrages se font sur trois axes : la ventilation, l'organisation du séchage, et le choix des produits de lessive."
        variants={[
          {
            indicator: "Pièce dédiée",
            name: "Buanderie indépendante avec VMC",
            description:
              "Configuration idéale : pièce de 4 à 8 m² séparée par une porte, raccordée à la VMC, avec arrivée d'eau, évacuation et alimentation électrique 16 A. Permet d'isoler l'humidité et les odeurs des autres pièces, et de stocker hors de portée les produits ménagers. Coût d'aménagement modéré si plan prévu en construction ou rénovation.",
          },
          {
            indicator: "Cellier multifonction",
            name: "Buanderie + cellier + chauffage",
            description:
              "Pièce qui combine plusieurs usages : machine à laver, sèche-linge, chaudière ou ballon d'eau chaude, stockage de denrées. Configuration courante en pavillon. Vigilance accrue sur la ventilation : la chaudière demande de l'air, le séchage du linge produit beaucoup d'humidité, le stockage alimentaire suppose un environnement stable. La VMC est ici non négociable.",
          },
          {
            indicator: "Coin buanderie",
            name: "Lave-linge dans cuisine, SDB ou couloir",
            description:
              "Configuration la plus fréquente en appartement et petites maisons. Compromis acceptable si la pièce hôte est ventilée mécaniquement et si le sèche-linge est à pompe à chaleur (rejette peu d'humidité). Mais le pire des cas (lave-linge ouvert dans une chambre, séchage de linge à l'intérieur dans le séjour) doit être évité absolument.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître une configuration de buanderie à risque."
        subtitle="Quelques signaux faciles à observer indiquent qu'une buanderie déteint sur la qualité de l'air et l'humidité du reste du logement. À surveiller en saison de chauffe."
        signs={[
          {
            label: "Buée sur les vitrages d'autres pièces les jours de lessive",
            description:
              "Si les fenêtres du séjour ou des chambres se couvrent de buée principalement les jours où vous lavez/séchez du linge, l'humidité de la buanderie diffuse dans tout le logement. C'est le signe que la ventilation locale ne capture pas correctement la vapeur produite. À traiter en priorité par renforcement de l'extraction.",
            severity: "modéré",
          },
          {
            label: "Odeur persistante de lessive ou de fraîcheur synthétique dans tout le logement",
            description:
              "Les parfums de lessive contiennent des dizaines de composés volatils, dont le limonène et l'alpha-pinène, qui réagissent avec l'ozone résiduel de l'air intérieur pour produire du formaldéhyde et des particules ultrafines. Une odeur diffuse de fraîcheur dans tout le logement signe une exposition continue à ces sous-produits.",
            severity: "modéré",
          },
          {
            label: "Moisissures derrière le lave-linge ou aux angles bas du mur",
            description:
              "Tâches noires sur le silicone d'évacuation, sur le mur derrière la machine, dans l'angle inférieur de la pièce. Indique une humidité chronique au-delà de 70 % en surface, condition de prolifération des moisissures. À traiter par identification de la source (fuite, ventilation, condensation) et nettoyage en surface.",
            severity: "critique",
          },
          {
            label: "Linge qui sèche lentement ou reste humide après cycle",
            description:
              "Symptôme indirect : si le linge met plus de 24 heures à sécher en intérieur, c'est que l'air ne renouvelle pas la pièce assez vite et que l'humidité plafonne. Le séchage devient un cercle vicieux : le linge libère de l'eau, l'air sature, le séchage ralentit, l'eau stagne. Solution : ventilation forcée pendant le séchage.",
            severity: "modéré",
          },
          {
            label: "Bouche VMC absente ou colmatée dans la buanderie",
            description:
              "Une buanderie sans bouche VMC est techniquement non conforme aux règles de la pièce humide. Une bouche obstruée par la peinture, par un meuble ou par une grille bouchée a le même effet. Inspection visuelle au plafond ou en haut du mur, test du papier-test : un papier maintenu à la bouche doit être nettement aspiré.",
            severity: "critique",
          },
          {
            label: "Buanderie en sous-sol sans aération extérieure",
            description:
              "Configuration risquée : sous-sol froid (favorise la condensation), souvent peu ventilé, parfois proche d'une zone à potentiel radon. Le séchage du linge accumule l'humidité dans la pièce et peut migrer vers les pièces du dessus. Exige une extraction mécanique vers l'extérieur et un contrôle hygrométrique régulier.",
            severity: "critique",
          },
        ]}
        footerNote="Une buanderie qui n'envoie aucun signal négatif au reste du logement (pas de buée à distance, pas d'odeur diffuse, pas de moisissure) est en général bien dimensionnée. Sinon, intervenir en priorité sur la ventilation avant tout autre poste."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les nuisances d'une buanderie."
        subtitle="Trois familles de sources se cumulent dans une buanderie : l'humidité, les COV des produits, et les particules issues du linge. Les leviers d'action sont différents pour chacune."
        causes={[
          {
            number: "01",
            cause: "Humidité de séchage du linge",
            explanation:
              "Source numéro un. Une lessive de 5 kg contient 1,5 à 3 litres d'eau qui se libèrent pendant le séchage. Sans extraction adaptée, cette vapeur sature l'air en quelques heures, surtout en hiver quand le logement est fermé. C'est la cause directe des moisissures, de la condensation diffuse et de l'odeur de moisi qui peut s'installer.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "COV des lessives, adoucissants et désodorisants textiles",
            explanation:
              "Les lessives parfumées émettent une dizaine de COV pendant le lavage et le séchage : limonène, alpha-pinène, butylphénol, résidus de tensioactifs. Les adoucissants ajoutent des amines quaternaires émissives. Les feuilles assouplissantes pour sèche-linge déposent des résidus qui se libèrent ensuite à chaque utilisation. Les sprays parfumés pour textile (souvent étiquetés 'fraîcheur') sont parmi les sources de COV les plus concentrées du marché.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Microparticules de fibres textiles",
            explanation:
              "Le séchage en machine génère un volume notable de microparticules fibreuses, partiellement piégées par le filtre du sèche-linge mais en partie diffusées. Microfibres synthétiques (polyester, nylon) issues des vêtements techniques préoccupent davantage car elles peuvent s'accumuler dans les voies respiratoires. Limiter le séchage machine pour les vêtements de sport en synthétique réduit cette source.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Eau stagnante dans le tambour ou les évacuations",
            explanation:
              "Joint de hublot non séché, bac à lessive jamais nettoyé, siphon d'évacuation peu utilisé : autant de zones où l'eau stagne et où prolifèrent bactéries et moisissures qui dégagent des odeurs et des composés volatils. Entretien simple : laisser le hublot ouvert après usage, nettoyer le bac mensuellement, faire un cycle vide à 90 °C une fois par mois.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Stockage de produits ménagers ouverts ou mal scellés",
            explanation:
              "Les bidons de lessive, javel, détartrant, désinfectants stockés en buanderie émettent en continu si leurs bouchons ne sont pas étanches. Une étagère pleine de produits ouverts dans une petite pièce non ventilée constitue une source diffuse mais persistante de COV et de chlore (pour la javel). Stocker hermétiquement, peu de produits, et hors de portée des enfants.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Aménager, équiper et utiliser sa buanderie sans contaminer le logement."
        immediate={[
          {
            label: "Vérifier ou installer une bouche d'extraction VMC",
            description:
              "Première priorité. Une buanderie est une pièce humide qui doit être raccordée à la VMC avec un débit minimum de 30 m³/h. Si la pièce a été créée hors plan initial (rénovation, extension), faire poser un piquage sur le réseau existant ou installer un extracteur autonome avec hygrostat (50-150 €) qui se déclenche automatiquement au-delà d'un seuil d'humidité.",
            effort: "Variable selon configuration",
          },
          {
            label: "Privilégier le séchage extérieur quand possible",
            description:
              "Un séchoir parapluie au jardin ou un fil sur balcon évacue 100 % de l'humidité hors du logement, sans coût énergétique et sans usure des textiles. Réservé aux temps secs, mais utile sur 4 à 8 mois selon la région. Solution la plus simple sanitairement et économiquement.",
            effort: "Gratuit",
          },
          {
            label: "Choisir une lessive sobre en composition",
            description:
              "Lessive courte (10 ingrédients ou moins), sans parfum synthétique, sans optique azurant, sans phosphates. Labels EU Ecolabel ou Ecocert comme garde-fou. Adoucissant à supprimer (réduit l'usure des textiles, mais coût en COV largement supérieur au bénéfice). Pour les peaux sensibles ou les bébés, lessive hypoallergénique sans parfum.",
            effort: "Choix d'achat",
          },
          {
            label: "Entretenir lave-linge et sèche-linge",
            description:
              "Laisser le hublot et le bac à lessive ouverts entre les utilisations pour sécher. Nettoyer le bac tous les mois. Cycle vide à 90 °C ou avec produit nettoyeur de tambour tous les 3 à 6 mois. Filtre de sèche-linge à vider après chaque cycle, condenseur à nettoyer tous les 3 mois. Évacuation à dégager une fois par an.",
            effort: "Routine simple",
          },
        ]}
        structural={[
          {
            label: "Concevoir ou aménager une buanderie dédiée si possible",
            description:
              "En construction ou rénovation, prévoir 4 à 8 m² avec porte fermable, fenêtre, bouche VMC, sol étanche en carrelage ou vinyle A+, alimentation eau, évacuation, prise 16 A et 32 A si plaque ou bouilloire à proximité. Le surcoût est marginal au moment du gros œuvre, le gain en qualité de l'air et en organisation domestique est durable.",
            effort: "Plan de construction ou rénovation",
          },
          {
            label: "Sèche-linge à pompe à chaleur en cas de séchage régulier",
            description:
              "Si le séchage en intérieur est obligatoire (pas d'extérieur disponible, climat humide), un sèche-linge à pompe à chaleur classe A+++ rejette peu de chaleur et d'humidité, consomme 50-60 % moins qu'un condensation classique. Coût 700-1 200 € contre 400-700 € pour un condensation. Amorti en 4 à 6 ans selon la fréquence d'usage.",
            effort: "Investissement durable",
          },
          {
            label: "Installer un hygromètre dans la buanderie",
            description:
              "Hygromètre à 15-25 € en évidence dans la pièce. Cible : 40-55 % en repos, ne pas dépasser 65 % pendant le séchage. Au-delà, ouvrir la fenêtre, lancer la VMC en grande vitesse ou ajouter un déshumidificateur d'appoint. La mesure objective évite les erreurs d'appréciation et permet de calibrer la routine de séchage.",
            effort: "Achat 15-25 €",
          },
          {
            label: "Stocker les produits ménagers hors de portée et hermétiquement",
            description:
              "Armoire fermée à hauteur d'adulte, hors de portée des enfants. Bouchons bien serrés. Limiter le nombre de produits ouverts simultanément (un de chaque catégorie suffit dans 95 % des cas). Conserver les emballages d'origine pour les fiches de sécurité. Aérer la pièce avant et après toute utilisation de produit puissant (javel, détartrant fort).",
            effort: "Réorganisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire dans une buanderie."
        errors={[
          {
            label: "\"Je sèche le linge dans la chambre, ça met de l'humidité agréable\"",
            explanation:
              "Erreur classique. Le séchage en chambre fait monter l'humidité au-delà de 65-70 % la nuit, condition idéale pour les acariens et les moisissures. Sur la durée, dégrade la qualité du sommeil et expose les enfants asthmatiques. Le linge n'humidifie pas l'air 'sainement' : il libère de l'eau brute qui condense sur les surfaces froides et stagne dans les textiles.",
          },
          {
            label: "\"Une fenêtre ouverte 5 minutes suffit après une lessive\"",
            explanation:
              "Sous-estimation massive. Une lessive de 5 kg libère 1,5 à 3 L d'eau pendant le séchage, soit l'équivalent de plusieurs heures de cuisson. Cinq minutes de fenêtre n'évacuent qu'une fraction. La ventilation efficace nécessite soit une VMC fonctionnelle pendant tout le séchage, soit une fenêtre ouverte plusieurs heures, soit un sèche-linge à pompe à chaleur.",
          },
          {
            label: "\"L'adoucissant rend le linge meilleur pour la peau\"",
            explanation:
              "L'adoucissant dépose des amines quaternaires sur les fibres pour leur donner un toucher doux. Ces composés sont irritants pour la peau sensible, surtout chez les bébés et les personnes atopiques, et libèrent des COV à chaque port et chaque chauffage du textile. La douceur perçue est artificielle. Un linge bien rincé sans adoucissant est plus sain et n'irrite pas la peau, contrairement à l'idée reçue.",
          },
          {
            label: "\"Mes feuilles parfumées dans le sèche-linge donnent un linge frais\"",
            explanation:
              "Les feuilles assouplissantes pour sèche-linge sont parmi les sources de COV les plus concentrées du marché. Elles déposent leurs composés sur les fibres, qui les relâchent ensuite dans la chambre, sur la peau, dans la voiture. La fraîcheur perçue est un cocktail de parfums synthétiques. À supprimer purement et simplement, au profit d'un sèche-linge bien entretenu et d'un linge propre rincé.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la buanderie saine"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Sécher le linge à l'intérieur",
            description:
              "Si l'extérieur n'est pas possible : impact sur l'humidité, alternatives et méthode correcte pour limiter les conséquences.",
            href: "/produits-et-habitudes/secher-linge-interieur/",
          },
          {
            tag: "Produits et habitudes",
            title: "Choisir une lessive plus saine",
            description:
              "Composition, labels et critères pour une lessive sans surcharge en COV ni allergènes.",
            href: "/produits-et-habitudes/lessive-saine/",
          },
          {
            tag: "Humidité maison",
            title: "Sources d'humidité dans la maison",
            description:
              "Quantification de la part du séchage du linge dans le bilan hydrique d'un logement.",
            href: "/humidite-maison/sources-humidite-interieure/",
          },
        ]}
      />
    </>
  );
}

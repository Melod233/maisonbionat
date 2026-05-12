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
  title: "Composter ses biodéchets au jardin : guide pratique depuis la loi AGEC",
  description:
    "Compostage individuel depuis l'obligation AGEC 2024 : choisir un composteur, équilibre vert/brun, suivi, erreurs courantes, lombricomposteur en appartement. Méthode simple pour transformer ses biodéchets en amendement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/compostage-biodechets-jardin/",
  },
  openGraph: {
    title: "Composter ses biodéchets au jardin : guide pratique depuis la loi AGEC",
    description:
      "Composteur, équilibre matières vertes/brunes, suivi : la méthode simple pour transformer ses biodéchets en amendement gratuit.",
    url: "https://www.maisonbionat.fr/jardin/compostage-biodechets-jardin/",
  },
};

export default function CompostageJardinPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Composter ses biodéchets au jardin",
      href: "https://www.maisonbionat.fr/jardin/compostage-biodechets-jardin/",
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
        tag="Biodéchets et loi AGEC"
        title="Composter ses biodéchets : méthode simple, amendement gratuit, obligation respectée."
        quickAnswer="Depuis le 1er janvier 2024, la loi AGEC impose à chaque foyer d'avoir accès à une solution de tri des biodéchets : collecte séparée organisée par la collectivité, point d'apport volontaire ou compostage individuel. Pour un propriétaire avec terrain, le compostage individuel est l'option la plus directe et la plus utile. Un composteur de 300 à 800 L suffit pour un foyer de 4 personnes avec un petit jardin. Méthode de base : alterner matières vertes (épluchures, marc de café, tontes) et matières brunes (feuilles mortes, carton brun, broyat), aérer, surveiller l'humidité. Compost mûr en 6 à 12 mois. En appartement, le lombricomposteur d'intérieur prend le relais."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "1er janv. 2024", label: "obligation de tri des biodéchets pour tous les foyers" },
          { value: "30 %", label: "des ordures ménagères classiques sont des biodéchets compostables" },
          { value: "6–12 mois", label: "pour obtenir un compost mûr à partir de déchets frais" },
          { value: "300–800 L", label: "capacité de composteur recommandée pour un foyer de 4 personnes" },
        ]}
        anchors={[
          { id: "diagnostic", label: "L'obligation AGEC" },
          { id: "signes", label: "Choisir sa solution" },
          { id: "causes", label: "Pourquoi ça marche" },
          { id: "actions", label: "Méthode et entretien" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Cadre légal"
        title="Loi AGEC : ce qui est obligatoire, ce qui ne l'est pas"
        description="La confusion est fréquente : l'obligation porte sur le tri des biodéchets, pas sur la possession d'un composteur. Voici ce que dit précisément la loi."
        variants={[
          {
            indicator: "Obligation",
            name: "Accès à une solution de tri",
            description:
              "Chaque foyer doit avoir accès à une solution de tri à la source des biodéchets : soit une collecte séparée mise en place par la collectivité, soit un point d'apport volontaire, soit une solution individuelle (compostage au jardin, lombricomposteur). L'obligation est faite à la collectivité de proposer une solution, pas à chaque foyer d'avoir un composteur.",
          },
          {
            indicator: "Pas obligatoire",
            name: "Posséder un composteur individuel",
            description:
              "Un foyer en appartement sans solution de jardin n'est pas en infraction s'il dépose ses biodéchets dans un point d'apport volontaire fourni par la commune. La voie compostage est une option recommandée pour qui a un terrain, pas une obligation systémique.",
          },
          {
            indicator: "Couverture nationale",
            name: "Réalité au 1er juillet 2025",
            description:
              "Selon les chiffres officiels (ADEME, juillet 2025), 51,6 % des Français étaient effectivement couverts par une solution de tri à la source des biodéchets. Le déploiement se poursuit, avec des situations très hétérogènes entre collectivités. Pour un propriétaire en maison, ne pas attendre la collectivité : composter chez soi est plus simple et plus utile.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Choisir"
        title="Quelle solution selon votre situation."
        subtitle="Le bon composteur dépend de la taille du foyer, du jardin disponible, du climat et de l'usage prévu du compost. Quelques repères pour orienter le choix."
        signs={[
          {
            label: "Maison avec jardin, foyer de 3 à 5 personnes",
            description:
              "Composteur bois ou plastique de 400 à 600 L. Bois : esthétique, durée de vie 8 à 15 ans selon essence (pin traité 8 ans, mélèze ou douglas 15 ans). Plastique : facile à monter, durée de vie 15 à 25 ans, parfois fourni gratuitement par les collectivités. Position à l'ombre légère, sur sol nu, contact avec la terre obligatoire pour la vie du sol.",
            severity: "léger",
          },
          {
            label: "Grand jardin, foyer avec gros producteur de déchets verts",
            description:
              "Deux ou trois bacs en série de 600 à 1 000 L chacun : un bac en cours de remplissage, un bac en maturation, un bac de compost mûr prêt à utiliser. Système le plus efficace pour gérer de gros volumes de tontes, feuilles, taille de haie. Construction maison possible (palettes, planches non traitées).",
            severity: "léger",
          },
          {
            label: "Petit jardin urbain ou de ville",
            description:
              "Composteur compact de 200 à 400 L, modèle plastique ou pliable. Privilégier un modèle fermé avec couvercle pour limiter les odeurs et l'attrait pour les rongeurs. Méthode plus rigoureuse nécessaire (équilibre vert/brun strict, broyage des déchets) pour éviter les nuisances en milieu dense.",
            severity: "léger",
          },
          {
            label: "Appartement sans accès jardin",
            description:
              "Lombricomposteur d'intérieur (50 à 150 €) : bac avec vers de compost (Eisenia foetida) qui dégradent les biodéchets en quelques semaines. Capacité 1 à 3 kg de biodéchets par semaine pour un modèle familial. Pas d'odeur si bien géré (rapport vert/brun, humidité). Sortie : engrais liquide et lombricompost solide, utilisables sur plantes d'intérieur, balcon ou donnés à des voisins jardiniers.",
            severity: "léger",
          },
          {
            label: "Climat très froid (montagne, est de la France)",
            description:
              "Activité biologique très ralentie en hiver (sous 5 °C, la décomposition s'arrête). Choisir un composteur isolé (parois épaisses) ou un grand volume (effet thermique masse), ou accepter un compostage saisonnier. Le compost reprend au printemps sans dégât.",
            severity: "modéré",
          },
          {
            label: "Présence de rats ou souris dans le quartier",
            description:
              "Risque accru en milieu urbain ou rural avec dépendances. Choisir un composteur fermé à fond grillagé (maille 5 mm) ou un modèle entièrement clos. Ne pas mettre de cuit (restes de repas, viande, poisson) qui attire fortement les rongeurs. Si le problème persiste, passer en lombricomposteur ou bokashi.",
            severity: "modéré",
          },
        ]}
        footerNote="Beaucoup de collectivités fournissent gratuitement ou à prix subventionné un composteur (souvent 15 à 30 €). Contactez votre service déchets avant tout achat : économie possible et accompagnement souvent inclus."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ça marche"
        title="Le principe du compostage en quelques lignes."
        subtitle="Composter, c'est accélérer la décomposition naturelle qui se produit en forêt sur le sol. Les conditions optimales se résument à quatre paramètres."
        causes={[
          {
            number: "01",
            cause: "L'équilibre matières vertes / matières brunes",
            explanation:
              "Vertes (riches en azote) : épluchures, marc de café, tontes, fanes de légumes. Brunes (riches en carbone) : feuilles mortes, carton brun, broyat de branches, paille. Ratio cible : environ 1/3 de vertes pour 2/3 de brunes en volume. Un excès de vert provoque odeurs et compactage ; un excès de brun ralentit fortement la décomposition.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "L'humidité, ni sèche ni détrempée",
            explanation:
              "Le compost doit rester humide comme une éponge essorée. Trop sec : la vie biologique s'arrête. Trop humide : conditions anaérobies, odeurs de pourriture. Test simple : presser une poignée de compost dans la main, quelques gouttes doivent perler sans que ça ruisselle. Ajuster avec arrosage léger ou apport de matières brunes.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "L'oxygène apporté par l'aération",
            explanation:
              "Les micro-organismes du compostage sont aérobies : ils ont besoin d'oxygène pour décomposer correctement. Sans aération, fermentation anaérobie (odeurs, compostage très lent). Retournement complet du tas tous les 1 à 3 mois, ou utilisation d'un aérateur (tige torsadée enfoncée et tournée), suffit largement.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "La taille des déchets accélère la décomposition",
            explanation:
              "Plus les déchets sont fragmentés, plus la surface offerte aux micro-organismes est grande, plus la décomposition est rapide. Couper grossièrement les épluchures, broyer ou laisser sécher les tontes, broyer le bois de taille à moins de 7 cm : un compost broyé est mûr en 4 à 6 mois au lieu de 8 à 12.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La diversité des apports nourrit la diversité microbienne",
            explanation:
              "Un compost qui ne reçoit que du même type de déchet (uniquement tontes par exemple) se déséquilibre. La diversité (épluchures variées, marc, feuilles, broyat, coquilles d'œuf écrasées) construit une vie microbienne diversifiée et un compost final plus complet en nutriments.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Mettre en place et entretenir son compost."
        immediateLabel="Démarrage et apports quotidiens"
        structuralLabel="Suivi et utilisation du compost"
        immediate={[
          {
            label: "Installer le composteur sur sol nu, ombre légère",
            description:
              "Position idéale : zone à l'ombre légère (pas en plein soleil qui dessèche, pas à l'ombre complète qui freine), sur sol nu en contact direct avec la terre (vers et micro-organismes du sol colonisent le tas par le bas). Distance des pièces de vie : 3 à 5 mètres minimum pour éviter les nuisances ressenties.",
            effort: "30 minutes d'installation",
          },
          {
            label: "Démarrer par une couche de broyat ou de branchages",
            description:
              "Au fond du composteur, déposer 10 à 15 cm de matières grossières (broyat, petites branches, paille longue) : assure l'aération par le bas, favorise le drainage, évite que les premières matières vertes ne pourrissent contre le sol.",
            effort: "5 minutes",
          },
          {
            label: "Alterner les apports en couches fines",
            description:
              "Chaque apport de cuisine (matières vertes humides) suivi d'une fine couche de matières brunes (poignée de feuilles, de carton brun déchiré, de broyat). L'équilibre se fait au fur et à mesure, pas en bloc. Conserver une provision de matières brunes près du composteur (sac de feuilles mortes, broyat de l'année).",
            effort: "2 minutes par apport",
          },
          {
            label: "Aérer tous les 1 à 3 mois",
            description:
              "Retourner le tas complet avec une fourche tous les 2 à 3 mois : transfère le contenu en cours de décomposition vers la zone active. Alternative moins physique : aérateur à tige torsadée enfoncé tous les 30 cm, tourné, retiré. Effet équivalent sans manipulation lourde.",
            effort: "20 minutes tous les 2 mois",
          },
        ]}
        structural={[
          {
            label: "Surveiller humidité et odeurs",
            description:
              "Toutes les 2 à 4 semaines, ouvrir, regarder, sentir. Odeur de sous-bois : tout va bien. Odeur d'ammoniaque ou de pourriture : excès d'humidité ou de vert, ajouter matières brunes et aérer. Compost trop sec et qui ne se décompose pas : arroser légèrement. Présence de vers de compost rouges (Eisenia) : excellent signe de vitalité.",
            effort: "5 minutes de contrôle",
          },
          {
            label: "Maturation 6 à 12 mois",
            description:
              "Un compost frais (3 à 6 mois) est utilisable pour pailler les arbres et arbustes installés. Un compost mûr (8 à 12 mois) est nécessaire pour le potager et les semis : aspect terreau homogène, odeur de sous-bois, plus de morceaux reconnaissables. Tamisage facultatif pour un usage en semis.",
            effort: "Patience",
          },
          {
            label: "Utiliser le compost : 2 à 5 kg par m²",
            description:
              "Au potager au printemps et à l'automne : 2 à 5 kg de compost mûr par m², déposé en surface, légèrement griffé. Sur massifs : 1 à 2 kg/m² une fois par an. Pour rempotage : 1/3 de compost mûr + 2/3 de terre de jardin ou terreau pour plantes en pot.",
            effort: "1 à 2 heures saisonnier",
          },
          {
            label: "Système à plusieurs bacs si gros volume",
            description:
              "Trois bacs en série pour foyers gros producteurs : remplissage du premier pendant que le deuxième mature et que le troisième est vidé. Permet de toujours avoir du compost prêt et d'absorber les pics (taille de haie, gros nettoyage). Investissement initial plus important, gestion plus fluide ensuite.",
            effort: "Construction 1 journée + 100 à 400 € matériaux",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs courantes en compostage."
        errors={[
          {
            label: "Mettre tout et n'importe quoi dans le compost",
            explanation:
              "À éviter : viande, poisson, produits laitiers, restes de plats cuisinés (odeurs, rongeurs). Pelures d'agrumes en grande quantité (acidifient et se décomposent lentement). Plantes malades (mildiou, oïdium) qui peuvent contaminer. Déjections de carnivores domestiques. Cendres en grande quantité (alcalinisent fortement).",
          },
          {
            label: "Compostage 100 % tontes de gazon en couche épaisse",
            explanation:
              "Les tontes seules en grande quantité forment une masse anaérobie qui fermente, dégage des odeurs et compacte le tas. Toujours mélanger avec matières brunes (feuilles, carton, broyat) ou faire sécher les tontes 24 à 48 h au soleil avant apport. Une partie peut aussi être utilisée directement en paillage au jardin.",
          },
          {
            label: "Attendre que le composteur soit plein pour aérer",
            explanation:
              "Un compost non aéré pendant 6 à 12 mois devient compact, anaérobie, mal décomposé. Aération régulière (tous les 2 à 3 mois) plutôt qu'une seule fois à la fin. Le suivi régulier (5 minutes par mois) prévient la majorité des problèmes de compostage.",
          },
          {
            label: "Utiliser un compost non mûr sur des semis ou jeunes plants",
            explanation:
              "Un compost frais (encore actif biologiquement) brûle les racines fragiles et peut bloquer la germination par dégagement de chaleur et substances intermédiaires. Pour semis et jeunes plants : uniquement compost mûr, aspect terreau homogène. Compost frais : utilisable en surface sur cultures installées ou en paillage.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le compostage"
        items={[
          {
            question: "Que peut-on composter exactement ?",
            answer:
              "Oui : épluchures de fruits et légumes, marc de café et filtres, sachets de thé en papier, coquilles d'œuf écrasées, fanes, fleurs fanées, tontes (séchées), feuilles mortes, taille de haie broyée, carton brun déchiré, paille, copeaux de bois non traité. Non : viande, poisson, produits laitiers, restes cuisinés, déjections de carnivores, plantes malades, plastiques même biodégradables, cendres en grande quantité, agrumes en excès.",
          },
          {
            question: "Le compost dégage-t-il des odeurs ?",
            answer:
              "Un compost équilibré sent le sous-bois, pas plus. Les odeurs désagréables (ammoniaque, pourriture, œuf pourri) signalent toujours un déséquilibre : excès de matières vertes humides, manque d'aération, excès d'humidité. Correction immédiate : aérer, ajouter matières brunes (feuilles, carton), couvrir d'une couche brune sèche. Sans déséquilibre persistant, l'odeur disparaît en quelques jours.",
          },
          {
            question: "Mon composteur attire les rats, comment faire ?",
            answer:
              "D'abord, vérifier ce qu'on met : aucun cuit, aucune viande, aucun produit laitier. Ensuite, fond grillagé en maille de 5 mm fixé sous le composteur. Composteur entièrement clos avec couvercle. Si problème persistant en zone très infestée : passer en lombricomposteur d'intérieur ou en bokashi (fermentation), qui n'attirent pas les rongeurs.",
          },
          {
            question: "Le lombricomposteur en appartement, est-ce vraiment sans odeur ?",
            answer:
              "Oui s'il est bien géré : équilibre vert/brun, humidité contrôlée, pas d'apports interdits. Les vers de compost (Eisenia foetida) dégradent rapidement les déchets sans fermentation. Une légère odeur de terre humide peut être perceptible en ouvrant. Si odeurs fortes : excès d'humidité, trop d'apports d'un coup, ou apport interdit (viande). La sortie est un excellent engrais liquide et un lombricompost solide concentré.",
          },
          {
            question: "Combien de temps pour un compost utilisable ?",
            answer:
              "Compost frais utilisable en paillage de fruitiers ou de haies : 3 à 6 mois. Compost demi-mûr utilisable en surface sur cultures installées : 6 à 8 mois. Compost mûr pour potager et semis : 8 à 12 mois selon climat et soin apporté. Un compost broyé, aéré régulièrement et bien équilibré peut être mûr en 4 à 6 mois ; sans suivi, comptez 12 à 18 mois.",
          },
          {
            question: "Faut-il un activateur de compost ?",
            answer:
              "Non dans la grande majorité des cas. Les micro-organismes nécessaires sont apportés par la terre du sol sous le composteur et par les déchets eux-mêmes. Les activateurs commerciaux sont utiles seulement dans des situations très spécifiques (démarrage en hiver très froid, composteur fermé sans contact sol). Une poignée de terre de jardin ou de compost mûr ajoutée au démarrage suffit largement.",
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
            tag: "Jardin",
            title: "Sol vivant et paillage",
            description:
              "Le compost mûr est la matière première du sol vivant : direction de sortie naturelle du compostage.",
            href: "/jardin/sol-vivant-paillage-matiere-organique/",
          },
          {
            tag: "Produits et habitudes",
            title: "Réduire les produits chimiques à la maison",
            description:
              "La logique de réduction des intrants à la maison rejoint celle du jardin.",
            href: "/produits-et-habitudes/reduire-produits-chimiques-maison/",
          },
        ]}
      />
    </>
  );
}

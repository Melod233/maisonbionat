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
  title: "Asthme de l'enfant : facteurs environnementaux à la maison",
  description:
    "Acariens, moisissures, COV, tabagisme passif : les facteurs environnementaux documentés qui aggravent l'asthme de l'enfant et les leviers efficaces à la maison.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/asthme-enfant-maison/",
  },
  openGraph: {
    title: "Asthme de l'enfant : facteurs environnementaux à la maison",
    description:
      "Acariens, moisissures, COV, tabagisme passif : les facteurs environnementaux documentés qui aggravent l'asthme de l'enfant et les leviers efficaces à la maison.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/asthme-enfant-maison/",
  },
};

const faqItems = [
  {
    question: "L'environnement intérieur peut-il vraiment déclencher l'asthme d'un enfant ?",
    answer:
      "L'environnement intérieur ne crée pas l'asthme à lui seul, mais il joue un rôle majeur dans son aggravation et ses crises. Plusieurs facteurs sont scientifiquement documentés comme déclencheurs ou aggravants : exposition aux acariens (allergène n° 1 chez l'enfant asthmatique en France selon la SP2A), aux moisissures, aux phanères animales, au tabagisme passif, aux COV émis par les peintures et meubles neufs, aux particules fines (combustion, cuisson). Les recommandations HAS 2023 identifient l'éviction des allergènes et l'amélioration de la qualité de l'air intérieur comme une composante non médicamenteuse essentielle de la prise en charge.",
  },
  {
    question: "Dois-je faire faire un diagnostic environnemental ?",
    answer:
      "Pour un asthme léger correctement contrôlé, l'éviction de base (literie anti-acariens, aération, éloignement des animaux dans la chambre) suffit en général. Pour un asthme modéré à sévère ou mal contrôlé malgré le traitement, les recommandations actuelles encouragent un diagnostic par un Conseiller Médical en Environnement Intérieur (CMEI), souvent rattaché à l'hôpital ou à un service d'allergologie, qui se déplace au domicile. Cette démarche est prise en charge dans plusieurs régions et peut faire l'objet d'une prescription médicale. Elle permet d'identifier les sources réelles d'allergènes et de polluants chez l'enfant et de cibler les actions efficaces.",
  },
  {
    question: "Faut-il vraiment se séparer des animaux ?",
    answer:
      "Pas systématiquement. Si l'allergie a été démontrée par tests cutanés et que l'asthme reste mal contrôlé, l'éloignement de l'animal du domicile reste l'option la plus efficace. Si une éviction totale est impossible ou refusée, on agit par étapes : interdiction stricte de l'animal dans la chambre de l'enfant, lavage hebdomadaire de l'animal, aspirateur HEPA, brossage à l'extérieur, lavage régulier des textiles. Les bénéfices d'une éviction partielle sont mesurables mais inférieurs à ceux d'une éviction totale. La décision se prend avec le médecin allergologue et la famille, en fonction du niveau de gravité.",
  },
  {
    question: "Un purificateur d'air peut-il aider ?",
    answer:
      "Un purificateur HEPA peut réduire les particules en suspension (acariens fragmentés, allergènes animaux, pollens, particules fines) dans la pièce où il fonctionne. Plusieurs études cliniques montrent un bénéfice modeste mais mesurable sur le contrôle de l'asthme allergique de l'enfant lorsqu'il est utilisé dans la chambre, en complément des autres mesures. Mais c'est un complément, pas un substitut : sans literie traitée, sans aération, sans contrôle de l'humidité, l'effet du purificateur reste limité. Choisir un modèle dimensionné pour la pièce, à fonctionnement silencieux la nuit, avec changement régulier des filtres.",
  },
];

export default function AsthmeEnfantMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
    {
      name: "Asthme de l'enfant à la maison",
      href: "https://www.maisonbionat.fr/maison-saine-famille/asthme-enfant-maison/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Maison saine famille"
        parentHref="/maison-saine-famille/"
        tag="Santé respiratoire"
        title="Asthme de l'enfant : ce que l'environnement de la maison peut changer"
        quickAnswer="L'asthme touche environ 9 % des enfants en France selon Santé publique France et constitue la première maladie chronique de l'enfant. L'environnement intérieur joue un rôle majeur dans le déclenchement des crises et la sévérité de la maladie : acariens, moisissures, allergènes animaux, tabagisme passif, COV émis par les matériaux neufs, particules fines de combustion. Les recommandations de la Haute Autorité de Santé (HAS) 2023 et de la Société pédiatrique de pneumologie et d'allergologie (SP2A) intègrent l'éviction des allergènes et l'amélioration de la qualité de l'air intérieur comme une composante non médicamenteuse à part entière de la prise en charge. Cette page n'a pas vocation à remplacer l'avis du médecin traitant ou de l'allergologue, mais à présenter les leviers d'action environnementale documentés et hiérarchisés."
        stats={[
          {
            value: "~9 %",
            label: "des enfants en France touchés par l'asthme (Santé publique France)",
          },
          {
            value: "1ère",
            label: "maladie chronique de l'enfant en France",
          },
          {
            value: "60 %",
            label: "d'humidité relative au-dessus de laquelle les acariens prolifèrent",
          },
          {
            value: "HAS 2023",
            label: "recommandations qui intègrent l'éviction environnementale dans la prise en charge",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les facteurs" },
          { id: "signes", label: "Reconnaître les déclencheurs" },
          { id: "causes", label: "Sources fréquentes" },
          { id: "actions", label: "Leviers efficaces" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi l'environnement de la maison compte pour un enfant asthmatique."
        description="L'asthme est une maladie chronique inflammatoire des bronches qui combine prédisposition génétique et facteurs environnementaux. Chez l'enfant, le logement est le lieu où il passe en moyenne 80 à 90 % de son temps, et la chambre concentre 8 à 10 heures d'exposition continue par nuit dans un volume restreint. C'est donc un lieu de contact massif avec les allergènes et polluants intérieurs. Les recommandations HAS 2023 et les sociétés savantes (SP2A, SPLF) ont fait évoluer la prise en charge pour intégrer explicitement le diagnostic environnemental et les mesures d'éviction comme une composante de l'asthme bien contrôlé. La page rassemble ces éléments hiérarchisés selon le niveau de preuve."
        variants={[
          {
            indicator: "Asthme allergique",
            name: "Forme la plus fréquente chez l'enfant",
            description:
              "Représente la majorité des asthmes pédiatriques. Déclenché ou aggravé par des allergènes identifiés (acariens, moisissures, phanères animales, pollens). Le diagnostic d'allergie repose sur des tests cutanés ou sériques (IgE spécifiques). L'éviction des allergènes documentés est dans ce cas un levier non médicamenteux de premier rang, en complément des traitements de fond.",
          },
          {
            indicator: "Asthme non allergique",
            name: "Déclencheurs irritatifs",
            description:
              "Crises déclenchées principalement par des irritants non allergéniques : tabagisme passif, fumée de combustion, parfums et COV (peintures fraîches, désodorisants, diffuseurs d'huiles essentielles), particules fines, air froid et sec. L'amélioration de la qualité de l'air intérieur prend ici une dimension d'autant plus importante qu'on ne peut pas s'appuyer sur une éviction allergénique ciblée.",
          },
          {
            indicator: "Asthme du nourrisson",
            name: "Sifflements répétés avant 3 ans",
            description:
              "Tout enfant ayant présenté trois épisodes ou plus de bronchiolite avec sifflements avant 3 ans est considéré comme asthmatique au sens des recommandations actuelles. Particulièrement sensible au tabagisme passif et à l'humidité/moisissures du logement. La qualité de la chambre du bébé et l'arrêt de l'exposition au tabac à domicile sont des priorités absolues à cet âge.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les déclencheurs environnementaux d'une crise."
        subtitle="Tenir un journal des crises pendant 2 à 4 semaines, en notant le lieu, l'heure, la pièce, les activités et les conditions, est l'outil le plus utile pour identifier les déclencheurs récurrents. Voici les signaux à observer."
        signs={[
          {
            label: "Crises ou toux nocturnes récurrentes au coucher ou en milieu de nuit",
            description:
              "Premier signal d'une exposition aux acariens dans la literie. La concentration en allergènes est maximale au contact direct avec l'oreiller et le matelas. Une toux sèche qui réveille l'enfant entre 2 h et 5 h du matin oriente très fortement vers ce déclencheur. Justifie une enquête sur la literie, le taux d'humidité et l'aération de la chambre.",
            severity: "critique",
          },
          {
            label: "Symptômes qui s'aggravent à la rentrée d'école ou de week-end",
            description:
              "Un enfant qui va mieux en journée à l'école ou chez les grands-parents et qui s'aggrave en rentrant à la maison oriente vers une cause spécifique du domicile (animal, moisissure, literie, tabagisme passif). C'est l'inverse symétrique de l'aggravation au retour de vacances dans une maison fermée plusieurs semaines (exposition aigüe aux acariens accumulés).",
            severity: "critique",
          },
          {
            label: "Crises lors d'activités spécifiques (ménage, peinture, désodorisants)",
            description:
              "Toux ou sifflements après le passage de l'aspirateur sans filtre HEPA (remise en suspension), pendant ou juste après un nettoyage avec produits irritants, lors d'une peinture fraîche, à l'usage d'un spray désodorisant ou d'un diffuseur d'huiles essentielles. Indique une hyperréactivité aux irritants : à coupler avec l'éviction de ces déclencheurs.",
            severity: "modéré",
          },
          {
            label: "Aggravation en présence de l'animal de la maison ou chez des proches",
            description:
              "Crise après le contact direct, au passage de l'animal dans la chambre, lors de la visite chez un proche qui possède un chat ou un chien. Test cutané ou IgE spécifique recommandé pour confirmer l'allergie. Si confirmée, l'éviction (au minimum dans la chambre, idéalement totale) devient un levier majeur de contrôle.",
            severity: "modéré",
          },
          {
            label: "Crises lors d'épisodes de pollution extérieure ou d'air sec et froid",
            description:
              "Pic de pollution urbaine, épisodes de PM2,5 hivernaux liés au chauffage bois, air glacial en hiver. Hyperréactivité bronchique non spécifique. Les mesures incluent ventilation adaptée (fermer en cas de pic extérieur, réouvrir une fois l'épisode passé), filtration en double flux ou purificateur HEPA, humidification douce en hiver si l'air intérieur est très sec.",
            severity: "modéré",
          },
          {
            label: "Symptômes persistants malgré le traitement de fond bien suivi",
            description:
              "Un asthme mal contrôlé malgré une bonne observance du traitement de fond pousse à rechercher activement une cause environnementale non identifiée. Visite à domicile par un Conseiller Médical en Environnement Intérieur (CMEI) ou consultation spécialisée d'allergologie pédiatrique sont alors indiquées.",
            severity: "critique",
          },
        ]}
        footerNote="Toute aggravation soudaine, gêne respiratoire importante, lèvres bleutées ou difficulté à parler en phrases entières chez un enfant asthmatique justifie l'appel au 15. Cette page n'est pas un substitut à la consultation médicale ou au plan d'action personnalisé établi avec le pédiatre ou l'allergologue."
      />

      <IssueCauses
        id="causes"
        title="Les sources les plus fréquentes dans un logement français."
        subtitle="Toutes les causes ne sont pas égales en fréquence ni en niveau de preuve. Les sociétés savantes (SP2A, SPLF, HAS) hiérarchisent ainsi les facteurs environnementaux documentés."
        causes={[
          {
            number: "01",
            cause: "Acariens dans la literie et les textiles",
            explanation:
              "Première cause d'allergie respiratoire chez l'enfant en France. Les acariens prolifèrent dans la literie quand l'humidité dépasse 60 %. Leurs débris et déjections sont l'allergène n° 1 du domicile français. Levier majeur : housse anti-acariens du matelas et de l'oreiller, lavage hebdomadaire à 60 °C, aération matin et soir, taux d'humidité maintenu entre 40 et 55 %.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Moisissures dans les pièces humides",
            explanation:
              "L'humidité chronique et les moisissures visibles ou masquées (derrière un meuble, sous le papier peint, dans une salle de bain mal ventilée) sont fortement associées à l'asthme infantile selon plusieurs revues scientifiques (OMS, INSPQ). Traiter la cause d'humidité (ventilation, condensation, infiltrations) plutôt que la moisissure visible. Voir notre silo humidité maison.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Tabagisme passif",
            explanation:
              "Facteur le plus puissant et le mieux documenté. L'exposition au tabac dans le logement augmente fortement la fréquence et la sévérité des crises chez l'enfant asthmatique. La fumée tertiaire (résidus déposés sur les textiles, murs, vêtements après que le fumeur a fumé à l'extérieur) reste également exposante. Levier : zéro tabac à l'intérieur, idéalement ni dans la voiture, et changement complet de vêtements après avoir fumé en présence de l'enfant.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Allergènes animaux (chat, chien, rongeurs, NAC)",
            explanation:
              "Les phanères de chat (Fel d 1), de chien et les particules de salive et urine sont des allergènes puissants. L'allergie doit être confirmée par tests avant de demander l'éviction. Si confirmée et si l'asthme n'est pas contrôlé : éviction de la chambre au minimum, idéalement éviction totale du domicile selon la sévérité.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "COV et particules fines (matériaux neufs, combustion, désodorisants)",
            explanation:
              "Peintures et meubles fraîchement posés, panneaux de bois reconstitué (formaldéhyde), poêle à bois mal réglé, bougies parfumées, désodorisants en spray, diffuseurs d'huiles essentielles : autant de sources qui peuvent déclencher une bronchospasme chez l'enfant asthmatique sensible. Choisir matériaux à faibles émissions (label A+, Emicode EC1+, Greenguard Gold) et limiter strictement les sources volontaires de COV à la maison.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Hiérarchiser les leviers d'action selon l'efficacité documentée."
        immediate={[
          {
            label: "Traiter la literie de l'enfant et la chambre en priorité",
            description:
              "Housse anti-acariens du matelas, de l'oreiller et de la couette (norme OEKO-TEX, certifiée anti-acariens), draps lavés à 60 °C une fois par semaine. Retirer peluches et tapis de la chambre, ou laver les peluches au congélateur 24 h une fois par mois. Aérer la chambre 10-15 minutes matin et soir, fenêtre grande ouverte. Maintenir 40-55 % d'humidité (mesuré avec un hygromètre).",
            effort: "Coût initial 100-200 €, routine simple",
          },
          {
            label: "Éliminer le tabagisme passif du domicile",
            description:
              "Aucune fumée à l'intérieur du logement, ni de la voiture. Idéalement, le ou les fumeurs adultes mènent une démarche de sevrage. À défaut, fumer dehors avec changement de vêtement et lavage des mains avant tout contact avec l'enfant, pour limiter (sans supprimer) la fumée tertiaire. C'est l'action environnementale la mieux documentée pour l'asthme infantile.",
            effort: "Décision familiale, coût nul",
          },
          {
            label: "Aérer matin et soir, vérifier la VMC",
            description:
              "Aération courte mais énergique deux fois par jour, idéalement en l'absence de pic de pollution extérieur. Vérifier que les bouches de VMC ne sont pas obstruées et que le moteur fonctionne. Cette routine simple réduit acariens, COV et CO2 sans coût.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Supprimer les sources volontaires de COV et d'irritants",
            description:
              "Pas de désodorisants en spray, pas de bougies parfumées, pas de diffuseurs d'huiles essentielles dans le logement (l'ANSES recommande explicitement la non-utilisation chez les asthmatiques). Préférer un nettoyage avec des produits sans parfum, à base de vinaigre blanc, savon noir, bicarbonate. Aérer largement après tout ménage.",
            effort: "Réorganisation, coût en baisse",
          },
        ]}
        structural={[
          {
            label: "Demander un diagnostic CMEI si l'asthme est mal contrôlé",
            description:
              "Si malgré les évictions de base et le traitement de fond bien suivi, l'asthme reste mal contrôlé, demander à l'allergologue ou au pédiatre une visite à domicile par un Conseiller Médical en Environnement Intérieur. Ce professionnel identifie les sources réelles d'allergènes et de polluants chez l'enfant, et propose des actions ciblées. Souvent prise en charge selon les régions.",
            effort: "Démarche médicale, à demander",
          },
          {
            label: "Traiter humidité et moisissures à la source",
            description:
              "Si moisissures visibles ou suspicion d'humidité chronique : recherche de la cause (condensation, ventilation insuffisante, infiltrations, remontées capillaires) et traitement en profondeur. Le traitement de surface seul (eau de Javel) ne règle pas la cause et la moisissure revient. Voir notre silo humidité maison.",
            effort: "Variable, parfois travaux",
          },
          {
            label: "Filtrer l'air entrant en zone polluée ou allergique sévère",
            description:
              "Si zone urbaine polluée et/ou allergie pollens importante : VMC double flux avec filtres F7 ou ePM1, ou purificateur d'air HEPA dans la chambre de l'enfant (modèle silencieux la nuit, dimensionné à la pièce, filtres remplacés selon le constructeur). Effet documenté modéré mais mesurable en complément des autres mesures.",
            effort: "Investissement variable",
          },
          {
            label: "Choisir matériaux et meubles à faibles émissions en cas de rénovation",
            description:
              "Toute rénovation de la chambre ou du logement avec un enfant asthmatique privilégie les matériaux étiquetés A+ (peintures, sols, colles), les meubles à faible dégagement (Emicode EC1+, Greenguard Gold), les panneaux de bois sans formaldéhyde ajouté (E1, NAF/NAUF, CARB Phase 2). Aérer largement plusieurs semaines après les travaux. Voir notre page label A+ et émissions.",
            effort: "Choix de matériaux, neutre en coût avec planification",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire face à l'asthme d'un enfant."
        errors={[
          {
            label: "\"On va arrêter le traitement de fond, il va mieux\"",
            explanation:
              "Décision qui doit être prise exclusivement avec le médecin. L'amélioration de la qualité de l'air intérieur peut permettre, à terme, de réduire le traitement, mais seulement après évaluation médicale et sur un asthme contrôlé de manière durable. Arrêter brutalement un traitement de fond expose à une crise grave. Les leviers environnementaux sont complémentaires, pas substitutifs.",
          },
          {
            label: "\"On installe un humidificateur dans la chambre pour qu'il respire mieux\"",
            explanation:
              "Erreur fréquente et contre-productive en cas d'allergie aux acariens. L'humidification au-delà de 55-60 % favorise la prolifération des acariens et des moisissures, deux des principaux déclencheurs. Un air sec et froid peut être irritant pour les bronches, mais la solution est l'aération régulière, pas l'humidification systématique. Vérifier avec un hygromètre avant tout achat.",
          },
          {
            label: "\"Une bougie naturelle ou un diffuseur d'huiles essentielles aide à respirer\"",
            explanation:
              "Position contraire à l'avis ANSES, qui déconseille explicitement la diffusion d'huiles essentielles en présence d'asthmatiques. Toute combustion ou diffusion ajoute des COV et des particules dans l'air respiré par l'enfant. La sensation de 'mieux respirer' relève de l'effet placebo ou d'une dilation passagère, mais l'irritation et le risque de crise sont objectivement augmentés.",
          },
          {
            label: "\"Une fois la chambre nettoyée à fond, c'est réglé\"",
            explanation:
              "L'éviction des allergènes est une routine continue, pas un nettoyage ponctuel. Les acariens reviennent, l'humidité revient, la poussière revient. La constance des gestes (aération, lavage de la literie, hygrométrie) compte plus que les pics d'effort. Un nettoyage intensif sans changement durable des conditions du logement n'apporte qu'un soulagement de quelques semaines.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur l'asthme de l'enfant à la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Maison saine famille",
            title: "Allergies respiratoires de l'enfant",
            description:
              "Vue d'ensemble des allergies respiratoires pédiatriques et leur prise en charge environnementale.",
            href: "/maison-saine-famille/allergies-respiratoires-enfant/",
          },
          {
            tag: "Air intérieur",
            title: "Acariens : allergènes, literie et leviers efficaces",
            description:
              "Première cause d'allergie respiratoire en logement, traitement détaillé de la literie et conditions à maîtriser.",
            href: "/air-interieur/acariens-maison/",
          },
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "Lien fortement documenté entre humidité chronique, moisissures et asthme infantile. Identification et traitement.",
            href: "/humidite-maison/moisissures-maison/",
          },
        ]}
      />
    </>
  );
}

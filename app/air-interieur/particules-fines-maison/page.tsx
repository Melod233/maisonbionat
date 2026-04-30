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
  title: "Particules fines dans la maison : sources, niveaux et solutions",
  description:
    "PM2,5 et PM10 à l'intérieur : sources documentées par l'OQAI, valeurs guides OMS, leviers concrets pour réduire l'exposition (cuisson, combustion, infiltration extérieure).",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/particules-fines-maison/",
  },
  openGraph: {
    title: "Particules fines dans la maison : sources, niveaux et solutions",
    description:
      "PM2,5 et PM10 à l'intérieur : sources documentées par l'OQAI, valeurs guides OMS, leviers concrets pour réduire l'exposition (cuisson, combustion, infiltration extérieure).",
    url: "https://www.maisonbionat.fr/air-interieur/particules-fines-maison/",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce qu'une particule fine PM2,5 ou PM10 ?",
    answer:
      "Les PM (Particulate Matter) désignent l'ensemble des particules en suspension dans l'air, classées par diamètre aérodynamique. Les PM10 ont un diamètre inférieur ou égal à 10 micromètres (cheveu humain ≈ 50 µm), les PM2,5 inférieur ou égal à 2,5 µm, les PM1 inférieur ou égal à 1 µm. Plus elles sont fines, plus elles pénètrent profondément dans l'arbre respiratoire : les PM10 s'arrêtent dans les voies aériennes supérieures, les PM2,5 atteignent les bronchioles et les alvéoles, les PM1 et particules ultrafines passent dans la circulation sanguine. C'est cette pénétration qui rend les PM2,5 et plus fines particulièrement préoccupantes du point de vue sanitaire.",
  },
  {
    question: "Quelles sont les valeurs limites à viser ?",
    answer:
      "L'OMS, dans ses valeurs guides révisées en 2021, recommande de ne pas dépasser 5 µg/m³ en moyenne annuelle pour les PM2,5 et 15 µg/m³ pour les PM10. La réglementation européenne reste plus permissive (25 µg/m³/an pour les PM2,5, en cours de révision pour 2030). En air intérieur, l'OQAI relève en moyenne 19,1 µg/m³ de PM2,5 dans les logements français, soit nettement au-dessus des recommandations OMS. Le HCSP a publié des valeurs repères d'aide à la gestion en air intérieur : objectif souhaitable ≤ 10 µg/m³, valeur d'action rapide à 25 µg/m³ pour les PM2,5.",
  },
  {
    question: "Un purificateur d'air HEPA réduit-il vraiment les PM2,5 ?",
    answer:
      "Oui, sur les particules en suspension dans la pièce où il fonctionne. Un filtre HEPA H13 ou H14 retient 99,95 à 99,995 % des particules de 0,3 µm, taille la plus pénétrante. Le bénéfice se mesure en quelques heures dans une pièce fermée si l'appareil est dimensionné (CADR adapté à la surface) et le filtre changé selon le constructeur. Limite importante : le purificateur n'agit que sur les particules présentes, pas sur les sources. Si vous cuisinez ou allumez une bougie pendant qu'il fonctionne, le débit de génération dépasse souvent celui du purificateur. La hiérarchie reste : éliminer les sources, ventiler, et seulement en complément, filtrer.",
  },
  {
    question: "Faut-il fermer les fenêtres en cas de pic de pollution extérieur ?",
    answer:
      "Pendant un pic court (chauffage bois en vague de froid, épisode de pollution urbaine), fermer les fenêtres limite l'apport extérieur, mais ne supprime pas la nécessité de ventiler. Garder la VMC en marche, retarder cuisson grasse ou nettoyage avec produits émissifs si possible. Une fois le pic passé (consultable sur les sites de surveillance régionaux comme Atmo France), réouvrir et aérer largement. Si vous habitez en zone régulièrement polluée (centre-ville dense, axe routier, zone de chauffage bois en hiver), la solution durable est une VMC double flux avec filtration F7 ou ePM1, qui filtre l'air entrant en continu.",
  },
];

export default function ParticulesFinesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Particules fines dans la maison",
      href: "https://www.maisonbionat.fr/air-interieur/particules-fines-maison/",
    },
  ]);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroIssue
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Polluant intérieur"
        title="Particules fines dans la maison : sources réelles et leviers efficaces"
        quickAnswer="Les particules fines (PM2,5 et PM10) à l'intérieur des logements proviennent en grande partie de sources domestiques (cuisson, combustion, bougies, désodorisants, tabac, ménage), complétées par l'infiltration de l'air extérieur. L'OQAI relève en moyenne 19,1 µg/m³ de PM2,5 dans les logements français, soit près de quatre fois la valeur guide OMS 2021 (5 µg/m³ en moyenne annuelle). Les PM2,5 et plus fines pénètrent profondément dans les voies respiratoires et passent dans la circulation sanguine, ce qui en fait l'un des polluants intérieurs les plus préoccupants en termes de risque cardiovasculaire et respiratoire à long terme. Les leviers concrets sont hiérarchisés : ventilation systématique pendant la cuisson, abandon des bougies parfumées et désodorisants en spray, choix d'un poêle bois performant et bien entretenu, filtration F7/ePM1 sur VMC double flux ou purificateur HEPA en complément."
        stats={[
          {
            value: "19,1 µg/m³",
            label: "concentration moyenne annuelle de PM2,5 dans les logements français (OQAI)",
          },
          {
            value: "5 µg/m³",
            label: "valeur guide OMS 2021 pour les PM2,5 en moyenne annuelle",
          },
          {
            value: "≤ 10 µg/m³",
            label: "objectif souhaitable HCSP en air intérieur (PM2,5)",
          },
          {
            value: "99,95 %",
            label: "efficacité minimale d'un filtre HEPA H13 sur les particules de 0,3 µm",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les PM" },
          { id: "signes", label: "Situations à risque" },
          { id: "causes", label: "Sources principales" },
          { id: "actions", label: "Réduire l'exposition" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce que sont les particules fines et pourquoi les PM2,5 inquiètent davantage."
        description="Les particules fines désignent l'ensemble des particules en suspension dans l'air, mélange complexe de matière solide et liquide. Leur classement repose sur le diamètre aérodynamique : PM10 (≤ 10 µm), PM2,5 (≤ 2,5 µm), PM1 (≤ 1 µm) et particules ultrafines (≤ 0,1 µm). Plus elles sont fines, plus elles pénètrent profondément dans le système respiratoire et plus leur surface spécifique est grande, ce qui leur permet de fixer davantage de polluants chimiques (COV adsorbés, métaux, HAP). La concentration intérieure résulte d'un équilibre entre les sources (cuisson, combustion, activités) et les puits (ventilation, dépôt sur les surfaces, filtration)."
        variants={[
          {
            indicator: "5 µg/m³",
            name: "Valeur guide OMS PM2,5 (révision 2021)",
            description:
              "Niveau souhaitable en moyenne annuelle pour limiter le risque cardiovasculaire et respiratoire à long terme. Cette valeur a été divisée par deux en 2021 par rapport à la précédente recommandation de 2005, sur la base des nouvelles données épidémiologiques. Très peu de villes françaises et de logements respectent ce seuil annuel.",
          },
          {
            indicator: "≤ 10 µg/m³",
            name: "Objectif HCSP en air intérieur",
            description:
              "Le Haut Conseil de la santé publique a publié en 2013 des valeurs repères d'aide à la gestion (VRAG) en air intérieur : objectif souhaitable de 10 µg/m³ pour les PM2,5, valeur d'action rapide de 25 µg/m³. La moyenne OQAI (19,1 µg/m³) se situe entre les deux, ce qui justifie une démarche d'amélioration sur la majorité des logements français.",
          },
          {
            indicator: "Particules ultrafines",
            name: "Pénétration sanguine documentée",
            description:
              "Les particules de moins de 0,1 µm passent la barrière alvéolo-capillaire et se retrouvent dans la circulation sanguine, avec une demi-vie de plusieurs heures à quelques jours dans l'organisme. Leur effet est associé à une augmentation des marqueurs d'inflammation systémique, de risque cardiovasculaire et de troubles cognitifs à long terme. Aucune valeur réglementaire spécifique aux UFP n'existe encore en logement, mais leur réduction passe par les mêmes leviers que les PM2,5.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les situations qui font monter les PM dans le logement."
        subtitle="Les particules fines ne se voient pas et ne se sentent pas. Les signes sont indirects : situations à risque, ressentis liés à la qualité de l'air, et parfois mesure directe avec un capteur grand public."
        signs={[
          {
            label: "Cuisson grasse, friture, viande au four sans hotte efficace",
            description:
              "Cuisinière, plaques, four en mode grill ou pyrolyse génèrent des pics massifs de PM2,5 (parfois 100 à 1 000 µg/m³ pendant la cuisson). Une hotte aspirante mal dimensionnée ou non raccordée à l'extérieur ne fait que recycler. C'est l'une des sources principales documentées par l'OQAI dans les logements français.",
            severity: "critique",
          },
          {
            label: "Poêle à bois ou cheminée mal entretenu, en zone urbaine en hiver",
            description:
              "Le chauffage au bois individuel est la première source de PM2,5 en France. Un poêle ancien (avant label Flamme Verte 7 étoiles) ou mal entretenu émet 10 à 100 fois plus qu'un appareil performant. En zone urbaine ou de fond de vallée, l'accumulation dehors revient à l'intérieur par infiltration.",
            severity: "critique",
          },
          {
            label: "Bougies parfumées, encens, désodorisants, diffuseurs",
            description:
              "Les bougies en paraffine émettent des PM2,5 à des niveaux mesurables, surtout celles à mèche métallique ou à parfum synthétique. L'encens en bâtonnets reste l'une des sources individuelles les plus émissives mesurées en chambre. Tous ces produits ajoutent une source évitable à l'air respiré.",
            severity: "modéré",
          },
          {
            label: "Tabagisme à l'intérieur ou tabagisme tertiaire",
            description:
              "La fumée de cigarette élève très fortement les PM2,5 dans toute la maison, et persiste plusieurs heures après la dernière cigarette. La fumée tertiaire (résidus déposés sur murs, textiles, meubles) continue de relâcher des particules secondaires sur des semaines.",
            severity: "critique",
          },
          {
            label: "Logement situé en bord de route, en centre-ville dense ou en fond de vallée",
            description:
              "L'air extérieur s'infiltre par toutes les ouvertures, y compris VMC simple flux. En bord d'axe routier, les niveaux extérieurs de PM2,5 dépassent souvent 25 µg/m³ en moyenne annuelle. Sans filtration sur l'air entrant (double flux ePM1), l'air intérieur reflète l'extérieur.",
            severity: "modéré",
          },
          {
            label: "Aspirateur sans filtre HEPA, ménage à sec",
            description:
              "Un aspirateur sans filtre adapté remet en suspension les particules au lieu de les capturer. Le balayage à sec, le secouage de tapis ou couvertures à l'intérieur, le dépoussiérage avec un plumeau augmentent transitoirement les PM10 dans la pièce.",
            severity: "léger",
          },
        ]}
        footerNote="Un capteur PM2,5 grand public (50 à 200 €) donne une indication utile mais avec une précision limitée. Pour un diagnostic fiable, des prestataires spécialisés réalisent une mesure de référence sur 7 jours, plus coûteuse mais bien plus précise."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent réellement les particules fines dans un logement."
        subtitle="L'OQAI distingue les sources internes (combustion domestique, activités, cuisson) et l'apport extérieur (trafic, chauffage urbain, agriculture, transport longue distance). Selon le contexte, l'une ou l'autre domine."
        causes={[
          {
            number: "01",
            cause: "Cuisson, friture, four en mode pyrolyse",
            explanation:
              "Première source domestique. La cuisson dégrade les graisses en aérosols qui contiennent PM2,5 et particules ultrafines. Une friture peut faire passer une cuisine de 10 à 500 µg/m³ en quelques minutes. La hotte raccordée à l'extérieur, bien dimensionnée et utilisée systématiquement, divise l'exposition par un facteur 5 à 10.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Chauffage au bois individuel (poêle, cheminée, insert)",
            explanation:
              "Première source nationale de PM2,5 en France selon le CITEPA. Un poêle ancien émet plusieurs kilogrammes de PM par hiver, dont une fraction se retrouve à l'intérieur du logement. Un poêle Flamme Verte 7 étoiles avec bois sec divise les émissions par 10 à 30 par rapport à un appareil ancien. Le ramonage et l'entretien annuel sont décisifs.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Combustion domestique : bougies, encens, désodorisants",
            explanation:
              "Sources évitables. Les bougies en paraffine à parfum synthétique et les bâtonnets d'encens émettent des PM2,5 mesurables, parfois plus que la cuisson. Les désodorisants en spray génèrent des particules secondaires par réaction des terpènes avec l'ozone résiduel. Aucun de ces usages n'est nécessaire à la qualité de l'air, et tous sont réductibles à zéro sans inconvénient sanitaire.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Air extérieur infiltré (trafic, industrie, agriculture)",
            explanation:
              "L'air intérieur reflète en grande partie l'air extérieur sur la fraction PM, surtout dans un logement aéré ou ventilé sans filtration. En centre-ville, en bord d'axe routier, en zone de chauffage bois dense ou en zone agricole en saison d'épandage, l'apport extérieur peut représenter la majorité des PM intérieures. La VMC double flux avec filtre F7/ePM1 réduit cet apport de 50 à 90 % selon le filtre.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Activités domestiques : ménage, bricolage, textiles",
            explanation:
              "Aspirateur sans HEPA, balayage à sec, ponçage, sciage, secouage de couvertures, change de literie, remise en route d'une cheminée : autant de moments qui produisent des pics transitoires de PM10 et PM2,5. Pas de risque chronique si occasionnel et bien ventilé, mais à intégrer dans la routine d'aération.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire les PM dans la maison, dans le bon ordre."
        immediate={[
          {
            label: "Toujours utiliser une hotte raccordée à l'extérieur pendant la cuisson",
            description:
              "Hotte mise en route 5 minutes avant la cuisson, maintenue 10 minutes après. Vérifier qu'elle est raccordée à l'extérieur (et non en recyclage avec filtre charbon, qui ne capture pas les PM2,5). Si la hotte est sous-dimensionnée, ouvrir une fenêtre en plus pour créer un courant d'air vers l'extérieur. C'est l'action la plus rentable sur les PM intérieures.",
            effort: "Geste à systématiser, gratuit",
          },
          {
            label: "Supprimer les bougies parfumées, l'encens et les désodorisants",
            description:
              "Sources évitables sans bénéfice santé. Les remplacer par une aération régulière et un traitement des causes d'odeur. Si l'on tient à un parfum d'ambiance discret, des bouquets de fleurs ou des plantes aromatiques suffisent sans charge en particules. Aucun argument sanitaire ne justifie de continuer à les utiliser.",
            effort: "Décision d'usage, économies",
          },
          {
            label: "Aérer 10 à 15 minutes matin et soir, hors pics de pollution",
            description:
              "Fenêtres grandes ouvertes pour un renouvellement d'air rapide. Vérifier la qualité de l'air extérieur sur Atmo France ou Prév'Air avant les grands pics. En hiver, aérer rapidement plutôt que longuement pour éviter les déperditions. La routine matin/soir évacue ce qui s'est accumulé pendant la nuit ou la journée.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Aspirateur HEPA et nettoyage humide",
            description:
              "Investir dans un aspirateur avec filtre HEPA classe 13 ou 14 (200 à 500 € pour un modèle correct). Préférer la serpillière humide au balai pour les sols durs. Éviter le secouage de tapis et couvertures à l'intérieur. Ces gestes réduisent significativement la remise en suspension des particules sédimentées.",
            effort: "Investissement modéré",
          },
        ]}
        structural={[
          {
            label: "Remplacer un poêle ancien par un appareil Flamme Verte 7 étoiles",
            description:
              "Si vous chauffez au bois, un appareil récent label Flamme Verte 7 étoiles avec bois sec (humidité < 20 %) divise les émissions par 10 à 30. MaPrimeRénov' et CEE financent une partie du remplacement. L'entretien annuel et le ramonage deux fois par an sont obligatoires et conditionnent l'efficacité réelle.",
            effort: "Investissement, aides disponibles",
          },
          {
            label: "Installer une VMC double flux avec filtration F7 ou ePM1",
            description:
              "Solution la plus efficace en zone polluée ou pour public sensible : la double flux filtre l'air neuf entrant en continu et évacue l'air vicié. Voir notre page dédiée pour le détail des coûts et la pertinence selon le bâti. Filtres à changer tous les 6 à 12 mois pour maintenir l'efficacité.",
            effort: "Investissement lourd, aides disponibles",
          },
          {
            label: "Compléter avec un purificateur HEPA dans la chambre ou le séjour",
            description:
              "En complément (jamais en substitution) de la ventilation. Choisir un appareil au CADR (Clean Air Delivery Rate) adapté à la surface, silencieux la nuit (<30 dB), avec filtre HEPA H13 minimum et indication de remplacement. Compter 200 à 600 € pour un modèle correct. Utile en chambre d'enfant asthmatique, en zone urbaine, en complément d'un poêle bois.",
            effort: "Investissement modéré",
          },
          {
            label: "Mesurer pour objectiver l'avant/après",
            description:
              "Un capteur PM2,5 grand public donne un ordre de grandeur utile pour identifier les pics liés à des activités précises (cuisson, bougies, ménage) et valider qu'une action a un effet mesurable. La précision absolue est limitée mais le différentiel relatif est exploitable.",
            effort: "Capteur 50-200 €",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les particules fines."
        errors={[
          {
            label: "\"À l'intérieur, l'air est forcément moins pollué qu'à l'extérieur\"",
            explanation:
              "Faux dans le cas général. L'OQAI relève des concentrations intérieures de PM2,5 en moyenne plus élevées qu'à l'extérieur, parce que les sources internes (cuisson, combustion, activités) s'ajoutent à l'apport extérieur dans un volume plus petit et moins ventilé. Le facteur multiplicatif intérieur/extérieur est souvent compris entre 1,5 et 5 selon les pratiques du logement.",
          },
          {
            label: "\"Une bougie naturelle ou en cire végétale ne pollue pas\"",
            explanation:
              "Toute combustion produit des particules. La cire de soja ou d'abeille en émet moins que la paraffine, mais en quantité non négligeable, surtout avec un parfum ajouté. Le filtre 'naturel' n'a pas d'effet sur la chimie de la combustion. Réduire le nombre de bougies allumées et aérer après usage est plus efficace que choisir une cire 'meilleure'.",
          },
          {
            label: "\"Un purificateur d'air remplace l'aération\"",
            explanation:
              "Non. Un purificateur HEPA agit sur les particules en suspension mais ne renouvelle pas l'air en CO2, COV gazeux et humidité. Sans aération ou ventilation mécanique, l'air vicie. Le purificateur est un complément utile dans certains cas (zone polluée, allergie sévère, asthme), pas un substitut à la ventilation de base.",
          },
          {
            label: "\"Mon double vitrage me protège des particules extérieures\"",
            explanation:
              "Le double vitrage isole thermiquement et acoustiquement, mais l'air entre par les entrées d'air, la VMC, les défauts d'étanchéité. Les particules fines suivent l'air. Seule une filtration sur l'air entrant (double flux ePM1, ou bâti très étanche + purificateur) réduit significativement l'apport extérieur.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les particules fines"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Purificateur d'air : utile, gadget ou complément ?",
            description:
              "Ce qu'un purificateur HEPA fait vraiment sur les PM2,5 et ses limites face aux COV gazeux.",
            href: "/air-interieur/purificateur-air-maison/",
          },
          {
            tag: "Rénovation saine",
            title: "VMC double flux : qualité d'air, performances et coûts",
            description:
              "Filtration F7/ePM1 sur l'air entrant : la solution structurelle contre les PM en zone urbaine ou polluée.",
            href: "/renovation-saine/vmc-double-flux/",
          },
          {
            tag: "Produits et habitudes",
            title: "Bougies à la paraffine et qualité de l'air",
            description:
              "Ce qu'émettent réellement les bougies courantes et comment réduire l'impact si vous en utilisez.",
            href: "/produits-et-habitudes/bougies-paraffine/",
          },
        ]}
      />
    </>
  );
}

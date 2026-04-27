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
  title: "Purificateur d'air maison : utile, gadget ou complément ?",
  description:
    "HEPA, charbon actif, ionisation : ce que les purificateurs d'air font vraiment pour la qualité de l'air intérieur d'un logement, et ce qu'ils ne remplacent pas.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/air-interieur/purificateur-air-maison/",
  },
  openGraph: {
    title: "Purificateur d'air maison : utile, gadget ou complément ?",
    description:
      "HEPA, charbon actif, ionisation : ce que les purificateurs d'air font vraiment pour la qualité de l'air intérieur d'un logement, et ce qu'ils ne remplacent pas.",
    url: "https://www.maisonbionat.fr/air-interieur/purificateur-air-maison/",
  },
};

const faqItems = [
  {
    question: "Un purificateur d'air est-il utile contre les acariens ?",
    answer:
      "Indirectement oui. Les acariens vivent dans les textiles (matelas, oreillers, tapis) et un purificateur ne les atteint pas. En revanche, les fragments d'acariens et leurs déjections, qui sont les véritables allergènes en suspension, sont efficacement filtrés par un HEPA H13. Le purificateur complète donc le lavage des textiles à 60 °C et les housses anti-acariens, sans les remplacer.",
  },
  {
    question: "Quel CADR pour quelle taille de pièce ?",
    answer:
      "La règle pratique : un CADR particules au moins égal à 5 fois le volume de la pièce. Pour une chambre de 12 m² (≈ 30 m³), visez un CADR d'au moins 150 m³/h. Pour un salon de 25 m², un CADR d'au moins 300 m³/h. Si l'appareil annonce un débit en pieds cubes par minute (CFM), multipliez par 1,7 pour obtenir des m³/h.",
  },
  {
    question: "Faut-il laisser le purificateur tourner en continu ?",
    answer:
      "Pas forcément. En l'absence d'occupants ou de source d'émission, l'appareil tourne pour rien et coûte en électricité et en filtres. Une utilisation pendant les heures de présence (chambre la nuit, salon en soirée) suffit dans la plupart des cas. Les modes automatiques avec capteur de particules s'adaptent et limitent les périodes d'inutilité.",
  },
  {
    question: "Combien coûte un purificateur d'air efficace ?",
    answer:
      "Comptez entre 250 et 600 € pour un appareil sérieusement dimensionné pour une chambre, avec un vrai HEPA H13. En dessous de 200 €, les modèles ont souvent un CADR trop bas, des filtres minces qui saturent vite, ou des « HEPA-like » non certifiés. Le coût annuel des filtres (50 à 150 €) doit être ajouté à l'évaluation.",
  },
];

export default function PurificateurAirMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Purificateur d'air maison : utile, gadget ou complément ?",
      href: "https://www.maisonbionat.fr/air-interieur/purificateur-air-maison/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Guide critique"
        title="Purificateur d'air à la maison : ce qu'il fait vraiment et ce qu'il ne remplace pas"
        quickAnswer="Un purificateur d'air domestique peut réellement réduire les particules en suspension dans une pièce (poussières fines, pollens, fumées, spores), à condition d'être équipé d'un vrai filtre HEPA H13 ou H14, dimensionné pour le volume de la pièce, et entretenu. En revanche, il a un effet limité et inégal sur les composés organiques volatils gazeux comme le formaldéhyde, même avec un filtre à charbon actif. Il ne remplace ni la ventilation ni la suppression des sources : un logement mal aéré avec des bougies parfumées et des meubles neufs ne sera pas assaini par un appareil seul. Le purificateur reste utile en complément, dans des cas précis (allergies aux pollens, voisinage routier, après travaux), pas comme solution universelle."
        stats={[
          {
            value: "≥ 99,95 %",
            label: "efficacité minimale d'un filtre HEPA H13 sur les particules de 0,3 µm",
          },
          {
            value: "5×",
            label: "renouvellement d'air recommandé par heure pour une pièce de vie (CADR)",
          },
          {
            value: "45 %",
            label: "performance moyenne mesurée sur le formaldéhyde par UFC-Que Choisir, même sur les meilleurs modèles à charbon actif",
          },
          {
            value: "3 à 12 mois",
            label: "durée typique avant remplacement des filtres HEPA et charbon",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comment ça fonctionne" },
          { id: "signes", label: "Cas où c'est pertinent" },
          { id: "causes", label: "Limites techniques" },
          { id: "actions", label: "Bien choisir" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'un purificateur d'air sait faire, et selon quelle technologie."
        description="Un purificateur d'air domestique aspire l'air ambiant, le fait passer à travers un ou plusieurs filtres, puis le réémet. Selon la technologie utilisée, l'appareil agit sur des polluants très différents. L'avis ANSES de 2017 sur les techniques d'épuration de l'air intérieur a confirmé que la filtration mécanique (préfiltre, HEPA et charbon) est la seule famille de technologies à efficacité démontrée sans effets secondaires significatifs. Les autres approches (ionisation, ozonation, photocatalyse, plasma) présentent des limites de performance ou des sous-produits indésirables documentés."
        variants={[
          {
            indicator: "Filtre HEPA",
            name: "Particules en suspension",
            description:
              "Un filtre HEPA H13 retient au moins 99,95 % des particules de 0,3 µm en un passage : poussières, pollens, allergènes d'acariens, spores de moisissures, suies, certaines bactéries. C'est la technologie la plus fiable sur les particules. La classe H14 monte à 99,995 %.",
          },
          {
            indicator: "Charbon actif",
            name: "Polluants gazeux et odeurs",
            description:
              "Les filtres à charbon actif adsorbent partiellement les COV gazeux et les odeurs. L'efficacité dépend fortement de la masse de charbon embarquée, du débit d'air et de la saturation. Sur le formaldéhyde, les performances réelles restent souvent inférieures à 50 % et chutent rapidement avec l'usage.",
          },
          {
            indicator: "Ionisation, ozone, plasma",
            name: "Technologies à éviter ou à manipuler avec précaution",
            description:
              "L'ANSES et le HCSP ont relevé que ces technologies peuvent générer des sous-produits indésirables (ozone, formaldéhyde, radicaux). Pour un usage domestique courant, ces appareils n'apportent pas de bénéfice net comparé à un HEPA bien dimensionné, et certains modèles sont déconseillés en présence de personnes sensibles.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Dans quelles situations un purificateur d'air apporte un vrai bénéfice."
        subtitle="Le purificateur n'est pas universel. Il devient pertinent dans des contextes précis, où les sources extérieures ne peuvent pas être supprimées."
        signs={[
          {
            label: "Allergies aux pollens, aux acariens ou aux poils d'animaux",
            description:
              "Un HEPA H13 réduit nettement la concentration d'allergènes en suspension dans une chambre. C'est l'usage pour lequel les bénéfices sont les plus documentés, en complément du lavage des textiles et de l'aération courte.",
            severity: "critique",
          },
          {
            label: "Logement situé près d'un axe routier ou industriel",
            description:
              "Quand l'air extérieur est lui-même chargé en particules fines (PM2,5, PM10), un purificateur peut maintenir un niveau intérieur plus bas, à condition de fermer les fenêtres aux pics de pollution et d'aérer aux heures creuses.",
            severity: "modéré",
          },
          {
            label: "Logement avec fumeur ou exposé à la fumée de bois",
            description:
              "Les particules de combustion (tabac, cheminée mal réglée, voisinage en zone de chauffage bois) sont efficacement captées par un HEPA. L'idéal reste de supprimer la source, mais l'appareil aide à limiter l'exposition résiduelle.",
            severity: "modéré",
          },
          {
            label: "Période de travaux ou de poussière de chantier",
            description:
              "Pendant et après des travaux, un purificateur HEPA limite la dispersion des particules dans les pièces voisines. Il complète une aération intensive sans la remplacer.",
            severity: "modéré",
          },
          {
            label: "Environnement très poussiéreux malgré un nettoyage régulier",
            description:
              "Quand la poussière revient trop vite et qu'on a déjà identifié une cause structurelle (textiles, VMC mal entretenue, infiltrations), un purificateur en chambre peut soulager temporairement, sans dispenser de traiter la cause.",
            severity: "léger",
          },
        ]}
        footerNote="Hors de ces cas, l'investissement dans un purificateur est rarement justifié. Une bonne ventilation et la suppression des sources émettrices restent plus efficaces et beaucoup moins coûteuses sur la durée."
      />

      <IssueCauses
        id="causes"
        title="Les limites techniques que les fabricants mettent rarement en avant."
        subtitle="Comprendre ces limites permet d'éviter les attentes irréalistes et les achats inutiles."
        causes={[
          {
            number: "01",
            cause: "Faible efficacité sur les COV gazeux comme le formaldéhyde",
            explanation:
              "Les tests indépendants (UFC-Que Choisir) montrent que même les meilleurs purificateurs avec charbon actif retirent au mieux 45 à 50 % du formaldéhyde dans des conditions optimales, et beaucoup moins en usage réel. Les COV gazeux passent à travers les HEPA et saturent rapidement le charbon.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Dimensionnement souvent insuffisant",
            explanation:
              "Le débit d'air filtré (CADR) doit être suffisant pour renouveler l'air de la pièce environ 5 fois par heure. Beaucoup de modèles vendus pour de grandes pièces ne tiennent cette performance qu'au maximum de leur vitesse, ce qui les rend bruyants et peu utilisés en pratique.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Coût d'usage des filtres",
            explanation:
              "Un jeu de filtres HEPA + charbon coûte typiquement 30 à 120 € et doit être remplacé tous les 6 à 12 mois pour rester efficace. Sur 5 ans, le coût d'usage dépasse souvent le prix d'achat de l'appareil. Sans changement régulier, les filtres saturés perdent leur efficacité voire relarguent.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Bruit en mode nuit",
            explanation:
              "Pour ne pas gêner le sommeil, beaucoup d'utilisateurs laissent l'appareil en mode silencieux, où le débit chute fortement. Le purificateur tourne mais ne traite plus assez de volume. Vérifier le débit en mode silencieux est aussi important que le débit maximum.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Pas d'action sur les sources",
            explanation:
              "Tant que les sources émettrices restent en place (matériaux neufs, bougies, encens, produits ménagers), le purificateur travaille en aval sans rien régler. Il joue un rôle d'amortisseur, pas de solution. Supprimer la source reste toujours plus efficace.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Bien choisir et bien utiliser un purificateur si vous décidez d'en installer un."
        immediate={[
          {
            label: "Vérifier la classe de filtre HEPA et la mention CADR",
            description:
              "Privilégiez un filtre HEPA H13 ou H14 mécanique (jamais un filtre « HEPA-type » ou « HEPA-like »). Vérifiez le débit d'air filtré (CADR) annoncé en m³/h pour les particules, et confrontez-le au volume de la pièce : il faut un CADR au moins égal à 5 fois ce volume.",
            effort: "Lecture de fiche technique",
          },
          {
            label: "Calibrer la vitesse selon l'usage",
            description:
              "Utilisez le mode élevé en journée et en l'absence de personnes sensibles, et ramenez à un mode silencieux la nuit en chambre. Vérifiez que le débit en mode silencieux reste suffisant pour le volume de la chambre. Si ce n'est pas le cas, l'appareil est trop petit.",
            effort: "Réglage simple",
          },
          {
            label: "Maintenir l'aération malgré l'appareil",
            description:
              "Un purificateur ne dispense jamais d'aérer 10 minutes matin et soir. La filtration ne renouvelle pas l'oxygène, n'évacue pas le CO2 et ne traite pas tous les COV. L'appareil complète la ventilation, il ne la remplace pas.",
            effort: "Habitude quotidienne",
          },
          {
            label: "Changer les filtres au rythme prescrit",
            description:
              "Notez la date de pose et tenez le calendrier. Un filtre HEPA saturé filtre moins bien et peut générer une perte de charge qui réduit le débit. Un charbon saturé peut relarguer ce qu'il a adsorbé. Le coût d'usage doit être anticipé à l'achat.",
            effort: "Coût récurrent",
          },
        ]}
        structural={[
          {
            label: "Traiter d'abord les sources avant d'investir",
            description:
              "Un logement mal ventilé avec des bougies, des produits ménagers irritants et des meubles neufs ne sera pas assaini par un purificateur. Avant l'achat, supprimez les sources évidentes et améliorez l'aération. Ensuite seulement, évaluez si l'appareil reste utile.",
            effort: "Audit progressif",
          },
          {
            label: "Privilégier la ventilation mécanique pour le neuf ou la rénovation",
            description:
              "Une VMC double flux avec filtration F7 ou F9 sur l'air entrant traite l'air à l'échelle du logement, en continu, et renouvelle réellement le volume. Sur un projet de rénovation, c'est un investissement plus structurant qu'un parc de purificateurs.",
            effort: "Investissement travaux",
          },
          {
            label: "Limiter l'usage à une ou deux pièces clés",
            description:
              "Plutôt que de filtrer tout le logement, ciblez la chambre principale ou la chambre d'enfant. C'est là que le bénéfice par heure d'exposition est le plus élevé, et cela permet d'éviter la multiplication d'appareils.",
            effort: "Choix d'implantation",
          },
          {
            label: "Éviter les technologies à sous-produits documentés",
            description:
              "Écartez les modèles à ozone actif et soyez prudent avec les ioniseurs, photocatalyseurs et plasmas, dont l'ANSES et le HCSP ont relevé des sous-produits indésirables. La filtration mécanique pure (HEPA + charbon passif) reste la voie la plus sûre.",
            effort: "Choix au moment de l'achat",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on entend souvent à tort sur les purificateurs."
        errors={[
          {
            label: "\"Mon purificateur élimine le formaldéhyde et les COV\"",
            explanation:
              "Aucun purificateur grand public ne supprime durablement le formaldéhyde. Les meilleurs modèles à charbon actif atteignent 45 à 50 % en conditions de test, et baissent rapidement à l'usage. Sur les COV, l'aération et la suppression des sources restent largement plus efficaces.",
          },
          {
            label: "\"Avec un purificateur je n'ai plus besoin d'aérer\"",
            explanation:
              "Un purificateur ne renouvelle pas l'oxygène et n'évacue pas le CO2 produit par les occupants. Un logement fermé avec uniquement un purificateur voit son CO2 monter rapidement en dessus de 1 500 ppm. L'aération reste indispensable, tous les jours.",
          },
          {
            label: "\"Plus la techno est sophistiquée, plus c'est efficace\"",
            explanation:
              "Les empilements de technologies (UV, ionisation, plasma, photocatalyse) peuvent au contraire générer des sous-produits indésirables. Un appareil simple HEPA + charbon, bien dimensionné et bien entretenu, surperforme la plupart des modèles complexes.",
          },
          {
            label: "\"Un purificateur dans le salon protège tout le logement\"",
            explanation:
              "L'air ne circule pas librement entre les pièces d'un logement, surtout avec les portes fermées. Un purificateur agit principalement sur la pièce où il est installé. Pour traiter plusieurs pièces, il faut soit plusieurs appareils, soit une vraie ventilation mécanique.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les purificateurs d'air"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Trop de poussière dans la maison : causes et solutions",
            description:
              "Avant ou après l'achat d'un purificateur, identifier pourquoi la poussière revient et agir sur les vraies causes.",
            href: "/air-interieur/poussiere-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Entretenir sa VMC",
            description:
              "Une VMC qui fonctionne bien règle déjà une grande partie des problèmes que les purificateurs cherchent à compenser.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Air intérieur",
            title: "Les sources de pollution de l'air intérieur",
            description:
              "Comprendre où agir en priorité pour ne pas confier au purificateur ce qu'une suppression de source réglerait gratuitement.",
            href: "/air-interieur/sources-pollution-air/",
          },
        ]}
      />
    </>
  );
}

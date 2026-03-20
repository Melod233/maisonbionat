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
  title: "Ventilation et humidité : le rôle de la VMC dans votre logement",
  description:
    "La ventilation mécanique est la première réponse à l'excès d'humidité intérieure. Comprendre comment la VMC fonctionne, quel système choisir et comment l'optimiser.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/ventilation-humidite/",
  },
  openGraph: {
    title: "Ventilation et humidité : le rôle de la VMC dans votre logement",
    description:
      "La ventilation mécanique est la première réponse à l'excès d'humidité intérieure. Comprendre comment la VMC fonctionne, quel système choisir et comment l'optimiser.",
    url: "https://www.maisonbionat.fr/humidite-maison/ventilation-humidite/",
  },
};

export default function VentilationHumiditePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    { name: "Ventilation et humidité : le rôle de la VMC dans votre logement", href: "https://www.maisonbionat.fr/humidite-maison/ventilation-humidite/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Humidité maison"
        parentHref="/humidite-maison/"
        tag="Comprendre"
        title="Ventilation et humidité : pourquoi la VMC est la réponse principale."
        quickAnswer="L'humidité intérieure excessive est, dans la grande majorité des cas, la conséquence d'une ventilation insuffisante. Une famille de quatre personnes produit plus de 12 litres de vapeur d'eau par jour : sans évacuation continue, cette vapeur s'accumule, atteint le point de rosée sur les surfaces froides et favorise condensation et moisissures. La ventilation mécanique contrôlée est le seul système capable d'extraire en continu cette humidité, quelle que soit la saison."
        stats={[
          { value: "12 L", label: "de vapeur produits par jour dans un foyer de 4 personnes" },
          { value: "40–60 %", label: "taux d'hygrométrie recommandé dans un logement (ADEME)" },
          { value: ">60 %", label: "d'humidité : conditions favorables au développement des moisissures" },
          { value: "24–48 h", label: "délai d'apparition de moisissures sur une surface humide à plus de 60 % et 18°C" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de systèmes" },
          { id: "signes", label: "Signes d'une VMC défaillante" },
          { id: "causes", label: "Pourquoi la ventilation est essentielle" },
          { id: "actions", label: "Optimiser sa ventilation" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les systèmes de ventilation et leur efficacité face à l'humidité."
        description="Tous les systèmes ne se valent pas pour maîtriser l'humidité intérieure. Le choix du système détermine en grande partie la capacité du logement à maintenir un taux d'hygrométrie sain, quelles que soient les activités des occupants."
        variants={[
          {
            indicator: "Système le plus courant",
            name: "VMC simple flux autoréglable",
            description:
              "Extrait l'air vicié en cuisine et salle de bain à un débit constant, indépendamment du taux d'humidité réel. Efficace pour renouveler l'air mais ne s'adapte pas aux pics de vapeur (douche, lessive). Standard dans la plupart des logements construits depuis les années 1980.",
          },
          {
            indicator: "Système recommandé contre l'humidité",
            name: "VMC simple flux hygroréglable",
            description:
              "Adapte automatiquement son débit d'extraction en fonction du taux d'humidité mesuré dans chaque pièce. Elle extrait davantage quand l'humidité monte et ralentit quand l'air est sec, limitant les pertes thermiques. Nettement plus efficace que l'autoréglable pour prévenir condensation et moisissures.",
          },
          {
            indicator: "Option performante",
            name: "VMC double flux",
            description:
              "Extrait l'air vicié et insuffle de l'air neuf, en récupérant la chaleur de l'air sortant pour préchauffer l'air entrant. Très efficace pour la qualité de l'air et la maîtrise de l'humidité, mais installation plus coûteuse et entretien plus régulier. Surtout pertinente dans les maisons très isolées.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les signes qu'une VMC ne suffit plus ou est défaillante."
        subtitle="Une ventilation en mauvais état ou sous-dimensionnée laisse des traces visibles dans le logement. Ces indicateurs permettent d'évaluer si votre système fonctionne correctement."
        signs={[
          {
            label: "Condensation persistante sur les vitres",
            description:
              "De la buée chaque matin sur les fenêtres, même après aération, est le signe que l'air intérieur reste trop chargé en vapeur. Une VMC fonctionnelle devrait extraire suffisamment pour éviter ce phénomène chronique.",
            severity: "modéré",
          },
          {
            label: "Odeurs de renfermé au retour",
            description:
              "Une odeur persistante après quelques heures d'absence signale un renouvellement d'air insuffisant. L'air chargé en vapeur, CO2 et polluants stagne faute d'extraction efficace.",
            severity: "léger",
          },
          {
            label: "Moisissures récurrentes dans la salle de bain ou la cuisine",
            description:
              "Les deux pièces les plus productrices de vapeur sont aussi les premières à révéler une défaillance de ventilation. Des moisissures qui reviennent régulièrement malgré le nettoyage indiquent que l'extraction est insuffisante.",
            severity: "modéré",
          },
          {
            label: "Bouches de ventilation poussiéreuses ou obstruées",
            description:
              "Un dépôt épais sur les bouches d'extraction réduit leur section de passage. Le débit réel peut chuter très significativement sans que cela soit visible autrement qu'au contact d'un mouchoir ou d'une feuille de papier.",
            severity: "modéré",
          },
          {
            label: "Hygrométrie durablement supérieure à 65 %",
            description:
              "Un hygromètre qui affiche en permanence plus de 65 % dans les pièces de vie, malgré des habitudes normales, indique que la ventilation ne compense plus les apports de vapeur quotidiens.",
            severity: "critique",
          },
          {
            label: "Aucune aspiration détectable aux bouches d'extraction",
            description:
              "En approchant un mouchoir fin d'une bouche VMC, il doit être légèrement aspiré. Si aucun mouvement n'est perceptible, la VMC ne fonctionne plus ou est complètement obstruée. C'est une panne à traiter rapidement.",
            severity: "critique",
          },
        ]}
        footerNote="Une VMC défaillante n'est pas toujours silencieuse : le moteur peut fonctionner sans produire le débit prévu. Seul un test physique aux bouches ou une vérification par un professionnel permet de confirmer l'état réel du système."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi la ventilation est la solution principale contre l'humidité."
        subtitle="L'humidité intérieure est avant tout un problème de flux : de la vapeur entre en permanence dans le logement et doit en sortir. Sans évacuation continue, l'accumulation est inévitable."
        causes={[
          {
            number: "01",
            cause: "La vapeur d'eau se produit en continu",
            explanation:
              "Respiration, cuisine, douches, linge, plantes : les sources de vapeur ne s'arrêtent jamais. Une famille de quatre personnes produit plus de 12 litres de vapeur par jour. Sans extraction continue, cette vapeur s'accumule inexorablement dans le logement.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "L'aération manuelle ne suffit pas en hiver",
            explanation:
              "Ouvrir les fenêtres est utile mais insuffisant en saison froide, où les ouvertures sont courtes et peu fréquentes. Une VMC, elle, extrait 24h/24 et 7j/7, compensant les moments où les occupants oublient d'aérer ou ne peuvent pas le faire.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les logements modernes sont de plus en plus étanches",
            explanation:
              "L'amélioration de l'isolation thermique réduit les infiltrations d'air naturelles par lesquelles une partie de la vapeur s'échappait autrefois. Un logement bien isolé retient aussi mieux l'humidité. La VMC compense cette perte de perméabilité naturelle.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Un déshumidificateur ne remplace pas une ventilation",
            explanation:
              "Un déshumidificateur électrique extrait de l'eau de l'air mais ne renouvelle pas l'air intérieur. Il consomme de l'énergie, ne traite pas les polluants gazeux et représente un coût d'usage permanent. Il peut compléter une VMC défaillante mais ne la remplace pas.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La réglementation impose la VMC dans les logements neufs",
            explanation:
              "Le DTU 68.3 et la réglementation thermique imposent un système de ventilation mécanique dans tout logement neuf. Dans l'ancien, l'absence ou la défaillance d'une VMC est l'une des premières causes identifiées lors des diagnostics d'humidité chronique.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Optimiser et entretenir la ventilation de votre logement."
        immediate={[
          {
            label: "Vérifiez l'aspiration de chaque bouche VMC",
            description:
              "Approchez un mouchoir fin ou une feuille légère de chaque bouche d'extraction. Elle doit être aspirée nettement. Si aucun mouvement n'est détecté, la bouche est peut-être obstruée ou la VMC en panne.",
            effort: "Gratuit, 5 minutes",
          },
          {
            label: "Nettoyez les bouches de ventilation",
            description:
              "Démontez les caches des bouches d'extraction et passez-les sous l'eau chaude savonneuse. Aspirez l'intérieur du conduit accessible. Un entretien biannuel suffit dans la plupart des logements.",
            effort: "Gratuit",
          },
          {
            label: "Vérifiez que les entrées d'air ne sont pas bouchées",
            description:
              "Les entrées d'air (petites grilles en haut des fenêtres ou dans les encadrements) doivent rester ouvertes pour permettre à la VMC de créer un flux traversant. Les obstruer réduit fortement l'efficacité de l'extraction.",
            effort: "Gratuit",
          },
          {
            label: "Posez un hygromètre dans les pièces sensibles",
            description:
              "Un hygromètre simple (10 à 20 euros) vous permet de mesurer l'humidité réelle et de suivre l'effet des actions entreprises. Cible : maintenir entre 40 et 60 % en permanence.",
            effort: "10–20 €",
          },
        ]}
        structural={[
          {
            label: "Remplacer une VMC autoréglable par une VMC hygroréglable",
            description:
              "La VMC hygroréglable est la solution la plus efficace et la plus économique sur le long terme pour maîtriser l'humidité. Elle adapte son débit au taux d'humidité mesuré dans chaque pièce, extrayant plus quand c'est nécessaire et moins quand l'air est sec.",
            effort: "800–1 500 € pose comprise",
          },
          {
            label: "Faire entretenir la VMC par un professionnel",
            description:
              "Au-delà du nettoyage des bouches, un entretien professionnel tous les 3 à 5 ans permet de vérifier le moteur, les débits réels et l'état des conduits. Un devis d'entretien coûte généralement moins de 100 euros.",
            effort: "50–100 € tous les 3–5 ans",
          },
          {
            label: "Envisager une VMC double flux lors d'une rénovation",
            description:
              "Dans le cadre de travaux d'isolation importants, la VMC double flux permet de récupérer la chaleur de l'air extrait pour préchauffer l'air neuf insufflé. Elle combine maîtrise de l'humidité, qualité de l'air et économies d'énergie.",
            effort: "3 000–6 000 € pose comprise",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs qui réduisent l'efficacité de la ventilation."
        errors={[
          {
            label: "Boucher les entrées d'air pour réduire les courants d'air",
            explanation:
              "Les entrées d'air en haut des fenêtres sont indispensables au fonctionnement d'une VMC. Sans apport d'air frais, la dépression créée par l'extraction ne peut pas s'établir. Le débit chute drastiquement et la vapeur ne peut plus être évacuée correctement.",
          },
          {
            label: "Éteindre la VMC la nuit ou en absence",
            explanation:
              "Une VMC doit fonctionner en continu. La vapeur produite la nuit (respiration des occupants) ou les odeurs accumulées en journée s'évacuent précisément quand les occupants dorment ou sont absents. L'arrêter revient à laisser la vapeur s'accumuler.",
          },
          {
            label: "Croire qu'un déshumidificateur remplace la VMC",
            explanation:
              "Un déshumidificateur extrait de l'humidité mais ne renouvelle pas l'air. Les polluants gazeux, les odeurs et le CO2 restent dans le logement. Il représente un coût d'usage permanent et une consommation électrique qui aurait été évitée avec une VMC bien entretenue.",
          },
          {
            label: "Ne jamais entretenir les bouches de ventilation",
            explanation:
              "En quelques années, les bouches d'extraction accumulent poussière et dépôts qui réduisent leur section de passage. Un débit divisé par deux peut passer inaperçu tout en aggravant progressivement les problèmes d'humidité.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la ventilation et l'humidité"
        items={[
          {
            question: "Quelle est la différence entre une VMC autoréglable et hygroréglable ?",
            answer:
              "Une VMC autoréglable fonctionne à débit constant, quel que soit le taux d'humidité intérieure. Une VMC hygroréglable mesure l'humidité dans chaque pièce et augmente automatiquement son débit quand l'humidité monte (après une douche, en cuisine). Elle est nettement plus efficace contre l'humidité et génère moins de pertes thermiques puisqu'elle n'extrait pas d'air chaud inutilement quand l'air est sec.",
          },
          {
            question: "Ma VMC fonctionne mais j'ai toujours de la condensation. Pourquoi ?",
            answer:
              "Plusieurs raisons possibles : les bouches sont encrassées et le débit réel est insuffisant, les entrées d'air sont obstruées, la VMC est sous-dimensionnée pour le logement, ou les sources de vapeur (linge séché intérieur, bains, cuisson) sont trop importantes par rapport à la capacité d'extraction. Un test aux bouches et un relevé d'hygrométrie permettent d'orienter le diagnostic.",
          },
          {
            question: "Peut-on utiliser un déshumidificateur à la place d'une VMC ?",
            answer:
              "Non, pas comme remplacement. Un déshumidificateur extrait de l'eau de l'air mais ne renouvelle pas l'air intérieur. Les polluants gazeux, les odeurs et le CO2 s'accumulent. Il peut servir de complément temporaire dans une pièce particulièrement humide (cave, salle de bain sans extraction) mais ne remplace pas une ventilation mécanique qui renouvelle réellement l'air.",
          },
          {
            question: "La VMC est-elle obligatoire dans un logement ancien ?",
            answer:
              "Dans les logements neufs, la VMC est imposée par la réglementation (DTU 68.3). Dans l'ancien, elle n'est pas légalement obligatoire mais fortement recommandée, surtout après des travaux d'isolation qui ont réduit les infiltrations naturelles d'air. De nombreux diagnostiqueurs la recommandent en premier lieu lors de problèmes d'humidité chronique.",
          },
          {
            question: "Combien coûte l'entretien d'une VMC ?",
            answer:
              "Le nettoyage des bouches d'extraction est gratuit et peut se faire soi-même deux fois par an. Un entretien professionnel complet (vérification du moteur, des débits, des conduits) coûte généralement entre 50 et 100 euros et est recommandé tous les 3 à 5 ans. C'est un coût très faible comparé aux dégâts que peut causer une VMC négligée.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Réduire l'humidité au quotidien",
            description:
              "Les gestes et habitudes pour limiter la production de vapeur et maintenir un taux d'hygrométrie sain en complément de la ventilation.",
            href: "/humidite-maison/reduire-humidite-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Entretien de la VMC",
            description:
              "Guide pratique pour entretenir sa VMC, vérifier les débits et savoir quand faire appel à un professionnel.",
            href: "/air-interieur/entretien-vmc/",
          },
          {
            tag: "Humidité maison",
            title: "Condensation dans le logement",
            description:
              "Comprendre pourquoi la condensation se forme sur les vitres et les murs, et comment y remédier.",
            href: "/humidite-maison/condensation-maison/",
          },
        ]}
      />
    </>
  );
}

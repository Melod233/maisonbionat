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
  title: "Chambre d'enfant saine : air, matériaux et produits adaptés",
  description:
    "Les enfants respirent deux fois plus d'air qu'un adulte et passent 10 heures par jour dans leur chambre. Peintures, sols, matelas, ventilation : les priorités concrètes pour améliorer la qualité de leur espace.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/chambre-enfant-saine/",
  },
  openGraph: {
    title: "Chambre d'enfant saine : air, matériaux et produits adaptés",
    description:
      "Les enfants respirent deux fois plus d'air qu'un adulte et passent 10 heures par jour dans leur chambre. Peintures, sols, matelas, ventilation : les priorités concrètes pour améliorer la qualité de leur espace.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/chambre-enfant-saine/",
  },
};

export default function ChambreEnfantSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison saine famille", href: "/maison-saine-famille/" },
    { name: "Chambre d'enfant saine : air, matériaux et produits adaptés", href: "https://www.maisonbionat.fr/maison-saine-famille/chambre-enfant-saine/" },
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
        tag="Familles"
        title="Chambre d'enfant saine : par où commencer et dans quel ordre."
        quickAnswer="Un enfant de 2 à 12 ans passe en moyenne 10 heures par jour dans sa chambre et respire proportionnellement deux fois plus d'air qu'un adulte. Ce qu'on tolère dans un salon devient significatif dans un espace de sommeil. Quelques choix de matériaux, une ventilation maîtrisée et quelques gestes d'entretien suffisent à réduire l'essentiel de l'exposition."
        stats={[
          { value: "10h", label: "d'occupation quotidienne dans la chambre (sommeil + jeu)" },
          { value: "×2", label: "volume respiratoire proportionnel enfant vs adulte (ANSES)" },
          { value: "11 %", label: "de prévalence de l'asthme chez les jeunes enfants en France (Santé Publique France)" },
          { value: "A+", label: "label minimum pour peintures, sols et colles dans la chambre" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Évaluer la situation" },
          { id: "signes", label: "Signaux d'alerte" },
          { id: "causes", label: "Causes principales" },
          { id: "actions", label: "Plan d'action" },
          { id: "eviter", label: "Erreurs à éviter" },
          { id: "faq", label: "Questions fréquentes" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Évaluer la qualité de l'air de la chambre de votre enfant"
        description="Trois critères permettent d'estimer rapidement si une chambre d'enfant mérite une attention prioritaire. Ils n'exigent pas de matériel spécifique."
        variants={[
          {
            indicator: "Chambre récemment rénovée",
            name: "Dégazage en cours",
            description:
              "Une peinture récente, un sol posé il y a moins de 6 mois ou des meubles neufs en panneaux de particules continuent d'émettre des COV, dont le formaldéhyde. Les émissions sont les plus élevées dans les premières semaines, puis diminuent progressivement sur plusieurs mois. La ventilation intensive est la mesure la plus efficace.",
          },
          {
            indicator: "Ventilation insuffisante ou chambre rarement aérée",
            name: "Accumulation de polluants",
            description:
              "Une chambre fermée accumule CO₂, vapeur d'eau, COV et allergènes. Même en hiver, 10 minutes d'aération matin et soir renouvellent l'air de la pièce. Une VMC bouchée ou sous-dimensionnée aggrave la situation. Vérifier les bouches VMC et les dégager si nécessaire.",
          },
          {
            indicator: "Taux d'humidité supérieur à 60 %",
            name: "Risque d'acariens et de moisissures",
            description:
              "Au-dessus de 60 % d'humidité relative, les acariens se multiplient et les moisissures peuvent apparaître. Ces deux facteurs sont documentés comme déclencheurs ou aggravants de l'asthme chez l'enfant (ANSES, OMS). Un hygromètre simple suffit à surveiller la situation.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Signaux qui invitent à vérifier la chambre"
        subtitle="Ces symptômes ne sont pas forcément liés à la chambre, mais ils méritent d'y regarder, surtout s'ils s'améliorent lors des vacances ou des absences."
        signs={[
          {
            label: "Toux sèche nocturne répétée",
            description:
              "Une toux qui survient principalement la nuit ou au réveil, sans contexte infectieux, peut signaler une irritation des voies respiratoires liée à des polluants ou des allergènes présents dans la chambre.",
            severity: "modéré",
          },
          {
            label: "Nez bouché ou yeux qui piquent au réveil",
            description:
              "Des signes d'irritation des muqueuses au réveil, qui disparaissent dans la journée, orientent vers une exposition nocturne : acariens, moisissures, COV ou taux d'humidité inadapté.",
            severity: "léger",
          },
          {
            label: "Odeur persistante dans la chambre",
            description:
              "Une odeur chimique, de moisi ou de renfermé après une nuit fenêtres fermées traduit une mauvaise qualité de l'air. Elle peut indiquer un dégazage actif, une moisissure cachée ou une ventilation insuffisante.",
            severity: "modéré",
          },
          {
            label: "Eczéma qui s'aggrave la nuit",
            description:
              "Un eczéma qui progresse ou gratte davantage la nuit peut être aggravé par les acariens présents dans la literie ou le sol. Le lavage du linge à 60°C et l'aspiration hebdomadaire sont les premiers gestes à vérifier.",
            severity: "modéré",
          },
          {
            label: "Fatigue inhabituelle au réveil",
            description:
              "Un taux de CO₂ élevé dans une chambre mal ventilée peut provoquer une qualité de sommeil dégradée. Ce signe seul est peu spécifique, mais associé à d'autres, il renforce l'utilité d'une vérification de la ventilation.",
            severity: "léger",
          },
          {
            label: "Symptômes qui diminuent pendant les vacances",
            description:
              "Si les signes s'améliorent de façon notable lors des absences du domicile (vacances, séjour chez des proches), c'est un indice que la chambre ou le logement méritent une évaluation plus attentive.",
            severity: "critique",
          },
        ]}
        footerNote="Ces signaux ne permettent pas de poser un diagnostic médical. En cas de symptômes persistants ou sévères, consulter un médecin ou un pédiatre."
      />

      <IssueCauses
        id="causes"
        title="Les principales sources de pollution dans une chambre d'enfant"
        subtitle="La chambre cumule souvent plusieurs sources. Les traiter par ordre d'impact est plus efficace que de tout aborder simultanément."
        causes={[
          {
            number: "01",
            cause: "Meubles en panneaux de particules ou MDF",
            explanation:
              "Les panneaux agglomérés et MDF contiennent des colles à base d'urée-formaldéhyde, qui émettent du formaldéhyde pendant plusieurs mois à plusieurs années. Les meubles neufs bon marché sont les plus émissifs. Le seuil légal E1 reste supérieur aux valeurs guides recommandées par l'ANSES (10 µg/m³). Préférer le bois massif, la seconde main ou les panneaux E0.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Peintures et revêtements de sol récents",
            explanation:
              "Une peinture appliquée depuis moins de 6 mois ou un sol posé avec des colles non certifiées continue d'émettre des COV. Les émissions les plus élevées ont lieu dans les 48 à 72 premières heures, puis diminuent. Le label A+ limite les émissions à 28 jours, mais n'interdit pas une phase de dégazage initiale.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Ventilation insuffisante",
            explanation:
              "Une chambre sans aération régulière ni VMC fonctionnelle accumule les polluants émis par les matériaux, les textiles et l'enfant lui-même (CO₂, vapeur d'eau). Même une bonne peinture A+ dans une chambre hermétique présente des concentrations plus élevées qu'une peinture ordinaire dans une chambre bien ventilée.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Literie et tapis non entretenus",
            explanation:
              "Les acariens prolifèrent dans les matelas, oreillers, couettes et tapis à partir de 60 % d'humidité relative. Ils sont la première cause d'allergie respiratoire chez l'enfant. Le lavage du linge à 60°C minimum chaque semaine, et l'aspiration avec filtre HEPA, sont les deux gestes les plus efficaces pour les limiter.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Produits parfumés utilisés dans la chambre",
            explanation:
              "Parfums d'ambiance, bougies, sprays désinfectants ou bâtons d'encens émettent des COV et parfois des particules fines dans l'air. Les huiles essentielles diffusées sont également déconseillées par l'ANSES pour les enfants de moins de 3 ans et potentiellement irritantes pour les asthmatiques à tout âge.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Agir sur les priorités dans l'ordre qui compte."
        immediateLabel="Les gestes immédiats"
        structuralLabel="Pour le long terme"
        immediate={[
          {
            label: "Aérer 10 minutes matin et soir, tous les jours",
            description:
              "C'est la mesure la plus simple et la plus efficace. En hiver, 5 minutes fenêtre grande ouverte vaut mieux que 30 minutes fenêtre entrouverte. La chambre ne doit pas rester fermée plus de 24 heures consécutives.",
            effort: "Gratuit, quotidien",
          },
          {
            label: "Vérifier et déboucher les bouches VMC",
            description:
              "Une bouche VMC encrassée ou obstruée par des meubles réduit fortement le renouvellement d'air. La nettoyer avec un chiffon ou aspirer les dépôts prend 5 minutes et peut améliorer significativement la ventilation.",
            effort: "Gratuit",
          },
          {
            label: "Laver le linge de lit à 60°C chaque semaine",
            description:
              "Draps, taies, housse de couette. C'est la seule température efficace contre les acariens. En dessous de 60°C, les acariens survivent. Les enfants passent 10 heures par nuit en contact direct avec cette literie.",
            effort: "Hebdomadaire",
          },
          {
            label: "Retirer les parfums d'ambiance et bougies de la chambre",
            description:
              "Sprays, bougies paraffine, huiles essentielles diffusées : ces produits n'ont pas leur place dans une chambre d'enfant. Les remplacer par une aération efficace est plus bénéfique et sans coût.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Choisir des peintures et finitions labellisées A+",
            description:
              "Lors d'une rénovation ou d'un changement de décoration, opter systématiquement pour des peintures, colles et vernis labellisés A+. Le label est visible sur l'emballage et obligatoire depuis 2013. Aérer plusieurs heures par jour pendant les 6 semaines suivant l'application.",
            effort: "Au moment des travaux",
          },
          {
            label: "Préférer le bois massif ou la seconde main pour les meubles",
            description:
              "Les meubles en panneaux de particules neufs sont les plus émissifs. Un meuble en bois massif ou un meuble d'occasion de plus de 3 ans n'émet quasiment plus de formaldéhyde. La seconde main est souvent une meilleure option que le bas de gamme neuf.",
            effort: "Au moment de l'achat",
          },
          {
            label: "Surveiller l'hygrométrie avec un hygromètre",
            description:
              "Un hygromètre simple (10 à 20 €) permet de vérifier que l'humidité reste entre 40 et 55 %. En dessous : muqueuses irritées, eczéma aggravé. Au-dessus de 60 % : acariens et moisissures. C'est un indicateur fiable pour savoir si la ventilation suffit.",
            effort: "10 à 20 €",
          },
          {
            label: "Aspirer avec un filtre HEPA chaque semaine",
            description:
              "Sol, tapis et zones sous les meubles. Les enfants jouent et respirent plus près du sol que les adultes : ils sont directement dans les couches d'air les plus chargées en allergènes. Un filtre HEPA retient les particules fines que les filtres standard laissent passer.",
            effort: "Hebdomadaire",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs les plus fréquentes dans une chambre d'enfant."
        errors={[
          {
            label: "Diffuser des huiles essentielles pour 'assainir' la chambre",
            explanation:
              "L'ANSES déconseille la diffusion d'huiles essentielles en présence d'enfants de moins de 3 ans. Elles contiennent des COV naturels qui irritent les voies respiratoires. Pour les enfants plus âgés asthmatiques, elles restent potentiellement irritantes. La diffusion ne remplace pas l'aération.",
          },
          {
            label: "Croire que l'odeur disparue signifie la fin du dégazage",
            explanation:
              "L'odeur perceptible d'une peinture ou d'un meuble neuf disparaît en quelques jours, mais les émissions de formaldéhyde et autres COV se poursuivent plusieurs semaines à plusieurs mois. Aérer intensément même quand on ne sent plus rien.",
          },
          {
            label: "Fermer la chambre en hiver pour conserver la chaleur",
            explanation:
              "Une chambre fermée accumule les polluants émis par les matériaux et l'enfant lui-même. Une courte aération intense (5 à 10 minutes fenêtre grande ouverte) perd moins d'énergie thermique qu'on ne le pense et renouvelle efficacement l'air.",
          },
          {
            label: "Multiplier les peluches et textiles décoratifs",
            explanation:
              "Les peluches, tapis épais et rideaux à gros tissus accumulent la poussière et les acariens. Dans une chambre d'enfant, privilégier des textiles faciles à laver et limiter les objets décoratifs qui ne peuvent pas être nettoyés régulièrement.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la chambre d'enfant"
        items={[
          {
            question: "À partir de quel âge les enfants sont-ils moins vulnérables aux polluants intérieurs ?",
            answer:
              "La vulnérabilité est maximale pendant les 3 premières années de vie, en raison du développement pulmonaire et immunitaire en cours. Mais les enfants restent plus exposés que les adultes jusqu'à la fin de la croissance : ils respirent proportionnellement plus d'air et passent davantage de temps à l'intérieur. Selon l'ANSES, ce ratio respiratoire plus élevé constitue une spécificité physiologique durable pendant l'enfance.",
          },
          {
            question: "Un matelas neuf émet-il vraiment des substances nocives ?",
            answer:
              "Oui, certains matelas en mousse polyuréthane émettent des COV pendant leurs premières semaines d'utilisation. La certification OEKO-TEX Standard 100 atteste que chaque composant du matelas a été testé pour l'absence de substances nocives. Les matelas en latex naturel, laine ou fibres végétales sont généralement moins émissifs. Laisser un matelas neuf aérer plusieurs jours à plat, dans une pièce ventilée, avant son utilisation.",
          },
          {
            question: "Vaut-il mieux un purificateur d'air ou une bonne VMC dans une chambre d'enfant ?",
            answer:
              "La VMC est prioritaire : elle assure un renouvellement continu de l'air 24h/24 et évacue les polluants gazeux. Un purificateur HEPA est un complément utile pour réduire les allergènes (acariens, pollens) dans les chambres d'enfants allergiques ou asthmatiques, mais il ne traite pas les COV gazeux et ne remplace pas la ventilation. Si la VMC fonctionne correctement et que vous aérez régulièrement, un purificateur n'est pas indispensable.",
          },
          {
            question: "Peut-on utiliser de la peinture A+ dans la chambre d'un enfant asthmatique ?",
            answer:
              "Le label A+ est le standard recommandé pour toute chambre d'enfant. Pour un enfant asthmatique, l'application doit être faite en son absence et la pièce doit être aérée intensément pendant au moins 6 semaines avant qu'il réoccupe la chambre. Si possible, préférer les peintures minérales (chaux, silicate) qui n'émettent pas de COV après séchage. Consulter le médecin traitant ou l'allergologue pour toute décision spécifique.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Maison saine famille",
            title: "Préparer une chambre bébé plus saine",
            description:
              "Les priorités spécifiques aux nourrissons : peintures, literie, ventilation et ordre des actions avant la naissance.",
            href: "/maison-saine-famille/chambre-bebe-saine/",
          },
          {
            tag: "Pièce par pièce",
            title: "Chambre d'enfant : aménagement sain",
            description:
              "Le guide pratique complet pour aménager une chambre d'enfant, de la conception à l'entretien quotidien.",
            href: "/piece-par-piece/chambre-enfant-saine/",
          },
          {
            tag: "Air intérieur",
            title: "Polluants intérieurs les plus fréquents",
            description:
              "Formaldéhyde, COV, particules fines : comprendre les familles de polluants présents dans l'air intérieur et leurs sources.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
        ]}
      />
    </>
  );
}

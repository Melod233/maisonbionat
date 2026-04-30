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
  title: "Nitrates dans l'eau du robinet : seuils, risques et alternatives",
  description:
    "Limite réglementaire 50 mg/L mais 10 mg/L recommandé OMS pour nourrissons et femmes enceintes : zones exposées, syndrome du bébé bleu, eau de biberon adaptée.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/nitrates-eau-robinet/",
  },
  openGraph: {
    title: "Nitrates dans l'eau du robinet : seuils, risques et alternatives",
    description:
      "Limite réglementaire 50 mg/L mais 10 mg/L recommandé OMS pour nourrissons et femmes enceintes : zones exposées, syndrome du bébé bleu, eau de biberon adaptée.",
    url: "https://www.maisonbionat.fr/eau-maison/nitrates-eau-robinet/",
  },
};

const faqItems = [
  {
    question: "Quelle quantité de nitrates dans mon eau du robinet ?",
    answer:
      "L'information est publique. Vous pouvez la consulter sur le site de votre ARS régionale, sur le portail national orobnat.sante.gouv.fr, sur la carte interactive UFC Que Choisir, ou sur la synthèse annuelle jointe à votre facture d'eau. Les concentrations typiques en France varient de < 5 mg/L (eaux protégées des massifs montagneux ou des forêts) à 30-45 mg/L (zones agricoles intensives), avec quelques communes ponctuellement au-dessus de 50 mg/L. La cible de 10 mg/L pour les populations sensibles est atteinte par environ 60 % des communes françaises.",
  },
  {
    question: "Pourquoi les nitrates sont-ils dangereux pour les nourrissons ?",
    answer:
      "Les nitrates eux-mêmes ne sont pas toxiques, mais ils sont transformés en nitrites par les bactéries de la flore digestive. Chez le nourrisson de moins de 6 mois, l'estomac peu acide laisse cette transformation se faire massivement, et les nitrites se fixent sur l'hémoglobine pour former de la méthémoglobine, qui ne transporte plus l'oxygène. Le bébé devient bleuâtre (cyanose), souffle, peut perdre connaissance et, en cas grave, mourir : c'est le « syndrome du bébé bleu » ou méthémoglobinémie. Ce risque disparaît après 6-12 mois avec la maturation digestive. La recommandation OMS de 10 mg/L vise précisément cette population.",
  },
  {
    question: "Et pour la femme enceinte ?",
    answer:
      "Le risque est moins documenté que chez le nourrisson mais établi. Les nitrates traversent le placenta et peuvent affecter l'oxygénation fœtale. Plusieurs études américaines récentes ont associé une consommation d'eau riche en nitrates pendant la grossesse à un risque accru de prématurité, de petit poids de naissance et de certaines malformations. La recommandation OMS de ne pas dépasser 10 mg/L pour les femmes enceintes traduit ces données. En cas d'eau de votre commune au-delà de ce seuil, prévoir une eau en bouteille faiblement minéralisée pendant toute la grossesse, en particulier au premier trimestre.",
  },
  {
    question: "Quelle eau en bouteille choisir pour les biberons en zone à nitrates ?",
    answer:
      "Choisir une eau étiquetée « convient pour la préparation des aliments des nourrissons » selon l'arrêté du 14 mars 2007. Ces eaux respectent par construction des limites strictes : nitrates ≤ 10 mg/L, fluor ≤ 1,5 mg/L, sodium ≤ 200 mg/L, faible minéralisation totale (idéalement < 500 mg/L de résidu sec à 180 °C). Les eaux de source faiblement minéralisées (Mont Roucous, Volvic, Rosée de la Reine, Évian, certaines marques de distributeur étiquetées) répondent à ces critères. Vérifier l'étiquette : la mention 'convient pour la préparation des aliments des nourrissons' est explicite, à privilégier sur les revendications marketing vagues.",
  },
];

export default function NitratesEauRobinetPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Nitrates dans l'eau du robinet",
      href: "https://www.maisonbionat.fr/eau-maison/nitrates-eau-robinet/",
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
        parentLabel="Eau maison"
        parentHref="/eau-maison/"
        tag="Populations sensibles"
        title="Nitrates dans l'eau du robinet : ce qu'il faut savoir pour les nourrissons et femmes enceintes"
        quickAnswer="Les nitrates sont des composés azotés issus principalement de l'agriculture (engrais, élevages) qui contaminent les eaux de surface et les nappes peu profondes. La limite de qualité française pour l'eau potable est fixée à 50 mg/L, conformément à la directive européenne 98/83/CE. Mais l'OMS et l'ANSES recommandent de ne pas dépasser 10 mg/L pour les nourrissons de moins de 6 mois (risque de méthémoglobinémie ou « syndrome du bébé bleu ») et préconisent la prudence pour les femmes enceintes. La méthémoglobinémie est rare mais bien documentée dans la littérature pédiatrique. Les zones agricoles intensives (Bretagne, Beauce, plaines céréalières du Bassin parisien et du Sud-Ouest) concentrent les concentrations supérieures à 25 mg/L. La parade est simple : consulter la qualité de l'eau de sa commune, et en cas de dépassement de 10 mg/L, utiliser une eau en bouteille spécifiquement adaptée à la préparation des biberons et à la consommation de la femme enceinte."
        stats={[
          {
            value: "50 mg/L",
            label: "limite de qualité française pour les nitrates dans l'eau potable",
          },
          {
            value: "10 mg/L",
            label: "seuil recommandé OMS/ANSES pour nourrissons et femmes enceintes",
          },
          {
            value: "< 6 mois",
            label: "âge du nourrisson le plus à risque de méthémoglobinémie",
          },
          {
            value: "Bretagne / Beauce",
            label: "zones agricoles les plus exposées aux nitrates en France",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le risque" },
          { id: "signes", label: "Reconnaître les situations à risque" },
          { id: "causes", label: "Origine des nitrates" },
          { id: "actions", label: "Adapter la consommation" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi les nitrates posent un problème spécifique aux nourrissons et aux femmes enceintes."
        description="Le nitrate (NO₃⁻) en lui-même est un ion peu réactif et peu toxique. Le problème vient de sa transformation en nitrite (NO₂⁻) sous l'action de bactéries présentes dans la flore buccale et digestive. Chez l'adulte, l'estomac très acide limite cette transformation et l'organisme métabolise les nitrites efficacement. Chez le nourrisson de moins de 6 mois, dont l'estomac est peu acide, la transformation se fait massivement. Les nitrites se fixent alors sur l'hémoglobine pour former de la méthémoglobine, qui ne peut plus transporter l'oxygène. C'est la méthémoglobinémie, ou « syndrome du bébé bleu », qui peut être grave voire mortelle. Le risque s'estompe après 6-12 mois avec la maturation digestive."
        variants={[
          {
            indicator: "50 mg/L",
            name: "Limite de qualité réglementaire française",
            description:
              "Issue de la directive européenne 98/83/CE, transposée en droit français. Au-delà, l'eau est déclarée non conforme et le distributeur doit engager des mesures correctives. Cette limite a été fixée historiquement comme un compromis entre considération sanitaire et faisabilité technique de traitement, à un niveau qui protège la majorité de la population adulte mais pas les populations les plus sensibles.",
          },
          {
            indicator: "10 mg/L",
            name: "Recommandation OMS/ANSES populations sensibles",
            description:
              "Seuil sanitaire spécifique pour les nourrissons (< 6 mois) et les femmes enceintes. Repris dans la qualification des eaux en bouteille « convient pour la préparation des aliments des nourrissons » (arrêté du 14 mars 2007). En France, environ 60 % des communes respectent ce seuil pour leur eau du robinet, selon les données ARS.",
          },
          {
            indicator: "Méthémoglobinémie",
            name: "Mécanisme du syndrome du bébé bleu",
            description:
              "Les nitrates ingérés sont transformés en nitrites par les bactéries digestives. Chez le nourrisson, l'environnement gastrique peu acide favorise cette transformation. Les nitrites oxydent le fer de l'hémoglobine (Fe²⁺ → Fe³⁺), formant la méthémoglobine, incapable de transporter l'oxygène. Au-delà de 10 % de méthémoglobine dans le sang, l'enfant développe une cyanose visible, peut souffrir de détresse respiratoire et nécessiter une prise en charge urgente (bleu de méthylène en antidote).",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Identifier les situations qui exigent une vigilance accrue."
        subtitle="Tous les ménages ne sont pas concernés au même niveau. Voici les configurations qui justifient une vérification active de la teneur en nitrates de votre eau."
        signs={[
          {
            label: "Préparation de biberons pour un nourrisson de moins de 6 mois",
            description:
              "Situation la plus sensible. Le nourrisson est exclusivement alimenté par le lait, et un biberon contient 90 % d'eau. Une eau à 30 mg/L de nitrates apporte une charge cumulative significative sur la journée et peut atteindre des doses critiques pour la méthémoglobinémie. La règle de prudence : si l'eau de la commune dépasse 10 mg/L, utiliser une eau en bouteille adaptée pour TOUS les biberons jusqu'aux 6 mois de l'enfant.",
            severity: "critique",
          },
          {
            label: "Grossesse en cours, surtout au premier trimestre",
            description:
              "Plusieurs études récentes (notamment américaines) associent une consommation d'eau riche en nitrates pendant la grossesse à un risque accru de prématurité, de petit poids de naissance et de certaines malformations. Le premier trimestre, période de l'organogenèse, est le plus sensible. La recommandation OMS de 10 mg/L s'applique aussi aux femmes enceintes.",
            severity: "critique",
          },
          {
            label: "Logement en zone agricole intensive",
            description:
              "Bretagne, Beauce, Champagne, plaines céréalières du Bassin parisien et du Sud-Ouest, certaines zones d'élevage intensif. Les concentrations dépassent fréquemment 30 mg/L et atteignent ponctuellement 50 mg/L. L'information sur la zone précise est disponible sur le site de l'ARS et sur la carte UFC Que Choisir. À vérifier en priorité avant de planifier une grossesse ou une naissance.",
            severity: "modéré",
          },
          {
            label: "Eau de puits ou de forage privé",
            description:
              "Sans contrôle réglementaire automatique. Les eaux peu profondes en zone agricole peuvent atteindre 80-150 mg/L, voire plus, après un épisode de fertilisation. Toute consommation suppose une analyse complète initiale puis annuelle, et une vigilance redoublée pour les populations sensibles. Ne jamais préparer un biberon avec de l'eau de puits non traitée et non analysée récemment.",
            severity: "critique",
          },
          {
            label: "Avis de restriction de consommation publié par l'ARS",
            description:
              "Dans certaines communes, l'ARS publie un avis spécifique recommandant aux nourrissons et femmes enceintes de ne pas consommer l'eau du robinet, en raison d'un dépassement persistant. Ces avis sont communiqués via la mairie, le distributeur, parfois la presse locale. À prendre au sérieux et appliquer strictement le temps de la non-conformité.",
            severity: "critique",
          },
          {
            label: "Allaitement mixte ou soupes pour nourrisson",
            description:
              "Au-delà du biberon strict, la diversification alimentaire avec des soupes ou compotes préparées avec l'eau du robinet expose le nourrisson aux nitrates. Pour les bébés de 4 à 12 mois en zone à nitrates, étendre la précaution à toutes les préparations alimentaires faites avec de l'eau de cuisson.",
            severity: "modéré",
          },
        ]}
        footerNote="Le pédiatre ou la sage-femme suit ces recommandations en routine en zone à risque. Ne pas hésiter à poser la question explicitement lors de la préparation d'une naissance ou pendant la grossesse, surtout en zone agricole intensive."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les nitrates dans l'eau du robinet."
        subtitle="L'origine des nitrates en France est très majoritairement agricole, secondairement liée aux assainissements défaillants. Les distinguer aide à comprendre la dynamique territoriale."
        causes={[
          {
            number: "01",
            cause: "Engrais azotés et lisiers d'élevage",
            explanation:
              "Source écrasante en France. Les nitrates issus des engrais minéraux (urée, ammonitrate) et des effluents d'élevage (lisier de porc, fumier de bovin) sont entraînés par les pluies dans les sols puis dans les nappes ou les rivières. Le délai entre épandage et apparition dans la nappe peut atteindre 10 à 30 ans, ce qui explique la lente régression observée même quand les pratiques évoluent.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Cultures intensives sans couverture hivernale",
            explanation:
              "Les sols nus en hiver libèrent les nitrates issus de la minéralisation de la matière organique. Les cultures intermédiaires piège-à-nitrates (CIPAN) imposées par la directive nitrates de 1991 réduisent ce phénomène, mais leur application reste incomplète. Les zones céréalières du Bassin parisien et du Sud-Ouest cumulent ces phénomènes.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Assainissement individuel défaillant",
            explanation:
              "Les fosses septiques ou installations d'assainissement non collectif (ANC) anciennes ou mal entretenues relarguent des nitrates et de la matière organique azotée dans le sol, qui rejoint les nappes. Cause locale dans les zones rurales avec habitat dispersé. Les SPANC (Services publics d'assainissement non collectif) contrôlent et imposent les remises aux normes.",
            frequency: "moins fréquent",
          },
          {
            number: "04",
            cause: "Stations d'épuration sous-dimensionnées",
            explanation:
              "Source mineure mais existante. Les rejets de stations d'épuration urbaines en milieu rural ou en bord de petites rivières peuvent contribuer aux nitrates de la ressource en aval. Le traitement de l'azote (nitrification-dénitrification) est imposé depuis 1991 dans les zones sensibles, mais la mise à niveau a été progressive.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Décroissance lente même après évolution des pratiques",
            explanation:
              "Particularité hydrogéologique. Une nappe profonde en zone calcaire peut continuer à se charger en nitrates pendant 20 à 50 ans après la modification des pratiques agricoles, en raison de la lenteur de circulation et du stockage dans les sols. Cela explique pourquoi certaines régions ne voient pas de baisse rapide malgré les efforts engagés.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Adapter la consommation selon la situation et l'eau disponible."
        immediate={[
          {
            label: "Consulter la concentration en nitrates de votre commune",
            description:
              "Sur le site de votre ARS, sur orobnat.sante.gouv.fr ou sur la carte UFC Que Choisir. Repérer la moyenne et le maximum sur les 12-24 derniers mois. Trois cas de figure : < 10 mg/L, eau adaptée à toutes les populations. 10-25 mg/L, eau du robinet pour adultes mais eau bouteille adaptée pour biberons et grossesse. > 25 mg/L, vigilance accrue pour les populations sensibles.",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Pour les biberons en zone à nitrates, choisir une eau adaptée",
            description:
              "Eau en bouteille étiquetée « convient pour la préparation des aliments des nourrissons » (arrêté du 14 mars 2007). Privilégier les eaux faiblement minéralisées (résidu sec à 180 °C < 500 mg/L) : Mont Roucous, Volvic, Rosée de la Reine, certaines marques de distributeur. Coût ~30 cts à 1 €/L, soit 30 à 100 € sur la durée d'allaitement strict (6 mois). Geste simple et durable.",
            effort: "Achat ponctuel",
          },
          {
            label: "Pour la grossesse, idem si l'eau de votre commune dépasse 10 mg/L",
            description:
              "La recommandation OMS s'applique également aux femmes enceintes. Préférer une eau en bouteille faiblement minéralisée pendant les 9 mois de grossesse, en particulier au premier trimestre. Cette précaution est simple et peu coûteuse comparée à l'enjeu sanitaire potentiel.",
            effort: "Achat sur 9 mois",
          },
          {
            label: "Faire analyser l'eau d'un puits ou forage privé",
            description:
              "Pour 80-200 €, un laboratoire COFRAC réalise une analyse complète : nitrates, pesticides, microbiologie, métaux. Indispensable avant la première utilisation et à renouveler annuellement, surtout si présence d'enfants ou femme enceinte au domicile. Sans cette analyse, ne jamais consommer une eau de puits sans précaution.",
            effort: "80-200 € annuel",
          },
        ]}
        structural={[
          {
            label: "Demander à votre distributeur le plan d'action en cas de non-conformité",
            description:
              "Si votre commune est classée NC1 ou NC2 sur les nitrates, le distributeur (régie, syndicat) a l'obligation d'engager un plan de mise en conformité (changement de ressource, traitement par dénitrification, dilution avec une autre source). Demander la temporalité et le suivi public. Un plan flou ou absent justifie une saisine de la DREAL.",
            effort: "Démarche citoyenne",
          },
          {
            label: "Évaluer un osmoseur pour les zones à dépassement chronique",
            description:
              "L'osmose inverse est l'une des rares solutions domestiques efficaces sur les nitrates (réduction de 85-95 %). Coût 400-1500 € installé, rejet de 3-5 L pour 1 L filtré. Pertinent uniquement en cas de dépassement chronique > 25 mg/L et impossibilité de changer de ressource ou de déménager. Voir notre page filtres pour le détail des arbitrages.",
            effort: "Investissement durable",
          },
          {
            label: "Suivre l'évolution des concentrations dans le temps",
            description:
              "Les concentrations en nitrates suivent des cycles saisonniers (pics au printemps après les épandages et après les épisodes pluvieux) et des tendances pluriannuelles. Vérifier 1 fois par an la situation de votre commune. Une baisse progressive (régressive de 10 % par an) signale une amélioration des pratiques agricoles ; une stagnation à haut niveau justifie la vigilance maintenue.",
            effort: "Veille annuelle",
          },
          {
            label: "Adapter à la diversification alimentaire du nourrisson",
            description:
              "À partir de 4-6 mois et jusqu'à 12 mois, le risque diminue progressivement avec la maturation digestive. Mais en zone à nitrates > 25 mg/L, étendre la précaution aux soupes, compotes, bouillons et autres préparations à base d'eau du robinet. À partir de 12 mois, le risque devient négligeable et l'eau du robinet (sous le seuil 50 mg/L) peut être réintroduite.",
            effort: "Adaptation progressive",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les nitrates dans l'eau."
        errors={[
          {
            label: "\"L'eau de ma commune est conforme aux 50 mg/L, donc tout va bien\"",
            explanation:
              "La conformité réglementaire à 50 mg/L protège la majorité de la population adulte mais ne protège pas les nourrissons et les femmes enceintes, pour lesquels le seuil sanitaire est de 10 mg/L. Une eau à 30 mg/L est conforme à la loi, mais inadaptée à la préparation d'un biberon. La règle de précaution OMS doit être appliquée indépendamment de la conformité réglementaire pour ces populations.",
          },
          {
            label: "\"Bouillir l'eau élimine les nitrates\"",
            explanation:
              "Faux, et même contre-productif. La concentration en nitrates AUGMENTE lors de l'ébullition (l'eau s'évapore, les nitrates restent et se concentrent). Bouillir l'eau pour préparer un biberon en zone à nitrates aggrave l'exposition. Les seules solutions efficaces sont le changement de ressource (eau en bouteille adaptée) ou l'osmose inverse.",
          },
          {
            label: "\"Une carafe filtrante avec charbon actif retire les nitrates\"",
            explanation:
              "Faux. Le charbon actif est efficace sur le chlore, certains COV et certaines molécules organiques, mais pas sur les ions nitrates qui sont des espèces minérales très solubles. Aucune carafe filtrante grand public ne réduit significativement les nitrates. Pour la préparation des biberons en zone à nitrates, le filtrage en carafe est inutile : préférer l'eau en bouteille adaptée.",
          },
          {
            label: "\"Les nitrates sont un problème uniquement en milieu rural\"",
            explanation:
              "Plus complexe. Les zones rurales agricoles intensives sont effectivement les plus exposées, mais des communes périurbaines ou même urbaines alimentées par des ressources agricoles voisines peuvent dépasser 25 mg/L. La géographie du réseau d'eau ne suit pas toujours les frontières administratives. Vérifier sur la carte ARS ou UFC Que Choisir reste la seule façon de connaître la situation exacte.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les nitrates dans l'eau"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet",
            description:
              "Comment consulter la qualité de l'eau de votre commune et lire les analyses publiques de l'ARS.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Filtre à eau : utilité et limites",
            description:
              "Osmoseur, carafe, charbon actif : ce qui fonctionne (et ce qui ne fonctionne pas) face aux nitrates.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
          {
            tag: "Maison saine famille",
            title: "Maison et grossesse",
            description:
              "Vue d'ensemble des précautions environnementales pendant la grossesse, dont la qualité de l'eau consommée.",
            href: "/maison-saine-famille/maison-grossesse/",
          },
        ]}
      />
    </>
  );
}

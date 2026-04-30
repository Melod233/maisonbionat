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
  title: "PFAS dans l'eau du robinet : seuil 0,1 µg/L applicable en 2026",
  description:
    "Polluants éternels : seuil européen 0,1 µg/L pour la somme de 20 PFAS depuis le 12 janvier 2026, contrôle ARS, zones contaminées et solutions de filtration efficaces.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/pfas-eau-robinet/",
  },
  openGraph: {
    title: "PFAS dans l'eau du robinet : seuil 0,1 µg/L applicable en 2026",
    description:
      "Polluants éternels : seuil européen 0,1 µg/L pour la somme de 20 PFAS depuis le 12 janvier 2026, contrôle ARS, zones contaminées et solutions de filtration efficaces.",
    url: "https://www.maisonbionat.fr/eau-maison/pfas-eau-robinet/",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que les PFAS et pourquoi parle-t-on de polluants éternels ?",
    answer:
      "Les PFAS (substances per- et polyfluoroalkylées) sont une famille de plus de 4 700 composés synthétiques utilisés depuis les années 1950 pour leurs propriétés antiadhésives, imperméabilisantes et résistantes à la chaleur : poêles antiadhésives (Téflon), textiles imperméables, emballages alimentaires anti-graisse, mousses anti-incendie, cosmétiques, traitements de surface industriels. Leur structure carbone-fluor est l'une des liaisons chimiques les plus stables connues, ce qui les rend extrêmement résistants à la dégradation naturelle : ils s'accumulent dans l'environnement, dans les eaux, dans les sols, et dans les organismes vivants pendant des décennies, voire des siècles. D'où le surnom de « polluants éternels » donné par les médias et les scientifiques.",
  },
  {
    question: "Quelle est la limite réglementaire en 2026 ?",
    answer:
      "La directive (UE) 2020/2184 fixe une limite de qualité obligatoire de 0,1 µg/L au robinet du consommateur pour la somme de 20 PFAS, applicable depuis le 12 janvier 2026. La France a anticipé en partie cette disposition, avec une mise en place progressive du contrôle sanitaire par les Agences régionales de santé (ARS). Au-delà de cette limite globale, certains pays (Allemagne, Pays-Bas) appliquent des seuils plus stricts par molécule individuelle, et l'EPA américaine a fixé en 2024 des limites de 4 ng/L (0,004 µg/L) pour les PFOA et PFOS, soit 25 fois plus exigeant que le seuil européen. La pression réglementaire devrait continuer à se renforcer dans les années à venir.",
  },
  {
    question: "Combien de communes sont concernées en France ?",
    answer:
      "Selon les données publiques disponibles début 2026, environ 22 réseaux sur 23 241 dépassent le seuil européen de 0,1 µg/L pour la somme des 20 PFAS surveillés, soit environ 0,1 % des réseaux français. Ce chiffre va probablement évoluer au fur et à mesure que le contrôle systématique se met en place et que de nouvelles molécules sont incluses dans les analyses. Les zones les plus exposées sont : la vallée du Rhône au sud de Lyon (industrie chimique historique), la zone de Salindres dans le Gard, certains aéroports et bases militaires (mousses anti-incendie), et plus généralement les communes situées à proximité d'anciens sites industriels manipulant des PFAS. La carte interactive du ministère de la Transition écologique recense les contaminations identifiées.",
  },
  {
    question: "Quelle filtration est efficace contre les PFAS ?",
    answer:
      "Trois technologies principales selon l'efficacité décroissante. 1) Osmose inverse : réduction de 80 à 95 % de la majorité des PFAS, technologie la plus polyvalente et la mieux documentée. 2) Charbon actif granulaire en cartouche dédiée PFAS : efficacité variable (50-90 %) selon la molécule (les chaînes courtes type GenX résistent davantage), à privilégier les cartouches certifiées NSF/ANSI 53 ou 58 spécifiquement testées contre les PFAS. 3) Résines échangeuses d'ions spécifiques : très efficaces sur les PFAS chargées (PFOA, PFOS) mais coûteuses. À l'inverse, les carafes filtrantes classiques (Brita et équivalents) ont une efficacité non démontrée sur les PFAS selon l'ANSES et l'UFC Que Choisir : ne pas s'y fier en zone contaminée.",
  },
];

export default function PfasEauRobinetPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "PFAS dans l'eau du robinet",
      href: "https://www.maisonbionat.fr/eau-maison/pfas-eau-robinet/",
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
        tag="Polluants éternels"
        title="PFAS dans l'eau du robinet : ce que dit la nouvelle réglementation européenne"
        quickAnswer="Les PFAS, substances per- et polyfluoroalkylées surnommées « polluants éternels », sont une famille de plus de 4 700 composés synthétiques persistants dans l'environnement et bioaccumulables. La directive européenne (UE) 2020/2184 a fixé une limite de qualité obligatoire de 0,1 µg/L pour la somme de 20 PFAS au robinet du consommateur, applicable depuis le 12 janvier 2026. La France a anticipé cette mise en œuvre via les Agences régionales de santé. Selon les données publiques début 2026, environ 22 réseaux sur 23 241 dépassent ce seuil, soit 0,1 % des réseaux français, principalement à proximité d'anciens sites industriels et de bases militaires (vallée du Rhône, Salindres, certains aéroports). Pour les ménages situés en zone documentée, l'osmose inverse est la solution domestique la mieux documentée (réduction 80-95 %). Les carafes filtrantes classiques sont signalées par l'ANSES comme inefficaces sur les PFAS."
        stats={[
          {
            value: "0,1 µg/L",
            label: "limite réglementaire UE pour la somme de 20 PFAS au robinet (depuis 12/01/2026)",
          },
          {
            value: "~22 / 23 241",
            label: "réseaux français en dépassement début 2026 (~0,1 % des réseaux)",
          },
          {
            value: "> 4 700",
            label: "composés différents dans la famille PFAS recensés",
          },
          {
            value: "80-95 %",
            label: "réduction par osmose inverse selon la molécule",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les PFAS" },
          { id: "signes", label: "Zones à risque" },
          { id: "causes", label: "Sources industrielles" },
          { id: "actions", label: "Vérifier et filtrer" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce que sont les PFAS et pourquoi ils inquiètent les autorités sanitaires."
        description="Les PFAS (per- and polyfluoroalkyl substances) sont une famille de plus de 4 700 composés synthétiques caractérisés par une chaîne carbonée fluorée. La liaison carbone-fluor est l'une des plus stables connues en chimie organique, ce qui rend ces molécules extrêmement résistantes à la dégradation thermique, chimique et biologique. Utilisés depuis les années 1950 dans des milliers d'applications industrielles et grand public (textiles imperméables, poêles antiadhésives, emballages alimentaires anti-graisse, mousses anti-incendie, cosmétiques), ils se sont diffusés massivement dans l'environnement et se retrouvent aujourd'hui dans les eaux superficielles, les nappes phréatiques, les sols, le sang humain de l'ensemble de la population mondiale. Plusieurs PFAS sont classés cancérogènes possibles ou avérés (PFOA classée cancérogène pour l'homme par le CIRC en 2023) et associés à des effets sur le foie, le système immunitaire, les hormones et le développement fœtal."
        variants={[
          {
            indicator: "0,1 µg/L",
            name: "Limite UE pour la somme de 20 PFAS",
            description:
              "Issue de la directive (UE) 2020/2184, applicable depuis le 12 janvier 2026 dans toute l'Union européenne. Concerne 20 PFAS spécifiques surveillés à titre prioritaire, dont PFOA, PFOS, PFNA, PFHxS et 16 autres. Tout dépassement déclenche les procédures de non-conformité réglementaire avec obligation pour le distributeur d'agir.",
          },
          {
            indicator: "0,5 µg/L",
            name: "Limite UE pour les PFAS totaux",
            description:
              "Seconde limite, plus large, qui s'applique à l'ensemble des composés PFAS détectables (au-delà des 20 spécifiquement surveillés). Mise en œuvre plus progressive en raison des contraintes analytiques. Cette limite vise à anticiper l'introduction continue de nouvelles molécules de la famille PFAS qui ne sont pas encore individuellement réglementées.",
          },
          {
            indicator: "4 ng/L",
            name: "Limite EPA américaine 2024 (PFOA et PFOS)",
            description:
              "L'Agence américaine de protection de l'environnement a fixé en avril 2024 des limites de 4 ng/L (0,004 µg/L) pour PFOA et PFOS, soit 25 fois plus strict que la limite européenne globale. Cette différence reflète des considérations sanitaires (les PFOA et PFOS sont les plus documentées) et politiques. La pression européenne pour aligner les seuils sur les valeurs américaines est en cours.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Identifier si votre logement est dans une zone à risque PFAS."
        subtitle="Contrairement à d'autres polluants comme les nitrates, les PFAS ont une distribution territoriale très inégale, fortement liée à la présence d'anciens sites industriels ou militaires. Voici les configurations à vérifier."
        signs={[
          {
            label: "Logement situé près d'un ancien ou actuel site industriel chimique",
            description:
              "Vallée du Rhône au sud de Lyon (Pierre-Bénite, Tavaux), Salindres dans le Gard, sites Arkema/Daikin/3M et leurs voisinages. Les rejets historiques (parfois sur 50-70 ans) ont contaminé les nappes locales. Si votre commune est à moins de 10-20 km d'un site chimique fluoré historique, vérifier en priorité.",
            severity: "critique",
          },
          {
            label: "Proximité d'un aéroport civil ou militaire, ou d'un site de pompiers",
            description:
              "Les mousses anti-incendie utilisées historiquement (FFFP, AFFF) contenaient des PFAS, en particulier le PFOS. Bases aériennes, aéroports civils, centres d'entraînement de pompiers ont contaminé les nappes locales par infiltration. Plusieurs sites font l'objet d'investigations en France actuellement.",
            severity: "critique",
          },
          {
            label: "Communes recensées sur la cartographie ministérielle PFAS",
            description:
              "Le ministère de la Transition écologique publie une cartographie des contaminations identifiées sur ecologie.gouv.fr. Si votre commune apparaît sur cette carte, l'ARS surveille le réseau et publie les analyses. Vérifier en priorité avant tout autre diagnostic.",
            severity: "critique",
          },
          {
            label: "Avis de l'ARS publié sur des dépassements PFAS dans votre réseau",
            description:
              "En cas de dépassement avéré du seuil 0,1 µg/L, l'ARS publie un avis sanitaire et le distributeur est tenu d'informer les abonnés (par courrier ou par les médias locaux). Si vous avez reçu une telle communication, prendre les mesures immédiates en attendant la mise en conformité du réseau.",
            severity: "critique",
          },
          {
            label: "Logement alimenté par une eau de surface en zone agricole intensive",
            description:
              "Source secondaire mais documentée. Certains pesticides contiennent des PFAS dans leur formulation, contribuant à la contamination diffuse. Sans atteindre les niveaux des points chauds industriels, les nappes des grandes plaines céréalières affichent souvent des concentrations détectables sous le seuil réglementaire mais non nulles.",
            severity: "modéré",
          },
          {
            label: "Eau de votre commune sans information PFAS publiée",
            description:
              "Avec la mise en application progressive du contrôle obligatoire en 2026, certaines communes n'ont pas encore publié leurs premières analyses PFAS. Cela ne signifie pas absence de risque mais absence de mesure. Vérifier l'avancement du contrôle auprès de votre ARS et patienter quelques mois si nécessaire avant de prendre des décisions définitives.",
            severity: "léger",
          },
        ]}
        footerNote="La carte interactive du ministère de la Transition écologique (ecologie.gouv.fr/politiques-publiques/pfas-surveillance-letat-eaux-france) est la référence française pour identifier les communes contaminées. À consulter avant toute décision de filtration coûteuse."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les PFAS dans l'eau du robinet."
        subtitle="La contamination des eaux est très majoritairement liée à des sources industrielles ou militaires identifiées, beaucoup plus rarement à une diffusion environnementale large. Identifier la source aide à comprendre la dynamique."
        causes={[
          {
            number: "01",
            cause: "Rejets industriels historiques (chimie fluorée)",
            explanation:
              "Source principale en France. Les sites de production de PFAS (Arkema à Pierre-Bénite, ex-Daikin, ex-Solvay à Tavaux, Salindres dans le Gard) ont rejeté pendant des décennies des PFAS dans l'environnement, contaminant les nappes phréatiques sur plusieurs dizaines de kilomètres en aval. Même après l'arrêt ou la réduction des rejets, les nappes restent contaminées pour des décennies.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Mousses anti-incendie sur sites militaires et aéroports",
            explanation:
              "Les mousses extinctrices AFFF (Aqueous Film Forming Foam) utilisées dans les bases aériennes, aéroports et centres d'entraînement de pompiers contenaient massivement du PFOS jusqu'à son interdiction progressive (2009 dans l'UE). Les exercices répétés ont saturé les sols qui relâchent maintenant le PFOS dans les nappes voisines.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Stations d'épuration et boues d'épandage",
            explanation:
              "Les stations d'épuration ne dégradent pas les PFAS mais les concentrent dans les boues. L'épandage agricole de ces boues a diffusé les PFAS dans les sols et les eaux locales. Source diffuse et difficile à tracer, qui contribue au bruit de fond environnemental.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Décharges historiques",
            explanation:
              "Anciens centres d'enfouissement non étanches, anciens sites de stockage de déchets industriels : relargage progressif vers les nappes par lixiviation. Sources souvent identifiées rétrospectivement lors d'analyses systématiques de zones suspectes.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Diffusion atmosphérique longue distance",
            explanation:
              "Les PFAS volatils se diffusent dans l'atmosphère sur des distances continentales et se déposent par les pluies. Cela explique la présence de traces de PFAS dans les nappes et les eaux de surface partout dans le monde, y compris dans des zones sans source locale identifiée. Niveaux de fond généralement très inférieurs à 0,1 µg/L mais détectables.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Vérifier l'exposition et choisir la réponse adaptée."
        immediate={[
          {
            label: "Consulter la cartographie ministérielle PFAS",
            description:
              "Sur ecologie.gouv.fr/politiques-publiques/pfas-surveillance-letat-eaux-france, vérifier si votre commune ou une commune voisine apparaît dans la zone de surveillance ou de contamination. Cette cartographie est mise à jour régulièrement et constitue la référence française. 5 minutes pour situer le risque.",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Consulter les analyses PFAS de l'ARS",
            description:
              "Sur le site de votre ARS régionale, rubrique 'Eau et alimentation', les analyses PFAS sont progressivement publiées depuis 2026. Si votre réseau n'a pas encore été analysé, contacter directement l'ARS pour connaître le calendrier prévu. Les premières analyses ont eu lieu en priorité dans les zones identifiées comme à risque.",
            effort: "10 minutes, gratuit",
          },
          {
            label: "Faire une analyse privée si zone à risque sans données publiques",
            description:
              "Pour 200 à 400 €, plusieurs laboratoires COFRAC (Eurofins, Carso, etc.) réalisent une analyse PFAS sur prélèvement à domicile. À envisager si vous habitez près d'un site industriel ou militaire suspect et que les données publiques tardent. Le résultat est opposable et permet d'engager une démarche auprès du distributeur si dépassement.",
            effort: "200-400 €, 2 à 4 semaines",
          },
          {
            label: "Mesure transitoire : eau en bouteille pour la consommation directe",
            description:
              "En cas de dépassement avéré et en attendant la solution durable, utiliser une eau en bouteille pour la consommation directe (boisson, biberons, cuisson finale). Coût ~30 cts à 1 €/L, soit 100-300 € par an pour une famille. Pas de risque PFAS résiduel, traçabilité réglementaire de l'eau en bouteille.",
            effort: "Achat ponctuel ou régulier",
          },
        ]}
        structural={[
          {
            label: "Installer un osmoseur sous évier en zone de contamination chronique",
            description:
              "L'osmose inverse réduit 80 à 95 % de la majorité des PFAS selon les molécules et les conditions. C'est la solution domestique la mieux documentée actuellement. Compter 400-1500 € posé. Voir notre page filtres pour le détail des arbitrages. À privilégier sur les filtres au charbon actif standard, dont l'efficacité PFAS est variable.",
            effort: "Investissement 400-1500 €",
          },
          {
            label: "Préférer charbon actif certifié NSF/ANSI 53 ou 58 si choix charbon",
            description:
              "Si vous optez pour un filtre au charbon actif (sous évier ou en cartouche dédiée), exiger une certification NSF/ANSI 53 (réduction PFOA/PFOS) ou NSF/ANSI 58 (osmose inverse + PFAS). Les filtres sans certification spécifique PFAS ont une efficacité non documentée et variable. Le surcoût certifié reste modeste (10-30 % d'écart).",
            effort: "Choix d'achat ciblé",
          },
          {
            label: "Suivre l'évolution des dépassements et de la mise en conformité",
            description:
              "Une commune en dépassement PFAS a obligation de mettre son réseau en conformité (changement de ressource, traitement complémentaire en station, dilution). Le calendrier varie de 1 à 5 ans selon les solutions techniques disponibles. Suivre les communications de votre distributeur pour adapter la mesure transitoire (eau bouteille / filtre) à la durée réelle du problème.",
            effort: "Veille citoyenne",
          },
          {
            label: "Maintenir l'osmoseur même après mise en conformité, si parc industriel proche",
            description:
              "Une remise en conformité ne signifie pas l'éradication du risque, surtout si la source environnementale (nappe contaminée) reste active. Les concentrations peuvent remonter selon les variations saisonnières ou les épisodes de pompage. En zone historiquement contaminée, conserver l'osmoseur en mode pérenne reste prudent, avec analyse de contrôle annuelle.",
            effort: "Entretien continu",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les PFAS dans l'eau."
        errors={[
          {
            label: "\"Une carafe filtrante Brita filtre les PFAS\"",
            explanation:
              "L'ANSES a explicitement signalé l'absence d'efficacité documentée des carafes filtrantes classiques (Brita, Aarke, Philips...) contre les PFAS. La structure du charbon actif et des résines des cartouches grand public ne retient pas durablement ces molécules très solubles et très stables. Si vous habitez en zone PFAS documentée, la carafe est une fausse sécurité : passer à un osmoseur ou à de l'eau en bouteille pour la consommation directe.",
          },
          {
            label: "\"Les PFAS, c'est rare en France, je ne suis pas concerné\"",
            explanation:
              "0,1 % des réseaux en dépassement, c'est statistiquement rare mais cela représente plusieurs centaines de milliers d'habitants concernés. La distribution est très inégale : si vous habitez dans la vallée du Rhône au sud de Lyon, dans certaines communes du Gard, près d'un aéroport civil ou militaire, le risque est significatif. Vérifier individuellement la situation de votre commune plutôt que de se fier au taux national.",
          },
          {
            label: "\"Bouillir ou laisser reposer l'eau élimine les PFAS\"",
            explanation:
              "Faux, et même contre-productif. Les PFAS sont thermiquement stables : l'ébullition ne les dégrade pas. La concentration AUGMENTE même légèrement par évaporation d'une partie de l'eau. Le repos en carafe n'a aucun effet : les PFAS ne sont pas volatils dans les conditions domestiques. La seule réduction efficace passe par filtration adaptée (osmose inverse, charbon certifié) ou par changement de source (eau en bouteille).",
          },
          {
            label: "\"L'eau en bouteille est forcément exempte de PFAS\"",
            explanation:
              "Pas systématiquement. Les eaux minérales et de source en bouteille sont contrôlées sur les paramètres réglementaires, dont les PFAS depuis l'application de la directive UE. Mais la traçabilité dépend de la source et du conditionnement. Une étude de 60 Millions de Consommateurs en 2024 a détecté des traces de PFAS dans certaines eaux en bouteille (à des niveaux sous le seuil réglementaire mais non nuls). Privilégier les marques traçables et vérifier les analyses publiques quand disponibles.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les PFAS dans l'eau"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Filtre à eau du robinet : carafe, charbon actif, osmoseur",
            description:
              "Comparatif détaillé des solutions de filtration : seul l'osmoseur réduit significativement les PFAS, les carafes étant inefficaces selon l'ANSES.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet en France",
            description:
              "Comprendre le contrôle ARS, lire les analyses publiques et savoir où trouver les premières données PFAS de votre commune.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Plomb dans les canalisations",
            description:
              "Autre polluant qui peut nécessiter une filtration spécifique en complément ou en alternative à l'eau en bouteille.",
            href: "/eau-maison/plomb-canalisations/",
          },
        ]}
      />
    </>
  );
}

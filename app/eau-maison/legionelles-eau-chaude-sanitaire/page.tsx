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
  title: "Légionelles et eau chaude sanitaire : températures, douche, prévention",
  description:
    "Légionelles dans l'eau chaude sanitaire : risque sanitaire reconnu, températures réglementaires (55 °C minimum au point d'usage, 60 °C au stockage), prévention domestique, situations qui justifient une vigilance accrue. Information générale, conformément aux recommandations du Haut Conseil de la santé publique.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/legionelles-eau-chaude-sanitaire/",
  },
  openGraph: {
    title: "Légionelles et eau chaude sanitaire : températures, douche, prévention",
    description:
      "Températures réglementaires, prévention domestique, situations à risque : les bons réflexes pour limiter la légionellose à domicile.",
    url: "https://www.maisonbionat.fr/eau-maison/legionelles-eau-chaude-sanitaire/",
  },
};

export default function LegionellesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Légionelles et eau chaude sanitaire",
      href: "https://www.maisonbionat.fr/eau-maison/legionelles-eau-chaude-sanitaire/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Eau maison"
        parentHref="/eau-maison/"
        tag="Sujet santé : information générale, pas de diagnostic individuel"
        title="Légionelles et eau chaude sanitaire : températures, douche, prévention domestique."
        quickAnswer="Les légionelles (Legionella pneumophila notamment) sont des bactéries naturellement présentes en faible quantité dans les milieux aquatiques. Elles peuvent proliférer dans les réseaux d'eau chaude sanitaire mal gérés, principalement entre 25 et 45 °C. La contamination se fait par inhalation d'aérosols (douche, brumisateur), jamais par ingestion d'eau. La pathologie associée (légionellose) est une infection pulmonaire grave reconnue par Santé publique France. La prévention domestique repose sur trois règles documentées par le code de la santé publique et les recommandations du Haut Conseil de la santé publique : maintenir la température de production de l'eau chaude à au moins 55 °C au point d'usage et 60 °C minimum dans le ballon, purger les points d'eau peu utilisés, entretenir mitigeurs et pommeaux. Information générale, qui ne remplace ni un diagnostic médical, ni une analyse d'eau."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "55 °C", label: "température minimale au point d'usage le plus éloigné (arrêté du 30 nov. 2005)" },
          { value: "25–45 °C", label: "plage de prolifération des légionelles" },
          { value: "60 °C", label: "température minimale recommandée dans le ballon de stockage" },
          { value: "0", label: "transmission par ingestion : aucune, c'est l'inhalation qui est en cause" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Ce que dit la réglementation" },
          { id: "signes", label: "Situations à risque accru" },
          { id: "causes", label: "Pourquoi les températures comptent" },
          { id: "actions", label: "Mesures de prévention domestique" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Cadre réglementaire"
        title="Températures réglementaires de l'eau chaude sanitaire"
        description="L'arrêté du 30 novembre 2005 relatif aux risques sanitaires liés aux légionelles dans les installations de production d'eau chaude sanitaire fixe des règles précises. Elles s'appliquent à toutes les installations collectives ; elles servent aussi de référence pour les installations individuelles."
        variants={[
          {
            indicator: "Stockage",
            name: "Ballon d'eau chaude : 55 °C minimum, 60 °C recommandé",
            description:
              "L'arrêté impose une température permanente d'au moins 55 °C dans les ballons de plus de 400 L (installations collectives). En pratique, le Haut Conseil de la santé publique et l'ANSES recommandent 60 °C minimum dans tout ballon, y compris individuel, pour limiter la prolifération. À 60 °C, la grande majorité des légionelles est détruite en quelques heures.",
          },
          {
            indicator: "Point d'usage",
            name: "Douche, lavabo, évier : 50 à 55 °C minimum",
            description:
              "L'arrêté impose 50 °C minimum au point d'usage le plus éloigné dans les installations collectives. La pratique recommande au moins 55 °C en sortie de tuyau (avant mitigeur) pour les usages avec aérosols (douche). Si la canalisation est longue ou peu utilisée, la température au robinet peut chuter en dessous : c'est précisément la zone à risque.",
          },
          {
            indicator: "Confort/sécurité",
            name: "Mitigeur thermostatique au point d'usage",
            description:
              "Un mitigeur thermostatique au point d'usage permet de conserver une eau chaude à 55–60 °C dans la canalisation tout en délivrant 38–40 °C au pommeau de douche (sécurité anti-brûlure, notamment pour enfants et personnes âgées). Compromis recommandé : eau chaude haute température dans le réseau, mélange basse température à l'usage.",
          },
          {
            indicator: "Périodique",
            name: "Choc thermique en cas de doute",
            description:
              "Le choc thermique consiste à porter la température du ballon à 70 °C minimum pendant 30 minutes au moins, en faisant couler à pleine ouverture tous les points d'usage chaud, jusqu'à atteindre 60 °C en sortie. Pratiqué en cas de doute (longue absence, ballon resté froid, suspicion contamination). À effectuer avec précaution : risque de brûlure, eau très chaude.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Situations à risque"
        title="Quand être particulièrement vigilant chez soi."
        subtitle="La prolifération des légionelles est favorisée par des conditions précises : températures tièdes, eau stagnante, biofilm sur les surfaces, dépôts de calcaire. Voici les situations domestiques qui justifient une attention renforcée."
        signs={[
          {
            label: "Ballon d'eau chaude réglé à moins de 55 °C",
            description:
              "Un ballon réglé à 50 °C ou moins (parfois pour économiser l'énergie ou éviter les brûlures) entre directement dans la zone de prolifération des légionelles. Remonter à 60 °C minimum est la première mesure de prévention. La sécurité anti-brûlure se gère par mitigeur au point d'usage, pas en abaissant la température du ballon.",
            severity: "critique",
          },
          {
            label: "Logement inhabité plusieurs semaines",
            description:
              "Une résidence secondaire ou un logement inoccupé voit son eau chaude stagner dans le ballon et les canalisations. Au retour, les premières utilisations peuvent libérer un nombre important de bactéries. Recommandation : faire couler longuement l'eau chaude à tous les points d'usage avant la première douche, idéalement précédée d'un choc thermique du ballon.",
            severity: "modéré",
          },
          {
            label: "Pommeau de douche ou robinet entartré",
            description:
              "Le tartre forme une surface poreuse qui héberge un biofilm bactérien, abri aux légionelles. Un pommeau visiblement entartré est un facteur de risque. Détartrage régulier (vinaigre blanc, immersion 1 à 2 heures), changement du pommeau tous les 2 à 3 ans pour les usages intensifs.",
            severity: "modéré",
          },
          {
            label: "Personne immunodéprimée, âgée, atteinte d'une maladie chronique",
            description:
              "La légionellose touche en priorité les personnes immunodéprimées, les plus de 50 ans (surtout au-delà de 65 ans), les fumeurs, les personnes atteintes de pathologies respiratoires chroniques (sources : Santé publique France). Pour ces personnes, le respect strict des températures et l'évitement des longues stagnations sont des mesures protectrices documentées.",
            severity: "critique",
          },
          {
            label: "Canalisations longues vers un point d'usage éloigné",
            description:
              "Un robinet d'usage rare, en bout de réseau, voit l'eau y stagner tiède pendant des jours. C'est un site classique de développement. Mesure : ouvrir hebdomadairement le point d'eau pendant 2 à 3 minutes en eau chaude, ou supprimer le point d'eau s'il n'est plus utilisé.",
            severity: "modéré",
          },
          {
            label: "Bras mort sur le réseau (ancien raccord abandonné)",
            description:
              "Une portion de canalisation déconnectée mais non démontée (ancien raccord lave-vaisselle, ancien chauffe-eau électrique remplacé) crée un cul-de-sac où l'eau stagne en permanence. Réservoir potentiel de contamination du réseau principal. Suppression physique recommandée en cas de rénovation.",
            severity: "modéré",
          },
        ]}
        footerNote="Cette page donne des repères généraux. En cas de symptômes respiratoires (fièvre, toux, essoufflement) survenant dans les 2 à 10 jours après une exposition possible (douche, jacuzzi, voyage), consultez un médecin sans attendre et signalez l'exposition possible. Le diagnostic de légionellose se fait par test médical, jamais à distance."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ça compte"
        title="Pourquoi la température du ballon n'est pas une affaire de confort."
        subtitle="Le réglage de l'eau chaude est souvent perçu comme un sujet d'économie ou de confort, alors qu'il joue un rôle direct dans la prévention d'une infection grave. Les données scientifiques sont robustes et anciennes."
        causes={[
          {
            number: "01",
            cause: "Les légionelles prolifèrent entre 25 et 45 °C",
            explanation:
              "À 25–45 °C avec présence d'eau et de biofilm, les populations de Legionella peuvent doubler en quelques heures. Au-delà de 50 °C, la croissance ralentit. À partir de 55 °C, la mortalité bactérienne dépasse la croissance. À 60 °C, élimination de 90 % des bactéries en environ 30 minutes (sources : INSPQ, OMS).",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "L'inhalation, pas l'ingestion, transmet l'infection",
            explanation:
              "La légionellose se contracte par inhalation d'aérosols (fines gouttelettes contenant les bactéries). Sources principales à domicile : douche, jacuzzi, brumisateur, humidificateur. L'eau ingérée n'est pas une source de contamination, même contaminée. Cette donnée explique pourquoi la douche est le point d'usage critique, beaucoup plus que l'évier ou le robinet de cuisine.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le biofilm protège les bactéries des températures défavorables",
            explanation:
              "Les surfaces internes des canalisations, des ballons, et surtout des pommeaux de douche entartrés, abritent un biofilm qui protège partiellement les bactéries. C'est pourquoi un seul choc thermique ne suffit pas si l'entartrage est massif : le détartrage mécanique et chimique des pommeaux est complémentaire.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les groupes à risque sont identifiés",
            explanation:
              "Santé publique France documente que la légionellose touche disproportionnellement les hommes (75 % des cas), les personnes de plus de 50 ans (90 % des cas), les fumeurs, les personnes immunodéprimées ou atteintes de pathologies chroniques respiratoires. Pour ces populations, le respect des températures et la maintenance des installations sont des mesures protectrices à part entière.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Les économies d'énergie ne doivent pas se faire au détriment du sanitaire",
            explanation:
              "Un ballon réglé à 50 °C pour économiser quelques pour cent d'énergie place l'installation dans la zone optimale de prolifération bactérienne. Le bon arbitrage : ballon à 60 °C, isolation thermique soignée du ballon et des canalisations, mitigeurs au point d'usage pour confort. L'économie réelle d'énergie se gagne sur l'isolation, pas sur la baisse de température.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Mesures de prévention domestique simples et efficaces."
        immediateLabel="Mesures à mettre en place dès aujourd'hui"
        structuralLabel="Entretien et maintenance dans la durée"
        immediate={[
          {
            label: "Vérifier et régler la température du ballon à 60 °C minimum",
            description:
              "Sur la plupart des ballons électriques, un thermostat accessible (sous capot, parfois sur le côté) permet le réglage. Position « E » ou « Eco » correspond souvent à 55 °C, à augmenter d'un cran ou deux pour atteindre 60 °C. Sur ballon thermodynamique ou pompe à chaleur double service, consultez la notice : un cycle anti-légionelles automatique est souvent paramétrable.",
            effort: "10 minutes",
          },
          {
            label: "Installer ou vérifier les mitigeurs thermostatiques au point d'usage",
            description:
              "Pour les douches et lavabos, un mitigeur thermostatique (50 à 150 € + pose) délivre une eau à température réglée (typiquement 38 °C) tout en conservant l'eau chaude haute température dans le réseau. Mesure de sécurité anti-brûlure pour enfants et personnes âgées, compatible avec ballon à 60 °C.",
            effort: "Installation 1 à 3 heures",
          },
          {
            label: "Purger les points d'eau peu utilisés",
            description:
              "Une fois par semaine, faire couler eau chaude et eau froide pendant 2 à 3 minutes à tous les points d'eau peu utilisés (douche d'amis, lavabo d'invités, robinet de buanderie). Évite la stagnation et le développement bactérien. Au retour de vacances, purge complète du réseau avant la première douche.",
            effort: "5 minutes par semaine",
          },
          {
            label: "Choc thermique après longue absence",
            description:
              "Au retour d'une absence prolongée (plus de 2 semaines), pratiquer un choc thermique : porter le ballon à 70 °C minimum pendant 30 minutes, puis ouvrir à pleine ouverture tous les points d'usage chaud jusqu'à atteindre 60 °C en sortie (généralement 5 à 10 minutes par point). Attention aux brûlures : eau très chaude, ne pas laisser des enfants ou personnes vulnérables près des robinets pendant l'opération.",
            effort: "1 heure incluant prudence",
          },
        ]}
        structural={[
          {
            label: "Détartrer et changer les pommeaux de douche périodiquement",
            description:
              "Détartrage des pommeaux et mousseurs : immersion dans du vinaigre blanc 1 à 2 heures, rinçage abondant, tous les 3 à 6 mois selon la dureté de l'eau. Changement complet du pommeau tous les 2 à 3 ans, ou plus tôt si visiblement entartré et que le détartrage ne suffit plus. Privilégier les pommeaux à débit régulier et fonds plats faciles à entretenir.",
            effort: "30 minutes périodique",
          },
          {
            label: "Faire entretenir le ballon par un professionnel",
            description:
              "Détartrage et vidange du ballon tous les 2 à 3 ans en eau dure, tous les 4 à 5 ans en eau douce, par un plombier. Inspection de l'anode sacrificielle (remplacement si très consommée), vérification du groupe de sécurité, dépose des dépôts au fond. Entretien qui prolonge la durée de vie et limite le biofilm.",
            effort: "150 à 300 € tous les 2-5 ans",
          },
          {
            label: "Supprimer les bras morts du réseau",
            description:
              "Lors d'une rénovation salle de bain ou cuisine, profiter de l'occasion pour supprimer toute portion de canalisation abandonnée (ancien raccord lave-vaisselle déplacé, ancien chauffe-eau remplacé). Ces bras morts hébergent une eau stagnante en permanence et peuvent contaminer le réseau principal.",
            effort: "Intégré aux travaux",
          },
          {
            label: "Vérifier l'isolation et le calorifugeage des canalisations",
            description:
              "Une canalisation d'eau chaude qui traverse une cave fraîche perd plusieurs degrés et peut entrer dans la zone à risque. Calorifugeage des canalisations sur les trajets longs et zones froides : isolant tubulaire mousse PE ou laine de roche, 5 à 15 € le mètre, à poser en 1 à 2 heures. Améliore aussi le confort et économise l'énergie réelle.",
            effort: "100 à 400 € selon linéaire",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs et idées reçues à éviter."
        errors={[
          {
            label: "Baisser le ballon à 50 °C pour économiser",
            explanation:
              "Économie d'énergie marginale (quelques pour cent), mais entrée dans la zone optimale de prolifération bactérienne. Le bon arbitrage est inverse : maintenir 60 °C dans le ballon, isoler les canalisations, mettre des mitigeurs au point d'usage. L'économie réelle se fait sur l'isolation, pas sur la baisse de température.",
          },
          {
            label: "Considérer le risque comme limité aux installations collectives",
            explanation:
              "Les cas documentés concernent majoritairement les installations collectives (hôpitaux, hôtels, immeubles, tours aéroréfrigérantes), mais des cas domestiques existent (Santé publique France). Une maison individuelle avec ballon mal géré et pommeau entartré peut concentrer un risque, en particulier si une personne vulnérable y vit ou y séjourne.",
          },
          {
            label: "Croire que le test ANSES filtre suffit",
            explanation:
              "Les filtres à charbon actif domestiques sur l'eau du robinet ne sont pas conçus pour les légionelles, qui se développent dans le réseau d'eau chaude après le compteur. Le filtre ne protège pas. La prévention passe par la température et la maintenance, pas par la filtration en aval.",
          },
          {
            label: "Confondre légionellose et grippe banale",
            explanation:
              "Les symptômes de la légionellose (fièvre élevée, toux sèche puis productive, douleurs musculaires, parfois troubles digestifs) peuvent être confondus avec une grippe ou une pneumonie virale. Le diagnostic se fait par un test médical spécifique (antigène urinaire). Devant des symptômes respiratoires sévères, surtout après exposition possible (voyage, jacuzzi, douche après absence prolongée), consulter sans attendre et signaler le contexte au médecin.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur les légionelles à domicile"
        items={[
          {
            question: "Faut-il faire analyser son eau pour les légionelles ?",
            answer:
              "Pas systématiquement dans un logement individuel. Une analyse en laboratoire spécialisé (80 à 200 € selon protocole) peut être pertinente après un événement (cas familial, longue inoccupation d'une résidence secondaire, suspicion sur un ballon ancien). Pour les établissements recevant du public (gîtes, locations meublées de tourisme), la réglementation impose des analyses périodiques.",
          },
          {
            question: "Le chauffe-eau thermodynamique pose-t-il plus de risques ?",
            answer:
              "Pas intrinsèquement, mais sa température de stockage est souvent réglée plus bas (50–55 °C) pour optimiser le rendement énergétique, ce qui peut entrer dans la zone de risque. Les modèles récents incluent un cycle anti-légionelles automatique (montée hebdomadaire à 60–65 °C). Vérifiez que cette fonction est activée sur votre appareil. Si elle n'existe pas, programmer un choc thermique mensuel manuel.",
          },
          {
            question: "Quelle est la durée de prolifération nécessaire pour devenir dangereux ?",
            answer:
              "Variable selon les conditions. Quelques jours à 25–45 °C avec biofilm peuvent suffire à passer de quelques bactéries à une population significative. C'est pourquoi les longues stagnations (absence de plusieurs semaines) sont particulièrement préoccupantes, alors que l'usage quotidien normal renouvelle l'eau du ballon et empêche les concentrations critiques.",
          },
          {
            question: "Un adoucisseur d'eau influence-t-il le risque légionelles ?",
            answer:
              "L'adoucisseur réduit le calcaire dans l'eau, donc l'entartrage des canalisations et des pommeaux, ce qui peut limiter le biofilm. À l'inverse, un adoucisseur mal entretenu (résines anciennes, sel jamais renouvelé) peut lui-même devenir un site de contamination. La maintenance régulière de l'adoucisseur est essentielle. Sujet à approfondir dans la page dédiée.",
          },
          {
            question: "Les symptômes apparaissent combien de temps après l'exposition ?",
            answer:
              "Selon Santé publique France, la période d'incubation de la légionellose est de 2 à 10 jours (le plus souvent 5 à 6 jours). Une forme bénigne (fièvre de Pontiac) peut apparaître en 24 à 48 heures avec rémission spontanée. Devant des symptômes respiratoires fébriles dans cette fenêtre temporelle après une exposition possible (douche après absence, jacuzzi, voyage), consultation médicale rapide et signalement du contexte d'exposition.",
          },
          {
            question: "Mon plombier dit qu'il ne faut pas dépasser 55 °C, qui croire ?",
            answer:
              "L'arrêté du 30 novembre 2005 impose 55 °C minimum dans les ballons de plus de 400 L (collectif). Les recommandations de prévention sanitaire (HCSP, ANSES) vont au-delà : 60 °C minimum recommandé en stockage individuel. Un plombier peut conseiller 55 °C pour limiter l'entartrage, mais ce conseil doit être pondéré par la prévention légionelles. Compromis fréquent : 60 °C avec mitigeurs thermostatiques au point d'usage et détartrage périodique.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Le silo eau maison",
            description:
              "Qualité de l'eau du robinet, plomb, nitrates, PFAS, filtres : la vue d'ensemble des sujets eau du logement.",
            href: "/eau-maison/",
          },
          {
            tag: "Eau maison",
            title: "Adoucisseur d'eau et santé",
            description:
              "Sodium, déminéralisation, entretien : ce qu'apporte vraiment un adoucisseur et ses limites sanitaires.",
            href: "/eau-maison/adoucisseur-eau-sante/",
          },
          {
            tag: "Eau maison",
            title: "Eau calcaire à la maison",
            description:
              "Effets du calcaire sur les installations et le confort : sujet voisin sans risque sanitaire direct comparable.",
            href: "/eau-maison/eau-calcaire-maison/",
          },
        ]}
      />
    </>
  );
}

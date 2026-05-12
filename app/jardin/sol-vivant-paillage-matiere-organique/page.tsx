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
  title: "Sol vivant au jardin : paillage, matière organique, sol couvert",
  description:
    "Pourquoi un sol vivant change tout au jardin : paillage 5 à 10 cm, apports de matière organique, fin du bêchage systématique. Effets concrets sur l'arrosage, le désherbage et la fertilité, méthodes pour démarrer.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/sol-vivant-paillage-matiere-organique/",
  },
  openGraph: {
    title: "Sol vivant au jardin : paillage, matière organique, sol couvert",
    description:
      "Paillage 5 à 10 cm, matière organique en surface, fin du bêchage : la base du jardin sain qui réduit arrosage et désherbage.",
    url: "https://www.maisonbionat.fr/jardin/sol-vivant-paillage-matiere-organique/",
  },
};

export default function SolVivantPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Sol vivant au jardin : paillage, matière organique, sol couvert",
      href: "https://www.maisonbionat.fr/jardin/sol-vivant-paillage-matiere-organique/",
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
        tag="La base du jardin sain"
        title="Un sol vivant : la base qui change tout au jardin."
        quickAnswer="Un sol biologiquement actif retient mieux l'eau, stocke du carbone, structure le terrain et produit des plantes plus résistantes. Trois pratiques le construisent : couvrir le sol nu avec un paillage organique de 5 à 10 cm (feuilles, BRF, paille, tontes séchées), apporter la matière organique en surface plutôt que l'enfouir, limiter le travail du sol au strict nécessaire. Les effets se cumulent sur 2 à 3 saisons : moins d'arrosage, moins de désherbage, sol qui s'assouplit, fertilité qui s'auto-entretient. Le sol vivant est aussi le levier qui rend toutes les autres pratiques de jardin sain plus faciles."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "5–10 cm", label: "épaisseur de paillage organique recommandée (ADEME)" },
          { value: "1 g", label: "de sol vivant contient jusqu'à 1 milliard de micro-organismes (INRAE)" },
          { value: "−30 à −50 %", label: "d'arrosage estival possible sur sol paillé et structuré" },
          { value: "2–3 ans", label: "pour voir les effets cumulés se stabiliser" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Ce qu'est un sol vivant" },
          { id: "signes", label: "Comment évaluer son sol" },
          { id: "causes", label: "Pourquoi ça marche" },
          { id: "actions", label: "Mettre en place le sol vivant" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Définition"
        title="Sol vivant : trois piliers, pas une recette unique"
        description="Le terme « sol vivant » désigne une approche fondée sur le respect des organismes du sol (vers de terre, mycorhizes, bactéries, champignons) plutôt que sur l'apport systématique d'intrants. Trois pratiques structurent cette approche."
        variants={[
          {
            indicator: "Couvert",
            name: "Un sol qui n'est jamais nu",
            description:
              "Paillage organique (BRF, paille, feuilles mortes, tontes séchées) ou couvert végétal vivant (engrais verts, plantes couvrantes). L'objectif : protéger le sol du dessèchement, des pluies battantes et de l'érosion, tout en nourrissant la vie du sol par décomposition lente.",
          },
          {
            indicator: "Nourri",
            name: "Apports de matière organique en surface",
            description:
              "Compost mûr, BRF, fumier composté : déposés en surface ou superficiellement incorporés, jamais enfouis profondément. La vie du sol incorpore naturellement la matière en quelques mois. Apport indicatif : 2 à 5 kg de compost mûr par m² et par an pour un potager.",
          },
          {
            indicator: "Peu travaillé",
            name: "Travail du sol limité au minimum nécessaire",
            description:
              "Pas de bêchage profond systématique. Décompactage à la grelinette sur les zones tassées, semis directs ou plantations dans un sol simplement aéré. Le travail mécanique profond détruit la structure construite par les vers de terre et perturbe la stratification des micro-organismes.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Évaluer"
        title="Comment savoir où en est votre sol."
        subtitle="Quelques observations simples donnent une idée rapide de la vitalité d'un sol. Pas besoin d'analyse de laboratoire pour démarrer : l'œil et la bêche suffisent à la première étape."
        signs={[
          {
            label: "Beaucoup de vers de terre dans une pelletée",
            description:
              "Un sol vivant en bonne santé contient typiquement 10 à 20 vers de terre dans 25 cm de pelletée par temps doux et humide. Présence : bon indicateur de structure et de matière organique. Absence : sol probablement compacté, pauvre ou récemment traité.",
            severity: "léger",
          },
          {
            label: "Sol qui s'effrite facilement entre les doigts",
            description:
              "Une bonne structure se reconnaît à l'effritement en agrégats arrondis (le « grumeau »). Si le sol forme des mottes compactes qui résistent ou de la poussière fine, la vie du sol est déficiente.",
            severity: "léger",
          },
          {
            label: "Croûte de battance après une pluie",
            description:
              "Une fine croûte dure se forme à la surface après une pluie sur sol nu : signe que le sol n'est pas protégé et que la structure s'effondre sous l'impact des gouttes. Le paillage règle ce point dès la saison suivante.",
            severity: "modéré",
          },
          {
            label: "Flaques d'eau qui stagnent longtemps",
            description:
              "Un sol vivant absorbe l'eau rapidement (infiltration de 10 à 50 mm par heure). Stagnation prolongée : compactage, manque de matière organique, structure abîmée. Indicateur fort d'un besoin de décompactage et d'apport organique.",
            severity: "modéré",
          },
          {
            label: "Plantes qui flétrissent dès qu'il fait sec",
            description:
              "Un sol vivant retient l'eau dans sa matière organique et ses agrégats. Flétrissement rapide : faible réserve hydrique, sol pauvre en matière organique, peu structuré. Le paillage et les apports de compost améliorent la situation en une à deux saisons.",
            severity: "modéré",
          },
          {
            label: "Odeur de sous-bois quand on creuse",
            description:
              "Une bonne vie microbienne dégage une odeur fraîche, terreuse, légèrement sucrée. Odeur acide, ammoniaquée ou de moisi : déséquilibre. Absence d'odeur : faible activité biologique.",
            severity: "léger",
          },
        ]}
        footerNote="Ces observations ne remplacent pas une analyse de laboratoire si vous suspectez une pollution (zone urbaine, ancien site industriel). Mais pour démarrer une démarche de sol vivant, l'observation directe suffit."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ça marche"
        title="Pourquoi un sol vivant rend tout plus facile."
        subtitle="Les pratiques de sol vivant ne sont pas idéologiques : elles s'appuient sur le fonctionnement biologique réel du sol, désormais bien documenté par l'INRAE et l'agronomie de conservation."
        causes={[
          {
            number: "01",
            cause: "Le paillage divise l'évaporation",
            explanation:
              "Un sol nu perd l'humidité de ses 10 premiers centimètres en quelques jours par évaporation directe. Un paillage de 5 à 10 cm coupe cette évaporation, l'eau remonte plus lentement, l'arrosage devient moins fréquent. Effet mesuré : 30 à 50 % d'eau économisée en été selon le climat.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les vers de terre construisent la structure",
            explanation:
              "Les vers de terre (lombrics anéciques surtout) creusent des galeries verticales qui aèrent le sol et permettent à l'eau et aux racines de descendre profondément. Une population établie remplace efficacement le bêchage. Conditions : sol couvert, matière organique disponible, pas de pesticide, pas de tassement par engins lourds.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les mycorhizes étendent le système racinaire",
            explanation:
              "Les champignons mycorhiziens forment des symbioses avec 80 % des plantes : leurs filaments (hyphes) prospectent le sol bien plus loin que les racines, captent eau et nutriments (phosphore notamment) et les apportent à la plante en échange de sucres. Détruits par le bêchage profond et les fongicides, ils se reconstituent en quelques années sur sol vivant.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La matière organique stocke l'eau et les nutriments",
            explanation:
              "Chaque pour cent de matière organique supplémentaire dans un sol augmente sa capacité de rétention d'eau d'environ 15 à 25 L par m² sur 30 cm de profondeur (chiffres INRAE). Un sol passant de 1,5 % à 3 % de matière organique double presque sa réserve utile.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Un sol couvert empêche la levée des adventices",
            explanation:
              "Sans lumière, la majorité des graines d'adventices ne germe pas. Un paillage opaque épais (BRF, paille, carton sous paillage) réduit le désherbage de 60 à 80 % selon les essais ADEME et chambres d'agriculture. L'effet se renforce avec le temps : le stock de graines en surface s'épuise.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Comment mettre en place un sol vivant chez soi."
        immediateLabel="Premières actions, dès la prochaine saison"
        structuralLabel="Logique de fond, sur 2 à 3 ans"
        immediate={[
          {
            label: "Pailler tous les sols nus visibles",
            description:
              "Au printemps après le réchauffement du sol (avril–mai selon la région), couvrir tous les sols nus du jardin avec 5 à 10 cm de paillage organique : tontes séchées au soleil 24 h, paille de blé ou d'orge non traitée, feuilles mortes broyées à la tondeuse, BRF (bois raméal fragmenté). Renouveler en automne.",
            effort: "Souvent gratuit (déchets verts)",
          },
          {
            label: "Apporter du compost mûr en surface",
            description:
              "Sur le potager au printemps et à l'automne : 2 à 5 kg de compost mûr par m², simplement déposé en surface ou très légèrement griffé. Les vers et la pluie incorporent la matière. Pour les massifs ornementaux : 1 à 2 kg/m² une fois par an suffit.",
            effort: "Gratuit si compost maison",
          },
          {
            label: "Remplacer le bêchage par une grelinette",
            description:
              "Une grelinette (40 à 120 €) décompacte le sol sans le retourner. Plantée verticalement, basculée pour soulever : l'air pénètre, les racines peuvent descendre, la stratification est préservée. Sur un potager déjà installé, une fois par an au printemps suffit. À terme, même la grelinette devient inutile sur sol bien vivant.",
            effort: "40 à 120 € (durable 20 ans)",
          },
          {
            label: "Semer des engrais verts entre cultures",
            description:
              "Vesce, phacélie, moutarde, trèfle incarnat : semés après une récolte, ils couvrent le sol, fixent l'azote, structurent par leurs racines. Coupés au stade floraison et laissés en mulch ou compostés : matière organique gratuite pour la culture suivante.",
            effort: "5 à 10 € de graines pour 50 m²",
          },
        ]}
        structural={[
          {
            label: "Arrêter durablement le bêchage profond",
            description:
              "La transition n'est pas brutale : si vous bêchiez chaque année, la première saison sans bêchage peut sembler étrange. Au bout de 2 à 3 saisons, la structure construite par les vers et les racines mortes rend le bêchage clairement inutile. Exception : sols extrêmement compactés ou récemment décaissés, un décompactage initial à la grelinette peut être nécessaire.",
            effort: "Décision durable",
          },
          {
            label: "Constituer un compost domestique",
            description:
              "Un composteur (50 à 200 € ou autoconstruction) reçoit épluchures, marc, tontes, feuilles, taille de haie broyée. Mélange équilibré matières vertes (azote) / brunes (carbone). Compost mûr en 6 à 12 mois selon entretien. Devient la source principale de matière organique pour le jardin.",
            effort: "Investissement de départ 50 à 200 €",
          },
          {
            label: "Diversifier les plantations et les rotations",
            description:
              "Au potager : rotations des familles de légumes sur 3 à 4 ans pour éviter l'épuisement spécifique et les maladies. En massif : mélange de vivaces, annuelles, plantes mellifères. La diversité racinaire (profondeur, type) construit un sol mieux structuré et plus vivant.",
            effort: "Planification, pas de coût direct",
          },
          {
            label: "Limiter le tassement par les passages",
            description:
              "Définir des planches de culture fixes (1 à 1,20 m de large) et des allées de passage : on ne marche jamais sur les planches. Un sol tassé par les pieds (compaction superficielle) reste structuré plusieurs années à se réparer. Mesure très efficace au potager.",
            effort: "Planification, pas de coût direct",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs courantes en démarrant le sol vivant."
        errors={[
          {
            label: "Enfouir le compost ou le fumier en profondeur",
            explanation:
              "Sur sol vivant, la matière organique est déposée en surface. L'enfouissement profond met la matière en conditions anaérobies (peu d'oxygène), ralentit la décomposition et détruit la stratification verticale du sol. Tous les apports vont en surface ou en surface très superficielle.",
          },
          {
            label: "Pailler trop tôt au printemps sur sol froid",
            explanation:
              "Un paillage épais sur sol encore froid (avril dans le nord, mars dans le sud) maintient le sol à basse température et retarde le démarrage des cultures. Attendre que le sol soit ressuyé et tiède (10 à 12 °C à 10 cm) avant de pailler les zones cultivées. Sur le reste du jardin, le paillage hivernal reste utile.",
          },
          {
            label: "Utiliser des tontes fraîches en couche épaisse",
            explanation:
              "Une couche épaisse de tontes fraîches fermente, chauffe, devient pâteuse et anaérobie : odeur d'ammoniaque, attire les rongeurs. Sécher les tontes 24 à 48 h au soleil avant utilisation, ou les utiliser en fine couche (2 à 3 cm) renouvelée. Mélangées à des matières brunes (feuilles), le problème disparaît.",
          },
          {
            label: "Croire qu'un sol vivant n'a besoin de rien",
            explanation:
              "Un sol vivant n'est pas un sol auto-suffisant indéfiniment. Les cultures exportent des nutriments : sans apports réguliers de matière organique (compost, BRF, tontes), la fertilité baisse en 3 à 5 ans, surtout au potager. La règle reste : tout ce qui sort doit être remplacé sous une forme ou une autre.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le sol vivant"
        items={[
          {
            question: "Combien de temps pour qu'un sol pauvre devienne vivant ?",
            answer:
              "Les premiers effets visibles (moins d'arrosage, sol qui s'assouplit) apparaissent dès la deuxième saison avec paillage et apports de compost réguliers. La transformation structurelle profonde (populations de vers établies, mycorhizes, agrégats stables) prend 3 à 5 ans. Un sol très dégradé (compacté, sans matière organique) peut nécessiter 5 à 7 ans pour retrouver une bonne vitalité.",
          },
          {
            question: "Quel paillage choisir pour quel usage ?",
            answer:
              "Potager : paille, tontes séchées, feuilles mortes (décomposition rapide, nourrit le sol). Massifs vivaces et arbustes : BRF, écorces, feuilles (durée 1 à 3 ans). Fruitiers : BRF ou copeaux de bois raméal (favorise les mycorhizes). Arbres ornementaux : copeaux, feuilles. À éviter en couverture épaisse : tontes fraîches, écorces de résineux acidifiantes sur sol cultivé.",
          },
          {
            question: "Faut-il une analyse de sol avant de commencer ?",
            answer:
              "Non pour démarrer une démarche de sol vivant : paillage, compost et grelinette sont bénéfiques sur tous les sols sans diagnostic préalable. Une analyse devient utile dans deux cas : si vous suspectez une pollution (sol urbain, ancien site industriel — recherche de métaux lourds), ou si après 2 à 3 ans vos cultures restent décevantes (analyse agronomique, 50 à 100 €, mesure pH, matière organique, NPK).",
          },
          {
            question: "Le BRF, est-ce vraiment efficace au jardin ?",
            answer:
              "Oui sur le long terme. Le BRF (Bois Raméal Fragmenté, broyat de branches de moins de 7 cm de diamètre) nourrit en priorité les champignons du sol, qui transforment les nutriments en formes assimilables. La première année peut montrer une « faim d'azote » apparente : le bois prélève temporairement de l'azote pour se dégrader. Effet positif visible à partir de la deuxième année. À réserver aux massifs et fruitiers, moins adapté au potager seul.",
          },
          {
            question: "Engrais verts ou paillage, lequel privilégier ?",
            answer:
              "Les deux sont complémentaires. Engrais verts : entre deux cultures, surtout l'hiver, pour structurer en profondeur et apporter de l'azote (légumineuses). Paillage : pendant la culture et hors saison, pour protéger la surface et empêcher les adventices. Une combinaison classique : engrais vert en interculture, paillage pendant la culture.",
          },
          {
            question: "Mon sol est argileux et compact, par où commencer ?",
            answer:
              "Décompacter à la grelinette ou à la fourche-bêche par temps ressuyé (ni trop sec ni détrempé), puis apport généreux de compost mûr (5 kg/m²) en surface, paillage immédiat. Semis d'engrais verts à racines pivotantes (radis fourrager, moutarde, féverole) qui perforent la structure argileuse. Patience requise : 2 à 3 ans pour un changement significatif. À éviter absolument : marcher sur un sol argileux humide.",
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
            title: "Composter ses biodéchets au jardin",
            description:
              "Composteur, méthode, équilibre matières vertes/brunes : le complément direct du sol vivant.",
            href: "/jardin/compostage-biodechets-jardin/",
          },
          {
            tag: "Jardin",
            title: "Pesticides : alternatives concrètes depuis la loi Labbé",
            description:
              "Désherbage et traitements : ce qui remplace réellement les produits interdits depuis 2022.",
            href: "/jardin/pesticides-jardin-alternatives/",
          },
        ]}
      />
    </>
  );
}

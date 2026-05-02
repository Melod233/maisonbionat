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
  title: "Plomb dans les canalisations : reconnaître, mesurer et remplacer",
  description:
    "7,5 millions de logements pré-1949 potentiellement concernés. Identifier les canalisations en plomb, mesurer l'eau au robinet, comprendre les obligations et coûts.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/plomb-canalisations/",
  },
  openGraph: {
    title: "Plomb dans les canalisations : reconnaître, mesurer et remplacer",
    description:
      "7,5 millions de logements pré-1949 potentiellement concernés. Identifier les canalisations en plomb, mesurer l'eau au robinet, comprendre les obligations et coûts.",
    url: "https://www.maisonbionat.fr/eau-maison/plomb-canalisations/",
  },
};

const faqItems = [
  {
    question: "Comment savoir si mes canalisations sont en plomb ?",
    answer:
      "Trois indices à vérifier. 1) Année de construction du logement : le plomb a été couramment utilisé jusqu'en 1949, plus ponctuellement jusque dans les années 1960. Au-delà de 1970, c'est rare. 2) Inspection visuelle : un tuyau en plomb est gris mat, mou (raye facilement à l'ongle ou au tournevis), avec des soudures arrondies. À distinguer du fer galvanisé (gris clair, dur, soudures angulaires) et du cuivre (rouge-brun). 3) Test de magnétisme : le plomb n'est pas magnétique, contrairement au fer galvanisé. En cas de doute persistant, une analyse d'eau au robinet en laboratoire COFRAC tranche définitivement (40-80 €).",
  },
  {
    question: "Quelles sont les obligations légales en 2026 ?",
    answer:
      "Le décret du 22 décembre 2001 a fixé la limite de plomb dans l'eau potable à 10 µg/L au robinet, applicable depuis le 25 décembre 2013. Les distributeurs d'eau (régies, Veolia, Suez, etc.) ont remplacé l'essentiel des branchements publics en plomb. Mais les canalisations privatives (à l'intérieur du logement, après le compteur) restent à la charge exclusive du propriétaire. Aucune obligation absolue de remplacement préventif n'existe, mais en cas de dépassement de 10 µg/L confirmé par analyse, le propriétaire doit engager les travaux. En vente immobilière, le diagnostic CREP (Constat de Risque d'Exposition au Plomb) concerne les peintures, pas les canalisations.",
  },
  {
    question: "Combien coûte le remplacement des canalisations en plomb ?",
    answer:
      "Très variable selon la configuration. Pour un appartement, remplacer la colonne montante et la nourrice intérieure coûte 1 000 à 3 000 €. Pour une maison individuelle, le remplacement complet (du compteur jusqu'aux points d'eau) varie de 2 000 à 8 000 € selon le linéaire, l'accessibilité et le matériau choisi (cuivre, PER, multicouche). Les travaux peuvent s'inscrire dans une rénovation plus large (réfection plomberie, salle de bain, cuisine) où le surcoût marginal est limité. Aucune aide spécifique n'existe au niveau national, mais certaines collectivités proposent des dispositifs locaux de soutien.",
  },
  {
    question: "Couler l'eau quelques minutes avant de la boire suffit-il ?",
    answer:
      "C'est une mesure transitoire, pas une solution. Faire couler l'eau froide 30 secondes à 2 minutes avant la consommation (et notamment après une nuit ou un week-end où l'eau a stagné dans les canalisations) réduit effectivement la concentration en plomb dans le verre, parfois de 50 à 80 %. Mais cela ne supprime pas l'exposition de fond et représente un gaspillage d'eau notable (1 à 2 m³ supplémentaires par personne et par an). En attendant des travaux, c'est un geste minimal utile, surtout pour préparer un biberon ou cuisiner. La solution durable reste le remplacement des canalisations.",
  },
];

export default function PlombCanalisationsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Plomb dans les canalisations",
      href: "https://www.maisonbionat.fr/eau-maison/plomb-canalisations/",
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
        tag="Eau et logement ancien"
        title="Plomb dans les canalisations : reconnaître, mesurer, agir dans un logement ancien"
        quickAnswer="Le plomb a été le matériau de prédilection des canalisations d'eau potable jusqu'en 1949 environ, plus marginalement jusque dans les années 1960. Selon le Conseil général de l'environnement et du développement durable, environ 7,5 millions de logements en France (22 % du parc) seraient encore équipés de canalisations privatives en plomb. La limite réglementaire est fixée à 10 µg/L au robinet du consommateur depuis le 25 décembre 2013 (décret du 22 décembre 2001). Les distributeurs d'eau ont remplacé l'essentiel des branchements publics, mais les canalisations privatives restent à la charge du propriétaire. Le plomb est un toxique cumulatif qui s'accumule dans l'organisme et provoque le saturnisme, particulièrement grave chez le jeune enfant et la femme enceinte. La démarche est en trois temps : identifier visuellement les canalisations, faire mesurer l'eau au robinet en cas de doute (40-80 €), engager les travaux de remplacement si dépassement avéré (1 000 à 8 000 € selon configuration)."
        stats={[
          {
            value: "10 µg/L",
            label: "limite réglementaire de plomb dans l'eau au robinet depuis 2013 (décret 22/12/2001)",
          },
          {
            value: "~7,5 M",
            label: "logements pré-1949 potentiellement concernés en France (CGEDD), soit 22 % du parc",
          },
          {
            value: "1 949",
            label: "année après laquelle le plomb a été progressivement abandonné en plomberie domestique",
          },
          {
            value: "1 000-8 000 €",
            label: "fourchette de coût du remplacement des canalisations privatives en 2026",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le risque" },
          { id: "signes", label: "Identifier les canalisations" },
          { id: "causes", label: "Sources de contamination" },
          { id: "actions", label: "Mesurer et remplacer" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi le plomb dans l'eau est un enjeu sanitaire majeur."
        description="Le plomb est un métal toxique sans seuil sanitaire, classé cancérogène possible (groupe 2B) par le CIRC. Il s'accumule dans l'organisme (os, dents, sang) sur des années sans être éliminé, et provoque le saturnisme : troubles neurologiques, retards de développement chez l'enfant, hypertension et atteintes rénales chez l'adulte, complications de grossesse. Aucun niveau d'exposition n'est considéré comme totalement sûr, ce qui justifie l'abaissement progressif des seuils réglementaires (de 50 µg/L avant 2003 à 25 µg/L de 2003 à 2013, puis 10 µg/L depuis 2013). L'eau du robinet est l'une des principales sources d'exposition au plomb chez l'enfant en zone urbaine, avec les peintures anciennes (CREP) et les sols contaminés."
        variants={[
          {
            indicator: "10 µg/L",
            name: "Limite réglementaire au robinet (France/UE)",
            description:
              "Applicable depuis le 25 décembre 2013 (décret du 22 décembre 2001 transposant la directive 98/83/CE). Tout dépassement confirmé impose au propriétaire des canalisations privatives la remise en conformité. Pour le distributeur (côté public, jusqu'au compteur), le respect de la limite engage sa responsabilité.",
          },
          {
            indicator: "5 µg/L",
            name: "Future limite UE 2036",
            description:
              "La directive (UE) 2020/2184 abaissera la limite à 5 µg/L à compter de 2036, après une période de transition de 15 ans. Cette évolution traduit le consensus scientifique sur l'absence de seuil sanitaire et anticipe le renouvellement progressif des canalisations en Europe.",
          },
          {
            indicator: "Sans seuil",
            name: "Position OMS/ANSES sur la toxicité",
            description:
              "L'OMS et l'ANSES considèrent qu'aucun niveau d'exposition au plomb ne peut être déclaré sans risque. Les valeurs réglementaires sont des objectifs de gestion fondés sur l'état de l'art technique et économique, pas des seuils sanitaires. La logique est donc de minimiser autant que possible l'exposition, en particulier chez l'enfant en bas âge et la femme enceinte.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître une canalisation en plomb dans son logement."
        subtitle="Trois critères convergents permettent d'identifier visuellement et tactilement une canalisation en plomb. En cas de doute après ces vérifications, l'analyse d'eau lève l'incertitude."
        signs={[
          {
            label: "Logement construit avant 1949 (et plus rarement jusque 1960)",
            description:
              "Critère temporel principal. Avant 1949, le plomb était le matériau standard des canalisations d'eau potable privatives. De 1949 à 1960, son usage a régressé progressivement au profit du fer galvanisé puis du cuivre. Au-delà de 1970, l'utilisation du plomb dans les conduites neuves est rare, mais des résidus peuvent subsister sur les bâtiments rénovés partiellement.",
            severity: "modéré",
          },
          {
            label: "Couleur gris mat avec aspect terne",
            description:
              "Un tuyau en plomb a une couleur gris foncé mat, sans brillance métallique. À ne pas confondre avec le fer galvanisé (gris clair brillant) ni avec l'acier inoxydable (gris-argenté brillant). La patine peut s'altérer avec l'âge mais conserve cet aspect terne caractéristique. Si la canalisation est cachée sous peinture, gratter une zone discrète révèle la couleur d'origine.",
            severity: "critique",
          },
          {
            label: "Métal mou : se raye facilement à l'ongle ou au tournevis",
            description:
              "Le plomb est l'un des métaux les plus mous utilisés en plomberie. Une légère pression d'un tournevis ou d'un trombone laisse une trace argentée brillante (la couche oxydée s'enlève). Le fer galvanisé et le cuivre, beaucoup plus durs, ne montrent aucune trace dans les mêmes conditions. Test simple, fiable et non destructif.",
            severity: "critique",
          },
          {
            label: "Soudures arrondies en boules ou en bourrelets",
            description:
              "Les raccords en plomb sont historiquement réalisés par fusion : la soudure forme un bourrelet arrondi caractéristique, parfois grossier. Les raccords en cuivre, au contraire, sont nets et géométriques. Les raccords en fer galvanisé sont vissés avec un manchon. Une soudure arrondie sur un tuyau gris mat est un faisceau d'indices très solide.",
            severity: "modéré",
          },
          {
            label: "Pas magnétique",
            description:
              "Test complémentaire : le plomb n'est pas magnétique. Approcher un aimant : si rien n'est attiré et que les autres signes sont présents, plomb confirmé. Si l'aimant est attiré, fer galvanisé ou acier (pas de plomb à craindre). Le cuivre n'est pas magnétique non plus mais sa couleur rouge-brun le distingue immédiatement.",
            severity: "léger",
          },
          {
            label: "Saveur métallique de l'eau, dépôts blanchâtres au fond du verre",
            description:
              "Signaux indirects et peu fiables, mais à considérer en complément. Une eau qui prend un goût métallique, surtout au premier jet du matin après stagnation, peut signaler un relargage de plomb. Les dépôts blanchâtres au fond d'une carafe sont en revanche du calcaire (carbonate de calcium), sans rapport avec le plomb. Ne jamais conclure sur ces seuls signes : l'analyse en laboratoire reste nécessaire.",
            severity: "léger",
          },
        ]}
        footerNote="Si plusieurs critères convergent ou si le logement est antérieur à 1949 sans rénovation plomberie complète, faire réaliser une analyse d'eau (40-80 € en laboratoire COFRAC). Privilégier un prélèvement après stagnation nocturne (premier jet du matin) pour mesurer l'exposition réelle."
      />

      <IssueCauses
        id="causes"
        title="D'où vient réellement le plomb dans l'eau d'un logement."
        subtitle="Identifier la source précise oriente l'action. Les sources se cumulent parfois et chacune appelle une réponse différente."
        causes={[
          {
            number: "01",
            cause: "Canalisations privatives intérieures en plomb",
            explanation:
              "Source principale en logement ancien. Tuyaux d'arrivée d'eau, colonne montante en immeuble, nourrice de répartition vers les points d'eau. Ces canalisations relarguent du plomb par corrosion progressive, particulièrement dans les eaux peu minéralisées ou agressives. La quantité dissoute augmente avec le temps de stagnation : très élevée le matin après une nuit, faible après plusieurs litres écoulés.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Branchement public en plomb (résiduel)",
            explanation:
              "Le branchement entre la canalisation publique et le compteur de votre logement a été massivement remplacé par les distributeurs depuis 2000. Mais des branchements en plomb subsistent dans les rues anciennes non rénovées. La responsabilité incombe au distributeur (régie, syndicat, Veolia/Suez selon votre territoire) qui a obligation de remplacer en cas de dépassement avéré. Demander un diagnostic à votre distributeur en cas de doute.",
            frequency: "moins fréquent",
          },
          {
            number: "03",
            cause: "Soudures en plomb sur canalisations cuivre",
            explanation:
              "Pratique courante avant 1995 : raccords en cuivre soudés à l'étain-plomb (60-40 ou 50-50). Les canalisations apparaissent en cuivre mais relarguent du plomb au niveau des soudures. Solution : analyse d'eau pour confirmer, et remplacement des raccords concernés (intervention plus légère que le remplacement complet).",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Robinetterie ancienne contenant du plomb",
            explanation:
              "Les robinets et mitigeurs anciens (avant 2013) contiennent souvent du laiton plombé jusqu'à 4 % de plomb. Le relargage est faible mais réel, surtout sur les premiers jets après stagnation. Depuis 2013, la directive 98/83/CE impose des matériaux sans plomb (NF EN 16058 ou équivalent). Remplacer la robinetterie ancienne en cas de doute, surtout aux points d'eau utilisés pour la consommation.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Eau agressive favorisant la corrosion",
            explanation:
              "Une eau peu minéralisée et acide (pH < 7) corrode davantage les canalisations en plomb et augmente le relargage. Certaines eaux de surface des massifs granitiques (Bretagne, Massif central) ont historiquement ce profil. Les distributeurs ajustent en général le pH en station de traitement, mais le résultat varie. Le distributeur peut fournir le pH moyen sur demande.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Diagnostiquer, mesurer, et remplacer durablement."
        immediate={[
          {
            label: "Inspecter visuellement les canalisations accessibles",
            description:
              "Sous évier, dans le local technique ou la cave, dans la salle de bain : repérer les tuyaux apparents et appliquer les 3 tests (couleur grise mate, mou au tournevis, soudures arrondies). 30 minutes de vérification suffisent à classer la majorité des cas en 'plomb probable' ou 'plomb très improbable'.",
            effort: "30 minutes, gratuit",
          },
          {
            label: "Faire couler l'eau froide 30 secondes à 2 minutes avant consommation",
            description:
              "Mesure transitoire en attendant des travaux ou un diagnostic. L'eau ayant stagné dans les canalisations (matin, retour de week-end ou de vacances) concentre le plomb. Faire couler 30 secondes pour un usage rapide, jusqu'à 2 minutes pour préparer un biberon ou cuisiner. Récupérer cette eau pour les plantes ou le ménage. À utiliser comme palliatif, pas comme solution durable.",
            effort: "Geste simple, gratuit",
          },
          {
            label: "Demander une analyse d'eau au robinet (laboratoire COFRAC)",
            description:
              "Test décisif si les indices visuels sont incertains ou si le logement est sensible (présence d'enfant, femme enceinte). Coût 40-80 € pour une analyse plomb seule, 80-200 € pour un panel élargi (microbiologie + métaux). Privilégier un prélèvement après 6 à 8 heures de stagnation (premier jet du matin) pour mesurer l'exposition réelle. Conserver le rapport pour activer les recours si nécessaire.",
            effort: "40-200 €, 1 à 2 semaines",
          },
          {
            label: "Adapter immédiatement la consommation pour les enfants",
            description:
              "En cas de plomb suspecté ou avéré dans un logement avec enfant(s) ou femme enceinte : préparer biberons et eau de boisson avec une eau en bouteille faiblement minéralisée jusqu'à confirmation par analyse et/ou réalisation des travaux. Mesure de précaution simple et peu coûteuse pendant la phase de diagnostic.",
            effort: "Achat ponctuel",
          },
        ]}
        structural={[
          {
            label: "Remplacer les canalisations en plomb par cuivre, PER ou multicouche",
            description:
              "Solution définitive. Faire intervenir un plombier qualifié RGE ou disposant de la qualification Qualibat 5111. Compter 1 000 à 3 000 € pour un appartement (colonne et nourrice), 2 000 à 8 000 € pour une maison individuelle selon linéaire et accessibilité. Cuivre : durable, 50+ ans. PER multicouche : moins coûteux, 25-50 ans, adapté aux retraitements ciblés.",
            effort: "Travaux 1 à 5 jours",
          },
          {
            label: "Coordonner avec le distributeur pour le branchement public",
            description:
              "Si un dépassement de 10 µg/L est mesuré, contacter votre distributeur d'eau en lui transmettant le rapport d'analyse. Le distributeur doit vérifier que le branchement public (avant compteur) n'est pas en plomb et le remplacer si c'est le cas. Cette démarche est gratuite pour vous et complète le remplacement de la partie privative.",
            effort: "Démarche administrative",
          },
          {
            label: "Remplacer la robinetterie ancienne aux points de consommation",
            description:
              "Pour 100 à 400 € par robinet, remplacer la robinetterie d'avant 2013 par un modèle conforme à la NF EN 16058 (sans plomb). Prioriser le robinet de cuisine et celui de la salle de bain utilisé pour le brossage de dents, surtout en présence d'enfants. Geste complémentaire au remplacement des canalisations.",
            effort: "1 heure par robinet",
          },
          {
            label: "Refaire une analyse 1 mois après les travaux",
            description:
              "Pour valider l'efficacité du remplacement, faire une nouvelle analyse 4 à 6 semaines après la fin des travaux, en prélèvement après stagnation nocturne. Si le résultat est inférieur à 5 µg/L, la situation est sécurisée durablement. Conserver les rapports avant/après pour la valeur de revente du logement (élément vendeur en immobilier).",
            effort: "40-80 €, 1 mois après",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire face au plomb dans l'eau."
        errors={[
          {
            label: "\"L'eau du robinet de ma commune est conforme, donc je n'ai rien à craindre\"",
            explanation:
              "Erreur la plus fréquente. Le contrôle ARS s'arrête au compteur (limite de propriété). La conformité publique ne dit rien sur l'état des canalisations privatives à l'intérieur du logement. Une eau parfaitement conforme côté distributeur peut atteindre 50-100 µg/L au robinet d'un logement ancien avec plomb privatif. La conformité publique ne dispense pas du diagnostic propre du logement.",
          },
          {
            label: "\"Une carafe filtrante va régler le problème\"",
            explanation:
              "Les carafes filtrantes classiques (Brita et équivalents) ne sont pas conçues pour filtrer efficacement le plomb. Certaines cartouches haut de gamme revendiquent une réduction partielle, mais le résultat est variable et dépend strictement de l'état de la cartouche. La seule solution fiable face au plomb avéré est le remplacement des canalisations. Un osmoseur sous évier peut servir de palliatif partiel pour l'eau de boisson, mais ne traite pas le problème structurel.",
          },
          {
            label: "\"L'eau chaude évite le plomb\"",
            explanation:
              "C'est l'inverse. L'eau chaude relargue plus de plomb que l'eau froide en raison de la solubilité du métal qui augmente avec la température. Ne jamais utiliser l'eau chaude du robinet pour la cuisson ou la préparation des biberons (cette règle vaut pour tous les métaux, pas seulement le plomb). Utiliser de l'eau froide et la chauffer si besoin dans une casserole.",
          },
          {
            label: "\"Bouillir l'eau élimine le plomb\"",
            explanation:
              "Faux, et même contre-productif. La concentration en plomb augmente lors de l'ébullition (par évaporation d'une partie de l'eau, le plomb se concentre dans le résidu). Bouillir tue les micro-organismes mais n'a aucun effet sur les métaux dissous. Pour traiter le plomb, seuls le remplacement des canalisations ou une filtration spécifique (osmose inverse) sont efficaces.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le plomb dans les canalisations"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet en France",
            description:
              "Comprendre le contrôle ARS, ses limites (s'arrête au compteur) et lire les analyses publiques de votre commune.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Filtre à eau : utilité et limites face au plomb",
            description:
              "Si les travaux ne sont pas immédiats : ce qu'un osmoseur sous évier peut faire et ce qu'aucun filtre simple ne traite.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
          {
            tag: "Rénovation saine",
            title: "Diagnostic avant rénovation",
            description:
              "Toute rénovation d'un logement pré-1949 doit intégrer la vérification des canalisations en plomb au même titre que l'amiante et la peinture au plomb.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
        ]}
      />
    </>
  );
}

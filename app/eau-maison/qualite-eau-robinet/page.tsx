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
  title: "Qualité de l'eau du robinet en France : ce que dit le contrôle ARS",
  description:
    "Système de contrôle sanitaire, paramètres surveillés, principales non-conformités : comprendre la qualité de l'eau de votre commune et la consulter en quelques minutes.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/qualite-eau-robinet/",
  },
  openGraph: {
    title: "Qualité de l'eau du robinet en France : ce que dit le contrôle ARS",
    description:
      "Système de contrôle sanitaire, paramètres surveillés, principales non-conformités : comprendre la qualité de l'eau de votre commune et la consulter en quelques minutes.",
    url: "https://www.maisonbionat.fr/eau-maison/qualite-eau-robinet/",
  },
};

const faqItems = [
  {
    question: "Comment consulter la qualité de l'eau de ma commune ?",
    answer:
      "Plusieurs sources publiques et gratuites. 1) Le site de l'ARS de votre région publie les analyses sanitaires officielles, classées par commune ou par unité de distribution. 2) Le ministère de la Santé met à disposition un portail national (orobnat.sante.gouv.fr) qui regroupe toutes les analyses. 3) UFC Que Choisir publie une carte interactive grand public, plus lisible mais avec un léger décalage temporel. 4) Votre facture d'eau annuelle inclut une synthèse réglementaire. La consultation prend 2 à 5 minutes et oriente toutes les décisions de filtration ou de précaution.",
  },
  {
    question: "Que signifient les classifications NC0, NC1, NC2 sur les rapports ARS ?",
    answer:
      "Ces classifications concernent les dépassements de limites de qualité, principalement pour les pesticides. NC0 : dépassement ponctuel sans risque sanitaire identifié, eau toujours consommable. NC1 : dépassement récurrent mais sous le seuil sanitaire, eau consommable mais surveillance renforcée. NC2 : dépassement important, eau non consommable, restrictions imposées (information par votre mairie ou distributeur). Les classifications C signifient eau conforme. Une commune peut afficher des dépassements ponctuels (NC0/NC1) sans que l'eau soit déclarée non potable au sens strict.",
  },
  {
    question: "Sur combien de paramètres l'eau est-elle analysée ?",
    answer:
      "Environ 70 paramètres physico-chimiques et microbiologiques sont surveillés en routine sur le réseau français : microbiologie (E. coli, entérocoques), nitrates, pesticides individuels et totaux, métaux (plomb, cuivre, chrome, nickel), sous-produits de désinfection (trihalométhanes, bromates), composés organiques (hydrocarbures, solvants chlorés), paramètres organoleptiques (couleur, odeur, saveur). La fréquence d'analyse dépend de la taille du réseau (de quelques fois par an pour un petit village à plusieurs analyses quotidiennes pour les grandes métropoles). Les nouveaux polluants (PFAS, métabolites de pesticides) entrent progressivement dans le contrôle réglementaire.",
  },
  {
    question: "Quelles sont les principales causes de non-conformité aujourd'hui ?",
    answer:
      "Trois causes dominent en 2026. 1) Pesticides et leurs métabolites : depuis 2020, l'élargissement des molécules recherchées a fait augmenter mécaniquement les détections, en particulier en zone de grande culture (Bretagne, Beauce, bassin parisien, Aquitaine). 2) Nitrates en zone agricole : ressources superficielles ou nappes peu profondes en bassins d'élevage intensif ou de cultures céréalières. 3) Plomb d'origine privative : pas mesuré dans le contrôle ARS qui s'arrête à la limite de propriété, mais documenté dans les logements anciens non rénovés. Les contaminations microbiologiques restent rares en réseau public mais peuvent survenir en cas d'incident (rupture de canalisation, pollution accidentelle).",
  },
];

export default function QualiteEauRobinetPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Qualité de l'eau du robinet",
      href: "https://www.maisonbionat.fr/eau-maison/qualite-eau-robinet/",
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
        tag="Qualité réglementaire"
        title="Qualité de l'eau du robinet : comprendre le contrôle ARS et lire les analyses"
        quickAnswer="L'eau du robinet en France est l'un des aliments les plus contrôlés du pays. Le Code de la santé publique impose un contrôle sanitaire piloté par les Agences régionales de santé (ARS), avec analyses sur la ressource (forage, prise d'eau de surface), à la sortie de station de traitement, et au robinet du consommateur. Environ 70 paramètres physico-chimiques et microbiologiques sont surveillés. Plus de 96 % de la population française est desservie par une eau conforme à l'ensemble des limites de qualité en analyse globale. Les non-conformités résiduelles concernent essentiellement les pesticides et leurs métabolites en zone agricole, et plus rarement les nitrates. Les résultats sont publics et consultables sur le site de chaque ARS, sur le portail national orobnat.sante.gouv.fr, ou via la carte interactive UFC Que Choisir."
        stats={[
          {
            value: "~70",
            label: "paramètres physico-chimiques et microbiologiques surveillés en routine",
          },
          {
            value: "> 96 %",
            label: "de la population française desservie par une eau conforme en analyse globale",
          },
          {
            value: "0,1 µg/L",
            label: "limite de qualité par pesticide individuel (0,5 µg/L pour la somme)",
          },
          {
            value: "50 mg/L",
            label: "limite de qualité française pour les nitrates (recommandation OMS : 10 mg/L pour nourrissons)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comment fonctionne le contrôle" },
          { id: "signes", label: "Lire les résultats" },
          { id: "causes", label: "Principales non-conformités" },
          { id: "actions", label: "Vérifier votre commune" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Le système de contrôle sanitaire de l'eau potable en France."
        description="Le contrôle de l'eau destinée à la consommation humaine est encadré par le Code de la santé publique (articles R.1321-1 et suivants), qui transpose la directive européenne 98/83/CE révisée en 2020 par la directive (UE) 2020/2184. Le contrôle est piloté par les Agences régionales de santé (ARS), qui mandatent des laboratoires agréés par le ministère de la Santé. Chaque unité de distribution (réseau alimenté par une même ressource) fait l'objet d'analyses régulières dont la fréquence dépend du nombre d'habitants desservis. Les résultats sont publics et conservés sur le portail national orobnat.sante.gouv.fr."
        variants={[
          {
            indicator: "Limites de qualité",
            name: "Paramètres à respecter strictement",
            description:
              "Concernent les substances présentant un risque sanitaire avéré : microbiologie (E. coli, entérocoques), nitrates (50 mg/L), nitrites (0,5 mg/L), pesticides (0,1 µg/L par molécule, 0,5 µg/L total), plomb (10 µg/L), arsenic (10 µg/L), métaux divers, sous-produits de désinfection. Tout dépassement déclenche une procédure réglementaire (information du préfet, du distributeur, parfois des consommateurs).",
          },
          {
            indicator: "Références de qualité",
            name: "Indicateurs de bon fonctionnement",
            description:
              "Paramètres organoleptiques ou indicateurs sans risque sanitaire direct mais utiles pour le suivi du réseau : pH, conductivité, turbidité, dureté, fer, manganèse, chlore résiduel. Un dépassement signale un dysfonctionnement de la chaîne de traitement, sans rendre l'eau impropre à la consommation. Permet d'anticiper les problèmes avant qu'ils ne touchent les paramètres sanitaires.",
          },
          {
            indicator: "Multi-points",
            name: "Ressource, station, robinet",
            description:
              "Les analyses sont réalisées en trois points : 1) la ressource (captage, forage, prise d'eau en rivière) pour caractériser la qualité brute. 2) en sortie de station de traitement pour vérifier l'efficacité du traitement. 3) au robinet du consommateur (en aval, parfois après plusieurs kilomètres de réseau) pour valider la qualité réellement livrée. Les éventuels dégradations en réseau (corrosion, contamination par retour) sont ainsi détectées.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Lire et comprendre les résultats publics de votre commune."
        subtitle="Les analyses ARS sont publiées dans un format technique mais lisible avec quelques repères. Voici les éléments à regarder en priorité pour évaluer la qualité de l'eau de votre logement."
        signs={[
          {
            label: "Conformité globale microbiologique",
            description:
              "Premier paramètre à vérifier. La microbiologie (E. coli, entérocoques, bactéries coliformes) doit être absente dans 100 mL d'eau analysée. Une non-conformité microbiologique signe une contamination active du réseau et déclenche en général une restriction immédiate de consommation. Vérifier que la ligne 'microbiologie' est conforme à 100 % sur les 12 derniers mois.",
            severity: "critique",
          },
          {
            label: "Nitrates en mg/L",
            description:
              "Limite réglementaire : 50 mg/L. Mais surveiller surtout le seuil de 10 mg/L recommandé par l'OMS pour les nourrissons et femmes enceintes. Si l'eau de votre commune dépasse régulièrement 25-30 mg/L, prévoir une eau en bouteille faiblement minéralisée pour les biberons. Les zones d'élevage intensif et de grande culture sont les plus concernées (Bretagne, Beauce, plaines céréalières).",
            severity: "modéré",
          },
          {
            label: "Pesticides individuels et totaux",
            description:
              "Limite : 0,1 µg/L par molécule, 0,5 µg/L cumulés. Les non-conformités sont fréquentes mais souvent classées NC0 (sans risque sanitaire identifié). Les métabolites de l'atrazine (interdite depuis 2003 mais persistante) et les métabolites du métolachlore représentent l'essentiel des détections. Vérifier la classification NC0/NC1/NC2 pour évaluer la portée du dépassement.",
            severity: "modéré",
          },
          {
            label: "Plomb au robinet",
            description:
              "Limite : 10 µg/L. ATTENTION : l'analyse ARS s'arrête à la limite de propriété (compteur d'eau). Le plomb d'origine privative (canalisations intérieures du logement, soudures) n'est pas mesuré et reste à la charge du propriétaire. Une eau parfaitement conforme côté distributeur peut donc contenir du plomb au robinet d'un logement ancien.",
            severity: "modéré",
          },
          {
            label: "Sous-produits de désinfection (trihalométhanes)",
            description:
              "Limite : 100 µg/L pour la somme des THM. Issus de la réaction du chlore avec les matières organiques de l'eau. Eaux de surface (rivières, retenues) plus concernées que les eaux souterraines. Les non-conformités sont rares en France et concernent surtout les petits réseaux mal optimisés.",
            severity: "léger",
          },
          {
            label: "Chlore résiduel et goût",
            description:
              "Pas une limite sanitaire mais un repère organoleptique. Un goût marqué de chlore (résiduel à 0,1-0,3 mg/L) est normal en sortie de station, atténué au robinet selon la distance. Si vous trouvez votre eau désagréable, laisser reposer 30 minutes à l'air libre élimine la majorité du chlore résiduel sans aucun équipement.",
            severity: "léger",
          },
        ]}
        footerNote="Pour une lecture grand public plus rapide, la carte interactive UFC Que Choisir agrège les données ARS et les présente avec un code couleur communal (vert/orange/rouge) sur les principaux paramètres. Utile en première approche, à compléter par la consultation directe de l'ARS pour les détails."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi certaines communes affichent des non-conformités."
        subtitle="Les écarts de qualité observés en France ont des causes territoriales et historiques bien identifiées. Comprendre ces causes aide à évaluer le risque réel pour votre situation."
        causes={[
          {
            number: "01",
            cause: "Pression agricole sur les ressources",
            explanation:
              "Première cause des non-conformités résiduelles. Les nitrates et pesticides issus de l'agriculture intensive contaminent les eaux de surface et les nappes peu profondes. La Bretagne, la Beauce, le bassin parisien, le Sud-Ouest céréalier concentrent les non-conformités. La régression est lente : un pesticide interdit aujourd'hui peut continuer à être détecté pendant des décennies (cas des métabolites de l'atrazine, interdite depuis 2003 et toujours majoritaires dans les détections).",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Petits réseaux sans optimisation poussée",
            explanation:
              "Les petits réseaux ruraux (< 5 000 habitants) sont plus exposés aux non-conformités que les grands réseaux urbains : équipements de traitement plus simples, ressources locales plus vulnérables, capacité d'investissement limitée. La régionalisation des syndicats d'eau et la mutualisation des ressources améliorent progressivement la situation, mais des disparités persistent en zone rurale isolée.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Vétusté du réseau public",
            explanation:
              "Le réseau d'eau potable français a un taux de renouvellement annuel d'environ 0,6 %, ce qui signifie un renouvellement complet tous les ~170 ans. Les canalisations en fonte grise des années 1950-1970, les raccords plomb en sortie de réseau, les remontées de sédiments lors des manœuvres expliquent une partie des dépassements ponctuels en métaux ou turbidité.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Élargissement des paramètres recherchés",
            explanation:
              "Depuis 2020, l'introduction progressive de nouvelles molécules dans le contrôle (métabolites de pesticides, PFAS, perfluorés) augmente mécaniquement le nombre de détections. Cela ne signifie pas que la qualité se dégrade : la pollution était déjà là, simplement non mesurée. La directive européenne 2020/2184 a renforcé les exigences et continuera à le faire dans les années à venir.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Plomb en partie privative",
            explanation:
              "Source de contamination non détectée par le contrôle ARS, qui s'arrête au compteur. Les canalisations privatives en plomb (tuyaux d'arrivée d'eau, soudures) restent largement présentes dans 7,5 millions de logements pré-1949 selon le CGEDD. Le coût de remplacement (1 000 à 3 000 € par logement) freine le renouvellement, à la charge exclusive du propriétaire.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Vérifier la qualité de l'eau de votre logement, étape par étape."
        immediate={[
          {
            label: "Consulter le site de votre ARS régionale",
            description:
              "Aller sur le site de l'ARS de votre région (par exemple ars.bretagne.sante.fr), rubrique 'Eau et alimentation' ou 'Santé environnement', puis chercher votre commune. Vous y trouverez les analyses publiques, le bilan annuel, les éventuels avis sanitaires. Information officielle et à jour.",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Vérifier sur la carte interactive UFC Que Choisir",
            description:
              "L'association consommateurs publie une carte agrégeant les données ARS avec un code couleur grand public. Plus rapide à lire que les rapports techniques, mais avec un léger décalage temporel. Utile pour une vue d'ensemble et pour comparer plusieurs communes (déménagement, achat immobilier).",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Lire la synthèse jointe à votre facture d'eau",
            description:
              "Votre distributeur d'eau (régie communale, Veolia, Suez, Saur...) joint chaque année à votre facture une synthèse réglementaire avec les principaux paramètres. Information moins détaillée que celle de l'ARS mais suffisante pour une vérification rapide. À conserver pour le suivi pluriannuel.",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Identifier la situation spécifique de votre logement",
            description:
              "Trois questions clés. 1) Année de construction du logement : avant 1949 = risque plomb privatif. 2) Type de distribution : réseau public, eau de puits, ou mixte ? 3) Population sensible présente : nourrisson, femme enceinte, personne immunodéprimée ? La réponse à ces 3 questions oriente toutes les actions suivantes.",
            effort: "Réflexion personnelle",
          },
        ]}
        structural={[
          {
            label: "Demander une analyse au robinet en cas de doute",
            description:
              "Pour les logements anciens ou en cas de symptôme inexpliqué : faire réaliser une analyse complète (microbiologie + métaux + nitrates) par un laboratoire agréé COFRAC. Coût 80 à 200 € selon le panel demandé. Le résultat est opposable et permet de déclencher des travaux ou des recours auprès du propriétaire/syndic en copropriété.",
            effort: "80-200 €, 1 à 2 semaines",
          },
          {
            label: "Suivre les évolutions réglementaires (PFAS notamment)",
            description:
              "La directive UE 2020/2184 impose progressivement la surveillance des PFAS (polluants persistants) dans l'eau du robinet, avec un seuil de 0,1 µg/L pour la somme. La transposition française est en cours. Les premières analyses massives sont attendues en 2026-2027 et pourraient révéler des contaminations jusque-là invisibles, en particulier près d'anciens sites industriels.",
            effort: "Veille passive",
          },
          {
            label: "Engager le dialogue avec votre distributeur en cas de dépassement",
            description:
              "Si votre commune est classée NC1 ou NC2 sur un paramètre, demander au distributeur (mairie, syndicat des eaux) le plan d'action et la temporalité. Les communes en non-conformité chronique ont l'obligation d'engager un programme de mise en conformité (changement de ressource, traitement complémentaire, dilution). Le silence ou l'évitement justifie une saisine de la DREAL ou de l'ARS.",
            effort: "Démarche administrative",
          },
          {
            label: "Adapter la consommation pour les populations sensibles",
            description:
              "Indépendamment de la conformité globale, les nourrissons (< 6 mois) et femmes enceintes méritent une vigilance spécifique sur les nitrates (≤ 10 mg/L) et les pesticides. En zone à dépassement même classé NC0, prévoir une eau en bouteille faiblement minéralisée pour la préparation des biberons. Voir notre page nitrates pour le détail.",
            effort: "Choix d'achat ponctuel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le contrôle de l'eau."
        errors={[
          {
            label: "\"L'eau de ma commune est conforme, donc je n'ai rien à vérifier chez moi\"",
            explanation:
              "Faux pour les logements anciens. Le contrôle ARS s'arrête au compteur d'eau (limite de propriété). Les canalisations privatives, raccords, soudures du logement échappent à ce contrôle. Une eau parfaitement conforme à la sortie du distributeur peut être contaminée au robinet par du plomb en partie privative. La conformité publique ne dispense pas de vérifier la situation propre du logement, surtout avant 1949.",
          },
          {
            label: "\"Les analyses ne portent que sur quelques paramètres\"",
            explanation:
              "Le contrôle français porte sur environ 70 paramètres en routine, parmi les plus larges en Europe. Les nouveaux polluants (PFAS, nouveaux métabolites) intègrent progressivement le contrôle réglementaire avec la transposition de la directive UE 2020/2184. La critique sur le 'peu de paramètres analysés' relève souvent d'une mauvaise lecture des fiches simplifiées plutôt que des rapports complets.",
          },
          {
            label: "\"Le chlore dans l'eau est dangereux\"",
            explanation:
              "Le chlore résiduel à 0,1-0,3 mg/L au robinet est sans risque sanitaire identifié. Il garantit l'absence de prolifération microbienne entre la station et le robinet, indispensable pour la sécurité bactériologique du réseau. Le goût peut être désagréable, mais une carafe ou un repos de 30 minutes l'élimine. Les sous-produits de désinfection (trihalométhanes) sont surveillés et limités à 100 µg/L.",
          },
          {
            label: "\"Une eau qui sort claire et sans goût est forcément potable\"",
            explanation:
              "Faux. Les paramètres dangereux (plomb, nitrates, pesticides, métaux lourds) sont presque tous invisibles, inodores et insipides. La clarté et l'absence de goût ne garantissent rien. Seule l'analyse en laboratoire permet de connaître la qualité réelle. Inversement, une eau légèrement trouble ou avec un goût terreux après un orage peut être parfaitement potable (turbidité organique sans risque sanitaire).",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la qualité de l'eau du robinet"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Plomb dans les canalisations",
            description:
              "Le contrôle ARS s'arrête au compteur. Pour les logements pré-1949, vérifier le plomb privatif est une démarche complémentaire essentielle.",
            href: "/eau-maison/plomb-canalisations/",
          },
          {
            tag: "Eau maison",
            title: "Nitrates : nourrissons et femmes enceintes",
            description:
              "Si l'analyse de votre commune montre des nitrates, voici comment évaluer le risque pour les populations sensibles et adapter la consommation.",
            href: "/eau-maison/nitrates-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Filtre à eau : utilité et limites",
            description:
              "Une fois la qualité de votre eau identifiée, choisir (ou non) un dispositif de filtration adapté au polluant ciblé.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
        ]}
      />
    </>
  );
}

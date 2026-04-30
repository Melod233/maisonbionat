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
  title: "Eau du robinet ou eau en bouteille : le comparatif honnête (2026)",
  description:
    "Comparatif sourcé santé, coût, environnement, traçabilité. Données ANSES et ADEME, affaire Nestlé Waters, microplastiques, cas où la bouteille reste justifiée.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/eau-bouteille-vs-robinet/",
  },
  openGraph: {
    title: "Eau du robinet ou eau en bouteille : le comparatif honnête (2026)",
    description:
      "Comparatif sourcé santé, coût, environnement, traçabilité. Données ANSES et ADEME, affaire Nestlé Waters, microplastiques, cas où la bouteille reste justifiée.",
    url: "https://www.maisonbionat.fr/eau-maison/eau-bouteille-vs-robinet/",
  },
};

const faqItems = [
  {
    question: "L'eau du robinet est-elle vraiment plus saine que l'eau en bouteille ?",
    answer:
      "Dans la majorité des cas, oui, et l'écart s'est creusé depuis l'affaire Nestlé Waters. L'eau du robinet en France subit en moyenne plus de contrôles, sur plus de paramètres et avec une traçabilité publique (ARS) que l'eau en bouteille. L'arrêté du 11 janvier 2007 impose des analyses microbiologiques et chimiques très complètes (~70 substances) à tous les réseaux. Les eaux minérales en bouteille relèvent d'un autre cadre (Code de la santé publique, articles R.1322-1 et suivants) qui exige une qualité « originelle » sans traitement de désinfection — règle prise en défaut par le scandale Nestlé révélé en janvier 2024 (filtres au charbon actif et UV interdits utilisés en cachette pendant plus de 15 ans selon Le Monde et Radio France). Pour la grande majorité des Français desservis par un réseau conforme, l'eau du robinet est donc le choix le plus sûr et le plus contrôlé.",
  },
  {
    question: "Quel est le coût réel de chaque solution ?",
    answer:
      "L'écart est massif : 1 m³ d'eau du robinet (1000 L) coûte en moyenne 4,30 € en France (Observatoire des services publics d'eau, données 2024), soit environ 0,004 €/L. Une bouteille d'eau de source ou minérale en grande surface revient à 0,30 à 1 €/L selon la marque, soit 75 à 250 fois plus cher. Pour une famille de 4 personnes consommant 1,5 L par personne et par jour, le surcoût annuel de la bouteille atteint 600 à 2200 € selon les marques choisies. À ce coût s'ajoutent l'effort de transport, le stockage et la gestion des déchets plastiques.",
  },
  {
    question: "Que sait-on des microplastiques dans l'eau ?",
    answer:
      "Les deux solutions contiennent des microplastiques mais à des niveaux très différents. Une étude de l'OMS et d'Orb Media (2018), confirmée depuis par plusieurs travaux indépendants, a estimé qu'un consommateur exclusif d'eau en bouteille ingère environ 90 000 microparticules plastiques par an, contre environ 4 000 pour un consommateur d'eau du robinet. Une étude française récente a montré que 98 % des microplastiques dans l'eau potable mesurent moins de 20 µm. Les bouteilles en PET libèrent davantage de particules sous l'effet de la chaleur, des UV et du stockage long. L'effet sanitaire des microplastiques fait l'objet de recherches actives mais reste à ce jour incomplètement documenté ; le principe de précaution oriente vers la limitation de l'exposition.",
  },
  {
    question: "Dans quels cas l'eau en bouteille reste-t-elle justifiée ?",
    answer:
      "Plusieurs cas concrets. 1) Préparation des biberons en zone à nitrates > 10 mg/L (recommandation OMS et ANSES jusqu'à 6 mois). 2) Logement avec canalisations en plomb suspectes en attendant remplacement (alternative à la filtration). 3) Zone documentée en dépassement PFAS sans solution de filtration immédiate. 4) Avis sanitaire ARS (contamination microbiologique ponctuelle, travaux). 5) Régime médical strict imposant une eau spécifique (hyposodé, etc.). En dehors de ces cas précis, l'eau du robinet conforme suffit dans la quasi-totalité des situations. Préférer alors une eau de source (moins minéralisée) à une eau minérale très chargée en sels, sauf prescription médicale.",
  },
];

export default function EauBouteilleVsRobinetPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Eau du robinet ou eau en bouteille",
      href: "https://www.maisonbionat.fr/eau-maison/eau-bouteille-vs-robinet/",
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
        tag="Comparatif"
        title="Eau du robinet ou eau en bouteille : le bilan honnête en 2026"
        quickAnswer="Pour la grande majorité des Français, l'eau du robinet est le choix le plus rationnel sur les quatre plans : santé, coût, environnement et traçabilité. Côté santé, le contrôle ARS (~70 paramètres analysés en permanence) est plus exigeant que celui des eaux en bouteille, et l'affaire Nestlé Waters révélée en janvier 2024 par Le Monde et Radio France a fragilisé la confiance dans les grandes marques (filtres au charbon actif et UV interdits utilisés sur Vittel, Contrex, Hépar, Perrier pendant plus de 15 ans, contaminations fécales, pesticides et PFAS documentées par une note ANSES d'octobre 2023). Côté coût, l'eau du robinet revient à environ 0,004 €/L contre 0,30 à 1 €/L en bouteille, soit 75 à 250 fois plus chère. Côté environnement, l'ADEME estime que l'eau en bouteille émet plusieurs centaines de fois plus de CO₂ que l'eau du robinet. Côté microplastiques, les consommateurs exclusifs d'eau en bouteille ingèrent environ 90 000 microparticules plastiques par an contre 4 000 pour ceux qui boivent l'eau du robinet (OMS, 2018). L'eau en bouteille reste justifiée dans des cas précis : nitrates > 10 mg/L pour les nourrissons, plomb suspecté, PFAS en zone contaminée sans filtration, avis sanitaire."
        stats={[
          {
            value: "75-250×",
            label: "écart de prix entre eau du robinet et eau en bouteille au litre",
          },
          {
            value: "~22×",
            label: "consommation de microplastiques annuelle bouteille vs robinet (OMS)",
          },
          {
            value: "Plusieurs centaines",
            label: "de fois plus de CO₂/L pour l'eau en bouteille (ADEME)",
          },
          {
            value: "15+ ans",
            label: "de traitements interdits chez Nestlé Waters selon les enquêtes 2024",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comparatif détaillé" },
          { id: "signes", label: "Quel choix selon situation" },
          { id: "causes", label: "Affaire Nestlé Waters" },
          { id: "actions", label: "Décider en pratique" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Le match eau du robinet / eau en bouteille en 2026."
        description="Comparer les deux solutions revient à arbitrer sur quatre dimensions principales : sécurité sanitaire et traçabilité, coût pour le ménage, impact environnemental, qualité organoleptique. Pendant longtemps, l'eau en bouteille a profité d'un capital marketing fort (« eau pure des sources alpines », « eau riche en minéraux ») qui masquait des faiblesses sur les trois premières dimensions. La donne a profondément changé en janvier 2024 avec la révélation par Le Monde et Radio France des traitements illégaux pratiqués depuis plus de 15 ans par Nestlé Waters sur ses marques phares (Vittel, Contrex, Hépar, Perrier). Une note confidentielle de l'ANSES remise au gouvernement en octobre 2023 documentait des contaminations microbiologiques d'origine fécale, des pesticides et des PFAS dans plusieurs sources. Le rapport du Sénat publié en 2024 a parlé de « scandale industriel doublé d'un scandale politique ». Cet épisode rappelle que l'eau en bouteille n'est pas par nature « plus pure » que l'eau du robinet."
        variants={[
          {
            indicator: "~70 paramètres",
            name: "Contrôle de l'eau du robinet",
            description:
              "Système ARS piloté par les Agences régionales de santé en application de l'arrêté du 11 janvier 2007. Analyses microbiologiques et chimiques régulières sur la ressource, en sortie de station et au robinet. Plus de 96 % de la population française desservie par une eau conforme aux limites de qualité. Résultats publiés sur le site de chaque ARS et sur la facture d'eau. Traçabilité forte et publique.",
          },
          {
            indicator: "Cadre R.1322",
            name: "Contrôle de l'eau en bouteille",
            description:
              "Articles R.1322-1 et suivants du Code de la santé publique. Les eaux minérales naturelles doivent présenter une qualité « originelle » sans traitement de désinfection. Contrôles à la source et en sortie d'usine, mais traçabilité publique moins systématique. L'affaire Nestlé Waters a révélé que cette règle de pureté originelle a été contournée massivement et durablement par des traitements UV et charbon actif interdits sur les eaux minérales naturelles.",
          },
          {
            indicator: "0,004 €/L",
            name: "Coût moyen de l'eau du robinet en France",
            description:
              "Sur une base de 4,30 €/m³ en moyenne (Observatoire national des services publics d'eau et d'assainissement, données 2024), une famille de 4 personnes consommant 1,5 L/personne/jour dépense environ 9 € par an pour l'eau de boisson. Variabilité forte selon les communes (de 2 € à 7 €/m³ selon les territoires).",
          },
          {
            indicator: "0,30-1 €/L",
            name: "Coût moyen de l'eau en bouteille",
            description:
              "Selon la marque (eau de source, eau minérale, marque distributeur ou marque nationale). Pour la même famille de 4 personnes consommant 1,5 L/personne/jour, le coût annuel de l'eau en bouteille s'établit entre 600 et 2200 €. Soit un surcoût de 600 à 2200 € par an par rapport au robinet, sans bénéfice sanitaire démontré dans la majorité des cas.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Quel choix selon votre situation."
        subtitle="Les arbitrages diffèrent selon la qualité documentée de votre eau du robinet, la composition de votre foyer et les éventuelles contraintes médicales. Voici les configurations principales."
        signs={[
          {
            label: "Eau du robinet conforme et pas de population sensible : robinet sans hésiter",
            description:
              "Cas de la grande majorité des Français. Si votre eau est conforme (consultable sur le site ARS de votre région ou sur la facture annuelle), il n'y a pas de raison sanitaire de préférer la bouteille. Avantages cumulés : coût inférieur, traçabilité supérieure, impact environnemental moindre, moins de microplastiques. Pour le goût (chlore résiduel), une carafe au charbon actif ou une décantation de 30 minutes au réfrigérateur règle la quasi-totalité des cas.",
            severity: "léger",
          },
          {
            label: "Nourrisson de moins de 6 mois en zone à nitrates > 10 mg/L : bouteille obligatoire",
            description:
              "Recommandation OMS et ANSES claire : pour la préparation des biberons, ne pas utiliser une eau dépassant 10 mg/L de nitrates (la limite réglementaire de 50 mg/L vise la population générale). Si votre commune dépasse ce seuil, utiliser une eau en bouteille faiblement minéralisée portant la mention « convient à la préparation des aliments des nourrissons » (arrêté du 14 mars 2007). Mesure transitoire jusqu'à 6 mois ou jusqu'à amélioration du réseau.",
            severity: "critique",
          },
          {
            label: "Plomb suspecté dans les canalisations privatives : bouteille en attendant",
            description:
              "Logement construit avant 1949 ou avec canalisations privatives en plomb non remplacées : risque de dépassement de la limite réglementaire de 10 µg/L. Avant analyse et travaux, l'eau en bouteille reste une mesure transitoire raisonnable, en complément de la précaution de laisser couler l'eau 30 secondes après stagnation. Solution durable : remplacer les canalisations en plomb (à la charge du propriétaire) ou installer un osmoseur.",
            severity: "critique",
          },
          {
            label: "Zone PFAS documentée sans solution de filtration : bouteille temporaire",
            description:
              "Si votre commune apparaît sur la cartographie ministérielle PFAS en dépassement de la limite 0,1 µg/L, et que vous n'avez pas encore d'osmoseur ou de charbon actif certifié NSF/ANSI 53/58 installé, utilisez de l'eau en bouteille pour la consommation directe (boisson, biberons, cuisson finale). Privilégier les marques traçables et vérifier les analyses publiques.",
            severity: "critique",
          },
          {
            label: "Avis sanitaire ARS de non-consommation : bouteille jusqu'à levée",
            description:
              "Lors d'incidents (contamination microbiologique, pollution accidentelle), les ARS publient des avis de non-consommation temporaires. L'eau en bouteille devient alors la solution unique pour la durée de l'avis (généralement 24 h à quelques jours). Suivre les communications du distributeur et de la mairie pour savoir quand reprendre la consommation au robinet.",
            severity: "critique",
          },
          {
            label: "Régime médical hyposodé : robinet sauf en zone très chargée",
            description:
              "L'eau du robinet est généralement faiblement sodée (< 50 mg/L) sauf en zone côtière ou en présence d'un adoucisseur sans by-pass. Une eau minérale faiblement minéralisée (Mont Roucous, Volvic) reste alors un choix raisonnable. Éviter les eaux minérales très sodées (Vichy Saint-Yorre, Vichy Célestins, Quézac) sauf prescription médicale spécifique.",
            severity: "modéré",
          },
        ]}
        footerNote="Ces situations particulières sont importantes mais minoritaires. La règle générale reste : si votre eau du robinet est conforme et que vous n'êtes pas dans un cas spécifique, le robinet est le choix supérieur sur tous les plans."
      />

      <IssueCauses
        id="causes"
        title="L'affaire Nestlé Waters et ce qu'elle change."
        subtitle="Le scandale révélé en janvier 2024 a profondément modifié le rapport de confiance entre les consommateurs et les grandes marques d'eau en bouteille. Voici les faits avérés et leurs implications."
        causes={[
          {
            number: "01",
            cause: "Note ANSES confidentielle remise au gouvernement en octobre 2023",
            explanation:
              "L'Agence nationale de sécurité sanitaire de l'alimentation a remis au ministère de la Santé une note pointant des contaminations microbiologiques d'origine fécale dans certaines ressources servant à la production d'eaux minérales naturelles embouteillées (Vittel, Contrex, Hépar dans les Vosges, Perrier dans le Gard). Cette note documentait également des présences de pesticides et de PFAS. Elle est restée confidentielle pendant plusieurs mois, jusqu'à sa révélation par la presse en avril 2024.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Traitements interdits utilisés depuis plus de 15 ans selon Mediapart",
            explanation:
              "Les enquêtes du Monde, de Radio France et de Mediapart ont documenté l'utilisation systématique par Nestlé Waters de traitements interdits sur les eaux minérales naturelles : filtres à charbon actif, traitements UV, microfiltration sub-réglementaire. Selon une révélation Mediapart de juillet 2024, ces traitements étaient utilisés depuis plus de 15 ans, en violation de la réglementation française qui exige une qualité originelle sans désinfection.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Lobbying industriel et complaisance politique selon le rapport sénatorial",
            explanation:
              "Le rapport de la commission d'enquête sénatoriale publié en 2024 a qualifié les faits de « scandale industriel doublé d'un scandale politique ». Selon ce rapport et les enquêtes du Monde et de Radio France de février 2025, le gouvernement a reçu plusieurs alertes des autorités sanitaires sans y donner suite, cédant au lobbying intense de Nestlé Waters pendant plusieurs années. Le sujet a été commenté par plusieurs ministres successifs.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Décisions administratives ambiguës en 2024-2025",
            explanation:
              "Malgré les faits avérés, les autorités ont autorisé Perrier à conserver son label « eau minérale naturelle » et à exploiter deux forages avec un suivi sanitaire renforcé (décision validée par la justice en 2025). Cette issue a été interprétée comme une protection de la filière industrielle plutôt qu'une sanction proportionnée à la gravité des faits. Le scandale a fragilisé durablement la confiance dans les marques concernées.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Effet sur le marché des eaux en bouteille",
            explanation:
              "Selon les données du marché, plusieurs marques Nestlé Waters ont vu leurs ventes baisser en 2024 et 2025. Une partie des consommateurs s'est reportée vers d'autres marques (Cristaline, Évian, sources locales) ou vers l'eau du robinet filtrée. L'épisode rappelle que l'eau en bouteille n'est pas par nature plus pure ni plus contrôlée que l'eau du robinet, et que la confiance accordée aux grandes marques mérite d'être revisitée.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Décider en pratique selon votre situation."
        immediate={[
          {
            label: "Consulter la qualité de votre eau du robinet",
            description:
              "Première étape avant tout autre arbitrage. Sur le site de votre ARS ou sur la carte interactive UFC Que Choisir, vous trouvez les analyses publiques (microbiologie, nitrates, pesticides, dureté, plomb). 5 minutes pour situer votre eau. Une eau conforme et sans dépassement notable rend le débat largement caduc en faveur du robinet.",
            effort: "5 minutes, gratuit",
          },
          {
            label: "Vérifier les paramètres sensibles selon votre foyer",
            description:
              "Famille avec nourrisson : vérifier les nitrates (seuil de prudence 10 mg/L). Logement ancien : vérifier le plomb (analyse au robinet 40-80 € si non documenté). Zone industrielle ou aéroport à proximité : vérifier les PFAS sur la cartographie ministérielle. Ces vérifications ciblées suffisent à trancher la question dans la majorité des configurations.",
            effort: "10-30 minutes, gratuit",
          },
          {
            label: "Améliorer le goût du robinet plutôt que passer à la bouteille",
            description:
              "Si la seule motivation est gustative (chlore résiduel, calcaire), une carafe filtrante au charbon actif (30-50 €) ou une simple décantation de 30 minutes au réfrigérateur règle 80 à 90 % du problème. Investissement modeste pour un retour sur investissement quasi-immédiat par rapport au surcoût de la bouteille (600 à 2200 €/an pour une famille de 4 personnes).",
            effort: "30-50 €",
          },
          {
            label: "Si bouteille nécessaire ponctuellement, choisir avec discernement",
            description:
              "Pour les biberons en zone à nitrates : eaux portant la mention « convient à la préparation des aliments des nourrissons » (Mont Roucous, Volvic, certaines marques distributeur). Pour usage régulier hors marques Nestlé Waters : eaux de source locales souvent moins traitées que les marques nationales, traçabilité parfois meilleure. Privilégier le verre au PET pour limiter les microplastiques.",
            effort: "Choix d'achat ciblé",
          },
        ]}
        structural={[
          {
            label: "Investir dans une filtration adaptée si problème ciblé documenté",
            description:
              "Plomb : laisser couler 30 secondes après stagnation suffit dans la majorité des cas, sinon osmoseur ou changement des canalisations. PFAS : osmoseur ou charbon actif certifié NSF/ANSI 53. Pesticides : charbon actif sous évier ou osmoseur. Nitrates : osmoseur (le seul efficace). Voir notre comparatif filtres pour le détail. Un investissement filtration ponctuel (200-1500 €) reste plus rentable que la bouteille sur 5 à 10 ans pour la plupart des ménages.",
            effort: "200-1500 € selon dispositif",
          },
          {
            label: "Préserver l'environnement avec le robinet ou la gourde réutilisable",
            description:
              "Selon l'ADEME, l'empreinte carbone de l'eau en bouteille est de plusieurs centaines de fois supérieure à celle de l'eau du robinet (extraction, mise en bouteille, transport, fin de vie du plastique). Une famille de 4 personnes qui passe au robinet avec une carafe filtrante évite environ 1500 à 3000 bouteilles plastique par an, soit 30 à 60 kg de PET. Une gourde réutilisable en inox ou verre prolonge cet effort hors du logement.",
            effort: "Habitudes durables",
          },
          {
            label: "Limiter les microplastiques par le choix du contenant",
            description:
              "Si vous restez sur la bouteille, privilégier le verre (Vittel verre, Évian verre, certaines marques régionales) au PET, et éviter de conserver les bouteilles en PET au soleil ou dans la voiture par chaleur. Si vous passez au robinet, préférer une carafe en verre à une carafe en plastique, et changer la cartouche de la carafe filtrante selon les recommandations fabricant pour éviter le relargage.",
            effort: "Choix d'usage",
          },
          {
            label: "Surveiller les évolutions réglementaires et les analyses publiques",
            description:
              "L'environnement réglementaire évolue rapidement (PFAS depuis 12/01/2026, métabolites de pesticides élargis, vigilance accrue post-Nestlé). Consulter ponctuellement le site de votre ARS et les enquêtes indépendantes (UFC Que Choisir, 60 Millions de Consommateurs) pour ajuster votre arbitrage selon les nouvelles données disponibles.",
            effort: "Veille citoyenne",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur l'eau en bouteille."
        errors={[
          {
            label: "\"L'eau minérale est forcément plus pure que l'eau du robinet\"",
            explanation:
              "L'affaire Nestlé Waters a démonté cette croyance ancienne. L'eau minérale naturelle doit être de qualité originelle sans traitement, mais cette règle a été contournée massivement et durablement par certains industriels. Selon les enquêtes Le Monde / Radio France de janvier 2024 et le rapport sénatorial de 2024, des contaminations bactériologiques, pesticides et PFAS étaient présentes dans plusieurs sources Nestlé. À l'inverse, l'eau du robinet en France subit en permanence des contrôles ARS publics et exhaustifs.",
          },
          {
            label: "\"L'eau du robinet contient du chlore donc c'est de l'eau de Javel\"",
            explanation:
              "Confusion fréquente. Le chlore libre résiduel maintenu au robinet (0,1 à 0,5 mg/L en France) est 200 à 1000 fois inférieur à la concentration de l'eau de Javel ménagère (24 à 100 g/L). C'est un compromis sanitaire indispensable pour éviter la prolifération bactérienne dans le réseau. Si le goût gêne, une décantation au réfrigérateur ou une carafe filtrante atténue immédiatement la perception, sans qu'il faille passer à la bouteille.",
          },
          {
            label: "\"Boire 1,5 L d'eau minérale par jour couvre tous les apports en minéraux\"",
            explanation:
              "Argument marketing largement exagéré. Les apports minéraux de l'alimentation solide (produits laitiers pour le calcium, légumes verts pour le magnésium, fruits pour le potassium) restent quantitativement bien plus importants que ceux d'une eau minérale, même très chargée. Pour le calcium par exemple, un yaourt apporte autant qu'un litre d'eau minérale fortement chargée. La nutrition d'un adulte en bonne santé n'a généralement pas besoin d'une eau minérale spécifique.",
          },
          {
            label: "\"Les bouteilles en plastique sont sans risque tant qu'elles ne sont pas chauffées\"",
            explanation:
              "Affirmation à nuancer. Les bouteilles en PET (polyéthylène téréphtalate) libèrent des microplastiques dans l'eau même à température ambiante, processus accéléré par la chaleur, les UV et le stockage long. Une étude de 2024 a quantifié des centaines de milliers à des millions de microparticules par litre dans certaines bouteilles. Sans dramatiser un effet sanitaire encore mal documenté, la réduction de l'exposition reste un principe de précaution rationnel : préférer le verre, ne pas exposer les bouteilles au soleil, ne pas les conserver des mois en stock.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur eau du robinet vs eau en bouteille"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet en France",
            description:
              "Système de contrôle ARS, ~70 paramètres surveillés, lecture des analyses publiques pour vérifier votre commune.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Nitrates dans l'eau : nourrissons et femmes enceintes",
            description:
              "Le seul cas où la prudence est explicitement justifiée : seuil OMS 10 mg/L pour les biberons, alternatives en bouteille adaptée.",
            href: "/eau-maison/nitrates-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "PFAS dans l'eau du robinet",
            description:
              "Polluants éternels : seuil européen 0,1 µg/L depuis 2026, zones documentées et solutions de filtration.",
            href: "/eau-maison/pfas-eau-robinet/",
          },
        ]}
      />
    </>
  );
}

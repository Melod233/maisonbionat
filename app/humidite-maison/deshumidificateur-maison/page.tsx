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
  title: "Déshumidificateur maison : quand il sert, comment le choisir",
  description:
    "Avant d'acheter, savoir si un déshumidificateur résout vraiment votre problème : compresseur ou absorption, capacité, consommation, et limites face à une humidité structurelle.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/humidite-maison/deshumidificateur-maison/",
  },
  openGraph: {
    title: "Déshumidificateur maison : quand il sert, comment le choisir",
    description:
      "Avant d'acheter, savoir si un déshumidificateur résout vraiment votre problème : compresseur ou absorption, capacité, consommation, et limites face à une humidité structurelle.",
    url: "https://www.maisonbionat.fr/humidite-maison/deshumidificateur-maison/",
  },
};

const faqItems = [
  {
    question: "Un déshumidificateur règle-t-il un problème d'humidité ?",
    answer:
      "Oui pour un excès ponctuel ou localisé : intersaison humide, cave, buanderie, séchage de linge en intérieur, pièce mal exposée. Non pour une cause structurelle : remontées capillaires, infiltrations, condensation due à un défaut d'isolation. L'ADEME rappelle qu'un déshumidificateur ne remplace ni une ventilation efficace, ni un diagnostic humidité quand le taux reste élevé sans cause évidente.",
  },
  {
    question: "Compresseur ou absorption : lequel choisir ?",
    answer:
      "Au-dessus de 15 °C, dans une pièce chauffée, le compresseur (à condensation) est plus efficace par litre d'eau extrait et moins coûteux à l'achat. En dessous de 15 °C (cave, garage, pièce non chauffée), l'absorption (à dessiccant, souvent zéolite) reste efficace là où le compresseur perd en rendement. Pour un usage en logement classique, le compresseur couvre la majorité des besoins.",
  },
  {
    question: "Quelle capacité pour quelle pièce ?",
    answer:
      "La capacité indiquée en litres par jour est mesurée dans des conditions optimales (30 °C, 80 % HR). En usage réel à 20 °C et 60 % HR, comptez environ un tiers à la moitié de cette valeur. Repère pratique : 10 L/24 h pour 30 à 50 m² peu humides, 16 à 20 L/24 h pour 50 à 80 m² ou pièces très humides. Surdimensionner légèrement permet à l'appareil de tourner moins longtemps et plus efficacement.",
  },
  {
    question: "Combien consomme un déshumidificateur ?",
    answer:
      "Un modèle compresseur de 16 L/24 h consomme typiquement entre 200 et 350 W en fonctionnement, soit environ 0,2 à 0,4 kWh par heure d'utilisation. Sans hygrostat, l'appareil tourne en continu et la facture grimpe vite. Avec un hygrostat réglé sur 50-55 % HR, l'appareil ne fonctionne qu'au besoin, ce qui réduit la consommation de 60 à 80 % selon les sources fabricants.",
  },
];

export default function DeshumidificateurMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    {
      name: "Déshumidificateur maison : quand il sert, comment le choisir",
      href: "https://www.maisonbionat.fr/humidite-maison/deshumidificateur-maison/",
    },
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
        tag="Guide pratique"
        title="Déshumidificateur dans la maison : quand il aide, quand il ne sert à rien, comment le choisir"
        quickAnswer="Le déshumidificateur est utile dans des cas précis : intersaison humide, cave, buanderie, séchage de linge en intérieur, pièce mal exposée. Il ne traite jamais une cause structurelle (remontées capillaires, infiltrations, défaut d'isolation, ventilation absente) : dans ce cas il masque le symptôme sans rien résoudre, et la facture électrique grimpe pour rien. L'ADEME rappelle qu'une ventilation correcte reste toujours le premier levier. Quand l'achat est justifié, on choisit un modèle à compresseur pour les pièces chauffées (plus efficace au-dessus de 15 °C) ou à absorption pour les espaces froids, dimensionné selon le volume et toujours équipé d'un hygrostat pour limiter la consommation."
        stats={[
          {
            value: "50-55 %",
            label: "consigne d'hygrostat recommandée pour un fonctionnement efficace sans excès",
          },
          {
            value: "15 °C",
            label: "seuil au-dessus duquel un modèle à compresseur est plus efficace qu'un modèle à absorption",
          },
          {
            value: "−60 à 80 %",
            label: "réduction de consommation grâce à un hygrostat (vs fonctionnement continu)",
          },
          {
            value: "30 °C / 80 %",
            label: "conditions de mesure de la capacité fabricant (capacité réelle souvent moitié)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Quand un déshumidificateur sert vraiment" },
          { id: "signes", label: "Cas types d'usage" },
          { id: "causes", label: "Pourquoi ce n'est pas la bonne réponse" },
          { id: "actions", label: "Choisir et utiliser correctement" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'un déshumidificateur fait, et ce qu'il ne fait pas."
        description="Un déshumidificateur extrait l'eau de l'air ambiant : il aspire l'air d'une pièce, le fait passer sur une surface froide (modèle à compresseur) ou sur un dessiccant (modèle à absorption), récupère la condensation dans un réservoir et renvoie l'air asséché. Il ne renouvelle pas l'air, ne traite ni les COV ni les odeurs, et ne corrige aucune cause structurelle d'humidité. C'est un outil de complément, pas de fond. Il prend tout son sens quand un excès est ponctuel ou local, dans un contexte où la ventilation est correcte par ailleurs."
        variants={[
          {
            indicator: "À compresseur",
            name: "Le plus courant en logement",
            description:
              "Fonctionne par condensation sur surface froide. Très efficace au-dessus de 15 °C, donc dans toutes les pièces chauffées : séjour, chambre, salle de bain. Capacité courante de 10 à 20 L/24 h. Bruit modéré (40-50 dB), consommation moyenne 200-350 W. C'est le bon choix pour un usage en pièces de vie.",
          },
          {
            indicator: "À absorption",
            name: "Pour pièces froides",
            description:
              "Fait passer l'air sur un dessiccant (zéolite ou silica gel) qui capte l'humidité, puis régénère ce dessiccant en chauffant. Plus silencieux, plus léger, fonctionne sans perte d'efficacité en dessous de 15 °C. Idéal pour cave, garage, sous-sol non chauffé, véranda en hiver. Consommation plus élevée à capacité égale en pièce chauffée.",
          },
          {
            indicator: "Chimique (absorbeur passif)",
            name: "Pour très petits volumes",
            description:
              "Petits bacs à sels (chlorure de calcium) qui captent l'humidité par dissolution. Pas d'électricité, capacité très limitée (quelques décilitres par mois). Utile dans un placard, une voiture, un mobil-home, un cabanon. Ne convient pas pour traiter une pièce de vie.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les situations où un déshumidificateur est réellement le bon outil."
        subtitle="Bien dimensionné, il règle un problème ciblé. Mal dimensionné ou mal posé, il maquille un symptôme sans rien résoudre."
        signs={[
          {
            label: "Cave, sous-sol ou garage avec hygrométrie chronique > 70 %",
            description:
              "Espaces non chauffés, peu ventilés, souvent enterrés ou semi-enterrés. Un modèle à absorption maintient une HR sous 60 % et protège ce qui y est stocké (matériel, papiers, vélos). C'est le cas d'usage le plus pertinent.",
            severity: "modéré",
          },
          {
            label: "Buanderie ou pièce de séchage de linge",
            description:
              "Le séchage en intérieur libère plusieurs litres d'eau dans l'air. Un déshumidificateur dans une buanderie fermée capte cette eau et l'évacue vers le réservoir, plus efficacement que la seule aération en hiver. À combiner avec une extraction si elle existe.",
            severity: "léger",
          },
          {
            label: "Pièce de vie en intersaison ou en climat humide",
            description:
              "Au printemps et à l'automne, dans certaines régions (façade atlantique, régions humides), l'air extérieur reste à 70-80 % HR plusieurs semaines. Un déshumidificateur dans le séjour quelques heures par jour ramène l'ambiance dans la plage 40-60 % sans avoir à chauffer pour assécher.",
            severity: "léger",
          },
          {
            label: "Logement temporairement humide après dégât des eaux ou travaux",
            description:
              "Après une fuite, un sinistre ou des travaux humides (chape, enduit, peinture), un déshumidificateur accélère le séchage des matériaux et limite le développement de moisissures. C'est un usage temporaire (quelques jours à quelques semaines), pas une solution durable.",
            severity: "modéré",
          },
          {
            label: "Pièce mal exposée chroniquement (nord, peu chauffée)",
            description:
              "Une chambre exposée nord avec parois froides peut conserver une HR élevée même avec une ventilation correcte. Un déshumidificateur peut y compléter la VMC en attendant un traitement structurel (renforcement isolation, suppression pont thermique).",
            severity: "léger",
          },
          {
            label: "À ne pas utiliser dans : bain en cours, présence de fuite active, taux d'humidité < 50 %",
            description:
              "Un déshumidificateur ne sert à rien tant qu'une source d'eau n'est pas neutralisée. Il ne sert à rien non plus en dessous de 50 % HR (l'air est déjà sec). Et il assèche l'air si on le fait tourner sans hygrostat dans une pièce déjà équilibrée, ce qui devient inconfortable et coûteux.",
            severity: "critique",
          },
        ]}
        footerNote="Avant d'acheter, vérifiez d'abord avec un hygromètre que le taux dépasse durablement 60 % et qu'aucune cause structurelle n'est en jeu."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi un déshumidificateur ne résout pas une humidité structurelle."
        subtitle="Quand l'humidité vient du bâti, l'appareil tourne sans fin sans corriger la cause. C'est le piège le plus fréquent."
        causes={[
          {
            number: "01",
            cause: "Remontées capillaires dans les murs",
            explanation:
              "L'eau du sol monte dans les murs par capillarité, parfois sur 1 à 2 mètres de hauteur. Le mur lui-même reste imbibé. Un déshumidificateur ambiant assèche l'air mais l'eau continue de migrer dans la maçonnerie, et la vapeur réémise dans la pièce maintient le cycle. La solution est un traitement spécifique des murs (injection de résine, drainage périphérique).",
            frequency: "fréquent",
          },
          {
            number: "02",
            cause: "Infiltrations par toiture, façade ou menuiseries",
            explanation:
              "Une fuite ponctuelle ou diffuse alimente continuellement le logement en eau. Un déshumidificateur peut masquer l'odeur ou faire baisser le taux mesuré, mais le bâti continue de se dégrader. Identification de la fuite et réparation sont prioritaires : tout autre approche est un pansement coûteux.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Condensation sur parois mal isolées",
            explanation:
              "Un mur extérieur non isolé, un pont thermique au niveau d'une dalle, un simple vitrage : l'air chaud humide condense au contact de la surface froide. Un déshumidificateur baisse marginalement le risque mais ne supprime pas le point froid. Le bon traitement est l'amélioration de l'isolation locale.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Ventilation absente, bouchée ou sous-dimensionnée",
            explanation:
              "Si la VMC est en panne, les bouches obstruées ou la hotte non raccordée à l'extérieur, le logement accumule en permanence de la vapeur. Un déshumidificateur compense partiellement mais consomme beaucoup pour faire le travail que devrait faire l'extraction. Réparer ou améliorer la ventilation est presque toujours plus économique sur 3-5 ans.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Habitudes qui apportent énormément de vapeur",
            explanation:
              "Séchage du linge en chambre fermée, douches sans extraction, cuisson sans hotte, plantes vertes très nombreuses : ces habitudes peuvent à elles seules générer 10 à 15 L d'eau par jour dans l'air. Avant le déshumidificateur, ajuster ces gestes coûte zéro et réduit souvent l'excès.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Bien choisir et bien utiliser un déshumidificateur."
        immediate={[
          {
            label: "Vérifier d'abord avec un hygromètre et corriger les habitudes",
            description:
              "Avant tout achat, mesurer le taux pendant 48 heures dans la pièce concernée. Si la cause est évidente (séchage de linge, hotte non raccordée, VMC bouchée), commencez par la corriger. Un déshumidificateur acheté sans diagnostic règle rarement le bon problème.",
            effort: "Gratuit, 2 jours d'observation",
          },
          {
            label: "Choisir le type adapté à la température de la pièce",
            description:
              "Compresseur pour pièces chauffées au-dessus de 15 °C : séjour, chambre, salle de bain. Absorption pour les espaces froids : cave, garage, sous-sol non chauffé. Un compresseur en cave à 8 °C tourne pour rien et peut givrer.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Dimensionner la capacité en fonction du volume et du niveau d'humidité",
            description:
              "Repères : 8-10 L/24 h pour 30 m² d'humidité modérée, 12-16 L/24 h pour 50 m², 20 L/24 h ou plus pour 80 m² ou taux très élevés. Surdimensionner légèrement permet à l'appareil de tourner moins, ce qui réduit le bruit et l'usure.",
            effort: "Surcoût modéré à l'achat, économie en usage",
          },
          {
            label: "Activer l'hygrostat et le régler sur 50-55 %",
            description:
              "L'hygrostat coupe l'appareil dès que la cible est atteinte et le redémarre seulement si la HR remonte. C'est le critère le plus important pour limiter la consommation et le bruit. Un appareil sans hygrostat n'est viable que pour un usage très ponctuel.",
            effort: "Réglage initial, gratuit",
          },
        ]}
        structural={[
          {
            label: "Faire un diagnostic humidité avant d'investir",
            description:
              "Si la HR dépasse 60 % de manière durable et inexpliquée, un diagnostic humidité par un professionnel identifie la cause structurelle. Mieux vaut investir 200-400 € dans un diagnostic que 300 € dans un déshumidificateur qui tournera sans corriger le problème de fond.",
            effort: "Investissement, intervention spécialisée",
          },
          {
            label: "Améliorer la ventilation avant d'envisager un appareil",
            description:
              "Une VMC fonctionnelle, des bouches d'extraction propres et une hotte raccordée à l'extérieur résolvent la plupart des excès d'humidité dans les logements récents. Selon l'ADEME, ces actions précèdent toujours le recours à un appareil mobile.",
            effort: "Entretien à coût modéré ou intervention",
          },
          {
            label: "Prévoir l'évacuation continue pour un usage prolongé",
            description:
              "Sur les modèles équipés, raccorder la sortie d'eau à une évacuation (siphon de buanderie, lavabo) supprime la corvée de vidange du réservoir. Indispensable si l'appareil tourne plusieurs heures par jour, sinon le réservoir se remplit et l'appareil s'arrête.",
            effort: "Installation initiale",
          },
          {
            label: "Entretenir filtre et bac, contrôler le rendement",
            description:
              "Filtre nettoyé tous les 1 à 3 mois, bac vidé et rincé régulièrement, contrôle annuel du débit d'air. Un appareil mal entretenu perd 20-40 % de capacité en deux ans, consomme plus pour un résultat moindre, et peut diffuser des bactéries depuis un bac stagnant.",
            effort: "Entretien régulier",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le déshumidificateur."
        errors={[
          {
            label: "\"Il assainit l'air\"",
            explanation:
              "Faux. Un déshumidificateur retire de l'eau, rien d'autre. Il ne filtre pas les particules fines, ne capture pas les COV, ne neutralise pas les odeurs. Pour ces usages, il faut un purificateur d'air ou de l'aération, pas un déshumidificateur.",
          },
          {
            label: "\"Plus la capacité affichée est grande, mieux c'est\"",
            explanation:
              "La capacité fabricant est mesurée à 30 °C / 80 % HR, conditions très éloignées d'un logement français. En usage réel à 20 °C / 60 % HR, l'appareil extrait souvent moitié moins. Surdimensionner sans excès est utile, mais payer pour 30 L/24 h qui n'extraient en pratique que 12 L/24 h est inefficace.",
          },
          {
            label: "\"Un déshumidificateur règle les moisissures\"",
            explanation:
              "Il limite leur réapparition en abaissant la HR, mais ne traite ni la cause ni les colonies déjà installées. Les moisissures existantes doivent être nettoyées (eau et savon, ou produits adaptés selon l'ampleur), et la cause structurelle traitée, sinon elles reviennent dès l'arrêt de l'appareil.",
          },
          {
            label: "\"Il remplace une VMC\"",
            explanation:
              "Non. Un déshumidificateur ne renouvelle pas l'air, n'évacue pas le CO2, le formaldéhyde ou les autres polluants intérieurs. Couper la VMC en se reposant sur un déshumidificateur dégrade la qualité de l'air en quelques jours, même si l'humidité reste maîtrisée.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le déshumidificateur dans la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Taux d'humidité idéal : repères pièce par pièce",
            description:
              "Avant tout équipement, savoir où on doit arriver : la plage 40-60 % et ses variations selon la pièce et la saison.",
            href: "/humidite-maison/taux-humidite-ideal/",
          },
          {
            tag: "Humidité maison",
            title: "Diagnostic humidité : repérer une cause structurelle",
            description:
              "Si le taux reste élevé sans cause évidente, identifier remontées capillaires, infiltrations ou condensation avant tout achat d'appareil.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
          {
            tag: "Humidité maison",
            title: "Ventilation et humidité : ce qui marche vraiment",
            description:
              "VMC, hotte, aération naturelle : la première ligne de défense, à mettre en ordre avant d'envisager un déshumidificateur.",
            href: "/humidite-maison/ventilation-humidite/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Chlore dans l'eau du robinet : goût, sécurité sanitaire et solutions",
  description:
    "Pourquoi l'eau du robinet est chlorée, ce que dit la réglementation française (arrêté 11 janvier 2007), les sous-produits de désinfection et comment atténuer le goût simplement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/chlore-eau-robinet/",
  },
  openGraph: {
    title: "Chlore dans l'eau du robinet : goût, sécurité sanitaire et solutions",
    description:
      "Pourquoi l'eau du robinet est chlorée, ce que dit la réglementation française (arrêté 11 janvier 2007), les sous-produits de désinfection et comment atténuer le goût simplement.",
    url: "https://www.maisonbionat.fr/eau-maison/chlore-eau-robinet/",
  },
};

const faqItems = [
  {
    question: "Pourquoi y a-t-il du chlore dans l'eau du robinet ?",
    answer:
      "Le chlore (sous forme de chlore libre, hypochlorite ou dioxyde de chlore selon les communes) est ajouté en fin de traitement pour assurer la sécurité microbiologique de l'eau pendant tout son trajet dans les canalisations, depuis la station de production jusqu'à votre robinet. Sans cette désinfection résiduelle, des bactéries pathogènes (Escherichia coli, légionelles, entérocoques) pourraient proliférer dans le réseau, en particulier dans les zones rurales avec de longues canalisations ou les bras morts du réseau. Le chlore n'élimine pas tous les micro-organismes mais maintient un niveau de désinfection suffisant pour prévenir les épidémies. C'est un compromis sanitaire validé par l'OMS et systématiquement appliqué dans les pays développés.",
  },
  {
    question: "Quelle est la limite de chlore réglementaire en France ?",
    answer:
      "La réglementation française, fixée par l'arrêté du 11 janvier 2007 (modifié par l'arrêté du 30 décembre 2022) en application du Code de la santé publique (articles R.1321-2 et suivants), ne fixe pas de limite numérique pour le chlore libre ou total dans l'eau du robinet. Elle impose uniquement un critère organoleptique : « absence d'odeur ou de saveur désagréable et pas de changement anormal ». En pratique, les distributeurs maintiennent un chlore libre résiduel entre 0,1 et 0,5 mg/L au robinet, ce qui assure la désinfection sans gêne notable. L'OMS considère qu'une concentration jusqu'à 5 mg/L de chlore est sans risque sanitaire pour la consommation humaine.",
  },
  {
    question: "Le chlore dans l'eau du robinet présente-t-il un risque pour la santé ?",
    answer:
      "Aux concentrations utilisées en France (0,1 à 0,5 mg/L), le chlore lui-même n'a pas d'effet sanitaire documenté. Le sujet plus délicat concerne les sous-produits de désinfection, en particulier les trihalométhanes (THM) formés quand le chlore réagit avec des matières organiques résiduelles. Ces composés sont classés cancérogènes possibles (groupe 2B du CIRC pour le chloroforme). La réglementation européenne et française fixe une limite stricte de 100 µg/L pour la somme des THM au robinet, et les distributeurs surveillent ce paramètre en permanence. Pour les ménages préoccupés, une simple décantation ou filtration au charbon actif élimine la quasi-totalité du chlore et de ses sous-produits.",
  },
  {
    question: "Comment se débarrasser du goût de chlore facilement ?",
    answer:
      "Quatre solutions par ordre de simplicité et coût croissants. 1) Décantation : verser l'eau dans une carafe ouverte, laisser reposer 30 minutes à 1 heure au réfrigérateur, le chlore libre s'évapore naturellement. C'est gratuit et efficace pour 80 à 90 % du chlore résiduel. 2) Carafe filtrante avec cartouche au charbon actif : retient le chlore et la plupart des sous-produits, coût 30-50 € plus cartouches. 3) Filtre sous évier au charbon actif : 100-300 €, plus efficace et durable, idéal en eau fortement chlorée. 4) Osmoseur : surdimensionné pour cette seule fonction, à réserver aux ménages cumulant plusieurs préoccupations (chlore + métaux + PFAS par exemple). Pas besoin d'investir lourd : la décantation ou la carafe couvre la majorité des cas.",
  },
];

export default function ChloreEauRobinetPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Chlore dans l'eau du robinet",
      href: "https://www.maisonbionat.fr/eau-maison/chlore-eau-robinet/",
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
        tag="Désinfection résiduelle"
        title="Chlore dans l'eau du robinet : pourquoi il est là, ce qu'il faut savoir, comment l'atténuer"
        quickAnswer="Le chlore est ajouté en fin de traitement de l'eau du robinet pour maintenir la désinfection pendant le transport dans les canalisations, depuis la station jusqu'au logement. Sans ce résiduel de chlore, des bactéries pathogènes pourraient proliférer dans les longs réseaux ruraux ou les bras morts. La réglementation française (arrêté du 11 janvier 2007, en application des articles R.1321-2 et suivants du Code de la santé publique) ne fixe pas de limite numérique pour le chlore lui-même mais un critère organoleptique : pas d'odeur ni de saveur désagréable. En pratique, les distributeurs maintiennent 0,1 à 0,5 mg/L de chlore libre résiduel au robinet. L'OMS considère 5 mg/L comme sans risque pour la santé. Le sujet de vigilance porte sur les sous-produits de désinfection (trihalométhanes) classés cancérogènes possibles par le CIRC, dont la somme est plafonnée à 100 µg/L. Pour atténuer le goût, la décantation 30 minutes au réfrigérateur ou un filtre au charbon actif suffisent largement, sans investissement lourd."
        stats={[
          {
            value: "0,1-0,5 mg/L",
            label: "concentration usuelle de chlore libre résiduel au robinet en France",
          },
          {
            value: "Aucune",
            label: "limite numérique réglementaire pour le chlore (critère organoleptique uniquement)",
          },
          {
            value: "5 mg/L",
            label: "valeur guide OMS pour le chlore dans l'eau de boisson",
          },
          {
            value: "100 µg/L",
            label: "limite réglementaire pour la somme des trihalométhanes au robinet",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le chlore" },
          { id: "signes", label: "Signes et perception" },
          { id: "causes", label: "Pourquoi le goût varie" },
          { id: "actions", label: "Atténuer le goût" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Le chlore dans l'eau du robinet : un compromis sanitaire encadré."
        description="Le chlore et ses dérivés (hypochlorite de sodium, dioxyde de chlore, monochloramine) sont utilisés depuis le début du XXᵉ siècle pour désinfecter l'eau potable. Leur action est à la fois immédiate (destruction des bactéries en station de traitement) et résiduelle (maintien d'un effet désinfectant tout au long du parcours dans les canalisations). Sans chlore résiduel, le risque de recontamination dans le réseau est élevé, en particulier sur les longues canalisations rurales, les bras morts, et les périodes de faible débit où l'eau stagne. Aux concentrations utilisées en France, le chlore est sans risque sanitaire pour la consommation humaine. Le sujet plus délicat concerne les sous-produits de désinfection, formés quand le chlore réagit avec des matières organiques (acides humiques, fulviques) résiduelles dans l'eau brute. Ces sous-produits, dont les trihalométhanes (THM) sont les plus surveillés, font l'objet de limites réglementaires strictes."
        variants={[
          {
            indicator: "0,1-0,5 mg/L",
            name: "Chlore libre résiduel au robinet (France)",
            description:
              "Plage usuelle maintenue par les distributeurs pour assurer la désinfection sans gêne organoleptique notable. Cette valeur n'est pas une limite réglementaire mais une bonne pratique professionnelle. Plus l'extrémité du réseau est éloignée de la station, plus la concentration tend à descendre, parfois jusqu'à des valeurs faibles en bout de réseau rural.",
          },
          {
            indicator: "Critère organoleptique",
            name: "Exigence réglementaire française",
            description:
              "Arrêté du 11 janvier 2007, modifié par l'arrêté du 30 décembre 2022, en application des articles R.1321-2, R.1321-3, R.1321-7 et R.1321-38 du Code de la santé publique. La réglementation impose uniquement « absence d'odeur ou de saveur désagréable et pas de changement anormal ». Aucun seuil numérique pour le chlore libre ou total. Les non-conformités sont jugées par le ressenti du consommateur et l'expertise des ARS.",
          },
          {
            indicator: "5 mg/L",
            name: "Valeur guide OMS pour le chlore",
            description:
              "L'Organisation mondiale de la santé considère qu'une concentration jusqu'à 5 mg/L de chlore résiduel est sans risque sanitaire pour la consommation humaine, y compris à long terme. Les valeurs françaises (0,1 à 0,5 mg/L) sont donc 10 à 50 fois inférieures à cette valeur de référence.",
          },
          {
            indicator: "100 µg/L",
            name: "Limite réglementaire des trihalométhanes (THM)",
            description:
              "Somme de 4 composés (chloroforme, bromodichlorométhane, dibromochlorométhane, bromoforme) issus de la réaction du chlore avec les matières organiques. Limite de qualité fixée par l'arrêté du 11 janvier 2007. Le chloroforme est classé en groupe 2B du CIRC (cancérogène possible pour l'homme). Les distributeurs surveillent ce paramètre en permanence ; les dépassements sont rares et déclenchent une procédure de mise en conformité.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Comment se manifeste le chlore au robinet."
        subtitle="Les signes du chlore dans l'eau sont essentiellement organoleptiques. Leur intensité varie selon la saison, l'éloignement du réseau et les conditions de distribution."
        signs={[
          {
            label: "Odeur d'eau de Javel ou de piscine au robinet",
            description:
              "Caractéristique du chlore libre. L'intensité varie selon la concentration résiduelle (0,1 à 0,5 mg/L) et la perception individuelle. Plus marquée à l'ouverture matinale du robinet (eau qui a stagné dans les canalisations privatives) et en été (températures élevées qui dégagent le chlore). Pas de risque sanitaire mais inconfort réel pour certains consommateurs.",
            severity: "léger",
          },
          {
            label: "Goût de chlore qui s'atténue après quelques minutes en carafe ouverte",
            description:
              "Confirmation que c'est bien du chlore libre, qui s'évapore au contact de l'air. Si le goût ne disparaît pas après 1-2 heures de décantation, il peut s'agir de chloramines (forme combinée du chlore plus stable) ou d'un autre paramètre à investiguer. La chloramine ne s'évapore pas à la même vitesse et nécessite filtration au charbon actif.",
            severity: "léger",
          },
          {
            label: "Goût plus prononcé en début de matinée ou après absence prolongée",
            description:
              "L'eau qui stagne dans les canalisations privatives concentre les ions chlore et certains sous-produits. Laisser couler 30 secondes à 1 minute avant utilisation pour la boisson, surtout après une absence de plusieurs heures. Pratique recommandée par toutes les ARS, gratuite et immédiate.",
            severity: "léger",
          },
          {
            label: "Variation saisonnière de l'odeur de chlore",
            description:
              "En été, la chaleur favorise la prolifération bactérienne dans le réseau et les distributeurs renforcent souvent la chloration préventive. Vous pouvez constater un goût plus marqué en juillet-août. À l'inverse, en hiver, les températures basses limitent l'évaporation du chlore : odeur plus prononcée à l'ouverture mais qui se dissipe vite.",
            severity: "léger",
          },
          {
            label: "Accentuation du goût après travaux sur le réseau ou pic de chloration",
            description:
              "Après des travaux ou un incident sanitaire (pollution ponctuelle), les distributeurs réalisent une chloration de choc pour assainir les canalisations. L'odeur peut être nettement plus forte pendant 24-72 heures, sans risque sanitaire mais inconfortable. L'ARS et le distributeur communiquent généralement à ce sujet auprès des abonnés concernés.",
            severity: "modéré",
          },
          {
            label: "Aucune perception de chlore dans certains secteurs",
            description:
              "Cas fréquent en bout de réseau rural ou dans les communes alimentées par eau souterraine peu chargée en matières organiques (besoin de désinfection moins fort). Le chlore libre résiduel peut descendre à des valeurs très faibles, parfois proches de la limite de quantification. Cela ne signifie pas absence de désinfection : la microbiologie reste contrôlée et conforme.",
            severity: "léger",
          },
        ]}
        footerNote="Le chlore est un paramètre organoleptique qui dépend fortement de la sensibilité individuelle. Certaines personnes le perçoivent à 0,1 mg/L, d'autres ne le détectent pas à 0,5 mg/L. Si la gêne est constante et significative, des solutions simples existent (décantation, charbon actif) sans qu'il faille remettre en cause la qualité sanitaire de l'eau."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi l'odeur ou le goût de chlore peut varier."
        subtitle="Les variations perçues au robinet ont des causes identifiables, qui ne traduisent pas un problème sanitaire mais une réalité technique du réseau et de la saison."
        causes={[
          {
            number: "01",
            cause: "Distance entre la station de traitement et votre robinet",
            explanation:
              "Le chlore libre s'évanouit lentement le long du réseau (réaction avec les matières organiques résiduelles, contact avec les parois des canalisations). Les usagers proches de la station perçoivent souvent davantage de chlore que ceux situés en bout de réseau. Une commune peut donc avoir des perceptions très contrastées selon les quartiers, même avec une eau strictement identique en sortie de station.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Saison et température de l'eau",
            explanation:
              "En été, la température élevée accélère l'évaporation du chlore mais favorise aussi la prolifération bactérienne dans le réseau, ce qui pousse les distributeurs à augmenter la dose préventive en station. En hiver, la dose injectée est souvent plus faible mais la stabilité du chlore résiduel est meilleure. Résultat : perception saisonnière variable selon les conditions locales.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Stagnation dans vos canalisations privatives",
            explanation:
              "Si personne n'utilise l'eau pendant plusieurs heures (nuit, journée de travail), elle stagne dans les canalisations entre le compteur et le robinet. Cette stagnation concentre certains sous-produits et peut accentuer la perception du chlore et d'autres composés. Solution simple : laisser couler 30 secondes à 1 minute avant boisson après stagnation prolongée.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Travaux sur le réseau ou chloration de choc",
            explanation:
              "Lors d'incidents (rupture de canalisation, contamination ponctuelle, intervention de maintenance), les distributeurs procèdent à une chloration de choc pour assainir le tronçon concerné. La concentration peut alors monter ponctuellement bien au-dessus de la valeur usuelle. L'ARS et le distributeur informent dans ces cas, et la situation revient à la normale en 24 à 72 heures.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Utilisation de chloramines plutôt que de chlore libre",
            explanation:
              "Certains réseaux utilisent la monochloramine, forme combinée plus stable que le chlore libre, particulièrement adaptée aux longs réseaux. Les chloramines persistent davantage dans le réseau et ne s'évaporent pas en carafe ouverte. La perception est différente : l'odeur est moins « piquante » mais plus persistante. Information disponible auprès du distributeur ou de l'ARS.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Atténuer le chlore au robinet selon votre situation."
        immediate={[
          {
            label: "Décanter l'eau 30 minutes à 1 heure au réfrigérateur",
            description:
              "Méthode la plus simple et la plus efficace contre le chlore libre. Verser l'eau dans une carafe ouverte ou faiblement couverte, laisser reposer 30 minutes à 1 heure au réfrigérateur. Élimine 80 à 90 % du chlore libre par évaporation naturelle. Inefficace sur les chloramines (à filtrer au charbon actif si présentes).",
            effort: "Gratuit, 30 minutes",
          },
          {
            label: "Laisser couler le robinet 30 secondes après stagnation",
            description:
              "Après une nuit ou une journée d'absence, l'eau stagnante dans les canalisations privatives concentre certains composés. Laisser couler le filet d'eau jusqu'à ce qu'elle soit franchement froide (signe que c'est l'eau qui vient du réseau, pas celle qui stagnait). Pratique gratuite et recommandée par toutes les ARS, qui élimine simultanément traces de plomb éventuelles et goût de chlore concentré.",
            effort: "30 secondes par utilisation",
          },
          {
            label: "Conserver l'eau au réfrigérateur dans une carafe en verre",
            description:
              "L'eau froide dégage moins le chlore mais surtout, elle masque mieux son goût. Une carafe en verre fermée au réfrigérateur garde l'eau fraîche et palatable pendant 24 à 48 heures. Préférer le verre au plastique pour éviter le relargage de microplastiques (problème documenté sur les carafes filtrantes plastique elles-mêmes).",
            effort: "Habitude quotidienne",
          },
          {
            label: "Vérifier le type de chloration utilisé par votre distributeur",
            description:
              "Si la décantation n'élimine pas le goût après 1-2 heures, votre distributeur utilise peut-être de la monochloramine (forme combinée plus stable). Information disponible sur le site de votre ARS ou par appel au service abonnés du distributeur. Cette information change la stratégie : la chloramine impose une filtration au charbon actif (la décantation est inefficace).",
            effort: "5-10 minutes",
          },
        ]}
        structural={[
          {
            label: "Installer une carafe filtrante au charbon actif",
            description:
              "Solution la plus simple pour un usage régulier. Le charbon actif granulaire retient bien le chlore libre et la plupart des sous-produits de désinfection (THM). Coût 30-50 € pour la carafe, plus 5-10 € par cartouche tous les 1 à 2 mois. Suivre rigoureusement les recommandations ANSES : changer la cartouche selon les indications fabricant, conserver la carafe au réfrigérateur, consommer l'eau dans les 24 heures pour éviter le risque de relargage.",
            effort: "Investissement 30-50 €",
          },
          {
            label: "Installer un filtre sous évier au charbon actif",
            description:
              "Pour un usage intensif et durable, le filtre sous évier offre un meilleur débit, une plus grande capacité de filtration et un coût d'usage inférieur à la carafe sur le long terme. Compter 100-300 € posé, cartouches 30-80 € à changer tous les 6-12 mois selon la consommation. Solution adaptée si plusieurs personnes consomment de l'eau filtrée au quotidien et si la chloration locale est notablement perceptible.",
            effort: "Investissement 100-300 €",
          },
          {
            label: "Choisir un filtre certifié NSF/ANSI 42 ou 53",
            description:
              "Ces certifications garantissent une efficacité documentée sur le chlore (NSF/ANSI 42, paramètre esthétique) et sur les sous-produits de désinfection (NSF/ANSI 53, paramètre santé). Préférer les filtres certifiés aux dispositifs sans données vérifiées. Le surcoût certifié reste modeste et offre une garantie réelle de performance. La marque elle-même importe moins que la certification du modèle précis.",
            effort: "Choix d'achat ciblé",
          },
          {
            label: "Ne pas surinvestir : pas d'osmoseur juste pour le chlore",
            description:
              "L'osmose inverse (400-1500 €) est très efficace contre le chlore mais aussi contre tout le reste, ce qui est disproportionné si le chlore est la seule préoccupation. Réserver l'osmoseur aux cas où plusieurs paramètres sont en cause (PFAS, métaux lourds, nitrates avec préoccupation forte). Pour le chlore seul, charbon actif suffit largement.",
            effort: "Éviter le surinvestissement",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le chlore dans l'eau."
        errors={[
          {
            label: "\"L'odeur de chlore prouve que l'eau est dangereuse\"",
            explanation:
              "Au contraire, c'est plutôt rassurant : la présence de chlore libre résiduel atteste qu'une désinfection est maintenue jusqu'au robinet. Les concentrations utilisées en France (0,1 à 0,5 mg/L) sont 10 à 50 fois inférieures à la valeur guide OMS de 5 mg/L. La gêne est uniquement organoleptique. Une eau sans aucune odeur de chlore en bout de réseau rural pose au contraire la question de l'efficacité de la désinfection résiduelle.",
          },
          {
            label: "\"On peut supprimer toute désinfection avec un filtre domestique\"",
            explanation:
              "Faux et contre-productif. Filtrer le chlore au robinet est sans risque pour la consommation immédiate (l'eau qui sort est désinfectée par la station). Mais la désinfection résiduelle protège tout le reste du réseau, pas votre verre. Sans chlore en amont, des bactéries pourraient proliférer dans les canalisations communales. Le chlore reste indispensable au niveau collectif, même si vous le retirez au point d'usage.",
          },
          {
            label: "\"Faire bouillir l'eau élimine le chlore\"",
            explanation:
              "L'ébullition élimine effectivement le chlore libre (volatilisé par la chaleur en quelques minutes), mais elle est surdimensionnée pour ce seul objectif et concentre par évaporation les autres paramètres dissous (calcaire, métaux, nitrates). À réserver à la désinfection en cas d'avis sanitaire (épidémie, contamination microbiologique). Pour le simple goût de chlore, la décantation au réfrigérateur est plus simple et plus économique.",
          },
          {
            label: "\"Les sous-produits chlorés rendent l'eau du robinet cancérogène\"",
            explanation:
              "Affirmation excessive. Les trihalométhanes sont effectivement classés en groupe 2B du CIRC (cancérogène possible pour l'homme), mais à des niveaux d'exposition très supérieurs à ceux observés au robinet en France. La limite réglementaire de 100 µg/L pour la somme des THM est strictement appliquée et les dépassements sont rares. À titre de comparaison, l'exposition aux THM par la peau et les voies respiratoires lors d'une douche peut être supérieure à celle par ingestion, ce qui relativise l'importance de la filtration de l'eau de boisson.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le chlore dans l'eau"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Filtre à eau du robinet : carafe, charbon actif, osmoseur",
            description:
              "Comparatif des solutions adaptées au chlore et aux sous-produits de désinfection, avec les recommandations ANSES sur l'usage rigoureux.",
            href: "/eau-maison/filtre-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Qualité de l'eau du robinet en France",
            description:
              "Le système de contrôle ARS, les paramètres surveillés en permanence et la lecture des analyses publiques de votre commune.",
            href: "/eau-maison/qualite-eau-robinet/",
          },
          {
            tag: "Eau maison",
            title: "Eau du robinet ou eau en bouteille ?",
            description:
              "Comparatif honnête entre les deux solutions : santé, coût, environnement, traçabilité.",
            href: "/eau-maison/eau-bouteille-vs-robinet/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Acariens dans la maison : allergènes, literie et leviers efficaces",
  description:
    "Première cause d'allergie respiratoire en logement. Comprendre les conditions de prolifération, traiter la literie et la chambre, et limiter durablement l'exposition aux allergènes.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/air-interieur/acariens-maison/",
  },
  openGraph: {
    title: "Acariens dans la maison : allergènes, literie et leviers efficaces",
    description:
      "Première cause d'allergie respiratoire en logement. Comprendre les conditions de prolifération, traiter la literie et la chambre, et limiter durablement l'exposition aux allergènes.",
    url: "https://www.maisonbionat.fr/air-interieur/acariens-maison/",
  },
};

const faqItems = [
  {
    question: "Comment savoir si on est allergique aux acariens ?",
    answer:
      "Les signes typiques sont une rhinite, une congestion nasale, des éternuements et des yeux qui démangent au réveil ou à l'entrée dans la chambre, parfois associés à une toux ou à de l'asthme. Les symptômes s'atténuent à l'extérieur ou en vacances. Un médecin allergologue confirme par un test cutané (prick-test) ou une prise de sang. Les acariens sont la première cause d'allergie respiratoire intérieure en France.",
  },
  {
    question: "Quel taux d'humidité empêche les acariens de proliférer ?",
    answer:
      "En dessous de 50 % d'humidité relative, les acariens ne peuvent plus s'hydrater par l'air et leur population diminue rapidement. Au-dessus de 60 %, ils prolifèrent ; entre 70 et 80 % HR, ils sont à l'optimum. Le levier le plus efficace est donc de maintenir la chambre dans la plage 40-50 % HR, par la ventilation et un chauffage modéré (17-18 °C la nuit).",
  },
  {
    question: "Le lavage à 60 °C est-il vraiment nécessaire ?",
    answer:
      "Oui. Les acariens meurent à partir de 58 °C. Un lavage à 30 ou 40 °C les nettoie sans les tuer. La recommandation OQAI est de laver les draps, taies d'oreiller et housses à 60 °C une fois par semaine, et les couettes et oreillers tous les trois mois. Pour les pièces qui ne supportent pas 60 °C (laine, plumes), un passage 24 heures au congélateur tue les acariens (mais pas les allergènes déjà présents).",
  },
  {
    question: "Les housses anti-acariens fonctionnent-elles vraiment ?",
    answer:
      "Oui, à condition de choisir des housses à pores inférieurs à 10 microns, à fermeture intégrale (zip enveloppant), et de les installer sur matelas, oreillers et couette ensemble. C'est la mesure la mieux documentée scientifiquement après le contrôle de l'humidité. Comptez 50 à 150 € pour un ensemble complet, à renouveler tous les 5 à 8 ans.",
  },
];

export default function AcariensMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Acariens dans la maison : allergènes, literie et leviers efficaces",
      href: "https://www.maisonbionat.fr/air-interieur/acariens-maison/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Air intérieur"
        parentHref="/air-interieur/"
        tag="Allergène biologique"
        title="Acariens dans la maison : où ils vivent, ce qu'ils provoquent, comment réduire l'exposition"
        quickAnswer="Les acariens sont des arachnides microscopiques (0,2 à 0,4 mm) invisibles à l'œil nu, présents dans tous les logements humides ou tempérés. Ils ne piquent pas et ne mordent pas : c'est leurs déjections, qui contiennent les allergènes Der p1 et Der f1, qui déclenchent les réactions allergiques. Première cause d'allergie respiratoire intérieure en France, ils prolifèrent au-dessus de 60 % d'humidité relative et meurent en dessous de 50 %. Les leviers les plus efficaces sont la maîtrise de l'humidité, le lavage régulier de la literie à 60 °C, l'usage de housses anti-acariens de literie et un aspirateur à filtre HEPA. Les traitements chimiques acaricides sont à éviter, leur bénéfice étant limité face à leur impact sur la qualité de l'air."
        stats={[
          {
            value: "1ère cause",
            label: "d'allergie respiratoire intérieure en France selon l'OQAI et les sociétés savantes",
          },
          {
            value: "> 60 % HR",
            label: "seuil d'humidité au-delà duquel les acariens prolifèrent activement",
          },
          {
            value: "< 50 % HR",
            label: "plage où les acariens ne survivent plus durablement",
          },
          {
            value: "60 °C",
            label: "température de lavage qui tue les acariens (mortalité dès 58 °C)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les acariens" },
          { id: "signes", label: "Reconnaître une allergie" },
          { id: "causes", label: "Pourquoi ils prolifèrent" },
          { id: "actions", label: "Réduire l'exposition" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce que sont les acariens et pourquoi ils sont un problème de chambre avant tout."
        description="Les acariens domestiques (principalement Dermatophagoides pteronyssinus et Dermatophagoides farinae) sont des arachnides microscopiques qui se nourrissent de squames cutanées humaines et animales. On les trouve partout où s'accumule la poussière organique : matelas, oreillers, couettes, sommiers tapissiers, moquettes, peluches, canapés textiles, rideaux. Ils ne sont pas dangereux par eux-mêmes : ils ne piquent pas, ne transmettent aucune maladie. Ce sont leurs déjections, contenant des protéines allergisantes (Der p1, Der f1), qui se diffusent dans l'air avec la poussière et provoquent les réactions allergiques. La chambre est de loin la pièce la plus exposée, car la literie cumule chaleur corporelle, humidité respiratoire et squames."
        variants={[
          {
            indicator: "20-25 °C / 70-80 % HR",
            name: "Conditions optimales de prolifération",
            description:
              "Les acariens se reproduisent activement entre 20 et 25 °C avec une humidité relative de 70 à 80 %. C'est exactement la plage qu'on retrouve dans une chambre chauffée à 22 °C, fenêtres fermées, avec une literie qui a accumulé l'humidité respiratoire de la nuit.",
          },
          {
            indicator: "< 50 % HR",
            name: "Plage défavorable",
            description:
              "Sous 50 % d'humidité relative, les acariens ne peuvent plus s'hydrater à partir de l'air ambiant et leur population décroît rapidement. C'est l'objectif à viser dans la chambre, en combinant aération, chauffage modéré (17-18 °C la nuit) et habitudes saines.",
          },
          {
            indicator: "Der p1 / Der f1",
            name: "Allergènes responsables",
            description:
              "Les protéines digestives présentes dans les déjections sont les allergènes principaux. Une mesure dépassant 2 µg/g de poussière est associée à un risque accru de sensibilisation, plus de 10 µg/g à un risque élevé d'asthme allergique. Ces taux peuvent être réduits significativement par les mesures décrites plus bas.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître une allergie aux acariens et les pièces les plus chargées."
        subtitle="L'allergie aux acariens est saisonnière à l'envers : pire en automne et en hiver, quand la chambre est confinée, mieux à l'extérieur ou en vacances."
        signs={[
          {
            label: "Rhinite et éternuements au réveil",
            description:
              "Nez bouché ou qui coule, éternuements en série dès le lever, chez quelqu'un qui se sent mieux dans la journée à l'extérieur. C'est le signe le plus typique d'une exposition nocturne aux allergènes de la literie.",
            severity: "critique",
          },
          {
            label: "Démangeaisons des yeux et conjonctivite chronique",
            description:
              "Yeux qui grattent, larmoiement, paupières gonflées : la conjonctivite allergique accompagne souvent la rhinite. Elle s'amplifie en se frottant les yeux avec les mains chargées d'allergènes après contact avec la literie.",
            severity: "modéré",
          },
          {
            label: "Asthme aggravé la nuit ou au lever",
            description:
              "Les acariens sont l'un des principaux déclencheurs d'asthme allergique. Réveils en toux ou sifflement, essoufflement à l'effort plus marqué après une mauvaise nuit, recours plus fréquent à un bronchodilatateur : tous ces signes orientent vers une exposition élevée à la maison.",
            severity: "critique",
          },
          {
            label: "Symptômes qui disparaissent en vacances ou hors de chez soi",
            description:
              "Si une rhinite ou un asthme s'améliorent franchement en vacances en altitude ou en bord de mer, et reviennent au retour, l'exposition à un allergène domestique est très probable. Les acariens sont les premiers candidats.",
            severity: "modéré",
          },
          {
            label: "Chambre avec moquette, sommier tapissier ou nombreuses peluches",
            description:
              "Plus la chambre contient de surfaces textiles capables de retenir poussière et humidité, plus la concentration en allergènes monte. Une chambre d'enfant remplie de peluches sur lit cumule les zones de prolifération difficiles à laver à 60 °C.",
            severity: "modéré",
          },
          {
            label: "Matelas ou oreiller de plus de 8-10 ans",
            description:
              "Au-delà de cette durée, la charge d'allergènes accumulés dans un matelas standard devient difficile à réduire, même avec des housses. C'est un seuil à considérer pour quelqu'un de symptomatique : le remplacement plus une housse anti-acariens immédiate font partie des mesures les plus efficaces.",
            severity: "léger",
          },
        ]}
        footerNote="Une allergie suspectée mérite une consultation chez un allergologue. Le diagnostic objectif (prick-test, dosage IgE) oriente les bonnes mesures et permet d'envisager une désensibilisation si nécessaire."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi les acariens prolifèrent dans certains logements."
        subtitle="Trois conditions doivent être réunies : nourriture, chaleur, humidité. Les deux dernières sont les leviers d'action."
        causes={[
          {
            number: "01",
            cause: "Une humidité relative durablement supérieure à 60 %",
            explanation:
              "C'est la condition la plus déterminante. Les acariens absorbent l'eau par l'air ; sans humidité suffisante, ils se déshydratent. Logements mal ventilés, séchage du linge en intérieur, absence de VMC, condensation chronique : autant de causes qui font monter la HR de la chambre.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Une chambre chauffée à plus de 20 °C la nuit",
            explanation:
              "À 22 °C, les acariens sont dans leur plage idéale de reproduction. Une chambre maintenue à 17-18 °C la nuit est nettement moins favorable, et les recommandations médicales convergent sur cette plage. C'est un levier gratuit, immédiat et efficace.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Literie ancienne, sommier tapissier, matelas non protégés",
            explanation:
              "Un matelas de 10 ans accumule plusieurs centaines de grammes de squames et de déjections. Un sommier tapissier, fermé et tendu, ne se nettoie pas. Sans housse anti-acariens à zip, la literie devient un réservoir d'allergènes très difficile à réduire.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Moquette, tapis épais et accumulation de surfaces textiles",
            explanation:
              "Les moquettes, surtout en chambre, multiplient les zones de prolifération. Idem pour les tapis épais, les rideaux lourds et les peluches accumulées. Ces surfaces retiennent poussière, humidité et allergènes, et sont difficiles à nettoyer à haute température.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Aspiration insuffisante ou mauvais filtre",
            explanation:
              "Un aspirateur sans filtre HEPA rejette une partie des allergènes capturés dans l'air ambiant. Une fréquence d'aspiration faible (moins d'une fois par semaine dans la chambre) laisse les niveaux remonter. Ces deux défauts sont fréquents et faciles à corriger.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire durablement l'exposition aux acariens et à leurs allergènes."
        immediate={[
          {
            label: "Maintenir la chambre à 17-18 °C la nuit et 40-50 % HR",
            description:
              "C'est la mesure la plus efficace, sans coût, à mettre en place tout de suite. Baisser le thermostat de la chambre, vérifier l'hygromètre, aérer matin et soir 10 minutes : la combinaison casse les conditions de prolifération.",
            effort: "Gratuit, ajustement immédiat",
          },
          {
            label: "Laver draps et taies à 60 °C chaque semaine",
            description:
              "C'est la recommandation OQAI standard et la mesure la mieux validée. La chaleur de lavage tue les acariens (mortalité dès 58 °C) et élimine les allergènes solubles. Les couettes et oreillers se lavent au moins tous les trois mois à 60 °C.",
            effort: "Routine hebdomadaire",
          },
          {
            label: "Aspirer la chambre une à deux fois par semaine, filtre HEPA",
            description:
              "Un aspirateur équipé d'un filtre HEPA capture les particules les plus fines, dont les allergènes d'acariens. Sans filtre HEPA, l'aspirateur redistribue dans l'air une partie de ce qu'il aspire. Aspirer matelas, sommier, sol et plinthes.",
            effort: "Routine hebdomadaire, investissement aspirateur HEPA",
          },
          {
            label: "Aérer la chambre 30 minutes par jour, lit défait",
            description:
              "L'aération assèche la literie qui a absorbé l'humidité respiratoire de la nuit. Défaire le lit avant d'aérer, repousser draps et couettes pour laisser le matelas respirer. Cette routine simple réduit nettement la HR de la literie.",
            effort: "Gratuit, 30 minutes par jour",
          },
        ]}
        structural={[
          {
            label: "Installer des housses anti-acariens sur toute la literie",
            description:
              "Housses à pores inférieurs à 10 microns, fermeture éclair intégrale, sur matelas, oreillers et couette ensemble. Comptez 50-150 € pour un ensemble complet de qualité. C'est la mesure la mieux documentée scientifiquement après le contrôle de l'humidité, à renouveler tous les 5-8 ans.",
            effort: "Investissement modéré, longue durée",
          },
          {
            label: "Remplacer un sommier tapissier par un sommier à lattes",
            description:
              "Un sommier à lattes laisse circuler l'air sous le matelas et limite l'accumulation d'humidité. À l'inverse, un sommier tapissier emprisonne et nourrit la prolifération sans possibilité de nettoyage. À l'occasion d'un remplacement de matelas, le changement de sommier est cohérent.",
            effort: "Investissement, à programmer",
          },
          {
            label: "Préférer parquet ou stratifié à la moquette en chambre",
            description:
              "Une chambre sans moquette est nettement plus simple à maintenir avec une faible charge d'allergènes. Pour un occupant allergique, c'est l'une des décisions les plus impactantes. Un grand tapis lavable peut compléter sans recréer de réservoir.",
            effort: "Travaux ou choix au moment d'un changement",
          },
          {
            label: "Vérifier la VMC et envisager un déshumidificateur si HR > 60 %",
            description:
              "Une VMC fonctionnelle suffit dans la majorité des cas à maintenir l'humidité sous 60 %. Si la HR reste élevée malgré une bonne ventilation, un déshumidificateur ponctuel peut compléter. Un diagnostic humidité s'impose si la cause est structurelle.",
            effort: "Entretien régulier ou intervention",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les acariens dans la maison."
        errors={[
          {
            label: "\"Les acariens piquent et provoquent des boutons\"",
            explanation:
              "Faux. Les acariens domestiques ne piquent pas et ne provoquent pas de lésions cutanées par contact. Les boutons attribués aux acariens viennent presque toujours d'autres causes (punaises de lit, irritations, eczéma). Les réactions sont respiratoires et oculaires, pas cutanées.",
          },
          {
            label: "\"Les sprays acaricides règlent le problème\"",
            explanation:
              "L'efficacité des sprays acaricides domestiques est limitée et leur impact sur la qualité de l'air intérieur est défavorable (COV, irritants). Les sociétés savantes ne les recommandent pas. Les mesures non chimiques (humidité, lavage 60 °C, housses, aspiration HEPA) ont une efficacité supérieure et durable.",
          },
          {
            label: "\"Le bicarbonate sur le matelas suffit\"",
            explanation:
              "Le bicarbonate peut absorber un peu d'humidité et neutraliser des odeurs, mais son effet acaricide direct est marginal et peu documenté. C'est un complément éventuel d'entretien, pas un traitement de l'allergie aux acariens. Les leviers à efficacité démontrée restent l'humidité, le lavage à 60 °C et les housses.",
          },
          {
            label: "\"Si je ne vois rien, il n'y en a pas\"",
            explanation:
              "Les acariens font 0,2 à 0,4 mm. Ils sont totalement invisibles à l'œil nu, et leurs déjections aussi. Tous les logements en contiennent, en quantité variable. La question n'est pas la présence, mais la concentration et la sensibilité de l'occupant.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les acariens dans la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Taux d'humidité idéal : repères pièce par pièce",
            description:
              "Maintenir la chambre sous 50 % HR est le levier le plus efficace contre les acariens. Cibles, mesures et corrections.",
            href: "/humidite-maison/taux-humidite-ideal/",
          },
          {
            tag: "Pièce par pièce",
            title: "Une chambre saine pour mieux respirer la nuit",
            description:
              "Au-delà des acariens, ce qui compose une chambre saine : literie, matériaux, ventilation, lumière, température.",
            href: "/piece-par-piece/chambre-saine/",
          },
          {
            tag: "Air intérieur",
            title: "Poussière dans la maison : ce qu'elle contient et comment la limiter",
            description:
              "La poussière domestique transporte les allergènes d'acariens. Routine d'entretien efficace pour limiter leur diffusion.",
            href: "/air-interieur/poussiere-maison/",
          },
        ]}
      />
    </>
  );
}

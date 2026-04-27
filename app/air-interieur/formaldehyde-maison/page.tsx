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
  title: "Formaldéhyde dans la maison : sources, niveaux et solutions",
  description:
    "Cancérogène avéré présent dans la majorité des logements. Sources, valeurs guides ANSES, niveaux mesurés OQAI et gestes pour réduire l'exposition.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/air-interieur/formaldehyde-maison/",
  },
  openGraph: {
    title: "Formaldéhyde dans la maison : sources, niveaux et solutions",
    description:
      "Cancérogène avéré présent dans la majorité des logements. Sources, valeurs guides ANSES, niveaux mesurés OQAI et gestes pour réduire l'exposition.",
    url: "https://www.maisonbionat.fr/air-interieur/formaldehyde-maison/",
  },
};

const faqItems = [
  {
    question: "Quelle est la concentration normale de formaldéhyde dans un logement français ?",
    answer:
      "Les campagnes nationales de l'OQAI ont mesuré une concentration médiane autour de 20 µg/m³ dans les logements occupés, avec environ 10 % des logements au-dessus de 50 µg/m³ et quelques pour cent au-dessus de la valeur guide ANSES de 100 µg/m³. Les logements neufs ou récemment rénovés se situent souvent dans le haut de cette distribution les premiers mois.",
  },
  {
    question: "Comment mesurer le formaldéhyde chez soi ?",
    answer:
      "Des kits passifs à envoyer en laboratoire indépendant (autour de 50 à 80 € l'analyse) prélèvent l'air pendant 4 à 7 jours puis donnent une concentration moyenne fiable. Les capteurs électroniques grand public sont peu précis pour le formaldéhyde et donnent surtout une tendance, pas une mesure réglementaire.",
  },
  {
    question: "Faut-il s'inquiéter pour un enfant qui dort dans une chambre meublée en aggloméré ?",
    answer:
      "Sans alarmisme, c'est un cas classique sur lequel agir. Aérez la chambre 10 minutes matin et soir, vérifiez que la bouche de VMC n'est pas obstruée, ouvrez la fenêtre quand l'enfant n'y est pas. Pour les meubles neufs, prévoyez un dégazage de plusieurs semaines avant installation. Si l'inquiétude persiste, une mesure laboratoire tranche objectivement.",
  },
  {
    question: "Les purificateurs d'air enlèvent-ils le formaldéhyde ?",
    answer:
      "Les filtres HEPA n'arrêtent pas les COV gazeux comme le formaldéhyde. Seuls les filtres à charbon actif l'absorbent partiellement, avec une saturation rapide qui exige un remplacement régulier (souvent tous les 3 à 6 mois). Un purificateur ne remplace pas l'aération et n'agit pas sur la source.",
  },
];

export default function FormaldehydeMaisonPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Air intérieur", href: "/air-interieur/" },
    {
      name: "Formaldéhyde dans la maison : sources, niveaux et solutions",
      href: "https://www.maisonbionat.fr/air-interieur/formaldehyde-maison/",
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
        tag="Polluant intérieur"
        title="Formaldéhyde dans la maison : d'où il vient, à quels niveaux, et comment réduire l'exposition"
        quickAnswer="Le formaldéhyde est un gaz incolore, irritant à forte dose et classé cancérogène avéré pour l'homme par le CIRC depuis 2004 (groupe 1). On le retrouve dans la quasi-totalité des logements français : il est émis par les colles des panneaux de bois (MDF, aggloméré), certaines peintures, vernis, textiles traités et produits d'entretien. L'ANSES a fixé une valeur guide long terme de 100 µg/m³ pour l'air intérieur, et la réglementation française abaisse depuis le 1er janvier 2023 le seuil applicable aux établissements recevant du public à 10 µg/m³. Les leviers les plus efficaces dans un logement restent l'aération quotidienne, le choix de matériaux étiquetés A+, et le dégazage des meubles neufs avant de les installer dans une chambre."
        stats={[
          {
            value: "Groupe 1",
            label: "cancérogène avéré pour l'homme depuis 2004 (classification CIRC)",
          },
          {
            value: "100 µg/m³",
            label: "valeur guide ANSES pour une exposition long terme dans l'air intérieur",
          },
          {
            value: "10 µg/m³",
            label: "seuil réglementaire applicable aux ERP en France depuis le 1er janvier 2023",
          },
          {
            value: "10 substances",
            label: "COV étiquetés obligatoirement depuis 2012, dont le formaldéhyde",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le formaldéhyde" },
          { id: "signes", label: "Signes d'exposition" },
          { id: "causes", label: "Sources dans le logement" },
          { id: "actions", label: "Réduire l'exposition" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est le formaldéhyde et pourquoi il occupe une place à part parmi les polluants intérieurs."
        description="Le formaldéhyde (HCHO) est un composé organique volatil (COV) à très faible poids moléculaire, gazeux à température ambiante et très soluble dans l'eau. Il est utilisé depuis des décennies dans les colles à bois, les résines mélamine-formol et urée-formol, certains textiles infroissables, des cosmétiques et des produits d'entretien. Le CIRC l'a classé cancérogène avéré (groupe 1) pour les cancers du nasopharynx en 2004, classification confirmée depuis. À court terme et à plus forte concentration, il provoque des irritations des yeux, du nez et de la gorge. C'est aujourd'hui le polluant intérieur sur lequel reposent le plus grand nombre de mesures de surveillance en France."
        variants={[
          {
            indicator: "VGAI long terme",
            name: "Valeur guide air intérieur (ANSES)",
            description:
              "L'ANSES recommande une valeur de 100 µg/m³ en moyenne sur le long terme pour la population générale. C'est la valeur de référence utilisée pour évaluer un logement en exposition chronique. Au-dessus, un effet sanitaire ne peut plus être exclu.",
          },
          {
            indicator: "30 puis 10 µg/m³",
            name: "Seuil réglementaire ERP",
            description:
              "Le décret n° 2011-1727 a fixé un seuil de 30 µg/m³ pour les établissements recevant du public (crèches, écoles, accueils petite enfance) à compter du 1er janvier 2015. Ce seuil a été abaissé à 10 µg/m³ au 1er janvier 2023, ce qui en fait l'un des plus stricts en Europe.",
          },
          {
            indicator: "Concentrations courantes",
            name: "Niveaux mesurés en logement",
            description:
              "Les campagnes de l'Observatoire de la qualité de l'air intérieur (OQAI) ont mesuré des concentrations médianes autour de 20 µg/m³ dans les logements français, avec environ 10 % de logements dépassant 50 µg/m³. Les pointes après emménagement ou travaux peuvent dépasser plusieurs centaines de µg/m³.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître les situations qui exposent fortement au formaldéhyde."
        subtitle="Le formaldéhyde est inodore à très basse concentration : on ne se fie pas à l'odeur, on raisonne sur les sources et le contexte."
        signs={[
          {
            label: "Logement neuf ou récemment rénové",
            description:
              "Les douze premiers mois après une construction, une rénovation ou un emménagement concentrent l'essentiel des émissions. Les colles, peintures, mobilier et revêtements neufs libèrent du formaldéhyde de façon décroissante pendant des mois.",
            severity: "critique",
          },
          {
            label: "Beaucoup de mobilier en panneaux de bois reconstitué",
            description:
              "MDF, panneaux agglomérés, contreplaqués bon marché : la plupart utilisent des résines à base d'urée-formol qui émettent du formaldéhyde de manière continue, surtout les premières années. Une chambre meublée majoritairement en aggloméré est une source typique.",
            severity: "modéré",
          },
          {
            label: "Pièce mal ventilée et fenêtres rarement ouvertes",
            description:
              "Le formaldéhyde s'accumule dans les espaces confinés. Une chambre fermée la nuit sans VMC fonctionnelle voit ses concentrations monter, surtout en hiver. C'est l'une des situations les plus souvent retrouvées dans les logements à concentrations élevées.",
            severity: "modéré",
          },
          {
            label: "Picotements aux yeux ou gorge sèche le matin",
            description:
              "À partir de 100 µg/m³, des irritations oculaires et respiratoires apparaissent chez certaines personnes. Si ces symptômes disparaissent après quelques heures à l'extérieur ou dans une autre pièce, le diagnostic environnemental mérite d'être pris au sérieux.",
            severity: "modéré",
          },
          {
            label: "Fumée de tabac à l'intérieur",
            description:
              "La combustion du tabac est l'une des sources les plus émettrices de formaldéhyde dans un logement. Une cigarette fumée à l'intérieur libère plusieurs centaines de microgrammes en quelques minutes dans la pièce.",
            severity: "critique",
          },
          {
            label: "Cuisson au gaz sans hotte ni aération",
            description:
              "La combustion incomplète d'une flamme de gazinière émet du formaldéhyde, du dioxyde d'azote et des particules fines. L'absence de hotte raccordée à l'extérieur ou de fenêtre ouverte aggrave systématiquement les niveaux.",
            severity: "léger",
          },
        ]}
        footerNote="L'absence de symptômes ne garantit pas une exposition faible. Les effets long terme du formaldéhyde sont liés à l'exposition cumulée sur plusieurs années, pas à une perception immédiate."
      />

      <IssueCauses
        id="causes"
        title="D'où vient le formaldéhyde dans un logement français moyen."
        subtitle="Les sources sont multiples mais bien identifiées par les campagnes de mesure de l'OQAI et les fiches de l'INRS."
        causes={[
          {
            number: "01",
            cause: "Les colles des panneaux de bois reconstitués",
            explanation:
              "MDF, agglomérés, OSB et contreplaqués utilisent des résines urée-formol, mélamine-formol ou phénol-formol. Les meubles, plans de travail, parquets stratifiés et cloisons en sont souvent constitués. C'est la première source domestique en volume cumulé sur la durée.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les peintures, vernis, lasures et colles murales",
            explanation:
              "Certaines peintures (notamment murales) et la plupart des vernis intérieurs émettent du formaldéhyde pendant le séchage et au-delà. Les colles de papier peint et de revêtements muraux contribuent également, surtout les premiers jours après application.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "La combustion à l'intérieur du logement",
            explanation:
              "Tabac, bougies parfumées, encens, cheminées, poêles mal réglés et cuisinières à gaz émettent du formaldéhyde par combustion incomplète. C'est une source ponctuelle mais souvent intense, qui peut faire bondir la concentration en quelques minutes.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les textiles traités et certains produits d'entretien",
            explanation:
              "Tissus infroissables, rideaux et linge de maison neufs peuvent contenir des résines au formaldéhyde. Quelques nettoyants ménagers, désinfectants et cosmétiques utilisent encore du formaldéhyde comme conservateur, à doses faibles mais régulières.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Les isolants et matériaux de construction anciens",
            explanation:
              "Certains isolants en mousse urée-formol, posés massivement dans les années 1970-1980, continuent d'émettre du formaldéhyde aujourd'hui. La majorité a été retirée du marché, mais des logements anciens en contiennent encore, notamment derrière les cloisons.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire concrètement l'exposition au formaldéhyde dans le logement."
        immediate={[
          {
            label: "Aérer 10 minutes deux fois par jour, fenêtres en opposition",
            description:
              "C'est l'action de loin la plus efficace pour diluer le formaldéhyde. Un courant d'air bref renouvelle complètement l'air d'un logement. Faites-le matin et soir, et systématiquement après une douche, une cuisson ou un nettoyage, en toute saison.",
            effort: "Gratuit, 20 minutes par jour",
          },
          {
            label: "Vérifier et entretenir la VMC",
            description:
              "Une VMC bien dimensionnée et entretenue (bouches nettoyées tous les 6 mois, entrées d'air dégagées) limite durablement l'accumulation des polluants. Si vous n'avez pas de VMC en logement ancien, l'aération manuelle doit compenser, sans exception.",
            effort: "30 minutes par semestre",
          },
          {
            label: "Faire dégazer les meubles neufs avant la chambre",
            description:
              "Un meuble neuf en aggloméré ou MDF émet l'essentiel de son formaldéhyde dans les premières semaines. Laissez-le 2 à 4 semaines dans un garage ouvert, une véranda ou une pièce ventilée avant de l'installer dans une chambre, surtout d'enfant.",
            effort: "Organisation",
          },
          {
            label: "Ne pas fumer à l'intérieur, limiter bougies et encens",
            description:
              "Aucun système de ventilation ne compense la fumée de tabac à l'intérieur. Les bougies parfumées et l'encens utilisés en pièce fermée aggravent également les niveaux. Réservez-les à des usages ponctuels et aérez ensuite.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Privilégier le bois massif ou les panneaux à liants alternatifs",
            description:
              "Pour le mobilier de chambre, les panneaux étiquetés E1, classe d'émission CARB Phase 2 ou ULEF émettent significativement moins de formaldéhyde. Le bois massif (pin, hêtre, chêne non traité) reste la référence, à coût plus élevé mais avec une durée de vie supérieure.",
            effort: "Surcoût à l'achat",
          },
          {
            label: "Choisir des peintures et vernis classés A+",
            description:
              "L'étiquette obligatoire (décret 2011-321) classe les produits de A+ à C. Pour les pièces de vie et chambres d'enfants, exigez le A+. Les peintures à la chaux, à l'argile ou au silicate vont au-delà avec des émissions très inférieures.",
            effort: "Choix au moment de l'achat",
          },
          {
            label: "Installer une hotte raccordée à l'extérieur",
            description:
              "Une hotte qui rejette à l'extérieur (et non un simple recyclage par filtre charbon) évacue durablement les composés émis par la cuisson. Combinée à une fenêtre ouverte pendant et après la cuisson, c'est l'un des aménagements les plus utiles d'une cuisine.",
            effort: "Investissement, intervention électricien",
          },
          {
            label: "Mesurer le formaldéhyde après travaux ou en cas de doute",
            description:
              "Des kits de prélèvement à envoyer en laboratoire (autour de 50 à 80 € l'analyse) permettent une mesure fiable de l'exposition long terme. C'est utile après une rénovation, un emménagement, ou avant l'installation d'une chambre d'enfant.",
            effort: "Coût ponctuel",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le formaldéhyde."
        errors={[
          {
            label: "\"Si je ne sens rien, c'est qu'il n'y en a pas\"",
            explanation:
              "Le seuil de perception olfactive du formaldéhyde se situe au-delà de 500 µg/m³, soit cinq fois la valeur guide ANSES. Une exposition chronique problématique reste donc largement inodore. L'odorat n'est pas un détecteur fiable.",
          },
          {
            label: "\"Une bougie naturelle ou un encens végétal ne posent pas de problème\"",
            explanation:
              "Toute combustion à l'intérieur émet du formaldéhyde, des particules fines et d'autres COV, quel que soit le combustible. Bougies de soja, encens japonais ou chinois, copeaux de bois : la composition change, le principe physique de la combustion non.",
          },
          {
            label: "\"Les plantes vertes neutralisent le formaldéhyde\"",
            explanation:
              "Des études en laboratoire ont montré une absorption mesurable, mais à l'échelle d'un logement réel l'effet est négligeable. Pour atteindre un effet significatif, il faudrait plusieurs centaines de plantes par pièce. L'aération reste incomparablement plus efficace.",
          },
          {
            label: "\"Un meuble qui ne sent plus rien a fini de dégazer\"",
            explanation:
              "Le pic d'émission se situe les premières semaines, mais les panneaux à urée-formol continuent d'émettre du formaldéhyde pendant plusieurs années à un niveau plus bas mais constant, surtout en présence d'humidité ou de chaleur.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le formaldéhyde dans la maison"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Les polluants intérieurs les plus fréquents",
            description:
              "COV, particules fines, CO2, formaldéhyde : situer le formaldéhyde dans l'ensemble des polluants typiques d'un logement.",
            href: "/air-interieur/polluants-interieurs-frequents/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux : comment ça fonctionne",
            description:
              "Phénomène physique, durée selon les matériaux et leviers pour accélérer la baisse des émissions après emménagement ou travaux.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
          {
            tag: "Matériaux sains",
            title: "Meubles à faibles émissions : choisir et faire dégazer",
            description:
              "Comprendre les classes d'émission des meubles neufs et organiser leur dégazage avant de les placer dans une chambre.",
            href: "/materiaux-sains/meubles-faibles-emissions/",
          },
        ]}
      />
    </>
  );
}

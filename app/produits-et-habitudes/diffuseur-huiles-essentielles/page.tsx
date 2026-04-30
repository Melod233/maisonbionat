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
  title: "Diffuseur d'huiles essentielles : précautions et alternatives",
  description:
    "Position ANSES, irritants respiratoires, précautions enfants et femmes enceintes : ce qu'il faut vraiment savoir avant de diffuser des huiles essentielles à la maison.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/diffuseur-huiles-essentielles/",
  },
  openGraph: {
    title: "Diffuseur d'huiles essentielles : précautions et alternatives",
    description:
      "Position ANSES, irritants respiratoires, précautions enfants et femmes enceintes : ce qu'il faut vraiment savoir avant de diffuser des huiles essentielles à la maison.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/diffuseur-huiles-essentielles/",
  },
};

const faqItems = [
  {
    question: "Peut-on diffuser des huiles essentielles avec un bébé ou un jeune enfant ?",
    answer:
      "L'ANSES recommande explicitement de ne pas diffuser d'huiles essentielles en présence d'enfants de moins de 3 ans, et de tenir les sprays, diffuseurs et flacons hors de portée des jeunes enfants au même titre que les produits ménagers ou les médicaments. De nombreuses huiles (eucalyptus radiata, menthe poivrée, romarin, thym, gaulthérie, niaouli) contiennent des phénols ou des cétones potentiellement neurotoxiques pour les jeunes enfants et peuvent provoquer des spasmes laryngés, des convulsions ou des troubles respiratoires. Pour la chambre d'un enfant, le mieux est tout simplement de ne rien diffuser.",
  },
  {
    question: "Et pendant la grossesse ou l'allaitement ?",
    answer:
      "L'ANSES recommande aux femmes enceintes ou allaitantes de ne pas utiliser de diffuseur d'huiles essentielles. Le premier trimestre est particulièrement à risque, mais la prudence s'applique à toute la grossesse car de nombreuses huiles passent la barrière placentaire ou se retrouvent dans le lait maternel. Quelques huiles présentent des effets hormonaux (sauge sclarée, menthe poivrée), neurotoxiques (cétones de la sauge officinale, du thuya) ou sont contre-indiquées par leur teneur en phénols. En l'absence de bénéfice démontré et compte tenu des risques documentés, l'abstention est la position de référence.",
  },
  {
    question: "La diffusion 'nature' est-elle plus sûre que les sprays ?",
    answer:
      "Pas vraiment. Tous les modes de diffusion libèrent des composés organiques volatils (COV) dans l'air intérieur. Les diffuseurs à nébulisation à froid produisent les particules les plus fines et donc la pénétration respiratoire la plus profonde, ce qui les rend particulièrement irritants. Les diffuseurs à chaleur douce dénaturent moins les molécules mais en libèrent davantage. Les sprays directs concentrent fortement la dose dans l'instant. Aucune méthode ne supprime le risque irritatif lié à la nature même des huiles.",
  },
  {
    question: "Quelles précautions minimales si l'on veut quand même diffuser ?",
    answer:
      "Si l'on diffuse malgré les recommandations, l'ANSES préconise des séances courtes (5 à 15 minutes maximum), dans une pièce ventilée, vide d'enfants, de femmes enceintes ou allaitantes, de personnes asthmatiques ou allergiques, et d'animaux (chats et oiseaux notamment, très sensibles). Aérer ensuite 10 minutes avant d'occuper la pièce. Choisir des huiles documentées comme moins irritantes (lavande vraie, mandarine, ravintsara) plutôt que celles riches en phénols ou cétones. Ne jamais laisser un diffuseur allumé en continu, ni la nuit dans une chambre, ni en présence de jeunes enfants.",
  },
];

export default function DiffuseurHuilesEssentiellesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    {
      name: "Diffuseur d'huiles essentielles",
      href: "https://www.maisonbionat.fr/produits-et-habitudes/diffuseur-huiles-essentielles/",
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
        parentLabel="Produits et habitudes"
        parentHref="/produits-et-habitudes/"
        tag="Air intérieur"
        title="Diffuseur d'huiles essentielles : ce que dit l'ANSES et comment réduire l'exposition"
        quickAnswer="Les huiles essentielles diffusées dans l'air libèrent des composés organiques volatils (COV) potentiellement irritants pour les voies respiratoires. L'ANSES, dans ses avis de 2017, 2018 et leurs mises à jour, alerte sur les risques sanitaires des sprays et diffuseurs d'huiles essentielles, et recommande la non-utilisation chez les femmes enceintes ou allaitantes, les personnes asthmatiques ou présentant des affections respiratoires, et en présence d'enfants de moins de 3 ans. Entre 2011 et 2019, plus de 1 400 cas d'exposition symptomatique ont été rapportés aux centres antipoison français. Les irritations des yeux, de la gorge et des voies respiratoires sont les effets les plus fréquents, liés à la présence de phénols, cétones et terpènes dans certaines huiles. La page n'a pas vocation à interdire l'usage mais à donner les informations institutionnelles pour décider en connaissance de cause."
        stats={[
          {
            value: "1 400+",
            label: "cas d'exposition symptomatique aux huiles essentielles signalés aux centres antipoison entre 2011 et 2019",
          },
          {
            value: "ANSES 2017",
            label: "avis de référence sur les risques sanitaires des sprays et diffuseurs",
          },
          {
            value: "< 3 ans",
            label: "âge en dessous duquel l'ANSES recommande la non-diffusion en présence d'enfants",
          },
          {
            value: "5-15 min",
            label: "durée maximale de diffusion recommandée par l'ANSES si l'on diffuse malgré tout",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Position institutionnelle" },
          { id: "signes", label: "Effets observés" },
          { id: "causes", label: "Pourquoi ces effets" },
          { id: "actions", label: "Précautions et alternatives" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce que disent les autorités sanitaires sur les diffuseurs d'huiles essentielles."
        description="Contrairement à l'image très positive véhiculée par le marché de l'aromathérapie, les huiles essentielles sont des concentrés actifs qui contiennent des centaines de molécules organiques volatiles. Diffusées dans l'air d'un logement, elles deviennent une source de pollution intérieure au sens de la qualité de l'air. L'ANSES a publié plusieurs avis successifs sur ce sujet, en 2017, 2018 et leurs mises à jour, et est rejointe par les centres antipoison et plusieurs sociétés savantes. Le constat est convergent : les diffuseurs et sprays sont sources d'exposition documentée à des composés irritants ou potentiellement toxiques, sans bénéfice santé démontré qui contrebalancerait ces risques."
        variants={[
          {
            indicator: "ANSES 2017",
            name: "Avis sur les sprays et diffuseurs d'huiles essentielles",
            description:
              "Premier avis institutionnel français complet. Conclusion : les sprays et diffuseurs sont des sources d'exposition à des COV irritants (phénols, cétones, terpènes oxydés). L'ANSES recommande la non-utilisation chez les personnes asthmatiques, les femmes enceintes ou allaitantes, et la prudence en présence de jeunes enfants. Les diffuseurs à nébulisation à froid sont signalés comme particulièrement à risque par la finesse des particules produites.",
          },
          {
            indicator: "Centres antipoison",
            name: "Données de cas symptomatiques",
            description:
              "Les centres antipoison français recensent plus de 1 400 cas d'exposition symptomatique aux huiles essentielles entre 2011 et début 2019, dont une majorité par ingestion chez l'enfant mais aussi de nombreux cas d'irritations respiratoires et oculaires en utilisation normale. Les huiles à phénols (thym, origan, sarriette, girofle), à cétones (sauge officinale, thuya, hysope) et l'eucalyptus en bain de vapeur chez l'enfant figurent en tête.",
          },
          {
            indicator: "Sociétés savantes",
            name: "Positions allergologie et pédiatrie",
            description:
              "La Société française d'allergologie et plusieurs sociétés de pédiatrie déconseillent la diffusion d'huiles essentielles en présence de jeunes enfants et chez les patients asthmatiques, en cohérence avec les avis ANSES. La présence d'huiles essentielles parmi les facteurs déclenchants d'asthme chez l'enfant est documentée, sans qu'on puisse en quantifier précisément la contribution dans les études épidémiologiques.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Effets observés en utilisation normale d'un diffuseur."
        subtitle="Les effets indésirables des huiles essentielles diffusées ne se limitent pas aux ingestions accidentelles. Ils apparaissent aussi en utilisation normale, surtout chez les personnes sensibles ou en exposition prolongée."
        signs={[
          {
            label: "Irritations des yeux, de la gorge et du nez",
            description:
              "Picotements oculaires, sensation de gorge sèche ou enflammée, écoulement nasal, éternuements répétés. Effets immédiats et réversibles à l'arrêt de la diffusion. Plus marqués avec les huiles riches en phénols (thym, origan, girofle) et cétones, ainsi qu'à concentration élevée ou en pièce mal ventilée.",
            severity: "modéré",
          },
          {
            label: "Aggravation de symptômes asthmatiques ou allergiques",
            description:
              "Chez une personne asthmatique, allergique ou avec hyperréactivité bronchique, la diffusion peut déclencher toux, sifflements, sensation d'oppression, voire crise franche. C'est la situation pour laquelle l'ANSES est la plus catégorique : la diffusion est déconseillée chez ces personnes.",
            severity: "critique",
          },
          {
            label: "Effets neurologiques chez le jeune enfant",
            description:
              "Spasmes laryngés, convulsions, agitation ou somnolence anormale chez le nourrisson exposé à certaines huiles (eucalyptus radié, menthe poivrée, niaouli, gaulthérie, romarin à camphre). Cas documentés par les centres antipoison et la littérature pédiatrique. Justifie la non-diffusion en présence d'enfants de moins de 3 ans.",
            severity: "critique",
          },
          {
            label: "Réactions cutanées si projection ou contact",
            description:
              "Les huiles essentielles non diluées sont des irritants cutanés, voire des photosensibilisants (huiles d'agrumes : bergamote, citron, mandarine, exposées au soleil après application). Une projection au moment du remplissage du diffuseur, ou la condensation sur les surfaces proches, peut provoquer des dermatites de contact.",
            severity: "modéré",
          },
          {
            label: "Toxicité chez les animaux domestiques",
            description:
              "Les chats sont particulièrement vulnérables car ils ne possèdent pas l'enzyme hépatique qui métabolise les phénols. La diffusion prolongée peut provoquer chez eux salivation, vomissements, ataxie, voire intoxication grave. Les oiseaux sont également très sensibles. Les chiens tolèrent mieux mais sont exposés à concentration élevée.",
            severity: "modéré",
          },
          {
            label: "Maux de tête et nausées prolongés",
            description:
              "Une diffusion continue ou très fréquente peut provoquer chez l'adulte non sensible des céphalées, des nausées et une fatigue inhabituelle. Effets souvent attribués à tort à autre chose, qui régressent franchement à l'arrêt du diffuseur. Premier signal d'alarme à prendre au sérieux.",
            severity: "léger",
          },
        ]}
        footerNote="Tout symptôme respiratoire, neurologique ou cutané chez un enfant après diffusion justifie un appel au centre antipoison (numéro national 01 40 05 48 48) ou au 15. Conserver le flacon pour identifier précisément l'huile en cause."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi les huiles essentielles produisent ces effets."
        subtitle="Le terme 'huile essentielle' évoque une substance douce et naturelle. La réalité chimique est différente : ce sont des concentrés très actifs, dont la composition explique précisément les risques observés."
        causes={[
          {
            number: "01",
            cause: "Concentration extrême en molécules actives",
            explanation:
              "Une huile essentielle peut être 50 à 100 fois plus concentrée que la plante d'origine en principes actifs. Une goutte représente l'équivalent de plusieurs centaines de grammes de plante fraîche. Cette concentration explique pourquoi les effets recherchés (parfum, sensation aromatique) s'accompagnent d'effets indésirables à doses non négligeables.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Présence de phénols et cétones potentiellement neurotoxiques",
            explanation:
              "Les phénols (carvacrol du thym, eugénol du clou de girofle) sont des irritants puissants des muqueuses respiratoires. Les cétones (camphre, thujone, pulégone) sont neurotoxiques à dose élevée et particulièrement chez l'enfant. Plusieurs huiles très utilisées en aromathérapie contiennent ces molécules à des taux élevés (sauge officinale, thuya, hysope, romarin à camphre, menthe pouliot).",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Diffusion qui transforme l'air intérieur en aérosol de COV",
            explanation:
              "Un diffuseur à nébulisation à froid produit des particules de quelques microns qui pénètrent profondément dans les voies respiratoires. Un diffuseur à chaleur volatilise les composés et peut en dégrader certains en sous-produits oxydés (terpènes oxydés, formaldéhyde) parfois plus irritants que la molécule de départ. Dans tous les cas, l'air de la pièce devient une source d'exposition continue.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Réactions photochimiques avec l'ozone intérieur",
            explanation:
              "Plusieurs études (notamment de l'OQAI et de chercheurs européens) ont montré que les terpènes des huiles essentielles (limonène, alpha-pinène) réagissent avec l'ozone résiduel de l'air intérieur pour produire du formaldéhyde et des particules ultra-fines secondaires. Ce phénomène, peu connu du grand public, ajoute une exposition à des composés que l'on cherche par ailleurs à réduire dans la maison.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Absence de bénéfice santé démontré qui justifierait le risque",
            explanation:
              "Aucune étude clinique sérieuse ne démontre un bénéfice mesurable de la diffusion d'huiles essentielles sur la qualité de l'air, la prévention des infections ou le bien-être qui contrebalancerait les risques documentés. Les allégations 'assainissantes' ne reposent pas sur un niveau de preuve équivalent à celui des avis ANSES sur les risques. Le rapport bénéfice/risque pousse donc à la prudence.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Réduire l'exposition et choisir des alternatives."
        immediate={[
          {
            label: "Ne pas diffuser en présence d'enfants, femmes enceintes, asthmatiques",
            description:
              "Position de référence ANSES. La règle simple à retenir : si l'une de ces personnes est dans le logement, le diffuseur reste éteint. Cela inclut les chambres d'enfants la nuit, les espaces partagés en journée, les véhicules. La présence d'un animal sensible (chat, oiseau) est également un motif valable de non-diffusion.",
            effort: "Décision d'usage, coût nul",
          },
          {
            label: "Tenir les flacons et diffuseurs hors de portée des enfants",
            description:
              "L'ingestion accidentelle est la première cause d'appel au centre antipoison. Les flacons doivent être stockés en armoire fermée, hors de vue, comme les médicaments et les produits ménagers. Les recharges des diffuseurs branchés sur prise sont également concernées : un enfant peut accéder au liquide.",
            effort: "Réorganisation du rangement",
          },
          {
            label: "Aérer largement avant et après toute diffusion",
            description:
              "Si l'on diffuse malgré tout, ouvrir grand les fenêtres 5 à 10 minutes avant et après. Limiter la durée à 5-15 minutes maximum dans une pièce occupée brièvement (séjour, salle de bain), jamais dans une chambre la nuit, jamais en continu. Ne pas refermer la pièce avec le diffuseur en marche et y laisser un enfant ou une personne sensible.",
            effort: "Quelques minutes par séance",
          },
          {
            label: "Privilégier les huiles documentées comme les moins irritantes",
            description:
              "Si le besoin de parfum est important, choisir des huiles à profil de moindre risque chez l'adulte non sensible : lavande vraie, mandarine, ravintsara, citron (attention photosensibilisation cutanée). Éviter les huiles à phénols (thym à thymol, origan, girofle) et à cétones (sauge officinale, thuya, hysope, menthe pouliot). En cas de doute, consulter une pharmacie spécialisée.",
            effort: "Choix d'achat",
          },
        ]}
        structural={[
          {
            label: "Remplacer le diffuseur par une aération régulière",
            description:
              "L'aération matin et soir 10 à 15 minutes, combinée à une VMC fonctionnelle, donne un air intérieur objectivement plus sain qu'un diffuseur d'huiles essentielles. C'est l'inverse complet du raisonnement marketing : ce n'est pas en ajoutant des composés qu'on assainit l'air, mais en évacuant ceux qui s'accumulent.",
            effort: "Routine quotidienne, gratuit",
          },
          {
            label: "Identifier et traiter les causes de mauvaise odeur",
            description:
              "Un besoin récurrent de masquer une odeur signale presque toujours une cause sous-jacente : humidité dans une pièce, moisissures, textiles imprégnés, animal, déchets, canalisation. Traiter la cause (voir notre page odeurs persistantes) règle durablement le problème, là où le diffuseur ne fait que masquer en ajoutant une couche de pollution intérieure.",
            effort: "Variable selon cause",
          },
          {
            label: "Préférer des bouquets de fleurs ou plantes vraiment naturelles",
            description:
              "Si on cherche une présence olfactive douce et continue, un bouquet de fleurs fraîches, des plantes aromatiques en pot dans la cuisine (basilic, menthe, romarin), ou un bois aromatique bien sec apportent une fraction des sensations sans concentration ni nébulisation. Effet sensoriel modeste mais sans la charge d'irritants.",
            effort: "Coût léger, agréable",
          },
          {
            label: "Considérer la chambre comme une zone sans diffusion",
            description:
              "Indépendamment du reste du logement, garder la chambre à coucher comme un espace sans diffuseur ni spray ni encens. C'est l'endroit où l'on passe 8 à 10 heures par nuit, où la respiration ralentit, où la pièce est souvent peu ventilée. Préserver la qualité de l'air de la chambre est un levier santé prioritaire.",
            effort: "Règle simple, durable",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur les huiles essentielles diffusées."
        errors={[
          {
            label: "\"C'est naturel, donc c'est sans risque\"",
            explanation:
              "Confusion classique. Naturel ne veut pas dire inoffensif. Le poison de la cigüe, le venin d'un serpent, la fumée d'un feu de bois sont également naturels. Les huiles essentielles sont des concentrés actifs de molécules dont certaines sont irritantes, neurotoxiques à dose pédiatrique ou allergisantes. Le caractère naturel ne change rien à ces propriétés chimiques.",
          },
          {
            label: "\"Diffuser des huiles essentielles assainit l'air\"",
            explanation:
              "Allégation marketing récurrente, sans démonstration scientifique. Au mieux, certaines huiles ont en laboratoire un effet antimicrobien sur surfaces dans des conditions très précises. En diffusion atmosphérique réelle, l'effet sur la flore microbienne d'une pièce de logement n'est pas démontré, et la diffusion ajoute des COV irritants. Le terme 'assainir' est inadapté.",
          },
          {
            label: "\"Le diffuseur à nébulisation à froid est plus sûr car il ne chauffe pas\"",
            explanation:
              "C'est l'inverse. La nébulisation à froid produit des particules ultrafines qui pénètrent profondément dans les voies respiratoires, là où les muqueuses sont les plus sensibles. L'ANSES la signale comme particulièrement à risque. La chaleur dénature certaines molécules mais peut au passage générer des sous-produits oxydés. Aucun mode n'est franchement 'plus sûr' que les autres.",
          },
          {
            label: "\"Mes enfants vont mieux dormir avec un diffuseur dans leur chambre\"",
            explanation:
              "Idée largement diffusée mais en contradiction directe avec l'avis ANSES. La chambre d'un enfant est précisément le lieu où l'ANSES recommande de ne pas diffuser. Pour favoriser le sommeil, les leviers documentés sont la régularité du coucher, l'obscurité, la température de la pièce (18-19 °C), une bonne aération en journée et l'absence d'écrans avant le coucher. Pas la diffusion d'huiles essentielles.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les diffuseurs d'huiles essentielles"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Désodorisants d'air intérieur",
            description:
              "Sprays, parfums d'ambiance et bougies parfumées : ce qu'ils émettent réellement et comment réduire la pollution olfactive de la maison.",
            href: "/produits-et-habitudes/desodorisants-air-interieur/",
          },
          {
            tag: "Produits et habitudes",
            title: "Bougies de paraffine et air intérieur",
            description:
              "Combustion, particules fines et COV : ce qui change selon la composition, et les alternatives crédibles.",
            href: "/produits-et-habitudes/bougies-paraffine/",
          },
          {
            tag: "Air intérieur",
            title: "Odeurs persistantes dans la maison",
            description:
              "Identifier la cause d'une mauvaise odeur plutôt que de la masquer reste la meilleure réponse durable.",
            href: "/air-interieur/odeurs-persistantes-maison/",
          },
        ]}
      />
    </>
  );
}

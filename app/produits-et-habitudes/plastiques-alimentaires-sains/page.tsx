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
  title: "Plastiques alimentaires : bisphénols, phtalates, codes de recyclage",
  description:
    "Tupperware, films, bouteilles, biberons : décoder les codes plastique (1 à 7), identifier les contenants à risque (BPA, BPS, phtalates), bonnes pratiques de stockage et de chauffage. Sources ANSES, EFSA, règlement européen 10/2011.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/plastiques-alimentaires-sains/",
  },
  openGraph: {
    title: "Plastiques alimentaires : bisphénols, phtalates, codes de recyclage",
    description:
      "Tupperware, films, biberons : ce qui migre, ce qui ne migre pas, comment décoder les codes plastique.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/plastiques-alimentaires-sains/",
  },
};

export default function PlastiquesAlimentairesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits & habitudes", href: "/produits-et-habitudes/" },
    {
      name: "Plastiques alimentaires : bisphénols et phtalates",
      href: "https://www.maisonbionat.fr/produits-et-habitudes/plastiques-alimentaires-sains/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Produits & habitudes"
        parentHref="/produits-et-habitudes/"
        tag="Contenants alimentaires et migration"
        title="Plastiques alimentaires : décoder les codes, limiter les migrations."
        quickAnswer="Tous les plastiques alimentaires ne se valent pas. Le code de recyclage (chiffre 1 à 7 dans le triangle) indique la résine principale. Les plus sûrs au contact alimentaire : code 2 (HDPE), code 4 (LDPE), code 5 (PP), tous trois acceptables pour la conservation à froid et la majorité des usages. Code 1 (PET) : adapté à un usage unique (bouteilles), pas au réemploi prolongé ni au chaud. Code 3 (PVC) et code 6 (PS) : à éviter au contact alimentaire chaud, peuvent contenir des phtalates ou du styrène. Code 7 (autres) : catégorie fourre-tout, à éviter sauf mention spécifique. Le BPA (bisphénol A) est interdit en France dans tous les contenants alimentaires depuis le 1er janvier 2015 (loi du 24 décembre 2012). Des substituts comme le BPS et le BPF sont parfois utilisés ; leur évaluation sanitaire évolue (EFSA, ANSES). Règles pratiques : ne pas chauffer au micro-ondes en contenant plastique sauf mention explicite, privilégier verre et inox pour le stockage, remplacer les contenants rayés ou opaques."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "1er janv. 2015", label: "interdiction du BPA dans tous les contenants alimentaires en France" },
          { value: "5", label: "code plastique (polypropylène PP) le plus polyvalent au contact alimentaire" },
          { value: "10/2011", label: "règlement européen encadrant la migration des plastiques alimentaires" },
          { value: "0", label: "plastique adapté au micro-ondes sauf mention « micro-ondes » explicite" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les codes plastique" },
          { id: "signes", label: "Reconnaître les contenants à risque" },
          { id: "causes", label: "Pourquoi la migration compte" },
          { id: "actions", label: "Bons réflexes au quotidien" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Codes"
        title="Les sept codes plastique au contact alimentaire"
        description="Le triangle de recyclage avec un chiffre de 1 à 7 indique la résine principale. Cette information est obligatoire sur la plupart des emballages. Voici ce que chaque code signifie pour le contact alimentaire."
        variants={[
          {
            indicator: "Usage unique",
            name: "Code 1 - PET (polyéthylène téréphtalate)",
            description:
              "Bouteilles d'eau, bouteilles de soda, certains pots. Sûr au contact alimentaire à froid en usage unique. À ne pas réemployer prolongement (microrayures retiennent bactéries), ne pas exposer à la chaleur (déformation, migration accrue), ne pas chauffer au micro-ondes. Acceptable pour un trajet, à recycler après usage.",
          },
          {
            indicator: "Sûr",
            name: "Code 2 - HDPE (polyéthylène haute densité)",
            description:
              "Flacons opaques, bouchons, certains pots. Très stable, faible migration, ne contient pas de bisphénols. Compatible avec liquide froid et tiède. Souvent réutilisable plusieurs fois sans problème sanitaire significatif. Une des résines les plus sûres au contact alimentaire.",
          },
          {
            indicator: "À éviter",
            name: "Code 3 - PVC (polychlorure de vinyle)",
            description:
              "Films alimentaires anciens, certains emballages. Peut contenir des phtalates (notamment DEHP), assouplissants classés perturbateurs endocriniens, restreints par le règlement Reach. Au contact alimentaire chaud ou gras, migration documentée. À éviter pour cuisson, conservation chaude ou aliments gras. Sur les films alimentaires modernes en France, le PVC est largement remplacé par le PE.",
          },
          {
            indicator: "Sûr",
            name: "Code 4 - LDPE (polyéthylène basse densité)",
            description:
              "Films alimentaires modernes, sacs congélation, certaines barquettes. Souple, stable, faible migration. Ne contient pas de bisphénols. Compatible avec contact alimentaire à froid et tiède. À ne pas chauffer (déformation au-dessus de 80 °C).",
          },
          {
            indicator: "Le plus polyvalent",
            name: "Code 5 - PP (polypropylène)",
            description:
              "Tupperware et boîtes alimentaires modernes, gobelets réutilisables, certains contenants chaud. Très stable, supporte une chaleur modérée (jusqu'à 100-120 °C selon l'épaisseur), souvent compatible micro-ondes et lave-vaisselle. Faible migration en conditions normales. Ne contient pas de bisphénols. Le code à privilégier pour les boîtes de conservation usage courant.",
          },
          {
            indicator: "À éviter pour chaud",
            name: "Code 6 - PS (polystyrène)",
            description:
              "Gobelets jetables, barquettes en polystyrène, certains pots de yaourt. À éviter pour contact alimentaire chaud ou gras : migration possible de styrène, classé cancérogène possible (groupe 2B CIRC). Le règlement français interdit progressivement les contenants en polystyrène à usage unique (loi AGEC). Acceptable à froid en usage ponctuel mais à substituer dans la mesure du possible.",
          },
          {
            indicator: "Variable",
            name: "Code 7 - Autres (parfois polycarbonate, parfois bioplastiques)",
            description:
              "Catégorie fourre-tout incluant des résines diverses. Le polycarbonate (parfois utilisé pour gourdes, biberons d'avant 2010) peut contenir du BPA ; interdit en France depuis 2015 pour le contact alimentaire. Certains bioplastiques (PLA, acide polylactique) entrent aussi en code 7 et sont sûrs. La mention complémentaire (« sans BPA », « bioplastique », « polycarbonate ») est nécessaire pour juger. Sans information complémentaire, à éviter.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="À risque"
        title="Reconnaître les contenants à éviter et ceux à privilégier."
        subtitle="Quelques signes simples permettent de trier sa cuisine et d'identifier les contenants méritant remplacement ou usage limité."
        signs={[
          {
            label: "Boîtes plastiques opaques, rayées, déformées",
            description:
              "L'âge et l'usage abrasent les plastiques. Une boîte de Tupperware déformée, opacifiée, rayée par les couteaux : la couche superficielle est altérée, la migration potentielle est plus élevée. À remplacer par un contenant neuf en PP (code 5) ou par un contenant en verre.",
            severity: "modéré",
          },
          {
            label: "Boîtes anciennes (avant 2015) sans mention « sans BPA »",
            description:
              "Avant l'interdiction française du BPA au contact alimentaire (1er janvier 2015), certaines boîtes alimentaires en polycarbonate (code 7) pouvaient contenir du BPA. Si vos boîtes datent d'avant 2015 et sont en plastique dur transparent, vérifier le code et passer aux contenants modernes garantis sans BPA.",
            severity: "modéré",
          },
          {
            label: "Films alimentaires non identifiés",
            description:
              "Les films alimentaires modernes en France sont en PE (polyéthylène, code 4) : faible migration, acceptable au contact froid. Les anciens films en PVC (code 3) sont à éviter, surtout sur aliments gras (fromage, viande). Si la marque indique PE ou « plastifié sans phtalates », sécurité ; sinon, préférer les boîtes hermétiques ou les couvre-plats lavables.",
            severity: "léger",
          },
          {
            label: "Tetra Pak et briques alimentaires",
            description:
              "Les briques alimentaires (lait, jus, soupes) sont composées d'une couche externe de carton, une couche d'aluminium, une couche interne de polyéthylène (LDPE/code 4). Migration très faible en conditions normales d'usage. Acceptables pour stockage à température ambiante et réfrigérée. Ne pas réchauffer au micro-ondes (la couche aluminium pose problème).",
            severity: "léger",
          },
          {
            label: "Bouteilles d'eau en PET réutilisées plusieurs semaines",
            description:
              "Les bouteilles PET (code 1) sont conçues pour un usage unique. Le réemploi sur plusieurs jours/semaines avec exposition à la lumière et à la chaleur (sac, voiture) augmente la migration. Pour usage répété, préférer une gourde en inox 18/8 (sans nickel pour les contacts acides) ou en verre.",
            severity: "léger",
          },
          {
            label: "Couvercles colorés sur bocaux en verre",
            description:
              "Les bocaux en verre sont neutres, mais le revêtement intérieur des couvercles métalliques peut contenir des résines époxy contenant du BPA (sur produits anciens d'origine non-européenne). Sur produits récents européens, ces revêtements ont été reformulés. Pour conserve maison, préférer les couvercles certifiés sans BPA ou les bocaux à joint caoutchouc (Le Parfait, etc.).",
            severity: "léger",
          },
        ]}
        footerNote="Sans tout remplacer d'un coup, le bon réflexe est de remplacer progressivement : à mesure que les contenants s'usent, choisir verre ou inox pour les usages chauds et de longue durée, plastique PP (code 5) pour les usages froids et nomades."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi la migration des plastiques fait sujet."
        subtitle="Les autorités sanitaires européennes (EFSA, ANSES) suivent de près la question des migrants des emballages alimentaires. Voici les points clés à connaître."
        causes={[
          {
            number: "01",
            cause: "Le BPA était reconnu perturbateur endocrinien",
            explanation:
              "Le bisphénol A, utilisé dans le polycarbonate et certaines résines époxy, mime l'œstrogène à très faibles doses. L'EFSA a successivement revu à la baisse la DJT (dose journalière tolérable) : de 50 µg/kg en 2006 à 4 µg/kg en 2015, puis à 0,2 ng/kg en 2023 (réduction d'un facteur 20 000 par rapport à 2006). La France a anticipé ces évolutions en interdisant le BPA dans tous les contenants alimentaires dès le 1er janvier 2015.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les substituts (BPS, BPF) sont en cours d'évaluation",
            explanation:
              "Le bisphénol S (BPS) et le bisphénol F (BPF), utilisés comme alternatives au BPA, ont des structures similaires et des effets endocriniens documentés dans plusieurs études. L'EFSA et l'ANSES poursuivent leur évaluation. Le principe de précaution conduit certaines marques à proposer des contenants « sans bisphénol » (mention plus rigoureuse que « sans BPA »). À privilégier en l'état des connaissances.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les phtalates sont des perturbateurs endocriniens documentés",
            explanation:
              "Les phtalates (notamment DEHP, DBP, BBP, DiBP) sont utilisés pour assouplir les plastiques PVC. Plusieurs sont classés reprotoxiques cat. 1B selon le règlement CLP, restreints dans les jouets et articles de puériculture (Reach). Au contact alimentaire chaud ou gras, migration documentée. Éviter les films PVC et les contenants en PVC pour les aliments est un réflexe simple.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "La chaleur et la matière grasse aggravent la migration",
            explanation:
              "Tous les plastiques migrent davantage à chaud et avec aliments gras. Un Tupperware PP utilisé pour conserver une soupe tiède au réfrigérateur : migration négligeable. Le même Tupperware utilisé pour réchauffer au micro-ondes une lasagne grasse à 100 °C : migration significativement plus élevée, même si le contenant est marqué « compatible micro-ondes ». Préférer le verre dans ces conditions.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Le règlement européen fixe des limites de migration",
            explanation:
              "Le règlement (UE) n° 10/2011 fixe les limites globales de migration (LGM 60 mg/kg) et les limites spécifiques (LMS) pour de nombreuses substances. Tout plastique au contact alimentaire vendu en UE doit théoriquement respecter ces limites en conditions normales d'usage. La conformité est testée par les fabricants. Le principal risque sanitaire vient des mésusages (température, durée) plutôt que d'un usage conforme.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Bons réflexes au quotidien pour réduire les expositions."
        immediateLabel="Mesures simples à appliquer dès aujourd'hui"
        structuralLabel="Évolution durable de la cuisine"
        immediate={[
          {
            label: "Ne pas chauffer au micro-ondes en plastique",
            description:
              "Même les contenants marqués « compatibles micro-ondes » subissent une chaleur localisée importante qui peut accélérer la migration. Réflexe systématique : transvaser dans une assiette en verre, céramique ou un récipient pyrex avant micro-ondes. La couverture par un couvercle en verre ou une assiette à l'envers limite les projections sans recourir au film plastique.",
            effort: "Habitude quotidienne",
          },
          {
            label: "Privilégier verre et inox pour le stockage durable",
            description:
              "Bocaux en verre type Le Parfait (avec joints caoutchouc), boîtes en verre Pyrex ou IKEA 365 (couvercle plastique PP ou bambou), boîtes inox alimentaire : conviennent à toutes les conservations et au passage au four ou au congélateur. Coût initial 5 à 15 € la boîte, durée de vie quasi illimitée. À constituer progressivement plutôt que d'un coup.",
            effort: "Budget progressif",
          },
          {
            label: "Choisir PP (code 5) pour les usages plastique",
            description:
              "Quand le plastique est nécessaire (transport, nomade, repas extérieur), choisir des contenants en polypropylène (code 5) sans bisphénol. La majorité des Tupperware modernes et marques équivalentes sont en PP. Vérifier le triangle avec le 5 au dos du contenant. Lavage à la main de préférence pour préserver la longévité.",
            effort: "Vérification à l'achat",
          },
          {
            label: "Remplacer les contenants usagés",
            description:
              "Boîte rayée ou opacifiée : remplacer. Le coût d'une nouvelle boîte (3 à 10 € en PP de qualité) est minime, et la migration est nettement plus faible sur un plastique en bon état. Idéal : profiter de ces remplacements pour basculer progressivement vers le verre.",
            effort: "Renouvellement progressif",
          },
        ]}
        structural={[
          {
            label: "Constituer une réserve de bocaux en verre pour le quotidien",
            description:
              "Conserver les bocaux de pâte à tartiner, sauces, cornichons, achats en vrac. Bocaux Le Parfait neufs (1,5 à 5 € selon taille) : pour conserves maison, vrac, conservation longue durée. À terme, la majorité du stockage cuisine peut basculer en verre sans investissement disruptif.",
            effort: "Routine simple",
          },
          {
            label: "Bouteilles d'eau et gourdes en inox ou verre",
            description:
              "Gourde inox 18/8 alimentaire (sans nickel pour contacts acides) ou verre avec housse silicone : remplace avantageusement les bouteilles PET réemployées. Investissement 15 à 30 €, durée de vie longue. Pour les enfants : gourde inox avec gobelet, sans bisphénol, certifiée EN 14350.",
            effort: "15 à 30 € la gourde",
          },
          {
            label: "Films alimentaires : alternatives durables",
            description:
              "Couvre-plats en silicone alimentaire (réutilisables), bee-wraps (tissu enduit de cire d'abeille, lavables), couvercles en verre. Réduit les emballages plastique jetables, plus économique sur la durée. Films PE acceptables ponctuellement (sans phtalates), à utiliser sur aliments froids et non gras.",
            effort: "10 à 30 € pour kit",
          },
          {
            label: "Privilégier l'achat en vrac et les contenants consignés",
            description:
              "Magasins bio et boutiques de vrac : déposer ses propres contenants en verre ou en tissu pour limiter les emballages. Système de consigne sur certaines bières, eaux, yaourts. Réduit la quantité de plastique à usage unique dans la cuisine. Démarche compatible avec la majorité des produits secs, frais, liquides.",
            effort: "Habitude d'achat",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes avec les plastiques alimentaires."
        errors={[
          {
            label: "Chauffer au micro-ondes en boîte plastique « compatible »",
            explanation:
              "La mention « compatible micro-ondes » signifie que le contenant résiste à la chaleur sans fondre. Elle ne signifie pas que la migration est nulle. À chaque chauffe, surtout sur aliments gras, des migrations résiduelles s'opèrent. Transvaser dans le verre ou la céramique avant micro-ondes est un réflexe simple et efficace.",
          },
          {
            label: "Réutiliser longtemps des bouteilles d'eau en PET",
            explanation:
              "Les bouteilles PET sont conçues pour usage unique. Le réemploi sur plusieurs jours, avec rinçages, expositions à la lumière et à la chaleur, dégrade le plastique et augmente la migration. Pour bouteille de sport ou voyage, opter pour une gourde inox ou en verre dès le départ.",
          },
          {
            label: "Stocker aliments chauds dans boîte plastique immédiatement",
            explanation:
              "Verser une soupe chaude ou des restes brûlants directement dans une boîte plastique combine température et durée de contact. Mauvais réflexe. Laisser refroidir au préalable dans un récipient en verre ou inox, puis transférer en plastique seulement quand l'aliment est tiède.",
          },
          {
            label: "Conserver des aliments très gras ou acides longtemps en plastique",
            explanation:
              "L'huile, le pesto, les sauces tomate concentrées, les vinaigrettes : aliments gras ou acides qui favorisent la migration. Pour conservation au-delà de quelques jours, préférer le verre. Pour des contenants nomades de courte durée, le plastique PP est acceptable.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur les plastiques alimentaires"
        items={[
          {
            question: "« Sans BPA » signifie-t-il vraiment sain ?",
            answer:
              "« Sans BPA » signifie absence de bisphénol A. Mais le plastique peut contenir d'autres bisphénols (BPS, BPF) dont l'évaluation sanitaire évolue, ou d'autres additifs. La mention plus rigoureuse est « sans bisphénols » (au pluriel). En attendant un cadre plus complet, privilégier les contenants en polypropylène (code 5) reconnus comme parmi les plus sûrs, et basculer vers verre et inox pour les usages chauds et durables.",
          },
          {
            question: "Les biberons et tétines sont-ils sûrs aujourd'hui ?",
            answer:
              "En France, le BPA est interdit dans les biberons depuis 2010 et dans tous les contenants alimentaires depuis 2015. Les biberons actuels sont en polypropylène (PP, code 5), en polyamide (PA), en silicone ou en verre. Le verre est l'option la plus neutre. Pour stérilisation : suivre les notices, ne pas dépasser les températures recommandées, remplacer dès que biberon ou tétine montrent des signes d'usure.",
          },
          {
            question: "Faut-il remplacer toute sa vaisselle plastique d'un coup ?",
            answer:
              "Non. Une démarche progressive est plus réaliste et tout aussi efficace : remplacer chaque contenant en fin de vie par du verre ou de l'inox ; privilégier le verre pour les usages chauds (micro-ondes, four, conservation longue) ; conserver le plastique PP (code 5) en bon état pour usages froids et nomades. En quelques années, la cuisine bascule sans surcoût significatif.",
          },
          {
            question: "Le silicone alimentaire est-il sain ?",
            answer:
              "Le silicone alimentaire de qualité (certifié EN 14350 pour articles bébé, ou EFSA pour usage alimentaire général) est considéré comme stable et faible en migration jusqu'à 200-250 °C. Préférer les silicones platine (haut de gamme) aux silicones peroxyde (qualité variable). Pour pâtisserie au four, moules en silicone certifié sont une option acceptable. Pour la conservation, le silicone est plus rare et plus cher que verre/inox.",
          },
          {
            question: "Les sachets congélation sont-ils à éviter ?",
            answer:
              "Les sachets congélation sont en polyéthylène (LDPE, code 4) : peu de migration à froid, parmi les plastiques les plus sûrs. Pour la congélation et la décongélation au réfrigérateur, ils conviennent. À ne pas utiliser pour chauffage direct au micro-ondes ou cuisson sous vide à chaud (le sachet sous vide spécifique cuisson est différent du sachet congélation classique).",
          },
          {
            question: "Et le silicone teflon des moules pâtisserie ?",
            answer:
              "Certains moules à pâtisserie ont un revêtement antiadhésif de type PTFE (téflon). Stables jusqu'à 230-260 °C, supportent généralement la pâtisserie courante (190-210 °C). Éviter les températures très élevées et les rayures par ustensiles métalliques. Alternative : moules en silicone alimentaire certifié, ou moules en métal nu graissé/farinés.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits & habitudes",
            title: "Le silo produits & habitudes",
            description:
              "Vue d'ensemble : produits ménagers, lessive, gestes du quotidien, désodorisants.",
            href: "/produits-et-habitudes/",
          },
          {
            tag: "Produits & habitudes",
            title: "Vaisselle et ustensiles sains",
            description:
              "Casseroles, poêles, plats : comparatif inox, fonte, céramique, téflon.",
            href: "/produits-et-habitudes/vaisselle-ustensiles-sains/",
          },
          {
            tag: "Pièce par pièce",
            title: "Cuisine saine",
            description:
              "Aménagement, matériaux, ventilation, choix d'équipements pour une cuisine au quotidien.",
            href: "/piece-par-piece/cuisine-saine/",
          },
        ]}
      />
    </>
  );
}

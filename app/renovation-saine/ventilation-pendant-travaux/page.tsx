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
  title: "Ventilation pendant les travaux : protéger l'air en chantier intérieur",
  description:
    "Pendant la rénovation, les émissions de COV et les poussières atteignent leurs niveaux les plus hauts. Préparer la ventilation, isoler la zone et coordonner les phases pour limiter l'exposition.",
  alternates: {
    canonical:
      "https://www.maisonbionat.fr/renovation-saine/ventilation-pendant-travaux/",
  },
  openGraph: {
    title: "Ventilation pendant les travaux : protéger l'air en chantier intérieur",
    description:
      "Pendant la rénovation, les émissions de COV et les poussières atteignent leurs niveaux les plus hauts. Préparer la ventilation, isoler la zone et coordonner les phases pour limiter l'exposition.",
    url: "https://www.maisonbionat.fr/renovation-saine/ventilation-pendant-travaux/",
  },
};

const faqItems = [
  {
    question: "Faut-il couper la VMC pendant les travaux ?",
    answer:
      "En général non. Une VMC qui fonctionne extrait justement l'air chargé en COV et en poussières fines vers l'extérieur. La couper revient à laisser ces polluants s'accumuler dans le logement. La seule exception : un ponçage important ou une démolition très poussiéreuse, où il vaut mieux couper temporairement la VMC pour ne pas saturer son réseau, et compenser par une ventilation naturelle intense fenêtres ouvertes. La VMC doit être nettoyée et ses bouches contrôlées après ce type de chantier.",
  },
  {
    question: "Combien de temps faut-il aérer après une rénovation ?",
    answer:
      "Cela dépend des produits utilisés. Pour une simple peinture A+ acrylique, une aération renforcée de 7 à 14 jours suffit. Pour un chantier mêlant peinture, pose de sol collé et meubles neufs, prévoir 4 à 6 semaines. Pour une rénovation lourde avec beaucoup de matériaux récents, jusqu'à 8-10 semaines avec aération quotidienne en grand. La règle simple : aérer matin et soir 30 minutes minimum, fenêtres ouvertes en grand, jusqu'à disparition complète des odeurs et plusieurs jours au-delà.",
  },
  {
    question: "Une chambre d'enfant peut-elle être occupée juste après les travaux ?",
    answer:
      "Non. Pour la chambre d'un enfant ou d'un nourrisson, prévoir au minimum 6 à 8 semaines de dégazage avec aération renforcée et VMC fonctionnelle, idéalement 10 à 12 semaines pour une rénovation lourde. Cette durée correspond à la décroissance la plus forte des émissions de COV. L'enfant peut continuer à dormir dans une autre pièce pendant cette période. Pour une chambre de bébé à naître, planifier les travaux au moins 8 semaines avant la naissance.",
  },
  {
    question: "Les poussières de chantier sont-elles dangereuses ?",
    answer:
      "Les poussières fines générées par la démolition, le ponçage de plâtre, de bois, de béton, peuvent être irritantes pour les voies respiratoires et contiennent parfois des substances spécifiques (silice cristalline, fibres minérales). Pour les occupants, la protection passe par l'isolement de la zone de chantier (cloison provisoire en polyane, porte fermée, écran d'aspiration), une ventilation renforcée et un nettoyage humide après chantier. Pour les artisans, des équipements de protection individuelle sont obligatoires selon la nature du chantier (référence INRS).",
  },
];

export default function VentilationPendantTravauxPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    {
      name: "Ventilation pendant les travaux : protéger l'air en chantier intérieur",
      href: "https://www.maisonbionat.fr/renovation-saine/ventilation-pendant-travaux/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Rénovation saine"
        parentHref="/renovation-saine/"
        tag="Conduite de chantier"
        title="Ventilation pendant les travaux : la phase la plus chargée du chantier en émissions"
        quickAnswer="C'est pendant et juste après les travaux que les concentrations en COV, formaldéhyde et particules fines atteignent leurs niveaux les plus hauts dans un logement. Choisir des matériaux A+ ne sert qu'à moitié si la ventilation n'est pas pensée tout au long du chantier. Trois moments structurent l'approche : avant les travaux (vérifier la VMC, prévoir l'isolement de la zone), pendant les travaux (aération maximale, coordination avec les artisans, protection des occupants restants), et après les travaux (aération renforcée plusieurs semaines avant occupation des pièces sensibles, particulièrement pour les chambres d'enfants). L'INRS recommande aux professionnels une ventilation par captage à la source pour les opérations émissives ; pour les particuliers, une bonne aération naturelle et une VMC fonctionnelle suffisent dans la majorité des cas."
        stats={[
          {
            value: "× 5 à 10",
            label: "augmentation typique des concentrations COV pendant et juste après une rénovation intérieure",
          },
          {
            value: "28 jours",
            label: "période de mesure des étiquetages A+ (les émissions chutent fortement sur cette durée)",
          },
          {
            value: "6-8 sem.",
            label: "délai recommandé avant occupation d'une chambre d'enfant après rénovation lourde",
          },
          {
            value: "30 min × 2",
            label: "aération minimale matin et soir pendant et après les travaux, fenêtres en grand",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Trois phases du chantier" },
          { id: "signes", label: "Reconnaître un chantier mal ventilé" },
          { id: "causes", label: "D'où viennent les émissions de chantier" },
          { id: "actions", label: "Conduire un chantier respirable" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi la ventilation pendant les travaux mérite une attention spécifique."
        description="Une rénovation intérieure concentre dans le temps tout ce que le logement va dégazer ensuite : peintures fraîches, sols collés, joints en silicone, mobilier neuf, plâtre humide, colles, vernis, mastics. Les concentrations en COV peuvent être multipliées par 5 à 10 par rapport à un logement habité, parfois davantage dans les premiers jours suivant la pose. C'est aussi la phase où les poussières fines (silice du béton, fibres de plâtre, particules de bois) sont les plus présentes. La logique de ventilation diffère selon trois moments distincts du chantier : avant (préparation), pendant (limitation de l'exposition), et après (dégazage avant occupation). Chaque moment a ses propres priorités."
        variants={[
          {
            indicator: "Avant",
            name: "Phase de préparation",
            description:
              "Vérifier que la VMC fonctionne et que ses bouches sont propres : un chantier va générer beaucoup de poussières qui peuvent l'encrasser. Prévoir l'isolement de la zone de travaux (cloison provisoire en polyane, porte fermée, joint d'étanchéité au sol) si le reste du logement reste occupé. Choisir des produits A+ et planifier les phases les plus émissives en début de chantier pour maximiser le dégazage.",
          },
          {
            indicator: "Pendant",
            name: "Phase d'exécution",
            description:
              "Garder la VMC en service, sauf en cas de chantier très poussiéreux où il vaut mieux la couper temporairement et compenser par une aération naturelle massive. Ouvrir les fenêtres en grand pendant la pose et plusieurs heures après. Isoler les occupants restants dans les pièces non concernées, porte fermée. Coordonner avec les artisans : le moment de la peinture est le plus émissif, celui de la pose de sol collé presque autant.",
          },
          {
            indicator: "Après",
            name: "Phase de dégazage avant occupation",
            description:
              "Maintenir une aération renforcée pendant plusieurs semaines : matin et soir 30 minutes en grand, VMC à pleine puissance si réglable, chauffage modéré pour favoriser le dégazage. Ne pas occuper une pièce rénovée comme chambre avant 4 à 8 semaines selon l'intensité du chantier, jusqu'à 12 semaines pour une chambre d'enfant ou de bébé.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître un chantier mal ventilé et les situations à corriger."
        subtitle="Plusieurs signes alertent sur une ventilation insuffisante ou mal pensée pendant les travaux."
        signs={[
          {
            label: "Odeur de peinture, solvant ou colle qui persiste plusieurs semaines",
            description:
              "Une odeur forte qui ne décroît pas malgré l'aération signale soit des produits non A+, soit une ventilation insuffisante, soit les deux. C'est un signal clair : occupation des pièces sensibles à reporter, aération à renforcer, et vérification de la classe des produits utilisés.",
            severity: "critique",
          },
          {
            label: "Maux de tête, irritation des yeux ou de la gorge en pénétrant dans la pièce",
            description:
              "Ces symptômes apparaissent typiquement à des concentrations élevées de COV ou de formaldéhyde. À court terme ils traduisent une exposition aiguë qui justifie de quitter la pièce et d'aérer fortement. La répétition de ces signes oriente vers une consultation médicale et une mesure laboratoire de la qualité de l'air.",
            severity: "critique",
          },
          {
            label: "Bouches de VMC visiblement encrassées par la poussière du chantier",
            description:
              "Une bouche d'extraction couverte de poussière n'extrait plus correctement. Pendant un chantier poussiéreux, c'est inévitable. Le nettoyage doit être systématique en fin de chantier, et le réseau de VMC vérifié si la poussière a pu s'y déposer (ponçage, démolition).",
            severity: "modéré",
          },
          {
            label: "Pièce rénovée fermée pendant la nuit avec porte close",
            description:
              "Une pièce fraîchement repeinte, fenêtres et porte fermées pendant la nuit, voit ses concentrations en COV monter à des niveaux élevés. Pour les premières semaines, garder les fenêtres entrebâillées la nuit ou la porte ouverte pour permettre la circulation d'air, surtout si la VMC ne dessert pas directement cette pièce.",
            severity: "modéré",
          },
          {
            label: "Chantier poursuivi en hiver fenêtres systématiquement fermées",
            description:
              "L'hiver, la tentation est forte de garder les fenêtres fermées pour éviter de chauffer dehors. C'est précisément la période où l'aération est la plus utile, parce que les émissions sont plus marquées dans une pièce chauffée. Aérer brièvement mais souvent (15 minutes 3 à 4 fois par jour) plutôt que pas du tout.",
            severity: "modéré",
          },
          {
            label: "Occupants ressentant une dégradation de leur état général",
            description:
              "Toux, irritation respiratoire, asthme aggravé, fatigue inhabituelle chez des occupants vivant dans le logement pendant les travaux : ces signes orientent vers une exposition trop élevée et justifient de revoir l'organisation du chantier (déplacement temporaire, intensification de l'isolement de la zone). Une consultation médicale est recommandée si les symptômes persistent.",
            severity: "critique",
          },
        ]}
        footerNote="Ces signes ne remplacent pas une mesure laboratoire de la qualité de l'air, mais ils déclenchent l'action sans attendre. Une simple aération renforcée règle la majorité des cas."
      />

      <IssueCauses
        id="causes"
        title="D'où viennent les émissions massives d'un chantier d'intérieur."
        subtitle="Les sources sont concentrées sur quelques opérations à fort potentiel d'émission. Connaître lesquelles permet de cibler les protections."
        causes={[
          {
            number: "01",
            cause: "L'application des peintures, vernis et lasures",
            explanation:
              "Le moment de la peinture est l'un des plus émissifs du chantier, particulièrement les premières heures après application. Même une peinture A+ acrylique relargue des solvants pendant la phase humide. Les vernis et lasures à solvants sont encore plus marqués.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "La pose des sols collés et des revêtements muraux",
            explanation:
              "Les colles à parquet, à carrelage en pâte, à papier peint et à revêtement souple émettent fortement à la pose et pendant les jours suivants, surtout pour les colles à solvants. Les colles à dispersion aqueuse classées A+ et EC1 réduisent fortement ces émissions mais ne les annulent pas.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Le ponçage et la démolition",
            explanation:
              "Ces opérations ne libèrent pas tellement de COV mais beaucoup de poussières fines (silice cristalline du béton, fibres de plâtre, fines de bois). Ces poussières peuvent persister dans l'air des heures et se redéposer sur les surfaces, posant un problème distinct des COV mais important pour les occupants sensibles.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les meubles neufs et les matériaux humides",
            explanation:
              "Cuisines équipées, dressings, plans de travail en panneaux, mortiers et chapes humides : ces éléments installés pendant la phase finale du chantier dégazent à leur tour. Ils ne sont pas couverts par l'étiquetage A+ pour les meubles, ce qui rend leur impact difficile à anticiper sans certifications volontaires.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Une VMC inadaptée ou hors service pendant les travaux",
            explanation:
              "Une VMC bouchée, en panne ou coupée pendant les travaux laisse les émissions s'accumuler. C'est l'une des principales causes de chantier mal ventilé, particulièrement dans les rénovations énergétiques où l'étanchéité du bâti est renforcée sans vérification du système de ventilation.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Conduire un chantier en limitant l'exposition des occupants."
        immediate={[
          {
            label: "Vérifier et nettoyer la VMC avant le démarrage",
            description:
              "Bouches d'extraction propres, entrées d'air dégagées, débit testé. Si elle est en panne, faire intervenir avant les travaux : un chantier va aggraver le problème. Une VMC fonctionnelle est l'élément le plus déterminant du chantier respirable.",
            effort: "30 minutes ou intervention spécialisée",
          },
          {
            label: "Isoler la zone de chantier des pièces occupées",
            description:
              "Cloison provisoire en polyane, porte fermée, scotch d'étanchéité au sol et aux jonctions, écran d'aspiration si possible. L'objectif : empêcher poussières et COV de migrer dans les pièces où dorment et vivent les occupants. Particulièrement important si une chambre d'enfant reste occupée.",
            effort: "Quelques heures de mise en place",
          },
          {
            label: "Aérer en grand pendant et après chaque opération émissive",
            description:
              "Pendant la pose des peintures, vernis, sols collés : fenêtres ouvertes en grand, courant d'air si possible, et plusieurs heures après. Le moment de la pose est le plus chargé : ne pas l'effectuer fenêtres fermées « pour ne pas refroidir ». Si l'hiver impose des arbitrages, aérer plus souvent et moins longtemps.",
            effort: "Gratuit, organisation",
          },
          {
            label: "Coordonner les phases avec les artisans",
            description:
              "Demander aux artisans d'aérer pendant et après leur intervention, de respecter les délais de séchage avant la phase suivante, et de vous transmettre les fiches techniques des produits utilisés. Un artisan sérieux en rénovation saine fournit ces informations naturellement.",
            effort: "Temps de coordination",
          },
        ]}
        structural={[
          {
            label: "Prévoir un délai d'occupation suffisant des pièces sensibles",
            description:
              "Pour une chambre adulte rénovée : 2 à 4 semaines minimum d'aération renforcée avant occupation. Pour une chambre d'enfant : 6 à 8 semaines. Pour une chambre de bébé : 8 à 12 semaines, et planifier les travaux suffisamment en amont de la naissance. Cette durée correspond à la décroissance la plus forte des émissions.",
            effort: "Organisation, pas de coût",
          },
          {
            label: "Privilégier les produits A+ et certifiés en complément",
            description:
              "Pour les pièces sensibles, viser A+ et chercher en complément un produit certifié Écolabel européen, NF Environnement ou Ange Bleu. La cohérence entre revêtement, colle, sous-couche et joint pèse plus que la performance d'un seul produit.",
            effort: "Surcoût modéré à l'achat",
          },
          {
            label: "Mesurer la qualité de l'air avant occupation pour les pièces sensibles",
            description:
              "Pour une chambre de bébé ou une chambre d'enfant après rénovation lourde, un kit de mesure laboratoire (formaldéhyde, COV) à 50-150 € permet de vérifier objectivement que les concentrations sont redescendues à un niveau acceptable avant l'emménagement.",
            effort: "Coût ponctuel modéré",
          },
          {
            label: "Renforcer ou redimensionner la VMC dans le cadre d'une rénovation thermique",
            description:
              "Toute rénovation thermique qui renforce l'étanchéité du bâti doit s'accompagner d'une mise à niveau de la ventilation. Sans cela, le logement post-travaux piège durablement les COV, le formaldéhyde et le CO2. À chiffrer dès l'étude, pas après.",
            effort: "Investissement, intervention spécialisée",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur la ventilation de chantier."
        errors={[
          {
            label: "\"Si j'utilise des produits A+, je n'ai pas besoin d'aérer plus que d'habitude\"",
            explanation:
              "L'étiquette A+ mesure les émissions à 28 jours en chambre d'essai. Pendant et juste après la pose, les émissions de pose sont nettement plus élevées que cette mesure de référence, A+ ou pas. La ventilation renforcée pendant et après les travaux reste indispensable.",
          },
          {
            label: "\"Couper la VMC permet d'éviter d'aspirer la poussière\"",
            explanation:
              "Vrai pour les opérations très poussiéreuses (ponçage, démolition) où la VMC peut s'encrasser. Faux pour les phases de peinture et de pose : la VMC extrait justement les COV qu'on ne veut pas garder en pièce. La règle : VMC active sauf quand la poussière domine.",
          },
          {
            label: "\"Aérer en hiver fait remonter la facture de chauffage\"",
            explanation:
              "Aérer brièvement (10-15 minutes) ne refroidit pas durablement le bâti, qui conserve la chaleur des murs et du sol. La consommation supplémentaire reste limitée, et elle est sans commune mesure avec le bénéfice sanitaire pendant un chantier. C'est l'un des arbitrages les mieux établis.",
          },
          {
            label: "\"Si l'odeur a disparu, je peux occuper la pièce\"",
            explanation:
              "Le formaldéhyde et certains COV problématiques sont inodores ou perçus seulement à des concentrations élevées. L'absence d'odeur ne garantit pas l'absence d'émissions. Pour les pièces sensibles, respecter les délais de dégazage, indépendamment de la perception olfactive.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la ventilation pendant les travaux"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Aérer après travaux : routine et durée selon les chantiers",
            description:
              "Le détail de l'aération post-travaux selon la nature du chantier (peinture, sol, rénovation lourde), avec les durées indicatives.",
            href: "/renovation-saine/aerer-apres-travaux/",
          },
          {
            tag: "Rénovation saine",
            title: "Label A+ : ce qu'il dit sur les produits de chantier",
            description:
              "Comprendre l'étiquetage français des produits de construction pour faire les bons choix avant les travaux.",
            href: "/renovation-saine/label-a-plus-travaux/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux après pose",
            description:
              "Phénomène physique du dégazage et leviers concrets pour accélérer la baisse des émissions après installation.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
        ]}
      />
    </>
  );
}

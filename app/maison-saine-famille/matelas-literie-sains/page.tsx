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
  title: "Matelas et literie sains : matériaux, certifications, retardateurs de flamme",
  description:
    "Matelas mousse, latex, ressorts, laine : comparatif émissions, certifications fiables (OEKO-TEX, GOTS, CertiPUR, Eco-Institut), retardateurs de flamme. Méthode pour choisir un matelas et une literie compatibles avec une chambre saine.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/matelas-literie-sains/",
  },
  openGraph: {
    title: "Matelas et literie sains : matériaux, certifications, retardateurs de flamme",
    description:
      "Mousse, latex, ressorts, laine : comparatif et certifications pour choisir un matelas compatible avec une chambre saine.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/matelas-literie-sains/",
  },
};

export default function MatelasLiteriePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison & famille", href: "/maison-saine-famille/" },
    {
      name: "Matelas et literie sains",
      href: "https://www.maisonbionat.fr/maison-saine-famille/matelas-literie-sains/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Maison & famille"
        parentHref="/maison-saine-famille/"
        tag="Chambre saine et choix d'achat"
        title="Matelas et literie sains : matériaux, certifications, retardateurs de flamme."
        quickAnswer="Un matelas est utilisé en moyenne 8 heures par jour pendant 8 à 12 ans. Sa composition pèse réellement sur la qualité de l'air d'une chambre, surtout pendant les premières semaines (dégazage). Quatre grandes familles existent : mousses polyuréthane (les plus répandues, parfois émissives), mousses mémoire de forme (mousses PU additivées), latex (naturel, synthétique ou mixte), ressorts ensachés avec garnissage (mousse, laine, coton). Les certifications les plus fiables, contrôlées par tiers indépendants : OEKO-TEX Standard 100 (substances nocives), GOTS (textile bio certifié), CertiPUR (mousses sans certaines substances), Eco-Institut (émissions COV). Les retardateurs de flamme bromés sont aujourd'hui rares en literie domestique européenne, remplacés par des barrières mécaniques ou des matériaux naturellement résistants (laine). Pour une chambre saine : matelas certifié, dégazage 2 à 4 semaines en pièce ventilée avant utilisation, housse lavable, sommier compatible."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "8 ans", label: "durée de vie moyenne recommandée d'un matelas" },
          { value: "2–4 semaines", label: "dégazage utile avant la première nuit (chambre ventilée)" },
          { value: "60 %", label: "des matelas en France utilisent une base mousse polyuréthane" },
          { value: "4", label: "certifications fiables : OEKO-TEX 100, GOTS, CertiPUR, Eco-Institut" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les quatre familles de matelas" },
          { id: "signes", label: "Bien décoder une étiquette" },
          { id: "causes", label: "Pourquoi le matelas compte" },
          { id: "actions", label: "Choisir, dégazer, entretenir" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Familles"
        title="Mousse, latex, ressorts, hybride : ce qui les distingue"
        description="Les quatre grandes technologies de matelas se distinguent par leurs matériaux, leurs émissions potentielles, leur durée de vie et leur prix. Voici les repères factuels pour orienter le choix."
        variants={[
          {
            indicator: "Le plus courant",
            name: "Mousse polyuréthane (PU) ou mousse mémoire de forme",
            description:
              "Représente environ 60 % du marché en France. Densité de 25 à 50 kg/m³ selon la gamme. Émissions potentielles de COV (toluène, styrène, formaldéhyde résiduel selon les fabrications) particulièrement marquées les premières semaines. La certification CertiPUR-US ou Europe atteste l'absence de plomb, mercure, formaldéhyde au-dessus de seuils, et de certains retardateurs de flamme. Mémoire de forme : mousse viscoélastique additivée, parfois plus émissive que la mousse PU classique.",
          },
          {
            indicator: "Naturel ou synthétique",
            name: "Latex (naturel, synthétique ou mixte)",
            description:
              "Latex 100 % naturel (>85 % de latex naturel selon norme) : issu de la sève d'hévéa, peu émissif, hypoallergénique, durée de vie de 12 à 15 ans, prix élevé. Latex synthétique : pétrochimique, plus émissif. Latex mixte : pourcentage variable de naturel, à vérifier sur l'étiquette. Certification GOLS (Global Organic Latex Standard) garantit l'origine biologique du latex naturel. Excellent rapport durabilité/santé pour la version naturelle.",
          },
          {
            indicator: "Tradition",
            name: "Ressorts ensachés avec garnissage",
            description:
              "Carcasse de ressorts indépendants ensachés + couches de garnissage (mousse fine, laine, coton, soie selon gamme). Bonne aération naturelle, durée de vie 10 à 15 ans. Les émissions dépendent surtout du garnissage : un matelas ressorts avec garnissage laine et coton certifiés est parmi les options les plus saines. Avec garnissage mousse classique, les émissions se rapprochent d'un matelas mousse standard.",
          },
          {
            indicator: "Combinaisons",
            name: "Hybrides et matelas en laine pure",
            description:
              "Hybride : ressorts + couche de mousse mémoire ou latex en surface. Compromis confort, durée de vie variable selon qualité. Matelas 100 % laine (rare, artisanal) : naturellement ignifuge, régulateur thermique, peu émissif. Prix élevé, entretien spécifique. Solutions de niche pour démarches très exigeantes.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Décoder"
        title="Décoder une étiquette de matelas avant d'acheter."
        subtitle="Les fabricants communiquent souvent en termes marketing flous (« naturel », « eco », « bio »). Voici les éléments à vérifier concrètement pour distinguer une vraie démarche d'un argument commercial."
        signs={[
          {
            label: "Certification OEKO-TEX Standard 100",
            description:
              "Atteste que le produit fini a été testé pour de nombreuses substances nocives (formaldéhyde, métaux lourds, pesticides, colorants allergisants). Référence depuis 1992, contrôlée par instituts indépendants. À chercher en priorité, c'est aujourd'hui la certification la plus courante et la plus accessible pour les textiles et matelas.",
            severity: "léger",
          },
          {
            label: "Certification GOTS (Global Organic Textile Standard)",
            description:
              "Pour les matelas et linges de lit en coton, laine ou autre fibre naturelle. Garantit au moins 70 % de fibres biologiques certifiées, restriction sévère sur les substances chimiques de transformation, exigences sociales sur la chaîne de production. Plus exigeante que OEKO-TEX, présente surtout en gamme haut de gamme et chez les marques engagées.",
            severity: "léger",
          },
          {
            label: "Certification CertiPUR (mousse polyuréthane)",
            description:
              "Spécifique aux mousses PU. Atteste l'absence de plomb, mercure, cadmium, certains retardateurs de flamme bromés, formaldéhyde au-dessus de seuils, et fixe une limite stricte aux émissions de COV totales. Moins exigeante que GOTS sur les substances chimiques globales, mais bonne référence pour un matelas mousse standard.",
            severity: "léger",
          },
          {
            label: "Certification Eco-Institut (émissions COV)",
            description:
              "Atteste les faibles émissions de COV mesurées en chambre d'essai. Référence allemande très exigeante. Présente surtout dans les gammes haut de gamme orientées chambre saine. À privilégier si la qualité d'air est votre critère principal.",
            severity: "léger",
          },
          {
            label: "Mention « sans retardateurs de flamme bromés »",
            description:
              "Les retardateurs de flamme bromés (PBDE) sont restreints depuis 2004 en Europe pour certains usages, mais peuvent encore se trouver dans certains matelas importés. La mention explicite de leur absence est un bon signe, surtout pour les matelas non européens.",
            severity: "modéré",
          },
          {
            label: "Composition détaillée disponible",
            description:
              "Un fabricant qui détaille précisément les matériaux par couche (densité de mousse, pourcentage de latex naturel, nature du garnissage, traitement éventuel du tissu) communique sérieusement. Une étiquette qui se contente de « technologie exclusive », « matériaux premium » sans détail est un signal faible de transparence.",
            severity: "modéré",
          },
        ]}
        footerNote="Une bonne pratique : demander la fiche technique complète au vendeur, et le rapport de tests si l'argument de la qualité de l'air est mis en avant. Un vendeur sérieux fournit ces informations sans difficulté."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi le matelas pèse vraiment sur la qualité de l'air d'une chambre."
        subtitle="On ne respire l'air de sa chambre nulle part ailleurs aussi longtemps. Les conditions et la composition du matelas influencent directement ce qui se passe pendant le sommeil."
        causes={[
          {
            number: "01",
            cause: "Une exposition de 6 à 9 heures par nuit",
            explanation:
              "Aucun autre objet de la maison n'est en contact direct avec le corps aussi longtemps qu'un matelas. La chaleur du corps accélère l'émission de COV des matériaux émissifs (formaldéhyde, toluène, styrène). À l'échelle d'une vie, le sommeil représente environ un tiers du temps : l'environnement de chambre compte autant qu'un environnement de travail.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Le dégazage est le plus intense les premières semaines",
            explanation:
              "Tout matelas neuf émet des COV à plus forte concentration les 2 à 6 premières semaines. La « odeur de matelas neuf » est composée de ces émissions. La concentration baisse ensuite progressivement sur plusieurs mois selon la composition. Aérer fortement la chambre pendant cette période réduit l'exposition pendant la phase la plus émissive.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "La chambre est typiquement peu ventilée la nuit",
            explanation:
              "Beaucoup de gens dorment fenêtres fermées (bruit, sécurité, hiver). La ventilation mécanique seule ne renouvelle pas l'air aussi efficacement qu'une fenêtre ouverte. Les COV émis par le matelas s'accumulent dans le volume de la chambre. Pour les chambres très petites ou en sous-sol, le rapport volume/émetteur joue contre la qualité d'air.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les acariens prospèrent dans certains matelas",
            explanation:
              "Acariens : 2 à 10 millions par matelas typique selon l'âge et l'entretien. Leurs déjections sont l'allergène domestique le plus documenté. Une housse anti-acariens (tissée serré, perméable à l'air mais pas aux acariens, certifiée NF G 39-011) réduit massivement l'exposition. Voir aussi la page acariens.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "La literie complète l'exposition",
            explanation:
              "Couette, oreillers, draps, alèses : matériaux moins durables que le matelas, renouvelés plus souvent. Les choix de literie textile (coton, lin, laine biologiques certifiés OEKO-TEX ou GOTS) ont un impact similaire à celui du matelas, à coût plus modéré. La cohérence des choix textile pèse autant que le seul matelas.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Méthode d'achat, dégazage, entretien dans le temps."
        immediateLabel="À l'achat et à la livraison"
        structuralLabel="Entretien et renouvellement"
        immediate={[
          {
            label: "Choisir un matelas certifié OEKO-TEX au minimum",
            description:
              "Pour un matelas standard de chambre adulte : OEKO-TEX Standard 100 est le minimum à exiger. CertiPUR si mousse polyuréthane. GOTS et Eco-Institut pour les démarches plus exigeantes ou les chambres d'enfant. Si certification absente sur l'étiquette : poser la question au vendeur, et passer son chemin en l'absence de réponse claire.",
            effort: "Choix en magasin",
          },
          {
            label: "Privilégier matelas latex naturel ou ressorts à garnissage naturel",
            description:
              "Pour qualité d'air optimale : latex naturel certifié GOLS (>85 % latex naturel) ou ressorts ensachés avec garnissage laine/coton certifiés. Compromis : matelas mousse certifié CertiPUR + Eco-Institut. À écarter ou à choisir uniquement avec certifications strictes : mémoire de forme bas de gamme, importée sans certification.",
            effort: "Surcoût 30 à 100 %",
          },
          {
            label: "Dégazer 2 à 4 semaines avant utilisation",
            description:
              "À la livraison, déballer le matelas dans une pièce ventilée (idéalement la chambre destinée, fenêtre ouverte). Laisser dégazer 2 à 4 semaines selon la composition (plus court pour latex naturel, plus long pour mousse standard). Aérer la pièce plusieurs fois par jour. Si l'odeur de neuf reste forte au-delà de 4 semaines, prolonger le dégazage ou contacter le fabricant.",
            effort: "Patience à la livraison",
          },
          {
            label: "Choisir un sommier et une housse compatibles",
            description:
              "Sommier à lattes en bois massif non traité (hêtre, pin, douglas) plutôt que sommier tapissier dont le revêtement peut aussi émettre. Housse de matelas certifiée OEKO-TEX, lavable à 60 °C. Alèse imperméable en coton si nécessaire (PEVA ou PUL plus émissif). Une bonne housse prolonge la durée de vie du matelas de plusieurs années.",
            effort: "Achat groupé",
          },
        ]}
        structural={[
          {
            label: "Renouveler le matelas tous les 8 à 12 ans",
            description:
              "Au-delà, déformation, perte de soutien, accumulation d'acariens et de poussières même avec entretien. Un matelas affaissé contribue aux douleurs dorsales et à la mauvaise qualité de sommeil. Anticiper l'achat avant l'usure complète (12 mois pour bénéficier des soldes, comparer les offres). Reprise par le distributeur souvent possible.",
            effort: "Achat cyclique",
          },
          {
            label: "Aérer et retourner le matelas régulièrement",
            description:
              "Une fois par semaine : ouvrir la chambre fenêtre grande ouverte 15 à 30 minutes après le lever, draps tirés pour exposer la surface du matelas. Tous les 3 à 6 mois : retourner ou pivoter le matelas selon notice (certains modèles « double face », d'autres « une face »). Limite les déformations et favorise la dispersion de l'humidité nocturne.",
            effort: "Routine simple",
          },
          {
            label: "Aspirer le matelas tous les mois",
            description:
              "Aspirateur à filtration HEPA H13 minimum (sinon il rejette ce qu'il aspire) sur toute la surface, particulièrement les coutures et les bordures. Élimine acariens morts, peaux mortes, poussières. Pour les housses lavables : lavage à 60 °C tous les 2 à 3 mois (tue les acariens vivants). Pour les housses non lavables : aspiration soignée + ventilation.",
            effort: "1 fois/mois, 5 minutes",
          },
          {
            label: "Renouveler couette et oreillers tous les 5 à 7 ans",
            description:
              "Les couettes synthétiques perdent leur gonflant et accumulent acariens et humidité. Les oreillers se déforment et hébergent particulièrement les acariens (proches du visage). Renouvellement cyclique avec choix textile cohérent : OEKO-TEX au minimum, GOTS pour les démarches plus exigeantes. Couette en plumes ou en laine pour durabilité, à entretenir spécifiquement.",
            effort: "Achat cyclique",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes à l'achat ou à l'usage."
        errors={[
          {
            label: "Acheter un matelas en ligne sans vérification de certification",
            explanation:
              "Beaucoup de marques en ligne mettent en avant des arguments marketing (« naturel », « hypoallergénique », « eco ») sans certification tierce. Sans OEKO-TEX, GOTS, CertiPUR ou Eco-Institut explicitement mentionnés et vérifiables sur le site de l'organisme certificateur, les allégations ne valent rien. Vérifier systématiquement.",
          },
          {
            label: "Dormir dessus dès la livraison",
            explanation:
              "Le pic d'émissions est dans les premiers jours. Dormir dès la nuit de livraison expose à la concentration maximale de COV. Si le timing oblige (déménagement, attente long), aérer intensément la chambre pendant la première semaine, fenêtre grand ouverte la journée. Le délai supplémentaire de 2 à 3 semaines de dégazage est facile à organiser et limite réellement l'exposition.",
          },
          {
            label: "Garder un vieux matelas « pour une chambre d'amis »",
            explanation:
              "Un matelas de plus de 12 ans est saturé d'acariens, de peaux mortes et a perdu son soutien. Le réutiliser en chambre d'amis ne le rend pas plus sain. Pour limiter le gaspillage, donner à un proche ou à un acteur de la solidarité s'il est encore en bon état, ou faire reprendre par le distributeur pour recyclage. Ne pas en faire un héritage à risque sanitaire.",
          },
          {
            label: "Confondre « biosourcé » et « certifié »",
            explanation:
              "« Latex naturel », « coton bio », « laine naturelle » : indicateurs intéressants mais sans contrôle tiers, ils ne garantissent rien. La certification (GOTS, GOLS, OEKO-TEX) est ce qui rend les allégations crédibles. Sans certification, les allégations sont des arguments marketing libres, parfois véridiques, parfois pas.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur les matelas et la literie"
        items={[
          {
            question: "Quel budget pour un matelas vraiment sain ?",
            answer:
              "Matelas mousse certifié CertiPUR + OEKO-TEX en 140x190 : 500 à 1 000 € selon marque. Matelas latex 100 % naturel certifié GOLS : 1 200 à 2 500 €. Matelas ressorts avec garnissage naturel certifié : 800 à 2 000 €. Matelas mémoire de forme certifié Eco-Institut : 800 à 1 800 €. Pour information, le matelas représente un achat à amortir sur 8 à 12 ans, le coût par nuit reste très modéré (10 à 50 centimes selon gamme).",
          },
          {
            question: "Matelas pour bébé : critères spécifiques ?",
            answer:
              "Pour un berceau ou un lit à barreaux : matelas certifié OEKO-TEX Standard 100 catégorie I (la plus exigeante, dédiée aux articles pour enfants jusqu'à 3 ans). Latex naturel ou matelas en mousse haute densité certifiée Eco-Institut. Eviter mousse mémoire de forme (trop molle, risque d'enfoncement pour nourrisson). Housse lavable indispensable. Pas de protection antimicrobienne (souvent inutile et émissive). Voir la page chambre de bébé saine.",
          },
          {
            question: "Les retardateurs de flamme sont-ils encore un problème ?",
            answer:
              "En Europe, les retardateurs de flamme bromés (PBDE) sont fortement restreints depuis 2004. Les matelas vendus en France et fabriqués en Europe utilisent désormais soit des barrières mécaniques (tissus tissés serré), soit des matériaux naturellement ignifuges (laine), soit des retardateurs moins problématiques. Vigilance accrue sur les matelas importés hors UE (notamment américains, qui répondent à des normes différentes — California TB117).",
          },
          {
            question: "Un matelas en latex naturel peut-il provoquer une allergie ?",
            answer:
              "L'allergie au latex naturel concerne environ 1 % de la population générale. Les matelas en latex naturel modernes utilisent du latex vulcanisé et lavé, qui contient des concentrations très faibles de protéines allergisantes. Le risque allergique reste donc faible, sauf pour personnes diagnostiquées allergiques au latex (notamment certains professionnels de santé exposés au latex de gants). En cas d'allergie connue, opter pour latex synthétique ou matelas ressorts/mousse certifié.",
          },
          {
            question: "Comment évaluer un matelas en ligne sans le tester ?",
            answer:
              "Privilégier les marques offrant une période d'essai (90 à 120 jours) avec reprise gratuite si insatisfaction. Lire en détail la fiche technique : matériaux par couche, densité, certifications listées avec numéros vérifiables. Avis croisés sur plusieurs sites indépendants (UFC Que Choisir, 60 Millions de Consommateurs, comparateurs spécialisés). Privilégier les marques qui détaillent leur production plutôt que celles qui se contentent de slogans.",
          },
          {
            question: "Faut-il une housse anti-acariens ?",
            answer:
              "Pour les personnes allergiques aux acariens diagnostiquées, oui : une housse anti-acariens (tissée serré, certifiée NF G 39-011 ou équivalent, perméable à l'air mais pas aux allergènes) réduit significativement l'exposition. Pour les personnes non allergiques, l'intérêt est plus marginal et le coût (50 à 200 €) à mettre en balance avec une routine d'aération, d'aspiration et de lavage du linge à 60 °C qui réduit déjà fortement la population d'acariens.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Maison & famille",
            title: "Chambre de bébé saine",
            description:
              "Critères matelas, peinture, mobilier et textile pour aménager une chambre de nourrisson sans compromis.",
            href: "/maison-saine-famille/chambre-bebe-saine/",
          },
          {
            tag: "Pièce par pièce",
            title: "Chambre saine adulte",
            description:
              "Mobilier, matelas, textile, ventilation : la vue d'ensemble pour une chambre orientée qualité du sommeil.",
            href: "/piece-par-piece/chambre-saine/",
          },
          {
            tag: "Air intérieur",
            title: "Acariens à la maison",
            description:
              "Allergène domestique le plus documenté : ce qui prouve son rôle, ce qui le limite vraiment dans une chambre.",
            href: "/air-interieur/acariens-maison/",
          },
        ]}
      />
    </>
  );
}

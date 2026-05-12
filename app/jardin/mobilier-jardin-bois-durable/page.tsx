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
  title: "Mobilier de jardin durable : choisir un bois sain et résistant",
  description:
    "Bois autoclave, thermo-traité, essences naturellement durables (mélèze, robinier, douglas, ipé) : critères pour choisir un mobilier de jardin sain et durable. Traitements à privilégier ou à éviter, entretien dans le temps.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/mobilier-jardin-bois-durable/",
  },
  openGraph: {
    title: "Mobilier de jardin durable : choisir un bois sain et résistant",
    description:
      "Autoclave, thermo-traité, essences durables : comment choisir un mobilier de jardin sain qui dure dans le temps.",
    url: "https://www.maisonbionat.fr/jardin/mobilier-jardin-bois-durable/",
  },
};

export default function MobilierJardinBoisPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Mobilier de jardin durable : choisir un bois sain et résistant",
      href: "https://www.maisonbionat.fr/jardin/mobilier-jardin-bois-durable/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Jardin"
        parentHref="/jardin/"
        tag="Équipement extérieur"
        title="Mobilier de jardin : choisir un bois durable et sain."
        quickAnswer="Trois familles de bois s'offrent à vous pour un mobilier de jardin durable : les essences naturellement durables (mélèze, robinier, douglas, cumaru, ipé) qui ne nécessitent aucun traitement chimique ; les bois thermo-traités (modification physique par chauffage à 180–230 °C, sans biocides), durables et stables ; les bois autoclave classe 4 imprégnés de sels (cuivre, acide borique, ammonium quaternaire), encore autorisés mais contenant des substances préoccupantes (l'acide borique est classé reprotoxique catégorie 2). Pour un usage en contact direct avec la peau ou la nourriture (banc, table de pique-nique, planche à découper extérieure), préférez les essences naturelles ou le thermo-traité. Pour des structures porteuses au sol (poteaux, terrasses), l'autoclave reste un compromis fréquent."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "5", label: "classes d'emploi du bois (NF EN 335) selon l'exposition" },
          { value: "180–230 °C", label: "température du traitement thermique haute température" },
          { value: "20–30 ans", label: "durée de vie d'un mobilier en essence durable bien entretenu" },
          { value: "Cat. 2", label: "classement de l'acide borique en reprotoxique (CLP)" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Trois familles de bois" },
          { id: "signes", label: "Adapter au bon usage" },
          { id: "causes", label: "Pourquoi privilégier le naturel" },
          { id: "actions", label: "Choix et entretien" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Les options"
        title="Trois familles de bois pour le mobilier extérieur"
        description="Le mobilier de jardin durable se choisit en fonction de l'exposition aux intempéries, du contact avec la peau ou la nourriture, et de l'impact environnemental accepté. Voici ce qui distingue les principales options."
        variants={[
          {
            indicator: "Naturellement durables",
            name: "Mélèze, robinier, douglas, cumaru, ipé",
            description:
              "Essences dont le bois de cœur résiste naturellement aux intempéries grâce à sa densité et à ses composés naturels (tanins, extractibles). Aucun traitement chimique nécessaire. Mélèze et douglas : essences européennes, classes 3 à 4, vieillissement gris argenté naturel. Robinier (faux acacia) : excellente résistance, ressource souvent locale. Cumaru et ipé : tropicaux, durables 25 à 40 ans, vérifier la certification FSC ou PEFC.",
          },
          {
            indicator: "Modifiés sans biocides",
            name: "Bois thermo-traités (Thermowood, Plato)",
            description:
              "Bois chauffés sous atmosphère contrôlée à 180–230 °C pendant plusieurs heures : modification chimique de la cellulose et de la lignine qui rend le bois plus stable, plus résistant aux champignons et moins absorbant d'humidité. Aucun biocide ajouté. Essences thermo-traitées courantes : pin, frêne, hêtre, peuplier. Durabilité accrue à classe 3, parfois 4. Aspect plus foncé, vieillissement gris.",
          },
          {
            indicator: "Traités chimiquement",
            name: "Autoclave classe 4 (CCB, sels de cuivre)",
            description:
              "Bois résineux (pin sylvestre, pin maritime) imprégnés sous pression de sels de cuivre, acide borique et ammonium quaternaire. Classe 4 : utilisable en contact direct avec le sol et l'eau. Autorisé en Europe, mais l'acide borique est classé reprotoxique catégorie 2 (substance soupçonnée de nuire à la fertilité). Pertinence : structures porteuses au sol où la durabilité prime sur le contact direct. À éviter pour bancs, tables, jeux d'enfants en contact direct.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Adapter"
        title="Quel bois pour quel usage."
        subtitle="Le choix du bois dépend autant de l'exposition que de l'usage. Voici les repères les plus utiles pour ne pas surinvestir ni sous-équiper."
        signs={[
          {
            label: "Banc, table, chaise : contact direct avec la peau",
            description:
              "Privilégier une essence naturellement durable (robinier, mélèze, douglas, teck FSC) ou un bois thermo-traité. L'autoclave est déconseillé pour ce contact prolongé : même si les substances sont fixées dans le bois, l'idéal est de les éviter quand une alternative existe.",
            severity: "modéré",
          },
          {
            label: "Table de pique-nique, jeux d'enfants, bac potager",
            description:
              "Contact direct avec la nourriture ou des enfants : éviter strictement l'autoclave. Préférer les essences durables non traitées, le mélèze, le robinier, ou le thermo-traité. Pour un bac potager : robinier ou mélèze brut, douglas pour budget plus serré, ou parois en pierre, métal, ou ardoise.",
            severity: "critique",
          },
          {
            label: "Pergola, structure aérienne sans contact sol",
            description:
              "Douglas brut suffit dans la plupart des cas (classe 3 naturelle). Mélèze pour une finition plus noble. Bois thermo-traité si vous voulez une couleur foncée durable. Autoclave classe 3 acceptable mais inutile pour cet usage non en contact sol.",
            severity: "léger",
          },
          {
            label: "Terrasse, lame de sol extérieur",
            description:
              "Trois options solides : ipé ou cumaru FSC pour durabilité maximale (25 à 40 ans), thermo-traité pour compromis sain/durable, douglas ou mélèze brut pour solution locale (15 à 20 ans). L'autoclave classe 4 est fréquent à bas coût mais moins satisfaisant en contact direct (pieds nus).",
            severity: "modéré",
          },
          {
            label: "Poteau de clôture ou de pergola en contact sol",
            description:
              "Contact direct avec la terre, classe 4 requise. Robinier ou châtaignier acceptable (essences durables traditionnelles pour piquets). Autoclave classe 4 reste fréquent et pratique. Alternative : sabot métallique galvanisé qui isole le poteau du sol, permettant d'utiliser une essence moins durable.",
            severity: "léger",
          },
          {
            label: "Mobilier exposé en plein soleil et pluie",
            description:
              "Exposition extrême : choisir une essence très durable (ipé, cumaru, robinier, teck) ou prévoir un stockage hivernal. Le bois thermo-traité est plus stable mais devient cassant sous longue exposition extrême. Tous les bois grisaillent à la lumière UV : esthétique différente, pas un défaut technique.",
            severity: "modéré",
          },
        ]}
        footerNote="Aucun bois extérieur n'est éternel. Un mobilier durable se reconnaît surtout à sa réparabilité : pièces remplaçables, assemblage vissé plutôt que collé, sections épaisses qui survivent à un ponçage périodique."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi naturel"
        title="Pourquoi privilégier les bois non traités ou thermo-traités."
        subtitle="Le choix entre essences naturellement durables, thermo-traités et autoclave n'est pas qu'une affaire de prix. Voici les raisons sanitaires et environnementales qui structurent ce choix."
        causes={[
          {
            number: "01",
            cause: "L'acide borique est classé reprotoxique catégorie 2",
            explanation:
              "L'acide borique, présent dans l'autoclave classe 4, est classé H360 (substance soupçonnée de nuire à la fertilité ou au fœtus) selon le règlement européen CLP. Les quantités libérées par un mobilier autoclave en usage normal sont faibles, mais le principe de précaution recommande d'éviter le contact direct prolongé, surtout pour les enfants et femmes enceintes.",
            frequency: "fréquent",
          },
          {
            number: "02",
            cause: "Le cuivre s'accumule dans les sols",
            explanation:
              "Les sels de cuivre utilisés en autoclave sont peu solubles mais une partie migre dans le sol avoisinant au fil des années. Sur des piquets de clôture ou des bacs potager autoclave, accumulation possible en pied. Le cuivre est toxique pour les vers de terre et la vie aquatique au-dessus de certains seuils. Pertinence d'éviter l'autoclave près des potagers.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Le thermo-traitement n'ajoute aucun produit chimique",
            explanation:
              "Le procédé Thermowood, Plato et équivalents repose uniquement sur la chaleur (180 à 230 °C, plusieurs heures, atmosphère inerte). La modification de la structure du bois est physique : les sucres résiduels (qui nourrissent les champignons) sont détruits par la chaleur, le bois devient hydrophobe et résistant. Aucun résidu de traitement chimique, aucune émission de COV au fil du temps.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les essences durables locales réduisent l'impact transport",
            explanation:
              "Mélèze, douglas, robinier sont des essences européennes facilement disponibles. Un mobilier en douglas français ou en robinier d'Europe centrale a une empreinte carbone bien plus faible qu'un teck birman ou un cumaru brésilien, même certifiés. Sauf besoin spécifique (durabilité tropicale), privilégier les essences locales fait sens écologiquement.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Un mobilier réparable dure deux fois plus longtemps",
            explanation:
              "La durabilité réelle d'un mobilier dépend autant de l'essence que de sa conception. Sections épaisses (≥ 25 mm), assemblages vissés, possibilité de remplacer une lame cassée, ponçage et huilage périodiques : un mobilier mélèze bien conçu dure 25 ans, un mobilier industriel en bois équivalent mais mal conçu 7 à 10 ans. Le choix du fabricant compte autant que le choix de l'essence.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et entretenir son mobilier de jardin."
        immediateLabel="Critères de choix à l'achat"
        structuralLabel="Entretien dans le temps"
        immediate={[
          {
            label: "Vérifier l'essence et l'origine",
            description:
              "Demander l'essence précise (pas seulement « bois exotique »), le pays d'origine, la certification (FSC ou PEFC pour les bois tropicaux). Refuser une formulation vague type « bois traité » sans précision sur le procédé (autoclave, thermo, huilé en surface ?). Un fabricant sérieux fournit ces informations sans difficulté.",
            effort: "5 minutes de questions",
          },
          {
            label: "Privilégier les sections épaisses",
            description:
              "Pour banc, table, chaise extérieure : minimum 25 mm d'épaisseur sur les pièces porteuses, 18 mm sur les pièces secondaires. Sections plus fines disponibles à bas prix mais durée de vie réduite (déformation, fente, rupture). L'épaisseur permet aussi un ponçage périodique sans arriver au cœur du bois.",
            effort: "Critère à vérifier à l'achat",
          },
          {
            label: "Vérifier assemblage et quincaillerie",
            description:
              "Assemblages vissés (réparables) plutôt que collés. Vis en inox A2 ou A4 (résistent à la corrosion sous intempéries). Charnières et ferrures inox ou laiton. Une chaise pliante avec vis acier qui rouillent en 2 ans est jetable, quelle que soit la qualité du bois.",
            effort: "Inspection visuelle",
          },
          {
            label: "Tester l'occasion et les ressourceries",
            description:
              "Un mobilier en mélèze, robinier ou teck d'occasion bien entretenu peut servir 20 ans de plus après un simple ponçage et huilage. Brocantes, sites de seconde main, ressourceries : qualité d'essence inaccessible au neuf à budget équivalent, et choix le plus écologique.",
            effort: "Patience et recherche",
          },
        ]}
        structural={[
          {
            label: "Huile naturelle annuelle, pas de lasure plastique",
            description:
              "Une fois par an au printemps : ponçage léger (grain 120) puis huile dure (huile de lin, tung, ou mélange naturel pour bois extérieur). L'huile pénètre, nourrit, protège sans former de film qui pèlera. Éviter les lasures et vernis qui forment un film : quand le film se craquèle (3 à 5 ans), l'eau pénètre dessous et le bois pourrit plus vite qu'un bois nu.",
            effort: "2 à 4 heures par an",
          },
          {
            label: "Laisser griser ou maintenir la couleur",
            description:
              "Tous les bois extérieurs grisaillent sous UV : c'est une oxydation de surface qui n'affecte pas la solidité. Deux choix esthétiques : accepter la patine gris argenté (souvent élégante, mélèze et douglas particulièrement beaux), ou maintenir la couleur par huile pigmentée annuelle. Choix personnel, pas technique.",
            effort: "Aucun si on laisse griser",
          },
          {
            label: "Stocker à l'abri en hiver si possible",
            description:
              "Un mobilier qui passe l'hiver à l'abri (garage, abri de jardin, simple bâche respirante) durera 50 à 100 % plus longtemps qu'un mobilier exposé au gel, neige et alternances gel-dégel. Pour les pièces très lourdes (table en pierre, banc maçonné), à défaut : housses respirantes (pas de bâches étanches qui condensent).",
            effort: "Quelques heures saisonnier",
          },
          {
            label: "Réparer plutôt que remplacer",
            description:
              "Une lame d'assise cassée, une vis arrachée, un pied éclaté : presque toujours réparables sur un mobilier en bois massif bien conçu. Remplacer une seule pièce coûte 5 à 20 €, remplacer le meuble entier 100 à 800 €. Le réflexe réparation prolonge fortement la durée de vie effective.",
            effort: "Variable selon réparation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes à l'achat d'un mobilier de jardin."
        errors={[
          {
            label: "Acheter un mobilier autoclave classe 4 pour une table de pique-nique",
            explanation:
              "L'autoclave classe 4 est conçu pour le contact sol, pas pour le contact prolongé avec la peau ou la nourriture. Pour table, banc, jeu d'enfants : essences durables (mélèze, robinier, douglas, teck FSC) ou thermo-traité. Le coût est légèrement plus élevé, le bénéfice sanitaire et de durabilité significatif.",
          },
          {
            label: "Croire que « bois exotique » est synonyme de qualité",
            explanation:
              "Le terme « bois exotique » sans précision peut cacher des essences non durables, des plantations sans gestion durable ou des exploitations problématiques. Demander toujours l'essence précise et la certification (FSC ou PEFC). Un mélèze européen documenté vaut mieux qu'un « bois exotique » mystérieux.",
          },
          {
            label: "Appliquer une lasure film à la place d'une huile",
            explanation:
              "Les lasures formant un film opaque ou semi-opaque protègent à court terme mais piègent l'humidité sous le film en vieillissant. Quand le film se craquèle, l'eau pénètre et le bois pourrit plus vite qu'un bois nu ou huilé. Préférer les huiles dures qui pénètrent (lin cuit, tung) ou les saturateurs sans film.",
          },
          {
            label: "Laisser le bois en contact direct avec un sol humide",
            explanation:
              "Un pied de table, de banc ou de chaise posé directement sur une terrasse humide ou sur la pelouse pourrit par capillarité, même en essence durable. Patins de protection (caoutchouc, plastique, métal), sabots métalliques pour les poteaux, surélever de 1 à 2 cm : interventions simples qui doublent la durée de vie.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le mobilier de jardin durable"
        items={[
          {
            question: "Le mobilier autoclave est-il dangereux pour la santé ?",
            answer:
              "À usage normal, le risque sanitaire d'un mobilier autoclave classe 4 est faible : les substances sont fixées dans le bois et la migration est limitée. L'acide borique étant classé reprotoxique catégorie 2 (CLP), le principe de précaution recommande d'éviter le contact direct prolongé, surtout pour enfants et femmes enceintes. Pour un usage en contact direct (banc, table, jeux), une alternative (essence durable, thermo-traité) est préférable quand le surcoût est acceptable.",
          },
          {
            question: "Quelle différence entre teck FSC et teck non certifié ?",
            answer:
              "Le teck FSC provient de plantations gérées durablement (rotation maîtrisée, droits sociaux, traçabilité). Le teck non certifié peut provenir de coupes illégales en forêt primaire (Myanmar notamment), avec impact écologique et social très négatif. Le prix du teck FSC est 20 à 40 % plus élevé, justifié par la traçabilité. Pour un bois tropical, exiger FSC ou PEFC est un minimum.",
          },
          {
            question: "Le bois thermo-traité est-il aussi résistant que l'autoclave ?",
            answer:
              "En conditions hors contact sol (classe 3) : oui, voire plus stable dans la durée. Le bois thermo-traité absorbe moins d'humidité, se déforme moins, résiste bien aux champignons. En conditions contact sol (classe 4) : moins approprié, l'autoclave reste plus fiable pour des poteaux ou structures plantées. Pour mobilier classique, terrasse, bardage : le thermo est une excellente alternative.",
          },
          {
            question: "Faut-il huiler un teck ou un cumaru ?",
            answer:
              "Optionnel. Ces essences à forte teneur en huiles naturelles résistent très bien sans entretien : elles grisaillent naturellement en surface, gardent leur solidité 20 à 30 ans sans rien faire. Si vous voulez maintenir la couleur dorée d'origine : huile spéciale (teck oil) une à deux fois par an. Décision purement esthétique.",
          },
          {
            question: "Un mobilier en plastique recyclé est-il une bonne alternative ?",
            answer:
              "Pour certains usages (bac potager, mobilier de bord de piscine, transats), oui. Le plastique recyclé HDPE (haute densité polyéthylène) a une durée de vie de 30 à 50 ans sans entretien, ne pourrit pas, ne demande aucun traitement. Limites : empreinte carbone à la fabrication, esthétique plus froide, recyclage en fin de vie moins évident. Bon compromis fonctionnel sur certains usages, à équilibrer avec le réflexe bois durable.",
          },
          {
            question: "Comment reconnaître un bois durable en magasin ?",
            answer:
              "Lire l'étiquette : essence précise (pas « bois extérieur »), classe d'emploi (NF EN 335 : 3 ou 4 selon usage), origine, certification (FSC, PEFC). Demander si non indiqué : un fabricant sérieux a la réponse. Vérifier sections (≥ 25 mm sur pièces porteuses), assemblage (vis inox, charnières non rouillables), absence de défauts (nœuds traversants, fentes ouvertes). Un mobilier de qualité se reconnaît à la précision des informations fournies.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Jardin",
            title: "Le silo jardin sain",
            description:
              "Sol vivant, eau de pluie, biodéchets, équipements durables : la vue d'ensemble du jardin sain.",
            href: "/jardin/",
          },
          {
            tag: "Matériaux sains",
            title: "Bois sains et finitions intérieures",
            description:
              "Le même raisonnement essence durable / thermo-traité / certification s'applique aux bois intérieurs.",
            href: "/materiaux-sains/",
          },
          {
            tag: "Pièce par pièce",
            title: "L'extérieur immédiat de la maison",
            description:
              "Terrasse, balcon, abord direct de la façade : où s'intègre concrètement le mobilier de jardin.",
            href: "/piece-par-piece/exterieur-sain/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Adoucisseur d'eau et santé : sodium, déminéralisation, entretien",
  description:
    "Adoucisseur d'eau à résines échangeuses d'ions : principe, apport de sodium, position de l'ANSES et du HCSP, entretien, limites sanitaires. Sortir robinet d'eau froide non adoucie en cuisine recommandé par les autorités.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/eau-maison/adoucisseur-eau-sante/",
  },
  openGraph: {
    title: "Adoucisseur d'eau et santé : sodium, déminéralisation, entretien",
    description:
      "Sodium, déminéralisation, entretien des résines : ce qu'apporte vraiment un adoucisseur et ses limites sanitaires.",
    url: "https://www.maisonbionat.fr/eau-maison/adoucisseur-eau-sante/",
  },
};

export default function AdoucisseurEauPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Eau maison", href: "/eau-maison/" },
    {
      name: "Adoucisseur d'eau et santé",
      href: "https://www.maisonbionat.fr/eau-maison/adoucisseur-eau-sante/",
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
        tag="Équipement et santé : information générale"
        title="Adoucisseur d'eau : utile pour le calcaire, à utiliser avec discernement."
        quickAnswer="L'adoucisseur d'eau classique fonctionne par échange d'ions : il remplace le calcium et le magnésium (responsables du calcaire) par du sodium, fixés sur des résines régénérées au sel. Il réduit efficacement les dépôts de tartre dans les canalisations et les appareils, prolonge la durée de vie du ballon d'eau chaude et améliore le confort sur la peau et les textiles. Sur le plan sanitaire, l'ANSES et le Haut Conseil de la santé publique (HCSP) recommandent de conserver une arrivée d'eau froide non adoucie pour la cuisine (boisson et préparation alimentaire), de ne pas adoucir l'eau au point de la rendre totalement molle (titre hydrotimétrique cible 8 à 15 °f, jamais en dessous), et d'entretenir l'installation rigoureusement pour éviter les contaminations microbiologiques des résines. L'eau adoucie classique n'est pas recommandée pour les nourrissons préparant biberons. Cette page fait le point factuel et oriente vers les bons usages."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "8–15 °f", label: "dureté résiduelle cible recommandée (ANSES, HCSP)" },
          { value: "200 mg/L", label: "seuil réglementaire de sodium dans l'eau potable (Directive 98/83/CE)" },
          { value: "Robinet froid", label: "préconisé non adouci pour la cuisine (HCSP)" },
          { value: "Annuel", label: "rythme minimum d'entretien recommandé des résines" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comment fonctionne un adoucisseur" },
          { id: "signes", label: "Cas où il est utile, cas où non" },
          { id: "causes", label: "Pourquoi le débat sanitaire" },
          { id: "actions", label: "Choix, installation, entretien" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Technologie"
        title="Adoucisseurs et alternatives : ce qu'ils font vraiment"
        description="Le marché propose plusieurs technologies vendues sous le nom d'« adoucisseur » ou de « traitement anti-calcaire ». Leurs effets et leurs limites diffèrent fortement."
        variants={[
          {
            indicator: "Référence",
            name: "Adoucisseur à résines échangeuses d'ions",
            description:
              "La technologie standard et la plus efficace. Les ions calcium (Ca²⁺) et magnésium (Mg²⁺) de l'eau sont retenus par des résines saturées en sodium (Na⁺) qui sont libérés dans l'eau en échange. Régénération périodique au sel (chlorure de sodium) : les ions sodium remplacent les ions calcium fixés, qui sont évacués à l'égout. Effet anti-calcaire complet, mais ajoute du sodium à l'eau.",
          },
          {
            indicator: "Variantes",
            name: "Adoucisseurs au CO₂ ou au potassium",
            description:
              "Variantes pour répondre aux limites du sodium. Adoucisseur au CO₂ : injecte du gaz carbonique qui acidifie légèrement l'eau et solubilise le calcaire (sans le retirer). Adoucisseur au potassium : remplace le sel sodium par du sel potassium dans la régénération (KCl au lieu de NaCl). Performances variables, équipements plus coûteux à l'achat et en exploitation, traitements ciblés dans des cas précis.",
          },
          {
            indicator: "Effet limité",
            name: "Anti-tartre électromagnétique ou électronique",
            description:
              "Boîtiers ou bobines placés sur la canalisation, censés modifier la structure cristalline du calcaire pour qu'il se dépose moins. Les retours scientifiques sont contrastés : effet réel dans certaines configurations, nul dans d'autres. Aucune retire de calcium ni de magnésium : l'eau reste dure au sens chimique. Peut convenir pour limiter le tartre dans les chauffe-eau, mais pas pour le confort domestique global.",
          },
          {
            indicator: "Pas un adoucisseur",
            name: "Filtre à charbon ou osmoseur (filtration ponctuelle)",
            description:
              "Filtre à charbon : retient chlore, pesticides, certains COV. N'agit pas sur le calcaire. Osmoseur : retire la quasi-totalité des minéraux dissous, mais produit une eau « morte » (déminéralisée), peu recommandée pour la boisson quotidienne par l'ANSES, et consommatrice d'eau de rinçage. Sont des solutions de filtration ponctuelle, pas des adoucisseurs globaux. À ne pas confondre.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Quand"
        title="Quand un adoucisseur est-il vraiment justifié."
        subtitle="Le besoin réel dépend de la dureté de votre eau, de votre installation, de votre confort attendu. Quelques repères pour décider."
        signs={[
          {
            label: "Eau très calcaire (> 30 °f) confirmée par analyse",
            description:
              "Au-dessus de 30 °f de titre hydrotimétrique, le calcaire dépose massivement dans les canalisations, le ballon d'eau chaude (réduction de rendement, surconsommation), les robinetteries et la peau. Un adoucisseur a un effet net et tangible. Connaître sa dureté : information communiquée par le fournisseur d'eau, ou kit de mesure (15 à 25 €).",
            severity: "modéré",
          },
          {
            label: "Eau modérément dure (15 à 30 °f) avec confort déjà acceptable",
            description:
              "Dans cette plage, les bénéfices d'un adoucisseur sont réels mais limités. Les arbitrages se font sur le confort (peau sèche, vaisselle calcaire) plutôt que sur la protection des équipements. Avant d'investir, vérifier d'autres pistes : détartrer périodiquement la robinetterie, choisir des appareils avec protection anti-calcaire intégrée, abaisser légèrement la température du ballon.",
            severity: "léger",
          },
          {
            label: "Eau peu dure (< 15 °f) : adoucisseur inutile",
            description:
              "En zone d'eau naturellement douce, l'adoucisseur n'apporte rien et créerait un déséquilibre minéral. La consommation de sel et l'entretien deviennent une charge sans bénéfice. À ne pas installer.",
            severity: "léger",
          },
          {
            label: "Présence de nourrissons ou de régime hyposodé",
            description:
              "L'eau adoucie contient plus de sodium que l'eau d'origine (environ 8 mg/L de sodium ajoutés pour 1 °f de dureté retirée). Pour un nourrisson préparant biberons ou une personne sous régime strictement hyposodé (insuffisance cardiaque, hypertension sévère), cette eau ne convient pas pour la boisson. Un robinet d'eau froide non adoucie en cuisine est alors indispensable.",
            severity: "modéré",
          },
          {
            label: "Eau du robinet déjà chargée en sodium au départ",
            description:
              "Certaines eaux du robinet ont déjà un niveau de sodium élevé naturellement (zones côtières, eaux de captage spécifiques). L'adoucissement augmente encore ce taux, parfois au-delà des recommandations. Vérifier les analyses publiques d'eau potable de la commune avant installation.",
            severity: "léger",
          },
          {
            label: "Installation ancienne en plomb",
            description:
              "Eau adoucie sur canalisations en plomb : l'eau adoucie est plus agressive et peut accélérer la dissolution du plomb. À déconseiller jusqu'au remplacement des canalisations en plomb. Sujet à traiter dans le bon ordre : remplacement plomb d'abord, adoucisseur ensuite.",
            severity: "critique",
          },
        ]}
        footerNote="Avant d'acheter, demander une mesure précise de la dureté de votre eau (kit, fournisseur, laboratoire) et lire l'analyse de qualité d'eau publiée par votre commune. L'adoucisseur n'est pas une solution universelle : son utilité est conditionnée par la chimie de votre eau et votre situation."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi le débat"
        title="Pourquoi le sodium et la déminéralisation posent question."
        subtitle="L'adoucisseur n'est pas dangereux quand il est bien utilisé, mais les recommandations des agences sanitaires (ANSES, HCSP) appellent à une utilisation raisonnée et à des précautions précises."
        causes={[
          {
            number: "01",
            cause: "L'échange d'ions ajoute du sodium",
            explanation:
              "Chaque degré français (°f) de dureté retiré équivaut à environ 8 mg/L de sodium ajouté à l'eau. Une eau passant de 35 à 15 °f gagne environ 160 mg/L de sodium. La directive européenne fixe un seuil de 200 mg/L de sodium dans l'eau potable. Une eau très dure adoucie complètement peut dépasser ce seuil. La consommation cumulative d'aliments salés et d'eau sodée peut peser sur le bilan sodium quotidien.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Le calcium et le magnésium ont une utilité nutritionnelle",
            explanation:
              "L'eau du robinet en France apporte typiquement 5 à 15 % des besoins quotidiens en calcium et magnésium, surtout dans les zones d'eau dure. Adoucir complètement l'eau prive partiellement les habitants de cet apport, surtout dans les régimes pauvres en produits laitiers ou en végétaux. L'ANSES recommande de conserver une dureté résiduelle d'au moins 8 à 15 °f.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les résines peuvent se contaminer si mal entretenues",
            explanation:
              "Les résines échangeuses constituent un milieu propice au développement bactérien (eau, surface importante, température modérée). Une régénération trop espacée, un sel humide, une eau stagnante prolongée dans la bouteille de résines peuvent générer une contamination microbiologique. L'entretien régulier (régénération conforme, désinfection annuelle, vérification du sel) est une exigence sanitaire, pas un détail d'usage.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Une eau totalement molle est plus corrosive",
            explanation:
              "Une eau totalement déminéralisée (TH < 5 °f) devient légèrement acide et corrosive : elle peut attaquer les canalisations métalliques (cuivre, plomb si présent, acier). Sur installation ancienne en plomb, cet effet est particulièrement préoccupant. C'est pourquoi le by-pass partiel (mélanger eau adoucie et eau dure pour garder 8 à 15 °f de dureté résiduelle) est recommandé.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "L'eau adoucie n'est pas filtrée",
            explanation:
              "L'adoucisseur ne retire ni chlore, ni pesticides, ni nitrates, ni PFAS, ni plomb : il agit uniquement sur le calcaire. Si vous voulez aussi filtrer ces contaminants, un dispositif de filtration distinct (filtre à charbon actif au point d'usage, par exemple) est complémentaire. Confondre adoucisseur et filtre conduit à une fausse sécurité sanitaire.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir, installer, entretenir un adoucisseur dans les règles."
        immediateLabel="Étapes d'analyse et de décision"
        structuralLabel="Installation et entretien dans le temps"
        immediate={[
          {
            label: "Connaître la dureté précise de son eau",
            description:
              "Information obligatoirement communiquée par le fournisseur d'eau dans le bilan annuel de qualité (à demander en mairie ou sur le site de l'ARS). Kit de mesure simple en grande surface ou jardinerie : 15 à 25 €, mesure en 5 minutes. Plusieurs mesures sur quelques jours pour fiabilité. En dessous de 15 °f : adoucisseur non justifié. Entre 15 et 30 °f : à arbitrer. Au-dessus de 30 °f : généralement utile.",
            effort: "15 à 25 € pour kit",
          },
          {
            label: "Lire l'analyse publique de l'eau de sa commune",
            description:
              "Au-delà de la dureté, vérifier le taux de sodium initial, la présence de plomb (canalisations anciennes), de PFAS, de nitrates. Toutes les analyses sont publiées sur orobnat.sante.gouv.fr (base nationale des analyses d'eau potable). Ces données permettent de décider si l'adoucisseur est pertinent et quels traitements complémentaires éventuels prévoir.",
            effort: "15 minutes en ligne",
          },
          {
            label: "Demander plusieurs devis et choisir un installateur sérieux",
            description:
              "Devis détaillé : modèle, débit nominal, by-pass intégré, dimensionnement par rapport à votre consommation et votre dureté, prise en charge de l'évacuation, coût d'installation, garantie. Privilégier les installateurs locaux avec contrats d'entretien clairs plutôt que les marques agressives en porte-à-porte. Comparer 3 devis minimum.",
            effort: "Plusieurs semaines pour décision",
          },
          {
            label: "Prévoir un robinet d'eau froide non adoucie en cuisine",
            description:
              "Recommandation HCSP : conserver un robinet d'eau froide non adoucie pour la cuisine (boisson, préparation alimentaire, café, thé, soupes). En pratique : by-pass sur l'arrivée d'eau froide de l'évier de cuisine, avec un robinet dédié si l'évier le permet, ou un seul robinet alimenté en eau non adoucie. À demander explicitement à l'installateur.",
            effort: "Surcoût installation 100 à 300 €",
          },
        ]}
        structural={[
          {
            label: "Régler la dureté résiduelle à 8 à 15 °f",
            description:
              "Le by-pass mélange eau adoucie et eau dure d'origine pour obtenir la dureté souhaitée. Cible : 8 à 15 °f, jamais en dessous. Ce réglage évite la corrosion des canalisations et préserve un apport minéral résiduel. Vérification par mesure après installation. Réglage à revoir si la dureté de l'eau du réseau évolue.",
            effort: "Réglage installateur",
          },
          {
            label: "Entretien annuel : sel, désinfection, vérifications",
            description:
              "Sel : niveau à vérifier mensuellement, recharge dès qu'il est bas (sel pastilles ou cristaux, jamais sel marin ou sel adouci). Désinfection des résines : une fois par an, kit de désinfection adapté (pas de javel pure qui détruit les résines). Vérification professionnelle annuelle : étanchéité, débit, programme de régénération, état des résines. Coût indicatif contrat entretien : 80 à 200 €/an.",
            effort: "80 à 200 €/an",
          },
          {
            label: "Remplacer les résines tous les 8 à 15 ans",
            description:
              "Les résines vieillissent et perdent leur capacité d'échange. Remplacement complet tous les 8 à 15 ans selon usage et entretien. Opération réalisée par un professionnel, coût 300 à 600 € selon modèle. À budgéter dans le coût total de possession d'un adoucisseur.",
            effort: "300 à 600 € périodique",
          },
          {
            label: "Vérifier la consommation d'eau et de sel",
            description:
              "Un adoucisseur consomme typiquement 30 à 80 L d'eau par régénération (selon modèle et dureté) et 0,5 à 2 kg de sel par régénération. Suivi mensuel utile pour détecter une dérive (régénération trop fréquente, perte de sel, dysfonctionnement). Coût annuel en sel : 30 à 100 € pour un foyer moyen. À intégrer au budget global.",
            effort: "Suivi mensuel léger",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs à éviter avec un adoucisseur."
        errors={[
          {
            label: "Adoucir totalement l'eau (TH < 5 °f)",
            explanation:
              "Une eau totalement molle devient corrosive pour les canalisations (cuivre, plomb, acier), peut diminuer l'apport en calcium et magnésium, et peut dépasser les seuils de sodium en eau d'origine très dure. Toujours régler le by-pass pour conserver 8 à 15 °f de dureté résiduelle, comme recommandé par l'ANSES.",
          },
          {
            label: "Boire et cuisiner avec l'eau adoucie pour les nourrissons",
            explanation:
              "Pour la préparation des biberons, le HCSP recommande de ne pas utiliser d'eau adoucie ou osmosée. Préférer l'eau du robinet non adoucie (avec analyse vérifiée), ou une eau de source minérale spécifique pour nourrissons (faiblement minéralisée, étiquetée comme convenant à la préparation des aliments du nourrisson). Le robinet d'eau froide non adoucie en cuisine répond à ce besoin.",
          },
          {
            label: "Négliger l'entretien et la régénération",
            explanation:
              "Un adoucisseur mal entretenu (sel épuisé, résines en fin de vie, désinfection oubliée) peut devenir source de contamination microbiologique de l'eau. Ce risque est documenté par l'ANSES. L'entretien n'est pas optionnel : sans engagement à le maintenir, mieux vaut renoncer à l'adoucisseur.",
          },
          {
            label: "Installer un adoucisseur sans avoir mesuré la dureté",
            explanation:
              "L'adoucisseur n'a d'intérêt qu'à partir d'une certaine dureté (généralement plus de 20 à 25 °f). En zone d'eau naturellement douce, installation inutile, charge d'entretien, coût d'achat non amorti. Mesurer avant d'investir : 15 minutes de test pour éviter des milliers d'euros mal dépensés.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur l'adoucisseur d'eau"
        items={[
          {
            question: "Combien coûte un adoucisseur et son entretien ?",
            answer:
              "Achat et installation : 800 à 2 500 € pour une maison familiale, selon marque et débit. Sel : 30 à 100 € par an. Entretien professionnel : 80 à 200 € par an. Remplacement des résines tous les 8 à 15 ans : 300 à 600 €. Coût total sur 15 ans : 3 000 à 6 000 € selon usage. À mettre en perspective avec les économies réelles attendues (durée de vie ballon, consommation savon et adoucisseur lessive, robinetteries).",
          },
          {
            question: "L'eau adoucie est-elle bonne pour la peau ?",
            answer:
              "Oui, c'est l'un des bénéfices les plus rapportés : sensation de douceur en sortie de douche, moins de tiraillements, savon qui mousse mieux et rince plus facilement, textiles plus souples. Pour les personnes à peau sèche ou atopique, l'eau adoucie peut effectivement améliorer le confort cutané. Bénéfice subjectif mais réel et largement rapporté.",
          },
          {
            question: "Adoucisseur ou osmoseur, lequel choisir ?",
            answer:
              "Ce sont deux dispositifs différents pour des objectifs différents. Adoucisseur : protège les canalisations et améliore le confort global du logement (douche, vaisselle, linge). Osmoseur : produit une eau presque pure pour la boisson au point d'usage, sans agir sur les canalisations. Beaucoup d'installations combinent les deux : adoucisseur global + osmoseur sous évier pour la boisson. Choisir selon le besoin prioritaire et le budget.",
          },
          {
            question: "Le sel de l'adoucisseur pollue-t-il l'environnement ?",
            answer:
              "Lors de la régénération, l'eau salée chargée en calcium et magnésium est rejetée à l'égout. Sur un foyer, l'impact local est marginal. À l'échelle d'un quartier équipé en adoucisseurs, l'apport de sel dans le réseau d'assainissement peut peser sur le fonctionnement des stations d'épuration (microbiologie biologique, valorisation des boues). Quelques régions imposent ou recommandent des solutions alternatives au sodium dans les zones très équipées.",
          },
          {
            question: "Un adoucisseur protège-t-il des légionelles ?",
            answer:
              "Indirectement et partiellement. En limitant le calcaire dans le ballon d'eau chaude et les pommeaux de douche, il réduit le biofilm qui héberge les légionelles. Mais l'adoucisseur lui-même peut devenir un site de prolifération s'il est mal entretenu. La prévention des légionelles reste avant tout une affaire de température (60 °C minimum dans le ballon) et de maintenance générale. Voir la page dédiée aux légionelles.",
          },
          {
            question: "L'adoucisseur est-il compatible avec une chaudière à condensation ?",
            answer:
              "Oui et c'est même recommandé pour préserver l'échangeur. Vérifier néanmoins les préconisations du fabricant de la chaudière : certaines limitent la dureté minimale acceptée (souvent 8 à 12 °f), au-delà de quoi l'eau trop douce devient corrosive pour l'échangeur. Le by-pass à 8-15 °f répond à cette contrainte. À aligner avec le SAV du fabricant de la chaudière.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Eau maison",
            title: "Le silo eau maison",
            description:
              "Qualité de l'eau du robinet, plomb, nitrates, PFAS, filtres : la vue d'ensemble des sujets eau du logement.",
            href: "/eau-maison/",
          },
          {
            tag: "Eau maison",
            title: "Eau calcaire à la maison",
            description:
              "Effets du calcaire, mesures avant d'envisager un adoucisseur : sujet voisin et amont.",
            href: "/eau-maison/eau-calcaire-maison/",
          },
          {
            tag: "Eau maison",
            title: "Légionelles et eau chaude sanitaire",
            description:
              "Le sujet santé majeur de l'eau chaude au domicile : prévention par température et entretien.",
            href: "/eau-maison/legionelles-eau-chaude-sanitaire/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Acheter une maison ancienne saine : checklist diagnostics et points de vigilance",
  description:
    "Acheter un bâti ancien sereinement : DDT obligatoires (amiante, plomb, termites, gaz, électricité, ERP, DPE), points sanitaires complémentaires (humidité, ventilation, eau, sol, isolation), questions à poser au vendeur et au notaire.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/acheter-maison-ancienne-saine/",
  },
  openGraph: {
    title: "Acheter une maison ancienne saine : checklist diagnostics et points de vigilance",
    description:
      "DDT obligatoires, points sanitaires complémentaires, questions à poser : la checklist pour acheter sereinement un bâti ancien.",
    url: "https://www.maisonbionat.fr/renovation-saine/acheter-maison-ancienne-saine/",
  },
};

export default function AcheterMaisonAnciennePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    {
      name: "Acheter une maison ancienne saine",
      href: "https://www.maisonbionat.fr/renovation-saine/acheter-maison-ancienne-saine/",
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
        tag="Achat immobilier et qualité sanitaire"
        title="Acheter une maison ancienne : checklist diagnostics et points de vigilance."
        quickAnswer="Acheter une maison ancienne implique des vérifications obligatoires (Dossier de Diagnostic Technique) et des contrôles complémentaires souvent négligés qui pèsent fortement sur la qualité de vie et le coût total des travaux. Diagnostics obligatoires selon l'âge et la zone : amiante (bâti avant 1er juillet 1997), plomb / CREP (bâti avant 1949), termites (zones arrêtées), gaz et électricité (installations de plus de 15 ans), ERP (risques naturels et technologiques), DPE (toute vente). Sujets souvent oubliés mais déterminants : humidité réelle et ventilation, conduit d'eau potable (plomb), conformité du chauffage et du conduit, étanchéité à l'air, sol du jardin (zones urbaines). Anticiper ces points évite des dépenses imprévues importantes et oriente les négociations. Cette page propose une checklist structurée pour aborder l'achat avec méthode."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "7", label: "diagnostics du Dossier de Diagnostic Technique (DDT) selon situation" },
          { value: "10 à 30 %", label: "du prix d'un bien ancien peut être englouti dans des travaux non anticipés" },
          { value: "1949", label: "limite pour le CREP (plomb des peintures) à la vente" },
          { value: "1er juillet 1997", label: "limite pour le diagnostic amiante à la vente" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les diagnostics obligatoires" },
          { id: "signes", label: "Points à vérifier soi-même" },
          { id: "causes", label: "Pourquoi anticiper" },
          { id: "actions", label: "Méthode pas à pas" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="DDT"
        title="Le Dossier de Diagnostic Technique : ce qui est obligatoire"
        description="Le DDT regroupe l'ensemble des diagnostics que le vendeur doit annexer à la promesse de vente, puis à l'acte authentique. Selon l'âge, la localisation et les équipements du bien, plusieurs diagnostics s'appliquent."
        variants={[
          {
            indicator: "Bâti ancien",
            name: "Diagnostic amiante (DTA / DAPP)",
            description:
              "Obligatoire pour la vente d'un logement dont le permis de construire est antérieur au 1er juillet 1997 (articles R. 1334-14 et suivants du CSP). Repérage par diagnostiqueur certifié. Validité illimitée si négatif, 1 à 3 ans si présence détectée et état dégradé. Vérifier sur place les matériaux mentionnés (toiture, dalles vinyle, calorifugeage). Voir aussi la page amiante.",
          },
          {
            indicator: "Bâti pré-1949",
            name: "CREP (Constat de Risque d'Exposition au Plomb)",
            description:
              "Obligatoire pour les logements dont le permis de construire est antérieur au 1er janvier 1949. Diagnostiqueur certifié, mesure par fluorescence X portable. Validité 1 an si plomb détecté en état dégradé, illimitée sinon. Si CREP positif en état dégradé, le vendeur est en théorie tenu d'avoir réalisé les travaux ; en pratique, la négociation porte souvent sur ce point. Voir la page plomb peintures.",
          },
          {
            indicator: "Zones arrêtées",
            name: "Termites",
            description:
              "Obligatoire dans les communes faisant l'objet d'un arrêté préfectoral pour zones infestées. Diagnostiqueur certifié, validité 6 mois. Présence avérée : impose une déclaration en mairie et engage des actions de traitement. Au-delà des termites, le DTA peut signaler d'autres insectes xylophages (capricorne, vrillette) à surveiller.",
          },
          {
            indicator: "Installations",
            name: "Gaz, électricité, assainissement",
            description:
              "Diagnostic gaz : obligatoire si installation gaz de plus de 15 ans, validité 3 ans à la vente. Diagnostic électricité : si installation de plus de 15 ans, validité 3 ans. Diagnostic assainissement non collectif : si raccordement à un système autonome (fosse, micro-station), validité 3 ans. Anomalies fréquentes : tableau électrique sans différentiel 30 mA, mise à la terre incomplète, équipement gaz vétuste, fosse non conforme.",
          },
          {
            indicator: "Localisation",
            name: "État des Risques et Pollutions (ERP) et état des nuisances sonores",
            description:
              "ERP obligatoire pour toute vente : informe sur les risques naturels (inondation, mouvement de terrain, sismicité), technologiques (industriel), miniers, ainsi que radon et pollution des sols (sites BASOL et BASIAS). Validité 6 mois. ENSA : pour les biens situés dans certaines zones de bruit aérien. Documents générés par le notaire ou via Géorisques.gouv.fr.",
          },
          {
            indicator: "Performance",
            name: "DPE (Diagnostic de Performance Énergétique)",
            description:
              "Obligatoire pour toute vente, validité 10 ans. Classe énergétique A à G. Conséquences réglementaires importantes : interdiction progressive de location des passoires énergétiques (G dès 2025, F en 2028, E en 2034). Un bien classé F ou G impose des travaux d'amélioration énergétique pour pouvoir le louer. Critère de négociation important.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="À vérifier"
        title="Points sanitaires à vérifier soi-même lors des visites."
        subtitle="Les diagnostics réglementaires ne couvrent pas tout. Voici les points complémentaires à observer activement lors des visites, et qui peuvent peser lourdement sur le coût total de l'achat."
        signs={[
          {
            label: "Traces d'humidité, salpêtre, moisissures",
            description:
              "Inspecter murs intérieurs au niveau du sol (remontées capillaires), angles près des fenêtres (condensation), sous-sols et caves, dessous des fenêtres et des baies, derrière les meubles si possible. Une auréole d'humidité ou une décoloration peinture sont des indices. Visite hors été (l'humidité s'observe mieux en saison froide ou pluvieuse).",
            severity: "modéré",
          },
          {
            label: "Ventilation existante et fonctionnelle",
            description:
              "Identifier le système : VMC simple flux (bouches en plafond cuisine, salle de bain, WC), VMC double flux (entrées d'air par bouches et reprises), ventilation naturelle (grilles haut/bas dans pièces de service). Tester : approcher un mouchoir des bouches, il doit être aspiré. Une VMC absente, débranchée ou bouchée est très fréquente en bâti ancien et impose souvent des travaux.",
            severity: "modéré",
          },
          {
            label: "Conduit d'eau potable visible",
            description:
              "Dans les caves, sous-sols et passages techniques, identifier les canalisations d'arrivée d'eau (depuis le compteur). Métal gris-mat avec coloration sombre, surface rugueuse, parfois bombée : suspicion de plomb (logements anciens). Cuivre rouge : standard moderne. PER (polyéthylène réticulé) blanc : standard moderne. Remplacement plomb : 2 000 à 8 000 € selon longueur et accès.",
            severity: "modéré",
          },
          {
            label: "Conduit de cheminée et chaudière",
            description:
              "Pour chauffage à combustion (gaz, fioul, bois) : présence d'un certificat de ramonage annuel, état du conduit (suie, fissures visibles), date d'installation de la chaudière. Si chaudière fioul présente : anticiper sortie ou remplacement réglementaire en cours. Si poêle à bois : vérifier la conformité à la norme (Flamme Verte ou label équivalent).",
            severity: "modéré",
          },
          {
            label: "Sol du jardin en zone urbaine ou péri-urbaine",
            description:
              "Pour un bien avec jardin destiné à un usage potager familial en zone urbaine ancienne ou bordant des voies à fort trafic : risque de contamination par métaux lourds (plomb, cadmium). Analyse de sol post-achat (50 à 150 €) recommandée avant tout projet potager. Voir la page analyse de sol potager.",
            severity: "modéré",
          },
          {
            label: "Performance des fenêtres et isolation perceptible",
            description:
              "Au-delà du DPE : observer le type de menuiseries (simple vitrage ancien, double vitrage récent), l'état des joints, la présence de courants d'air ressentis près des fenêtres en hiver. L'isolation des combles est plus difficile à juger sans accès : demander au vendeur des photos des combles aménagés ou perdus. Performance et confort thermique pèsent dans la vie quotidienne.",
            severity: "léger",
          },
        ]}
        footerNote="Idéalement, faire visiter au moins une fois avec un professionnel du bâtiment (architecte, maître d'œuvre, ou expert immobilier indépendant) avant achat. Coût 200 à 600 € pour une visite expertisée, à mettre en perspective avec le coût total de l'opération et les frais qu'il peut éviter."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi anticiper les sujets sanitaires avant l'achat."
        subtitle="Les sujets non identifiés à l'achat deviennent ensuite des contraintes coûteuses ou des dépenses imprévues. Voici pourquoi la vérification systématique paye."
        causes={[
          {
            number: "01",
            cause: "Les diagnostics obligatoires sont parfois lacunaires",
            explanation:
              "Le diagnostiqueur est mandaté par le vendeur et travaille sur un périmètre réglementaire défini. Certains éléments peuvent passer en marge : un local technique non visité, un revêtement caché derrière un meuble, une infiltration récente non visible. Le DDT donne une photographie à un instant T, pas un audit exhaustif de la qualité sanitaire du bien.",
            frequency: "fréquent",
          },
          {
            number: "02",
            cause: "Les travaux post-achat coûtent vite très cher",
            explanation:
              "Reprise complète d'humidité : 5 000 à 30 000 €. Remplacement canalisation plomb : 2 000 à 8 000 €. Retrait d'amiante : 3 000 à 50 000 € selon surface. Isolation poussée et VMC : 10 000 à 30 000 €. Cumulés, ces postes peuvent représenter 10 à 30 % du prix d'achat. Anticiper évite l'effet de surprise et permet d'intégrer ces sommes dans le budget global ou la négociation.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "La rénovation contrainte pèse sur la valeur du bien",
            explanation:
              "Une passoire énergétique (F ou G) ne pourra plus être louée à terme (interdictions progressives 2025-2034). Si vous achetez pour investir, la rénovation devient obligatoire pour conserver la rentabilité. Si vous achetez pour habiter, la valeur de revente sera décotée tant que la rénovation n'est pas faite. Le prix d'achat doit intégrer ces perspectives.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les aides évoluent : ce qui est aidé aujourd'hui ne le sera pas demain",
            explanation:
              "MaPrimeRénov' évolue chaque année. Les dispositifs CEE varient. Certaines aides locales sont limitées dans le temps. Acheter un bien qui nécessitera 5 à 10 ans de travaux échelonnés impose de raisonner sur des fenêtres d'aides qui peuvent se fermer. Faire son audit énergétique et son plan travaux au moment de l'achat permet d'optimiser le séquencement des aides.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "La qualité de l'air est invisible au visiteur",
            explanation:
              "Acariens dans la moquette ancienne, COV résiduels des peintures, dégagement de formaldéhyde des meubles intégrés vétustes, radon en sous-sol (zones concernées), humidité chronique masquée par chauffage en visite : la majorité des paramètres de qualité d'air ne se voient pas au premier coup d'œil. Une visite expertisée et des analyses ciblées (radon dans certaines zones, qualité d'air post-achat) sécurisent l'investissement.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Méthode pas à pas pour un achat sécurisé."
        immediateLabel="Avant et pendant les visites"
        structuralLabel="Après la signature et premiers mois"
        immediate={[
          {
            label: "Lire intégralement le DDT avant offre",
            description:
              "Demander le DDT complet avant de faire offre, et le lire en détail (pas seulement les conclusions). Identifier les diagnostics réalisés, les éventuels états dégradés, les anomalies électriques ou gaz. Un DDT trop ancien (DPE de plus de 7 ans, ERP de plus de 6 mois) doit être actualisé à la charge du vendeur. Lecture en 1 à 2 heures, base indispensable de la négociation.",
            effort: "1 à 2 heures",
          },
          {
            label: "Visiter avec une checklist structurée",
            description:
              "Préparer une checklist écrite : humidité (chaque pièce, sols, plafonds, angles), ventilation (chaque bouche, test mouchoir), canalisations (cuivre/plomb), chauffage (date, état, certificat ramonage), électricité (différentiel 30 mA, tableau récent), fenêtres (vitrage, joints), isolation (combles, sous-sol). Photographier abondamment. Idéalement, 2 visites à des moments différents (jour/soir, par temps clément/pluvieux).",
            effort: "2 visites de 1-2 heures",
          },
          {
            label: "Faire un audit complet par un professionnel",
            description:
              "Audit énergétique complémentaire (différent du DPE) : 600 à 1 500 €, identifie les leviers et chiffre les scénarios. Visite expertisée par architecte ou maître d'œuvre : 200 à 600 €, regard global sur le bâti. Audit indépendant amiante/plomb si bien à risque (vérification complémentaire) : 200 à 500 €. Coûts à intégrer dans le budget de pré-achat.",
            effort: "1 000 à 2 500 € total",
          },
          {
            label: "Négocier sur la base des diagnostics et points relevés",
            description:
              "Un CREP positif en état dégradé, une humidité chronique avérée, une chaudière de plus de 15 ans, un DPE F/G : autant de points qui justifient une renégociation à la baisse. Préparer un chiffrage des travaux probables (devis ou estimation pro) et le présenter comme base de négociation. Une décote de 5 à 15 % est fréquemment obtenue sur les biens présentant plusieurs sujets cumulés.",
            effort: "Négociation préalable",
          },
        ]}
        structural={[
          {
            label: "Établir un plan de travaux post-achat priorisé",
            description:
              "Dans les 3 à 6 mois après emménagement, établir un plan structuré : sécurité d'abord (électricité, gaz, conduits), puis enveloppe (isolation, étanchéité), puis confort (ventilation, chauffage), puis qualité d'air (peintures, sols, mobilier). Étaler sur 3 à 7 ans selon budget. Anticiper l'audit énergétique si Parcours accompagné MaPrimeRénov' envisagé.",
            effort: "Plan stratégique",
          },
          {
            label: "Faire analyser le radon en zone à risque",
            description:
              "Pour les zones à potentiel radon catégorie 3 (Bretagne, Massif central, Vosges, certains Vosges et Alpes), une mesure du radon dans le logement (kit dosimétrique sur 2 mois, 30 à 80 €) est recommandée dans les premiers mois. Si supérieur à 300 Bq/m³ : actions correctives à prévoir (ventilation, étanchéité au sol). Voir la page radon.",
            effort: "30 à 80 € + suivi",
          },
          {
            label: "Mesurer la qualité de l'eau si suspicion plomb",
            description:
              "Si canalisations plomb ou immeuble ancien avec colonne plomb : analyse en laboratoire (50 à 150 €) pour mesurer la teneur en plomb de l'eau du robinet. Idéalement après nuit de stagnation. Si dépassement de 10 µg/L (limite réglementaire) : remplacement de canalisations à programmer.",
            effort: "50 à 150 € analyse",
          },
          {
            label: "Aérer fortement et faire dégazer avant emménagement",
            description:
              "Pour un bien fraîchement repeint, avec moquettes ou sols neufs, ou meubles intégrés récents : aérer toutes pièces fenêtres ouvertes 1 à 2 semaines avant d'emménager si possible. Les COV résiduels diminuent rapidement avec une ventilation soutenue. Pour les chambres d'enfant en particulier, ne pas s'installer dans une pièce qui sent encore la peinture.",
            effort: "1 à 2 semaines d'aération",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes à l'achat d'une maison ancienne."
        errors={[
          {
            label: "Se contenter de la lecture des conclusions du DDT",
            explanation:
              "Le résumé des conclusions ne reflète pas tous les détails du diagnostic. Une mention « présence de plomb détectée mais non dégradé » a des conséquences différentes selon les surfaces concernées, mention que seul le rapport complet précise. Lire intégralement chaque diagnostic, et demander des clarifications au notaire ou au diagnostiqueur si besoin.",
          },
          {
            label: "Visiter une seule fois, en plein été",
            explanation:
              "L'été masque les sujets d'humidité, le chauffage non testé, certaines fuites. Une visite unique aux beaux jours ne révèle pas le comportement réel du bien en hiver. Multiplier les visites (au moins 2, par temps différents) augmente significativement la perception réelle du bien.",
          },
          {
            label: "Ignorer l'audit énergétique séparé du DPE",
            explanation:
              "Le DPE est un diagnostic réglementaire avec une méthode standardisée parfois critiquée pour son imprécision. Un audit énergétique complet (méthode dite « complète », différent du DPE) donne une analyse fine du bâti, des déperditions, et des scénarios de travaux chiffrés. Recommandé pour tout achat de bien classé E, F ou G.",
          },
          {
            label: "Croire que l'agent immobilier ou le notaire connaissent les sujets sanitaires",
            explanation:
              "Agents immobiliers et notaires connaissent le cadre réglementaire et le marché, mais rarement les enjeux sanitaires fins (qualité d'air, choix de matériaux, séquencement des travaux). Pour ces sujets, s'entourer de professionnels du bâtiment (architecte, maître d'œuvre RGE, Accompagnateur Rénov' France Rénov'). Le notaire valide la conformité légale, l'audit valide la qualité technique.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur l'achat d'une maison ancienne"
        items={[
          {
            question: "Le vendeur peut-il refuser de fournir un diagnostic ?",
            answer:
              "Non, les diagnostics du DDT sont obligatoirement annexés à la promesse de vente. Leur absence engage la responsabilité du vendeur en cas de découverte ultérieure de vices : le vendeur perd la possibilité de se prévaloir de la clause d'exclusion de garantie des vices cachés. Un vendeur qui esquive une demande de diagnostic est un signal d'alerte important.",
          },
          {
            question: "Quels sont les recours en cas de vice caché découvert après achat ?",
            answer:
              "Article 1641 du Code civil : le vendeur est tenu de la garantie des vices cachés rendant la chose impropre à son usage. Délai pour agir : 2 ans à compter de la découverte du vice. La preuve est à apporter par l'acheteur : expertises, témoignages, contradictoire. Procédure souvent longue et incertaine. Mieux vaut investir en pré-achat (visite expertisée) qu'en post-achat (contentieux).",
          },
          {
            question: "Un compromis peut-il être renégocié avant la vente définitive ?",
            answer:
              "Oui, dans plusieurs cas. Le délai de rétractation de 10 jours (loi SRU) permet de revenir sans motif. La condition suspensive de prêt permet de se retirer si financement refusé. Une expertise post-compromis révélant des sujets majeurs non couverts par le DDT peut justifier une renégociation amiable, voire une dénonciation pour vice du consentement si le sujet était dissimulé. Conseil notaire à solliciter.",
          },
          {
            question: "Combien prévoir au-delà du prix d'achat ?",
            answer:
              "Frais de notaire : 7 à 8 % du prix dans l'ancien. Diagnostics complémentaires et expertises : 1 000 à 3 000 €. Frais de déménagement : 1 000 à 5 000 €. Premiers travaux essentiels (peinture, ventilation, éventuellement électricité) : 5 000 à 30 000 € selon état. En cumul, prévoir 10 à 20 % du prix d'achat en frais annexes et premiers travaux raisonnable.",
          },
          {
            question: "Faut-il privilégier un bien rénové ou un bien à rénover ?",
            answer:
              "Question d'arbitrage personnel. Bien rénové : prix au m² supérieur, qualité variable (vérifier les certifications des matériaux et travaux), aucun chantier à porter. Bien à rénover : prix au m² inférieur, choix complet sur la qualité (matériaux sains, ventilation, étanchéité), porteur de chantier sur 1 à 5 ans. Le bien à rénover est généralement le meilleur arbitrage qualité/prix si vous acceptez les contraintes opérationnelles.",
          },
          {
            question: "Un audit énergétique est-il toujours utile ?",
            answer:
              "Quasi systématiquement utile pour bâti d'avant 2010 et obligatoire pour Parcours accompagné MaPrimeRénov'. Sur bâti récent BBC ou RT2012, le DPE suffit généralement. Pour bâti pré-1948, l'audit énergétique « complet » (méthode TH-BCE, plus fine que DPE) donne une analyse précieuse pour orienter les travaux. Coût 600 à 1 500 €, aidé partiellement par MaPrimeRénov' (jusqu'à 500 €).",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Le silo rénovation saine",
            description:
              "Diagnostic pré-travaux, isolation, ventilation, label A+ : la vue d'ensemble des sujets rénovation saine.",
            href: "/renovation-saine/",
          },
          {
            tag: "Rénovation saine",
            title: "Diagnostic pré-travaux",
            description:
              "Une fois acheté, structurer son diagnostic avant d'engager les premiers travaux.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
          {
            tag: "Maison & famille",
            title: "Déménagement et logement sain",
            description:
              "Une fois l'achat fait, organiser le déménagement et l'emménagement dans une logique de qualité d'air.",
            href: "/maison-saine-famille/demenagement-logement-sain/",
          },
        ]}
      />
    </>
  );
}

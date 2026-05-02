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
  title: "Choisir son chauffage en rénovation : méthode et arbitrages 2026",
  description:
    "Audit énergétique, ordre des travaux, comparaison PAC / électrique / bois selon climat et bâti, simulation des aides cumulées et retour sur investissement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/chauffage-sain/choisir-chauffage-renovation/",
  },
  openGraph: {
    title: "Choisir son chauffage en rénovation : méthode et arbitrages 2026",
    description:
      "Audit énergétique, ordre des travaux, comparaison PAC / électrique / bois selon climat et bâti, simulation des aides cumulées et retour sur investissement.",
    url: "https://www.maisonbionat.fr/chauffage-sain/choisir-chauffage-renovation/",
  },
};

const faqItems = [
  {
    question: "Faut-il vraiment isoler avant de changer de chauffage ?",
    answer:
      "Oui, dans la quasi-totalité des cas. Une PAC dimensionnée pour un logement non isolé sera surdimensionnée si vous isolez ensuite (et inversement). Le chauffage électrique consomme proportionnellement aux déperditions : isoler divise la facture par 2 ou 3 sans changer d'équipement. La règle ADEME : commencer par les déperditions principales (toiture 25-30 %, puis murs 20-25 %, puis fenêtres 10-15 %), puis seulement traiter le générateur. Le parcours accompagné MaPrimeRénov' (avec accompagnant agréé Mon Accompagnateur Rénov') intègre cette logique en imposant un bouquet de travaux cohérent.",
  },
  {
    question: "Combien d'aides peut-on cumuler en 2026 ?",
    answer:
      "Le cumul varie selon les revenus et les travaux. Pour une PAC air-eau : MaPrimeRénov' (3 000-5 000 €) + CEE (1 000-5 800 €) avec un écrêtement à 10 800 € pour les très modestes. Pour une rénovation globale (parcours accompagné MaPrimeRénov' multi-travaux) : MaPrimeRénov' jusqu'à 70 000 € pour les très modestes en cas de gain énergétique élevé, + CEE, + aides locales. La TVA réduite à 5,5 % s'applique à la majorité des travaux de rénovation énergétique. L'éco-PTZ (jusqu'à 50 000 €) finance le reste à charge sans intérêts. Simulation complète sur france-renov.gouv.fr.",
  },
  {
    question: "Quel ordre de travaux suivre pour un logement ancien ?",
    answer:
      "Ordre recommandé par l'ADEME : 1) Audit énergétique pour avoir une vision globale (250-700 €). 2) Isolation toiture (action n°1 sur les déperditions, 25-30 % du total). 3) Isolation murs et fenêtres si vétustes. 4) Ventilation (VMC simple flux ou double flux selon étanchéité atteinte). 5) Système de chauffage adapté à la nouvelle enveloppe. 6) Eau chaude sanitaire (chauffe-eau thermodynamique ou solaire). Cette logique évite le surdimensionnement coûteux et garantit le bon retour sur investissement de chaque équipement. Faire les étapes 2-6 sur 1 à 5 ans selon budget, idéalement dans un parcours accompagné.",
  },
  {
    question: "Quel chauffage choisir si je n'ai pas le gaz et que ma maison est ancienne ?",
    answer:
      "Trois options classiques. 1) PAC air-eau si l'isolation est ou peut être correcte (BBC ou approchant) et si l'extérieur permet l'unité : meilleure performance, aides élevées. 2) Poêle à granulés Flamme Verte 7* en chauffage principal sur logement de moins de 100 m² avec bonne isolation, ou en complément d'un autre mode : indépendance, ressource locale. 3) Chauffage électrique à inertie sur logement très bien isolé ou petite surface, simple à installer, zéro émission intérieure. Hybride PAC + bois reste pertinent en zone froide. Le fioul est à abandonner (chaudières neuves interdites depuis 2022, plus d'aides). Décision selon climat, isolation atteignable et budget.",
  },
];

export default function ChoisirChauffagePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Chauffage sain", href: "/chauffage-sain/" },
    {
      name: "Choisir son chauffage en rénovation",
      href: "https://www.maisonbionat.fr/chauffage-sain/choisir-chauffage-renovation/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Chauffage sain"
        parentHref="/chauffage-sain/"
        tag="Méthode rénovation"
        title="Choisir son chauffage en rénovation : la méthode pour ne pas se tromper"
        quickAnswer="Le bon choix de chauffage dépend strictement du couple isolation × climat × usage. Une PAC air-eau brille sur un logement isolé en climat tempéré, mais déçoit sur une passoire en climat froid. Un chauffage électrique à inertie est compétitif sur petit logement bien isolé, ruineux sur passoire en chauffage principal. Un poêle à granulés excelle en zone rurale avec ressource locale, peu pertinent en logement urbain dense. La méthode rationnelle suit cinq étapes : 1) audit énergétique (250-700 €) pour cartographier les déperditions. 2) Isolation prioritaire (toiture, murs, fenêtres) si l'enveloppe est mauvaise. 3) Ventilation (VMC simple flux ou double flux selon étanchéité). 4) Choix du chauffage adapté à la nouvelle enveloppe. 5) Chauffe-eau thermodynamique ou solaire en complément. Le parcours accompagné MaPrimeRénov' avec accompagnant agréé impose ce séquencement et maximise les aides cumulées. À l'inverse, remplacer le chauffage en premier sur un logement non isolé est l'erreur la plus coûteuse en rénovation."
        stats={[
          {
            value: "25-30 %",
            label: "part des déperditions par la toiture (action n°1 selon l'ADEME)",
          },
          {
            value: "10 800 €",
            label: "cumul max MaPrimeRénov' + CEE pour PAC air-eau (très modestes)",
          },
          {
            value: "Audit RGE",
            label: "obligatoire pour le parcours accompagné MaPrimeRénov' multi-travaux",
          },
          {
            value: "Mon Accompagnateur Rénov'",
            label: "agrément obligatoire pour piloter une rénovation globale en 2026",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre la méthode" },
          { id: "signes", label: "Profils types de logements" },
          { id: "causes", label: "Erreurs courantes" },
          { id: "actions", label: "Démarche pas à pas" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Pourquoi le bon chauffage dépend de tout sauf du chauffage."
        description="L'erreur la plus fréquente en rénovation est de raisonner équipement avant enveloppe. Un chauffage performant sur une enveloppe défaillante donne une consommation décevante quel que soit l'équipement choisi. À l'inverse, une isolation correcte rend la majorité des modes de chauffage acceptables, ce qui élargit les options et réduit la pression sur le choix de l'équipement. La méthode ADEME, la trajectoire MaPrimeRénov' et les guides techniques convergent sur la même logique : enveloppe d'abord, ventilation ensuite, chauffage adapté à la nouvelle enveloppe."
        variants={[
          {
            indicator: "Audit énergétique",
            name: "Cartographie des déperditions et des solutions",
            description:
              "Réalisé par un thermicien certifié RGE Audit (250-700 €, partiellement remboursable selon revenus). Mesure l'isolation actuelle, les ponts thermiques, l'étanchéité, les déperditions par poste. Propose un programme de travaux hiérarchisés avec scénarios et coûts. Document indispensable pour le parcours accompagné MaPrimeRénov' et pour faire travailler les artisans sur des bases factuelles.",
          },
          {
            indicator: "Parcours par geste",
            name: "MaPrimeRénov' geste par geste",
            description:
              "Pour les travaux ponctuels (changement de chaudière, isolation toiture seule, etc.). Aides forfaitaires selon revenus et nature du geste. Pas d'obligation de bouquet, mais montant total des aides plafonné. Adapté quand on traite un poste à la fois sur plusieurs années, ou quand un seul équipement est concerné.",
          },
          {
            indicator: "Parcours accompagné",
            name: "MaPrimeRénov' rénovation globale",
            description:
              "Pour les rénovations multi-travaux visant un gain énergétique de 35-55 % minimum. Obligation d'un accompagnant agréé Mon Accompagnateur Rénov' (privé ou public). Aides plus élevées, jusqu'à 70 % du coût des travaux pour les très modestes. Plafond des dépenses jusqu'à 70 000 €. Démarche plus longue mais beaucoup plus rentable pour un projet d'ampleur.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Six profils types de logements et leur chauffage recommandé."
        subtitle="Aucun cas n'est universel, mais certaines configurations orientent clairement le choix. Voici six profils de logements typiques avec la décision la plus probable selon les retours terrain ADEME et France Rénov'."
        signs={[
          {
            label: "Maison individuelle bien isolée (BBC, RT 2012, RE 2020) en climat tempéré",
            description:
              "Profil le plus courant en construction récente ou rénovation aboutie. PAC air-eau idéale (COP 3,5-4,5, aides MaPrimeRénov' optimales, retour sur investissement 8-12 ans face à une chaudière gaz). Chauffage électrique à inertie compétitif sur petite surface (< 80 m²). Bois Flamme Verte 7* possible en complément. Toutes les options sont ouvertes.",
            severity: "léger",
          },
          {
            label: "Maison ancienne non rénovée (DPE F ou G) en climat froid ou tempéré",
            description:
              "Profil critique en France (~5 millions de logements). PRIORITÉ ABSOLUE : isolation avant tout choix de chauffage. Sans isolation, la PAC déçoit, l'électrique ruine, le bois pollue plus. Avec isolation correcte ensuite, la PAC redevient pertinente. Le parcours accompagné MaPrimeRénov' couvre ce cas.",
            severity: "critique",
          },
          {
            label: "Appartement collectif sans accès extérieur en climat tempéré",
            description:
              "PAC air-eau souvent impossible (pas d'unité extérieure). Chauffage électrique à inertie devient l'option logique sur logement bien isolé. Sinon, raccordement au chauffage urbain ou collectif si disponible. Pour les copropriétés, la décision relève d'AG et demande des montages plus complexes.",
            severity: "modéré",
          },
          {
            label: "Maison rurale en zone montagne ou Massif central",
            description:
              "Climat continental sévère, ressource bois souvent disponible localement. Poêle à bois ou granulés Flamme Verte 7* en chauffage principal pertinent. PAC air-eau possible mais COP saisonnier faible (2,5-3) en raison du climat. Hybride PAC + bois souvent le meilleur compromis. Isolation indispensable en amont.",
            severity: "modéré",
          },
          {
            label: "Petit logement ou résidence secondaire (< 60 m²)",
            description:
              "Chauffage électrique à inertie souvent le bon compromis : simplicité de pose, pas d'entretien lourd, programmation par zone, adapté à un usage intermittent. Sur résidence secondaire, le redémarrage rapide après une longue absence prime sur la performance saisonnière. PAC complexe à installer pour un faible volume chauffé.",
            severity: "léger",
          },
          {
            label: "Logement avec chaudière gaz fonctionnelle de moins de 15 ans",
            description:
              "Cas particulier. Si la chaudière gaz fonctionne, son remplacement immédiat n'est pas urgent (les chaudières gaz neuves ne sont plus aidées depuis 2024 mais peuvent être conservées). Profiter du temps disponible pour isoler et préparer le remplacement à terme par PAC ou électrique en fin de vie de l'équipement actuel. Pas de précipitation.",
            severity: "léger",
          },
        ]}
        footerNote="Si plusieurs profils correspondent à votre situation, lister les contraintes par ordre de priorité (climat, isolation, espace, budget) puis arbitrer. L'accompagnant Mon Accompagnateur Rénov' est précisément là pour aider à ce diagnostic."
      />

      <IssueCauses
        id="causes"
        title="Les erreurs récurrentes en rénovation chauffage."
        subtitle="Les retours d'expérience publiés par l'ADEME, France Rénov' et les associations de consommateurs identifient cinq pièges classiques. Les anticiper évite les déconvenues."
        causes={[
          {
            number: "01",
            cause: "Choisir l'équipement avant l'isolation",
            explanation:
              "Erreur la plus coûteuse. Un chauffage neuf sur enveloppe défaillante donne une consommation décevante quel que soit le mode. Le surdimensionnement initial devient un sous-dimensionnement quand on isole ensuite, ou l'inverse. Toujours faire l'audit thermique, isoler en priorité, et seulement ensuite choisir le chauffage adapté à la nouvelle enveloppe.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Sous-estimer la durée du parcours rénovation",
            explanation:
              "Une rénovation globale demande 12 à 36 mois entre l'audit, les choix, les travaux et la mise en service. Penser pouvoir tout faire en 3 mois conduit à arbitrer dans l'urgence et à payer plus cher. Le parcours accompagné MaPrimeRénov' impose une logique multi-étapes qui rallonge mais sécurise les choix.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Faire confiance aveuglément à un seul installateur",
            explanation:
              "Un installateur a un biais commercial vers ses produits et ses solutions. Demander 3 devis différents, exiger des notes de calcul, croiser avec un thermicien indépendant. Les écarts de devis pour une même solution peuvent atteindre 30-50 %. Vérifier les certifications RGE, les références récentes et les avis publics.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Sauter l'étape audit pour économiser 500 €",
            explanation:
              "L'audit énergétique coûte 250-700 € (souvent partiellement remboursable) mais identifie des erreurs potentielles à 5 000-30 000 €. C'est l'investissement à plus haute rentabilité de toute la rénovation. Sauter cette étape pour économiser quelques centaines d'euros est l'une des plus mauvaises économies possibles.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Mal estimer le retour sur investissement",
            explanation:
              "Le ROI d'une rénovation chauffage dépend des hypothèses : prix de l'énergie futur, durée de vie de l'équipement, gain en confort, valeur de revente du logement. Une simulation honnête doit intégrer un scénario haut/moyen/bas de prix de l'énergie. Les promesses commerciales d'amortissement en 5 ans sont souvent optimistes : 8-12 ans est plus réaliste pour une PAC, 15+ pour une rénovation globale.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="La démarche pas à pas pour une rénovation chauffage réussie."
        immediate={[
          {
            label: "Faire un audit énergétique RGE",
            description:
              "Étape n°1 incontournable. Audit thermique par un thermicien certifié RGE Audit (250-700 €, partiellement remboursable selon revenus). Identifie l'état de l'enveloppe, les déperditions, les scénarios de travaux avec coûts. Document indispensable pour le parcours accompagné MaPrimeRénov'.",
            effort: "250-700 €, 1 mois",
          },
          {
            label: "Identifier votre Espace Conseil France Rénov' local",
            description:
              "Service public gratuit. Sur france-renov.gouv.fr, trouver l'espace conseil le plus proche pour un rendez-vous d'orientation. Conseil neutre sur les aides, les démarches, les artisans. Permet de cadrer le projet avant d'engager des dépenses techniques.",
            effort: "Gratuit, 1 rendez-vous",
          },
          {
            label: "Désigner un accompagnant Mon Accompagnateur Rénov' pour le parcours global",
            description:
              "Obligatoire pour le parcours accompagné MaPrimeRénov' rénovation globale. Pilote l'ensemble du projet : audit, devis, dossiers d'aides, suivi de chantier, contrôle de la performance après travaux. Accompagnant privé (architecte, bureau d'études) ou public (Espace Conseil). Coût 800-3 000 € selon ampleur, partiellement aidé par MaPrimeRénov'.",
            effort: "800-3 000 €, sur 12-36 mois",
          },
          {
            label: "Simuler les aides totales sur france-renov.gouv.fr",
            description:
              "Avant tout devis : simulation officielle. Croiser MaPrimeRénov' (par geste ou rénovation globale), CEE, TVA réduite 5,5 %, éco-PTZ (jusqu'à 50 000 €), aides locales. Un projet bien monté peut couvrir 50-80 % du coût total pour les ménages très modestes. Sans cette simulation préalable, on rate des dispositifs cumulables.",
            effort: "1-2 heures",
          },
        ]}
        structural={[
          {
            label: "Engager les travaux dans l'ordre ADEME : enveloppe → ventilation → chauffage",
            description:
              "Étape 1 : isolation toiture (action n°1, 25-30 % des déperditions). Étape 2 : isolation murs et fenêtres si vétustes. Étape 3 : ventilation adaptée à la nouvelle étanchéité (VMC simple flux ou double flux). Étape 4 : système de chauffage dimensionné sur la nouvelle enveloppe. Étape 5 : ECS (chauffe-eau thermodynamique). Cette logique garantit le retour sur investissement de chaque poste.",
            effort: "Plan sur 1-3 ans",
          },
          {
            label: "Demander 3 devis pour chaque poste, comparer en méthode",
            description:
              "Pour chaque équipement (PAC, chaudière biomasse, radiateurs, isolation), 3 devis d'artisans RGE certifiés. Comparer non seulement le prix mais aussi : marque/modèle exact, performance (SCOP, COP, classe énergétique), garantie matériel et pose, conditions d'entretien, références récentes. Écarts de 30-50 % typiques.",
            effort: "1 à 2 mois par poste",
          },
          {
            label: "Suivre la mise en service et les performances réelles la première année",
            description:
              "Pendant le premier hiver, suivre les consommations mensuelles et comparer à l'objectif de l'audit. Une dérive (consommation > prévue) signale un défaut de pose, de réglage ou de programmation à corriger immédiatement. Conserver tous les contrats d'entretien et suivre rigoureusement les visites techniques annuelles.",
            effort: "Suivi premier hiver",
          },
          {
            label: "Documenter le projet pour la valeur de revente",
            description:
              "Conserver tous les documents : audit initial, devis, factures, fiches techniques, certificats RGE, garanties, résultats des contrôles annuels. Le DPE après travaux est un atout majeur de revente. Un dossier complet de rénovation valorise le bien de 5-15 % à la vente selon les zones et la qualité des travaux.",
            effort: "Classement systématique",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire en rénovation chauffage."
        errors={[
          {
            label: "\"Je remplace ma chaudière maintenant et j'isolerai plus tard\"",
            explanation:
              "La logique inverse de ce que recommandent l'ADEME et France Rénov'. Un équipement neuf sur passoire est mal dimensionné, peu performant, et à remplacer ou ajuster quand l'isolation arrivera. Coût total très supérieur au scénario isolation d'abord. Si l'urgence est réelle (panne définitive), choisir un équipement modeste (radiateur électrique d'appoint, location de chaudière temporaire) plutôt qu'un investissement lourd qui sera mal valorisé.",
          },
          {
            label: "\"Je prends le devis le moins cher\"",
            explanation:
              "Le moins cher est rarement le meilleur en rénovation énergétique. Vérifier la certification RGE, la qualité du dimensionnement, les références récentes, la marque du matériel, les conditions d'entretien. Un écart de 1 000-3 000 € à l'achat peut représenter 5 000-15 000 € sur 15 ans en exploitation décevante. Comparer en méthode et pas seulement en prix.",
          },
          {
            label: "\"Pas besoin d'audit, je sais ce qu'il faut faire\"",
            explanation:
              "L'autodiagnostic est presque toujours partiel : on voit les fenêtres qui sifflent mais pas les ponts thermiques cachés, on suspecte la chaudière mais pas la VMC dysfonctionnelle. L'audit objective et hiérarchise. 250-700 € pour éviter 5 000-30 000 € d'erreurs : le calcul est imparable.",
          },
          {
            label: "\"Je signe maintenant, je demanderai les aides après\"",
            explanation:
              "Erreur fatale en MaPrimeRénov'. La demande de prime DOIT précéder la signature du devis et le démarrage des travaux. Sinon le dossier est rejeté, sans recours possible. Toujours : 1) déposer la demande MaPrimeRénov' avec le devis. 2) Attendre la décision d'éligibilité (4-8 semaines). 3) Signer le devis et démarrer les travaux. 4) Demander le versement après facture finale.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le choix d'un chauffage en rénovation"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Chauffage sain",
            title: "Pompe à chaleur air-eau : performance, aides, contraintes",
            description:
              "Détail technique sur la PAC : COP réel, dimensionnement, aides 2026 et conditions de rentabilité.",
            href: "/chauffage-sain/pompe-a-chaleur-air-eau/",
          },
          {
            tag: "Chauffage sain",
            title: "Chauffage électrique sain : technologies et consommation",
            description:
              "L'option compétitive sur logement bien isolé ou petit logement, avec zéro émission intérieure.",
            href: "/chauffage-sain/chauffage-electrique-sain/",
          },
          {
            tag: "Rénovation saine",
            title: "Diagnostic avant rénovation",
            description:
              "Au-delà de l'audit énergétique : diagnostics santé du bâti (humidité, plomb, amiante) à mener en parallèle.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
        ]}
      />
    </>
  );
}

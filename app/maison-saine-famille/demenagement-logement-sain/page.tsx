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
  title: "Déménagement et logement sain : checklist avant et après emménagement",
  description:
    "Bien démarrer dans un nouveau logement : aérer avant emménagement, identifier la ventilation, gérer le dégazage des peintures et meubles neufs, prioriser les premières actions. Méthode pour ne pas s'exposer inutilement les premiers mois.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/maison-saine-famille/demenagement-logement-sain/",
  },
  openGraph: {
    title: "Déménagement et logement sain : checklist avant et après emménagement",
    description:
      "Aérer, identifier la ventilation, gérer le dégazage : les bons réflexes pour s'installer sans subir la qualité d'air des premiers mois.",
    url: "https://www.maisonbionat.fr/maison-saine-famille/demenagement-logement-sain/",
  },
};

export default function DemenagementPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Maison & famille", href: "/maison-saine-famille/" },
    {
      name: "Déménagement et logement sain",
      href: "https://www.maisonbionat.fr/maison-saine-famille/demenagement-logement-sain/",
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
        tag="Emménagement et qualité d'air"
        title="Déménagement et logement sain : bien démarrer dans un nouveau lieu."
        quickAnswer="Un déménagement est l'occasion idéale d'installer de bonnes pratiques de qualité d'air. Les premières semaines dans un logement sont aussi parmi les plus sensibles : peintures fraîches, sols récents, mobilier neuf, traces d'occupants précédents. Quelques gestes simples avant et après emménagement ont un effet mesurable : aérer fortement les pièces 1 à 2 semaines avant l'arrivée si possible, identifier et tester la ventilation existante, dégazer les meubles neufs dans une pièce dédiée plutôt que les chambres, prévoir le nettoyage des moquettes ou la suppression des revêtements vétustes. Pour les enfants en bas âge ou les femmes enceintes, attention spécifique à la chambre : pas d'installation dans une pièce sentant encore la peinture, pas de meuble en kit fraîchement déballé. Cette page propose une démarche structurée, semaine par semaine, pour aborder le déménagement sans subir la qualité d'air des premiers mois."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "2–4 sem.", label: "dégazage utile pour peintures fraîches et meubles neufs" },
          { value: "1–2 sem.", label: "aération soutenue avant emménagement si possible" },
          { value: "Pic de COV", label: "dans les premières semaines : période la plus exposante" },
          { value: "Bébé / grossesse", label: "vigilance renforcée sur le séquencement des installations" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Pourquoi le déménagement compte" },
          { id: "signes", label: "Signaux à observer au premier coup d'œil" },
          { id: "causes", label: "Pourquoi les premières semaines pèsent" },
          { id: "actions", label: "Démarche avant, pendant, après" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Logique"
        title="Pourquoi un déménagement est un moment décisif"
        description="Le déménagement combine plusieurs facteurs de risque qualité d'air, mais aussi plusieurs opportunités. Voici les enjeux à connaître avant de planifier."
        variants={[
          {
            indicator: "Concentration d'émissions",
            name: "Multiplication des sources de COV",
            description:
              "Peintures fraîches éventuelles (refaites avant la vente ou pour l'emménagement), sols récents (parquet stratifié, vinyle, moquette), mobilier neuf assemblé en kit (formaldéhyde, COV des panneaux), meubles intégrés (cuisine, dressing), produits ménagers utilisés pour le grand nettoyage : autant de sources qui s'additionnent dans les premières semaines.",
          },
          {
            indicator: "Vie quotidienne",
            name: "Une exposition prolongée",
            description:
              "Contrairement aux travaux ponctuels où l'on peut quitter le logement, l'emménagement implique d'y dormir, manger, vivre. L'exposition aux COV pendant la phase de pic se cumule sur plusieurs semaines. Pour les chambres d'enfant et de femme enceinte, cette exposition n'est pas anodine.",
          },
          {
            indicator: "Opportunité d'agir",
            name: "Un moment de bascule organisationnel",
            description:
              "Une famille qui déménage est plus disponible pour mettre en place de nouvelles routines : ventilation, aération, choix de produits, structuration du mobilier. Profiter du contexte « pause » du déménagement pour installer durablement de bonnes pratiques est un levier important.",
          },
          {
            indicator: "Cas particuliers",
            name: "Femmes enceintes, nourrissons, enfants",
            description:
              "Pour ces publics, les recommandations sont plus strictes : ne pas peindre soi-même pendant la grossesse (déléguer ou faire faire avant l'arrivée), ne pas réinstaller un nourrisson dans une chambre récemment refaite avant 4 à 8 semaines de dégazage avec aération soutenue, choisir prioritairement matériaux et meubles certifiés (OEKO-TEX, GOTS, A+ pour produits de construction).",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Signaux"
        title="Ce qu'on peut détecter aux premières visites et premiers jours."
        subtitle="Quelques signaux simples permettent d'identifier l'effort de dégazage et de remise en état à anticiper."
        signs={[
          {
            label: "Odeur de peinture, de meuble neuf, de matériau récent",
            description:
              "L'odeur révèle la phase d'émission de COV. Si une pièce sent fortement la peinture en visite : la rénovation est récente, dégazage à prévoir avant emménagement. Si meubles intégrés (cuisine, dressing) sentent encore le neuf : laisser les portes/tiroirs ouverts fenêtre ouverte pendant 1 à 2 semaines avant utilisation.",
            severity: "modéré",
          },
          {
            label: "Moquettes anciennes ou tissus muraux vétustes",
            description:
              "Les moquettes anciennes accumulent acariens, poussières, résidus de produits ménagers depuis des années. Au-delà de l'aspect visuel, les odeurs et la qualité d'air en pâtissent. Si possible : prévoir leur dépose avant emménagement (1 jour, 5 à 15 € le m² posé). Sous la moquette : vérifier l'état du sol, parquet souvent en bon état dessous.",
            severity: "modéré",
          },
          {
            label: "Cuisine équipée récente non aérée",
            description:
              "Les cuisines en kit récentes émettent particulièrement (panneaux mélaminés, colles, mastics). Si vous achetez ou louez avec cuisine intégrée installée récemment, prévoir 2 à 4 semaines d'aération avec portes et tiroirs ouverts avant utilisation prolongée. Cuisson sans hotte aérante pendant cette période ajouterait des polluants à un environnement déjà chargé.",
            severity: "modéré",
          },
          {
            label: "Système de ventilation absent ou non fonctionnel",
            description:
              "VMC débranchée, bouches obstruées par peinture, grilles bouchées : situations fréquentes dans le bâti ancien et les locations. Tester avec un mouchoir devant les bouches : doit être aspiré. Si non, contacter le bailleur (location) ou prévoir intervention rapide en propriétaire. Sans renouvellement d'air, les COV stagnent.",
            severity: "critique",
          },
          {
            label: "Traces d'humidité, odeur de moisi",
            description:
              "Humidité du logement précédent (occupant ayant peu aéré, chauffage insuffisant) ou problème structurel (remontées, infiltrations). Avant emménagement : aérer fortement, traiter les éventuels résidus de moisissures sur les murs, vérifier la ventilation. Si récurrent : diagnostic humidité à faire faire (200 à 500 €).",
            severity: "modéré",
          },
          {
            label: "Présence d'animaux précédents (poils, urine, allergènes)",
            description:
              "Logement ayant accueilli chiens ou chats : poils, squames et allergènes persistent dans les moquettes, rideaux, derrière les meubles. Nettoyage approfondi indispensable avant emménagement, particulièrement pour les personnes allergiques. Considérer dépose de moquettes et lavage de rideaux à 60 °C en cas d'allergie connue.",
            severity: "modéré",
          },
        ]}
        footerNote="Un état des lieux soigné (location) ou une visite expertisée avant signature (achat) facilite la négociation de remises en état ou de travaux préalables aux frais du vendeur/bailleur. Ne pas hésiter à exprimer ces demandes."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi"
        title="Pourquoi les premières semaines comptent particulièrement."
        subtitle="La logique chimique et temporelle du dégazage explique pourquoi un effort en début d'emménagement a un effet disproportionné sur l'exposition cumulée."
        causes={[
          {
            number: "01",
            cause: "Le pic de COV est dans les premières semaines",
            explanation:
              "Les matériaux neufs (peintures, sols, meubles, isolants visibles) émettent au taux le plus élevé dans les premiers jours et semaines. Une peinture A+ émet 80 % de ses COV dans les 4 à 8 premières semaines après application. Un meuble en panneau mélaminé émet majoritairement dans les 6 à 12 premières semaines. Aérer fortement à ce moment-là est ce qui retire le maximum de polluants.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Une fois installé, on ouvre moins",
            explanation:
              "Quand on emménage, les premiers jours sont actifs (rangement, déballage), portes et fenêtres souvent ouvertes. Mais dès que la routine s'installe, surtout en hiver, l'aération diminue naturellement. Le bon moment pour aérer intensivement est précisément les premières semaines, en profitant de l'élan opérationnel.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "L'enchaînement déménagement + grossesse + bébé est fréquent",
            explanation:
              "Statistiquement, les déménagements sont fréquents en début de vie de famille (achat de la première maison, agrandissement avant un bébé). Coïncidence biologique avec la phase la plus sensible pour les expositions chimiques. Anticiper le séquencement (peintures finies plusieurs semaines avant l'arrivée du bébé, chambre prête bien avant la naissance) évite des expositions évitables.",
            frequency: "très fréquent",
          },
          {
            number: "04",
            cause: "Les nouveaux logements neufs ont aussi un pic de COV",
            explanation:
              "Acheter neuf ne supprime pas le sujet : un logement neuf cumule peintures fraîches, sols neufs, cuisine intégrée neuve, parfois colles d'étanchéité encore en phase d'émission. Le logement neuf bénéficie d'une meilleure ventilation (VMC obligatoire) mais cumule les sources. Démarche d'aération soutenue dans les premiers mois également pertinente.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "L'effet « chambre fermée » s'observe surtout en hiver",
            explanation:
              "Un déménagement automnal ou hivernal : tentation de garder fenêtres fermées pour chauffage. Mais c'est aussi la période où l'on passe plus de temps à l'intérieur, et où le dégazage du mobilier neuf se cumule sans renouvellement. Un emménagement aux beaux jours est plus facile à gérer en termes d'aération ; en saison froide, redoubler de vigilance et compenser par VMC ou aération raisonnée mais soutenue.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Démarche pas à pas : avant, pendant, après."
        immediateLabel="Avant et pendant le déménagement"
        structuralLabel="Après emménagement et premiers mois"
        immediate={[
          {
            label: "Aérer fortement 1 à 2 semaines avant l'arrivée si possible",
            description:
              "Si le logement est disponible avant la date d'emménagement effectif (entre la remise des clés et l'arrivée des cartons), profiter de la période pour aérer toutes les pièces fenêtres grandes ouvertes plusieurs heures par jour. Particulièrement utile pour peintures fraîches et meubles intégrés récents. Effet cumulatif important : 1 semaine d'aération avec fenêtres ouvertes vaut mieux que 1 mois d'aération marginale.",
            effort: "Quelques visites",
          },
          {
            label: "Tester et activer la ventilation existante",
            description:
              "Premier réflexe à la prise de possession : identifier la ventilation (VMC, naturelle), vérifier qu'elle fonctionne (test mouchoir aux bouches), nettoyer les bouches obstruées (souvent peinture, poussières), vérifier le démarrage de la VMC sur le tableau électrique. Si VMC double flux : changer les filtres (souvent négligés par les occupants précédents, 30 à 80 € de filtres neufs).",
            effort: "1 à 3 heures",
          },
          {
            label: "Dégazer le mobilier neuf en pièce dédiée si possible",
            description:
              "Les meubles neufs (lit, armoire, bureau pour les chambres) émettent fortement les premières semaines. Si possible : les déballer et les laisser quelques semaines dans une pièce ventilée non utilisée pour les chambres (garage aéré, pièce de vie ventilée) avant installation finale. Pour chambre d'enfant ou de nourrisson, ce délai est particulièrement important.",
            effort: "Logistique d'emménagement",
          },
          {
            label: "Faire le grand nettoyage avec produits doux",
            description:
              "Le grand nettoyage post-déménagement est tentant à grands renforts de javel et nettoyants industriels. Mais cumuler le pic de COV des matériaux et celui des produits ménagers est contre-productif. Préférer : savon noir, vinaigre blanc dilué, savon de Marseille, eau bouillante. Désinfection ponctuelle au peroxyde d'hydrogène ou alcool pour zones sensibles. Voir la page alternatives produits ménagers.",
            effort: "1 à 2 journées",
          },
        ]}
        structural={[
          {
            label: "Aérer 15 à 30 minutes deux fois par jour, premières 6 à 12 semaines",
            description:
              "Routine à installer dès le premier jour : aération soutenue le matin (15 à 30 minutes fenêtre ouverte, même en hiver) et en soirée. Effet immédiat sur la concentration en COV intérieurs. Si VMC double flux : pas indispensable de couper l'air entrant, mais l'aération naturelle ponctuelle reste utile sur cette période.",
            effort: "30 à 60 minutes/jour",
          },
          {
            label: "Installer les chambres en dernier si possible",
            description:
              "Stratégie pertinente surtout avec enfants ou bébé : meubler et installer les pièces de vie d'abord (séjour, cuisine), laisser les chambres dégazer plus longtemps avec leurs meubles déballés et aérés. Pour un bébé attendu : terminer la chambre 6 à 8 semaines avant la naissance, peinture et meubles. Pour un enfant : 4 semaines minimum après installation complète avant d'y dormir nuit longue.",
            effort: "Planification du déménagement",
          },
          {
            label: "Mesurer la qualité de l'air si doute",
            description:
              "Pour les emménagements complexes (rénovation lourde récente, beaucoup de matériaux neufs, présence d'enfants ou femme enceinte), un capteur de qualité d'air (CO2, COV, formaldéhyde, PM2,5) à 100 à 400 € donne un feedback objectif. Permet d'identifier les pièces les plus problématiques et de prioriser l'aération. Mesure aussi possible par professionnel certifié (analyse air intérieur, 300 à 700 €).",
            effort: "100 à 700 € selon option",
          },
          {
            label: "Construire les routines durables (ventilation, choix d'achat)",
            description:
              "Profiter de l'élan du déménagement pour installer durablement : entretien VMC (filtres, bouches), produits ménagers sains, mobilier certifié à chaque achat, peintures A+ aux prochaines retouches. Le déménagement est le bon moment pour bâtir les routines sans avoir à modifier des habitudes anciennes.",
            effort: "Habitudes long terme",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs fréquentes lors d'un emménagement."
        errors={[
          {
            label: "Peindre les chambres juste avant l'arrivée",
            explanation:
              "Une peinture A+ émet la majorité de ses COV dans les 4 à 8 semaines après application. Peindre la veille de l'emménagement, c'est dormir dans le pic de COV. Idéal : peindre au moins 4 semaines avant emménagement, fenêtres ouvertes maximum pendant cette période. Pour chambre d'enfant ou de nourrisson, 6 à 8 semaines de dégazage avec aération sont raisonnables.",
          },
          {
            label: "Assembler les meubles en kit dans la chambre où l'on dormira le soir",
            explanation:
              "Le déballage d'un meuble en kit (lit, armoire en panneau mélaminé) libère une grande quantité de COV (formaldéhyde notamment) en quelques heures. Idéal : assembler dans pièce ventilée non chambre, laisser dégazer 1 à 2 semaines fenêtre ouverte avant installation finale. Si impossible : assembler le plus tôt possible dans la journée, garder fenêtre ouverte, ne pas dormir dans la pièce le premier soir.",
          },
          {
            label: "Garder ses anciens revêtements vétustes par flemme",
            explanation:
              "Moquette vieille de 15 ans, papier peint moisi, rideaux jaunis : autant de sources de poussière, d'acariens, de moisissures. Le déménagement est l'occasion de faire le grand tri. Une dépose de moquette représente 1 journée et 5-15 €/m² posé, mais améliore durablement la qualité d'air et le confort. Profiter du logement vide est plus simple que de tout sortir après.",
          },
          {
            label: "Cumuler grand nettoyage chimique et déballage de mobilier neuf",
            explanation:
              "Javel à pleine puissance, nettoyants industriels parfumés, désinfection systématique au moment du déballage : multiplication des sources de COV simultanées. Préférer le nettoyage doux préalable (savon noir, vinaigre, eau bouillante), aérer entre les opérations, étaler les phases. Le grand nettoyage idéal se fait dans un logement vide et ventilé, pas en même temps que le déballage.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur déménagement et logement sain"
        items={[
          {
            question: "Faut-il refuser un logement avec des odeurs fortes en visite ?",
            answer:
              "Pas systématiquement, mais à intégrer dans la négociation. Une odeur forte indique soit une rénovation très récente (pic de COV en cours, mais qui se résorbera avec le temps), soit un problème (moisissures, humidité, dégâts) qui mérite diagnostic. Demander des explications au vendeur ou au bailleur. Pour location : exiger la résolution avant signature du bail. Pour achat : intégrer dans le coût de la remise en état.",
          },
          {
            question: "Combien de temps faut-il vraiment aérer après une rénovation ?",
            answer:
              "Pour peintures A+ et matériaux récents : 4 à 8 semaines avec aération soutenue suffisent à atteindre des niveaux acceptables. Pour rénovation lourde (sols, peintures, meubles intégrés cumulés) : 8 à 12 semaines. Pour chambres bébé ou femme enceinte : prolonger à 8 à 12 semaines minimum. L'odeur de peinture qui persiste signale qu'il reste du dégazage actif.",
          },
          {
            question: "Quels meubles privilégier à l'emménagement ?",
            answer:
              "Si rachat : bois massif certifié FSC ou PEFC, plutôt que panneaux mélaminés. Mobilier d'occasion (déjà dégazé) en bon état est une option excellente. Si achat de panneau mélaminé : choisir CARB Phase 2 ou label A+, déballer en pièce ventilée, dégazer 1 à 2 semaines avant installation finale. Voir la page meubles faibles émissions.",
          },
          {
            question: "Le déménagement avec un nouveau-né est-il problématique ?",
            answer:
              "Pas par essence, mais à anticiper. Pour un bébé prévu : finir la chambre 6 à 8 semaines avant la naissance, peinture et meubles. Pour un nouveau-né et un déménagement déjà engagé : organiser pour qu'il ne dorme pas dans une pièce fraîchement repeinte ou meublée, privilégier une pièce déjà dégazée le temps des premières semaines, aérer intensément la chambre destinée avant d'y installer le bébé. Avis pédiatre si doute.",
          },
          {
            question: "Un déménageur professionnel peut-il aider à dégazer ?",
            answer:
              "Pas directement, mais un bon déménageur respecte les recommandations sur le séquencement. Lui demander de placer les meubles neufs dans la pièce dédiée plutôt que tout au sol des chambres. Pour les meubles à monter, peuvent souvent intervenir le lendemain ou en différé. Coût supplémentaire faible, gain en qualité d'air significatif.",
          },
          {
            question: "Comment évaluer la qualité d'air sans capteur ?",
            answer:
              "Trois indices simples : l'odeur (subjectif mais informatif, odeur persistante = COV en cours), les symptômes des occupants (maux de tête, irritation oculaire, gorge sèche au matin = signal d'alerte), la condensation sur les fenêtres (humidité importante = ventilation insuffisante). Pour une mesure objective : capteur CO2 (50 à 200 €) donne une bonne approximation du renouvellement d'air. CO2 supérieur à 1500 ppm signale une ventilation insuffisante.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Maison & famille",
            title: "Le silo maison & famille",
            description:
              "Chambre de bébé, grossesse, allergies enfant, asthme : tous les sujets famille et logement.",
            href: "/maison-saine-famille/",
          },
          {
            tag: "Matériaux sains",
            title: "Dégazage des matériaux neufs",
            description:
              "Approfondissement sur le phénomène d'émission des matériaux récents et comment l'accélérer.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
          {
            tag: "Rénovation saine",
            title: "Acheter une maison ancienne saine",
            description:
              "Avant le déménagement, structurer l'achat avec diagnostics et points de vigilance.",
            href: "/renovation-saine/acheter-maison-ancienne-saine/",
          },
        ]}
      />
    </>
  );
}

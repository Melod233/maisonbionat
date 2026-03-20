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
  title: "Produits ménagers irritants : identifier et remplacer les plus nocifs",
  description:
    "Sprays, javel, parfums d'ambiance : certains produits dégradent l'air intérieur sans que vous le sachiez. Identifier les plus émissifs et les remplacer progressivement.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/produits-menagers-irritants/",
  },
  openGraph: {
    title: "Produits ménagers irritants : identifier et remplacer les plus nocifs",
    description:
      "Sprays, javel, parfums d'ambiance : certains produits dégradent l'air intérieur sans que vous le sachiez. Identifier les plus émissifs et les remplacer progressivement.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/produits-menagers-irritants/",
  },
};

export default function ProduitsIrritantsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Produits ménagers irritants : identifier et remplacer les plus nocifs", href: "https://www.maisonbionat.fr/produits-et-habitudes/produits-menagers-irritants/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Produits et habitudes"
        parentHref="/produits-et-habitudes/"
        tag="Aide au choix"
        title="Vos produits ménagers polluent votre air. Voici lesquels changer en premier."
        quickAnswer="Les sprays désodorisants, les nettoyants en aérosol et les bougies à la paraffine sont parmi les sources les plus émissives de COV dans un logement. Selon les études ADEME, plusieurs dépassements de valeurs de référence ont été mesurés avec des désodorisants d'ambiance courants. Les remplacer ne demande ni effort ni dépense excessive."
        stats={[
          { value: "1re", label: "catégorie émissive : sprays d'ambiance (ADEME/PRESSENS)" },
          { value: "COV", label: "émis par la plupart des nettoyants parfumés" },
          { value: "0", label: "spray d'ambiance nécessaire si la ventilation fonctionne" },
          { value: "3", label: "ingrédients suffisent pour 90 % des tâches ménagères" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Les catégories à risque" },
          { id: "signes", label: "Signes d'exposition" },
          { id: "causes", label: "Pourquoi ils irritent" },
          { id: "actions", label: "Quoi remplacer en premier" },
          { id: "eviter", label: "Mélanges dangereux" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Catégories à risque"
        title="Trois familles de produits concentrent l'essentiel du problème."
        description="Tous les produits ménagers ne se valent pas en termes d'émissions. Certains sont réellement problématiques, d'autres sont très peu émissifs. Identifier les catégories prioritaires évite de tout changer sans discernement."
        variants={[
          {
            indicator: "Les plus émissifs",
            name: "Sprays et aérosols d'ambiance",
            description:
              "Désodorisants en spray, sprays WC, diffuseurs chimiques, purificateurs d'air en spray : ce sont les produits les plus émissifs mesurés dans les logements. Ils projettent directement des COV et des particules fines dans l'air respiré, souvent dans des pièces peu ventilées.",
          },
          {
            indicator: "Impact modéré mais fréquent",
            name: "Nettoyants parfumés et multi-usages",
            description:
              "Les nettoyants multi-surfaces, les produits WC et les nettoyants pour vitres sont moins émissifs que les sprays d'ambiance mais utilisés quotidiennement. La plupart contiennent des terpènes (limonène, alpha-pinène) qui réagissent avec l'ozone pour former d'autres polluants secondaires.",
          },
          {
            indicator: "Impact sous-estimé",
            name: "Bougies à la paraffine et encens",
            description:
              "Les bougies en paraffine (dérivé du pétrole) libèrent du benzène, du toluène et des PM2,5 en brûlant. Dans une pièce peu ventilée, une bougie allumée peut rapidement dépasser les recommandations pour les particules fines. L'encens est encore plus émissif.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Signaux d'exposition"
        title="Comment reconnaître une réaction aux produits ménagers."
        subtitle="Les effets peuvent être immédiats ou s'installer progressivement avec une exposition chronique."
        signs={[
          {
            label: "Irritation de la gorge ou des yeux pendant ou après le ménage",
            description:
              "Picotements, larmoiement, gorge qui gratte : réactions immédiates aux COV ou aux particules libérées par les sprays. Souvent interprétées comme un rhume ou une allergie saisonnière.",
            severity: "modéré",
          },
          {
            label: "Maux de tête après le ménage",
            description:
              "Les solvants et les terpènes des nettoyants parfumés peuvent provoquer des céphalées, surtout dans une pièce mal ventilée. Les maux de tête commencent pendant ou dans l'heure suivant l'utilisation du produit.",
            severity: "modéré",
          },
          {
            label: "Toux ou gêne respiratoire lors de l'utilisation de sprays",
            description:
              "Les sprays propulsent des particules fines directement dans les voies respiratoires. Une toux réflexe pendant l'utilisation indique une irritation des voies aériennes supérieures.",
            severity: "critique",
          },
          {
            label: "Aggravation de l'asthme après utilisation de certains produits",
            description:
              "Certains composés (terpènes, glycol ethers, formaldéhyde dans certains nettoyants) sont des déclencheurs connus de crises d'asthme. Une aggravation des symptômes corrélée à l'usage de produits doit être signalée au médecin.",
            severity: "critique",
          },
          {
            label: "Odeur persistante dans le logement après le ménage",
            description:
              "Si une odeur de produit reste plusieurs heures après le nettoyage, les COV sont encore présents dans l'air. L'aération insuffisante ou l'excès de produit parfumé en est la cause.",
            severity: "léger",
          },
          {
            label: "Symptômes qui s'améliorent pendant les vacances",
            description:
              "Si vos irritations ou votre fatigue disparaissent hors de votre logement, vos produits ménagers peuvent contribuer à une exposition chronique à bas bruit qui ne se révèle que par accumulation.",
            severity: "modéré",
          },
        ]}
        footerNote="Si vous avez des réactions sévères (difficultés à respirer, urticaire) à certains produits, signalez-les à votre médecin. Certaines personnes ont des hypersensibilités chimiques qui nécessitent un suivi particulier."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ils irritent"
        title="Les mécanismes d'irritation des produits ménagers."
        causes={[
          {
            number: "01",
            cause: "Composés organiques volatils (COV)",
            explanation:
              "La majorité des produits parfumés contiennent des COV : terpènes (limonène dans les parfums citron, alpha-pinène dans les parfums pin), éthanol, glycol ethers. Ces molécules s'évaporent rapidement et se retrouvent dans l'air respiré, parfois à des concentrations dépassant les valeurs de référence.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Particules fines des aérosols",
            explanation:
              "Les sprays projettent de minuscules gouttelettes qui restent en suspension dans l'air plusieurs minutes à plusieurs heures. Ces particules pénètrent profondément dans les voies respiratoires. Les sprays d'ambiance sont les plus émissifs car utilisés précisément pour être respirés.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Réactions chimiques secondaires",
            explanation:
              "Certains COV (limonène, alpha-pinène) réagissent avec l'ozone présent dans l'air pour former des polluants secondaires (formaldéhyde, particules ultrafines) plus irritants que les composés initiaux. Plus la pièce est fermée, plus ces réactions s'accumulent.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Mélanges de produits",
            explanation:
              "Certains mélanges sont dangereux : javel + ammoniaque = chloramine toxique ; javel + acide (vinaigre, déboucheur) = chlore gazeux. Mais même sans danger aigu, mélanger plusieurs produits multiplie les sources de COV et peut créer des composés irritants imprévus.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Utilisation dans des espaces mal ventilés",
            explanation:
              "Un nettoyant en spray utilisé dans une salle de bain fermée concentre les émissions dans un espace confiné. La même quantité de produit dans une pièce ventilée est incomparablement moins problématique. La ventilation est le premier facteur de réduction du risque.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Remplacer dans le bon ordre."
        immediateLabel="Remplacer maintenant"
        structuralLabel="Transformer ses habitudes"
        immediate={[
          {
            label: "Supprimer les sprays désodorisants et d'ambiance",
            description:
              "C'est la substitution la plus impactante. Ils n'ont aucun usage fonctionnel qu'une aération ne puisse remplacer. Jetez-les ou ne les rachetez pas. Une fenêtre ouverte 10 minutes est plus efficace et n'ajoute rien dans l'air.",
            effort: "Gratuit, décision",
          },
          {
            label: "Aérer pendant et après chaque nettoyage",
            description:
              "Ouvrez une fenêtre avant de commencer le ménage. Gardez-la ouverte pendant l'utilisation des produits. La dilution par l'air extérieur réduit les concentrations de COV de façon drastique.",
            effort: "Gratuit",
          },
          {
            label: "Remplacer les bougies paraffine par de la cire végétale",
            description:
              "Les bougies en cire de soja ou d'abeille émettent significativement moins de benzène et de PM2,5. Optez pour des bougies sans parfum synthétique et aérez toujours légèrement la pièce pendant leur utilisation.",
            effort: "Coût légèrement supérieur",
          },
          {
            label: "Lisez les étiquettes : cherchez la mention 'Danger'",
            description:
              "Le règlement CLP européen impose des pictogrammes et les mentions 'Danger' ou 'Attention' sur les produits présentant un risque. Les produits sans pictogramme restent à surveiller mais sont généralement moins risqués.",
            effort: "Gratuit, attention",
          },
        ]}
        structural={[
          {
            label: "Passer au bicarbonate, vinaigre blanc et savon noir",
            description:
              "Ces trois produits traitent 80 à 90 % des besoins ménagers courants. Bicarbonate : déodorant de surfaces, léger abrasif, neutralisateur d'odeurs. Vinaigre blanc : calcaire, désinfectant léger, surfaces. Savon noir : sol, surfaces grasses.",
            effort: "Moins cher que les produits conventionnels",
          },
          {
            label: "Utiliser des chiffons microfibre",
            description:
              "Les chiffons microfibre permettent de nettoyer la majorité des surfaces avec uniquement de l'eau. Ils réduisent de 80 % la quantité de produit nécessaire. Lavables et réutilisables des centaines de fois.",
            effort: "5–15 € l'ensemble",
          },
          {
            label: "Vérifier l'étiquette des produits qu'on garde",
            description:
              "Pour les produits qu'on conserve (WC, vitres, salle de bain), choisissez des formulations sans parfum ou avec un minimum d'ingrédients. Les écolabels (Ecolabel européen, NF Environnement) garantissent des formulations moins émissives.",
            effort: "À chaque achat",
          },
          {
            label: "Stocker les produits dans un espace ventilé",
            description:
              "Les bidons et sprays stockés dans un placard fermé dans le logement émettent leurs COV en continu. Stockez-les dans un local technique, une cave ou un garage. Gardez le minimum dans le logement.",
            effort: "Organisation",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les mélanges à ne jamais faire."
        errors={[
          {
            label: "Javel + ammoniaque ou produits ammoniacaux",
            explanation:
              "Ce mélange produit de la chloramine gazeuse, toxique pour les voies respiratoires. Beaucoup de nettoyants multi-usages contiennent de l'ammoniaque sans l'indiquer clairement. Ne mélangez jamais la javel avec un autre produit ménager.",
          },
          {
            label: "Javel + acide (vinaigre, déboucheur, détartrant)",
            explanation:
              "Ce mélange libère du chlore gazeux, irritant et dangereux. Le vinaigre est acide : ne l'utilisez jamais en combinaison avec de la javel. Rincez abondamment les surfaces entre l'utilisation de produits acides et basiques.",
          },
          {
            label: "Accumuler les sprays d'ambiance pour couvrir une odeur",
            explanation:
              "Utiliser plusieurs désodorisants à la suite ne règle pas le problème source et multiplie la charge en COV dans l'air. Chaque spray ajoute des polluants. La solution est d'identifier et traiter l'odeur, pas de la masquer.",
          },
          {
            label: "Croire que 'naturel' ou 'éco' signifie non irritant",
            explanation:
              "Un produit labellisé 'naturel' peut contenir des huiles essentielles très irritantes (menthe, eucalyptus, terpènes) ou des composés allergisants naturels. Lisez toujours la composition, indépendamment de la communication marketing.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les produits ménagers"
        items={[
          {
            question: "Le vinaigre blanc désinfecte-t-il vraiment ?",
            answer:
              "Le vinaigre blanc (acide acétique à 4–8 %) a un effet bactériostatique modéré sur certaines bactéries courantes. Il n'est pas un désinfectant médical et ne remplace pas un produit virucide pour les surfaces à risque. Pour l'entretien courant (calcaire, surfaces de cuisine non critiques), il est suffisant et sans risque.",
          },
          {
            question: "Peut-on vraiment se passer de la javel ?",
            answer:
              "Pour la désinfection courante, oui. La javel est efficace mais aussi très émissive et irritante. Le vinaigre blanc et les produits à base d'alcool isopropylique sont des alternatives efficaces pour la majorité des usages domestiques. La javel reste utile pour des situations spécifiques (moisissures sur surfaces lisses, désinfection haute fréquence) mais ne doit pas être un usage quotidien.",
          },
          {
            question: "Les produits 'sans parfum' sont-ils vraiment mieux ?",
            answer:
              "Généralement, oui. Les parfums synthétiques sont une source majeure de COV dans les produits ménagers. Un produit sans parfum émet moins de composés volatils. Attention : 'sans parfum ajouté' peut masquer la présence de parfums masquants. Cherchez 'non parfumé' ou vérifiez l'absence de 'fragrance' dans la liste INCI.",
          },
          {
            question: "Les huiles essentielles sont-elles de bonnes alternatives aux produits chimiques ?",
            answer:
              "Pas nécessairement. Les huiles essentielles sont des mélanges de COV naturels. Certaines ont des propriétés antibactériennes (tea tree, thym) mais elles peuvent aussi être irritantes pour les voies respiratoires, notamment chez les enfants de moins de 3 ans et les personnes asthmatiques. Les diffuser dans une pièce fermée ajoute des polluants, même naturels.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Air intérieur",
            title: "Air intérieur pollué",
            description:
              "Les produits ménagers sont une source majeure de COV. Comprendre l'ensemble des polluants intérieurs pour agir globalement.",
            href: "/air-interieur/air-interieur-pollue/",
          },
          {
            tag: "Produits et habitudes",
            title: "Habitudes du quotidien",
            description:
              "Au-delà des substitutions de produits, certaines habitudes simples améliorent durablement la qualité de l'air intérieur.",
            href: "/produits-et-habitudes/",
          },
          {
            tag: "Maison saine famille",
            title: "Produits adaptés aux enfants",
            description:
              "Les enfants sont plus vulnérables aux irritants chimiques. Quels produits éviter dans les espaces qu'ils fréquentent.",
            href: "/maison-saine-famille/",
          },
        ]}
      />
    </>
  );
}

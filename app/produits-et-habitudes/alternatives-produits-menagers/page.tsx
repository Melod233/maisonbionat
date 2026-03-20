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
  title: "Alternatives aux produits ménagers conventionnels : le guide par usage",
  description:
    "Bicarbonate, vinaigre blanc, savon noir, savon de Marseille : quelles alternatives aux produits ménagers classiques, par type de surface et d'usage. Guide pratique sans greenwashing.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/alternatives-produits-menagers/",
  },
  openGraph: {
    title: "Alternatives aux produits ménagers conventionnels : le guide par usage",
    description:
      "Bicarbonate, vinaigre blanc, savon noir, savon de Marseille : quelles alternatives aux produits ménagers classiques, par type de surface et d'usage. Guide pratique sans greenwashing.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/alternatives-produits-menagers/",
  },
};

export default function AlternativesProduitsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Alternatives aux produits ménagers conventionnels : le guide par usage", href: "https://www.maisonbionat.fr/produits-et-habitudes/alternatives-produits-menagers/" },
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
        tag="Guide pratique"
        title="Alternatives aux produits ménagers : ce qui remplace quoi, surface par surface"
        quickAnswer="Bicarbonate de soude, vinaigre blanc, savon noir et savon de Marseille suffisent pour la grande majorité des nettoyages courants. Ces produits émettent peu ou pas de composés organiques volatils (COV), contrairement aux nettoyants parfumés en spray. Ce guide vous indique, usage par usage, quel produit utilise, comment et dans quelle concentration."
        stats={[
          { value: "3", label: "ingrédients couvrent environ 80 % des usages ménagers courants" },
          { value: "COV", label: "émis en grande quantité par les sprays nettoyants parfumés (ADEME/PRESSENS)" },
          { value: "0 €", label: "coût supplémentaire : bicarbonate et vinaigre coûtent moins cher que les produits conventionnels" },
          { value: "Écolabel", label: "européen : critère de référence pour les produits du commerce à faibles émissions" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Par usage" },
          { id: "signes", label: "Quand agir" },
          { id: "causes", label: "Pourquoi changer" },
          { id: "actions", label: "Comment substituer" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Par usage"
        title="Quelle alternative pour quel usage ?"
        description="Les trois produits de base, bicarbonate de soude, vinaigre blanc à 8 % et savon noir liquide, ne se substituent pas de façon interchangeable. Chacun a un domaine d'efficacité précis. Les confondre ou les mélanger entre eux peut être contre-productif."
        variants={[
          {
            indicator: "Surfaces courantes, multi-usage",
            name: "Savon noir dilué ou vinaigre blanc dilué",
            description:
              "Pour sols carrelés, plans de travail, éviers et surfaces plastiques : 2 cuillères à soupe de savon noir liquide dans 1 litre d'eau chaude. Pour les traces calcaires et les vitres : vinaigre blanc dilué à 50 % dans l'eau. Le bicarbonate en pâte (bicarbonate + quelques gouttes d'eau) traite les taches tenaces en léger abrasif.",
          },
          {
            indicator: "Sanitaires et salle de bain",
            name: "Vinaigre blanc (calcaire) + bicarbonate (tartre léger)",
            description:
              "Pour les dépôts calcaires sur robinets, pommes de douche et parois : vinaigre blanc pur ou dilué à 50 %, laissé à agir 15 à 30 minutes. Pour le tartre tenace sur les WC : bicarbonate saupoudré suivi de vinaigre blanc, laisser agir puis brosser. Ne mélangez pas bicarbonate et vinaigre simultanément dans le même récipient : ils se neutralisent.",
          },
          {
            indicator: "Vitres et miroirs",
            name: "Vinaigre blanc + eau, essuyé avec journal ou microfibre",
            description:
              "Un spray maison composé de vinaigre blanc à 30 % dans l'eau essuie vitres et miroirs sans laisser de traces, à condition d'utiliser un chiffon microfibre ou du papier journal (pas de papier absorbant). Ce mélange est économique, non toxique et non émissif.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Situations où changer"
        title="Dans quels cas la substitution est particulièrement utile."
        subtitle="Certaines situations rendent le changement de produits plus urgent : présence d'enfants, personnes asthmatiques, logement mal ventilé."
        signs={[
          {
            label: "Logement peu ventilé ou avec VMC insuffisante",
            description:
              "Dans un logement sans renouvellement d'air efficace, les COV des produits parfumés s'accumulent. La substitution par des produits non émissifs y est particulièrement bénéfique.",
            severity: "critique",
          },
          {
            label: "Présence d'enfants ou de nourrissons",
            description:
              "Les enfants respirent plus vite que les adultes et sont plus proches du sol où les particules se déposent. Leur exposition aux COV ménagers est proportionnellement plus élevée.",
            severity: "critique",
          },
          {
            label: "Personne asthmatique ou allergique dans le foyer",
            description:
              "Terpènes (limonène, alpha-pinène), glycol ethers et parfums synthétiques sont des déclencheurs connus de crises d'asthme. La substitution par des produits sans parfum réduit l'exposition.",
            severity: "critique",
          },
          {
            label: "Utilisation quotidienne de sprays en aérosol",
            description:
              "Les sprays propulsent des gouttelettes qui restent en suspension dans l'air plusieurs heures. Une utilisation quotidienne représente une exposition chronique non négligeable.",
            severity: "modéré",
          },
          {
            label: "Odeur de produit persistant plusieurs heures après le ménage",
            description:
              "Si l'odeur reste longtemps, les COV sont encore présents dans l'air. C'est un signal que les concentrations sont élevées et que la substitution serait utile.",
            severity: "modéré",
          },
          {
            label: "Budget ménager élevé pour les produits d'entretien",
            description:
              "Le bicarbonate de soude coûte moins d'1 € le kilo, le vinaigre blanc environ 0,50 € le litre. Passer aux alternatives permet souvent de diviser par 5 ou 10 le coût des produits ménagers.",
            severity: "léger",
          },
        ]}
        footerNote="La substitution n'a pas besoin d'être immédiate ni totale. Remplacer les sprays parfumés en priorité donne déjà un bénéfice important sur la qualité de l'air."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi substituer"
        title="Ce que contiennent les produits conventionnels."
        subtitle="Comprendre la composition des produits courants pour mieux cibler ce qu'il vaut la peine de remplacer."
        causes={[
          {
            number: "01",
            cause: "Parfums synthétiques et terpènes",
            explanation:
              "La majorité des nettoyants parfumés contient des terpènes (limonène pour les senteurs agrumes, alpha-pinène pour les senteurs pin) et des muscs synthétiques. Ces composés sont des COV qui s'évaporent rapidement et peuvent réagir avec l'ozone présent dans l'air pour former des polluants secondaires comme le formaldéhyde.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Glycol ethers et solvants",
            explanation:
              "Présents dans de nombreux nettoyants vitres, multi-surfaces et dégraissants, les glycol ethers sont des solvants organiques qui s'évaporent facilement. Certains sont classés comme reprotoxiques (dangereux pour la reproduction). L'INRS recommande de les substituer dès que possible.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Agents de surface (tensioactifs) non biodégradables",
            explanation:
              "Les tensioactifs anioniques comme le lauryl sulfate ou les sulfonates linéaires sont persistants dans l'environnement aquatique. Les alternatives à base de savon de Marseille (oléate de soude) ou de savon noir (potassium olivate) sont entièrement biodégradables.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Agents conservateurs potentiellement allergisants",
            explanation:
              "Les isothiazolinones (méthylisothiazolinone, chlorométhylisothiazolinone) sont des conservateurs utilisés dans de nombreux produits ménagers liquides. Ils sont identifiés comme allergisants cutanés et respiratoires par l'ANSES et l'Agence européenne des produits chimiques (ECHA).",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Propulseurs des aérosols",
            explanation:
              "Les sprays aérosols utilisent des propulseurs gazeux (hydrocarbures ou gaz comprimé) qui projettent le produit sous forme de fines gouttelettes. Ces particules restent en suspension dans l'air, transportant les composés actifs directement dans les voies respiratoires.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Substituer progressivement, dans le bon ordre."
        immediateLabel="À faire maintenant"
        structuralLabel="Sur la durée"
        immediate={[
          {
            label: "Arrêter les sprays désodorisants et d'ambiance",
            description:
              "Ce sont les produits les plus émissifs. Ils n'ont aucun usage fonctionnel qu'une aération ne puisse remplacer. Ne pas les racheter quand le flacon est vide.",
            effort: "Gratuit, décision",
          },
          {
            label: "Acheter vinaigre blanc et bicarbonate en grand conditionnement",
            description:
              "Un bidon de vinaigre blanc à 8 % de 5 litres (environ 2 à 3 €) et un kilo de bicarbonate alimentaire (moins d'1 €) permettent de couvrir la majorité des usages pendant plusieurs semaines.",
            effort: "Moins de 5 €",
          },
          {
            label: "Préparer un spray multi-surfaces maison",
            description:
              "1 litre d'eau, 1 cuillère à soupe de savon noir liquide, éventuellement 20 cl de vinaigre blanc. Mettre en flacon pompe (pas aérosol). Utiliser sur sols, plans de travail, portes et surfaces plastiques.",
            effort: "10 minutes, matériel simple",
          },
          {
            label: "Adopter le chiffon microfibre pour les vitres et surfaces lisses",
            description:
              "Un chiffon microfibre humide nettoie les vitres, inox et surfaces lisses sans aucun produit. Il réduit de 80 % la quantité de nettoyant nécessaire. Lavable à 60 °C et réutilisable des centaines de fois.",
            effort: "5 à 15 € l'ensemble",
          },
        ]}
        structural={[
          {
            label: "Passer au savon noir pour les sols",
            description:
              "Le savon noir liquide (potassium olivate) est un dégraissant naturel biodégradable efficace sur carrelage, parquet stratifié et lino. 1 à 2 cuillères à soupe dans un seau d'eau chaude suffisent. Il laisse un film protecteur léger.",
            effort: "Moins cher que les nettoyants sols",
          },
          {
            label: "Constituer un kit de trois produits de base",
            description:
              "Bicarbonate de soude (abrasif doux, neutralisateur d'odeurs), vinaigre blanc à 8 % (calcaire, vitres, désinfectant léger), savon noir liquide (dégraissage, sols). Ces trois produits couvrent l'essentiel. Stockés dans un placard, ils ne polluent pas l'air intérieur.",
            effort: "5 à 10 € au total",
          },
          {
            label: "Compléter avec du cristaux de soude pour le dégraissage intense",
            description:
              "Les cristaux de soude (carbonate de sodium) sont utiles pour les graisses tenaces (four, hotte), le détartrage profond et la désinfection. Utiliser avec des gants, ne pas respirer directement lors de la préparation. Efficace en solution à 10 % dans l'eau chaude.",
            effort: "Moins d'1 € les 500 g",
          },
          {
            label: "Éviter les mélanges inutiles : un produit par usage",
            description:
              "Mélanger bicarbonate et vinaigre ensemble dans un même récipient produit une réaction acide-base qui neutralise les deux produits. Chacun s'utilise séparément et consécutivement si besoin, jamais simultanément en mélange.",
            effort: "Connaissance, habitude",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes avec les alternatives ménagères."
        errors={[
          {
            label: "Mélanger bicarbonate et vinaigre dans le même contenant",
            explanation:
              "Le bicarbonate (base) et le vinaigre (acide) se neutralisent mutuellement quand on les mélange. La mousse produite est de l'eau et du CO2 : spectaculaire, mais les deux produits perdent leur efficacité. Ils s'utilisent séparément.",
          },
          {
            label: "Croire que 'naturel' signifie sans risque à n'importe quelle dose",
            explanation:
              "Le bicarbonate peut endommager les surfaces délicates (parquet huilé, aluminium anodisé, acier inoxydable brossé) s'il est utilisé pur en abrasif. Le vinaigre pur attaque le marbre, le calcaire et certains joints de salle de bain. Toujours diluer et tester sur une petite surface.",
          },
          {
            label: "Utiliser le vinaigre sur le marbre ou la pierre naturelle",
            explanation:
              "Le vinaigre est acide et réagit avec le calcaire contenu dans le marbre et la pierre naturelle. Il les attaque et les ternit de façon irréversible. Pour ces surfaces, utilisez uniquement de l'eau légèrement savonneuse.",
          },
          {
            label: "Supposer que les huiles essentielles parfument sans nuire",
            explanation:
              "Ajouter des huiles essentielles aux préparations maison n'améliore pas leur efficacité et introduit des COV naturels. Certaines huiles (eucalyptus, menthe, clou de girofle) sont irritantes pour les voies respiratoires et déconseillées en présence d'enfants de moins de 3 ans.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les alternatives ménagères"
        items={[
          {
            question: "Le vinaigre blanc désinfecte-t-il vraiment ?",
            answer:
              "Le vinaigre blanc (acide acétique à 4-8 %) a un effet bactériostatique modéré sur certaines bactéries courantes. Il n'est pas un désinfectant médical et ne remplace pas un virucide pour des surfaces à risque élevé. Pour l'entretien courant des cuisines et sanitaires, il est suffisant. En cas de contamination avérée (salmonelle, etc.), un produit désinfectant homologué reste nécessaire.",
          },
          {
            question: "Le bicarbonate de soude élimine-t-il vraiment les odeurs ?",
            answer:
              "Oui, le bicarbonate neutralise les molécules odorantes acides (acide sulfurique, acide butyrique) par réaction chimique. Posé dans un récipient ouvert, il absorbe les odeurs ambiantes du réfrigérateur, des poubelles ou des chaussures. Pour un effet rapide, l'appliquer directement sur la surface odorante, laisser agir 30 minutes, puis brosser.",
          },
          {
            question: "Peut-on vraiment utiliser ces produits sur tous les matériaux ?",
            answer:
              "Non. Le vinaigre est à éviter sur le marbre, la pierre calcaire, le parquet huilé et certains joints. Le bicarbonate pur est trop abrasif pour l'acier inoxydable poli et les vitrocéramiques. Le savon noir peut laisser des traces sur les vitres. Chaque produit a ses domaines d'emploi et ses contre-indications, indiqués dans les guides d'utilisation.",
          },
          {
            question: "Comment conserver les préparations maison ?",
            answer:
              "Les préparations à base d'eau sans conservateur se conservent 2 à 4 semaines maximum dans un flacon propre et hermétique. Les préparations avec savon noir durent plus longtemps (le savon est conservateur naturel). Ne pas stocker dans des contenants anciennement utilisés pour des produits alimentaires. Étiqueter clairement le contenu.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Recettes de produits ménagers maison",
            description:
              "Les formules précises pour fabriquer soi-même ses nettoyants : multi-surfaces, salle de bain, WC, vitres, dégraissant.",
            href: "/produits-et-habitudes/recettes-produits-menagers/",
          },
          {
            tag: "Produits et habitudes",
            title: "Choisir des produits ménagers du commerce plus sains",
            description:
              "Écolabel européen, NF Environnement, ingrédients à éviter : comment naviguer dans l'offre commerciale.",
            href: "/produits-et-habitudes/produits-menagers-sains/",
          },
          {
            tag: "Produits et habitudes",
            title: "Gestes du quotidien pour une maison plus saine",
            description:
              "Au-delà des produits, les habitudes qui améliorent durablement la qualité de l'air et du logement.",
            href: "/produits-et-habitudes/gestes-maison-saine/",
          },
        ]}
      />
    </>
  );
}

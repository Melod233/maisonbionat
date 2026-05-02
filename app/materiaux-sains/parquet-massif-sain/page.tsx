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
  title: "Parquet massif sain : émissions, finitions et arbitrage matériau",
  description:
    "Parquet massif vs contrecollé vs stratifié : émissions de COV et formaldéhyde, finitions huile/vernis/cire, classes d'usage et choix selon la pièce.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/parquet-massif-sain/",
  },
  openGraph: {
    title: "Parquet massif sain : émissions, finitions et arbitrage matériau",
    description:
      "Parquet massif vs contrecollé vs stratifié : émissions de COV et formaldéhyde, finitions huile/vernis/cire, classes d'usage et choix selon la pièce.",
    url: "https://www.maisonbionat.fr/materiaux-sains/parquet-massif-sain/",
  },
};

const faqItems = [
  {
    question: "Le parquet massif émet-il vraiment moins que le contrecollé ou le stratifié ?",
    answer:
      "Oui, sur le bois lui-même. Un parquet massif est constitué d'une seule pièce de bois noble (chêne, châtaignier, hêtre, etc.) sans colle ni panneau dérivé. Sa contribution aux COV intérieurs est donc principalement liée à la finition (vernis, huile, cire) et à la colle de pose, pas au bois en tant que tel. Le contrecollé comporte une couche d'usure en bois noble collée sur un support en HDF ou bois feuillu, source potentielle de formaldéhyde selon la qualité des panneaux. Le stratifié est entièrement constitué de panneaux HDF ou MDF avec un décor imprimé : sa contribution aux émissions dépend strictement de la classe E1/E0 ou CARB Phase 2 du panneau. Globalement, un parquet massif avec finition huile naturelle reste l'option la moins émissive du marché.",
  },
  {
    question: "Faut-il toujours préférer le massif au contrecollé ?",
    answer:
      "Non. Le contrecollé a des avantages techniques que le massif n'a pas, notamment une meilleure stabilité dimensionnelle face aux variations d'humidité (utile sur plancher chauffant ou en pièce humide bien ventilée). Pour un budget équivalent, un contrecollé de qualité sur âme bois (peuplier, pin) avec colle sans formaldéhyde ajouté (classe E0 ou label A+) peut tout à fait constituer un choix sain. Le massif est l'option la plus simple à valider sanitairement, mais le contrecollé bien sourcé n'est pas un mauvais choix. Le critère décisif est l'étiquetage A+ et, idéalement, la fiche technique des colles utilisées.",
  },
  {
    question: "Vernis, huile ou cire : quelle finition est la plus saine ?",
    answer:
      "Les huiles naturelles dures (lin, ricin, tung) avec siccatifs sans cobalt et faibles COV sont aujourd'hui l'option la plus documentée comme saine, à condition de respecter la durée d'aération recommandée par le fabricant (souvent 24 à 72 heures par couche, plusieurs couches). Les vernis acryliques en phase aqueuse étiquetés A+ sont une alternative crédible, plus protecteurs et plus simples à entretenir, mais plus émissifs à la pose. Les cires d'abeille ou végétales restent les plus naturelles mais offrent une protection moindre, à réserver aux pièces de vie sans fort trafic. Éviter strictement les vernis polyuréthane à solvant, fortement émissifs en COV.",
  },
  {
    question: "Comment poser un parquet massif sans alourdir l'air intérieur ?",
    answer:
      "Trois choix critiques. 1) Mode de pose : pose flottante sur sous-couche minérale ou liège (pas de colle), pose clouée sur lambourdes (pas de colle), ou pose collée à la colle MS Polymère sans isocyanates ni solvants (Emicode EC1+ ou EC1Plus). Éviter les colles néoprène ou polyuréthane fortement émissives. 2) Finition : voir question précédente, privilégier huile naturelle ou vernis aqueux A+. 3) Aération : ventiler intensivement pendant et après la pose (au moins 4 à 6 semaines, voire 8 selon les produits utilisés), idéalement avant emménagement ou utilisation de la pièce comme chambre.",
  },
];

export default function ParquetMassifSainPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    {
      name: "Parquet massif sain",
      href: "https://www.maisonbionat.fr/materiaux-sains/parquet-massif-sain/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Matériaux sains"
        parentHref="/materiaux-sains/"
        tag="Revêtement de sol"
        title="Parquet massif sain : émissions, finitions et arbitrage face au contrecollé et au stratifié"
        quickAnswer="Le parquet massif est constitué d'une seule pièce de bois sans colle ni panneau dérivé, ce qui en fait l'option de référence en matière d'émissions de COV et de formaldéhyde sur le matériau lui-même. Mais ce qui détermine la qualité de l'air intérieur après pose est rarement le bois : ce sont la finition (vernis, huile, cire) et la colle de pose qui pèsent dans le bilan global. Le décret 2011-321 impose un étiquetage COV (A+ à C) sur tous les revêtements de sol commercialisés en France ; viser systématiquement A+ pour le parquet, la finition et la colle. Comparé au contrecollé (HDF + couche noble) et au stratifié (HDF + décor imprimé), le massif présente la plus faible variabilité sanitaire et la meilleure durabilité (rénovable plusieurs fois). Le coût initial est plus élevé (60 à 150 €/m² pose comprise selon essence) mais l'amortissement sur 30 à 50 ans en fait souvent un choix raisonnable."
        stats={[
          {
            value: "≤ 10 µg/m³",
            label: "seuil formaldéhyde pour obtenir la classe A+ (étiquetage COV décret 2011-321)",
          },
          {
            value: "0,124 mg/m³",
            label: "seuil formaldéhyde de la classe E1 dans l'air ambiant (norme bois)",
          },
          {
            value: "60-150 €/m²",
            label: "fourchette typique parquet massif posé en 2026 selon essence et finition",
          },
          {
            value: "30-50 ans",
            label: "durée de vie d'un parquet massif rénovable (ponçage et nouvelle finition)",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les options" },
          { id: "signes", label: "Critères de choix sain" },
          { id: "causes", label: "Sources d'émission" },
          { id: "actions", label: "Choisir, poser, finir" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Massif, contrecollé ou stratifié : trois familles, trois profils sanitaires."
        description="Le marché français propose trois grandes familles de parquet aux profils techniques et sanitaires distincts. Le massif (lame entièrement en bois noble), le contrecollé (couche d'usure en bois noble collée sur âme bois ou panneau dérivé), et le stratifié (panneau HDF ou MDF avec décor imprimé, sans bois véritable visible). L'étiquetage COV (A+ à C) permis par le décret 2011-321 est obligatoire et constitue le premier critère de tri. Au-delà, la qualité de la colle de pose et de la finition jouent un rôle déterminant dans l'air intérieur post-chantier."
        variants={[
          {
            indicator: "Massif",
            name: "Lame entièrement en bois noble",
            description:
              "Une seule pièce de bois (chêne, châtaignier, hêtre, frêne, robinier...). Pas de colle interne, pas de panneau dérivé. Émissions liées au bois lui-même très faibles (le bois sec dégage peu de formaldéhyde naturellement, à l'exception de quelques essences spécifiques). Ce sont la finition et la colle de pose qui pèsent. Plus stable dimensionnellement avec une humidité ambiante maintenue 40-55 %. Rénovable plusieurs fois par ponçage.",
          },
          {
            indicator: "Contrecollé",
            name: "Couche d'usure sur support multicouche",
            description:
              "Trois couches : couche d'usure en bois noble (2,5 à 6 mm), âme en bois résineux ou en HDF, contre-parement. Plus stable que le massif, compatible plancher chauffant. Émissions très variables selon la qualité de l'âme et de la colle interne. Privilégier les contrecollés sur âme bois (peuplier, pin) plutôt que HDF, et exiger A+ avec, idéalement, la fiche technique précisant l'absence de formaldéhyde ajouté (NAF/NAUF, CARB Phase 2 ou EPLF).",
          },
          {
            indicator: "Stratifié",
            name: "Panneau HDF avec décor imprimé",
            description:
              "Pas de bois noble visible : couche d'usure en mélamine sur décor papier sur âme HDF ou MDF. Coût bas, résistance correcte au quotidien, mais profil sanitaire dépendant strictement de la classe E1 ou E0 du panneau et de la qualité de pose (clipsé sans colle, en théorie). Les stratifiés haut de gamme atteignent A+ ; les entrées de gamme étiquetées B ou C sont à proscrire en chambre. Non rénovable : à remplacer en fin de vie.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Les critères concrets pour choisir un parquet vraiment sain."
        subtitle="Au-delà du choix massif/contrecollé/stratifié, six critères doivent figurer dans la fiche technique avant l'achat. Sans eux, l'étiquetage A+ seul ne suffit pas à garantir une pose à faible impact sanitaire."
        signs={[
          {
            label: "Étiquetage COV A+ visible sur l'emballage",
            description:
              "Obligatoire depuis le décret 2011-321 sur tout revêtement de sol commercialisé en France. La classe A+ correspond à des émissions de formaldéhyde inférieures à 10 µg/m³ et des émissions totales de COV très faibles. C'est le seuil minimum à viser. Toute lame étiquetée B ou C est à exclure en pièce de vie ou chambre.",
            severity: "critique",
          },
          {
            label: "Mention E1, NAF/NAUF ou CARB Phase 2 pour le contrecollé et le stratifié",
            description:
              "La classe E1 (≤ 0,124 mg/m³ de formaldéhyde en air ambiant) est le minimum européen. NAF (No Added Formaldehyde) ou NAUF (No Added Urea Formaldehyde) garantit l'absence de formaldéhyde ajouté dans les colles. CARB Phase 2 est la norme californienne plus exigeante, présente sur les produits de qualité importés ou exportés outre-Atlantique. Demander la fiche technique si l'information n'est pas sur l'emballage.",
            severity: "critique",
          },
          {
            label: "Finition pré-appliquée ou à appliquer en huile naturelle",
            description:
              "Si vous achetez un parquet pré-fini, vérifier la nature de la finition usine (idéalement vernis aqueux A+ ou huile dure naturelle). Si vous finissez vous-même, privilégier l'huile dure (lin, tung) avec siccatifs sans cobalt, ou un vernis aqueux étiqueté A+. Éviter strictement les vernis polyuréthane à solvant, encore courants sur le marché.",
            severity: "modéré",
          },
          {
            label: "Mode de pose compatible (flottant, cloué, collé sain)",
            description:
              "Pose flottante sur sous-couche minérale ou liège : aucune colle, l'option la plus simple sanitairement, possible sur la plupart des contrecollés et certains massifs. Pose clouée : adaptée au massif sur lambourdes, sans colle. Pose collée : exige une colle MS Polymère sans isocyanates étiquetée Emicode EC1+ ou EC1Plus. Ne jamais accepter une colle néoprène, polyuréthane à solvant ou inconnue.",
            severity: "critique",
          },
          {
            label: "Essence locale ou européenne avec traçabilité PEFC ou FSC",
            description:
              "Critère plus environnemental que sanitaire, mais corrélé à la qualité globale du produit. Chêne français, châtaignier, hêtre européen sont des choix sains et durables. Les essences exotiques (bois rouges, ipé, teck) supposent traçabilité FSC pour éviter le bois illégal et certaines peuvent émettre davantage de COV naturels (terpènes).",
            severity: "léger",
          },
          {
            label: "Aucune mention 'antibactérien', 'antifongique', 'parfumé'",
            description:
              "Ces traitements ajoutent des biocides (triclosan, ions argent, fongicides) ou des parfums sans bénéfice démontré et avec un coût sanitaire potentiel. Un parquet bien posé et entretenu n'a besoin d'aucun traitement de ce type. Les éviter systématiquement.",
            severity: "modéré",
          },
        ]}
        footerNote="L'étiquetage A+ couvre une partie des risques mais ne mesure que 11 substances réglementées sur 72 h en chambre d'essai. Demander systématiquement la fiche de données de sécurité (FDS) et la fiche technique complète pour la pose et la finition."
      />

      <IssueCauses
        id="causes"
        title="Quand un parquet alourdit l'air intérieur, d'où viennent les émissions ?"
        subtitle="Les COV et le formaldéhyde mesurés après pose proviennent de sources hiérarchisées. Identifier la principale dans votre cas permet d'agir précisément."
        causes={[
          {
            number: "01",
            cause: "Colles internes du contrecollé ou du stratifié",
            explanation:
              "Les colles urée-formol, mélamine-formol ou phénol-formol utilisées dans les panneaux dérivés sont la principale source de formaldéhyde des parquets contrecollés et stratifiés. Une mauvaise classe (E2, ou non étiquetée) peut faire monter le formaldéhyde intérieur au-delà des recommandations ANSES (10 µg/m³ pour les ERP, valeur guide long terme 100 µg/m³). Le massif n'a pas cette source.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Vernis polyuréthane à solvant",
            explanation:
              "Encore largement utilisés en pose professionnelle et dans certaines finitions usine. Forte émission de COV (xylène, toluène, isocyanates) pendant la pose et plusieurs semaines après. À éviter systématiquement, même si le produit final est étiqueté A+ une fois sec : la phase d'exposition pendant et juste après la pose est déjà importante.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Colles de pose néoprène ou polyuréthane à solvant",
            explanation:
              "Sources sous-estimées. Certaines colles en pot ou en cartouche pour parquet collé contiennent des solvants aromatiques ou des isocyanates très émissifs. Le résultat est un sol étiqueté A+ posé sur une couche de colle qui dégage pendant des mois. Exiger Emicode EC1+ ou EC1Plus, ou MS Polymère sans isocyanates.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Sous-couches en mousse plastique de mauvaise qualité",
            explanation:
              "Sous-couches en polyéthylène ou en EVA bas de gamme peuvent émettre des COV résiduels les premières semaines. Préférer les sous-couches minérales (laine de verre, fibre de bois) ou en liège pour la pose flottante. Vérifier l'étiquetage A+ qui s'applique aussi à ces accessoires.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Cires et huiles synthétiques bas de gamme",
            explanation:
              "Toutes les huiles ne se valent pas. Certaines huiles dites 'naturelles' contiennent des solvants pétroliers (white spirit) ou des siccatifs au cobalt. Vérifier la fiche technique : huile dure 100 % végétale, siccatifs sans cobalt, faible teneur en COV. Aérer plusieurs jours par couche selon les indications du fabricant.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir, poser et finir un parquet sans alourdir l'air intérieur."
        immediate={[
          {
            label: "Définir le besoin avant le choix de matériau",
            description:
              "Pièce concernée (chambre, séjour, cuisine, salle de bain ?), trafic, présence de plancher chauffant, hygrométrie attendue, budget. Une chambre d'enfant ou de bébé impose le profil le plus exigeant (massif huilé ou contrecollé A+ NAF). Une cuisine bien ventilée tolère un contrecollé étanche. Une salle de bain a besoin d'un sol plus adapté qu'un parquet (vinyle A+, carrelage).",
            effort: "Réflexion en amont",
          },
          {
            label: "Privilégier le massif huilé ou ciré pour les pièces de vie",
            description:
              "C'est l'option la mieux documentée : pas de colle interne, finition naturelle si bien choisie, durabilité maximale (rénovable plusieurs fois). Surcoût modéré au m² par rapport à un contrecollé de bonne qualité, amorti sur la durée de vie. Choisir une essence locale (chêne, châtaignier) et exiger A+.",
            effort: "Choix d'achat",
          },
          {
            label: "Vérifier toutes les fiches techniques avant signature du devis",
            description:
              "Demander à l'artisan ou au fournisseur les fiches techniques de la lame, de la colle (si pose collée), de la sous-couche (si flottante) et de la finition. Vérifier les classes A+ et les certifications (NAF/NAUF, Emicode, FSC/PEFC). Refuser tout produit sans fiche fournie.",
            effort: "Démarche en amont",
          },
          {
            label: "Préparer la pièce avant pose (humidité, propreté, planéité)",
            description:
              "Le bois s'adapte à l'hygrométrie ambiante. Avant pose, maintenir la pièce entre 18 et 22 °C et 45-55 % d'humidité pendant au moins 48 heures, et stocker les lames dans la pièce 2 à 3 jours pour acclimatation. Une pose sur support trop humide ou trop sec génère des désordres durables.",
            effort: "Préparation 2-3 jours",
          },
        ]}
        structural={[
          {
            label: "Pose flottante ou clouée plutôt que collée si possible",
            description:
              "La pose sans colle élimine l'une des sources principales d'émissions post-chantier. Pose flottante sur sous-couche minérale pour un contrecollé. Pose clouée sur lambourdes pour un massif si la configuration le permet. Si la pose collée est imposée (parquet sur dalle béton, plancher chauffant), exiger une colle Emicode EC1+ ou MS Polymère sans isocyanates.",
            effort: "Choix technique de pose",
          },
          {
            label: "Aérer intensivement pendant et après les travaux",
            description:
              "Fenêtres ouvertes pendant toute la pose et la finition. Après pose, ventilation intensive 4 à 6 semaines minimum, voire 8 si vernis ou colles utilisés. Ne pas faire dormir un enfant ou un bébé dans une pièce fraîchement parquetée avant cette période. Voir notre page aérer après travaux pour le protocole détaillé.",
            effort: "4 à 8 semaines de dégazage",
          },
          {
            label: "Entretenir avec des produits adaptés à la finition",
            description:
              "Huile : nettoyage à l'eau légèrement savonneuse (savon noir dilué), recharge huile tous les 1 à 3 ans selon trafic. Vernis : nettoyage à l'eau et produit pH neutre, rénovation par revernissage selon état. Cire : nettoyage à sec, recharge cire annuelle. Éviter les produits agressifs (eau de Javel, ammoniaque, vinaigre pur) qui dégradent la finition.",
            effort: "Entretien régulier simple",
          },
          {
            label: "Rénover plutôt que remplacer quand l'usure le permet",
            description:
              "Le parquet massif se ponce 5 à 10 fois sur sa durée de vie. Un parquet contrecollé se rénove 1 à 3 fois selon l'épaisseur de la couche d'usure. Le ponçage et la nouvelle finition sont moins émissifs et moins coûteux qu'un remplacement complet. Avantage écologique et sanitaire significatif.",
            effort: "Tous les 10-15 ans selon usage",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce que l'on croit à tort sur le parquet sain."
        errors={[
          {
            label: "\"Le bois est naturel, donc forcément sain\"",
            explanation:
              "Le bois brut massif est effectivement très peu émissif. Mais un parquet est rarement du bois brut : il y a finition, colle, parfois âme en panneau dérivé. C'est l'ensemble du système (lame + colle + finition) qui détermine l'impact sur l'air. Un massif mal verni ou collé peut être plus émissif qu'un contrecollé A+ bien posé.",
          },
          {
            label: "\"Un stratifié A+ vaut un massif A+\"",
            explanation:
              "L'étiquetage A+ mesure les émissions sur 72 h en chambre d'essai pour 11 substances. Sur cette mesure, les deux peuvent en effet être proches. Mais le stratifié n'est pas rénovable, sa durée de vie est limitée, sa stabilité face à l'humidité est moindre, et son recyclage en fin de vie est complexe. Le profil global (sanitaire + durabilité + écologie) penche vers le massif sur la durée.",
          },
          {
            label: "\"Le vernis polyuréthane à solvant est plus durable\"",
            explanation:
              "Les vernis aqueux modernes A+ et les huiles dures naturelles offrent une durabilité comparable, voire supérieure pour les huiles régulièrement entretenues. Le solvant n'apporte pas de bénéfice technique justifiant les émissions élevées pendant la pose. Aucune raison de l'utiliser dans un logement habité.",
          },
          {
            label: "\"Une fois posé, mon parquet n'émet plus rien\"",
            explanation:
              "Le pic d'émission est concentré sur les 6 premières semaines, mais le dégazage résiduel se poursuit plusieurs mois pour les vernis et les colles. Un parquet bien choisi (massif huilé A+ posé flottant ou cloué) revient quasi-rapidement à un fond très bas. Un parquet mal choisi (contrecollé E2 collé au néoprène) peut continuer à émettre du formaldéhyde plusieurs années.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le parquet massif sain"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Revêtements de sol à faibles émissions",
            description:
              "Vue d'ensemble des sols (parquet, vinyle, linoléum, carrelage) sous l'angle des émissions de COV et des arbitrages.",
            href: "/materiaux-sains/revetements-sol-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Colles à faibles émissions",
            description:
              "Emicode EC1+, NAF/NAUF, CARB Phase 2 : les normes des colles de pose qui font la différence.",
            href: "/materiaux-sains/colles-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Panneaux de bois et formaldéhyde",
            description:
              "HDF, MDF, OSB, contreplaqué : les classes E1/E0/CARB et leur impact sur l'air intérieur.",
            href: "/materiaux-sains/panneaux-bois-formaldehyde/",
          },
        ]}
      />
    </>
  );
}

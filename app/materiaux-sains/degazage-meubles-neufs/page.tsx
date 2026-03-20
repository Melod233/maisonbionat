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
  title: "Dégazage des meubles neufs : protocole et durée avant installation",
  description:
    "Comment gérer le dégazage d'un meuble neuf avant de l'installer dans une chambre : où le stocker, combien de temps, et quelles précautions prendre pour les chambres d'enfants.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/degazage-meubles-neufs/",
  },
  openGraph: {
    title: "Dégazage des meubles neufs : protocole et durée avant installation",
    description:
      "Comment gérer le dégazage d'un meuble neuf avant de l'installer dans une chambre : où le stocker, combien de temps, et quelles précautions prendre pour les chambres d'enfants.",
    url: "https://www.maisonbionat.fr/materiaux-sains/degazage-meubles-neufs/",
  },
};

export default function DegazageMeublesNeufsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Dégazage des meubles neufs : protocole et durée avant installation", href: "https://www.maisonbionat.fr/materiaux-sains/degazage-meubles-neufs/" },
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
        tag="Guide pratique"
        title="Meubles neufs : comment les faire dégazer avant de les installer dans votre logement"
        quickAnswer="Un meuble neuf en aggloméré ou en MDF émet du formaldéhyde et d'autres composés organiques volatils en quantité importante dans les premiers jours suivant sa fabrication et son assemblage. Laisser le meuble dégazer dans un espace ventilé avant de l'installer dans une chambre permet de réduire significativement les concentrations en période d'occupation. La durée recommandée varie de quelques jours pour les petits meubles à deux à trois semaines pour les grandes armoires. Les chambres à coucher, et en particulier les chambres d'enfants, sont les espaces les plus importants à protéger."
        stats={[
          {
            value: "48–72 h",
            label: "durée minimale de dégazage préalable pour un petit meuble (chaise, étagère légère)",
          },
          {
            value: "1 à 3 sem.",
            label: "durée recommandée pour une grande armoire ou une bibliothèque en aggloméré",
          },
          {
            value: "Garage",
            label: "ou balcon couvert : espace idéal pour le dégazage préalable, bien ventilé et hors zone de séjour",
          },
          {
            value: "Chambre d'enfant",
            label: "pièce prioritaire à protéger : les enfants respirent 2 fois plus d'air que les adultes proportionnellement",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Types de meubles et durées" },
          { id: "signes", label: "Reconnaître un dégazage important" },
          { id: "causes", label: "Pourquoi les meubles dégazent" },
          { id: "actions", label: "Le protocole pratique" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Durée de dégazage recommandée selon le type de meuble."
        description="La durée de dégazage préalable dépend principalement de la taille du meuble, de sa composition (proportion de panneaux agglomérés ou MDF) et de la destination de la pièce d'installation. Les pièces de sommeil nécessitent une précaution particulière."
        variants={[
          {
            indicator: "Petits meubles",
            name: "Chaises, tabourets, petites étagères, tables de chevet",
            description:
              "Pour les petits meubles avec peu de surface de panneau aggloméré ou MDF, un dégazage de 48 à 72 heures dans un espace bien ventilé est généralement suffisant pour réduire significativement les émissions initiales. Ouvrez les colis et laissez le meuble assemblé à l'air libre.",
          },
          {
            indicator: "Meubles de taille moyenne",
            name: "Bureaux, commodes, buffets, tables de salon",
            description:
              "Les meubles de taille moyenne, avec une surface de panneau plus importante, bénéficient d'un dégazage de 7 à 14 jours. Ouvrez les tiroirs et portes pendant cette période pour exposer les faces intérieures. Placez le meuble dans un garage ou une pièce très bien ventilée.",
          },
          {
            indicator: "Grands meubles",
            name: "Armoires, bibliothèques, ensembles de cuisine, dressings",
            description:
              "Les grandes armoires et bibliothèques en aggloméré représentent une surface totale de panneau très importante. Un dégazage de 2 à 3 semaines est recommandé avant installation dans une chambre à coucher. Pour une chambre d'enfant, prolongez jusqu'à 3 à 4 semaines si possible.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître qu'un meuble neuf est en phase de dégazage actif important."
        subtitle="Avant et après l'installation, plusieurs signaux indiquent que le dégazage est encore significatif."
        signs={[
          {
            label: "Forte odeur chimique à l'ouverture des cartons",
            description:
              "L'emballage confiné concentre les COV émis pendant le transport et le stockage. Si l'odeur est forte à l'ouverture, le meuble est clairement en phase de dégazage intense. Ce n'est pas une raison de le refuser, mais une raison de ne pas l'installer directement dans une chambre.",
            severity: "critique",
          },
          {
            label: "Odeur persistante dans la pièce 24 heures après installation",
            description:
              "Si la pièce sent encore le 'meuble neuf' le lendemain de l'installation, malgré une fenêtre ouverte pendant la nuit, le dégazage est toujours actif. Aérez en continu et, si possible, replacez le meuble dans un espace plus ventilé pour quelques jours supplémentaires.",
            severity: "modéré",
          },
          {
            label: "Yeux ou gorge irrités dans la pièce après installation",
            description:
              "Des picotements oculaires ou une sensation de gorge sèche qui disparaissent en quittant la pièce signalent des concentrations élevées de COV. C'est particulièrement préoccupant dans une chambre à coucher où vous passez 7 à 8 heures par nuit.",
            severity: "critique",
          },
          {
            label: "Tiroirs et intérieur d'armoire à odeur chimique forte",
            description:
              "L'intérieur des meubles (tiroirs, compartiments fermés) concentre les COV émis par les faces non finies. Ouvrez portes et tiroirs : si l'odeur chimique est nettement plus forte à l'intérieur qu'à l'extérieur, les surfaces intérieures non finies sont de fortes sources d'émission.",
            severity: "modéré",
          },
          {
            label: "Meubles destinés à une chambre d'enfant sans certification E0",
            description:
              "Pour une chambre d'enfant, l'absence de certification E0 ou CARB Phase 2 associée à une forte odeur est un signal d'alerte. Les enfants, notamment les moins de 6 ans, sont particulièrement vulnérables aux COV et au formaldéhyde en raison de leur fréquence respiratoire plus élevée.",
            severity: "modéré",
          },
          {
            label: "Meuble livré en été (chaleur du camion de livraison)",
            description:
              "Un meuble stocké puis transporté dans un camion en été (40°C ou plus) a été soumis à des températures qui accélèrent le dégazage. À l'ouverture, les concentrations accumulées dans l'emballage peuvent être particulièrement élevées. Laissez le meuble dégazer à l'extérieur ou dans un garage avant tout assemblage intérieur.",
            severity: "léger",
          },
        ]}
        footerNote="Ces précautions s'appliquent surtout aux meubles neufs en aggloméré ou MDF. Un meuble en bois massif non verni ou un meuble ancien de plusieurs années ne présente généralement pas ces niveaux d'émission."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi les meubles neufs dégazent-ils ?"
        subtitle="Comprendre les mécanismes chimiques permet de mieux adapter les précautions selon le type de meuble."
        causes={[
          {
            number: "01",
            cause: "Les résines urée-formaldéhyde dans les panneaux agglomérés et MDF",
            explanation:
              "La grande majorité des meubles courants est fabriquée en panneaux de particules (aggloméré) ou en panneaux de fibres de densité moyenne (MDF). Ces panneaux sont liés par des résines à base d'urée et de formaldéhyde. En présence d'humidité ambiante, ces résines libèrent progressivement du formaldéhyde par hydrolyse. Les émissions sont maximales juste après la fabrication et l'assemblage.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les colles d'assemblage et les colles de chant",
            explanation:
              "Les meubles en kit utilisent des colles pour fixer les chants (bandes de mélamine sur les tranches), les fonds de tiroirs et certains assemblages. Ces colles, notamment les colles thermofusibles et les colles à base de solvants, émettent des COV (formaldéhyde, acétaldéhyde, composés aromatiques) pendant les premières semaines suivant l'assemblage.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les surfaces intérieures non finies",
            explanation:
              "Dans les meubles en kit d'entrée de gamme, les dos (panneaux arrières), les fonds de tiroir et parfois les faces intérieures des corps de meuble sont laissés bruts ou avec une finition légère. Ces surfaces non recouvertes de mélamine ou de papier décoratif exposent directement le panneau à l'air et multiplient les surfaces d'émission.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les vernis et laques de finition sur les meubles peints",
            explanation:
              "Les meubles laqués, notamment les cuisines et les meubles blancs à finition brillante, reçoivent des couches de vernis ou de laque qui peuvent elles-mêmes émettre des COV dans les premières semaines. Les finitions UV (durcies sous UV) sont généralement plus stables et moins émissives que les finitions à base de solvants.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "L'accumulation dans les emballages fermés",
            explanation:
              "Un meuble emballé depuis plusieurs semaines ou mois dans un carton ou un film plastique a accumulé les COV émis dans l'espace confiné. À l'ouverture, la concentration de COV dans les emballages peut être très élevée. C'est pourquoi l'odeur à l'ouverture est souvent bien plus forte que ce qui sera observé une fois le meuble installé et la pièce aérée.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Le protocole pratique pour faire dégazer un meuble neuf."
        immediate={[
          {
            label: "Ouvrir les cartons à l'extérieur ou dans un garage",
            description:
              "Dès la livraison, ouvrez les cartons dans un espace non occupé : garage, balcon couvert, cave bien ventilée. Retirez tous les emballages plastiques et laissez le meuble désamballé (non assemblé ou assemblé) dans cet espace. L'air frais chasse rapidement les concentrations accumulées dans l'emballage.",
            effort: "Gratuit, 10 minutes",
          },
          {
            label: "Assembler le meuble dans l'espace de dégazage, portes et tiroirs ouverts",
            description:
              "Si possible, assemblez le meuble dans l'espace de dégazage (garage, pièce bien ventilée) plutôt que directement dans sa pièce finale. Laissez toutes les portes et tous les tiroirs ouverts pendant toute la période de dégazage pour exposer les faces intérieures à l'air.",
            effort: "Gratuit, organisation",
          },
          {
            label: "Respecter la durée minimale selon la taille du meuble",
            description:
              "Petits meubles : 48 à 72 heures minimum. Meubles de taille moyenne (bureau, commode) : 7 à 14 jours. Grandes armoires, dressings : 2 à 3 semaines. Pour une chambre d'enfant ou un lit d'enfant, prolongez d'une semaine supplémentaire et aérez la chambre intensément après installation.",
            effort: "Gratuit, organisation et patience",
          },
          {
            label: "Aérer intensément la chambre les semaines suivant l'installation",
            description:
              "Même après une période de dégazage préalable, aérez la pièce d'installation pendant au moins 4 semaines, 10 à 15 minutes matin et soir minimum. Dans une chambre à coucher, laissez la fenêtre entreouverte la nuit si la sécurité et la météo le permettent.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Peindre les surfaces brutes avant installation si dégazage impossible",
            description:
              "Si vous ne pouvez pas faire dégazer le meuble dans un espace séparé, une alternative partielle consiste à appliquer une peinture A+ ou un vernis A+ sur les faces brutes non finies (dos, intérieur de tiroirs, fonds de corps de meuble). Cela réduit les surfaces d'émission directe mais n'élimine pas complètement le dégazage des panneaux.",
            effort: "Faible coût (peinture A+)",
          },
          {
            label: "Priorité absolue aux pièces de sommeil et aux chambres d'enfants",
            description:
              "Si vous ne pouvez faire dégazer qu'un seul meuble à la fois, commencez par ceux destinés aux chambres. Le temps passé à dormir représente un tiers du temps quotidien, avec des fenêtres souvent fermées. Les enfants de moins de 6 ans sont exposés plus longtemps et plus intensément : leur chambre est la pièce la plus sensible.",
            effort: "Organisation des priorités",
          },
          {
            label: "Utiliser un purificateur d'air HEPA avec filtre charbon actif après installation",
            description:
              "Un purificateur d'air équipé d'un filtre HEPA et d'un filtre charbon actif peut absorber certains COV et formaldéhyde. Ce n'est pas une solution principale (l'aération reste bien plus efficace) mais un complément utile dans une chambre peu ventilée en hiver. Changez les filtres selon les recommandations du fabricant.",
            effort: "100 à 300 € selon le modèle",
          },
          {
            label: "Choisir des meubles en bois massif ou certifiés E0 pour les chambres",
            description:
              "La solution la plus efficace reste d'investir dans des meubles en bois massif (sans aggloméré) ou certifiés E0/CARB Phase 2 pour les chambres à coucher. Ces meubles nécessitent un dégazage beaucoup plus court et ont des émissions résiduelles incomparablement plus basses sur le long terme.",
            effort: "Surcoût de 30 à 100 % selon les pièces",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs courantes lors de l'installation d'un meuble neuf."
        errors={[
          {
            label: "\"Je vais installer le meuble et ouvrir la fenêtre, c'est suffisant\"",
            explanation:
              "Ouvrir la fenêtre après installation réduit les concentrations dans l'air, mais ne diminue pas les émissions du meuble lui-même. Les COV continuent à se libérer de la même façon, ils se concentrent simplement moins dans la pièce. Faire dégazer le meuble avant l'installation dans un espace séparé est bien plus efficace.",
          },
          {
            label: "\"Les meubles classés A+ n'ont pas besoin de dégazer\"",
            explanation:
              "Le classement A+ indique des émissions faibles mesurées en chambre d'essai normalisée, pas des émissions nulles. Un meuble A+ neuf émet encore des COV dans les premières semaines, en quantité certes plus faible qu'un meuble non certifié. Une période de dégazage préalable réduite (48 à 72 heures) reste utile.",
          },
          {
            label: "\"Le lit pour bébé est en bois, donc il n'y a pas de problème\"",
            explanation:
              "De nombreux lits et meubles de chambre pour bébé affichent 'bois' dans leur description commerciale mais sont en réalité fabriqués en MDF ou en aggloméré recouvert de mélamine ou de peinture. Vérifiez la composition réelle dans la fiche technique avant d'acheter, et demandez le classement d'émission explicite.",
          },
          {
            label: "\"Un meuble qui ne sent plus rien est dégazé\"",
            explanation:
              "Le seuil olfactif du formaldéhyde (environ 100 µg/m³) est bien supérieur à la valeur guide de l'ANSES pour l'exposition chronique (10 µg/m³). Un meuble peut ne plus sentir tout en émettant encore du formaldéhyde à des concentrations dix fois supérieures au seuil recommandé. Seule une mesure objective permet de le vérifier.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur le dégazage des meubles neufs"
        items={[
          {
            question: "Où faire dégazer un meuble si je n'ai pas de garage ?",
            answer:
              "Un balcon couvert et bien ventilé est une bonne option par temps sec. À défaut, une pièce peu occupée avec les fenêtres ouvertes en permanence (une chambre d'amis, un couloir avec une fenêtre) peut convenir. L'essentiel est que l'espace soit distinct des pièces de séjour ou de sommeil et bien renouvelé en air. Évitez les caves sans ventilation.",
          },
          {
            question: "Faut-il faire dégazer un meuble de cuisine avant installation ?",
            answer:
              "Oui, si la cuisine est une pièce où vous passez du temps. Les meubles de cuisine en aggloméré représentent souvent une grande surface de panneau et les émissions cumulées peuvent être significatives. Si le remplacement d'une cuisine complète implique une installation rapide, compensez par une aération intensive de la pièce pendant au moins 4 à 6 semaines et évitez de cuisiner avec les portes fermées pendant cette période.",
          },
          {
            question: "Les meubles IKEA nécessitent-ils un dégazage préalable ?",
            answer:
              "Oui, même si IKEA est l'un des fabricants qui publie ses données d'émissions et s'engage à respecter des seuils plus stricts que la norme E1. Les meubles IKEA en aggloméré ou en FIBREBOARD émettent du formaldéhyde dans les premières semaines. La durée recommandée est de 48 heures à 2 semaines selon la taille du meuble et la destination de la pièce (chambre d'enfant : optez pour la durée maximale).",
          },
          {
            question: "Comment accélérer le dégazage d'un meuble déjà installé ?",
            answer:
              "Trois leviers combinés : d'abord, augmentez la température de la pièce à 25-27°C pendant 2 à 3 heures (chauffage d'appoint), puis aérez intensément (courant d'air) pendant 1 heure. Répétez cette séquence plusieurs fois sur quelques jours. Ensuite, laissez la fenêtre entreouverte en permanence le plus longtemps possible. Enfin, peindre les surfaces brutes du meuble avec une peinture A+ réduit les émissions futures.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Meubles et mobilier à faibles émissions",
            description:
              "Avant d'acheter : comprendre les normes E1, E0, CARB et A+ sur les meubles pour faire de meilleurs choix dès l'achat.",
            href: "/materiaux-sains/meubles-faibles-emissions/",
          },
          {
            tag: "Matériaux sains",
            title: "Le dégazage des matériaux : comprendre le phénomène",
            description:
              "Peintures, colles, panneaux : comprendre le mécanisme général du dégazage pour tous les matériaux de construction et décoration.",
            href: "/materiaux-sains/degazage-materiaux/",
          },
          {
            tag: "Air intérieur",
            title: "Améliorer la qualité de l'air de votre logement",
            description:
              "Les meubles s'inscrivent dans un plan d'action global sur la qualité de l'air intérieur. Les priorités et les leviers.",
            href: "/air-interieur/ameliorer-air-maison/",
          },
        ]}
      />
    </>
  );
}

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
  title: "Meubles à faibles émissions : formaldéhyde, MDF et étiquettes",
  description:
    "MDF, aggloméré, bois massif : comment lire les étiquettes des meubles, comprendre les normes E1, E0 et CARB, et choisir un mobilier qui n'altère pas la qualité de l'air.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/materiaux-sains/meubles-faibles-emissions/",
  },
  openGraph: {
    title: "Meubles à faibles émissions : formaldéhyde, MDF et étiquettes",
    description:
      "MDF, aggloméré, bois massif : comment lire les étiquettes des meubles, comprendre les normes E1, E0 et CARB, et choisir un mobilier qui n'altère pas la qualité de l'air.",
    url: "https://www.maisonbionat.fr/materiaux-sains/meubles-faibles-emissions/",
  },
};

export default function MeublesFaiblesEmissionsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Matériaux sains", href: "/materiaux-sains/" },
    { name: "Meubles à faibles émissions : formaldéhyde, MDF et étiquettes", href: "https://www.maisonbionat.fr/materiaux-sains/meubles-faibles-emissions/" },
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
        title="Meubles et mobilier : comprendre les émissions de formaldéhyde et choisir plus sainement"
        quickAnswer="Les meubles sont l'une des principales sources de formaldéhyde dans un logement. La grande majorité du mobilier courant est fabriquée en MDF ou en panneaux de particules agglomérés, liés avec des résines urée-formaldéhyde. Ces panneaux émettent du formaldéhyde pendant des mois, voire des années. Les normes E1, E0 et CARB permettent de comparer les niveaux d'émission. En France, le classement A+ (décret 2011-321) s'applique également aux meubles finis. Priorité : les chambres à coucher et les chambres d'enfants."
        stats={[
          {
            value: "E1",
            label: "seuil européen standard : 0,124 mg/m³ de formaldéhyde (EN 717-1)",
          },
          {
            value: "E0",
            label: "seuil renforcé : 0,05 mg/m³, deux fois moins émissif que E1",
          },
          {
            value: "10 µg/m³",
            label: "valeur guide ANSES pour une exposition chronique au formaldéhyde (longue durée)",
          },
          {
            value: "5 à 7 ans",
            label: "durée d'émission possible d'une armoire en aggloméré selon certaines estimations",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre les normes" },
          { id: "signes", label: "Identifier un meuble émissif" },
          { id: "causes", label: "Matériaux et sources d'émissions" },
          { id: "actions", label: "Choisir et agir" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Les normes d'émission des meubles : E1, E0, CARB et A+."
        description="Plusieurs référentiels coexistent sur les émissions des panneaux de bois et meubles. Comprendre leurs différences permet de faire des choix éclairés au moment de l'achat."
        variants={[
          {
            indicator: "Norme E1 (Europe)",
            name: "Standard de base, encore très répandu",
            description:
              "La norme E1 autorise des émissions de formaldéhyde jusqu'à 0,124 mg/m³ mesurées en chambre d'essai (norme EN 717-1). C'est le seuil légal minimum pour les panneaux de bois en Europe. La grande majorité du mobilier vendu en grande surface respecte le E1, mais pas nécessairement plus.",
          },
          {
            indicator: "Norme E0 et CARB Phase 2",
            name: "Seuils renforcés, à privilégier",
            description:
              "La classe E0 limite les émissions à 0,05 mg/m³, soit moins de la moitié du seuil E1. La certification CARB Phase 2 (California Air Resources Board) impose des seuils similaires ou plus stricts selon le type de panneau. Ces deux certifications sont plus exigeantes et indiquent un mobilier significativement moins émissif.",
          },
          {
            indicator: "Classement A+ (France)",
            name: "Étiquetage obligatoire sur les produits finis",
            description:
              "En France, le décret 2011-321 impose un classement A+ à C sur les produits de construction et de décoration, dont certains meubles. Le A+ indique de très faibles émissions mesurées en conditions standardisées. Ce classement complète les normes sur les panneaux en évaluant le produit final dans son ensemble, y compris les finitions.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Comment identifier un meuble potentiellement émissif."
        subtitle="Plusieurs indices permettent d'évaluer le niveau d'émission d'un meuble avant et après l'achat."
        signs={[
          {
            label: "Forte odeur chimique à l'ouverture des colis ou en magasin",
            description:
              "L'odeur caractéristique de formaldéhyde (légèrement piquante, rappelant le bois pressé chauffé) est souvent perceptible autour des meubles neufs en aggloméré ou en MDF. Si l'odeur est forte dans le rayon ou à l'ouverture de l'emballage, les émissions sont actives.",
            severity: "critique",
          },
          {
            label: "Absence de mention de classe d'émission dans la fiche produit",
            description:
              "Un fabricant sérieux mentionne la classe d'émission (E1, E0, A+, CARB) dans la fiche technique ou sur l'emballage. L'absence de toute mention sur ce sujet ne signifie pas que le produit respecte E1 : cela peut indiquer un produit d'entrée de gamme sans traçabilité formelle.",
            severity: "modéré",
          },
          {
            label: "Dos et dessous non finis (flancs bruts de coupe)",
            description:
              "Les chants et dos non laminés d'un panneau en aggloméré exposent directement le cœur du panneau à l'air ambiant, ce qui multiplie les surfaces d'émission. Un meuble avec de nombreuses zones brutes non recouvertes émet davantage qu'un meuble avec des chants et dos soigneusement finis.",
            severity: "modéré",
          },
          {
            label: "Prix très bas pour un grand volume de mobilier",
            description:
              "Le prix d'un meuble est rarement un indicateur suffisant, mais un grand meuble vendu à un prix très bas implique souvent des économies sur la qualité des panneaux (E1 standard au lieu de E0) et sur la finition des surfaces intérieures.",
            severity: "léger",
          },
          {
            label: "Odeur persistante dans la pièce plusieurs semaines après l'installation",
            description:
              "Si une odeur chimique persiste dans une pièce plus de trois semaines après l'installation d'un meuble, malgré une aération régulière, le meuble est toujours en phase de dégazage actif. C'est particulièrement préoccupant dans une chambre à coucher.",
            severity: "critique",
          },
          {
            label: "Meuble destiné à une chambre d'enfant sans certification renforcée",
            description:
              "Les enfants passent une grande partie de leur temps dans leur chambre, souvent avec les fenêtres fermées la nuit. Pour une chambre d'enfant, l'absence de certification E0 ou CARB Phase 2 sur les meubles principaux (lit, armoire, bureau) mérite attention.",
            severity: "modéré",
          },
        ]}
        footerNote="Un meuble ancien (plus de 5 à 7 ans) a généralement déjà dégazé l'essentiel de ses émissions. La vigilance s'applique surtout aux achats neufs."
      />

      <IssueCauses
        id="causes"
        title="D'où vient le formaldéhyde dans les meubles."
        subtitle="La source principale est dans les panneaux de bois reconstitué, mais les finitions et les colles contribuent également."
        causes={[
          {
            number: "01",
            cause: "Les résines urée-formaldéhyde dans les panneaux agglomérés et MDF",
            explanation:
              "Les panneaux de particules (aggloméré) et de fibres de bois (MDF) sont fabriqués en liant des particules ou des fibres avec une résine à base d'urée et de formaldéhyde. Ces résines confèrent au panneau sa cohésion mais libèrent progressivement du formaldéhyde par hydrolyse, surtout en présence de chaleur et d'humidité. C'est la source principale de formaldéhyde dans un logement.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Les surfaces et chants non finis",
            explanation:
              "Un panneau en aggloméré dont les faces sont recouvertes d'un placage mélaminé émet moins que le même panneau avec des zones brutes. Les dos de meubles, les faces intérieures des tiroirs et les chants non listurés représentent des surfaces d'émission directe. Certains fabricants économisent sur ces finitions intérieures, ce qui augmente les émissions globales du meuble.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les colles d'assemblage",
            explanation:
              "Outre les résines dans les panneaux eux-mêmes, les colles utilisées pour l'assemblage (chants, joints, renforcements) peuvent également contenir du formaldéhyde ou d'autres COV. Les meubles assemblés par collage plutôt que par vis et tenons peuvent avoir des émissions plus élevées à ce titre.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Les vernis et peintures de finition sur les meubles peints",
            explanation:
              "Les meubles peints ou vernis (notamment les meubles laqués blancs courants) reçoivent des finitions qui peuvent elles-mêmes émettre des COV. Un meuble en MDF laqué avec un vernis non étiqueté peut cumuler les émissions du panneau et celles de la finition.",
            frequency: "moins fréquent",
          },
          {
            number: "05",
            cause: "Les mousses de garnissage dans les meubles rembourrés",
            explanation:
              "Les canapés, fauteuils et sommiers contiennent des mousses synthétiques (polyuréthane) qui peuvent émettre des COV (toluène diisocyanate résiduel) et, selon les traitements ignifugeants, des composés organophosphorés. Les mousses certifiées OEKO-TEX ou Greenguard ont des émissions mesurées et contrôlées.",
            frequency: "moins fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Choisir et installer des meubles plus sains."
        immediate={[
          {
            label: "Vérifier la classe d'émission avant l'achat",
            description:
              "Recherchez dans la fiche produit la mention E0, CARB Phase 2 ou A+. En l'absence de toute mention, demandez au vendeur ou consultez le site du fabricant. Pour une chambre à coucher ou une chambre d'enfant, exigez au minimum le E0 ou une certification équivalente.",
            effort: "Gratuit, 5 minutes de vérification",
          },
          {
            label: "Laisser dégazer le meuble dans un espace ventilé avant installation",
            description:
              "Avant d'installer un meuble neuf en aggloméré dans une chambre, laissez-le assemblé dans un garage, un balcon couvert ou une pièce très bien ventilée pendant au moins une à deux semaines. Ouvrez tous les tiroirs et portes. Les émissions sont maximales dans les premiers jours.",
            effort: "Gratuit, organisation",
          },
          {
            label: "Aérer la pièce intensément après l'installation",
            description:
              "Même après une période de dégazage préalable, aérez la pièce d'installation pendant au moins 4 semaines après la mise en place du meuble. Dans une chambre à coucher, ouvrez la fenêtre chaque matin au minimum 10 minutes, idéalement en continu la nuit si la météo le permet.",
            effort: "Gratuit",
          },
          {
            label: "Peindre les surfaces brutes avec une peinture A+",
            description:
              "Les dos de meubles, les faces intérieures non finies et les chants bruts peuvent être recouverts d'une peinture ou d'un vernis A+ pour réduire les surfaces d'émission directe. C'est un geste simple qui réduit sensiblement l'émissivité d'un meuble existant.",
            effort: "Faible coût (peinture A+)",
          },
        ]}
        structural={[
          {
            label: "Privilégier le bois massif pour les pièces de sommeil",
            description:
              "Un meuble en bois massif (chêne, hêtre, pin, bouleau) sans panneaux agglomérés n'émet pas de formaldéhyde par définition. Les meubles en bois massif sont plus chers et plus lourds, mais leur longévité et leur impact sur la qualité de l'air les rendent particulièrement adaptés aux chambres à coucher.",
            effort: "Surcoût de 30 à 100 % selon les pièces",
          },
          {
            label: "Considérer le mobilier d'occasion pour les grandes pièces",
            description:
              "Un meuble de seconde main de plus de 5 à 7 ans a déjà dégazé l'essentiel de son formaldéhyde. L'achat de mobilier d'occasion est non seulement moins coûteux mais aussi souvent plus sain qu'un meuble neuf en aggloméré, surtout pour les grandes armoires et bibliothèques.",
            effort: "Économie potentielle",
          },
          {
            label: "Choisir des certifications indépendantes pour les meubles rembourrés",
            description:
              "Pour les canapés et fauteuils, recherchez les certifications OEKO-TEX Standard 100 (sur les tissus et mousses) ou Greenguard Gold (émissions intérieures globales). Ces certifications garantissent que les émissions du produit ont été mesurées et respectent des seuils stricts.",
            effort: "Vérification à l'achat",
          },
          {
            label: "Éviter les grandes surfaces de MDF dans les espaces peu ventilés",
            description:
              "Dans un dressing sans fenêtre, un couloir ou une pièce sans VMC, la concentration de formaldéhyde peut monter rapidement si de nombreux meubles en MDF y sont installés. Limitez la surface totale de panneaux agglomérés dans ces espaces, ou choisissez du E0.",
            effort: "Planification lors de l'aménagement",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les idées reçues sur les meubles et le formaldéhyde."
        errors={[
          {
            label: "\"Les meubles anciens sont forcément moins bons\"",
            explanation:
              "C'est souvent l'inverse. Un meuble ancien en bois massif ou en aggloméré fabriqué depuis plus de 7 à 10 ans a déjà largement dégazé. C'est le mobilier neuf en aggloméré qui présente les émissions les plus élevées, concentrées dans les premiers mois.",
          },
          {
            label: "\"E1, c'est déjà très bien\"",
            explanation:
              "La norme E1 est le minimum légal en Europe, pas un gage de qualité sanitaire supérieure. Dans un logement peu ventilé avec plusieurs meubles E1, les concentrations cumulées de formaldéhyde peuvent dépasser la valeur guide de l'ANSES (10 µg/m³). Le E0 ou le CARB Phase 2 offrent une marge de sécurité bien supérieure.",
          },
          {
            label: "\"Le bois 'naturel' affiché sur l'emballage garantit un meuble sain\"",
            explanation:
              "Les mentions marketing comme 'finitions bois', 'aspect bois naturel' ou 'décor bois' ne préjugent pas de la composition du panneau. Un meuble affiché comme 'bois' peut être entièrement en MDF recouvert d'un film imprimé. Seule la fiche technique indique la composition réelle.",
          },
          {
            label: "\"Il suffit d'aérer après livraison pour régler le problème\"",
            explanation:
              "Aérer après installation réduit la concentration de formaldéhyde dans l'air ambiant, mais ne supprime pas les émissions du meuble. Un meuble en aggloméré E1 continue d'émettre pendant des mois, même bien ventilé. L'aération est nécessaire mais ne compense pas un mauvais choix de matériau dans une chambre peu ventilée.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les meubles et les émissions de formaldéhyde"
        items={[
          {
            question: "Comment savoir si un meuble IKEA est sain du point de vue des émissions ?",
            answer:
              "IKEA publie les données d'émission de formaldéhyde de ses produits dans ses fiches techniques. La marque s'est engagée à respecter des seuils plus stricts que la norme E1 et une partie de ses produits est certifiée CARB Phase 2. Consultez la fiche produit en ligne ou en magasin et cherchez la mention 'émissions de formaldéhyde' pour connaître le niveau exact.",
          },
          {
            question: "Combien de temps un meuble en aggloméré émet-il du formaldéhyde ?",
            answer:
              "Les émissions sont maximales dans les premières semaines suivant la fabrication et l'installation. Elles décroissent ensuite selon une courbe exponentielle. Pour un meuble E1, les émissions peuvent rester mesurables pendant plusieurs années, avec des niveaux progressivement plus faibles. Un meuble E0 ou CARB Phase 2 atteint des niveaux très bas bien plus rapidement.",
          },
          {
            question: "Vaut-il mieux acheter un meuble neuf A+ ou un meuble d'occasion ?",
            answer:
              "Un meuble d'occasion de plus de 5 à 7 ans a déjà dégazé l'essentiel de son formaldéhyde, même s'il n'est pas certifié A+. Du point de vue des émissions intérieures, un meuble ancien de bonne qualité est souvent préférable à un meuble neuf en aggloméré standard, même classé A+. A+ ne signifie pas zéro émission : cela indique que les émissions sont en dessous de seuils réglementaires.",
          },
          {
            question: "Comment réduire les émissions d'un meuble neuf déjà installé ?",
            answer:
              "Trois leviers complémentaires : d'abord, aérer la pièce au minimum 10 à 15 minutes matin et soir, en créant un courant d'air si possible. Ensuite, peindre ou vernir les surfaces brutes (dos, intérieur de tiroirs) avec un produit A+ pour réduire les surfaces d'émission directe. Enfin, chauffer la pièce quelques heures puis aérer intensément : la chaleur accélère le dégazage et permet d'évacuer les polluants plus rapidement.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Le dégazage des meubles neufs : protocole pratique",
            description:
              "Avant d'installer un meuble neuf dans une chambre : comment organiser la période de dégazage, combien de temps, et quelles précautions prendre.",
            href: "/materiaux-sains/degazage-meubles-neufs/",
          },
          {
            tag: "Matériaux sains",
            title: "Panneaux bois agglomérés, MDF et OSB : émissions et choix",
            description:
              "À la source du formaldéhyde des meubles : classes E1, E0, ENF et CARB Phase 2 pour choisir un panneau moins émissif.",
            href: "/materiaux-sains/panneaux-bois-formaldehyde/",
          },
          {
            tag: "Air intérieur",
            title: "Le formaldéhyde dans la maison",
            description:
              "Vue d'ensemble du formaldéhyde émis par les meubles, peintures et matériaux : valeurs guides ANSES et leviers de réduction.",
            href: "/air-interieur/formaldehyde-maison/",
          },
        ]}
      />
    </>
  );
}

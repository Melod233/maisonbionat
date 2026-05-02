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
  title: "Remontées capillaires : reconnaître et traiter durablement",
  description:
    "Humidité ascensionnelle dans les murs : signes, causes, solutions efficaces (injection résine, drainage, électro-osmose). Comprendre les coûts et choisir la bonne réponse.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/humidite-maison/remontees-capillaires/",
  },
  openGraph: {
    title: "Remontées capillaires : reconnaître et traiter durablement",
    description:
      "Humidité ascensionnelle dans les murs : signes, causes, solutions efficaces (injection résine, drainage, électro-osmose). Comprendre les coûts et choisir la bonne réponse.",
    url: "https://www.maisonbionat.fr/humidite-maison/remontees-capillaires/",
  },
};

const faqItems = [
  {
    question: "Comment distinguer remontées capillaires et infiltrations ?",
    answer:
      "Les remontées capillaires partent du sol et progressent verticalement dans le mur, généralement sur 0,80 à 1,50 m de hauteur, avec une auréole assez régulière et horizontale. Les infiltrations latérales, elles, dessinent des taches plus localisées, souvent autour d'une fenêtre, d'un raccord de toiture ou d'un mur enterré, et ne suivent pas une ligne horizontale propre. Une condensation, à l'inverse, apparaît plutôt en partie haute des murs froids ou autour des ponts thermiques. Le diagnostic se confirme avec un humidimètre (taux d'humidité dans le mur) et parfois une analyse des sels (présence de salpêtre).",
  },
  {
    question: "L'injection de résine fonctionne-t-elle vraiment ?",
    answer:
      "Oui, à condition que le diagnostic soit correct et que l'exécution soit soignée. La résine hydrophobe est injectée à la base du mur tous les 10 à 15 cm, polymérise dans la maçonnerie et crée une barrière étanche horizontale. Le mur au-dessus de la barrière met ensuite plusieurs mois (6 à 24 selon l'épaisseur et le type de matériau) à sécher complètement. Les enduits dégradés et chargés en sels doivent être piqués puis remplacés par un enduit assainissant après séchage. Compter 150 à 300 € par mètre linéaire selon l'épaisseur du mur.",
  },
  {
    question: "L'électro-osmose, c'est sérieux ?",
    answer:
      "L'électro-osmose passive (boîtier qui inverse le sens de migration de l'eau dans le mur par un champ électrique faible) reste très débattue. Plusieurs études techniques, notamment du CSTB et de retours d'expérience d'organismes britanniques, ont conclu à une efficacité non démontrée dans des conditions de chantier reproductibles. L'électro-osmose active (avec électrodes implantées et alimentation continue) donne de meilleurs résultats mais reste plus coûteuse et moins documentée que l'injection. En 2026, l'injection de résine reste la solution de référence en cas de remontée capillaire confirmée.",
  },
  {
    question: "Peut-on traiter soi-même des remontées capillaires ?",
    answer:
      "Pour des remontées limitées sur un mur intérieur peu épais (cloison de séparation, mur de doublage), il existe des kits d'injection grand public à partir de 150 € le kit. Le résultat dépend beaucoup de la régularité du forage, de la pression d'injection et du dosage. Pour un mur extérieur porteur, un mur en pierre épaisse, un mur de soubassement ou tout cas où l'humidité a déjà dégradé enduits et plinthes, l'intervention d'un professionnel certifié (CTB-A+, garantie décennale) est très fortement conseillée : la réussite repose sur un diagnostic précis et sur l'application post-traitement (piquage, enduit assainissant, ventilation).",
  },
];

export default function RemonteesCapillairesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Humidité maison", href: "/humidite-maison/" },
    {
      name: "Remontées capillaires",
      href: "https://www.maisonbionat.fr/humidite-maison/remontees-capillaires/",
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Humidité maison"
        parentHref="/humidite-maison/"
        tag="Humidité structurelle"
        title="Remontées capillaires : reconnaître l'humidité ascensionnelle et la traiter durablement"
        quickAnswer="Les remontées capillaires sont une humidité ascensionnelle qui pénètre dans les murs depuis le sol par capillarité, c'est-à-dire par les pores de la maçonnerie. L'eau présente dans le terrain remonte dans les briques, pierres ou bétons jusqu'à une hauteur d'équilibre comprise généralement entre 0,80 m et 1,50 m. Elle laisse derrière elle des sels minéraux (salpêtre, nitrates), dégrade enduits et peintures, fait gonfler le bois et favorise les moisissures. Le phénomène concerne surtout les bâtiments anciens construits sans rupture de capillarité au pied des murs (avant les années 1970 en règle générale). Le traitement de référence aujourd'hui est l'injection de résine hydrophobe à la base des murs, complétée par un enduit assainissant après séchage. D'autres solutions existent (drainage périphérique, saignée, électro-osmose), avec des indications et des limites différentes."
        stats={[
          {
            value: "0,80 à 1,50 m",
            label: "hauteur typique d'une remontée capillaire en mur ancien",
          },
          {
            value: "150-300 €/ml",
            label: "fourchette tarifaire de l'injection de résine hydrophobe par un professionnel",
          },
          {
            value: "6 à 24 mois",
            label: "temps de séchage d'un mur après pose de la barrière étanche",
          },
          {
            value: "Pré-1970",
            label: "période où la majorité des bâtiments ont été construits sans rupture de capillarité",
          },
        ]}
        anchors={[
          { id: "diagnostic", label: "Comprendre le phénomène" },
          { id: "signes", label: "Reconnaître les signes" },
          { id: "causes", label: "Causes et facteurs aggravants" },
          { id: "actions", label: "Solutions et traitements" },
          { id: "eviter", label: "Idées reçues" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        title="Ce qu'est une remontée capillaire et comment la confirmer."
        description="Le phénomène repose sur la capillarité : dans un matériau poreux, l'eau monte spontanément contre la gravité tant que les forces capillaires l'emportent sur le poids de la colonne d'eau. Plus les pores sont fins, plus la hauteur atteinte est grande. Quand un mur ancien repose directement sur le sol sans barrière étanche, l'eau présente dans le terrain remonte par les fondations, traverse la maçonnerie et s'évapore en partie haute. Mais elle laisse derrière elle des sels dissous qui cristallisent en surface (efflorescences blanches, salpêtre) et qui sont eux-mêmes hygroscopiques : ils captent l'humidité de l'air et entretiennent le problème, même après assèchement de la source."
        variants={[
          {
            indicator: "Capillarité pure",
            name: "Remontée par capillarité simple",
            description:
              "Cas le plus fréquent. Le mur poreux pompe l'eau du sol selon les lois physiques classiques de la capillarité. La hauteur d'équilibre dépend du type de matériau, de l'épaisseur du mur et du taux d'évaporation en surface. Solution : créer une barrière étanche horizontale en pied de mur (injection de résine ou saignée).",
          },
          {
            indicator: "Sels hygroscopiques",
            name: "Humidité entretenue par les sels",
            description:
              "Les sels (chlorures, sulfates, nitrates) accumulés dans le mur sur des décennies captent l'humidité de l'air ambiant et la maintiennent dans la maçonnerie même après élimination de la source. Cause fréquente d'échec d'un traitement sans piquage et remplacement de l'enduit. La règle : après injection, piquer les enduits jusqu'à 50 cm au-dessus de la zone humide et appliquer un enduit assainissant.",
          },
          {
            indicator: "Pression hydrostatique",
            name: "Mur enterré sous pression d'eau",
            description:
              "Cas particulier d'un mur de soubassement ou de cave en contact avec une nappe ou un terrain saturé. Le moteur n'est pas seulement la capillarité mais aussi la pression hydrostatique. L'injection ne suffit pas : il faut traiter la cause (drainage périphérique, cuvelage intérieur ou extérieur, étanchéité externe) avant ou en plus de la barrière étanche.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        title="Reconnaître une remontée capillaire avant de la confondre avec autre chose."
        subtitle="L'humidité ascensionnelle a des signes assez caractéristiques. Bien identifiés, ils permettent de la distinguer rapidement d'une infiltration latérale, d'une condensation ou d'une fuite ponctuelle."
        signs={[
          {
            label: "Auréole horizontale en pied de mur, hauteur 0,80 à 1,50 m",
            description:
              "Trace d'humidité qui remonte du sol et s'arrête à une hauteur assez régulière sur tout le linéaire d'un mur. La ligne de séparation entre la zone humide et la zone sèche est généralement nette, parfois ondulée. C'est le signe le plus discriminant.",
            severity: "critique",
          },
          {
            label: "Salpêtre, efflorescences blanches ou cristaux",
            description:
              "Dépôts blanchâtres, parfois jaunes ou bruns, qui apparaissent sur l'enduit, les briques ou les joints, en particulier en pied de mur. Ces sels minéraux sont laissés par l'eau qui s'évapore. Leur présence signe une humidité chronique du mur, et leur caractère hygroscopique entretient le problème.",
            severity: "critique",
          },
          {
            label: "Enduits qui cloquent, peintures qui se décollent",
            description:
              "L'enduit ou la peinture se boursoufle, se fissure, tombe par plaques. Le bois des plinthes gonfle. Le papier peint se détache du mur. Ces dégradations apparaissent presque toujours en partie basse, en cohérence avec la hauteur de la remontée.",
            severity: "modéré",
          },
          {
            label: "Mur froid au toucher en pied, odeur de cave persistante",
            description:
              "Sensation de froid humide en posant la main en bas du mur, odeur caractéristique de moisi ou de cave, particulièrement marquée en hiver quand le chauffage met en évidence le différentiel d'évaporation. Ces signes accompagnent généralement les auréoles visibles.",
            severity: "modéré",
          },
          {
            label: "Moisissures noires en pied de mur ou sous les meubles",
            description:
              "Apparition de taches noires ou vertes derrière les meubles posés contre un mur extérieur, sur les plinthes, dans les angles bas. La moisissure prolifère quand l'humidité du support reste élevée et que la ventilation est insuffisante.",
            severity: "modéré",
          },
          {
            label: "Bâtiment ancien sans rupture de capillarité visible",
            description:
              "Maison construite avant 1970, en pierre, en brique ancienne, en pisé ou en moellons, dont les fondations reposent directement sur le sol sans arase étanche (feutre bitumineux ou bande PVC). Cette typologie représente la majorité des cas de remontées capillaires constatés en France.",
            severity: "léger",
          },
        ]}
        footerNote="Confirmer le diagnostic avec un humidimètre (taux d'humidité du mur > 5 % en masse) et idéalement une analyse des sels avant tout devis. Une simple inspection visuelle peut confondre une infiltration latérale avec une remontée capillaire."
      />

      <IssueCauses
        id="causes"
        title="Pourquoi un mur prend l'humidité par le sol."
        subtitle="Une remontée capillaire combine presque toujours une cause structurelle (pas de barrière étanche) et un ou plusieurs facteurs aggravants liés au terrain ou à l'aménagement."
        causes={[
          {
            number: "01",
            cause: "Absence de rupture de capillarité en pied de mur",
            explanation:
              "Cause de fond. Les bâtiments anciens étaient construits sans interposer entre le sol et le mur une couche étanche horizontale (feutre bitumineux, bande PVC, ardoise). L'eau du terrain a donc une voie d'accès directe à la maçonnerie. Sans cette barrière, la capillarité fait son travail.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Sol saturé ou nappe phréatique haute",
            explanation:
              "Plus le terrain est humide en permanence (sol argileux, terrain en pied de pente, nappe à faible profondeur), plus la quantité d'eau disponible pour remonter est importante. Les zones de fond de vallée ou de plaine alluviale concentrent les cas, et les hivers très pluvieux aggravent les remontées dans toute la France.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Évacuation des eaux pluviales défaillante autour de la maison",
            explanation:
              "Gouttières percées, descentes d'eau qui rejettent au pied du mur, drain enterré bouché, regard de visite plein, terrasse en pente vers la maison : tout ce qui maintient le sol périphérique saturé en eau alimente directement les remontées. Première vérification à faire avant d'envisager des travaux lourds.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Terre adossée au mur ou enduit étanche au sol",
            explanation:
              "Un massif de terre, une haie en pied de façade, un enrobé étanche posé contre le mur empêchent l'évaporation latérale et concentrent l'humidité dans le mur. Même phénomène avec un enduit ciment intérieur, qui bloque l'évaporation par l'intérieur et fait remonter l'eau plus haut.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "Sels hygroscopiques accumulés sur des décennies",
            explanation:
              "Quand le problème dure depuis longtemps, le mur est saturé de sels (nitrates issus des fientes animales en zone agricole, chlorures de routes salées, sulfates des plâtres anciens). Ces sels captent l'humidité de l'air et maintiennent le mur humide même après pose d'une barrière étanche. C'est pourquoi le piquage et l'enduit assainissant sont indispensables après injection.",
            frequency: "très fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Diagnostic, choix de la solution et exécution."
        immediate={[
          {
            label: "Vérifier l'évacuation des eaux pluviales et le drainage périphérique",
            description:
              "Avant tout devis lourd : contrôler gouttières, descentes, regards, drain. Éloigner les rejets d'eau du pied de mur (1 m minimum). Refaire un trottoir périphérique en pente vers l'extérieur sur 1 m de large. Cette étape règle parfois à elle seule des remontées limitées et conditionne la durabilité de tout traitement ultérieur.",
            effort: "Quelques heures à 1 journée selon le linéaire",
          },
          {
            label: "Faire un diagnostic professionnel avec humidimètre",
            description:
              "Un diagnostic sérieux mesure le taux d'humidité dans le mur à plusieurs hauteurs et points, idéalement avec un humidimètre à pointes ou par carottage et pesée. Il analyse la nature des sels et conclut sur l'origine (capillarité vs infiltration vs condensation). Coût 200 à 500 € en général. À demander avant tout devis de travaux pour éviter les solutions inadaptées.",
            effort: "Coût ponctuel modéré",
          },
          {
            label: "Dégager les meubles et améliorer la ventilation",
            description:
              "Reculer les meubles de 5 à 10 cm des murs concernés pour laisser circuler l'air. Aérer largement deux fois par jour. Ne rien recouvrir d'un revêtement étanche en attendant les travaux : peinture vinyle, papier peint vinyle, doublage placo collé enferment l'humidité et aggravent les dégâts.",
            effort: "Gratuit, immédiat",
          },
          {
            label: "Demander deux à trois devis détaillés à des entreprises certifiées",
            description:
              "Privilégier les entreprises titulaires de la certification CTB-A+ (humidité) ou Qualibat 6224, avec garantie décennale et assurance responsabilité civile professionnelle. Le devis doit préciser le diagnostic, la méthode (résine, drainage, électro-osmose), les produits utilisés (fiches techniques), le linéaire, le piquage des enduits, l'enduit assainissant et la garantie de résultat.",
            effort: "1 à 2 semaines",
          },
        ]}
        structural={[
          {
            label: "Injection de résine hydrophobe (solution de référence)",
            description:
              "Forage tous les 10 à 15 cm à la base du mur, injection sous pression d'une résine ou crème hydrophobe (silane, siloxane) qui polymérise et crée une barrière étanche horizontale. Compter 150 à 300 € par mètre linéaire selon épaisseur. Le mur sèche en 6 à 24 mois. À combiner avec piquage des enduits dégradés et enduit assainissant. Solution la plus documentée et la plus fiable en 2026.",
            effort: "1 à 3 jours selon le linéaire",
          },
          {
            label: "Drainage périphérique et étanchéité extérieure",
            description:
              "Si le mur est partiellement enterré ou si le terrain reste saturé en permanence, creuser une tranchée drainante autour de la maison, poser un drain agricole sur lit de gravier, appliquer un enduit ou une membrane étanche en sous-face, remblayer. Solution lourde (2 000 à 6 000 € selon linéaire) mais traitement de la cause plutôt que du symptôme. Souvent nécessaire en complément d'une injection.",
            effort: "1 à 2 semaines de chantier",
          },
          {
            label: "Saignée et arase étanche (chantier lourd)",
            description:
              "Découpe horizontale du mur sur quelques rangs de matériau, insertion d'une membrane étanche (PVC, plomb, feutre bitumineux), reconstitution du mur. Solution la plus définitive techniquement mais la plus invasive et la plus coûteuse (300 à 600 € le mètre linéaire). Réservée aux cas où l'injection ne donne pas de résultat ou pour les murs très épais en pierre.",
            effort: "Chantier spécialisé, plusieurs jours",
          },
          {
            label: "Mesurer à nouveau 12 à 24 mois après les travaux",
            description:
              "Aucun traitement ne s'évalue à court terme. Le séchage met du temps et certains symptômes (auréoles fantômes, légères efflorescences) peuvent persister sans signifier d'échec. Reprendre la mesure d'humidité du mur à 12 mois puis à 24 mois pour valider l'efficacité. Conserver le rapport initial, les fiches techniques et la facture pour activer la garantie décennale en cas de besoin.",
            effort: "Suivi sur 2 ans",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Ce qu'il ne faut surtout pas faire face à une remontée capillaire."
        errors={[
          {
            label: "\"Je vais peindre par-dessus pour masquer\"",
            explanation:
              "Erreur classique qui aggrave fortement la situation. Une peinture étanche, un papier peint vinyle ou un doublage placo collé empêchent l'évaporation de l'eau du mur. L'humidité monte alors plus haut et migre dans les pièces adjacentes. Toujours laisser le mur respirer en attendant les travaux et utiliser ensuite un enduit assainissant à base de chaux, ouvert à la vapeur d'eau.",
          },
          {
            label: "\"Un déshumidificateur va régler le problème\"",
            explanation:
              "Le déshumidificateur traite l'air, pas le mur. Il peut soulager une pièce humide et limiter les moisissures de surface, mais il ne réduit pas la quantité d'eau qui remonte du sol. Sans traitement de la cause, la consommation devient permanente et coûteuse. Un déshumidificateur ne se justifie qu'en complément, pendant la phase de séchage post-injection.",
          },
          {
            label: "\"Mettre du sel sur les efflorescences les fait disparaître\"",
            explanation:
              "Confusion fréquente. Les efflorescences blanches sont déjà des sels. Aucun produit ménager ne les neutralise durablement : tant que le mur reste humide, elles reviennent. Brosser à sec puis traiter la cause d'humidité. Si on tient absolument à nettoyer, utiliser une brosse douce et de l'eau claire, jamais de javel (qui cristallise et ajoute des chlorures).",
          },
          {
            label: "\"L'électro-osmose passive en boîtier branché va sécher mes murs\"",
            explanation:
              "Plusieurs études techniques (CSTB, retours d'expérience BRE britannique) ont conclu à une efficacité non démontrée des dispositifs d'électro-osmose passive grand public. Le marché reste très polarisé entre vendeurs convaincus et organismes techniques sceptiques. En 2026, l'injection de résine reste la solution de référence pour une remontée capillaire confirmée. Si on tente l'électro-osmose, exiger une garantie de résultat écrite avec mesure avant/après et délai de remboursement.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les remontées capillaires"
        items={faqItems}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Humidité maison",
            title: "Salpêtre sur les murs",
            description:
              "Comprendre les sels minéraux laissés par l'humidité ascensionnelle, leur traitement et le lien avec les remontées capillaires.",
            href: "/humidite-maison/salpetre-murs/",
          },
          {
            tag: "Humidité maison",
            title: "Diagnostic humidité",
            description:
              "Méthode pour identifier l'origine d'une humidité dans le logement avant d'engager des travaux.",
            href: "/humidite-maison/diagnostic-humidite/",
          },
          {
            tag: "Humidité maison",
            title: "Moisissures dans la maison",
            description:
              "Les remontées capillaires sont l'une des causes principales des moisissures en pied de mur.",
            href: "/humidite-maison/moisissures-maison/",
          },
        ]}
      />
    </>
  );
}

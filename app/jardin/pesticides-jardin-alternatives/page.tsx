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
  title: "Pesticides au jardin : alternatives concrètes depuis la loi Labbé",
  description:
    "Loi Labbé 2022, proposition d'extension 2026, ce qui reste autorisé : désherbage manuel, désherbeur thermique, paillage, plantes couvrantes. Les alternatives qui marchent vraiment, sans nostalgie des pesticides chimiques.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/jardin/pesticides-jardin-alternatives/",
  },
  openGraph: {
    title: "Pesticides au jardin : alternatives concrètes depuis la loi Labbé",
    description:
      "Loi Labbé 2022, ce qui reste autorisé, alternatives qui marchent : désherbage manuel, thermique, paillage, plantes couvrantes.",
    url: "https://www.maisonbionat.fr/jardin/pesticides-jardin-alternatives/",
  },
};

export default function PesticidesJardinAlternativesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Jardin", href: "/jardin/" },
    {
      name: "Pesticides au jardin : alternatives concrètes depuis la loi Labbé",
      href: "https://www.maisonbionat.fr/jardin/pesticides-jardin-alternatives/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Jardin"
        parentHref="/jardin/"
        tag="Cadre légal et alternatives"
        title="Pesticides au jardin : ce qui est interdit, ce qui reste autorisé, ce qui marche vraiment."
        quickAnswer="Depuis le 1er juillet 2022, la loi Labbé interdit aux particuliers la détention et l'usage des produits phytopharmaceutiques chimiques de synthèse pour l'entretien des jardins, espaces de loisirs, terrasses et terrains de sport. Restent autorisés : produits de biocontrôle, substances de base (vinaigre, savon noir, bicarbonate), produits à faibles risques et produits utilisables en agriculture biologique. Une proposition de loi en discussion en 2026 envisage d'étendre l'interdiction aux pesticides bio. Côté alternatives concrètes : paillage généreux, désherbage manuel ou thermique, plantes couvrantes et acceptation d'une certaine spontanéité végétale règlent la majorité des cas. La gestion devient préventive plutôt que curative."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "2022", label: "interdiction des pesticides chimiques aux particuliers (loi Labbé)" },
          { value: "5 cas", label: "produits qui restent autorisés (biocontrôle, substances de base, faibles risques, bio, EAJ)" },
          { value: "5–10 cm", label: "épaisseur de paillage pour empêcher la levée des adventices (ADEME)" },
          { value: "0", label: "démarche pour utiliser un désherbeur thermique" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Le cadre légal en clair" },
          { id: "signes", label: "Quand intervenir vraiment" },
          { id: "causes", label: "Pourquoi les alternatives marchent" },
          { id: "actions", label: "Ce qui remplace concrètement" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Le cadre légal"
        title="Loi Labbé : ce qui est interdit, ce qui reste autorisé"
        description="La confusion est fréquente : « pesticides interdits » ne signifie pas « tout produit interdit ». Le législateur a délimité ce qui reste accessible aux particuliers, autour de produits jugés à faible impact ou utilisables en agriculture biologique."
        variants={[
          {
            indicator: "Interdit",
            name: "Produits phytopharmaceutiques chimiques de synthèse",
            description:
              "Tous les herbicides, fongicides et insecticides chimiques destinés à un usage non professionnel sont interdits à la détention et à l'usage depuis le 1er juillet 2022. Les stocks détenus par les particuliers ont dû être rapportés en déchèterie. La distribution en jardineries grand public a cessé.",
          },
          {
            indicator: "Autorisé",
            name: "Biocontrôle, substances de base, faibles risques, EAJ, bio",
            description:
              "Cinq catégories restent autorisées : produits de biocontrôle (auxiliaires biologiques, phéromones), substances de base à usage phytosanitaire (vinaigre, savon noir, bicarbonate, certaines décoctions), produits à faibles risques inscrits au registre européen, produits utilisables en agriculture biologique (UAB) et produits autorisés EAJ (emploi autorisé dans les jardins). La liste est consultable sur le site du ministère de l'Agriculture.",
          },
          {
            indicator: "Évolution annoncée",
            name: "Proposition d'extension en 2026",
            description:
              "Une proposition de loi en discussion en 2026 envisage d'étendre l'interdiction à l'ensemble des pesticides utilisables par les particuliers, y compris ceux actuellement autorisés en agriculture biologique. Si elle est adoptée, le sulfate de cuivre (bouillie bordelaise), le pyrèthre naturel et d'autres substances bio seraient également retirés du marché grand public. À surveiller pour les décisions d'achat de matériel et de stocks.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Quand agir"
        title="Quand un désherbage ou un traitement est-il vraiment nécessaire."
        subtitle="La logique du jardin sain est préventive : agir avant que le problème s'installe, accepter une certaine spontanéité végétale, intervenir ciblé seulement si nécessaire."
        signs={[
          {
            label: "Adventices envahissantes dans un potager en cours de culture",
            description:
              "La concurrence pour l'eau, la lumière et les nutriments est réelle pour les jeunes plants de potager. Désherbage manuel ou binage léger ciblé sur les rangs cultivés, pas sur l'ensemble du jardin.",
            severity: "modéré",
          },
          {
            label: "Plante envahissante (renouée, ailante) qui menace l'écosystème",
            description:
              "Certaines espèces classées invasives en France métropolitaine doivent être contenues. Arrachage manuel répété au bon moment du cycle. Aucun pesticide n'est efficace en autonomie sur ces espèces.",
            severity: "critique",
          },
          {
            label: "Maladie cryptogamique sur un arbre fruitier productif",
            description:
              "Mildiou de la vigne, tavelure du pommier, monilia du cerisier : interventions ciblées avec produits autorisés (bouillie bordelaise dans des doses limitées, soufre, décoctions de prêle ou de consoude). À utiliser comme dernier recours, pas en préventif systématique.",
            severity: "modéré",
          },
          {
            label: "Mousses étendues sur une terrasse glissante",
            description:
              "Brossage mécanique avec un balai-brosse ou nettoyage haute pression. Les conditions favorables aux mousses (ombre, humidité) sont structurelles : si le problème revient chaque année, traiter la cause (élagage, drainage) plutôt que la mousse.",
            severity: "léger",
          },
          {
            label: "Pelouse couverte de plantes spontanées",
            description:
              "Pissenlits, plantains, trèfles, pâquerettes : ce sont des indicateurs d'un sol vivant, pas un problème. Une « pelouse fleurie » est plus saine pour la biodiversité qu'un gazon monospécifique. Ne pas traiter par défaut.",
            severity: "léger",
          },
          {
            label: "Pucerons sur un rosier ou des légumes",
            description:
              "Jet d'eau au tuyau d'arrosage suffit pour les colonies modérées. Décoction de savon noir (1 cuillère à soupe par litre d'eau) en pulvérisation pour les colonies installées. Coccinelles et larves de syrphes (auxiliaires) régulent naturellement si la diversité du jardin le permet.",
            severity: "léger",
          },
        ]}
        footerNote="Le réflexe « pesticide » remplaçait souvent une observation patiente. La question utile est : ce que je vois, est-ce vraiment un problème pour le jardin et pour moi, ou un problème pour mon idée du jardin ?"
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi ça marche"
        title="Pourquoi les alternatives sont efficaces, à condition de les appliquer au bon moment."
        subtitle="Les pesticides chimiques étaient un outil curatif rapide et large. Les alternatives demandent plus d'anticipation, mais traitent souvent la cause plutôt que le symptôme."
        causes={[
          {
            number: "01",
            cause: "Le paillage prive les adventices de lumière",
            explanation:
              "Sans lumière, les graines d'adventices ne germent pas ou meurent à la levée. Un paillage organique de 5 à 10 cm (BRF, paille, feuilles mortes, tontes séchées) appliqué au printemps réduit drastiquement le désherbage estival. Effet bonus : conservation de l'humidité du sol et apport de matière organique en se décomposant.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "Le désherbage thermique détruit les cellules sans intrant chimique",
            explanation:
              "Un désherbeur thermique (gaz ou électrique) chauffe brièvement la plante. Les cellules éclatent par choc thermique : la plante meurt en quelques heures. Aucun produit ne reste dans le sol. Efficace sur les jeunes adventices (1 à 3 feuilles), moins sur les plantes installées dont les racines repoussent.",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les plantes couvrantes occupent le terrain disponible",
            explanation:
              "Lierre rampant, pervenche, géranium vivace, fragaria : ces plantes basses et denses couvrent le sol et empêchent l'installation des adventices. Idéal pour les zones difficiles d'accès (bords de massif, pieds d'arbres, talus). Mise en place lente (1 à 2 saisons), entretien quasi nul ensuite.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "L'observation et le bon timing remplacent la réaction",
            explanation:
              "Désherber 5 minutes par jour pendant la saison de croissance évite les heures de désherbage massif après laisser-faire. Repérer les premiers pucerons avant l'invasion permet une intervention au jet d'eau avant d'avoir besoin de produit. Le jardin sain est avant tout un jardin observé régulièrement.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "La diversité des plantes attire les auxiliaires",
            explanation:
              "Coccinelles, syrphes, chrysopes, hérissons, oiseaux insectivores régulent naturellement les populations de ravageurs. Pour les attirer, planter des espèces mellifères, conserver des zones non tondues, installer des hôtels à insectes. Effet visible en 2 à 3 ans dans un jardin où l'on cesse les traitements.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Les alternatives concrètes, par usage."
        immediateLabel="Désherbage et entretien"
        structuralLabel="Approche préventive durable"
        immediate={[
          {
            label: "Désherbage manuel ciblé",
            description:
              "Bineuse, binette, gouge à asperges, couteau désherbeur : selon le type d'adventice et la surface. Plus efficace sur sol légèrement humide, après une pluie. Méthode sans coût, sans démarche, immédiate.",
            effort: "5 à 30 minutes selon la zone",
          },
          {
            label: "Désherbeur thermique sur jeunes pousses",
            description:
              "Modèles gaz portables (15 à 60 €) ou électriques (40 à 100 €). Passage rapide de quelques secondes sur la jeune plante : la chaleur fait éclater les cellules. Ne brûle pas la plante visible mais la détruit en interne. Inadapté aux pelouses (chaufferait aussi le gazon).",
            effort: "Investissement 20 à 80 €",
          },
          {
            label: "Vinaigre blanc dilué sur dallages",
            description:
              "Solution à 30 à 50 % dans l'eau, en pulvérisation par temps sec et chaud. Efficace sur jeunes adventices entre les pavés et joints de terrasses. Le vinaigre est classé substance de base à usage phytosanitaire, autorisé en jardin. À ne pas utiliser sur sol cultivé (acidifie).",
            effort: "Quelques euros pour plusieurs litres",
          },
          {
            label: "Jet d'eau ou décoction de savon noir contre pucerons",
            description:
              "Un jet d'eau modéré déloge les colonies modérées sur rosiers et légumes. Pour des colonies installées : 1 cuillère à soupe de savon noir liquide par litre d'eau, en pulvérisation. Recommencer tous les 3 jours si nécessaire. Sans danger pour les auxiliaires si appliqué localement.",
            effort: "Gratuit ou quelques centimes",
          },
        ]}
        structural={[
          {
            label: "Pailler systématiquement les sols nus",
            description:
              "Au printemps après le réchauffement du sol, et en automne pour protéger l'hiver : 5 à 10 cm de paillage organique sur tous les sols nus du jardin (potager, massifs, pieds d'arbres). Effet cumulatif sur 2 à 3 ans : moins d'arrosage, moins de désherbage, sol plus vivant.",
            effort: "Souvent gratuit (déchets verts, BRF, tontes)",
          },
          {
            label: "Installer des plantes couvrantes dans les zones difficiles",
            description:
              "Pieds d'arbres, talus, bordures, recoins ombragés : couvertures végétales basses qui suppriment l'entretien dans la durée. Mise en place sur 1 à 2 saisons, entretien quasi nul ensuite. Investissement initial en plants compensé en quelques années par le temps de désherbage économisé.",
            effort: "5 à 15 € par m² selon plantes",
          },
          {
            label: "Diversifier les plantations pour attirer les auxiliaires",
            description:
              "Planter des espèces mellifères (lavande, sauge, thym, bourrache), conserver une bande non tondue le long d'une haie, installer un hôtel à insectes ou un tas de bois mort. Ces aménagements créent l'écosystème qui régule lui-même les populations de ravageurs.",
            effort: "Aménagement progressif sur 2 ans",
          },
          {
            label: "Adapter ses attentes esthétiques",
            description:
              "Une pelouse fleurie de pissenlits et trèfles est plus saine pour la biodiversité qu'un gazon monospécifique. Quelques herbes folles dans les massifs ne sont pas un signe de laisser-aller. Le jardin sain accepte une certaine spontanéité végétale, c'est aussi ce qui fait sa résilience.",
            effort: "Décision personnelle",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Les erreurs fréquentes face aux alternatives."
        errors={[
          {
            label: "Acheter du « pesticide bio » comme un substitut direct",
            explanation:
              "Sulfate de cuivre, pyrèthre naturel, spinosad : ces produits autorisés en agriculture biologique ne sont pas neutres. Le cuivre s'accumule dans les sols et est toxique pour les vers de terre et la vie aquatique. Le pyrèthre tue insectes utiles comme nuisibles. À utiliser avec modération et discernement, jamais en réflexe.",
          },
          {
            label: "Croire que le désherbage thermique est efficace sur les plantes installées",
            explanation:
              "Le désherbeur thermique fonctionne bien sur les jeunes pousses (stade 1 à 3 feuilles). Sur des adventices installées avec des racines profondes, la partie aérienne meurt mais la plante repart. Pour un effet durable, intervenir tôt dans la saison ou combiner avec arrachage manuel.",
          },
          {
            label: "Pulveriser du vinaigre pur sur tous les sols",
            explanation:
              "Le vinaigre acidifie le sol s'il est utilisé en grande quantité ou répétitivement. Réservé aux dallages, pavés, terrasses minérales. À éviter sur les zones cultivées (potager, massifs) sauf si on accepte une perturbation prolongée du pH.",
          },
          {
            label: "Confondre laisser-faire et gestion",
            explanation:
              "Un jardin sans pesticides demande plus d'observation et d'interventions ponctuelles, pas moins. Laisser une renouée du Japon s'installer ou ignorer une invasion de pucerons sur un fruitier productif n'est pas une gestion : c'est une dégradation. La nuance entre acceptation de la spontanéité et négligence est réelle.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur les alternatives aux pesticides au jardin"
        items={[
          {
            question: "Que faire des pesticides chimiques que j'ai encore en stock ?",
            answer:
              "Les rapporter en déchèterie dans la filière des Produits Dangereux des Ménages (PDM). La détention est interdite depuis le 1er juillet 2022. Les déchèteries acceptent ces produits avec leur emballage d'origine si possible. Ne pas les utiliser, même en discrétion : usage et détention sont passibles de sanctions.",
          },
          {
            question: "Le désherbeur thermique est-il vraiment efficace ?",
            answer:
              "Oui sur les jeunes adventices (1 à 3 feuilles) en sol nu, terrasse, allée gravillonnée. Le passage de 1 à 2 secondes par plante suffit : pas besoin de la brûler visuellement. Sur des plantes installées avec racines profondes, plusieurs passages espacés de quelques semaines sont nécessaires. Inadapté aux pelouses et aux abords de plantes cultivées.",
          },
          {
            question: "La bouillie bordelaise est-elle encore autorisée ?",
            answer:
              "Oui à ce jour. Elle est utilisable en agriculture biologique et reste accessible aux particuliers. Mais elle contient du sulfate de cuivre qui s'accumule dans les sols : la dose annuelle réglementaire est plafonnée à 4 kg de cuivre par hectare et par an en agriculture (proportionnellement, des doses très inférieures suffisent au jardin). À utiliser comme dernier recours sur fruitiers, pas en traitement préventif systématique. La proposition de loi 2026 pourrait remettre en cause cette autorisation.",
          },
          {
            question: "Les plantes couvrantes prennent combien de temps à s'installer ?",
            answer:
              "Pour une couverture dense suffisante à empêcher les adventices : 12 à 24 mois selon l'espèce et les conditions. Lierre rampant : 18 à 24 mois. Pervenche : 12 à 18 mois. Fragaria (fraisier sauvage) : 12 mois. Pendant cette période, le désherbage manuel reste nécessaire entre les jeunes plants. Densité de plantation à la mise en place : 6 à 9 plants par m² selon l'espèce.",
          },
          {
            question: "Comment lutter contre le liseron sans pesticide ?",
            answer:
              "C'est l'un des cas les plus difficiles. Le liseron a des racines très profondes et repousse de chaque fragment laissé en terre. Méthode : arrachage répété de la partie aérienne pendant 2 à 3 saisons, sans laisser fleurir, avec un paillage généreux pour épuiser progressivement la plante. Une bâche opaque sur 6 à 12 mois sur les zones très infestées finit par avoir raison de la plupart des plants. Patience requise.",
          },
          {
            question: "Faut-il s'inquiéter de la proposition de loi de 2026 ?",
            answer:
              "Pas dans l'immédiat : les produits actuellement autorisés (biocontrôle, substances de base, UAB) restent disponibles tant que la loi n'a pas été votée et publiée. Si l'extension est adoptée, une période de transition sera prévue (utilisation des stocks existants, retrait progressif). À surveiller via service-public.gouv.fr et le site du ministère de l'Agriculture pour les évolutions précises.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Jardin",
            title: "Le silo jardin sain",
            description:
              "Sol vivant, eau de pluie, biodéchets, équipements durables : la vue d'ensemble des leviers pour un jardin plus sain.",
            href: "/jardin/",
          },
          {
            tag: "Produits et habitudes",
            title: "Réduire les produits chimiques à la maison",
            description:
              "La même logique de substitution s'applique au ménage intérieur. Démarche progressive, alternatives concrètes.",
            href: "/produits-et-habitudes/reduire-produits-chimiques-maison/",
          },
          {
            tag: "Pièce par pièce",
            title: "L'extérieur immédiat de la maison",
            description:
              "Terrasse, balcon, abord de la façade : la perspective « pièce extérieure » complémentaire du jardin.",
            href: "/piece-par-piece/exterieur-sain/",
          },
        ]}
      />
    </>
  );
}

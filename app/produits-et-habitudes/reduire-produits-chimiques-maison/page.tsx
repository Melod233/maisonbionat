import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import SituationContext from "@/components/situation/SituationContext";
import SituationPriorities from "@/components/situation/SituationPriorities";
import SituationDefer from "@/components/situation/SituationDefer";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import IssueActions from "@/components/issue/IssueActions";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Réduire les produits chimiques à la maison : par quoi commencer",
  description:
    "44 % des produits d'entretien courants contiennent des composés dangereux. La plupart des substitutions sont simples et moins chères. Un guide pour agir dans le bon ordre.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/produits-et-habitudes/reduire-produits-chimiques-maison/",
  },
  openGraph: {
    title: "Réduire les produits chimiques à la maison : par quoi commencer",
    description:
      "44 % des produits d'entretien courants contiennent des composés dangereux. La plupart des substitutions sont simples et moins chères. Un guide pour agir dans le bon ordre.",
    url: "https://www.maisonbionat.fr/produits-et-habitudes/reduire-produits-chimiques-maison/",
  },
};

export default function ReduireProduitsChimiquesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Produits et habitudes", href: "/produits-et-habitudes/" },
    { name: "Réduire les produits chimiques à la maison : par quoi commencer", href: "https://www.maisonbionat.fr/produits-et-habitudes/reduire-produits-chimiques-maison/" },
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
        tag="Votre démarche"
        title="Réduire les produits chimiques à la maison. Ce qu'il faut changer en premier."
        quickAnswer="44 % des produits d'entretien courants contiennent des composés dangereux selon UFC-Que Choisir. La bonne nouvelle : la plupart des substitutions sont simples, peu coûteuses et immédiatement efficaces. Le problème n'est pas de tout changer, c'est de savoir par quoi commencer."
        quickAnswerLabel="Dans votre situation"
        stats={[
          { value: "44%", label: "des produits d'entretien courants contiennent des composés dangereux" },
          { value: "56", label: "allergènes parfumants à déclarer obligatoirement (UE, 2023)" },
          { value: "0", label: "avantage prouvé des produits antibactériens grand public" },
          { value: "3", label: "ingrédients couvrent 80 % du nettoyage courant" },
        ]}
        anchors={[
          { id: "contexte", label: "L'enjeu" },
          { id: "priorites", label: "Par quoi commencer" },
          { id: "arbitrage", label: "Arbitrage" },
          { id: "erreurs", label: "Erreurs" },
          { id: "actions", label: "Plan d'action" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <SituationContext
        id="contexte"
        sectionLabel="Ce qui change quand on réduit les produits chimiques"
        title="Trois points qui remettent en question les idées reçues."
        cards={[
          {
            number: "01",
            badge: "Qualité de l'air",
            title: "Les sprays parfumants dégradent l'air qu'ils sont censés améliorer.",
            description:
              "L'ADEME a documenté que les produits parfumants, sprays, diffuseurs, pastilles WC, sont parmi les sources les plus émissives de COV dans les logements. Ils ne purifient pas l'air : ils y ajoutent des polluants. Les supprimer est l'un des gains les plus immédiats sur la qualité de l'air intérieur.",
          },
          {
            number: "02",
            badge: "Idée reçue",
            title: "Un savon ordinaire suffit. Les antibactériens créent des résistances.",
            description:
              "La FDA américaine a interdit les savons antiseptiques au triclosan en 2017. Des études ont montré que le triclosan favorise les résistances à plusieurs classes d'antibiotiques. À domicile, un lavage normal au savon classique est aussi efficace pour éliminer les bactéries pathogènes courantes.",
          },
          {
            number: "03",
            badge: "Économie",
            title: "Vinaigre, bicarbonate, savon noir : le trio qui remplace 80 % des usages.",
            description:
              "Ces trois produits couvrent la quasi-totalité du nettoyage courant. Biodégradables, sans substances classifiées dangereuses, disponibles partout. Pour moins de 10 € en stock, ils remplacent 5 à 6 références habituelles, en étant souvent aussi efficaces.",
          },
        ]}
      />

      <SituationPriorities
        id="priorites"
        sectionLabel="Par quoi commencer"
        title="Ce qu'il faut changer, dans quel ordre."
        subtitle="Six étapes du plus immédiat au plus progressif."
        priorities={[
          {
            number: "01",
            title: "Supprimer les sprays désodorisants, pastilles WC et bougies synthétiques",
            description:
              "Identifiés par 60 Millions de Consommateurs et l'ADEME comme parmi les sources les plus problématiques de COV et d'allergènes dans l'air intérieur. Supprimer ces produits = gain immédiat. Alternative : aérer, bicarbonate de soude en coupelle pour les odeurs ponctuelles.",
            timing: "en-premier",
          },
          {
            number: "02",
            title: "Arrêter les produits antibactériens et ne plus en racheter",
            description:
              "Savons antibactériens, lingettes désinfectantes, sprays biocides : inutiles pour un usage domestique courant et problématiques (résistances aux antibiotiques, perturbateurs endocriniens suspects). Un savon ordinaire avec un rinçage correct suffit.",
            timing: "en-premier",
          },
          {
            number: "03",
            title: "Remplacer la lessive par une formule sans parfum et sans MIT/CMIT",
            description:
              "La lessive reste en contact avec la peau toute la journée via les vêtements et la literie. Les parfums résiduels et les conservateurs MIT/CMIT sont les premières causes d'allergies au linge. Choisir une lessive sans parfum, certifiée Ecolabel européen, ou en poudre (moins de conservateurs que le liquide).",
            timing: "ensuite",
          },
          {
            number: "04",
            title: "Remplacer le nettoyant multi-usages par vinaigre blanc et eau",
            description:
              "50 % vinaigre blanc, 50 % eau dans un flacon pulvérisateur. Efficace sur le calcaire, les graisses légères, les surfaces non poreuses. Ne pas utiliser sur le marbre ou les pierres calcaires. Ne pas mélanger avec du bicarbonate : la réaction acide/base les neutralise mutuellement.",
            timing: "ensuite",
          },
          {
            number: "05",
            title: "Scanner les cosmétiques avec l'application INCI Beauty",
            description:
              "Crèmes, shampoings, gels douche : prioriser les produits à rinçage long (crèmes corps, laits) qui restent en contact prolongé avec la peau. L'application INCI Beauty permet de scanner la composition et d'identifier les substances problématiques sans lire les listes INCI à la loupe.",
            timing: "quand-possible",
          },
          {
            number: "06",
            title: "Fabriquer progressivement certains produits maison",
            description:
              "Nettoyant multi-usages (savon noir + eau), détartrant (acide citrique), lessive en poudre (savon de Marseille + cristaux de soude) : les recettes maison fonctionnent et se conservent facilement en poudre. Commencer par un usage simple, constater, puis étendre.",
            timing: "quand-possible",
          },
        ]}
      />

      <SituationDefer
        id="arbitrage"
        sectionLabel="Arbitrage"
        title="Ce qu'il faut changer maintenant, et ce qui peut attendre."
        urgentLabel="Changer maintenant"
        deferLabel="Peut attendre"
        urgent={[
          {
            label: "Sprays parfumants et pastilles WC",
            detail:
              "Supprimer immédiatement : pastilles WC colorées, sprays d'ambiance, bougies synthétiques dans les espaces fermés. Gain sur la qualité de l'air intérieur dès le lendemain.",
          },
          {
            label: "Produits antibactériens",
            detail:
              "Ne plus racheter à l'épuisement du stock. Remplacer par du savon classique. Aucun avantage hygiénique à domicile, inconvénients réels.",
          },
          {
            label: "Eau de Javel en spray dans les espaces confinés",
            detail:
              "Utiliser uniquement dilué et en espace bien ventilé. Ne jamais mélanger avec du vinaigre ou des détartrants acides : réaction chimique toxique (chlore gazeux).",
          },
          {
            label: "Lessive si enfants allergiques ou asthmatiques dans le foyer",
            detail:
              "Priorité absolue si eczéma, asthme ou allergie connue. Le contact permanent avec les vêtements et la literie rend ce changement plus urgent.",
          },
        ]}
        defer={[
          {
            label: "Les produits cosmétiques en stock",
            detail:
              "Finissez vos stocks. Remplacez au fur et à mesure en consultant INCI Beauty à chaque achat. Pas besoin de tout jeter d'un coup.",
          },
          {
            label: "Les produits maison DIY",
            detail:
              "Pas urgent. Commencez par supprimer les pires, pas par tout fabriquer soi-même. La transition fonctionne mieux produit par produit.",
          },
          {
            label: "L'assouplissant (sans allergie)",
            detail:
              "Inutile mais pas critique si vous n'avez pas d'allergies. Le vinaigre blanc dans le bac assouplissant remplace efficacement quand vous serez prêt.",
          },
          {
            label: "Les nettoyants spécialisés utilisés ponctuellement",
            detail:
              "Nettoyant four, détartrant WC puissant : peuvent rester si utilisés rarement et avec aération. Ce ne sont pas les premières cibles.",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs les plus fréquentes quand on veut réduire les produits chimiques."
        errors={[
          {
            label: "Mélanger vinaigre blanc et bicarbonate dans la même préparation",
            explanation:
              "La réaction acide/base entre le vinaigre et le bicarbonate les neutralise : le résultat est de l'eau salée et du CO₂. Le mélange ne nettoie pas mieux qu'un seul des deux produits. Utiliser séparément : vinaigre pour le calcaire, bicarbonate pour les taches et les odeurs.",
          },
          {
            label: "Utiliser le vinaigre blanc sur le marbre ou les pierres naturelles",
            explanation:
              "Le vinaigre est acide. Il corrode les surfaces calcaires : marbre, travertin, pierre bleue, béton ciré. Sur ces surfaces, utiliser uniquement de l'eau savonneuse ou un nettoyant à pH neutre.",
          },
          {
            label: "Croire qu'un produit 'naturel' ou 'bio' est forcément sans danger",
            explanation:
              "Un produit avec des huiles essentielles peut contenir des COV et être irritant. Un produit 'sans parabènes' peut contenir du MIT/CMIT, allergène majeur. La mention 'bio' sur un produit ménager n'a pas de définition réglementaire précise. Lire la composition reste indispensable.",
          },
          {
            label: "Fabriquer de grandes quantités de produits liquides maison",
            explanation:
              "Les préparations liquides sans conservateur se dégradent en quelques semaines (développement bactérien possible). Fabriquer en petites quantités ou opter pour des formules en poudre : acide citrique, bicarbonate, cristaux de soude, qui se conservent plusieurs mois en récipient fermé.",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Agir rapidement, progresser sur la durée."
        immediateLabel="Cette semaine"
        structuralLabel="Sur la durée"
        immediate={[
          {
            label: "Vider le placard des produits les plus problématiques",
            description:
              "Sprays parfumants, produits antibactériens, pastilles WC colorées : jeter ou décider de ne pas racheter. C'est le geste le plus rapide avec le plus d'impact sur la qualité de l'air.",
            effort: "Gratuit",
          },
          {
            label: "Préparer un flacon vinaigre + eau",
            description:
              "50/50 dans un pulvérisateur recyclé, labellisé 'multi-usages'. Utilisable immédiatement sur cuisines, salles de bain, surfaces. Efficace sur le calcaire et les graisses légères.",
            effort: "Moins de 2 €",
          },
          {
            label: "Lire les étiquettes au prochain achat",
            description:
              "Chercher MIT/CMIT, parfum/fragrance, alkylphénols dans la liste des ingrédients. Ces mentions signalent les substances les plus problématiques. Refuser les produits qui les contiennent.",
            effort: "Gratuit",
          },
          {
            label: "Télécharger l'application INCI Beauty",
            description:
              "Scanner les cosmétiques qui restent le plus longtemps sur la peau : crèmes, laits corps, déodorants. C'est là que l'exposition cutanée est la plus longue.",
            effort: "Gratuit",
          },
        ]}
        structural={[
          {
            label: "Constituer un stock de base en poudre",
            description:
              "Bicarbonate de soude, acide citrique, cristaux de soude, savon noir liquide : quatre produits qui couvrent 80 % des usages. Budget inférieur à 10 €, conservation plusieurs mois.",
            effort: "Moins de 10 €",
          },
          {
            label: "Passer à une lessive sans parfum certifiée Ecolabel",
            description:
              "À changer en priorité pour les familles avec enfants ou personnes sensibles. La lessive en poudre est généralement plus sûre que la lessive liquide (moins de conservateurs).",
            effort: "Prix comparable",
          },
          {
            label: "Remplacer l'assouplissant par du vinaigre blanc",
            description:
              "Verser du vinaigre blanc dans le bac assouplissant. Effet adoucissant comparable, sans résidus chimiques sur le linge. Sans odeur après lavage.",
            effort: "Moins d'1 €/litre",
          },
          {
            label: "Réviser les cosmétiques au fil des achats",
            description:
              "Ne pas tout jeter. Remplacer au fur et à mesure avec INCI Beauty comme guide. Prioriser les produits à long contact : crèmes, laits, déodorants.",
            effort: "Progressif",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Produits et habitudes",
            title: "Produits ménagers irritants",
            description:
              "Comprendre les mécanismes d'irritation des produits du quotidien et identifier les substitutions les plus utiles.",
            href: "/produits-et-habitudes/produits-menagers-irritants/",
          },
          {
            tag: "Air intérieur",
            title: "Odeurs persistantes dans la maison",
            description:
              "Les sprays parfumants masquent les odeurs sans traiter la source. Comment identifier et traiter la vraie cause.",
            href: "/air-interieur/odeurs-persistantes-maison/",
          },
          {
            tag: "Air intérieur",
            title: "Air intérieur pollué",
            description:
              "Les produits ménagers sont l'une des cinq sources principales de polluants intérieurs. Vue d'ensemble et solutions.",
            href: "/air-interieur/air-interieur-pollue/",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la réduction des produits chimiques"
        items={[
          {
            question: "Le vinaigre blanc est-il vraiment un désinfectant ?",
            answer:
              "Non au sens réglementaire. Le vinaigre réduit le développement de certaines bactéries à partir de 5 % d'acidité, mais il ne répond pas aux normes biocides européennes. Pour une désinfection réelle (après maladie contagieuse, surfaces alimentaires), l'eau de Javel diluée reste la référence. Pour le nettoyage quotidien, le vinaigre est amplement suffisant.",
          },
          {
            question: "Que signifie MIT ou CMIT sur une étiquette, et pourquoi l'éviter ?",
            answer:
              "MIT (méthylisothiazolinone) et CMIT sont des conservateurs à fort potentiel allergisant, identifiés par l'ANSES comme responsables de nombreux cas d'eczéma de contact. On les trouve dans les lessives liquides, adoucissants et nettoyants. À repérer dans la liste des ingrédients et à éviter systématiquement, en particulier si vous avez des enfants ou des personnes sensibles.",
          },
          {
            question: "Comment faire la transition sans perdre en efficacité ?",
            answer:
              "Procéder par usage, pas par produit. Commencer par un usage simple (détartrage : vinaigre blanc) et constater. Puis le suivant (dégraissage : savon noir). La plupart des personnes constatent une efficacité comparable pour 70 à 80 % des tâches courantes. La vraie limite des alternatives naturelles est sur les taches protéiques à froid : là, les enzymes industrielles font mieux.",
          },
          {
            question: "Les huiles essentielles sont-elles des alternatives sûres dans les produits ménagers maison ?",
            answer:
              "Partiellement. Les huiles essentielles sont efficaces comme antimicrobiens naturels dans certaines formulations. Mais l'ADEME les cite comme source significative de COV odorants dans l'air intérieur, comparables aux produits industriels parfumés. Les utiliser avec modération, aérer systématiquement, et ne pas les utiliser en diffusion en présence d'enfants de moins de 3 ans (recommandation ANSES).",
          },
        ]}
      />
    </>
  );
}

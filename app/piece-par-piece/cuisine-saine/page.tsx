import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import RoomPriorities from "@/components/room/RoomPriorities";
import RoomChecklist from "@/components/room/RoomChecklist";
import RoomImpact from "@/components/room/RoomImpact";
import RoomActionsGrid from "@/components/room/RoomActionsGrid";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Cuisine plus saine : gaz, hotte, particules fines et ventilation",
  description:
    "La cuisine est la pièce la plus polluante du logement pendant la cuisson. NO₂, CO, PM2,5 : comprendre les sources et agir avec les bons équipements.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/piece-par-piece/cuisine-saine/",
  },
  openGraph: {
    title: "Cuisine plus saine : gaz, hotte, particules fines et ventilation",
    description:
      "La cuisine est la pièce la plus polluante du logement pendant la cuisson. NO₂, CO, PM2,5 : comprendre les sources et agir avec les bons équipements.",
    url: "https://www.maisonbionat.fr/piece-par-piece/cuisine-saine/",
  },
};

export default function CuisinePlusSainePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Pièce par pièce", href: "/piece-par-piece/" },
    { name: "Cuisine plus saine : gaz, hotte, particules fines et ventilation", href: "https://www.maisonbionat.fr/piece-par-piece/cuisine-saine/" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroIssue
        parentLabel="Pièce par pièce"
        parentHref="/piece-par-piece/"
        tag="Cuisine"
        title="La pièce la plus polluante du logement. Pendant quelques minutes."
        quickAnswer="La cuisson au gaz génère des pics de NO₂, CO et particules fines qui peuvent se diffuser dans tout le logement en minutes. La hotte est le premier équipement à évaluer : pas toutes les hottes se valent."
        stats={[
          { value: "NO₂", label: "dioxyde d'azote (cuisson gaz)" },
          { value: "PM2,5", label: "particules fines lors de la cuisson" },
          { value: "×3–5", label: "concentration intérieure vs extérieure pendant cuisson" },
          { value: "250–400 m³/h", label: "débit recommandé pour une cuisine standard" },
        ]}
      />

      <RoomPriorities
        id="priorites"
        title="Les priorités de la cuisine"
        priorities={[
          {
            number: "01",
            action: "Utiliser la hotte à extraction extérieure, pas à recyclage",
            description:
              "Une hotte à recyclage filtre les odeurs mais ne retire pas les polluants de combustion (NO₂, CO, particules fines). Seule une hotte avec conduit vers l'extérieur élimine vraiment ces polluants. Si votre hotte recycle, ouvrez aussi une fenêtre.",
            impact: "critique",
          },
          {
            number: "02",
            action: "Allumer la hotte avant de cuisiner et l'éteindre 10 min après",
            description:
              "La hotte doit tourner pendant et après la cuisson. Les particules fines restent en suspension plusieurs minutes après l'extinction des feux. Allumer en avance amorce le flux d'air avant que la pollution ne se forme.",
            impact: "critique",
          },
          {
            number: "03",
            action: "Aérer la fenêtre pendant et après chaque cuisson",
            description:
              "Même avec une bonne hotte, ouvrir une fenêtre réduit la concentration résiduelle de polluants. Particulièrement important pour la cuisson à haute température (saisir, friture) qui génère le plus de particules ultrafines.",
            impact: "fort",
          },
          {
            number: "04",
            action: "Nettoyer régulièrement les filtres de hotte",
            description:
              "Des filtres encrassés réduisent l'efficacité de la hotte de 50 % ou plus. Filtres métalliques : lavage mensuel. Filtres à charbon actif (hotte recyclage) : remplacement tous les 3 à 6 mois.",
            impact: "moyen",
          },
        ]}
      />

      <RoomChecklist
        id="verifier"
        title="Ce qu'il faut vérifier dans la cuisine"
        subtitle="La cuisine est la pièce où les gestes du quotidien ont le plus d'impact immédiat."
        items={[
          {
            label: "Allumer la hotte avant de commencer",
            detail: "Ne pas attendre que les aliments commencent à fumer. Le flux d'air doit être établi dès la première minute.",
            frequency: "quotidien",
          },
          {
            label: "Ouvrir une fenêtre pendant la cuisson intensive",
            detail: "Friture, grill, saisir à feu vif : ouvrez systématiquement. Ces modes génèrent le plus de particules ultrafines.",
            frequency: "quotidien",
          },
          {
            label: "Couvrir les casseroles dès que possible",
            detail: "Réduit les projections et la formation de particules. Diminue aussi la production de vapeur d'eau.",
            frequency: "quotidien",
          },
          {
            label: "Laisser la hotte tourner 10 min après la fin de cuisson",
            detail: "Les particules fines restent en suspension plusieurs minutes après l'extinction du feu.",
            frequency: "quotidien",
          },
          {
            label: "Laver les filtres métalliques de hotte",
            detail: "Au lave-vaisselle ou à l'eau chaude savonneuse. Des filtres propres = efficacité maximale.",
            frequency: "mensuel",
          },
          {
            label: "Vérifier le débit de la hotte",
            detail: "Approchez une feuille de papier : elle doit être aspirée nettement. Si non, filtres à nettoyer ou moteur à vérifier.",
            frequency: "mensuel",
          },
          {
            label: "Remplacer les filtres à charbon actif (hotte recyclage)",
            detail: "Après 3 à 6 mois d'utilisation intensive. Un filtre saturé ne filtre plus : il retient simplement les odeurs, pas les COV.",
            frequency: "ponctuel",
          },
        ]}
      />

      <RoomImpact
        id="impact"
        title="Ce qui pèse le plus sur la qualité de l'air en cuisine"
        factors={[
          {
            rank: "01",
            factor: "Cuisson au gaz",
            statement: "La flamme émet NO₂, CO et particules fines.",
            detail:
              "La combustion du gaz émet du dioxyde d'azote, du monoxyde de carbone, des particules fines (PM2,5) et du benzène. Pendant la cuisson, les concentrations de NO₂ peuvent dépasser 5 fois la valeur guide OMS (40 µg/m³). Ces polluants se diffusent dans tout le logement en quelques minutes.",
            weight: "élevé",
          },
          {
            rank: "02",
            factor: "Cuisson à haute température",
            statement: "Friture et saisir génèrent des particules ultrafines.",
            detail:
              "La cuisson à haute température (> 180 °C) produit des particules ultrafines (UFP) si petites qu'elles pénètrent dans la circulation sanguine. Une friture sans hotte peut créer des concentrations de PM2,5 comparables à une zone de fort trafic.",
            weight: "élevé",
          },
          {
            rank: "03",
            factor: "Hotte insuffisante ou mal utilisée",
            statement: "Une mauvaise hotte aggrave la situation.",
            detail:
              "Une hotte à recyclage sans conduit extérieur, des filtres encrassés ou une hotte sous-dimensionnée peuvent créer une illusion de protection. Les polluants non éliminés se redistribuent dans l'air de la cuisine puis du logement.",
            weight: "modéré",
          },
        ]}
      />

      <RoomActionsGrid
        id="actions"
        quick={[
          {
            label: "Systématiser hotte + fenêtre à chaque cuisson",
            description: "Hotte allumée avant de commencer, fenêtre entrouverte pendant, hotte maintenue 10 min après. Coût zéro, impact immédiat.",
            effort: "Gratuit",
          },
          {
            label: "Couvrir les casseroles",
            description: "Réduit les projections, la formation de particules et la production de vapeur. Simple réflexe, efficacité mesurable.",
            effort: "Gratuit",
          },
          {
            label: "Laver les filtres ce mois-ci",
            description: "Si cela n'a pas été fait depuis plus de 2 mois, des filtres propres restaurent immédiatement l'efficacité de la hotte.",
            effort: "Gratuit",
          },
          {
            label: "Identifier le type de votre hotte",
            description: "Extraction extérieure (conduit dans le mur/plafond) ou recyclage (filtre à charbon) ? Cela détermine ce qu'elle peut et ne peut pas éliminer.",
            effort: "Gratuit",
          },
        ]}
        deep={[
          {
            label: "Remplacer la hotte recyclage par une hotte à extraction",
            description: "Si votre hotte n'a pas de conduit vers l'extérieur, elle ne peut pas éliminer les polluants de combustion. Faire poser un conduit d'extraction est l'amélioration la plus impactante.",
            effort: "300–1500€ selon configuration",
          },
          {
            label: "Passer de la cuisson gaz à l'induction",
            description: "L'induction n'émet aucun polluant de combustion (pas de flamme). Les particules fines liées aux aliments restent mais les NOx et CO sont supprimés. Impact significatif sur la qualité de l'air.",
            effort: "200–800€ pour une table induction",
          },
          {
            label: "Installer un capteur CO₂/qualité de l'air en cuisine",
            description: "Mesure les CO₂, COV et parfois PM2,5 en temps réel. Permet de savoir quand la cuisine est vraiment aérée.",
            effort: "50–200€",
          },
        ]}
      />

      <ErrorCallout
        id="erreurs"
        title="Les erreurs fréquentes en cuisine"
        errors={[
          {
            label: "La hotte à recyclage protège aussi des polluants de combustion",
            explanation:
              "Les hottes à recyclage filtrent les odeurs et les graisses mais ne peuvent pas éliminer les gaz de combustion (NO₂, CO) ni les particules ultrafines. Ces polluants passent à travers les filtres à charbon et retournent dans l'air de la cuisine.",
          },
          {
            label: "Allumer la hotte uniquement quand ça fume",
            explanation:
              "Attendre la fumée pour allumer la hotte signifie que les polluants se sont déjà répandus dans la pièce. La hotte doit établir un flux d'air avant que la cuisson ne commence : idéalement 2 à 3 minutes avant la première flamme.",
          },
          {
            label: "Ouvrir la fenêtre suffit sans hotte",
            explanation:
              "La fenêtre dilue les polluants mais ne les élimine pas. Sans extraction mécanique, une partie des NOx, CO et particules reste dans la cuisine et se redistribue dans le logement. Hotte + fenêtre est la combinaison optimale.",
          },
          {
            label: "L'induction produit les mêmes polluants que le gaz",
            explanation:
              "Non. L'induction ne brûle rien : il n'y a aucun polluant de combustion (NOx, CO, benzène). Les particules fines liées aux aliments chauffés restent présentes, mais en quantité bien moindre qu'avec une flamme gaz.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Vos questions sur la cuisine"
        items={[
          {
            question: "Ma hotte recycle l'air : est-ce vraiment problématique ?",
            answer:
              "Pour les odeurs et les graisses, une hotte à recyclage est efficace. Pour les polluants de combustion (gaz), elle est insuffisante : NO₂, CO et particules fines passent à travers les filtres à charbon. Si vous cuisinez au gaz, la hotte à recyclage doit être combinée avec l'ouverture d'une fenêtre.",
          },
          {
            question: "La cuisine électrique est-elle plus saine que le gaz ?",
            answer:
              "Oui, significativement. La cuisson à gaz émet du NO₂, du CO et du benzène lors de la combustion. L'induction n'émet aucun de ces gaz : il n'y a pas de flamme. Les plaques vitrocéramiques et à résistance sont intermédiaires : pas de combustion, mais génèrent plus de chaleur radiante.",
          },
          {
            question: "La cuisson au gaz augmente-t-elle le risque d'asthme chez les enfants ?",
            answer:
              "Oui. Une méta-analyse publiée en 2023 dans l'International Journal of Epidemiology a établi que les enfants vivant dans un foyer avec cuisson au gaz présentent un risque d'asthme environ 42 % plus élevé que ceux qui n'y sont pas exposés. Ce lien est attribué aux émissions chroniques de NO₂ même en dehors des épisodes de cuisson, liées aux brûleurs au repos. Passer à l'induction supprime cette source d'exposition.",
          },
          {
            question: "Quelle est la différence entre PM2,5 et particules ultrafines en cuisine ?",
            answer:
              "Les PM2,5 sont des particules fines (< 2,5 microns) mesurables par les capteurs courants. Les particules ultrafines (< 0,1 micron) sont encore plus petites, traversent les poumons et peuvent atteindre la circulation sanguine. La friture à haute température génère surtout ces dernières, que la plupart des capteurs grand public ne détectent pas.",
          },
        ]}
      />

      <RelatedContent
        title="Ce sujet croise aussi"
        items={[
          {
            tag: "Air intérieur",
            title: "Polluants intérieurs et ventilation",
            description: "La cuisine est une source majeure de COV et particules. Comprendre comment ces polluants se propagent dans le logement.",
            href: "/air-interieur/",
          },
          {
            tag: "Humidité maison",
            title: "Vapeur d'eau et cuisson",
            description: "La cuisine est aussi une source importante d'humidité. Couvrir les casseroles et ventiler réduit simultanément les polluants et l'hygrométrie.",
            href: "/humidite-maison/",
          },
          {
            tag: "Produits et habitudes",
            title: "Habitudes de cuisson plus saines",
            description: "Au-delà de l'équipement, les gestes du quotidien réduisent significativement la production de polluants en cuisine.",
            href: "/produits-et-habitudes/",
          },
        ]}
      />
    </>
  );
}

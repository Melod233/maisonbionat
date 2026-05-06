import type { Metadata } from "next";
import { getBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import HeroIssue from "@/components/issue/HeroIssue";
import IssueDiagnosis from "@/components/issue/IssueDiagnosis";
import IssueCauses from "@/components/issue/IssueCauses";
import IssueActions from "@/components/issue/IssueActions";
import ErrorCallout from "@/components/pillar/ErrorCallout";
import PillarFaqSection from "@/components/pillar/PillarFaqSection";
import RelatedContent from "@/components/pillar/RelatedContent";

export const metadata: Metadata = {
  title: "Choisir et hiérarchiser ses travaux d'isolation en rénovation",
  description:
    "Quel poste isoler en priorité, ITE ou ITI, dans quel ordre faire les travaux, quelles aides en 2026 : un guide pour décider avant d'engager un artisan.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/choisir-isolation-renovation/",
  },
  openGraph: {
    title: "Choisir et hiérarchiser ses travaux d'isolation en rénovation",
    description:
      "Quel poste isoler en priorité, ITE ou ITI, dans quel ordre faire les travaux, quelles aides en 2026 : un guide pour décider avant d'engager un artisan.",
    url: "https://www.maisonbionat.fr/renovation-saine/choisir-isolation-renovation/",
  },
};

export default function ChoisirIsolationRenovationPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    {
      name: "Choisir et hiérarchiser ses travaux d'isolation en rénovation",
      href: "https://www.maisonbionat.fr/renovation-saine/choisir-isolation-renovation/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroIssue
        parentLabel="Rénovation saine"
        parentHref="/renovation-saine/"
        tag="Décider"
        title="Choisir et hiérarchiser ses travaux d'isolation en rénovation"
        quickAnswer="Dans une maison ancienne non isolée, le toit représente à lui seul 25 à 30 % des déperditions de chaleur : c'est presque toujours le premier chantier à engager. La séquence officielle ADEME / France Rénov' recommande ensuite les murs, les planchers bas, puis les menuiseries — avec la ventilation à mettre à niveau juste après l'isolation, et le chauffage en dernier (sur les besoins du logement isolé, pas avant). Le choix entre isolation par l'extérieur (ITE) et par l'intérieur (ITI) dépend du bâti, du budget et de l'urbanisme, pas d'une supériorité absolue. Côté aides, en 2026, l'isolation des murs n'est plus financée par MaPrimeRénov' parcours par geste : elle passe par le parcours rénovation d'ampleur, qui exige un audit, un accompagnateur Rénov' et au moins deux gestes d'isolation. Les barèmes évoluent : pour les chiffres exacts du jour, le simulateur officiel france-renov.gouv.fr fait foi."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "25–30 %", label: "déperditions par la toiture (maison non isolée, source ADEME)" },
          { value: "20–25 %", label: "par les murs extérieurs" },
          { value: "20–25 %", label: "par le renouvellement d'air et les fuites" },
          { value: "10–15 %", label: "par les fenêtres et portes" },
        ]}
        anchors={[
          { id: "priorites", label: "Par où commencer" },
          { id: "ite-iti", label: "ITE ou ITI" },
          { id: "ordre", label: "L'ordre des travaux" },
          { id: "aides", label: "Aides 2026" },
          { id: "pieges", label: "Pièges à éviter" },
          { id: "rge", label: "RGE" },
          { id: "faq", label: "Questions" },
        ]}
      />

      {/* ── Hiérarchie des déperditions ────────────────────────── */}
      <IssueDiagnosis
        id="priorites"
        title="Par où commencer : la hiérarchie des déperditions."
        description="Dans une maison non isolée construite avant la première réglementation thermique de 1974, les pertes thermiques se concentrent sur quelques postes. Connaître leur poids relatif permet d'investir là où le rapport gain/coût est le meilleur, sans céder au premier devis venu."
        variants={[
          {
            indicator: "Priorité 1",
            name: "Toiture et combles",
            description:
              "25 à 30 % des déperditions selon l'ADEME. C'est presque toujours le premier chantier : le coût d'isolation des combles perdus est parmi les plus bas (15 à 25 €/m² posé pour une ouate de cellulose insufflée), pour un gain énergétique parmi les plus élevés. À défaut de tout faire, commencer ici.",
          },
          {
            indicator: "Priorité 2",
            name: "Murs extérieurs et étanchéité à l'air",
            description:
              "20 à 25 % par les murs, plus 20 à 25 % par le renouvellement d'air et les fuites parasites. Les murs représentent l'investissement le plus lourd mais aussi un gain durable. L'étanchéité à l'air, souvent négligée, conditionne la performance réelle de toute l'isolation.",
          },
          {
            indicator: "Priorité 3",
            name: "Planchers bas, fenêtres et ponts thermiques",
            description:
              "Les planchers bas représentent 7 à 10 % des déperditions, les menuiseries 10 à 15 %, les ponts thermiques 5 à 10 %. Changer les fenêtres en premier sans isoler le reste est rarement le meilleur choix : on déplace les zones froides plutôt que de réduire les besoins de chauffage.",
          },
        ]}
      />

      {/* ── ITE vs ITI ──────────────────────────────────────── */}
      <IssueCauses
        id="ite-iti"
        title="ITE ou ITI : choisir selon le bâti, pas selon la mode."
        subtitle="Les deux solutions sont valides. Le choix dépend du contexte du logement, du budget et des contraintes d'urbanisme — pas d'une supériorité absolue."
        causes={[
          {
            number: "01",
            cause: "ITE : quand elle s'impose",
            explanation:
              "L'isolation par l'extérieur traite les ponts thermiques (jonctions entre planchers, refends et façade) et conserve la totalité de la surface habitable. Elle est cohérente quand la façade doit être ravalée, dans les copropriétés qui mutualisent un ravalement, ou quand on vise la meilleure performance possible. L'ADEME chiffre jusqu'à 40 % de réduction de la consommation énergétique pour un logement passoire correctement isolé par l'extérieur. Une déclaration préalable de travaux est obligatoire (modification de l'aspect extérieur).",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "ITI : quand elle reste pertinente",
            explanation:
              "L'isolation par l'intérieur est moins coûteuse, peut être réalisée pièce par pièce, et reste obligatoire dans les secteurs sauvegardés (avis ABF) ou sur les façades patrimoniales. En contrepartie, elle réduit la surface habitable de 8 à 15 cm par mur isolé, ne supprime pas les ponts thermiques structurels et impose une attention forte à la gestion de la vapeur d'eau (frein-vapeur côté intérieur).",
            frequency: "fréquent",
          },
          {
            number: "03",
            cause: "Les vrais arbitrages à poser",
            explanation:
              "Le secteur urbanistique (zone protégée, ABF), la nature de la copropriété, le calendrier d'un ravalement futur, la perte de surface tolérable, l'esthétique recherchée et la préservation des modénatures (corniches, encadrements) pèsent autant que la performance brute. Un audit énergétique et un avis architectural en amont permettent de trancher sereinement.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Le matériau, c'est une autre décision",
            explanation:
              "Une fois ITE ou ITI choisie, le choix du matériau (laine minérale, fibre de bois, ouate de cellulose, liège expansé, polystyrène) est un sujet à part. Pour un comparatif détaillé des isolants biosourcés et leurs cas d'usage, voir la page dédiée.",
            frequency: "fréquent",
          },
        ]}
      />

      {/* ── Ordre des travaux ───────────────────────────────── */}
      <IssueActions
        id="ordre"
        title="L'ordre des travaux : pourquoi il compte."
        immediateLabel="Avant les travaux"
        structuralLabel="Pendant et après"
        immediate={[
          {
            label: "Faire un audit énergétique",
            description:
              "Obligatoire pour bénéficier de MaPrimeRénov' rénovation d'ampleur, fortement recommandé sinon. Un audit réalisé par un professionnel qualifié identifie les déperditions réelles du logement, propose des scénarios chiffrés et permet de hiérarchiser les travaux. C'est la meilleure protection contre les devis poussant un seul geste sans vue d'ensemble.",
            effort: "500 à 1 500 € (souvent aidé)",
          },
          {
            label: "Isoler avant de changer le chauffage",
            description:
              "Installer une nouvelle chaudière ou pompe à chaleur avant d'isoler, c'est dimensionner un équipement sur les besoins d'un logement passoire. Une fois l'isolation faite, l'équipement est surdimensionné, fonctionne en mauvais rendement et coûte plus cher à l'achat. La séquence officielle ADEME est claire : enveloppe d'abord, équipement ensuite.",
            effort: "Logique d'ordonnancement",
          },
          {
            label: "Mettre à niveau la ventilation après isolation",
            description:
              "Un logement isolé est plus étanche. Sans ventilation adaptée (VMC simple flux hygroréglable au minimum, double flux idéalement), la vapeur d'eau s'accumule, condense sur les surfaces froides résiduelles et dégrade durablement les matériaux. La VMC se planifie en même temps que l'isolation, jamais après coup quand les pathologies apparaissent.",
            effort: "Indissociable de l'isolation",
          },
        ]}
        structural={[
          {
            label: "Suivre la séquence ADEME / France Rénov'",
            description:
              "1. Audit énergétique. 2. Isolation (toiture en priorité, puis murs, puis planchers bas, puis menuiseries). 3. Ventilation adaptée. 4. Chauffage dimensionné sur les besoins du logement isolé. Cette séquence évite les retours en arrière coûteux et les équipements inadaptés.",
            effort: "Vision globale du projet",
          },
          {
            label: "Grouper les travaux d'isolation pour la rénovation d'ampleur",
            description:
              "Le parcours MaPrimeRénov' rénovation d'ampleur exige au moins deux gestes d'isolation et un gain DPE d'au moins deux classes. Grouper les travaux est plus avantageux financièrement que les étaler, car les plafonds aidés sont plus élevés (jusqu'à 70 000 € de dépenses éligibles selon l'ampleur).",
            effort: "Décision stratégique",
          },
          {
            label: "Préserver la cohérence d'enveloppe",
            description:
              "Isoler une seule façade ou changer uniquement les fenêtres déplace les zones froides et peut créer de nouveaux points de condensation. Si le budget impose des travaux étalés, le faire avec un plan d'ensemble qui anticipe la suite, idéalement issu d'un audit énergétique.",
            effort: "Continuité technique",
          },
        ]}
      />

      {/* ── Aides 2026 ──────────────────────────────────────── */}
      <IssueCauses
        id="aides"
        title="Les aides en 2026 : ce qui est disponible."
        subtitle="Les barèmes évoluent en cours d'année. Les chiffres ci-dessous sont des fourchettes indicatives en vigueur au printemps 2026. Pour les montants exacts du jour, le simulateur officiel france-renov.gouv.fr fait foi."
        causes={[
          {
            number: "01",
            cause: "MaPrimeRénov' parcours par geste",
            explanation:
              "Pour des travaux ciblés sur un seul poste : isolation des combles aménagés (jusqu'à 25 €/m² pour les ménages très modestes), toiture-terrasse (jusqu'à 75 €/m²), planchers bas, fenêtres. Plafond de cumul : 20 000 € sur 5 ans par logement. Changement majeur en 2026 : l'isolation des murs (ITE et ITI) a été retirée du parcours par geste — elle relève désormais uniquement de la rénovation d'ampleur.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "MaPrimeRénov' rénovation d'ampleur",
            explanation:
              "Pour des bouquets de travaux : résidence principale de plus de 15 ans, classée E, F ou G au DPE, avec au moins deux gestes d'isolation (parmi murs, fenêtres, sols, toiture) et un gain DPE d'au moins deux classes. Plafonds de dépenses éligibles : 30 000 € HT pour deux classes gagnées, jusqu'à 70 000 € HT pour les rénovations les plus ambitieuses. Taux d'aide jusqu'à 80 % pour les ménages très modestes. Mon Accompagnateur Rénov' est obligatoire (audit, suivi, contrôle).",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Éco-PTZ",
            explanation:
              "Prêt à taux zéro pour financer le reste à charge, jusqu'à 50 000 €, sans condition de ressources, pour un logement construit avant 2021. Cumulable avec MaPrimeRénov' et les CEE. L'artisan doit être RGE. La durée de remboursement et les conditions précises sont consultables sur service-public.fr.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "CEE / Prime Énergie",
            explanation:
              "Les Certificats d'Économies d'Énergie sont versés par les fournisseurs d'énergie (les obligés). Ordre de grandeur : 8 à 22 €/m² pour l'isolation, selon les revenus du ménage et l'obligé sollicité. Cumulables avec MaPrimeRénov' et l'éco-PTZ. À demander avant le démarrage des travaux.",
            frequency: "fréquent",
          },
          {
            number: "05",
            cause: "TVA réduite à 5,5 %",
            explanation:
              "Pour les travaux d'amélioration énergétique réalisés par un artisan RGE, la TVA est réduite à 5,5 % sur la main-d'œuvre et les matériaux fournis par l'entreprise. Aucune démarche : c'est l'artisan qui applique le taux directement sur la facture.",
            frequency: "très fréquent",
          },
        ]}
      />

      {/* ── Pièges fréquents ────────────────────────────────── */}
      <ErrorCallout
        id="pieges"
        title="Les pièges fréquents."
        errors={[
          {
            label: "Isoler sans renforcer la ventilation",
            explanation:
              "C'est l'erreur la plus répandue. Un logement plus étanche sans ventilation adaptée concentre la vapeur d'eau, fait condenser sur les surfaces résiduellement froides et favorise moisissures et altération des matériaux. La ventilation se planifie en même temps que l'isolation.",
          },
          {
            label: "Négliger l'étanchéité à l'air",
            explanation:
              "Une isolation correctement posée mais associée à des fuites parasites (passages de gaines, jonctions plancher-mur, prises de courant non étanches) tient rarement ses promesses thermiques. Un test d'étanchéité à l'air après travaux confirme la qualité de l'exécution.",
          },
          {
            label: "Mal traiter les ponts thermiques en ITI",
            explanation:
              "En isolation par l'intérieur, les ponts thermiques aux jonctions de planchers, refends et tableaux de fenêtres restent des zones froides où la condensation se forme. Les retours d'isolant et le traitement des liaisons sont à valider en phase étude, pas en cours de chantier.",
          },
          {
            label: "Choisir l'artisan sur le seul devis le moins cher",
            explanation:
              "Le devis le plus bas est parfois celui d'un artisan dont la qualification RGE n'est pas valide au moment de la signature, ou qui sous-traite à des intervenants non formés. Sans qualification RGE valable à la date du devis, les aides sont refusées. La vérification se fait sur l'annuaire officiel france-renov.gouv.fr.",
          },
          {
            label: "Lancer les travaux avant validation des aides",
            explanation:
              "MaPrimeRénov' et les CEE doivent être demandés et validés avant le démarrage du chantier. Un chantier commencé avant accord est inéligible. Compter 2 à 4 mois entre la signature du devis et la validation, davantage si Mon Accompagnateur Rénov' est requis.",
          },
        ]}
      />

      {/* ── RGE ────────────────────────────────────────────── */}
      <section id="rge" className="py-16 lg:py-24 bg-surface-2">
        <div className="site-container">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-ink-dim mb-5">
              RGE
            </div>
            <h2
              className="font-semibold text-ink leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
            >
              La qualification RGE conditionne toutes les aides.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] text-ink-dim leading-[1.75]">
              <p>
                MaPrimeRénov', éco-PTZ, CEE, TVA à 5,5 % : aucune de ces aides n&apos;est accessible sans
                un artisan disposant d&apos;une qualification RGE (Reconnu Garant de l&apos;Environnement) valide
                <strong className="text-ink"> à la date de signature du devis</strong>. Pas à la date du chantier.
              </p>
              <p>
                La vérification se fait sur l&apos;annuaire officiel France Rénov&apos; :{" "}
                <a
                  href="https://france-renov.gouv.fr/recrutement/qualifications-rge"
                  className="underline decoration-1 underline-offset-4 text-accent hover:text-ink transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  france-renov.gouv.fr
                </a>
                . Demander à voir le certificat avant signature et conserver la copie au dossier.
              </p>
              <p>
                Depuis la loi du 30 juin 2025 contre la fraude aux aides à la rénovation, l&apos;artisan a
                une obligation renforcée d&apos;information du client et de présentation de sa qualification.
                En cas de doute sur la légitimité d&apos;un démarchage, ne pas signer dans la précipitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <PillarFaqSection
        id="faq"
        title="Vos questions sur la décision d'isoler en rénovation"
        items={[
          {
            question: "Faut-il faire un audit énergétique avant tout projet d'isolation ?",
            answer:
              "L'audit est obligatoire pour bénéficier de MaPrimeRénov' rénovation d'ampleur. Pour un projet ciblé en parcours par geste, il n'est pas formellement requis, mais reste fortement recommandé : il permet de cibler les vrais gisements d'économie et de ne pas engager des travaux sur de mauvaises priorités. Le coût (500 à 1 500 €) est largement amorti par la qualité des décisions qui en découlent.",
          },
          {
            question: "Combien de temps prévoir entre le devis et le début des travaux ?",
            answer:
              "Pour MaPrimeRénov' parcours par geste, compter en général 2 à 4 mois entre la demande et la validation. Pour la rénovation d'ampleur avec Mon Accompagnateur Rénov', le délai est plus long : prévoir 4 à 6 mois entre les premiers contacts et le démarrage du chantier. Aucun travail ne doit commencer avant l'accord écrit.",
          },
          {
            question: "L'ITE est-elle vraiment plus efficace que l'ITI ?",
            answer:
              "Sur le papier oui : l'isolation par l'extérieur traite mieux les ponts thermiques et conserve la surface habitable. En pratique, le choix dépend du bâti (façade patrimoniale, secteur protégé), de l'urbanisme (déclaration préalable, avis ABF), du budget et de la copropriété. L'ITI bien exécutée donne d'excellents résultats. Il n'y a pas de supériorité absolue : il y a un choix adapté à chaque logement.",
          },
          {
            question: "Peut-on cumuler MaPrimeRénov', CEE et éco-PTZ ?",
            answer:
              "Oui, ces dispositifs sont cumulables, dans la limite des plafonds spécifiques à chaque dispositif et d'un reste à charge minimum à respecter selon les revenus du ménage. Le simulateur officiel france-renov.gouv.fr calcule le cumul pour votre situation.",
          },
          {
            question: "Que faire si l'artisan perd sa qualification RGE en cours de chantier ?",
            answer:
              "C'est la qualification à la date de signature du devis qui compte pour l'éligibilité aux aides. Si l'artisan disposait d'une qualification valide à la signature, le chantier reste éligible même en cas de perte ultérieure. Le risque opérationnel (fin de garanties, qualité d'exécution) reste cependant à considérer : exiger un certificat à jour avant chaque acompte significatif.",
          },
          {
            question: "Doit-on isoler les murs avant ou après les fenêtres ?",
            answer:
              "Idéalement les murs d'abord. Changer les fenêtres seules sur des murs non isolés déplace les zones froides : la condensation qui se formait sur les vitres apparaît désormais sur les murs autour. Si le budget impose des étapes, mieux vaut isoler la toiture en premier puis planifier murs et fenêtres ensemble.",
          },
          {
            question: "Quel est le reste à charge minimum imposé par la loi ?",
            answer:
              "La somme des aides ne peut excéder un plafond du coût total des travaux, variable selon le niveau de revenus. Pour les ménages très modestes, le taux d'aide cumulé peut atteindre 80 à 90 % des dépenses éligibles. Au-delà de ce plafond, le reste à charge couvre toujours une part minimale du chantier.",
          },
        ]}
      />

      {/* ── Sujets connexes ─────────────────────────────────── */}
      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Matériaux sains",
            title: "Isolants biosourcés : performances et choix",
            description:
              "Une fois la stratégie posée, comparer les matériaux : ouate de cellulose, fibre de bois, chanvre, liège, laine de mouton. Performances, cas d'usage et limites.",
            href: "/materiaux-sains/isolants-biosources/",
          },
          {
            tag: "Rénovation saine",
            title: "Isolation et ventilation : à planifier ensemble",
            description:
              "Pourquoi un logement plus étanche exige une ventilation adaptée. Comment articuler les deux travaux pour éviter les pathologies post-chantier.",
            href: "/renovation-saine/isolation-ventilation/",
          },
          {
            tag: "Rénovation saine",
            title: "Diagnostic avant rénovation",
            description:
              "Humidité, ventilation, matériaux dangereux : ce qu'il faut vérifier avant de lancer un chantier d'isolation.",
            href: "/renovation-saine/diagnostic-renovation/",
          },
          {
            tag: "Rénovation saine",
            title: "Trouver un artisan RGE",
            description:
              "Vérifier la qualification, lire un devis, repérer les signaux d'alerte d'un démarchage frauduleux.",
            href: "/renovation-saine/artisan-renovation-saine/",
          },
        ]}
      />
    </>
  );
}

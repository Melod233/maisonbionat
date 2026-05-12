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
  title: "MaPrimeRénov' et choix de matériaux sains : comment articuler aides et qualité",
  description:
    "MaPrimeRénov' 2026, certificats d'économies d'énergie, MPR Parcours accompagné : comment articuler les aides à la rénovation avec des choix de matériaux et d'équipements sains. Démarche France Rénov', artisans RGE, audit énergétique.",
  alternates: {
    canonical: "https://www.maisonbionat.fr/renovation-saine/maprimerenov-choix-sains/",
  },
  openGraph: {
    title: "MaPrimeRénov' et choix de matériaux sains : comment articuler aides et qualité",
    description:
      "Aides, RGE, audit énergétique : comment ne pas opposer économies d'énergie et qualité sanitaire des matériaux.",
    url: "https://www.maisonbionat.fr/renovation-saine/maprimerenov-choix-sains/",
  },
};

export default function MaPrimeRenovPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", href: "/" },
    { name: "Rénovation saine", href: "/renovation-saine/" },
    {
      name: "MaPrimeRénov' et choix de matériaux sains",
      href: "https://www.maisonbionat.fr/renovation-saine/maprimerenov-choix-sains/",
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
        tag="Aides et qualité sanitaire"
        title="MaPrimeRénov' et choix de matériaux sains : aides et qualité ne s'opposent pas."
        quickAnswer="MaPrimeRénov' est l'aide principale de l'État pour la rénovation énergétique. Elle s'organise désormais en deux parcours : MPR par geste (isolation seule, chauffage seul, ventilation seule) et MPR Parcours accompagné (rénovation globale avec gain d'au moins 2 classes DPE, accompagnement par un Accompagnateur Rénov' obligatoire). Les aides ne conditionnent pas le choix entre matériaux conventionnels et biosourcés : la prime est la même pour une laine de verre ou une laine de bois, dès lors que le coefficient thermique exigé est respecté. C'est donc à l'occupant et au maître d'ouvrage d'arbitrer entre économies d'énergie et qualité sanitaire des matériaux. En général, un coût supplémentaire modéré (10 à 25 %) permet de passer d'un isolant conventionnel à un isolant biosourcé performant. Les certificats d'économies d'énergie (CEE) sont cumulables avec MaPrimeRénov'. L'éco-PTZ complète le financement. Cette page fait le point factuel sur les arbitrages réels et oriente vers France Rénov' pour la simulation officielle."
        quickAnswerLabel="L'essentiel"
        stats={[
          { value: "2026", label: "MaPrimeRénov' avec deux parcours (geste / Parcours accompagné)" },
          { value: "RGE", label: "qualification obligatoire de l'artisan pour toucher l'aide" },
          { value: "2 classes", label: "saut DPE minimum pour MPR Parcours accompagné" },
          { value: "Cumul", label: "aides cumulables : MPR + CEE + éco-PTZ + aides locales" },
        ]}
        anchors={[
          { id: "diagnostic", label: "Le cadre des aides" },
          { id: "signes", label: "Cas où l'arbitrage compte" },
          { id: "causes", label: "Pourquoi le choix matériau reste libre" },
          { id: "actions", label: "Démarche concrète" },
          { id: "eviter", label: "Erreurs fréquentes" },
          { id: "faq", label: "Questions" },
        ]}
      />

      <IssueDiagnosis
        id="diagnostic"
        sectionLabel="Cadre"
        title="MaPrimeRénov' 2026 : les deux parcours et ce qu'ils couvrent"
        description="L'organisation de l'aide a été réformée. Deux parcours principaux coexistent désormais, avec des logiques différentes. Le bon choix dépend de l'ampleur de votre projet."
        variants={[
          {
            indicator: "Gestes isolés",
            name: "MaPrimeRénov' par geste",
            description:
              "Aide pour un ou quelques gestes isolés : isolation des combles, isolation des murs, remplacement du chauffage, installation d'une VMC, remplacement de menuiseries. Forfaits selon le geste et les revenus du foyer (4 catégories : très modestes, modestes, intermédiaires, supérieurs). Démarche simple, dépôt en ligne sur maprimerenov.gouv.fr. Recommandée pour les projets ciblés.",
          },
          {
            indicator: "Rénovation globale",
            name: "MaPrimeRénov' Parcours accompagné",
            description:
              "Aide pour une rénovation d'ensemble visant un gain d'au moins 2 classes DPE. Audit énergétique obligatoire en amont, accompagnement par un « Accompagnateur Rénov' » (MAR) tout au long du projet. Aide plus généreuse (jusqu'à 90 % de prise en charge pour les très modestes), mais plus exigeante en démarches et délais. Recommandée pour les rénovations lourdes ou les passoires énergétiques.",
          },
          {
            indicator: "Cumul",
            name: "Certificats d'économies d'énergie (CEE)",
            description:
              "Aide complémentaire versée par les fournisseurs d'énergie (EDF, Engie, TotalEnergies, etc.) ou des intermédiaires (« coup de pouce »). Cumulable avec MaPrimeRénov'. Montants variables selon les gestes et les opérateurs : comparer plusieurs offres avant signature, le marché est libre. Demande à faire AVANT signature du devis, sinon CEE perdu.",
          },
          {
            indicator: "Financement",
            name: "Éco-PTZ et aides locales",
            description:
              "Éco-prêt à taux zéro (jusqu'à 50 000 € sur 20 ans) pour financer le reste à charge. Cumulable avec MaPrimeRénov'. Aides locales (région, département, métropole, commune) variables : se renseigner auprès du France Rénov' du territoire. TVA réduite à 5,5 % sur les travaux d'amélioration de la performance énergétique.",
          },
        ]}
      />

      <IssueSigns
        id="signes"
        sectionLabel="Cas concrets"
        title="Cas où l'arbitrage aides / qualité se pose vraiment."
        subtitle="Voici les situations de rénovation les plus fréquentes où le choix entre matériaux standards et biosourcés se pose concrètement, avec les implications économiques."
        signs={[
          {
            label: "Isolation des combles perdus",
            description:
              "Choix typique : laine de verre soufflée (15 à 20 € HT/m² fourni-posé) ou ouate de cellulose soufflée (20 à 30 € HT/m²). Performance thermique équivalente à épaisseur équivalente. Surcoût ouate : 25 à 50 %, partiellement absorbé par CEE ou MPR puisque l'aide est calculée sur la performance, pas le matériau. Choix qualité de l'air : la ouate (cellulose recyclée) est moins émissive en COV et fibre que la laine de verre.",
            severity: "léger",
          },
          {
            label: "Isolation des murs par l'intérieur (ITI)",
            description:
              "Laine de verre ou de roche en panneaux : 30 à 60 €/m² posé. Laine de bois ou panneaux fibre de bois : 60 à 100 €/m² posé. Surcoût biosourcé : 50 à 80 %. Bénéfices supplémentaires du biosourcé : meilleure régulation hygrothermique (déphasage estival important), confort thermique d'été supérieur. À envisager surtout pour les pièces de vie principales et l'étage sous combles.",
            severity: "modéré",
          },
          {
            label: "Isolation des murs par l'extérieur (ITE)",
            description:
              "Polystyrène : 100 à 150 €/m² posé. Laine de bois ou enduit chaux-chanvre : 150 à 250 €/m² posé. Surcoût biosourcé : 30 à 70 %. ITE biosourcée plus respirante, meilleur déphasage estival, meilleure pérennité sur le bâti ancien (notamment maisons en pierre, pisé, briques anciennes). Choix qualité bâti important sur le bâti d'avant 1948.",
            severity: "modéré",
          },
          {
            label: "Remplacement du chauffage",
            description:
              "Pompe à chaleur air-eau : 12 000 à 20 000 € posée, aides MPR jusqu'à 5 000 à 10 000 € selon revenus + CEE. Poêle à granulés performant : 5 000 à 12 000 €, aides 1 000 à 4 500 €. Le choix se fait sur des critères techniques (isolation du logement, surface, climat) plus que sur la qualité sanitaire pure. Tous ces équipements installés par RGE sont éligibles.",
            severity: "modéré",
          },
          {
            label: "Ventilation : VMC simple flux vs double flux",
            description:
              "VMC hygroréglable : 1 000 à 2 500 € posée, aide MPR 600 à 1 500 € selon revenus. VMC double flux : 4 000 à 8 000 € posée, aide MPR 1 500 à 3 500 €. Double flux : meilleur confort d'air entrant filtré, économies de chauffage en hiver. Choix structurant pour la qualité de l'air, surtout après isolation poussée (le logement devient étanche, la ventilation devient critique).",
            severity: "critique",
          },
          {
            label: "Peintures et finitions intérieures",
            description:
              "Non aidées par MaPrimeRénov' (hors poste isolant). Choix libre entre peintures conventionnelles et peintures Écolabel européen, NF Environnement, ou minérales (chaux, silicate). Surcoût des peintures à très faibles émissions : 10 à 40 % selon gamme. À privilégier surtout dans les pièces de vie principales (chambre, salon, chambre d'enfant). Voir la page peintures plus saines.",
            severity: "léger",
          },
        ]}
        footerNote="L'objectif n'est pas de tout faire en biosourcé à n'importe quel prix, mais d'identifier les postes où le surcoût est le plus justifié sanitairement : chambres, isolation intérieure des pièces de vie, ventilation, peintures des pièces principales."
      />

      <IssueCauses
        id="causes"
        sectionLabel="Pourquoi libre"
        title="Pourquoi MaPrimeRénov' ne dicte pas vos choix de matériaux."
        subtitle="Une idée reçue fréquente : les aides imposent les matériaux standards. En réalité, l'aide est calculée sur la performance, pas sur le matériau. Voici comment ça se traduit concrètement."
        causes={[
          {
            number: "01",
            cause: "Les forfaits sont indexés sur la performance, pas la marque",
            explanation:
              "Pour l'isolation des combles, l'aide est conditionnée à une résistance thermique R ≥ 7 m².K/W. Cette valeur est atteinte par environ 30 cm de laine de verre (λ = 0,04) ou 35 cm d'ouate de cellulose (λ = 0,039). Les deux matériaux donnent droit à la même prime. Le choix entre les deux relève du maître d'ouvrage, pas de l'administration.",
            frequency: "très fréquent",
          },
          {
            number: "02",
            cause: "L'artisan RGE est libre du choix matériau",
            explanation:
              "La qualification RGE Qualibat ou Qualibois s'applique à l'entreprise, pas à un catalogue de matériaux imposés. Un artisan RGE peut tout à fait poser de la laine de bois, de la ouate, du chanvre, dès lors que les performances thermiques sont conformes au devis et que la pose est conforme aux DTU. Demander explicitement les matériaux biosourcés au devis si c'est votre choix.",
            frequency: "très fréquent",
          },
          {
            number: "03",
            cause: "Les bonus biosourcés existent dans plusieurs aides locales",
            explanation:
              "Plusieurs régions (Bretagne, Pays de la Loire, Nouvelle-Aquitaine, Île-de-France selon années) et métropoles ont mis en place des bonus pour les matériaux biosourcés en complément de MaPrimeRénov'. Sommes variables (500 à 5 000 € selon dispositif et matériau). Se renseigner systématiquement auprès du France Rénov' local : ces aides ne sont pas toujours mises en avant par les artisans.",
            frequency: "fréquent",
          },
          {
            number: "04",
            cause: "Le label A+ pour les peintures n'est pas exigé par MaPrimeRénov'",
            explanation:
              "L'étiquetage A+ (très faibles émissions de COV) est obligatoire par marquage CE depuis 2013 pour les produits de construction et de décoration (arrêté du 19 avril 2011). MaPrimeRénov' ne finance pas les peintures et finitions. Le choix qualité sanitaire est libre, à intégrer au budget global du projet. Voir la page label A+ travaux.",
            frequency: "très fréquent",
          },
          {
            number: "05",
            cause: "Le Parcours accompagné peut intégrer une dimension qualité",
            explanation:
              "Dans le Parcours accompagné MPR, l'Accompagnateur Rénov' (MAR) est tenu de proposer plusieurs scénarios de travaux. Demander explicitement un scénario intégrant les matériaux biosourcés : c'est une demande légitime que le MAR doit instruire. Si vous voulez de la qualité sanitaire, l'exprimer au MAR dès le premier rendez-vous évite que le projet glisse vers les options standards par défaut.",
            frequency: "fréquent",
          },
        ]}
      />

      <IssueActions
        id="actions"
        title="Démarche concrète : ordre des étapes et bons réflexes."
        immediateLabel="Avant de signer un devis"
        structuralLabel="Pilotage du projet et choix de fond"
        immediate={[
          {
            label: "Passer par France Rénov' pour la première orientation",
            description:
              "Le service public France Rénov' (france-renov.gouv.fr, ou conseiller territorial gratuit) donne l'information neutre et indépendante : aides disponibles, ordre des travaux, choix entre les parcours, montants attendus. Premier rendez-vous gratuit. À privilégier avant tout contact avec un artisan, pour ne pas se laisser entraîner par les offres commerciales agressives.",
            effort: "Gratuit, 1 à 2 heures",
          },
          {
            label: "Faire réaliser un audit énergétique pour les gros projets",
            description:
              "Pour un Parcours accompagné, l'audit énergétique est obligatoire. Coût indicatif : 500 à 1 500 €, aidé par MaPrimeRénov' (jusqu'à 500 €). Identifie les leviers prioritaires et chiffre les scénarios. Pour une rénovation par gestes ciblés, l'audit n'est pas obligatoire mais souvent rentable pour éviter des erreurs d'ordre des travaux.",
            effort: "500 à 1 500 €",
          },
          {
            label: "Vérifier les qualifications RGE des artisans",
            description:
              "RGE Qualibat (gros œuvre, isolation, menuiseries), RGE Qualibois (chauffage bois), RGE QualiPAC (pompes à chaleur), Qualifelec (électricité), Qualifsol (énergie solaire). Vérifier sur annuaire France Rénov' que la qualification est en cours de validité. Sans RGE valide à la date de la facturation : pas d'aides.",
            effort: "Quelques minutes",
          },
          {
            label: "Demander les CEE et les aides locales avant la signature",
            description:
              "Les CEE doivent être demandés avant signature du devis (faute de quoi ils sont perdus). Comparer 3 offres CEE par opérateurs ou plateformes (le montant peut varier de 30 à 50 % entre offres). Demander les aides régionales et locales auprès du France Rénov' : certaines ont des délais de dépôt stricts.",
            effort: "1 à 3 semaines",
          },
        ]}
        structural={[
          {
            label: "Exprimer explicitement la demande matériaux sains au devis",
            description:
              "Sur le devis : exiger la marque et la référence des matériaux, le label CE et le label A+ si applicable, le caractère biosourcé revendiqué. Un artisan habitué à la laine de verre pourra hésiter à proposer de la laine de bois : c'est à vous de demander explicitement, et au besoin de chercher un artisan RGE plus à l'aise avec les matériaux biosourcés. Annuaire des artisans biosourcés sur le site du Réseau Construire en Chanvre, RFCP, etc.",
            effort: "Choix d'artisan",
          },
          {
            label: "Penser la ventilation dans le projet d'isolation",
            description:
              "Isoler sans repenser la ventilation = créer une étanchéité sans renouvellement d'air = aggravation de la qualité de l'air intérieur, humidité, moisissures. Toute isolation poussée doit s'accompagner d'une révision de la VMC : ré-équilibrage, remplacement si vétuste, passage en double flux si pertinent. Le couple isolation + ventilation est un seul sujet, pas deux.",
            effort: "Intégré au projet",
          },
          {
            label: "Conserver tous les justificatifs",
            description:
              "Devis détaillés signés, factures, attestations de fin de travaux, fiches techniques des matériaux, qualifications RGE, attestations CEE, courriers d'attribution de prime, contrats d'entretien. Dossier à conserver durablement : utile pour SAV, revente, contrôle a posteriori des aides, garanties (10 ans en construction).",
            effort: "Classement durable",
          },
          {
            label: "Vérifier la performance réelle après travaux",
            description:
              "DPE actualisé après travaux (obligatoire en Parcours accompagné), mesure de l'étanchéité à l'air (test d'infiltrométrie, 300 à 700 €), suivi de consommation sur 12 à 24 mois. Si l'écart entre performance promise et réalité est important, signaler à l'artisan, au MAR, voire à la médiation de la consommation. La vigilance post-travaux est aussi importante que la sélection en amont.",
            effort: "Suivi sur 1 à 2 ans",
          },
        ]}
      />

      <ErrorCallout
        id="eviter"
        title="Erreurs et pièges à éviter."
        errors={[
          {
            label: "Signer un devis avant d'avoir consulté France Rénov'",
            explanation:
              "Plusieurs offres commerciales agressives proposent des aides « clés en main » mais avec des conditions désavantageuses : surfacturation, matériaux médiocres, mauvais pilotage. Le service public France Rénov' (gratuit) est conçu précisément pour éviter ces pièges. Un rendez-vous d'orientation avant tout devis sérieux est un investissement minime pour un gain en sérénité majeur.",
          },
          {
            label: "Choisir le « moins disant » sans regarder la qualité",
            explanation:
              "Trois devis comparés : différence de 30 à 50 % possible. Le moins cher utilise souvent des matériaux moins performants, des épaisseurs limitées au minimum, des artisans pressés. Sur 20 à 30 ans de vie de la rénovation, la différence se paie en confort et en consommation. Comparer à matériaux équivalents, lire attentivement les descriptifs, et privilégier la qualité dans la durée.",
          },
          {
            label: "Demander les CEE après signature",
            explanation:
              "Les CEE doivent être demandés AVANT signature du devis. Une fois le devis signé, le bénéfice est perdu. Toujours demander aux opérateurs CEE leur offre, comparer, signer le mandat AVANT signature des devis travaux. Erreur fréquente qui coûte plusieurs centaines voire milliers d'euros.",
          },
          {
            label: "Confondre éco-PTZ et MaPrimeRénov'",
            explanation:
              "L'éco-PTZ est un prêt à rembourser (taux 0 %, durée jusqu'à 20 ans), MaPrimeRénov' est une subvention (à fonds perdus). Beaucoup d'offres commerciales mélangent les deux dans un argumentaire confus. Demander une décomposition claire : prime + prêt + reste à charge. Ne signer qu'avec un tableau financier limpide.",
          },
        ]}
      />

      <PillarFaqSection
        id="faq"
        title="Questions fréquentes sur MaPrimeRénov' et choix sains"
        items={[
          {
            question: "Les matériaux biosourcés sont-ils vraiment toujours plus chers ?",
            answer:
              "Le surcoût varie selon le poste. Pour l'isolation des combles soufflée : 25 à 50 % de plus pour la ouate par rapport à la laine de verre. Pour les peintures Écolabel : 10 à 40 % de plus. Pour l'ITE en laine de bois : 30 à 70 % de plus que polystyrène. À pondérer par les bonus régionaux biosourcés (quand ils existent) et les bénéfices supplémentaires (confort d'été, durabilité, qualité de l'air). Sur une rénovation globale, le surcoût matériaux biosourcés représente souvent 5 à 12 % du coût total.",
          },
          {
            question: "Comment trouver des artisans à l'aise avec les biosourcés ?",
            answer:
              "Annuaires spécialisés : Réseau Construire en Chanvre, RFCP (réseau français de la construction paille), associations régionales de promotion des biosourcés. Recommandations entre particuliers via groupes d'autorenovation, salons. Demander aux artisans RGE Qualibat de votre territoire s'ils ont une expérience documentée des biosourcés. Un artisan qui hésite à répondre à cette question n'est probablement pas le bon choix pour ce type de chantier.",
          },
          {
            question: "Le DPE après travaux change-t-il vraiment quelque chose ?",
            answer:
              "Oui à plusieurs titres : il valide la performance pour les aides Parcours accompagné, il met à jour la classe énergétique du logement (utile à la revente, à la location), il révèle les éventuels écarts avec la prévision (motif éventuel de réclamation). Pour les passoires énergétiques (G, F), passer en E ou D conditionne désormais la possibilité de louer (interdictions progressives depuis 2023).",
          },
          {
            question: "Que faire en cas de litige avec un artisan ?",
            answer:
              "Plusieurs recours : mise en demeure par lettre recommandée avec accusé de réception, médiation de la consommation (gratuite, obligatoire avant tribunal), saisine de la DDPP (Direction départementale de la protection des populations) pour pratiques commerciales abusives, dénonciation du label RGE si manquements graves (Qualibat ou Qualifelec). Pour les aides, signaler à l'Anah toute fraude suspecte. Documenter tous les échanges par écrit.",
          },
          {
            question: "MaPrimeRénov' peut-elle être réclamée après les travaux ?",
            answer:
              "Non : MaPrimeRénov' doit être demandée et accordée AVANT le début des travaux. Le dépôt en ligne sur maprimerenov.gouv.fr est obligatoire, et la notification d'attribution doit être reçue avant signature du devis. Cette règle est stricte. Pour les CEE, principe identique : signature du mandat avant signature du devis travaux.",
          },
          {
            question: "Un copropriétaire peut-il bénéficier des aides ?",
            answer:
              "Oui, en plus du dispositif dédié MaPrimeRénov' Copropriétés (pour les travaux sur parties communes) géré par l'Anah. Pour les travaux sur partie privative (intérieur d'appartement), MaPrimeRénov' classique s'applique. Pour les travaux sur parties communes nécessitant un vote AG, la procédure est plus longue : prévoir 6 à 12 mois entre la décision et le démarrage effectif. Accompagnement souvent assuré par un MAR copropriétés.",
          },
        ]}
      />

      <RelatedContent
        title="Aller plus loin sur ce sujet"
        items={[
          {
            tag: "Rénovation saine",
            title: "Le silo rénovation saine",
            description:
              "Diagnostic pré-travaux, isolation, ventilation, label A+ : la vue d'ensemble des sujets rénovation saine.",
            href: "/renovation-saine/",
          },
          {
            tag: "Rénovation saine",
            title: "Choisir son isolation en rénovation",
            description:
              "Détail des isolants conventionnels et biosourcés, performances comparées, coûts.",
            href: "/renovation-saine/choisir-isolation-renovation/",
          },
          {
            tag: "Matériaux sains",
            title: "Le silo matériaux sains",
            description:
              "Peintures, sols, meubles, isolants : la vue d'ensemble pour des choix de matériaux à faibles émissions.",
            href: "/materiaux-sains/",
          },
        ]}
      />
    </>
  );
}

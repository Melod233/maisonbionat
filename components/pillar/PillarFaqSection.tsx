import SectionLabel from "@/components/ui/SectionLabel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { getFaqPageJsonLd } from "@/lib/seo/jsonld";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  id?: string;
  title?: string;
  items: FaqItem[];
  /**
   * Émet le balisage FAQPage JSON-LD avec les questions affichées.
   * Activé par défaut : la FAQ est rendue, les données structurées sont donc fidèles au contenu.
   * Désactiver uniquement si la page émet déjà son propre FAQPage manuellement.
   */
  jsonLd?: boolean;
};

export default function PillarFaqSection({
  id,
  title = "Questions fréquentes",
  items,
  jsonLd = true,
}: Props) {
  return (
    <>
      {jsonLd && items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFaqPageJsonLd(items)),
          }}
        />
      )}
      <section id={id} className="bg-dark py-16 lg:py-20 border-t border-line-inv">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Titre gauche */}
            <div className="lg:col-span-2">
              <SectionLabel variant="dark">FAQ</SectionLabel>
              <h2
                className="font-semibold text-ink-inv leading-[1.1] mt-4"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", letterSpacing: "-0.02em" }}
              >
                {title}
              </h2>
            </div>

            {/* Accordéon droit */}
            <div className="lg:col-span-3 border-t border-line-inv">
              <FaqAccordion items={items} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

import SectionLabel from "@/components/ui/SectionLabel";
import FaqAccordion from "@/components/ui/FaqAccordion";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  id?: string;
  title?: string;
  items: FaqItem[];
};

export default function PillarFaqSection({
  id,
  title = "Questions fréquentes",
  items,
}: Props) {
  return (
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
  );
}

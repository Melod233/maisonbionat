import SectionLabel from "@/components/ui/SectionLabel";

type Props = {
  id?: string;
  /** Reformulation éditoriale. Jamais une citation directe inventée. */
  editorialNote: string;
};

export default function ReviewQuote({ id, editorialNote }: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-24 border-t border-line-inv">
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">

          {/* Label gauche */}
          <div className="lg:col-span-2">
            <SectionLabel variant="dark">Note éditoriale</SectionLabel>
            <p className="text-ink-dim text-[13px] leading-[1.7] mt-4 max-w-[32ch]">
              Ce que nous retenons de cet ouvrage, dans nos propres mots.
            </p>
          </div>

          {/* Texte éditorial droite */}
          <div className="lg:col-span-3">
            <div className="border-l border-accent pl-8">
              <p
                className="text-ink-inv leading-[1.75] font-light"
                style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}
              >
                {editorialNote}
              </p>
              <p className="text-ink-dim text-[10px] uppercase tracking-[0.16em] mt-6">
                Maisonbionat
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

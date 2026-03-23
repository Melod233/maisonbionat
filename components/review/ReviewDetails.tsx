import SectionLabel from "@/components/ui/SectionLabel";

export type ReviewDetailItem = {
  label: string;
  text: string;
};

type Props = {
  id?: string;
  bookTitle?: string;
  details: ReviewDetailItem[];
};

export default function ReviewDetails({ id, bookTitle, details }: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel>Dans le détail</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {bookTitle ? `Ce que ${bookTitle} apporte vraiment` : "Ce que le livre donne vraiment"}
          </h2>
        </div>

        {/* ── Grille analytique ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {details.map((item, i) => (
            <div key={i} className="bg-white px-6 pt-6 pb-8">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-accent font-mono text-[10px] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[10px] uppercase tracking-[0.14em] text-ink-muted font-medium">
                  {item.label}
                </h3>
              </div>
              <p className="text-ink text-sm leading-[1.75] max-w-[40ch]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

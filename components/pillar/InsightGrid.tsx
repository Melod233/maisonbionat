import SectionLabel from "@/components/ui/SectionLabel";

export type Insight = {
  number: string;
  label: string;
  text: string;
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title: string;
  insights: Insight[];
};

export default function InsightGrid({ id, sectionLabel = "En bref", title, insights }: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-20">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="dark">{sectionLabel}</SectionLabel>
          <h2
            className="font-semibold text-ink-inv leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        {/* ── Grille 2×2 ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-inv">
          {insights.map((insight) => (
            <div key={insight.number} className="bg-dark px-6 pt-7 pb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-accent font-mono text-[11px] shrink-0">
                  {insight.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-ink-dim font-medium">
                  {insight.label}
                </span>
              </div>
              <p className="text-ink-inv text-base leading-[1.7] max-w-[44ch]">
                {insight.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

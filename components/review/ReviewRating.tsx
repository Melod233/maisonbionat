import SectionLabel from "@/components/ui/SectionLabel";

export type ReviewRatingItem = {
  label: string;
  score: number; // 1.0–5.0
};

type Props = {
  id?: string;
  globalRating: number;
  ratingItems: ReviewRatingItem[];
};

function RatingBar({ score }: { score: number }) {
  const pct = Math.round((score / 5) * 100);
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-[3px] bg-line rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[13px] font-medium text-accent tabular-nums w-6 text-right">
        {score.toFixed(1)}
      </span>
    </div>
  );
}

export default function ReviewRating({ id, globalRating, ratingItems }: Props) {
  return (
    <section id={id} className="bg-white py-16 lg:py-24 border-b border-line">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel>Notation éditoriale</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Notre évaluation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Note globale */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-baseline gap-2">
              <span
                className="font-semibold text-accent leading-none"
                style={{
                  fontSize: "clamp(4rem, 10vw, 7rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {globalRating.toFixed(1)}
              </span>
              <span className="text-ink-muted text-2xl font-light">/5</span>
            </div>
            <p className="text-ink-muted text-[11px] uppercase tracking-[0.14em] mt-3">
              Note globale
            </p>
            <p className="text-ink-muted text-xs leading-[1.65] mt-4 max-w-[28ch]">
              Évaluation éditoriale basée sur la lecture complète de l&rsquo;ouvrage.
            </p>
          </div>

          {/* Sous-notes */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-6">
              {ratingItems.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-ink font-medium">
                      {item.label}
                    </span>
                  </div>
                  <RatingBar score={item.score} />
                </div>
              ))}
            </div>

            <p className="text-ink-muted text-[11px] leading-[1.6] mt-8 border-t border-line pt-6 max-w-[50ch]">
              Ces notes reflètent notre lecture et notre angle éditorial. Elles ne constituent pas un avis universel.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

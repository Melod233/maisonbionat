import SectionLabel from "@/components/ui/SectionLabel";

export type ReviewAudienceProfile = {
  profile: string;
  description: string;
  fit: "ideal" | "good" | "limited";
};

const fitConfig = {
  ideal: { label: "Recommandé", dot: "bg-accent" },
  good: { label: "Peut convenir", dot: "bg-ink-dim" },
  limited: { label: "Usage limité", dot: "bg-line-inv" },
} as const;

type Props = {
  id?: string;
  bookTitle?: string;
  audienceProfiles: ReviewAudienceProfile[];
  whenToRead?: string;
  projectStage?: string;
};

export default function ReviewAudience({
  id,
  bookTitle,
  audienceProfiles,
  whenToRead,
  projectStage,
}: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="dark">Pour qui</SectionLabel>
          <h2
            className="font-semibold text-ink-inv leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {bookTitle ? `À qui s'adresse ${bookTitle} ?` : "À qui ce livre s'adresse vraiment"}
          </h2>
        </div>

        {/* ── Profils lecteurs ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-inv mb-12">
          {audienceProfiles.map((profile, i) => {
            const config = fitConfig[profile.fit];
            return (
              <div key={i} className="bg-dark px-6 pt-6 pb-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${config.dot}`}
                    aria-hidden
                  />
                  <span className="text-[9px] uppercase tracking-[0.16em] text-ink-dim font-medium">
                    {config.label}
                  </span>
                </div>
                <h3 className="text-ink-inv text-sm font-semibold leading-snug mb-3">
                  {profile.profile}
                </h3>
                <p className="text-ink-dim text-sm leading-[1.7] max-w-[42ch]">
                  {profile.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Contexte de lecture ───────────────────────────── */}
        {(whenToRead || projectStage) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-inv border-t border-line-inv pt-px">
            {whenToRead && (
              <div className="bg-dark px-6 pt-6 pb-8">
                <p className="text-[9px] uppercase tracking-[0.16em] text-accent font-medium mb-3">
                  // Quand le lire
                </p>
                <p className="text-ink-dim text-sm leading-[1.7]">{whenToRead}</p>
              </div>
            )}
            {projectStage && (
              <div className="bg-dark px-6 pt-6 pb-8">
                <p className="text-[9px] uppercase tracking-[0.16em] text-accent font-medium mb-3">
                  // À quelle étape du projet
                </p>
                <p className="text-ink-dim text-sm leading-[1.7]">{projectStage}</p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

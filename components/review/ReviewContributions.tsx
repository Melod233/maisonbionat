import SectionLabel from "@/components/ui/SectionLabel";

export type ReviewContribution = {
  title: string;
  description: string;
};

type Props = {
  id?: string;
  contributions: ReviewContribution[];
};

export default function ReviewContributions({ id, contributions }: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="dark">Ce que le livre apporte</SectionLabel>
          <h2
            className="font-semibold text-ink-inv leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Cinq raisons d&rsquo;y revenir
          </h2>
        </div>

        {/* ── Grille des apports ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-inv">
          {contributions.map((item, i) => (
            <div key={i} className="bg-dark px-6 pt-7 pb-10">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-accent font-mono text-[11px] shrink-0 pt-px leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-ink-inv text-base font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-ink-dim text-sm leading-[1.75] pl-8 max-w-[44ch]">
                {item.description}
              </p>
            </div>
          ))}

          {/* Cellule de remplissage si nombre impair */}
          {contributions.length % 2 !== 0 && (
            <div className="bg-dark hidden sm:block" aria-hidden />
          )}
        </div>

      </div>
    </section>
  );
}

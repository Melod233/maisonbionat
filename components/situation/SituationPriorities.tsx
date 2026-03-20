import SectionLabel from "@/components/ui/SectionLabel";

export type SituationPriority = {
  number: string;
  title: string;
  description: string;
  timing: "en-premier" | "ensuite" | "quand-possible";
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title?: string;
  subtitle?: string;
  priorities: SituationPriority[];
};

const timingConfig = {
  "en-premier": {
    label: "En premier",
    color: "text-accent border-accent/40 bg-accent/5",
  },
  ensuite: {
    label: "Ensuite",
    color: "text-ink-inv border-line-inv bg-dark-2",
  },
  "quand-possible": {
    label: "Quand vous pouvez",
    color: "text-ink-dim border-line-inv bg-transparent",
  },
};

export default function SituationPriorities({
  id,
  sectionLabel = "Priorités",
  title = "Ce qu'il faut faire, dans quel ordre",
  subtitle,
  priorities,
}: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-20 border-t border-line-inv">
      <div className="site-container">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="dark">{sectionLabel}</SectionLabel>
            <h2
              className="font-semibold text-ink-inv leading-[1.08] mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-ink-dim text-sm leading-[1.65] max-w-[38ch] lg:text-right">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          {priorities.map((p) => {
            const cfg = timingConfig[p.timing];
            return (
              <div
                key={p.number}
                className="grid grid-cols-[3rem_1fr] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-start border-t border-line-inv py-7 last:border-b last:border-line-inv"
              >
                <span
                  className="font-mono text-accent leading-none pt-[3px]"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                  aria-hidden
                >
                  {p.number}
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink-inv leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-dim leading-[1.65] max-w-[60ch]">
                    {p.description}
                  </p>
                </div>

                <div className="col-start-2 lg:col-start-3 mt-3 lg:mt-0 lg:self-start">
                  <span
                    className={`inline-block text-[10px] uppercase tracking-[0.14em] font-medium px-2.5 py-1 border ${cfg.color}`}
                  >
                    {cfg.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import SectionLabel from "@/components/ui/SectionLabel";

export type IssueCause = {
  number: string;
  cause: string;
  explanation: string;
  frequency?: "très fréquent" | "fréquent" | "moins fréquent";
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  causes: IssueCause[];
};

const freqConfig = {
  "très fréquent": { dot: "bg-accent", text: "text-accent" },
  "fréquent": { dot: "bg-ink-dim", text: "text-ink-muted" },
  "moins fréquent": { dot: "bg-line-inv", text: "text-ink-muted" },
};

export default function IssueCauses({
  id,
  sectionLabel = "Causes",
  title,
  subtitle,
  causes,
}: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <SectionLabel variant="light">{sectionLabel}</SectionLabel>
            <h2
              className="font-semibold text-ink leading-[1.08] mt-4"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-ink-muted text-sm leading-[1.65] max-w-[40ch] lg:text-right">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          {causes.map((c) => (
            <div
              key={c.number}
              className="grid grid-cols-[3rem_1fr] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-start border-t border-line py-7 last:border-b last:border-line"
            >
              <span
                className="font-mono text-accent leading-none pt-[3px]"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                aria-hidden
              >
                {c.number}
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-ink leading-snug">{c.cause}</h3>
                <p className="text-sm text-ink-muted leading-[1.65] max-w-[60ch]">{c.explanation}</p>
              </div>

              {c.frequency && (
                <div className="col-start-2 lg:col-start-3 flex items-center gap-2 mt-3 lg:mt-0 lg:self-center shrink-0">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${freqConfig[c.frequency].dot}`}
                    aria-hidden
                  />
                  <span
                    className={`text-[10px] uppercase tracking-[0.1em] font-medium ${freqConfig[c.frequency].text}`}
                  >
                    {c.frequency}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import SectionLabel from "@/components/ui/SectionLabel";

export type IssueSign = {
  label: string;
  description: string;
  severity?: "critique" | "modéré" | "léger";
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  signs: IssueSign[];
  footerNote?: string;
};

const severityConfig = {
  critique: { label: "Critique", style: "text-accent border-accent/40" },
  modéré:  { label: "Modéré",   style: "text-ink-inv border-ink-dim" },
  léger:   { label: "Léger",    style: "text-ink-dim border-line-inv" },
};

export default function IssueSigns({
  id,
  sectionLabel = "Reconnaître le problème",
  title,
  subtitle,
  signs,
  footerNote,
}: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-20">
      <div className="site-container">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line-inv">
          {signs.map((sign, i) => (
            <div key={i} className="bg-dark-2 px-6 pt-6 pb-8 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-accent text-[10px] shrink-0 leading-none pt-[2px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {sign.severity && (
                  <span
                    className={`text-[9px] uppercase tracking-[0.12em] font-medium px-2 py-0.5 border shrink-0 ${severityConfig[sign.severity].style}`}
                  >
                    {severityConfig[sign.severity].label}
                  </span>
                )}
              </div>
              <p className="text-[13px] font-semibold text-ink-inv leading-snug">{sign.label}</p>
              <p className="text-[13px] text-ink-dim leading-[1.65]">{sign.description}</p>
            </div>
          ))}
        </div>

        {footerNote && (
          <p className="text-[12px] text-ink-dim mt-6 max-w-[64ch] leading-[1.65]">
            {footerNote}
          </p>
        )}

      </div>
    </section>
  );
}

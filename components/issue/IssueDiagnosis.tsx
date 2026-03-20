import SectionLabel from "@/components/ui/SectionLabel";

export type DiagnosisVariant = {
  name: string;
  description: string;
  indicator: string;
};

type Props = {
  id?: string;
  sectionLabel?: string;
  title: string;
  description: string;
  variants?: DiagnosisVariant[];
};

export default function IssueDiagnosis({
  id,
  sectionLabel = "De quoi parle-t-on",
  title,
  description,
  variants,
}: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Texte gauche */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <SectionLabel variant="light">{sectionLabel}</SectionLabel>
              <h2
                className="font-semibold text-ink leading-[1.08] mt-4"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", letterSpacing: "-0.02em" }}
              >
                {title}
              </h2>
            </div>
            <p className="text-ink-muted text-sm leading-[1.75] max-w-[40ch]">
              {description}
            </p>
          </div>

          {/* Variantes / formes droite */}
          {variants && variants.length > 0 && (
            <div className="lg:col-span-3 flex flex-col gap-px bg-line">
              {variants.map((v, i) => (
                <div key={i} className="bg-light px-8 py-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-accent text-[10px] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-ink-muted font-medium">
                      {v.indicator}
                    </span>
                  </div>
                  <p className="text-[13px] font-semibold text-ink leading-snug">{v.name}</p>
                  <p className="text-sm text-ink-muted leading-[1.65]">{v.description}</p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

import SectionLabel from "@/components/ui/SectionLabel";

type Props = {
  id?: string;
  strengths: string[];
  limitations: string[];
};

export default function ReviewStrengthsLimitations({
  id,
  strengths,
  limitations,
}: Props) {
  return (
    <section id={id} className="bg-white py-16 lg:py-24">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel>Points forts et limites</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Un regard honnête
          </h2>
        </div>

        {/* ── Deux colonnes ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line">

          {/* Points forts */}
          <div className="bg-light px-7 pt-8 pb-10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-medium mb-7">
              // Points forts
            </p>
            <ul className="flex flex-col gap-4">
              {strengths.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-[5px] w-[6px] h-[6px] rounded-full bg-accent"
                    aria-hidden
                  />
                  <span className="text-ink text-sm leading-[1.7]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limites */}
          <div className="bg-light px-7 pt-8 pb-10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-ink-muted font-medium mb-7">
              // À garder en tête
            </p>
            <ul className="flex flex-col gap-4">
              {limitations.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-[5px] w-[6px] h-[6px] rounded-full bg-line border border-ink-muted"
                    aria-hidden
                  />
                  <span className="text-ink-muted text-sm leading-[1.7]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

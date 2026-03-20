import SectionLabel from "@/components/ui/SectionLabel";

export type CommonError = {
  label: string;
  explanation: string;
};

type Props = {
  id?: string;
  title: string;
  errors: CommonError[];
};

export default function ErrorCallout({ id, title, errors }: Props) {
  return (
    <section id={id} className="bg-dark py-16 lg:py-20">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="dark">Erreurs fréquentes</SectionLabel>
          <h2
            className="font-semibold text-ink-inv leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        {/* ── Liste des erreurs ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line-inv">
          {errors.map((error, i) => (
            <div key={i} className="bg-dark-2 px-7 py-7 flex gap-5">
              {/* Indicateur ✗ */}
              <span
                className="text-accent font-mono text-[11px] shrink-0 pt-[3px] leading-none"
                aria-hidden
              >
                ✗
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-inv leading-snug">
                  {error.label}
                </p>
                <p className="text-sm text-ink-dim leading-[1.7] max-w-[55ch]">
                  {error.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

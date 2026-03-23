import SectionLabel from "@/components/ui/SectionLabel";

type Props = {
  id?: string;
  bookTitle?: string;
  summary: string;
  forWho: string;
  whyWorthIt: string;
  keyTakeaway?: string;
};

export default function ReviewVerdict({
  id,
  bookTitle,
  summary,
  forWho,
  whyWorthIt,
  keyTakeaway,
}: Props) {
  return (
    <section id={id} className="bg-white py-16 lg:py-24 border-b border-line">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel>En bref</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            {bookTitle ? `Notre avis sur ${bookTitle}` : "Le verdict en quelques mots"}
          </h2>
        </div>

        {/* ── Résumé ───────────────────────────────────────── */}
        <p className="text-ink text-base leading-[1.8] max-w-[64ch] mb-12 lg:mb-14">
          {summary}
        </p>

        {/* ── Trois blocs synthèse ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line mb-12 lg:mb-14">

          <div className="bg-light px-6 pt-6 pb-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-accent font-medium mb-3">
              // Pour qui
            </p>
            <p className="text-ink text-sm leading-[1.7]">{forWho}</p>
          </div>

          <div className="bg-light px-6 pt-6 pb-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-accent font-medium mb-3">
              // Pourquoi l&rsquo;ouvrir
            </p>
            <p className="text-ink text-sm leading-[1.7]">{whyWorthIt}</p>
          </div>

          <div className="bg-light px-6 pt-6 pb-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-accent font-medium mb-3">
              // Ce qu&rsquo;on en retient
            </p>
            <p className="text-ink text-sm leading-[1.7] italic">
              {keyTakeaway ?? summary}
            </p>
          </div>

        </div>

        {/* ── Key takeaway mis en avant ─────────────────────── */}
        {keyTakeaway && (
          <div className="border-l-2 border-accent pl-6 py-1 max-w-[62ch]">
            <p className="text-[10px] uppercase tracking-[0.16em] text-accent font-medium mb-2">
              Si vous ne deviez retenir qu&rsquo;une chose
            </p>
            <p className="text-ink text-base leading-[1.7]">{keyTakeaway}</p>
          </div>
        )}

      </div>
    </section>
  );
}

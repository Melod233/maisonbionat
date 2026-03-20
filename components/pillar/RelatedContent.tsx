import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export type RelatedItem = {
  tag: string;
  title: string;
  description: string;
  href: string;
};

type Props = {
  id?: string;
  title?: string;
  items: RelatedItem[];
};

export default function RelatedContent({ id, title = "Sur ce sujet, explorer aussi", items }: Props) {
  return (
    <section id={id} className="bg-light py-16 lg:py-20">
      <div className="site-container">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14">
          <SectionLabel variant="light">Sujets connexes</SectionLabel>
          <h2
            className="font-semibold text-ink leading-[1.08] mt-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        {/* ── Grille des silos connexes ────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white hover:bg-light group flex flex-col gap-3 px-6 pt-6 pb-8 transition-colors duration-150 border-t-2 border-transparent hover:border-accent"
            >
              <span className="text-[10px] uppercase tracking-[0.14em] text-accent font-medium">
                // {item.tag}
              </span>
              <h3 className="text-base font-semibold text-ink leading-snug group-hover:text-accent transition-colors duration-150">
                {item.title}
              </h3>
              <p className="text-sm text-ink-muted leading-[1.65] flex-1 max-w-[42ch]">
                {item.description}
              </p>
              <span className="text-[12px] text-ink-muted group-hover:text-accent transition-[color,transform] duration-150 group-hover:translate-x-[3px] mt-1">
                Explorer →
              </span>
            </Link>
          ))}
          {items.length % 2 !== 0 && <div className="bg-white hidden sm:block lg:hidden" />}
        </div>

      </div>
    </section>
  );
}

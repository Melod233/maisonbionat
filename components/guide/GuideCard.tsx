import Link from "next/link";

type Props = {
  number: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export default function GuideCard({ number, title, excerpt, date, href }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={href}
      className="group grid grid-cols-[3rem_1fr_auto] lg:grid-cols-[4rem_1fr_auto] gap-x-6 lg:gap-x-10 items-center border-t border-line py-6 last:border-b last:border-line hover:bg-white transition-colors duration-150 -mx-6 px-6 lg:-mx-10 lg:px-10"
    >
      {/* Numéro */}
      <span className="font-mono text-accent text-[11px] shrink-0">
        {number}
      </span>

      {/* Titre + extrait + date */}
      <div className="flex flex-col gap-1">
        <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink group-hover:text-accent transition-colors duration-150 leading-snug">
          {title}
        </span>
        <span className="text-sm text-ink-muted leading-[1.65] max-w-[60ch] line-clamp-2">
          {excerpt}
        </span>
        <span className="text-[11px] text-ink-muted mt-1">
          {formattedDate}
        </span>
      </div>

      {/* Fleche */}
      <span
        className="text-ink-muted group-hover:text-accent text-sm transition-[color,transform] duration-150 group-hover:translate-x-1 shrink-0"
        aria-hidden
      >
        →
      </span>
    </Link>
  );
}

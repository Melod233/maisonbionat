import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
};

/**
 * Fil d'Ariane visible, cohérent avec le balisage BreadcrumbList
 * injecté en JSON-LD. Le dernier élément n'est pas cliquable.
 */
export default function Breadcrumbs({ items, variant = "light" }: Props) {
  const textColor =
    variant === "dark" ? "text-ink-dim" : "text-ink-muted";
  const currentColor =
    variant === "dark" ? "text-ink-inv" : "text-ink";
  const hoverColor = "hover:text-accent";

  return (
    <nav aria-label="Fil d'Ariane" className="mb-10">
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.12em] ${textColor}`}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item.href}
              className="flex items-center gap-x-2"
            >
              {isLast ? (
                <span
                  aria-current="page"
                  className={`${currentColor} truncate max-w-[55vw] sm:max-w-[40ch]`}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`${hoverColor} transition-colors duration-150`}
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden className="opacity-60">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

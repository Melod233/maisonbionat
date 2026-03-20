"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  links: NavLink[];
};

export default function NavDesktop({ links }: Props) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className="hidden lg:flex items-center gap-5 xl:gap-7"
    >
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className="flex items-center gap-[6px] group transition-colors duration-200 whitespace-nowrap"
          >
            <span
              className="leading-none shrink-0 text-xs transition-transform duration-150 group-hover:translate-x-[1px] text-accent"
              aria-hidden
            >
              /
            </span>
            <span
              className={`text-sm transition-colors duration-200 ${
                isActive
                  ? "text-accent"
                  : "text-ink-inv group-hover:text-accent"
              }`}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

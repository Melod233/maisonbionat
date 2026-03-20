"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  links: NavLink[];
};

export default function NavMobile({ links }: Props) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Empêche le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Déplace le focus sur le premier lien à l'ouverture
  useEffect(() => {
    if (open) {
      const firstLink = navRef.current?.querySelector<HTMLAnchorElement>("a");
      firstLink?.focus();
    }
  }, [open]);

  return (
    <>
      {/* ── Bouton burger ───────────────────────────── */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="flex flex-col justify-center items-center gap-[5px] w-11 h-11"
      >
        <span
          className={`block w-5 h-px bg-ink-inv origin-center transition-all duration-200 ${
            open ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-px bg-ink-inv transition-all duration-200 ${
            open ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-px bg-ink-inv origin-center transition-all duration-200 ${
            open ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* ── Panneau de navigation ───────────────────── */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        inert={!open || undefined}
        className={`fixed inset-x-0 top-16 bottom-0 bg-dark z-50 px-6 py-8 flex flex-col transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav ref={navRef} aria-label="Navigation mobile">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-line-inv">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 py-5 group transition-colors duration-150"
                >
                  <span className="text-accent leading-none shrink-0 text-sm" aria-hidden>
                    /
                  </span>
                  <span className="text-base font-medium text-ink-inv group-hover:text-accent transition-colors duration-150 leading-none">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

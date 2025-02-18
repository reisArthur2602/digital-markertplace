"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "Início",
    path: "/",
  },
  {
    label: "UI-Kits",
    path: "/products?category=ui-kits",
  },
  {
    label: "Componentes",
    path: "/products?category=components",
  },
  {
    label: "Icones",
    path: "/products?category=icons",
  },
];

export const NavItems = () => {
  const path = usePathname();

  const isSelected = (href: string) => path === href;

  return (
    <nav className="hidden items-center gap-2 sm:flex">
      {NAV_LINKS.map((l) => (
        <Link
          key={l.label}
          href={l.path}
          className={buttonVariants({
            variant: isSelected(l.path) ? "secondary" : "ghost",
          })}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
};

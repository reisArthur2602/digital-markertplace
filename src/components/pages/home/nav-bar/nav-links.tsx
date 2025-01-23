"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Templates",
    path: "#",
  },
  {
    name: "UI-Kits",
    path: "#",
  },
  {
    name: "Icones",
    path: "#",
  },
];

export const NavLinks = () => {
  const currentPathname = usePathname();
  const linkIsActive = (path: string) => currentPathname === path;

  return (
    <nav className="flex flex-col gap-4 text-muted-foreground md:flex-row">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={cn(
            "rounded-lg py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent md:px-2",
            linkIsActive(link.path) && "text-primary",
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./constants";

export const NavLinks = () => {
  const currentPathname = usePathname();
  const linkIsActive = (path: string) => currentPathname === path;

  return (
    <nav className="flex flex-col gap-3 text-muted-foreground md:flex-row">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={cn(
            "rounded-lg p-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-accent",
            linkIsActive(link.path) && "font-medium text-primary",
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

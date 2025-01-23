import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { SignInButton } from "./sign-in-button";

export const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <NavLinks />
          <SignInButton />
        </SheetContent>
      </Sheet>
    </div>
  );
};

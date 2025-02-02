"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LogOut, Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { SignInButton } from "./sign-in-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

type MobileMenuProps = {
  user?: {
    email: string;
    name: string;
    image: string;
  };
};

export const MobileMenu = ({ user }: MobileMenuProps) => {
  const hasUserAuth = user?.email && user?.name && user?.image;

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle className="text-start">Menu</SheetTitle>
          </SheetHeader>
          <NavLinks />

          <div className="mt-auto grid gap-4">
            {hasUserAuth ? (
              <>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={user?.image} />
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold">{user?.name}</p>
                    <p className="truncate text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <LogoutLink>
                    <LogOut />
                    Sair da conta
                  </LogoutLink>
                </Button>
              </>
            ) : (
              <SignInButton />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

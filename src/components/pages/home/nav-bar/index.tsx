import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { SignInButton } from "./sign-in-button";

export const Navbar = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-7 md:px-8">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>

      <div className="hidden md:block">
        <SignInButton />
      </div>

      <MobileMenu />
    </div>
  );
};

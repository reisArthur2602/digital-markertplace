import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { SignInButton } from "./sign-in-button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDropdown } from "./user-dropdown";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  const data = {
    email: user?.email as string,
    name: user?.given_name as string,
    image: user?.picture as string,
  };

  return (
    <div className="flex items-center justify-between py-7">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>

      <div className="hidden md:block">
        {user ? <UserDropdown user={data} /> : <SignInButton />}
      </div>

      <MobileMenu user={data} />
    </div>
  );
};

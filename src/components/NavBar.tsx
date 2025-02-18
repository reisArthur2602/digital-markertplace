import { Cart } from "./Cart";
import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { Wrapper } from "./Wrapper";
import { Button } from "./ui/button";
import { AccountDropdown } from "./AccountDropdown";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const NavBar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <header>
      <Wrapper className="flex items-center justify-between border-b border-accent py-6">
        <div className="flex gap-6">
          <Logo />
          <NavItems />
        </div>

        <div>
          {user ? (
            <div className="flex gap-6">
              <AccountDropdown
                email={user.email!}
                name={user.given_name!}
                picture={user.picture}
              />
              <Cart />
            </div>
          ) : (
            <Button>
              <LoginLink>Comece agora mesmo</LoginLink>
            </Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

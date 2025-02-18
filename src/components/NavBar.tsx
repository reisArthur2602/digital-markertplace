import { Cart } from "./Cart";
import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { Wrapper } from "./Wrapper";
import { Button } from "./ui/button";
import { AccountDropdown } from "./AccountDropdown";

export const NavBar = () => {
  const user = true;

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
              <AccountDropdown />
              <Cart />
            </div>
          ) : (
            <Button>Comece agora mesmo</Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export const SignInButton = () => {
  return (
    <Button size={"sm"} asChild>
      <LoginLink>Comece agora mesmo</LoginLink>
    </Button>
  );
};

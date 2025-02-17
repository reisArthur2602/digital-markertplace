import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WrapperProps = {
  className?: string;
  children: ReactNode;
};

export const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={cn("w-full max-w-6xl px-4 md:px-12", className)}>
      {children}
    </div>
  );
};

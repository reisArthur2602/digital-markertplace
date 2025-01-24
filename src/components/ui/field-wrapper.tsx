import { Label } from "./label";
import { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";

type FieldWrapperProps = {
  label: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError;
};
export const FieldWrapper = ({
  label,
  children,
  error,
  className,
}: FieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { useFormContext } from "react-hook-form";

import { Code, Globe, LucideIcon, Regex } from "lucide-react";
import { cn } from "@/lib/utils";

export type CategoryTypes = "template" | "icons" | "uikits";

type CategoryCardData = {
  type: CategoryTypes;
  title: string;
  icon: LucideIcon;
};

const CATEGORIES: CategoryCardData[] = [
  { title: "Templates", type: "template", icon: Code },
  { title: "Ícones", type: "icons", icon: Regex },
  { title: "UI Kits", type: "uikits", icon: Globe },
];

export const CategoryPicker = () => {
  const {
    control,
    formState: { isSubmitting },
    getValues,
  } = useFormContext();

  const isSelected = (type: CategoryTypes) => type === getValues("category");

  return (
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Categoria</FormLabel>
          <FormControl>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {CATEGORIES.map((category) => (
                <button
                  type="button"
                  key={category.type}
                  className={cn(
                    "space-y-4 rounded-lg border p-6 shadow-sm transition-colors",
                    isSelected(category.type) &&
                      "border-primary font-medium text-primary",
                  )}
                  disabled={isSubmitting}
                  onClick={() => field.onChange(category.type)}
                >
                  <category.icon size={32} />
                  <div className="text-start text-sm">{category.title}</div>
                </button>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

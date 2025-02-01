import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../ui/form";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { CategoryTypes } from "@prisma/client";
import { CATEGORIES } from "./constants";

export const CategoryPickerField = () => {
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

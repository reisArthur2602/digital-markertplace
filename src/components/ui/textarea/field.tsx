import React, { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Textarea } from "./primitive";

type TextareaFieldProps = ComponentProps<"textarea"> & {
  name: string;
  label?: string;
  required?: boolean;
};

export const TextareaField = ({
  name,
  label,
  required,
  ...rest
}: TextareaFieldProps) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required && "Campo obrigatório" }}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea {...rest} {...field} disabled={isSubmitting} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

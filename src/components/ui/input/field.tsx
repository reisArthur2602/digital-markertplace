import React, { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "./primitive";

type InputFieldProps = ComponentProps<"input"> & {
  name: string;
  label?: string;
  required?: boolean;
};

export const InputField = ({
  name,
  label,
  required,
  ...rest
}: InputFieldProps) => {
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
            <Input {...rest} {...field} disabled={isSubmitting} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

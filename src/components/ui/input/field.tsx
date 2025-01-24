import { ComponentProps } from "react";
import { Input } from ".";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};

export const InputField = ({
  label,
  name,
  required,

  containerClassName,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required && "Campo obrigatório" }}
      render={({ field, fieldState: { error } }) => (
        <FieldWrapper
          label={label}
          error={error}
          className={containerClassName}
        >
          <Input {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
};

"use client";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { useForm } from "react-hook-form";
import { CategoryPickerField } from "./field/category-picker";
import { TextareaField } from "@/components/ui/textarea/field";
import { DropzoneFileField } from "./field/dropzone-files";
import { Button } from "@/components/ui/button";
import { CategoryTypes } from "@prisma/client";

type FormData = {
  name: string;
  subtitle: string;
  category: CategoryTypes;
  description: string;
  price: number;
  image_url: string;
  product_url: string;
};

export const SellForm = () => {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      subtitle: "",
      price: 1,
      category: "TEMPLATE",
      description: "",
      image_url: "",
      product_url: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField
            name="name"
            label="Nome"
            placeholder="Nome do produto"
            required
          />
          <InputField name="price" label="Preço" type="number" required />
        </div>
        <InputField
          name="subtitle"
          label="Subtítulo"
          placeholder="Subtítulo do produto"
          required
        />
        <CategoryPickerField />
        <TextareaField
          name="description"
          label="Descrição"
          placeholder="Descreva o seu produto"
          className="min-h-[120px] resize-none"
          required
        />
        <DropzoneFileField
          label="Imagem"
          endpoint="imageUploader"
          name="image_url"
        />

        <DropzoneFileField
          label="Produto"
          endpoint="productFileUpload"
          name="product_url"
        />

        <Button>Crie seu produto</Button>
      </form>
    </Form>
  );
};

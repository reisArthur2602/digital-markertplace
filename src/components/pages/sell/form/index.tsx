"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { useForm } from "react-hook-form";
import { CategoryPickerField } from "./field/category-picker";
import { TextareaField } from "@/components/ui/textarea/field";
import { DropzoneFileField } from "./field/dropzone-files";
import { Button } from "@/components/ui/button";

import { CreateProductSchema, CreateProductSchemaType } from "./schemas";
import { createProduct } from "@/db/product/actions";
import { toast } from "sonner";

export const SellForm = () => {
  const form = useForm<CreateProductSchemaType>({
    defaultValues: {
      name: "",
      subtitle: "",
      price: 0,
      category: "TEMPLATE",
      description: "",
      image_url: [],
      product_url: "",
    },
    resolver: zodResolver(CreateProductSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await createProduct(data)
      .then(() => toast.success("O produto foi criado com sucesso"))
      .catch(() => {
        toast.error("Ops... algo deu errado!");
      });
  });

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField name="name" label="Nome" placeholder="Nome do produto" />
          <InputField name="price" label="Preço" type="number" />
        </div>
        <InputField
          name="subtitle"
          label="Subtítulo"
          placeholder="Subtítulo do produto"
        />
        <CategoryPickerField />
        <TextareaField
          name="description"
          label="Descrição"
          placeholder="Descreva o seu produto"
          className="min-h-[120px] resize-none"
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

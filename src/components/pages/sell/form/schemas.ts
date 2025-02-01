import { CategoryTypes } from "@prisma/client";
import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "O campo deve ter no mínimo 4 caracteres" }),
  subtitle: z
    .string()
    .trim()
    .min(4, { message: "O campo deve ter no mínimo 4 caracteres" }),
  description: z
    .string()
    .trim()
    .min(4, { message: "O campo deve ter no mínimo 4 caracteres" }),
  image_url: z.array(z.string()).min(1, { message: "Adicione uma imagem" }),
  product_url: z.string().min(1, { message: "Adicione um arquivo" }),
  price: z.coerce
    .number()
    .min(1, { message: "O preço deve custar no mínimo R$ 5.00" }),
  category: z.nativeEnum(CategoryTypes),
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;

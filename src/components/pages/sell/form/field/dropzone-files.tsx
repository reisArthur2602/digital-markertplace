"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../ui/form";
import { useFormContext } from "react-hook-form";
import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";

type DropzoneFieldProps = {
  name: string;
  label?: string;
  endpoint: "imageUploader" | "productFileUpload";
};

export const DropzoneFileField = ({
  name,
  label,
  endpoint,
}: DropzoneFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: "Campo obrigatório" }}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <UploadDropzone
              content={{
                label: "Arraste e solte o arquivo ou clique para fazer upload",
              }}
              className="min-h-72 border-2 border-muted-foreground/15 ut-button:cursor-pointer ut-button:bg-primary ut-button:text-sm ut-label:w-full ut-button:ut-readying:bg-primary/50"
              endpoint={endpoint}
              onClientUploadComplete={(res) => {
                if (endpoint === "imageUploader") {
                  const images = res.map((r) => r.url);
                  field.onChange(images);
                  console.log(images);
                  return;
                }
                const file = res[0].url;
                field.onChange(file);
                toast.success("Upload realizado com sucesso");
              }}
              onUploadError={(error) => {
                toast.error(error.message);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

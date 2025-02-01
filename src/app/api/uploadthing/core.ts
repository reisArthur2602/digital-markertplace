import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const authMiddleware = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new UploadThingError("Unauthorized");

  return { userId: user.id };
};

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 5,
    },
  })
    .middleware(authMiddleware)
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userId };
    }),

  productFileUpload: f({
    blob: { maxFileCount: 1, maxFileSize: "1GB" },
  })
    .middleware(async ({ files }) => {
      const allowedTypes = ["application/zip", "application/x-zip-compressed"];

      if (!allowedTypes.includes(files[0].type))
        throw new UploadThingError("Somente o formato ZIP é permitido");

      return await authMiddleware();
    })
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

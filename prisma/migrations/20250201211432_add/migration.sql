-- CreateEnum
CREATE TYPE "CategoryTypes" AS ENUM ('TEMPLATE', 'ICONS', 'UIKITS');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" "CategoryTypes" NOT NULL,
    "description" TEXT NOT NULL,
    "product_url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

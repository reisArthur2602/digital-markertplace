"use server";
import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const createProduct = async (data: Prisma.ProductCreateInput) => {
  await db.product.create({ data });
};

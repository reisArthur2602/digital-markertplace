import { db } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("User not found");

  const existingUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!existingUser) {
    await db.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.given_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ?? `https//avatar.vercel.sh/${user.given_name}`,
      },
    });
  }
  const indexPageURL = "http://localhost:3000";

  return NextResponse.redirect(indexPageURL);
}

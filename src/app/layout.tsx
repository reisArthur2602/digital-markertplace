import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/pages/home/nav-bar";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "./api/uploadthing/core";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Marketplace",
  description: "Digital Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter} antialiased`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

        <div className="mx-auto grid w-full max-w-5xl px-4 md:px-8">
          <Navbar />
          <main className="py-4 md:py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

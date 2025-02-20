import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BearPlace",
  description: "Bear Place 🐻‍❄️ - Your Digital Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("h-full antialiased", inter.className)}>
        {children}
      </body>
    </html>
  );
}

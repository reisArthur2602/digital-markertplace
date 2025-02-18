import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

import { NavBar } from "@/components/NavBar";
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
      <body className={cn("h-full font-sans antialiased", inter.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

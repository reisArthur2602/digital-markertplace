import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/pages/home/nav-bar";

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
    <html lang="en">
      <body className={`${inter} antialiased`}>
        <div className="mx-auto grid w-full max-w-6xl px-4 md:px-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

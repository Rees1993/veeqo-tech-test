import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Free Amazon Inventory Management Software | Veeqo UK",
  description:
    "British businesses can now manage and ship their Amazon orders using our FREE Amazon-certified multichannel integration software. Start shipping today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-oxford-blue text-white", poppins.className)}>{children}</body>
    </html>
  );
}

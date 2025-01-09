import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { dmSans } from "@/utils/font";

export const metadata: Metadata = {
  title: "Job app",
  description: "Discover your jobs here",
  keywords: ["jobs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}  antialiased`}>
        {children}
       
      </body>
    </html>
  );
}

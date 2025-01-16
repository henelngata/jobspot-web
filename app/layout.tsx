import type { Metadata } from "next";
import "./globals.css";
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

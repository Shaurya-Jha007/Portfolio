import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya's Portfolio",
  description: "Shaurya's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[rgb(36,36,36)] text-white">{children}</body>
    </html>
  );
}

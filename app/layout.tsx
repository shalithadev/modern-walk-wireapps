import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { roboto, roboto_mono } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "The fashion retail store for the modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto_mono.variable,
          roboto.variable,
          "font-sans min-h-screen"
        )}
      >
        <Header title="Modern Walk" />
        {children}
      </body>
    </html>
  );
}

import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Academia ADM - Alto do Mourao",
  description:
    "Academia ADM - Alto do Mourao. Força. Foco. Resultado. Equipamentos modernos, profissionais qualificados e ambiente motivador.",
};

export const viewport: Viewport = {
  themeColor: "#d32f2f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

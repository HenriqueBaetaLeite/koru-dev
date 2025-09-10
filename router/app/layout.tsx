import "./globals.css"; // Estilos globais
import type { Metadata } from "next";
import React from "react";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Roteamento Avançado Next.js",
  description:
    "Aprendendo roteamento e layouts avançados no Next.js 15 com TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";
import MenuComponente from "@/components/menu";


export const metadata: Metadata = {
  title: "Aplicação em Next",
  description: "Criado para estudo/atualização em Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <MenuComponente />
        {children}
      </body>
    </html>
  );
}

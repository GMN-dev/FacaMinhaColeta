import type { Metadata } from "next";
import "./globals.css";
import ModalContextProvider from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Faça Minha Coleta App",
  description: "Coleta de Equipamentos em Brasilia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalContextProvider>
          {children}
        </ModalContextProvider>
      </body>
    </html>
  );
}

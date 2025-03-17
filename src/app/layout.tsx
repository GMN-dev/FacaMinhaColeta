import type { Metadata } from "next";
import ModalContextProvider from "@/context/AppContext";
import "./globals.css"
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

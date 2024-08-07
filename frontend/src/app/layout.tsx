import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ContextProvider from "./context/Contexto";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "180 Funcional",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <ContextProvider>
              <Nav />
              {children}
              <Footer />
            </ContextProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

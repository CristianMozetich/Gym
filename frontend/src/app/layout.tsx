import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ClientWrapper from "./context/ClientWrapper";
import Script from "next/script";
import Image from "next/image";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "180 Funcional",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <ClientWrapper>
              <Nav />
              <main className="flex-grow">{children}</main>
              <Footer />
            </ClientWrapper>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}


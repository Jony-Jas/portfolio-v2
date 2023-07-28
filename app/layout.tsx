import "./globals.css";
import { roboto, gumela } from "@/utils/fonts";
import type { Metadata } from "next";

import Providers from "@/components/Providers";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${gumela.variable}`}>
      <body>
        <Providers>
          {/* <SplashScreen /> */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
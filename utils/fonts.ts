import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const gumela = localFont({
  src: "/fonts/gumela.ttf",
  display: "swap",
  variable: "--font-gumela",
});

export const yellowtail = localFont({
  src: "/fonts/yellowtail.otf",
  display: "swap",
  variable: "--font-yellowtail",
});

import type { Metadata } from "next";
import { Montserrat, Open_Sans, Abril_Fatface, Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name - Professional Football Coach",
  description: "Official website of Your Name, Professional Football Coach showcasing experience, philosophy, and achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${abrilFatface.variable} ${roboto.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Jura } from "next/font/google";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "North Eastern Enterprise",
  description: "Trusted Surgical Goods Distributer in North-East India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jura.className}>
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  );
}

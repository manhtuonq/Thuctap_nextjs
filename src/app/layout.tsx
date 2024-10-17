import 'bootstrap/dist/css/bootstrap.css'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RouTine",
  description: "Generated by RouTine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
       {children}
     <Footer></Footer>
       
        </body>
    </html>
  );
}

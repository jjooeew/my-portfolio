import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const rubik = Rubik({
  subsets: ['latin'],
  // variable: "--font-inter"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="bg-black">
        <Navbar />
        <main className="bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}

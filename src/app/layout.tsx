"use client";

// import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  // variable: "--font-inter"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className={rubik.className}>
      <body className="bg-black">
        <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <Navbar />
            <main className="bg-black">{children}</main>
          </motion.div>
        </AnimatePresence>
        </div>
      </body>
    </html>
  );
}

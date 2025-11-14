"use client";

import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({ children }: 
  Readonly<{ children: React.ReactNode; }>) {
  // const pathname = usePathname();

  return (
    <html lang="en" className={rubik.className}>
      <body className="relative min-h-dvh overflow-x-hidden bg-black text-white antialiased">
        <div className="relative z-10">
        {/* <AnimatePresence mode="wait" initial={false}> */}
          {/* <motion.div
            key={pathname}
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.25 }}
          > */}
            <Navbar />
            <main>{children}</main>
          {/* </motion.div> */}
        {/* </AnimatePresence> */}
        </div>
      </body>
    </html>
  );
}

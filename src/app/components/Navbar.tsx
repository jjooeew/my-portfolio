"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { FolderGit2, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  // variable: "--font-inter"
});

export default function Navbar() {
  const pathname = usePathname();
  // const isHome = pathname === "/";
  // const isProjects = pathname === "/projects";
  // const isAbout = pathname === "/about";

  const navLinks: Record<
    string,
    { href: string; label: string; icon: React.ElementType }
  > = {
    "/projects": { href: "/about", label: "About Me", icon: UserRound },
    "/about": { href: "/projects", label: "Projects", icon: FolderGit2 },
  };

  const link = navLinks[pathname];

  return (
    <nav
      className={`${rubik.className} sticky top-0 z-50 w-full h-24 bg-black text-white flex items-center justify-between p-8 pt-12`}
    >
      <motion.div
        className="flex items-center"
        key={pathname}
        initial={{ opacity: 1, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 8 }}
        whileHover={{ y: -4 }}
      >
        <Link href="/">
          <Image
            src="/images/melting-smiley.png"
            alt="Melting smiley"
            width={50}
            height={50}
            className="object-contain transition-transform duration:300 hover:scale-105"
          />
        </Link>
      </motion.div>

      <div className="flex items-center gap-1">
        {link && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 600, damping: 70 }}
          >
            <Link href={link.href} className="rounded-md px-3 py-2 text-sm">
              <span className="flex flex-col items-center hover:text-white/70 rounded p-2">
                <link.icon size={60} />
                {link.label}
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

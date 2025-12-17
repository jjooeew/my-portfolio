"use client";

import Link from "next/link";
import NavLink from "../ui/NavLink";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = {
  id: string;
  href: string;
  label: string;
};


export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname()



  useEffect(() => {
    setMenu(false);
  }, [pathname])

  const navLinks: NavLink[] = [
    { id: "01", href: "/", label: "home" },
    { id: "02", href: "/about", label: "about me" },
    { id: "03", href: "/projects", label: "projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-gray-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-accent-500 transition-colors font-serif"
        >
          JW.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ id, href, label }) => (
            <NavLink key={id} href={href} label={label} id={id} />
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setMenu(!menu)} className="p-2 text-gray-800">
            {menu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menu && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map(({ id, href, label }) => (
              <NavLink key={id} href={href} label={label} id={id} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

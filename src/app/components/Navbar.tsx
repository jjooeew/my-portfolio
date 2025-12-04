// "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./ui/NavLink";

type NavLink = {
  id: string;
  href: string;
  label: string;
}


export default function Navbar() {

  const navLinks: NavLink[] = [
    { id: '01', href: "/", label: "home" },
    { id: '02', href: "/about", label: "about me" },
    { id: '03', href: "/projects", label: "projects" },
  ]
  
  return (

    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-gray-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo / Name */}
          <Link href='/' className="text-xl font-bold tracking-tight hover:text-accent-500 transition-colors font-serif">
            JW.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, href, label}) => (
              <NavLink
                key={id}
                href={href}
                label={label}
                id={id}
              />
            ))}
          </div>
      </div>
    </nav>

  );
}

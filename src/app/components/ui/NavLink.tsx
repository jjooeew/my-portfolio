"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  id: string;
  label: string;
  className?: string;
};

export default function NavLink({
  href,
  id,
  label,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        group text-sm font-medium tracking-wide transition-colors duration-200
        flex items-center gap-1
        ${
          isActive
            ? "text-accent-500"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        }
        ${className}
      `}
    >
      <span className="text-[10px] opacity-50 font-mono group-hover:text-accent-500 transition-colors">
        {id}
      </span>

      <span
        className={`
         border-b-2 pb-0.5 transition-all
          ${
            isActive
              ? "border-accent-500"
              : "border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600"
          }              
            `}
      >
        {label}
      </span>
    </Link>
  );
}

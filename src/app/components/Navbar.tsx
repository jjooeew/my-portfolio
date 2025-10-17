"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({
  subsets: ["latin"],
  // variable: "--font-inter"
});

export default function Navbar() {
  return (
    <nav
      className={`${rubik.className} w-full h-24 bg-black text-white flex items-center justify-between p-8`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/melting-smiley.png"
            alt="Melting smiley"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
      <ul className="flex space-x-8">
        {/* <li>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

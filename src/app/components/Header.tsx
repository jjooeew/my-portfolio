import { Rubik } from "next/font/google";
import { FolderGit2, UserRound } from "lucide-react";
import Link from "next/link";
// import styles from "./Header.module.css";

const rubik = Rubik({
  subsets: ["latin"],
  // variable: "--font-inter"
});

export default function Header() {
  return (
    <section
      className={`${rubik.className} h-screen bg-black text-white p-8 flex flex-col gap-5 items-center`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4">
          <h1 className="typewriter text-8xl font-extrabold text-emerald-400 drop-shadow-[0_0_11px_rgba(16,185,129,0.8)]">
            Hello World
          </h1>
          <h1 className="text-3xl">Welcome to My Portfolio</h1>
        </div>
        <div className="flex justify-center h-20 items-center">
          <p className="text-gray-300">Joe Walker, Full Stack Developer</p>
        </div>
      </div>
      <div className="flex justify-evenly w-screen">
        <Link href="/projects" className="hover:text-gray-300 transition w-1/3 flex flex-col items-center">
            <FolderGit2 className="w-40 h-40"/>
            <p className="text-2xl">Projects</p>
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition w-1/3 flex flex-col items-center hover:drop-shadow-drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]" >
          <UserRound className="w-40 h-40"/>
          <p className="text-2xl">About Me</p>
        </Link>
      </div>
    </section>
  );
}

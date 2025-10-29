'use client'

import { Rubik } from "next/font/google";
import ProjectDisplay from "../components/ProjectDisplay";
import { projects } from "./projects.data";
import { AnimatePresence, motion } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  // variable: "--font-inter"
});

export default function ProjectsPage() {
  return (
    <motion.main
      className={`${rubik.className} min-h-dvh flex flex-col bg-black text-white pt-12 pb-10`}
    //   initial={{ opacity: 0, y: -30 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      <h1 className="text-8xl self-center mb-10">Projects</h1>

      <div className="self-center w-5/6 flex flex-col gap-5">
        {projects.map((p) => (
          <ProjectDisplay key={p.title} {...p} />
        ))}
      </div>
    </motion.main>
  );
}

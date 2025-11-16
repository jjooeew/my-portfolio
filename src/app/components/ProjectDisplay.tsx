"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "./Modal";
import ProjectDetail from "./ProjectDetail";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string; // Live/demo link
  repo?: string; // GitHub link
  images?: string[]; // Optional cover image (public/…)
};

export default function ProjectDisplay({
  title,
  description,
  tags = [],
  href,
  repo,
  images,
}: ProjectCardProps) {


  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <motion.article
      className="flex flex-col gap-5 border-1 border-white rounded-lg p-3 w-full"
      whileHover={{ y: -4 }}
      // initial={{ opacity: 0, y: -15 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
    >
      <header>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <h2 className="text-3xl inline pl-2">{title}</h2>
        </a>

        <ul className="flex gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 mt-2"
            >
              {t}
            </li>
          ))}
        </ul>
      </header>

      <div className="pl-2">{description}</div>
      <div className="flex justify-between">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-2 text-sm text-white/80 hover:underline"
        >
          <p>GitHub Repo</p>
        </a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red-500 h-6 w-28  rounded-lg"
          onClick={() => (modalOpen ? close() : open())}
        >
          See more
        </motion.button>

        {modalOpen && <Modal text={"Filler Text"} handleClose={close}>
          <ProjectDetail title={title} images={images} />
        </Modal>}

      </div>
    </motion.article>
  );
}

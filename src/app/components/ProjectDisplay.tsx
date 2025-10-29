"use client";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string; // Live/demo link
  repo?: string; // GitHub link
  image?: string; // Optional cover image (public/…)
};

export default function ProjectDisplay({
  title,
  description,
  tags = [],
  href,
  repo,
  image,
}: ProjectCardProps) {
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
            <li key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 mt-2">
              {t}
            </li>
          ))}
        </ul>
      </header>

      <div className="pl-2">{description}</div>

      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="pl-2 text-sm text-white/80 hover:underline"
      >
        <p>GitHub Repo</p>
      </a>
    </motion.article>
  );
}

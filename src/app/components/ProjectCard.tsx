"use client";

import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string; // Live/demo link
  repo?: string; // GitHub link
  images?: string[]; // Optional cover image (public/…)
  category?: string[];
};

export default function ProjectCard({
  title,
  description,
  tags = [],
  // href,
  repo,
  // images,
  category = [],
}: ProjectCardProps) {


  return (
    <div className="group relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-neutral-900 relative">
        {/* <img
          src={images[]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        /> */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
      </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 mb-1">
              {category.map((c) => (
                <span key={c} className="text-[10px] uppercase tracking-wider font-semibold text-accent-500 bg-accent-500/10 px-2 py-0.5 rounded-full">
                  {c}
                </span>
              ))}
            </div>

            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-accent-500"
                  aria-label="View Live"
                >
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
            {title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-50 dark:border-neutral-700">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-gray-500 dark:text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

      </div>
    </div>

    
  );
}

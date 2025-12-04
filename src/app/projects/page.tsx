"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "./projects.data";
// import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) =>
    filter === "All" ? true : p.category?.includes(filter)
  );

  const categories: ("All" | "Web" | "Mobile")[] = ["All", "Web", "Mobile"];

  return (
    <div className="space-y-12">
      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          A collection of web applications, mobile apps, and experiments. I
          believe in building software that is not only functional but also
          intuitive and delightful to use.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 pb-4 border-b border-gray-100 dark:border-neutral-800 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
            ${
              filter === cat
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-neutral-800 dark:text-gray-400 dark:hover:bg-neutral-700"
            }
          `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <div key={p.title}>
            <Link href={`/projects`} />
            <ProjectCard key={p.title} {...p} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-gray-500">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import ProjectCard from "./components/features/ProjectCard";
import { projects } from "./projects/projects.data";

export default function Home() {
  return (
    <main>
      <div className="space-y-24">
        <section className="flex flex-col justify-center min-h-[60vh] max-w-3xl">
          <span className="text-accent-500 font-bold tracking-widest text-sm mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            HELLO WORLD, MY NAME IS JOE
          </span>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            I build web and mobile experiences.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Full-stack developer specialising in React, React Native, and both
            SQL and NoSQL databases. I focus on accessibility, performance, and
            crafting polished user interfaces.
          </p>
        </section>

        <section className="animate-in fade-in duration-1000 delay-500">
          <div className="flex justify-between items-baseline mb-10 border-b border-gray-100 dark:border-neutral-800 pb-4">
            <h2 className="text-2xl font-serif font-medium">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-gray-500 hover:text-accent-500 transition-colors hidden md:block"
            >
              See all projects &rarr;
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title}>
              <Link href={`/projects`} />
              <ProjectCard key={p.title} {...p} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

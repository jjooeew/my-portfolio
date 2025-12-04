import Link from "next/link";
import { projects } from "../projects/projects.data";
import ProjectCard from "./ProjectCard";

export default function Header() {
  return (
    <div className="space-y-24">
      <section className="flex flex-col justify-center min-h-[60vh] max-w-3xl">
        <span className="text-accent-500 font-bold tracking-widest text-sm mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
          HELLO WORLD, MY NAME IS JOE
        </span>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          I build web and mobile experiences.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Full-stack developer specialising in React, React Native, and both SQL
          and NoSQL databases. I focus on accessibility, performance, and
          crafting polished user interfaces.
        </p>
      </section>

      <section className="animate-in fade-in duration-1000 delay-500">
        <div className="flex justify-between items-baseline mb-10 border-b border-gray-100 dark:border-neutral-800 pb-4">
          <h2 className="text-2xl font-serif font-medium">Featured Projects</h2>
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

    // <section
    //   className={`${rubik.className} h-screen p-8 flex flex-col gap-5 items-center`}
    // >
    //   <div className="flex flex-col gap-5">
    //     <div className="flex flex-col items-center gap-4">
    //       <h1 className="typewriter text-8xl font-extrabold text-emerald-400 [text-shadow:_0_0_2px_black,_0_0_4px_black,_0_0_8px_black,_0_0_12px_black] drop-shadow-[0_0_11px_rgba(16,185,129,0.8)]">
    //         Hello World
    //       </h1>
    //       <h1 className="text-3xl">Welcome to My Portfolio</h1>
    //     </div>
    //     <div className="flex justify-center h-20 items-center">
    //       <p className="text-gray-300">Joe Walker, Full Stack Developer</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-evenly w-screen">
    //     <Link href="/projects" className="hover:text-gray-300 transition w-1/3 flex flex-col items-center">
    //         <FolderGit2 className="w-40 h-40"/>
    //         <p className="text-2xl">Projects</p>
    //     </Link>
    //     <Link href="/about" className="hover:text-gray-300 transition w-1/3 flex flex-col items-center hover:drop-shadow-drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]" >
    //       <UserRound className="w-40 h-40"/>
    //       <p className="text-2xl">About Me</p>
    //     </Link>
    //   </div>
    // </section>
  );
}

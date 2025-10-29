import { Rubik } from "next/font/google";

export const metadata = { title: "About Me" };


const rubik = Rubik({
  subsets: ['latin'],
  // variable: "--font-inter"
})

export default function AboutPage() {
  return (
    <main className={`${rubik.className} min-h-dvh bg-black text-white`}>
      <section className="px-4 pb-20 pt-12">
        <header className="flex flex-col mb-8 align-center">
          <h1 className="text-8xl self-center mb-5">About Me</h1>
          <p className="mt-2 text-white/70 max-w-2xl self-center text-center">
             I{"'"}m Joe Walker, a full stack developer based in Auckland, New Zealand with a diploma in software development. 
            I work with Next.js, Tailwind, React, React Native, TypeScript and dabble with others. 
            In the backend I work in SQL or NoSQL databases, RESTful APIs and am constantly learning
            new skills.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-white/10" />
              <div>
                <p className="text-lg font-semibold">Joe Walker</p>
                <p className="text-white/60 text-sm">Full-stack Developer</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="/projects"
                className="rounded-md bg-white/10 px-3 py-2 text-center text-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                View Projects
              </a>
              <a
                href="/MyCV.pdf"
                className="rounded-md border border-white/15 px-3 py-2 text-center text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Download CV
              </a>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                Core Stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Javascript", "React", "React Native", "Tailwind", "Framer Motion", "SQL", "MongoDB", "Firebase", "Python", "RESTful APIs"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="space-y-6 text-white/85 leading-relaxed">
            <p>
              My focus is on creating robust, scalable systems
              with clean, maintainable code. Over the past four years I have developed everything from small business websites and mobile apps
              to complex data-driven platforms using modern frameworks and NoSQL databases.
            </p>
            <p>
              I have worked in modern development methodologies (mainly agile) and have
              completed projects alone and as part of a team. I am goal oriented and constantly looking to improve and grow, in both software development and
              life in general. I{"'"}m currently expanding my knowledge in AI-driven applications (you can check out an example on my projects page) to ensure that
              as the technology develops, so do I.
            </p>
            <p>
              On the frontend I live in React/Next.js and Tailwind; on the backend I{"’"}m experienced with
              Node/Express and SQL or NoSQL databases. I have a particular fondness for database work.
            </p>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <div className="text-2xl font-semibold">3+</div>
                <div className="text-sm text-white/60">Active projects</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">100%</div>
                <div className="text-sm text-white/60">Dark mode enjoyer</div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

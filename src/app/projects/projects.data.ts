


export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Site",
    description:
      "Personal developer site built with Next.js (App Router), Tailwind v4, and Framer Motion.",
    tags: ["Next.js", "Tailwind v4", "Framer Motion"],
    href: "https://example.com",
    repo: "https://github.com/you/portfolio",
    image: "/images/portfolio-cover.jpg",
  },
    {
    title: "AI Job Board",
    description:
      "Typed job board with Drizzle ORM, Postgres, background jobs, and edge caching.",
    tags: ["Next.js", "Postgres", "Drizzle", "Inngest"],
    repo: "https://github.com/jjooeew/AI-Job-Board.git",
    image: "/images/jobboard-cover.jpg",
  },
  {
    title: "Pasifika Tourism Hub",
    description:
      "MERN + Firebase Auth + RN mobile client. Country/activity catalogs and role-based access.",
    tags: ["MongoDB", "Firebase Auth", "React Native"],
    repo: "https://github.com/jjooeew/Pasifika_Travel_Hub.git"
  },
]
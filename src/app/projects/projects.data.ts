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
    href: "http://localhost:3000/",
    repo: "https://github.com/jjooeew/my-portfolio.git",
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
    tags: ["MongoDB", "Firebase Auth", "Firestore", "React Native", "React"],
    repo: "https://github.com/jjooeew/Pasifika_Travel_Hub.git",
  },
  {
    title: "Toy Library Mobile App",
    description:
      "React Native + Expo SDK 54 mobile application, implements global context to manage products and cart.",
    tags: ["React Native", "Expo", "Stack Navigation", "Advanced React hooks"],
    repo: "https://github.com/jjooeew/ToyLibraryApp.git",
  },
];

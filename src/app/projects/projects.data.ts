export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  images: [string, ...string[]];
  category?: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio Site",
    description:
      "Personal developer site built with Next.js (App Router), Tailwind v4, and Framer Motion.",
    tags: ["Next.js", "Tailwind v4", "Framer Motion", "Responsive Design"],
    href: "https://joewalker.vercel.app",
    repo: "https://github.com/jjooeew/my-portfolio.git",
    images: ["/images/project_portfolio.jpg"],
    category: ["Web"],
  },
  // {
  //   title: "AI Job Board",
  //   description:
  //     "Typed job board with Drizzle ORM, Postgres, background jobs, and edge caching.",
  //   tags: ["Next.js", "Postgres", "Drizzle", "Inngest"],
  //   repo: "https://github.com/jjooeew/AI-Job-Board.git",
  //   images: ["/images/jobboard-cover.jpg"],
  //   category: ["Web"]
  // },
  // {
  //   title: "Pasifika Tourism Hub",
  //   description:
  //     "MERN + Firebase Auth + RN mobile client. Country/activity catalogs and role-based access.",
  //   tags: ["MongoDB", "Firebase Auth", "Firestore", "React Native", "React"],
  //   repo: "https://github.com/jjooeew/Pasifika_Travel_Hub.git",
  //   category: ["Web", "Mobile"]
  // },
  {
    title: "Toy Library Mobile App",
    description:
      "React Native + Expo SDK 54 mobile application, implements global context to manage products and cart.",
    tags: ["React Native", "Expo", "Stack Navigation", "Advanced React Hooks"],
    images: ["/images/project_toyapp.jpg"],
    repo: "https://github.com/jjooeew/ToyLibraryApp.git",
    category: ["Mobile"],
  },
{
    title: "Iron Kadin | Personal Trainer Site",
    description:
      "High-performance coaching platform featuring a multi-step diagnostic application system, complex state management, and a premium dark-mode aesthetic.",
    tags: ["Next.js", "Tailwind v4", "Complex State", "Responsive Design"],
    href: "ironkadin.vercel.app",
    images: ["/images/project_iron-kadin.png"],
    repo: "https://ironkadin.vercel.app",
    category: ["Web"],
},
];

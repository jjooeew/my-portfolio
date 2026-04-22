export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    code?: string;
  };
  role: string;
  images: [string, ...string[]];
  category?: string[];
};

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Portfolio Site",
    description:
      "Personal developer site built with Next.js (App Router), Tailwind v4, and Framer Motion.",
    tags: ["Next.js", "Tailwind v4", "Framer Motion", "Responsive Design"],
    links: {
      demo: "https://joewalker.vercel.app",
      code: "https://github.com/jjooeew/my-portfolio.git"
    },
    role: "Sole Developer",
    images: ["/images/portfolio-logo.png"],
    category: ["Web"],
  },
  {
    id: "leader-app",
    title: "Leader",
    description:
      "Automated receptionist and lead recovery system for NZ tradespeople. Intercepts missed calls, captures lead data in real-time, and triggers instant SMS engagement to prevent lead churn.",
    tags: ["Next.js 15", "Twilio API", "Firebase Admin SDK", "Serverless Functions", "Tailwind CSS"],
    links: {
      demo: "https://leader-self-one.vercel.app/",
      code: "https://github.com/jjooeew/leader.git" 
    },
    role: "Sole Developer",
    images: ["/images/leader-logo.png"],
    category: ["SaaS", "Web", "Mobile"],
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
    id: "toy-library",
    title: "Toy Library Mobile App",
    description:
      "React Native + Expo SDK 54 mobile application, implements global context to manage products and cart.",
    tags: ["React Native", "Expo", "Stack Navigation", "Advanced React Hooks"],
    links: {
      // demo: "https://expo.dev/@jjooeew/ToyLibraryApp",
      code: "https://github.com/jjooeew/ToyLibraryApp.git"
    },
    role: "Backend Lead",
    images: ["/images/project_toyapp.jpg"],
    category: ["Mobile"],
  },
{
    id: "iron-kadin",
    title: "Iron Kadin | Personal Trainer Site",
    description:
      "High-performance coaching platform featuring a multi-step diagnostic application system, complex state management, and a premium dark-mode aesthetic.",
    tags: ["Next.js", "Tailwind v4", "Complex State", "Responsive Design"],
    links: {
      demo: "https://ironkadin.vercel.app",
      code: "https://github.com/jjooeew/iron-kadin.git"
    },
    role: "Sole Developer",
    images: ["/images/project_iron-kadin.png"],
    category: ["Web"],
},
{
  id: "panel-guys",
  title: "The Panel Guys | Trade Services Website",
  description:
    "Conversion-focused website for a New Zealand panel and paint business, built to generate leads with fast load times, clear service positioning, and a streamlined contact system.",
  tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design", "Lead Generation"],
  links: {
    demo: "https://the-panel-guys.vercel.app/",
    code: "https://github.com/jjooeew/ThePanelGuys"
  },
  role: "Sole Developer",
  images: ["/images/panelguys-logo.png"],
  category: ["Web"],
},
{
  id: "nz-lines",
  title: "NZ Lines | Road Marking Services Website",
  description:
    "Lead-generation website for a New Zealand road marking company, focused on clear service communication, fast performance, and converting traffic into enquiries through a streamlined user experience.",
  tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design", "Lead Generation"],
  links: {
    demo: "https://nz-lines.vercel.app",
    code: "https://github.com/jjooeew/nz-lines"
  },
  role: "Sole Developer",
  images: ["/images/nzlines-logo.png"],
  category: ["Web"],
},
];

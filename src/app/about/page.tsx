import { Github, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata = { title: "About Me" };

export default function AboutPage() {
  const SKILLS = [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS", "PHP"],
    },
    {
      category: "Frameworks",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Framer Motion",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "Figma", "Vercel", "Expo", "Wordpress"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "Firebase", "Firestore"],
    },
    { category: "Workflows", items: ["Agile", "Scrum"] },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      <div className="lg:col-span-4 space-y-8">
        {/* Profile Image */}
        <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-gray-200 dark:bg-neutral-800 shadow-md">
          <Image
            src="https://picsum.photos/600/800"
            alt="Portrait"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin size={18} className="text-accent-500" />
            <span className="text-sm">Auckland, NZ</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/jjooeew"
              className="p-2 rounded-lg bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:text-accent-500 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content / Right Column */}
      <div className="lg:col-span-8 space-y-16">
        {/* Intro */}
        <section className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
            <p>{`
                          I'm Joe, a full-stack engineer passionate about creating solutions
              for individuals and businesses (and for myself). With 4+ years of
              experience in both solo and group projects, I have worked on
              everything from small, front-facing websites for tradies and small
              businesses, to large-scale applications that require SQL and NoSQL
              databases, tiered accessability and admin dashboards.
            `}</p>
            <p>{`
              My philosophy is simple: user experience comes first. I strive to
              write clean, maintainable code that powers interfaces feeling
              instantaneous and natural. I'm currently obsessed with learning animation
              libraries and understanding different ways to implement and harness AI.
            `}</p>
            {/* <p>{`
              When I'm not coding, you can find me hiking the coast, brewing
              specialty coffee, or tinkering with mechanical keyboards.
            `}</p> */}
          </div>
        </section>

        {/* Currently
        <section className="border-t border-gray-100 dark:border-neutral-800 pt-10">
          <h2 className="font-serif text-2xl font-medium mb-6 text-gray-900 dark:text-white">Currently</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
             <li>Building high-performance dashboards at <strong className="text-gray-900 dark:text-gray-200 font-medium">TechCorp</strong></li>
             <li>Exploring Rust and WebAssembly for image processing</li>
             <li>Reading "The Design of Everyday Things" by Don Norman</li>
          </ul>
        </section> */}

        {/* Skills */}
        <section className="border-t border-gray-100 dark:border-neutral-800 pt-10">
          <h2 className="font-serif text-2xl font-medium mb-8 text-gray-900 dark:text-white">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}

        {/* Maybe make this part bring up a contact card modal */}
        <section className="border-t border-gray-100 dark:border-neutral-800 pt-10 pb-10">
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-2xl font-serif font-medium text-gray-900 dark:text-white hover:text-accent-500 transition-colors"
          >
            Say hello
            <Mail
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <p className="mt-2 text-gray-500">Open for work.</p>
        </section>
      </div>
    </div>
  );
}

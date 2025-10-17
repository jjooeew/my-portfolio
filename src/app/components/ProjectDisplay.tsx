"use client";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string; // Live/demo link
  repo?: string; // GitHub link
  image?: string; // Optional cover image (public/…)
};

export default function ProjectDisplay({
  title,
  description,
  tags = [],
  href,
  repo,
  image,
}: ProjectCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" >
      <article className="flex flex-col gap-5 border-1 border-white rounded-lg p-3 w-full">
        <header>
          <h2 className="text-3xl pb-1">{title}</h2>
          <ul className="flex gap-2 text-gray-300">
            {tags.map((t) => (
              <li key={t} className="">
                {t} |
              </li>
            ))}
          </ul>
        </header>
        <div className="">{description}</div>
        <a href={repo} target="_blank" rel="noopener noreferrer" >
            <p>GitHub Repo</p>
        </a>
      </article>
    </a>
  );
}

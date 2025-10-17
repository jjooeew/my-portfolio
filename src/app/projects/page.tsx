import { Rubik } from "next/font/google"
import ProjectDisplay from "../components/ProjectDisplay"
import { projects } from "./projects.data"


const rubik = Rubik({
  subsets: ['latin'],
  // variable: "--font-inter"
})

export default function ProjectsPage() {
    return (
        <div className={`${rubik.className} flex flex-col bg-black min-h-screen text-white pb-10`}>
            <h1 className="text-8xl self-center mb-10">
                Projects
            </h1>

            <div className="self-center w-5/6 flex flex-col gap-5">
                {projects.map((p) => (
                    <ProjectDisplay key={p.title} {...p} />
                ))}
            </div>
        </div>
    )
}
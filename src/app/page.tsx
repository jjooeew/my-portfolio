import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
}

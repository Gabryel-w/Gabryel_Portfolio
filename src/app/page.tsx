
import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {


  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <section className="z-20" id="Inicio">
          <Hero />
        </section>

        <Header />
        <section className="z-20" id="Sobre">
          <AboutSection />
        </section>
        <Skills />
        <section className="z-20" id="Projetos">
          <Projects />
        </section>

      </div>

    </main>
  );
}

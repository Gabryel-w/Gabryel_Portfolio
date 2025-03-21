
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SoftSkills from "@/components/SoftSkills";
import CareerTimeline from "@/components/CareerTimeline";
import FAQSection from "@/components/Faq";

export default function Home() {


  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Header />
        <section id="Inicio">
          <Hero />
        </section>
        
        <section className="z-20" id="Sobre">
          <AboutSection />
        </section>

        <CareerTimeline />

        <SoftSkills />

        <Skills />
        <section className="z-20" id="Projetos">
          <Projects />
        </section>

        <FAQSection />

        <section className="z-20" id="Contato">
          <ContactForm />
        </section>

        <Footer />
      </div>

    </main>
  );
}

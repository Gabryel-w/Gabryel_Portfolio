
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {


  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />
        <Header />
        <About />
      </div>

    </main>
  );
}

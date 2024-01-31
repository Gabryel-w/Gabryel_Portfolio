
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {


  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Header />
      </div>

    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  interface Particle {
    id: number;
    x: number;
    y: number;
    speed: number;
  }

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 2 + 1,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-gray-900 to-black text-white px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white opacity-50 rounded-full"
            initial={{ y: particle.y, x: particle.x, opacity: 0 }}
            animate={{ y: [particle.y, window.innerHeight + 20], opacity: [0.5, 0] }}
            transition={{ duration: particle.speed, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Olá, eu sou o <span className="text-blue-400">Gabryel Willers</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Desenvolvedor Full Stack apaixonado por criar experiências inovadoras e impactantes com tecnologia moderna.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col md:flex-row items-center gap-4"
      >
        <button
          onClick={(e) => handleSmoothScroll(e, '#Projetos')}
          className="px-6 py-3 text-lg bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all flex items-center gap-2"
        >
          Ver Projetos <ArrowRight size={20} />
        </button>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/gabryel-willers-124426238/" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all">
            <Linkedin size={24} className="text-white" />
          </a>
          <a href="https://github.com/Gabryel-w" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all">
            <Github size={24} className="text-white" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

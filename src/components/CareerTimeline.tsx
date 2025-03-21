"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Ciência da Computação",
    company: "URI Santo Ângelo",
    date: "2022 - 2026",
  },
  {
    title: "Téc. em Informática p/ Internet",
    company: "Senac RS",
    date: "2020 - 2022",
  },
  {
    title: "Estágio em Desenvolvimento",
    company: "Compass UOL",
    date: "Dezembro 2021 - Abril 2022",
  },
  {
    title: "Desenvolvedor Front End",
    company: "Compass UOL",
    date: "Novembro 2022 - Setembro 2023",
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Solution/Aliare",
    date: "Março 2024 - Março 2025",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16" id="timeline">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
          Minha Jornada
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl text-center">
          Um breve resumo da minha trajetória acadêmica e profissional no desenvolvimento de software.
        </p>

        <div className="hidden md:flex flex-row items-center justify-center gap-12 relative w-full max-w-5xl">
          <div className="absolute w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 top-1/2 transform -translate-y-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg w-64 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index < 2 ? (
                <GraduationCap className="text-blue-500 w-8 h-8 mb-2" />
              ) : (
                <Briefcase className="text-blue-500 w-8 h-8 mb-2" />
              )}
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <span className="text-gray-500 text-sm mt-2">{exp.date}</span>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex flex-col items-center gap-6 relative w-full max-w-xs">
          <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 left-1/2 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg w-64 transform hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index < 2 ? (
                <GraduationCap className="text-blue-500 w-8 h-8 mb-2" />
              ) : (
                <Briefcase className="text-blue-500 w-8 h-8 mb-2" />
              )}
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <span className="text-gray-500 text-sm mt-2">{exp.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
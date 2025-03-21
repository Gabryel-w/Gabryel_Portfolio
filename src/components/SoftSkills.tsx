"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skills = [
  "Liderança",
  "Trabalho em equipe",
  "Comunicação eficaz",
  "Pensamento crítico",
  "Resolução de problemas",
  "Gestão de tempo",
  "Adaptabilidade",
  "Criatividade",
  "Inteligência emocional",
  "Proatividade",
  "Tomada de decisão",
  "Empatia"
];

const softSkillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SoftSkills = () => {
  return (
    <section className="text-gray-900 bg-gray-100 py-12" id="skills">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
          Soft Skills
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl text-center">
          Além de conhecimentos técnicos, acredito que habilidades interpessoais são essenciais
          para trabalhar em equipe e entregar resultados de alta qualidade.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md"
              variants={softSkillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckCircle className="text-blue-500 w-6 h-6" />
              <span className="text-lg font-medium text-gray-800">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;

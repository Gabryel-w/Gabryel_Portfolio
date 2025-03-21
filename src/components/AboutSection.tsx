"use client";

import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  title: string;
  id: string;
  content: React.ReactNode;
}

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
  className?: string;
}

const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, children, className = "" }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 font-medium transition-colors ${
        active ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-800"
      } ${className}`}
    >
      {children}
    </button>
  );
};

const TAB_DATA: Tab[] = [
  {
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li className="my-2">Bacharel em Ciência da Computação, URI Santo Ângelo (2022 - 2026)</li>
        <li className="my-2">Técnico em Informática para a Internet, Senac RS (2020 - 2022)</li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li className="my-2">AWS Technical Professional</li>
        <li className="my-2">AWS Sales Accreditation Business</li>
        <li className="my-2">AWS Cloud Economics</li>
        <li className="my-2">Oracle Cloud Infrastructure 2023 Foundations Associate</li>
        <li className="my-2">AI-Assisted Professional Certification - Compass UOL</li>
      </ul>
    ),
  },
  {
    title: "Experiência",
    id: "experience",
    content: (
      <ul className="list-disc pl-4">
        <li className="my-2">Desenvolvedor Full Stack | Solution/Aliare (Março 2024 - Março 2025)</li>
        <li className="my-2">Desenvolvedor Front End | Compass UOL (Novembro 2022 - Setembro 2023)</li>
        <li className="my-2">Estágio em Desenvolvimento | Compass UOL (Dezembro 2021 - Abril 2022)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-900 bg-gray-100 py-12" id="about">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">Sobre Mim</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl text-center">
          Sou um Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Tenho experiência
          com diversas tecnologias modernas e foco em criar soluções eficientes e escaláveis. 
          Atualmente, trabalho desenvolvendo aplicações de alto impacto e buscando sempre aprimorar minhas habilidades.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-500">02+</h3>
            <p className="text-gray-700">Anos de experiência</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-500">20+</h3>
            <p className="text-gray-700">Projetos completos</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-500">02+</h3>
            <p className="text-gray-700">Empresas trabalhadas</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-500">22+</h3>
            <p className="text-gray-700">Tecnologias dominadas</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-6 gap-4 text-gray-800">
          {TAB_DATA.map((tabData) => (
            <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
              className="text-gray-800"
            >
              {tabData.title}
            </TabButton>
          ))}
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {isPending ? <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto" /> : TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
        <a
          href="/GabryelWillers-CV.pdf"
          download
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Baixar CV
        </a>
      </div>
    </section>
  );
};

export default AboutSection;

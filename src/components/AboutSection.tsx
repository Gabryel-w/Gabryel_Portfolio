"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface Tab {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: Tab[] = [
  {
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="my-2">Bacharel em Ciência da Computação, URI Santo Ângelo / Março de 2022 - esperado 2026 </li>
        <li className="my-2">Técnico em Informática Para a Internet, Senac RS / Agosto de 2020 - Janeiro de 2022 </li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
        <li className="my-2"> Desenvolvedor Front End | Compass UOL Novembro de 2022 - Agosto de 2023 </li>
        <li className="my-2"> Bolsista Pesquisador | Compass UOL Dezembro de 2021 - Abril de 2022 </li>
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
    <section className="text-white z-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="aboutImage" src="/logoAbout.jpg" alt="Imagemlogo" width={700} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Atualmente cursando Ciência da Computação no 5º semestre, com formação técnica em Informática para
            Internet e sólida experiência como Desenvolvedor Front End. Atuo no setor desde dezembro de 2021,
            adquirindo conhecimento e buscando oportunidades desafiadoras para continuar desenvolvendo minhas
            habilidades como Desenvolvedor, contribuindo para projetos inovadores e crescendo profissionalmente
            na área de tecnologia da informação.
          </p>

          <a href="/GabryelWillers-CV.pdf" download className="cvButton  mb-2">
            <p>Download CV</p>
          </a>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {isPending ? "Loading..." : TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

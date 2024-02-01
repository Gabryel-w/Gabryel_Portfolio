"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <div className="aboutContainer  mt-40">
                <h1 className="aboutTitle mb-5">Sobre mim</h1>
            </div>

            <div className="textContainer">
                <p className="aboutText text-gray-400">
                    Atualmente cursando Ciência da Computação no 5º semestre, com formação técnica em Informática para
                    Internet e sólida experiência como Desenvolvedor Front End. Atuo no setor desde dezembro de 2021,
                    adquirindo conhecimento e buscando oportunidades desafiadoras para continuar desenvolvendo minhas
                    habilidades como Desenvolvedor, contribuindo para projetos inovadores e crescendo profissionalmente
                    na área de tecnologia da informação.
                </p>

                <a href="/GabryelWillers-CV.pdf" download className="cvButton  mb-2">
                    <p>Download CV</p>
                </a>
            </div>

            <div className="skillsContainer">
                <h1 className="aboutTitle mb-20">Habilidades</h1>

                <div className="cards">
                    <motion.div className="box">
                        <p>HTML5</p>
                        <Image alt="HTML" src='/html.png' width={40} height={40} />
                    </motion.div>
                    <div className="box">
                        <p>React.js</p>
                        <Image alt="React" src='/react.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>React - N</p>
                        <Image alt="React Native" src='/reactNative.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Tailwind</p>
                        <Image alt="Tailwind" src='/tailwind.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>TypeScript</p>
                        <Image alt="TypeScript" src='/typescript.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Redux</p>
                        <Image alt="Redux" src='/redux.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>JavaScript</p>
                        <Image alt="JavaScript" src='/javascript.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Node.js</p>
                        <Image alt="Node" src='/node-js.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>CSS</p>
                        <Image alt="CSS" src='/css.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Vue.js</p>
                        <Image alt="Vue" src='/vue.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Next.js</p>
                        <Image alt="Next" src='/nextjs.svg' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Python</p>
                        <Image alt="Python" src='/python.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>MySQL</p>
                        <Image alt="MySQL" src='/mysql.png' width={50} height={50} />
                    </div>
                    <div className="box">
                        <p>Git</p>
                        <Image alt="Git" src='/git.svg' width={50} height={50} />
                    </div>
                </div>

            </div>

        </>
    );
}
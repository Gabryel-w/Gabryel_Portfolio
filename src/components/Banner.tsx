"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); 
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className={`flex flex-row items-center justify-center px-6 mt-56 md:px-20 w-full z-20 ${isMobile ? 'flex-col' : ''}`}
        >
            {isMobile ? (
                <>
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="text-4xl font-bold text-white text-center mb-4"
                    >
                        Olá, Eu sou o Gabryel Willers
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Desenvolvedor Front End{" "}
                        </span>
                    </motion.div>
                    <motion.div
                        variants={slideInFromLeft(0.8)}
                        className="text-lg text-gray-400 mb-4 text-center"
                    >
                        Desenvolvedor front-end, transformando ideias em constelações digitais. Explore meu portfólio e descubra a excelência no design e na inovação.
                    </motion.div>
                    <motion.div
                        variants={slideInFromLeft(1)}
                        className="flex flex-col items-center"
                    >
                        <a href="https://github.com/Gabryel-w" className="linksbutton mb-2">
                            <Image alt="Github Link" src='/github.svg' width={30} height={30}/>
                            <p>GitHub</p>
                        </a>
                        <a href="https://www.linkedin.com/in/gabryel-willers-124426238/" className="linksbutton">
                            <Image alt="Linkedin Link" src='/linkedin.png' width={30} height={30}/>
                            <p>Linkedin</p>
                        </a>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                        <motion.div
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[900px] w-auto h-auto"
                        >
                            <span>
                                Olá, Eu sou o Gabryel Willers
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                    {" "}
                                    Desenvolvedor Front End{" "}
                                </span>
                            </span>
                        </motion.div>

                        <motion.p
                            variants={slideInFromLeft(0.8)}
                            className="text-lg text-gray-400 my-5 max-w-[600px]"
                        >
                            Desenvolvedor front-end, transformando ideias em constelações digitais. Explore meu portfólio e descubra a excelência no design e na inovação.
                        </motion.p>
                        <motion.div
                            variants={slideInFromLeft(1)}
                            className="flex py-2 max-w-[500px]"
                        >
                            <a href="https://github.com/Gabryel-w" className="linksbutton">
                                <Image alt="Github Link" src='/github.svg' width={30} height={30}/>
                                <p>GitHub</p>
                            </a>
                            <a href="https://www.linkedin.com/in/gabryel-willers-124426238/" className="linksbutton">
                                <Image alt="Linkedin Link" src='/linkedin.png' width={30} height={30}/>
                                <p>Linkedin</p>
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={slideInFromRight(0.8)}
                        className="w-full h-full flex justify-center items-center"
                    >
                        <div className="home-img">
                            <Image alt="Logo Avatar" src='/Logo.png' width={650} height={650} />
                        </div>
                    </motion.div>
                </>
            )}
        </motion.div>
    );
};

export default Banner;

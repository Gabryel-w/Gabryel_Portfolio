"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", image: "/html.png", experience: 5 },
  { name: "React.js", image: "/react.png", experience: 3 },
  { name: "React Native", image: "/reactNative.png", experience: 2 },
  { name: "Tailwind", image: "/tailwind.png", experience: 3 },
  { name: "TypeScript", image: "/typescript.png", experience: 3 },
  { name: "Redux", image: "/redux.png", experience: 2 },
  { name: "JavaScript", image: "/javascript.png", experience: 5 },
  { name: "Node.js", image: "/node-js.png", experience: 3 },
  { name: "CSS", image: "/css.png", experience: 5 },
  { name: "Vue.js", image: "/vue.png", experience: 1 },
  { name: "Next.js", image: "/nextjs.svg", experience: 2 },
  { name: "Python", image: "/python.png", experience: 4 },
  { name: "MySQL", image: "/mysql.png", experience: 3 },
  { name: "Git", image: "/git.svg", experience: 5 },
];

export default function Skills() {
  const settingsLeft = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    rtl: true, // Move para a esquerda
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  const settingsRight = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    rtl: false, // Move para a direita
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  return (
    <section className="relative z-30 flex flex-col items-center py-20 w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h1
        className="text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Habilidades
      </motion.h1>

      {/* Desktop Carousels */}
      <div className="hidden md:block w-11/12 md:w-3/4">
        <Slider {...settingsLeft}>
          {firstHalf.map((skill, index) => (
            <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 group">
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-white text-lg font-semibold">{skill.name}</p>
                <p className="text-blue-400 text-sm mt-1">{skill.experience} anos de experiência</p>
              </div>
            </motion.div>
          ))}
        </Slider>

        <Slider {...settingsRight}>
          {secondHalf.map((skill, index) => (
            <motion.div
              key={index}
              className="px-4 mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 group">
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-white text-lg font-semibold">{skill.name}</p>
                <p className="text-blue-400 text-sm mt-1">{skill.experience} anos de experiência</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Mobile Columns */}
      <div className="md:hidden w-11/12 grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 group">
              <div className="relative w-20 h-20 mb-3">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-white text-lg font-semibold">{skill.name}</p>
              <p className="text-blue-400 text-sm mt-1">{skill.experience} anos de experiência</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "55996725342";
  const email = "gabryelqwer@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    });
  };

  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 text-white relative bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg z-[-1]"></div>

      <h1 className="text-4xl font-bold mb-6 text-blue-400 text-center drop-shadow-md">
        Vamos Conversar!
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center leading-relaxed">
        Estou sempre aberto para novas oportunidades e conversas interessantes.
        Caso tenha alguma dúvida, projeto ou simplesmente queira trocar uma ideia,
        entre em contato comigo pelo e-mail ou WhatsApp.
      </p>

      <div
        onClick={handleCopyEmail}
        className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-8 w-full max-w-md cursor-pointer transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
      >
        <span className="text-gray-200">{email}</span>
        <button className="text-gray-300 hover:text-white">
          {isCopied ? <FaCheck size={20} /> : <FaCopy size={20} />}
        </button>
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-xl transition-all duration-300 hover:bg-green-600 hover:scale-105"
      >
        <FaWhatsapp size={28} />
        Fale comigo no WhatsApp
      </a>
    </section>
  );
}
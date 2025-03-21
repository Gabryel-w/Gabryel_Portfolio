"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>      
      <div className="container mx-auto flex items-center justify-between p-5">
        <h1 className="text-white text-2xl font-bold">G.W Portfólio</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#Inicio" onClick={(e) => handleSmoothScroll(e, '#Inicio')} className="text-white hover:text-blue-400 transition-colors">Início</a>
          <a href="#Sobre" onClick={(e) => handleSmoothScroll(e, '#Sobre')} className="text-white hover:text-blue-400 transition-colors">Sobre</a>
          <a href="#Projetos" onClick={(e) => handleSmoothScroll(e, '#Projetos')} className="text-white hover:text-blue-400 transition-colors">Projetos</a>
          <a href="#Contato" onClick={(e) => handleSmoothScroll(e, '#Contato')} className="text-white hover:text-blue-400 transition-colors">Contato</a>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          className="md:hidden bg-gray-900 text-white p-5 absolute top-full left-0 w-full flex flex-col space-y-4 shadow-lg">
          <a href="#Inicio" onClick={(e) => handleSmoothScroll(e, '#Inicio')} className="hover:text-blue-400">Início</a>
          <a href="#Sobre" onClick={(e) => handleSmoothScroll(e, '#Sobre')} className="hover:text-blue-400">Sobre</a>
          <a href="#Projetos" onClick={(e) => handleSmoothScroll(e, '#Projetos')} className="hover:text-blue-400">Projetos</a>
          <a href="#Contato" onClick={(e) => handleSmoothScroll(e, '#Contato')} className="hover:text-blue-400">Contato</a>
        </motion.div>
      )}

      <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
    </header>
  );
}

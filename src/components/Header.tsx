"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      const header = document.querySelector('.brand-navigation');
      if (header && !header.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className={` backdrop-blur-md brand-navigation ${isMenuOpen ? 'open' : ''}`}>
      <div className="content">
        <h1 className="text-title">G.W Portfólio</h1>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="#Inicio" onClick={closeMenu}>
            Inicio
          </Link>
          <Link href="#Sobre" onClick={closeMenu}>
            Sobre
          </Link>
          <Link href="#Projetos" onClick={closeMenu}>
            Projetos
          </Link>
          <Link href="#Contato" onClick={closeMenu}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
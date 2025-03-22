import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {


const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <h1 className="text-2xl font-bold text-blue-400">G.W</h1>
            <p className="text-gray-400 mt-2">Desenvolvedor Full Stack criando soluções inovadoras para a web.</p>
          </div>

          {/* Links rápidos */}
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-3">Links Rápidos</h2>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#Inicio" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#Projetos" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#Sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#Contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-3">Conecte-se Comigo</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/Gabryel-w" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/gabryel-willers-124426238/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:gabryelqwer@gmail.com" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} G.W | Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

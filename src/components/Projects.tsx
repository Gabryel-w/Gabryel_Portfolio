"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const GITHUB_USERNAME = "Gabryel-w";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Lista de repositórios para ignorar (use os nomes exatos dos repositórios)
const REPOS_TO_IGNORE = ["Gabryel-w", "gabryel-w.github.io", "Gabryel_Portfolio", "ReactNativeCronometro"];

export default function Projects() {
  interface Project {
    id: number; // Adicionado para usar como key única
    name: string;
    html_url: string;
    description: string;
    updated_at: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();

        // Filtra repositórios ignorados e ordena por data de atualização
        const filteredAndSortedProjects = data
          .filter((project: Project) => !REPOS_TO_IGNORE.includes(project.name)) // Filtra repositórios ignorados
          .sort((a: Project, b: Project) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(); // Ordena por data de atualização
          });

        setProjects(filteredAndSortedProjects);
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    };

    fetchProjects();
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  return (
    <section className="py-16 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-7xl w-full px-6 text-center">
        <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:px-16 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
            Meus Projetos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl text-gray-800 w-full"
            >
              <div className="relative w-full h-72 overflow-hidden bg-gray-800 flex items-center justify-center">
                <Image
                  src="/thumbnaill.jpg"
                  alt={project.name}
                  width={600}
                  height={350}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-8 text-white">
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h2>
                <p className="mt-2 text-gray-700">{project.description || "Sem descrição disponível."}</p>
                <p className="mt-2 text-sm text-blue-400">
                  Última atualização: {new Date(project.updated_at).toLocaleDateString()}
                </p>
              </div>
            </a>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Carregar Mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
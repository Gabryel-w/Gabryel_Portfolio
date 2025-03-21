"use client";

import React, { useEffect, useState } from "react";
import { Globe, Star } from "lucide-react";

const GITHUB_USERNAME = "Gabryel-w";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const REPOS_TO_IGNORE = ["Gabryel-w", "gabryel-w.github.io", "Gabryel_Portfolio", "ReactNativeCronometro"];

export default function Projects() {
  interface Project {
    id: number;
    name: string;
    html_url: string;
    description: string;
    updated_at: string;
    language: string;
    stargazers_count: number;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();

        const filteredAndSortedProjects = data
          .filter((project: Project) => !REPOS_TO_IGNORE.includes(project.name))
          .sort((a: Project, b: Project) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
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
    <section className="py-16 flex justify-center items-center min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-100 opacity-100" />
      <div className="max-w-7xl w-full px-6 text-center relative z-10">
        <div className="flex  mb-10">
          <h1 className="text-5xl font-bold mb-6 border-l-4 border-blue-600 pl-4 text-gray-800">
            Meus Projetos
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-800 border border-cyan-300 rounded-lg shadow-sm p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500 flex flex-col justify-between h-full"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-blue-600 group-hover:text-blue-500">
                  {project.name}
                </h2>
                <span className="text-gray-600 text-sm flex items-center gap-1">
                  <Star size={16} className="text-yellow-400" /> {project.stargazers_count}
                </span>
              </div>
              <p className="mt-4 text-gray-300 flex-grow">
                {project.description || "Sem descrição disponível."}
              </p>
              <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Globe size={16} className="text-blue-500" /> {project.language || "N/A"}
                </span>
                <span className="text-gray-300">
                  Última atualização: {new Date(project.updated_at).toLocaleDateString()}
                </span>
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
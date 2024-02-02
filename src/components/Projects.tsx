import React from "react";
import Image from "next/image";

const projectsData = [
  {
    title: "Tempeiro Caseiro",
    description: "Site sobre um Restaurante feito com Html, CSS, Bootstrap e JavaScript",
    imageSrc: "/thumbnaill.jpg",
    link: "https://github.com/Gabryel-w/TemperoCaseiro-Website",
  },
  {
    title: "React Native Maps",
    description: "Aplicativo feito com React Native sobre um mapa da universidade.",
    imageSrc: "/thumbnaill.jpg",
    link: "https://github.com/Gabryel-w/LocalizaURI-APP",
  },
  {
    title: "ASP.NET Website",
    description: "Site Construído com ASP NET MVC usando como linguagem C Sharp",
    imageSrc: "/thumbnaill.jpg",
    link: "https://github.com/Gabryel-w/Website-Com-AspNet-MVC",
  },
];

export default function Projects() {
  return (
    <>
      <div className="text-center py-20">
        <h1 className="title">Meus Projetos</h1>
      </div>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="image-container">
              <Image src={project.imageSrc} alt={project.title} width={1000} height={1000} />
            </div>

            <div className="p-4">
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

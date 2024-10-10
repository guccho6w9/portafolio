import React from "react";
import { useTheme } from "@/context/ThemeContext"; // Importa el contexto de tema

const projects = [
  {
    title: "Resto Bar 'Lo nuestro'",
    description:
      "Mi objetivo fue crear una experiencia minimalista y acogedora para los usuarios que garantiza una experiencia de usuario fluida y satisfactoria. Landing page intuitiva que permite a los usuarios explorar el menú, realizar pedidos y consultar informacion del local.",
    technologies: ["next", "typescript", "tailwind", "css3"],
    imageUrl: "/captura_proyecto/resto_bar.jpg",
    repoUrl: "https://github.com/guccho6w9/resto_bar",
    websiteUrl: "https://resto-bar-psi.vercel.app/",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2.",
    technologies: ["next", "typescript", "tailwind"],
    imageUrl: "/path/to/image2.jpg",
    repoUrl: "https://github.com/guccho6w9/proyecto2",
    websiteUrl: "https://proyecto2.com",
  },
  // Puedes agregar más proyectos aquí...
];

type Technology = "next" | "typescript" | "tailwind" | "css3";

const techIcons: { [key in Technology]: string } = {
  next: "/iconos/nextjs.svg",
  typescript: "/iconos/typescript.svg",
  tailwind: "/iconos/tailwind.svg",
  css3: "/iconos/css3.svg",
};

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  repoUrl,
  websiteUrl,
}: any) => {
  const { isDarkMode } = useTheme(); // Usamos el modo oscuro

  return (
    <div
      className={`border py-8 px-4 md:px-10 xl:mx-10 rounded-lg shadow-md transition duration-300 ${
        isDarkMode
          ? "border-teal-500 bg-gradient-to-br from-black to-teal-900 text-white"
          : "bg-white text-black"
      } w-full md:w-[90%] lg:w-[95%]`} // Ajusta el width y reduce el padding
    >
      
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-66 object-cover rounded-md mb-4" // Aumenta la altura de la imagen
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mb-4 ">{description}</p>
      <div className="flex space-x-2 mb-4">
        {technologies.map((tech: Technology) => (
          <div
            key={tech}
            className={`text-2xl ${isDarkMode ? "text-white" : "text-black"}`}
          >
            <img
              src={techIcons[tech]}
              alt={`${tech} icon`}
              className={`w-8 h-8 ${isDarkMode ? "filter invert" : ""}`} // Aplica el filtro invertido en modo oscuro
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver repositorio
        </a>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver sitio web
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme(); // Usamos el modo oscuro

  return (
    <div>
      {/* Título de Proyectos */}
      <h2
        id="proyectos"
        className={`text-5xl font-bold mb-8 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`} // Cambia el color dinámicamente según el tema
      >
        Proyectos
      </h2>
      {/* Contenedor para centrar la línea */}
      <div className="flex justify-center mb-6 mt-2">
        <hr
          className={`border ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          } w-1/4`}
        />
      </div>

      {/* Bloque de tarjetas de proyectos */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-0 transition duration-300 mx-10 md:mx-16 lg:mx-20 ${
          isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
        }`}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

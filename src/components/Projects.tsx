import React, { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext"; // Importa el contexto de tema
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.3,
  
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.3,
    },
  },
};

const projects = [
  {
    title: "Resto Bar 'Lo nuestro'",
    description:
      "Mi objetivo fue crear una experiencia minimalista y acogedora para los usuarios que garantiza una experiencia de usuario fluida y satisfactoria. Landing page intuitiva que permite a los usuarios explorar el menú, realizar pedidos y consultar informacion del local.",
    technologies: ["next", "typescript", "tailwind", "css3"],
    features: ["Crear, actualizar y borrar productos", "Carrito de compras", "Confirmacion de compra y pedido"],
    imageUrl: "/captura_proyecto/resto_bar.webp",
    repoUrl: "https://github.com/guccho6w9/resto_bar",
    websiteUrl: "https://resto-bar-psi.vercel.app/",
  },
  {
    title: "Tienda online de libros 'Digital Books'",
    description: "En colaboración con un equipo de compañeros, este proyecto incluyó la creación de un catálogo de libros, realizar compras y registro e inicio de sesión. Además, implementa un sistema de administración que permite gestionar el inventario de manera eficiente. Proyecto de Digital House.",
    technologies: ["node", "sequelize", "express", "ejs", "sql", "bootstrap", "css3"],
    features: ["Carrusel de productos", "Carrito de compras", "Login/Register de usuario"],
    imageUrl: "/captura_proyecto/digital_books.webp",
    repoUrl: "https://github.com/GaloMinguez/grupo_5_digital-books",
    websiteUrl: "",
  },
  {
    title: "Sistema de control de stock y ventas",
    description: "El objetivo del proyecto fue desarrollar un sistema de gestion de inventario que permita al cliente monitorear y gestionar productos. Proporciona herramientas para la importacion de listas de productos a la base de datos, busqueda de productos, registro de actualizaciones e historial de ventas.",
    technologies: ["python", "django", "javascript", "sql", "html", "bootstrap", "css3"],
    features: ["Exportar/importar listas de productos en formato excel", "Agregar, actualizar o eliminar productos",  "Registro de ventas e impresion de factura"],
    imageUrl: "/captura_proyecto/control_stock.webp",
    repoUrl: "",
    websiteUrl: "",
  },
  {
    title: "App web de clima y noticias",
    description: "El objetivo del proyecto fue desarrollar una aplicacion web que pueda brindar informacion sobre el clima y noticias de una ciudad y pais a eleccion en tiempo real y en un formato amigable. Hace uso de News api y de la api Openweather para brindar informacion.",
    technologies: ["next", "typescript", "javascript", "css3", "tailwind"],
    features: ["Informacion de clima actual y del pronostico", "Carrusel de noticias", "Estilo que reacciona a la temperatura"],
    imageUrl: "/captura_proyecto/app_clima.webp",
    repoUrl: "https://github.com/guccho6w9/Weather-news-app",
    websiteUrl: "https://weather-news-app-phi.vercel.app/",
  },
  
];

type Technology = "python" | "next" | "django" | "javascript" | "html" | "typescript" | "express" | "tailwind" | "css3" | "node" | "sequelize" | "sql" | "ejs" | "bootstrap";

const techIcons: { [key in Technology]: string } = {
  python: "/iconos/python.svg",
  django: "/iconos/django.svg",
  javascript: "/iconos/javascript.svg",
  html: "/iconos/html.svg",
  next: "/iconos/nextjs.svg",
  node: "/iconos/nodejs.svg",
  express: "/iconos/express.svg",
  sequelize: "/iconos/sequelize.svg",
  sql: "/iconos/sql.svg",
  ejs: "/iconos/ejs.svg",
  typescript: "/iconos/typescript.svg",
  bootstrap: "/iconos/bootstrap.svg",
  tailwind: "/iconos/tailwind.svg",
  css3: "/iconos/css3.svg",
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl: string;
  websiteUrl: string;
  features: string[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  repoUrl,
  websiteUrl,
  features,
}: Project) => {
  const { isDarkMode } = useTheme(); // Usamos el modo oscuro

  return (
    <div
      className={`border py-8 px-4 mb-8 md:px-10 xl:mx-10 rounded-lg shadow-md transition duration-300 ${
        isDarkMode
          ? "border-teal-500 bg-gradient-to-br from-black to-teal-900 text-white"
          : "bg-gradient-to-br from-white to-violet-50 text-black"
      } w-full md:w-[90%] lg:w-[95%]`} // Ajusta el width y reduce el padding
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-66 object-cover rounded-md mb-4" // Aumenta la altura de la imagen
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mb-4 mt-2 h-46 overflow-y-auto">{description}</p>

      {/**bloque de features */}
      <div className="mb-4">
        <ul className="list-disc list-inside">
          {features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/**bloque de iconos */}
      <div className="flex space-x-2 mb-4">
        {technologies.map((tech: string, index: number) => (
          tech in techIcons ? (
            <div
              key={index}
              className={`text-2xl ${isDarkMode ? "text-white" : "text-black"}`}
            >
              <img
                src={techIcons[tech as Technology]}
                alt={`${tech} icon`}
                className={`w-8 h-8 ${isDarkMode ? "filter invert" : ""}`}
              />
            </div>
          ) : null
        ))}  
      </div>

      <div className="flex mt-8 justify-between">
  {/** Si existe repoUrl o websiteUrl, mostrar los botones correspondientes */}
  {repoUrl ? (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${
        isDarkMode
          ? "bg-teal-600 hover:bg-teal-800"
          : "bg-pink-500 hover:bg-pink-800"
      } text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
    >
      Ver repositorio
    </a>
  ) : null}

  {websiteUrl ? (
    <a
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${
        isDarkMode
          ? "bg-teal-600 hover:bg-teal-800"
          : "bg-pink-500 hover:bg-pink-800"
      } text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
    >
      Ver sitio web
    </a>
  ) : null}

  {/** Si no existe ni repoUrl ni websiteUrl, mostrar el botón "Privado" */}
  {!repoUrl && !websiteUrl && (
    <button
      className="inline-block bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg cursor-not-allowed opacity-50"
      disabled
    >
      Privado
    </button>
  )}
</div>

    </div>
  );
};


const Projects = () => {
  const { isDarkMode } = useTheme(); // Usamos el modo oscuro

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <div>
      {/* Título de Proyectos */}
      <h2
        id="proyectos"
        className={`text-5xl font-bold mb-8 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Proyectos
      </h2>
      <div className="flex justify-center mb-6 mt-2">
        <hr
          className={`border ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          } w-1/4`}
        />
      </div>

      {/* Bloque de tarjetas de proyectos */}
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 gap-0 transition duration-300 mx-10 md:mx-16 lg:mx-20 ${
          isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
        }`}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={containerVariants} // Aplica la animación a cada tarjeta
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

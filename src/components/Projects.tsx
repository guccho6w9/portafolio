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
    features: [
      "Crear, actualizar y borrar productos",
      "Carrito de compras",
      "Confirmacion de compra y pedido",
    ],
    imageUrl: "/captura_proyecto/resto_bar.webp",
    repoUrl: "https://github.com/guccho6w9/resto_bar",
    websiteUrl: "https://resto-bar-psi.vercel.app/",
  },
  {
    title: "E-commerce 'Digital Books'",
    description:
      "En colaboración con un equipo de compañeros, este proyecto incluyó la creación de un catálogo de libros, manejo de venta/Stock y registro e inicio de sesión. Además, implementa un sistema de administración que permite gestionar el inventario de manera eficiente. Proyecto de Digital House.",
    technologies: [
      "node",
      "sequelize",
      "express",
      "ejs",
      "sql",
      "bootstrap",
      "css3",
    ],
    features: [
      "Carrusel de productos",
      "Carrito de compras",
      "Login/Register de usuario",
    ],
    imageUrl: "/captura_proyecto/digital_books.webp",
    repoUrl: "https://github.com/GaloMinguez/grupo_5_digital-books",
    websiteUrl: "",
  },
  {
    title: "App de control de stock/ventas",
    description:
      "El objetivo del proyecto fue desarrollar un sistema de gestion de inventario que permita al cliente monitorear y gestionar productos. Proporciona herramientas para la importacion de listas de productos a la base de datos, busqueda de productos, registro de actualizaciones e historial de ventas.",
    technologies: [
      "python",
      "django",
      "javascript",
      "sql",
      "html",
      "bootstrap",
      "css3",
    ],
    features: [
      "Exportar/importar listas de productos en formato excel",
      "Agregar, actualizar o eliminar productos",
      "Registro de ventas e impresion de factura",
    ],
    imageUrl: "/captura_proyecto/control_stock.webp",
    repoUrl: "",
    websiteUrl: "",
  },
  {
    title: "E-commerce 'Digital Books'",
    description:
      "En colaboración con un equipo de compañeros, este proyecto incluyó la creación de un catálogo de libros, manejo de venta/Stock y registro e inicio de sesión. Además, implementa un sistema de administración que permite gestionar el inventario de manera eficiente. Proyecto de Digital House.",
    technologies: [
      "node",
      "sequelize",
      "express",
      "ejs",
      "sql",
      "bootstrap",
      "css3",
    ],
    features: [
      "Carrusel de productos",
      "Carrito de compras",
      "Login/Register de usuario",
    ],
    imageUrl: "/captura_proyecto/digital_books.webp",
    repoUrl: "https://github.com/GaloMinguez/grupo_5_digital-books",
    websiteUrl: "",
  },
  {
    title: "WebScraping lxml/requests",
    description:
      "Este proyecto consiste en un script de web scraping diseñado para extraer información de productos de MercadoLibre. Busca los más baratos y los más caros, organizados por precio. Extrae datos como el título, precio, reseñas, URL, y imagen de cada producto, almacenándolos en formatos JSON/CSV. Permite automatizar la recolección de productos para análisis o comparativas.",
    technologies: [
      "python",
      "requests",
      "lxml",
      "json",
      "csv",
    ],
    features: [
      "Scraping de productos desde Mercado Libre",
      "Filtrado por precios más baratos y más caros",
      "Soporte para paginación",
      "Guardado de datos en formatos JSON y CSV",
    ],
    imageUrl: "/captura_proyecto/script_webscraping.webp",
    repoUrl: "https://github.com/guccho6w9/Me_li_Webscraping-test",
    websiteUrl: "",
  },

  {
    title: "App web de clima y noticias",
    description:
      "El objetivo del proyecto fue desarrollar una aplicacion web que pueda brindar informacion sobre el clima y noticias de una ciudad y pais a eleccion en tiempo real y en un formato amigable. Hace uso de News api y de la api Openweather para brindar informacion.",
    technologies: ["next", "typescript", "javascript", "css3", "tailwind"],
    features: [
      "Informacion de clima actual y del pronostico",
      "Carrusel de noticias",
      "Estilo que reacciona a la temperatura",
    ],
    imageUrl: "/captura_proyecto/app_clima.webp",
    repoUrl: "https://github.com/guccho6w9/Weather-news-app",
    websiteUrl: "https://weather-news-app-phi.vercel.app/",
  },
  {
    title: "No-Bootcamp: Pokedex competitivo",
    description:
      "El objetivo del proyecto fue desarrollar una aplicacion web que pueda brindar informacion sobre todos los pokemon en cuanto a formatos competitivos se refiere de manera rapida y facil. Hace uso de Pokeapi y estoy trabajando la implementacion de la api de Showdown.",
    technologies: ["next", "typescript", "javascript", "css3", "tailwind"],
    features: [
      "Informacion de habilidades, tabla de tipos y stats",
      "Busqueda por nombre y numero de pokedex",
      "Informacion adicional de items y generaciones pasadas",
    ],
    imageUrl: "/captura_proyecto/pokedex.webp",
    repoUrl: "https://github.com/guccho6w9/datamon",
    websiteUrl: "",
  },
  {
    title: "Challenge: Star Wars landing page",
    description:
      "Mi objetivo para el challenge fue desarrollar una landing page atractiva y moderna hecha con Next.js, Tailwind y JS como requisito. Hace uso de Swapi para traer informacion de la trilogia original de Star Wars.",
    technologies: ["next", "javascript", "css3", "tailwind"],
    features: [
      "Carrusel y slider informativo en landing page",
      "Busqueda y filtrado de personajes por distintas cualidades",
      "Acceso a peliculas y personajes involucrados en la misma",
    ],
    imageUrl: "/captura_proyecto/starwars.webp",
    repoUrl: "https://github.com/guccho6w9/Star-wars-page",
    websiteUrl: "https://challenge-mu-seven.vercel.app/",
  },
];

type Technology =
  | "python"
  | "next"
  | "django"
  | "javascript"
  | "html"
  | "typescript"
  | "express"
  | "tailwind"
  | "css3"
  | "node"
  | "sequelize"
  | "sql"
  | "ejs"
  | "csv"
  | "json"
  | "bootstrap";

const techIcons: { [key in Technology]: string } = {
  python: "/iconos/python.svg",
  django: "/iconos/django.svg",
  javascript: "/iconos/javascript.svg",
  html: "/iconos/html.svg",
  next: "/iconos/nextjs.svg",
  node: "/iconos/nodejs.svg",
  express: "/iconos/express.svg",
  sequelize: "/iconos/Sequelize.svg",
  sql: "/iconos/sql.svg",
  ejs: "/iconos/ejs.svg",
  typescript: "/iconos/typescript.svg",
  bootstrap: "/iconos/bootstrap.svg",
  tailwind: "/iconos/tailwind.svg",
  css3: "/iconos/css3.svg",
  json: "/iconos/json.svg",
  csv: "/iconos/csv.svg",
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
      className=" py-8 px-4 mb-8  md:px-10 xl:mx-10 rounded-lg shadow-md transition duration-300 w-full md:w-[90%] lg:w-[95%] h-full"
      style={{
        background: isDarkMode
          ? 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 128, 128, 0.8))'
          : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(255, 105, 180, 0.6))',
        zIndex: 0,
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-66 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-extrabold font-barlow">{title}</h3>
      
      {/* Descripción con altura fija */}
      <p className="mb-4 mt-2 h-42 font-bold overflow-hidden">{description}</p>

      <div className="mb-4 font-extrabold font-barlow">
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        {technologies.map((tech: string, index: number) =>
          tech in techIcons ? (
            <div
              key={index}
              className={`text-2xl ${isDarkMode ? "text-white" : "text-black"}`}
            >
              <img
                src={techIcons[tech as Technology]}
                alt={`${tech} icon`}
                className={`w-10 h-10 ${isDarkMode ? "filter invert" : ""}`}
              />
            </div>
          ) : null
        )}
      </div>

      <div className="flex justify-between mt-4">
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${isDarkMode ? "bg-teal-600 hover:bg-teal-800" : "bg-pink-500 hover:bg-pink-800"} text-white font-extrabold font-barlow py-2 px-4 rounded-lg transition duration-300`}
          >
            Ver repositorio
          </a>
        ) : null}

        {websiteUrl ? (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${isDarkMode ? "bg-teal-600 hover:bg-teal-800" : "bg-pink-500 hover:bg-pink-800"} text-white font-extrabold font-barlow py-2 px-4 rounded-lg transition duration-300`}
          >
            Ver sitio web
          </a>
        ) : null}

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
    <div style={{
      backgroundColor: isDarkMode
        ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
        : "rgba(255, 182, 193, 0.0)", // Fondo semitransparente claro
    }}>
      {/* Título de Proyectos */}
      
      <h2
        id="proyectos"
        className={`text-5xl md:pt-40 font-extrabold font-barlow mb-8 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
        
      >
        PROYECTOS
      </h2>
      <div className="w-48 h-1 mx-auto mb-8">
        <hr
          className={`border ${isDarkMode ? "border-white" : "border-black"}`}
        />
      </div>

      {/* Bloque de tarjetas de proyectos */}
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition duration-300 mx-10 md:mx-16 lg:mx-20 ${
          isDarkMode ? " text-white" : " text-black"
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

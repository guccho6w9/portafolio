import { useState } from 'react';
import '@/app/globals.css';

const NavbarMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  return (
    <nav className="flex justify-between items-center p-2 pt-4 bg-black text-white mx-4 sm:mx-20 ">
      <ul className="flex space-x-4">
        <li>
          <a href="#about" className="relative group">
            <span className="hover:underline hover:text-teal-400 transition duration-300">Sobre mí</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#experience" className="relative group">
            <span className="hover:underline hover:text-teal-400 transition duration-300">Experiencia</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#projects" className="relative group">
            <span className="hover:underline hover:text-teal-400 transition duration-300">Proyectos</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#contact" className="relative group">
            <span className="hover:underline hover:text-teal-400 transition duration-300">Contacto</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </li>
      </ul>
      
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="hover:text-teal-400 transition duration-300">
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <button className="hover:text-teal-400 transition duration-300">EN / ES</button>
      </div>
    </nav>
  );
};

export default NavbarMenu;

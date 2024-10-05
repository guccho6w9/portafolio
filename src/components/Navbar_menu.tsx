import { useState } from 'react';
import '@/app/globals.css';
const NavbarMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><a href="#hero" className="hover:underline">Inicio</a></li>
        <li><a href="#about" className="hover:underline">Sobre mí</a></li>
        <li><a href="#experience" className="hover:underline">Experiencia</a></li>
        <li><a href="#projects" className="hover:underline">Proyectos</a></li>
        <li><a href="#contact" className="hover:underline">Contacto</a></li>
      </ul>
      
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <button className="hover:underline">EN / ES</button>
      </div>
    </nav>
  );
};

export default NavbarMenu;

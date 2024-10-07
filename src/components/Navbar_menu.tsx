import { useState } from 'react';
import '@/app/globals.css';
import { useTheme } from "@/context/ThemeContext";

const NavbarMenu = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`flex flex-col sm:flex-row justify-between items-center p-2 pt-4 ${isDarkMode ? 'bg-black text-white' : 'bg-fuchsia-50 text-black'} mx-4 sm:mx-20`}>
      <div className="flex items-center justify-between w-full sm:w-auto">
        {/* Botones de modo claro/oscuro */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="hover:text-teal-400 transition duration-300">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icon-tabler-moon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icon-tabler-brightness-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z"/>
                <path d="M12 4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M17 6a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M19 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M17 16a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M12 18a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M7 16a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M5 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
                <path d="M7 6a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"/>
              </svg>
            )}
          </button>
          <button className="hover:text-teal-400 transition duration-300">EN / ES</button>
        </div>

        {/* Botón del menú móvil más grande y alineado a la derecha */}
        <button 
          className="sm:hidden" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="icon icon-tabler icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable con animación hacia abajo */}
      <ul className={`flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} sm:flex sm:flex-row sm:space-y-0 sm:space-x-6 transition-all duration-500 ease-in-out`}>
        {['Sobre mí', 'Experiencia', 'Proyectos', 'Contacto'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="relative group text-xl sm:text-lg">
              <span className="hover:underline hover:text-teal-400 transition duration-300">{item}</span>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;

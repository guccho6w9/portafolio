import { useState } from "react";
import "@/app/globals.css";
import { useTheme } from "@/context/ThemeContext";

const NavbarMenu = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`flex flex-col sm:flex-row justify-between items-center p-2 pt-4 ${
        isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
      } md:px-20 `}
    >
      <div className="flex items-center justify-between w-full sm:w-auto">
        {/* Botones de modo claro/oscuro */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`transition duration-300 ${
              isDarkMode
                ? "text-white hover:text-teal-400"
                : "text-black hover:text-fuchsia-400"
            }`}
          >
            {isDarkMode ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icon-tabler-brightness-down"
            >

              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
                <path d="M12 4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M17 6a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M19 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M17 16a1 1 0 0 1 .993 .883l.007 .127a1  1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M12 18a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M7 16a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M5 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
                <path d="M7 6a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
            </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icon-tabler-sun"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
              </svg>
            )}
          </button>
          {/* Botón del menú móvil 
          <button
            className={`transition duration-300 ${
              isDarkMode
                ? "text-white hover:text-teal-400"
                : "text-black hover:text-fuchsia-400"
            }`}
          >
            EN / ES
          </button> */}
          
        </div>

        {/* Botón del menú móvil */}
        <button className="sm:hidden" onClick={toggleMenu} aria-label="Menu">
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable */}
      <ul
        className={`flex flex-col space-y-4 ${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:flex-row sm:space-y-0 sm:space-x-6 transition-all duration-500 ease-in-out`}
      >
        {["EXPERIENCIA", "PROYECTOS", "BIO", "CONTACTO"].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative group font-extrabold font-barlow text-sm sm:text-lg"
            >
              <span
                className={`hover:underline transition duration-300 ${
                  isDarkMode ? "hover:text-teal-400" : "hover:text-fuchsia-400"
                }`}
              >
                {item}
              </span>
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 transition-transform transform ${
                  isDarkMode
                    ? "bg-teal-400 group-hover:scale-x-100"
                    : "bg-fuchsia-400 group-hover:scale-x-100"
                } duration-300 scale-x-0`}
              ></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;

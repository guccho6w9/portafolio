import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext'; // Para manejar el modo oscuro/claro

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme(); // Para detectar el modo oscuro/claro

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 transition duration-300"
        >
          <img
            src="/iconos/arrow-up.svg"  // La ruta del archivo SVG en la carpeta public
            alt="Scroll to top"
            className={`w-14 h-14 transition duration-300 ${
              isDarkMode ? 'filter invert' : ''
            }`}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

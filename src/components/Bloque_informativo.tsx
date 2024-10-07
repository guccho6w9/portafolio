import React from 'react';
import { useTheme } from "@/context/ThemeContext";
import '@/app/globals.css';

const CarruselInformativo: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex justify-center md:px-20 md:px-20 md:px-20  xl:mx-20 space-x-12 ${
      isDarkMode ? 'bg-black' : 'bg-fuchsia-50'
    } transition-all duration-300 p-4 `}>
      {/* Cuadro de Experiencia */}
      <div
        className={`flex flex-col items-center justify-center w-64 h-32 rounded-lg p-4 bg-transparent ${
          isDarkMode ? 'text-white' : 'text-black'
        } border-4 border-teal-500`}
      >
        <p className="text-6xl font-bold">+1</p>
        <p className="text-xl font-semibold">Año de experiencia</p>
      </div>

      {/* Cuadro de Proyectos */}
      <div
        className={`flex flex-col items-center justify-center w-64 h-32 rounded-lg p-4 bg-transparent ${
          isDarkMode ? 'text-white' : 'text-black'
        } border-4 border-teal-500`}
      >
        <p className="text-6xl font-bold">+8</p>
        <p className="text-xl font-semibold">Proyectos</p>
      </div>
    </div>
  );
};

export default CarruselInformativo;

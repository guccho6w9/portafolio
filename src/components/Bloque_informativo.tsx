import React from 'react';
import { useTheme } from "@/context/ThemeContext";
import '@/app/globals.css';

const CarruselInformativo: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex justify-center md:px-20 xl:mx-20 space-x-8  ${
      isDarkMode ? 'bg-black' : 'bg-fuchsia-50'
    }  p-4`}>
      {/* Cuadro de Experiencia */}
      <div
        className={`flex flex-col items-center justify-center shadow-lg w-56 h-28 rounded-lg p-4 bg-transparent ${
          isDarkMode ? 'text-white border-4 border-teal-500' : 'bg-white text-black border-2 border-fuchsia-500'
        }`}
      >
        
        <p className="text-6xl font-bold">+1</p>
        <p className="text-xl font-semibold">Año de experiencia</p>
      </div>

      {/* Cuadro de Proyectos */}
      <div
        className={`flex flex-col items-center justify-center shadow-lg w-56 h-28 rounded-lg p-4 bg-transparent ${
          isDarkMode ?  'text-white border-4 border-teal-500' : ' bg-white text-black border-2 border-fuchsia-500'
        }`}
      >
        <p className="text-6xl font-bold">+8</p>
        <p className="text-xl font-semibold">Proyectos</p>
      </div>
    </div>
  );
};

export default CarruselInformativo;

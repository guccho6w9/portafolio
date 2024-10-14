import React from 'react';
import { useTheme } from "@/context/ThemeContext";
import '@/app/globals.css';

const CarruselInformativo: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex justify-center md:px-20  space-x-8  ${
      isDarkMode ? 'bg-black' : 'bg-fuchsia-50'
    }  p-4`}
    style={{
      backgroundColor: isDarkMode 
        ? 'rgba(68, 16, 107, 0.2)' // Fondo semitransparente en modo oscuro
        : 'rgba(255, 182, 193, 0.0)', // Fondo semitransparente en modo claro
    }}>
      {/* Cuadro de Experiencia */}
      <div
        className={`flex flex-col items-center justify-center shadow-lg w-56 h-28 rounded-lg p-4 ${
          isDarkMode 
            ? 'text-white border-4 border-teal-500'
            : 'text-black border-2 border-fuchsia-300'
        }`}
        style={{
          backgroundColor: isDarkMode 
            ? 'rgba(0, 0, 0, 0.5)' // Fondo semitransparente en modo oscuro
            : 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente en modo claro
        }}
      >
        <p className="text-6xl font-bold">+1</p>
        <p className="text-xl font-semibold">Año de experiencia</p>
      </div>

      {/* Cuadro de Proyectos */}
      <div
        className={`flex flex-col items-center justify-center shadow-lg w-56 h-28 rounded-lg p-4 ${
          isDarkMode 
            ? 'text-white border-4 border-teal-500'
            : 'text-black border-2 border-fuchsia-300'
        }`}
        style={{
          backgroundColor: isDarkMode 
            ? 'rgba(0, 0, 0, 0.5)' // Fondo semitransparente en modo oscuro
            : 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente en modo claro
        }}
        
      >
        <p className="text-6xl font-bold">+8</p>
        <p className="text-xl font-semibold">Proyectos</p>
      </div>
    </div>
  );
};

export default CarruselInformativo;

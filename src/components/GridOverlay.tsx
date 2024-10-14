// GridOverlay.tsx
import React from "react";

const GridOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => ( // Disminuir el número de líneas horizontales
        <div
          key={i}
          className="absolute bg-white opacity-10"
          style={{ top: `${i * 10}%`, left: '0%', width: '100%', height: '1px' }} // Líneas horizontales
        />
      ))}
      {Array.from({ length: 20 }).map((_, i) => ( // Disminuir el número de líneas verticales
        <div
          key={i}
          className="absolute bg-white opacity-10"
          style={{ top: '0%', left: `${i * 5}%`, width: '1px', height: '100%' }} // Líneas verticales
        />
      ))}
    </div>
  );
};

export default GridOverlay;

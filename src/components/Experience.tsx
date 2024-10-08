import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      role: "Desarrollador Web Freelance",
      company: "Corralon sanchez",
      description:
        "Trabaje en un sistema web escalable con tecnologias como Django, MySQL y JS para el control de stock y ventas. Contribuyó al diseño, codificación y prueba de varias funciones de frontend y backend.",
      duration: "Nov 2023 - Mar 2024",
    },
    // Puedes agregar más experiencias aquí
  ];

  const handleScroll = () => {
    const element = scrollRef.current;
    if (
      element &&
      Math.ceil(element.scrollTop + element.clientHeight) >=
        element.scrollHeight
    ) {
      element.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      id="experiencia"
      className={`flex flex-col justify-center items-center h-screen sm:h-[calc(100vh-20px)] ${
        isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
      }`}
    >
      <h2 className="text-5xl font-bold mb-2 text-center">Experiencia</h2>
      <hr className={`border ${isDarkMode ? "border-gray-600" : "border-gray-300"} w-1/4 mb-6`} style={{ alignSelf: 'center' }} />

      <div
        ref={scrollRef}
        className={`w-full max-w-3xl h-1/2 sm:h-2/4 overflow-y-scroll ${
          isDarkMode
            ? "bg-black text-white shadow-md shadow-gray-500"
            : "bg-white text-black shadow-lg"
        } rounded-xl p-6 relative sm:mx-20`}
        style={{ scrollbarColor: isDarkMode ? "#333 #555" : "#ccc #f1f1f1" }}
      >
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`mb-6 p-4 border-b rounded-xl border-gray-300 dark:border-gray-600 ${
              hoveredExperience === experience.id
                ? isDarkMode
                  ? "bg-teal-900" // Color de fondo en modo oscuro
                  : "bg-violet-200" // Color de fondo en modo claro
                : ""
            }`}
            onMouseEnter={() => setHoveredExperience(experience.id)}
            onMouseLeave={() => setHoveredExperience(null)}
          >
            <h3 className="text-2xl font-semibold">{experience.role}</h3>
            <p
              className={`text-sm mb-2 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {experience.company} - {experience.duration}
            </p>
            <p className="text-lg leading-relaxed">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

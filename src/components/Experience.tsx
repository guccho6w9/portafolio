import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      role: "Desarrollador Web ",
      company: "Freelance",
      description:
        "Trabajé en un sistema web escalable con tecnologías como Django, MySQL y JS para el control de stock y ventas. Contribuí al diseño, codificación y prueba de varias funciones de frontend y backend.",
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
      className={`flex flex-col md:pt-20 justify-center items-center h-screen sm:h-[calc(100vh-20px)] ${
        isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
      }`}
      style={{
        backgroundColor: isDarkMode
          ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
          : "rgba(255, 182, 193, 0.0)", // Fondo semitransparente claro
      }}
    >
      <h2 className="text-5xl font-extrabold font-barlow mb-4">EXPERIENCIA</h2>
      <div className="w-48 h-1 mb-8">
        <hr
          className={`border ${isDarkMode ? "border-white" : "border-black"}`}
        />
      </div>

      <div
        className={`w-full max-w-3xl h-1/2 sm:h-2/4 overflow-y-scroll relative sm:mx-20 rounded-xl p-6`}
        style={{
          backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.5)", // Fondo negro con transparencia para el cuadro grande
        }}
      >
        <div
          ref={scrollRef}
          className={`h-full rounded-xl p-6 relative overflow-y-scroll ${
            isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.0)"
          }`}
          style={{ scrollbarColor: isDarkMode ? "#333 #555" : "#ccc #f1f1f1" }}
        >
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={`mb-6 p-4 border-b rounded-xl  transition-all duration-300 ${
                hoveredExperience === experience.id
                  ? isDarkMode
                    ? 'bg-gradient-to-br from-gray-950 to-teal-600'
                    : 'bg-gradient-to-br from-white to-fuchsia-200'
                  : ''
              }`}
              onMouseEnter={() => setHoveredExperience(experience.id)}
              onMouseLeave={() => setHoveredExperience(null)}
            >
              <h3 className="text-2xl font-extrabold font-barlow">{experience.role}</h3>
              <p
                className={`text-sm font-extrabold font-barlow mb-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {experience.company} - {experience.duration}
              </p>
              <p className="text-base font-extrabold font-barlow md:text-base sm:text-lg leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

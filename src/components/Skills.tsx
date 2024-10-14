import Image from 'next/image';
import { useTheme } from "@/context/ThemeContext";

const skills = [
  { name: 'Python', icon: '/iconos-skill/python.svg' },
  { name: 'Java', icon: '/iconos-skill/java.svg' },
  { name: 'MySql', icon: '/iconos-skill/mysql.svg' },
  { name: 'Mongo', icon: '/iconos-skill/mongodb.svg' },
  { name: 'Django', icon: '/iconos-skill/django.svg' },  // Django Icon
  { name: 'React', icon: '/iconos-skill/react.svg' },
  { name: 'Next.js', icon: '/iconos-skill/nextjs.svg' },
  { name: 'Css3', icon: '/iconos-skill/css3.svg' },
  { name: 'Html', icon: '/iconos-skill/html.svg' },
  { name: 'JavaScript', icon: '/iconos-skill/javascript.svg' },
  { name: 'TypeScript', icon: '/iconos-skill/typescript.svg' },
  { name: 'Bootstrap', icon: '/iconos-skill/bootstrap.svg' },
  { name: 'Tailwind', icon: '/iconos-skill/tailwind-css.svg' },
  { name: 'Excel', icon: '/iconos-skill/microsoft-excel.svg' },
  { name: 'Github', icon: '/iconos-skill/github.svg' },
];

const Skills = () => {
  const { isDarkMode } = useTheme(); // Para manejar el tema oscuro o claro

  return (
    <section
      className={`py-8 px-4 md:px-10  pt-40  transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      } flex flex-col items-center`}
      style={{
        backgroundColor: isDarkMode
          ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
          : "rgba(255, 182, 193, 0.0)", // Fondo semitransparente claro
      }}
    >
      <h2 className="text-5xl font-extrabold font-barlow mb-4">HABILIDADES</h2>
      <div className="w-32 h-1  mb-8">
        <hr
          className={`border ${isDarkMode ? "border-white" : "border-black"} `}
        />
      </div>

      {/* Caja que contiene todos los íconos */}
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-screen-lg relative`} // La opacidad afectará solo al fondo
      >
        {/* Fondo con transparencia */}
        <div
          className={`absolute inset-0 rounded-lg ${isDarkMode ? 'bg-gradient-to-br from-gray-950 to-teal-500' : 'bg-gradient-to-br from-white to-pink-500'}`}
          style={{
            opacity: 0.6, // Ajuste de transparencia solo para el fondo
            zIndex: 1,
          }}
        />
        {/* Contenido (iconos y texto) */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col font-extrabold font-barlow items-center min-h-[150px]">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={skill.name === 'Django' ? 48 : 68}  
                height={skill.name === 'Django' ? 48 : 68}  
                className="transition-transform duration-300 hover:scale-125"  
              />
              <p className="text-center text-lg font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Skills;

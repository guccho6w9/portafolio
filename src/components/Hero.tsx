import Image from "next/image";
import "@/app/globals.css";
import { useTheme } from "@/context/ThemeContext";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="hero"
      className={`flex flex-col md:flex-row items-center justify-between py-16 px-8  md:px-20  xl:mx-20 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-fuchsia-50 text-black"
      }`}
    >
      <div className="md:w-3/4 mb-8 md:mb-0 flex flex-col items-center md:items-start">
        <h1
          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode
              ? "from-teal-400 to-teal-50"
              : "from-fuchsia-500 to-violet-400"
          } bg-clip-text text-transparent text-center md:text-left`}
        >
          Gustavo Quiroga
        </h1>
        <h2 className="text-2xl md:text-2xl mt-4 flex items-center text-center md:text-left">
          <span className="mr-1">&gt;</span>
          <Typewriter
            options={{
              strings: ["Desarrollador Web", "Desarrollador de Software"],
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h2>

        <p
          className={`mt-4 text-base md:text-base sm:text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Con un año de experiencia en el desarrollo de software, mi enfoque se
          centra en crear soluciones innovadoras que aborden las necesidades
          específicas de los clientes. Aprendiendo continuamente, estoy siempre
          en busca de nuevos desafíos que me permitan ampliar mis habilidades.
          Estoy dando mis primeros pasos en el mundo profesional, comprometido
          en aportar valor a través de tecnologías modernas y prácticas
          efectivas.
        </p>
        {/* Línea divisoria */}
        <hr
          className={`h-px my-4 ${
            isDarkMode ? "bg-white" : "bg-black"
          } border-0 w-full`}
        ></hr>

        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1MFCwAY8m4XfFrI9TJq5-vxsp2k5ld0_p/view?usp=sharing"
            className={`inline-block ${
              isDarkMode
                ? "bg-teal-500 hover:bg-teal-700"
                : "bg-fuchsia-500 hover:bg-fuchsia-700"
            } text-white font-semibold py-3 px-6 rounded-lg transition duration-300`}
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <div
          className={`relative overflow-hidden rounded-full border-4 ${
            isDarkMode ? "border-teal-500" : "border-fuchsia-500"
          } transition-transform duration-300 hover:scale-105`}
        >
          <Image
            src="/foto_perfil.png"
            alt="Foto de Gustavo"
            width={230}
            height={230}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

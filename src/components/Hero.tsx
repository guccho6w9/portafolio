import Image from "next/image";
import "@/app/globals.css";
import { useTheme } from "@/context/ThemeContext";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
          : "rgba(255, 255, 255, 0.0)", // Fondo semitransparente claro
      }}
    >
      {/* Texto e Información */}
      <div className="md:w-3/4 mb-8 md:mb-0 flex flex-col items-center md:items-start">
        <h1
          className={`text-4xl md:text-6xl font-extrabold font-barlow bg-gradient-to-r ${
            isDarkMode ? "bg-yellow-300" : "bg-yellow-300"
          } bg-clip-text text-transparent text-center md:text-left`}
        >
          GUSTAVO QUIROGA
        </h1>
        <h2 className="text-2xl md:text-4xl mt-4 font-extrabold font-barlow flex items-center text-center md:text-left">
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
          className={`mt-4 font-extrabold font-barlow md:text-lg sm:text-lg leading-relaxed ${
            isDarkMode ? "text-bold text-white" : "text-gray-800"
          }`}
        >
          Con un año de experiencia en el desarrollo de software, mi enfoque se
          centra en crear soluciones innovadoras que aborden las necesidades
          específicas de los clientes. Aprendiendo continuamente, estoy siempre
          en busca de nuevos desafíos que me permitan ampliar mis habilidades.
        </p>

        <hr
          className={`h-px my-4 ${isDarkMode ? "bg-white" : "bg-black"} border-0 w-full`}
        ></hr>

        {/* Botón de Curriculum e Iconos de Contacto */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
          <a
            href="https://drive.google.com/file/d/1MFCwAY8m4XfFrI9TJq5-vxsp2k5ld0_p/view?usp=sharing"
            className={`inline-block mb-4 md:mb-0 ${
              isDarkMode
                ? "text-white bg-teal-500 hover:bg-teal-700"
                : "text-black bg-fuchsia-300 hover:bg-fuchsia-500"
            }  font-extrabold font-barlow py-3 px-6 rounded-lg transition duration-300`}
          >
            CURRICULUM
          </a>

          {/* Iconos de Contacto */}
          <div className="flex space-x-4 justify-center md:justify-start">
            {/* WhatsApp */}
            <a href="https://wa.me/+543856178160" target="_blank" rel="noopener noreferrer">
              <Image
                src="/iconos-contact/whatsapp.svg"
                alt="WhatsApp"
                width={44}
                height={44}
                className={`hover:scale-110 transition-transform ${isDarkMode ? "invert" : ""}`}
              />
            </a>

            {/* GitHub */}
            <a href="https://github.com/guccho6w9" target="_blank" rel="noopener noreferrer">
              <Image
                src="/iconos-contact/github.svg"
                alt="GitHub"
                width={42}
                height={42}
                className={`hover:scale-110 transition-transform ${isDarkMode ? "invert" : ""}`}
              />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/gustavo-quiroga-772313200/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/iconos-contact/linkedin.svg"
                alt="LinkedIn"
                width={48}
                height={48}
                className={`hover:scale-110 transition-transform ${isDarkMode ? "invert" : ""}`}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Imagen de Perfil */}
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

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const AboutMe = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="sobre mí"
      className={`flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 xl:mx-20 ${
        isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
      }`}
    >
      {/* Imagen al lado del cuadro */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-3 md:mt-0">
        <div
          className={`relative overflow-hidden rounded-lg border-2 ${
            isDarkMode ? "border-teal-500" : "border-fuchsia-500"
          } shadow-lg`} 
        >
          <Image
            src="/foto_perfil.png"
            alt="Foto de Gustavo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Contenedor para título y texto */}
      <div className="w-full md:w-2/3 flex flex-col items-start md:pl-0">
        {/* Título sobre mí */}
        <h2 className="text-5xl font-bold mb-4 text-center md:text-left md:ml-12">
          Sobre mí
        </h2>

        {/* Cuadro de resumen personal con degradado */}
        <div
          className={`w-full p-8 border-2 rounded-lg shadow-lg transition-transform duration-300 ${
            isDarkMode
              ? "border-teal-500 bg-gradient-to-br from-black to-teal-800 text-white" // Degradado en modo oscuro
              : " bg-white text-black"
          }`} // 
        >
          <p className="text-base md:text-base sm:text-lg ">
            ¡Hola! Soy Gustavo Quiroga, aunque todos me dicen Agucho. Nací y vivo en Santiago del Estero.
            Comencé mis estudios en la Universidad Nacional de Santiago del Estero, pero debido a la pandemia tuve que hacer una pausa.
            Después, me gradué en el Instituto Tecnológico de Santiago del Estero en la carrera de Programación, y actualmente estoy cursando
            la Tecnicatura en Ciencia de Datos e Inteligencia Artificial.</p>
            <p className="text-base md:text-base sm:text-lg">
              En los últimos tres años, me he dedicado a aprender y trabajar en proyectos
              para la cursada, personales y también como freelancer. Me apasiona la programación y la cocina, pero también tengo tiempo para disfrutar de la lectura,
              tanto de novelas como de mangas. como hincha fiel del Club Atlético Boca Juniors.
            </p>
            <p className="text-base md:text-base sm:text-lg"> Espero poder colaborar con vos y aportar todo lo que he aprendido. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

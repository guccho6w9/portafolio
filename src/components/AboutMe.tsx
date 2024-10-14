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
      style={{
        backgroundColor: isDarkMode
          ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
          : "rgba(255, 182, 193, 0.0)", // Fondo semitransparente claro
      }}
    >
      {/* Imagen al lado del cuadro */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-3 md:mt-0">
        <div className="relative overflow-hidden rounded-lg border-0">
          <Image
            src="/pngegg.webp"
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
        <h2 className="text-5xl font-extrabold font-barlow mb-4 text-center md:text-left md:ml-12">
          SOBRE MÍ
        </h2>

        {/* Cuadro de resumen personal con fondo degradado */}
        <div className="relative w-full p-8 border-1 rounded-lg shadow-lg">
          {/* Fondo con transparencia y degradado */}
          <div
            className={`absolute inset-0 rounded-lg ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-950 to-teal-500"
                : "bg-gradient-to-br from-white to-pink-500"
            }`}
            style={{
              opacity: 0.6, // Ajuste de transparencia solo para el fondo
              zIndex: 1,
            }}
          />
          
          {/* Contenido del cuadro (texto) */}
          <div className="relative z-10">
            <p className="text-base md:text-base sm:text-lg font-extrabold font-barlow ">
              ¡Hola! Soy Gustavo Quiroga, aunque todos me dicen Agucho. Nací y vivo en Santiago del Estero.
              Comencé esta incursión en el mundo de la informática aprendiendo sobre el lenguaje C en la Universidad Nacional de Santiago del Estero, pero debido a la pandemia tuve que hacer una pausa.
              Después, me gradué en el Instituto Tecnológico de Santiago del Estero en la carrera de Programación, y actualmente estoy cursando
              la Tecnicatura en Ciencia de Datos e Inteligencia Artificial.
            </p>
            <p className="text-base md:text-base sm:text-lg font-extrabold font-barlow">
              En los últimos tres años, me he dedicado a aprender y trabajar en proyectos
              para la cursada, personales y también como freelancer. Me apasiona la programación y la cocina, pero también tengo tiempo para disfrutar de la lectura. Hincha fiel del Club Atlético Boca Juniors.
            </p>
            <p className="text-base md:text-base sm:text-lg font-extrabold font-barlow">
              Espero poder colaborar con vos y aportar todo lo que he aprendido 👨‍💻.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

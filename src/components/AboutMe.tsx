import { useTheme } from "@/context/ThemeContext";

const AboutMe = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="bio"
      className={`flex md:pt-40 flex-col items-center justify-center py-16 px-8 md:px-20  ${
        isDarkMode ? "bg-black text-white" : "bg-fuchsia-50 text-black"
      }`}
      style={{
        backgroundColor: isDarkMode
          ? "rgba(68, 16, 107, 0.2)" // Fondo semitransparente oscuro
          : "rgba(255, 182, 193, 0.0)", // Fondo semitransparente claro
      }}
    >
      {/* Título sobre mí */}
      <h2 className="text-5xl font-extrabold font-barlow mb-4 text-center">
        SOBRE MÍ
      </h2>
      <div className="w-48 h-1 mx-auto mb-8">
        <hr className={`border ${isDarkMode ? 'border-white' : 'border-black'}`} />
      </div>

      {/* Simulación de barra de navegador */}
      <div className="relative w-full md:w-2/3">
        <div
          className={`rounded-t-lg px-4 py-2 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          {/* Simulación de botones de navegador */}
          <div className="flex justify-start space-x-2 mb-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>

          {/* Rectángulo de la URL */}
          <div className="rounded-full bg-gray-200 dark:bg-gray-600 px-6 py-2 shadow-md">
            <p className="text-sm md:text-base font-mono text-gray-800 dark:text-white">
              https://portafolio-quiroga-gustavo.vercel.app/
            </p>
          </div>
        </div>
      </div>

      {/* Cuadro de resumen personal con fondo degradado */}
      <div className="relative w-full md:w-2/3 p-8 border-1 rounded-lg shadow-lg">
        {/* Fondo con transparencia y degradado */}
        <div
          className={`absolute border inset-0 rounded-lg ${
            isDarkMode
              ? "border-teal-500 bg-gradient-to-br from-gray-950 to-teal-500"
              : "border-fuchsia-300 bg-gradient-to-br from-white to-fuchsia-200"
          }`}
          style={{
            opacity: 0.7, // Ajuste de transparencia solo para el fondo
            zIndex: 1,
          }}
        />

        {/* Contenido del cuadro (texto) */}
        <div className="relative z-10">
          <p className="text-base md:text-base sm:text-lg font-bold font-barlow">
            ¡Hola! Soy Gustavo Quiroga, aunque todos me dicen Agucho. Nací y vivo en Santiago del Estero.
            Comencé esta incursión en el mundo de la informática aprendiendo sobre el lenguaje C en la Universidad Nacional de Santiago del Estero, pero debido a la pandemia tuve que hacer una pausa.
            Después, me gradué en el Instituto Tecnológico de Santiago del Estero en la carrera de Programación, y actualmente estoy cursando
            la Tecnicatura en Ciencia de Datos e Inteligencia Artificial.
          </p>
          <p className="text-base md:text-base sm:text-lg font-bold font-barlow mt-4">
            En los últimos tres años, me he dedicado a aprender y trabajar en proyectos
            para la cursada, personales y también como freelancer. Me apasiona la programación y la cocina, pero también tengo tiempo para disfrutar de la lectura. Hincha fiel del Club Atlético Boca Juniors.
          </p>
          <p className="text-base md:text-base sm:text-lg font-bold font-barlow mt-4">
            Espero poder colaborar con vos y aportar todo lo que he aprendido 👨‍💻.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

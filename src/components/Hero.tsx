import Image from "next/image";
import "@/app/globals.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-black text-white"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-50 bg-clip-text text-transparent">
          Gustavo Quiroga
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 animate-pulse">
          Desarrollador Web / Developer
        </h2>
        <p className="mt-4 text-xs md:text-sm">
          Con un año de experiencia en el desarrollo de software, mi enfoque se
          centra en crear soluciones innovadoras que aborden las necesidades
          específicas de los clientes. Aprendiendo continuamente, estoy siempre
          en busca de nuevos desafíos que me permitan ampliar mis habilidades.
          Estoy dando mis primeros pasos en el mundo profesional, comprometido
          en aportar valor a través de tecnologías modernas y prácticas
          efectivas.
        </p>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gwhite"></hr>
        <a
          href="https://drive.google.com/file/d/1MFCwAY8m4XfFrI9TJq5-vxsp2k5ld0_p/view?usp=sharing"
          className=" inline-block bg-teal-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Descargar CV
        </a>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <Image
          src="/foto_perfil.png"
          alt="Foto de Gustavo"
          width={230} // Cambiado de 300 a 230
          height={230} // Cambiado de 300 a 230
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

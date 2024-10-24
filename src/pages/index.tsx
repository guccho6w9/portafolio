import "@/app/globals.css";
import Hero from "@/components/Hero";
import Navbar_menu from "@/components/Navbar_menu";
import BloqueInformativo from "@/components/Bloque_informativo";
import { ThemeProvider, useTheme } from "@/context/ThemeContext"; 
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollToTopButton from '@/pages/ScrollToTopButton';
import { Canvas } from '@react-three/fiber';
import LiquidBackground from '@/components/Blob';
import GridOverlay from '@/components/GridOverlay';
import Head from 'next/head';  // Importamos el componente Head

const HomeContent = () => {
  const { isDarkMode } = useTheme(); 

  return (
    <div 
      className={`min-h-screen ${isDarkMode ? "bg-red-300 text-gray-200" : "bg-white text-gray-100"}`} 
      style={{ 
        position: "relative", 
        zIndex: 3, 
        backgroundColor: isDarkMode ? "rgba(177, 128, 21, 0.0)" : "rgba(245, 144, 238, 0.4)" // Fondo semitransparente
      }}
    >
      <Navbar_menu />
      <ScrollToTopButton />
      <Hero />
      <BloqueInformativo />
      <Experience />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <Head>
        <title>Gusta Quiroga - Portafolio</title>  {/* Cambiamos el título */}
        <meta name="description" content="Portafolio de Gusta Quiroga" />
        <link rel="icon" href="/favicon/favicon.ico" />  {/* Ruta del favicon */}
      </Head>
      <Canvas 
        style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: 1,
          pointerEvents: "auto", // Asegúrate de que sea menor que el contenido
          backgroundColor: "transparent" 
        }}
      >
        <ambientLight intensity={1.0} />
        <pointLight position={[2, 0, 0]} intensity={1} />
        <LiquidBackground />
      </Canvas>
      
      <GridOverlay />
      <HomeContent />
    </ThemeProvider>
  );
}

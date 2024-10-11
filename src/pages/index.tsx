import "@/app/globals.css";
import Hero from "@/components/Hero";
import Navbar_menu from "@/components/Navbar_menu";
import BloqueInformativo from "@/components/Bloque_informativo";
import { ThemeProvider, useTheme } from "@/context/ThemeContext"; // Importar useTheme
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTopButton from '@/pages/ScrollToTopButton';

const HomeContent = () => {
  const { isDarkMode } = useTheme(); // Obtener el estado del tema

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black text-gray-200" : "bg-fuchsia-50 text-gray-100"}`}>
      <Navbar_menu />
      <ScrollToTopButton />
      <Hero />
      <BloqueInformativo />
      <Experience />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}

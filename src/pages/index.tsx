import "@/app/globals.css";
import Hero from "@/components/Hero";
import Navbar_menu from "@/components/Navbar_menu";
import BloqueInformativo from "@/components/Bloque_informativo";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100 dark:bg-gray-800 dark:text-gray-200">
        <Navbar_menu />
        <Hero />
        <BloqueInformativo />
      </div>
    </ThemeProvider>
  );
}

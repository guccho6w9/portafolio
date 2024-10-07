import "@/app/globals.css";
import Hero from "@/components/Hero";
import Navbar_menu from "@/components/Navbar_menu";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ThemeProvider>
        <Navbar_menu />
        <Hero />
      </ThemeProvider>
    </div>
  );
}

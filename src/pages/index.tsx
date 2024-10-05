import '@/app/globals.css';
import Hero from "@/components/Hero";
import Navbar_menu from "@/components/Navbar_menu";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Navbar_menu />
        <Hero />
   
    </div>
  );
}
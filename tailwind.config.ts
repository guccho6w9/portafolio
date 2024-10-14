import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "#24292e",
        customDarkGray: "#2b3137",
      },
      backgroundImage: {
        "custom-gradient-radial": "radial-gradient(circle, #6B46C1, #000000)", // Aquí está el degradado radial
      },
    },
  },
  darkMode: "class", // Asegúrate de que dark mode esté activado como 'class'
  plugins: [],
};

export default config;

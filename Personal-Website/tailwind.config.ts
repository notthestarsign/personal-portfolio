// tailwind.config.ts   ← name it exactly this
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",                    // ← fixed path 
    "./src/**/*.{js,ts,jsx,tsx}",      // ← fixed path
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
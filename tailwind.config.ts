// Personal-Website/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",                    // ← index.html inside Personal-Website
    "./src/**/*.{js,ts,jsx,tsx}",      // ← src/ inside Personal-Website
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
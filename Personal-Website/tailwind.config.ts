import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // This line is REQUIRED for Tailwind v4 CSS-first mode
  theme: {
    extend: {},
  },
};

export default config;
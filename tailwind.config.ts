import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "pink-primary": "#FF6B98",
        "pink-secondary": "#FFC2D1",
        "pink-dark": "#D93F76",
        "neo-black": "#1A1A1A",
      },
      boxShadow: {
        neo: "6px 6px 0 0 #1A1A1A",
        "neo-sm": "4px 4px 0 0 #1A1A1A",
        "neo-lg": "8px 8px 0 0 #1A1A1A",
      },
      borderWidth: {
        "3": "3px",
        "6": "6px",
      },
    },
  },
  plugins: [],
} satisfies Config;

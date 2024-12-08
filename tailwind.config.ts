import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-xs": { max: "639px" }, // max-xs for screens smaller than 640px
        "max-sm": "640px",
        // => @media (min-width: 640px) { ... }

        "max-md": "768px",
        // => @media (min-width: 768px) { ... }

        "max-lg": "1024px",
        // => @media (min-width: 1024px) { ... }

        "max-xl": "1280px",
        // => @media (min-width: 1280px) { ... }

        "max-2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        "floating-points": "floating-points 2s infinite ease-in-out",
        dasharray: "dasharray 1s linear forwards",
        filled: "filled 0.1s linear forwards 0.95s",
        shine: "shine 2s infinite ease-in",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "1% 0" },
          "100%": { backgroundPosition: "1% 0" },
        },
        "floating-points": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "85%": { opacity: "0" },
          "100%": { transform: "translateY(-55px)", opacity: "0" },
        },
        dasharray: {
          from: { strokeDasharray: "0 0 0 0" },
          to: { strokeDasharray: "68 68 0 0" },
        },
        filled: {
          to: { fill: "white" },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

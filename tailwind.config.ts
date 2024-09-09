import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class", // Aktifkan dark mode menggunakan class
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Warna untuk light mode
        light: {
          primary: "#000000",
          "primary-focus": "#333333",
          "primary-content": "#ffffff",
          secondary: "#ffffff",
          "secondary-focus": "#f0f0f0",
          "secondary-content": "#000000",
          accent: "#333333",
          neutral: "#ffffff",
          "base-100": "#ffffff", // Background light mode putih
          "base-200": "#f0f0f0",
          "base-300": "#e0e0e0",
          info: "#000000",
          success: "#000000",
          warning: "#000000",
          error: "#000000",
        },
        // Warna untuk dark mode
        dark: {
          primary: "#ffffff",
          "primary-focus": "#cccccc",
          "primary-content": "#000000",
          secondary: "#000000",
          "secondary-focus": "#333333",
          "secondary-content": "#ffffff",
          accent: "#999999",
          neutral: "#000000",
          "base-100": "#000000", // Background dark mode hitam
          "base-200": "#333333",
          "base-300": "#444444",
          info: "#ffffff",
          success: "#ffffff",
          warning: "#ffffff",
          error: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), daisyui],
};

export default config;

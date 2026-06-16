/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0f1b",
        surface: "#131a29",
        card: "#1e293b",
        blue: { accent: "#00aaff", dark: "#008fcc" },
        purple: { accent: "#7c3aed", light: "#a78bfa" },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
        slideIn: "slideIn 0.5s ease forwards",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        fadeUp: { from: { opacity: 0, transform: "translateY(20px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        slideIn: { from: { opacity: 0, transform: "translateX(-20px)" }, to: { opacity: 1, transform: "translateX(0)" } },
      },
    },
  },
  plugins: [],
}

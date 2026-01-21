/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        space: "#0b0f1a",
        spaceCard: "#141a2b",
        spaceModal: "#0f1424",
        accent: "#fff",
        redAccent: "#ff3b01",
        muted: "#9aa4bf",
      },
    },
  },
  plugins: [],
};

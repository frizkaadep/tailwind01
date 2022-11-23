/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        fap: "#bada55",
        coffe: "#c0ffee",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "grid-one": "url('./../img/grid/1.jpg')",
        "grid-two": "url('./../img/grid/2.jpg')",
        "grid-three": "url('./../img/grid/3.jpg')",
        "grid-four": "url('./../img/grid/4.jpg')",
        "grid-five": "url('./../img/grid/5.jpg')",
        "grid-six": "url('./../img/grid/6.jpg')",
        "grid-seven": "url('./../img/grid/7.jpg')",
        "grid-eight": "url('./../img/grid/8.jpg')",
        "grid-nine": "url('./../img/grid/9.jpg')",
        "grid-ten": "url('./../img/grid/10.jpg')",
      },
    },
  },
  plugins: [],
};

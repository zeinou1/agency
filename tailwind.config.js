/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        'menu': '1fr 1fr 1fr'
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {

        dark: {
          primary: "1F344C",
          secondary: "#040204",
          accent: "#6366f1",

        },
      },
     "dark",
        "cupcake",
        "light"
    ],

  },
}


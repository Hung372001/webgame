/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "tablet":{'max':'1024px'},
      "desktop": {'max':"1440px",},
      "phone":{'max':'599px'},
    },
    textColor:{
      "orange": "#FFA500",
      "dark-orange": "#CE7C0C",
      "smokey-white-neon": "#8D8D8D",
    },
    extend: {
      orangeFilter: {
        "fillter":" brightness(0) saturate(100%) invert(73%) sepia(10%) saturate(7288%) hue-rotate(358deg) brightness(103%) contrast(106%)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
}
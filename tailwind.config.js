/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},

      colors: {
        // "vee-gray": "#959EA6", 9191E9
        "br-blue": "#0496FF",

        "vee-gray": "#bec8c8",
        "vee-black": "#292D36",

        "vee-bg-blue": "#0496FF",
        "vee-bg-dark": "#202124",
        "vee-bg-light": "#ECEFF5",
        "vee-bg-green": "#058E3F",
      },

      fontFamily: {
        ds: "ds",
        peyda: "Peyda",
        tanha: "tanha",
        yekanX: "IRANYekanX",
        iransans: "iransans",
        bjn: "Bahij Nazanin",
      },

      borderRadius: {
        "vee-br-10": "10px",
      },
    },
  },
  plugins: [],
};

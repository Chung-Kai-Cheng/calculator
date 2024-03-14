/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "display-color": "#696969",
        "background-color": "#dae9f4",
        "main-color": "#7f9eb2",
        "second-color": "#77919d",
        "alert-color": "#274c5e",
        "hover-color": "#a4c8da",
      },
      height: {
        120: "30rem",
      },
    },
  },
  plugins: [],
};

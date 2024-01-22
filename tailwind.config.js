/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      azulMedio: '#2196F3',
      turquesa: '#00BCD4',
      grisAzuladoClaro: '#B0BEC5',
    },
    fontFamily: {
      miFuente: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
});

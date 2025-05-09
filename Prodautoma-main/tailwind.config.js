const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  
  theme: {
    
    extend: {
      colors: {
        farm: '#99EE99',
        palespringbud: '#E2FAB5',
        begonia: '#FE737C',
        LightSalmon: '#FA947C',
        cream: '#FFFCD1',
      }
    },
    
  },
  plugins: [],
}

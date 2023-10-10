/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screen:{
        "sm":"480px"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    },
  },
  plugins: [ 
    require('flowbite/plugin'),    
]}

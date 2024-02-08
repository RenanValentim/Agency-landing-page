/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
    },

    extend: {
      colors: {
        digitalLightBlue:'#CFDCED',
        digitalMediumBlue:'#8EADD5',
        digitalStrongBlue:'#5A87C2',
        
        digitalLightSlate:'#313846',
        digitalMediumSlate:'#272D38',
        digitalStrongSlate:'#1F242D',

      },
    },
  },
  plugins: [],
}
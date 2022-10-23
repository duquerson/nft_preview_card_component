/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Fraunces: ['Fraunces', "serif"],
        Montserrat: ['Montserrat', "sans-serif"]
      },
      colors: {
        /**primarios */
        azul_claro: "hsl(215, 51%, 70%)",
        azul: "hsl(178, 100%, 50%)",
        azul2: "hsl(178, 100%, 50%,50%)",
        /**neutral */
        azul_oscuro_main: "hsl(217, 54%, 11%)",
        azul_oscuro_card: "hsl(216, 50%, 16%)",
        azul_oscuro_line: "hsl(215, 32%, 27%)",
      },
      /**imagenes de fondo */
      backgroundImage:{
        ojo: "url('./images/icon-view.svg')"
      },
      /**altura personalizada */
      height:{
        '90': '21rem',

      },
      spacing:{
        '132': '8.61rem',
        '142': '42%'
      }
    },
  },
  plugins: [],
}

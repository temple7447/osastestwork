/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      ss:"411px",
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
        },
    extend: {
      colors:{
        brightRed:"hsl(12,88%,59%)",
        brightRedLight:"hls(12,88%,69%)",
        darkBlue:"hls(288,39%,23%)"
      
      }

    },
  },
  plugins: [],
}

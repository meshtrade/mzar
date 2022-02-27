module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "40%": {
            transform: "translate(20px, -20px) scale(1.1)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
        roboto: "'Roboto', sans-serif; "
      },
      width: {
        'overflow': '150%',
      },
      screens: {
        '3xl': '1700px',
        '4xl': '2000px',
        '5xl': '2300px',
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
};

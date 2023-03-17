/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
      'chakra': ['Chakra Petch'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: 1.2 }],
      sm: ['18px', { lineHeight: 1.2 }],
      md: ['24px', { lineHeight: 1.2 }],
      lg: ['30px', { lineHeight: 1.2 }],
      xl: ['40px', { lineHeight: 1.2 }],
      xxl: ['46px', { lineHeight: 1.2 }],
    },
    minWidth: {
      '30%': '30%',
      '40%': '40%',
      '60%': '60%',
      '70%': '70%',
      '75%': '75%'
    },
    maxWidth: {
      '80%': '80%',
    },
    extend: {
      colors: {
        black: 'black',
        grey: '#615F5B',
        lightGrey: "#8A8370",
      },
      textColor: {
        black: 'black',
        grey: '#615F5B',
        lightGrey: "#8A8370",
      },
      padding: {
        "7%": "7%",
        "20%": "20%",
        "10px": "10px",
      },
      margin: {
        "7%": "7%",
        "15%": "15%",
        "20%": "20%",
        "10px": "10px",
        "20px": "20px",
        "40px": "40px",
        "150px": "150px",
      },
    },
  },
  plugins: [],
}

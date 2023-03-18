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
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '75%': '75%',
      '80%': '80%',      
      '90%': '90%',
      '100px': '100px',
      '200px': '200px',
      '500px': '500px',
    },
    //maxHeight: {
    //  '20%': '20%',
    //  '30%': '30%',
    //  '40%': '40%',
    //  '50%': '50%',
    //  '60%': '60%',
    //  '70%': '70%',
    //  '75%': '75%',
    //  '80%': '80%',      
    //  '90%': '90%',
    //  '500px': '500px',
    //},
    screens: {
      'xxs': '200px',
      // => @media (min-width: 200px) { ... }
      'xs': '340px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
       // => @media (min-width: 1024px) { ... }
      'xl': '1340px',
      // => @media (min-width: 1340px) { ... }
      'xxl': '2096px',
      // => @media (min-width: 2096px) { ... }
    },
    maxWidth: {
      '15%': '15%',
      '20%': '20%',
      '50%': '50%',
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
        "3%": "3%",
        "5%": "5%",
        "7%": "7%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "5px": "5px",
        "10px": "10px",
        "20px": "20px",
        "40px": "40px",
        "80px": "80px",
        "150px": "150px",
      },
    },
  },
  plugins: [],
}

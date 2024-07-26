/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", 'sans-serif'],
        jakarata: ["Plus Jakarta Sans", 'sans-serif']
      },
      fontSize: {
        xms: ['12px', '19px'],
        xlg: ['18px', '22px'],
        '3xl': ['20px', '32px'],
        '4xl': ['24px', '38px'],
        '5xl': ['56px', '70px'],
        '6xl': ['64px', '80px'],
      },
      colors: {
        red: '#FF0000',
        black: '#000000',
        white: '#FFFFFF',
        'black-300': '#1B2228',
        'black-200': '#141414',
        'red-100': '#FFEBEB',
        'black-100': '#010101'
      },
      backgroundImage: {
        heroSection: 'url(./assets/images/png/hero-sec-bg-img.png)',
        footerSection: 'url(./assets/images/png/footer-img.png)',

      },
      boxShadow: {
        "weDo": "0px 0px 12px 3px #B6B6B640"

      }

    },
  },
  plugins: [],
}

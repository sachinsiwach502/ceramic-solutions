/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", 'sans-serif'],
      },
      fontSize: {
        xms: ['12px', '19px'],
        xlg: ['18px', '22px'],
        '3xl': ['20px', '32px'],
        '4xl': ['24px', '38px'],
        '4xxl': ['32px', '40px'],
        '5xl': ['56px', '70px'],
        '6xl': ['64px', '80px'],
      },
      colors: {
        red: '#FF0000',
        light_red: '#ff33009d',
        black: '#000000',
        white: '#FFFFFF',
        'black-300': '#1B2228',
        'black-200': '#141414',
        'red-100': '#FFEBEB',
        'black-100': '#010101',
        light_grey: '#00000026',
        grey: '#81848A',

      },
      backgroundImage: {
        heroSection: 'url(./assets/images/webp/hero-sec-bg-img.webp)',
        footerSection: 'url(./assets/images/webp/footer-img.webp)',
        getInTouch: 'url(./assets/images/webp/get-in-touch.webp)',
      },
      boxShadow: {
        "weDo": "0px 0px 12px 3px #B6B6B640",
        "itWorks": "0px 1px 28px 1px #4747471A",
        "accordian": "0px 2px 44px 3px #5757571A",
        'slider': '0px 2px 44px 3px #5757571A'
      },
      backgroundSize: {
        full: "100% 100%"
      }
    },
  },
  plugins: [],
}

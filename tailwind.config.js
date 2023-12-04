/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      deepBlack: '#121212',
      greyBlack: '#181818',
      lightBlack: '#222222',
      grey: '#303030',
      white: '#fff',
      transBlack: 'rgba(0, 0, 0, 0.50)',
      transBlackLight: 'rgba(0, 0, 0, 0.30)',
      spGreen: '#1ed760',
      spGrey: '#d3d3d3',
      lilac: '#c0b0d0',
      silver: '#b3b3b3',
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      '1xl': { max: '1400px' },
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      xs: { max: '575px' },
      '2xs': { max: '400px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

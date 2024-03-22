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
            transBlack: 'rgba(0, 0, 0, 0.70)',
            transBlackLight: 'rgba(0, 0, 0, 0.30)',
            spGreen: '#1ed760',
            spGrey: '#d3d3d3',
            lilac: '#c0b0d0',
            silver: '#b3b3b3',
        },
        screens: {
            '2xl': { max: '1535px' },
            
            '1xl': { max: '1400px' },
            xl: { max: '1279px' },
            

            lg: { max: '1023px' },
            

            md: { max: '767px' },
            

            sm: { max: '639px' },
            xs: { max: '575px' },
            '2xs': { max: '400px' },
            
        },
        extend: {
            keyframes: {
                bounce: {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                }
              },
              animation: {
                wiggle: 'bounce 1s ease alternate infinite',
              }
        },
    },
    plugins: [],
};
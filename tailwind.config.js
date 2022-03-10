module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}', // Flotiq Components location
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'light-blue': '#E9F3FF',
                primary: '#0083FC',
                'primary-2': '#015BD7',
                'dark-blue': '#141046',
            },
            fontSize: {
                'xs': '.75rem',
                'sm': '.875rem',
                'tiny': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '3rem',
                '3xl': '4rem',
                '4xl': '5rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            }
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};

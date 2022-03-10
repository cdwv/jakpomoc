module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}', // Flotiq Components location
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4CAF50',
                light: '#F9F9F9',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};

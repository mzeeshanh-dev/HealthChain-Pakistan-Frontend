const plugin = require('tailwindcss/plugin');

const config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                },
            },
            keyframes: {
                'slide-in': {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                lifeline: {
                    '0%': { transform: 'translateX(0)' },
                    '5%': { transform: 'translateX(5%) scaleY(1)' },
                    '10%': { transform: 'translateX(10%) scaleY(1)' },
                    '15%': { transform: 'translateX(15%) scaleY(1.4)' },
                    '20%': { transform: 'translateX(20%) scaleY(1)' },
                    '25%': { transform: 'translateX(25%) scaleY(4)' },
                    '30%': { transform: 'translateX(30%) scaleY(0.7)' },
                    '35%': { transform: 'translateX(35%) scaleY(2)' },
                    '40%': { transform: 'translateX(40%) scaleY(1)' },
                    '60%': { transform: 'translateX(60%) scaleY(1)' },
                    '80%': { transform: 'translateX(80%) scaleY(1)' },
                    '100%': { transform: 'translateX(100%) scaleY(1)' },
                },
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-out',
                lifeline: 'lifeline 2s linear infinite',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};

module.exports = config;

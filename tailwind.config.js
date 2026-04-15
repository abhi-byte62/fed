/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#030303',
                light: '#f5f5f5',
                blood: '#d32f2f',
                'blood-dark': '#b71c1c',
                panel: '#0a0a0c',
                bordercolor: '#222'
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/bg.png')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}

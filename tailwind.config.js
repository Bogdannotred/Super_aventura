/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                brand: {
                    light: '#e0f2fe', // sky-100
                    DEFAULT: '#0ea5e9', // sky-500
                    dark: '#0369a1', // sky-700
                    teal: '#14b8a6', // teal-500
                }
            },
        },
    },
    plugins: [],
}

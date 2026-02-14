/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0284c7',
                accent: '#38bdf8',
            },
            fontFamily: {
                serif: ['Fraunces', 'serif'],
                sans: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                darkblue: '#0b1823',
                lightblue: '#132b3f',
                deepblack: '#0a0f0d',
            },
            boxShadow: {
                'light': '0 0 4px 2px rgba(255, 255, 255, 0.2)',
            }
        },
    },
    plugins: [],
}

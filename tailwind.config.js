/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'mod-violet': '#7541c8',
                'dark-grayblue': '#48556a',
                'dark-blackblue': '#222c3f',
                'light-gray': '#cfcfcf',
                'light-grayblue': '#ecf2f8',
            },
            fontFamily: {
                sans: ['Barlow Semi Condensed', 'sans-serif'],
            },
            backgroundImage: {
                purpleBg: "url('/images/bg-pattern-quotation.svg')",
            }
        },
    },
    plugins: [],
}


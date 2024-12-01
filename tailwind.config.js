import { Config } from 'tailwindcss'

module.exports = {
    important: '#__next',
    content: [
        './src/**/*.{html,js}',
        './node_modules/@tremor/react/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

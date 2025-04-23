module.exports = {
    theme: {
        extend: {
            fontFamily: {
                inter: ['latin'],
            },
        },
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Certifique-se de que isso está configurado corretamente
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
}
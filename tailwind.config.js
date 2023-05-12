const colors = require('tailwindcss/colors')

module.exports = {
    content: [
         "./dist/*.html"
        ,"./src/**/*.{html,js,ts}"
        ,"./components/**/*.{html,js,ts}"
        ,"./public/**/*.{js,css}"
    ],
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('tailwind-scrollbar')
    ]
}
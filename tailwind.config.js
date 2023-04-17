const colors = require('tailwindcss/colors')

module.exports = {
    content: [
         "./dist/*.html"
        ,"./src/**/*.{html,js,ts}"
        ,"./components/**/*.{html,js,ts}"
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
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            flexGrow: {
                '2': 2
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            width: ['hover']
        },
    },

    plugins: [require('@tailwindcss/forms')],
};

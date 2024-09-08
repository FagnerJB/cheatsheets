/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
   content: ['./web/**/*.{html,js}'],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: '1.5rem',
         },
      },
      fontSize: {
         xs: ['0.875rem', '1.6'],
         sm: ['1rem', '1.6'],
         base: ['1.125rem', '1.6'],
         lg: ['1.25rem', '1.6'],
         xl: ['1.5rem', '1.6'],
         '2xl': ['1.875rem', '1.6'],
         '3xl': ['2.25rem', '1.6'],
      },
      extend: {
         fontFamily: {
            sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
         },
         listStyleType: {
            square: 'square',
         },
         colors: {
            dracula: {
               orange: '#FFB86C',
               white: '#F8F8F2',
               green: '#50FA7B',
               pink: '#FF79C6',
               cyan: '#8BE9FD',
               blue: '#6272A4',
               dark: '#282A36',
               gray: '#44475A',
               red: '#FF5555',
               yellow: '#F1FA8C',
            },
         },
      },
   },
   plugins: [],
}

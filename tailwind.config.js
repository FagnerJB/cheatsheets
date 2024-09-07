/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./web/**/*.{html,js}'],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: '1.5rem',
         },
      },
      extend: {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hotel/**/*.{html,js}"],
  theme: {
    extend: {
      width: ({ theme }) => ({
        'body': '1150px',

        
      }),
      fontSize: {
        mamoth: '8rem'
      },
      colors:({ colors }) => ({
        memem: '#4c0bd9',
        gero: '#f6f6f6',
      }),
      height: ({ theme }) => ({
        'rems': '29rem'
      })
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 8px 0px rgba(0, 0, 0, 8%)',
        '3bxl': '0 0px 12px 0px rgba(9, 46, 117, 0.08)',
        'c':'0 0 8px 0 rgba(0, 0, 0, 0.08)'
      }
      },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'/*'Urbanist', 'sans-serif'*/],//'Rubik', sans-serif
      'urbanist':['Urbanist','sans-serif']
    }
  },
  plugins: [],
}


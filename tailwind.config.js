/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      body: ['104px', '110%'],
      bodyS: ['56px', '110%'],
      input: ['32px', '48px'],
      inputS: ['20px', '30px'],
      label: ['14px', '21px'],
      labelS: ['12px', '18px'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#151515',
      purple: '#854DFF',
      lightGrey: '#F0F0F0',
      grey: '#716F6F',
      line: '#DCDCDC',
      red: '#FF5959',
    },
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
    },
  },
  plugins: [],
}

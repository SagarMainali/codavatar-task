/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light-bg': '#FAFAFA', //background
        'primary-dark-col': '#1D1D22', // primary-font-color
        'primary-light-col': '#636567', // secondary-font-color
        'secondary-light-col': '#9B9B9B', // placeholder/icon
        'border-light': '#D7DADC', // border/icon
        '*-col': '#FF3B30', // required-markings
        'primary-red-col': '#E50101', //buttons/logo 
        'primary-blue-col': '#0090FF' //links/files
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
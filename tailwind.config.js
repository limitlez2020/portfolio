/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure color palette here with valid CSS color values
        'gray-dark': '#161616',
        'gray-light': '#1E1E1E',
        'gray-lighter': '#2C2C2C',
        'gray-lightest': '#525252',
        'gray-text': '#828282',
        'off-white': '#ECEDEE',
      },
    },
    borderWidth: {
      // Configure border width values here
      '1': '1px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

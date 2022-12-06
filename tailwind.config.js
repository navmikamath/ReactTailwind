/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1' }],
    }
  }
  
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16':'4rem',
    },
    extend: {
      backgroundImage: {
        'bg-main' : "url('/src/assets/images/bg/main.jpg)",
      }
    },
  },
  plugins: [],
}

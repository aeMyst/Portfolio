/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/AboutMe.js',
    './src/components/ContactMe.js',
    './src/components/ProfHist.js',
    './src/components/Projects.js',
    './src/components/Socials.js',
    './src/tools/Navbar.js',
    './src/app.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      animation: {
        'fade-in-out': 'fadeInOut 3s infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': {opacity: 0},
          '50%': {opacity: 1},
        },
      },
    },
  },
  plugins: [],
};


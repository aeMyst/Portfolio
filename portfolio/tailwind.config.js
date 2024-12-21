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
    },
  },
  plugins: [],
}


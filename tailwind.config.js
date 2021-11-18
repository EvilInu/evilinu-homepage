module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('../assets/bg/hero.gif')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('../assets/bg/hero.gif')"
      }),
      colors: {
        primary: {
          "prussian-blue": "#212F45",
          "space-cadet": "#272640",
          "russian-violet": "#3E1F47",
          "dark-purple": "#312244",
          "skobeloff": "#006466"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Outfit"', 'ui-sans-serif', 'system-ui'],
      'serif': ['"Bree Serif"', 'ui-serif', 'Georgia'],
      'display': ['"Baloo Tamma 2"']
    },
    extend: {
      colors: {
        'red': '#FF6978',
        'purple': '#340068',
        'teal': '#65AFA9'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

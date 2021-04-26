module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Herlyna Sans Serif"', 'ui-sans-serif', 'system-ui'],
      'serif': ['"Chaparral Pro"', 'ui-serif', 'Georgia']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

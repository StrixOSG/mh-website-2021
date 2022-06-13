module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./pages/secret-gaming-room.tsx",
    "./pages/can-you-guess-it/index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Outfit"', 'ui-sans-serif', 'system-ui'],
      'serif': ['"Bree Serif"', 'ui-serif', 'Georgia'],
      'display': ['"Baloo Tamma 2"']
    },
    extend: {
      //https://www.tailwindshades.com/ - Step down (3)
      colors: {
        'cadet-blue-400': '#80BDB8',
        'cadet-blue': '#65AFA9',
        'cadet-blue-600': '#5BAAA3',
        'cadet-blue-700': '#54A29B',
        'purple-200': '#7100E2',
        'purple': '#340068',
        'red-400': '#FF929D',
        'red': '#FF6978',
        'red-600': '#FF5A6A',
        'sky-blue-400': '#D2E6F5',
        'sky-blue': '#B1D4ED',
        'sky-blue-600': '#A5CDEA',
        'sky-blue-700': '#98C6E7',
        'sunglow-yellow': '#FCCA46',
        'turquoise': '#B1EDE8'
      },
      width: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
      },
      inset: {
        '-18': '-4.5rem',
        '-25': '-6.25rem',
        '-34': '-8.5rem',
      }
    }
  },
  plugins: [],
}

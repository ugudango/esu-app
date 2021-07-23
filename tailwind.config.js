module.exports = {
  purge: {
    content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
      /^bg-gradient-to-/,
      /^from-/,
      /^to-/,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        electro: {
          DEFAULT: '#ee294b',
          lighter: '#f73b71',
        },
        mecanica: {
          DEFAULT: '#f6862a',
          lighter: '#fcad4c',
        },
        constructii: {
          DEFAULT: '#69b947',
          lighter: '#79e675',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

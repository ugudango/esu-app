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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

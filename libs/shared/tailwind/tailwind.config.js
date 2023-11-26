const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
        body: ['var(--font-inter)'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { fontFamily: theme('fontFamily.body'), margin: 0 },
      });
    }),
  ],
};

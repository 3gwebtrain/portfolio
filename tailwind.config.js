/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    'header/src/lib/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    'text-secondary',
    'text-white',
    'text-tertiary',
    'text-5xl ',
    'font-semibold',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#F97316',
        tertiary: '#54D6BB',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '62.5%' },
      });
    }),
  ],
};

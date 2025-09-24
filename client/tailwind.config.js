
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Make sure your file paths are correct here, e.g.:
    "./src/**/*.{html,js,jsx,ts,tsx}",
     "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(315deg, #003153 0%, #1B1B1B 74%)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

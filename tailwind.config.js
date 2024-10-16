/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['var(--header-font)'],
        domaine: ['var(--text-font)'],
      },
      colors: {
        customGreen: '#005350',
        customTeal: '#00856f',
      }
    },
  },
  plugins: [],
};

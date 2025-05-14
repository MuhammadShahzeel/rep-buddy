/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // or ts,tsx if using TypeScript
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Custom screen size
      },
    },
  },
  plugins: [],
};

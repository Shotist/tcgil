/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      colors: {
        'tcg-primary': '#1e40af',
        'tcg-secondary': '#4f46e5',
        'tcg-accent': '#f59e0b',
      },
      backgroundImage: {
        'card-pattern': "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80')",
      }
    },
  },
  plugins: [],
};
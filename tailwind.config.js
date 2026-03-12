/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b1220',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          green: '#22c55e',
          amber: '#f59e0b'
        }
      }
    }
  },
  plugins: []
};

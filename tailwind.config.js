/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0F172A',
          secondary: '#1E293B'
        },
        primary: {
          main: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB'
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#E5E7EB'
        }
      },
      borderRadius: {
        'custom-sm': '0.5rem',
        'custom-md': '0.75rem',
        'custom-lg': '1rem'
      }
    },
  },
  plugins: [],
}
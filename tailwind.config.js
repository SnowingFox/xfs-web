/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-label': '#333',
        'secondary-label': 'rgba(51, 51, 51, 0.8)',
        'tertiary-label': 'rgba(51, 51, 51, 0.6)',
        'quaternary-label': 'rgba(51, 51, 51, 0.3)',
        link: '#13386c',
        'inverted-label': '#fff',
        background: '#fff',
        'active-background': 'rgba(0, 0, 0, 0.03)',
        border: 'rgba(0, 0, 0, 0.08)',
        'shadow-border': 'rgba(0, 0, 0, 0.02)',
        'img-background': '#f7f7f7',
        primary: '#ff2e4e',
      },
    },
  },
  plugins: [],
}

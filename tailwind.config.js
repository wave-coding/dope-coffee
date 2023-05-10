/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'color-one': 'rgba(var(--color-one), <alpha-value>)',
        'color-two': 'rgba(var(--color-two), <alpha-value>)',
        'color-three': 'rgba(var(--color-three), <alpha-value>)',
        'color-four': 'rgba(var(--color-four), <alpha-value>)',
        'color-five': 'rgba(var(--color-five), <alpha-value>)',
        'color-six': 'rgba(var(--color-six), <alpha-value>)',
        'color-stroke': 'rgba(var(--color-stroke), <alpha-value>)',
        'color-protein': 'rgba(var(--color-protein), <alpha-value>)',
        'color-fat': 'rgba(var(--color-fat), <alpha-value>)',
        'color-carb': 'rgba(var(--color-carb), <alpha-value>)',
        'color-vegetarian': 'rgba(var(--color-vegetarian), <alpha-value>)',
        'color-hug': 'rgba(var(--color-hug), <alpha-value>)',
      },
      fontSize: {},
    },
  },
  plugins: [],
};

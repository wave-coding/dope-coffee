/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'headline-xlg': [
        '36px',
        { lineHeight: '42px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'headline-lg': [
        '32px',
        { lineHeight: '40px', letterSpacing: '0.009em', fontWeight: 500 },
      ],
      'headline-md': [
        '28px',
        { lineHeight: '36px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'headline-sm': [
        '18px',
        { lineHeight: '21px', letterSpacing: '0.009em', fontWeight: 700 },
      ],
      'label-md': [
        '12px',
        { lineHeight: '16px', letterSpacing: '0.009em', fontWeight: 500 },
      ],
      'label-sm': [
        '11px',
        { lineHeight: '16px', letterSpacing: '0.009em', fontWeight: 500 },
      ],
      'body-lg': [
        '16px',
        { lineHeight: '24px', letterSpacing: '0.009em', fontWeight: 500 },
      ],
      'body-md': [
        '14px',
        { lineHeight: '20px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'body-xmd': [
        '14px',
        { lineHeight: '16px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'body-sm-lg': [
        '12px',
        { lineHeight: '14px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'body-sm': [
        '10px',
        { lineHeight: '20px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'subtitle-md': [
        '12px',
        { lineHeight: '14px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      'subtitle-lg': [
        '16px',
        { lineHeight: '19px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      caption: [
        '10px',
        { lineHeight: '12px', letterSpacing: '0.009em', fontWeight: 400 },
      ],
      // lg: ['32px', { lineHeight: '40px', letterSpacing: '-0.03em' }],
      // xl: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      // '2xl': ['14px', { lineHeight: '24px', letterSpacing: '-0.032em' }],
      // '3xl': ['14px', { lineHeight: '24px', letterSpacing: '-0.032em' }],
      // '4xl': ['14px', { lineHeight: '24px', letterSpacing: '-0.032em' }],
      // '5xl': ['14px', { lineHeight: '24px', letterSpacing: '-0.032em' }],
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], //'sans-serif'
    },
    extend: {
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
        'color-neutral': 'rgba(var(--color-neutral), <alpha-value>)',
        'color-star': 'rgba(var(--color-star), <alpha-value>)',
      },
    },
  },
  plugins: [],
};

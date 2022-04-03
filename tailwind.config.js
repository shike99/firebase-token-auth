module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Noto Sans JP', 'Segoe UI', 'Roboto', 'sans-serif', 'system-ui', '-apple-system'],
    },
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'night',
      'winter',
      {
        base: {
          primary: '#3b82f6',
          secondary: '#0b3cba',
          accent: '#a21caf',
          neutral: '#1f2937',
          'base-100': '#f3f4f6',
          info: '#7dd3fc',
          success: '#6bebbc',
          warning: '#f2cf21',
          error: '#fb417f',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

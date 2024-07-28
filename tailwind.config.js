/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-normal': '0 4px 8px rgba(0, 0, 0, 0.25)',
        'custom-inner-1': 'inset 0 -4px 16px rgba(0, 0, 0, 0.10)',
        'custom-inner-2': 'inset 0 4px 16px rgba(255, 255, 255, 0.10)',
        'custom-hover': '15px 20px 30px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        'custom': '16px',
      },
      colors: {
        'header-text': '#424242',
        'subheader-text': '#3D4047',
        'background-color': '#D3D0D8', // Добавляем новый цвет для фона
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      spacing: {
        'px-4': '1rem', // Добавляем нашу переменную отступа
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      transform: ['hover'],
    },
  },
  plugins: [],
}

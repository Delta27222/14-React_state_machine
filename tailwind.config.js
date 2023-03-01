/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        typing: 'blink 1s steps(5, start) infinite'
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' }
        }
      },
      colors: {
        gptlogo: '#10a37f',
        gptdarkgray: '#202123',
        gptgray: '#343541',
        gptlightgray: '#444654'
      },
      screens: {'sm': '200px','md': '640px','lg': '768px','xl': '1280px','2xl': '1536px'},
      backgroundImage: {
        'img-moderno': "url('/images/bg-moderno.jpg')",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.3rem',
        xl: '2rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'nav': '#77a6c2',
        'nav_tittle': '#1c232e',
        'steplayout': '#a8c1d4',
        'steplayout_txt': '#fafafa',
        'tickets_city': '#f5f4f6',
        'tickets_passengers': '#449ada'
      }
    }
  },
  variants: {
    backgroundImage: ['responsive', 'hover']
  },
  plugins: []
}

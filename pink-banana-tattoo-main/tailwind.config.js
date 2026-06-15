/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF0F6',
          100: '#FFD6EC',
          200: '#FFB8DB',
          300: '#FF9ACA',
          400: '#FF6FB5',
          500: '#FF3D8E',
          600: '#E6247A',
          700: '#B81D5F',
          800: '#8A1745',
          900: '#5C0F2E',
        },
        banana: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF3AB',
          300: '#FFED80',
          400: '#FFE74C',
          500: '#FFD700',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-pink': 'pulsePink 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulsePink: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 111, 181, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(255, 111, 181, 0)' },
        },
      },
    },
  },
  plugins: [],
};

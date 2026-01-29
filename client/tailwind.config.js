/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette matching the original design
        'brand-dark': '#0B0B0B',
        'brand-primary': '#ff9800',
        'brand-secondary': '#ff5722',
        'brand-orange': {
          400: '#ff9800',
          500: '#ff9800',
          600: '#ff5722',
          light: '#ffb74d',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'reveal-down': 'revealDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'reveal-left': 'revealLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'reveal-right': 'revealRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'blur-in': 'blurIn 0.6s ease forwards',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 152, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 152, 0, 0.6), 0 0 60px rgba(255, 87, 34, 0.4)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        revealDown: {
          from: { opacity: '0', transform: 'translateY(-60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        revealLeft: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        revealRight: {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        blurIn: {
          from: { opacity: '0', filter: 'blur(20px)' },
          to: { opacity: '1', filter: 'blur(0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #ff9800, #ff5722)',
        'accent-gradient-alt': 'linear-gradient(45deg, #ff9800, #ffb74d, #ff5722)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(255, 152, 0, 0.3)',
        'glow-intense': '0 0 60px rgba(255, 152, 0, 0.5)',
      },
    },
  },
  plugins: [],
}


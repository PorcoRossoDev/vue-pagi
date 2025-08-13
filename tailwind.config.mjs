export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    './src/view/**/*.{vue,js,ts}'
  ],
  safelist: [
    'animate-rotate-shape',
    'animate-rotate-shape-reverse',
    'animate-float-shape'
  ],
  theme: {
    extend: {
      keyframes: {
        'rotate-shape': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'rotate-shape-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        'float-shape': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        'rotate-shape': 'rotate-shape 8s linear infinite',
        'rotate-shape-reverse': 'rotate-shape-reverse 8s linear infinite',
        'float-shape': 'float-shape 4s ease-in-out infinite'
      }
    }
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#b5ddff',
          300: '#84c2ff',
          400: '#4ca0ff',
          500: '#2a7fff',
          600: '#1e64f5',
          700: '#1a4dda',
          800: '#1b41af',
          900: '#1b3a8a'
        }
      },
      backgroundImage: {
        'mesh-brand':
          'radial-gradient(circle at 12% 20%, rgba(42, 127, 255, 0.28) 0, transparent 40%), radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.24) 0, transparent 36%), radial-gradient(circle at 80% 75%, rgba(249, 115, 22, 0.22) 0, transparent 44%), linear-gradient(145deg, rgba(5, 15, 36, 0.98), rgba(11, 31, 66, 0.96))',
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.11'/%3E%3C/svg%3E\")"
      },
      boxShadow: {
        glow: '0 30px 80px -28px rgba(34, 115, 255, 0.55)',
        glass: '0 10px 40px -14px rgba(10, 22, 52, 0.45)',
        card: '0 20px 45px -20px rgba(15, 23, 42, 0.35)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(8px,-12px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' }
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(150%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.65 },
          '50%': { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite',
        sheen: 'sheen 1.3s ease-out',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite'
      }
    }
  },
  plugins: []
}

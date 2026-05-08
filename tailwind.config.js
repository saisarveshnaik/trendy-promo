/** @type {import('tailwindcss').Config} */
export default {
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
      fontFamily: {
        heading: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Segoe UI', 'sans-serif']
      },
      backgroundImage: {
        'mesh-brand':
          'radial-gradient(circle at 8% 12%, rgba(112, 173, 255, 0.42) 0, transparent 38%), radial-gradient(circle at 88% 10%, rgba(163, 141, 255, 0.36) 0, transparent 34%), radial-gradient(circle at 86% 78%, rgba(255, 178, 123, 0.36) 0, transparent 36%), radial-gradient(circle at 12% 86%, rgba(107, 231, 248, 0.32) 0, transparent 28%), linear-gradient(168deg, #f7f9ff 0%, #f9fbff 48%, #f7f5ff 100%)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.11'/%3E%3C/svg%3E\")"
      },
      boxShadow: {
        glow: '10px 10px 24px rgba(128, 145, 176, 0.42), 18px 18px 36px rgba(153, 168, 191, 0.24), -6px -6px 14px rgba(255, 255, 255, 0.54)',
        glass: '8px 8px 18px rgba(133, 149, 179, 0.4), 16px 16px 32px rgba(157, 170, 193, 0.22), -5px -5px 12px rgba(255, 255, 255, 0.52)',
        card: '10px 10px 22px rgba(132, 149, 177, 0.45), 20px 20px 38px rgba(154, 167, 190, 0.25), -6px -6px 14px rgba(255, 255, 255, 0.56)',
        soft: '6px 6px 14px rgba(145, 161, 187, 0.32), -3px -3px 8px rgba(255, 255, 255, 0.46)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' }
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(14px, -12px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(150%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.65 },
          '50%': { opacity: 1 }
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' }
        },
        parallax: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-18px,0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite',
        bob: 'bob 7s ease-in-out infinite',
        parallax: 'parallax 12s ease-in-out infinite',
        sheen: 'sheen 1.3s ease-out',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite'
      }
    }
  },
  plugins: []
}

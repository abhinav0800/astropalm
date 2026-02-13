/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Background Colors
        cosmic: {
          900: '#0f0a1e',
          800: '#1a1333',
          700: '#251c48',
          600: '#30255d',
          500: '#3b2e72',
          400: '#4a3d87',
          300: '#5f52a0',
          200: '#8578ba',
          100: '#b5aad4',
          50: '#e5e2f0'
        },
        // Accent Colors - Neon Glow
        neon: {
          cyan: '#00f5ff',
          blue: '#4d9fff',
          purple: '#a855f7',
          pink: '#ec4899',
          violet: '#8b5cf6'
        },
        // Gradient Colors
        mystic: {
          start: '#1e1b4b',
          mid: '#312e81',
          end: '#4c1d95'
        },
        // Glass Colors
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.15)',
          heavy: 'rgba(255, 255, 255, 0.2)',
          border: 'rgba(255, 255, 255, 0.18)'
        },
        // Text Colors
        textPrimary: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.8)',
        textMuted: 'rgba(255, 255, 255, 0.6)',
        textSubtle: 'rgba(255, 255, 255, 0.4)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        mystical: ['Cinzel', 'Georgia', 'serif']
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],
        '2xs': ['0.6875rem', { lineHeight: '1rem' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(77, 159, 255, 0.3)',
        'glow-md': '0 0 20px rgba(77, 159, 255, 0.4)',
        'glow-lg': '0 0 30px rgba(77, 159, 255, 0.5)',
        'glow-xl': '0 0 40px rgba(77, 159, 255, 0.6)',
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 12px 48px rgba(0, 0, 0, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      backgroundImage: {
        // Cosmic Gradients
        'gradient-cosmic': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
        'gradient-mystic': 'linear-gradient(180deg, #0f0a1e 0%, #1a1333 50%, #251c48 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, #312e81 0%, #0f0a1e 70%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(77, 159, 255, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-button': 'linear-gradient(135deg, #4d9fff 0%, #a855f7 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #6cb3ff 0%, #c084fc 100%)',
        // Animated Backgrounds
        'stars': 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent)',
        // Glass Effect
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
        '5xl': '96px'
      },
      animation: {
        // Floating animations
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        // Pulse animations
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Spin animations
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spinReverse 10s linear infinite',
        // Fade animations
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        // Scale animations
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        // Shimmer effect
        'shimmer': 'shimmer 2s linear infinite',
        // Card flip
        'flip': 'flip 0.6s ease-in-out',
        // Glow border
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        // Typing dots
        'typing': 'typing 1.4s ease-in-out infinite',
        // Stars twinkle
        'twinkle': 'twinkle 4s ease-in-out infinite',
        // Slide animations
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        // Heartbeat
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        // Scan line
        'scan-line': 'scanLine 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(77, 159, 255, 0.4)',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(77, 159, 255, 0.8)',
            opacity: '0.8'
          }
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '100%': { transform: 'perspective(400px) rotateY(180deg)' }
        },
        borderGlow: {
          '0%, 100%': { 
            borderColor: 'rgba(77, 159, 255, 0.5)',
            boxShadow: '0 0 10px rgba(77, 159, 255, 0.3)'
          },
          '50%': { 
            borderColor: 'rgba(168, 85, 247, 0.5)',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
          }
        },
        typing: {
          '0%, 60%, 100%': { opacity: '0' },
          '30%': { opacity: '1' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(1)' }
        },
        scanLine: {
          '0%': { top: '0%', opacity: '1' },
          '50%': { top: '100%', opacity: '0.5' },
          '100%': { top: '0%', opacity: '1' }
        }
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'modal': '1000',
        'toast': '1100',
        'tooltip': '1200'
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px'
      },
      minHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))'
      },
      maxWidth: {
        'mobile': '430px'
      }
    }
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    safelist: [
      'bg-primary',
      'text-primary',
      'bg-secondary',
      'text-secondary',
      'bg-primary/90',
      'bg-primary/10',
      'text-white',
      'bg-gray-50',
      'bg-gray-100',
      'text-gray-500',
      'text-gray-600',
      'text-gray-700',
      'text-gray-800',
      'bg-green-100',
      'text-green-500',
      'text-green-800',
      'bg-blue-100',
      'text-blue-600',
      'text-blue-800',
      'bg-purple-100',
      'text-purple-600',
      'text-purple-800',
      'bg-white/10',
      'bg-gray-900',
      'text-gray-300',
    ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          '90': '#4f8df7',
          '10': '#ebf2fe',
        },
        secondary: {
          DEFAULT: '#10b981',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mafia: {
                    black: '#0A0A0A',
                    charcoal: '#1A1A1A',
                    dark: '#111111',
                    silver: '#C0C0C0',
                    chrome: '#D4D4D8',
                    gunmetal: '#2C3539',
                    steel: '#71797E',
                    gold: '#B8860B',
                },
            },
            fontFamily: {
                heading: ['Oswald', 'Arial Black', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'shimmer': 'shimmer 2.5s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(192, 192, 192, 0.1)' },
                    '50%': { boxShadow: '0 0 40px rgba(192, 192, 192, 0.3)' },
                },
            },
        },
    },
    plugins: [],
}

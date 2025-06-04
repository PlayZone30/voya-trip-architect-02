
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// VOYA Design System Colors - Misty Mountain Palette
				'deep-forest': '#2D4A3E',
				'forest-secondary': '#3B5249',
				'misty-blue': '#4A6B7C',
				'misty-secondary': '#5A7B8C',
				'cloud-white': '#FFFFFF',
				'fog-gray': '#E8EDF2',
				'accent-gold': '#D4AF37',
				'mountain-shadow': '#1A2B23',
				'morning-mist': '#F8FAFB',
				'stone-gray': '#64748B',
				'warm-copper': '#B8860B',
				'sky-blue': '#87CEEB',
				'golden-glow': '#E6C547',
				'bronze-accent': '#A67C52',
				
				// Existing shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2D4A3E',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#4A6B7C',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#D4AF37',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'mountain-mist': 'linear-gradient(135deg, #2D4A3E 0%, #3B5249 25%, #4A6B7C 50%, #5A7B8C 75%, #E8EDF2 100%)',
				'mountain-silhouette': 'linear-gradient(to bottom, #2D4A3E 0%, #3B5249 20%, #4A6B7C 40%, #5A7B8C 60%, #87CEEB 80%, #F8FAFB 100%)',
				'misty-depth': 'linear-gradient(to bottom, rgba(45, 74, 62, 0.9) 0%, rgba(59, 82, 73, 0.7) 25%, rgba(74, 107, 124, 0.5) 50%, rgba(90, 123, 140, 0.3) 75%, rgba(248, 250, 251, 0.1) 100%)',
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'mist-clear': {
					'0%': {
						opacity: '0.3',
						transform: 'scale(1.05)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'mountain-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'compass-spin': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'golden-pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				},
				'mist-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'33%': {
						transform: 'translateY(-10px) translateX(5px)'
					},
					'66%': {
						transform: 'translateY(5px) translateX(-5px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'mist-clear': 'mist-clear 0.6s ease-out',
				'mountain-reveal': 'mountain-reveal 0.4s ease-out',
				'compass-spin': 'compass-spin 2s ease-in-out infinite',
				'golden-pulse': 'golden-pulse 2s ease-in-out infinite',
				'mist-float': 'mist-float 6s ease-in-out infinite'
			},
			backdropBlur: {
				'mountain': '20px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

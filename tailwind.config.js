/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			'roboto-black': [
  				'roboto-black',
  				'sans-serif'
  			],
  			'roboto-black-italic': [
  				'roboto-black-italic',
  				'sans-serif'
  			],
  			'roboto-bold': [
  				'roboto-bold',
  				'sans-serif'
  			],
  			'roboto-bold-italic': [
  				'roboto-bold-italic',
  				'sans-serif'
  			],
  			'roboto-italic': [
  				'roboto-italic',
  				'sans-serif'
  			],
  			'roboto-light': [
  				'roboto-light',
  				'sans-serif'
  			],
  			'roboto-light-italic': [
  				'roboto-light-italic',
  				'sans-serif'
  			],
  			'roboto-medium': [
  				'roboto-medium',
  				'sans-serif'
  			],
  			'roboto-medium-italic': [
  				'roboto-medium-italic',
  				'sans-serif'
  			],
  			roboto: [
  				'roboto',
  				'sans-serif'
  			],
  			'roboto-thin': [
  				'roboto-thin',
  				'sans-serif'
  			],
  			'roboto-thin-italic': [
  				'roboto-thin-italic',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				'100': '#C2D4FA',
  				'200': '#7BA3F5',
  				'300': '#6392F3',
  				'400': '#4B82F1',
  				'500': '#3572EF',
  				'600': '#1C61ED',
  				'700': '#1255DE',
  				'800': '#104CC6',
  				'900': '#0E43AF',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			neutral: {
  				'100': '#FFFFFF',
  				'200': '#F7F7F7',
  				'300': '#EBEBEB',
  				'400': '#C4C4C4',
  				'500': '#ABABAB',
  				'600': '#919191',
  				'700': '#787878',
  				'800': '#5E5E5E',
  				'900': '#2B2B2B'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

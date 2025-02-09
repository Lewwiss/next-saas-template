import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			"title": ["Cabinet Grotesk", "sans-serif"],
		},
  		colors: {
			'neutral': {
				'50': '#fff5ec',
				'100': '#ffe8d3',
				'200': '#ffcea5',
				'300': '#ffab6d',
				'400': '#ff7c32',
				'500': '#ff580a',
				'600': '#ff3d00',
				'700': '#cc2802',
				'800': '#a1210b',
				'900': '#821e0c',
				'950': '#450d05',
			},
			'aquamarine': {
				'50': '#f0fdf6',
				'100': '#dbfded',
				'200': '#baf8da',
				'300': '#84f1bd',
				'400': '#37de8f',
				'500': '#1fc878',
				'600': '#13a661',
				'700': '#13824f',
				'800': '#156641',
				'900': '#135438',
				'950': '#042f1d',
			},
			/*
			'emerald': {
				'50': '#f0fdf6',
				'100': '#dbfded',
				'200': '#baf8da',
				'300': '#84f1bd',
				'400': '#37de8f',
				'500': '#1fc878',
				'600': '#13a661',
				'700': '#13824f',
				'800': '#156641',
				'900': '#135438',
				'950': '#042f1d',
			},
			*/
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  			}
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
} satisfies Config;

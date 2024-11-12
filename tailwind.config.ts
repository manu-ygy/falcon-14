import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,jsx,ts,tsx,mdx}'
    ],
    theme: {
  	extend: {
  		colors: {
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
  			},
			  qmaroon: {
				50: '#faeef2',   // Sangat terang, hampir putih
				100: '#f5d5df',  // Terang, warna pastel
				200: '#eaa6bb',  // Lebih terang dengan sedikit merah muda
				300: '#de7896',  // Lebih terang dengan nuansa merah muda jelas
				400: '#d14a72',  // Mendekati warna utama, lebih cerah
				500: '#662046',  // Warna utama (patokan)
				600: '#5c1d40',  // Lebih gelap dari patokan, menambah kedalaman
				700: '#501936',  // Lebih gelap lagi, untuk kontras
				800: '#43152c',  // Warna gelap pekat
				900: '#361124',  // Sangat gelap, hampir hitam
			},			
			qgold: {
				50: '#cbe7f9',    // Sangat terang, hampir putih dengan sentuhan biru muda
				100: '#a3d1f4',    // Terang, biru muda yang lembut
				200: '#7bbaf0',    // Biru muda yang lebih pekat
				300: '#559ce9',    // Biru cerah yang lebih intens
				400: '#338ee3',    // Biru yang lebih dalam, sedikit lebih kuat
				500: '#0090e0',    // Warna biru asli yang solid
				600: '#0077c1',    // Biru lebih gelap, lebih intens
				700: '#00629b',    // Biru dengan kedalaman lebih
				800: '#004d79',    // Biru tua, namun tetap ada kesan biru terang
				900: '#00345a',    // Gelap,		  
			},
			
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
  		},
            backgroundImage: {
                'primary-gradient': 'linear-gradient(to right, #9e1b32, #d8a8a4)',
				'secondary-gradient': 'linear-gradient(90deg, #b8952f, #d4af37, #dfbf5a, #f1e0b0, #fcf9f3);'
            },
  	}
    },
    plugins: [require('tailwindcss-animate'), require('@designbycode/tailwindcss-mask-image')],
};
export default config;

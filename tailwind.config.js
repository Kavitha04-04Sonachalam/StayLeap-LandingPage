/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'admin-primary': {
					DEFAULT: 'hsl(var(--admin-primary))',
					hover: 'hsl(var(--admin-primary-hover))',
					foreground: 'hsl(var(--admin-primary-foreground))'
				},
				'admin-bg': 'hsl(var(--admin-bg))',
				'admin-card': {
					DEFAULT: 'hsl(var(--admin-card))',
					foreground: 'hsl(var(--admin-card-foreground))'
				},
				'admin-sidebar': {
					bg: 'hsl(var(--admin-sidebar-bg))',
					text: 'hsl(var(--admin-sidebar-text))',
					'active-bg': 'hsl(var(--admin-sidebar-active-bg))',
					'active-text': 'hsl(var(--admin-sidebar-active-text))',
					icon: 'hsl(var(--admin-sidebar-icon))'
				},
				'admin-header': {
					bg: 'hsl(var(--admin-header-bg))',
					text: 'hsl(var(--admin-header-text))'
				},
				'admin-secondary-text': 'hsl(var(--admin-secondary-text))',
				'admin-description-text': 'hsl(var(--admin-description-text))',
				'admin-border': 'hsl(var(--admin-border))',
				'admin-success': 'hsl(var(--admin-success))',
				'admin-danger': 'hsl(var(--admin-danger))',
				paid: {
					DEFAULT: 'hsl(var(--paid))',
					foreground: 'hsl(var(--paid-foreground))'
				},
				pending: {
					DEFAULT: 'hsl(var(--pending))',
					foreground: 'hsl(var(--pending-foreground))'
				},
				overdue: {
					DEFAULT: 'hsl(var(--overdue))',
					foreground: 'hsl(var(--overdue-foreground))'
				},
				priority: {
					high: 'hsl(var(--priority-high))',
					'high-foreground': 'hsl(var(--priority-high-foreground))',
					medium: 'hsl(var(--priority-medium))',
					'medium-foreground': 'hsl(var(--priority-medium-foreground))',
					low: 'hsl(var(--priority-low))',
					'low-foreground': 'hsl(var(--priority-low-foreground))'
				},
				'light-green': {
					DEFAULT: 'hsl(var(--light-green))',
					foreground: 'hsl(var(--light-green-foreground))'
				},
				'dashboard-primary': 'hsl(var(--dashboard-primary))',
				'dashboard-card-bg': 'hsl(var(--dashboard-card-bg))',
				'dashboard-bg': 'hsl(var(--dashboard-bg))',
				'dashboard-continue-primary': 'hsl(var(--dashboard-continue-primary))',
				'dashboard-continue-accent': 'hsl(var(--dashboard-continue-accent))',
				'dashboard-continue-bg': 'hsl(var(--dashboard-continue-bg))',
				'tenant-primary': 'hsl(var(--tenant-primary))',
				'tenant-card-bg': 'hsl(var(--tenant-card-bg))',
				'tenant-bg': 'hsl(var(--tenant-bg))',
				'form-primary': 'hsl(var(--form-primary))',
				'form-accent': 'hsl(var(--form-accent))',
				'form-bg': 'hsl(var(--form-bg))',
				'payment-primary': 'hsl(var(--payment-primary))',
				'payment-warning': 'hsl(var(--payment-warning))',
				'payment-bg': 'hsl(var(--payment-bg))',
				'room-primary': 'hsl(var(--room-primary))',
				'room-accent': 'hsl(var(--room-accent))',
				'room-bg': 'hsl(var(--room-bg))',
				'reports-primary': 'hsl(var(--reports-primary))',
				'reports-accent': 'hsl(var(--reports-accent))',
				'reports-bg': 'hsl(var(--reports-bg))'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'lg': 'var(--shadow-lg)'
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
};

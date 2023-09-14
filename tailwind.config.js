/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			screens: {
				'2k': '2048px',
				'2.5k': '2560px'
			},
			spacing: {
				'24vw': '24vw',
			},
			maxWidth: {
				'xxs': '16rem'
			},
			maxHeight: {
				'xxs': '16rem'
			},
			backgroundImage: {
				'gradient': 'url("/img/gradient.webp")',
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
		backgroundColor: theme => ({
			...theme('colors'),
			'dark_hover': '#1B1A43',
			'hover': '#26264E',
			'sidebar_bg': '#141432',
			'main_bg': '#1D1D42',
			'searchbar_hover': '#1B1A43'
		})
	},
	plugins: [],
}
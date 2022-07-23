/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"login-bg": "url(/LoginBg.png)",
			},
		},
	},
	plugins: [],
};

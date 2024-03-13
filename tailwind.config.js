/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				logo: ['Inknut Antiqua', 'sans-serif'],
				inika: ['Inika', 'sans-serif'],
			},
			colors: {
				// Using Tailwind's purple color palette
				purple: {
					500: '#501873',
				},
			},
		},
	},
	plugins: [],
};

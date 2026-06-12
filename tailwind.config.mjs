/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'tramarq-blue': '#007AFF', // Bleu du logo
				'tramarq-red': '#FF0000',  // Rouge du logo
				'tramarq-dark': '#000000', // Noir du logo
			},
		},
	},
	plugins: [],
}
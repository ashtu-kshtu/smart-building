// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Dokumente',
			social: [{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/elsi_alija' }],
			sidebar: [
...

				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
	vite: {
		build: {
			rolldownOptions: {
				external: ['@bruits/satteri-wasm32-wasi']
			}
		}
	}
});
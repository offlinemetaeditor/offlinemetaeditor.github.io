// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Published on GitHub Pages as a user/organization site, so there is no base path.
export default defineConfig({
	site: 'https://offlinemetaeditor.github.io',
	integrations: [
		starlight({
			title: 'Offline Meta Editor',
			description: 'Download a Meta ad account, edit it offline, check every change with Meta and upload it back.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '48x48' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#1c8ce3' } },
				// The card shown when a page is shared (WhatsApp, LinkedIn, X…).
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://offlinemetaeditor.github.io/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://offlinemetaeditor.github.io/og.png' } },
			],
			// English at /, Brazilian Portuguese at /pt-br/.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'pt-br': { label: 'Português', lang: 'pt-BR' },
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/Footer.astro',
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Start here',
					translations: { 'pt-BR': 'Comece aqui' },
					items: ['getting-started', 'access-token'],
				},
				{
					label: 'Guides',
					translations: { 'pt-BR': 'Guias' },
					items: [
						'guides/editor-window',
						'guides/campaigns-and-ad-sets',
						'guides/ads',
						'guides/bulk-changes',
						'guides/check-and-push',
						'guides/spreadsheets',
						'guides/events-and-audiences',
						'guides/tabs-and-favorites',
					],
				},
				{
					label: 'Reference',
					translations: { 'pt-BR': 'Referência' },
					items: [
						'reference/keyboard-shortcuts',
						'reference/command-line',
						'reference/settings-and-data',
						'reference/how-sync-works',
						'reference/troubleshooting',
						'reference/privacy',
					],
				},
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Smart-building',
            social: [{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/elsi_alija' }],
            // Du kannst customCss hier drin lassen oder entfernen, 
            // für die Flaggen wird es nicht mehr benötigt.
            customCss: [
                './src/styles/custom.css',
            ],
            locales: {
                root: {
                    label: '🇩🇪 Deutsch', // Flagge hier direkt einfügen
                    lang: 'de',
                },
                sq: {
                    label: '🇦🇱 Shqip', // Flagge hier direkt einfügen
                    lang: 'sq',
                },
            },
            sidebar: [
                {
                    label: 'Startseite',
                    link: '/',
                },
                {
                    label: 'Fachbereiche',
                    items: [
                        { label: 'KNX', slug: 'bereiche/knx' },
                        { label: 'DALI', slug: 'bereiche/dali' },
                        { label: 'BACnet', slug: 'bereiche/bacnet' },
                        { label: 'ModBUS', slug: 'bereiche/modbus' },
                        { label: 'Elektro', slug: 'bereiche/elektro' },
                    ],
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
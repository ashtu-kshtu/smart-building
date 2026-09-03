// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Smart-building',
            social: [{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/elsi_alija' }],
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
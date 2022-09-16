import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { astroCallouts } from './integrations/Asides';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    astroCallouts(),
    tailwind(),
    mdx(),
  ],
  legacy: {
    astroFlavoredMarkdown: true,
  },
  site: `http://astro.build`,
});

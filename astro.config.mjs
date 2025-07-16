// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  output: 'server', // 👈 obligatorio para usar funciones tipo API
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()]
});
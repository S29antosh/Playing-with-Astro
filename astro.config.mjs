import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: netlify(),
  site: 'https://S29antosh.github.io',
  base: '/Playing with-Astro'
});

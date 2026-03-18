// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema:{
      SHOW_SEE_MORE_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
      RANDOM_NUMBER: envField.string({ context: 'server', access: 'public' })
    }
  },

  adapter: node({
    mode: 'standalone'
  }),

  site: 'https://<EL4toCAARMINE>.github.io', 
  base: '/<gastos-hormiga>',
});
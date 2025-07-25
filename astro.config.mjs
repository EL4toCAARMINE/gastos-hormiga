// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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
  }
});
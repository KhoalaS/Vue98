import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueDevTools(),
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.lib.json' }),
  ],
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/lib/index.ts'),
      fileName: (format) => `index.${format}.js`,
      cssFileName: 'main',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/lib/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/lib/composables', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/lib/assets', import.meta.url)),
    },
  },
})

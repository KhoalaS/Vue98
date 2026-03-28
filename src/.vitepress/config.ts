import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue-98',
  description: 'Vue-98 docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guide' },
      { text: 'Components', link: '/components' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Components',
            items: [
              {
                text: 'WButton',
                link: '/components/button',
              },
              {
                text: 'Taskbar',
                link: '/components/taskbar',
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/KhoalaS/Vue98' }],
  },
  rewrites: {
    'lib/:pkg/:slug*': ':pkg/:slug*',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue-98',
  description: 'Vue-98 docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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
})

import { defineConfig } from 'vitepress'
// import './theme/custom.css'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/community/',
  title: "community.",
  description: "music, software, discussions, and events about quantum computing and creative practice",
  head: [
    [
      'meta',
      { property: 'og:image', content: 'https://quantumland-art.github.io/community/logo2.jpg'}
    ],
    [
      'meta',
      { property: 'og:title', content: 'Community.'}
    ],
    [
      'meta',
      { property: 'og:description', content: 'music, software, discussions, and events about quantum computing and creative practice'}
    ],
    [
      'meta',
      { property: 'twitter:card', content: 'summary_large_image'}
    ],
    [
      'meta',
      { property: 'twitter:image', content: 'https://quantumland-art.github.io/community/logo2.jpg'}
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: 'https://quantumland-art.github.io/community/icon.png'}
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/Quantumland-art/community/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the AGPLv3 License.',
      copyright: 'Copyright © 2023-present Omar Costa Hamido'
    },

    lastUpdated: true,

    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Learn', link: '/getting-started' }
    // ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Github account', link: '/github-account' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quantumland-art/community' },
      { icon: 'twitter', link: 'https://twitter.com/@omarcostahamido' },
      { icon: 'youtube', link: 'https://youtube.com/@och-art' }
    ]
  }
})

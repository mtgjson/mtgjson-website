const generateSidebarRoutes = require('./config.sidebar');

module.exports = {
  host: '0.0.0.0',
  port: '8080',
  // Google Analytics
  ga: 'UA-131358443-1',
  // SEO
  title: 'MTGJSON',
  description: 'Magic: The Gathering card data in JSON.',
  // Support Links
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css',
      },
    ]
  ],
  // Vuepress Themeing
  // 
  themeConfig: {
    searchMaxSuggestions: 20,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Talk to Us', link: 'https://discord.gg/74GUQDE' },
      { text: 'Contribute', link: 'https://github.com/mtgjson' },
      { text: 'Donate', link: 'https://www.paypal.me/Zachhalpern' },
    ],
    sidebar: [
      '/',
      {
        title: 'Downloads',
        path: '/downloads/compiled',
        collapsable: false,
        children: generateSidebarRoutes('/downloads/'),
      },
      {
        title: 'Structured Data',
        path: '/structured-data/card',
        collapsable: false,
        children: generateSidebarRoutes('/structured-data/'),
      },
      {
        title: 'Output Data',
        path: '/output-data/keywords',
        collapsable: false,
        children: generateSidebarRoutes('/output-data/'),
      },
      '/help/',
      '/changelog/'
    ],
  }
};

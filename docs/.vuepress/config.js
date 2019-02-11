require('dotenv').config();
const generateSidebarRoutes = require('./config.sidebar');

module.exports = {
  // Deployment
  // https://vuepress.vuejs.org/guide/deploy.html
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '3000',
  static: process.env.NODE_ENV === 'production' ? '0.0.0.0:3000/json/' : '../public/json',
  // SEO
  title: 'MTGJSON (v4)',
  description: 'Magic: The Gathering card data in JSON ',
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
    serviceWorker: {
      updatePopup: true
    },
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Discord', link: 'https://discord.gg/74GUQDE' },
      { text: 'Github', link: 'https://github.com/mtgjson/mtgjson' },
      { text: 'Donate Now', link: 'https://www.paypal.me/Zachhalpern' },
    ],
    sidebar: [
      '/',
      {
        title: 'Data Structures',
        path: '/structures/card',
        collapsable: false,
        children: generateSidebarRoutes('/structures/'),
      },
      {
        title: 'Downloads',
        path: '/downloads/all-cards',
        collapsable: false,
        children: generateSidebarRoutes('/downloads/'),
      },
      '/changelog/'
    ],
  }
};

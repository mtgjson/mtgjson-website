const documentationChildren = require('./documentation.js')();

module.exports = {
  host: '0.0.0.0',
  port: '8080',
  title: 'MTGJSON (v4)',
  description: 'Magic: The Gathering card data in JSON ',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/ico',
        sizes: '32x32',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Discord', link: 'https://discord.gg/74GUQDE' },
      { text: 'Github', link: 'https://github.com/mtgjson/mtgjson' },
      { text: 'Donate Now', link: 'https://www.paypal.me/Zachhalpern' },
    ],
    sidebar: [
      '/',
      {
        title: 'Documentation',
        path: '/documentation/',
        collapsable: false,
        children: documentationChildren,
      },
      '/changelog/',
      '/downloads/'
    ],
    lastUpdated: 'Last Updated',
  },
};

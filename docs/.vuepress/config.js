const documentationChildren = require('./documentation.js')();

module.exports = {
  // Deployment
  // https://vuepress.vuejs.org/guide/deploy.html
  host: '0.0.0.0',
  port: '3000',
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
    nav: [
      { text: 'Discord', link: 'https://discord.gg/74GUQDE' },
      { text: 'Github', link: 'https://github.com/mtgjson/mtgjson' },
      { text: 'Donate Now', link: 'https://www.paypal.me/Zachhalpern' },
    ],
    sidebar: [
      '/',
      '/changelog/',
      '/downloads/',
      {
        title: 'Documentation',
        path: '/documentation/',
        collapsable: false,
        children: documentationChildren,
      },
    ],
    serviceWorker: {
      updatePopup: true
    },
    lastUpdated: 'Last Updated',
  },
  /**
   * The good hacking stuff portion...
   */
  // Well, maybe...
};

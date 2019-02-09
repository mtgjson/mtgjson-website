module.exports = {
  title: 'MTGJSON (v4)',
  description: 'Magic: The Gathering card data in JSON ',
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'dodgerblue' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/ico',
        sizes: '32x32',
        href: '/favicon.ico',
      },
    ]
  ],
  themeConfig: {
    nav: [{ text: 'Discord', link: 'https://discord.gg/74GUQDE'}, { text: 'Github', link: 'https://github.com/mtgjson/mtgjson'}, { text: 'Donate Now', link: 'https://www.paypal.me/Zachhalpern' }],
    sidebar: ['/', '/documentation/Overview', '/documentation/AllCards' ],
    lastUpdated: 'Last Updated'
  },
};

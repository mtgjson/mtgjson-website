const generateSidebarRoutes = require('./config.sidebar');

const structures = generateSidebarRoutes('/structures/');
const downloads = generateSidebarRoutes('/downloads/');
const files = generateSidebarRoutes('/files/');

module.exports = {
  host: '0.0.0.0',
  port: '8080',
  // SEO
  title: 'MTGJSON',
  description: 'Magic: The Gathering card data in JSON.',
  // Google Analytics
  ga: 'UA-131358443-1',
  // Head Tags
  head: [
    ['link', { rel: 'icon', href: '/favicon-dark.ico' }],
    // SEO Image
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/logo-mtgjson-thumbnail.png',
      },
    ],
    // Keyrun for set images
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css',
      },
    ],
  ],
  // Vuepress Themeing
  themeConfig: {
    algolia: {
      apiKey: 'bfa11399ece64fbd87cbca3817bc498b',
      indexName: 'mtgjson',
      algoliaOptions: {
        hitsPerPage: 10
      }
    },
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Talk to Us', link: 'https://discord.gg/74GUQDE' },
      { text: 'Become a Patron', link: 'https://www.patreon.com/MTGJSON' },
      { text: 'Contribute', link: 'https://github.com/mtgjson' },
    ],
    title: "MTGJSON",
    logo: '/images/logo-3.svg',
    sidebar: [
      {
        title: 'About Us',
        path: '/',
        collapsable: false,
      },
      {
        title: 'Downloads',
        path: '/downloads/compiled',
        collapsable: false,
        children: downloads,
      },
      {
        title: 'Documentation',
        path: '/files/all-cards',
        collapsable: false,
        children: [
          {
            title: 'Files',
            path: '/files/all-cards',
            collapsable: false,
            children: files,
          },
          {
            title: 'Structures',
            path: '/structures/card',
            collapsable: false,
            children: structures,
          },
        ],
      },
      {
        title: 'Changelog',
        path: '/changelog/'
      },
      {
        title: 'Brand Assets',
        path: '/brand-assets/'
      },
      {
        title: 'License (MIT)',
        path: '/license/'
      }
    ],
  },
  plugins: [
    [
      'container',
      {
        type: 'tip',
        defaultTitle: '',
      },
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: '',
      },
    ],
    [
      'feed',
      {
        canonical_base: 'https://mtgjson.com',
        description_sources: 'excerpt',
        // Max is required
        count: 100,
        feeds: {
          atom1: {
            file_name: 'atom.xml',
          },
          rss2: {
            enable: false,
          },
          json1: {
            enable: false,
          },
        },
      },
    ],
  ],
};

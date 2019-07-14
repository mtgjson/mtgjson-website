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
    // SEO Image
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/og_logo.png',
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
    searchMaxSuggestions: 20,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Talk to Us', link: 'https://discord.gg/74GUQDE' },
      { text: 'Contribute', link: 'https://github.com/mtgjson' },
      { text: 'Become a Patron', link: 'https://www.patreon.com/MTGJSON' },
    ],
    logo: '/images/logo.svg',
    sidebar: [
      {
        title: 'MTGJSON',
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

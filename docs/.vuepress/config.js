const generateSidebarRoutes = require('./config.sidebar');

const [ structures, files ] = generateSidebarRoutes(['/structures/','/files/']);

module.exports = {
  host: '0.0.0.0',
  port: '3001',
  // SEO
  title: 'MTGJSON | Portable formats for Magic: The Gathering card data',
  description: 'MTGJSON is an open-source project that catalogs all Magic: The Gathering cards in a portable format. A dedicated group of fans maintains and supplies data for a variety of projects and sites in the community. Using an aggregation process we fetch data between multiple resources and approved partners, and combine all this data in to various JSON files that you can learn about and download from this website.',
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
        content: '/images/assets/logo-mtgjson-thumbnail.png',
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
        hitsPerPage: 10,
      },
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
    title: 'MTGJSON',
    logo: '/images/logo-3.svg',
    sidebar: [
      {
        title: 'About Us',
        path: '/',
        collapsable: false,
      },
      {
        title: 'Downloads',
        path: '/downloads/all-files',
        collapsable: false,
        children: [
          '/downloads/all-files/',
          '/downloads/all-sets/',
          '/downloads/all-decks/'
        ]
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
        path: '/changelog/',
      },
      {
        title: 'Brand Assets',
        path: '/brand-assets/',
      },
      {
        title: 'License (MIT)',
        path: '/license/',
      },
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
        description_sources: [
          'frontmatter',
          'description',
          'excerpt'
        ],
        // Max is required
        count: 100,
        feeds: {
          atom1: {
            file_name: 'atom.xml',
          },
          rss2: {
            file_name: 'site.rss',
          },
          json1: {
            file_name: 'site.json',
          },
        },
      },
    ],
  ],
};

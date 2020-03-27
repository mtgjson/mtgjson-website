// Dynamic sidebar
const generateSidebarRoutes = require('./config.sidebar');
const [structures] = generateSidebarRoutes(['/structures/']);
// SEO data
const title = 'MTGJSON, Portable formats for Magic: The Gathering card data';
const description =
  'MTGJSON is an open-source project that catalogs all Magic: The Gathering cards in a portable format. A dedicated group of fans maintains and supplies data for a variety of projects and sites in the community. Using an aggregation process we fetch data between multiple resources and approved partners, and combine all this data in to various JSON files that you can learn about and download from this website.';

module.exports = {
  host: '0.0.0.0',
  port: '3001',
  // SEO
  title,
  description,
  // Google Analytics
  ga: 'UA-131358443-1',
  // Head Tags
  head: [
    ['link', { rel: 'icon', href: '/favicon-dark.ico' }],
    // Google SEO
    [
      'meta',
      {
        property: 'og:title',
        content: title,
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/assets/logo-mtgjson-thumbnail.png',
      },
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'M0vhY1d0DytNcuhlzErPmN1UUXkPEZM_jkj8q_S21JY',
      },
    ],
    // Keyrun for set images
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        media: 'screen',
        href: 'https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css',
      },
    ],
  ],
  enhanceAppFiles: './store.js',
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
        description_sources: ['frontmatter', 'description', 'excerpt'],
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
  // Vuepress Themeing
  themeConfig: {
    // API Config
    api: 'api/v5/files',
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
        children: ['/downloads/all-files/', '/downloads/all-sets/', '/downloads/all-decks/'],
      },
      {
        title: 'F.A.Q.',
        path: '/faq/',
      },
      {
        title: 'Understanding Files',
        path: '/understanding-files/',
      },
      {
        title: 'Structures',
        path: '/structures/card',
        collapsable: false,
        children: structures,
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
};

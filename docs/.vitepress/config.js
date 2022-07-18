import sidebarRouteMapper from './sidebarMapper';

// SEO data
const title = 'MTGJSON.com | Cataloging all Magic: The Gathering cards in portable formats.';
const description =
  'MTGJSON is an open-source project that catalogs all Magic: The Gathering cards in a portable format. A dedicated group of fans maintains and supplies data for a variety of projects and sites in the community. Using an aggregation process we fetch data between multiple resources and approved partners, and combine all this data in to various JSON files that you can learn about and download from this website.';
const [abstractModels, dataModels] = sidebarRouteMapper(['/abstract-models/', '/data-models/']);

export default {
  lang: 'en-US',
  // SEO
  title,
  description,
  // Google Analytics
  ga: 'UA-131358443-1',
  // Head Tags
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    // Google SEO
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: '/images/assets/thumbnail-logo-mtgjson.png' }],
    ['meta', { name: 'google-site-verification', content: 'M0vhY1d0DytNcuhlzErPmN1UUXkPEZM_jkj8q_S21JY' }],
    // Favicon and OS Tiles
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon-dark.ico' }],
    ['link', { rel: 'icon', href: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-icon-144x144.png', sizes: '144x144', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-icon-96x96.png', sizes: '96x96', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-icon-72x72.png', sizes: '72x72', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-icon-48x48.png', sizes: '48x48', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-icon-36x36.png', sizes: '36x36', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    ['link', { rel: 'msapplication-TileImage', href: '/ms-icon-144x144.png' }],
  ],
  markdown: {
    toc: {
      level: [ 3 ], // TOC only H3
    }
  },
  lastUpdated: true,
  // VitePress Themeing
  themeConfig: {
    // Search
    searchPlaceholder: 'Search...',
    searchMaxSuggestions: 10,
    // Edit this page link in footer
    editLink: {
      pattern: 'https://github.com/mtgjson/mtgjson-websit/edit/main/docs/:path',
      text: 'Help us improve this page!',
    },
    // Last updated time stamp
    lastUpdatedText: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Join us on Discord', link: 'https://mtgjson.com/discord' },
      { text: 'Follow us on Twitter', link: 'https://twitter.com/mtgjson' },
      { text: 'Support us on Patreon', link: 'https://www.patreon.com/MTGJSON' },
      { text: 'Contribute on GitHub', link: 'https://github.com/mtgjson' },
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        text: 'MTGJSON',
        link: '/',
      },
      {
        text: 'Getting Started',
        link: '/getting-started/',
      },
      {
        text: 'F.A.Q.',
        link: '/faq/',
      },
      {
        text: 'MTGGraphQL',
        link: '/mtggraphql/',
      },
      {
        text: 'Downloads',
        link: '/downloads/',
        items: [
          {
            text: 'All Files',
            link: '/downloads/all-files/'
          },
          {
            text: 'All Sets',
            link: '/downloads/all-sets/'
          },
          {
            text: 'All Decks',
            link: '/downloads/all-decks/'
          }
        ],
      },
      {
        text: 'Data Models',
        link: '/data-models/',
        items: dataModels,
      },
      {
        text: 'Abstract Models',
        link: '/abstract-models/',
        items: abstractModels,
      },
      {
        text: 'Changelog',
        link: '/changelog/mtgjson-v5',
        items: [
          {
            text: 'MTGJSON',
            link: '/changelog/mtgjson-v5/',
          },
          {
            text: 'MTGGraphQL',
            link: '/changelog/mtggraphql/',
          },
        ],
      },
      {
        text: 'Brand Assets',
        link: '/brand-assets/',
      },
      {
        text: 'License (MIT)',
        link: '/license/',
      },
    ],
  },
};

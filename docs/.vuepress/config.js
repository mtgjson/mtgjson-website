// Dynamic sidebar
const generateSidebarRoutes = require('./config.sidebar');
const [dataModels, abstractModels] = generateSidebarRoutes(['/data-models/', '/abstract-models/']);
// SEO data
const description =
'MTGJSON is an open-source project that catalogs all Magic: The Gathering cards in a portable format. A dedicated group of fans maintains and supplies data for a variety of projects and sites in the community. Using an aggregation process we fetch data between multiple resources and approved partners, and combine all this data in to various JSON files that you can learn about and download from this website.';
const title = 'MTGJSON.com | Cataloging all Magic: The Gathering cards in portable formats.';

module.exports = {
  // Uncomment to not support <=IE11
  evergreen: true,
  // Server
  host: '0.0.0.0',
  port: '3001',
  // SEO
  title,
  description,
  // Google Analytics
  ga: 'UA-131358443-1',
  // Head Tags
  head: [
    [
      'meta',
      {
        charset: 'utf-8'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    // Favicon and OS Tiles
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: '/favicons/favicon-dark.ico' }],
    [
      'link',
      { rel: 'icon', href: '/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    [
      'link',
      { rel: 'icon', href: '/favicons/android-icon-144x144.png', sizes: '144x144', type: 'image/png' }
    ],
    ['link', { rel: 'icon', href: '/favicons/android-icon-96x96.png', sizes: '96x96', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicons/android-icon-72x72.png', sizes: '72x72', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicons/android-icon-48x48.png', sizes: '48x48', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicons/android-icon-36x36.png', sizes: '36x36', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-57x57.png', sizes: '57x57' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-60x60.png', sizes: '60x60' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-72x72.png', sizes: '72x72' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-76x76.png', sizes: '76x76' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-114x114.png', sizes: '114x114' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-120x120.png', sizes: '120x120' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-144x144.png', sizes: '144x144' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-152x152.png', sizes: '152x152' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-icon-180x180.png', sizes: '180x180' }],
    ['link', { rel: 'msapplication-TileImage', href: '/favicons/ms-icon-144x144.png' }],
    // Google SEO
    [
      'meta',
      {
        property: 'og:title',
        content: title
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: description
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/assets/logo-mtgjson-thumbnail.png'
      }
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'M0vhY1d0DytNcuhlzErPmN1UUXkPEZM_jkj8q_S21JY'
      }
    ]
  ],
  plugins: [
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-smooth-scroll'],
    [
      'container',
      {
        type: 'tip',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: ''
      }
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
            file_name: 'atom.xml'
          },
          rss2: {
            file_name: 'site.rss'
          },
          json1: {
            file_name: 'site.json'
          }
        }
      }
    ]
  ],
  enhanceAppFiles: './store.js',
  chainWebpack: config => {
    // Start custom SVG importing via vue-svg-loader
    config.module.rules.delete('svg');
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end();
    // End custom SVG importing
  },
  // Vuepress Themeing
  themeConfig: {
    // Algolia SEO
    algolia: {
      apiKey: 'bfa11399ece64fbd87cbca3817bc498b',
      indexName: 'mtgjson',
      algoliaOptions: {
        hitsPerPage: 10
      }
    },
    searchMaxSuggestions: 10,
    // Edit this page link in footer
    docsRepo: 'mtgjson/mtgjson-website',
    docsBranch: 'master',
    docsDir: 'docs/',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    // Last updated time stamp
    lastUpdated: 'Last Updated',
    title: title,
    logo: '/images/logo-3.svg',
    smoothScroll: true,
    nav: [
      { text: 'Join us on Discord', link: 'https://mtgjson.com/discord' },
      { text: 'Follow us on Twitter', link: 'https://twitter.com/mtgjson' },
      { text: 'Support us on Patreon', link: 'https://www.patreon.com/MTGJSON' },
      { text: 'Contribute on GitHub', link: 'https://github.com/mtgjson' }
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'About Us',
        path: '/'
      },
      {
        title: 'F.A.Q.',
        path: '/faq/'
      },
      {
        title: 'Downloads',
        path: '/downloads/',
        collapsable: false,
        children: ['/downloads/all-files/', '/downloads/all-sets/', '/downloads/all-decks/']
      },
      {
        title: 'File Structures',
        path: '/file-structures/'
      },
      {
        title: 'Data Models',
        path: '/data-models/',
        collapsable: false,
        children: dataModels
      },
      {
        title: 'Abstract Models',
        path: '/abstract-models/',
        collapsable: false,
        children: abstractModels
      },
      {
        title: 'Changelog',
        path: '/changelog/version-5',
        collapsable: false,
        children: ['/changelog/version-5/', '/changelog/version-4/']
      },
      {
        title: 'Brand Assets',
        path: '/brand-assets/'
      },
      {
        title: 'License (MIT)',
        path: '/license/'
      }
    ]
  }
};

import generateSidebar from './generateSidebar';
import generatePages from './generatePages';

const [
  abstractModels,
  dataModels
] = generateSidebar(['/abstract-models/', '/data-models/']);

export const pages = generatePages({
  INCLUDE_DIR: 'docs',
  EXCLUDE_DIRS: ['public', '.vitepress'],
});
export const title = 'MTGJSON.com · Portable formats for all Magic: The Gathering data';
export const description =
  'MTGJSON is an open-source project that catalogs all Magic: The Gathering data in portable formats. Using an aggregation process we fetch information between multiple resources and approved partners, and combine all that data in to various downloadable formats.';

export default {
  lang: 'en-US',
  // SEO
  title: 'MTGJSON',
  titleTemplate: ':title · ' + title,
  description,
  cleanUrls: true,
  // Head Tags
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    // Google SEO
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', src: '/images/assets/thumbnail-mtgjson.jpg' }],
    // Analytics
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-ZPPM5J5ET2', async: 'true' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZPPM5J5ET2');
    `,
    ],
    ['meta', { name: 'google-site-verification', content: 'M0vhY1d0DytNcuhlzErPmN1UUXkPEZM_jkj8q_S21JY' }],
    // Favicon and OS Tiles
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicons/android-chrome-384x384.png', sizes: '384x384', type: 'image/png' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', sizes: '384x384', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'msapplication-TileImage', href: '/favicons/mstile-150x150.png' }],
    // iOS Safari Theme
    ['meta', { name: 'theme-color', content: '#0f263c' }]
  ],
  markdown: {
    // Only capture h3 headings
    toc: {
      level: [ 3 ],
      shouldAllowNested: true
    }
  },
  // VitePress themeing
  themeConfig: {
    logo: '/images/assets/logo-mtgjson.svg',
    pages,
    outline: 3,
    smoothScroll: true,
    editLink: {
      pattern: 'https://github.com/mtgjson/mtgjson-website/edit/main/docs/:path',
      text: 'Help us improve this page!',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/mtgjson',
      },
      {
        icon: 'discord',
        link: 'https://mtgjson.com/discord',
      },
      {
        icon: {
          svg: '<svg alt="Patreon logo" fill="#f96753" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z" class="st0"/></svg>'
        },
        link: 'https://www.patreon.com/MTGJSON',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/mtgjson',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '',
        items: [
          {
            text: 'Getting Started',
            link: '/getting-started/',
          },
          {
            text: 'F.A.Q.',
            link: '/faq/',
          },
        ]
      },
      {
        text: 'GraphQL API',
        link: '',
        items: [
          {
            text: 'MTGGraphQL',
            link: '/mtggraphql/',
          }
        ]
      },
      {
        text: 'Downloads',
        link: '/downloads/',
        items: [
          {
            text: 'All Files',
            link: '/downloads/all-files/',
          },
          {
            text: 'All Sets',
            link: '/downloads/all-sets/',
          },
          {
            text: 'All Decks',
            link: '/downloads/all-decks/',
          },
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
        text: 'Changelogs',
        link: '/changelogs/',
        items: [
          {
            text: 'MTGJSON',
            link: '/changelogs/mtgjson-v5/',
          },
          {
            text: 'MTGGraphQL',
            link: '/changelogs/mtggraphql/',
          },
        ],
      },
      {
        text: 'Brand Assets',
        link: '/brand-assets/',
      },
      {
        text: 'License',
        link: '/license/',
      },
    ],
  },
};

import generateSidebar from './generateSidebar';
import generatePages from './generatePages';

const [abstractModels, dataModels] = generateSidebar(['/abstract-models/', '/data-models/']);

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
  titleTemplate: ':title · ' + title,
  description,
  appearance: false,
  cleanUrls: 'with-subfolders',
  // Head Tags
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    // Google SEO
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', src: '/thumbnail-mtgjson.jpg' }],
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
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/android-chrome-384x384.png', sizes: '384x384', type: 'image/png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', sizes: '384x384', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'msapplication-TileImage', href: '/mstile-150x150.png' }],
    // iOS Safari Theme
    ['meta', { name: 'theme-color', content: '#0f263c' }]
  ],
  markdown: {
    toc: {
      level: [3],
    }
  },
  // VitePress Themeing
  themeConfig: {
    pages, // Used for search
    smoothScroll: true,
    customEditLink: {
      pattern: 'https://github.com/mtgjson/mtgjson-website/edit/main/docs/',
      text: 'Help us improve this page!',
    },
    nav: [
      { text: 'Join us on Discord', link: 'https://mtgjson.com/discord' },
      { text: 'Follow us on Twitter', link: 'https://twitter.com/mtgjson' },
      { text: 'Support us on Patreon', link: 'https://www.patreon.com/MTGJSON' },
      { text: 'Contribute on GitHub', link: 'https://github.com/mtgjson' },
    ],
    sidebar: [
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

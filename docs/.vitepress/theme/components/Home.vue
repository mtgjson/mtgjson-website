<template lang="pug">
main.home
  //- Content.content-wrapper
  section.home-masthead
    .content-wrapper
      .home-masthead-logo
        svg(
          alt="MTGJSON Logo"
          fill="#1e90ff"
          version="1.0"
          viewBox="0 0 5000 3500"
        )
          path(d="M1950,3374 c-177,-47 -300,-179 -361,-384 c-20,-69 -22,-105 -29,-465 c-9,-431 -13,-464 -73,-532 c-40,-45 -94,-70 -174,-79 l-63,-7 l0,-212 l0,-212 l64,-5 c83,-7 150,-39 182,-88 c52,-78 56,-107 64,-530 c8,-435 10,-450 76,-588 c23,-47 55,-93 92,-130 c100,-101 208,-142 369,-142 l93,0 l0,189 l0,188 l-51,6 c-87,11 -147,66 -181,169 c-6,19 -14,183 -18,393 c-9,385 -16,445 -64,552 c-14,30 -39,72 -56,93 c-34,43 -110,95 -155,106 l-29,7 l37,13 c84,29 164,109 206,206 c47,109 54,176 61,548 c4,197 11,369 17,386 c32,95 73,131 168,147 l65,11 l0,188 l0,188 l-92,-1 c-51,0 -118,-7 -148,-15 z z m-1844.999634,-205.244141 z z")
          path(d="M2720,3202 l0,-188 l65,-11 c95,-16 136,-52 168,-147 c6,-17 13,-189 17,-386 c7,-372 14,-439 61,-548 c42,-97 122,-177 206,-206 l37,-13 l-29,-7 c-45,-11 -121,-63 -155,-106 c-17,-21 -42,-63 -56,-93 c-48,-107 -55,-167 -64,-552 c-4,-210 -12,-374 -18,-393 c-34,-103 -94,-158 -181,-169 l-51,-6 l0,-188 l0,-189 l93,0 c161,0 269,41 369,142 c37,37 69,83 92,130 c66,138 68,153 76,588 c8,423 12,452 64,530 c32,49 99,81 182,88 l64,5 l0,212 l0,212 l-62,7 c-81,9 -135,34 -175,79 c-60,68 -64,101 -73,532 c-7,360 -9,396 -29,465 c-34,115 -85,202 -156,269 c-100,93 -203,131 -357,131 l-88,0 l0,-188 z")
          path(d="M690,1690 l0,-1340 l285,0 l285,0 l0,165 l0,165 l-140,0 l-140,0 l0,1015 l0,1015 l140,0 l140,0 l0,160 l0,160 l-285,0 l-285,0 l0,-1340 z")
          path(d="M3650,2870 l0,-160 l140,0 l140,0 l0,-1015 l0,-1015 l-140,0 l-140,0 l0,-165 l0,-165 l285,0 l285,0 l0,1340 l0,1340 l-285,0 l-285,0 l0,-160 z")
          path(d="M321,2496 l-105,-71 l-107,-342 l-108,-342 l108,-395 c59,-218 110,-398 112,-400 c2,-2 49,-33 104,-70 l100,-66 l3,440 c1,242 1,637 0,879 l-3,439 l-104,-72 z")
          path(d="M4480,1689 l0,-881 l29,19 c187,120 181,115 196,168 c8,28 57,207 109,398 l95,348 l-108,342 l-107,342 l-107,73 l-107,73 l0,-882 z")
      h1 MTGJSON
      span.version(v-if="version")
        a(href="/changelogs/mtgjson-v5/" tabindex="0") v{{ version }}
      h2 Portable formats for all Magic: The Gathering data
      p MTGJSON is an open-source project that catalogs all Magic: The Gathering data in portable formats. Using an aggregation process we fetch information between multiple resources and approved partners, and combine all that data in to various downloadable formats.
      a(href="/getting-started/")
        button.cta-btn Explore The Documentation

  section.light.home-features
    .content-wrapper
      h2 Featured Highlights
      ul
        li
          h3 Portable Formats
          p With various formats available at our <a href="https://mtgjson.com/api/v5/">File&nbsp;Server</a> you can download JSON, CSV's and even Databases.
        li
          h3 Daily Updates
          p MTGJSON files are built daily so you can keep your projects in sync as new cards, sets, rules, and other updates are added.
        li
          h3 Card Pricing
          p We keep a <strong>limited</strong> history of all card prices provided by our wonderful partners to help further power your projects.
        li
          h3 MTGGraphQL
          p Get access to our GraphQL API and utilize data more with flexibility. <strong>Currently in beta and only available to Patreon members.</strong>

      ul
        li
          h3 Descriptive Properties
          p Learn about all data property names and values, even optional properties and enumerations.
        li
          h3 Simplified Searching
          p We index all documentation so searching is naturally simple. Search for anything and get immediate results.
        li
          h3 TypeScript Notations
          p View the TypeScript types of each data model and help keep your code type safe.
        li
          h3 Direct Downloads
          p While you can use the File Server to locate downloads we provide a simple <a href="/downloads/all-files/">User&nbsp;Interface</a> to get the files you need.

      a(href="/getting-started/")
        button.cta-btn.light Explore The Documentation

  section.light.home-contributing
    .content-wrapper
      h2 Contributing
      ul
        li
          a(href="https://mtgjson.com/discord/" target="_blank")
            svg.discord(fill="#7289da" alt="Discord logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240")
              path(d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z")
              path(d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z")
            h3 Discord
            p Discuss MTGJSON, get updates, report issues and more.
        li
          a(href="https://www.patreon.com/MTGJSON" target="_blank" rel="noreferrer noopener")
            svg(xmlns="http://www.w3.org/2000/svg" alt="Patreon logo" viewBox="0 0 512 512")
              path(fill="#f96753" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z")
            h3 Patreon
            p Pledge to our Patreon and get access to MTGGraphQL and site recognition.
        li
          a(href="https://www.paypal.me/Zachhalpern" target="_blank" rel="noreferrer noopener")
            svg(viewBox="0 0 256 302" alt="PayPal logo" xmlns="http://www.w3.org/2000/svg")
              path(d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765" fill="#27346A")
              path(d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z" fill="#27346A")
              path(d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z" fill="#2790C3")
              path(d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865" fill="#1F264F")
            h3 PayPal
            p Donate to MTGJSON and help keep this project available for free to everyone.
        li
          a(href="https://github.com/mtgjson" target="_blank" rel="noreferrer noopener")
            svg(alt="GitHub logo" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg")
              path(fill="#ababab" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)")
            h3 GitHub
            p Contribute to MTGJSON, help the community, and get your profile on our homepage.

  section.dark.home-team
    .text-wrapper
      h2 Team Leads
      ul.home-team-leads
        li
          div.home-team-leads-member
            img.lazy(data-src="/images/avatars/avatar-zach.jpg" title="Zachery Halpern's avatar" alt="Zach's avatar")
            div
              a(href="https://github.com/ZeldaZach" target="_blank" rel="noreferrer noopener")
                h4 Zachery Halpern
              span Developer &amp; Maintainer
              p Zach is a hippo fanatic who loves playing with big data and giving back to the community in unique ways. He has worked on MTGJSON since 2016, and has led the design and development of versions 4 and 5. His work can also be seen heavily in the open-source Cockatrice game client.
        li
          div.home-team-leads-member
            img.lazy(data-src="/images/avatars/avatar-milo.jpg" title="Milo Rue's avatar" alt="Milo's avatar")
            div
              a(href="https://github.com/milorue" target="_blank" rel="noreferrer noopener")
                h4 Milo Rue
              span GraphQL Developer
              p Milo is a TypeScript and React enthusiast who enjoys learning the newest web technologies. In his free time he enjoys hiking, cats, losing at Catan, video games, and e-sports.
        li
          div.home-team-leads-member
            img.lazy(data-src="/images/avatars/avatar-eric.jpg" title="Eric Lakatos' avatar" alt="Eric's avatar")
            div
              a(href="https://github.com/staghouse" target="_blank" rel="noreferrer noopener")
                h4 Eric Lakatos
              span Documentation Maintainer
              p Eric is a conceptualizer that loves deer, cheesy sci-fi movies and delving in to any code he can find. He is an avid supporter of open-source software and the Magic: The Gathering developer community.

      h2 Code Contributors
      ul.home-team-contributors(v-if="contributors")
        li(v-for="(contributor, key) in contributors", :key="key")
          a(:href="contributor.url", rel="noopener noreferrer", target="_blank") {{ `${contributor.username}'s GitHub profile` }}
            img.lazy(
              :data-src="contributor.avatar",
              :alt="`${contributor.username}'s avatar`",
              :title="`${contributor.username}'s avatar`"
          )

  section.dark.home-patrons
    .text-wrapper
      h2 Patreon Supporters
      ul
        li(
          v-for="(patron, key) in patrons",
          :key="key",
          :data-tier="patron.tier"
        )
          .img-wrap(v-if="patron.image")
            img.lazy(
              :data-src="'/images/avatars/' + patron.image",
              :alt="`${patron.name} logo`",
              :title="`${patron.name} logo`"
            )
          .img-wrap.no-image(v-else)
            p {{ patron.name.substring(0, 1) }}
          a.name.linked-name(
            v-if="patron.link",
            :href="patron.link",
            v-html="patron.name",
            rel="noopener noreferrer",
            target="_blank",
          )
          p.name.unlinked-name(v-else, v-html="patron.name")
          p.tier {{ patron.tier }} Supporter
          p.tier-time(
            v-if="patron.since",
            v-html="formatTime(patron.since)"
          )

  section.dark.home-applications
    .text-wrapper
      h2 MTGJSON Powered Applications
      ul
        li(v-for="(application, key) in applications", :key="key")
          .img-wrap(v-if="application.image")
            img.lazy(
              :data-src="'/images/avatars/' + application.image",
              :alt="`${application.name} logo`",
              :title="`${application.name} logo`"
            )
          .img-wrap.no-image(v-else)
            p {{ application.name.substring(0, 1) }}
          a.name.linked-name(
            v-if="application.link",
            :href="application.link",
            v-html="application.name",
            rel="noopener noreferrer",
            target="_blank",
          )
          p.name.unlinked-name(v-else, v-html="application.name")

  section.home-footer
    .content-wrapper
      footer
        ul
          li Copyright &copy; 2018 &ndash; Present Zachery Halpern, Eric Lakatos
          li MTGJSON and Documentation released under the&nbsp;
            a(href="/license/") MIT License
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import contributors from '../static/contributors.json';
import patrons from '../static/patrons.json';
import applications from '../static/applications.json';
import { formatTime } from '../helpers';
import { useStore } from '../store.js';

const store = useStore();
const version = computed(() => store.Meta.version);

onMounted(async (): Promise<void> => {
  const lazyImages: HTMLElement[] = Array.from(document.querySelectorAll('img.lazy'));

  if ('IntersectionObserver' in window) {
    let lazyImageObserver: IntersectionObserver = new IntersectionObserver((entries, observer): void => {
      entries.forEach((entry: IntersectionObserverEntry): void => {
        if (entry.isIntersecting) {
          let lazyImage: HTMLImageElement = entry.target as HTMLImageElement;
          lazyImage.src = lazyImage.dataset.src;
          delete lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach((lazyImage: HTMLImageElement): void => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Boo, no observer
    lazyImages.forEach((lazyImage: HTMLImageElement): void => {
      lazyImage.src = lazyImage.dataset.src;
      delete lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
      lazyImage.classList.add('not-lazy');
    });
  }

  if (Object.keys(store.Meta).length === 0) {
    await store.fetchFromApi('Meta');
  }
});
</script>

<style lang="scss" scoped>
@import '../styles/placeholders';

.home {
  .content-wrapper {
    max-width: 1028px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  .text-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  section {
    padding: 4rem 0 4rem;

    &.light {
      background-color: var(--light-color);
      color: var(--dark-color);

      h2 {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray-2-color);
      }

      a {
        color: var(--true-accent-2-color);
      }
    }

    &.dark {
      background-color: var(--dark-2-color);
      color: var(--light-color);

      h2 {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--dark-1-color);
      }

      a {
        color: var(--true-accent-1-color);
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  p {
    border-bottom: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  h1 {
    margin-bottom: 0.5rem;

    & + span.version {
      color: var(--gray-3-color) !important;
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 2rem;
      display: block;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h2,
  h3 {
    margin-bottom: 2rem;
  }

  ul {
    margin: 0 0 2rem;

    li {
      list-style: none;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .cta-btn {
    margin: 2rem auto 0;
  }

  &-masthead {
    background-color: var(--dark-2-color);
    text-align: center;

    &-logo {
      margin-bottom: 1rem;

      svg {
        width: 250px;
      }
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--true-accent-1-color);
      text-align: center;
    }

    p {
      max-width: 570px;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
    }
  }

  &-features {
    background-color: var(--light-color);
    color: var(--dark-color);

    ul {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(4, 1fr);

      li {
        background-color: var(--true-gray-color);
        border-radius: var(--common-radius);
        padding: 2rem;

        h3 {
          font-size: 1rem;
          line-height: 1.25rem;
          text-align: left;
          margin-bottom: 1rem;
        }

        p {
          text-align: left;
          color: var(--gray-5-color);
        }
      }
    }
  }

  &-team {
    background-color: var(--dark-2-color);
    color: var(--light-color);

    h3 {
      color: var(--true-accent-1-color);
    }

    &-leads {
      li {
        display: flex;
        justify-content: flex-start;
        margin: 0 0 2rem;
      }

      &-member {
        flex: 0 0 100%;
        display: flex;
        background-color: var(--dark-1-color);
        border-radius: var(--common-radius);
        padding: 2rem;

        img {
          border-radius: 50%;
          margin-right: 2rem;
          width: 150px;
          height: 150px;
        }

        div {
          text-align: left;

          a {
            display: inline-block;

            h4 {
              margin-bottom: 0.5rem;
              text-align: left;
              font-weight: bold;
            }
          }

          span {
            display: block;
            text-align: left;
            margin: 0 0 1rem 0;
            color: var(--gray-3-color);
          }

          p {
            text-align: left;
          }
        }
      }

      li {
        list-style: none;
      }
    }

    &-contributors {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 1rem;
      margin-left: 0;

      li {
        list-style: none;

        a {
          display: block;
          border-radius: 50%;
          background-color: var(--light-color);
          overflow: hidden;
          font-size: 0;

          img {
            float: left;
            width: 100%;
            height: auto;
          }

          &::before,
          &::after {
            content: '';
            display: table;
            clear: both;
          }
        }
      }
    }
  }

  &-contributing {
    ul {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(4, 1fr);

      li {
        border-radius: var(--common-radius);
        background-color: var(--gray-color);
        padding: 2rem;

        a {
          text-decoration: none;
          color: var(--dark-color) !important;

          svg {
            width: 100%;
            max-height: 50px;
            height: auto;
            margin-bottom: 1rem;
          }

          h3 {
            font-size: 1rem;
            line-height: 1.25rem;
            margin-bottom: 1rem;
          }

          p {
            font-weight: normal;
            color: var(--gray-5-color);
          }
        }
      }
    }
  }

  &-patrons {
    background-color: var(--dark-2-color);

    ul {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      justify-items: center;
      grid-gap: 2rem;

      li {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: var(--dark-1-color);
        border-radius: var(--common-radius);

        &[data-tier='mythic'] {
          .tier {
            color: var(--supporter-mythic-color);
          }
        }

        &[data-tier='rare'] {
          .tier {
            color: var(--supporter-rare-color);
          }
        }

        &[data-tier='uncommon'] {
          .tier {
            color: var(--supporter-uncommon-color);
          }
        }

        .img-wrap {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          background-color: var(--supporter-bg-color);
          border-radius: 50%;
          overflow: hidden;
          width: 90px;
          height: 90px;
          padding: 15px;

          &.no-image {
            text-align: center;

            p {
              font-size: 3rem;
              font-weight: bold;
              color: var(--dark-color);
              margin-top: 0;
              padding-top: 0;
              margin-bottom: 0;
            }
          }

          img {
            max-width: 90%;
            height: auto;
            max-height: 90%;
          }
        }

        p {
          flex: 0 0 100%;
          font-size: 1rem;
          color: var(--accent-color);
          display: block;
          margin: 0 auto;
          padding: 0;
          line-height: 1.2rem;
          line-height: 1.2em;
          word-wrap: anywhere;
        }

        .name {
          text-decoration: underline;
          flex: 0 0 100%;
          font-weight: bold;

          &:hover {
            text-decoration: none;
          }
        }

        .unlinked-name {
          text-decoration: none;
        }

        .tier {
          text-align: center;
          flex: 0 0 100%;
          margin: 0.5rem auto 0.25rem;
          line-height: 1.2em;
          font-weight: bold;
          text-transform: capitalize;

          &,
          &-time {
            color: var(--text-color);
            font-size: 14px;
          }

          &-time {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  &-applications {
    background-color: var(--dark-2-color);

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        position: relative;

        .img-wrap {
          background-color: var(--light-color);
          border-radius: 50%;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;

          img {
            padding: 0.75rem;
            width: 60px;
            max-height: 60px;
            height: auto;
          }

          &.no-image {
            text-align: center;

            p {
              width: 60px;
              padding: 0 0.75rem;
              font-size: 2rem;
              font-weight: bold;
              color: var(--dark-color);
            }
          }
        }
      }
    }
  }

  &-patrons,
  &-applications,
  &-contributing {
    padding-top: 0 !important;
  }

  &-footer {
    ul {
      max-width: 570px;
      margin: 0 auto;

      li {
        flex: 0 0 100%;
        margin-top: 1rem;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .home {
    &-features,
    &-contributing,
    &-patrons,
    &-applications {
      ul {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media (max-width: 800px) {
  .home {
    &-team {
      &-contributors {
        grid-template-columns: repeat(10, 1fr);
      }
    }
  }
}

@media (max-width: 570px) {
  .home {
    &-features,
    &-contributing,
    &-patrons,
    &-applications {
      ul {
        grid-template-columns: 1fr;
      }
    }

    &-team {
      &-leads {
        li {
          justify-content: center;
        }

        &-member {
          display: block;

          img {
            margin: 0 0 1rem 0;
          }

          div {
            h4,
            span {
              text-align: center;
            }
          }
        }
      }

      &-contributors {
        grid-template-columns: repeat(8, 1fr);
      }
    }

    &-footer {
      ul {
        li {
          flex: 0 0 100%;
          margin-left: 0;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>

<template lang="pug">
main.home
  //- Content.content-wrapper
  section.home-masthead(:class="{loaded: pageLoaded}")
    .content-wrapper
      .home-masthead-logo
        NavMeta(:hideText="true", :width="`250px`", :height="`173px`")
      h1 MTGJSON
      span.version(v-if="version")
        a(href="/changelogs/mtgjson-v5/") v{{ version }}
      span.version(v-else)
        a(href="/changelogs/mtgjson-v5/") &nbsp;
      h2 Portable formats for all Magic: The Gathering data
      p MTGJSON is an open-source project that catalogs all <a href="https://magic.wizards.com/en" target="_blank" rel="noreferrer noopener">Magic: The Gathering</a> data in portable formats. Using an aggregation process we fetch information between multiple resources and approved partners, and combine all that data in to various downloadable formats.
      a(href="/getting-started/")
        button.cta-btn Explore The Documentation

  section.light.home-features
    .content-wrapper
      h2 Featured Highlights
      ul
        li
          h3 Portable Formats
          p You can download our data in your favorite format from our <a href="https://mtgjson.com/api/v5/">"API-like" server</a>. We support JSON, CSV's, and even database files.
        li
          h3 Daily Updates
          p MTGJSON files are built daily so you can keep your projects in sync as new cards, sets, rules, and other updates are added.
        li
          h3 Card Pricing
          p We keep a <strong>limited</strong> history of all card prices provided by our wonderful partners to help further power your projects.
        li
          h3 MTGGraphQL
          p Get access to our GraphQL API and utilize data more with flexibility. <strong>Currently in beta and only available to Patreon subscribers.</strong>
        li
          h3 Descriptive Properties
          p Learn about all data property names and values, even optional properties and enumerations.
        li
          h3 Simplified Searching
          p We index all documentation so searching is a breeze. Search for anything and get immediate results.
        li
          h3 TypeScript Notations
          p View the TypeScript types of each data model and help keep your code type safe.
        li
          h3 Direct Downloads
          p You can use remotely fetch files but we also provide a <a href="/downloads/all-files/">simple interface</a> to get the files as needed.

      a(href="/getting-started/")
        button.cta-btn.light Get Started Now

  section.light.home-contributing
    .content-wrapper
      h2 Contributing
      ul
        li
          a(href="https://github.com/mtgjson" target="_blank" rel="noreferrer noopener")
            img(alt="Github logo" src="/images/icons/icon-github.svg")
            h3 GitHub
            p Contribute to MTGJSON, help the community, and get site recognition.
        li
          a(href="https://mtgjson.com/discord/" target="_blank")
            img(alt="Discord logo" src="/images/icons/icon-discord.svg")
            h3 Discord
            p Discuss MTGJSON, get updates, report issues and more.
        li
          a(href="https://www.patreon.com/MTGJSON" target="_blank" rel="noreferrer noopener")
            img(alt="Patreon logo" src="/images/icons/icon-patreon.svg")
            h3 Patreon
            p Pledge to our Patreon and get access to MTGGraphQL and site recognition.
        li
          a(href="https://www.paypal.me/Zachhalpern" target="_blank" rel="noreferrer noopener")
            img(alt="Paypal logo" src="/images/icons/icon-paypal.svg")
            h3 PayPal
            p Donate to MTGJSON and help keep this project available for free to everyone.

  section.dark.home-team
    .text-wrapper
      h2 Team Leads
      ul.home-team-leads
        li
          div.home-team-leads-member
            img(src="/images/avatars/avatar-zach.jpg" title="Zach Halpern's avatar" alt="Zach's avatar")
            div
              a(href="https://github.com/ZeldaZach" target="_blank" rel="noreferrer noopener")
                h4 Zach Halpern
              span Lead Developer & Maintainer
              p Zach is a hippo fanatic who loves playing with big data and giving back to the community in unique ways. He has worked on MTGJSON since 2016, and has led the design and development of versions 4 and 5. His work can also be seen heavily in the open-source Cockatrice game client.
        li
          div.home-team-leads-member
            img(src="/images/avatars/avatar-milo.jpg" title="Milo Rue's avatar" alt="Milo's avatar")
            div
              a(href="https://github.com/milorue" target="_blank" rel="noreferrer noopener")
                h4 Milo Rue
              span GraphQL Developer
              p Milo is a TypeScript and React enthusiast who enjoys learning the newest web technologies. In his free time he enjoys hiking, cats, losing at Catan, video games, and e-sports.
        li
          div.home-team-leads-member
            img(src="/images/avatars/avatar-eric.jpg" title="Eric Lakatos' avatar" alt="Eric's avatar")
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
    .content-wrapper
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
            p {{ patron.company ? patron.company.substring(0, 1) : patron.name.substring(0, 1) }}
          a.name.linked-name(
            v-if="patron.link",
            :href="patron.link",
            v-html="patron.company || patron.name",
            rel="noopener noreferrer",
            target="_blank",
          )
          p.name.unlinked-name(v-else, v-html="patron.company || patron.name")
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
          li Copyright &copy; 2018 &ndash; Present Zachary Halpern, Eric Lakatos
          li MTGJSON and Documentation released under the&nbsp;
            a(href="/license/") MIT License
          li.legal Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. All Rights Reserved.
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import NavMeta from './NavMeta.vue';
import contributors from '../static/contributors.json';
import patrons from '../static/patrons.json';
import applications from '../static/applications.json';
import { formatTime } from '../helpers';
import { useStore } from '../store.js';

const store = useStore();
const pageLoaded = ref<boolean>(false);
const version = computed<string>((): string => store.Meta.version);

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

  pageLoaded.value = true;
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
    position: relative;
    z-index: 1;
    background-color: var(--dark-2-color);
    color: var(--light-color);
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      max-width: 1024px;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: 0 auto;
      background-image: url('/images/assets/bg-masthead.gif');
      background-size: 100%;
      background-position: center top;
      opacity: 0;
      background-repeat: no-repeat;
      z-index: -1;
    }

    &.loaded {
      &::before {
        transition: all 1s;
        opacity: 0.10;
      }
    }

    &-logo {
      margin-bottom: 1rem;
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
      grid-gap: 1rem;
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
        margin: 0 0 1rem;
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
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);

      li {
        background-color: var(--true-gray-color);
        border-radius: var(--common-radius);
        padding: 2rem;

        a {
          text-decoration: none;
          color: var(--dark-color) !important;

          img {
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
      grid-template-columns: repeat(4, minmax(0, 1fr));
      justify-items: center;
      grid-gap: 1rem;

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

        .name {
          flex: 1;
          text-align: left;
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
    border-top: 1px solid var(--dark-1-color);
    background-color: var(--dark-2-color);
    color: var(--light-color);

    ul {
      max-width: 570px;
      margin: 0 auto;

      li {
        flex: 0 0 100%;
        margin-top: 1rem;

        &:first-of-type {
          margin-top: 0;
        }

        &.legal {
          margin-top: 2rem;
          font-size: 12px;
          color: var(--gray-3-color);
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
            &,
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

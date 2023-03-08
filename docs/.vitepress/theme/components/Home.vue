<template lang="pug">
main.home
  section.home-masthead(:class="{loaded: pageLoaded}")
    .content-wrapper
      .home-masthead-logo
        img(src="/images/assets/logo-mtgjson.svg" width="200")
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
          p We keep a <strong>limited</strong> history of all card prices provided by our partners to help further power your projects.
        li
          h3 GraphQL API
          p Utilize our data efficiently with <a href="/mtggraphql/">MTGGraphQL</a> and query cards, decks, and even prices. <strong>Currently in beta and only available to Patreon subscribers.</strong>
        li
          h3 Descriptive Properties
          p Learn all about data property names, values, and enumerations.
        li
          h3 Simplified Searching
          p We index all documentation so searching is a breeze. Search for anything and get immediate results.
        li
          h3 TypeScript Notations
          p View the Types of each Data Model and help keep your code type safe.
        li
          h3 Direct Downloads
          p You can remotely fetch files but we also provide a <a href="/downloads/all-files/">simple interface</a> to get the files as needed.

      a(href="/getting-started/")
        button.cta-btn Get Started Now

  section.light.home-contributing
    .content-wrapper
      h2 Contributing
      ul
        li
          img(alt="Github logo" src="/images/icons/icon-github.svg")
          a(href="https://github.com/mtgjson" target="_blank" rel="noreferrer noopener")
            h3 GitHub
          p Contribute code to the project and get site recognition.
        li
          img(alt="Discord logo" src="/images/icons/icon-discord.svg")
          a(href="https://mtgjson.com/discord/" target="_blank")
            h3 Discord
          p Discuss MTGJSON, get updates, report issues and more.
        li
          img(alt="Patreon logo" src="/images/icons/icon-patreon.svg")
          a(href="https://www.patreon.com/MTGJSON" target="_blank" rel="noreferrer noopener")
            h3 Patreon
          p Pledge to our Patreon and get access to our GraphQL API.
        li
          img(alt="Paypal logo" src="/images/icons/icon-paypal.svg")
          a(href="https://www.paypal.me/Zachhalpern" target="_blank" rel="noreferrer noopener")
            h3 PayPal
          p Donate to MTGJSON and help keep this project free to all.

  section.dark.home-team
    .content-wrapper(v-if="team")
      h2 Team Leads
      ul.home-team-leads
        li(
          v-for="(member, key) in team",
          :key="key"
        )
          .home-team-leads-member
            a(
              :href="member.url",
              rel="noreferrer noopener",
              target="_blank"
            )
              img.lazy(
                :data-src="`/images/avatars/${member.avatar}`",
                :title="member.name",
                :alt="`${member.name}'s avatar`"
                width="200",
                height="200"
              )
            .home-team-leads-member-details
              a(
                :href="member.url",
                rel="noreferrer noopener",
                target="_blank"
              )
                h3 {{ member.name }}
              span {{ member.title }}
              p {{ member.description }}

  section.dark.home-contributors
    .content-wrapper(v-if="contributors")
      h2 Code Contributors
      ul
        li(
          v-for="(contributor, key) in contributors",
          :key="key"
        )
          a(
            :href="contributor.url",
            rel="noopener noreferrer",
            target="_blank"
          ) {{ `${contributor.username}'s GitHub profile` }}
            img.lazy(
              :data-src="contributor.avatar",
              :alt="`${contributor.username}'s avatar`",
              :title="`${contributor.username}'s avatar'`",
              width="100",
              height="100"
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
              :data-src="`/images/avatars/${patron.image}`",
              :alt="`${patron.name}'s avatar`",
              :title="`${patron.name}'s avatar`",
              width="100",
              height="100"
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
          p.name.unlinked-name(
            v-else,
            v-html="patron.company || patron.name"
          )
          p.tier {{ patron.tier }} Supporter
          p.tier-time(
            v-if="patron.since",
            v-html="formatTime(patron.since)"
          )

  section.dark.home-applications
    .content-wrapper
      h2 MTGJSON Powered Applications
      ul
        li(
          v-for="(application, key) in applications",
          :key="key"
        )
          .img-wrap(v-if="application.image")
            img.lazy(
              :data-src="`/images/avatars/${application.image}`",
              :alt="`${application.name}'s logo`",
              :title="`${application.name}'s logo`",
              height="100",
              width="100"
            )
          .img-wrap.no-image(v-else)
            p {{ application.name.substring(0, 1) }}
          a.name.linked-name(
            v-if="application.link",
            :href="application.link",
            v-html="application.name",
            rel="noopener noreferrer",
            target="_blank"
          )
          p.name.unlinked-name(v-else, v-html="application.name")

  section.light.home-footer
    .content-wrapper
      footer
        .home-footer-logo
          img(src="/images/assets/logo-mtgjson.svg" width="200")
          span MTGJSON

        ul
          li.legal Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast LLC. All rights reserved.
          li.legal Third-Party content, links and referrals are provided as is and is subject to their own terms, rights and other legal notices.
          li.legal All other content &copy; 2018 &ndash; Present, Zach Halpern, Eric Lakatos. All rights reserved.

        .home-footer-links
          ol
            li
              a(href="/license/") License
            li
              a(href="mailto:zach@mtgjson.com") Contact Us
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import team from '../static/team.json';
import contributors from '../static/contributors.json';
import patrons from '../static/patrons.json';
import applications from '../static/applications.json';
import { formatTime } from '../helpers';
import { useStore } from '../store';

const store = useStore();
const pageLoaded = ref<boolean>(false);
const version = computed<string>((): string => store.Meta.version);

onMounted(async (): Promise<void> => {
  const lazyImages: HTMLElement[] = Array.from(document.querySelectorAll('img.lazy'));

  if ('IntersectionObserver' in window) {
    let lazyImageObserver: IntersectionObserver = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            let lazyImage: HTMLImageElement = entry.target as HTMLImageElement;
            lazyImage.src = lazyImage.dataset.src;
            delete lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      },
      {
        rootMargin: '200px',
      }
    );

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

  pageLoaded.value = true;
});
</script>

<style lang="scss" scoped>
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

    a {
      color: var(--accent-color);
      text-decoration: none;
    }

    &.light {
      background-color: var(--white-color);
      color: var(--dark-color);

      h2 {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray-2-color);
      }
    }

    &.dark {
      background-color: var(--dark-2-color);
      color: var(--white-color);

      h2 {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--dark-1-color);
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
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    & + .version {
      color: var(--gray-3-color) !important;
      font-weight: 600;
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
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2.5rem;
  }

  h3 {
    font-weight: 600;
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
    color: var(--white-color);
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
        opacity: 0.1;
      }
    }

    &-logo {
      text-align: center;
      margin: 0 auto 1rem;

      img {
        display: initial;
      }
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--accent-color);
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
    background-color: var(--white-color);
    color: var(--dark-color);

    ul {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);

      li {
        background-color: var(--gray-color);
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
    color: var(--white-color);

    &-leads {
      li {
        display: flex;
        justify-content: flex-start;
        margin: 0 0 1rem;

        img {
          border-radius: 50%;
          height: auto;
          max-width: 150px;
          margin-right: 2rem;
        }

        h3 {
          margin-bottom: 0.5rem;
          text-align: left;
          font-weight: 600;
        }

        span {
          display: block;
          text-align: left;
          margin: 0 0 1rem 0;
          color: var(--light-color);
        }

        p {
          text-align: left;
          color: var(--gray-3-color);
        }
      }

      a {
        &:hover {
          h3 {
            text-decoration: underline;
          }
        }
      }

      &-member {
        background-color: var(--dark-1-color);
        border-radius: var(--common-radius);
        padding: 2rem;
        display: flex;

        &-details {
          a {
            float: left;

            & ~ * {
              &::before,
              &::after {
                clear: both;
                content: '';
                display: table;
              }
            }
          }
        }
      }
    }
  }

  &-contributors {
    ul {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 1rem;
      margin-left: 0;

      li {
        a {
          display: block;
          border-radius: 50%;
          background-color: var(--white-color);
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
        background-color: var(--gray-color);
        border-radius: var(--common-radius);
        padding: 2rem;

        a {
          text-decoration: none;
          color: var(--dark-color) !important;
        }

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
          text-align: left;
          color: var(--gray-5-color);
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
              font-weight: 600;
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
          flex: 0 0 100%;
          font-weight: 600;
        }

        .unlinked-name {
          text-decoration: none;
        }

        .tier {
          text-align: center;
          flex: 0 0 100%;
          margin: 0.5rem auto 0.25rem;
          line-height: 1.2em;
          font-weight: 600;
          text-transform: capitalize;

          &,
          &-time {
            color: var(--gray-3-color);
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
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 1rem;

      li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        position: relative;

        .img-wrap {
          background-color: var(--white-color);
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
              font-weight: 600;
              color: var(--dark-color);
            }
          }
        }

        .name {
          flex: 1;
          font-weight: 600;
          text-align: left;
        }
      }
    }
  }

  &-patrons,
  &-contributors,
  &-applications,
  &-contributing {
    padding-top: 0 !important;
  }

  &-footer {
    border-top: 1px solid var(--dark-1-color);
    background-color: var(--dark-2-color);
    color: var(--white-color);

    ol,
    ul {
      margin-left: auto;
      margin-right: auto;

      li {
        margin-top: 1rem;

        &:first-of-type {
          margin-top: 0;
        }

        &.legal {
          font-size: 12px;
          color: var(--gray-5-color);
        }
      }
    }

    &-logo {
      img {
        margin: 0 auto;
        height: 75px;
        width: auto;
      }

      span {
        display: block;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
        font-weight: 1rem;
        font-size: 1.15rem;
      }
    }

    &-links {
      max-width: 360px;
      margin: 0 auto;

      ol {
        display: flex;
        margin-top: 2rem;

        li {
          font-weight: 600;
          margin-top: 0;
          flex: 1;
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
    &-contributors {
      grid-template-columns: repeat(10, 1fr);
    }
  }
}

@media (max-width: 570px) {
  .home {
    &-features,
    &-team,
    &-contributing,
    &-patrons,
    &-applications {
      ul {
        grid-template-columns: 1fr;

        li {
          img {
            margin: 0 auto 1rem;
          }
          h3,
          span,
          p {
            text-align: center;
          }
        }
      }
    }

    &-team {
      &-leads {
        &-member {
          display: block;

          &-details {
            a {
              float: none;
            }
          }

          img {
            margin: 0 auto 1rem auto;
            float: none;
          }

          h3,
          span {
            text-align: center;
          }
        }

        li {
          justify-content: center;
        }
      }
    }

    &-contributors {
      ul {
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

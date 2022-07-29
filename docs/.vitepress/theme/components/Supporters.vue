<template lang="pug">
.supporters
  h2#code-contributors Code Contributors
    a.header-anchor(href="#code-contributors" aria-hidden="true") #
  .supporters-wrap(v-if="contributors")
    ul.contributors-list
      li(v-for="(contributor, key) in contributors", :key="key")
        a(:href="contributor.url", rel="noopener noreferrer", target="_blank") {{ `${contributor.username}'s GitHub profile` }}
          img.lazy(
            :data-src="contributor.avatar",
            :alt="`${contributor.username}'s avatar`",
            :title="`${contributor.username}'s avatar`",
            width="48px",
            height="48px"
          )

  h2#contributing Contributing
    a.header-anchor(href="#contributing" aria-hidden="true") #
  <p>Many others have devoted their time and effort into this project. If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the <a href="https://github.com/mtgjson/mtgjson" target="_blank">MTGJSON Repository</a> or the <a href="https://github.com/mtgjson/mtgjson-website" target="_blank">Documentation Repository</a>.
  <p>If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> (one-time donation) or <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> (recurring donations).</p>
  </p>

  h2#patreon-supporters Patreon Supporters
    a.header-anchor(href="#patreon-supporters" aria-hidden="true") #
  p Without our Patreon supporters we would not be able to keep this site running. They keep the lights on here and we would like to highlight their efforts in supporting this project. MTGJSON does not endorse these supporters or their projects.
  .supporters-wrap(v-if="patrons")
    small(v-html="projectMsg")
    .supporters-grid
      .supporter(
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
        a.linked-name(
          v-if="patron.link",
          :href="patron.link",
          v-html="patron.name",
          rel="noopener noreferrer",
          target="_blank",
        )
        p.unlinked-name(v-else, v-html="patron.name", tabindex="0")
        p.tier {{ patron.tier }} Supporter
        p.tier-time(
          v-if="patron.since",
          v-html="formatTime(patron.since)"
        )

  h2#mtgjson-powered-applications MTGJSON Powered Applications
    a.header-anchor(href="#mtgjson-powered-applications" aria-hidden="true") #
  p MTGJSON has allowed many different projects to serve data to their audiences and we're very proud of what our friends have accomplished. We'd like to highlight them here. MTGJSON does not endorse these supporters or their projects.
  .supporters-wrap(v-if="applications")
    small(v-html="projectMsg")
    .supporters-grid.applications
      .supporter.service(v-for="(application, key) in applications", :key="key")
        .img-wrap(v-if="application.image")
          img.lazy(
            :data-src="'/images/avatars/' + application.image",
            :alt="`${application.name} logo`",
            :title="`${application.name} logo`"
          )
        .img-wrap.no-image(v-else)
          p {{ application.name.substring(0, 1) }}
        a.linked-name(
          v-if="application.link",
          :href="application.link",
          v-html="application.name",
          rel="noopener noreferrer",
          target="_blank",
        )
        p.unlinked-name(v-else, v-html="application.name", tabindex="0")
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { patrons, applications } from '../static/supporters.json';
import contributors from '../static/contributors.json';
import { formatTime } from '../helpers';

const projectMsg: string =
  'Don\'t see your project? Join the <a href="https://mtgjson.com/discord" rel="noopener noreferrer" target="_blank">Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" rel="noopener noreferrer" target="_blank">GitHub</a>. We\'ll be happy to add your work to our list.';

onMounted((): void => {
  const lazyImages: HTMLElement[] = Array.from(document.querySelectorAll('img.lazy'));

  if ('IntersectionObserver' in window) {
    let lazyImageObserver: IntersectionObserver = new IntersectionObserver((entries, observer): void => {
      entries.forEach((entry: IntersectionObserverEntry): void => {
        if (entry.isIntersecting) {
          let lazyImage: HTMLImageElement = entry.target as HTMLImageElement;
          lazyImage.src = lazyImage.dataset.src;
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
      lazyImage.classList.remove('lazy');
      lazyImage.classList.add('not-lazy');
    });
  }
});
</script>

<style lang="scss" scoped>
.supporters {
  &-wrap {
    padding-bottom: 1rem;

    h3 {
      padding-top: 0;
    }

    & > small {
      display: block;
      margin-bottom: 25px;
      color: var(--gray-color);
    }
  }

  .contributors-list {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 20px;
    margin-left: 0;
    margin-bottom: 0;

    li {
      flex: 0;
      list-style: none;

      a {
        display: block;
        border-radius: 50%;
        background-color: var(--light-color);
        overflow: hidden;
        font-size: 0;
        max-width: 48px;
        max-height: 48px;

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

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 1rem;
    margin-bottom: 2rem;

    &.applications {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .supporter {
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
      background-color: var(--blockquote-bg-color);
      border-radius: var(--common-radius);

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
        font-size: 16px;
        color: var(--accent-color);
        display: block;
        margin: 0 auto;
        padding: 0;
        line-height: 1.2rem;
        line-height: 1.2em;
        word-wrap: anywhere;
      }

      .linked-name,
      .unlinked-name {
        text-decoration: underline;
        font-weight: bold;
        flex: 0 0 100%;

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
        font-size: 16px;
        line-height: 1.2em;
        font-weight: bold;
        text-transform: capitalize;

        &,
        &-time {
          color: var(--text-color);
        }

        &-time {
          margin-bottom: 0;
          font-size: 14px;
        }
      }
    }

    .supporter[data-tier='mythic'] {
      .img-wrap {
        height: 125px;
        width: 125px;
        padding: 20px;
      }

      .tier {
        color: var(--orange-color);
      }
    }

    .supporter[data-tier='rare'] {
      .tier {
        color: var(--yellow-color);
      }
    }
  }
}

@media (max-width: 960px) {
  .supporters {
    .contributors-list {
      grid-template-columns: repeat(7, 1fr);
    }

    &-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      &.applications {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }
}

@media (max-width: 800px) {
  .supporters {
    .contributors-list {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}

@media (max-width: 719px) {
  .supporters {
    .contributors-list {
      grid-template-columns: repeat(8, 1fr);
    }
  }
}

@media (max-width: 600px) {
  .supporters {
    .contributors-list {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}

@media (max-width: 400px) {
  .supporters {
    .contributors-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>

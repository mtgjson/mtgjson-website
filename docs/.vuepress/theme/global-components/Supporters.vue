<template lang="pug">
  .supporters
    .supporters-wrap(v-if="contributors")
      h3 Our Contributors
      ul.contributors-list
        li(v-for="(contributor, key) in contributors" :key="key")
          a(:href="contributor.url" rel="noopener noreferrer" target="_blank")
            img(class="lazy" :data-src="contributor.avatar" :alt="`${contributor.username}'s avatar`" :title="`${contributor.username}'s avatar`" width="48px" height="48px")
    h2 Supporters
    .supporters-wrap(v-if="patrons")
      h3 Our Patreon Supporters
      p Without our Patreon supporters we would not be able to keep this site running. They keep the lights on here and we would like to highlight their efforts in supporting this project. MTGJSON does not endorse these supporters and their projects.
      small(v-html="projectMsg")
      .supporters-grid
        .supporter(v-for="({ link, image, name, since, tier, blurb } = patron, key) in patrons" :data-tier="tier")
          .img-wrap(v-if="image")
            img(class="lazy" :data-src="'/images/avatars/' + image" :alt="`${name} logo`" :title="`${name} logo`" width="77px" height="77px")
          .img-wrap.no-image(v-else)
            p {{name.substring(0, 1)}}
          a.linked-name(v-if="link" :href="link" rel="noopener noreferrer" target="_blank")
            h4(v-html="name")
          h4(v-else v-html="name")
          p.tier {{ tier }} Supporter
          p.tier-time(v-if="since" v-html="formatTime(since)")

    //- Not Patrons but services that use MTGJSON
    .supporters-wrap(v-if="services")
      h3 Others Powered by MTGJSON
      p MTGJSON has allowed many different projects to serve data to their audiences and we're very proud of what our friends have accomplished. We'd like to highlight them here. MTGJSON does not endorse these supporters and their projects.
      small(v-html="projectMsg")
      .supporters-grid.services(:data-tier="0")
        .supporter.service(v-for="({link, image, name} = supporter, key) in services" :key="key")
          .img-wrap(v-if="image")
            img(class="lazy" :data-src="'/images/avatars/' + image" :alt="`${name} logo`" :title="`${name} logo`" width="54px" height="54px")
          .img-wrap.no-image(v-else)
            p {{name.substring(0, 1)}}
          a.linked-name(v-if="link" :href="link" rel="noopener noreferrer" target="_blank")
            h4(v-html="name")
          h4(v-else v-html="name")

</template>

<script>
import supporters from '../../src/resources/supporters.json';
import contributors from '../../src/resources/contributors.json';

export default {
  name: 'Supporters',
  data() {
    return {
      contributors,
      patrons: supporters.patrons,
      services: supporters.services,
      projectMsg:
        'Don\'t see your project? Join the <a href="https://mtgjson.com/discord" rel="noopener noreferrer" target="_blank">Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" rel="noopener noreferrer" target="_blank">GitHub</a>. We\'ll be happy to add your work to our list.'
    };
  },
  async mounted() {
    const lazyImages = Array.from(document.querySelectorAll('img.lazy'));

    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(lazyImage => {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Boo, no observer
      lazyImages.forEach(lazyImage => {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy');
        lazyImage.classList.add('not-lazy');
      });
    }
  },
  methods: {
    formatTime(time) {
      const newDate = new Date();
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1; // +1 because arrays are 0

      const sinceDate = time.split('-');
      const sinceYear = Number(sinceDate[0]);
      const sinceMonth = Number(sinceDate[1]);

      const totalMonths = 12 * (year - sinceYear) + (month - sinceMonth) + 1;
      if (totalMonths === 1) {
        return `(1 Month)`;
      }
      return `(${totalMonths} Months)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.supporters {
  &-wrap {
    justify-content: center;

    & > small {
      display: block;
      margin-bottom: 25px;
      color: var(--gray-color);
    }
  }

  .contributors-list {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 20px;
    margin-left: 0;

    li {
      flex: none;
      list-style: none;

      a {
        display: block;
        border-radius: 50%;
        background-color: var(--light-color);
        overflow: hidden;

        img {
          float: left;
          max-width: 48px;
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

    &.services {
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

      h4 {
        flex: 0 0 100%;
        font-size: 16px;
        color: var(--accent-color);
        display: block;
        margin: 0 auto;
        padding: 0;
        line-height: 1.2rem;
      }

      p {
        display: block;
        flex: 0 0 100%;
        font-size: 14px;
        line-height: 1.2em;

        &:first-of-type {
          margin-top: 10px;
        }
      }

      h4,
      p {
        word-wrap: anywhere;
      }

      .linked-name {
        text-decoration: underline;
        flex: 0 0 100%;
      }

      .tier {
        text-align: center;
        flex: 0 0 100%;
        margin: 0 auto;
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
  .supporters-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    &.services {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>

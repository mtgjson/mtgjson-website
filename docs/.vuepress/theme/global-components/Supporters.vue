<template lang="pug">
  .supporters(v-if="supporters")
    .supporters-wrap(v-if="patrons")
      h3 Our Patreon Supporters
      p Without our Patreon supporters we would not be able to keep this site running. They keep the lights on here and we would like to highlight their efforts in supporting this project.
      small(v-html="projectMsg")
      .supporters-grid
        blockquote.supporter(v-for="({ link, image, name, since, tier, blurb } = patron, key) in patrons" :data-tier="tier")
          .supporter-link
            .img-wrap(v-if="image")
              .img-wrap--container
                img(class="lazy" src="" :data-src="'/images/' + image" :alt="link" :title="name")
            a(:href="link" rel="noopener noreferrer" target="_blank")
              h6 {{ name }}
            p.tier {{ tier }} Supporter
            p.tier-time(v-if="since" v-html="formatTime(since)")

    //- Not Patrons but services that use MTGJSON
    .supporters-wrap(v-if="services")
      h3 Others Powered by MTGJSON
      p MTGJSON has allowed many different projects to serve data to their audiences and we're very proud of what our friends have accomplished. We'd like to highlight them here.
      small(v-html="projectMsg")
      .supporters-grid.services(:data-tier="0")
        blockquote.supporter.service(v-for="({link, image, name} = supporter, key) in services")
          .supporter-link(:href="link" rel="noopener noreferrer" target="_blank")
            .img-wrap(v-if="image")
              .img-wrap--container
                img(class="lazy" src="" :data-src="'/images/' + image" :alt="link" :title="name")
            a(:href="link" rel="noopener noreferrer" target="_blank")
              h6 {{ name }}

</template>

<script>
export default {
  name: 'Supporters',
  data() {
    return {
      supporters: require('../../public/resources/supporters.json'),
      projectMsg:
        'Don\'t see your project? Join the <a href="https://discord.gg/74GUQDE" rel="noopener noreferrer" target="_blank">Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" rel="noopener noreferrer" target="_blank">GitHub</a>. We\'ll be happy to add your work to our list.',
    };
  },
  computed: {
    patrons() {
      return this.supporters.patrons;
    },
    services() {
      return this.supporters.services;
    },
  },
  mounted() {
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
    },
  },
};
</script>

<style lang="stylus" scoped>
.supporters {
  &-wrap {
    justify-content: center;

    & > small {
      display: block;
      margin-bottom: 25px;
      color: var(--gray-color);
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
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .supporter {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 0;
      position: relative;
      padding-left: 1rem;
      padding-right: 1rem;
      border-width: 1px;
      border-color: var(--table-bg-color);

      .img-wrap {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 100%;
        margin-bottom: 15px;

        &--container {
          background-color: var(--light-color);
          border-radius: 50%;
          overflow: hidden;
          width: 90px;
          height: 90px;
          padding: 15px;
          display: flex;
          align-items: center;

          img {
            width: 100%;
            height: auto;
            max-height: 100%;
          }
        }
      }

      h6 {
        flex: 0 0 100%;
        font-size: 14px;
        color: var(--text-color);
        display: block;
        margin: 0 auto;
        padding-bottom: 10px;
        line-height: 1.2rem;
      }

      a {
        h6 {
          color: var(--accent-color);
        }
      }

      p {
        display: block;
        flex: 0 0 100%;
        font-size: 14px;
        line-height: 1.2em;
      }

      h6, p {
        word-wrap: anywhere;
      }

      .tier {
        text-align: center;
        flex: 0 0 100%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 1.2em;
        font-weight: bold;
        text-transform: capitalize;

        &, &-time {
          color: var(--text-color);
        }
      }
    }

    .supporter[data-tier='mythic'] {
      .img-wrap {
        &--container {
          height: 125px;
          width: 125px;
          padding: 20px;
        }
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
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}

@media (max-width: 400px) {
  .supporters-grid {
    grid-template-columns: minmax(0, 1fr);

    &.services {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>

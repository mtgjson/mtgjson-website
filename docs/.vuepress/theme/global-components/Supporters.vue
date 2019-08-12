<template lang="pug">
  .supporters(v-if="supporters")
    .supporters-wrap(v-if="patrons")
      h3 Our Patreon Supporters
      p Without our Patreon supporters we would not be able to keep this site running. They keep the lights on here and we would like to highlight their efforts in supporting this project.
      small(v-html="projectMsg")
      // Tier 3
      .supporters-grid(v-if="mythic.length > 0" :data-tier="3")
        blockquote.supporter(v-for="(supporter, key) in mythic")
          a.supporter-link(v-if="supporter.link" :href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}
          span(v-else)
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :title="supporter.name")
            h6 {{ supporter.name }}
          p(v-if="supporter.blurb") {{ supporter.blurb }}
          .tier(v-html="formatTime(supporter.since)")

      // Tier 2
      .supporters-grid(v-if="rare.length > 0" :data-tier="2")
        blockquote.supporter(v-for="(supporter, key) in rare")
          a.supporter-link(v-if="supporter.link" :href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}
          span(v-else)
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :title="supporter.name")
            h6 {{ supporter.name }}
          .tier(v-html="formatTime(supporter.since)")

      // Tier 1
      .supporters-grid(v-if="uncommon.length > 0" :data-tier="1")
        blockquote.supporter(v-for="(supporter, key) in uncommon")
          a.supporter-link(v-if="supporter.link" :href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}
          span(v-else)
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :title="supporter.name")
            h6 {{ supporter.name }}
          .tier(v-html="formatTime(supporter.since)")

    // Not Patrons but services that use MTGJSON
    .supporters-wrap(v-if="services")
      h3 Others Powered by MTGJSON
      p MTGJSON has allowed many different projects to serve data to their audiences and we're very proud of what our friends have accomplished. We'd like to highlight them here.
      small(v-html="projectMsg")
      .supporters-grid.services(:data-tier="0")
        blockquote.supporter.service(v-for="(supporter, key) in services")
          a.supporter-link(:href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              .img-wrap--container
                img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}

</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      supporters: require('../../public/resources/supporters.json'),
      projectMsg:
        'Don\'t see your project? Join the <a href="https://discord.gg/74GUQDE" target="_blank">Discord</a> and let us know. We\'ll be happy to add it to this list.',
    };
  },
  computed: {
    patrons() {
      return this.supporters.patrons;
    },
    mythic() {
      return this.supporters.patrons.mythic;
    },
    rare() {
      return this.supporters.patrons.rare;
    },
    uncommon() {
      return this.supporters.patrons.uncommon;
    },
    services() {
      return this.supporters.services;
    },
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
    margin-bottom: 25px;

    .supporter {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 0;
      position: relative;

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
          }
        }
      }

      h6 {
        flex: 0 0 100%;
        font-size: 14px;
        color: var(--text-color);
        display: block;
        margin: 0 auto;
      }

      a {
        h6 {
          color: var(--accent-color);
        }
      }

      p {
        flex: 0 0 100%;
        margin: 0 auto 15px;
        font-size: 14px;
        line-height: 1.2em;
      }

      h6, p {
        word-wrap: anywhere;
      }

      .tier {
        text-align: center;
        flex: 0 0 100%;
        margin: 15px auto 0;
        font-size: 14px;
        line-height: 1.2em;
        padding: 5px;
        color: var(--text-color);

        &::before {
          padding-right: 5px;
          font-weight: bold;
          display: inline-block;
        }
      }
    }

    &[data-tier='3'] {
      grid-template-columns: repeat(3, minmax(0, 1fr));

      .supporter {
        &:hover {
          border-color: var(--orange-color);
        }

        .img-wrap {
          &--container {
            height: 125px;
            width: 125px;
            padding: 20px;
          }
        }

        .tier {
          color: var(--orange-color);

          &::before {
            content: 'Mythic Supporter';
          }
        }
      }
    }

    &[data-tier='2'] {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      .supporter {
        &:hover {
          border-color: var(--yellow-color);
        }

        .tier {
          color: var(--yellow-color);

          &::before {
            content: 'Rare Supporter';
          }
        }
      }
    }

    &[data-tier='2'], &[data-tier='1'] {

      .supporter {
        .img-wrap {
          &--container {
            height: 100px;
            width: 100px;
          }
        }
      }
    }

    &[data-tier='1'] {
      .supporter {
        .tier {
          &::before {
            content: 'Uncommon Supporter';
          }
        }
      }
    }

    &[data-tier='1'], &[data-tier='0'] {
      .supporter {
        &:hover {
          border-color: var(--accent-color);
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .supporters-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;

    &[data-tier='3'] {
      grid-template-columns: minmax(0, 1fr) !important;
    }
  }
}

@media (max-width: 400px) {
  .supporters-grid {
    grid-template-columns: minmax(0, 1fr) !important;
  }
}
</style>

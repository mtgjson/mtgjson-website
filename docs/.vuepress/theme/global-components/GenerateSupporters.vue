<template lang="pug">
  .supporters(v-if="supporters")
    div(v-if="patrons")
      // h2.patreon-headline Our Patreon Supporters
      // Tier 3
      .supporters-table(v-if="mythic.length > 0")
        .supporter(v-for="(supporter, key) in mythic" :data-tier-size="3")
          a.supporter-link(v-if="supporter.link" :href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}
          span(v-else)
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :title="supporter.name")
            h6 {{ supporter.name }}
          p(v-if="supporter.blurb") {{ supporter.blurb }}
          a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="3" v-html="formatTime(supporter.since)")

      // Tier 2
      .supporters-table(v-if="rare.length > 0")
        .supporter(v-for="(supporter, key) in rare" :data-tier-size="2")
          a.supporter-link(v-if="supporter.link" :href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}
          span(v-else)
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :title="supporter.name")
            h6 {{ supporter.name }}
          a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="2" v-html="formatTime(supporter.since)")

      // Tier 1
      .supporters-table(v-if="uncommon.length > 0")
        .supporter(v-for="(supporter, key) in uncommon" :data-tier-size="1")
          a.supporter-link(v-if="supporter.link" :href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}
          span(v-else)
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :title="supporter.name")
            h6 {{ supporter.name }}
          a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="1" v-html="formatTime(supporter.since)")

    // Not Patrons but services that use MTGJSON
    div(v-if="services")
      h2.patreon-headline Others Powered by MTGJSON
      .supporters-table.services
        .supporter.service(v-for="(supporter, key) in services")
          a.supporter-link(:href="supporter.link" target="_blank")
            .img-wrap(v-if="supporter.image")
              img(:src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
            h6 {{ supporter.name }}

</template>

<script>
export default {
  name: 'GenerateServices',
  data() {
    return {
      supporters: require('../../public/resources/supporters.json'),
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
        return `(1\&nbsp;Month)`;
      }
      return `(${totalMonths}\&nbsp;Months)`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.supporters-table {
  display: flex;
  flex-wrap: wrap;
  border-right-width: 0;
  border-bottom: 0;
  justify-content: center;
  margin-bottom: 30px;

  &.services {
    border-top: 1px solid $tableBorderColor;

    .supporter {
      padding-bottom: 30px;
      flex: 0 0 25%;
    }
  }

  .supporter {
    display: flex;
    flex: 0 0 33.333%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 15px 70px;
    text-align: center;
    box-sizing: border-box;
    background-color: $tableColor;
    border: 1px solid $tableBorderColor;
    // Prevent double borders on boxes
    margin-top: -1px;
    margin-left: -1px;
    position: relative;
    margin-top: -1px;
    margin-left: -1px;

    .img-wrap {
      height: 50px;
      max-width: 100%;
      margin: 0 auto 15px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      img {
        width: auto;
        height: auto;
        max-height: 50px;
        max-width: 100px;
      }
    }


    .supporter-link {
      text-align: center;
      flex: 0 0 100%;
      height: 100%;

      &:link {
        &:hover {
          h6 {
            text-decoration: underline;
          }
        }
      }
    }

    span {
      img {
        border-radius: 50%;
      }
    }

    h6 {
      flex: 0 0 100%;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.2em;
      display: block;
      margin: 0 auto;
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

    &[data-tier-size='0'] {
      flex: 0 0 100%;

      &:hover {
        background: none;

        h6 {
          text-decoration: none;
        }
      }
    }

    &[data-tier-size='3'] {
      flex: 0 0 50%;

      .img-wrap {
        height: 100px;

        img {
          max-height: 100px;
        }
      }
    }

    .tier {
      text-align: center;
      flex: 0 0 100%;
      margin: 0 auto;
      display: none;
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;
      font-size: 14px;
      line-height: 1.2em;
      padding: 5px;

      &:link, &:visited, &:active, &:focus {
        color: $darkColor;
        text-decoration: none;
      }

      &[data-tier] {
        display: block;
        padding-right: 10px;
        background: linear-gradient(135deg, #d8d8d8 0%, #efeded 100%);

        &:only-of-type {
          flex: 1;
        }

        &::before {
          padding: 0 10px;
          font-weight: bold;
          display: inline-block;
        }

        &[data-tier='0'] {
          &::before {
            content: 'Uncommon\00a0Supporters';
          }
        }

        &[data-tier='1'] {
          &::before {
            content: 'Uncommon\00a0Supporter';
          }
        }

        &[data-tier='2'] {
          background: linear-gradient(135deg, #f9d861 0%, #e8d599 100%);

          &::before {
            content: 'Rare\00a0Supporter';
          }
        }

        &[data-tier='3'] {
          background: linear-gradient(135deg, #ef6c2f 0%, #f4a850 100%);

          &:nth-of-type(odd) {
            border-left: 0;
          }

          &::before {
            content: 'Mythic\00a0Supporter';
          }
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .supporters-table {
    &:first-of-type {
      .supporter {
        flex: 0 0 100% !important;
      }
    }

    .supporter {
      flex: 0 0 50% !important;

      &.service {
        flex: 0 0 50% !important;
      }
    }
  }
}

@media screen and (max-width: 570px) {
  .supporters-table {
    .supporter {
      flex: 0 0 100% !important;

      &.service {
        flex: 0 0 50% !important;
      }

      &[data-tier-size='3'] {
        img {
          max-height: 75px;
          max-width: 100px;
        }
      }
    }
  }
}
</style>

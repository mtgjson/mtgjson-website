<template lang="pug">
  .supporters
    h2.patreon-headline(v-if="tiers") Our Patreon Supporters

    // Tier 3
    .supporters-table(v-if="tiers.mythic.length > 0")
      .supporter(v-for="(supporter, key) in tiers.mythic" :data-tier-size="3")
        a(v-if="supporter.link" :href="supporter.link" target="_blank")
          img(v-if="supporter.image", :src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
          h6 {{ supporter.name }}
        h6(v-else) {{ supporter.name }}
        p(v-if="supporter.blurb") {{ supporter.blurb }}
        a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="3" v-html="formatTime(supporter.since)")

    // Tier 2
    .supporters-table(v-if="tiers.rare.length > 0")
      .supporter(v-for="(supporter, key) in tiers.rare" :data-tier-size="2")
        a(v-if="supporter.link" :href="supporter.link" target="_blank")
          img(v-if="supporter.image", :src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
          h6 {{ supporter.name }}
        h6(v-else) {{ supporter.name }}
        a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="2" v-html="formatTime(supporter.since)")

    // Tier 1
    .supporters-table(v-if="tiers.uncommon.length > 0")
      .supporter(v-for="(supporter, key) in tiers.uncommon" :data-tier-size="1")
        a(v-if="supporter.link" :href="supporter.link" target="_blank")
          img(v-if="supporter.image", :src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
          h6 {{ supporter.name }}
        h6(v-else) {{ supporter.name }}
        a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="1" v-html="formatTime(supporter.since)")

    // Tier "0". Users without products but deserve credit on the site but are Tier 1 Patrons
    .supporters-table(v-if="tiers.others.length > 0")
      .supporter(:data-tier-size="0")
        h6 {{ tiers.others }}
        a.tier(href="https://www.patreon.com/MTGJSON" :data-tier="0")

    // Not Patrons but services that use MTGJSON
    h2.patreon-headline Others Powered by MTGJSON
    .supporters-table.services
      .supporter.service(v-for="(supporter, key) in services")
        img(v-if="supporter.image", :src="'/images/' + supporter.image", :alt="supporter.link", :title="supporter.name")
        a(:href="supporter.link" target="_blank")
          h6 {{ supporter.name }}

</template>

<script>
export default {
  name: 'GenerateServices',
  data() {
    return {
      tiers: {
        mythic: [
          {
            name: 'Cardhoarder',
            image: 'cardhoarder.png',
            link: 'https://www.cardhoarder.com/',
            since: '2018-11',
          },
        ],
        rare: [
        ],
        uncommon: [
          {
            name: 'Cockatrice',
            image: 'cockatrice.png',
            link: 'https://cockatrice.github.io',
            since: '2019-04',
          },
        ],
        // List of names, separated by commas
        others: '',
      },
      services: [
        {
          name: 'Aetherhub',
          image: 'aetherhub.png',
          link: 'https://aetherhub.com',
        },
        {
          name: 'Card Castle',
          image: 'cardcastle.svg',
          link: 'https://cardcastle.co',
        },
        {
          name: 'Cardsphere',
          image: 'cardsphere.svg',
          link: 'https://cardsphere.com',
          since: '2019-04',
        },
        {
          name: 'Combo Deck',
          image: 'combodeck.png',
          link: 'http://combodeck.net',
        },
        {
          name: 'Cube Tutor',
          image: 'cubetutor.png',
          link: 'http://cubetutor.com',
        },
        {
          name: 'Dr4ft',
          image: 'dr4ft.png',
          link: 'https://dr4ft.info',
        },
        {
          name: 'Draftalot',
          image: 'draftalot.png',
          link: 'http://draftalot.com/',
        },
        {
          name: 'Draftsim',
          image: 'draftsim.png',
          link: 'https://draftsim.com/',
        },
        {
          name: 'EDHrec',
          image: 'edhrec.png',
          link: 'https://edhrec.com',
        },
        {
          name: 'Magarena',
          image: 'magarena.png',
          link: 'https://github.com/magarena/magarena',
        },
        {
          name: 'Magic Cards Manager',
          image: 'mcm.png',
          link: 'https://www.magiccardsmanager.com',
        },
        {
          name: 'Magic Trade Binder',
          image: 'magic-trade-binder.png',
          link: 'https://www.magictradebinder.com',
        },
        {
          name: 'Magidex',
          image: 'magidex.svg',
          link: 'https://magidex.com',
        },
        {
          name: 'MTG Addict',
          image: 'mtgaddict.png',
          link: 'https://mtgaddict.net',
        },
        {
          name: 'MTG Developers',
          image: 'mtgio.png',
          link: 'https://magicthegathering.io',
        },
        {
          name: 'MTG Set Builder',
          image: 'mtgsetbuilder.png',
          link: 'http://mtgsetbuilder.com',
        },
        {
          name: 'MTG Brewmaster',
          image: 'mtgbrewmaster.png',
          link: 'http://mtgbrewmaster.com',
        },
        {
          name: 'MYPCards',
          image: 'mypcards.png',
          link: 'https://mypcards.com/',
        },
        {
          name: 'Planestrader',
          image: 'planestrader.png',
          link: 'https://planestrader.com/',
        },
        {
          name: 'Scryfall',
          image: 'scryfall.svg',
          link: 'https://scryfall.com',
        },
        {
          name: 'Snapcardster',
          image: 'snapcardster.png',
          link: 'https://snapcardster.com',
        },
        {
          name: 'Stream Decker',
          image: 'streamdecker.png',
          link: 'https://www.streamdecker.com',
        },
        {
          name: 'Tamiyo Discord Bot',
          image: 'tamiyodiscordbot.png',
          link: 'https://mtg.design/tamiyo',
        },
        {
          name: 'TCGPlayer',
          image: 'tcgplayer.png',
          link:
            'https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson',
        },
        {
          name: 'TutorCards',
          image: 'tutorcards.svg',
          link: 'https://tutor.cards',
        },
        {
          name: 'XMage',
          image: 'xmage.png',
          link: 'http://xmage.de',
        },
        {
          name: 'Card Codex',
          image: '',
          link: 'https://cardcodex.com',
        },
        {
          name: 'DeckList.org',
          image: '',
          link: 'https://decklist.org/',
        },
        {
          name: 'DideRobot',
          image: '',
          link: 'https://github.com/Didero/DideRobot',
        },
        {
          name: 'FlavorTexts.com',
          image: '',
          link: 'https://flavortexts.com',
        },
        {
          name: 'Lab Maniac',
          image: '',
          link: 'http://labmaniac.com',
        },
        {
          name: 'Liminal Thoughts',
          image: '',
          link: 'https://brennands.wordpress.com',
        },
        {
          name: 'MagicFetchBot',
          image: '',
          link: 'https://redd.it/55l38e',
        },
        {
          name: 'MTGCardFetcher',
          image: '',
          link: 'https://reddit.com/r/MTGCardFetcher',
        },
        {
          name: 'MTG Lands',
          image: '',
          link: 'http://mtglands.com',
        },
        {
          name: 'MTG On Curve',
          image: '',
          link: 'https://mtgoncurve.com/',
        },
        {
          name: 'MTG Search',
          image: '',
          link: 'https://mtg-search.com',
        },
        {
          name: 'mtg.wtf',
          image: '',
          link: 'https://mtg.wtf',
        },
      ],
    };
  },
  methods: {
    formatTime(time) {
      var totalMonths;
      var subtract;
      const newDate = new Date();
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 2; // +1 because arrays are 0, +1 because we consider each resub as a full month

      const sinceDate = time.split('-');
      const sinceYear = Number(sinceDate[0]);
      const sinceMonth = Number(sinceDate[1]);

      const sameYear = sinceYear === year;
      const sameMonth = sinceMonth === month;

      const earlierMonth = month > sinceMonth;

      // Go away. You're not real.
      if (sameYear && !earlierMonth) {
        return '';
      }
      // First month Patron
      if (sameYear && sameMonth) {
        return `(1\&nbsp;Month)`;
      }
      // Same year Patron
      if (sameYear && earlierMonth) {
        totalMonths = month - sinceMonth;
        return `(${totalMonths}\&nbsp;Months)`;
      // Long term Patron
      } else {
        // First get the trailing and leading months, then calc the total months of all the years with a +1 offset
        // to the Patrons year because we already calculated for that
        totalMonths = 12 - sinceMonth + month + (year - (sinceYear + 1)) * 12;
        return `(${totalMonths}\&nbsp;Months)`;
      }

      // Return nothing if all else fails
      return '';
    },
  },
};
</script>

<style lang="stylus" scoped>
h2 {
  margin-top: 60px;
}

.supporters-table {
  display: flex;
  flex-wrap: wrap;
  border-right-width: 0;
  border-bottom: 0;
  justify-content: center;
  margin-top: 30px;

  &:first-of-type {
    margin-top: 10px;
  }

  &.services {
    border-top: 1px solid #eaecef;

    .supporter {
      border-left-width: 0;
      border-top-width: 0;
      flex: 0 0 25%;
    }
  }

  .supporter {
    display: flex;
    flex: 0 0 33.333%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 15px 60px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #eaecef;
    position: relative;

    &[data-tier-size='0'] {
      flex: 0 0 100%;

      &:hover {
        background: none;

        h6 {
          text-decoration: none;
          cursor: initial;
        }
      }
    }

    &[data-tier-size='3'] {
      flex: 0 0 50%;

      img {
        max-height: 150px;
        max-width: 150px;
        width: auto;
        height: auto;
      }
    }

    &:hover {
      h6 {
        text-decoration: underline;
      }
    }

    img {
      max-height: 75px;
      max-width: 75px;
      width: auto;
      height: auto;
    }

    a {
      text-align: center;
      flex: 0 0 100%;
    }

    h6 {
      flex: 0 0 100%;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.2em;
      display: block;
      margin: 15px auto;
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
      margin: 0 auto;
      display: block;
      display: none;
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;
      font-size: 14px;
      line-height: 1.2em;
      padding: 5px;

      &:link, &:visited, &:active, &:focus {
        color: $textColor;
        text-decoration: none;
      }

      &[data-tier] {
        display: block;

        &:only-of-type {
          flex: 1;
        }

        &::before {
          padding: 0 10px;
          font-weight: bold;
        }

        &[data-tier='3'] {
          background: linear-gradient(135deg, #ef6c2f 0%, #f4a850 100%);

          &:nth-of-type(odd) {
            border-left: 0;
          }

          &::before {
            content: 'Mythic Supporter';
          }
        }

        &[data-tier='2'] {
          background: linear-gradient(135deg, #f9d861 0%, #e8d599 100%);

          &::before {
            content: 'Rare Supporter';
          }
        }

        &[data-tier='0'], &[data-tier='1'] {
          background: linear-gradient(135deg, #d8d8d8 0%, #efeded 100%);

          &::before {
            content: 'Uncommon Supporter';
          }
        }

        &[data-tier='0'] {
          &::before {
            content: 'Uncommon Supporters';
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
    }
  }
}
</style>

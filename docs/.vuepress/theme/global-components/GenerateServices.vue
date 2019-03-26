<template lang="pug">
  .services-table
    .service(v-for="(service, key) in services")
      a(:href="service.link" target="_blank")
        img(v-if="service.image", :src="'/images/' + service.image", :alt="service.link", :title="service.name")
        p {{ service.name }}
</template>

<script>
export default {
  name: 'GenerateServices',
  data() {
    return {
      columns: 4,
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
          name: 'Cardhoarder',
          image: 'cardhoarder.png',
          link: 'https://www.cardhoarder.com/',
        },
        {
          name: 'Cardsphere',
          image: 'cardsphere.svg',
          link: 'https://cardsphere.com',
        },
        {
          name: 'Cockatrice',
          image: 'cockatrice.png',
          link: 'https://cockatrice.github.io',
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
          link: 'https://planestrader.com/'
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
          link: 'https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson',
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
        // {
        //   name: "Bestiaire",
        //   image: "",
        //   link: "http://draft.bestiaire.org/"
        // },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.services-table {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #eaecef;
  border-right-width: 0;
  border-bottom: 0;

  .service {
    display: flex;
    flex: 0 0 25%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    border-right: 1px solid #eaecef;
    transition: 0.25s all;

    &:hover {
      cursor: pointer;
      background-color: #f3f5f7;
      transition: 0.25s all;

      a {
        text-decoration: underline;
      }
    }

    a {
      display: block;
      text-align: center;
      width: 100%;
      height: 100%;

      img {
        width: auto;
        max-height: 65px;
        height: auto;
      }

      p {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.2em;
        word-wrap: anywhere;
        display: block;
      }
    }
  }
}

@media screen and (max-width: 570px) {
  .service {
    flex: 0 0 50% !important;
  }
}
</style>

import axios from 'axios';

export default async ({ Vue }) => {
  await axios
    .get('https://mtgjson.com/json/DeckLists.json')
    .then(async res => await res.data)
    .then(async data => {
      const decks = await data.decks;
      Vue.prototype.$decks = decks;
    })
    .catch(err => {
      console.error(err);
    });

  await axios
    .get('https://mtgjson.com/json/SetList.json')
    .then(async res => await res.data)
    .then(async data => {
      const sets = await data;
      Vue.prototype.$sets = sets;
    })
    .catch(err => {
      console.error(err);
    });

  await axios
    .get(
      'https://raw.githubusercontent.com/mtgjson/mtgjson-website/master/resources/supporters.json'
    )
    .then(async res => await res.data)
    .then(async data => {
      const supporters = await data;
      Vue.prototype.$supporters = supporters;
    })
    .catch(err => {
      console.error(err);
    });
};

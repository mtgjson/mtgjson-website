import axios from 'axios';

export default async ({ Vue }) => {
  axios
    .get('https://mtgjson.com/json/DeckLists.json')
    .then(res => res.data)
    .then(async data => {
      const decks = await data.decks;
      Vue.prototype.$decks = decks;
    })
    .catch(err => {
      console.error(err);
    });

  axios
    .get('https://mtgjson.com/json/SetList.json')
    .then(res => res.data)
    .then(async data => {
      const sets = await data;
      Vue.prototype.$sets = sets;
    })
    .catch(err => {
      console.error(err);
    });
};

import fetch from 'node-fetch';
import landcycle from './scripts/Landcycle';

const isDev = process.env.NODE_ENV === 'development';

export default async ({ Vue }) => {
  // Fetch deck list data
  fetch('https://mtgjson.com/json/DeckLists.json')
    .then(res => res.json())
    .then(res => {
      Vue.prototype.$promisedDecks = res.decks;
    })
    .catch(err => err);

  // Fetch set list data
  fetch('https://mtgjson.com/json/SetList.json')
    .then(res => res.json())
    .then(res => {
      Vue.prototype.$promisedSets = res;
    })
    .catch(err => err);

  // Hydration class to parse linked data in JSON schemas
  Vue.prototype.$landcycle = landcycle;
};

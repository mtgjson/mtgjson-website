import fetch from 'node-fetch';
import landcycle from './scripts/Landcycle';

// Fetch deck list data
const promisedDecks = fetch(
  'https://mtgjson.com/json/DeckLists.json'
)
  .then(res => res.json())
  .then(res => res.decks)
  .catch(err => err);

// Fetch set list data
const promisedSets = fetch(
  'https://mtgjson.com/json/SetList.json'
)
  .then(res => res.json())
  .then(res => res)
  .catch(err => err);

export default async ({
  Vue
}) => {
  // Hydration class to parse linked data in JSON schemas
  Vue.prototype.$landcycle = landcycle;

  // Store our deck json on the instance
  Vue.prototype.$promisedDecks = await promisedDecks

  // Store our set json on the instance
  Vue.prototype.$promisedSets = await promisedSets
};

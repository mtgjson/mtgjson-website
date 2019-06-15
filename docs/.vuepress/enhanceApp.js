import landcycle from './scripts/Landcycle';
import helpers from './scripts/helpers';
import axios from 'axios';

export default async ({ Vue }) => {
  Vue.prototype.$landcycle = landcycle;
  Vue.prototype.$helpers = helpers;

  axios
    .get('https://mtgjson.com/json/DeckLists.json')
    .then(response => {
      Vue.prototype.$decks = helpers.sort('releaseDate:true', response.data.decks);
    })
    .catch(err => {
      console.error(err);
    });

  axios
    .get('https://mtgjson.com/json/SetList.json')
    .then(response => {
      Vue.prototype.$sets = helpers.sort('releaseDate:true', response.data);
    })
    .catch(err => {
      console.error(err);
    });
};

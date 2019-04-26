import landcycle from './scripts/Landcycle';
import sorter from './scripts/Sorter';
import axios from 'axios';

export default async ({ Vue }) => {
  Vue.prototype.$landcycle = landcycle;
  Vue.prototype.$sorter = sorter;

  axios
    .get('https://mtgjson.com/json/DeckLists.json')
    .then(response => {
      Vue.prototype.$decks = sorter('releaseDate:true', response.data.decks);
    })
    .catch(err => {
      console.error(err);
    });

  axios
    .get('https://mtgjson.com/json/SetList.json')
    .then(response => {
      Vue.prototype.$sets = sorter('releaseDate:true', response.data);
    })
    .catch(err => {
      console.error(err);
    });
};

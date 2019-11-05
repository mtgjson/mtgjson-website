import fetch from 'node-fetch';

import landcycle from './scripts/Landcycle';
import prettifyType from './scripts/prettifyType';
import isFutureDate from './scripts/isFutureDate';
import filter from './scripts/filter';
import sort from './scripts/sort';

const helpers = {
  prettifyType,
  isFutureDate,
  filter,
  sort,
};

export default async ({ Vue }) => {
  Vue.prototype.$env = 'https://www.mtgjson.com';
  Vue.prototype.$landcycle = landcycle;
  Vue.prototype.$helpers = helpers;
  // Set these to default in case we fail for some reason
  Vue.prototype.$metadata = {};
  Vue.prototype.$decks = {};
  Vue.prototype.$sets = [];

  fetch('https://mtgjson.com/json/version.json')
    .then(response => response.json())
    .then(response => {
      Vue.prototype.$metadata = response;
    })
    .catch(err => {
      throw Error(err);
    });

  fetch('https://mtgjson.com/json/DeckLists.json')
    .then(response => response.json())
    .then(response => {
      Vue.prototype.$decks = helpers.sort('releaseDate:true', response.decks);
    })
    .catch(err => {
      throw Error(err);
    });

  fetch('https://mtgjson.com/json/SetList.json')
    .then(response => response.json())
    .then(response => {
      Vue.prototype.$sets = helpers.sort('releaseDate:true', response);
    })
    .catch(err => {
      throw Error(err);
    });
};

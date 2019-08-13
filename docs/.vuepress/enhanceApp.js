import landcycle from './scripts/Landcycle';
import helpers from './scripts/helpers';

/**
 * Why all the try/catch-ing you ask?
 * Because when we do pre-commit we want to ensure
 * that generally the build is going to succeed, and in some
 * conditions like no internet or building on a server, certain
 * logic will fail, like fetch calls.
 * So we just gently deal with them and remind ourselves that
 * logging is still important for debugging
 */
export default async ({ Vue }) => {
  Vue.prototype.$landcycle = landcycle;
  Vue.prototype.$helpers = helpers;
  Vue.prototype.$env = 'https://www.mtgjson.com';
  // Set these to default in case we fail for some reason
  Vue.prototype.$metadata = {};
  Vue.prototype.$decks = {};
  Vue.prototype.$sets = [];

  try {
    fetch('https://mtgjson.com/json/version.json')
      .then(response => response.json())
      .then(response => {
        Vue.prototype.$metadata = response;
      })
      .catch(err => {});

    fetch('https://mtgjson.com/json/DeckLists.json')
      .then(response => response.json())
      .then(response => {
        Vue.prototype.$decks = helpers.sort('releaseDate:true', response.decks);
      })
      .catch(err => {});

    fetch('https://mtgjson.com/json/SetList.json')
      .then(response => response.json())
      .then(response => {
        Vue.prototype.$sets = helpers.sort('releaseDate:true', response);
      })
      .catch(err => {});
  } catch (err) {}
};

import Vuex from 'vuex';
import store from './store';

import { jsonMustaches, isFutureDate } from 'js-essentials';
import setStoreState from './scripts/setStoreState';
import prettifyType from './scripts/prettifyType';
import filter from './scripts/filter';
import search from './scripts/search';
import sort from './scripts/sort';

const helpers = {
  setStoreState,
  prettifyType,
  isFutureDate,
  search,
  filter,
  sort,
};

export default ({ Vue }) => {
  Vue.prototype.$env = 'https://www.mtgjson.com';
  Vue.prototype.$landcycle = jsonMustaches;
  Vue.prototype.$helpers = helpers;

  Vue.use(Vuex);
  Vue.mixin({ store: store });
};

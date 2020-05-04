import Vuex from 'vuex';
import { makeStore } from './store';

import jsonMustaches from './scripts/jsonMustaches';
import setStoreState from './scripts/setStoreState';
import isFutureDate from './scripts/isFutureDate';
import prettifyType from './scripts/prettifyType';
import filter from './scripts/filter';
import search from './scripts/search';
import sort from './scripts/sort';

export default async ({ Vue }) => {
  Vue.prototype.$api = 'https://mtgjson.com/api/v5/';
  Vue.prototype.$throttleSpeed = 300;
  Vue.prototype.$helpers = {
    jsonMustaches,
    setStoreState,
    isFutureDate,
    prettifyType,
    search,
    filter,
    sort
  };

  const store = new Vuex.Store(
    makeStore({
      api: Vue.prototype.$api
    })
  );

  Vue.mixin({ store: store });
};

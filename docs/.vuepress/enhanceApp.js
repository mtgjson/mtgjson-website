import Vuex from 'vuex';
import { makeStore } from './store';

import jsonMustaches from './public/scripts/jsonMustaches';
import setStoreState from './public/scripts/setStoreState';
import isFutureDate from './public/scripts/isFutureDate';
import prettifyType from './public/scripts/prettifyType';
import filter from './public/scripts/filter';
import search from './public/scripts/search';
import sort from './public/scripts/sort';

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

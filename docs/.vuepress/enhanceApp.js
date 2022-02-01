import Vuex from 'vuex';
import { makeStore } from './store';

import setStoreState from './src/scripts/setStoreState';
import prettifyType from './src/scripts/prettifyType';
import testStorage from './src/scripts/testStorage';
import formatTime from './src/scripts/formatTime';
import filter from './src/scripts/filter';
import search from './src/scripts/search';
import sort from './src/scripts/sort';

export default ({ Vue }) => {
  Vue.prototype.$api = 'https://mtgjson.com/api/v5/';
  Vue.prototype.$throttleSpeed = 300;
  Vue.prototype.$lazyOffset = 10;
  Vue.prototype.$helpers = {
    setStoreState,
    prettifyType,
    testStorage,
    formatTime,
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

import Vuex from 'vuex';
import { makeStore } from './store';

import jsonMustaches from './src/scripts/jsonMustaches';
import setStoreState from './src/scripts/setStoreState';
// import isFutureDate from './src/scripts/isFutureDate';
import prettifyType from './src/scripts/prettifyType';
import filter from './src/scripts/filter';
import search from './src/scripts/search';
import sort from './src/scripts/sort';

import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';

import axios from 'axios';

export default ({ Vue }) => {
  // Vue.prototype.$meta = {};
  // Vue.prototype.$enums = {};
  Vue.prototype.$api = 'https://mtgjson.com/api/v5/';
  Vue.prototype.$throttleSpeed = 300;
  Vue.prototype.$helpers = {
    jsonMustaches,
    setStoreState,
    // isFutureDate,
    prettifyType,
    search,
    filter,
    sort
  };

  // Sentry error logging
  if(process.env.NODE_ENV !== 'production'){
    console.warn(`"${process.env.NODE_ENV}" server detected. Sentry.io will not be initialized and local logging will be enabled.`);
  } else {
    Sentry.init({
      dsn: 'https://36c628a9d63248659f9ef5f7ff5f673b@o166432.ingest.sentry.io/5295515',
      integrations: [new VueIntegration({Vue, attachProps: true})],
    });
  }

  // try {
  //   const metaPromise = await axios.get(`${Vue.prototype.$api}Meta.json`);
  //   const metaData = await metaPromise.data.data;
  //   Vue.prototype.$meta = metaData;

  //   const enumsPromise = await axios.get(`${Vue.prototype.$api}EnumValues.json`);
  //   const enumsData = await enumsPromise.data.data;
  //   Vue.prototype.$enums = enumsData;
  // } catch ( err ) {
  //   console.log(err);
  // }

  const store = new Vuex.Store(
    makeStore({
      api: Vue.prototype.$api
    })
  );

  Vue.mixin({ store: store });
};

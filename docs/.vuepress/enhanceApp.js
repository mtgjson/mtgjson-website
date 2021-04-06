import Vuex from 'vuex';
import { makeStore } from './store';

import setStoreState from './src/scripts/setStoreState';
import prettifyType from './src/scripts/prettifyType';
import filter from './src/scripts/filter';
import search from './src/scripts/search';
import sort from './src/scripts/sort';

import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import { Integrations as VueTracing } from '@sentry/tracing';

export default ({ Vue }) => {
  Vue.prototype.$api = 'https://mtgjson.com/api/v5/';
  Vue.prototype.$throttleSpeed = 300;
  Vue.prototype.$helpers = {
    setStoreState,
    prettifyType,
    search,
    filter,
    sort
  };

  // Sentry error logging
  Sentry.init({
    Vue,
    environment: process.env.NODE_ENV,
    dsn: 'https://36c628a9d63248659f9ef5f7ff5f673b@o166432.ingest.sentry.io/5295515',
    integrations: [
      new VueIntegration({ Vue, attachProps: true }),
      new VueTracing.BrowserTracing()
    ],
    tracesSampleRate: 1.0,
    tracingOptions: {
      trackComponents: true,
    },
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
  });

  const store = new Vuex.Store(
    makeStore({
      api: Vue.prototype.$api
    })
  );

  Vue.mixin({ store: store });
};

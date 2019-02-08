import Vuex from 'vuex';

export default () => {
  return new Vuex.Store({
    state: {
      currentDocument: {
        headings: [],
        properties: [],
      },
      manifest: [],
    },
    getters: {
      currentDocument: state => state.currentDocument,
      manifest: state => state.manifest,
    },
    actions: {
      'update current document': function(store, data) {
        store.commit('UPDATE_CURRENT_DOCUMENT', data);
      },
      'store manifest': function(store, data) {
        store.commit('STORE_MANIFEST', data);
      },
    },
    mutations: {
      UPDATE_CURRENT_DOCUMENT: function(state, data) {
        Object.keys(data).forEach(key => {
          state.currentDocument[key] = data[key];
        });
      },
      STORE_MANIFEST: function(state, data) {
        state.manifest = data;
      },
    },
  });
};

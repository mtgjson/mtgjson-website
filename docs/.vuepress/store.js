import Vue from 'vue';
import Vuex from 'vuex';
import fetch from 'node-fetch';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    throttleSpeed: 300,
    metadata: {},
    decks: [],
    sets: [],
  },
  getters: {
    throttleSpeed: state => state.throttleSpeed,
    metadata: state => state.metadata,
    decks: state => state.decks,
    sets: state => state.sets,
  },
  actions: {
    UPDATE_METADATA: async ({ commit }) => {
      try {
        const awaited = await fetch('https://mtgjson.com/files/version.json');
        const promised = await awaited.json();

        commit('SET_METADATA', promised);
      } catch (err) {
        console.error(err);
      }
    },
    UPDATE_DECKS: async ({ commit }) => {
      try {
        const awaited = await fetch('https://mtgjson.com/files/DeckLists.json');
        const promised = await awaited.json();

        commit('SET_DECKS', promised);
      } catch (err) {
        console.error(err);
      }
    },
    UPDATE_SETS: async ({ commit }) => {
      try {
        const awaited = await fetch('https://mtgjson.com/files/SetList.json');
        const promised = await awaited.json();

        commit('SET_SETS', promised);
      } catch (err) {
        console.error(err);
      }
    }
  },
  mutations: {
    SET_METADATA: (state, data) => {
      state.metadata = data;
    },
    SET_DECKS: (state, data) => {
      state.decks = data.decks;
    },
    SET_SETS: (state, data) => {
      state.sets = data;
    },
  },
});

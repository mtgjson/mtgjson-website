import Vue from 'vue';
import Vuex from 'vuex';
import fetch from 'node-fetch';

const api = 'https://mtgjson.com/api/v5/';

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
        const awaited = await fetch(api + 'Meta.json');
        const promised = await awaited.json();
        const { data } = promised;

        commit('SET_METADATA', data);
      } catch (err) {
        commit('SET_METADATA', {});
      }
    },
    UPDATE_DECKS: async ({ commit }) => {
      try {
        const awaited = await fetch(api + 'DeckLists.json');
        const promised = await awaited.json();
        const { data } = promised;

        commit('SET_DECKS', data);
      } catch (err) {
        commit('SET_DECKS', []);
      }
    },
    UPDATE_SETS: async ({ commit }) => {
      try {
        const awaited = await fetch(api + 'SetList.json');
        const promised = await awaited.json();
        const { data } = promised;

        commit('SET_SETS', data);
      } catch (err) {
        commit('SET_DECKS', []);
      }
    }
  },
  mutations: {
    SET_METADATA: (state, data) => {
      state.metadata = data;
    },
    SET_DECKS: (state, data) => {
      state.decks = data;
    },
    SET_SETS: (state, data) => {
      state.sets = data;
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import fetch from 'node-fetch';

const api = 'https://mtgjson.com/api/v5/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // throttleSpeed: 300,
    Meta: {},
    DeckList: [],
    SetList: [],
    EnumValues: [],
  },
  getters: {
    // throttleSpeed: state => state.throttleSpeed,
    Meta: state => state.Meta,
    DeckList: state => state.DeckList,
    SetList: state => state.SetList,
    EnumValues: state => state.EnumValues
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
        const awaited = await fetch(api + 'DeckList.json');
        const promised = await awaited.json();
        const { data } = promised;
        // BC
        const decks = data.decks || data;

        commit('SET_DECKS', decks);
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
        commit('SET_SETS', []);
      }
    },
    UPDATE_VALUES: async ({ commit }) => {
      try {
        const awaited = await fetch(api + 'EnumValues.json');
        const promised = await awaited.json();
        const { data } = promised;

        commit('SET_VALUES', data);
      } catch (err) {
        commit('SET_VALUES', []);
      }
    }
  },
  mutations: {
    SET_METADATA: (state, data) => {
      state.Meta = data;
    },
    SET_DECKS: (state, data) => {
      state.DeckList = data;
    },
    SET_SETS: (state, data) => {
      state.SetList = data;
    },
    SET_VALUES: (state, data) => {
      state.EnumValues = data;
    },
  },
});

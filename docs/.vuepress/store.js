import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = 'https://mtgjson.com/api/v5/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // throttleSpeed: 300,
    Meta: {},
    DeckList: [],
    SetList: [],
    EnumValues: []
  },
  getters: {
    // throttleSpeed: state => state.throttleSpeed,
    Meta: state => state.Meta,
    DeckList: state => state.DeckList,
    SetList: state => state.SetList,
    EnumValues: state => state.EnumValues
  },
  actions: {
    FETCH_DATA: async ({ commit }, fileName) => {
      try {
        const promised = await axios.get(`${api}${fileName}.json`);
        const { data } = await promised.data;

        commit('SET_DATA', [fileName, data]);
      } catch (err) {
        commit('SET_DATA', [fileName, {}]);
      }
    }
  },
  mutations: {
    SET_DATA: (state, [key, data]) => {
      state[key] = data;
    }
  }
});

import { createStore } from 'vuex';
import axios from 'axios';

const api = 'https://mtgjson.com/api/v5/';

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  Meta: {},
  DeckList: [],
  SetList: [],
  EnumValues: [],
  ThemeColor: 'light'
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  SET_DATA: (state, [key, data]) => {
    state[key] = data;
  },
  SET_THEME: (state, themeColor) => {
    state.ThemeColor = themeColor
  }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  FETCH_DATA: async ({ commit }, fileName) => {
    try {
      const promised = await axios.get(`${api}${fileName}.json`);
      const { data } = await promised.data;

      commit('SET_DATA', [fileName, data]);
    } catch (err) {
      console.error(`store.js // Failed to fetch data for ${fileName}.`);
    }
  },
  SET_THEME_COLOR: ({commit}, themeColor) => {
    commit('SET_THEME', themeColor)
  }
};

// getters are functions.
const getters = {
  Meta: state => state.Meta,
  DeckList: state => state.DeckList,
  SetList: state => state.SetList,
  EnumValues: state => state.EnumValues,
  ThemeColor: state => state.ThemeColor
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
});

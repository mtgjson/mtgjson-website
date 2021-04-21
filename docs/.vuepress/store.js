import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const makeStore = ({ api }) => {
  return {
    state: {
      Meta: {},
      DeckList: [],
      SetList: [],
      EnumValues: [],
      Noop: [],
      ThemeColor: 'light'
    },
    getters: {
      Meta: state => state.Meta,
      DeckList: state => state.DeckList,
      SetList: state => state.SetList,
      EnumValues: state => state.EnumValues,
      Noop: state => state.Noop,
      ThemeColor: state => state.ThemeColor
    },
    actions: {
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
    },
    mutations: {
      SET_DATA: (state, [key, data]) => {
        state[key] = data;
      },
      SET_THEME: (state, themeColor) => {
        state.ThemeColor = themeColor
      }
    },
  };
};

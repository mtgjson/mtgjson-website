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
      ThemeColor: 'dark'
    },
    getters: {
      Meta: state => state.Meta,
      DeckList: state => state.DeckList,
      SetList: state => state.SetList,
      EnumValues: state => state.EnumValues,
      ThemeColor: state => state.ThemeColor

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

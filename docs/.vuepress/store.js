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
      EnumValues: []
    },
    getters: {
      Meta: state => state.Meta,
      DeckList: state => state.DeckList,
      SetList: state => state.SetList,
      EnumValues: state => state.EnumValues
    },
    mutations: {
      SET_DATA: (state, [key, data]) => {
        state[key] = data;
      }
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
    }
  };
};

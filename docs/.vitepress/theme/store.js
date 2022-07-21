import { defineStore } from 'pinia';
import axios from 'axios';

const api = 'https://mtgjson.com/api/v5/';

export const useStore = defineStore('global', {
  state: () => ({
    Meta: {},
    DeckList: [],
    SetList: [],
    EnumValues: [],
    ThemeColor: 'light',
  }),
  actions: {
    async fetchFromApi(fileName) {
      try {
        const promised = await axios.get(`${api}${fileName}.json`);
        const { data } = await promised.data;

        this[fileName] = data;
      } catch (err) {
        console.error(err);
      }
    },
    setTheme(themeColor) {
      this.ThemeColor = themeColor;
    },
  },
});

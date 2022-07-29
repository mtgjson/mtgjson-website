import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';
import type { IStoreRootState } from './types';

const api: string = 'https://mtgjson.com/api/v5/';

export const useStore = defineStore({
  id: 'global',
  state: () =>
    ({
      Meta: {},
      DeckList: [],
      SetList: [],
      EnumValues: [],
      ThemeColor: 'light',
    } as IStoreRootState),
  actions: {
    async fetchFromApi(fileName: string): Promise<void> {
      try {
        const promised: AxiosResponse<any> = await axios.get(`${api}${fileName}.json`);
        const { data } = await promised.data;

        this[fileName] = data;
      } catch (err) {
        console.error(err);
      }
    },
    setTheme(themeColor: string) {
      this.ThemeColor = themeColor;
    },
  },
});

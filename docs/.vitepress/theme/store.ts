import { defineStore } from 'pinia';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { TStoreRootState } from './types';

const api: string = 'https://mtgjson.com/api/v5/';

export const useStore = defineStore({
  id: 'global',
  state: () =>
    ({
      Meta: {},
      DeckList: [],
      SetList: [],
      EnumValues: {},
    } as TStoreRootState),
  actions: {
    async fetchJSON(fileName: string): Promise<void> {
      try {
        const promised: AxiosResponse<any> = await axios.get(`${api}${fileName}.json`);
        const { data } = await promised.data;

        this[fileName] = data;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

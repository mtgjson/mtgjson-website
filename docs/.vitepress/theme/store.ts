import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';
import type { TStoreRootState } from './types';

const api: string = 'https://mtgjson.com/api/v5/';

export const useStore = defineStore({
  id: 'global',
  state: () =>
    ({
      SidebarOpen: false,
      Meta: {},
      DeckList: [],
      SetList: [],
      EnumValues: {},
      ThemeColor: 'light',
    } as TStoreRootState),
  actions: {
    updateSidebar(): void {
      this.SidebarOpen = !this.SidebarOpen;
    },
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

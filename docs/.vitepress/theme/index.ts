import DefaultTheme from 'vitepress/theme';

import NotFound from './layouts/NotFound.vue';
import Layout from './layouts/Layout.vue';

import DownloadList from './components/DownloadList.vue';
import DownloadNativeSelect from './components/DownloadNativeSelect.vue';
import DownloadSorter from './components/DownloadSorter.vue';
import ExampleField from './components/ExampleField.vue';
import Home from './components/Home.vue';

import { onMounted } from 'vue';
import { createPinia } from "pinia";
import { useStore } from './store';

import './styles/theme.scss';

export default {
  ...DefaultTheme,
  NotFound,
  Layout,

  enhanceApp(ctx: any): void {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
    ctx.app.component('DownloadList', DownloadList);
    ctx.app.component('DownloadNativeSelect', DownloadNativeSelect);
    ctx.app.component('DownloadSorter', DownloadSorter);
    ctx.app.component('ExampleField', ExampleField);
    ctx.app.component('Home', Home);

    ctx.app.use(createPinia());
  },

  setup(): void {
    const store = useStore();

    onMounted(async (): Promise<void> => {
      if (Object.keys(store.EnumValues).length === 0) {
        await store.fetchFromApi('EnumValues');
      }

      if (Object.keys(store.Meta).length === 0) {
        await store.fetchFromApi('Meta');
      }
    });
  }
}

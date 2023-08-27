import DefaultTheme from 'vitepress/theme';

import Layout from './layouts/Layout.vue';

import DownloadList from './components/DownloadList.vue';
import DownloadNativeSelect from './components/DownloadNativeSelect.vue';
import DownloadSorter from './components/DownloadSorter.vue';
import ExampleField from './components/ExampleField.vue';
import ExampleType from './components/ExampleType.vue';
import Home from './components/Home.vue';

import { createPinia } from 'pinia';

import './styles/theme.scss';

export default {
  ...DefaultTheme,
  Layout,

  enhanceApp(ctx: any): void {
    // Extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // Register global components
    ctx.app.component('DownloadList', DownloadList);
    ctx.app.component('DownloadNativeSelect', DownloadNativeSelect);
    ctx.app.component('DownloadSorter', DownloadSorter);
    ctx.app.component('ExampleField', ExampleField);
    ctx.app.component('ExampleType', ExampleType);
    ctx.app.component('Home', Home);

    ctx.app.use(createPinia());
  }
};

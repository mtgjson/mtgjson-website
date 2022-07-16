import DefaultTheme from 'vitepress/theme';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/404.vue';

import store from './store';

// Global components to be injected in markdown files
import DownloadList from './global-components/DownloadList.vue';
import DownloadNativeSelect from './global-components/DownloadNativeSelect.vue';
import DownloadSorter from './global-components/DownloadSorter.vue';
import ExampleField from './global-components/ExampleField.vue';
import PropertyToggler from './global-components/PropertyToggler.vue';
import Supporters from './global-components/Supporters.vue';

export default {
  ...DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    app.component('DownloadList', DownloadList);
    app.component('DownloadNativeSelect', DownloadNativeSelect);
    app.component('DownloadSorter', DownloadSorter);
    app.component('ExampleField', ExampleField);
    app.component('PropertyToggler', PropertyToggler);
    app.component('Supporters', Supporters);

    app.use(store);
  }
}

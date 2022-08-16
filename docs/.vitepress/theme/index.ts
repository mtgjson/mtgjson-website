import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

import { createPinia } from "pinia";

// Global components to be injected in markdown files
import DownloadList from './components/DownloadList.vue';
import DownloadNativeSelect from './components/DownloadNativeSelect.vue';
import DownloadSorter from './components/DownloadSorter.vue';
import ExampleField from './components/ExampleField.vue';
import ModelType from './components/ModelType.vue';
import PropertyToggler from './components/PropertyToggler.vue';
import Supporters from './components/Supporters.vue';

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // Register global components here to use in Markdown files
    app.component('DownloadList', DownloadList);
    app.component('DownloadNativeSelect', DownloadNativeSelect);
    app.component('DownloadSorter', DownloadSorter);
    app.component('ExampleField', ExampleField);
    app.component('ModelType', ModelType);
    app.component('PropertyToggler', PropertyToggler);
    app.component('Supporters', Supporters);

    app.use(createPinia());
  },
};

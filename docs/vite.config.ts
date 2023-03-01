import { defineConfig } from 'vite';
const path = require('path');

export default defineConfig({
  resolve: {
    alias: {
      './VPNavBarTitle.vue': path.resolve(__dirname, './.vitepress/theme/components/NavHeader.vue'),
      './VPNavBarSearch.vue': path.resolve(__dirname, './.vitepress/theme/components/Searchbar.vue')
    },
  },
});

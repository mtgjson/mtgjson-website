import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      './VPNavBarTitle.vue': path.resolve(__dirname, './.vitepress/theme/components/NavHeader.vue')
    },
  },
});

import { defineConfig } from 'vitepress';
import vue from 'vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader()]
})

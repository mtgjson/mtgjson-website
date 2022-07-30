<template lang="pug">
.theme-switcher
  .vue-toggler-plugin.theme-toggle
    Toggle(v-model="toggleValue" @change="switchTheme")
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Toggle from '@vueform/toggle';
import { useStore } from '../store.js';

const store = useStore();

const darkTheme: string = 'dark';
const lightTheme: string = 'light';

const toggleValue = ref<boolean>(false);
const hasStorageCapabilities = ref<boolean>(false);
const activeTheme = ref<string>(darkTheme);

onMounted((): void => {
  let savedTheme: string | undefined = undefined;

  hasStorageCapabilities.value = !!(window.localStorage && window.localStorage.setItem);

  // Attempt to retrieve localStorage state
  if (hasStorageCapabilities.value) {
    const savedTheme: string = window.localStorage.getItem('theme');

    if (savedTheme) {
      toggleValue.value = savedTheme === lightTheme;
    }
  }

  activeTheme.value = savedTheme || activeTheme.value;

  switchTheme();
});

const switchTheme = (): void => {
  const oldLink: HTMLElement = document.querySelector("link[rel*='icon']");
  const newTheme: string = toggleValue.value === true ? 'light' : 'dark';

  let link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = `/favicon-${newTheme}.ico`;
  // Don't clog up the <head> with cascade
  oldLink.remove();
  // Set state on body
  document.body.classList.remove(activeTheme.value);
  document.body.classList.add(newTheme);
  // Add new favicon
  document.getElementsByTagName('head')[0].appendChild(link);
  // Store state in localStorage
  if (hasStorageCapabilities.value) {
    window.localStorage.setItem('theme', newTheme);
  }

  store.setTheme(newTheme);
  activeTheme.value = newTheme;
};
</script>

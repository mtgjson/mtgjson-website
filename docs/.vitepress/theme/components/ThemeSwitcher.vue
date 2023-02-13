<template lang="pug">
.theme-switcher
  DataToggler(
    :callback="switchTheme",
    :class="'theme-toggler'",
    :checked="checked"
  )
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataToggler from './DataToggler.vue';
import { useStore } from '../store.js';

const store = useStore();

const darkTheme: string = 'dark';
const lightTheme: string = 'light';

const hasStorageCapabilities = ref<boolean>(false);
const activeTheme = ref<string>(darkTheme);
const checked = ref<boolean>(false);

onMounted((): void => {
  switchTheme(null, true);
});

const switchTheme = (value?: boolean, onLoad?: boolean): void => {
  let savedTheme: string | undefined = undefined;
  let newTheme: string | undefined = undefined;

  hasStorageCapabilities.value = !!(window.localStorage && window.localStorage.setItem);

  // Value retrieved from storage
  if (hasStorageCapabilities.value && onLoad === true) {
    savedTheme = window.localStorage.getItem('theme');

    if (savedTheme === lightTheme) {
      newTheme = lightTheme;
      checked.value = true;
    } else {
      newTheme = darkTheme;
    }
  } else {
    // Value passed from toggling
    if (value === true) {
      newTheme = lightTheme;
    } else if (value === false) {
      newTheme = darkTheme;
    }
  }

  // Set state on body
  document.body.classList.remove(lightTheme, darkTheme);
  document.body.classList.add(newTheme);

  // Store state in localStorage
  if (hasStorageCapabilities.value) {
    window.localStorage.setItem('theme', newTheme);
  }

  store.setTheme(newTheme);
  activeTheme.value = newTheme;
};
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  justify-content: flex-end;
}
</style>

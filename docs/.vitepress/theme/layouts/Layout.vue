<template lang="pug">
.theme-container(:class="pageClasses")
  .doc(v-if="!isHome")
    Navbar(@toggle-sidebar="toggleSidebar")

    Sidebar(:items="sidebarItems", @toggle-sidebar="toggleSidebar")

    Page

  .home(v-else)
    Home
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useData } from 'vitepress';
import { useStore } from '../store.js';
import Navbar from '../components/Navbar.vue';
import Page from '../components/Page.vue';
import Home from '../components/Home.vue';
import Sidebar from '../components/Sidebar.vue';
import type { TSidebarItem } from '../types';

const { theme, frontmatter } = useData();
const store = useStore();
const isSidebarOpen = ref<boolean>(false);
const isHome = computed<boolean>(() => frontmatter.value.home);
const sidebarItems: TSidebarItem[] = theme.value.sidebar;

const pageClasses = computed((): object[] => {
  return [
    {
      'sidebar-open': isSidebarOpen.value,
    },
  ];
});

const toggleSidebar = (): void => {
  isSidebarOpen.value = isSidebarOpen.value !== true;
};

onMounted(async (): Promise<void> => {
  if (Object.keys(store.EnumValues).length === 0) {
    await store.fetchFromApi('EnumValues');
  }
});
</script>

<style src="../styles/theme.scss" lang="scss"></style>

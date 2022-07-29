<template lang="pug">
.theme-container(:class="pageClasses")
  Navbar(:isHome="isHome" @toggle-sidebar="toggleSidebar")

  Sidebar(v-if="!isHome" :items="sidebarItems", @toggle-sidebar="toggleSidebar")

  Home(v-if="isHome")
  Page(v-else)
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import Navbar from '../components/Navbar.vue';
import Page from '../components/Page.vue';
import Home from '../components/Home.vue';
import Sidebar from '../components/Sidebar.vue';
import type { ISidebarItem } from '../types';

const { theme, frontmatter } = useData();
const isSidebarOpen = ref<boolean>(false);
const isHome = computed<boolean>(() => frontmatter.value.layout === 'home');
const sidebarItems: ISidebarItem[] = theme.value.sidebar;

const pageClasses = computed((): object[] => {
  return [
    {
      'sidebar-open': isSidebarOpen.value
    },
  ];
});

const toggleSidebar = (): void => {
  isSidebarOpen.value = isSidebarOpen.value !== true;
};
</script>

<style src="../styles/theme.scss" lang="scss"></style>
<style lang="scss">
@media (max-width: 719px) {
  .theme-container {
    &.sidebar-open {
      .sidebar {
        transform: translateX(0);
      }
    }
  }
}
</style>

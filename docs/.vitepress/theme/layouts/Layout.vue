<template lang="pug">
.theme-container(:class="pageClasses")
  Navbar(@toggle-sidebar="toggleSidebar")

  Sidebar(:items="sidebarItems", @toggle-sidebar="toggleSidebar")

  Page
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import Navbar from '../components/Navbar.vue';
import Page from '../components/Page.vue';
import Sidebar from '../components/Sidebar.vue';
import type { ISidebarItem } from '../@types';

const { theme } = useData();
const isSidebarOpen = ref<boolean>(false);
const shouldShowSidebar = ref<boolean>(theme.value.sidebar.length > 0);
const sidebarItems: ISidebarItem[] = theme.value.sidebar;

const pageClasses = computed((): object[] => {
  return [
    {
      'sidebar-open': isSidebarOpen.value,
      'no-sidebar': !shouldShowSidebar.value,
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

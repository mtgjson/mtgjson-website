<template lang="pug">
.theme-container(:class="pageClasses")
  Navbar(@toggle-sidebar="toggleSidebar")

  Sidebar(:items="sidebarItems", @toggle-sidebar="toggleSidebar")

  Page
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Page from "../components/Page.vue";
import Sidebar from "../components/Sidebar.vue";

import { ref } from 'vue'
import { useData } from "vitepress";

const { theme } = useData();

const isSidebarOpen = ref(false);

const shouldShowSidebar = ref(theme.value.sidebar.length > 0);

const sidebarItems = theme.value.sidebar;

const pageClasses = () => {
  return [
    {
      "sidebar-open": isSidebarOpen.value,
      "no-sidebar": !shouldShowSidebar.value,
    },
  ];
};

const toggleSidebar = (to) => {
  isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
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

<template lang="pug">
header.navbar
  .navbar-options
    SidebarButton.desktop-hide(@toggle-sidebar="$emit('toggle-sidebar')")
    NavMeta.desktop-hide(:width="`70px`")
    ThemeSwitcher
</template>

<script setup lang='ts'>
import SidebarButton from './SidebarButton.vue';
import NavMeta from './NavMeta.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
</script>

<style lang="scss">
.navbar {
  display: flex;
  position: relative;
  z-index: 9;
  height: var(--navbar-height);
  align-items: center;
  padding: 0 2rem;
  margin-left: var(--sidebar-width);
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--bg-border-color);

  .nav-logo-link {
    text-decoration: none;
  }

  &-options {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

@media (max-width: 719px) {
  .navbar {
    left: 0;
    border-bottom: 1px solid var(--bg-border-color);
    margin-left: 0;

    &-options {
      display: flex;
      justify-content: space-between;
      max-width: var(--content-width);
    }

    .sidebar-button {
      left: -0.5rem;
    }
  }
}
</style>

<template lang="pug">
ul.sidebar-links
  li(v-for="(item, i) in items", :key="i")
    SidebarGroup(v-if="item.items", :item="item")
    SidebarLink(v-else, :item="item")
</template>

<script setup lang="ts">
import SidebarGroup from './SidebarGroup.vue';
import SidebarLink from './SidebarLink.vue';
import type { TSidebarItem } from '../types';

type Props = {
  items: TSidebarItem[];
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
.sidebar-group-items {
  li {
    .sidebar-link {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 7px;
        background-color: var(--text-color);
        border-radius: 50%;
        height: 5px;
        width: 5px;
      }

      &.active {
        &::before {
          border-color: var(--accent-color);
          background-color: var(--accent-color);
        }
      }
    }
  }
}
</style>

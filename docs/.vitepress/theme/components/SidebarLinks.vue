<template lang="pug">
ul.sidebar-links
  li(v-for="(item, i) in items", :key="i")
    SidebarGroup(v-if="item.items", :item="item")
    SidebarLink(v-else, :item="item")
</template>

<script setup>
import { defineProps } from "vue";

import SidebarGroup from "./SidebarGroup.vue";
import SidebarLink from "./SidebarLink.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.sidebar-group-items {
  li {
    .sidebar-link {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 7px;
        border: 1px solid var(--text-color);
        border-radius: 50%;
        height: 4px;
        width: 4px;
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
